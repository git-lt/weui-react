## Progress

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/progress"/>

<a href="http://aitter.oschina.io/#/progress" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/progress</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/progress" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Progress } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
    render: function() {
      return (
        <Page title="Progress"  subTitle="进度条组件">
          <div style={{ margin: 20 }}>
            <Progress percent={ 30 } showCancel />
          </div>
          <div style={{ margin: 20 }}>
            <Progress percent={ 50 } showCancel={ false } />
          </div>
        </Page>
      );
    },
});

export default Demo

```
