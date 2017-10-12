## PopupAddress

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/popup-address"/>

<a href="http://aitter.oschina.io/#/popup-address" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/popup-address</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/popup-address" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { PopupAddress, Group } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
      }
    },

    render: function() {
      return (
        <Page title="PopupAddress" subTitle="弹出层地址选择器">
          <Group>
            <PopupAddress
              label="地址"
              placeholder="请选择收货地址"></PopupAddress>
          </Group>
        </Page>
      );
    },
});

export default Demo

```
