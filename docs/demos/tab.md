## Tab

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/tab"/>

<a href="http://aitter.oschina.io/#/tab" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/tab</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/tab" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Tab, TabItem } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        activeIndex1: 0,
        activeIndex2: 0,
      }
    },
    changeTabEv1(idx){
      this.setState({ activeIndex1: idx })
    },
    changeTabEv2(idx){
      this.setState({ activeIndex2: idx})
    },
    render: function() {
      let { activeIndex1, activeIndex2 } = this.state;

      return (
        <Page title="Tab">
          <Tab lineLeft={activeIndex1*50+'%'} lineWidth="3em">
            <TabItem index={0} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>已发货</TabItem>
            <TabItem index={1} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>未发货</TabItem>
          </Tab>
          <br/><br/><br/><br/>

          <Tab lineLeft={activeIndex2*33.333+'%'} bgColor="#fff">
            <TabItem index={0} activeIndex={activeIndex2} onClick={ this.changeTabEv2 }>已发货</TabItem>
            <TabItem index={1} activeIndex={activeIndex2} onClick={ this.changeTabEv2 }>未发货</TabItem>
            <TabItem index={2} activeIndex={activeIndex2} onClick={ this.changeTabEv2 }>全部订单</TabItem>
          </Tab>
        </Page>
      );
    },
});

export default Demo

```
