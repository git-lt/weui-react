import React from 'react'
import classNames from 'classnames'

const Textarea = React.createClass({
  getInitialState(){
    return {
      value: this.props.value,
    }
  },
  changeEv(e){
    let value = e.target.value;
    let max = ~~this.props.maxLength;

    const count = this.getLength(value);
    if(count > max){
      value = value.slice(0, max);
    }

    this.setState({ value });
    this.props.onChange && this.props.onChange(e, value);
  },
  getLength(v){
    return v.replace(/\n/g, 'aa').length;
  },
  render(){
    let {
      showCounter, value, maxLength, onChange, height, className, children, ...others
    } = this.props;

    maxLength = ~~maxLength;

    const wrapCls = classNames('weui-textarea',{
      [className]: className,
    });

    const realValue = this.state.value;
    let count = this.getLength(realValue);
    count = count > maxLength ? maxLength : count;

    return (
      <div className="weui-cell">
        <div className="weui-cell__bd">
          <textarea className="weui-textarea" ref="textarea" style={{ height }}
            value={ realValue }
            maxLength={ maxLength }
            onChange={ this.changeEv }
            {...others}
          />
        { showCounter && !!maxLength && <div className="weui-textarea-counter"><span>{count}</span>/{maxLength}</div>}
        </div>
      </div>
    );
  }
})

Textarea.propTypes = {
  showCounter: React.PropTypes.bool,
  maxLength: React.PropTypes.string,
  value: React.PropTypes.string,
  height: React.PropTypes.string,
  rows: React.PropTypes.string,
  cols: React.PropTypes.string,
};

Textarea.defaultProps = {
  show: false,         // 显示隐藏
  value: '',
  maxLength: '200',
  height: '75px',
  rows: '3',
  cols: '30',
};

export default Textarea
