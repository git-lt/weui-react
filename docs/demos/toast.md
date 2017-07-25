## Toast

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/toast"/>

<a href="http://aitter.oschina.io/#/toast" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/toast</a>


### 使用示例

``` javascript
import React from 'react'
import { Message, dialog, toast, Group, Cell } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
  componentDidMount(){
    window.__toast = toast;
  },
  render: function() {
      return (
        <Page title="Toast" subTitle="Toast 一般用于表单验证提示错误消息，异步提交显示 loading, 异步结束，显示提交结果状态">
          <Group title="基本使用">
            <Cell label="toast.show(...)" desc="默认" onClick={()=> toast.show('手机号格式不正确')} />
            <Cell label="toast.show(...)" desc="居上" onClick={()=> toast.show({message:'正在使用wifi网络', position:'top'})} />
            <Cell label="toast.show(...)" desc="居下" onClick={()=> toast.show({message:'复制成功', position:'bottom'})} />
          </Group>

          <Group title="情景使用">
            <Cell label="toast.success(...)" desc="操作成功" onClick={()=> toast.success('操作成功')} />
            <Cell label="toast.cancel(...)" desc="操作取消" onClick={()=> toast.cancel('操作失败')} />
            <Cell label="toast.warning(...)" desc="错误消息" onClick={()=> toast.warning('手机号格式不正确')} />
          </Group>

          <Group title="加载指示[ 只有loading需要手动关闭，其它都是自动关闭]">
            <Cell label="toast.loading(...)" desc="正在加载" onClick={()=> {toast.loading('正在加载'); setTimeout(toast.hide, 2000); }} />
          </Group>

          <Message/>
      </Page>
      );
  },
});

export default Demo

```
