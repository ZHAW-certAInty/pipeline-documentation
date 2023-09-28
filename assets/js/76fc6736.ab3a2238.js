"use strict";(self.webpackChunkmlops_pipeline=self.webpackChunkmlops_pipeline||[]).push([[315],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?o.createElement(h,a(a({ref:t},d),{},{components:n})):o.createElement(h,a({ref:t},d))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[c]="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9764:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(7462),r=(n(7294),n(3905));const i={sidebar_position:2},a="Development Setup",l={unversionedId:"developer-guide/development_setup",id:"developer-guide/development_setup",title:"Development Setup",description:"Docker",source:"@site/docs/developer-guide/development_setup.md",sourceDirName:"developer-guide",slug:"/developer-guide/development_setup",permalink:"/pipeline-documentation/developer-guide/development_setup",draft:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/pipeline-documentation/developer-guide/overview"},next:{title:"GitHub Actions",permalink:"/pipeline-documentation/developer-guide/github_actions"}},p={},s=[{value:"Docker",id:"docker",level:2},{value:"Slurm",id:"slurm",level:2},{value:"Primer",id:"primer",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Pipeline Setup",id:"pipeline-setup",level:2},{value:"Pipeline Test",id:"pipeline-test",level:2},{value:"Airflow Worker Setup",id:"airflow-worker-setup",level:2},{value:"Pipeline Breakdown",id:"pipeline-breakdown",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"development-setup"},"Development Setup"),(0,r.kt)("h2",{id:"docker"},"Docker"),(0,r.kt)("p",null,"A good understanding of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/"},"Docker")," is recommended."),(0,r.kt)("admonition",{title:"Docker Compose",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To run the pipeline, you'll need to have ",(0,r.kt)("strong",{parentName:"p"},"Docker Compose")," installed on your instance. For DGX, manual installation is required, and you can find the installation instructions ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/linux/#install-the-plugin-manually"},"here"),".")),(0,r.kt)("h2",{id:"slurm"},"Slurm"),(0,r.kt)("p",null,"It also makes sense to understand  ",(0,r.kt)("a",{parentName:"p",href:"https://slurm.schedmd.com/"},"slurm's")," functionality."),(0,r.kt)("h2",{id:"primer"},"Primer"),(0,r.kt)("p",null,"For a comprehensive introduction to the use of Slurm and Docker, you can refer to this informative ",(0,r.kt)("a",{target:"_blank",href:n(5786).Z},"PDF")," guide, which covers essential concepts and best practices."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,"If the pipeline is to be executed on ",(0,r.kt)("a",{parentName:"p",href:"http://160.85.252.56:8088/superset/dashboard/11/"},"CAI's DGX cluster"),", the developer must establish a connection to the ZHAW network, either on-site or remotely via VPN."),(0,r.kt)("p",null,"An SSH connection to a DGX instance should be configured as explained ",(0,r.kt)("a",{parentName:"p",href:"https://cai.cloudlab.zhaw.ch/pages/general/ssh.html"},"here"),"."),(0,r.kt)("p",null,"It is highly recommended to use ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/"},"VSCode")," and its ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/remote/ssh"},"Remote SSH Extension")," for development as it allows neat automatic port forwarding."),(0,r.kt)("h2",{id:"pipeline-setup"},"Pipeline Setup"),(0,r.kt)("p",null,"Create a directory of your choice and clone the pipeline repo into it."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mkdir pipeline && cd pipeline\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone git@github.com:ZHAW-certAInty/toolbox.git\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd toolbox\n")),(0,r.kt)("p",null,"Checkout the pipeline branch and navigate to the directory where the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker-compose.yml")," and its corresponding ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file is located."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git checkout pipeline\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd bily\n")),(0,r.kt)("p",null,"To configure the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file and avoid port collisions, follow these steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Open the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file for editing.")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Locate the following lines in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file:"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AIRFLOW_WEBSERVER_PORT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"MLFLOW_WEBSERVER_PORT")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OXEN_PORT")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Update the values of these variables to ensure they do not collide with other ports on DGX, following the guidelines provided ",(0,r.kt)("a",{parentName:"p",href:"https://cai.cloudlab.zhaw.ch/pages/gpu.html#id1"},"here"),"."))),(0,r.kt)("p",null,"Set your ",(0,r.kt)("inlineCode",{parentName:"p"},"AIRFLOW_UID")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ZHAW_SHORTY")," in the ",(0,r.kt)("inlineCode",{parentName:"p"},".env")," file by executing the following lines in the shell:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[[ -f .env ]] && (grep -q "^AIRFLOW_UID=" .env && sed -i "s/^AIRFLOW_UID=.*/AIRFLOW_UID=$(id -u)/" .env && echo "AIRFLOW_UID changed to $(id -u)") || (echo -e "\\nAIRFLOW_UID=$(id -u)" >> .env && [[ -f .env ]] && echo "AIRFLOW_UID=$(id -u) added to the .env file")\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'[[ -f .env ]] && (grep -q "^ZHAW_SHORTY=" .env && sed -i "s/^ZHAW_SHORTY=.*/ZHAW_SHORTY=$(whoami)/" .env && echo "ZHAW_SHORTY changed to $(whoami)") || (echo -e "\\nZHAW_SHORTY=$(whoami)" >> .env && [[ -f .env ]] && echo "ZHAW_SHORTY=$(whoami) added to the .env file")\n')),(0,r.kt)("p",null,"Create a ",(0,r.kt)("inlineCode",{parentName:"p"},"screen")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"tmux")," session and allocate sufficient resources for both the Airflow and MLflow webservers and their respective backend components within Slurm."),(0,r.kt)("p",null,"In the typical setup, each service and its dependencies run within dedicated and isolated Docker containers. However, they all belong to the same network to facilitate seamless communication among them."),(0,r.kt)("p",null,"For ",(0,r.kt)("a",{parentName:"p",href:"airflow"},"Airflow"),", these components encompass a scheduler responsible for monitoring all tasks and DAGs, triggering task instances once their dependencies are complete, a PostgreSQL database, and a Redis broker that forwards messages from the scheduler to the workers."),(0,r.kt)("p",null,"The current ",(0,r.kt)("a",{parentName:"p",href:"mlflow"},"MLflow")," deployment scenario includes a PostgreSQL backend and a MinIO artifact store. MLflow uses for storing runs and artifacts a two components for storage: backend store and artifact store.\nWhile the backend store persists MLflow entities (runs, parameters, metrics, tags, notes, metadata, etc), the artifact store persists artifacts (files, models, images, in-memory objects, or model summary, etc)."),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://docs.oxen.ai/getting-started/intro"},"Oxen")," runs self-contained, and initially, all datasets located in the ",(0,r.kt)("inlineCode",{parentName:"p"},"OXEN_DATA_DIR")," as defined in the ",(0,r.kt)("inlineCode",{parentName:"p"},"env")," file will be pushed to the data repository."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"screen -S pipeline\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"srun --job-name=<ZHAW-SHORTY>-pipeline --pty --ntasks=1 --cpus-per-task=4 --mem=32G bash\n")),(0,r.kt)("p",null,"To run the pipeline, execute the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose up\n")),(0,r.kt)("admonition",{title:"Port Forwarding",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"To access their UIs, you must forward the ports of the Airflow and MLflow webserver. If it's not done automatically by VSCode's Remote SSH Extension, you have to forward them manually as explained ",(0,r.kt)("a",{parentName:"p",href:"https://cai.cloudlab.zhaw.ch/pages/gpu/dgx-servers/docker_and_ssh.html#setting-up-ssh-forwarding"},"here"),".")),(0,r.kt)("h2",{id:"pipeline-test"},"Pipeline Test"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Detach from the ",(0,r.kt)("inlineCode",{parentName:"li"},"screen")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tmux")," session."),(0,r.kt)("li",{parentName:"ol"},"Check for errors in the setup process by running the following command:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose logs\n")),(0,r.kt)("p",null,"This will display the logs, allowing you to identify and troubleshoot any potential issues."),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Test the successful setup by accessing Airflow's and MLflow's web servers in your browser. You can typically do so by opening the following URLs:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Airflow Web Server: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:<AIRFLOW_WEBSERVER_PORT>")),(0,r.kt)("li",{parentName:"ul"},"MLflow Web Server: ",(0,r.kt)("inlineCode",{parentName:"li"},"http://localhost:<MLFLOW_WEBSERVER_PORT>")),(0,r.kt)("li",{parentName:"ul"},"Make sure to replace ",(0,r.kt)("inlineCode",{parentName:"li"},"<AIRFLOW_WEBSERVER_PORT>")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"<MLFLOW_WEBSERVER_PORT>")," with the respective forwarded ports of those in your ",(0,r.kt)("inlineCode",{parentName:"li"},".env")," file.")))),(0,r.kt)("h2",{id:"airflow-worker-setup"},"Airflow Worker Setup"),(0,r.kt)("p",null,"At present, GitHub serves as the entry point for MLEs seeking to utilize the pipeline. By pushing changes to the ",(0,r.kt)("inlineCode",{parentName:"p"},"pipeline")," branch of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ZHAW-certAInty/toolbox/tree/pipeline"},"pipeline's repo"),", MLEs can initiate the process.\nTo accommodate concurrent work on multiple ML models, each push of an ML model to GitHub triggers the creation of a dedicated worker on DGX. These workers are responsible for handling the corresponding models, ensuring parallel processing.\nTo establish this communication and orchestration, it is essential to have a self-hosted runner operational on the pipeline's DGX instance as explained ",(0,r.kt)("a",{parentName:"p",href:"https://docs.github.com/en/actions/hosting-your-own-runners/managing-self-hosted-runners/adding-self-hosted-runners"},"here"),"."),(0,r.kt)("h2",{id:"pipeline-breakdown"},"Pipeline Breakdown"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Attach to the pipeline's ",(0,r.kt)("inlineCode",{parentName:"li"},"screen")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"tmux")," session."),(0,r.kt)("li",{parentName:"ol"},"Stop the containers gracefully by hitting ",(0,r.kt)("inlineCode",{parentName:"li"},"Ctrl"),"+",(0,r.kt)("inlineCode",{parentName:"li"},"C")),(0,r.kt)("li",{parentName:"ol"},"Remove the containers and orphans")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"docker compose down --remove-orphans\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},'Ask your admin to delete all folders created by the Docker daemon, i.e. "airflow", "db", and "minio".')))}u.isMDXComponent=!0},5786:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/files/dgx_workflow_notes-d13961e75ee82d3f40d3e9f353d5c4fc.pdf"}}]);