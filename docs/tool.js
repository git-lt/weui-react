
const tool = {
  render: function(meta){
    let doc = '';

    doc += this.renderBase(meta);
    doc += this.renderTips(meta);
    doc += this.renderProps(meta);
    doc += this.renderEvents(meta);

    return doc;
  },
  renderBase: function(meta){
    let doc = '\n----\n';
    doc += `### <span class="mt-component-name">${meta.comName}</span>\n`;

    doc += `<span class="mt-component-link"><a href="#" router-link="/demos/${meta.fileName}">示例代码</a></span>`
    doc += `<span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/${meta.fileName}" target="_bank">组件源码</a></span>`

    doc += '\n``` js\n';
    doc += `import { ${meta.importName || meta.comName} } from 'mt-weui-react'\n`;
    doc += '```\n';

    return doc;
  },
  renderTips: function(meta){
    let doc = '', w = meta.warnings, t = meta.tips;
    Array.isArray(w) && w.map(v=>{ doc += `<p class="warning">${v}</p>\n` })
    Array.isArray(t) && t.forEach(v=>{ doc += `<p class="tip">${v}</p>\n` })

    return doc;
  },
  renderProps: function(meta){
    let doc = '';
    if(!meta.props) return doc;

    doc += `
<span class="mt-props-title">Props</span>

| name  | type | default | version | description |
|-------|------|---------|---------|-------------|
`;
    let props = [];
    for(let k in meta.props){
      let t = meta.props[k];
      props.push('|'+[k, t.type, t.default||'', t.version||'', t.desc||'' ].join('|')+'|')
    }
    doc += props.join('\n')
    return doc;
  },
  renderEvents: function(meta){
    let doc = '';
    if(!meta.events) return doc;

    doc += `
<span class="mt-props-title">Events</span>

| name  | params | version | description |
|-------|--------|---------|-------------|
`;
    let props = [];
    for(let k in meta.events){
      let t = meta.props[k];
      props.push('|'+[k, t.params||'', t.version||'', t.desc||'' ].join('|')+'|')
    }
    doc += props.join('\n')
    return doc;
  },
}

module.exports = tool
