import React from 'react'

var FlexItem = React.createClass({
  render(){
    let { options, children, ...others } = this.props;

    return(
      <div data-cell={ options } { ...others }>{ children }</div>
    )
  }
})

FlexItem.propTypes = {
  options: React.PropTypes.string,
};

FlexItem.defaultProps = {
  options: '',
};

export default FlexItem

/**
options为以下取值:
  flex
  start
  end
  center
  baseline
  stretch
  order1
  order2
  order3
  order4
  order5
  order6
  order7
  order8
  order9
  order10

  1/2
  1/3
  1/4
  1/5
  1/6
 */
