(this["webpackJsonpinterview-project"]=this["webpackJsonpinterview-project"]||[]).push([[0],{15:function(e,t,a){},16:function(e,t,a){},19:function(e,t,a){},20:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(5),l=a.n(r),s=(a(15),a(16),a(3)),i=a(2);a(19);var o=function(e){let{searchValue:t,isVisible:a,handleSearch:n,toggleSearch:r}=e;return c.a.createElement("div",{className:"search-container"},c.a.createElement(s.a,{icon:a?i.b:i.c,className:"search-icon",onClick:()=>r()}),c.a.createElement("div",{className:"search-box "+(a?"visible":"")},c.a.createElement("input",{type:"text",placeholder:"Search...",onChange:n,style:{opacity:a?1:0},value:t})))};var m=e=>{let{src:t,alt:a}=e;const[r,l]=Object(n.useState)(!1),s=Object(n.useRef)();return Object(n.useEffect)(()=>{const e=s.current,t=new IntersectionObserver(a=>{let[n]=a;n.isIntersecting&&(l(!0),t.unobserve(e))},{threshold:.1});return e&&t.observe(e),()=>{e&&t.unobserve(e)}},[]),c.a.createElement("img",{ref:s,src:r?t:"",alt:a,style:{width:"100%",height:"auto"}})};var u=e=>{let{index:t,movie:a}=e;return c.a.createElement("div",{className:"movie-item",key:t},c.a.createElement(m,{src:"https://test.create.diagnal.com/images/"+a["poster-image"],alt:a.name+" Thumbnail"}),c.a.createElement("div",{className:"movie-title"},a.name))};function g(e,t){switch(console.log(t),t.type){case"loading":return{...e,loading:!1};case"getAllMovie":return{...e,data:t.data,pageTitle:t.pageTitle,loading:!1};case"getError":return{...e,error:e.error,loading:!1};default:return e}}const d={loading:!1,data:[],pageTitle:"",error:null};var h=function(){const[e,t]=Object(n.useReducer)(g,d),[a,r]=Object(n.useState)(""),[l,m]=Object(n.useState)(!1),h=async()=>{try{const e=await fetch("https://test.create.diagnal.com/data/page1.json");if(!e.ok)throw new Error("Response status: "+e.status);const a=await e.json();t({type:"getAllMovie",data:a.page["content-items"].content,pageTitle:a.page.title,loading:!1})}catch(e){console.error(e.message)}};return Object(n.useEffect)(()=>{h()},[]),Object(n.useEffect)(()=>{l||r("")},[l]),Object(n.useEffect)(()=>{if(a.length>0&&e.data.length>0){const n=e.data.filter(e=>e.name.toLowerCase().includes(a.toLowerCase()));t({type:"getAllMovie",data:n,loading:!1})}},[a]),c.a.createElement("div",{className:"App"},c.a.createElement("header",{className:"App-header"},c.a.createElement(o,{searchValue:a,isVisible:l,toggleSearch:()=>{m(!l)},handleSearch:e=>{const{value:t}=e.target;0==t.length?(h(),r("")):r(t)}})),c.a.createElement("main",null,c.a.createElement("section",null,c.a.createElement("div",{className:""},c.a.createElement("h2",null," ",c.a.createElement(s.a,{className:"back-icon",icon:i.a}),e.pageTitle)),c.a.createElement("div",{className:"movie-grid"},e.data.length>0?e.data.map((e,t)=>c.a.createElement(u,{key:t,index:t,movie:e})):c.a.createElement("div",{className:"response-negative-message"},"No Movies are found")))))};var p=e=>{e&&e instanceof Function&&a.e(3).then(a.bind(null,21)).then(t=>{let{getCLS:a,getFID:n,getFCP:c,getLCP:r,getTTFB:l}=t;a(e),n(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null))),p()},6:function(e,t,a){e.exports=a(20)}},[[6,1,2]]]);
//# sourceMappingURL=main.ccb54585.chunk.js.map