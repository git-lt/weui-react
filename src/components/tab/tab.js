import React from 'react'
import classNames from 'classnames'
import './index.less'

var Tab = React.createClass({
  render(){
    let { lineWidth, lineLeft, lineHeight, innerWidth, bgColor, children } = this.props;
    let lineSty = { width: lineWidth, height: lineHeight }
    return(
      <div className="mt-tab" style={{ backgroundColor: bgColor }}>
        <div className="mt-tab-inner" style={{ width: innerWidth}}>
          { children }
          { !!lineWidth && <div className="mt-tab-ink-bar" style={{width: 100/children.length+'%', left: lineLeft}}>
              <span className="mt-tab-ink-bar-inner mainbackground" style={{ ...lineSty }}></span>
            </div>
          }
          </div>
      </div>
    )
  }
})

Tab.propTypes = {
  bgColor: React.PropTypes.string,
  lineWidth: React.PropTypes.string,
  lineLeft: React.PropTypes.string,
  lineHeight: React.PropTypes.string,
  innerWidth: React.PropTypes.string,
};

Tab.defaultProps = {
  bgColor: 'transparent',
  lineWidth: '100%',
  lineLeft: '0',
  lineHeight: '2px',
  innerWidth: '100%',
};

export default Tab;
