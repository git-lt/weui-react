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
