## PopupRadio

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/popup-radio"/>

<a href="http://aitter.oschina.io/#/popup-radio" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/popup-radio</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/popup-radio" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { PopupRadio, Group } from 'mt-weui-react'
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

```
