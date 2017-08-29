// import React from 'react'
// import classNames from 'classnames'
// import './index.less'
// import Popup from './popup'
//
// var Popup = React.createClass({
//   getInitialState(){
//     this.$el = null;
//     this.popup = null;
//     this.initialShow = true;
//
//     return {
//       display: false,
//       active: false,
//     }
//   },
//
//   componentDidMount(){
//     this.$overflowScrollingList = document.querySelectorAll('.mt-fix-safari-overflow-scrolling')
//     const { showMask, hideOnBlur } = this.props;
//
//     this.popup = new Popup({
//         showMask: showMask,
//         container: this.$el,
//         hideOnBlur: hideOnBlur,
//         onOpen () {
//           this.fixSafariOverflowScrolling('auto')
//           this.setState({ show: true });
//         },
//         onClose () {
//           this.setState({ show: false })
//           if (window.__$mtPopups && Object.keys(window.__$mtPopups).length > 1) return
//           if (document.querySelector('.mt-popup-dialog.mt-popup-mask-disabled')) return
//           setTimeout(() => {
//             this.fixSafariOverflowScrolling('touch')
//           }, 300)
//         }
//       })
//       if (this.state.show) {
//         this.popup.show()
//       }
//       this.initialShow = false
//   },
//   fixSafariOverflowScrolling (type) {
//     if (!this.$overflowScrollingList.length) return
//     // if (!/iphone/i.test(navigator.userAgent)) return
//     for (let i = 0; i < this.$overflowScrollingList.length; i++) {
//       this.$overflowScrollingList[i].style.webkitOverflowScrolling = type
//     }
//   },
//   componentWillReceiveProps(next, prev){
//     return next.show !== this.state.display ? this.update(next.show) : false;
//   },
//   componentWillUnmount(){
//     this.popup.destroy()
//     this.fixSafariOverflowScrolling('touch')
//   },
//   update(show){
//     this.setState({ display: false, active: true });
//     if(this.timer) clearTimeout(this.timer);
//     this.timer = setTimeout(()=>{
//       this.setState({ display: show, active: show });
//       show ? this.props.onShow() : this.props.onClose();
//     }, show ? 0 : 500)
//   },
//   render(){
//     const { position, className, ...others} = this.props;
//     const { show } = this.state;
//
//     const cls = classNames('mt-popup-dialog', {
//       [`mt-popup-${position}`]: true,
//       'mt-popup-show': show,
//       [className]: className,
//     });
//
//     return (
//       <div className={ cls } ref={ ref => this.$el = ref }>
//         { children }
//       </div>
//     );
//   }
// })
//
//
// Popup.propTypes = {
//   show: React.PropTypes.bool,
//   width: React.PropTypes.string,
//   height: React.PropTypes.string,
//   showMask: React.PropTypes.bool,
//   isTransparent: React.PropTypes.bool,
//   hideOnBlur: React.PropTypes.bool,
//   position: React.PropTypes.string,
//   maxHeight: React.PropTypes.string,
//   popupStyle: React.PropTypes.string,
// };
//
// Popup.defaultProps = {
//   show:false,
//   width:'auto',
//   height:'auto',
//   showMask:tue,
//   isTransparent:false,
//   hideOnBlur:true,
//   position:'bottom',
//   maxHeight:'',
//   popupStyle:'',
// };
//
// export default Popup
"use strict";