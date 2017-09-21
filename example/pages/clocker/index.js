import React from 'react'
import Page from '../../component/page'
import './index.less'
import { Clocker, GroupTitle } from '../../../src'

var Demo = React.createClass({
  getInitialState(){
    return {
      time1: 20,
    }
  },
  format1(d1, d2, h1, h2, m1, m2, s1, s2){
    return (
      <span>
        剩余
        <span style={{color: '#108EE9'}}>{d1+d2}天</span>
        <span style={{color: '#F65314'}}>{h1+h2}时</span>
        <span style={{color: '#34C0E3'}}>{m1+m2}分</span>
        <span style={{color: '#525990'}}>{s1+s2}秒</span>
      </span>
    )
  },
  format2(d1, d2, h1, h2, m1, m2, s1, s2){
    return (
      <span>
        剩余
        <span className="demo-clocker-timeitem">{d1}</span>
        <span className="demo-clocker-timeitem">{d2}</span>天
        <span className="demo-clocker-timeitem">{h1}</span>
        <span className="demo-clocker-timeitem">{h2}</span>时
        <span className="demo-clocker-timeitem">{m1}</span>
        <span className="demo-clocker-timeitem">{m2}</span>分
        <span className="demo-clocker-timeitem">{s1}</span>
        <span className="demo-clocker-timeitem">{s2}</span>秒
      </span>
    )
  },
  render() {
    const { time1 } = this.state;

    return (
      <Page title="Clocker" subTitle="活动倒计时">
        <GroupTitle>默认使用</GroupTitle>
        <div style={{height: 50, margin: '20px auto'}} className="tc">
          <Clocker time={ +new Date()+100000 }></Clocker>
        </div>

        <GroupTitle>使用自定义模板</GroupTitle>
        <div style={{height: 50, margin: '20px auto'}} className="tc">
          <Clocker time={ +new Date()+90000000 } formatFn={ this.format1 }></Clocker>
        </div>
        <div style={{height: 50, margin: '20px auto'}} className="tc">
          <Clocker time={ +new Date()+800000 } formatFn={ this.format2 }></Clocker>
        </div>
      </Page>
    );
  },
});

export default Demo
