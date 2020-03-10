(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[4],{273:function(e,t,a){e.exports=a.p+"static/media/girl.465a6768.png"},274:function(e,t,a){e.exports=a.p+"static/media/girl_.f2dc0133.png"},300:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),o=a.n(r),c=a(3),i=a(316),l=a(271),s=a(46),m=a.n(s),d=a(49),p=a.n(d),u=a(273),f=a.n(u),h=a(274),y=a.n(h),v=[{name:"Steve Rogers",hero:"Captain America",icon:"account",check:!1},{name:"Peter Parker",hero:"Spider man",icon:"account",check:!1},{name:"Tony Stark",hero:"Iron man",icon:"account",check:!1},{name:"Bruce Benner",hero:"Hulk",icon:"account",check:!1}],g=["property","description","default","type","value"],b=[{property:"header",description:"Set card header",default:"",type:"any",value:""},{property:"footer",description:"Set card footer",default:"",type:"any",value:""},{property:"width",description:"Set card width",default:"",type:"string | number",value:'100, "100%", "100px"'},{property:"img",description:"Set card image",default:"",type:"string | base64",value:""},{property:"flat",description:"Remove card box shadow",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"hover",description:"Lift up the card on hover",default:"false",type:"boolean",value:"true | false"},{property:"outlined",description:"Set card borders outlined",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set card borders color from colors list",default:"",type:"string",value:"primary | info | success | error | gray"},{property:"title",description:"Set outlined card title (has effect only with outlined prop)",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],E=["primary","info","success","error","gray"],k="// Usage examples\nimport React from 'react';\nimport { Card, List, ListItem } from '@assenti/rui-components';\n\nconst names = [\n    { name: 'Steve Rogers', hero: 'Captain America', icon: 'account' }, \n    { name: 'Peter Parker', hero: 'Spider man', icon: 'account' }, \n    { name: 'Tony Stark', hero: 'Iron man', icon: 'account' }, \n    { name: 'Bruce Benner', hero: 'Hulk', icon: 'account' }\n];\n\nfunction Example() {\n    return (\n        <div>\n            <Card header=\"Marvel heroes\">\n                <List>\n                    {names.map((item, index) => \n                        <ListItem \n                            key={index}\n                            item={item.name}\n                            hover/>\n                    )}\n                </List>\n            </Card>\n            <Card dark header=\"Marvel heroes\">\n                <List dark>\n                    {names.map((item, index) => \n                        <ListItem \n                            key={index}\n                            item={item.name}\n                            hover/>\n                    )}\n                </List>\n            </Card>\n        </div>\n    )\n}",x='// Usage examples\nimport React from \'react\';\nimport { Card, Icon } from \'@assenti/rui-components\';\n\nlet cards = [1,2,3];\n\nfunction Example() {\n    return (\n        <div className="row space-around">\n            {cards.map((item, index) => \n                <Card \n                    key={index}\n                    hover\n                    className="ma-5 col"\n                    width={200} \n                    img={<div className="row justify-center">\n                            <Icon name="react" size={50} color="#42a5f5"/>\n                        </div>}\n                    footer={\'Some description \' + item}>\n                    <p>Some title {item}</p>\n                </Card>\n            )}\n        </div>\n    )\n}';t.default=function(){var e=Object(r.useRef)(),t=Object(r.useRef)(),a=Object(r.useState)(!1),s=Object(n.a)(a,2),d=s[0],u=s[1],h=Object(r.useState)(!1),S=Object(n.a)(h,2),C=S[0],w=S[1],N=Object(r.useState)(!1),j=Object(n.a)(N,2),O=j[0],L=j[1],I=Object(r.useState)(!1),R=Object(n.a)(I,2),P=R[0],D=R[1],H=Object(r.useState)(E[0]),J=Object(n.a)(H,2),T=J[0],z=J[1];return o.a.createElement("div",{className:"rui-page",ref:t},o.a.createElement("div",{className:"row align-center space-between"},o.a.createElement("div",{className:"rui-page-title"},"<Card/>"," Component"),o.a.createElement("div",{className:"rui-link fz-13 fw-bold",onClick:function(){e.current&&e.current.scrollIntoView({behavior:"smooth",block:"start"})}},"API")),o.a.createElement(c.i,{outlined:!0,title:"Usage"},o.a.createElement(c.E,{color:"primary",check:d,disabled:P,rightLabel:"Dark",className:"my-10",onChange:function(){return u(!d)}}),o.a.createElement(c.E,{color:"primary",check:C,rightLabel:"Flat",className:"my-10",onChange:function(){return w(!C)}}),o.a.createElement(c.E,{color:"primary",check:O,rightLabel:"Hover",className:"my-10",onChange:function(){return L(!O)}}),o.a.createElement(c.E,{color:"primary",check:P,rightLabel:"Outlined",className:"my-10",onChange:function(){return D(!P)}}),o.a.createElement("br",null),o.a.createElement(c.D,{items:E,prefix:o.a.createElement(c.r,{name:"brush"}),width:200,label:"Outline color",color:"primary",value:T,onChange:function(e){return z(e)}}),o.a.createElement(c.i,{dark:d,flat:C,hover:O,outlined:P,title:P?"Card props":"",color:T,header:"Marvel heroes"},o.a.createElement(c.u,{dark:d},v.map((function(e,t){return o.a.createElement(c.v,{key:t,item:e.name,hover:!0})})))),o.a.createElement(c.k,{icon:"code",iconSize:18,extra:o.a.createElement(c.l,{defaultText:"Copy code",text:k,className:"mr-10"}),tooltip:"Show/Hide Code"},o.a.createElement(i.a,{language:"jsx",style:l.a},k))),o.a.createElement("br",null),o.a.createElement(c.i,{outlined:!0,title:"Card with image and hover"},function(){var e=[{img:m.a,name:"John Doe"},{img:p.a,name:"John Smith"},{img:f.a,name:"Jane Doe"},{img:y.a,name:"Jane Smith"}];return o.a.createElement("div",{className:"row wrap space-around"},e.map((function(e,t){return o.a.createElement(c.i,{key:t,hover:!0,className:"ma-5",width:200,img:e.img,footer:o.a.createElement("h4",{className:"text-center"},e.name)},o.a.createElement("p",{className:"text-center"},"Hey there!"))})))}(),o.a.createElement(c.k,{icon:"code",extra:o.a.createElement(c.l,{defaultText:"Copy code",text:x,className:"mr-10"}),iconSize:18,tooltip:"Show/Hide Code"},o.a.createElement(i.a,{language:"jsx",style:l.a},x))),o.a.createElement(c.c,{dark:!0,setRef:t,size:"medium"}),o.a.createElement("h2",{ref:e},"API"),o.a.createElement(c.F,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:b,index:!0,itemTitles:g}))}},46:function(e,t,a){e.exports=a.p+"static/media/man.e941ef11.png"},49:function(e,t,a){e.exports=a.p+"static/media/hipster.4ca6ae2f.png"}}]);