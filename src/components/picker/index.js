import React from 'react'
import classNames from 'classnames'
import Flex from '../flex'
import Scroller from './scroller'

let FlexItem = Flex.FlexItem;
import './scroller.css'

const noop = ()=>{}

var Picker = React.createClass({
  getInitialState(){
    let { value, data } = this.props;

    if(!Array.isArray(value)) value = [value];
    if(!Array.isArray(data[0])) data = [data];

    this.scrollers = [];
    window.__scrollers = this.scrollers;
    this.selectedValue = [];
    this.isFirstInit = true;
    return {
      uuid: Math.random().toString(36).substring(3, 8),
    }
  },

  componentDidMount(){
    var value = toArray(this.props.value);
    this.selectedValue = value;
    this.renderScroller('', 0, value[0]);
    this.isFirstInit = false;
  },

  componentDidUpdate(){
    var value = toArray(this.props.value);
    this.selectedValue = value;
    this.renderScroller('', 0, value[0]);
  },

  renderScroller(preValue, index, defaultValue){
    let { data, columns, itemClass, value } = this.props;
    data = toArray(data, true);
    value = toArray(value);
    let isChain = data.length === 1 && columns > 0;

    columns = columns || data.length;
    let isMult = columns > 1;

    if(index === columns) return;

    let currList, currValue;

    if(isChain){
      currList = index === 0 ? data[0].filter(v=>!v.parent) : data[0].filter(v=>v.parent == preValue);
      currValue = defaultValue || currList[0].value;
    }else{
      currList = data[index];
      currValue = defaultValue || currList[0];
    }

    let update = !isChain || (isChain && index == columns-1);
    this.scrollers[index] && this.scrollers[index].destroy();
    this.scrollers[index] = new Scroller('#'+this.getId(index), {
      data: currList,
      defaultValue: currValue,
      itemClass: itemClass,
      onSelect:v => {
        this.setSelectedValue(v, index, isMult, update);
        isChain && this.renderScroller(v, index+1)
      }
    })
    this.setSelectedValue(currValue, index, isMult, update);
    defaultValue = defaultValue && value[index+1];
    this.renderScroller(currValue, index+1, defaultValue)
  },

  renderItems(){
    let { uuid } = this.state, t=[];
    let { columns, columnWidth, data } = this.props;
    data = toArray(data, true);
    const count = columns || data.length;

    for(let i = 0; i< count; i++){
      t.push(
        <FlexItem  key={ i }>
          <div className="mt-picker-item" id={this.getId(i)}></div>
        </FlexItem>
      )
    }
    return t;
  },

  getId(i){
    return `mt-picker-${this.state.uuid}-${i}`;
  },

  setSelectedValue(v, index, isMult, isUpdate){
    this.selectedValue[index] = v;
    if(isUpdate && !this.isFirstInit){
      let res = isMult ? this.selectedValue : this.selectedValue[0];
      this.props.onChange && this.props.onChange(res);
      console.log(res);
    }
  },

  setValue(value){
    value = toArray(value);
    this.selectedValue = value;
    this.renderScroller('', 0, value[0]);
  },

  render(){
    let {
      columnWidth, className, children, ...others
    } = this.props

    return(
      <div className="mt-picker">
        <Flex>
          { this.renderItems() }
        </Flex>
      </div>
    )
  }
})

Picker.propTypes = {
  data: React.PropTypes.array.isRequired,
  value: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]),
  columns: React.PropTypes.number,
  columnWidth: React.PropTypes.array,
  onChange: React.PropTypes.func,
};

Picker.defaultProps = {
  data: [],
  value: [],
  columns: 0,
  itemClass: 'scroller-item',
  columnWidth:[],
  onChange: noop,
};

export default Picker


function toArray(d, inner){
  if(!inner){
    return Array.isArray(d) ? d : [d];
  }else{
    return Array.isArray(d[0]) ? d : [d];
  }

}
