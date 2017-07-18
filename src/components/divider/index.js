import React from 'react'
import './index.less'

var Divider = React.createClass({
  render(){
    let { text, children, ...others } = this.props;

    return(
      <p className="mt-divider" {...others}>{ text || children }</p>
    )
  }
})


Divider.propTypes = {
  text: React.PropTypes.any, // 一般使用文本，更复杂的可使用jsx
};

Divider.defaultProps = {
  text: '',
};

export default Divider;
