import React from 'react'
import classNames from 'classnames'

const noop = ()=>{};

var TabItem = React.createClass({
  clickEv(){
    if(this.props.disabled) return;
    this.props.onClick(this.props.index);
  },
  render(){
    let { disabled, height, index, activeIndex, children, className, ...others } = this.props;

    const cls = classNames('mt-tab-item', {
      'mt-tab-item_active maincolor': !disabled && (index === activeIndex),
      'mt-tab-item_disabled': disabled,
      [className]: className,
    })

    return(
      <div className={ cls } onClick={ this.clickEv } style={{ 'lineHeight': height }}>
        { children }
      </div>
    )
  }
})

TabItem.propTypes = {
  disabled: React.PropTypes.bool,
  index: React.PropTypes.number.isRequired,
  activeIndex: React.PropTypes.number.isRequired,
  onClick: React.PropTypes.func.isRequired,
  height: React.PropTypes.string,
};

TabItem.defaultProps = {
  disabled: false, // 是否禁用
  index: 0,        // 组件索引值
  acitveIndex: 0,  // 当前选中的tab索引
  onClick: noop,   // 点击事件
  height: '.5rem',
};

export default TabItem;
