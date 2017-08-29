## Sticky

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/sticky"/>

<a href="http://aitter.oschina.io/#/sticky" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/sticky</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/sticky" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Tab, TabItem, Sticky  } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        activeIndex1: 0,
      }
    },
    changeTabEv1(idx){
      this.setState({ activeIndex1: idx })
    },
    renderItems(){
      let res = [];
      for(let i = 0; i<=100; i++){
        res.push(<p key={i}>{i}</p>)
      }
      return res;
    },
    render: function() {
      let { activeIndex1, activeIndex2 } = this.state;

      return (
        <Page title="Sticky">
          <div style={{ height:'.5rem'}}>

            <Sticky checkStickySupport ={ false }>

              <Tab lineLeft={activeIndex1*50+'%'} lineWidth="3em" bgColor="#fff">
                <TabItem index={0} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>已发货</TabItem>
                <TabItem index={1} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>未发货</TabItem>
              </Tab>

            </Sticky>

          </div>
          { this.renderItems() }
        </Page>
      );
    },
});

export default Demo

```
