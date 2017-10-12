import React from 'react'
import { XNumber, Group } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return { }
    },

    render: function() {
      return (
        <Page title="PopupAddress"  subTitle="数量加减">
          <Group title="基本使用">
            <XNumber label="数量" onChange={v=>console.log(v)}></XNumber>
          </Group>
        </Page>
      );
    },
});

export default Demo
