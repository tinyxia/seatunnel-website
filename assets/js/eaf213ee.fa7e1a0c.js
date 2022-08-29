"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[16525],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var u=r.createContext({}),s=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(u.Provider,{value:e},t.children)},c={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,u=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),m=s(n),d=a,k=m["".concat(u,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(k,l(l({ref:e},p),{},{components:n})):r.createElement(k,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in e)hasOwnProperty.call(e,u)&&(o[u]=e[u]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2075:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},u="Neo4j",s={unversionedId:"connector-v2/sink/Neo4j",id:"connector-v2/sink/Neo4j",title:"Neo4j",description:"Neo4j sink connector",source:"@site/docs/connector-v2/sink/Neo4j.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/Neo4j",permalink:"/docs/connector-v2/sink/Neo4j",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/Neo4j.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"LocalFile",permalink:"/docs/connector-v2/sink/LocalFile"},next:{title:"Socket",permalink:"/docs/connector-v2/sink/Socket"}},p={},c=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"uri string",id:"uri-string",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"bearer_token string",id:"bearer_token-string",level:3},{value:"kerberos_ticket string",id:"kerberos_ticket-string",level:3},{value:"database string",id:"database-string",level:3},{value:"query string",id:"query-string",level:3},{value:"queryParamPosition object",id:"queryparamposition-object",level:3},{value:"max_transaction_retry_time long",id:"max_transaction_retry_time-long",level:3},{value:"max_connection_timeout long",id:"max_connection_timeout-long",level:3},{value:"Example",id:"example",level:2}],m={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"neo4j"},"Neo4j"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Neo4j sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Write data to Neo4j. "),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"neo4j-java-driver")," version 4.4.9"),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"uri"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bearer_token"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"kerberos_ticket"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"database"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"query"),(0,i.kt)("td",{parentName:"tr",align:null},"String"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"queryParamPosition"),(0,i.kt)("td",{parentName:"tr",align:null},"Object"),(0,i.kt)("td",{parentName:"tr",align:null},"Yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_transaction_retry_time"),(0,i.kt)("td",{parentName:"tr",align:null},"Long"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"30")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_connection_timeout"),(0,i.kt)("td",{parentName:"tr",align:null},"Long"),(0,i.kt)("td",{parentName:"tr",align:null},"No"),(0,i.kt)("td",{parentName:"tr",align:null},"30")))),(0,i.kt)("h3",{id:"uri-string"},"uri ","[string]"),(0,i.kt)("p",null,"The URI of the Neo4j database. Refer to a case: ",(0,i.kt)("inlineCode",{parentName:"p"},"neo4j://localhost:7687")),(0,i.kt)("h3",{id:"username-string"},"username ","[string]"),(0,i.kt)("p",null,"username of the Neo4j"),(0,i.kt)("h3",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,"password of the Neo4j. required if ",(0,i.kt)("inlineCode",{parentName:"p"},"username")," is provided"),(0,i.kt)("h3",{id:"bearer_token-string"},"bearer_token ","[string]"),(0,i.kt)("p",null,"base64 encoded bearer token of the Neo4j. for Auth. "),(0,i.kt)("h3",{id:"kerberos_ticket-string"},"kerberos_ticket ","[string]"),(0,i.kt)("p",null,"base64 encoded kerberos ticket of the Neo4j. for Auth."),(0,i.kt)("h3",{id:"database-string"},"database ","[string]"),(0,i.kt)("p",null,"database name."),(0,i.kt)("h3",{id:"query-string"},"query ","[string]"),(0,i.kt)("p",null,"Query statement. contain parameter placeholders that are substituted with the corresponding values at runtime"),(0,i.kt)("h3",{id:"queryparamposition-object"},"queryParamPosition ","[object]"),(0,i.kt)("p",null,"position mapping information for query parameters."),(0,i.kt)("p",null,"key name is parameter placeholder name."),(0,i.kt)("p",null,"associated value is position of field in input data row. "),(0,i.kt)("h3",{id:"max_transaction_retry_time-long"},"max_transaction_retry_time ","[long]"),(0,i.kt)("p",null,"maximum transaction retry time(seconds). transaction fail if exceeded"),(0,i.kt)("h3",{id:"max_connection_timeout-long"},"max_connection_timeout ","[long]"),(0,i.kt)("p",null,"The maximum amount of time to wait for a TCP connection to be established (seconds)"),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'sink {\n  Neo4j {\n    uri = "neo4j://localhost:7687"\n    username = "neo4j"\n    password = "1234"\n    database = "neo4j"\n\n    max_transaction_retry_time = 10\n    max_connection_timeout = 10\n\n    query = "CREATE (a:Person {name: $name, age: $age})"\n    queryParamPosition = {\n        name = 0\n        age = 1\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);