var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},c=(e,r)=>t(e,n(r)),s=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};import{E as d,R as u,P as p,a as m,T as f,b as h,N as g,c as b,r as y,d as x,u as v,e as k,f as w,W as E,i as C,H as N,w as M,g as L,h as A,j as S,t as T,k as B,l as D,m as z,_ as O,S as P,n as R}from"./vendor.0c86b0ed.js";function H(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return d.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=s(n,["match"]);return d.above(e,c(l({},o),{match:t=>!!d.isBlock(e,t)&&r(t)}))}function I(e){return u.isRange(e)?e.anchor:p.isPoint(e)?e:m.isPath(e)?{path:e,offset:0}:void 0}function j(e,t){if(!e.selection)return;const n=H(e,{type:"leaf"});if(!n)return;const[,r]=n,o=I(r);if(!o)return;const i=I(t.at||e.selection);if(!i)return;const a="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const l of a){let n=l.split(""),r=i,a=i,c=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const s=d.before(e,r);if(!s)continue e;if(d.string(e,{anchor:s,focus:r})!==i){if(t.failOnInvalid)continue e;n=l.split("")}if(a=s,n.length+1===l.length&&(c=r),r=s,n.length>0&&p.equals(r,o))continue e}return"start"===t.edge?a:c}}function F(e,t){return n=>{if(!d.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function q(e,t){return e=>!d.isEditor(e)&&t.children.includes(e)}function Z(e,t){const n=Array.isArray(t)?t:[t];return e=>n.some((t=>t===e))}function G(e,t){return e=>t!==e}class Y{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(F(this.editor,e)),this}notEquals(e){return this.stages.push(G(this.editor,e)),this}equals(e){return this.stages.push(Z(this.editor,e)),this}childOf(e){return this.stages.push(q(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const K={builder:e=>new Y(e),block:F,equals:Z,notEquals:G,childOf:q};const J={getAbove:H,getPointFromLocation:I,getPointBefore:j,getRangeBefore:function(e,t){if(!e.selection)return;const n=j(e,c(l({},t),{edge:"start"}));if(!n)return;const r=I(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=H(e,{type:"block"});if(!t)return;const[,n]=t,r=d.start(e,n),o=I(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&u.isExpanded(e.selection)},leafHasTextModifications:function(e,t=["bold","italic","underlined","inlineCode"]){return t.some((t=>e[t]))},textModifications:function(e,t=["bold","italic","underlined","inlineCode"]){return t.filter((t=>e[t]))},isInBlock:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return!1;const o=d.path(e,r),[i]=d.node(e,o);if(K.block(e,t)(i))return!0;const a=H(e,{type:"block",match:K.block(e,t)});return Boolean(a)},isOnEdges:function(e,t={}){const n=()=>{const t=H(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const a=I(i);if(!a)return r;const[l,c]=d.edges(e,o);return[p.equals(a,l),p.equals(a,c)]}};const U=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();const W=function(){const e=new Map;return{set:(t,n)=>{e.set(t,n)},get:t=>{const n=e.get(t);if(!n)throw new Error(`The value with key "${t}" should be present in registry, but it's not`);return n},maybeGet:t=>e.get(t),getAll:()=>Array.from(e.values())}}(),$=["bold","italic","underlined","inlineCode"],Q=(e=[{text:""}])=>({type:"paragraph",children:e});W.set("paragraph",{type:"paragraph",name:"Paragraph",code:"p",aliases:["paragraph","text"],allowedModifications:[...$,"href"],allowedTransformations:["heading-1","heading-2","heading-3"],create:Q});const V=" ".repeat(2);const X={insertExitBreak:function(e){const t={handled:!0};if(!e.selection)return t;u.isExpanded(e.selection)&&f.delete(e);const n=J.getAbove(e,{type:"block",match:K.block(e,"code-line")});if(!n)return{handled:!1};const[r,o]=n;let i=0;const a=d.string(e,o);for(const c of a){if(" "!==c)break;i+=1}const l=a[d.start(e,e.selection).offset-1];if("{"===l&&(i+=2),"("===l&&(i+=2),"<"===l&&(i+=2),":"===l&&(i+=2),f.splitNodes(e,{match:K.equals(e,r),always:!0}),f.select(e,m.next(o)),f.collapse(e,{edge:"start"}),i>0){const t=d.start(e,m.next(o));f.insertText(e," ".repeat(i),{at:t})}return t},indent:function(e){const t=d.nodes(e,{match:K.block(e,"code-line")});for(const[,n]of t){const t=d.start(e,n);f.insertText(e,V,{at:t})}},outdent:function(e){const t=d.nodes(e,{match:K.block(e,"code-line")});for(const[,n]of t){const t=d.start(e,n),[r]=d.node(e,t),o=g.string(r);let i=t.offset,a=0;for(const e of o){if(" "!==e)break;if(i+=1,a+=1,2===a)break}if(0===a)continue;const l={path:t.path,offset:i},c=d.range(e,t,l);f.delete(e,{at:c})}}};function _({editor:e}){return J.isInBlock(e,"code")}U.override("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),X.insertExitBreak(e)}),{match:_}),U.override("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),X.insertExitBreak(e)}),{match:_}),U.override("copy-all",(({editor:e,event:t})=>{const n=J.getAbove(e,{type:"block",match:K.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),f.select(e,r)}),{match:_}),U.override("indent",(({event:e,editor:t})=>{e.preventDefault(),X.indent(t)}),{match:_}),U.override("outdent",(({event:e,editor:t})=>{e.preventDefault(),X.outdent(t)}),{match:_}),U.override("exit-block",(({editor:e,event:t})=>{const n=J.getAbove(e,{type:"block",match:K.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),f.insertNodes(e,Q(),{at:m.next(r),select:!0})}),{match:_});const ee=function(){const e=[];return{register:t=>{e.push(t)},createHandler:t=>n=>{for(const r of e){const e=r(t,n);if(0!==e.length)return e}return[]}}}();ee.register(((e,t)=>{const[n,r]=t;if(!K.block(e,"code-line")(n))return[];const o=J.getAbove(e,{at:r,type:"block",match:K.block(e,"code")});if(!o)return[];const[i]=o,a=[],l=g.string(n),c=b.tokenize(l,b.languages[i.language]);let s=0;for(const d of c)"string"!=typeof d?(a.push({anchor:{path:r,offset:s},focus:{path:r,offset:s+d.length},prismToken:d.type}),s+=d.length):s+=d.length;return a}));const te=(e=[{text:""}])=>({type:"code-line",children:e});W.set("code-line",{type:"code-line",name:"Code Line",code:"code-line",allowedModifications:["prismToken"],allowedTransformations:[],create:te,canBeAdded:!1});const ne=(e="tsx",t=[te()])=>({type:"code",children:t,language:e});W.set("code",{type:"code",name:"Code",code:"code",aliases:["pre"],allowedModifications:["prismToken"],allowedTransformations:[],create:ne});const re=y.exports.createContext({});function oe(){return y.exports.useContext(re)}function ie(){const e=oe(),t=y.exports.useRef(null);return y.exports.useLayoutEffect((()=>{t.current=x.toDOMNode(e,e)}),[e]),t}const ae=y.exports.createContext({}),le=ae.Provider;function ce(){return y.exports.useContext(ae)}const se=({element:e,render:t})=>v()?null:h.createElement(de,{element:e,render:t}),de=({element:e,render:t})=>{const n=oe(),r=k(),o=n.selection&&u.isCollapsed(n.selection),i=r&&o,[a,l]=y.exports.useState(!1),c={element:e,meta:{empty:d.isEmpty(n,e)},active:a,setActive:l},s=w({controls:!0,visible:a||i});return h.createElement(le,{value:c},h.createElement("div",{className:s,contentEditable:!1},t()))},ue="editor editor-dark editor-toolbar",pe="editor editor-dark editor-link-popup",me="editor editor-dark editor-keybind",fe="editor editor-light editor-block-menu",he=E`
  .tippy-box[data-theme~='editor-dark'] {
    --text-color: #fff;
    --background-color: #333;
    --border-color: var(--background-color);
  }
`,ge=E`
  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  .tippy-box[data-theme~='editor'] {
    box-sizing: border-box;
    position: relative;
    background-clip:padding-box;
    font-size: 14px;
    line-height: 1.4;
    outline: 0;
    transition-property: transform, visibility, opacity;
    
    &[data-animation='fade'][data-state='hidden'] {
      opacity: 0;
    }

    /* Base Arrow styles with border support */

    &[data-placement^='top'] > .tippy-arrow {
      bottom: 0;
    }

    &[data-placement^='top'] > .tippy-arrow:before {
      bottom: -7px;
      left: 0;
      border-width: 8px 8px 0;
      border-top-color: initial;
      transform-origin: center top;
    }

    &[data-placement^='bottom'] > .tippy-arrow {
      top: 0;
    }

    &[data-placement^='bottom'] > .tippy-arrow:before {
      top: -7px;
      left: 0;
      border-width: 0 8px 8px;
      border-bottom-color: initial;
      transform-origin: center bottom;
    }

    &[data-placement^='left'] > .tippy-arrow {
      right: 0;
    }

    &[data-placement^='left'] > .tippy-arrow:before {
      border-width: 8px 0 8px 8px;
      border-left-color: initial;
      right: -7px;
      transform-origin: center left;
    }

    &[data-placement^='right'] > .tippy-arrow {
      left: 0;
    }

    &[data-placement^='right'] > .tippy-arrow:before {
      left: -7px;
      border-width: 8px 8px 8px 0;
      border-right-color: initial;
      transform-origin: center right;
    }

    &[data-inertia][data-state='visible'] {
      transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
    }

    & .tippy-arrow {
      width: 16px;
      height: 16px;
      color: #333;
    }

    & .tippy-arrow:before {
      content: '';
      position: absolute;
      border-color: transparent;
      border-style: solid;
    }

    & .tippy-content {
      position: relative;
      padding: 5px 9px;
      z-index: 1;
    }
    
    & > .tippy-arrow:after,
    & > .tippy-svg-arrow:after {
      content: "";
      position: absolute;
      z-index: -1;
    }
    
    & > .tippy-arrow:after {
      border-color: transparent;
      border-style: solid;
    }
    
    &[data-placement^=top] > .tippy-arrow:after {
      border-top-color:inherit;
      border-width: 7px 7px 0;
      top: 17px;
      left: 1px;
    }
    
    &[data-placement^=top] > .tippy-svg-arrow > svg {
      top: 16px;
    }
    
    &[data-placement^=top] > .tippy-svg-arrow:after {
      top: 17px;
    }
    
    &[data-placement^=bottom] > .tippy-arrow:before {
      bottom: 16px;
    }
    
    &[data-placement^=bottom] > .tippy-arrow:after {
      border-bottom-color: inherit;
      border-width: 0 7px 7px;
      bottom: 17px;
      left: 1px;
    }
    
    &[data-placement^=bottom] > .tippy-svg-arrow > svg {
      bottom: 16px;
    }
    
    &[data-placement^=bottom] > .tippy-svg-arrow:after {
      bottom: 17px;
    }
    
    &[data-placement^=left] > .tippy-arrow:after {
      border-left-color: inherit;
      border-width: 7px 0 7px 7px;
      left: 17px;
      top: 1px;
    }
    
    &[data-placement^=left] > .tippy-svg-arrow > svg {
      left: 11px;
    }
    
    &[data-placement^=left] > .tippy-svg-arrow:after {
      left: 12px;
    }
    
    &[data-placement^=right] > .tippy-arrow:before {
      right: 16px;
    }
    
    &[data-placement^=right] > .tippy-arrow:after {
      border-width: 7px 7px 7px 0;
      right: 17px;
      top: 1px;
      border-right-color: inherit;
    }
    
    &[data-placement^=right] > .tippy-svg-arrow > svg {
      right: 11px;
    }
    
    &[data-placement^=right] > .tippy-svg-arrow:after {
      right: 12px;
    }
    
    & > .tippy-svg-arrow:after {
      background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMCA2czEuNzk2LS4wMTMgNC42Ny0zLjYxNUM1Ljg1MS45IDYuOTMuMDA2IDggMGMxLjA3LS4wMDYgMi4xNDguODg3IDMuMzQzIDIuMzg1QzE0LjIzMyA2LjAwNSAxNiA2IDE2IDZIMHoiIGZpbGw9InJnYmEoMCwgOCwgMTYsIDAuMikiLz48L3N2Zz4=);
      background-size: 16px 6px;
      width: 16px;
      height: 6px;
    }

    /* Theme template */

    font-family: 'Open Sans', sans-serif;
    background-color: var(--background-color);
    color: var(--text-color);
    border: 1px solid var(--border-color);
    border-radius: 4px;

    & .tippy-arrow {
      color: var(--border-color);
    }

    &[data-placement^=top] > .tippy-arrow:before {
      border-top-color: var(--background-color);
    }

    &[data-placement^=bottom] > .tippy-arrow:before {
      border-bottom-color: var(--background-color);
    }

    &[data-placement^=left] > .tippy-arrow:before {
      border-left-color: var(--background-color);
    }

    &[data-placement^=right] > .tippy-arrow:before {
      border-right-color: var(--background-color);
    }

    & > .tippy-svg-arrow {
      fill: var(--background-color);
    }
  }
