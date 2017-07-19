import React from 'react'
import { Tip } from '../../../src'
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
