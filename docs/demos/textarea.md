## Textarea

### 演示
<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/textarea" width="375" height="667" border="0" frameborder="0"></iframe>
</div>

### 使用示例

``` javascript
import React from 'react'
import { Textarea, Group } from '../../../src'
import Page from '../../component/page'
// import Autosize from 'autosize' // http://www.jacklmoore.com/autosize/

var Demo = React.createClass({
    getInitialState(){
      return {
        activeIndex: 0,
      }
    },
    render: function() {
      return (
        <Page title="Textarea">
          <Group title="基本使用">
            <Textarea placeholder="请填写详细信息"></Textarea>
          </Group>

          <Group title="显示计数器">
            <Textarea placeholder="请填写详细信息" maxLength="200" showCounter></Textarea>
          </Group>
        </Page>
      );
    },
});

export default Demo

```
