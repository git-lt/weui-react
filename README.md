## 简介

- 基于 [WeUI v1.1.2](https://github.com/weui/weui) 及 [React 0.13.3](https://github.com/facebook/react/tree/v0.13.3)
- 依赖 [pubsub-js](https://www.npmjs.com/package/pubsub-js)

[在线文档](http://doc.liutao.pw/)

### 重要
**该UI组件库使用的是老版本的 0.13.3 的 React 库，由于老版与新版 React 存在很多不兼容的 API，所以该库也不兼容新版 React，如果你希望使用该库，请自行下载源码，重新调整编写，主要兼容性在于老版自动绑定了组件 this 的上下文，而新版需要手动绑定**

### 提醒
- weui的样式请自行在项目中引用，该库并没有引用
- 组件中使用了 `rem` 单位，参考比例是 375屏宽下，根字体大小为 `100px`

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

- [ ] Picker
- [ ] Number
- [ ] Address
- [ ] Range
- [ ] Datetime
- [ ] DatetimeRange
- [ ] Calendar
- [ ] Countdown
- [ ] Progress
- [ ] Geolocation
- [ ] Scroller
