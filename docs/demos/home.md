## Home

### 演示
<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/home" width="375" height="667" border="0" frameborder="0"></iframe>
</div>

### 使用示例

``` javascript
import React from 'react'
import { Group, Cell, Header } from '../../../src'
import Page from '../../component/page'
import { Link } from 'react-router'

const checkedIcon = <i className="weui-icon-success-no-circle" style={{fontSize: 12}}></i>;

let Home = React.createClass({
  render(){
    return (
      <Page title="Weui React 组件库" subTitle="每天健康移动端UI组件库，持续更新中...">
        <Group title="基础组件">
          <Cell label="Divider" desc="分隔线" icon={ checkedIcon } href={'/#/divider'}/>
          <Cell label="Grid" desc="宫格" icon={ checkedIcon } href={'/#/grid'}/>
          <Cell label="Flex" desc="Flex网格" icon={ checkedIcon } href={'/#/flex'}/>
          <Cell label="GroupTitle" desc="分组标题" icon={ checkedIcon }/>
        </Group>
        <Group title="操作反馈">
          <Cell label="Dialog" desc="对话框" icon={ checkedIcon } href={'/#/dialog'}/>
          <Cell label="Toast"  desc="轻提示" icon={ checkedIcon } href={'/#/toast'}/>
          <Cell label="Msg" desc="操作结果页" icon={ checkedIcon } href={'/#/msg'}/>
          <Cell label="Tip" desc="顶部通知" icon={ checkedIcon } href={'/#/tip'}/>
          <Cell label="Offcanvas" desc="弹出层" icon={ checkedIcon } href={'/#/offcanvas'}/>
        </Group>
        <Group title="数据录入">
          <Cell label="Button" desc="按钮" icon={ checkedIcon } href={'/#/button'}/>
          <Cell label="Group" desc="分组" icon={ checkedIcon }/>
          <Cell label="Checkbox" desc="单选与多选" icon={ checkedIcon } href={'/#/checkbox'}/>
          <Cell label="Switch" desc="开关" icon={ checkedIcon } href={'/#/switch'}/>
          <Cell label="Input" desc="输入" icon={ checkedIcon } href={'/#/input'}/>
          <Cell label="Textarea" desc="多行文本输入" icon={ checkedIcon } href={'/#/textarea'}/>
        </Group>
        <Group title="数据展示">
          <Cell label="FormPreview" desc="表单预览" icon={ checkedIcon } href={'/#/form-preview'}/>
          <Cell label="Cell" desc="列表" icon={ checkedIcon } href={'/#/cell'}/>
          <Cell label="Header" desc="页头" icon={ checkedIcon } href={'/#/header'}/>
          <Cell label="Badge" desc="徽章" icon={ checkedIcon } href={'/#/badge'}/>
          <Cell label="Swiper" desc="滑动相册" icon={ checkedIcon } href={'/#/swiper'}/>
          <Cell label="Sticky" desc="滚动锁定" icon={ checkedIcon } href={'/#/sticky'}/>
        </Group>

        <Group title="导航相关">
          <Cell label="Tab" desc="选项卡" icon={ checkedIcon } href={'/#/tab'}/>
        </Group>
      </Page>
    )
  }
})

// <Cell label="Picker" href={'/#/picker'}/>

// <Cell label="Number" desc="数值输入" href={'/#/number'}/>
// <Cell label="Address" desc="地址选择" href={'/#/address'}/>
// <Cell label="Range" desc="范围选择" href={'/#/range'}/>
// <Cell label="Datetime" desc="日期选择" href={'/#/datetime'}/>
// <Cell label="DatetimeRange" desc="日期时间选择" href={'/#/datetimerange'}/>
// <Cell label="Calendar" desc="日历" href={'/#/calendar'}/>
// <Cell label="Countdown" desc="倒计时" href={'/#/coundown'}/>

// <Cell label="Progress" desc="进度展示" href={'/#/progress'}/>
// <Cell label="Geolocation" href={'/#/geolocation'}/>
// <Cell label="Scroller" href={'/#/scroller'}/>
export default Home;

```
