import React from 'react'
import GridItem from './grid-item'

var Grid = React.createClass({
  render(){
    return(
      <div className="weui-grids">{ this.props.children }</div>
    )
  }
})

Grid.GridItem = GridItem

export default Grid;
