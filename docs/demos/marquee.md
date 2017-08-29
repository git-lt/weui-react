## Marquee

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/marquee"/>

<a href="http://aitter.oschina.io/#/marquee" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/marquee</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/marquee" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Marquee, Divider, Group, Cell, Button  } from 'mt-weui-react'
import Page from '../../component/page'
import './index.less'

const MarqueeItem = Marquee.MarqueeItem;

var Demo = React.createClass({
    getInitialState(){
      return {
        data: [],
        loading: false,
        data1: [
          '夏普双摄！全面屏新机AQUOS S2样张曝光',
          '人生匆匆，不是在剁手就是在剁手路上！',
          '美国媒体：阿里股价两年内可到300美元',
          '又破纪录！《战狼2》超《速8》成2017年度冠军'
        ],
      }
    },

    loadData(){
      this.setState({ loading: true })
      setTimeout(()=>{
        this.setState({ loading: false })
        this.setState({ data: this.state.data1 })
        this.refs.marqueeBox.refresh()
      }, 3000)
    },

    render: function() {
      return (
        <Page title="Marquee">

          <Divider>默认使用</Divider>
          <Marquee>
            <MarqueeItem>下快报，每天赠送一台智能手机</MarqueeItem>
            <MarqueeItem>买房卖房租房 上腾讯房产</MarqueeItem>
            <MarqueeItem>点我领取新闻客户端每日福利</MarqueeItem>
          </Marquee>

          <Group>
            <Cell label="公告">
              <Marquee>
                <MarqueeItem>下快报，每天赠送一台智能手机</MarqueeItem>
                <MarqueeItem>买房卖房租房 上腾讯房产</MarqueeItem>
                <MarqueeItem>点我领取新闻客户端每日福利</MarqueeItem>
              </Marquee>
            </Cell>
          </Group>

          <Divider>异步加载</Divider>
          <Marquee ref="marqueeBox" className="spread">
            {this.state.data.map((v, i)=>{
              return <MarqueeItem key={i}>{v}</MarqueeItem>
            })}
          </Marquee>

          <div style={{ padding: 20 }}>
            <Button onClick={ this.loadData } loading={ this.state.loading }>点击异步加载数据</Button>
          </div>

        </Page>
      );
    },
});

export default Demo

```
