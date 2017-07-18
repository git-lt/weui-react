import React from 'react'

var Grid = React.createClass({
  render(){
    return(
      <div className="weui-grids">{ this.props.children }</div>
    )
  }
})

export default Grid;
