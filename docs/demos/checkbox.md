## Checkbox

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/checkbox"/>

<a href="http://aitter.oschina.io/#/checkbox" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/checkbox</a>

<div style="width:377px;height:667px;display:inline-block;border:1px dashed #ececec;border-radius:5px;overflow:hidden;">
  <iframe src="http://aitter.oschina.io/#/checkbox" width="375" height="667" border="0" frameborder="0"></iframe>
</div>


### 使用示例

``` javascript
import React from 'react'
import { Checkbox } from 'mt-weui-react'
import Page from '../../component/page'

var Demo = React.createClass({
  getInitialState(){
    return {
      data1: [
        {id: 1, text: '芒果'},
        {id: 2, text: '苹果'},
        {id: 3, text: '葡萄'},
        {id: 4, text: '西瓜'},
      ],
      data2:[
        {id: 1, text: '芒果'},
        {id: 2, text: '苹果'},
      ],
      data3:[
        {id: 3, text: '葡萄'},
        {id: 4, text: '西瓜'},
      ],
      data4: [
        {id: '芒果', text: '芒果'},
        {id: '苹果', text: '苹果'},
        {id: '葡萄', text: '葡萄'},
        {id: '西瓜', text: '西瓜'},
      ],
      textRadioRes: '西瓜',
      currChecked: [1,3],
      radioChecked: 1,
      chkRes2:[1],
      radioRes2: 2,
      disChkRes1: [1],
      disRaioRes1: 2,
      disRaioRes2: 2,
      disChkRes2:[],
    }
  },

  changeEv1(v){
    let currChecked = this.state.currChecked;

    var idx = currChecked.indexOf(v);

    idx === -1 ? currChecked.push(v) : currChecked.splice(idx, 1);

    this.setState({ currChecked });

    console.log(currChecked);
  },

  changeEv2(v){
    let chked = this.state.textRadioRes;
    if(v!== chked) this.setState({ textRadioRes: v});

    console.log(v);
  },

  changeEv3(v){
    let currChecked = this.state.chkRes2;

    var idx = currChecked.indexOf(v);

    idx === -1 ? currChecked.push(v) : currChecked.splice(idx, 1);

    this.setState({ chkRes2: currChecked });

    console.log(currChecked);
  },

  changeEv4(v){
    let chked = this.state.radioRes2;
    if(v!== chked) this.setState({ radioRes2: v});

    console.log(v);
  },
  changeEv5(v){
    let currChecked = this.state.disChkRes1;

    var idx = currChecked.indexOf(v);

    idx === -1 ? currChecked.push(v) : currChecked.splice(idx, 1);

    this.setState({ disChkRes1: currChecked });

    console.log(currChecked);
  },
  changeEv6(v){
    let chked = this.state.disRaioRes1;
    if(v!== chked) this.setState({ disRaioRes1: v});

    console.log(v);
  },
  changeEv7(v){
    let chked = this.state.disRaioRes2;
    if(v!== chked) this.setState({ disRaioRes2: v});

    console.log(v);
  },
  changeEv8(v){
    let currChecked = this.state.disChkRes2;

    var idx = currChecked.indexOf(v);

    idx === -1 ? currChecked.push(v) : currChecked.splice(idx, 1);

    this.setState({ disChkRes2: currChecked });

    console.log(currChecked);
  },
  render: function() {
      return (
        <Page title="Checkbox" subTitle="checkbox 及 radio 的在UI表现上基本一致，区别在于多选和单选，这里抽离为一个组件，通过状态数据配置多选和单选逻辑">
            <h4 className="weui-cells__title">空心 checkbox  右对齐</h4>
            <Checkbox
              data={ this.state.data1 }
              checkedItems={ this.state.currChecked }
              shape="rect"
              onClick={ this.changeEv1 }/>
            <div>当前选择：[{ this.state.currChecked+''}]</div>

            <h4 className="weui-cells__title">空心 radio  左对齐</h4>
            <Checkbox
              data={ this.state.data4 }
              checkedItems={ this.state.textRadioRes }
              position="left"
              type="radio"
              onClick={ this.changeEv2 }/>
            <div>当前选择：{ this.state.textRadioRes+''}</div>

            <h4 className="weui-cells__title">实心 checkbox</h4>
            <Checkbox
              data={ this.state.data1 }
              checkedItems={ this.state.chkRes2 }
              shape="rect-fill"
              onClick={ this.changeEv3 }/>
            <div>当前选择：[{ this.state.chkRes2+''}]</div>

            <h4 className="weui-cells__title">实心 radio</h4>
            <Checkbox
              data={ this.state.data1 }
              checkedItems={ this.state.radioRes2 }
              position="left"
              type="radio"
              shape="circle-fill"
              onClick={ this.changeEv4 }/>
            <div>当前选择：{ this.state.radioRes2+''} </div>

            <h4 className="weui-cells__title">禁用radio [ 禁用的是未选中的，其它可切换，禁用的是选中的，则全禁用 ]</h4>
            <Checkbox
              data={ this.state.data1 }
              checkedItems={ this.state.disRaioRes1 }
              shape="rect"
              type="radio"
              disableItems={ 1 }
              onClick={ this.changeEv6 }
            />

            <Checkbox
              data={ this.state.data1 }
              checkedItems={ this.state.disRaioRes2 }
              shape="rect"
              type="radio"
              disableItems={ 2 }
              onClick={ this.changeEv7 }
            />

          <h4 className="weui-cells__title">checkbox 限制选择个数 [ 最多选择2项 ]</h4>
          <Checkbox
            data={ this.state.data1 }
            checkedItems={ this.state.disChkRes2 }
            shape="rect"
            max={2}
            onClick={ this.changeEv8 }
          />
        </Page>
      );
  },
});

export default Demo

// 禁用：
// 是radio 如果是禁用的是未选中的，那么其它的可切换，如果禁用的是选中的，那么其他的不可切换
// 是checkbox，除了禁用的不可操作，其它的可切换
// checkbox: 最大限制，超过了限制，则不可再选择更多(禁用掉未选择的checbox), radio 没有这个限制

```
