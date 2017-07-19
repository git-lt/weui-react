import React from 'react'
import { Offcanvas, Group, Cell  } from '../../../src'
import Page from '../../component/page'
import './index.less'

var Demo = React.createClass({
  getInitialState(){
    return {
      showBottom: false,
      showLeft: false,
      showRight: false,
      showTop: false,

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

          <Offcanvas show={ this.state.centerShowTop } onClose={ ()=>this.setState({ centerShowTop: false })}>
            <div style={{width: 260}}>
              <img style={{borderRadius: '3px', overflow: 'hidden'}} src="https://static.vux.li/demos/v2/static/img/01.06186f7.jpg" alt=""/>
              <div className="tc pt10">
                <i className="weui-icon-cancel" style={{color:'#fff', fontSize: '26px'}} onClick={()=>this.setState({centerShowTop: false})}></i>
              </div>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.centerShowBottom } animate="slide-in-bottom" onClose={ ()=>this.setState({ centerShowBottom: false })}>
            <div style={{width: 260}}>
              <img style={{borderRadius: '3px', overflow: 'hidden'}} src="https://static.vux.li/demos/v2/static/img/01.06186f7.jpg" alt=""/>
              <div className="tc pt10">
                <i className="weui-icon-cancel" style={{color:'#fff', fontSize: '26px'}} onClick={()=>this.setState({centerShowBottom: false})}></i>
              </div>
            </div>
          </Offcanvas>

          <Offcanvas show={ this.state.centerShowCenter } animate="zoom-in" onClose={ ()=>this.setState({ centerShowCenter: false })}>
            <div style={{width: 260}}>
              <img style={{borderRadius: '3px', overflow: 'hidden'}} src="https://static.vux.li/demos/v2/static/img/01.06186f7.jpg" alt=""/>
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

          <Offcanvas show={ this.state.showBottom } position="bottom" onClose={ ()=>this.setState({ showBottom: false })}>
            <div className="inner-box">
                <p className="inner-box-con">底部内容</p>
                <i className="weui-icon-cancel inner-box-close inner-box-close__right" onClick={()=>this.setState({showBottom: false})}></i>
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
        </Page>
      );
  },
});

export default Demo
