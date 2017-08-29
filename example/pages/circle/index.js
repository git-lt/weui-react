import React from 'react'
import Page from '../../component/page'
import { Circle, Button } from '../../../src'

var Demo = React.createClass({
  getInitialState(){
    return {
      percent1: 20,
    }
  },

  add(){
    let p1 = this.state.percent1;
    p1+=10;
    if(p1>100) p1 = 100;
    this.setState({ percent1: p1});
  },

  dec(){
    let p1 = this.state.percent1;
    p1-=10;
    if(p1<0) p1 = 0;
    this.setState({ percent1: p1});
  },

  render: function() {
    const { percent1 } = this.state;

    return (
      <Page title="Circle" subTitle="图表、圆环进度指示">

        <div style={{width: 100, height: 100, margin: '20px auto'}}>
          <Circle percent={ percent1 } strokeWidth={8} strokeColor="#04BE02">
            { percent1==100 ? <i className="weui-icon weui_icon_success weui-icon-success" style={{color:'#04BE02'}}></i> : percent1 }
          </Circle>
        </div>

        <div style={{width: 100, height: 100, margin: '20px auto'}}>
          <Circle percent={ percent1 } strokeWidth={8} trailWidth={8} strokeColor="#34C0E3">
            { percent1 }
          </Circle>
        </div>

        <div className="tc">
          <Button mini plain onClick={ this.dec }>-</Button> <Button mini plain className="mr10" onClick={ this.add }>+</Button>
        </div>

      </Page>
    );
  },
});

export default Demo
