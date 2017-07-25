## Input

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/input"/>

<a href="http://aitter.oschina.io/#/input" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/input</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/input" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Group, Input } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    render: function() {
        return (
          <Page title="Input">
            <Group title="基础使用">
              <Input label="用户名" type="text" placeholder="请输入用户名" showClear/>
              <Input label="密码" type="password" placeholder="请输入密码" showClear/>
            </Group>

            <Group>
              <Input label="手机号" type="tel" placeholder="请输入手机号" vcode right={<button className="weui-vcode-btn">获取验证码</button>}/>
              <Input label="日期" type="date"/>
              <Input label="时间" type="datetime-local"/>
            </Group>

            <Group title="没有label">
              <Input type="text" placeholder="请输入用户名"/>
            </Group>

            <Group title="select">
              <Input label="支付方式" type="select" placeholder="请选择" selectOptions={[{value:1, text:'微信'},{value:2, text:'支付宝'}]}/>
            </Group>
          </Page>
        );
    },
});

export default Demo

```
