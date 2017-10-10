import React from 'react'
import { PopupPicker, Group, Cell  } from '../../../src'
import Page from '../../component/page'
import chinaAddress from '../../../src/components/picker/china_address.json'

var Demo = React.createClass({
  getInitialState(){
    // console.log(chinaAddress)
    return {
      data1: ['小米1', 'iPhone1', '华为1', '情怀1', '三星1', '其他1', '不告诉你1'],
      value1: ['小米1'],
      data2: [[2001, 2002, 2003],[1,2,3,4,5,6],[10,11,12,13,14]],
      value2: ['2001', '2', '13'],
      data3: chinaAddress,
    }
  },
  change1(v){
    this.setState({
      value1: [v]
    })
  },
  format2(v){
    return `${v[0]}年${v[1]}月${v[2]}日`
  },
  formatCity(v){
    var t1='', t2='';

    chinaAddress.forEach(item=>{
      item.value == v[0] && (t1 = item.name);
      item.value == v[1] && (t2 = item.name);
    })
    return t1+' '+t2;
  },
  render() {
    const { data1, value1, data2, value2, data3 } = this.state;
      return (
        <Page title="PopupPicker" subTitle="弹出层数据选择器">
          <Group title="基本使用">
            <PopupPicker
              value={ value1}
              data={ data1 }
              label="品牌"
              placeholder="点击请选择"
              onChange={ this.change1 }>
            </PopupPicker>
          </Group>

          <Group title="多列选择及格式化">
            <PopupPicker
              value={ value2}
              data={ data2 }
              label="生日"
              placeholder="点击请选择"
              displayFormat={ this.format2 }>
            </PopupPicker>
          </Group>

          <Group title="联动选择">
            <PopupPicker
              value={ [] }
              data={ data3 }
              columns={2}
              displayFormat={ this.formatCity }
              label="地区"
              placeholder="点击请选择">
            </PopupPicker>
          </Group>

        </Page>
      );
  }

})

export default Demo
