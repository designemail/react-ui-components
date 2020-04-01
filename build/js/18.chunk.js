(this["webpackJsonp@assenti/rui-components"]=this["webpackJsonp@assenti/rui-components"]||[]).push([[18],{316:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a(0),l=a.n(r),o=a(3),s=a(323),i=a(274),c=["property","description","default","type","value"],u=[{property:"locale",description:"Set locale (English, Kazakh, Russian, French. i18n in process)",default:"en",type:"string",value:"en | kz | ru | fr"},{property:"events",description:"Set events",default:"",type:"array[{ date, items: [{title?, event, color?}] }]",value:""},{property:"holidays",description:"Set holidays",default:"",type:"array[{ date }]",value:""},{property:"onDate",description:"Invokes on date click (return Date object)",default:"",type:"function",value:""},{property:"hideWeekend",description:"If flag is set, weekend highlighting disabled",default:"false",type:"boolean",value:"true | false"},{property:"hideCurrentDay",description:"If flag is set, today highlighting disabled",default:"false",type:"boolean",value:"true | false"},{property:"color",description:"Set Calendar color theme",default:"",type:"string",value:"primary | info | success | error | dark"},{property:"size",description:"Set Calendar size",default:"",type:"string",value:"medium | large"},{property:"limit",description:"Set years limit that should be enabled",default:"15",type:"number",value:""},{property:"onlyPast",description:"If flag is set, only past years enabled",default:"false",type:"boolean",value:"true | false"},{property:"weekStartsSunday",description:"If flag is set, week starts from Sunday",default:"false",type:"boolean",value:"true | false"},{property:"shortWeekName",description:"Set short week name",default:"false",type:"boolean",value:"true | false"},{property:"dark",description:"Set dark mode",default:"false",type:"boolean",value:"true | false"},{property:"width",description:"Set width",default:"100%",type:"number | string",value:""},{property:"popOverTrigger",description:"Set event popover invoking mode",default:"hover",type:"string",value:"hover | click"},{property:"className",description:"Set a custom css class to component",default:"",type:"string",value:""}],d=["primary","info","success","error","black"],m=["default","medium","large"],y=["en","kz","ru","fr"],p=[{date:new Date(2020,2,8),items:[{title:"Event",event:"International Women Day",color:"#9C27B0"},{title:"Event",event:"Congratulate my women",color:"#9C27B0"}]},{date:new Date(2020,2,22),items:[{title:"Event",event:"Nauryz Meiramy Holiday",color:"#9C27B0"}]}],h=[{date:new Date(2020,2,8)},{date:new Date(2020,2,9)},{date:new Date(2020,2,22)},{date:new Date(2020,2,23)}],f='// Usage example\nimport React, { useState } from \'react\';\nimport { Calendar, Select, Icon, Switch, InputField } from \'../components\';\n\nconst colors = [\'primary\', \'info\', \'success\', \'error\', \'black\'];\nconst sizes = [\'default\', \'medium\', \'large\'];\nconst locales = [\'en\', \'kz\', \'ru\', \'fr\'];\n\nconst events = [\n    { \n        date: new Date(2020,2,8), \n        items: [\n            { title: \'Event\', event: \'International Women Day\', color: \'#9C27B0\' },\n            { title: \'Event\', event: \'Congratulate my women\', color: \'#9C27B0\' }\n\n        ]\n    },\n    { \n        date: new Date(2020,2,22), \n        items: [\n            { title: \'Event\', event: \'Nauryz Meiramy Holiday\', color: \'#9C27B0\' }\n        ]\n    }\n]\n\nconst holidays = [\n    { date: new Date(2020,2,8) },\n    { date: new Date(2020,2,9) },\n    { date: new Date(2020,2,22) },\n    { date: new Date(2020,2,23) }\n]\n\nfunction Example() {\n    const [color, setColor] = useState(colors[0]);\n    const [size, setSize] = useState(sizes[0]);\n    const [locale, setLocale] = useState(locales[0]);\n    const [limit, setLimit] = useState(15);\n    const [onlyPast, setOnlyPast] = useState(true);\n    const [weekStartsSunday, setWeekStartsSunday] = useState(false);\n    const [dark, setDark] = useState(false);\n    const [full, setFull] = useState(false);\n    const [hideWeekend, setHideWeekend] = useState(false);\n    const [hideCurrentDay, setHideCurrentDay] = useState(false);\n\n    return (\n        <div>\n            <Select\n                items={colors}\n                prefix={<Icon name="brush"/>}\n                width={200}\n                label="Calendar color"\n                color="primary"\n                value={color}\n                onChange={v => setColor(v)}/>\n            <Select\n                items={sizes}\n                prefix={<Icon name="format-size"/>}\n                width={200}\n                label="Calendar size"\n                color="primary"\n                className="ml-10"\n                value={size}\n                onChange={v => setSize(v)}/>\n            <br/>\n            <Select\n                items={locales}\n                prefix={<Icon name="translate"/>}\n                width={200}\n                label="Locale"\n                color="primary"\n                value={locale}\n                onChange={v => setLocale(v)}/>\n            <InputField\n                width={200}\n                className="ml-10 my-0"\n                value={limit}\n                label="Years limit"\n                onChange={e => setLimit(e.target.value)}\n                prefix={<Icon name="calendar-month"/>}\n                />\n            <br/>\n            <Switch \n                color="primary" \n                check={onlyPast}\n                rightLabel="Show only past years"\n                className="my-10"\n                onChange={() => setOnlyPast(!onlyPast)}/>\n            <Switch \n                color="primary" \n                check={weekStartsSunday}\n                rightLabel="Week starts from Sunday"\n                className="my-10"\n                onChange={() => setWeekStartsSunday(!weekStartsSunday)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={dark}\n                rightLabel="Dark"\n                className="my-10"\n                onChange={() => setDark(!dark)}/>\n            <Switch \n                color="primary" \n                check={full}\n                rightLabel="Full width"\n                className="my-10"\n                onChange={() => setFull(!full)}/>\n            <br/>\n            <Switch \n                color="primary" \n                check={hideCurrentDay}\n                rightLabel="Hide current day highlight"\n                className="my-10"\n                onChange={() => setHideCurrentDay(!hideCurrentDay)}/>\n            <Switch \n                color="primary" \n                check={hideWeekend}\n                rightLabel="Hide weekend highlight"\n                className="my-10"\n                onChange={() => setHideWeekend(!hideWeekend)}/>\n            <br/>\n            <Calendar\n                width={full ? null : 400}\n                className="my-10"\n                shortWeekName\n                hideWeekend={hideWeekend}\n                hideCurrentDay={hideCurrentDay}\n                onDate={(date) => console.log(date)}\n                events={events}\n                holidays={holidays}\n                weekStartsSunday={weekStartsSunday}\n                size={size}\n                dark={dark}\n                limit={limit} \n                onlyPast={onlyPast}\n                locale={locale}\n                color={color}/>\n        </div>\n    )\n}';t.default=function(){var e=Object(r.useState)(d[0]),t=Object(n.a)(e,2),a=t[0],g=t[1],b=Object(r.useState)(m[0]),S=Object(n.a)(b,2),k=S[0],v=S[1],w=Object(r.useState)(y[0]),C=Object(n.a)(w,2),E=C[0],D=C[1],N=Object(r.useState)(15),j=Object(n.a)(N,2),z=j[0],O=j[1],L=Object(r.useState)(!0),W=Object(n.a)(L,2),x=W[0],I=W[1],H=Object(r.useState)(!1),P=Object(n.a)(H,2),F=P[0],B=P[1],G=Object(r.useState)(!1),T=Object(n.a)(G,2),J=T[0],M=T[1],R=Object(r.useState)(!1),U=Object(n.a)(R,2),Y=U[0],A=U[1],K=Object(r.useState)(!1),V=Object(n.a)(K,2),q=V[0],Q=V[1],X=Object(r.useState)(!1),Z=Object(n.a)(X,2),$=Z[0],_=Z[1];return l.a.createElement("div",{className:"rui-page"},l.a.createElement("div",{className:"rui-page-title"},"<Calendar/>"," Component"),l.a.createElement(o.j,{outlined:!0,title:"Usage"},l.a.createElement(o.F,{items:d,prefix:l.a.createElement(o.t,{name:"brush"}),width:200,label:"Calendar color",color:"primary",value:a,onChange:function(e){return g(e)}}),l.a.createElement(o.F,{items:m,prefix:l.a.createElement(o.t,{name:"format-size"}),width:200,label:"Calendar size",color:"primary",className:"ml-10",value:k,onChange:function(e){return v(e)}}),l.a.createElement("br",null),l.a.createElement(o.F,{items:y,prefix:l.a.createElement(o.t,{name:"translate"}),width:200,label:"Locale",color:"primary",value:E,onChange:function(e){return D(e)}}),l.a.createElement(o.u,{width:200,className:"ml-10 my-0",value:z,label:"Years limit",onChange:function(e){return O(e.target.value)},prefix:l.a.createElement(o.t,{name:"calendar-month"})}),l.a.createElement("br",null),l.a.createElement(o.G,{color:"primary",check:x,rightLabel:"Show only past years",className:"my-10",onChange:function(){return I(!x)}}),l.a.createElement(o.G,{color:"primary",check:F,rightLabel:"Week starts from Sunday",className:"my-10",onChange:function(){return B(!F)}}),l.a.createElement("br",null),l.a.createElement(o.G,{color:"primary",check:J,rightLabel:"Dark",className:"my-10",onChange:function(){return M(!J)}}),l.a.createElement(o.G,{color:"primary",check:Y,rightLabel:"Full width",className:"my-10",onChange:function(){return A(!Y)}}),l.a.createElement("br",null),l.a.createElement(o.G,{color:"primary",check:$,rightLabel:"Hide current day highlight",className:"my-10",onChange:function(){return _(!$)}}),l.a.createElement(o.G,{color:"primary",check:q,rightLabel:"Hide weekend highlight",className:"my-10",onChange:function(){return Q(!q)}}),l.a.createElement("br",null),l.a.createElement(o.i,{width:Y?null:400,className:"my-10",shortWeekName:!0,hideWeekend:q,hideCurrentDay:$,onDate:function(e){return console.log(e)},events:p,holidays:h,weekStartsSunday:F,size:k,dark:J,limit:z,onlyPast:x,locale:E,color:a}),l.a.createElement(o.l,{icon:"code",iconSize:18,extra:l.a.createElement(o.m,{defaultText:"Copy code",text:f,className:"mr-10"}),tooltip:"Show/Hide Code"},l.a.createElement(s.a,{language:"jsx",style:i.a},f))),l.a.createElement("h2",null,"API"),l.a.createElement(o.H,{bordered:!0,headers:["Property","Description","Default","Type","Value"],items:u,index:!0,itemTitles:c}))}}}]);