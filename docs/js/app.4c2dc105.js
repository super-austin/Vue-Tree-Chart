(function(e){function t(t){for(var r,i,s=t[0],d=t[1],c=t[2],f=0,p=[];f<s.length;f++)i=s[f],n[i]&&p.push(n[i][0]),n[i]=0;for(r in d)Object.prototype.hasOwnProperty.call(d,r)&&(e[r]=d[r]);l&&l(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],r=!0,s=1;s<a.length;s++){var d=a[s];0!==n[d]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=a[0]))}return e}var r={},n={app:0},o=[];function i(t){if(r[t])return r[t].exports;var a=r[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=r,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(a,r,function(t){return e[t]}.bind(null,r));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/Vue-Tree-Chart/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],d=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var l=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"034f":function(e,t,a){"use strict";var r=a("e2a1"),n=a.n(r);n.a},"3f8c":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"#app{font-family:Avenir,Helvetica,Arial,sans-serif;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-align:center;color:#2c3e50;margin-top:60px}#app .avat{border-radius:2em;border-width:2px}#app .name{font-weight:700}.foot{position:fixed;left:0;bottom:0;width:100%;background:#333;padding:24px;overflow:hidden;color:#999;font-size:14px;text-align:center}.foot a{color:#fff;margin:0 .5em}",""])},"56d7":function(e,t,a){"use strict";a.r(t);a("cadf"),a("551c"),a("f751"),a("097d");var r=a("2b0e"),n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("label",[e._v("\n    切换为横向\n    "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.landscape,expression:"landscape"}],attrs:{type:"checkbox",value:"1"},domProps:{checked:Array.isArray(e.landscape)?e._i(e.landscape,"1")>-1:e.landscape},on:{change:function(t){var a=e.landscape,r=t.target,n=!!r.checked;if(Array.isArray(a)){var o="1",i=e._i(a,o);r.checked?i<0&&(e.landscape=a.concat([o])):i>-1&&(e.landscape=a.slice(0,i).concat(a.slice(i+1)))}else e.landscape=n}}})]),a("TreeChart",{class:{landscape:e.landscape.length},attrs:{json:e.data},on:{"click-node":e.clickNode}}),e._m(0)],1)},o=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("footer",{staticClass:"foot"},[a("p",[e._v("© 2018 - 3018 Author\n          "),a("a",{attrs:{href:"https://refined-x.com/",target:"_blank"}},[e._v("雅X共赏")]),e._v(" \n          Github \n          "),a("a",{attrs:{href:"https://github.com/tower1229/Vue-Tree-Chart",target:"_blank"}},[e._v("Vue-Tree-Chart")])])])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return e.treeData.name?a("table",[a("tr",[a("td",{class:{parentLevel:e.treeData.children,extend:e.treeData.children&&e.treeData.extend},attrs:{colspan:e.treeData.children?2*e.treeData.children.length:1}},[a("div",{class:{node:!0,hasMate:e.treeData.mate}},[a("div",{staticClass:"person",on:{click:function(t){return e.$emit("click-node",e.treeData)}}},[a("div",{staticClass:"avat"},[a("img",{attrs:{src:e.treeData.image_url}})]),a("div",{staticClass:"name"},[e._v(e._s(e.treeData.name))])]),e.treeData.mate?a("div",{staticClass:"person",on:{click:function(t){return e.$emit("click-node",e.treeData.mate)}}},[a("div",{staticClass:"avat"},[a("img",{attrs:{src:e.treeData.mate.image_url}})]),a("div",{staticClass:"name"},[e._v(e._s(e.treeData.mate.name))])]):e._e()]),e.treeData.children?a("div",{staticClass:"extend_handle",on:{click:function(t){return e.toggleExtend(e.treeData)}}}):e._e()])]),e.treeData.children&&e.treeData.extend?a("tr",e._l(e.treeData.children,function(t,r){return a("td",{key:r,staticClass:"childLevel",attrs:{colspan:"2"}},[a("TreeChart",{attrs:{json:t},on:{"click-node":function(t){return e.$emit("click-node",t)}}})],1)}),0):e._e()]):e._e()},s=[],d=(a("ac6a"),{name:"TreeChart",props:["json"],data:function(){return{treeData:{}}},watch:{json:{handler:function(e){var t=function e(t){return t.extend=void 0===t.extend||!!t.extend,Array.isArray(t.children)&&t.children.forEach(function(t){e(t)}),t};e&&(this.treeData=t(e))},immediate:!0}},methods:{toggleExtend:function(e){e.extend=!e.extend,this.$forceUpdate()}}}),c=d,l=(a("6120"),a("2877")),f=Object(l["a"])(c,i,s,!1,null,"3e1326fa",null),p=f.exports,h={name:"app",components:{TreeChart:p},data:function(){return{landscape:[],data:{name:"root",image_url:"https://static.refined-x.com/static/avatar.jpg",children:[{name:"children1",image_url:"https://static.refined-x.com/static/avatar.jpg"},{name:"children2",image_url:"https://static.refined-x.com/static/avatar.jpg",mate:{name:"mate",image_url:"https://static.refined-x.com/static/avatar.jpg"},children:[{name:"grandchild",image_url:"https://static.refined-x.com/static/avatar.jpg"},{name:"grandchild2",image_url:"https://static.refined-x.com/static/avatar.jpg"},{name:"grandchild3",image_url:"https://static.refined-x.com/static/avatar.jpg"}]}]}}},methods:{clickNode:function(e){console.log(e)}}},m=h,u=(a("034f"),Object(l["a"])(m,n,o,!1,null,null,null)),v=u.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#app")},6120:function(e,t,a){"use strict";var r=a("ab84"),n=a.n(r);n.a},ab84:function(e,t,a){var r=a("f338");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("89684ff6",r,!0,{sourceMap:!1,shadowMode:!1})},e2a1:function(e,t,a){var r=a("3f8c");"string"===typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);var n=a("499e").default;n("1f50beb8",r,!0,{sourceMap:!1,shadowMode:!1})},f338:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,'table[data-v-3e1326fa]{border-collapse:separate!important;border-spacing:0!important}td[data-v-3e1326fa]{position:relative;vertical-align:top;padding:0 0 50px 0;text-align:center}.extend_handle[data-v-3e1326fa]{position:absolute;left:50%;bottom:30px;width:10px;height:10px;padding:10px;-webkit-transform:translate3d(-15px,0,0);transform:translate3d(-15px,0,0);cursor:pointer}.extend_handle[data-v-3e1326fa]:before{content:"";display:block;width:100%;height:100%;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid;border-color:#ccc #ccc transparent transparent;-webkit-transform:rotate(135deg);transform:rotate(135deg);-webkit-transform-origin:50% 50% 0;transform-origin:50% 50% 0;-webkit-transition:-webkit-transform .3s ease;transition:-webkit-transform .3s ease;transition:transform .3s ease;transition:transform .3s ease,-webkit-transform .3s ease}.extend_handle[data-v-3e1326fa]:hover:before{border-color:#333 #333 transparent transparent}.extend .extend_handle[data-v-3e1326fa]:before{-webkit-transform:rotate(-45deg);transform:rotate(-45deg)}.extend[data-v-3e1326fa]:after{bottom:15px}.childLevel[data-v-3e1326fa]:before,.extend[data-v-3e1326fa]:after{content:"";position:absolute;left:50%;height:15px;border-left:2px solid #ccc;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}.childLevel[data-v-3e1326fa]:before{bottom:100%}.childLevel[data-v-3e1326fa]:after{content:"";position:absolute;left:0;right:0;top:-15px;border-top:2px solid #ccc}.childLevel[data-v-3e1326fa]:first-child:before,.childLevel[data-v-3e1326fa]:last-child:before{display:none}.childLevel[data-v-3e1326fa]:first-child:after{left:50%;height:15px;border:2px solid;border-color:#ccc transparent transparent #ccc;border-radius:6px 0 0 0;-webkit-transform:translate3d(1px,0,0);transform:translate3d(1px,0,0)}.childLevel[data-v-3e1326fa]:last-child:after{right:50%;height:15px;border:2px solid;border-color:#ccc #ccc transparent transparent;border-radius:0 6px 0 0;-webkit-transform:translate3d(-1px,0,0);transform:translate3d(-1px,0,0)}.childLevel:first-child.childLevel[data-v-3e1326fa]:last-child:after{left:auto;border-radius:0;border-color:transparent #ccc transparent transparent;-webkit-transform:translate3d(1px,0,0);transform:translate3d(1px,0,0)}.node[data-v-3e1326fa]{width:13em;-webkit-box-sizing:border-box;box-sizing:border-box;text-align:center}.node[data-v-3e1326fa],.node .person[data-v-3e1326fa]{position:relative;display:inline-block}.node .person[data-v-3e1326fa]{z-index:2;width:6em;overflow:hidden}.node .person .avat[data-v-3e1326fa]{display:block;width:4em;height:4em;margin:auto;overflow:hidden;background:#fff;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box}.node .person .avat img[data-v-3e1326fa]{width:100%;height:100%}.node .person .name[data-v-3e1326fa]{height:2em;line-height:2em;overflow:hidden;width:100%}.node.hasMate[data-v-3e1326fa]:after{content:"";position:absolute;left:2em;right:2em;top:2em;border-top:2px solid #ccc;z-index:1}.node.hasMate .person[data-v-3e1326fa]:last-child{margin-left:1em}.landscape[data-v-3e1326fa]{-webkit-transform:translate(-100%) rotate(-90deg);transform:translate(-100%) rotate(-90deg);-webkit-transform-origin:100% 0;transform-origin:100% 0}.landscape .node[data-v-3e1326fa]{text-align:left;height:8em;width:8em}.landscape .person[data-v-3e1326fa]{position:relative;-webkit-transform:rotate(90deg);transform:rotate(90deg);padding-left:4.5em;height:4em;top:4em;left:-1em}.landscape .person .avat[data-v-3e1326fa]{position:absolute;left:0}.landscape .person .name[data-v-3e1326fa]{height:4em;line-height:4em}.landscape .hasMate[data-v-3e1326fa]{position:relative}.landscape .hasMate .person[data-v-3e1326fa]{position:absolute}.landscape .hasMate .person[data-v-3e1326fa]:first-child{left:auto;right:-4em}.landscape .hasMate .person[data-v-3e1326fa]:last-child{left:-4em;margin-left:0}',""])}});
//# sourceMappingURL=app.4c2dc105.js.map