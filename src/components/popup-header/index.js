import React from 'react'
import classNames from 'classnames'
import './index.less'

var PopupHeader = React.createClass({
  render(){
    const {leftText, rightText, title, showBottomBorder, className, ...others} = this.props;

    const cls = classNames('mt-popup-header', className);

    return (
      <div className={ cls }>
        <div className="mt-popup-header-left" onClick={ this.onClickRight }>
          {{ leftText }}
        </div>
        <div className="mt-popup-header-title">
          {{ title }}
        </div>
        <div className="mt-popup-header-right" onClick={ this.onClickLeft }>
          {{ rightText }}
        </div>
      </div>
    );
  }
})


PopupHeader.propTypes = {
  leftText: React.PropTypes.string,
  rightText: React.PropTypes.string,
  title: React.PropTypes.string,
  showBottomBorder: React.PropTypes.bool,
};

PopupHeader.defaultProps = {
  leftText: '',
  rightText: '',
  title: '',
  showBottomBorder: true,
};

export default PopupHeader
