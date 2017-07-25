## Flex

### 演示

<img width="100" src="http://qr.topscan.com/api.php?text=http://aitter.oschina.io/#/flex"/>

<a href="http://aitter.oschina.io/#/flex" target="_blank" style="font-size:12px;color:#888;">demo 原始链接：http://aitter.oschina.io/#/flex</a>


### 使用示例

``` javascript
import React from 'react'
import { Flex, FlexItem } from '../../../src'
import Page from '../../component/page'
import './index.less'

var Demo = React.createClass({
  render: function() {
      return (
        <Page title="Flex">
          <div className="eg-flex-wrap">

            <div className="box">
              <h4 className="weui-cells__title">基础网格</h4>

              <Flex options="gutter">
                <FlexItem><div className="item">auto</div></FlexItem>
                <FlexItem><div className="item">auto</div></FlexItem>
                <FlexItem><div className="item">auto</div></FlexItem>
                <FlexItem><div className="item">auto</div></FlexItem>
                <FlexItem><div className="item">auto</div></FlexItem>
              </Flex>

              <Flex options="gutter">
                <FlexItem><div className="item">1/2</div></FlexItem>
                <FlexItem><div className="item">1/2</div></FlexItem>
              </Flex>

              <Flex options="gutter">
                <FlexItem><div className="item">1/3</div></FlexItem>
                <FlexItem><div className="item">1/3</div></FlexItem>
                <FlexItem><div className="item">1/3</div></FlexItem>
              </Flex>

              <Flex options="gutter">
                <FlexItem><div className="item">1/4</div></FlexItem>
                <FlexItem><div className="item">1/4</div></FlexItem>
                <FlexItem><div className="item">1/4</div></FlexItem>
                <FlexItem><div className="item">1/4</div></FlexItem>
              </Flex>

              <Flex options="gutter">
                <FlexItem><div className="item">1/5</div></FlexItem>
                <FlexItem><div className="item">1/5</div></FlexItem>
                <FlexItem><div className="item">1/5</div></FlexItem>
                <FlexItem><div className="item">1/5</div></FlexItem>
                <FlexItem><div className="item">1/5</div></FlexItem>
              </Flex>
            </div>

            <div className="box">
              <h4 className="weui-cells__title">高度一致</h4>
              <Flex options="gutter">
                <FlexItem options="flex"><div className="item">即使只有一行字，高度也会与同级最大项的高度一致</div></FlexItem>
                <FlexItem>
                  <div className="item">
                    每一行里的每一个栅格默认都是同宽同高。默认自适应。
                    为了足够灵活，能够添加尺寸属性到单独的栅格中。
                    没有添加的，仍然简单地平分剩下的可用空间。
                    每一个栅格可以在纯直方向上置顶，置底，剧中。
                  </div>
                </FlexItem>
              </Flex>
            </div>

            <div className="box">
              <h4 className="weui-cells__title">固定宽度和自适应宽度</h4>

              <Flex options="gutter row">
                <FlexItem options="1/2"><div className="item">1/2</div></FlexItem>
                <FlexItem options><div className="item">auto</div></FlexItem>
                <FlexItem options><div className="item">auto</div></FlexItem>
              </Flex>
              <Flex options="gutter row">
                <FlexItem options><div className="item">auto</div></FlexItem>
                <FlexItem options="1/3"><div className="item">1/3</div></FlexItem>
                <FlexItem options><div className="item">auto</div></FlexItem>
              </Flex>
              <Flex options="gutter row">
                <FlexItem options="1/3"><div className="item">1/3</div></FlexItem>
                <FlexItem options><div className="item">auto</div></FlexItem>
                <FlexItem options="1/4"><div className="item">1/4</div></FlexItem>
              </Flex>
              <Flex options="gutter row">
                <FlexItem options="1/3"><div className="item">1/3</div></FlexItem>
                <FlexItem options><div className="item">auto</div></FlexItem>
              </Flex>
            </div>
          </div>
        </Page>
      );
  },
});

export default Demo

```
