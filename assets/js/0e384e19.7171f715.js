"use strict";(self.webpackChunkmlops_pipeline=self.webpackChunkmlops_pipeline||[]).push([[671],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>h});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(a),d=r,h=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return a?n.createElement(h,l(l({ref:t},u),{},{components:a})):n.createElement(h,l({ref:t},u))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},9881:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=a(7462),r=(a(7294),a(3905));const i={sidebar_position:1,slug:"/"},l="MLOps Pipeline",o={unversionedId:"intro",id:"intro",title:"MLOps Pipeline",description:"User Guide",source:"@site/docs/intro.md",sourceDirName:".",slug:"/",permalink:"/mlops-pipeline/",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,slug:"/"},sidebar:"tutorialSidebar",next:{title:"Developer Guide",permalink:"/mlops-pipeline/category/developer-guide"}},p={},s=[{value:"User Guide",id:"user-guide",level:2},{value:"Developer Guide",id:"developer-guide",level:2},{value:"MLOps Resources",id:"mlops-resources",level:2},{value:"Books with Code Samples:",id:"books-with-code-samples",level:3},{value:"Tutorials and Courses:",id:"tutorials-and-courses",level:3},{value:"Goals",id:"goals",level:2}],u={toc:s},c="wrapper";function m(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"mlops-pipeline"},"MLOps Pipeline"),(0,r.kt)("h2",{id:"user-guide"},"User Guide"),(0,r.kt)("p",null,"How to use the pipeline as an MLE who wants to train a model leveraging the pipeline's amenities in terms of visualization and reduced overhead can be found in the ",(0,r.kt)("a",{parentName:"p",href:"category/user-guide"},"User Guide"),"."),(0,r.kt)("h2",{id:"developer-guide"},"Developer Guide"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"category/developer-guide"},"Developer Guide")," enlightens any MLOps engineer who wants to set up the pipeline on his own."),(0,r.kt)("h2",{id:"mlops-resources"},"MLOps Resources"),(0,r.kt)("p",null,"Here is a list of introductory materials on MLOps that will help you get started on the right foot. Feel free to explore these resources to gain valuable insights into MLOps. They cover various aspects of Machine Learning Operations, from data pipelines and model development to deployment in production."),(0,r.kt)("h3",{id:"books-with-code-samples"},"Books with Code Samples:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Data Pipelines With Apache Airflow")," (Authors: Bas P. Harenslak, Julian Rutger De Ruiter)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub Repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/BasPH/data-pipelines-with-apache-airflow"},"data-pipelines-with-apache-airflow")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Practical Deep Learning at Scale with MLflow")," (Author: Yong Liu)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub Repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/PacktPublishing/Practical-Deep-Learning-at-Scale-with-MLFlow"},"Practical-Deep-Learning-at-Scale-with-MLFlow")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Designing Machine Learning Systems")," (Author: Chip Huyen)"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub Repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/chiphuyen/machine-learning-systems-design"},"machine-learning-systems-design"))))),(0,r.kt)("h3",{id:"tutorials-and-courses"},"Tutorials and Courses:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Made With ML")," by Goku Mohandas"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Website: ",(0,r.kt)("a",{parentName:"li",href:"https://madewithml.com/"},"madewithml.com")),(0,r.kt)("li",{parentName:"ul"},"GitHub Repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/GokuMohandas/Made-With-ML"},"Made-With-ML")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Stanford's ML Systems Design Course")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Syllabus: ",(0,r.kt)("a",{parentName:"li",href:"https://stanford-cs329s.github.io/syllabus.html"},"Stanford CS329S")),(0,r.kt)("li",{parentName:"ul"},"Based on Chip Huyen's ",(0,r.kt)("a",{parentName:"li",href:"#books-with-code-samples"},(0,r.kt)("strong",{parentName:"a"},"Designing Machine Learning Systems"))," and using Goku Mohandas' ",(0,r.kt)("a",{parentName:"li",href:"#tutorials-and-courses"},(0,r.kt)("strong",{parentName:"a"},"Made With ML"))))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Deploying Machine Learning Models in Production (Coursera)")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Course Link: ",(0,r.kt)("a",{parentName:"li",href:"https://www.coursera.org/learn/deploying-machine-learning-models-in-production"},"coursera.org / DeepLearning.AI")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Full Stack Deep Learning")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"GitHub Repository: ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/the-full-stack/fsdl-text-recognizer-2022-labs"},"Interactive Colab Notebook Lectures"))))),(0,r.kt)("h2",{id:"goals"},"Goals"),(0,r.kt)("p",null,"The pipeline was originally designed for the certAInty project but is meant to be general enough to be used for other projects as well."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Robustness:")," Data should persist even if the pipeline fails."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Reproducibility:")," The pipeline should be reproducible."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Scalability:")," The pipeline should be able to scale to multiple machines."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Flexibility:")," The pipeline should be able to run on different machines."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Monitoring:")," The pipeline should be able to monitor itself."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Logging:")," The pipeline should be able to log itself."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Parity:")," The pipeline should be able to run in production."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Visualization:")," The pipeline should be able to visualize itself."))}m.isMDXComponent=!0}}]);