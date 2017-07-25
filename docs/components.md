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
### <span class="mt-component-name">Flex</span>
<span class="mt-component-link"><a href="#" router-link="/demos/flex">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/flex" target="_bank">组件源码</a></span>
<p><span class="mt-component-name">Flexbox</span></p>

``` js
import { Flexbox } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|gutter|Number|8||间隙像素大小|
|justify||||`flex`的 `justify-content`属性|
|align||||`flex`的`align-items`属性|
|wrap||||`flex`的`flex-wrap`属性|
|direction||||`flex`的`flex-direction`属性|

<p><span class="mt-component-name">FlexboxItem</span></p>

``` js
import { FlexboxItem } from 'mt-weui-react'
```

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|span|Number|||占用宽度，如果不设，所有flexbox-item将平分|
|order|String|||`flex`的`order`属性|

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
