## Switch

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/switch"/>

<a href="http://aitter.oschina.io/#/switch" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/switch</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/switch" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Group, Cell, Switch } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    changeEv(checked){
      console.log(checked);
    },
    render: function() {
      const cusLabel = <span><i className="weui-icon-download"></i><span>开启下载</span></span>;
        return (
          <Page title="Switch">
            <Group title="一般使用">
              <Switch label="飞行模式" checked={ false }  onChange={ this.changeEv }/>
              <Switch label="蓝牙"  checked onChange={ this.changeEv }/>
              <Switch label="禁用缓存" checked={ true }  onChange={ this.changeEv }/>
            </Group>

            <Group title="禁用">
              <Switch label="蓝牙"  checked disabled onChange={ this.changeEv }/>
              <Switch label="禁用缓存" checked={ false } disabled onChange={ this.changeEv }/>
            </Group>

            <Group title="自定义label">
              <Switch label={ cusLabel }  checked onChange={ this.changeEv }/>
            </Group>
          </Page>
        );
    },
});

export default Demo

```
