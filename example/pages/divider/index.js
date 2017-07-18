import React from 'react'
import { Divider } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
  render: function() {
      return (
        <Page title="Divider 组件示例">
          <Divider>华丽的分隔线</Divider>

          <Divider>我有是底线的</Divider>

          <Divider style={{ color: 'red' }}>我的有颜色的，更长的文字</Divider>
        </Page>
      );
  },
});

export default Demo;
