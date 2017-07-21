import React from 'react'
import classNames from 'classnames'
import './index.less'

var FormPreview = React.createClass({
  renderItems(list){
    return list.map((v,i)=>{
      return (
        <div className="weui-form-preview__item" key={i}>
          <label className="weui-form-preview__label">{v.label}</label>
          <span className="weui-form-preview__value">{v.value}</span>
        </div>
      )
    })
  },
  renderButtons(buttons){
     return buttons.map((v, i)=>{
       var cls = v.type === 'default' ? 'weui-form-preview__btn_default': 'weui-form-preview__btn_primary maincolor';
       return <a className={`weui-form-preview__btn ${cls}`} onClick={ v.onClick }>{ v.label }</a>
     })
  },
  render(){
    let { label, value, items, buttons, className, ...others } = this.props;

    const cls = classNames('weui-form-preview', {
      [className]: className
    })

    return(
      <div className={ cls }>
        {
          !!label && <div className="weui-form-preview__hd">
            <label className="weui-form-preview__label">{ label }</label>
            { !!value && <em className="weui-form-preview__value">{ value }</em> }
          </div>
        }
        <div className="weui-form-preview__bd">{ this.renderItems(items) }</div>
        <div className="weui-form-preview__ft">{ this.renderButtons(buttons) }</div>
      </div>
    )
  }
})


FormPreview.propTypes = {
  label: React.PropTypes.any,
  value: React.PropTypes.string,
  items: React.PropTypes.array,
  buttons: React.PropTypes.array,
};

FormPreview.defaultProps = {
  label:'',   //标题
  value: '',  //标题数值
  items:[],    // 键值对数组 [{label: '', value:''}]
  buttons:[],  // 按钮配置数组 [{label: '', onClick:, type:'primary/default'}]
};

export default FormPreview
