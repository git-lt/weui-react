import React from 'react'
import { Progress } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    render: function() {
      return (
        <Page title="Progress"  subTitle="进度条组件">
          <div style={{ margin: 20 }}>
            <Progress percent={ 30 } showCancel />
          </div>
          <div style={{ margin: 20 }}>
            <Progress percent={ 50 } showCancel={ false } />
          </div>
        </Page>
      );
    },
});

export default Demo
