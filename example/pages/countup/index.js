import React from 'react'
import Page from '../../component/page'
import { Countup, Button } from '../../../src'

var Demo = React.createClass({
  getInitialState(){
    return { start: false }
  },
  render() {
    return (
      <Page title="Countup" subTitle="数字增长">
        <div style={{height: 60, margin: '30px auto', fontSize: 50, color: '#1AAD19'}} className="tc">
          <Countup startVal={0} endVal={999} start></Countup>
        </div>

        <div style={{height: 60, margin: '30px auto', fontSize: 50, color: '#1AAD19'}} className="tc">
          <Countup startVal={0} endVal={99.99} decimals={2} start></Countup>
        </div>
        <div style={{height: 60, margin: '30px auto', fontSize: 50, color: '#1AAD19'}} className="tc">
          <Countup startVal={0} endVal={99.99} decimals={2} start={ this.state.start }></Countup>
        </div>
        <div style={{ padding: 20 }}>
          <Button type="primary" onClick={()=>this.setState({start: true })}>Start</Button>
        </div>
      </Page>
    );
  },
});

export default Demo
