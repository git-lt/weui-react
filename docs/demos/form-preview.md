## FormPreview

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/form-preview"/>

<a href="http://aitter.oschina.io/#/form-preview" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/form-preview</a>


### 使用示例

``` javascript
import React from 'react'
import { FormPreview } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState: function () {
        return {
          data1:{
            items:[
              {label: '姓名', value: '张三'},
              {label: '电话', value: '17787878787'},
              {label: '身份证', value: '4287672878098765'},
              {label: '性别', value: '男'},
              {label: '年龄', value: 27},
              {label: '婚姻状况', value: '已婚'},
            ],
            buttons:[
              { label: '编辑信息', onClick:()=> alert('跳转页面') }
            ]
          },

          data2:{
            label:'付款金额',
            value:'￥600.00',
            items:[
              {label: '套餐', value: '基础套餐'},
              {label: '余额支付', value: '￥43.22'},
              {label: '体检卡支付', value: '￥100.00'},
            ],
            buttons:[
              { label: '取消支付', type:'default', onClick:()=> alert('取消') },
              { label: '确认支付', onClick:()=> alert('确认') }
            ]
          },
        };
    },

    render: function() {
      let { data1, data2 } = this.state;
        return (
          <Page title="FormPreview">
            <FormPreview  {...data1}/>
            <FormPreview  {...data2}/>
          </Page>
        );
    },
});

export default Demo

```
