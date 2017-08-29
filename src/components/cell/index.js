import React from 'react'
import classNames from 'classnames'

var Cell = React.createClass({
  clickEv(){
    const href = this.props.href;
    !!href && (window.location.href = this.props.href);
  },
  render(){
    let { label, desc, subDesc, icon, href, isLink, className, children, ...others } = this.props;

    !!href && ( isLink = true )

    const cls = classNames('weui-cell', {
      'weui-cell_access': isLink,
      [className]: className
    })

    return(
      <a className={ cls } onClick={ this.clickEv } { ...others } href="javascript:;">
        {
          !!icon && <div className="weui-cell__hd">
            { icon }
          </div>
        }
        <div className="weui-cell__bd">
          <p>{ label }</p>
          { !!subDesc && <span>{ subDesc }</span> }
        </div>
        <div className="weui-cell__ft">{ desc || children }</div>
      </a>
    )
  }
})


Cell.propTypes = {
  label: React.PropTypes.any,   // 一般使用文本，更复杂的可使用jsx
  desc: React.PropTypes.any,    // 一般使用文本，更复杂的可使用jsx
  subDesc: React.PropTypes.any, // 一般使用文本，更复杂的可使用jsx
  icon: React.PropTypes.any,    // 一般使用jsx <i className="icon icon-left" />
  href: React.PropTypes.string, // 链接地址
  isLink: React.PropTypes.bool, // 是否是链接，如果 href 有值，则isLink自动为true, 显示箭头
};

Cell.defaultProps = {
  label: '',
  desc: '',
  subDesc: '',
  icon: '',
  href: '',
  isLink: false,
};

export default Cell;
