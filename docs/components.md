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