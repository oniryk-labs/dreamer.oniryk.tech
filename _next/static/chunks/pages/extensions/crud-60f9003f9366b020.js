(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[582],{6454:(i,s,e)=>{(window.__NEXT_P=window.__NEXT_P||[]).push(["/extensions/crud",function(){return e(8955)}])},8955:(i,s,e)=>{"use strict";e.r(s),e.d(s,{default:()=>d,useTOC:()=>r});var h=e(5893),l=e(7812),n=e(2048),t=e(8925);function r(i){return[{value:"CRUD Operations",id:"crud-operations",depth:2},{value:"index",id:"index",depth:4},{value:"show",id:"show",depth:4},{value:"store",id:"store",depth:4},{value:"update",id:"update",depth:4},{value:"destroy",id:"destroy",depth:4}]}let d=(0,l.c)(function(i){let{toc:s=r(i)}=i,e={code:"code",h2:"h2",h4:"h4",p:"p",pre:"pre",span:"span",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",...(0,t.a)(),...i.components};return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(e.h2,{id:s[0].id,children:s[0].value}),"\n",(0,h.jsx)(e.p,{children:"The package provides pre-built CRUD operations that can be easily integrated into your controllers. All operations take a model as the first argument and offer some options depending on your functionality."}),"\n",(0,h.jsx)(e.p,{children:"This is a basic example of a complete RESTful controller:"}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" Post "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#models/post'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { index, show, store, update, destroy } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer/extensions/crud'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { validatePostCreate, validatePostUpdate } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#validators/post'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" csv "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer-csv'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" class"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" PostsController"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" index"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" index"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post)"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" show"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" show"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post)"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" store"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" store"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post, validatePostCreate)"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" update"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" update"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post, validatePostUpdate)"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" destroy"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" destroy"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post)"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,h.jsx)(e.h4,{id:s[1].id,children:s[1].value}),"\n",(0,h.jsxs)(e.p,{children:["The ",(0,h.jsx)(e.code,{children:"index"})," method provides a flexible way to list and filter records."]}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { index } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer/extensions/crud'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" csv "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer-csv'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { validatePostIndex } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#validators/post'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" class"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" PostsController"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" index"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" index"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post, {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    perPage: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#005CC5","--shiki-dark":"#79B8FF"},children:"20"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    formats: ["}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"csv"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()],"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    scope: "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:"'highlights'"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:","})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    validator: validatePostIndex"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  })"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,h.jsxs)(e.table,{children:[(0,h.jsx)(e.thead,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.th,{children:"Option"}),(0,h.jsx)(e.th,{children:"Type"}),(0,h.jsx)(e.th,{children:"Description"})]})}),(0,h.jsxs)(e.tbody,{children:[(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"perPage"})}),(0,h.jsx)(e.td,{children:"number"}),(0,h.jsx)(e.td,{children:"(optional) Number of records per page"})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"formats"})}),(0,h.jsx)(e.td,{children:"OutputFormatFn[]"}),(0,h.jsxs)(e.td,{children:["(optional) Array of formatters to enable alternative output formats. When a format is added, the user can request the content in a format by passing ",(0,h.jsx)(e.code,{children:"f"})," or ",(0,h.jsx)(e.code,{children:"format"})," in the query string:",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Ex: ",(0,h.jsx)(e.code,{children:"GET /posts?f=csv"})]})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"scope"})}),(0,h.jsx)(e.td,{children:"string | function"}),(0,h.jsxs)(e.td,{children:["(optional) Name of model scope to apply or function compatible with ",(0,h.jsx)(e.code,{children:"withScopes"})," method of Lucid query builder",(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),"Ex: ",(0,h.jsx)(e.code,{children:"(scopes) => scopes.highlights()"})]})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"validator"})}),(0,h.jsx)(e.td,{children:"VineValidator"}),(0,h.jsx)(e.td,{children:"(optional) Vine validation schema for query parameters"})]})]})]}),"\n",(0,h.jsx)(e.h4,{id:s[2].id,children:s[2].value}),"\n",(0,h.jsxs)(e.p,{children:["The ",(0,h.jsx)(e.code,{children:"show"})," method provides a way to retrieve a single record. When using UUID extension, it automatically handles UUID-based lookups."]}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" Post "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#models/post'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { show } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer/extensions/crud'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" class"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" PostsController"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" show"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" show"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post)"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,h.jsxs)(e.table,{children:[(0,h.jsx)(e.thead,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.th,{children:"Option"}),(0,h.jsx)(e.th,{children:"Type"}),(0,h.jsx)(e.th,{children:"Description"})]})}),(0,h.jsx)(e.tbody,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"model"})}),(0,h.jsx)(e.td,{children:"BaseModel"}),(0,h.jsx)(e.td,{children:"The Lucid model class"})]})})]}),"\n",(0,h.jsx)(e.h4,{id:s[3].id,children:s[3].value}),"\n",(0,h.jsxs)(e.p,{children:["The ",(0,h.jsx)(e.code,{children:"store"})," method handles record creation with validation and optional data mutation."]}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" Post "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#models/post'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { store } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer/extensions/crud'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { validatePostUpdate } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#validators/post'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" class"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" PostsController"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" store"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" store"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post, validatePostUpdate, {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    mutate"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"row"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"payload"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      row.title "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" payload.title."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"toLowerCase"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  })"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,h.jsxs)(e.table,{children:[(0,h.jsx)(e.thead,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.th,{children:"Parameter"}),(0,h.jsx)(e.th,{children:"Type"}),(0,h.jsx)(e.th,{children:"Description"})]})}),(0,h.jsxs)(e.tbody,{children:[(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"model"})}),(0,h.jsx)(e.td,{children:"BaseModel"}),(0,h.jsx)(e.td,{children:"The Lucid model class"})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"validator"})}),(0,h.jsx)(e.td,{children:"VineValidator"}),(0,h.jsx)(e.td,{children:"Vine validator schema for input validation"})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"options.mutate"})}),(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"(row: Model, payload: any) => void | Promise<void>"})}),(0,h.jsx)(e.td,{children:"(optional) Callback to modify data before saving"})]})]})]}),"\n",(0,h.jsx)(e.h4,{id:s[4].id,children:s[4].value}),"\n",(0,h.jsxs)(e.p,{children:["The ",(0,h.jsx)(e.code,{children:"update"})," method handles record updates with validation and optional data mutation."]}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" Post "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#models/post'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { update } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer/extensions/crud'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { validatePostUpdate } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#validators/post'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" class"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" PostsController"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" update"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" update"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post, validatePostUpdate, {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"    mutate"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" ("}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"row"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:", "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:"payload"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:") {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"      row.title "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" payload.title."}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:"toLowerCase"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"()"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"    }"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"  })"})}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,h.jsxs)(e.table,{children:[(0,h.jsx)(e.thead,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.th,{children:"Parameter"}),(0,h.jsx)(e.th,{children:"Type"}),(0,h.jsx)(e.th,{children:"Description"})]})}),(0,h.jsxs)(e.tbody,{children:[(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"model"})}),(0,h.jsx)(e.td,{children:"BaseModel"}),(0,h.jsx)(e.td,{children:"The Lucid model class"})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"validator"})}),(0,h.jsx)(e.td,{children:"VineValidator"}),(0,h.jsx)(e.td,{children:"Vine validator schema for input validation"})]}),(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"options.mutate"})}),(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"(row: Model, payload: any) => void | Promise<void>"})}),(0,h.jsx)(e.td,{children:"(optional) Callback to modify data before saving"})]})]})]}),"\n",(0,h.jsx)(e.h4,{id:s[5].id,children:s[5].value}),"\n",(0,h.jsxs)(e.p,{children:["The ",(0,h.jsx)(e.code,{children:"destroy"})," method handles record deletion with proper error handling."]}),"\n",(0,h.jsx)(e.pre,{tabIndex:"0","data-language":"typescript","data-word-wrap":"",children:(0,h.jsxs)(e.code,{children:[(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" Post "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '#models/post'"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"import"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" { destroy } "}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"from"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#032F62","--shiki-dark":"#9ECBFF"},children:" '@oniryk/dreamer/extensions/crud'"})]}),"\n",(0,h.jsx)(e.span,{children:" "}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"export"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" default"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" class"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" PostsController"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:" {"})]}),"\n",(0,h.jsxs)(e.span,{children:[(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:"  public"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#E36209","--shiki-dark":"#FFAB70"},children:" destroy"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#D73A49","--shiki-dark":"#F97583"},children:" ="}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#B392F0"},children:" destroy"}),(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"(Post)"})]}),"\n",(0,h.jsx)(e.span,{children:(0,h.jsx)(e.span,{style:{"--shiki-light":"#24292E","--shiki-dark":"#E1E4E8"},children:"}"})})]})}),"\n",(0,h.jsxs)(e.table,{children:[(0,h.jsx)(e.thead,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.th,{children:"Parameter"}),(0,h.jsx)(e.th,{children:"Type"}),(0,h.jsx)(e.th,{children:"Description"})]})}),(0,h.jsx)(e.tbody,{children:(0,h.jsxs)(e.tr,{children:[(0,h.jsx)(e.td,{children:(0,h.jsx)(e.code,{children:"model"})}),(0,h.jsx)(e.td,{children:"BaseModel"}),(0,h.jsx)(e.td,{children:"The Lucid model class"})]})})]})]})},"/extensions/crud",{filePath:"pages/extensions/crud.mdx",timestamp:1730945322e3,pageMap:n.v,frontMatter:{},title:"Crud"},"undefined"==typeof RemoteContent?r:RemoteContent.useTOC)},2048:(i,s,e)=>{"use strict";e.d(s,{v:()=>h});let h=[{data:{index:"Introduction","getting-started":"Getting Started","code-generation":"Code Generation",extensions:"Extensions"}},{name:"code-generation",route:"/code-generation",children:[{data:{"basic-usage":"Basic Usage","advanced-features":"Advanced Features",notes:"Notes"}},{name:"advanced-features",route:"/code-generation/advanced-features",frontMatter:{sidebarTitle:"Advanced Features"}},{name:"basic-usage",route:"/code-generation/basic-usage",frontMatter:{sidebarTitle:"Basic Usage"}},{name:"notes",route:"/code-generation/notes",frontMatter:{sidebarTitle:"Notes"}}]},{name:"extensions",route:"/extensions",children:[{data:{lucid:"Lucid",crud:"CRUD Operations","json-formatter":"JSON Response Formatters","output-formatters":"Output Formatters"}},{name:"crud",route:"/extensions/crud",frontMatter:{sidebarTitle:"Crud"}},{name:"json-formatter",route:"/extensions/json-formatter",frontMatter:{sidebarTitle:"Json Formatter"}},{name:"lucid",route:"/extensions/lucid",frontMatter:{sidebarTitle:"Lucid"}},{name:"output-formatters",route:"/extensions/output-formatters",frontMatter:{sidebarTitle:"Output Formatters"}}]},{name:"getting-started",route:"/getting-started",children:[{name:"installation",route:"/getting-started/installation",frontMatter:{sidebarTitle:"Installation"}}]},{name:"index",route:"/",frontMatter:{sidebarTitle:"Index"}}]}},i=>{var s=s=>i(i.s=s);i.O(0,[812,888,774,179],()=>s(6454)),_N_E=i.O()}]);