`,be=E`
  .tippy-box[data-theme~='editor-default'] .tippy-content {
    font-family: 'Open Sans';
  }

  .tippy-box[data-theme~='editor-toolbar'] .tippy-content {
    padding: 0;
  }

  .tippy-box[data-theme~='editor-link-popup'] .tippy-content {
    padding: 0;
  }

  .tippy-box[data-theme~='editor-keybind'] .tippy-content {
    font-size: 12px;
  }

  .tippy-box[data-theme~='editor-block-menu'] {
    width: 230px;
    padding: 6px;

    & .tippy-content {
      padding: 0;
    }

    & .block-menu-container {
      padding: 6px 12px;
    }

    & .block-menu-list-name {
      font-size: 12px;
      color: #A9AAB3;
      margin: 0;
      padding: 6px 12px;
    }

    & .block-menu-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & .block-menu-item {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      padding: 6px 12px;
      border-radius: 3px;
      cursor: pointer;

      &:hover {
        background: #F8F8FA;
      }
    }

    & .block-menu-item-detail {
      color: #A9AAB3;
    }
  }
`,ye=E`
  .tippy-box[data-theme~='editor-light'] {
    --text-color: #1A1A23;
    --background-color: #fff;
    --border-color: #e4e4ea;

    box-shadow: 0px 2px 3px #F2F3F5;
  }
