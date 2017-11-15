## Components

----
### <span class="mt-component-name">Badge</span>
<span class="mt-component-link"><a href="#" router-link="/demos/badge">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/badge" target="_bank">组件源码</a></span>
``` js
import { Badge } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|text|String|||显示的文字|

----
### <span class="mt-component-name">Button</span>
<span class="mt-component-link"><a href="#" router-link="/demos/button">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/button" target="_bank">组件源码</a></span>
``` js
import { Button } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|type|String|default||按钮类型，可选值为 `default,primary,warn`|
|disabled|Boolean|||是否不可点击|
|text|String|||按钮文字|
|mini|Boolean|||是否为mini类型，即小尺寸的按钮|
|plain|Boolean|||是否是plain样式，没有背景色|
|actionType|String|||`button` 的type属性，默认为浏览器默认(submit)，可选为 `submit` `button` `reset`|
|loading|Boolean|||是否显示loading|
|href|String|||跳转链接|

----
### <span class="mt-component-name">Cell</span>
<span class="mt-component-link"><a href="#" router-link="/demos/cell">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/cell" target="_bank">组件源码</a></span>
``` js
import { Cell } from 'mt-weui-react'
```
<p class="tip">该组件为 `Group` 的子组件，必需结合 `Group` 组件使用</p>

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|label|any|||标题文本，一般使用文本，更复杂的可使用jsx|
|desc|any|||描述文本，一般使用文本，更复杂的可使用jsx|
|subDesc|any|||副描述文本，一般使用文本，更复杂的可使用jsx|
|icon|any|||图标，一般使用jsx `<i className="icon icon-left" />`|
|href|String|||链接地址|
|isLink|Boolean|||是否是链接，如果 `href` 有值，则 `isLink` 自动为 `true`, 显示箭头|

----
### <span class="mt-component-name">Checkbox</span>
<span class="mt-component-link"><a href="#" router-link="/demos/checkbox">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/checkbox" target="_bank">组件源码</a></span>
``` js
import { Checkbox } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|disabled|Boolean|||是否禁用|
|type|String|checkbox||类型：checbox、radio|
|shape|String|circle||表现形状，三种形状：rect、rect-fill、circle-fill|
|position|String|right||checkbox 的对齐方式，默认label在右，checkbox在左|
|data|Array|||List数据：[{id:1, text:'a'}, {id:2, text:'b'}]|
|name|String|||input的 name 值|
|checkedItems|Array|[]||当前选中项的 value 组成的数组|
|disableItems|Array|[]||当前禁用项的 vaLue 组成的数组|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onClick|||点击时的回调函数|
----
### <span class="mt-component-name">Circle</span>
<span class="mt-component-link"><a href="#" router-link="/demos/circle">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/circle" target="_bank">组件源码</a></span>
``` js
import { Circle } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|strokeWidth|Number|1||进度圆环的宽度|
|strokeColor|String|#37c7fa||进度圆环的颜色|
|trailWidth|Number|1||进度圆环的背景宽度|
|trailColor|String|#d9d9d9||进度圆环的背景颜色|
|percent|Number|||进度数值|

----
### <span class="mt-component-name">Clocker</span>
<span class="mt-component-link"><a href="#" router-link="/demos/clocker">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/clocker" target="_bank">组件源码</a></span>
``` js
import { Clocker } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|precision|Number|100||时间更新频率，默认为100ms|
|time|Number|||最终时间，格式为时间戳|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|formatFn|(d1, d2, h1, h2, m1, m2, s1, m2) 分别为天时分秒的十位与个位||返回JSX的时间显示模板|
|onTick|(event)自定义的时间对象||时间更新的回调函数|
|onFinish|||时间结束时的回调函数|
----
### <span class="mt-component-name">Countup</span>
<span class="mt-component-link"><a href="#" router-link="/demos/countup">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/countup" target="_bank">组件源码</a></span>
``` js
import { Countup } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|start|Boolean|||是否自动开始计数|
|startVal|Number|||开始数字|
|endVal|Number|||结束数字|
|decimals|Number|||小数点位数|
|duration|Number|2||动画持续时间|
|options|Object|{}||countup.js的设置项|

