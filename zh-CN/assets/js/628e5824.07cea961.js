"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[36628],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=i,m=p["".concat(l,".").concat(d)]||p[d]||h[d]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},39271:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return u},assets:function(){return c},toc:function(){return h},default:function(){return d}});var a=n(87462),i=n(63366),o=(n(67294),n(3905)),r=["components"],s={slug:"Apache SeaTunnel Committer | Zongwen Li",title:"SeaTunnel engine, designed for tens-of-billions data integration",tags:["Meetup"]},l="SeaTunnel engine, designed for tens-of-billions data integration",u={permalink:"/zh-CN/blog/Apache SeaTunnel Committer | Zongwen Li",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/blog/2022-12-9-SeaTunnel-engine-designed-for-tens-of-billions-data-integration.md",source:"@site/blog/2022-12-9-SeaTunnel-engine-designed-for-tens-of-billions-data-integration.md",title:"SeaTunnel engine, designed for tens-of-billions data integration",description:"Apache SeaTunnel Committer | Zongwen Li",date:"2022-12-09T00:00:00.000Z",formattedDate:"2022\u5e7412\u67089\u65e5",tags:[{label:"Meetup",permalink:"/zh-CN/blog/tags/meetup"}],readingTime:9.925,truncated:!1,authors:[],frontMatter:{slug:"Apache SeaTunnel Committer | Zongwen Li",title:"SeaTunnel engine, designed for tens-of-billions data integration",tags:["Meetup"]},prevItem:{title:"SeaTunnel supports IoTDB to implement IoT data synchronization",permalink:"/zh-CN/blog/Apache IoTDB (Internet of Things Database) is a software system that integrates the collection"},nextItem:{title:"Mafengwo finally chose Apache SeaTunnel after analyzing these 9 points of how it works!",permalink:"/zh-CN/blog/During the joint Apache SeaTunnel & IoTDB Meetup on October 15,"}},c={authorsImageUrls:[]},h=[{value:"Introduction to Apache SeaTunnel",id:"introduction-to-apache-seatunnel",level:2},{value:"Milestones of SeaTunnel",id:"milestones-of-seatunnel",level:2},{value:"SeaTunnel Growth",id:"seatunnel-growth",level:2},{value:"Pain points of Existing engines",id:"pain-points-of-existing-engines",level:2},{value:"fault tolerance",id:"fault-tolerance",level:2},{value:"Loss of Data",id:"loss-of-data",level:2},{value:"Configuration is cumbersome",id:"configuration-is-cumbersome",level:2},{value:"Not supporting Schema Evolution",id:"not-supporting-schema-evolution",level:2},{value:"The high volume of resource usage",id:"the-high-volume-of-resource-usage",level:2},{value:"Operator pressure is uncontrollable",id:"operator-pressure-is-uncontrollable",level:2},{value:"Architecture goals of Apache SeaTunnel Engine",id:"architecture-goals-of-apache-seatunnel-engine",level:2},{value:"Pipeline Failover",id:"pipeline-failover",level:2},{value:"Regional Failover",id:"regional-failover",level:2},{value:"Data Cache",id:"data-cache",level:2},{value:"Sharding &amp; Multi-table Sync",id:"sharding--multi-table-sync",level:2},{value:"Schema Evolution",id:"schema-evolution",level:2},{value:"Shared Resource",id:"shared-resource",level:2},{value:"Speed Control",id:"speed-control",level:2},{value:"The future of Apache SeaTunnel",id:"the-future-of-apache-seatunnel",level:2}],p={toc:h};function d(e){var t=e.components,s=(0,i.Z)(e,r);return(0,o.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(87566).Z,width:"720",height:"306"}),"\nApache SeaTunnel Committer | Zongwen Li"),(0,o.kt)("h2",{id:"introduction-to-apache-seatunnel"},"Introduction to Apache SeaTunnel"),(0,o.kt)("p",null,"Apache SeaTunnel is a very easy-to-use ultra-high-performance distributed data integration platform that supports real-time synchronization of massive data."),(0,o.kt)("p",null,"Apache SeaTunnel will try its best to solve the problems that may be encountered in the process of mass data synchronization, such as data loss and duplication, task accumulation and delay, low throughput, etc."),(0,o.kt)("h2",{id:"milestones-of-seatunnel"},"Milestones of SeaTunnel"),(0,o.kt)("p",null,"SeaTunnel, formerly known as Waterdrop, was open-sourced on GitHub in 2017."),(0,o.kt)("p",null,"In October 2021, the Waterdrop community joined the Apache incubator and changed its name to SeaTunnel."),(0,o.kt)("h2",{id:"seatunnel-growth"},"SeaTunnel Growth"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(68706).Z,width:"720",height:"469"}),"\n",(0,o.kt)("img",{loading:"lazy",src:n(22659).Z,width:"720",height:"378"}),"\n",(0,o.kt)("img",{loading:"lazy",src:n(88180).Z,width:"720",height:"392"}),"\nWhen SeaTunnel entered the Apache incubator, the SeaTunnel community ushered in rapid growth."),(0,o.kt)("p",null,"As of now, the SeaTunnel community has a total of 151 contributors, 4314 Stars, and 804 forks."),(0,o.kt)("h2",{id:"pain-points-of-existing-engines"},"Pain points of Existing engines"),(0,o.kt)("p",null,"There are many pain points faced by the existing computing engines in the field of data integration, and we will talk about this first. The pain points usually lie in three directions:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The fault tolerance ability of the engine;"),(0,o.kt)("li",{parentName:"ul"},"Difficulty in configuration, operation, and maintenance of engine jobs;"),(0,o.kt)("li",{parentName:"ul"},"The resource usage of the engine.")),(0,o.kt)("h2",{id:"fault-tolerance"},"fault tolerance"),(0,o.kt)("p",null,"Global Failover\n",(0,o.kt)("img",{loading:"lazy",alt:"Global-failover",src:n(69961).Z,width:"720",height:"176"}),"\nFor distributed streaming processing systems, high throughput and low latency are often the most important requirements. At the same time, fault tolerance is also very important in distributed systems. For scenarios that require high correctness, the implementation of exactly once is often very important."),(0,o.kt)("p",null,"In a distributed streaming processing system, since the computing power, network, load, etc. of each node are different, the state of each node cannot be directly merged to obtain a true global state. To obtain consistent results, the distributed processing system needs to be resilient to node failure, that is, it can recover to consistent results when it fails."),(0,o.kt)("p",null,"Although it is claimed in their official blog that Spark\u2019s Structured Streaming uses the Chandy-Lamport algorithm for Failover processing, it does not disclose more details."),(0,o.kt)("p",null,"Flink implemented Checkpoint as a fault-tolerant mechanism based on the above algorithm and published related papers: Lightweight Asynchronous Snapshots for Distributed Dataflows"),(0,o.kt)("p",null,"In the current industrial implementation, when a job fails, all nodes of the job DAG need to failover, and the whole process will last for a long time, which will cause a lot of upstream data to accumulate."),(0,o.kt)("h2",{id:"loss-of-data"},"Loss of Data"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(76898).Z,width:"720",height:"175"}),"\nThe previous problem will cause a long-time recovery, and the business service may accept a certain degree of data delay."),(0,o.kt)("p",null,"In a worse case, a single sink node cannot be recovered for a long time, and the source data has a limited storage time, such as MySQL and Oracle log data, which will lead to data loss."),(0,o.kt)("h2",{id:"configuration-is-cumbersome"},"Configuration is cumbersome"),(0,o.kt)("p",null,"Single table Configuration"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(6464).Z,width:"720",height:"360"}),"\nThe previous examples are cases regarding a small number of tables, but in real business service development, we usually need to synchronize thousands of tables, which may be divided into databases and tables at the same time;"),(0,o.kt)("p",null,"The status quo is that we need to configure each table, a large number of table synchronization takes a lot of time for users, and it is prone to problems such as field mapping errors, which are difficult to maintain."),(0,o.kt)("h2",{id:"not-supporting-schema-evolution"},"Not supporting Schema Evolution"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Not-supports-DDL",src:n(98031).Z,width:"720",height:"360"}),"\nBesides, according to the research report of Fivetran, 60% of the company\u2019s schema will change every month, and 30% will change every week."),(0,o.kt)("p",null,"However, none of the existing engines supports Schema Evolution. After changing the Schema each time, the user needs to reconfigure the entire link, which makes the maintenance of the job very cumbersome."),(0,o.kt)("h2",{id:"the-high-volume-of-resource-usage"},"The high volume of resource usage"),(0,o.kt)("p",null,"The database link takes up too much"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(21560).Z,width:"720",height:"480"}),"\nIf our Source or Sink is of JDBC type, since the existing engine only supports one or more links per table, when there are many tables to be synchronized, more link resources will be occupied, which will bring a great burden to the database server."),(0,o.kt)("h2",{id:"operator-pressure-is-uncontrollable"},"Operator pressure is uncontrollable"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(79233).Z,width:"720",height:"333"}),"\nIn the existing engine, a buffer and other control operators are used to control the pressure, that is, the back pressure mechanism; since the back pressure is transmitted level by level, there will be pressure delay, and at the same time, the processing of data will not be smooth enough, increasing the GC time, fault-tolerant completion time, etc."),(0,o.kt)("p",null,"Another case is that neither the source nor the sink has reached the maximum pressure, but the user still needs to control the synchronization rate to prevent too much impact on the source database or the target database, which cannot be controlled through the back pressure mechanism."),(0,o.kt)("h2",{id:"architecture-goals-of-apache-seatunnel-engine"},"Architecture goals of Apache SeaTunnel Engine"),(0,o.kt)("p",null,"To solve these severe issues faced by computing engines, we self-developed our engine expertise in big data integration."),(0,o.kt)("p",null,"Firstly, let\u2019s get through what goals this engine wants to achieve."),(0,o.kt)("h2",{id:"pipeline-failover"},"Pipeline Failover"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(30670).Z,width:"720",height:"176"}),"\nIn the data integration case, there is a possibility that a job can synchronize hundreds of sheets, and the failure of one node or one table will lead to the failure of all tables, which is too costly."),(0,o.kt)("p",null,"We expect that unrelated Job Tasks will not affect each other during fault tolerance, so we call a vertex collection with upstream and downstream relationships a Pipeline, and a Job can consist of one or more pipelines."),(0,o.kt)("h2",{id:"regional-failover"},"Regional Failover"),(0,o.kt)("p",null,"Now if there is an exception in the pipeline, we still need to failover all the vertex in the pipeline; but can we restore only part of the vertex?\n",(0,o.kt)("img",{loading:"lazy",src:n(26129).Z,width:"720",height:"176"}),"\nFor example, if the Source fails, the Sink does not need to restart. In the case of a single Source and multiple Sinks, if a single Sink fails, only the Sink and Source that failed will be restored; that is, only the node that failed and its upstream nodes will be restored."),(0,o.kt)("p",null,"Obviously, the stateless vertex does not need to be restarted, and since SeaTunnel is a data integration framework, we do not have aggregation state vertexes such as Agg and Count, so we only need to consider Sink;"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Sink does not support idempotence & 2PC; no restart and restart will result in the same data duplication, which can only be solved by Sink without restarting;"),(0,o.kt)("li",{parentName:"ul"},"Sink supports idempotence, but does not support 2PC: because it is idempotent writing, it does not matter whether the source reads data inconsistently every time, and it does not need to be restarted;"),(0,o.kt)("li",{parentName:"ul"},"Sink supports 2PC:"),(0,o.kt)("li",{parentName:"ul"},"If the Source supports data consistency, if an abort is not executed, the processed old data will be automatically ignored through the channel data ID, and at the same time, it will face the problem that the transaction session time may time out;"),(0,o.kt)("li",{parentName:"ul"},"If the Source does not support data consistency, perform abort on the Sink to discard the last data, which has the same effect as restarting but does not require initialization operations such as re-establishing links;"),(0,o.kt)("li",{parentName:"ul"},"That is, the simplest implementation is to execute abort.\nWe use the pipeline as the minimum granularity for fault-tolerant management, and use the Chandy-Lamport algorithm to realize fault-tolerant distributed jobs.")),(0,o.kt)("h2",{id:"data-cache"},"Data Cache"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(76213).Z,width:"720",height:"175"}),"\nFor sink failure, when data cannot be written, a possible solution is to work two jobs at the same time."),(0,o.kt)("p",null,"One job reads the database logs using the CDC source connector and then writes the data to Kafka using the Kafka Sink connector. Another job reads data from Kafka using the Kafka source connector and writes data to the destination using the destination sink connector."),(0,o.kt)("p",null,"This solution requires users to have a deep understanding of the underlying technology, and both tasks will increase the difficulty of operation and maintenance. Because every job needs JobMaster, it requires more resources."),(0,o.kt)("p",null,"Ideally, the user only knows that they will be reading data from the source and writing data to the sink, and at the same time, during this process, the data can be cached in case the sink fails. The sync engine needs to automatically add caching operations to the execution plan and ensure that the source still works in the event of a sink failure. In this process, the engine needs to ensure that the data written to the cache and read from the cache are transactional, to ensure data consistency."),(0,o.kt)("h2",{id:"sharding--multi-table-sync"},"Sharding & Multi-table Sync"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(40985).Z,width:"720",height:"448"})),(0,o.kt)("p",null,"For a large number of table synchronization, we expect that a single Source can support reading multiple structural tables, and then use the side stream output to keep consistent with a single table stream."),(0,o.kt)("p",null,"The advantage of this is that it can reduce the link occupation of the data source and improve the utilization rate of thread resources."),(0,o.kt)("p",null,"At the same time, in SeaTunnel Engine, these multiple tables will be regarded as a pipeline, which will increase the granularity of fault tolerance; there are trade-offs, and the user can choose how many tables a pipeline can pass through."),(0,o.kt)("h2",{id:"schema-evolution"},"Schema Evolution"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(27854).Z,width:"720",height:"199"}),"\nSchema Evolution is a feature that allows users to easily change the current schema of a table to accommodate changing data over time. Most commonly, it is used when performing an append or overwrite operation, to automatically adjust the schema to include one or more new columns."),(0,o.kt)("p",null,"This feature is required for real-time data warehouse scenarios. Currently, the Flink and Spark engines do not support this feature."),(0,o.kt)("p",null,"In SeaTunnel Engine, we will use the Chandy-Lamport algorithm to send DDL events, make them flow in the DAG graph and change the structure of each operator, and then synchronize them to the Sink."),(0,o.kt)("h2",{id:"shared-resource"},"Shared Resource"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",alt:"Shared-resource",src:n(91347).Z,width:"720",height:"455"}),"\nThe Multi-table feature can reduce the use of some Source and Sink link resources. At the same time, we have implemented Dynamic Thread Resource Sharing in SeaTunnel Engine, reducing the resource usage of the engine on the server."),(0,o.kt)("h2",{id:"speed-control"},"Speed Control"),(0,o.kt)("p",null,(0,o.kt)("img",{loading:"lazy",src:n(59776).Z,width:"720",height:"323"}),"\nAs for the problems that cannot be solved by the back pressure mechanism, we will optimize the Buffer and Checkpoint mechanism:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Firstly, We try to allow Buffer to control the amount of data in a period;"),(0,o.kt)("li",{parentName:"ul"},"Secondly, by the Checkpoint mechanism, the engine can lock the buffer after the Checkpoint reaches the maximum number of parallelism and executes an interval time, prohibiting the writing of Source data, achieving the result of taking the pressure proactively, avoiding issues like back pressure delay or failure to be delivered to Source.\nThe above is the design goal of SeaTunnel Engine, hoping to help you better solve the problems that bother you in data integration. In the future, we will continue to optimize the experience of using SeaTunnel so that more people are willing to use it.")),(0,o.kt)("h2",{id:"the-future-of-apache-seatunnel"},"The future of Apache SeaTunnel"),(0,o.kt)("p",null,"As an Apache incubator project, the Apache SeaTunnel community is developing rapidly. In the following community planning, we will focus on four directions:"),(0,o.kt)("p",null,"Support more data integration scenarios (Apache SeaTunnel Engine)\nIt is used to solve the pain points that existing engines cannot solve, such as the synchronization of the entire database, the synchronization of table structure changes, and the large granularity of task failure;"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Guys who are interested in the engine can pay attention to this Umbrella: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/2272"},"https://github.com/apache/incubator-seatunnel/issues/2272"))),(0,o.kt)("p",null,"Expand and improve Connector & Catalog ecology\nSupport more Connector & Catalog, such as TiDB, Doris, Stripe, etc., and improve existing connectors, improve their usability and performance, etc.;\nSupport CDC connector for real-time incremental synchronization scenarios."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Guys who are interested in connectors can pay attention to this Umbrella: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/issues/1946"},"https://github.com/apache/incubator-seatunnel/issues/1946"))),(0,o.kt)("p",null,"Support for more versions of the engines\nSuch as Spark 3.x, Flink 1.14.x, etc."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Guys who are interested in supporting Spark 3.3 can pay attention to this PR: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel/pull/2574"},"https://github.com/apache/incubator-seatunnel/pull/2574"))),(0,o.kt)("p",null,"Easier to use (Apache SeaTunnel Web)\nProvides a web interface to make operations more efficient in the form of DAG/SQL Simple and more intuitive display of Catalog, Connector, Job, etc.;\nAccess to the scheduling platform to make task management easier"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Guys who are interested in Web can pay attention to our Web sub-project: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/incubator-seatunnel-web"},"https://github.com/apache/incubator-seatunnel-web"))))}d.isMDXComponent=!0},87566:function(e,t,n){t.Z=n.p+"assets/images/16714309876928-859e41ec15f205a23a1b25d8a2b80046.jpg"},68706:function(e,t,n){t.Z=n.p+"assets/images/16714310892722-67ccd10c8545d757fc1dab589404be3d.jpg"},22659:function(e,t,n){t.Z=n.p+"assets/images/16714310916195-8701b0e12c30eae7063696ec13464375.jpg"},88180:function(e,t,n){t.Z=n.p+"assets/images/16714310939883-8df5afa031f552b198757dc4dbe0bf70.jpg"},69961:function(e,t,n){t.Z=n.p+"assets/images/16714311670656-14b472dd8abdeff2639c1701ed9997f9.jpg"},76898:function(e,t,n){t.Z=n.p+"assets/images/16714312426416-f778eaa67ecf527449353404cf0bf421.jpg"},6464:function(e,t,n){t.Z=n.p+"assets/images/16714312637015-abff06af8bf814cbb39e2fddfd5b0271.jpg"},98031:function(e,t,n){t.Z=n.p+"assets/images/16714312769761-80425f8f27f3efc3ab62487814dad59e.jpg"},21560:function(e,t,n){t.Z=n.p+"assets/images/16714313100541-98837b408ddcd3e5d7114421e893de80.jpg"},79233:function(e,t,n){t.Z=n.p+"assets/images/16714313301435-5d797838b956772428477a7a26a2591c.jpg"},30670:function(e,t,n){t.Z=n.p+"assets/images/16714313559400-d6029daeb8672d49a5bfb8718c518e3f.jpg"},26129:function(e,t,n){t.Z=n.p+"assets/images/16714313919617-100427ea7efcebd349ce998e13a8c0a0.jpg"},76213:function(e,t,n){t.Z=n.p+"assets/images/16714314318184-95b8b08ab40b5d0da4ca1bd2e659f965.jpg"},40985:function(e,t,n){t.Z=n.p+"assets/images/16714314489916-cd0b185b6626a8c1598aa3ac569ecdbd.jpg"},27854:function(e,t,n){t.Z=n.p+"assets/images/16714314658701-b97c66b4a4eacfe54acf2e5ea6cc001b.jpg"},91347:function(e,t,n){t.Z=n.p+"assets/images/16714314806989-3f0543f4a2b9412e0d6c48eb1b7aa5c1.jpg"},59776:function(e,t,n){t.Z=n.p+"assets/images/16714315001348-d6e97c70a71c7f4b9220a68751cb1401.jpg"}}]);