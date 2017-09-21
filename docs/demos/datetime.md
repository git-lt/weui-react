## Datetime

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/datetime"/>

<a href="http://aitter.oschina.io/#/datetime" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/datetime</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/datetime" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import Page from '../../component/page'
import { Datetime, Group, Button } from 'mt-weui-react'

var Demo = React.createClass({
  getInitialState(){
    return {
      show1: false,
    }
  },
  render() {
    return (
      <Page title="Datetime" subTitle="日期选择">
        <Group title="默认使用, 默认格式：YYYY-MM-DD">
          <Datetime label="生日"></Datetime>
        </Group>

        <Group title="外部触发">
          <Datetime label="生日" show={ this.state.show1 }></Datetime>
        </Group>
        <div style={{ padding: 20}}>
          <Button
            onClick={()=>this.setState({show1: true})}
            updateShow={(v)=>{this.setState({show1: v})} }>
            点击触发
          </Button>
        </div>

        <Group title="自定义时钟和分钟">
          <Datetime label="开始时间" format="YYYY-MM-DD HH:mm" hourList={['09', '10', '11', '12', '2', '3', '4', '5']} minuteList={['00', '15', '30', '45']}></Datetime>
        </Group>

        <Group title="自定义时间显示模板及日期格式化">
          <Datetime
            label="开始时间"
            yearRow="{value}年"
            monthRow="{value}月"
            dayRow="{value}日"
            hourRow="{value}时"
            minuteRow="{value}分"
            format="YYYY-MM-DD HH:mm"
            hourList={['09', '10', '11', '12', '2', '3', '4', '5']}
            minuteList={['00', '15', '30', '45']}></Datetime>
        </Group>

        <Group title="提示文字">
          <Datetime
            label="生日"
            placeholder="请选择年月日">
          </Datetime>
        </Group>

        <Group title="清空选择">
          <Datetime
            label="生日"
            clearText="clear"
            placeholder="请选择年月日">
          </Datetime>
        </Group>

        <Group title="限制开始年份与结束年份">
          <Datetime
            label="开始日期"
            minYear={2000}
            maxYear={2020}
            value="2012-03-05"
            placeholder="请选择年月日">
          </Datetime>
        </Group>

        <Group title="自定义Header的文字">
          <Datetime
            label="开始日期"
            confirmText="确定"
            cancelText="取消"
            clearText="清除"
            value="2012-03-05"
            placeholder="请选择年月日">
          </Datetime>
        </Group>

        <Group title="readonly">
          <Datetime
            label="开始日期"
            readonly
            confirmText="确定"
            cancelText="取消"
            clearText="清除"
            value="2012-03-05"
            placeholder="请选择年月日">
          </Datetime>
        </Group>

      </Page>
    );
  },
});

export default Demo

```
