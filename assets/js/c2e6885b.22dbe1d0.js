"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[9730],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,g=u["".concat(c,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},13001:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return d},default:function(){return m}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),i=["components"],l={},c="MongoDb",s={unversionedId:"connector/source/MongoDB",id:"connector/source/MongoDB",title:"MongoDb",description:"Description",source:"@site/docs/connector/source/MongoDB.md",sourceDirName:"connector/source",slug:"/connector/source/MongoDB",permalink:"/docs/connector/source/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/source/MongoDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/docs/connector/source/Kudu"},next:{title:"Phoenix",permalink:"/docs/connector/source/Phoenix"}},p={},d=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"readconfig.uri string",id:"readconfiguri-string",level:3},{value:"readconfig.database string",id:"readconfigdatabase-string",level:3},{value:"readconfig.collection string",id:"readconfigcollection-string",level:3},{value:"readconfig.* string",id:"readconfig-string",level:3},{value:"schema string",id:"schema-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Example",id:"example",level:2}],u={toc:d};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"mongodb"},"MongoDb"),(0,o.kt)("h2",{id:"description"},"Description"),(0,o.kt)("p",null,"Read data from MongoDB."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,o.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: MongoDb"),(0,o.kt)("li",{parentName:"ul",className:"task-list-item"},(0,o.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.uri"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.database"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.collection"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"readconfig.*"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"schema"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"-")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"common-options"),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"yes"),(0,o.kt)("td",{parentName:"tr",align:null},"-")))),(0,o.kt)("h3",{id:"readconfiguri-string"},"readconfig.uri ","[string]"),(0,o.kt)("p",null,"MongoDB uri"),(0,o.kt)("h3",{id:"readconfigdatabase-string"},"readconfig.database ","[string]"),(0,o.kt)("p",null,"MongoDB database"),(0,o.kt)("h3",{id:"readconfigcollection-string"},"readconfig.collection ","[string]"),(0,o.kt)("p",null,"MongoDB collection"),(0,o.kt)("h3",{id:"readconfig-string"},"readconfig.* ","[string]"),(0,o.kt)("p",null,"More other parameters can be configured here, see ",(0,o.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/spark-connector/current/configuration/"},"MongoDB Configuration")," for details, see the Input Configuration section. The way to specify parameters is to prefix the original parameter name ",(0,o.kt)("inlineCode",{parentName:"p"},"readconfig.")," For example, the way to set ",(0,o.kt)("inlineCode",{parentName:"p"},"spark.mongodb.input.partitioner")," is ",(0,o.kt)("inlineCode",{parentName:"p"},'readconfig.spark.mongodb.input.partitioner="MongoPaginateBySizePartitioner"')," . If you do not specify these optional parameters, the default values of the official MongoDB documentation will be used."),(0,o.kt)("h3",{id:"schema-string"},"schema ","[string]"),(0,o.kt)("p",null,"Because ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")," does not have the concept of ",(0,o.kt)("inlineCode",{parentName:"p"},"schema"),", when spark reads ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")," , it will sample ",(0,o.kt)("inlineCode",{parentName:"p"},"MongoDB")," data and infer the ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," . In fact, this process will be slow and may be inaccurate. This parameter can be manually specified. Avoid these problems. ",(0,o.kt)("inlineCode",{parentName:"p"},"schema")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"json")," string, such as ",(0,o.kt)("inlineCode",{parentName:"p"},'{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\ ",\\"city\\":\\"string\\"}}')),(0,o.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,o.kt)("p",null,"Source Plugin common parameters, refer to ",(0,o.kt)("a",{parentName:"p",href:"/docs/connector/source/common-options"},"Source Plugin")," for details"),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    readconfig.uri = "mongodb://username:password@127.0.0.1:27017/mypost"\n    readconfig.database = "mydatabase"\n    readconfig.collection = "mycollection"\n    readconfig.spark.mongodb.input.partitioner = "MongoPaginateBySizePartitioner"\n    schema="{\\"name\\":\\"string\\",\\"age\\":\\"integer\\",\\"addrs\\":{\\"country\\":\\"string\\",\\"city\\":\\"string\\"}}"\n    result_table_name = "mongodb_result_table"\n}\n')))}m.isMDXComponent=!0}}]);