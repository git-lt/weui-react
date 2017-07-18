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
        footerLinks: [{href:TJ.tourl('/welcome'), text:'返回首页'}],
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
          <Page title="Msg 组件示例">
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
