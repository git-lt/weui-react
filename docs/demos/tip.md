## Tip

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/tip"/>

<a href="http://aitter.oschina.io/#/tip" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/tip</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/tip" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Tip } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
  render: function() {
      return (
        <Page title="Tip" subTitle="一般用于页面顶部的提示信息，常用的有两种，一种是带背景颜色和图标警告消息，一种是没有背景，文字居中的一般消息。">
          <div className="weui-cells__title">warning 默认</div>
          <Tip message="警告的消息提示"/>

          <div className="weui-cells__title">Default</div>
          <Tip message="默认的消息提示" type="default"/>

          <div className="weui-cells__title">Info</div>
          <Tip message="一般的消息提示" type="info"/>

          <div className="weui-cells__title">Error</div>
          <Tip message="错误的消息提示" type="error"/>

          <div className="weui-cells__title">Success</div>
          <Tip message="成功的消息提示" type="success"/>

          <div className="weui-cells__title">可关闭</div>
          <Tip message="成功的消息提示" type="success" closable/>
        </Page>
      );
  },
});

export default Demo

```
