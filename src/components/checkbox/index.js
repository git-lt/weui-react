import React from 'react'
import classNames from 'classnames'
import './index.less'

const noop = ()=>{};

var Checkbox = React.createClass({
  getInitialState(){
    return {
      isRadio: this.props.type === 'radio'
    }
  },

  uuid(){
    return 'ui-chk-'+Math.random().toString(16).substr(2).slice(-5)+(new Date()).getTime().toString(16).slice(9);
  },

  changeEv(e){
    // console.log(e.target.checked)
    // console.log(e.target.value)
  },

  clickEv(e, data){
    // console.log(data.disabled)
    // 如果是checkbox 达到最大限制，则不能再选
    const maxLimit = !this.state.isRadio && !data.checked && !!data.max && (data.max === this.props.checkedItems.length);
    !data.disabled && !maxLimit && this.props.onClick(data.value, data);
  },

  renderIpt(options){
    const {
      position, type, name, id, value, checked,
      disabled, others, className
    } = options;

    const pos = position === 'right' ? 'ft' : 'hd';

    let opt = { type, name, className, value, id, checked, disabled }

    return (
      <div className={ `weui-cell__${pos}` }>
          <input { ...opt } { ...others } onChange={ this.changeEv }/>
          <span className="mt-icon-checked"></span>
      </div>
    )
  },

  render(){
    let {
      className, type, children, checkedItems, disableItems, shape, max,
      data, disabled, position, label, mini, fill, onClick, ...others
    } = this.props;

    !Array.isArray(checkedItems) && (checkedItems = [checkedItems]);
    !Array.isArray(disableItems) && (disableItems = [disableItems]);

    const clsWrap = classNames('weui-cells', {
      [`mt-${type}`]: true,
      [`mt-${type}_${shape}`]: true,
      [`weui-cells_${type}`]: true,
      [className]: className
    });

    const clsIpt = classNames({
      [`mt-checkbox__input`]: true,
    });

    let disabledAll = false, isRadio = this.state.isRadio;
    let t = checkedItems.concat(disableItems).sort();
    isRadio && t.length && t.reduce((p,n)=>{
      if(p === n && isRadio){ disabledAll = true; }
      return n;
    })

    return(
      <div className={ clsWrap }>
        {
          data.map((v, i)=>{

            let currDis = disableItems.indexOf(v.id) > -1;
            currDis = (isRadio && disabledAll) ? true : currDis;

            let iptProps = {
              value: v.id,
              id: this.uuid(),
              checked: checkedItems.indexOf(v.id) > -1,
              disabled: currDis,
              position,
              type,
              name,
              others,
              max,
              className: clsIpt
            }

            return (
              <label className="weui-cell weui-check__label weui-cell-checkbox"
                htmlFor={ v.id } key={ i }
                onClick={ (e)=>this.clickEv(e, iptProps) }>
                  { position === 'left' && this.renderIpt(iptProps) }
                  <div className="weui-cell__bd">
                      <p>{ v.text }</p>
                  </div>
                  { position === 'right' && this.renderIpt(iptProps) }
              </label>
            )
          })
        }
      </div>
    )
  }
})

Checkbox.propTypes = {
  disabled: React.PropTypes.bool,
  type: React.PropTypes.string,
  position: React.PropTypes.string,
  name: React.PropTypes.string,
  data: React.PropTypes.array,
  onClick: React.PropTypes.func,
  shape: React.PropTypes.string,
  checkedItems: React.PropTypes.any,
  disableItems: React.PropTypes.any,
  max: React.PropTypes.number,
};

Checkbox.defaultProps = {
    disabled: false,  // 是否禁用
    type: 'checkbox', // 类型：checkbox 多选， radio 单选
    shape: 'circle', // rect / rect-fill / circle-fill
    position: 'right', // checkbox 的对齐方式，默认label在右，checkbox在左
    data:[],           // [{id:1, text:'a'}, {id:2, text:'b'}]
    onClick: noop,
    name: '',
    checkedItems: [],  // 当前选中的数据
    disableItems: [],  // 禁用的项
};

export default Checkbox
