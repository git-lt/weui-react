## Picker

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/picker"/>

<a href="http://aitter.oschina.io/#/picker" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/picker</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/picker" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Picker, GroupTitle  } from '../../../src'
import chinaAddress from '../../../src/components/picker/china_address.json'

var Demo = React.createClass({
    getInitialState(){
      return {
        data1: ['2001','2002','2003','2004','2005'],
        data2: [[2001, 2002, 2003],[1,2,3,4,5,6],[10,11,12,13,14]],
        data3: chinaAddress,
      }
    },

    render: function() {
      let { list } = this.state;

      return (
        <div>
          <h3 className="eg-page-tit" >Picker 组件示例</h3>
          <GroupTitle>基本使用</GroupTitle>
            <Picker data={ this.state.data1 } value={['2001']}></Picker>
            <Picker data={ this.state.data2 } value={['2001', '2', '13']}></Picker>
            <Picker data={ this.state.data3 } value={[]} columns={ 2 }></Picker>
        </div>
      );
    },
});

// <Picker data={ this.state.data3 } value={[]} columns={ 3 }></Picker>
// <Picker data={ this.state.data2 } value={[2001, 2, 13]}></Picker>

// <Picker data={ this.state.data2 } value={['2001', '2', '13']}></Picker>
// <Picker data={ this.state.data3 } value={[]} columns={ 3 }></Picker>
export default Demo

```
