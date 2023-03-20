"use strict";(self.webpackChunkpersonal_site=self.webpackChunkpersonal_site||[]).push([[671],{4671:function(e,t,a){a.r(t),a.d(t,{default:function(){return B}});var n=a(2791),o=a(1087),s=a(6842),r=a(184),i=function(e){var t=e.data;return(0,r.jsx)("article",{className:"degree-container",children:(0,r.jsxs)("header",{children:[(0,r.jsx)("h4",{className:"degree",children:t.degree}),(0,r.jsxs)("p",{className:"school",children:[(0,r.jsx)("a",{href:t.link,children:t.school}),", ",t.year]})]})})},c=function(e){var t=e.data;return(0,r.jsxs)("div",{className:"education",children:[(0,r.jsx)("div",{className:"link-to",id:"education"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Educa\xe7\xe3o"})}),t.map((function(e){return(0,r.jsx)(i,{data:e},e.school)}))]})};c.defaultProps={data:[]};var l=c,d=function(e){var t=e.data;return(0,r.jsxs)("article",{className:"jobs-container",children:[(0,r.jsxs)("header",{children:[(0,r.jsxs)("h4",{children:[(0,r.jsx)("a",{href:t.link,children:t.company})," - ",t.position]}),(0,r.jsxs)("p",{className:"daterange",children:[" ",t.daterange]})]}),(0,r.jsx)("ul",{className:"points",children:t.points.map((function(e){return(0,r.jsx)("li",{children:e},e)}))})]})},u=function(e){var t=e.data;return(0,r.jsxs)("div",{className:"experience",children:[(0,r.jsx)("div",{className:"link-to",id:"experience"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Experience"})}),t.map((function(e){return(0,r.jsx)(d,{data:e},e.company)}))]})};u.defaultProps={data:[]};var m=u,p=a(5671),h=a(3144),g=a(136),y=a(516),v=a(4942),b=a(1413),f=function(e){var t=e.handleClick,a=e.active,n=e.label;return(0,r.jsx)("button",{className:"skillbutton ".concat(a[n]?"skillbutton-active":""),type:"button",onClick:function(){return t(n)},children:n})},j=function(e){var t=e.data,a=e.categories,n=t.category,o=t.competency,s=t.title,i={background:a.filter((function(e){return n.includes(e.name)})).map((function(e){return e.color}))[0]},c=(0,b.Z)((0,b.Z)({},i),{},{width:"".concat(String(Math.min(100,Math.max(o/5*100,0))),"%")});return(0,r.jsxs)("div",{className:"skillbar clearfix",children:[(0,r.jsx)("div",{className:"skillbar-title",style:i,children:(0,r.jsx)("span",{children:s})}),(0,r.jsx)("div",{className:"skillbar-bar",style:c}),(0,r.jsxs)("div",{className:"skill-bar-percent",children:[o," / 5"]})]})};j.defaultProps={categories:[]};var k=j,x=function(e){(0,g.Z)(a,e);var t=(0,y.Z)(a);function a(e){var n;return(0,p.Z)(this,a),(n=t.call(this,e)).handleChildClick=function(e){n.setState((function(t){var a=Object.keys(t.buttons).reduce((function(a,n){return(0,b.Z)((0,b.Z)({},a),{},(0,v.Z)({},n,e===n&&!t.buttons[n]))}),{});return a.All=!Object.keys(t.buttons).some((function(e){return a[e]})),{buttons:a}}))},n.state=function(e){var t=e.categories,a=e.skills;return{buttons:t.map((function(e){return e.name})).reduce((function(e,t){return(0,b.Z)((0,b.Z)({},e),{},(0,v.Z)({},t,!1))}),{All:!0}),skills:a}}({categories:e.categories,skills:e.skills}),n}return(0,h.Z)(a,[{key:"getRows",value:function(){var e=this,t=Object.keys(this.state.buttons).reduce((function(t,a){return e.state.buttons[a]?a:t}),"All");return this.state.skills.sort((function(e,t){var a=0;return e.competency>t.competency?a=-1:e.competency<t.competency?a=1:e.category[0]>t.category[0]?a=-1:e.category[0]<t.category[0]||e.title>t.title?a=1:e.title<t.title&&(a=-1),a})).filter((function(e){return"All"===t||e.category.includes(t)})).map((function(t){return(0,r.jsx)(k,{categories:e.props.categories,data:t},t.title)}))}},{key:"getButtons",value:function(){var e=this;return Object.keys(this.state.buttons).map((function(t){return(0,r.jsx)(f,{label:t,active:e.state.buttons,handleClick:e.handleChildClick},t)}))}},{key:"render",value:function(){return(0,r.jsxs)("div",{className:"skills",children:[(0,r.jsx)("div",{className:"link-to",id:"skills"}),(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h3",{children:"Skills"}),(0,r.jsx)("p",{children:"Note: I think these sections are silly, but everyone seems to have one. Here is a *mostly* honest overview of my skills."})]}),(0,r.jsx)("div",{className:"skill-button-container",children:this.getButtons()}),(0,r.jsx)("div",{className:"skill-row-container",children:this.getRows()})]})}}]),a}(n.Component);x.defaultProps={skills:[],categories:[]};var P=x,C=function(e){var t=e.data,a=e.last;return(0,r.jsxs)("li",{className:"course-container",children:[(0,r.jsxs)("a",{href:t.link,children:[(0,r.jsxs)("h4",{className:"course-number",children:[t.number,":"]}),(0,r.jsx)("p",{className:"course-name",children:t.title})]}),!a&&(0,r.jsx)("div",{className:"course-dot",children:(0,r.jsx)("p",{className:"course-name",children:" \u2022"})})]})};C.defaultProps={last:!1};var w=C,S=function(e){return e.sort((function(e,t){var a=0;return e.university>t.university?a=-1:e.university<t.university||e.number>t.number?a=1:e.number<t.number&&(a=-1),a})).map((function(t,a){return(0,r.jsx)(w,{data:t,last:a===e.length-1},t.title)}))},N=function(e){var t=e.data;return(0,r.jsxs)("div",{className:"courses",children:[(0,r.jsx)("div",{className:"link-to",id:"courses"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)("h3",{children:"Selected Courses"})}),(0,r.jsx)("ul",{className:"course-list",children:S(t)})]})};N.defaultProps={data:[]};var D=N,O=function(){return(0,r.jsxs)("div",{className:"references",children:[(0,r.jsx)("div",{className:"link-to",id:"references"}),(0,r.jsx)("div",{className:"title",children:(0,r.jsx)(o.rU,{to:"/contact",children:(0,r.jsx)("h3",{children:"References are available upon request"})})})]})},L=[{title:"Topicos avan\xe7ados em programa\xe7\xe3o orientada a Objetos - Parte 2",number:"OO2",link:"https://www.coursera.org/account/accomplishments/certificate/JT6XMW9HXA82",university:"Coursera"},{title:"Formando Campe\xf5es: Lideran\xe7a F.C.",number:"LIDERAN\xc7A",link:"https://conquerplus.com.br/certificates/e3b10d2b-9876-40e5-ad95-b4f24fc241d1",university:"Escola Conquer"},{title:"Topicos avan\xe7ados em programa\xe7\xe3o orientada a Objetos - Parte 1",number:"OO1",link:"https://coursera.org/share/13a0138646b4aba04cc3aad009f4dadb",university:"Coursera"},{title:"Comunica\xe7\xe3o e Orat\xf3ria - Destravando a sua comunica\xe7\xe3o",number:"Comunica\xe7\xe3o",link:"https://conqueronline.com.br/certificates/9d7c38bf-ae5b-4265-b228-8452d43ba8ee",university:"Escola Conquer"},{title:"Negocia\xe7\xe3o e Influ\xeancia",number:"Business",link:"https://conqueronline.com.br/certificates/d06c40ea-7308-4412-9770-a7f11b7409be",university:"Escola Conquer"},{title:"Intro to TensorFlow",number:"ML01",link:"https://www.coursera.org/account/accomplishments/certificate/TPC8LTLT2FKC",university:"Coursera"},{title:"Launching into Machine Learning",number:"ML02",link:"https://www.coursera.org/account/accomplishments/certificate/FHCNR9AY58U8",university:"Coursera"},{title:"Building Batch Data Pipelines on GCP",number:"DE01",link:"https://www.coursera.org/account/accomplishments/certificate/DC48X6U4D2UD",university:"Coursera"},{title:"Exploring \u200band \u200bPreparing \u200byour \u200bData with BigQuery",number:"DE02",link:"https://www.coursera.org/account/accomplishments/certificate/TGV4ZQJTDHSN",university:"Coursera"},{title:"How Google does Machine Learning",number:"ML03",link:"https://www.coursera.org/account/accomplishments/certificate/NG5JSVP7NSRA",university:"Coursera"},{title:"Google Cloud Platform Fundamentals: Core Infrastructure",number:"ML04",link:"https://www.coursera.org/account/accomplishments/certificate/ZZKYQKAMXNSG",university:"Coursera"},{title:"Computer Vision and Image Processing",number:"MAC5768",link:"https://uspdigital.usp.br/janus/componente/disciplinasOferecidasInicial.jsf?action=3&sgldis=MAC5768",university:"USP"},{title:"Topics in Number Theory",number:"MAC6928",link:"",university:"USP"},{title:"Fundamentos matem\xe1ticos de aprendizado de m\xe1quina",number:"MAP5918",link:"",university:"USP"},{title:"Laborat\xf3rio de Vis\xe3o Computacional e Processamento de Imagens",number:"MAC5915",link:"",university:"USP"},{title:"An\xe1lise de Algoritmos",number:"MAC5711",link:"",university:"USP"},{title:"T\xf3picos Avan\xe7ados de Programa\xe7\xe3o Orientada a Objetos",number:"MAC5714",link:"",university:"USP"}],M=[{school:"Universidade de S\xe3o Paulo",degree:"M.S. Ci\xeancia da computa\xe7\xe3o",link:"https://www.ime.usp.br/",year:"Em andamento. Previs\xe3o de conclus\xe3o 2023"},{school:"Universidade Federal do Tocantins",degree:"B.S. Computer Science",link:"https://palmas.uft.edu.br/grad/ccomp/",year:2019},{school:"Instituto Federal do Tocantins",degree:"T\xe9cnico, mecatr\xf4nica",link:"https://palmas.uft.edu.br/grad/ccomp/",year:2015}],T=[{company:"Isportistics",position:"Cientista de Dados, foco em vis\xe3o computacional - R&D",level:"Pleno",link:"https://isportistics.com/",daterange:"Jun 2022 - Fev 2023",points:["N\xfacleo de pesquisa e desenvolvimento da Isportistics pesquisando e resolvendo problemas de an\xe1lise de v\xeddeo esportivo","Modelos de deep learning para detec\xe7\xe3o de pessoas e objetos, em v\xe1rios subdom\xednios no contexto de video esportivo, especialmente futebol","Treinamento de modelos em inst\xe2ncia sport, AWS.","Tracking de objetos em longos v\xeddeos de streaming","Planejamento e desenvolvimento de arquitetura de servi\xe7os para o modelo de forma que todos os produtos consigam se comunicar de forma f\xe1cil e eficaz","Estudo e pesquisa de viabilidade de novas tecnologias a serem incorporados no roll de produtos da empresa","Stacks: Python, PyTorch, TensorFlow, OpenCV, Pandas, Numpy, Scipy, AWS, GCP (compute engine)"]},{company:"Luby",position:"Cientista de dados",level:"Pleno",link:"https://luby.com.br/",daterange:"Nov 2021 - Jun 2022",points:["Tech lead do time de ci\xeancia de dados do n\xfacleo de BI da Luby, desenvolvi 3 pessoas durante o periodo","An\xe1lise e estudos de bases de dados para a extra\xe7\xe3o de dados com o objetivo de gerar valor para o neg\xf3cio","Projeto de previs\xe3o de vendas B2B a partir de dados de CRM","An\xe1lise e previs\xe3o de ociosidade de funcion\xe1rios, mais especificamente, desenvolvedores","Classifica\xe7\xe3o de textos atrav\xe9s de modelos de NLP","Migra\xe7\xe3o de banco de dados da aplica\xe7\xe3o em intermedi\xe1rias de transa\xe7\xf5es financeiras, ETL do banco MongoDB para o redshift da AWS.","Stacks: Python, Pyspark, Pandas, Scikit-learn, AWS, MongoDB"]},{company:"A de Agro",position:"Cientita de dados, foco em vis\xe3o computacional",level:"Junior",link:"https://www.adeagro.com.br",daterange:"Dez 2020 - Nov 2021",points:["Treinamento de modelos de segmenta\xe7\xe3o sem\xe2ntica para segmentar talh\xf5es de imagens de sat\xe9lite.","T\xe9cnicas sensoriamento remoto e processamento de imagens para extra\xe7\xe3o de informa\xe7\xe3o de imagens de sat\xe9lite","Pesquisa e experimenta\xe7\xe3o de modelos estado da arte para problemas do dom\xednio espec\xedfico","modelos de previs\xe3o de safra de soja","Stacks: Python, TensorFlow, scikit-learn, OpenCV, AWS, gdal, rasterio"]},{company:"Santo Digital",position:"Engenheiro de Machine Learning",level:"Junior",link:"https://santodigital.com.br/",daterange:"Jan 2020 - Nov 2021",points:["Ajudando na manuten\xe7\xe3o e suporte dos produtos","Cria\xe7\xe3o de pipeline de dados para grandes players banc\xe1rios, trabalhando no ETL de dados processando dados em ambiente spark com dataflow, GCP","Trainamento de modelos para POCs, detec\xe7\xe3o de objetos, compara\xe7\xe3o de faces, modelos com tensorflow ou modelos apenas com AutoML, GCP","Stacks: Python, Tensorflow, C++, OpenCV, GCP, numpy, pandas"]},{company:"Alura Cursos Online",position:"Instrutor de cursos, aprendizado de m\xe1quina e processamento de imagens",level:"Instrutor",link:"https://www.alura.com.br/",daterange:"Mai 2019 - Aug 2015",points:["Cursos de processamento de imagens e machine learning gravados para a plataforma","Estudo de tema de demanda e cria\xe7\xe3o de projeto","Cria\xe7\xe3o de roteiro de aula","Grava\xe7\xe3o das aulas","Cria\xe7\xe3o de todo o conte\xfado: projeto, exerc\xedcios, apresenta\xe7\xf5es, exemplos, conte\xfado extras","Suporte a d\xfavidas e erros nos primeiros meses de lan\xe7amento do curso"]}],A=a(3433),E=[{title:"Python",competency:5,category:["Languages","Python","Data Science"]},{title:"PyTorch",competency:4,category:["Machine Learning","Python","Data Science"]},{title:"Tensorflow + Keras",competency:4,category:["Data Science","Python","Machine Learning"]},{title:"Numpy",competency:4,category:["Data Science","Machine Learning","Python"]},{title:"Pandas",competency:4,category:["Data Engineering","Data Science","Python"]},{title:"Scikit-Learn",competency:4,category:["Data Engineering","Data Science","Python","Machine Learning"]},{title:"Spark",competency:2,category:["Data Engineering","Data Science"]},{title:"PyQT",competency:3,category:["Python"]},{title:"Bash",competency:4,category:["Tools","Languages"]},{title:"Amazon Web Services",competency:3,category:["Web Development","Tools"]},{title:"MongoDB",competency:1,category:["Databases"]},{title:"PostgreSQL/SQLite3/SQL",competency:3,category:["Databases","Languages"]},{title:"Data Mining",competency:3,category:["Data Science"]},{title:"Flask",competency:2,category:["Web Development","Python"]},{title:"Git",competency:3,category:["Tools"]},{title:"Google Cloud Platform",competency:3,category:["Tools","Web Development"]},{title:"Jupyter",competency:3,category:["Data Science","Python","Machine Learning"]},{title:"Typescript",competency:1,category:["Web Development","Languages","Javascript"]},{title:"C++",competency:3,category:["Languages"]},{title:"R",competency:1,category:["Languages"]},{title:"Data Visualization",competency:3,category:["Data Science","Python"]},{title:"Matplotlib",competency:4,category:["Data Engineering","Data Science","Python"]}].map((function(e){return(0,b.Z)((0,b.Z)({},e),{},{category:e.category.sort()})})),Z=["#6968b3","#37b1f5","#40494e","#515dd4","#e47272","#cc7b94","#3896e2","#c3423f","#d75858","#747fff","#64cb7b"],q=(0,A.Z)(new Set(E.reduce((function(e,t){var a=t.category;return e.concat(a)}),[]))).sort().map((function(e,t){return{name:e,color:Z[t]}})),I=["Educa\xe7\xe3o","Experi\xeancias","Skills","Cursos","Refer\xeancias"],B=function(){return(0,r.jsx)(s.Z,{title:"Resumo",description:"Resumo, Suayder. Cientista de dados, Pesquisador em vis\xe3o computacional, IME-USP.",children:(0,r.jsxs)("article",{className:"post",id:"resume",children:[(0,r.jsx)("header",{children:(0,r.jsxs)("div",{className:"title",children:[(0,r.jsx)("h2",{children:(0,r.jsx)(o.rU,{to:"resume",children:"Resumo"})}),(0,r.jsx)("div",{className:"link-container",children:I.map((function(e){return(0,r.jsx)("h4",{children:(0,r.jsx)("a",{href:"#".concat(e.toLowerCase()),children:e})},e)}))})]})}),(0,r.jsx)(l,{data:M}),(0,r.jsx)(m,{data:T}),(0,r.jsx)(P,{skills:E,categories:q}),(0,r.jsx)(D,{data:L}),(0,r.jsx)(O,{})]})})}},4942:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(9142);function o(e,t,a){return(t=(0,n.Z)(t))in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},1413:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(4942);function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){(0,n.Z)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}}}]);
//# sourceMappingURL=671.24c96c2b.chunk.js.map