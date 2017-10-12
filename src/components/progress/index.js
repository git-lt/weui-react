import React from 'react'

var Progress = React.createClass({
  cancel(v){
    this.props.onCancel(v)
  },

  render(){
    const { showCancel, percent } = this.props

    return (
      <div className="weui-progress">
        <div className="weui-progress__bar">
          <div className="weui-progress__inner-bar" style={{width: percent + '%'}}></div>
        </div>
        {
           showCancel && <a href="javascript:;" className="weui-progress_opr">
             <i className="weui-icon-cancel" onClick={this.cancel}></i>
           </a>
        }
      </div>
    )
  }
})

Progress.propTypes ={
  percent: React.PropTypes.number,
  showCancel: React.PropTypes.bool,
  onCancel: React.PropTypes.func,
}


Progress.defaultProps ={
  percent: 0,
  showCancel: true,
  onCancel: ()=>{},
}

export default Progress
