import React from 'react'
import { PopupRadio, Group } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    render: function() {
      return (
        <Page title="PopupRadio"  subTitle="弹出层单项选择器">
          <Group>
            <PopupRadio
              data={['A','B','C']}
              label="请选择"
            />
          </Group>

          <Group>
            <PopupRadio
              placeholder="请选择手机品牌"
              data={[
                {label: '小米', value: '1001', desc: '国产中的战斗机'},
                {label: '华为', value: '1002'},
                {label: '苹果', value: '1003'},
              ]}
              label="请选择"
            />
          </Group>
        </Page>
      );
    },
});

export default Demo