----
### <span class="mt-component-name">Datetime</span>
<span class="mt-component-link"><a href="#" router-link="/demos/datetime">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/datetime" target="_bank">组件源码</a></span>
``` js
import { Datetime } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|label|String|||Cell的标题文本|
|value|String|||当前日期（已经格式化好的日期，和format格要一致辞）|
|defaultSelectedValue|String|||datetime picker打开时默认显示的日期|
|format|String|YYYY-MM-DD||日期格式|
|placeholder|String|||右侧提示文字|
|confirmText|String|||picker右侧确认文字|
|cancelText|String|||picker左侧取消文字|
|clearText|String|||picker中间清空文字|
|minYear|Number|||限制最大年份|
|maxYear|Number|||限制最小年份|
|minHour|Number|||限制小时|
|maxHour|Number|||限制小时|
|maxDate|Number|||限制日期，精确到天，不含时分秒|
|minDate|Number|||限制日期，精确到天，不含时分秒|
|readonly|Boolean|||是否只读，只读时，不实例化picker|
|show|Boolean|||默认是否打开picker，可用于从外部元素使用此属性触发|
|renderInline|Boolean|||是否直接在界面上显示|
|yearRow|String|{value}||时间显示模板|
|monthRow|String|{value}||时间显示模板|
|dayRow|String|{value}||时间显示模板|
|hourRow|String|{value}||时间显示模板|
|minuteRow|String|{value}||时间显示模板|
|hourList|Arrary|||小时列表|
|minuteList|Arrary|||分钟列表|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|updateShow|||外部使用其它方式触发时，更新显示状态的回调|
|onChange|||选择时触发，一般用于直接在界面上展示，需要实时更新选择日期时的回调|
|onClear|||清空时的回调|
|onHide|||关闭时的回调|
|onShow|||显示后的回调|
|onConfirm|||确认选择的回调|
----
### <span class="mt-component-name">Dialog</span>
<span class="mt-component-link"><a href="#" router-link="/demos/dialog">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/dialog" target="_bank">组件源码</a></span>
``` js
import { Dialog } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|buttons|Array|[]||对话框底部的操作按钮|
|show|Boolean|||是否显示|
|title|String|||标题|
|message|Any|||对话框的内容|
|closable|Boolean|||是否显示关闭|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onShow|||打开的回调|
|onClose|||关闭的回调|
----
### <span class="mt-component-name">Divider</span>
<span class="mt-component-link"><a href="#" router-link="/demos/divider">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/divider" target="_bank">组件源码</a></span>
``` js
import { Divider } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|text|Any|||显示文本，一般使用文本，更复杂的可使用jsx|

----
### <span class="mt-component-name">Flex</span>
<span class="mt-component-link"><a href="#" router-link="/demos/flex">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/flex" target="_bank">组件源码</a></span>
<p><span class="mt-component-name">Flex</span></p>

``` js
import { Flex } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|gutter|Number|20||网格之间的间距|
|options|String|||options为以下取值
```
row: 子元素行显示
column: 子元素列显示
center: 子元素水平垂直居中
wrap: 子元素如果是有固定宽度或高度，超出换行显示
main-start: 主轴起始对齐
main-center: 主轴居中对齐
main-end: 主轴末尾对齐
maine-between: 主轴两端对齐
main-around: 主轴散列对齐
cross-start: 侧轴起始对齐
cross-center: 侧轴居中对齐
cross-end: 侧轴末尾对齐
cross-between: 侧轴两端对齐
cross-around: 侧轴散列对齐
cross-stretch: 侧轴拉伸对齐
```
|

<p><span class="mt-component-name">FlexItem</span></p>

``` js
import { FlexItem } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|options|String|||options为以下取值
```
flex
start
end
center
baseline
stretch
order1
order2
order3
order4
order5
order6
order7
order8
order9
order10

1/2
1/3
1/4
1/5
1/6
```
|

----
### <span class="mt-component-name">FormPreview</span>
<span class="mt-component-link"><a href="#" router-link="/demos/form-preview">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/form-preview" target="_bank">组件源码</a></span>
``` js
import { FormPreview } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|label|String|||标题|
|value|String|||一般显示总金额|
|items|Array|||键值对数组 [{label: '', value:''}]|
|buttons|Array|||按钮配置数组 [{label: '', onClick:, type:'primary/default'}]|