`,xe=()=>h.createElement(h.Fragment,null,h.createElement(ge,null),h.createElement(he,null),h.createElement(ye,null),h.createElement(be,null)),ve=({svg:e,iconClassName:t,content:n,sections:r})=>{const{active:o,setActive:i}=ce(),[a,l]=y.exports.useState(!1),c=()=>l(!1),s=w({"block-menu-icon":!0,[t]:!0,active:a});return h.createElement(C,{theme:fe,interactive:!0,placement:"bottom-end",content:h.createElement(ke,{active:o},h.createElement(n,{show:()=>l(!0),hide:c,sections:r})),visible:a,onShow:()=>i(!0),onHidden:()=>i(!1),onClickOutside:c},h.createElement("div",{className:s,onClick:()=>l((e=>!e))},h.createElement(e,null)))},ke=({active:e,children:t})=>e?t:null,we=({children:e})=>h.createElement("div",{className:"block-menu-container"},e),Ee=({name:e,children:t})=>h.createElement("div",{className:"block-menu-section"},h.createElement("p",{className:"block-menu-list-name"},e),t),Ce=e=>{var t=e,{children:n}=t,r=s(t,["children"]);return h.createElement("ul",l({className:"block-menu-list"},r),n)},Ne=e=>{var t=e,{name:n,detail:r,onClick:o}=t,i=s(t,["name","detail","onClick"]);return h.createElement("li",l({className:"block-menu-item",onClick:o},i),h.createElement("span",{className:"block-menu-item-name"},n),r&&h.createElement("span",{className:"block-menu-item-detail"},r))},Me=e=>h.createElement(ve,l({svg:Le,iconClassName:"plus",content:Ae},e)),Le=e=>h.createElement("svg",l({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),h.createElement("g",null,h.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),h.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),Ae=({hide:e})=>{const t=oe(),n=ie(),{element:r}=ce(),o=function(e){const t=oe();return x.findPath(t,e)}(r),i=y.exports.useMemo((()=>W.getAll().filter((e=>!1!==e.canBeAdded)).map((({type:r,name:i,code:a})=>h.createElement(Ne,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;const a=W.get(r);f.removeNodes(t,{at:o}),f.insertNodes(t,a.create(),{at:o,select:!0}),e(),null==(i=n.current)||i.focus()})(r)})))),[]);return h.createElement("div",{className:"block-menu"},h.createElement(Ee,{name:"Select item type"},h.createElement(Ce,null,i)))};const Se=e=>h.createElement(ve,l({svg:Te,iconClassName:"arrow",content:Be},e)),Te=e=>h.createElement("svg",l({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),h.createElement("g",null,h.createElement("polyline",{points:"6 9 12 15 18 9"}))),Be=e=>{const{sections:t=[]}=e;return h.createElement("div",{className:"block-menu"},h.createElement(De,l({},e)),t.map(((t,n)=>{const r=t;return h.createElement(r,l({key:n},e))})))},De=({hide:e})=>{const t=oe(),n=ie(),{element:r}=ce(),o=function(e){const t=oe();return x.findPath(t,e)}(r),i=W.get(r.type),a=y.exports.useMemo((()=>i.allowedTransformations.map((r=>{const{name:i,code:a}=W.get(r);return h.createElement(Ne,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;f.setNodes(t,{type:r},{at:o}),e(),null==(i=n.current)||i.focus()})(r)})}))),[i]);return 0===a.length?null:h.createElement(Ee,{name:"Select item type"},h.createElement(Ce,null,a))};const ze=e=>{const{meta:t}=ce(),n=t.empty?Me:Se;return h.createElement(n,l({},e))},Oe=[{grammarName:"bash",name:"Bash"},{grammarName:"cmake",name:"CMake"},{grammarName:"csharp",name:"C#"},{grammarName:"css",name:"CSS"},{grammarName:"docker",name:"Docker"},{grammarName:"go",name:"Go"},{grammarName:"graphql",name:"GraphQL"},{grammarName:"javascript",name:"JavaScript"},{grammarName:"json",name:"JSON"},{grammarName:"json5",name:"JSON5"},{grammarName:"jsx",name:"React JSX"},{grammarName:"lua",name:"Lua"},{grammarName:"makefile",name:"Makefile"},{grammarName:"nginx",name:"Nginx"},{grammarName:"plain",name:"Plain Text"},{grammarName:"protobuf",name:"Protocol Buffers"},{grammarName:"python",name:"Python"},{grammarName:"rust",name:"Rust"},{grammarName:"sql",name:"SQL"},{grammarName:"tsx",name:"React TSX"},{grammarName:"toml",name:"TOML"},{grammarName:"typescript",name:"TypeScript"},{grammarName:"xml",name:"HTML"},{grammarName:"xml",name:"SVG"},{grammarName:"xml",name:"XML"},{grammarName:"yaml",name:"YAML"}],Pe=e=>{const{element:t}=ce();return"code"!==t.type?null:h.createElement(Re,l({},e))},Re=({hide:e})=>{const t=oe(),{element:n}=ce(),r=function(e){const t=oe();return x.findPath(t,e)}(n),o=y.exports.useRef(null),[i,a]=y.exports.useState(""),l=y.exports.useMemo((()=>Oe.filter((e=>e.name.toLowerCase().includes(i.toLowerCase())))),[i]);return y.exports.useEffect((()=>{o.current&&o.current.focus()}),[]),"code"!==n.type?null:h.createElement(Ee,{name:"Select code language"},h.createElement(we,null,h.createElement(He,null,h.createElement(Ie,null,je),h.createElement(Fe,{ref:o,value:i,onChange:e=>a(e.target.value)}))),h.createElement(Ce,{style:{maxHeight:200,overflow:"auto"}},l.map((o=>{const i=o.grammarName===n.language;return h.createElement(Ne,{key:o.name,name:o.name,onClick:()=>(n=>{f.setNodes(t,{language:n},{at:r}),e()})(o.grammarName),style:{color:i?"rgb(56, 132, 255)":""}})}))))},He=N.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e4ea;
  border-radius: 3px;

  &:focus-within {
    border-color: #6494e2;
  }
`,Ie=N.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;
  color: #b7c0ca;

  & svg {
    width: 16px;
    height: 16px;
  }
