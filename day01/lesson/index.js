// ES moudule 模块引入方式，浏览器无法识别。借助webpack翻译一下
// commonJS 模块引入规范 Node
// CMD
// AMD

// webpack 模块打包工具
// js 模块打包工具 最开始  ->  任何形式

// import Header from './header.js'
// import Sidebar from './sidebar.js'
// import Content from './content.js'

let Header = require('./header.js')
let Sidebar = require('./sidebar.js')
let Content = require('./content.js')

new Header()
new Sidebar()
new Content()


