(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[5],{275:function(e,t,n){e.exports=n.p+"static/media/old.21fd9a1f.png"},283:function(e,t,n){"use strict";n.r(t);var a=n(8),r=n(1),o=n(0),c=n.n(o),i=n(3),l=n(323),s=n(274),m=n(48),u=n.n(m),p=n(52),d=n.n(p),h=n(60),f=n.n(h),b=n(275),v=n.n(b),y='// Usage examples\nimport React, { useState } from \'react\';\nimport { List, ListItem, Card, Select, Icon, Switch, RadioGroup, phoneMask } from \'@assenti/rui-components\';\nconst names = [\n    { name: \'Steve Rogers\', hero: \'Captain America\', phone: \'1234567890\', icon: \'shield-account\', img: manImage, check: false, active: false }, \n    { name: \'Peter Parker\', hero: \'Spider man\', phone: \'1234567890\', icon: \'shield-account\', img: manImage2, check: false, active: true }, \n    { name: \'Tony Stark\', hero: \'Iron man\', phone: \'1234567890\', icon: \'shield-account\', img: manImage3, check: false, active: false }, \n    { name: \'Bruce Benner\', hero: \'Hulk\', phone: \'1234567890\', icon: \'shield-account\', img: manImage4, check: false, active: false }\n];\nconst types = [\'image\', \'icon\', \'none\'];\nconst sizes = [\'default\', \'medium\', \'large\'];\nconst colors = [\'primary\', \'info\', \'success\', \'error\'];\nconst borders = [\'default\', \'rounded\', \'tile\'];\n\nfunction Example() {\n    const [selected, setSelected] = useState([]);\n    const [size, setSize] = useState(sizes[0]);\n    const [border, setBorder] = useState(borders[1]);\n    const [color, setColor] = useState(colors[0]);\n    const [dark, setDark] = useState(false);\n    const [rounded, setRounded] = useState(false);\n    const [divider, setDivider] = useState(false);\n    const [hover, setHover] = useState(false);\n    const [subtitle, setSubtitle] = useState(false);\n    const [left, setLeft] = useState(false);\n    const [checkbox, setCheckbox] = useState(false);\n    const [controls, setControls] = useState(true);\n    const [type, setType] = useState(\'\');\n\n    const selectOne = (item) => {\n        if (isSelected(item)) {\n            setSelected(selected => selected.filter(_item => _item !== item))\n        } else setSelected([...selected, item]);\n    }\n\n    const isSelected = (item) => {\n        let result = false\n        for (const select of selected) {\n            if (item === select) result = true \n        }\n        return result\n    }\n\n    return (\n        <div>\n            <Select\n                items={sizes}\n                prefix={<Icon name="format-size"/>}\n                width={200}\n                label="List size"\n                color="primary"\n                className="pl-10"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Select\n                items={borders}\n                prefix={<Icon name="shape"/>}\n                width={200}\n                label="Avatar border type"\n                color="primary"\n                className="pl-10"\n                value={border}\n                onChange={v => setBorder(v)}/>\n            <br/>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Active item color"\n                color="primary"\n                className="pl-10"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={dark}\n                rightLabel="Dark"\n                className="pl-10 my-10"\n                onChange={() => setDark(!dark)}/>\n            <Switch \n                color="primary" \n                check={hover}\n                rightLabel="Hover"\n                className="pl-10 my-10"\n                onChange={() => setHover(!hover)}/>\n            <Switch \n                color="primary" \n                check={divider}\n                rightLabel="Hide dividers"\n                className="pl-10 my-10"\n                onChange={() => setDivider(!divider)}/>\n            <br/>\n            <RadioGroup\n                options={types} \n                value={type}\n                name="type"\n                className="pl-10 mt-10" \n                onChange={(value) => setType(value)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={subtitle}\n                rightLabel="Subtitle"\n                className="pl-10 my-10"\n                onChange={() => setSubtitle(!subtitle)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={rounded}\n                rightLabel="Rounded active item"\n                className="pl-10 my-10"\n                onChange={() => setRounded(!rounded)}/>\n            <Switch \n                color="primary" \n                check={left}\n                rightLabel="Active item left border"\n                className="pl-10 my-10"\n                onChange={() => setLeft(!left)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={checkbox}\n                rightLabel="Checkbox"\n                className="pl-10 my-10"\n                onChange={() => setCheckbox(!checkbox)}/>\n            <Switch \n                color="primary" \n                check={controls}\n                rightLabel="Controls"\n                className="pl-10 my-10"\n                onChange={() => setControls(!controls)}/>\n            <Card\n                className="ma-10" \n                dark={dark} \n                width={400}>\n                <List\n                    size={size}\n                    dark={dark} \n                    header={\n                        <div className="row align-center space-between">\n                            Selected persons: {selected.length}\n                            {selected.length > 0 ? <Button className="ma-0" light icon="share" size={18}/> : \'\'}\n                        </div>\n                    }>\n                    {names.map((item, index) => \n                        <ListItem\n                            isActiveItem={isSelected(item.hero)}\n                            onClick={() => selectOne(item.hero)}\n                            key={index} \n                            hover={hover}\n                            item={item.name}\n                            color={color}\n                            noDivider={divider}\n                            roundedActive={rounded}\n                            leftBorder={left}\n                            subTitle={subtitle ? item.hero : null}\n                            icon={type === \'icon\' ? item.icon : null}\n                            avatar={type === \'image\' ? item.img : null}\n                            avatarBorderType={border}\n                            checkbox={checkbox}\n                            controls={controls ?\n                                <div className="row align-center fz-9 text-dark">\n                                    <Icon name="smartphone" size={16} className="mr-5"/>\n                                    {phoneMask(item.phone)}\n                                    <Button color="light" \n                                        className="ml-10" \n                                        icon="edit"\n                                        iconSize={16}/>\n                                </div> : null}/>\n                    )}\n                </List>\n            </Card>\n        </div>\n    )\n}',g=[{name:"Steve Rogers",hero:"Captain America",phone:"1234567890",icon:"shield-account",img:u.a,check:!1,active:!1},{name:"Peter Parker",hero:"Spider man",phone:"1234567890",icon:"shield-account",img:d.a,check:!1,active:!0},{name:"Tony Stark",hero:"Iron man",phone:"1234567890",icon:"shield-account",img:f.a,check:!1,active:!1},{name:"Bruce Benner",hero:"Hulk",phone:"1234567890",icon:"shield-account",img:v.a,check:!1,active:!1}],k=["image","icon","none"],S=["property","description","default","type","value"],C=[{property:"header",description:"Set list header",default:"",type:"any",value:""},{property:"size",description:"Set list item size",default:"",type:"string",value:"medium | large"},{property:"dark",description:"Set dark mode (can not be used with light prop)",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],E=[{property:"render",description:"You can pass your own custom element",default:"",type:"any",value:""},{property:"onClick",description:"Invokes on item click",default:"",type:"function",value:""},{property:"item",description:"Set list item",default:"",type:"string | number | object",value:""},{property:"subTitle",description:"Set subtitle in list item (It can be just text or Tag and etc.)",default:"",type:"any",value:""},{property:"tooltip",description:"Set tooltip",default:"",type:"string",value:""},{property:"tooltipPosition",description:"Set tooltip position",default:"top",type:"string",value:"left | right | bottom"},{property:"isActiveItem",description:"Set active list item",default:"false",type:"boolean",value:"true | false"},{property:"roundedActive",description:"Set hover and active list item rounded",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set active list item color",default:"",type:"string",value:"primary | info | success | error"},{property:"leftBorder",description:"Set left border highlighting on active item",default:"false",type:"boolean",value:"true | false"},{property:"checkbox",description:"A placeholder for checkbox (Expect a checkbox element or Component)",default:"",type:"any",value:""},{property:"icon",description:"Set icon before the text in list item",default:"",type:"string",value:"home | search | etc. (see icon names list in docs)"},{property:"controls",description:"A placeholder for item controls like buttons or etc.",default:"",type:"any",value:""},{property:"noDivider",description:"Remove the divider line between items",default:"false",type:"boolean",value:"true | false"},{property:"hover",description:"Highlight hovered list item",default:"false",type:"boolean",value:"true | false"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],N=["default","medium","large"],x=["primary","info","success","error"],w=["default","rounded","tile"];t.default=function(){var e=Object(o.useState)([]),t=Object(r.a)(e,2),n=t[0],m=t[1],u=Object(o.useState)(N[0]),p=Object(r.a)(u,2),d=p[0],h=p[1],f=Object(o.useState)(w[1]),b=Object(r.a)(f,2),v=b[0],j=b[1],O=Object(o.useState)(x[0]),L=Object(r.a)(O,2),z=L[0],I=L[1],A=Object(o.useState)(!1),R=Object(r.a)(A,2),T=R[0],D=R[1],B=Object(o.useState)(!1),H=Object(r.a)(B,2),P=H[0],G=H[1],V=Object(o.useState)(!1),F=Object(r.a)(V,2),_=F[0],J=F[1],M=Object(o.useState)(!1),U=Object(r.a)(M,2),Y=U[0],q=U[1],K=Object(o.useState)(!1),Q=Object(r.a)(K,2),W=Q[0],X=Q[1],Z=Object(o.useState)(!1),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(o.useState)(!1),ae=Object(r.a)(ne,2),re=ae[0],oe=ae[1],ce=Object(o.useState)(!0),ie=Object(r.a)(ce,2),le=ie[0],se=ie[1],me=Object(o.useRef)(),ue=Object(o.useRef)(),pe=Object(o.useRef)(),de=Object(o.useState)(""),he=Object(r.a)(de,2),fe=he[0],be=he[1],ve=function(e){var t=!1,a=!0,r=!1,o=void 0;try{for(var c,i=n[Symbol.iterator]();!(a=(c=i.next()).done);a=!0){e===c.value&&(t=!0)}}catch(l){r=!0,o=l}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return t};return c.a.createElement("div",{className:"rui-page",ref:pe},c.a.createElement("div",{className:"row align-center space-between"},c.a.createElement("div",{className:"rui-page-title"},"<List/>, <ListItem/>"," Components"),c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"rui-link fz-13 fw-bold mr-10",onClick:function(){me.current&&me.current.scrollIntoView({behavior:"smooth",block:"start"})}},"List API"),c.a.createElement("div",{className:"rui-link fz-13 fw-bold",onClick:function(){ue.current&&ue.current.scrollIntoView({behavior:"smooth",block:"start"})}},"ListItem API"))),c.a.createElement(i.j,{outlined:!0,className:"px-0",title:"Usage"},c.a.createElement(i.F,{items:N,prefix:c.a.createElement(i.t,{name:"format-size"}),width:200,label:"List size",color:"primary",className:"pl-10",value:d,onChange:function(e){return h(e)}}),c.a.createElement("br",null),c.a.createElement(i.F,{items:w,prefix:c.a.createElement(i.t,{name:"shape"}),width:200,label:"Avatar border type",color:"primary",className:"pl-10",value:v,onChange:function(e){return j(e)}}),c.a.createElement("br",null),c.a.createElement(i.F,{items:x,prefix:c.a.createElement(i.t,{name:"brush"}),width:200,label:"Active item color",color:"primary",className:"pl-10",value:z,onChange:function(e){return I(e)}}),c.a.createElement("br",null),c.a.createElement(i.G,{color:"primary",check:T,rightLabel:"Dark",className:"pl-10 my-10",onChange:function(){return D(!T)}}),c.a.createElement(i.G,{color:"primary",check:Y,rightLabel:"Hover",className:"pl-10 my-10",onChange:function(){return q(!Y)}}),c.a.createElement(i.G,{color:"primary",check:_,rightLabel:"Hide dividers",className:"pl-10 my-10",onChange:function(){return J(!_)}}),c.a.createElement("br",null),c.a.createElement(i.D,{options:k,value:fe,name:"type",className:"pl-10 mt-10",onChange:function(e){return be(e)}}),c.a.createElement("br",null),c.a.createElement(i.G,{color:"primary",check:W,rightLabel:"Subtitle",className:"pl-10 my-10",onChange:function(){return X(!W)}}),c.a.createElement("br",null),c.a.createElement(i.G,{color:"primary",check:P,rightLabel:"Rounded active item",className:"pl-10 my-10",onChange:function(){return G(!P)}}),c.a.createElement(i.G,{color:"primary",check:ee,rightLabel:"Active item left border",className:"pl-10 my-10",onChange:function(){return te(!ee)}}),c.a.createElement("br",null),c.a.createElement(i.G,{color:"primary",check:re,rightLabel:"Checkbox",className:"pl-10 my-10",onChange:function(){return oe(!re)}}),c.a.createElement(i.G,{color:"primary",check:le,rightLabel:"Controls",className:"pl-10 my-10",onChange:function(){return se(!le)}}),c.a.createElement(i.j,{className:"ma-10",dark:T,width:400},c.a.createElement(i.w,{size:d,dark:T,header:c.a.createElement("div",{className:"row align-center space-between"},"Selected persons: ",n.length,n.length>0?c.a.createElement(i.g,{className:"ma-0",light:!0,icon:"share",size:18}):"")},g.map((function(e,t){return c.a.createElement(i.x,{isActiveItem:ve(e.hero),onClick:function(){return function(e){ve(e)?m((function(t){return t.filter((function(t){return t!==e}))})):m([].concat(Object(a.a)(n),[e]))}(e.hero)},key:t,hover:Y,item:e.name,color:z,noDivider:_,roundedActive:P,leftBorder:ee,subTitle:W?e.hero:null,icon:"icon"===fe?e.icon:null,avatar:"image"===fe?e.img:null,avatarBorderType:v,checkbox:re,controls:le?c.a.createElement("div",{className:"row align-center fz-9 text-dark"},c.a.createElement(i.t,{name:"smartphone",size:16,className:"mr-5"}),Object(i.R)(e.phone),c.a.createElement(i.g,{color:"light",className:"ml-10",icon:"edit",iconSize:16})):null})})))),c.a.createElement(i.l,{className:"px-15",icon:"code",extra:c.a.createElement(i.m,{defaultText:"Copy code",text:y,className:"mr-10"}),iconSize:18,tooltip:"Show/Hide Code"},c.a.createElement(l.a,{language:"jsx",style:s.a},y))),c.a.createElement("h2",{ref:me},"List API"),c.a.createElement(i.H,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:C,index:!0,itemTitles:S}),c.a.createElement("h2",{ref:ue},"ListItem API"),c.a.createElement(i.H,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:E,index:!0,itemTitles:S}),c.a.createElement(i.d,{setRef:pe,dark:!0,size:"medium"}))}},48:function(e,t,n){e.exports=n.p+"static/media/man.e941ef11.png"},52:function(e,t,n){e.exports=n.p+"static/media/hipster.4ca6ae2f.png"},60:function(e,t,n){e.exports=n.p+"static/media/man_.1a05fb23.png"}}]);