----
### <span class="mt-component-name">Grid</span>
<span class="mt-component-link"><a href="#" router-link="/demos/grid">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/grid" target="_bank">组件源码</a></span>
<p><span class="mt-component-name">GridItem</span></p>

``` js
import { GridItem } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|label|Any|||格子中显示的标题|
|icon|Any|||格子中显示的图标|
|link|String|||点击时的链接|

----
### <span class="mt-component-name">GroupTitle</span>
<span class="mt-component-link"><a href="#" router-link="/demos/group-title">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/group-title" target="_bank">组件源码</a></span>
``` js
import { GroupTitle } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|text|Any|||组标题，一般使用文本，更复杂的可使用jsx|

----
### <span class="mt-component-name">Group</span>
<span class="mt-component-link"><a href="#" router-link="/demos/group">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/group" target="_bank">组件源码</a></span>
``` js
import { Group } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|title|String|||标题 一般使用文本，更复杂的可使用jsx|
|labelWidth|String|||子元素 label 宽度|
|labelAlign|String|||子元素 label 对齐方式|
|labelMarginRight|String|||子元素 label 右边距|
|marginTop|String|||分组的上边距，在没有 title 时有效|

----
### <span class="mt-component-name">Header</span>
<span class="mt-component-link"><a href="#" router-link="/demos/header">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/header" target="_bank">组件源码</a></span>
``` js
import { Header } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|title|Any|||标题，一般使用文本，更复杂的可使用jsx|
|backText|String|||返回的内容文字|
|showBack|Boolean|true||是否显示左侧的返回按钮|
|showHome|Boolean|true||是否显示右侧的首页图标|
|homeUrl|String|||跳转到首页的首页地址|
|preventGoBack|Boolean|false,||是否阻止返回|
|left|Any|||左侧的内容，可以是字符也可以是JSX|
|right|Any|||右侧的内容，可以是字符也可以是JSX|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onClickBack|||点击返回时执行的事件，此时不会自动返回|
----
### <span class="mt-component-name">Input</span>
<span class="mt-component-link"><a href="#" router-link="/demos/input">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/input" target="_bank">组件源码</a></span>
``` js
import { Input } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|type|String|text||text,number,password,tel,select|
|right|Any|||右侧的自定义内容，如验证码图片，发送验证码按钮等|
|label|Any||||
|showClear|Boolean|||输入时是否显示清除|
|vcode|Boolean|||是否是验证码输入|
|labelAlign|String||||
|focusInput|String|||当前聚焦的input的stateName|
|name|String||||
|errorInput|String|||需要显示错误的input的stateName|
|value|Any||||
|showWarnIcon|Boolean|||是否显示错误提示图标，有时输入框太小，不需要显示icon|
|readOnly|Boolean||||
|disabled|Boolean||||
|placeholder|String||||
|autoComplete|String|off||输入提示|
|maxLength|String|999||最多输入的字符数|
|debounce|Number||||
|selectOptions|Array|||为select时的数据配置[{vlaue:'', text:''}]|
|selectedValue|Any|||为select时选中的值|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChange|||input 原生事件|
|onFocus|||input 原生事件|
|onBlur|||input 原生事件|
|onClick|||input 原生事件|
<span class="mt-props-title">Methods</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|clear|||清空 input 的value|
|blur|||失入焦点|
|focus|||使 input 获取焦点|
|reset|`(value)`||传入 `value` 重新设置 `input` 的值|
----
### <span class="mt-component-name">Marquee</span>
<span class="mt-component-link"><a href="#" router-link="/demos/marquee">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/marquee" target="_bank">组件源码</a></span>
<p><span class="mt-component-name">Marquee</span></p>

``` js
import { Marquee } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|interval|Number|2000||切换时间间隙|
|duration|Number|200||切换动画时间|
|direction|String|up||切换方向: up/down|

