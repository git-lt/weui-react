## Countup

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/countup"/>

<a href="http://aitter.oschina.io/#/countup" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/countup</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/countup" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import Page from '../../component/page'
import { Countup, Button } from 'mt-weui-react'

var Demo = React.createClass({
  getInitialState(){
    return { start: false }
  },
  render() {
    return (
      <Page title="Countup" subTitle="数字增长">
        <div style={{height: 60, margin: '30px auto', fontSize: 50, color: '#1AAD19'}} className="tc">
          <Countup startVal={0} endVal={999} start></Countup>
        </div>

        <div style={{height: 60, margin: '30px auto', fontSize: 50, color: '#1AAD19'}} className="tc">
          <Countup startVal={0} endVal={99.99} decimals={2} start></Countup>
        </div>
        <div style={{height: 60, margin: '30px auto', fontSize: 50, color: '#1AAD19'}} className="tc">
          <Countup startVal={0} endVal={99.99} decimals={2} start={ this.state.start }></Countup>
        </div>
        <div style={{ padding: 20 }}>
          <Button type="primary" onClick={()=>this.setState({start: true })}>Start</Button>
        </div>
      </Page>
    );
  },
});

export default Demo

```
