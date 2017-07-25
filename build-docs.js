'use strict'

const glob = require("glob")
const fs = require('fs')
const yaml = require('js-yaml')
const path = require('path')
const mkdirp = require('mkdirp')
const rimraf = require('rimraf')
const semver = require('semver')
const sortObj = require('sort-object')
const tool = require('./docs/tool')

const dist_demo_dir = path.resolve(__dirname, './docs/demos')
const dist_changes = path.resolve(__dirname, './docs/changes.md')
const dist_components = path.resolve(__dirname, './docs/components.md')
const src_demo_tpl = path.resolve(__dirname, './docs/tpl/demo.md')
const src_examples = path.resolve(__dirname, './example/pages/**/index.js')
const src_metas =  path.resolve(__dirname, './src/components/**/metas.yml')

let demoTpl = fs.readFileSync(src_demo_tpl, 'utf-8')

// 读取文档 src/components/**/metas.yml
// 读取 Demos 源码 example/pages/**/index.js -> 生成 demos/**.md
// 获取 组件说明 -> 生成 components.md
// 获取 changes -> 生成 changes.md 按版本合并

// 删除 demos 目录 添加 demos 目录

let main = {
  run: function(){
    this.runBuildDemos();

    this.runBuildDocs(function(props, changes){
      buildPropsDoc(props)
      buildChangesDoc(changes)
    });
  },

  runBuildDemos: function(){
    rimraf.sync(dist_demo_dir)
    mkdirp.sync(dist_demo_dir)
    glob(src_examples, {}, function (err, files) {
      files.forEach(function(file){
        let fileInfo = getFileInfo(file);
        buildDemoDoc(fileInfo);
      })
    })
  },

  runBuildDocs: function( callback ){
    glob(src_metas, {}, function(err, files){
      let props = [];
      let changes = [];

      files.forEach(function(file){
        let fileInfo = getFileInfo(file);

        let metas = yaml.safeLoad(fileInfo.content);
        metas.comName = fileInfo.comName;
        metas.fileName = fileInfo.fileName;

        props.push(metas);
        metas.changes && changes.push(metas.changes);
      })
      callback(props, changes)
    })
  },
}

main.run();




/**
 * 生成 示例 使用文档
 */
function buildDemoDoc(info) {
  let url = `http://aitter.oschina.io/#/${info.fileName}`
  let doc = demoTpl.replace('$title',info.comName)
    .replace('$js', info.content)
    .replace('$path', info.fileName)
    .replace(/\$url/g, url);

    fs.writeFileSync(path.join(dist_demo_dir, `/${info.fileName}.md`), doc)
}

/**
 * 生成 components 属性事件说明文档
 */
function buildPropsDoc(metas) {
  let doc = '## Components\n';
  metas.forEach(v=>{
    doc += tool.render(v);
  })
  fs.writeFileSync(dist_components, doc)
}

/**
 * 生成 版本更新 文档
 */
function buildChangesDoc(changes) {
  let data = {}, doc = '';

  changes.forEach(v=>{
    for(let k in v){
      Array.isArray(data[k]) ? (data[k] = data[k].concat(v[k])) : (data[k]=v[k])
    }
  })

  let sortKeys = Object.keys(data).sort((a,b)=>semver.lt(semver.clean(a), semver.clean(b)));
  let sortData = {};

  sortKeys.forEach(k=>{ sortData[k] = data[k] })

  for(let v in sortData){
    doc += `\n## ${v}\n`;
    sortData[v].forEach(c=>{
      doc += `- ${c}\n`.replace(/(#\d+)/g, '<a href="https://github.com/git-lt/weui-react/issues/$1" target="_bank">$1<a>');
    })
  }
  fs.writeFileSync(dist_changes, doc)
}


function getFileInfo(file){
  let pathInfo = file.split('/');
  let fileName = pathInfo[pathInfo.length - 2];

  return {
    fileName: fileName,
    comName: PascalCase(fileName),
    content: fs.readFileSync(file, 'utf-8'),
  }
}

function PascalCase(str){
  return str.split('-').map(v=>v.slice(0,1).toUpperCase()+v.slice(1)).join('')
}
