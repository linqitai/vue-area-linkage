webpackJsonp([0],Array(30).concat([function(e,t,s){"use strict";s.d(t,"a",function(){return a});var a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";if(!e)throw new Error("[vue-area-linkage]: "+t)}},function(e,t,s){"use strict";function a(e){e.use(v.a),e.use(o.a),e.use(i.a),e.component(_.a.name,_.a),e.component(f.a.name,f.a)}Object.defineProperty(t,"__esModule",{value:!0});var r=(s(32),s(1)),n=s.n(r),l=(s(33),s(34)),i=s.n(l),c=(s(44),s(45)),o=s.n(c),u=(s(46),s(47),s(48)),v=s.n(u),d=s(51),_=s.n(d),h=s(87),f=s.n(h),p=(s(90),{install:a}),m=p,g=s(91),C=s.n(g);n.a.use(m);n.a.config.devtools=!1,n.a.config.productionTip=!1,new n.a({el:"#app",render:function(e){return e(C.a)}})},function(e,t){},function(e,t){},,,,,,,,,,,function(e,t){},,function(e,t){},function(e,t){},,,,function(e,t,s){function a(e){s(52)}var r=s(0),n=s(55),l=s(86),i=a,c=r(n,l,i,null,null);e.exports=c.exports},function(e,t,s){var a=s(53);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(6)("7e44e7dd",a,!0)},function(e,t,s){t=e.exports=s(2)(void 0),t.push([e.i,".area-select .el-select{width:160px;margin-left:10px}",""])},,function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(23),r=s.n(a),n=s(67),l=s.n(n),i=s(29),c=s.n(i),o=s(84),u=s.n(o),v=s(30);t.default={name:"area-select",props:{value:{required:!0},type:{type:String,default:"code",validator:function(e){return["all","code","text"].indexOf(e)>-1}},placeholders:{type:Array,default:function(){return[]}},level:{type:Number,default:1,validator:function(e){return[0,1,2,3].indexOf(e)>-1}},"default-value":{type:Array,default:function(){return[]}}},data:function(){return{provinces:c.a[86],citys:{},areas:{},streets:{},curProvince:"",curCity:"",curArea:"",curStreet:"",defaults:[],isCode:!1}},watch:{curProvince:function(e,t){var s=this;if(0===this.level)return void this.selectChange();if(this.level>=1)if(this.citys=c.a[e],this.defaults[1])if(this.isCode){var a=u()(l()(this.citys),function(e){return e===s.defaults[1]});Object(v.a)(a,"城市 "+this.defaults[1]+" 不存在于省份 "+this.defaults[0]+" 中"),this.curCity=a}else{var r=u()(this.citys,function(e){return e===s.defaults[1]});Object(v.a)(r,"城市 "+this.defaults[1]+" 不存在于省份 "+this.defaults[0]+" 中"),this.curCity=u()(l()(this.citys),function(e){return s.citys[e]===s.defaults[1]})}else this.curCity=l()(this.citys)[0]},curCity:function(e,t){var s=this;if(1===this.level)return void this.selectChange();if(this.areas=c.a[e],this.level>=2)if(this.defaults[2])if(this.isCode){var a=u()(l()(this.areas),function(e){return e===s.defaults[2]});Object(v.a)(a,"县区 "+this.defaults[2]+" 不存在于城市 "+this.defaults[1]+" 中"),this.curArea=a}else{var r=u()(this.areas,function(e){return e===s.defaults[2]});Object(v.a)(r,"县区 "+this.defaults[2]+" 不存在于城市 "+this.defaults[1]+" 中"),this.curArea=u()(l()(this.areas),function(e){return s.areas[e]===s.defaults[2]})}else this.curArea=l()(this.areas)[0]},curArea:function(e,t){var s=this;if(2===this.level)return void this.selectChange();if(this.streets=c.a[e],this.level>=3)if(this.defaults[3])if(this.isCode){var a=u()(l()(this.streets),function(e){return e===s.defaults[3]});Object(v.a)(a,"街道 "+this.defaults[3]+" 不存在于县区 "+this.defaults[2]+" 中"),this.curStreet=a}else{var r=u()(this.streets,function(e){return e===s.defaults[3]});Object(v.a)(r,"街道 "+this.defaults[3]+" 不存在于县区 "+this.defaults[2]+" 中"),this.curStreet=u()(l()(this.streets),function(e){return s.streets[e]===s.defaults[3]})}else this.curStreet=l()(this.streets)[0]},curStreet:function(e,t){this.selectChange()}},methods:{getAreaText:function(e){for(var t=[],s=0,a=e.length;s<a;s++)switch(s){case 0:t.push(this.provinces[this.curProvince]);break;case 1:var r=c.a[this.curProvince][this.curCity];t.push(r);break;case 2:var n=c.a[this.curCity][this.curArea];t.push(n);break;case 3:var l=c.a[this.curArea][this.curStreet];t.push(l)}return t},getAll:function(e){var t=[],s=this.getAreaText(e);Object(v.a)(s.length===e.length,"获取数据出错了");for(var a=0,n=s.length;a<n;a++){var l=r()({},e[a],s[a]);t.push(l)}return t},setDefaultValue:function(){var e=this,t="";if(this.isCode)t=this.defaults[0];else{var s=u()(this.provinces,function(t){return t===e.defaults[0]});Object(v.a)(s,"省份 "+this.defaults[0]+" 不存在"),t=u()(l()(this.provinces),function(t){return e.provinces[t]===e.defaults[0]})}this.curProvince=t,this.$nextTick(function(){e.defaults=[],e.isCode=!1})},selectChange:function(){var e=[];switch(this.level){case 0:e=[this.curProvince];break;case 1:e=[this.curProvince,this.curCity];break;case 2:e=[this.curProvince,this.curCity,this.curArea];break;case 3:e=[this.curProvince,this.curCity,this.curArea,this.curStreet]}"code"===this.type?this.$emit("input",e):"text"===this.type?this.$emit("input",this.getAreaText(e)):this.$emit("input",this.getAll(e))}},created:function(){if(this.defaultValue.length){var e=/^[\u4E00-\u9FA5\uF900-\uFA2D]{3,}$/,t=/^\d{6,}$/,s=t.test(this.defaultValue[0]),a=void 0;a=s?this.defaultValue.every(function(e){return t.test(e)}):this.defaultValue.every(function(t){return e.test(t)}),Object(v.a)(a,"传入的默认值参数有误"),this.defaults=this.defaultValue,this.isCode=s,this.setDefaultValue(s)}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"area-select"},[s("el-select",{attrs:{placeholder:e.placeholders[0]?e.placeholders[0]:"请选择"},model:{value:e.curProvince,callback:function(t){e.curProvince=t},expression:"curProvince"}},e._l(e.provinces,function(e,t){return s("el-option",{key:e,attrs:{label:e,value:t}})})),e._v(" "),e.level>=1?s("el-select",{attrs:{placeholder:e.placeholders[1]?e.placeholders[1]:"请选择"},model:{value:e.curCity,callback:function(t){e.curCity=t},expression:"curCity"}},e._l(e.citys,function(e,t){return s("el-option",{key:e,attrs:{label:e,value:t}})})):e._e(),e._v(" "),e.level>=2?s("el-select",{attrs:{placeholder:e.placeholders[2]?e.placeholders[2]:"请选择"},model:{value:e.curArea,callback:function(t){e.curArea=t},expression:"curArea"}},e._l(e.areas,function(e,t){return s("el-option",{key:e,attrs:{label:e,value:t}})})):e._e(),e._v(" "),e.level>=3?s("el-select",{attrs:{placeholder:e.placeholders[3]?e.placeholders[3]:"请选择"},model:{value:e.curStreet,callback:function(t){e.curStreet=t},expression:"curStreet"}},e._l(e.streets,function(e,t){return s("el-option",{key:e,attrs:{label:e,value:t}})})):e._e()],1)},a=[];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(88),n=s(89),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(23),r=s.n(a),n=s(29),l=s.n(n),i=s(30);t.default={name:"area-cascader",props:{value:{required:!0},placeholder:{type:String,default:"请选择"},type:{type:String,default:"code",validator:function(e){return["all","code","text"].indexOf(e)>-1}},level:{type:Number,default:0,validator:function(e){return[0,1].indexOf(e)>-1}}},data:function(){return{options:[]}},methods:{getAreaText:function(e){for(var t=[],s=l.a[86],a=0,r=e.length;a<r;a++)switch(a){case 0:t.push(s[e[a]]);break;case 1:var n=l.a[e[0]][e[a]];t.push(n);break;case 2:var i=l.a[e[1]][e[a]];t.push(i)}return t},getAll:function(e){var t=[],s=this.getAreaText(e);Object(i.a)(s.length===e.length,"获取数据出错了");for(var a=0,n=s.length;a<n;a++){var l=r()({},e[a],s[a]);t.push(l)}return t},handleChange:function(e){"code"===this.type?this.$emit("input",e):"text"===this.type?this.$emit("input",this.getAreaText(e)):this.$emit("input",this.getAll(e))},iterate:function(e){var t=[];for(var s in e)t.push({label:e[s],value:s});return t},iterateCities:function(){for(var e=[],t=this.iterate(l.a[86]),s=0,a=t.length;s<a;s++){var r={};r.label=t[s].label,r.value=t[s].value,r.children=this.iterate(l.a[t[s].value]),e.push(r)}return e},iterateAreas:function(){for(var e=[],t=this.iterateCities(),s=0,a=t.length;s<a;s++){for(var r=t[s],n=0,i=t[s].children.length;n<i;n++){t[s].children[n].children=this.iterate(l.a[t[s].children[n].value])}e.push(r)}return e}},created:function(){return 0===this.level?void(this.options=this.iterateCities()):1===this.level?void(this.options=this.iterateAreas()):void 0}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"area-cascader"},[s("el-cascader",{attrs:{placeholder:e.placeholder,options:e.options},on:{change:e.handleChange}})],1)},a=[];e.exports={render:s,staticRenderFns:a}},function(e,t){},function(e,t,s){function a(e){s(92)}var r=s(0),n=s(94),l=s(150),i=a,c=r(n,l,i,null,null);e.exports=c.exports},function(e,t,s){var a=s(93);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(6)("9d9ea2c2",a,!0)},function(e,t,s){t=e.exports=s(2)(void 0),t.push([e.i,".app-wrap{width:960px;height:200px;margin:0 auto}",""])},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(95),r=s.n(a),n=s(99),l=s.n(n),i=s(142),c=s.n(i),o=s(146),u=s.n(o);t.default={data:function(){return{}},components:{"v-header":r.a,"v-footer":u.a,"v-main":l.a,"v-start":c.a}}},function(e,t,s){function a(e){s(96)}var r=s(0),n=s(98),l=a,i=r(null,n,l,null,null);e.exports=i.exports},function(e,t,s){var a=s(97);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(6)("1514a5f1",a,!0)},function(e,t,s){t=e.exports=s(2)(void 0),t.push([e.i,"header{text-align:center;margin-top:100px}h2{font-size:27px;font-weight:400}header p{margin-top:20px;margin-bottom:20px;font-size:16px}header>a{position:fixed;right:0;top:0}header p a{color:#008efd}",""])},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("header",[s("a",{staticClass:"github-corner",attrs:{href:"https://github.com/dwqs/vue-area-linkage","aria-label":"View source on Github"}},[s("svg",{staticStyle:{fill:"#ABD3B4",color:"#fff",position:"absolute",top:"0",border:"0",right:"0"},attrs:{width:"80",height:"80",viewBox:"0 0 250 250","aria-hidden":"true"}},[s("path",{attrs:{d:"M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"}}),s("path",{staticClass:"octo-arm",staticStyle:{"transform-origin":"130px 106px"},attrs:{d:"M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2",fill:"currentColor"}}),s("path",{staticClass:"octo-body",attrs:{d:"M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z",fill:"currentColor"}})])]),e._v(" "),s("h2",[e._v("Vue Area Linkage: 中国行政区联动选择器")]),e._v(" "),e._m(0)])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",[e._v("\n        省、市、区、街道联动选择，UI 基于 \n        "),s("a",{attrs:{target:"_blank",href:"https://github.com/ElemeFE/element"}},[e._v("Element UI")])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(100),n=s(141),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(101),r=(s.n(a),s(102)),n=s.n(r),l=s(105),i=s.n(l),c=s(108),o=s.n(c),u=s(111),v=s.n(u),d=s(114),_=s.n(d),h=s(117),f=s.n(h),p=s(120),m=s.n(p),g=s(123),C=s.n(g),b=s(126),x=s.n(b),w=s(129),y=s.n(w),k=s(132),$=s.n(k),E=s(135),j=s.n(E),A=s(138),P=s.n(A);t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}},components:{Basic:n.a,Returns:i.a,Province:o.a,"v-area":v.a,Street:_.a,AreaCode:f.a,Placeholders:m.a,DefaultValue:C.a,CasBasic:x.a,CasReturns:y.a,CasAreaCode:$.a,CasPlaceholder:j.a,CasArea:P.a}}},function(e,t){},function(e,t,s){var a=s(0),r=s(103),n=s(104),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省市的行政区域代码")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(106),n=s(107),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{type:"text"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省市的行政区域文本")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select type='text' v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(109),n=s(110),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{level:0},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省份行政区域代码")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select :level='0' v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(112),n=s(113),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{level:2,type:"text"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省份行政区域文本")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select :level='2' type='text' v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(115),n=s(116),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{level:3,type:"text"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省份行政区域文本")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select :level='3' type='text' v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(118),n=s(119),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{type:"all"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，数组项是包含省市的行政区域代码和文本的对象")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select type='all' v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(121),n=s(122),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{placeholders:["选择省","选择市"]},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//设置 placeholders，其值应该和关联层次对应")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select :placeholders=['选择省', '选择市'] v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(124),n=s(125),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-select",{attrs:{level:2,"default-value":["440000","440300","440305"]},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//设置默认值，代码对应的区域文本是['广东省', '深圳市', '南山区']")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-select :label=\"2\" :default-value=['440000','440300','440305'] v-model='selected'></area-select>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(127),n=s(128),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-cascader",{model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省市的行政区域代码")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-cascader v-model='selected'></area-cascader>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(130),n=s(131),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-cascader",{attrs:{type:"text"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省市的行政区域文本")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-cascader type='text' v-model='selected'></area-cascader>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(133),n=s(134),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-cascader",{attrs:{type:"all"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省市的行政区域文本")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-cascader type='all' v-model='selected'></area-cascader>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(136),n=s(137),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-cascader",{attrs:{placeholder:"请选择地区"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，分别是省市的行政区域代码")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v("area-cascader placeholder=\"请选择地区\" v-model='selected'></area-cascader>"),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(139),n=s(140),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{selected:[],shown:!1}},methods:{toggle:function(){this.shown=!this.shown}}}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"code-area"},[s("div",{staticClass:"area-left"},[s("area-cascader",{attrs:{level:1,type:"text",placeholder:"请选择地区"},model:{value:e.selected,callback:function(t){e.selected=t},expression:"selected"}})],1),e._v(" "),s("div",{staticClass:"area-right"},[s("pre",[s("code",[e._v(e._s(e.selected))])])]),e._v(" "),e.shown?s("div",{ref:"original",staticClass:"original-code"},[e._m(0)]):e._e(),e._v(" "),s("div",{staticClass:"show-code",on:{click:e.toggle}},[e._v("\n        "+e._s(this.shown?"Hide Code":"Show Code")+"\n    ")])])},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("pre",[s("code",[s("span",[e._v("//返回值是一个数组，数组项是包含省市的行政区域代码和文本的对象")]),s("br"),s("span",[e._v("<")]),e._v("template"),s("span",[e._v(">")]),s("br"),e._v("    "),s("span",[e._v("<")]),e._v('area-cascader :level="1" type="text" placeholder="请选择地区" v-model=\'selected\'></area-cascader>'),s("br"),e._v("<"),e._v("/template"),s("span",[e._v(">")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-main"},[s("h3",[e._v("基本使用")]),e._v(" "),s("h4",[e._v("1. 作为选择器")]),e._v(" "),s("h5",[e._v("默认形式")]),e._v(" "),s("basic"),e._v(" "),s("h5",[e._v("返回区域文本")]),e._v(" "),s("returns"),e._v(" "),s("h5",[e._v("返回区域代码和文本")]),e._v(" "),s("area-code"),e._v(" "),s("h5",[e._v("设置 placeholders")]),e._v(" "),s("placeholders"),e._v(" "),e._m(0),e._v(" "),s("h5",[e._v("设置默认值")]),e._v(" "),s("default-value"),e._v(" "),e._m(1),e._v(" "),s("h5",[e._v("只选省份")]),e._v(" "),s("province"),e._v(" "),s("h5",[e._v("省市区联动")]),e._v(" "),s("v-area"),e._v(" "),s("h5",[e._v("省市区街联动")]),e._v(" "),s("street"),e._v(" "),s("h4",[e._v("2. 作为级联器(只支持2/3级联动)")]),e._v(" "),s("h5",[e._v("默认形式")]),e._v(" "),s("cas-basic"),e._v(" "),s("h5",[e._v("返回区域文本")]),e._v(" "),s("cas-returns"),e._v(" "),s("h5",[e._v("返回区域文本和代码")]),e._v(" "),s("cas-area-code"),e._v(" "),s("h5",[e._v("设置 placeholder")]),e._v(" "),s("cas-placeholder"),e._v(" "),s("h5",[e._v("省市区联动")]),e._v(" "),s("cas-area")],1)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"desc"},[s("code",[e._v("placeholders")]),e._v(" 是一个数组, 数组项顺序分别对应省/市/区/街道.\n    ")])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("p",{staticClass:"desc"},[s("code",[e._v("default-value")]),e._v(" 是一个数组, 数组项顺序分别对应省/市/区/街道, 且类型(区域代码/区域文本)必须统一. 以第一个元素类型为基准. 类型不统一将报错.\n    ")])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){var a=s(0),r=s(143),n=s(145),l=a(r,n,null,null,null);e.exports=l.exports},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(144);s.n(a);t.default={}},function(e,t){},function(e,t){var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"start"},[s("h3",[e._v("快速开始")]),e._v(" "),s("div",{staticClass:"install"},[s("h4",[e._v("安装")]),e._v(" "),s("pre",[e._v("npm i --save vue-area-linkage")]),e._v(" "),s("p",[e._v("或者")]),e._v(" "),s("pre",[e._v("yarn add vue-area-linkage")])]),e._v(" "),s("div",{staticClass:"register"},[s("h4",[e._v("全局注册")]),e._v(" "),s("pre",[e._v("import Vue from 'vue';"),s("br"),s("br"),e._v("import VueAreaLinkage from 'vue-area-linkage';"),s("br"),s("br"),e._v("Vue.use(VueAreaLinkage);"),s("br")])]),e._v(" "),s("br")])}];e.exports={render:s,staticRenderFns:a}},function(e,t,s){function a(e){s(147)}var r=s(0),n=s(149),l=a,i=r(null,n,l,null,null);e.exports=i.exports},function(e,t,s){var a=s(148);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);s(6)("0c8cfc77",a,!0)},function(e,t,s){t=e.exports=s(2)(void 0),t.push([e.i,"footer{margin-top:30px;text-align:center;color:#999}footer p{margin-top:15px;cursor:pointer}footer p:hover{color:#008efd}",""])},function(e,t){var s=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},a=[function(){var e=this,t=e.$createElement,s=e._self._c||t
;return s("footer",[s("p",[e._v("React 版本："),s("a",{attrs:{target:"_blank",href:"https://github.com/dwqs/react-area-linkage"}},[e._v("正在开发中...")])]),e._v(" "),s("p",[e._v("最新数据来源："),s("a",{attrs:{href:"https://github.com/dwqs/area-data",target:"_blank"}},[e._v("省/市/区/街道数据")])]),e._v(" "),s("p",[e._v("官方数据："),s("a",{attrs:{href:"http://www.stats.gov.cn/tjsj/tjbz/tjyqhdmhcxhfdm/2016/index.html",target:"_blank"}},[e._v("国家统计局-城乡划分")])]),e._v(" "),s("p",[e._v("官方数据："),s("a",{attrs:{href:"http://www.stats.gov.cn/tjsj/tjbz/xzqhdm/201703/t20170310_1471429.html",target:"_blank"}},[e._v("国家统计局-县及以上行政区划分")])])])}];e.exports={render:s,staticRenderFns:a}},function(e,t){var s=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"app-wrap",attrs:{id:"app"}},[s("v-header"),e._v(" "),s("v-start"),e._v(" "),s("v-main"),e._v(" "),s("v-footer")],1)},a=[];e.exports={render:s,staticRenderFns:a}}]),[31]);