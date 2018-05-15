## Header

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/header"/>

<a href="http://aitter.oschina.io/#/header" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/header</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/header" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Message, dialog, Header, Button } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
  getInitialState(){
    return {
      title: '页面标题'
    }
  },
  goBackEv(){
    dialog.show({
      message: '您还有未保存的数据，是否确认返回？',
      buttons: [{ label:'确定', onClick:()=>{
        dialog.hide();
        history.go(-1);
      }}]
    })
  },
  render: function() {
      return (
          <Page title="Header" subTitle="只在浏览器中显示，APP的webview中不显示">
            <div className="weui-cells__title">默认</div>
            <Header>页面标题</Header>

            <div className="weui-cells__title">带 返回图标</div>
            <Header showBack>页面标题</Header>

            <div className="weui-cells__title">带 返回 及 首页图标</div>
            <Header showBack showHome>页面标题</Header>

            <div className="weui-cells__title">自定义返回文字</div>
            <Header showBack showHome backText="上一步">页面标题</Header>

            <div className="weui-cells__title">自定义左侧、右侧内容</div>
            <Header showHome leftSlot={<span style={{color:'green'}}>自定义内容</span>} rightSlot={<span style={{color:'red'}}>自定义内容</span>}>页面标题</Header>

            <div className="weui-cells__title">阻止返回事件</div>
            <Header showBack onClickBack={ this.goBackEv }>页面标题</Header>

            <div className="weui-cells__title">异步设置标题</div>
            <Header showBack onClickBack={ this.goBackEv } title={this.state.title}></Header>

            <div style={{padding: 30}}>
              <Button type="primary" onClick={()=>this.setState({title: '异步标题'})}>改变标题为异步标题</Button>
            </div>
            <Message />
          </Page>
      );
  },
});

export default Demo

```
