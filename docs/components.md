## Components

----
### <span class="mt-component-name">Badge</span>
<span class="mt-component-link"><a href="#" router-link="/demos/badge">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/badge">组件源码</a></span>
``` js
import { Badge } from 'mt-weui-react'
```
<p class="warning">asdfdfasdfasdf2222</p>
<p class="tip">asdfasfdas1111</p>

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|text|String|||显示的文字|
----
### <span class="mt-component-name">Button</span>
<span class="mt-component-link"><a href="#" router-link="/demos/button">示例代码</a></span><span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/button">组件源码</a></span>
``` js
import { Button } from 'mt-weui-react'
```
<p class="warning">按照`Vue`[文档](https://cn.vuejs.org/v2/guide/components.html#使用-v-on-绑定自定义事件)，在组件上绑定点击事件请使用`@click.native`。</p>

<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
|type|String|default||按钮类型，可选值为 `default,primary,warn`|
|disabled|Boolean|||是否不可点击|
|text|String|||按钮文字，同默认slot|
|mini|Boolean|||是否为mini类型，即小尺寸的按钮|
|plain|Boolean|||是否是plain样式，没有背景色|
|action-type||||`button`的type属性，默认为浏览器默认(submit)，可选为 `submit` `button` `reset`|
|link|||v2.3.5|vue-router 路由, 值为 `BACK` 等同于 `go(-1)`|