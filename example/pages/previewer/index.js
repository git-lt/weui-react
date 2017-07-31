import React from 'react'
import { Previewer  } from '../../../src'
import Page from '../../component/page'

var Demo = React.createClass({
    getInitialState(){
      return {
        list: [
          {
            src: 'https://ooo.0o0.ooo/2017/05/17/591c271ab71b1.jpg',
            w: 800,
            h: 400
          },
          {
            src: 'https://ooo.0o0.ooo/2017/05/17/591c271acea7c.jpg'
          },
          {
            src: 'https://ooo.0o0.ooo/2017/06/15/59425a592b949.jpeg'
          }
        ],
        options: {
          getThumbBoundsFn (index) {
            // find thumbnail element
            let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
            // get window scroll Y
            let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
            // optionally get horizontal scroll
            // get position of element relative to viewport
            let rect = thumbnail.getBoundingClientRect()
            // w = width
            return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
            // Good guide on how to get element coordinates:
            // http://javascript.info/tutorial/coordinates
          }
        }
      }
    },
    show (index) {
      this.refs.previewer.show(index)
    },
    render: function() {
      let { list, options } = this.state;
      return (
        <Page title="Previewer" subTitle="图片灯箱">
            {
              list.map((v, i)=>{
                return <img className="previewer-demo-img" key={i} src={v.src} width="100" onClick={()=>this.show(i)} />
              })
            }
          <div>
            <Previewer ref = "previewer"
              list = { list }
              options = { options }>
            </Previewer>
          </div>
        </Page>
      );
    },
});

export default Demo
