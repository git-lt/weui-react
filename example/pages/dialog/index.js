import React from 'react'
import { Message, dialog, toast, Group, Cell } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
  componentDidMount(){
    window.__dialog = dialog;
  },
  showDialogDefault(){
    dialog.show({ message: '默认显示' })
  },
  showDialogActions(){
    dialog.show({
      message: '这是一条提示消息！',
      buttons: [
        {
          label: '取消',
          type: 'default',
          onClick: ()=>{
            alert('取消')
            dialog.hide();
          },
        },
        {
          label: '知道了',
          onClick: dialog.hide,
        }
      ],
    })
  },
  showDialogMore: function(){
    dialog.show({
      message: '这是一条提示消息！这是一条提示消息！这是一条提示消息！这是这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！这是一条提示消息！！',
      buttons: [
        {
          label: '知道了',
          onClick: dialog.hide,
        }
      ],
    })
  },
  showDialogClosable: function(){
    dialog.show({
      message: '是否确认删除？',
      closable: true
    })
  },
  showMultBtn(){
    dialog.show({
      title: '提示',
      message: '说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字说明文字',
      buttons:[
        {label: '确定', type: 'primary', onClick: dialog.hide},
        {label: '修改', type: 'default', onClick: dialog.hide},
        {label: '关闭', type: 'default', onClick: dialog.hide}
      ]
    })
  },
  render: function() {
      return (
        <Page title="Dialog">
          <Group title="基本使用">
            <Cell label="dialog.show(...)" desc="默认" onClick={()=>dialog.show('是否确认删除？')} isLink/>
            <Cell label="dialog.show({...})" desc="多个操作" onClick={ this.showDialogActions } isLink/>
            <Cell label="dialog.show({...})" desc="内容过多" onClick={ this.showDialogMore } isLink/>
          </Group>

          <Group title="带关闭图标">
            <Cell label="dialog.show({...})" desc="可关闭" onClick={ this.showDialogClosable } isLink/>
          </Group>

          <Group title="大于2个按钮">
            <Cell label="dialog.show({...})" desc="2个按钮以上" onClick={ this.showMultBtn } isLink/>
          </Group>

          <Message/>
        </Page>
      );
  },
});

export default Demo
