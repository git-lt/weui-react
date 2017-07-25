
const tool = {
  render: function(meta){
    let doc = '\n----\n';

    doc += this.renderBase(meta);

    if(meta.isItems){
      meta.items.forEach(v=>{
        doc += this.renderSubTitle(v);
        doc += this.renderImport(v);
        doc += this.renderTips(v);
        doc += this.renderProps(v);
        doc += this.renderEvents(v);
      })
    }else{
      doc += this.renderImport(meta);
      doc += this.renderTips(meta);
      doc += this.renderProps(meta);
      doc += this.renderEvents(meta);
    }

    return doc;
  },
  renderSubTitle: function(meta){
    return `\n<p><span class="mt-component-name">${meta.comName}</span></p>\n`
  },
  renderImport: function(meta){
    let doc = '';

    doc += '\n``` js\n';
    doc += `import { ${meta.importName || meta.comName} } from 'mt-weui-react'\n`;
    doc += '```\n';

    return doc;
  },
  renderBase: function(meta){
    let doc = '';
    doc += `### <span class="mt-component-name">${meta.comName}</span>\n`;

    doc += `<span class="mt-component-link"><a href="#" router-link="/demos/${meta.fileName}">示例代码</a></span>`
    doc += `<span class="mt-component-link"><a href="https://github.com/git-lt/weui-react/tree/master/src/components/${meta.fileName}" target="_bank">组件源码</a></span>`

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

    doc += `\n<span class="mt-props-title">Props</span>\n\n`;
    doc += `| name  | type | default | version | description |\n`;
    doc += `|-------|------|---------|---------|-------------|\n`;

    let props = [];
    for(let k in meta.props){
      let t = meta.props[k];
      props.push('|'+[k, t.type, t.default||'', t.version||'', t.desc||'' ].join('|')+'|')
    }
    doc += props.join('\n')
    return doc+'\n';
  },
  renderEvents: function(meta){
    let doc = '';
    if(!meta.events) return doc;

    doc += `\n<span class="mt-props-title">Events</span>\n\n`;
    doc += `| name  | params | version | description |\n`;
    doc += `|-------|--------|---------|-------------|\n`;

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
