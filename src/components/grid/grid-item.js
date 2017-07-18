import React from 'react'
import classNames from 'classnames'

var GridItem = React.createClass({
  render(){
    let { label, icon, link, className, children, ...others } = this.props;

    const cls = classNames('weui-grid',{
      [className]: className
    })

    return(
      <a href={ link ? link : 'javascript:;'} className={ cls } {...others}>
        {!!icon && <div className="weui-grid__icon">{ icon }</div>}
        {!!label && <p className="weui-grid__label">{ label }</p>}
        { children }
     </a>
    )
  }
})

GridItem.propTypes = {
  label: React.PropTypes.any,
  icon: React.PropTypes.any,
  link: React.PropTypes.string,
};

GridItem.defaultProps = {
  label:'',
  icon:'',
  link:'',
};

export default GridItem;
