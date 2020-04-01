(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[22],{303:function(e,t,a){"use strict";a.r(t);var o=a(1),n=a(0),r=a.n(n),i=a(3),l=a(323),c=a(274),p=["property","description","default","type","value"],s=[{property:"text",description:"Set text that should be copied",default:"",type:"string",value:""},{property:"icon",description:"Set custom icon from icons list",default:"content-copy",type:"string",value:""},{property:"size",description:"Set icon size",default:"16px",type:"number",value:""},{property:"color",description:"Set icon color",default:"gray",type:"string",value:""},{property:"defaultText",description:"Set tooltip default text",default:"Copy",type:"string",value:""},{property:"copiedText",description:"Set tooltip copied text",default:"Copied to clipboard",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:"hex | rgb() | css preset colors"}],d="// Usage examples\nimport React from 'react';\nimport { CopyToClipboard, InputField } from '@assenti/react-ui-components';\nconst text = 'Some text';\n\nfunction Example() {\n    return (\n        <div className=\"row align-center\">\n            <InputField color=\"info\" readOnly value={text} width={200}/>\n            <CopyToClipboard text={text} className=\"ml-10\"/>\n        </div>\n    )\n}";t.default=function(){var e=Object(n.useState)("Some text"),t=Object(o.a)(e,2),a=t[0],u=t[1];return r.a.createElement("div",{className:"rui-page"},r.a.createElement("div",{className:"rui-page-title"},"<CopyToClipboard/>"," Component"),r.a.createElement(i.j,{outlined:!0,title:"Usage"},r.a.createElement("div",{className:"row align-center"},r.a.createElement(i.u,{color:"info",onChange:function(e){return u(e.target.value)},value:a,width:200}),r.a.createElement(i.m,{text:a,className:"ml-10"})),r.a.createElement(i.l,{icon:"code",iconSize:18,extra:r.a.createElement(i.m,{defaultText:"Copy code",text:d,className:"mr-10"}),contentStyles:{padding:0},tooltip:"Show/Hide Code"},r.a.createElement(l.a,{language:"jsx",style:c.a},d))),r.a.createElement("h2",null,"API"),r.a.createElement(i.H,{bordered:!0,headers:["Property","Descriprion","Default","Type","Value"],items:s,index:!0,itemTitles:p}))}}}]);