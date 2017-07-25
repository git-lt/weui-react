## Badge

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/badge"/>

<a href="http://aitter.oschina.io/#/badge" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/badge</a>


### 使用示例

``` javascript
import React from 'react'
import { Group, Cell, Badge } from '../../../src'
import Page from '../../component/page'

const msgIcon = (<div style={{position:'relative', marginRight: '10px'}}>
  <i className="iconfont icon-yijianfankuiX" style={{ width: 35, height: 35, background: '#ccc', display:'block'}}></i>
  <Badge text="10" style={{position: "absolute", top: '-7px', right: '-5px'}}/>
</div>);

const msgLabel = <span>意见反馈<br/><p className="c-8" style={{fontSize:'12px'}}>摘要信息</p></span>;

var Demo = React.createClass({
    render: function() {
        return (
          <Page title="Badge">
            <Group title="新消息提示跟摘要信息后，统一在列表右侧">
              <Cell label="了解更多" isLink desc={<span>详细信息<Badge style={{marginLeft:'5px', verticalAlign:'1px'}}/></span>}/>
            </Group>

            <Group title="未读数红点跟在主题信息后，统一在列表左侧">
              <Cell icon={ msgIcon } label={ msgLabel }/>
              <Cell label={<span>我的订单 <Badge text="10"/></span>} isLink desc='详细信息' />
              <Cell label={<span>我的消息 <Badge text="New"/></span>} isLink />
            </Group>
          </Page>
        );
    },
});

export default Demo

```