<span class="mt-props-title">Methods</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|refresh|||刷新列表数据|
----
### <span class="mt-component-name">Mask</span>
<span class="mt-component-link"><a href="#" router-link="/demos/mask">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/mask" target="_bank">组件源码</a></span>
``` js
import { Mask } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|transparent|Boolean|||是否是透明的|

----
### <span class="mt-component-name">Message</span>
<span class="mt-component-link"><a href="#" router-link="/demos/message">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/message" target="_bank">组件源码</a></span>
``` js
import { Message dialog toast } from 'mt-weui-react'
```
<p class="tip">这是一个便捷插件，页面引用 `Message` 组件，使用 `dialog.show(...)` 与 `toast.show(..)` 来显示相应的组件</p>
<p class="tip">`dialog` 与 `toast` 的配置，请查看相关文档</p>

----
### <span class="mt-component-name">Msg</span>
<span class="mt-component-link"><a href="#" router-link="/demos/msg">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/msg" target="_bank">组件源码</a></span>
``` js
import { Msg } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||显示隐藏|
|header|Object|||页面标题的props，详细请看Header组件|
|title|Any|||标题, 可以是jsx|
|desc|Any|||描述, 可以是jsx|
|type|String|success||显示类型  sucess / error|
|buttons|Array|||Msg页面显示的Buttons按钮配置|
|footerLinks|Array|||底部链接，[{ href:'', text:'' }]|
|footerText|String|||底部文字|

----
### <span class="mt-component-name">Offcanvas</span>
<span class="mt-component-link"><a href="#" router-link="/demos/offcanvas">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/offcanvas" target="_bank">组件源码</a></span>
``` js
import { Offcanvas } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||显示隐藏，由外部控制|
|position|String|center||top/left/bottom/center|
|animate|String|slide-in-top||居中显示时的动画，slide-in-top / slide-in-bottom / zoom-in|
|closeByMask|Boolean|true||是否可以点击遮罩关闭|
|hideMask|Boolean|||用于隐藏遮罩，使其透明|
|height|String,|auto||用于从上或从下弹出时，设置弹出层的高度，一般为auto，可以使用百分比数值|
|width|String,|auto||用于从左或从右弹出时，设置弹出层的宽度，一般为auto，可以使用百分比数值|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onClose|||关闭事件，组件关闭调用这个事件|
|onShow|||显示之后的回调|
|onHide|||关闭之后的回调|
|onFirstShow|||用于首次显示时的回调|
----
### <span class="mt-component-name">Picker</span>
<span class="mt-component-link"><a href="#" router-link="/demos/picker">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/picker" target="_bank">组件源码</a></span>
``` js
import { Picker } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|value|Array / String|||选中的值|
|columns|Number|||当数据是联动的，必须设置展示列数|
|columnWidth|Array|||列的宽度，默认自适应宽度，不需要设置最后一列|
|data|Array|||选择器的数据，可以是
``` javascript
['1','2','3']
[['2001','2002','2003'],['1','2','3'],['11','12','13']]
[{
  name: '中国',
  value: 'china',
  parent: 0
}, {
  name: '美国',
  value: 'USA',
  parent: 0
}, {
  name: '广东',
  value: 'china001',
  parent: 'china'
}, {
  name: '广西',
  value: 'china002',
  parent: 'china'
}, {
  name: '美国001',
  value: 'usa001',
  parent: 'USA'
}, {
  name: '美国002',
  value: 'usa002',
  parent: 'USA'
}, {
  name: '广州',
  value: 'gz',
  parent: 'china001'
}, {
  name: '深圳',
  value: 'sz',
  parent: 'china001'
}, {
  name: '广西001',
  value: 'gx001',
  parent: 'china002'
}, {
  name: '广西002',
  value: 'gx002',
  parent: 'china002'
}, {
  name: '美国001_001',
  value: '0003',
  parent: 'usa001'
}, {
  name: '美国001_002',
  value: '0004',
  parent: 'usa001'
}, {
  name: '美国002_001',
  value: '0005',
  parent: 'usa002'
}, {
  name: '美国002_002',
  value: '0006',
  parent: 'usa002'
}]
```
|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChage|(currentValues)||选择数据变化时，返回选择的数据|
----
### <span class="mt-component-name">PopupAddress</span>
<span class="mt-component-link"><a href="#" router-link="/demos/popup-address">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/popup-address" target="_bank">组件源码</a></span>
``` js
import { PopupAddress } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||显示隐藏|
|label|String|||label名称|
|displayFormat|Function|v=>v||格式化函数，用于格式化选中的值|
|value|String|||默认选中的值|
|cancelText|String|取消|||
|confirmText|String|确定|||
|placeholder|String|||提示文本|
|columns|Number|||列数，用于联动数据|
|data|Array|||数组数据，格式参数Picker组件|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChage|(arrValue)||选择之后的回调|
----
### <span class="mt-component-name">PopupHeader</span>
<span class="mt-component-link"><a href="#" router-link="/demos/popup-header">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/popup-header" target="_bank">组件源码</a></span>
``` js
import { PopupHeader } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|leftText|String|||左边的文字|
|rightText|String|||右边的文字|
|title|String|||标题|
|showBottomBorder|Boolean|||是否显示底边框|

