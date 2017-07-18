import React from 'react'

var GroupTitle = React.createClass({
  render(){
    let { title, children, ...others } = this.props;

    return(
      <div className="weui-cells__title" {...others}>{ title || children}</div>
    )
  }
})

GroupTitle.propTypes = {
  title: React.PropTypes.any,
};

GroupTitle.defaultProps = {
  text: '', // 一般使用文本，更复杂的可使用jsx
};

export default GroupTitle
