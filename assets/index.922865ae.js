var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},l=(e,r)=>t(e,n(r)),s=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};import{R as d,T as u,E as p,a as m,P as f,b as h,r as g,c as b,$ as y,q as x,t as v,d as k,e as w,j as E,i as C,N,f as M,u as L,g as A,h as S,_ as B,S as T,k as z,w as D,l as O,m as R,n as P}from"./vendor.0b6bc6c6.js";const I=function(){const e=[];return{register:t=>{e.push(t)},createHandler:t=>n=>{for(const r of e){const e=r(t,n);if(0!==e.length)return e}return[]}}}(),H=(e=[{text:""}])=>({type:"code-line",children:e}),j={type:"code-line",name:"Code Line",code:"code-line",allowedModifications:[],allowedTransformations:[],create:H,canBeAdded:!1},F=(e="tsx",t=[H()])=>({type:"code",children:t,language:e}),q={type:"code",name:"Code",code:"code",aliases:["pre"],allowedModifications:[],allowedTransformations:[],create:F},Z={type:"heading-1",name:"Heading-1",code:"h1",aliases:["heading-1","title"],allowedModifications:[],allowedTransformations:["heading-2","heading-3","paragraph"],create:(e=[{text:""}])=>({type:"heading-1",children:e})},Y=["bold","italic","underlined","inlineCode"],G=(e=[{text:""}])=>({type:"paragraph",children:e}),K={type:"paragraph",name:"Paragraph",code:"p",aliases:["paragraph","text"],allowedModifications:Array.from(Y),allowedTransformations:["heading-1"],create:G},U=(e=[G()])=>({type:"list-item",children:e}),J={type:"list-item",name:"List Item",code:"li",aliases:["list-item"],canBeAdded:!1,allowedModifications:Array.from(Y),allowedTransformations:[],create:U},W=(e=[U()])=>({type:"ordered-list",children:e}),$={type:"ordered-list",name:"Ordered List",code:"ol",aliases:["ordered-list"],allowedModifications:Array.from(Y),allowedTransformations:["unordered-list"],create:W},Q=(e=[U()])=>({type:"unordered-list",children:e}),X={type:"unordered-list",name:"Unordered List",code:"ul",aliases:["unordered-list"],allowedModifications:Array.from(Y),allowedTransformations:["ordered-list"],create:Q},_={"ordered-list":W,"unordered-list":Q},V=(e,t=[U()])=>(0,_[e])(t),ee=G;function te(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return p.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=s(n,["match"]);return p.above(e,l(c({},o),{match:t=>!!p.isBlock(e,t)&&r(t)}))}function ne(e){return m.isRange(e)?e.anchor:f.isPoint(e)?e:h.isPath(e)?{path:e,offset:0}:void 0}function re(e,t){if(!e.selection)return;const n=te(e,{type:"leaf"});if(!n)return;const[,r]=n,o=ne(r);if(!o)return;const i=ne(t.at||e.selection);if(!i)return;const a="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const c of a){let n=c.split(""),r=i,a=i,l=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const s=p.before(e,r);if(!s)continue e;if(p.string(e,{anchor:s,focus:r})!==i){if(t.failOnInvalid)continue e;n=c.split("")}if(a=s,n.length+1===c.length&&(l=r),r=s,n.length>0&&f.equals(r,o))continue e}return"start"===t.edge?a:l}}function oe(e,t){return n=>{if(!p.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function ie(e,t){return e=>!p.isEditor(e)&&t.children.includes(e)}function ae(e,t){const n=Array.isArray(t)?t:[t];return e=>n.some((t=>t===e))}function ce(e,t){return e=>t!==e}class le{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(oe(this.editor,e)),this}notEquals(e){return this.stages.push(ce(this.editor,e)),this}equals(e){return this.stages.push(ae(this.editor,e)),this}childOf(e){return this.stages.push(ie(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const se={builder:e=>new le(e),block:oe,equals:ae,notEquals:ce,childOf:ie};const de={getAbove:te,getPointFromLocation:ne,getPointBefore:re,getRangeBefore:function(e,t){if(!e.selection)return;const n=re(e,l(c({},t),{edge:"start"}));if(!n)return;const r=ne(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=te(e,{type:"block"});if(!t)return;const[,n]=t,r=p.start(e,n),o=ne(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&m.isExpanded(e.selection)},leafHasModifications:function(e,t=Y){return t.some((t=>e[t]))},leafModifications:function(e,t=Y){return t.filter((t=>e[t]))},isInBlock:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return!1;const o=p.path(e,r),[i]=p.node(e,o);if(se.block(e,t)(i))return!0;const a=te(e,{type:"block",match:se.block(e,t)});return Boolean(a)},isOnEdges:function(e,t={}){const n=()=>{const t=te(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const a=ne(i);if(!a)return r;const[c,l]=p.edges(e,o);return[f.equals(a,c),f.equals(a,l)]}};const ue={toggleModification:function(e,t){const n=p.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(u.select(e,r),!p.marks(e))return;e.addMark("href",t),u.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(u.select(e,n),!p.marks(e))return;e.removeMark("href"),u.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(m.isExpanded(e.selection))return{success:!1};const t=de.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=de.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,a=p.end(e,r),c=m.start(e.selection);return f.equals(c,a)&&de.leafHasModifications(o)?(u.insertNodes(e,function({text:e,href:t,modifications:n=[]}){return n.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!1}),u.select(e,h.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;m.isExpanded(e.selection)&&u.delete(e,{at:e.selection});const t=de.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=de.isOnEdges(e,{of:n});if(!o)return r?(u.insertNodes(e,ee(),{select:!1}),void u.select(e,p.point(e,h.next(n),{edge:"start"}))):void u.splitNodes(e,{mode:"highest"});u.insertNodes(e,ee(),{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(m.isExpanded(e.selection))return void e.deleteFragment("backward");const t=de.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;p.isEmpty(e,n)?u.removeNodes(e,{at:r}):e.deleteBackward("character")}},pe=g.exports.createContext({});function me(){return g.exports.useContext(pe)}function fe(){const e=me(),t=g.exports.useRef(null);return g.exports.useLayoutEffect((()=>{t.current=b.toDOMNode(e,e)}),[e]),t}const he="editor editor-dark editor-toolbar",ge="editor editor-dark editor-link-popup",be="editor editor-dark editor-keybind",ye="editor editor-light editor-block-menu",xe=y`
  .tippy-box[data-theme~='editor-dark'] {
    --text-color: #fff;
    --background-color: #333;
    --border-color: var(--background-color);
  }
`,ve=y`
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
`,ke=y`
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
`,we=y`
  .tippy-box[data-theme~='editor-light'] {
    --text-color: #1A1A23;
    --background-color: #fff;
    --border-color: #e4e4ea;

    box-shadow: 0px 2px 3px #F2F3F5;
  }
`,Ee=()=>d.createElement(d.Fragment,null,d.createElement(ve,null),d.createElement(xe,null),d.createElement(we,null),d.createElement(ke,null)),Ce="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",Ne=()=>new KeyboardEvent("noop");function Me(){const[,e]=g.exports.useReducer((e=>e+1),0);return e}const Le=g.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function Ae(){return g.exports.useContext(Le)}function Se(){const e=Ae(),t=Me();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const Be=x.div`
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
`,Te=x.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,ze=x(Te)``,De=x(Te)`
  cursor: pointer;
`,Oe=x.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,Re=x.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Pe=()=>"undefined"==typeof window?null:d.createElement(Ie,null),Ie=()=>{const e=me(),t=fe(),n=g.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:a,setHref:c,hadHref:l}=Ae(),{reset:s}=Se(),[u,p]=g.exports.useState(!1),[m,f]=g.exports.useState(null),h=e=>{if(f(null),e)return function(e){const t=new RegExp(Ce,"i");return e.length<2083&&t.test(e)}(e)?void p(!0):(p(!1),void f("It doesn't look like an URL"));p(!1)};return g.exports.useEffect((()=>{h(a)}),[a]),g.exports.useEffect((()=>{if(t.current)return r.current=v(t.current,{theme:ge,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>s()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),k.createPortal(d.createElement("form",{onSubmit:n=>{var o,c;n.preventDefault(),u&&i.current&&(ue.setHref(e,a,{at:i.current}),null==(o=r.current)||o.hide(),null==(c=t.current)||c.focus())}},d.createElement(Be,null,d.createElement(ze,null,d.createElement(He,null)),d.createElement(Oe,{ref:o,value:a,onChange:e=>{c(e.target.value)},placeholder:"Enter the URL"}),l.current&&d.createElement(De,{onClick:()=>{var n,o;i.current&&(ue.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},d.createElement(je,null))),m&&d.createElement(Re,null,m)),n)},He=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),je=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"}));const Fe=g.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function qe(){return g.exports.useContext(Fe)}function Ze(){const e=qe(),t=Me();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const Ye=e=>"undefined"==typeof window?null:d.createElement(Ge,c({},e)),Ge=({renderButtons:e})=>{const t=fe(),n=function(){const e=g.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return g.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=qe(),i=(a=Me(),c=300,g.exports.useMemo((()=>w(a,c)),[a,c]));var a,c;return g.exports.useEffect((()=>{if(!t.current)return;r.current=v(t.current,{theme:he,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=E((()=>{r.current&&(i(),r.current.show())}),300),a=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},c=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return a();const n=window.getSelection();if(!n)return a();if(n.isCollapsed)return o.current="",a();const c=n.getRangeAt(0).toString();if(c===o.current)return i();a(!1),e(),o.current=c};return document.addEventListener("selectionchange",c),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",c)}}),[n,t]),k.createPortal(e(),n)};function Ke(){return{toolbar:Ze(),linkPopup:Se()}}const Ue=({editor:e,event:t})=>{if(!e.selection)return;if(m.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(Ce).test(n)&&(t.preventDefault(),ue.setHref(e,n))};function Je(){return{handlePaste:function(e,t=[]){return n=>{const r=c({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:me(),ui:Ke()},[Ue])}}const We=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();We.register("delete-backward",(()=>{})),We.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),ue.insertSoftBreak(e)})),We.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),ue.insertExitBreak(e)})),We.register("indent",(({event:e})=>{e.preventDefault()})),We.register("outdent",(({event:e})=>{e.preventDefault()})),We.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=ue.getOutTheLeaf(e);n&&t.preventDefault()})),We.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),ue.toggleModification(e,"bold")})),We.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),ue.toggleModification(e,"italic")})),We.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),ue.toggleModification(e,"underlined")})),We.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),ue.toggleModification(e,"inlineCode")})),We.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=p.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))})),We.register("copy",(()=>{})),We.register("copy-all",(()=>{})),We.register("paste",(()=>{})),We.register("exit-block",(()=>{}));const $e=x.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,Qe=x.button`
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

  &:hover ${$e} {
    color: white;
  }

  &[data-active='true'] ${$e} {
    color: white;
  }
`,Xe=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,a=s(t,["icon","isActive","tooltip","style"]);const l=d.createElement(Qe,c({"data-active":r},a),d.createElement($e,{style:i},n));return o?d.createElement(C,{theme:be,content:o,offset:[0,20],hideOnClick:!1},l):l};const _e=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=me(),a=function(e,t){const n=p.marks(e);return!!n&&Boolean(n[t])}(i,e),c=Ke();return d.createElement(Xe,{icon:t,isActive:a,tooltip:r,onClick:e=>{e.preventDefault(),We.execute(n,{editor:i,event:Ne(),ui:c})},style:o})},Ve={type:"heading-2",name:"Heading-2",code:"h2",aliases:["heading-2","title"],allowedModifications:[],allowedTransformations:["heading-1","heading-3","paragraph"],create:(e=[{text:""}])=>({type:"heading-2",children:e})},et={type:"heading-3",name:"Heading-3",code:"h3",aliases:["heading-3","title"],allowedModifications:[],allowedTransformations:["heading-1","heading-2","paragraph"],create:(e=[{text:""}])=>({type:"heading-3",children:e})},tt=" ".repeat(2);const nt={insertExitBreak:function(e){const t={handled:!0};if(!e.selection)return t;m.isExpanded(e.selection)&&u.delete(e);const n=de.getAbove(e,{type:"block",match:se.block(e,"code-line")});if(!n)return{handled:!1};const[r,o]=n;let i=0;const a=p.string(e,o);for(const l of a){if(" "!==l)break;i+=1}const c=a[p.start(e,e.selection).offset-1];if("{"===c&&(i+=2),"("===c&&(i+=2),"<"===c&&(i+=2),":"===c&&(i+=2),u.splitNodes(e,{match:se.equals(e,r),always:!0}),u.select(e,h.next(o)),u.collapse(e,{edge:"start"}),i>0){const t=p.start(e,h.next(o));u.insertText(e," ".repeat(i),{at:t})}return t},indent:function(e){const t=p.nodes(e,{match:se.block(e,"code-line")});for(const[,n]of t){const t=p.start(e,n);u.insertText(e,tt,{at:t})}},outdent:function(e){const t=p.nodes(e,{match:se.block(e,"code-line")});for(const[,n]of t){const t=p.start(e,n),[r]=p.node(e,t),o=N.string(r);let i=t.offset,a=0;for(const e of o){if(" "!==e)break;if(i+=1,a+=1,2===a)break}if(0===a)continue;const c={path:t.path,offset:i},l=p.range(e,t,c);u.delete(e,{at:l})}}};function rt({editor:e}){return de.isInBlock(e,"code")}We.override("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),nt.insertExitBreak(e)}),{match:rt}),We.override("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),nt.insertExitBreak(e)}),{match:rt}),We.override("copy-all",(({editor:e,event:t})=>{const n=de.getAbove(e,{type:"block",match:se.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),u.select(e,r)}),{match:rt}),We.override("indent",(({event:e,editor:t})=>{e.preventDefault(),nt.indent(t)}),{match:rt}),We.override("outdent",(({event:e,editor:t})=>{e.preventDefault(),nt.outdent(t)}),{match:rt}),We.override("exit-block",(({editor:e,event:t})=>{const n=de.getAbove(e,{type:"block",match:se.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),u.insertNodes(e,ee(),{at:h.next(r),select:!0})}),{match:rt});I.register(((e,t)=>{const[n,r]=t;if(!se.block(e,"code-line")(n))return[];const o=de.getAbove(e,{at:r,type:"block",match:se.block(e,"code")});if(!o)return[];const[i]=o,a=[],c=N.string(n),l=M.tokenize(c,M.languages[i.language]);let s=0;for(const d of l)"string"!=typeof d?(a.push({anchor:{path:r,offset:s},focus:{path:r,offset:s+d.length},prismToken:d.type}),s+=d.length):s+=d.length;return a}));const ot=g.exports.createContext({}),it=ot.Provider;function at(){return g.exports.useContext(ot)}const ct=({element:e,render:t})=>L()?null:d.createElement(lt,{element:e,render:t}),lt=({element:e,render:t})=>{const n=me(),r=A(),o=n.selection&&m.isCollapsed(n.selection),i=r&&o,[a,c]=g.exports.useState(!1),l={element:e,meta:{empty:p.isEmpty(n,e)},active:a,setActive:c},s=S({controls:!0,visible:a||i});return d.createElement(it,{value:l},d.createElement("div",{className:s,contentEditable:!1},t()))},st={paragraph:K,"heading-1":Z,"heading-2":Ve,"heading-3":et,"ordered-list":$,"unordered-list":X,"list-item":J,code:q,"code-line":j},dt=({svg:e,iconClassName:t,content:n,sections:r})=>{const{active:o,setActive:i}=at(),[a,c]=g.exports.useState(!1),l=()=>c(!1),s=S({"block-menu-icon":!0,[t]:!0,active:a});return d.createElement(C,{theme:ye,interactive:!0,placement:"bottom-end",content:d.createElement(ut,{active:o},d.createElement(n,{show:()=>c(!0),hide:l,sections:r})),visible:a,onShow:()=>i(!0),onHidden:()=>i(!1),onClickOutside:l},d.createElement("div",{className:s,onClick:()=>c((e=>!e))},d.createElement(e,null)))},ut=({active:e,children:t})=>e?t:null,pt=({children:e})=>d.createElement("div",{className:"block-menu-container"},e),mt=({name:e,children:t})=>d.createElement("div",{className:"block-menu-section"},d.createElement("p",{className:"block-menu-list-name"},e),t),ft=e=>{var t=e,{children:n}=t,r=s(t,["children"]);return d.createElement("ul",c({className:"block-menu-list"},r),n)},ht=e=>{var t=e,{name:n,detail:r,onClick:o}=t,i=s(t,["name","detail","onClick"]);return d.createElement("li",c({className:"block-menu-item",onClick:o},i),d.createElement("span",{className:"block-menu-item-name"},n),r&&d.createElement("span",{className:"block-menu-item-detail"},r))},gt=e=>d.createElement(dt,c({svg:bt,iconClassName:"plus",content:yt},e)),bt=e=>d.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),d.createElement("g",null,d.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),yt=({hide:e})=>{const t=me(),n=fe(),{element:r}=at(),o=function(e){const t=me();return b.findPath(t,e)}(r),i=g.exports.useMemo((()=>Object.values(st).filter((e=>!1!==e.canBeAdded)).map((({type:r,name:i,code:a})=>d.createElement(ht,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;const a=st[r];u.removeNodes(t,{at:o}),u.insertNodes(t,a.create(),{at:o,select:!0}),e(),null==(i=n.current)||i.focus()})(r)})))),[]);return d.createElement("div",{className:"block-menu"},d.createElement(mt,{name:"Select item type"},d.createElement(ft,null,i)))};const xt=e=>d.createElement(dt,c({svg:vt,iconClassName:"arrow",content:kt},e)),vt=e=>d.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),d.createElement("g",null,d.createElement("polyline",{points:"6 9 12 15 18 9"}))),kt=e=>{const{sections:t=[]}=e;return d.createElement("div",{className:"block-menu"},d.createElement(wt,c({},e)),t.map(((t,n)=>{const r=t;return d.createElement(r,c({key:n},e))})))},wt=({hide:e})=>{const t=me(),n=fe(),{element:r}=at(),o=function(e){const t=me();return b.findPath(t,e)}(r),i=st[r.type],a=g.exports.useMemo((()=>i.allowedTransformations.map((r=>{const{name:i,code:a}=st[r];return d.createElement(ht,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;u.setNodes(t,{type:r},{at:o}),e(),null==(i=n.current)||i.focus()})(r)})}))),[i]);return 0===a.length?null:d.createElement(mt,{name:"Select item type"},d.createElement(ft,null,a))};const Et=e=>{const{meta:t}=at(),n=t.empty?gt:xt;return d.createElement(n,c({},e))},Ct=[{grammarName:"plain",name:"Plain Text"},{grammarName:"javascript",name:"JavaScript"},{grammarName:"typescript",name:"TypeScript"},{grammarName:"jsx",name:"React JSX"},{grammarName:"tsx",name:"React TSX"},{grammarName:"rust",name:"Rust"},{grammarName:"xml",name:"HTML"},{grammarName:"json",name:"JSON"},{grammarName:"bash",name:"Bash"},{grammarName:"csharp",name:"C#"},{grammarName:"css",name:"CSS"},{grammarName:"cmake",name:"CMake"},{grammarName:"docker",name:"Docker"},{grammarName:"graphql",name:"GraphQL"},{grammarName:"xml",name:"XML"},{grammarName:"makefile",name:"Makefile"},{grammarName:"sql",name:"SQL"},{grammarName:"xml",name:"SVG"},{grammarName:"yaml",name:"YAML"},{grammarName:"python",name:"Python"}],Nt=e=>{const{element:t}=at();return"code"!==t.type?null:d.createElement(Mt,c({},e))},Mt=({hide:e})=>{const t=me(),{element:n}=at(),r=function(e){const t=me();return b.findPath(t,e)}(n),o=g.exports.useRef(null),[i,a]=g.exports.useState(""),c=g.exports.useMemo((()=>Ct.filter((e=>e.name.toLowerCase().includes(i.toLowerCase())))),[i]);return g.exports.useEffect((()=>{o.current&&o.current.focus()}),[]),"code"!==n.type?null:d.createElement(mt,{name:"Select code language"},d.createElement(pt,null,d.createElement(Lt,null,d.createElement(At,null,St),d.createElement(Bt,{ref:o,value:i,onChange:e=>a(e.target.value)}))),d.createElement(ft,{style:{maxHeight:200,overflow:"auto"}},c.map((o=>{const i=o.grammarName===n.language;return d.createElement(ht,{key:o.name,name:o.name,onClick:()=>(n=>{u.setNodes(t,{language:n},{at:r}),e()})(o.grammarName),style:{color:i?"rgb(56, 132, 255)":""}})}))))},Lt=x.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e4ea;
  border-radius: 3px;

  &:focus-within {
    border-color: #6494e2;
  }
`,At=x.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;
  color: #b7c0ca;

  & svg {
    width: 16px;
    height: 16px;
  }
`,St=d.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"icon-7f6730be--text-3f89f380"},d.createElement("g",null,d.createElement("circle",{cx:"10.5",cy:"10.5",r:"7.5"}),d.createElement("line",{x1:"21",y1:"21",x2:"15.8",y2:"15.8"}))),Bt=x.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  outline: none;
  color: #1a1a23;
`,Tt={paragraph:({attributes:e,children:t})=>d.createElement("p",c({},e),t),"heading-1":({attributes:e,children:t})=>d.createElement("h1",c({},e),t),"heading-2":({attributes:e,children:t})=>d.createElement("h2",c({},e),t),"heading-3":({attributes:e,children:t})=>d.createElement("h3",c({},e),t),"ordered-list":({attributes:e,children:t})=>d.createElement("ol",c({},e),t),"unordered-list":({attributes:e,children:t})=>d.createElement("ul",c({},e),t),"list-item":({attributes:e,children:t})=>d.createElement("li",c({},e),t),code:({element:e,attributes:t,children:n})=>"code"!==e.type?d.createElement(d.Fragment,null):d.createElement("pre",c({"data-language":e.language,spellCheck:!1},t),n),"code-line":({attributes:e,children:t})=>d.createElement("div",c({},e),t)};function zt(e){var t=e,{children:n}=t,r=s(t,["children"]);return d.createElement(Dt,c({},r),n)}const Dt=e=>{const{element:t}=e,n=Tt[t.type],r=function(e){const t=me();return b.findPath(t,e)}(t).length>1,o=d.createElement(n,c({},e));return"code-line"===t.type?o:r?d.createElement("div",{className:"element-container"},d.createElement("div",{className:"content"},d.createElement(Rt,{position:"top"}),o,d.createElement(Rt,{position:"bottom"}))):d.createElement(Ot,{element:t},o)},Ot=({element:e,children:t})=>{const n=L(),r=S({"element-container":!0,"first-level":!0,"read-only":n});return d.createElement("div",{className:r},d.createElement(ct,{element:e,render:()=>d.createElement(Et,{sections:[Nt]})}),d.createElement("div",{className:"content"},d.createElement(Rt,{position:"top"}),t,d.createElement(Rt,{position:"bottom"})))},Rt=({position:e,children:t})=>{const n=S({"element-area":!0,["element-area-"+e]:!0});return d.createElement("div",{contentEditable:!1,className:n},t)},Pt={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const It=e=>function({leaf:e,children:t,attributes:n}){if(function(e){var t;const n=null==e?void 0:e.props;return 0===(null==n?void 0:n.text.text.length)&&"code-line"===(null==(t=null==n?void 0:n.parent)?void 0:t.type)}(t))return d.createElement("span",{"data-slate-leaf":"true"},d.createElement("span",{"data-slate-zero-width":"z","data-slate-length":0},"\ufeff"));if(e.prismToken)return d.createElement("span",c({className:`token ${e.prismToken}`},n),t);const r=de.leafModifications(e);let o=t;for(const i of r){const e=Pt[i];o=d.createElement(e,null,o)}return e.href&&(o=d.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=d.createElement("span",null,o)),d.cloneElement(o,n)}(e);function Ht(e){var t=e,{children:n}=t,r=s(t,["children"]);return d.createElement(It,c({},r),n)}const jt=y`
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
`,Ft=x.div`
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
`,qt={};const Zt=function({scope:e="global",stopAllEvents:t=!0}={}){qt[e]||(qt[e]=[]);const n=qt[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:B(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"}),Yt={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":"enter",indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k",copy:"mod+c","copy-all":"mod+a",paste:"mod+v","exit-block":"mod+enter"};const Gt=({value:e,onChange:t,customKeybinds:n})=>{const r=me(),{handleKeyDown:o}=function(e){const t=me(),n=Ke();return g.exports.useEffect((()=>{const t=c(c({},Yt),e);Zt.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)Zt.register(o,((t,r)=>{We.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:g.exports.useCallback((e=>{Zt.keyDown(e,t)}),[t])}}(n),{handlePaste:i}=Je();return g.exports.useEffect((()=>{e.length>0||t([ee()])}),[e]),d.createElement(Ft,null,d.createElement(T,{editor:r,value:e,onChange:t},d.createElement(z,{renderElement:zt,renderLeaf:Ht,onKeyDown:o,onPaste:i,decorate:I.createHandler(r),readOnly:!1,autoFocus:!0})),d.createElement(Kt,null),d.createElement(Pe,null))},Kt=()=>d.createElement(Ye,{renderButtons:()=>d.createElement(d.Fragment,null,d.createElement(_e,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),d.createElement(_e,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),d.createElement(_e,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),d.createElement(_e,{mark:"inlineCode",icon:d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("polyline",{points:"7 8 3 12 7 16"}),d.createElement("polyline",{points:"17 8 21 12 17 16"}),d.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),d.createElement(_e,{mark:"href",icon:d.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))});function Ut(e){return se.block(e,["ordered-list","unordered-list"])}function Jt(e,t){return([n,r])=>{const[o,i]=de.isOnEdges(e,{of:r}),a=p.isEmpty(e,n),c=t.node.children;return{isFirst:c[0]===n,isLast:c[c.length-1]===n,isOnStart:o,isOnEnd:i,isEmpty:a,isList:Ut(e)(n)}}}function Wt(e){return se.block(e,"paragraph")}function $t(e,t,n){const{first:r,second:o,third:i}=n;return([n])=>{const a=t.node.children.findIndex((e=>e===n));return{isSimple:!(!r||"paragraph"!==r.node.type||o&&(!Ut(e)(o.node)||i)),index:a,isFirst:0===a,isLast:a===t.node.children.length-1,isEmpty:1===n.children.length&&Wt(e)(n.children[0])&&p.isEmpty(e,n.children[0]),hasList:Ut(e)(n.children[1])}}}function Qt({editor:e,entry:t,list:n}){if(!t)return{item:null,blocks:null};const r=function(e,t){const n=[t.node,t.path];return{first:_t({entry:Xt(n,0),createMeta:Jt(e,t)}),second:_t({entry:Xt(n,1),createMeta:Jt(e,t)}),third:_t({entry:Xt(n,2),createMeta:Jt(e,t)})}}(e,function(e){const[t,n]=e;return{node:t,path:n}}(t)),o=_t({entry:t,createMeta:$t(e,n,r)});return o?{item:o,blocks:r}:{item:null,blocks:null}}function Xt([e,t],n){if(e.children[n])return[e.children[n],t.concat(n)]}function _t({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[n,r]=e;return{node:n,path:r,meta:t([n,r])}}const Vt={info:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;const r=de.getAbove(e,{at:n,type:"block",mode:"lowest",match:Ut(e)});if(!r)return;const o=de.getAbove(e,{at:n,type:"block",mode:"lowest",match:se.builder(e).block(["ordered-list","unordered-list"]).notEquals(r[0]).compile()}),i=_t({entry:r,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const a=_t({entry:o,createMeta:()=>({})}),{item:s,blocks:d}=Qt({editor:e,entry:de.getAbove(e,{at:n,type:"block",mode:"lowest",match:se.block(e,"list-item")}),list:i});if(!s)return;if(!d)return;const u=_t({entry:de.getAbove(e,{at:n,type:"block",mode:"lowest",match:se.builder(e).block("list-item").notEquals(s.node).compile()}),createMeta:()=>({})}),m=_t({entry:de.getAbove(e,{at:n,type:"block",mode:"highest",match:se.childOf(e,s.node)}),createMeta:Jt(e,s)});if(!m)return;const f=se.builder(e).block("list-item").childOf(i.node).compile(),{item:h}=Qt({editor:e,entry:p.previous(e,{at:s.path,match:f}),list:i}),{item:g}=Qt({editor:e,entry:p.next(e,{at:s.path,match:f}),list:i}),b=se.builder(e).block().childOf(s.node).compile(),y=_t({entry:p.previous(e,{at:m.path,match:b}),createMeta:Jt(e,s)}),x=_t({entry:p.next(e,{at:m.path,match:b}),createMeta:Jt(e,s)});return{lists:{current:i,above:a},items:{current:s,previous:h,next:g,above:u},blocks:l(c({},d),{current:m,previous:y,next:x})}}};function en(e,t,n={}){const{at:r=[]}=n,o=p.nodes(e,{at:r,match:n=>!!p.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let a=null;const c=(e,t)=>{const n=h.next(e);return h.equals(n,t)};for(const l of i){if(!a){a=l;continue}const[,t]=l,[,n]=a;a=l,c(t,n)&&u.mergeNodes(e,{at:n})}}function tn(e,t={}){en(e,"ordered-list",t),en(e,"unordered-list",t)}function nn(e,{parent:t,match:n=(()=>!0),to:r,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const a=p.pathRef(e,r),c=new Map;for(const[d,u]of t.node.children.entries())c.set(u,d);const l=t.node.children.filter(n),s=i(l.length);if(l.length>0){const r=se.block(e);if(s?u.removeNodes(e,{at:t.path}):u.removeNodes(e,{at:t.path,match(e){if(!r(e))return!1;const t=c.get(e);return"number"==typeof t&&n(e,t)}}),!a.current)return;u.insertNodes(e,o(l),{at:a.current})}}function rn(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=Vt.info(e,{at:n});if(r){if(!r.lists.above||!r.items.above)return function(e,t={},n){const{at:r=e.selection}=t;if(!r)return;u.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:se.equals(e,[n.lists.current.node,n.items.current.node])}),tn(e)}(e,t,r);if(1!==r.lists.current.node.children.length){if(nn(e,{parent:r.lists.current,match:(e,t)=>t>r.items.current.meta.index,to:r.items.current.path.concat(r.items.current.node.children.length),transform:e=>V(r.lists.current.node.type,e)}),tn(e,{at:r.items.current.path}),r.items.current.meta.isFirst){const t=Vt.info(e,{at:n});if(!t)return;if(!t.items.above)return;u.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:se.equals(e,[t.lists.current.node,t.items.above.node])})}else u.moveNodes(e,{at:r.items.current.path,to:h.next(r.items.above.path)});tn(e,{at:r.lists.above.path})}else u.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!r)return!1;const n=e===r.lists.current.node,o=e===(null==(t=r.items.above)?void 0:t.node);return n||o}})}}const on={insertExitBreak:function(e){var t;const n={handled:!0},r={handled:!1};if(!e.selection)return n;m.isExpanded(e.selection)&&u.delete(e);const o=Vt.info(e);return o?o.items.current.meta.isSimple?o.blocks.current.meta.isEmpty?(rn(e),n):o.blocks.first?o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||u.insertNodes(e,U(),{at:o.items.current.path}),n):o.blocks.first.meta.isOnEnd?(o.blocks.second?u.insertNodes(e,U(),{at:o.blocks.second.path.concat(0),select:!0}):u.insertNodes(e,U(),{at:h.next(o.items.current.path),select:!0}),n):(u.splitNodes(e,{match:se.equals(e,o.items.current.node),always:!0}),n):n:r:n},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(m.isExpanded(e.selection))return t;const n=de.getAbove(e,{type:"block",mode:"lowest",match:se.block(e,"list-item")});if(!n)return t;const[,r]=n,[o]=de.isOnEdges(e,{of:r});return o?(rn(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=Vt.info(e,{at:n});if(!r)return;const{lists:o,items:i}=r;i.current.meta.isFirst||i.previous&&(u.wrapNodes(e,V(o.current.node.type,[]),{at:i.current.path}),u.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),tn(e,{at:i.previous.path}))},outdent:rn,mergeSiblings:tn,moveChildren:nn};function an({editor:e}){return de.isInBlock(e,["ordered-list","unordered-list"])}We.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=on.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:an}),We.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:n}=on.insertExitBreak(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:an}),We.override("indent",(({editor:e,event:t})=>{t.preventDefault(),on.indent(e)}),{match:an}),We.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),on.outdent(e)}),{match:an});const cn={indent:function(e){if(!e.selection)return;if(m.isExpanded(e.selection))return;const t=de.getAbove(e,{type:"block",mode:"lowest",match:se.block(e,"paragraph")});if(!t)return;const[,n]=t;u.wrapNodes(e,U([]),{at:n});const r=(()=>{const t=p.previous(e,{at:n}),r=p.next(e,{at:n}),o=se.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();u.wrapNodes(e,V(r,[]),{at:n}),on.mergeSiblings(e)}};We.override("indent",(({editor:e,event:t})=>{t.preventDefault(),cn.indent(e)}),{match:function({editor:e}){return de.isInBlock(e,"paragraph")}});const ln=y`
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
`,sn=()=>d.createElement(d.Fragment,null,d.createElement(ln,null));M.languages.plain={};const dn=({value:e})=>{const t=me();return d.createElement(Ft,null,d.createElement(T,{editor:t,value:e,onChange:()=>{}},d.createElement(z,{renderElement:zt,renderLeaf:Ht,decorate:I.createHandler(t),readOnly:!0})))};function un({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=de.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=p.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=de.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function pn({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,a=function({editor:e,entry:t,range:n}){const r=p.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof a)return;u.delete(e,{at:n});const c=de.getAbove(e,{type:"block"}),l=de.getAbove(e,{type:"leaf"});if(!c)return;if(!l)return;const[s]=c,[d]=l,m="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});if(u.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=de.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;u.delete(e,{at:n,unit:"block"})}}p.insertNode(e,a)}({editor:e,entry:t,range:n,text:a,block:s,leaf:d}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});u.delete(e,{at:n}),u.insertNodes(e,a,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:a,block:s,leaf:d});return i&&("leaf"===t.transformType?ue.getOutTheLeaf(e):r(o)),m}function mn({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const a=de.getAbove(t,{type:"block"}),c=de.getAbove(t,{type:"leaf"});if(!a)return{match:!1};if(!c)return{match:!1};const[l]=a,[s]=c;if(i({block:l,leaf:s}))return{match:!1};let d;return d="after"===n.markupType?un({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=de.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=p.before(e,o);if(!i)return{match:!1};const a=de.getPointBefore(e,{at:i,edge:"start",matchString:n});return a?{match:!0,range:{anchor:a,focus:o}}:{match:!1}}({editor:t,entry:n}),d.match&&pn({editor:t,entry:n,range:d.range,insertText:r}),d}const fn={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(de.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=mn({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,n=se.block(e,["ordered-list","unordered-list"]),r=se.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return r(o),n(o),t(e)},e}};const hn=[D,O,fn.listNormalization,fn.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(R.isText);return 0===t.length?Q():Q([U([G(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(R.isText);return 0===t.length?W():W([U([G(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["```"],onlyOnBlockStart:!0,transformType:"block",transform:()=>F()}])];const gn=({children:e,customExtensions:t=[]})=>{const n=function(e){return g.exports.useMemo((()=>{const t=[...hn,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(P(),t)}),[fn])}(t),r={instance:g.exports.useRef(null),lastSelectedText:g.exports.useRef("")},o=function(){const[e,t]=g.exports.useState("");return{instance:g.exports.useRef(null),input:g.exports.useRef(null),selection:g.exports.useRef(null),hadHref:g.exports.useRef(!1),href:e,setHref:t}}();return d.createElement(pe.Provider,{value:n},d.createElement(Fe.Provider,{value:r},d.createElement(Le.Provider,{value:o},e)))};const bn=e=>{const t=function(e){const t=c({},e);return e.customKeybinds||(t.customKeybinds={}),e.customExtensions||(t.customExtensions=[]),t}(e),n=t.readOnly?d.createElement(dn,c({},t)):d.createElement(Gt,c({},t));return d.createElement(gn,{customExtensions:t.customExtensions},d.createElement(Ee,null),d.createElement(sn,null),d.createElement(jt,null),n)},yn=[{type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"c"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"code",children:[{type:"code-line",children:[{text:"const foo = 123;"}]},{type:"code-line",children:[{text:""}]},{type:"code-line",children:[{text:"const bar = 321;"}]}],language:"tsx"}];function xn(e,t=0,n=[]){for(const r of e)R.isText(r)||(n.push({name:r.type,offset:t}),xn(r.children,t+2,n));return n}function vn(e){const t=xn(e),n=[];for(const o of t){const e=" ".repeat(o.offset);n.push(e+o.name)}const r=n.join("\n");console.log(r)}const kn=()=>{const[e,t]=function(){const[e,t]=g.exports.useState(yn);return g.exports.useEffect((()=>vn(e)),[e]),[e,t]}();return d.createElement(bn,{value:e,onChange:t})};k.render(d.createElement(kn,null),document.querySelector("#root"));