----
### <span class="mt-component-name">PopupPicker</span>
<span class="mt-component-link"><a href="#" router-link="/demos/popup-picker">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/popup-picker" target="_bank">组件源码</a></span>
``` js
import { PopupPicker } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||显示隐藏|
|label|String|||label名称|
|displayFormat|Function|v=>v||格式化函数，用于格式化选中的值|
|value|String|||默认选中的值|
|cancelText|String|取消|||
|confirmText|String|确定|||
|placeholder|String|||提示文本|
|columns|Number|||列数，用于联动数据|
|data|Array|||数组数据，格式参数Picker组件|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChage|(arrValue)||选择之后的回调|
----
### <span class="mt-component-name">PopupRadio</span>
<span class="mt-component-link"><a href="#" router-link="/demos/popup-radio">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/popup-radio" target="_bank">组件源码</a></span>
``` js
import { PopupRadio } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||显示隐藏|
|label|String|||label名称|
|displayFormat|Function|v=>v||格式化函数，用于格式化选中的值|
|value|String|||默认选中的值|
|cancelText|String|取消|||
|confirmText|String|确定|||
|placeholder|String|||提示文本|
|columns|Number|||列数，用于联动数据|
|data|Array|||数组数据，格式参数Picker组件|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChage|(arrValue)||选择之后的回调|
----
### <span class="mt-component-name">Previewer</span>
<span class="mt-component-link"><a href="#" router-link="/demos/previewer">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/previewer" target="_bank">组件源码</a></span>
``` js
import { Previewer } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|list|Array|||图片列表|
|options|Object|[object Object]||`photoswipe` 的设置|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onClose|||关闭的回调|
<span class="mt-props-title">Methods</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|show|(index)||图片的索引|
|close|(index)||图片的索引|
----
### <span class="mt-component-name">Progress</span>
<span class="mt-component-link"><a href="#" router-link="/demos/progress">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/progress" target="_bank">组件源码</a></span>
``` js
import { Progress } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|percent|Number|||进度值，0到100|
|showCancel|Boolean|true||是否显示取消按钮|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onCancel|(percent)||点击取消按钮时触发|
----
### <span class="mt-component-name">Range</span>
<span class="mt-component-link"><a href="#" router-link="/demos/range">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/range" target="_bank">组件源码</a></span>
``` js
import { Range } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|value|Number|||选择器的初始值|
|decimal|Boolean|||是否在变化时显示小数|
|min|Number|||可选最小值|
|max|Number|100||可选最大值|
|step|Number|1||步长|
|disabled|Boolean|||是否禁用|
|minHTML|String|||最小值显示的html模板|
|maxHTML|String|||最大值显示的html模板|
|disabledOpacity|Number|||禁用样式的透明度|
|rangeBarHeight|Number|1||高度|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChange|`(value)`||绑定值变化时触发事件|
----
### <span class="mt-component-name">Sticky</span>
<span class="mt-component-link"><a href="#" router-link="/demos/sticky">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/sticky" target="_bank">组件源码</a></span>
``` js
import { Sticky } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|scrollBox|DOM Object|||滚动容器Dom对象|
|offset|Number|||滚动时，fixed定位距离顶部的高度|
|checkStickySupport|Boolean|true||检查是否支持css3的 sticky 样式，如果为 false，则不检查使用fixed定位|

----
### <span class="mt-component-name">Swiper</span>
<span class="mt-component-link"><a href="#" router-link="/demos/swiper">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/swiper" target="_bank">组件源码</a></span>
<p><span class="mt-component-name">Swiper</span></p>

