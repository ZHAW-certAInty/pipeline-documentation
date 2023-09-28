"use strict";(self.webpackChunkmlops_pipeline=self.webpackChunkmlops_pipeline||[]).push([[987],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=i.createContext({}),s=function(e){var t=i.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return i.createElement(p.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||c[m]||o;return n?i.createElement(h,a(a({ref:t},u),{},{components:n})):i.createElement(h,a({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[d]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7153:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var i=n(7462),r=(n(7294),n(3905));const o={sidebar_position:3},a="User Guide",l={unversionedId:"user_guide",id:"user_guide",title:"User Guide",description:"Prerequisites",source:"@site/docs/user_guide.md",sourceDirName:".",slug:"/user_guide",permalink:"/pipeline-documentation/user_guide",draft:!1,tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"MLflow",permalink:"/pipeline-documentation/developer-guide/mlflow"}},p={},s=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Model Training",id:"model-training",level:2},{value:"Model Testing",id:"model-testing",level:2},{value:"Reusing a Trained Model",id:"reusing-a-trained-model",level:2}],u={toc:s},d="wrapper";function c(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"user-guide"},"User Guide"),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"Clone the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZHAW-certAInty/toolbox"},"pipeline's repository")," and checkout the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," branch."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:ZHAW-certAInty/toolbox.git\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout pipeline\n")),(0,r.kt)("p",null,"Adapt the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file located in the repository's root directory to match your specific requirements. You can use the following example as a reference with the most crucial lines highlighted:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// highlight-start\nshorty=bily\njobname=bily-yolov5\nntasks=1\ncpus=8\nmem=48G\ngpu=1\nshm_size=32g\nnetwork_docker=bily_certainty-pipeline\n//highlight-end\nairflow_home_docker=/opt/airflow\n// highlight-next-line\npipeline_home_host=/cluster/home/bily/projects/toolbox/bily\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline_home_host")," is determined by the location where the pipeline is running on DGX.\nBy default, ",(0,r.kt)("inlineCode",{parentName:"p"},"network_docker"),' is composed of the pipeline\'s parent folder and the "certainty-pipeline" suffix.'),(0,r.kt)("admonition",{title:"Dataset",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Prior to conducting the experiment, it's essential to upload the dataset that the ML model operates on to the pipeline's data repository.")),(0,r.kt)("p",null,"To accomplish this, please reach out to your designated MLOps engineer responsible for the pipeline."),(0,r.kt)("admonition",{title:"Templates",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"As of now, the pipeline's repository provides ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZHAW-certAInty/toolbox/tree/pipeline/dags"},"three example dags")," located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/dags")," folder.")),(0,r.kt)("h2",{id:"model-training"},"Model Training"),(0,r.kt)("p",null,"To initiate model training, you can refer to the YOLOv5 example provided in ",(0,r.kt)("inlineCode",{parentName:"p"},"dag_bily_yolov5.py"),"."),(0,r.kt)("h2",{id:"model-testing"},"Model Testing"),(0,r.kt)("p",null,"For testing a model that has been trained using the pipeline, you can follow the YOLOv5 example outlined in ",(0,r.kt)("inlineCode",{parentName:"p"},"dag_bily_test_yolov5.py"),"."),(0,r.kt)("h2",{id:"reusing-a-trained-model"},"Reusing a Trained Model"),(0,r.kt)("p",null,"If you wish to retrain a model based on previous results, please consult ",(0,r.kt)("inlineCode",{parentName:"p"},"dag_bily_using_trained_yolov5_example.py"),"."))}c.isMDXComponent=!0}}]);