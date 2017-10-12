import React from 'react'
import { PopupAddress, Group } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
      }
    },

    render: function() {
      return (
        <Page title="PopupAddress" subTitle="弹出层地址选择器">
          <Group>
            <PopupAddress
              label="地址"
              placeholder="请选择收货地址"></PopupAddress>
          </Group>
        </Page>
      );
    },
});

export default Demo
