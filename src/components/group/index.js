import React from 'react'
import classNames from 'classnames'

var Group = React.createClass({
  render(){
    let {
      title, labelWidth, labelAlign, labelMarginRight, form,
      marginTop, children, className, ...others
    } = this.props;

    const cls = classNames('weui-cells', {
      'weui-cells_form': form,
      [className]: className
    });

    let styls = {};
    !title && marginTop && (styls.marginTop = marginTop)

    return(
      <div>
        { !!title && <div className="weui-cells__title">{ title }</div> }
        <div className={ cls } style={ styls }>
          { children }
        </div>
      </div>
    )
  }
})

Group.propTypes = {
  title: React.PropTypes.any,
  labelWidth: React.PropTypes.string,
  labelAlign: React.PropTypes.string,
  labelMarginRight: React.PropTypes.string,
  marginTop: React.PropTypes.string,
  form: React.PropTypes.bool,
};

Group.defaultProps = {
  title: '',            // 标题 一般使用文本，更复杂的可使用jsx
  labelWidth: '',       // 子元素 label 宽度
  labelAlign: '',       // 子元素 label 对齐方式
  labelMarginRight: '', // 子元素 label 右边距
  marginTop: '',        // 分组的上边距，在没有 title 时有效
  form: false,          // 是否是表单
};

export default Group;
