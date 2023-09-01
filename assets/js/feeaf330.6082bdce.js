"use strict";(self.webpackChunkmlops_pipeline=self.webpackChunkmlops_pipeline||[]).push([[121],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),c=s(r),m=i,d=c["".concat(p,".").concat(m)]||c[m]||f[m]||o;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function d(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,l=new Array(o);l[0]=m;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2155:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>a,toc:()=>s});var n=r(7462),i=(r(7294),r(3905));const o={sidebar_position:3},l="Airflow",a={unversionedId:"developer-guide/airflow",id:"developer-guide/airflow",title:"Airflow",description:"Airflow is used for scheduling and monitoring the data pipeline. It consists of the following components:",source:"@site/docs/developer-guide/airflow.md",sourceDirName:"developer-guide",slug:"/developer-guide/airflow",permalink:"/mlops-pipeline/developer-guide/airflow",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"GitHub Actions",permalink:"/mlops-pipeline/developer-guide/github_actions"},next:{title:"MLflow",permalink:"/mlops-pipeline/developer-guide/mlflow"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deployment Scenario/Level of Automation",id:"deployment-scenariolevel-of-automation",level:2}],u={toc:s},c="wrapper";function f(e){let{components:t,...o}=e;return(0,i.kt)(c,(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"airflow"},"Airflow"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://airflow.apache.org/docs/apache-airflow/stable/index.html"},"Airflow")," is used for scheduling and monitoring the data pipeline. It consists of the following components:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Scheduler"),": The scheduler is responsible for scheduling the tasks and monitoring them. It is also responsible for triggering the tasks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Webserver"),": The webserver is responsible for providing the UI for monitoring the tasks."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Worker"),": The worker is responsible for executing the tasks.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Airflow Sequence Diagram",src:r(7399).Z,width:"1258",height:"570"})),(0,i.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Python 3.6+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"PostgreSQL 9.6+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Redis 3.2+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Oxen 0.7.11+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Minio 2021.6.17+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Ubuntu 22.04+")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Docker 20.10+"))),(0,i.kt)("h2",{id:"deployment-scenariolevel-of-automation"},"Deployment Scenario/Level of Automation"))}f.isMDXComponent=!0},7399:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/airflow_sequence_diagram-9197ab9d8063ffc358502e5e28c9f202.png"}}]);