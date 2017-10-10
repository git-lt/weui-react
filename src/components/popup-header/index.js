import React from 'react'
import classNames from 'classnames'
import './index.less'

const noop = ()=>{}

var PopupHeader = React.createClass({
  render(){
    const {leftText, rightText, title, showBottomBorder, onClickRight, onClickLeft, className, ...others} = this.props;

    const cls = classNames('mt-popup-header', className);

    return (
      <div className={ cls }>
        <div className="mt-popup-header-left" onClick={ onClickLeft }>
          { leftText }
        </div>
        <div className="mt-popup-header-title">
          { title }
        </div>
        <div className="mt-popup-header-right" onClick={ onClickRight }>
          { rightText }
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
  onClickRight: React.PropTypes.func,
  onClickLeft: React.PropTypes.func,
};

PopupHeader.defaultProps = {
  leftText: '',
  rightText: '',
  title: '',
  showBottomBorder: true,
  onClickRight: noop,
  onClickLeft: noop,
};

export default PopupHeader
