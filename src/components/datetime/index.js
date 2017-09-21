import React from 'react'
import Picker from './datetime-picker'
import Format from './format'
import Group from '../group'
import classNames from 'classnames'
import './index.less'

const noop = ()=>{}

var Datetime = React.createClass({
  getInitialState(){
    const uuid = Math.random().toString(36).substring(3, 8)

    this.picker = null
    this.elId = `mt-datetime-${uuid}`

    const { value, format, show } = this.props

    return {
      currValue: value,
      initValue: value,
    }

  },
  updateCurrValue(v){
    this.setState({ currValue: v})
  },
  getOptions(){
    let _this = this

    const {
      confirmText, cancelText, clearText, renderInline, defaultSelectedValue, value,
      minYear, maxYear, minHour, maxHour, minDate, maxDate,
      onChange, onClear, onHide, onShow, onConfirm, updateShow,
      yearRow, monthRow, dayRow, hourRow, minuteRow, format, hourList, minuteList,
    } = this.props

    const options = {
      trigger: '#'+this.elId,
      format,
      value,
      defaultSelectedValue,

      confirmText,
      cancelText,
      clearText,

      minYear,
      maxYear,
      minHour,
      maxHour,
      startDate: minDate,
      endDate: maxDate,

      yearRow,
      monthRow,
      dayRow,
      hourRow,
      minuteRow,

      hourList,
      minuteList,

      onSelect (type, val, wholeValue) {
        console.log(type, val, wholeValue)
        _this.picker && renderInline && onChange(wholeValue)
      },
      onConfirm (value) {
        console.log(value)
        _this.updateCurrValue(value)
        onConfirm(value)
      },
      onClear (value) {
        console.log(value)
        _this.updateCurrValue('')
        onClear(value)
      },
      onHide () {
        console.log('hide')
        updateShow(false)
        onHide()
      },
      onShow () {
        console.log('show')
        updateShow(true)
        onShow()
      }
    }
    return options
  },
  componentDidMount(){
    this.init()
  },
  init(){
    if(this.props.readonly) return
    this.picker = new Picker(this.getOptions())
    this.props.show && this.picker.show()
  },
  componentWillReceiveProps(next){
    console.log(next)
    next.show && this.picker.show()
  },
  componentDidUpdate(){
    if(this.state.initValue !== this.props.value){
      this.setState({ initValue: this.props.value })
      this.picker.destroy()
      if(this.props.readonly) return
      this.init()
    }
  },
  componentWillUnmount(){
    this.picker && this.picker.destroy()
  },
  render(){
    let { readonly, label, placeholder, ...others } = this.props
    let { currValue } = this.state

    const cls = classNames('mt-datetime weui-cell',{
      'weui-cell_access': !readonly
    })

    return(
      <a id={ this.elId } className={ cls } href="javascript:;">
          <div className="weui-cell__hd">
            { label }
          </div>
          <div className="weui-cell__ft mt-cell-primary mt-datetime-value">
            { currValue || placeholder }
          </div>
      </a>
    )
  }
})


Datetime.propTypes = {
  label: React.PropTypes.any,
  value: React.PropTypes.string,
  defaultSelectedValue: React.PropTypes.string,
  format: React.PropTypes.string,

  placeholder: React.PropTypes.string,
  confirmText: React.PropTypes.string,
  cancelText: React.PropTypes.string,
  clearText: React.PropTypes.string,

  minYear: React.PropTypes.number,
  maxYear: React.PropTypes.number,
  minHour: React.PropTypes.number,
  maxHour: React.PropTypes.number,
  maxDate: React.PropTypes.number,
  minDate: React.PropTypes.number,

  required: React.PropTypes.bool,
  readonly: React.PropTypes.bool,
  show: React.PropTypes.bool,
  renderInline: React.PropTypes.bool,

  yearRow: React.PropTypes.string,
  monthRow: React.PropTypes.string,
  dayRow: React.PropTypes.string,
  hourRow: React.PropTypes.string,
  minuteRow: React.PropTypes.string,

  updateShow: React.PropTypes.func,
  onChange: React.PropTypes.func,
  onClear: React.PropTypes.func,
  onHide: React.PropTypes.func,
  onShow: React.PropTypes.func,
  onConfirm: React.PropTypes.func,

  hourList: React.PropTypes.array,
  minuteList: React.PropTypes.array,
};

Datetime.defaultProps = {
  label: '',
  value: 0,
  defaultSelectedValue: 0,
  format: 'YYYY-MM-DD',

  placeholder: '',
  confirmText: '',
  cancelText: '',
  clearText: '',

  minYear: 0,
  maxYear: 0,
  minHour: 0,
  maxHour: 0,
  maxDate: 0,
  minDate: 0,

  required: false,
  readonly: false,
  show: false,
  renderInline: false, // 是否直接在界面上显示

  yearRow: '{value}',
  monthRow: '{value}',
  dayRow: '{value}',
  hourRow: '{value}',
  minuteRow: '{value}',

  updateShow: noop, // 外部使用其它方式触发时，关闭的状态的函数
  onChange: noop,
  onClear: noop,
  onHide: noop,
  onShow: noop,
  onConfirm: noop,

  hourList: [],
  minuteList: [],
};

export default Datetime;
