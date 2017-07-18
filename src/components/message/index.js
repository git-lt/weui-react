import React from 'react'
import PubSub from 'pubsub-js'
import Dialog from '../dialog'
import Toast from '../toast'

const SHOW_DIALOG = 'SHOW_DIALOG'
const HIDE_DIALOG = 'HIDE_DIALOG'
const SHOW_TOAST = 'SHOW_TOAST'
const HIDE_TOAST = 'HIDE_TOAST'

const TYPES = ['success','loading','warning','success','cancel'];

const Message = React.createClass({
  displayName: 'Message',
  getInitialState(){
    return {
      dialog:{},
      toast:{},
    }
  },

  componentDidMount(){
    PubSub.subscribe( SHOW_DIALOG, this.showDialog )
    PubSub.subscribe( HIDE_DIALOG, this.hideDialog )
    PubSub.subscribe( SHOW_TOAST, this.showToast )
    PubSub.subscribe( HIDE_TOAST, this.hideToast )
  },

  showDialog(e, options){
    let t = typeof options;
    if(t === 'string' || (t === 'object' && t._isReactElement)){
      options = { message: options };
    }
    options.show = true;
    if(!options.title) options.title = '提示';
    if(!options.buttons && options.cloaseable !== false) options.buttons = [ {label:'知道了', onClick: (e)=>{
      PubSub.publish(HIDE_DIALOG);
      e.preventDefault();
    }} ];
    this.setState({ dialog: { ...options } })
  },

  hideDialog(){
    let dialog = this.state.dialog;
    dialog.show = false;
    this.setState({ dialog });
  },

  showToast(e, options){
    let t = typeof options;
    if(t === 'string' || (t === 'object' && t._isReactElement)){
      options = { message: options };
    }
    options.show = true;
    this.setState({ toast:{ ...options } });

    if('loading' === options.type ) return;

    const duration = options.duration || 2;
    setTimeout(this.hideToast, duration*1000);
  },

  hideToast(){
    var toast = this.state.toast;
    toast.show = false;
    this.setState({ toast });
  },

  render: function() {
    return (
      <div>
        <Dialog {...this.state.dialog} />
        <Toast {...this.state.toast} />
      </div>
    );
  }
})

const dialog = {
  show(options){ PubSub.publish(SHOW_DIALOG, options) },
  hide(){ PubSub.publish(HIDE_DIALOG) },
}

const toast = {
  show(options){ PubSub.publish(SHOW_TOAST, options) },
  hide(){ PubSub.publish(HIDE_TOAST) }
}

// 加点糖
TYPES.forEach(v=>{
  toast[v]=options=>{
    let opt = { message: options, type: v};
    PubSub.publish(SHOW_TOAST, opt);
  }
})

export { Message, dialog, toast }
