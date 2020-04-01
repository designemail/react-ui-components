(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[33],{306:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),s=a(3),i=a(323),u=a(274),c=["property","description","default","type","value"],l=[{property:"itemsCount",description:"Pass items total count",default:"",type:"number",value:""},{property:"perPageVariants",description:"Set per page preset variants",default:"[10, 20, 50, 100]",type:"number[]",value:""},{property:"perPage",description:"Set per page value",default:"10",type:"number",value:""},{property:"onPerPageSelect",description:"Invokes on per page selection (return perPage value)",default:"",type:"function",value:""},{property:"perPageText",description:'Set "10 / page" text',default:"page",type:"string",value:""},{property:"current",description:"Set pagination default current page",default:"1",type:"number",value:""},{property:"onChange",description:"Invokes on page selection (return page value)",default:"",type:"function",value:""},{property:"color",description:"Set color of pagination from list",default:"primary",type:"string",value:"primary | info | success | error"},{property:"rounded",description:"Make border radius rounded",default:"false",type:"boolean",value:"true | false"},{property:"size",description:"Set pagination size",default:"",type:"string",value:"medium | large"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],p='// Usage examples\nimport React, { useState } from \'react\';\nimport { Pagination, InputField } from \'@assenti/rui-components\';\n\nfunction Example() {\n    const [itemsCount, setItemsCount] = useState(100);\n    const [perPage, setPerPage] = useState(10);\n    const [currentPage, setCurrentPage] = useState(1);\n\n    return (\n        <div>\n            <Pagination\n                itemsCount={itemsCount}\n                color="primary"\n                perPage={perPage}\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                pageText="module"/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="info"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                className="pa-5"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="success"\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}/>\n            <Pagination\n                itemsCount={itemsCount}\n                color="error"\n                perPage={perPage}\n                onPerPageSelect={value => setPerPage(value)}\n                className="pa-5"\n                current={currentPage}\n                onChange={page => setCurrentPage(page)}/>\n        </div>\n    )\n}\n',m=["primary","info","success","error"],g=["default","medium","large"];t.default=function(){var e=Object(r.useState)(100),t=Object(n.a)(e,1)[0],a=Object(r.useState)(10),d=Object(n.a)(a,2),P=d[0],f=d[1],y=Object(r.useState)(1),v=Object(n.a)(y,2),b=v[0],C=v[1],S=Object(r.useState)(m[0]),h=Object(n.a)(S,2),E=h[0],j=h[1],N=Object(r.useState)(g[0]),O=Object(n.a)(N,2),x=O[0],z=O[1],k=Object(r.useState)(!1),w=Object(n.a)(k,2),I=w[0],T=w[1],R=Object(r.useRef)();return o.a.createElement("div",{className:"rui-page",ref:R},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"<Pagination/>"," Component")),o.a.createElement(s.j,{outlined:!0,title:"Usage"},o.a.createElement(s.F,{items:m,prefix:o.a.createElement(s.t,{name:"brush"}),width:200,label:"Pagination color",color:"primary",className:"my-10",value:E,onChange:function(e){return j(e)}}),o.a.createElement("br",null),o.a.createElement(s.F,{items:g,prefix:o.a.createElement(s.t,{name:"format-size"}),width:200,label:"Pagination size",color:"primary",className:"my-10",value:x,onChange:function(e){return z(e)}}),o.a.createElement("br",null),o.a.createElement(s.G,{check:I,color:"primary",rightLabel:"Rounded",className:"my-10",onChange:function(){return T(!I)}}),o.a.createElement("br",null),o.a.createElement(s.z,{itemsCount:t,color:E,size:x,perPage:P,current:b,onChange:function(e){return C(e)},onPerPageSelect:function(e){return f(e)},className:"pa-5",rounded:I}),o.a.createElement(s.l,{icon:"code",iconSize:18,extra:o.a.createElement(s.m,{defaultText:"Copy code",text:p,className:"mr-10"}),tooltip:"Show/Hide Code"},o.a.createElement(i.a,{language:"jsx",style:u.a},p))),o.a.createElement(s.d,{size:"medium",dark:!0,setRef:R}),o.a.createElement("h2",null,"API"),o.a.createElement(s.H,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:l,index:!0,itemTitles:c}))}}}]);