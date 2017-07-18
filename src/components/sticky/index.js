import React from 'react'
import sticky from './sticky'
import './index.less';

const Sticky = React.createClass({
  componentDidMount(){

    let { scrollBox=null, offset, checkStickySupport } = this.props;

    setTimeout(()=>{
      sticky(this.refs.stickyWrap.getDOMNode(), {
        scrollBox,
        offset,
        checkStickySupport,
      })
    }, 4);
  },
  render(){
    return (
      <div ref="stickyWrap">{ this.props.children }</div>
    );
  }
})

Sticky.propTypes = {
  scrollBox: React.PropTypes.object,
  offset: React.PropTypes.number,
  checkStickySupport:React.PropTypes.bool,
};

Sticky.defaultProps = {
  offset: 0,
  checkStickySupport: true,
};

export default Sticky
