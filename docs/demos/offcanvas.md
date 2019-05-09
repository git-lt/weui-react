## Offcanvas

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/offcanvas"/>

<a href="http://aitter.oschina.io/#/offcanvas" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/offcanvas</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/offcanvas" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Offcanvas, Group, Cell  } from 'mt-weui-react'
import Page from '../../component/page'
import './index.less'

var Demo = React.createClass({
  getInitialState(){
    return {
      showBottom: false,
      showBottom2: false,
      showLeft: false,
      showRight: false,
      showTop: false,
      showTop2: false,

      showBottomFullscreen: false,
      showBottomFullscreen2: false,

      centerShowTop: false,
      centerShowBottom: false,
      centerShowCenter: false,
    }
  },
  render: function() {
      return (
        <Page title="Offcanvas" subTitle="弹出层组件，相比于dialog组件，有更高的灵活性，常用于活动信息提示，选择弹出层，操作弹出层，自定义内容，内置多种弹出方式，可满足大部分需要弹出层的UI交互需求">
          <Group title="居中定位">
            <Cell label="slide-in-top" desc="center" onClick={ ()=>this.setState({ centerShowTop: true })} isLink/>
            <Cell label="slide-in-bottom" desc="center" onClick={ ()=>this.setState({ centerShowBottom: true })} isLink/>
            <Cell label="zoom-in" desc="center" onClick={ ()=>this.setState({ centerShowCenter: true })} isLink/>
          </Group>

          <Group title="其它定位">
            <Cell label="slide in top" desc="top" onClick={ ()=>this.setState({ showTop: true })} isLink/>
            <Cell label="slide in bottom" desc="bottom" onClick={ ()=>this.setState({ showBottom: true })} isLink/>
            <Cell label="slide in left" desc="left" onClick={ ()=>this.setState({ showLeft: true })} isLink/>
            <Cell label="slide in right" desc="right" onClick={ ()=>this.setState({ showRight: true })} isLink/>
          </Group>

          <Group title="弹出多个">
            <Cell label="slide in bottom" desc="bottom" onClick={ ()=>this.setState({ showBottom: true })} isLink/>
          </Group>

          <Group title="onFirstShow事件">
            <Cell label="slide in top" desc="top" onClick={ ()=>this.setState({ showTop2: true })} isLink/>
          </Group>

          <Group title="设置高度和宽度">
            <Cell label="fullscreen - slide in bottom" desc="bottom" onClick={ ()=>this.setState({ showBottomFullscreen: true })} isLink/>
            <Cell label="fullscreen - slide in left" desc="left"  onClick={ ()=>this.setState({ showBottomFullscreen2: true })} isLink/>
          </Group>

          <Offcanvas show={ this.state.centerShowTop } onClose={ ()=>this.setState({ centerShowTop: false })}>
            <div style={{width: 260}}>
              <img style={{borderRadius: '3px', overflow: 'hidden'}} src="http://via.placeholder.com/300x400/8ac7ff" alt=""/>
              <div className="tc pt10">
                <i className="weui-icon-cancel" style={{color:'#fff', fontSize: '26px'}} onClick={()=>this.setState({centerShowTop: false})}></i>
              </div>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.centerShowBottom } animate="slide-in-bottom" onClose={ ()=>this.setState({ centerShowBottom: false })}>
            <div style={{width: 260}}>
              <img style={{borderRadius: '3px', overflow: 'hidden'}} src="http://via.placeholder.com/300x400/8ac7ff" alt=""/>
              <div className="tc pt10">
                <i className="weui-icon-cancel" style={{color:'#fff', fontSize: '26px'}} onClick={()=>this.setState({centerShowBottom: false})}></i>
              </div>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.centerShowCenter } animate="zoom-in" onClose={ ()=>this.setState({ centerShowCenter: false })}>
            <div style={{width: 260}}>
              <img style={{borderRadius: '3px', overflow: 'hidden'}} src="http://via.placeholder.com/300x400/8ac7ff" alt=""/>
              <div className="tc pt10">
                <i className="weui-icon-cancel" style={{color:'#fff', fontSize: '26px'}} onClick={()=>this.setState({centerShowCenter: false})}></i>
              </div>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showTop } position="top" onClose={ ()=>this.setState({ showTop: false })}>
            <div className="inner-box">
                <p className="inner-box-con">顶部内容</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showTop: false})}></i>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showTop2 } position="top" onClose={ ()=>this.setState({ showTop2: false })}  onFirstShow={()=>alert('第一次显示')}>
            <div className="inner-box">
                <p className="inner-box-con">顶部内容</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showTop2: false})}></i>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showBottom } position="bottom" onClose={ ()=>this.setState({ showBottom: false })}>
            <div className="inner-box">
                <p className="inner-box-con">底部内容</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showBottom: false})}></i>
                <div style={{ padding: '20px', textAlign: 'center', color: '#108EE9'}} onClick={()=>this.setState({showBottom2: true })}>再打开一个</div>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showBottom2 } position="bottom" onClose={ ()=>this.setState({ showBottom2: false })}>
            <div className="inner-box" style={{ height: 300 }}>
                <p className="inner-box-con">第二个Offcanvas</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showBottom2: false})}></i>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showLeft } position="left" onClose={ ()=>this.setState({ showLeft: false })}>
            <div className="inner-box" style={{ width: 100, height: '100%'}}>
                <p className="inner-box-con">左侧内容</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showLeft: false})}></i>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showRight } position="right" onClose={ ()=>this.setState({ showRight: false })}>
            <div className="inner-box" style={{ width: 100, height: '100%'}}>
                <p className="inner-box-con">右侧内容</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__left" onClick={()=>this.setState({showRight: false})}></i>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showBottomFullscreen } height="100%" position="bottom" onClose={ ()=>this.setState({ showBottomFullscreen: false })}>
            <div className="inner-box" style={{ height: '100%' }}>
                <p className="inner-box-con">全屏的Offcanvas</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showBottomFullscreen: false})}></i>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.showBottomFullscreen2 } width="100%" position="left" onClose={ ()=>this.setState({ showBottomFullscreen2: false })}>
            <div className="inner-box" style={{ height: '100%' }}>
                <p className="inner-box-con">全屏的Offcanvas</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showBottomFullscreen2: false})}></i>
            </div>
          </Offcanvas>
        </Page>
      );
  },
});

export default Demo

```
