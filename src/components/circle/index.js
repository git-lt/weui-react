import React from 'react'
import classNames from 'classnames'
import './index.less'

var Circle = React.createClass({
  getInitialState(){
    const radius = 50 - this.props.strokeWidth / 2;

    return {
      radius: radius, // 半径
      len:  Math.PI * 2 * radius, // 周长
      pathString: `M 50,50 m 0,-${radius}
            a ${radius},${radius} 0 1 1 0,${2 * radius}
            a ${radius},${radius} 0 1 1 0,-${2 * radius}`,
    }
  },

  render(){
    let { pathString, len, radius } = this.state;

    let {
      strokeWidth, strokeColor, trailWidth, trailColor, percent,
      strokeLinecap, className, children, ...others
    } = this.props;

    const pathStyle = {
      'strokeDasharray': `${len}px ${len}px`,
      'strokeDashoffset': `${((100 - percent) / 100 * len)}px`,
      'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
    }

    const cls = classNames('mt-circle', {
      [className]: className
    })

    return(
      <div className={ cls }>
        <svg viewBox="0 0 100 100">
          <path
            d={ pathString }
            stroke={ trailColor }
            strokeWidth={ trailWidth }
            fillOpacity="0"/>
          <path
            d={ pathString }
            strokeLinecap={ strokeLinecap }
            stroke={ strokeColor }
            strokeWidth={ strokeWidth }
            fillOpacity="0"
            style={ pathStyle }/>
        </svg>
        <div className="mt-circle-content">{ children }</div>
      </div>
    )
  }
})


Circle.propTypes = {
  strokeWidth: React.PropTypes.number,
  strokeColor: React.PropTypes.string,
  trailWidth: React.PropTypes.number,
  trailColor: React.PropTypes.string,
  percent: React.PropTypes.number,
  strokeLinecap: React.PropTypes.string,
};

Circle.defaultProps = {
  strokeWidth: 1,
  strokeColor: '#37c7fa',
  trailWidth: 1,
  trailColor: '#d9d9d9',
  percent: 0,
  strokeLinecap: 'round',
};

export default Circle;
