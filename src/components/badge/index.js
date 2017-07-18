import React from 'react'
import classNames from 'classnames'

var Badge = React.createClass({
  render(){
    let { text, children, className, ...others } = this.props;

    const cls = classNames('weui-badge',{
      'weui-badge_dot': !text && !children,
      [className]: className,
    })

    return(
      <span className={ cls } { ...others }>{ text || children}</span>
    )
  }
})


Badge.propTypes = {
  text: React.PropTypes.any,
};

Badge.defaultProps = {
  text: '', // 一般使用文本，更复杂的可使用jsx
};

export default Badge;
