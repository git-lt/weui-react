## Range

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/range"/>

<a href="http://aitter.oschina.io/#/range" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/range</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/range" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Range, Group, Cell } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        num: 0
      }
    },

    render: function() {
      const range = <div style={{ width: 120, marginRight: 30, float: 'right' }}><Range onChange={ v=>{ this.setState({num: v})} }></Range></div>
      return (
        <Page title="Range"  subTitle="数值范围选择">
          <Group>
            <Cell icon={`范围 ${this.state.num}`} label={ range } />
          </Group>

        </Page>
      );
    },
});

export default Demo

```