``` js
import { Swiper } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|list|Array|||图片数据|
|direction|String|horizontal||滚动方向 vertical/horizontal|
|showDots|Boolean|true||显示点|
|showDescMask|Boolean|true||是否显示遮罩层|
|dotsPosition|String|right||点的位置，left/center/right|
|dotsClass|String|||点容器的样式类|
|auto|Boolean|||是否自动播放|
|loop|Boolean|||是否循环播放|
|interval|Number|3000||循环的时间|
|threshold|Number|50||滑动多少距离时才开始滚动|
|duration|Number|300|||
|height|String|180||高度|
|aspectRatio|Number|||宽高比|
|minMovingDistance|Number|||滚动多少距离时，才开始切换|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChange|||切换后的回调|
----
### <span class="mt-component-name">Switch</span>
<span class="mt-component-link"><a href="#" router-link="/demos/switch">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/switch" target="_bank">组件源码</a></span>
``` js
import { Switch } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|label|Any|||表单文本|
|checked|Boolean|||是否选中|
|disabled|Boolean|||是否禁用|

----
### <span class="mt-component-name">Tab</span>
<span class="mt-component-link"><a href="#" router-link="/demos/tab">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/tab" target="_bank">组件源码</a></span>
<p><span class="mt-component-name">Tab</span></p>

``` js
import { Tab } from 'mt-weui-react'
```
<p class="tip">需要和 `TabItem` 组件配合使用，`TabItem` 是 `Tab` 的子组件</p>

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|bgColor|String|transparent||Tab的背景颜色|
|lineWidth|String|100%||指示线的宽度|
|lineLeft|String|0%||指示线离左边的距离，由外部状态计算得来|
|lineHeight|String|2px||指示线的高度|
|lineColor|String|||线的颜色|
|innerWidth|String|100%||Tab自身的宽度|

<p><span class="mt-component-name">TabItem</span></p>

``` js
import { TabItem } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|disabled|Boolean|||是否禁用|
|index|Number|||组件索引值|
|acitveIndex|Number|||当前选中的tab索引|
|onClick|Function|noop||点击事件|
|height|String|.5rem||tab-item的高度|

----
### <span class="mt-component-name">Textarea</span>
<span class="mt-component-link"><a href="#" router-link="/demos/textarea">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/textarea" target="_bank">组件源码</a></span>
``` js
import { Textarea } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||显示隐藏|
|value|String|||Textarea中的值|
|maxLength|String|||最多可填写的字符数量|
|height|String|75px||Textarea的高度|
|rows|String|3||Textarea的rows|
|cols|String|30||Textarea的cols|

----
### <span class="mt-component-name">Tip</span>
<span class="mt-component-link"><a href="#" router-link="/demos/tip">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/tip" target="_bank">组件源码</a></span>
``` js
import { Tip } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|message|Any|||消息内容，可以是任意内容|
|icon|Any|||消息提示图标|
|closable|Boolean|||是否显示关闭图标|
|duration|Number|||指定时长之后自动关闭|
|type|String|warning||显示类型，warning/info/success/error/default|
|show|Boolean|true||是否显示|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onClose|||关闭的回调|
----
### <span class="mt-component-name">Toast</span>
<span class="mt-component-link"><a href="#" router-link="/demos/toast">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/toast" target="_bank">组件源码</a></span>
``` js
import { Toast } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|show|Boolean|||是否显示|
|type|String|default||类型 `default`, `success`, `loading`, `warning`, `success`, `cancel` |
|position|String,|||显示的位置，可选择 `top`、`bottom`|
|message|Any|||显示的内容，可以是JSX|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onShow|||打开的回调|
|onClose|||关闭的回调|
----
### <span class="mt-component-name">XNumber</span>
<span class="mt-component-link"><a href="#" router-link="/demos/x-number">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/x-number" target="_bank">组件源码</a></span>
``` js
import { XNumber } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|value|Number|||默认数值|
|label|String|||表单lable|
|min|Number|||最小值|
|max|Number|100||最大值|
|step|Number|1||步长|
|fillable|Boolean|||是否可填写|
|width|String|50px||输入框宽度|
|buttonStyle|String|square||按钮样式，可选值为`square`或者`round`|

<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
|onChange|`(value)`||绑定值变化时触发事件|