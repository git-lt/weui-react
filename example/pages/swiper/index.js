import React from 'react'
import { Swiper, SwiperItem, Button, GroupTitle } from '../../../src'
import Page from '../../component/page'
import './index.less'

var Demo = React.createClass({
    getInitialState(){
      return {
        current1: 0,
        btnLoading: false,
        asyncList: [],
        list: [{
          url: 'javascript:',
          img: 'https://static.vux.li/demo/1.jpg',
          title: '送你一朵fua'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/2.jpg',
          title: '送你一辆车'
        }, {
          url: 'javascript:',
          img: 'https://static.vux.li/demo/3.jpg',
          title: '送你一次旅行'
        }]
      }
    },
    loadList(){
      this.setState({btnLoading: true })
      setTimeout(()=>{
        this.setState({
          asyncList: this.state.list,
          btnLoading: false,
        })
      }, 2000)
    },
    render: function() {
      let { list } = this.state;

      return (
        <Page title="Swiper">
          <GroupTitle>基本使用</GroupTitle>
          <Swiper list = { list } current={this.state.current1} onChange={i=>console.log(i)}/>

          <div className="p15">
            <Button onClick={ ()=>this.setState({current1: 0})}>go 0</Button>
            <Button onClick={ ()=>this.setState({current1: 1})}>go 1</Button>
            <Button onClick={ ()=>this.setState({current1: 2})}>go 2</Button>
          </div>

          <GroupTitle>自动播放</GroupTitle>
          <Swiper list = { list } auto/>

          <GroupTitle>循环播放</GroupTitle>
          <Swiper list = { list } auto loop/>

          <GroupTitle>根据宽度自动计算高度</GroupTitle>
          <Swiper style={{width:'85%', margin: '0 auto'}} list = { list } aspectRatio={300/800}/>

          <GroupTitle>使用 swiperItem 自定义内容</GroupTitle>
          <Swiper auto height={ 100 } current={2}>
            <SwiperItem><h2 className="swiper-tit">它无孔不入</h2></SwiperItem>
            <SwiperItem><h2 className="swiper-tit">你无处可藏</h2></SwiperItem>
            <SwiperItem><h2 className="swiper-tit">不是它可恶</h2></SwiperItem>
            <SwiperItem><h2 className="swiper-tit">而是它不懂你</h2></SwiperItem>
          </Swiper>

          <GroupTitle>垂直方向滚动播报</GroupTitle>
          <Swiper auto direction="vertical" showDots={ false } height={30} className="eg-swiper-notice">
            <SwiperItem ><p>义务爱了 完成传奇世界H5-王者归来任务 获得20金币</p></SwiperItem>
            <SwiperItem><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></SwiperItem>
            <SwiperItem><p>零哥章魚 完成传奇世界H5-王者归来任务 获得30金币</p></SwiperItem>
            <SwiperItem><p>做迎而為 兑换【饿了么】畅享美食红包 消耗20金币</p></SwiperItem>
            <SwiperItem><p>只知道不知道 兑换【饿了么】畅享美食红包 消耗20金币</p></SwiperItem>
            <SwiperItem><p>基本世神 兑换《传奇世界H5》畅玩级礼包 消耗30金币</p></SwiperItem>
          </Swiper>

          <GroupTitle>异步加载List数据</GroupTitle>
          <Swiper auto list={ this.state.asyncList }/>
          <div className="p15">
            <Button onClick={ this.loadList } loading={ this.state.btnLoading }>异步加载List</Button>
          </div>
        </Page>
      );
    },
});

export default Demo
