(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[42],{332:function(e,t,a){"use strict";a.r(t);var r=a(2),n=a(0),o=a.n(n),l=a(47),s=a(3),c=[{property:"visible",description:"Set modal visible state",default:"",type:"boolean",value:"true | false"},{property:"onClose",description:"Ivokes on close icon click",default:"",type:"function",value:""},{property:"closable",description:"Set closable on modal overlay click",default:"false",type:"boolean",value:"true | false"},{property:"centered",description:"Set modal vertical position - center",default:"false",type:"boolean",value:"true | false"},{property:"marginTop",description:"Set margin top (has no effect with centered prop)",default:"20px",type:"number | string",value:""},{property:"padding",description:"Set modal body padding",default:"15px",type:"number | string",value:""},{property:"width",description:"Set modal width",default:"",type:"number | string",value:""},{property:"toggleFullscreen",description:"Enable modal fullscreen mode",default:"false",type:"boolean",value:"true | false"},{property:"headerReverse",description:"Reverse modal header icons position",default:"false",type:"boolean",value:"true | false"},{property:"closeIconColor",description:"Set close icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"fullscreenIconColor",description:"Set fullscreen icon color",default:"gray",type:"string",value:"hex | rgb() | css preset colors"},{property:"dark",description:"Set modal dark mode",default:"false",type:"boolean",value:"true | false"},{property:"header",description:"Set modal header",default:"",type:"any",value:""},{property:"footer",description:"Set modal footer",default:"",type:"any",value:""},{property:"className",description:"Set css custom class",default:"",type:"string",value:""}],i=["info","success","error"],p=["default","tile","rounded"];t.default=function(){var e=Object(n.useState)(""),t=Object(r.a)(e,2),a=t[0],u=t[1],d=Object(n.useState)(""),m=Object(r.a)(d,2),f=m[0],y=m[1],b=function(){s.bb.message("I am a Snackbar",{type:a,borderType:f,controls:o.a.createElement(s.h,{dark:!0,name:"CLOSE",onClick:function(){return s.bb.remove()}})})};return o.a.createElement(s.T.Consumer,null,(function(e){return o.a.createElement(l.a,{usage:"// Usage examples\nimport React, { useState } from 'react';\nimport { Button, Modal } from '@assenti/rui-components';\n\nfunction Example() {\n    const [modal, setModal] = useState(false);\n\n    return (\n        <>\n            <Button\n                color=\"primary\"\n                name=\"Open Modal\"\n                onClick={() => setModal(true)}/>\n            <Modal\n                centered\n                onClose={() => setModal(false)} \n                visible={modal} \n                header={<div>Sign in</div>}>\n                content...\n            </Modal>\n        </>\n    )\n}",apiDescItems:c,componentName:"<Snackbar/>"},o.a.createElement(s.M,null),o.a.createElement(s.K,{items:i,dark:e,prefix:o.a.createElement(s.z,{name:"brush"}),width:200,placeholder:"Choose type",label:"Type",color:"primary",className:"my-5",value:a,onChange:function(e){return u(e)}}),o.a.createElement("br",null),o.a.createElement(s.K,{items:p,dark:e,prefix:o.a.createElement(s.z,{name:"shape"}),width:200,placeholder:"Choose border type",label:"Border type",color:"primary",className:"my-5",value:f,onChange:function(e){return y(e)}}),o.a.createElement("br",null),o.a.createElement(s.h,{className:"mt-10 ml-0",onClick:b,name:"Invoke snackbar",color:"primary"}))}))}},47:function(e,t,a){"use strict";var r=a(2),n=a(0),o=a.n(n),l=a(3),s=a(343),c=a(291),i=a(292),p=["property","description","default","type","value"];t.a=function(e){var t=Object(n.useRef)(),a=Object(n.useState)(!1),u=Object(r.a)(a,2),d=u[0],m=u[1];return o.a.createElement(l.T.Consumer,null,(function(a){return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"rui-page-title"},e.componentName," Component"),o.a.createElement(l.k,{dark:a,header:o.a.createElement("h4",null,"Usage")},e.children,o.a.createElement(l.n,{className:"mt-10",extra:o.a.createElement(l.o,{defaultText:"Copy code",text:e.usage,dark:a}),onChange:function(e){return m(e)},customToggler:o.a.createElement(l.h,{className:"ml-20",name:d?"Close":"Open",icon:"code",color:"info"}),dark:a},o.a.createElement(s.a,{language:"jsx",style:a?c.a:i.a},e.usage))),e.backTopBtn?o.a.createElement(l.e,{dark:!0,setRef:t,size:"medium",tooltip:"Up"}):null,o.a.createElement(l.k,{className:"mt-10"},o.a.createElement(l.P,{tableTitle:o.a.createElement("h2",null,"API"),dark:a,headers:["Property","Description","Default","Type","Value"],items:e.apiDescItems,index:!0,bordered:!0,searchable:e.apiSearchable,searchKey:"property",itemTitles:p})))}))}}}]);