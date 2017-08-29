import React from 'react'
import classNames from 'classnames'
import './index.less'

var Mask = React.createClass({
  render(){
    const {transparent, className, show, ...others} = this.props;
    const clz = classNames({
        'weui-mask': !transparent,
        'weui-mask_transparent': transparent,
        'mt-mask-enter mask-animated': !transparent && show,
        'mt-mask-leave mask-animated': !transparent && !show,
    }, className);

    return (
        <div className={clz} {...others}></div>
    );
  }
})


Mask.propTypes = {
  transparent: React.PropTypes.bool
};
Mask.defaultProps = {
  transparent: false
};

export default Mask
