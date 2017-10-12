import React from 'react'
import { Range, Group, Cell } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        num: 0
      }
    },

    render: function() {
      const range = <div style={{ width: 120, marginRight: 30, float: 'right' }}><Range onChange={ v=>{ this.setState({num: v})} }></Range></div>
      return (
        <Page title="Range"  subTitle="数值范围选择">
          <Group>
            <Cell icon={`范围 ${this.state.num}`} label={ range } />
          </Group>

        </Page>
      );
    },
});

export default Demo
