import React from 'react'
import { Message, dialog, toast, Header } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
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

            <Message />
          </Page>
      );
  },
});

export default Demo
