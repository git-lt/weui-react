## Msg

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/msg"/>

<a href="http://aitter.oschina.io/#/msg" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/msg</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/msg" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Button, Msg } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        show: false,
        pageTitle: '下单成功',
        title: '订单预约成功',
        desc: '请前往订单详情页面，查看订单详情',
        type: 'success',
        buttons: [
          <Button text="查看订单" type="primary" onClick={ this.closeMsg }/>,
          <Button text="返回首页" onClick={ this.closeMsg }/>,
        ],
        footerLinks: [{href:'/', text:'返回首页'}],
        footerText: '最终解释权归每天健康所有',
      }
    },
    showSuccessEv(){
      var d = this.state;
      d.pageTitle = '下单成功';
      d.title = '订单预约成功';
      d.desc = <p>请前往订单详情页面，<a className="mt-link" href="javascript:;">查看订单详情</a></p>;
      d.type = 'success';
      d.show = true;
      this.setState({...d})
    },
    showFailEv(){
      var d = this.state;
      d.pageTitle = '下单失败';
      d.title = '订单预约失败';
      d.desc = <p>请返回订单页面，<a className="mt-link" href="javascript:;">重新提交</a></p>;
      d.type = 'error';
      d.show = true;
      this.setState({...d})
    },
    closeMsg(){
      var d = this.state;
      d.show = false;
      this.setState({...d})
    },
    render: function() {
        return (
          <Page title="Msg">
            <div className="mt-page-actions-warp">
              <Button type="primary" onClick={ this.showSuccessEv }>操作成功</Button>
              <Button type="warn" onClick={ this.showFailEv }>操作失败</Button>
            </div>

            <Msg { ...this.state }/>
          </Page>
        );
    },
});

export default Demo

```
