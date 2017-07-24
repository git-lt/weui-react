## Button

### 演示
<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/button" width="375" height="667" border="0" frameborder="0"></iframe>
</div>

### 使用示例

``` javascript
import React from 'react'
import { Button, GroupTitle } from '../../../src'
import Page from '../../component/page'

var DemoButton = React.createClass({
  getInitialState(){
    return { loading: false }
  },
  loadEv(){
    this.setState({loading: true })
    setTimeout(()=>this.setState({ loading: false}), 3000)
  },
  render: function() {
      return (
        <Page title="Button" spacing>
          <GroupTitle>默认显示</GroupTitle>
          <Button>默认按钮 - default</Button>
          <Button type="primary">主色调 - primary</Button>
          <Button type="warn">警示 - warn</Button>


          <GroupTitle>Button类型: button/reset</GroupTitle>
          <Button type="primary" actionType="button">submit</Button>
          <Button type="warn" actionType="reset">reset</Button>

          <GroupTitle>Loading Button</GroupTitle>
          <Button type="default" loading>submit</Button>
          <Button type="primary" loading={ this.state.loading } onClick={ this.loadEv }> 点我 </Button>
          <Button type="warn" loading>submit</Button>

          <GroupTitle>Mini Button</GroupTitle>
          <Button mini className="mr10">submit</Button>&nbsp;
          <Button mini type="primary" className="mr10">primary</Button>&nbsp;
          <Button mini type="warn">Delete</Button>
          <div className="mt5"></div>
          <Button mini plain className="mr10" >submit</Button>&nbsp;
          <Button mini plain type="primary">primary</Button>&nbsp;

          <GroupTitle>Plain Button</GroupTitle>
          <Button plain>submit</Button>
          <Button plain type="primary">primary</Button>

          <GroupTitle>Customer Button</GroupTitle>
          <Button plain type="primary" style={{ 'borderRadius': '99px'}}>primary</Button>
          <Button plain type="primary" style={{ 'borderRadius': '99px', 'borderColor': '#CE3C39', color: '#CE3C39' }}>primary</Button>

          <GroupTitle>Disabled Button</GroupTitle>
          <Button disabled>disable submit</Button>
          <Button type="primary" disabled>disable primary</Button>
          <Button type="warn" disabled>disable Delete</Button>

          <GroupTitle>Use Text</GroupTitle>
          <Button text="submit001"  type="primary" />
        </Page>
      );
  },
});

export default DemoButton

```
