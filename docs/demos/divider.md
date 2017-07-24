## Divider

### 演示
<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/divider" width="375" height="667" border="0" frameborder="0"></iframe>
</div>

### 使用示例

``` javascript
import React from 'react'
import { Divider } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
  render: function() {
      return (
        <Page title="Divider">
          <Divider>华丽的分隔线</Divider>

          <Divider>我有是底线的</Divider>

          <Divider style={{ color: 'red' }}>我的有颜色的，更长的文字</Divider>
        </Page>
      );
  },
});

export default Demo;

```
