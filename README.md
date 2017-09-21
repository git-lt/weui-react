## 简介

- 基于 [WeUI v1.1.2](https://github.com/weui/weui) 及 [React 0.13.3](https://github.com/facebook/react/tree/v0.13.3)
- 依赖 [pubsub-js](https://www.npmjs.com/package/pubsub-js)

[在线文档](http://doc.liutao.pw/)

### 重要
**该UI组件库使用的是老版本的 0.13.3 的 React 库，由于老版与新版 React 存在很多不兼容的 API，所以该库也不兼容新版 React，如果你希望使用该库，请自行下载源码，重新调整编写，主要兼容性在于老版自动绑定了组件 this 的上下文，而新版需要手动绑定**

### 样式及适配
- weui的样式请自行在项目中引用，该库并没有引用
- 组件中使用了 `rem` 单位，参考比例是 375屏宽下，根字体大小为 `100px`

`index.html` 的head中加入下面这段JS，以便动态计算 `REM`

```javascript
(function(d,c){var e=d.documentElement,a="orientationchange" in window?"orientationchange":"resize",b=function(){var h=e.clientWidth||320;var f=e.classList;var g=h<320?320:h>450?450:h;var i=100*(g/375);c.REM=i;e.style.fontSize=i+"px";e.style.opacity=1};e.style.opacity=0;c.addEventListener(a,b,false);d.addEventListener("DOMContentLoaded",b,false);c.rem2px=function(f){return parseFloat(f)*c.REM};c.px2rem=function(f){return parseFloat(f)/c.REM}})(document,window);
```

## 示例Demo

<img src="http://7xi480.com1.z0.glb.clouddn.com/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7%202017-07-19%20%E4%B8%8B%E5%8D%886.06.36.png" width="300" alt="">

[在线Demo](http://aitter.oschina.io/)

## 安装使用

### 安装

```
yarn add mt-react-weui
```

### 全部引用

```javascript
import React from 'react'
import { Button, Flex } from 'mt-weui-react'
const FlexItem = Flex.FlexItem

let App = React.createClass({
  render() {
      return (
        <Flex>
          <FlexItem><Button>hello wechat</Button></FlexItem>
          <FlexItem><Button>hello wechat</Button></FlexItem>
        </Flex>
      );
  }
})

ReactDOM.render((
    <App/>
), document.getElementById('container'));

```

## 按需引用

在非SPA应用中使用，最好使用按需要引用的方式加载需要用到的组件，以节省加载资源，按需引用有两中方式引用

### 直接引用

```javascript
import Button from 'mt-weui-react/lib/components/button'
```

### 使用Babel插件，编译成上面的方式

安装 [babel-plugin-component](https://github.com/QingWei-Li/babel-plugin-component) babel插件

```
npm i babel-plugin-component --save-dev
```

在文件 `.babelrc` 文件中添加配置

```javascript
"plugins": [
 ["component", {"libraryName": "mt-weui-react", "libDir":"lib/components", "style": false }]
]
```

然后在项目中正常引入相关组件，最后会被编译成按需引入的方式

```javascript
import { Button } from 'mt-weui-react'

// 经过插件转译为：
import Button from 'mt-weui-react/lib/components/button'
```


## 本地开发

```
yarn run start
```

启动本地开发，打开 `http://localhost:8081` 预览

### 打包

```
yarn run build
yarn run build:example
```

示例Demo发布到 `/dist` 目录下

### 文档

#### 生成文档

```
yarn run build:docs
```

### 预览文档

```
yarn run docs
```

打开 `http://localhost:8087` 预览文档

## TODO LIST

- [x] Divider
- [x] Group
- [x] Cell
- [x] Header
- [x] Badge
- [x] Message
- [x] dialog
- [x] toast
- [x] GroupTitle
- [x] Button
- [x] Checkbox
- [x] Flex
- [x] FlexItem
- [x] Grid
- [x] GridItem
- [x] Input
- [x] Msg
- [x] Offcanvas
- [x] Sticky
- [x] Swiper
- [x] SwiperItem
- [x] Switch
- [x] Tab
- [x] TabItem
- [x] Textarea
- [x] Tip
- [x] FormPreviex
- [x] Picker
- [x] Previewer
- [x] Circle
- [x] Marquee
- [x] PopupHeader

- [x] Datetime
- [x] Clocker
- [x] Countup
- [ ] PopupPicker
- [ ] DateTimeRange
- [ ] Address
- [ ] PopupRadio
- [ ] Actionsheet
- [ ] Number


## 感谢

- 本项目主要参考了 `weui` 官方的 [weui](https://github.com/weui/weui) 及 [react-weui](https://github.com/weui/react-weui/) 及 [Vux](https://github.com/airyland/vux)(Vue版本的WeUI)
- Api风格与 vux 基本一致
