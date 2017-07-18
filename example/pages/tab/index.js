import React from 'react'
import { Tab, TabItem } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        activeIndex1: 0,
        activeIndex2: 0,
      }
    },
    changeTabEv1(idx){
      this.setState({ activeIndex1: idx })
    },
    changeTabEv2(idx){
      this.setState({ activeIndex2: idx})
    },
    render: function() {
      let { activeIndex1, activeIndex2 } = this.state;

      return (
        <Page title="Tab 组件示例">
          <Tab lineLeft={activeIndex1*50+'%'} lineWidth="3em">
            <TabItem index={0} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>已发货</TabItem>
            <TabItem index={1} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>未发货</TabItem>
          </Tab>
          <br/><br/><br/><br/>

          <Tab lineLeft={activeIndex2*33.333+'%'} bgColor="#fff">
            <TabItem index={0} activeIndex={activeIndex2} onClick={ this.changeTabEv2 }>已发货</TabItem>
            <TabItem index={1} activeIndex={activeIndex2} onClick={ this.changeTabEv2 }>未发货</TabItem>
            <TabItem index={2} activeIndex={activeIndex2} onClick={ this.changeTabEv2 }>全部订单</TabItem>
          </Tab>
        </Page>
      );
    },
});

export default Demo
