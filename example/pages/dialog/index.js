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
  render: function() {
      return (
        <Page title="Dialog 组件示例">
          <Group title="基本使用">
            <Cell label="dialog.show(...)" desc="默认" onClick={()=>dialog.show('是否确认删除？')} isLink/>
            <Cell label="dialog.show({...})" desc="多个操作" onClick={ this.showDialogActions } isLink/>
            <Cell label="dialog.show({...})" desc="内容过多" onClick={ this.showDialogMore } isLink/>
          </Group>

          <Message/>
        </Page>
      );
  },
});

export default Demo
