import React from 'react'
import { Tab, TabItem, Sticky  } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        activeIndex1: 0,
      }
    },
    changeTabEv1(idx){
      this.setState({ activeIndex1: idx })
    },
    renderItems(){
      let res = [];
      for(let i = 0; i<=100; i++){
        res.push(<p key={i}>{i}</p>)
      }
      return res;
    },
    render: function() {
      let { activeIndex1, activeIndex2 } = this.state;

      return (
        <Page title="Sticky 组件示例">
          <div style={{ height:'.5rem'}}>

            <Sticky checkStickySupport ={ false }>

              <Tab lineLeft={activeIndex1*50+'%'} lineWidth="3em" bgColor="#fff">
                <TabItem index={0} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>已发货</TabItem>
                <TabItem index={1} activeIndex={activeIndex1} onClick={ this.changeTabEv1 }>未发货</TabItem>
              </Tab>

            </Sticky>

          </div>
          { this.renderItems() }
        </Page>
      );
    },
});

export default Demo