`,je=h.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"icon-7f6730be--text-3f89f380"},h.createElement("g",null,h.createElement("circle",{cx:"10.5",cy:"10.5",r:"7.5"}),h.createElement("line",{x1:"21",y1:"21",x2:"15.8",y2:"15.8"}))),Fe=N.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  outline: none;
  color: #1a1a23;
`;const qe={toggleTextModification:function(e,t){const n=d.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(f.select(e,r),!d.marks(e))return;e.addMark("href",t),f.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(f.select(e,n),!d.marks(e))return;e.removeMark("href"),f.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(u.isExpanded(e.selection))return{success:!1};const t=J.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=J.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,a=d.end(e,r),l=u.start(e.selection);return p.equals(l,a)&&J.leafHasTextModifications(o)?(f.insertNodes(e,{text:" "},{select:!1}),f.select(e,m.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;u.isExpanded(e.selection)&&f.delete(e,{at:e.selection});const t=J.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=J.isOnEdges(e,{of:n});if(!o)return r?(f.insertNodes(e,{type:"paragraph",children:[{text:""}]},{select:!1}),void f.select(e,d.point(e,m.next(n),{edge:"start"}))):void f.splitNodes(e,{mode:"highest"});f.insertNodes(e,{type:"paragraph",children:[{text:""}]},{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(u.isExpanded(e.selection))return void e.deleteFragment("backward");const t=J.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;d.isEmpty(e,n)?f.removeNodes(e,{at:r}):e.deleteBackward("character")}};function Ze({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=J.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=d.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=J.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function Ge({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,a=function({editor:e,entry:t,range:n}){const r=d.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof a)return;f.delete(e,{at:n});const l=J.getAbove(e,{type:"block"}),c=J.getAbove(e,{type:"leaf"});if(!l)return;if(!c)return;const[s]=l,[u]=c,p="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});if(f.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=J.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;f.delete(e,{at:n,unit:"block"})}}d.insertNode(e,a)}({editor:e,entry:t,range:n,text:a,block:s,leaf:u}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});f.delete(e,{at:n}),f.insertNodes(e,a,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:a,block:s,leaf:u});return i&&("leaf"===t.transformType?qe.getOutTheLeaf(e):r(o)),p}function Ye({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const a=J.getAbove(t,{type:"block"}),l=J.getAbove(t,{type:"leaf"});if(!a)return{match:!1};if(!l)return{match:!1};const[c]=a,[s]=l;if(i({block:c,leaf:s}))return{match:!1};let u;return u="after"===n.markupType?Ze({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=J.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=d.before(e,o);if(!i)return{match:!1};const a=J.getPointBefore(e,{at:i,edge:"start",matchString:n});return a?{match:!0,range:{anchor:a,focus:o}}:{match:!1}}({editor:t,entry:n}),u.match&&Ge({editor:t,entry:n,range:u.range,insertText:r}),u}const Ke={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(J.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=Ye({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,n=K.block(e,["ordered-list","unordered-list"]),r=K.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return r(o),n(o),t(e)},e}};function Je(e){return K.block(e,["ordered-list","unordered-list"])}function Ue(e,t){return([n,r])=>{const[o,i]=J.isOnEdges(e,{of:r}),a=d.isEmpty(e,n),l=t.node.children;return{isFirst:l[0]===n,isLast:l[l.length-1]===n,isOnStart:o,isOnEnd:i,isEmpty:a,isList:Je(e)(n)}}}function We(e){return K.block(e,"paragraph")}function $e(e,t,n){const{first:r,second:o,third:i}=n;return([n])=>{const a=t.node.children.findIndex((e=>e===n));return{isSimple:!(!r||"paragraph"!==r.node.type||o&&(!Je(e)(o.node)||i)),index:a,isFirst:0===a,isLast:a===t.node.children.length-1,isEmpty:1===n.children.length&&We(e)(n.children[0])&&d.isEmpty(e,n.children[0]),hasList:Je(e)(n.children[1])}}}function Qe({editor:e,entry:t,list:n}){if(!t)return{item:null,blocks:null};const r=function(e,t){const n=[t.node,t.path];return{first:Xe({entry:Ve(n,0),createMeta:Ue(e,t)}),second:Xe({entry:Ve(n,1),createMeta:Ue(e,t)}),third:Xe({entry:Ve(n,2),createMeta:Ue(e,t)})}}(e,function(e){const[t,n]=e;return{node:t,path:n}}(t)),o=Xe({entry:t,createMeta:$e(e,n,r)});return o?{item:o,blocks:r}:{item:null,blocks:null}}function Ve([e,t],n){if(e.children[n])return[e.children[n],t.concat(n)]}function Xe({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[n,r]=e;return{node:n,path:r,meta:t([n,r])}}const _e={info:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;const r=J.getAbove(e,{at:n,type:"block",mode:"lowest",match:Je(e)});if(!r)return;const o=J.getAbove(e,{at:n,type:"block",mode:"lowest",match:K.builder(e).block(["ordered-list","unordered-list"]).notEquals(r[0]).compile()}),i=Xe({entry:r,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const a=Xe({entry:o,createMeta:()=>({})}),{item:s,blocks:u}=Qe({editor:e,entry:J.getAbove(e,{at:n,type:"block",mode:"lowest",match:K.block(e,"list-item")}),list:i});if(!s)return;if(!u)return;const p=Xe({entry:J.getAbove(e,{at:n,type:"block",mode:"lowest",match:K.builder(e).block("list-item").notEquals(s.node).compile()}),createMeta:()=>({})}),m=Xe({entry:J.getAbove(e,{at:n,type:"block",mode:"highest",match:K.childOf(e,s.node)}),createMeta:Ue(e,s)});if(!m)return;const f=K.builder(e).block("list-item").childOf(i.node).compile(),{item:h}=Qe({editor:e,entry:d.previous(e,{at:s.path,match:f}),list:i}),{item:g}=Qe({editor:e,entry:d.next(e,{at:s.path,match:f}),list:i}),b=K.builder(e).block().childOf(s.node).compile(),y=Xe({entry:d.previous(e,{at:m.path,match:b}),createMeta:Ue(e,s)}),x=Xe({entry:d.next(e,{at:m.path,match:b}),createMeta:Ue(e,s)});return{lists:{current:i,above:a},items:{current:s,previous:h,next:g,above:p},blocks:c(l({},u),{current:m,previous:y,next:x})}}};function et(e,t,n={}){const{at:r=[]}=n,o=d.nodes(e,{at:r,match:n=>!!d.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let a=null;const l=(e,t)=>{const n=m.next(e);return m.equals(n,t)};for(const c of i){if(!a){a=c;continue}const[,t]=c,[,n]=a;a=c,l(t,n)&&f.mergeNodes(e,{at:n})}}function tt(e,t={}){et(e,"ordered-list",t),et(e,"unordered-list",t)}function nt(e,{parent:t,match:n=(()=>!0),to:r,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const a=d.pathRef(e,r),l=new Map;for(const[d,u]of t.node.children.entries())l.set(u,d);const c=t.node.children.filter(n),s=i(c.length);if(c.length>0){const r=K.block(e);if(s?f.removeNodes(e,{at:t.path}):f.removeNodes(e,{at:t.path,match(e){if(!r(e))return!1;const t=l.get(e);return"number"==typeof t&&n(e,t)}}),!a.current)return;f.insertNodes(e,o(c),{at:a.current})}}function rt(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(u.isRange(n)&&u.isExpanded(n))return;const r=_e.info(e,{at:n});if(r){if(!r.lists.above||!r.items.above)return function(e,t={},n){const{at:r=e.selection}=t;if(!r)return;f.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:K.equals(e,[n.lists.current.node,n.items.current.node])}),tt(e)}(e,t,r);if(1!==r.lists.current.node.children.length){if(nt(e,{parent:r.lists.current,match:(e,t)=>t>r.items.current.meta.index,to:r.items.current.path.concat(r.items.current.node.children.length),transform:e=>({type:r.lists.current.node.type,children:e})}),tt(e,{at:r.items.current.path}),r.items.current.meta.isFirst){const t=_e.info(e,{at:n});if(!t)return;if(!t.items.above)return;f.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:K.equals(e,[t.lists.current.node,t.items.above.node])})}else f.moveNodes(e,{at:r.items.current.path,to:m.next(r.items.above.path)});tt(e,{at:r.lists.above.path})}else f.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!r)return!1;const n=e===r.lists.current.node,o=e===(null==(t=r.items.above)?void 0:t.node);return n||o}})}}const ot=(e=[{type:"paragraph",children:[{text:""}]}])=>({type:"list-item",children:e});W.set("list-item",{type:"list-item",name:"List Item",code:"li",aliases:["list-item"],canBeAdded:!1,allowedModifications:[...$,"href"],allowedTransformations:[],create:ot});const it=(e=[ot()])=>({type:"ordered-list",children:e});W.set("ordered-list",{type:"ordered-list",name:"Ordered List",code:"ol",aliases:["ordered-list"],allowedModifications:[...$,"href"],allowedTransformations:["unordered-list"],create:it});const at=(e=[ot()])=>({type:"unordered-list",children:e});W.set("unordered-list",{type:"unordered-list",name:"Unordered List",code:"ul",aliases:["unordered-list"],allowedModifications:[...$,"href"],allowedTransformations:["ordered-list"],create:at});const lt={"ordered-list":it,"unordered-list":at};const ct={insertExitBreak:function(e){var t;const n={handled:!0},r={handled:!1};if(!e.selection)return n;u.isExpanded(e.selection)&&f.delete(e);const o=_e.info(e);if(!o)return n;if(!o.items.current.meta.isSimple)return r;if(o.blocks.current.meta.isEmpty)return rt(e),n;if(!o.blocks.first)return n;const i={type:"list-item",children:[{type:"paragraph",children:[{text:""}]}]};return o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||f.insertNodes(e,i,{at:o.items.current.path}),n):o.blocks.first.meta.isOnEnd?(o.blocks.second?f.insertNodes(e,i,{at:o.blocks.second.path.concat(0),select:!0}):f.insertNodes(e,i,{at:m.next(o.items.current.path),select:!0}),n):(f.splitNodes(e,{match:K.equals(e,o.items.current.node),always:!0}),n)},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(u.isExpanded(e.selection))return t;const n=J.getAbove(e,{type:"block",mode:"lowest",match:K.block(e,"list-item")});if(!n)return t;const[,r]=n,[o]=J.isOnEdges(e,{of:r});return o?(rt(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(u.isRange(n)&&u.isExpanded(n))return;const r=_e.info(e,{at:n});if(!r)return;const{lists:o,items:i}=r;i.current.meta.isFirst||i.previous&&(f.wrapNodes(e,{type:o.current.node.type,children:[]},{at:i.current.path}),f.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),tt(e,{at:i.previous.path}))},indentParagraph:function(e){if(!e.selection)return;if(u.isExpanded(e.selection))return;const t=J.getAbove(e,{type:"block",mode:"lowest",match:K.block(e,"paragraph")});if(!t)return;const[,n]=t;f.wrapNodes(e,ot([]),{at:n});const r=(()=>{const t=d.previous(e,{at:n}),r=d.next(e,{at:n}),o=K.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();f.wrapNodes(e,((e,t=[ot()])=>(0,lt[e])(t))(r,[]),{at:n}),tt(e)},outdent:rt,mergeSiblings:tt,moveChildren:nt};function st({editor:e}){return J.isInBlock(e,["ordered-list","unordered-list"])}U.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=ct.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:st}),U.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:n}=ct.insertExitBreak(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:st}),U.override("indent",(({editor:e,event:t})=>{t.preventDefault(),ct.indent(e)}),{match:st}),U.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),ct.outdent(e)}),{match:st}),U.override("indent",(({editor:e,event:t})=>{t.preventDefault(),ct.indentParagraph(e)}),{match:function({editor:e}){return J.isInBlock(e,["ordered-list","unordered-list"])}});const dt=[M,L,Ke.listNormalization,Ke.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(A.isText);return 0===t.length?at():at([ot([Q(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(A.isText);return 0===t.length?it():it([ot([Q(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["```"],onlyOnBlockStart:!0,transformType:"block",transform:()=>ne()}])];U.register("delete-backward",(()=>{})),U.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),qe.insertSoftBreak(e)})),U.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),qe.insertExitBreak(e)})),U.register("indent",(({event:e})=>{e.preventDefault()})),U.register("outdent",(({event:e})=>{e.preventDefault()})),U.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=qe.getOutTheLeaf(e);n&&t.preventDefault()})),U.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),qe.toggleTextModification(e,"bold")})),U.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),qe.toggleTextModification(e,"italic")})),U.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),qe.toggleTextModification(e,"underlined")})),U.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),qe.toggleTextModification(e,"inlineCode")})),U.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=d.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))})),U.register("copy",(()=>{})),U.register("copy-all",(()=>{})),U.register("paste",(()=>{})),U.register("exit-block",(()=>{}));const ut="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",pt=()=>new KeyboardEvent("noop"),mt=e=>h.createElement("svg",l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),h.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),h.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),h.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),ft=e=>h.createElement("svg",l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),h.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}));function ht(){const[,e]=y.exports.useReducer((e=>e+1),0);return e}const gt=y.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function bt(){return y.exports.useContext(gt)}function yt(){const e=bt(),t=ht();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const xt=N.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: rgba(255, 255, 255, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-radius: 3px;

  &:focus-within {
    color: rgba(255, 255, 255, 0.8);
    border-color: rgba(255, 255, 255, 0.8);
  }
`,vt=N.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,kt=N(vt)``,wt=N(vt)`
  cursor: pointer;
`,Et=N.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,Ct=N.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Nt=()=>"undefined"==typeof window?null:h.createElement(Mt,null),Mt=()=>{const e=oe(),t=ie(),n=y.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:a,setHref:l,hadHref:c}=bt(),{reset:s}=yt(),[d,u]=y.exports.useState(!1),[p,m]=y.exports.useState(null),f=e=>{if(m(null),e)return function(e){const t=new RegExp(ut,"i");return e.length<2083&&t.test(e)}(e)?void u(!0):(u(!1),void m("It doesn't look like an URL"));u(!1)};return y.exports.useEffect((()=>{f(a)}),[a]),y.exports.useEffect((()=>{if(t.current)return r.current=T(t.current,{theme:pe,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>s()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),B.createPortal(h.createElement("form",{onSubmit:n=>{var o,l;n.preventDefault(),d&&i.current&&(qe.setHref(e,a,{at:i.current}),null==(o=r.current)||o.hide(),null==(l=t.current)||l.focus())}},h.createElement(xt,null,h.createElement(kt,null,h.createElement(mt,null)),h.createElement(Et,{ref:o,value:a,onChange:e=>{l(e.target.value)},placeholder:"Enter the URL"}),c.current&&h.createElement(wt,{onClick:()=>{var n,o;i.current&&(qe.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},h.createElement(ft,null))),p&&h.createElement(Ct,null,p)),n)};const Lt=y.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function At(){return y.exports.useContext(Lt)}function St(){const e=At(),t=ht();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const Tt=e=>"undefined"==typeof window?null:h.createElement(Bt,l({},e)),Bt=({renderButtons:e})=>{const t=ie(),n=function(){const e=y.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return y.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=At(),i=(a=ht(),l=300,y.exports.useMemo((()=>D(a,l)),[a,l]));var a,l;return y.exports.useEffect((()=>{if(!t.current)return;r.current=T(t.current,{theme:ue,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=z((()=>{r.current&&(i(),r.current.show())}),300),a=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},l=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return a();const n=window.getSelection();if(!n)return a();if(n.isCollapsed)return o.current="",a();const l=n.getRangeAt(0).toString();if(l===o.current)return i();a(!1),e(),o.current=l};return document.addEventListener("selectionchange",l),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",l)}}),[n,t]),B.createPortal(e(),n)};function Dt(){return{toolbar:St(),linkPopup:yt()}}const zt=({editor:e,event:t})=>{if(!e.selection)return;if(u.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(ut).test(n)&&(t.preventDefault(),qe.setHref(e,n))};function Ot(){return{handlePaste:function(e,t=[]){return n=>{const r=l({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:oe(),ui:Dt()},[zt])}}const Pt=N.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,Rt=N.button`
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  min-height: 20px;
  margin: 0;
  padding: 0;
  cursor: pointer;
  border: none;
  background: transparent;
  outline: none;

  &:hover ${Pt} {
    color: white;
  }

  &[data-active='true'] ${Pt} {
    color: white;
  }
`,Ht=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,a=s(t,["icon","isActive","tooltip","style"]);const c=h.createElement(Rt,l({"data-active":r},a),h.createElement(Pt,{style:i},n));return o?h.createElement(C,{theme:me,content:o,offset:[0,20],hideOnClick:!1},c):c};const It=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=oe(),a=function(e,t){const n=d.marks(e);return!!n&&Boolean(n[t])}(i,e),l=Dt();return h.createElement(Ht,{icon:t,isActive:a,tooltip:r,onClick:e=>{e.preventDefault(),U.execute(n,{editor:i,event:pt(),ui:l})},style:o})};W.set("heading-1",{type:"heading-1",name:"Heading-1",code:"h1",aliases:["heading-1","title"],allowedModifications:[],allowedTransformations:["heading-2","heading-3","paragraph"],create:(e=[{text:""}])=>({type:"heading-1",children:e})});W.set("heading-2",{type:"heading-2",name:"Heading-2",code:"h2",aliases:["heading-2","title"],allowedModifications:[],allowedTransformations:["heading-1","heading-3","paragraph"],create:(e=[{text:""}])=>({type:"heading-2",children:e})});W.set("heading-3",{type:"heading-3",name:"Heading-3",code:"h3",aliases:["heading-3","title"],allowedModifications:[],allowedTransformations:["heading-1","heading-2","paragraph"],create:(e=[{text:""}])=>({type:"heading-3",children:e})});const jt={paragraph:({attributes:e,children:t})=>h.createElement("p",l({},e),t),"heading-1":({attributes:e,children:t})=>h.createElement("h1",l({},e),t),"heading-2":({attributes:e,children:t})=>h.createElement("h2",l({},e),t),"heading-3":({attributes:e,children:t})=>h.createElement("h3",l({},e),t),"ordered-list":({attributes:e,children:t})=>h.createElement("ol",l({},e),t),"unordered-list":({attributes:e,children:t})=>h.createElement("ul",l({},e),t),"list-item":({attributes:e,children:t})=>h.createElement("li",l({},e),t),code:({element:e,attributes:t,children:n})=>"code"!==e.type?h.createElement(h.Fragment,null):h.createElement("pre",l({"data-language":e.language,spellCheck:!1},t),n),"code-line":({attributes:e,children:t})=>h.createElement("div",l({},e),t)};function Ft(e){var t=e,{children:n}=t,r=s(t,["children"]);return h.createElement(qt,l({},r),n)}const qt=e=>{const{element:t}=e,n=jt[t.type],r=function(e){const t=oe();return x.findPath(t,e)}(t).length>1,o=h.createElement(n,l({},e));return"code-line"===t.type?o:r?h.createElement("div",{className:"element-container"},h.createElement("div",{className:"content"},h.createElement(Gt,{position:"top"}),o,h.createElement(Gt,{position:"bottom"}))):h.createElement(Zt,{element:t},o)},Zt=({element:e,children:t})=>{const n=v(),r=w({"element-container":!0,"first-level":!0,"read-only":n});return h.createElement("div",{className:r},h.createElement(se,{element:e,render:()=>h.createElement(ze,{sections:[Pe]})}),h.createElement("div",{className:"content"},h.createElement(Gt,{position:"top"}),t,h.createElement(Gt,{position:"bottom"})))},Gt=({position:e,children:t})=>{const n=w({"element-area":!0,["element-area-"+e]:!0});return h.createElement("div",{contentEditable:!1,className:n},t)},Yt={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const Kt=e=>function({leaf:e,children:t,attributes:n}){if(function(e){var t;const n=null==e?void 0:e.props;return 0===(null==n?void 0:n.text.text.length)&&"code-line"===(null==(t=null==n?void 0:n.parent)?void 0:t.type)}(t))return h.createElement("span",{"data-slate-leaf":"true"},h.createElement("span",{"data-slate-zero-width":"z","data-slate-length":0},"\ufeff"));if(e.prismToken)return h.createElement("span",l({className:`token ${e.prismToken}`},n),t);const r=J.textModifications(e);let o=t;for(const i of r){const e=Yt[i];o=h.createElement(e,null,o)}return e.href&&(o=h.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=h.createElement("span",null,o)),h.cloneElement(o,n)}(e);function Jt(e){var t=e,{children:n}=t,r=s(t,["children"]);return h.createElement(Kt,l({},r),n)}const Ut=E`
  :root {
    --editor-font-family: 'Open Sans', sans-serif;
    --editor-font-size: 15px;
    --editor-line-height: 1.6;
    --editor-color: #000;

    --editor-controls-container-width: 50px;
    --editor-controls-container-padding: 0 15px 0 0;
    --editor-controls-container-background: #ffffff;

    --editor-mod-bold-font-weight: 600;
    --editor-mod-inline-code-font-family: 'Source Code Pro', monospace;
    --editor-mod-inline-code-padding: 4px 6px;
    --editor-mod-inline-code-background: #f7f6f9;
    --editor-mod-inline-code-border-radius: 6px;
    --editor-mod-link-color: rgb(75, 50, 195);

    --editor-paragraph-margin: 1em 0;

    --editor-heading1-margin: 1em 0;
    --editor-heading1-font-size: 26px;
    --editor-heading1-line-height: 0.95;
    --editor-heading1-font-weight: 600;

    --editor-heading2-margin: 1em 0;
    --editor-heading2-font-size: 22px;
    --editor-heading2-line-height: 1.05;
    --editor-heading2-font-weight: 600;

    --editor-heading3-margin: 1em 0;
    --editor-heading3-font-size: 18px;
    --editor-heading3-line-height: 1.35;
    --editor-heading3-font-weight: 600;

    --editor-list-margin: 1em 0;
    --editor-list-padding: 0 0 0 24px;

    --editor-code-font-family: 'Source Code Pro', monospace;
    --editor-code-margin: 1.5em 0;
  }
`,Wt=N.div`
  & * {
    box-sizing: border-box;
  }

  font-family: var(--editor-font-family);
  font-size: var(--editor-font-size);
  line-height: var(--editor-line-height);
  color: var(--editor-color);

  .element-container {
    position: relative;
  }

  .element-container .controls {
    display: flex;
    flex-direction: row-reverse;
    box-sizing: border-box;
    padding: var(--editor-controls-container-padding);
    position: absolute;
    width: var(--editor-controls-container-width);
    height: 100%;
    left: 0;
    top: 0;

    background: var(--editor-controls-container-background);
    user-select: none;

    opacity: 0;
    transition: opacity 400ms ease 0s;
  }

  .element-container .element-area {
    user-select: none;
  }

  .element-container .controls:hover {
    opacity: 1;
  }

  .element-container .controls.visible {
    opacity: 1;
  }

  .element-container.first-level > .content {
    padding-left: var(--editor-controls-container-width);
  }

  .element-container.first-level.read-only > .content {
    padding-left: 0;
  }

  .element-container .controls .block-menu-icon {
    width: 25px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #82869b;
    background: #ffffff;
    border: 1px solid #bfc2d1;
    border-radius: 50%;
    cursor: pointer;

    transition: color 400ms ease, background 400ms ease;

    &:hover {
      background: #efefef;
    }

    &.active {
      color: #ffffff;
      background: #333333;
    }

    & > svg {
      transition: transform 400ms ease;
    }

    &.active.plus > svg {
      transform: rotate(45deg);
    }

    &.active.arrow > svg {
      transform: rotate(180deg);
    }
  }

  [data-slate-node='element'] {
    width: fit-content;

    // to display caret in empty blocks
    min-width: 3px;
  }

  a {
    color: var(--editor-mod-link-color);
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  & :not(pre[data-language]) > code {
    font-family: var(--editor-mod-inline-code-font-family);
    padding: var(--editor-mod-inline-code-padding);
    background: var(--editor-mod-inline-code-background);
    border-radius: var(--editor-mod-inline-code-border-radius);
  }

  pre[data-language] {
    width: 100%;
    font-family: var(--editor-code-font-family);
    margin: var(--editor-code-margin);
  }

  b {
    font-weight: var(--editor-mod-bold-font-weight);
  }

  p {
    margin: var(--editor-paragraph-margin);
  }

  h1 {
    margin: var(--editor-heading1-margin);
    font-size: var(--editor-heading1-font-size);
    line-height: var(--editor-heading1-line-height);
    font-weight: var(--editor-heading1-font-weight);
  }

  h2 {
    margin: var(--editor-heading2-margin);
    font-size: var(--editor-heading2-font-size);
    line-height: var(--editor-heading2-line-height);
    font-weight: var(--editor-heading2-font-weight);
  }

  h3 {
    margin: var(--editor-heading3-margin);
    font-size: var(--editor-heading3-font-size);
    line-height: var(--editor-heading3-line-height);
    font-weight: var(--editor-heading3-font-weight);
  }

  ol,
  ul {
    margin: var(--editor-list-margin);
    padding: var(--editor-list-padding);
  }

  ul ul,
  ol ol,
  ul ol,
  ol ul {
    margin: 0;
  }

  ol ol {
    list-style-type: lower-roman;
  }

  ol ol ol {
    list-style-type: lower-alpha;
  }

  li p {
    margin-top: 0;
    margin-bottom: 0;
  }

  .toolbar-container {
    display: flex;
    padding: 6px;
    user-select: none;
  }

  .link-popup-container {
    width: 280px;
    padding: 8px;
  }
`,$t={};const Qt=function({scope:e="global",stopAllEvents:t=!0}={}){$t[e]||($t[e]=[]);const n=$t[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:O(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"}),Vt={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":"enter",indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k",copy:"mod+c","copy-all":"mod+a",paste:"mod+v","exit-block":"mod+enter"};const Xt=({value:e,onChange:t,customKeybinds:n})=>{const r=oe(),{handleKeyDown:o}=function(e){const t=oe(),n=Dt();return y.exports.useEffect((()=>{const t=l(l({},Vt),e);Qt.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)Qt.register(o,((t,r)=>{U.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:y.exports.useCallback((e=>{Qt.keyDown(e,t)}),[t])}}(n),{handlePaste:i}=Ot();return y.exports.useEffect((()=>{e.length>0||t([Q()])}),[e]),h.createElement(Wt,null,h.createElement(P,{editor:r,value:e,onChange:t},h.createElement(R,{renderElement:Ft,renderLeaf:Jt,onKeyDown:o,onPaste:i,decorate:ee.createHandler(r),readOnly:!1,autoFocus:!0,autoCapitalize:"false",autoCorrect:"false",spellCheck:"false"})),h.createElement(_t,null),h.createElement(Nt,null))},_t=()=>h.createElement(Tt,{renderButtons:()=>h.createElement(h.Fragment,null,h.createElement(It,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),h.createElement(It,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),h.createElement(It,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),h.createElement(It,{mark:"inlineCode",icon:h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},h.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),h.createElement("polyline",{points:"7 8 3 12 7 16"}),h.createElement("polyline",{points:"17 8 21 12 17 16"}),h.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),h.createElement(It,{mark:"href",icon:h.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),h.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),h.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),en=({value:e})=>{const t=oe();return h.createElement(Wt,null,h.createElement(P,{editor:t,value:e,onChange:()=>{}},h.createElement(R,{renderElement:Ft,renderLeaf:Jt,decorate:ee.createHandler(t),readOnly:!0,autoCapitalize:"false",autoCorrect:"false",spellCheck:"false"})))},tn=({children:e,editor:t})=>{const n={instance:y.exports.useRef(null),lastSelectedText:y.exports.useRef("")},r=function(){const[e,t]=y.exports.useState("");return{instance:y.exports.useRef(null),input:y.exports.useRef(null),selection:y.exports.useRef(null),hadHref:y.exports.useRef(!1),href:e,setHref:t}}();return h.createElement(re.Provider,{value:t},h.createElement(Lt.Provider,{value:n},h.createElement(gt.Provider,{value:r},e)))};const nn=e=>{const t=c(l({},n=e),{customKeybinds:n.customKeybinds||{}});var n;const r=t.readOnly?h.createElement(en,l({},t)):h.createElement(Xt,l({},t));return h.createElement(tn,{editor:t.editor},r)},rn=E`
  /**
  * Nord Theme Originally by Arctic Ice Studio
  * https://nordtheme.com
  *
  * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
  */

  pre[data-language] {
    color: var(--nord-base-color);
    background: none;
    font-family: "Source Code Pro", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    line-height: 1.5;
    tab-size: 2;
    hyphens: none;

    word-break: normal;
    word-spacing: normal;
    white-space: pre;
    overflow-wrap: break-word;
  }

  pre[data-language] > div {
    display: block;
    position: relative;
    overflow-wrap: normal;
    white-space: pre;
  }

  /* Code blocks */
  pre[data-language] {
    padding: 1em;
    margin: .5em 0;
    overflow: auto;
    border-radius: 0.3em;
    background: var(--nord-base-background);
  }
  
  .token.comment,
  .token.shebang {
    font-style: italic;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata,
  .token.shebang {
    color: var(--nord-comment);
  }

  .token.punctuation {
    color: var(--nord-punctuation);
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted,
  .token.key {
    color: var(--nord-property);
  }

  .token.number {
    color: var(--nord-number);
  }

  .token.boolean {
    color: var(--nord-boolean);
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted,
  .token.directive {
    color: var(--nord-selector);
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable,
  .token.property-query {
    color: var(--nord-operator);
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: var(--nord-function);
  }

  .token.keyword,
  .token.table {
    color: var(--nord-keyword);
  }

  .token.regex,
  .token.important {
    color: var(--nord-regex);
  }

  .token.important,
  .token.bold {
    font-weight: bold;
  }

  .token.italic {
    font-style: italic;
  }

  .token.entity {
    cursor: help;
  }
`,on=E`
  :root {
    --nord-selector: #7f9f64;
    --nord-base-background: #ECEFF4;
    --nord-base-color: #2E3440;
    /* --nord-comment: #81A1C1; */
    --nord-comment: #a7a7a7;
    --nord-number: #B48EAD;
    --nord-function: #5E81AC;
    --nord-regex: #D08770;
    --nord-punctuation: #4C566A;
    --nord-property: #B48EAD;
    --nord-boolean: #BF616A;
    --nord-keyword: #81A1C1;
    --nord-operator: #4C566A;
  }
`;E`
  :root {
    --nord-selector: #A3BE8C;
    --nord-base-background: #2E3440;
    --nord-base-color: #f8f8f2;
    --nord-comment: #636f88;
    --nord-number: #B48EAD;
    --nord-function: #88C0D0;
    --nord-regex: #EBCB8B;
    --nord-punctuation: #81A1C1;
    --nord-property: #81A1C1;
    --nord-boolean: #81A1C1;
    --nord-keyword: #81A1C1;
    --nord-operator: #81A1C1;
  }
`;const an=()=>h.createElement(h.Fragment,null,h.createElement(rn,null),h.createElement(on,null));b.languages.plain={};const ln=()=>h.createElement(h.Fragment,null,h.createElement(Ut,null),h.createElement(xe,null),h.createElement(an,null)),cn=[{type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"c"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"code",children:[{type:"code-line",children:[{text:"const foo = 123;"}]},{type:"code-line",children:[{text:""}]},{type:"code-line",children:[{text:"const bar = 321;"}]}],language:"tsx"}];function sn(e,t=0,n=[]){for(const r of e)A.isText(r)||(n.push({name:r.type,offset:t}),sn(r.children,t+2,n));return n}function dn(e){const t=sn(e),n=[];for(const o of t){const e=" ".repeat(o.offset);n.push(e+o.name)}const r=n.join("\n");console.group("editor value changed"),console.log(r),console.groupEnd()}const un=()=>{const e=function(e=[]){return y.exports.useMemo((()=>{const t=[...dt,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(S(),t)}),[Ke])}(),[t,n]=function(){const[e,t]=y.exports.useState(cn);return y.exports.useEffect((()=>dn(e)),[e]),[e,t]}(),r=y.exports.useRef(t);return y.exports.useEffect((()=>{r.current=t}),[t]),y.exports.useEffect((()=>{window.getEditorValue=()=>t,console.log("To print current value of editor run `getEditorValue()`")}),[]),h.createElement(h.Fragment,null,h.createElement(ln,null),h.createElement(nn,{editor:e,value:t,onChange:n}))};B.render(h.createElement(un,null),document.querySelector("#root"));
