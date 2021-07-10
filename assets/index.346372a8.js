var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},l=(e,r)=>t(e,n(r)),s=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};import{T as d,E as u,R as p,P as m,a as f,b as h,N as g,c as b,r as x,d as y,u as v,e as k,f as w,$ as E,i as C,q as N,t as M,g as L,h as A,j as S,_ as T,S as B,k as z,w as D,l as O,m as P,n as R}from"./vendor.7dcc53c2.js";const I=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();function H(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return u.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=s(n,["match"]);return u.above(e,l(c({},o),{match:t=>!!u.isBlock(e,t)&&r(t)}))}function j(e){return p.isRange(e)?e.anchor:m.isPoint(e)?e:f.isPath(e)?{path:e,offset:0}:void 0}function F(e,t){if(!e.selection)return;const n=H(e,{type:"leaf"});if(!n)return;const[,r]=n,o=j(r);if(!o)return;const i=j(t.at||e.selection);if(!i)return;const a="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const c of a){let n=c.split(""),r=i,a=i,l=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const s=u.before(e,r);if(!s)continue e;if(u.string(e,{anchor:s,focus:r})!==i){if(t.failOnInvalid)continue e;n=c.split("")}if(a=s,n.length+1===c.length&&(l=r),r=s,n.length>0&&m.equals(r,o))continue e}return"start"===t.edge?a:l}}function q(e,t){return n=>{if(!u.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function Z(e,t){return e=>!u.isEditor(e)&&t.children.includes(e)}function G(e,t){const n=Array.isArray(t)?t:[t];return e=>n.some((t=>t===e))}function Y(e,t){return e=>t!==e}class K{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(q(this.editor,e)),this}notEquals(e){return this.stages.push(Y(this.editor,e)),this}equals(e){return this.stages.push(G(this.editor,e)),this}childOf(e){return this.stages.push(Z(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const U={builder:e=>new K(e),block:q,equals:G,notEquals:Y,childOf:Z};const $={getAbove:H,getPointFromLocation:j,getPointBefore:F,getRangeBefore:function(e,t){if(!e.selection)return;const n=F(e,l(c({},t),{edge:"start"}));if(!n)return;const r=j(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=H(e,{type:"block"});if(!t)return;const[,n]=t,r=u.start(e,n),o=j(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&p.isExpanded(e.selection)},leafHasTextModifications:function(e,t=["bold","italic","underlined","inlineCode"]){return t.some((t=>e[t]))},textModifications:function(e,t=["bold","italic","underlined","inlineCode"]){return t.filter((t=>e[t]))},isInBlock:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return!1;const o=u.path(e,r),[i]=u.node(e,o);if(U.block(e,t)(i))return!0;const a=H(e,{type:"block",match:U.block(e,t)});return Boolean(a)},isOnEdges:function(e,t={}){const n=()=>{const t=H(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const a=j(i);if(!a)return r;const[c,l]=u.edges(e,o);return[m.equals(a,c),m.equals(a,l)]}};const J={toggleTextModification:function(e,t){const n=u.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(d.select(e,r),!u.marks(e))return;e.addMark("href",t),d.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(d.select(e,n),!u.marks(e))return;e.removeMark("href"),d.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(p.isExpanded(e.selection))return{success:!1};const t=$.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=$.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,a=u.end(e,r),c=p.start(e.selection);return m.equals(c,a)&&$.leafHasTextModifications(o)?(d.insertNodes(e,{text:" "},{select:!1}),d.select(e,f.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;p.isExpanded(e.selection)&&d.delete(e,{at:e.selection});const t=$.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=$.isOnEdges(e,{of:n});if(!o)return r?(d.insertNodes(e,{type:"paragraph",children:[{text:""}]},{select:!1}),void d.select(e,u.point(e,f.next(n),{edge:"start"}))):void d.splitNodes(e,{mode:"highest"});d.insertNodes(e,{type:"paragraph",children:[{text:""}]},{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(p.isExpanded(e.selection))return void e.deleteFragment("backward");const t=$.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;u.isEmpty(e,n)?d.removeNodes(e,{at:r}):e.deleteBackward("character")}};I.register("delete-backward",(()=>{})),I.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),J.insertSoftBreak(e)})),I.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),J.insertExitBreak(e)})),I.register("indent",(({event:e})=>{e.preventDefault()})),I.register("outdent",(({event:e})=>{e.preventDefault()})),I.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=J.getOutTheLeaf(e);n&&t.preventDefault()})),I.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),J.toggleTextModification(e,"bold")})),I.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),J.toggleTextModification(e,"italic")})),I.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),J.toggleTextModification(e,"underlined")})),I.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),J.toggleTextModification(e,"inlineCode")})),I.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=u.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))})),I.register("copy",(()=>{})),I.register("copy-all",(()=>{})),I.register("paste",(()=>{})),I.register("exit-block",(()=>{}));const W=function(){const e=new Map;return{set:(t,n)=>{e.set(t,n)},get:t=>{const n=e.get(t);if(!n)throw new Error(`The value with key "${t}" should be present in registry, but it's not`);return n},maybeGet:t=>e.get(t),getAll:()=>Array.from(e.values())}}(),Q=["bold","italic","underlined","inlineCode"],X=(e=[{text:""}])=>({type:"paragraph",children:e});W.set("paragraph",{type:"paragraph",name:"Paragraph",code:"p",aliases:["paragraph","text"],allowedModifications:[...Q,"href"],allowedTransformations:["heading-1","heading-2","heading-3"],create:X});const _=" ".repeat(2);const V={insertExitBreak:function(e){const t={handled:!0};if(!e.selection)return t;p.isExpanded(e.selection)&&d.delete(e);const n=$.getAbove(e,{type:"block",match:U.block(e,"code-line")});if(!n)return{handled:!1};const[r,o]=n;let i=0;const a=u.string(e,o);for(const l of a){if(" "!==l)break;i+=1}const c=a[u.start(e,e.selection).offset-1];if("{"===c&&(i+=2),"("===c&&(i+=2),"<"===c&&(i+=2),":"===c&&(i+=2),d.splitNodes(e,{match:U.equals(e,r),always:!0}),d.select(e,f.next(o)),d.collapse(e,{edge:"start"}),i>0){const t=u.start(e,f.next(o));d.insertText(e," ".repeat(i),{at:t})}return t},indent:function(e){const t=u.nodes(e,{match:U.block(e,"code-line")});for(const[,n]of t){const t=u.start(e,n);d.insertText(e,_,{at:t})}},outdent:function(e){const t=u.nodes(e,{match:U.block(e,"code-line")});for(const[,n]of t){const t=u.start(e,n),[r]=u.node(e,t),o=g.string(r);let i=t.offset,a=0;for(const e of o){if(" "!==e)break;if(i+=1,a+=1,2===a)break}if(0===a)continue;const c={path:t.path,offset:i},l=u.range(e,t,c);d.delete(e,{at:l})}}};function ee({editor:e}){return $.isInBlock(e,"code")}I.override("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),V.insertExitBreak(e)}),{match:ee}),I.override("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),V.insertExitBreak(e)}),{match:ee}),I.override("copy-all",(({editor:e,event:t})=>{const n=$.getAbove(e,{type:"block",match:U.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),d.select(e,r)}),{match:ee}),I.override("indent",(({event:e,editor:t})=>{e.preventDefault(),V.indent(t)}),{match:ee}),I.override("outdent",(({event:e,editor:t})=>{e.preventDefault(),V.outdent(t)}),{match:ee}),I.override("exit-block",(({editor:e,event:t})=>{const n=$.getAbove(e,{type:"block",match:U.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),d.insertNodes(e,X(),{at:f.next(r),select:!0})}),{match:ee});const te=function(){const e=[];return{register:t=>{e.push(t)},createHandler:t=>n=>{for(const r of e){const e=r(t,n);if(0!==e.length)return e}return[]}}}();te.register(((e,t)=>{const[n,r]=t;if(!U.block(e,"code-line")(n))return[];const o=$.getAbove(e,{at:r,type:"block",match:U.block(e,"code")});if(!o)return[];const[i]=o,a=[],c=g.string(n),l=b.tokenize(c,b.languages[i.language]);let s=0;for(const d of l)"string"!=typeof d?(a.push({anchor:{path:r,offset:s},focus:{path:r,offset:s+d.length},prismToken:d.type}),s+=d.length):s+=d.length;return a}));const ne=(e=[{text:""}])=>({type:"code-line",children:e});W.set("code-line",{type:"code-line",name:"Code Line",code:"code-line",allowedModifications:["prismToken"],allowedTransformations:[],create:ne,canBeAdded:!1});const re=(e="tsx",t=[ne()])=>({type:"code",children:t,language:e});W.set("code",{type:"code",name:"Code",code:"code",aliases:["pre"],allowedModifications:["prismToken"],allowedTransformations:[],create:re});const oe=x.exports.createContext({});function ie(){return x.exports.useContext(oe)}function ae(){const e=ie(),t=x.exports.useRef(null);return x.exports.useLayoutEffect((()=>{t.current=y.toDOMNode(e,e)}),[e]),t}const ce=x.exports.createContext({}),le=ce.Provider;function se(){return x.exports.useContext(ce)}const de=({element:e,render:t})=>v()?null:h.createElement(ue,{element:e,render:t}),ue=({element:e,render:t})=>{const n=ie(),r=k(),o=n.selection&&p.isCollapsed(n.selection),i=r&&o,[a,c]=x.exports.useState(!1),l={element:e,meta:{empty:u.isEmpty(n,e)},active:a,setActive:c},s=w({controls:!0,visible:a||i});return h.createElement(le,{value:l},h.createElement("div",{className:s,contentEditable:!1},t()))},pe="editor editor-dark editor-toolbar",me="editor editor-dark editor-link-popup",fe="editor editor-dark editor-keybind",he="editor editor-light editor-block-menu",ge=E`
  .tippy-box[data-theme~='editor-dark'] {
    --text-color: #fff;
    --background-color: #333;
    --border-color: var(--background-color);
  }
`,be=E`
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
`,xe=E`
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
`,ve=()=>h.createElement(h.Fragment,null,h.createElement(be,null),h.createElement(ge,null),h.createElement(ye,null),h.createElement(xe,null)),ke=({svg:e,iconClassName:t,content:n,sections:r})=>{const{active:o,setActive:i}=se(),[a,c]=x.exports.useState(!1),l=()=>c(!1),s=w({"block-menu-icon":!0,[t]:!0,active:a});return h.createElement(C,{theme:he,interactive:!0,placement:"bottom-end",content:h.createElement(we,{active:o},h.createElement(n,{show:()=>c(!0),hide:l,sections:r})),visible:a,onShow:()=>i(!0),onHidden:()=>i(!1),onClickOutside:l},h.createElement("div",{className:s,onClick:()=>c((e=>!e))},h.createElement(e,null)))},we=({active:e,children:t})=>e?t:null,Ee=({children:e})=>h.createElement("div",{className:"block-menu-container"},e),Ce=({name:e,children:t})=>h.createElement("div",{className:"block-menu-section"},h.createElement("p",{className:"block-menu-list-name"},e),t),Ne=e=>{var t=e,{children:n}=t,r=s(t,["children"]);return h.createElement("ul",c({className:"block-menu-list"},r),n)},Me=e=>{var t=e,{name:n,detail:r,onClick:o}=t,i=s(t,["name","detail","onClick"]);return h.createElement("li",c({className:"block-menu-item",onClick:o},i),h.createElement("span",{className:"block-menu-item-name"},n),r&&h.createElement("span",{className:"block-menu-item-detail"},r))},Le=e=>h.createElement(ke,c({svg:Ae,iconClassName:"plus",content:Se},e)),Ae=e=>h.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),h.createElement("g",null,h.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),h.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),Se=({hide:e})=>{const t=ie(),n=ae(),{element:r}=se(),o=function(e){const t=ie();return y.findPath(t,e)}(r),i=x.exports.useMemo((()=>W.getAll().filter((e=>!1!==e.canBeAdded)).map((({type:r,name:i,code:a})=>h.createElement(Me,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;const a=W.get(r);d.removeNodes(t,{at:o}),d.insertNodes(t,a.create(),{at:o,select:!0}),e(),null==(i=n.current)||i.focus()})(r)})))),[]);return h.createElement("div",{className:"block-menu"},h.createElement(Ce,{name:"Select item type"},h.createElement(Ne,null,i)))};const Te=e=>h.createElement(ke,c({svg:Be,iconClassName:"arrow",content:ze},e)),Be=e=>h.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),h.createElement("g",null,h.createElement("polyline",{points:"6 9 12 15 18 9"}))),ze=e=>{const{sections:t=[]}=e;return h.createElement("div",{className:"block-menu"},h.createElement(De,c({},e)),t.map(((t,n)=>{const r=t;return h.createElement(r,c({key:n},e))})))},De=({hide:e})=>{const t=ie(),n=ae(),{element:r}=se(),o=function(e){const t=ie();return y.findPath(t,e)}(r),i=W.get(r.type),a=x.exports.useMemo((()=>i.allowedTransformations.map((r=>{const{name:i,code:a}=W.get(r);return h.createElement(Me,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;d.setNodes(t,{type:r},{at:o}),e(),null==(i=n.current)||i.focus()})(r)})}))),[i]);return 0===a.length?null:h.createElement(Ce,{name:"Select item type"},h.createElement(Ne,null,a))};const Oe=e=>{const{meta:t}=se(),n=t.empty?Le:Te;return h.createElement(n,c({},e))},Pe=[{grammarName:"plain",name:"Plain Text"},{grammarName:"javascript",name:"JavaScript"},{grammarName:"typescript",name:"TypeScript"},{grammarName:"jsx",name:"React JSX"},{grammarName:"tsx",name:"React TSX"},{grammarName:"rust",name:"Rust"},{grammarName:"xml",name:"HTML"},{grammarName:"json",name:"JSON"},{grammarName:"bash",name:"Bash"},{grammarName:"csharp",name:"C#"},{grammarName:"css",name:"CSS"},{grammarName:"cmake",name:"CMake"},{grammarName:"docker",name:"Docker"},{grammarName:"graphql",name:"GraphQL"},{grammarName:"xml",name:"XML"},{grammarName:"makefile",name:"Makefile"},{grammarName:"sql",name:"SQL"},{grammarName:"xml",name:"SVG"},{grammarName:"yaml",name:"YAML"},{grammarName:"python",name:"Python"}],Re=e=>{const{element:t}=se();return"code"!==t.type?null:h.createElement(Ie,c({},e))},Ie=({hide:e})=>{const t=ie(),{element:n}=se(),r=function(e){const t=ie();return y.findPath(t,e)}(n),o=x.exports.useRef(null),[i,a]=x.exports.useState(""),c=x.exports.useMemo((()=>Pe.filter((e=>e.name.toLowerCase().includes(i.toLowerCase())))),[i]);return x.exports.useEffect((()=>{o.current&&o.current.focus()}),[]),"code"!==n.type?null:h.createElement(Ce,{name:"Select code language"},h.createElement(Ee,null,h.createElement(He,null,h.createElement(je,null,Fe),h.createElement(qe,{ref:o,value:i,onChange:e=>a(e.target.value)}))),h.createElement(Ne,{style:{maxHeight:200,overflow:"auto"}},c.map((o=>{const i=o.grammarName===n.language;return h.createElement(Me,{key:o.name,name:o.name,onClick:()=>(n=>{d.setNodes(t,{language:n},{at:r}),e()})(o.grammarName),style:{color:i?"rgb(56, 132, 255)":""}})}))))},He=N.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e4ea;
  border-radius: 3px;

  &:focus-within {
    border-color: #6494e2;
  }
`,je=N.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;
  color: #b7c0ca;

  & svg {
    width: 16px;
    height: 16px;
  }
`,Fe=h.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"icon-7f6730be--text-3f89f380"},h.createElement("g",null,h.createElement("circle",{cx:"10.5",cy:"10.5",r:"7.5"}),h.createElement("line",{x1:"21",y1:"21",x2:"15.8",y2:"15.8"}))),qe=N.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  outline: none;
  color: #1a1a23;
`;function Ze(e){return U.block(e,["ordered-list","unordered-list"])}function Ge(e,t){return([n,r])=>{const[o,i]=$.isOnEdges(e,{of:r}),a=u.isEmpty(e,n),c=t.node.children;return{isFirst:c[0]===n,isLast:c[c.length-1]===n,isOnStart:o,isOnEnd:i,isEmpty:a,isList:Ze(e)(n)}}}function Ye(e){return U.block(e,"paragraph")}function Ke(e,t,n){const{first:r,second:o,third:i}=n;return([n])=>{const a=t.node.children.findIndex((e=>e===n));return{isSimple:!(!r||"paragraph"!==r.node.type||o&&(!Ze(e)(o.node)||i)),index:a,isFirst:0===a,isLast:a===t.node.children.length-1,isEmpty:1===n.children.length&&Ye(e)(n.children[0])&&u.isEmpty(e,n.children[0]),hasList:Ze(e)(n.children[1])}}}function Ue({editor:e,entry:t,list:n}){if(!t)return{item:null,blocks:null};const r=function(e,t){const n=[t.node,t.path];return{first:Je({entry:$e(n,0),createMeta:Ge(e,t)}),second:Je({entry:$e(n,1),createMeta:Ge(e,t)}),third:Je({entry:$e(n,2),createMeta:Ge(e,t)})}}(e,function(e){const[t,n]=e;return{node:t,path:n}}(t)),o=Je({entry:t,createMeta:Ke(e,n,r)});return o?{item:o,blocks:r}:{item:null,blocks:null}}function $e([e,t],n){if(e.children[n])return[e.children[n],t.concat(n)]}function Je({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[n,r]=e;return{node:n,path:r,meta:t([n,r])}}const We={info:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;const r=$.getAbove(e,{at:n,type:"block",mode:"lowest",match:Ze(e)});if(!r)return;const o=$.getAbove(e,{at:n,type:"block",mode:"lowest",match:U.builder(e).block(["ordered-list","unordered-list"]).notEquals(r[0]).compile()}),i=Je({entry:r,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const a=Je({entry:o,createMeta:()=>({})}),{item:s,blocks:d}=Ue({editor:e,entry:$.getAbove(e,{at:n,type:"block",mode:"lowest",match:U.block(e,"list-item")}),list:i});if(!s)return;if(!d)return;const p=Je({entry:$.getAbove(e,{at:n,type:"block",mode:"lowest",match:U.builder(e).block("list-item").notEquals(s.node).compile()}),createMeta:()=>({})}),m=Je({entry:$.getAbove(e,{at:n,type:"block",mode:"highest",match:U.childOf(e,s.node)}),createMeta:Ge(e,s)});if(!m)return;const f=U.builder(e).block("list-item").childOf(i.node).compile(),{item:h}=Ue({editor:e,entry:u.previous(e,{at:s.path,match:f}),list:i}),{item:g}=Ue({editor:e,entry:u.next(e,{at:s.path,match:f}),list:i}),b=U.builder(e).block().childOf(s.node).compile(),x=Je({entry:u.previous(e,{at:m.path,match:b}),createMeta:Ge(e,s)}),y=Je({entry:u.next(e,{at:m.path,match:b}),createMeta:Ge(e,s)});return{lists:{current:i,above:a},items:{current:s,previous:h,next:g,above:p},blocks:l(c({},d),{current:m,previous:x,next:y})}}};function Qe(e,t,n={}){const{at:r=[]}=n,o=u.nodes(e,{at:r,match:n=>!!u.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let a=null;const c=(e,t)=>{const n=f.next(e);return f.equals(n,t)};for(const l of i){if(!a){a=l;continue}const[,t]=l,[,n]=a;a=l,c(t,n)&&d.mergeNodes(e,{at:n})}}function Xe(e,t={}){Qe(e,"ordered-list",t),Qe(e,"unordered-list",t)}function _e(e,{parent:t,match:n=(()=>!0),to:r,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const a=u.pathRef(e,r),c=new Map;for(const[d,u]of t.node.children.entries())c.set(u,d);const l=t.node.children.filter(n),s=i(l.length);if(l.length>0){const r=U.block(e);if(s?d.removeNodes(e,{at:t.path}):d.removeNodes(e,{at:t.path,match(e){if(!r(e))return!1;const t=c.get(e);return"number"==typeof t&&n(e,t)}}),!a.current)return;d.insertNodes(e,o(l),{at:a.current})}}function Ve(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(p.isRange(n)&&p.isExpanded(n))return;const r=We.info(e,{at:n});if(r){if(!r.lists.above||!r.items.above)return function(e,t={},n){const{at:r=e.selection}=t;if(!r)return;d.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:U.equals(e,[n.lists.current.node,n.items.current.node])}),Xe(e)}(e,t,r);if(1!==r.lists.current.node.children.length){if(_e(e,{parent:r.lists.current,match:(e,t)=>t>r.items.current.meta.index,to:r.items.current.path.concat(r.items.current.node.children.length),transform:e=>({type:r.lists.current.node.type,children:e})}),Xe(e,{at:r.items.current.path}),r.items.current.meta.isFirst){const t=We.info(e,{at:n});if(!t)return;if(!t.items.above)return;d.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:U.equals(e,[t.lists.current.node,t.items.above.node])})}else d.moveNodes(e,{at:r.items.current.path,to:f.next(r.items.above.path)});Xe(e,{at:r.lists.above.path})}else d.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!r)return!1;const n=e===r.lists.current.node,o=e===(null==(t=r.items.above)?void 0:t.node);return n||o}})}}const et=(e=[{type:"paragraph",children:[{text:""}]}])=>({type:"list-item",children:e});W.set("list-item",{type:"list-item",name:"List Item",code:"li",aliases:["list-item"],canBeAdded:!1,allowedModifications:[...Q,"href"],allowedTransformations:[],create:et});const tt=(e=[et()])=>({type:"ordered-list",children:e});W.set("ordered-list",{type:"ordered-list",name:"Ordered List",code:"ol",aliases:["ordered-list"],allowedModifications:[...Q,"href"],allowedTransformations:["unordered-list"],create:tt});const nt=(e=[et()])=>({type:"unordered-list",children:e});W.set("unordered-list",{type:"unordered-list",name:"Unordered List",code:"ul",aliases:["unordered-list"],allowedModifications:[...Q,"href"],allowedTransformations:["ordered-list"],create:nt});const rt={"ordered-list":tt,"unordered-list":nt};const ot={insertExitBreak:function(e){var t;const n={handled:!0},r={handled:!1};if(!e.selection)return n;p.isExpanded(e.selection)&&d.delete(e);const o=We.info(e);if(!o)return n;if(!o.items.current.meta.isSimple)return r;if(o.blocks.current.meta.isEmpty)return Ve(e),n;if(!o.blocks.first)return n;const i={type:"list-item",children:[{type:"paragraph",children:[{text:""}]}]};return o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||d.insertNodes(e,i,{at:o.items.current.path}),n):o.blocks.first.meta.isOnEnd?(o.blocks.second?d.insertNodes(e,i,{at:o.blocks.second.path.concat(0),select:!0}):d.insertNodes(e,i,{at:f.next(o.items.current.path),select:!0}),n):(d.splitNodes(e,{match:U.equals(e,o.items.current.node),always:!0}),n)},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(p.isExpanded(e.selection))return t;const n=$.getAbove(e,{type:"block",mode:"lowest",match:U.block(e,"list-item")});if(!n)return t;const[,r]=n,[o]=$.isOnEdges(e,{of:r});return o?(Ve(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(p.isRange(n)&&p.isExpanded(n))return;const r=We.info(e,{at:n});if(!r)return;const{lists:o,items:i}=r;i.current.meta.isFirst||i.previous&&(d.wrapNodes(e,{type:o.current.node.type,children:[]},{at:i.current.path}),d.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),Xe(e,{at:i.previous.path}))},indentParagraph:function(e){if(!e.selection)return;if(p.isExpanded(e.selection))return;const t=$.getAbove(e,{type:"block",mode:"lowest",match:U.block(e,"paragraph")});if(!t)return;const[,n]=t;d.wrapNodes(e,et([]),{at:n});const r=(()=>{const t=u.previous(e,{at:n}),r=u.next(e,{at:n}),o=U.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();d.wrapNodes(e,((e,t=[et()])=>(0,rt[e])(t))(r,[]),{at:n}),Xe(e)},outdent:Ve,mergeSiblings:Xe,moveChildren:_e};function it({editor:e}){return $.isInBlock(e,["ordered-list","unordered-list"])}I.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=ot.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:it}),I.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:n}=ot.insertExitBreak(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:it}),I.override("indent",(({editor:e,event:t})=>{t.preventDefault(),ot.indent(e)}),{match:it}),I.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),ot.outdent(e)}),{match:it}),I.override("indent",(({editor:e,event:t})=>{t.preventDefault(),ot.indentParagraph(e)}),{match:function({editor:e}){return $.isInBlock(e,["ordered-list","unordered-list"])}});const at=E`
  /**
  * Nord Theme Originally by Arctic Ice Studio
  * https://nordtheme.com
  *
  * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
  */

  pre[data-language] {
    color: #f8f8f2;
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
    background: #2E3440;
  }

  .token.comment,
  .token.prolog,
  .token.doctype,
  .token.cdata {
    color: #636f88;
  }

  .token.punctuation {
    color: #81A1C1;
  }

  .namespace {
    opacity: .7;
  }

  .token.property,
  .token.tag,
  .token.constant,
  .token.symbol,
  .token.deleted {
    color: #81A1C1;
  }

  .token.number {
    color: #B48EAD;
  }

  .token.boolean {
    color: #81A1C1;
  }

  .token.selector,
  .token.attr-name,
  .token.string,
  .token.char,
  .token.builtin,
  .token.inserted {
    color: #A3BE8C;
  }

  .token.operator,
  .token.entity,
  .token.url,
  .language-css .token.string,
  .style .token.string,
  .token.variable {
    color: #81A1C1;
  }

  .token.atrule,
  .token.attr-value,
  .token.function,
  .token.class-name {
    color: #88C0D0;
  }

  .token.keyword {
    color: #81A1C1;
  }

  .token.regex,
  .token.important {
    color: #EBCB8B;
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
`,ct=()=>h.createElement(h.Fragment,null,h.createElement(at,null));b.languages.plain={};const lt="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",st=()=>new KeyboardEvent("noop");function dt(){const[,e]=x.exports.useReducer((e=>e+1),0);return e}const ut=x.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function pt(){return x.exports.useContext(ut)}function mt(){const e=pt(),t=dt();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const ft=N.div`
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
`,ht=N.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,gt=N(ht)``,bt=N(ht)`
  cursor: pointer;
`,xt=N.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,yt=N.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const vt=()=>"undefined"==typeof window?null:h.createElement(kt,null),kt=()=>{const e=ie(),t=ae(),n=x.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:a,setHref:c,hadHref:l}=pt(),{reset:s}=mt(),[d,u]=x.exports.useState(!1),[p,m]=x.exports.useState(null),f=e=>{if(m(null),e)return function(e){const t=new RegExp(lt,"i");return e.length<2083&&t.test(e)}(e)?void u(!0):(u(!1),void m("It doesn't look like an URL"));u(!1)};return x.exports.useEffect((()=>{f(a)}),[a]),x.exports.useEffect((()=>{if(t.current)return r.current=M(t.current,{theme:me,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>s()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),L.createPortal(h.createElement("form",{onSubmit:n=>{var o,c;n.preventDefault(),d&&i.current&&(J.setHref(e,a,{at:i.current}),null==(o=r.current)||o.hide(),null==(c=t.current)||c.focus())}},h.createElement(ft,null,h.createElement(gt,null,h.createElement(wt,null)),h.createElement(xt,{ref:o,value:a,onChange:e=>{c(e.target.value)},placeholder:"Enter the URL"}),l.current&&h.createElement(bt,{onClick:()=>{var n,o;i.current&&(J.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},h.createElement(Et,null))),p&&h.createElement(yt,null,p)),n)},wt=e=>h.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),h.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),h.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),h.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),Et=e=>h.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),h.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}));const Ct=x.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function Nt(){return x.exports.useContext(Ct)}function Mt(){const e=Nt(),t=dt();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const Lt=e=>"undefined"==typeof window?null:h.createElement(At,c({},e)),At=({renderButtons:e})=>{const t=ae(),n=function(){const e=x.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return x.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=Nt(),i=(a=dt(),c=300,x.exports.useMemo((()=>A(a,c)),[a,c]));var a,c;return x.exports.useEffect((()=>{if(!t.current)return;r.current=M(t.current,{theme:pe,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=S((()=>{r.current&&(i(),r.current.show())}),300),a=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},c=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return a();const n=window.getSelection();if(!n)return a();if(n.isCollapsed)return o.current="",a();const c=n.getRangeAt(0).toString();if(c===o.current)return i();a(!1),e(),o.current=c};return document.addEventListener("selectionchange",c),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",c)}}),[n,t]),L.createPortal(e(),n)};function St(){return{toolbar:Mt(),linkPopup:mt()}}const Tt=({editor:e,event:t})=>{if(!e.selection)return;if(p.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(lt).test(n)&&(t.preventDefault(),J.setHref(e,n))};function Bt(){return{handlePaste:function(e,t=[]){return n=>{const r=c({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:ie(),ui:St()},[Tt])}}const zt=N.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,Dt=N.button`
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

  &:hover ${zt} {
    color: white;
  }

  &[data-active='true'] ${zt} {
    color: white;
  }
`,Ot=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,a=s(t,["icon","isActive","tooltip","style"]);const l=h.createElement(Dt,c({"data-active":r},a),h.createElement(zt,{style:i},n));return o?h.createElement(C,{theme:fe,content:o,offset:[0,20],hideOnClick:!1},l):l};const Pt=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=ie(),a=function(e,t){const n=u.marks(e);return!!n&&Boolean(n[t])}(i,e),c=St();return h.createElement(Ot,{icon:t,isActive:a,tooltip:r,onClick:e=>{e.preventDefault(),I.execute(n,{editor:i,event:st(),ui:c})},style:o})};W.set("heading-1",{type:"heading-1",name:"Heading-1",code:"h1",aliases:["heading-1","title"],allowedModifications:[],allowedTransformations:["heading-2","heading-3","paragraph"],create:(e=[{text:""}])=>({type:"heading-1",children:e})});W.set("heading-2",{type:"heading-2",name:"Heading-2",code:"h2",aliases:["heading-2","title"],allowedModifications:[],allowedTransformations:["heading-1","heading-3","paragraph"],create:(e=[{text:""}])=>({type:"heading-2",children:e})});W.set("heading-3",{type:"heading-3",name:"Heading-3",code:"h3",aliases:["heading-3","title"],allowedModifications:[],allowedTransformations:["heading-1","heading-2","paragraph"],create:(e=[{text:""}])=>({type:"heading-3",children:e})});const Rt={paragraph:({attributes:e,children:t})=>h.createElement("p",c({},e),t),"heading-1":({attributes:e,children:t})=>h.createElement("h1",c({},e),t),"heading-2":({attributes:e,children:t})=>h.createElement("h2",c({},e),t),"heading-3":({attributes:e,children:t})=>h.createElement("h3",c({},e),t),"ordered-list":({attributes:e,children:t})=>h.createElement("ol",c({},e),t),"unordered-list":({attributes:e,children:t})=>h.createElement("ul",c({},e),t),"list-item":({attributes:e,children:t})=>h.createElement("li",c({},e),t),code:({element:e,attributes:t,children:n})=>"code"!==e.type?h.createElement(h.Fragment,null):h.createElement("pre",c({"data-language":e.language,spellCheck:!1},t),n),"code-line":({attributes:e,children:t})=>h.createElement("div",c({},e),t)};function It(e){var t=e,{children:n}=t,r=s(t,["children"]);return h.createElement(Ht,c({},r),n)}const Ht=e=>{const{element:t}=e,n=Rt[t.type],r=function(e){const t=ie();return y.findPath(t,e)}(t).length>1,o=h.createElement(n,c({},e));return"code-line"===t.type?o:r?h.createElement("div",{className:"element-container"},h.createElement("div",{className:"content"},h.createElement(Ft,{position:"top"}),o,h.createElement(Ft,{position:"bottom"}))):h.createElement(jt,{element:t},o)},jt=({element:e,children:t})=>{const n=v(),r=w({"element-container":!0,"first-level":!0,"read-only":n});return h.createElement("div",{className:r},h.createElement(de,{element:e,render:()=>h.createElement(Oe,{sections:[Re]})}),h.createElement("div",{className:"content"},h.createElement(Ft,{position:"top"}),t,h.createElement(Ft,{position:"bottom"})))},Ft=({position:e,children:t})=>{const n=w({"element-area":!0,["element-area-"+e]:!0});return h.createElement("div",{contentEditable:!1,className:n},t)},qt={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const Zt=e=>function({leaf:e,children:t,attributes:n}){if(function(e){var t;const n=null==e?void 0:e.props;return 0===(null==n?void 0:n.text.text.length)&&"code-line"===(null==(t=null==n?void 0:n.parent)?void 0:t.type)}(t))return h.createElement("span",{"data-slate-leaf":"true"},h.createElement("span",{"data-slate-zero-width":"z","data-slate-length":0},"\ufeff"));if(e.prismToken)return h.createElement("span",c({className:`token ${e.prismToken}`},n),t);const r=$.textModifications(e);let o=t;for(const i of r){const e=qt[i];o=h.createElement(e,null,o)}return e.href&&(o=h.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=h.createElement("span",null,o)),h.cloneElement(o,n)}(e);function Gt(e){var t=e,{children:n}=t,r=s(t,["children"]);return h.createElement(Zt,c({},r),n)}const Yt=E`
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
`,Kt=N.div`
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
`,Ut={};const $t=function({scope:e="global",stopAllEvents:t=!0}={}){Ut[e]||(Ut[e]=[]);const n=Ut[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:T(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"}),Jt={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":"enter",indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k",copy:"mod+c","copy-all":"mod+a",paste:"mod+v","exit-block":"mod+enter"};const Wt=({value:e,onChange:t,customKeybinds:n})=>{const r=ie(),{handleKeyDown:o}=function(e){const t=ie(),n=St();return x.exports.useEffect((()=>{const t=c(c({},Jt),e);$t.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)$t.register(o,((t,r)=>{I.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:x.exports.useCallback((e=>{$t.keyDown(e,t)}),[t])}}(n),{handlePaste:i}=Bt();return x.exports.useEffect((()=>{e.length>0||t([X()])}),[e]),h.createElement(Kt,null,h.createElement(B,{editor:r,value:e,onChange:t},h.createElement(z,{renderElement:It,renderLeaf:Gt,onKeyDown:o,onPaste:i,decorate:te.createHandler(r),readOnly:!1,autoFocus:!0})),h.createElement(Qt,null),h.createElement(vt,null))},Qt=()=>h.createElement(Lt,{renderButtons:()=>h.createElement(h.Fragment,null,h.createElement(Pt,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),h.createElement(Pt,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),h.createElement(Pt,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),h.createElement(Pt,{mark:"inlineCode",icon:h.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},h.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),h.createElement("polyline",{points:"7 8 3 12 7 16"}),h.createElement("polyline",{points:"17 8 21 12 17 16"}),h.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),h.createElement(Pt,{mark:"href",icon:h.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},h.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),h.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),h.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),Xt=({value:e})=>{const t=ie();return h.createElement(Kt,null,h.createElement(B,{editor:t,value:e,onChange:()=>{}},h.createElement(z,{renderElement:It,renderLeaf:Gt,decorate:te.createHandler(t),readOnly:!0})))};function _t({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=$.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=u.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=$.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function Vt({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,a=function({editor:e,entry:t,range:n}){const r=u.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof a)return;d.delete(e,{at:n});const c=$.getAbove(e,{type:"block"}),l=$.getAbove(e,{type:"leaf"});if(!c)return;if(!l)return;const[s]=c,[p]=l,m="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});if(d.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=$.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;d.delete(e,{at:n,unit:"block"})}}u.insertNode(e,a)}({editor:e,entry:t,range:n,text:a,block:s,leaf:p}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});d.delete(e,{at:n}),d.insertNodes(e,a,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:a,block:s,leaf:p});return i&&("leaf"===t.transformType?J.getOutTheLeaf(e):r(o)),m}function en({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const a=$.getAbove(t,{type:"block"}),c=$.getAbove(t,{type:"leaf"});if(!a)return{match:!1};if(!c)return{match:!1};const[l]=a,[s]=c;if(i({block:l,leaf:s}))return{match:!1};let d;return d="after"===n.markupType?_t({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=$.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=u.before(e,o);if(!i)return{match:!1};const a=$.getPointBefore(e,{at:i,edge:"start",matchString:n});return a?{match:!0,range:{anchor:a,focus:o}}:{match:!1}}({editor:t,entry:n}),d.match&&Vt({editor:t,entry:n,range:d.range,insertText:r}),d}const tn={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if($.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=en({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,n=U.block(e,["ordered-list","unordered-list"]),r=U.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return r(o),n(o),t(e)},e}};const nn=[D,O,tn.listNormalization,tn.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(P.isText);return 0===t.length?nt():nt([et([X(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(P.isText);return 0===t.length?tt():tt([et([X(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["```"],onlyOnBlockStart:!0,transformType:"block",transform:()=>re()}])];const rn=({children:e,customExtensions:t=[]})=>{const n=function(e){return x.exports.useMemo((()=>{const t=[...nn,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(R(),t)}),[tn])}(t),r={instance:x.exports.useRef(null),lastSelectedText:x.exports.useRef("")},o=function(){const[e,t]=x.exports.useState("");return{instance:x.exports.useRef(null),input:x.exports.useRef(null),selection:x.exports.useRef(null),hadHref:x.exports.useRef(!1),href:e,setHref:t}}();return h.createElement(oe.Provider,{value:n},h.createElement(Ct.Provider,{value:r},h.createElement(ut.Provider,{value:o},e)))};const on=e=>{const t=l(c({},n=e),{customKeybinds:n.customKeybinds||{},customExtensions:n.customExtensions||[]});var n;const r=t.readOnly?h.createElement(Xt,c({},t)):h.createElement(Wt,c({},t));return h.createElement(rn,{customExtensions:t.customExtensions},h.createElement(ve,null),h.createElement(ct,null),h.createElement(Yt,null),r)},an=[{type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"c"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"code",children:[{type:"code-line",children:[{text:"const foo = 123;"}]},{type:"code-line",children:[{text:""}]},{type:"code-line",children:[{text:"const bar = 321;"}]}],language:"tsx"}];function cn(e,t=0,n=[]){for(const r of e)P.isText(r)||(n.push({name:r.type,offset:t}),cn(r.children,t+2,n));return n}function ln(e){const t=cn(e),n=[];for(const o of t){const e=" ".repeat(o.offset);n.push(e+o.name)}const r=n.join("\n");console.log(r)}const sn=()=>{const[e,t]=function(){const[e,t]=x.exports.useState(an);return x.exports.useEffect((()=>ln(e)),[e]),[e,t]}();return h.createElement(on,{value:e,onChange:t})};L.render(h.createElement(sn,null),document.querySelector("#root"));
