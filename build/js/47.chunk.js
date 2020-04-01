(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[47],{308:function(e,t,l){"use strict";l.r(t);var a=l(1),r=l(0),n=l.n(r),o=l(3),i=l(323),s=l(274),c='// Usage examples\nimport React, { useState } from \'react\';\nimport { Uploader, Select, Icon, Switch } from \'@assenti/react-ui-components\';\nconst sizes = [\'default\', \'medium\', \'large\'];\nconst colors = [\'primary\', \'info\', \'success\', \'error\'];\nconst borders = [\'default\', \'rounded\', \'smooth\', \'tile\'];\n\nfunction Example() {\n    const [files, setFiles] = useState(\'\');\n    const [color, setColor] = useState(colors[0]);\n    const [border, setBorder] = useState(borders[0]);\n    const [size, setSize] = useState(sizes[0]);\n    const [disabled, setDisabled] = useState(false);\n    const [lifted, setLifted] = useState(false);\n    const [multiple, setMultiple] = useState(false);\n    const [label, setLabel] = useState(false);\n\n    return (\n        <div>\n            <Select\n                items={sizes}\n                prefix={<Icon name="format-size"/>}\n                width={200}\n                label="InputField size"\n                color="primary"\n                className="ml-5"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="InputField color"\n                color="primary"\n                className="ml-5"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Select\n                items={borders}\n                prefix={<Icon name="shape"/>}\n                width={200}\n                label="InputField border type"\n                color="primary"\n                className="ml-5"\n                value={border}\n                onChange={v => setBorder(v)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={disabled}\n                rightLabel="Disabled"\n                className="my-10 ml-5"\n                onChange={() => setDisabled(!disabled)}/>\n            <Switch \n                color="primary" \n                check={lifted}\n                rightLabel="Lifted"\n                className="my-10 ml-5"\n                onChange={() => setLifted(!lifted)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={multiple}\n                rightLabel="Multiple"\n                className="my-10 ml-5"\n                onChange={() => setMultiple(!multiple)}/>\n            <Switch \n                color="primary" \n                check={label}\n                rightLabel="Label"\n                className="my-10 ml-5"\n                onChange={() => setLabel(!label)}/>\n            <br/>\n            <Uploader\n                placeholder="File upload"\n                label={label ? \'Upload your file(-s)\' : null}\n                value={files}\n                title="\u0421hoose a file(-s) please"\n                color={color}\n                disabled={disabled}\n                borderType={border}\n                multiple={multiple}\n                lifted={lifted}\n                size={size}\n                onDelete={handleFileDelete}\n                width={300}\n                onChange={files => setFiles(files)}/>\n        </div>\n    )\n}',u=["property","description","default","type","value"],p=[{property:"onChange",description:"Handle files values",default:"",type:"function",value:"Return array of files"},{property:"value",description:"State value that holds uploaded file(-s)",default:"",type:"File[]",value:""},{property:"lifted",description:"Lift up the uploader",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set color from list",default:"",type:"string",value:"primary | info | success | error"},{property:"disabled",description:"Make uploader disabled",default:"false",type:"boolean",value:"true | false"},{property:"borderType",description:"Set borders type",default:"",type:"string",value:"tile | smooth | rounded"},{property:"size",description:"Set input field size",default:"",type:"string",value:"medium | large"},{property:"multiple",description:"Allow choosing multiple files",default:"false",type:"boolean",value:"true | false"},{property:"accept",description:"Set accepted MIME types for files",default:"",type:"string",value:""},{property:"width",description:"Set Uploader width",default:"",type:"string | number",value:""},{property:"required",description:"Set Uploader required",default:"false",type:"boolean",value:"true | false"},{property:"title",description:"Set Uploader title",default:"",type:"string",value:""},{property:"label",description:"Set Uploader label",default:"",type:"string",value:""},{property:"placeholder",description:"Set Uploader placeholder",default:"",type:"string",value:""},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],d=["default","medium","large"],m=["primary","info","success","error"],f=["default","rounded","smooth","tile"];t.default=function(){var e=Object(r.useState)(""),t=Object(a.a)(e,2),l=t[0],b=t[1],h=Object(r.createRef)(),y=Object(r.createRef)(),g=Object(r.useState)(m[0]),v=Object(a.a)(g,2),S=v[0],E=v[1],w=Object(r.useState)(f[0]),C=Object(a.a)(w,2),j=C[0],N=C[1],z=Object(r.useState)(d[0]),O=Object(a.a)(z,2),L=O[0],k=O[1],F=Object(r.useState)(!1),I=Object(a.a)(F,2),x=I[0],U=I[1],D=Object(r.useState)(!1),M=Object(a.a)(D,2),T=M[0],R=M[1],G=Object(r.useState)(!1),A=Object(a.a)(G,2),H=A[0],P=A[1],q=Object(r.useState)(!1),B=Object(a.a)(q,2),J=B[0],V=B[1];return n.a.createElement("div",{className:"rui-page",ref:y},n.a.createElement("div",{className:"row align-center space-between"},n.a.createElement("div",{className:"rui-page-title"},"<Uploader/>"," Component"),n.a.createElement("div",{onClick:function(){h.current&&h.current.scrollIntoView({behavior:"smooth",block:"center"})},className:"rui-link fz-13 fw-bold mr-10"},"API")),n.a.createElement(o.j,{outlined:!0,title:"Usage"},n.a.createElement(o.F,{items:d,prefix:n.a.createElement(o.t,{name:"format-size"}),width:200,label:"InputField size",color:"primary",className:"ml-5",value:L,onChange:function(e){return k(e)}}),n.a.createElement("br",null),n.a.createElement(o.F,{items:m,prefix:n.a.createElement(o.t,{name:"brush"}),width:200,label:"InputField color",color:"primary",className:"ml-5",value:S,onChange:function(e){return E(e)}}),n.a.createElement("br",null),n.a.createElement(o.F,{items:f,prefix:n.a.createElement(o.t,{name:"shape"}),width:200,label:"InputField border type",color:"primary",className:"ml-5",value:j,onChange:function(e){return N(e)}}),n.a.createElement("br",null),n.a.createElement(o.G,{color:"primary",check:x,rightLabel:"Disabled",className:"my-10 ml-5",onChange:function(){return U(!x)}}),n.a.createElement(o.G,{color:"primary",check:T,rightLabel:"Lifted",className:"my-10 ml-5",onChange:function(){return R(!T)}}),n.a.createElement("br",null),n.a.createElement(o.G,{color:"primary",check:H,rightLabel:"Multiple",className:"my-10 ml-5",onChange:function(){return P(!H)}}),n.a.createElement(o.G,{color:"primary",check:J,rightLabel:"Label",className:"my-10 ml-5",onChange:function(){return V(!J)}}),n.a.createElement("br",null),n.a.createElement(o.O,{placeholder:"File upload",label:J?"Upload your file(-s)":null,value:l,title:"\u0421hoose a file(-s) please",color:S,disabled:x,borderType:j,multiple:H,lifted:T,size:L,onDelete:function(e){b((function(t){return t.filter((function(t){return t.name!==e}))}))},width:300,onChange:function(e){return b(e)}}),n.a.createElement(o.l,{icon:"code",iconSize:18,extra:n.a.createElement(o.m,{defaultText:"Copy code",text:c,className:"mr-10"}),tooltip:"Show/Hide Code"},n.a.createElement(i.a,{language:"jsx",style:s.a},c))),n.a.createElement(o.d,{setRef:y,dark:!0,size:"medium"}),n.a.createElement("h2",{ref:h},"API"),n.a.createElement(o.H,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:p,index:!0,itemTitles:u}))}}}]);