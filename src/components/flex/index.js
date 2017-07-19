import React from 'react'
import classNames from 'classnames'
import './index.less'
import FlexItem from './flex-item'

var Flex = React.createClass({
  render(){
    let { gutter, options, children, ...others } = this.props;

    return(
      <div data-flex={ options } { ...others }>{ children }</div>
    )
  }
})

Flex.propTypes = {
  gutter: React.PropTypes.number,
  options: React.PropTypes.string,
};

Flex.defaultProps = {
  gutter: 20,
  options: '',
};

Flex.FlexItem = FlexItem

export default Flex

/**
options为以下取值:
  row: 子元素行显示
  column: 子元素列显示
  center: 子元素水平垂直居中
  wrap: 子元素如果是有固定宽度或高度，超出换行显示
  main-start: 主轴起始对齐
  main-center: 主轴居中对齐
  main-end: 主轴末尾对齐
  maine-between: 主轴两端对齐
  main-around: 主轴散列对齐
  cross-start: 侧轴起始对齐
  cross-center: 侧轴居中对齐
  cross-end: 侧轴末尾对齐
  cross-between: 侧轴两端对齐
  cross-around: 侧轴散列对齐
  cross-stretch: 侧轴拉伸对齐
 */
