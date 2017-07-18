import React from 'react'
import './page.less'

export default React.createClass({
  displayName:'Page',
  render(){
    const {title, subTitle, spacing, className, children } = this.props;

    return (
        <section className={`page ${className}`}>
            <div className="eg-page-hd">
                <h1 className="eg-page-tit">{title}</h1>
                <p className="eg-page-subtit">{subTitle}</p>
            </div>
            <div className={`eg-page-bd ${spacing ? 'eg-page-bd_spacing' : ''}`}>
                {children}
            </div>
        </section>
    );
  }
})
