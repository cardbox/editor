var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},l=(e,r)=>t(e,n(r)),s=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};import{R as d,T as u,E as p,a as m,P as f,b as h,r as g,w as b,c as y,d as x,e as k,f as v,t as w,$ as E,g as C,h as N,j as L,q as M,_ as A,i as S,u as B,k as T,l as D,N as O,m as z,S as R,n as P}from"./vendor.780c11c0.js";const I={type:"heading-1",name:"Heading-1",code:"h1",aliases:["heading-1","title"],allowedModifications:[],allowedTransformations:["paragraph"],create:(e=[{text:""}])=>({type:"heading-1",children:e})},H=["bold","italic","underlined","inlineCode"],j=(e=[{text:""}])=>({type:"paragraph",children:e}),F={type:"paragraph",name:"Paragraph",code:"p",aliases:["paragraph","text"],allowedModifications:Array.from(H),allowedTransformations:["heading-1"],create:j},q=(e=[j()])=>({type:"list-item",children:e}),Z={type:"list-item",name:"List Item",code:"li",aliases:["list-item"],canBeAdded:!1,allowedModifications:Array.from(H),allowedTransformations:[],create:q},Y=(e=[q()])=>({type:"ordered-list",children:e}),G={type:"ordered-list",name:"Ordered List",code:"ol",aliases:["ordered-list"],allowedModifications:Array.from(H),allowedTransformations:["unordered-list"],create:Y},K=(e=[q()])=>({type:"unordered-list",children:e}),U={type:"unordered-list",name:"Unordered List",code:"ul",aliases:["unordered-list"],allowedModifications:Array.from(H),allowedTransformations:["ordered-list"],create:K},$={"ordered-list":Y,"unordered-list":K},J=(e,t=[q()])=>(0,$[e])(t),W=(e=[{text:""}])=>({type:"code-line",children:e}),Q={type:"code-line",name:"Code Line",code:"code-line",allowedModifications:[],allowedTransformations:[],create:W,canBeAdded:!1},X=(e="tsx",t=[W()])=>({type:"code",children:t,language:e}),_={type:"code",name:"Code",code:"code",aliases:["pre"],allowedModifications:[],allowedTransformations:[],create:X},V=j;function ee(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return p.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=s(n,["match"]);return p.above(e,l(c({},o),{match:t=>!!p.isBlock(e,t)&&r(t)}))}function te(e){return m.isRange(e)?e.anchor:f.isPoint(e)?e:h.isPath(e)?{path:e,offset:0}:void 0}function ne(e,t){if(!e.selection)return;const n=ee(e,{type:"leaf"});if(!n)return;const[,r]=n,o=te(r);if(!o)return;const i=te(t.at||e.selection);if(!i)return;const a="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const c of a){let n=c.split(""),r=i,a=i,l=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const s=p.before(e,r);if(!s)continue e;if(p.string(e,{anchor:s,focus:r})!==i){if(t.failOnInvalid)continue e;n=c.split("")}if(a=s,n.length+1===c.length&&(l=r),r=s,n.length>0&&f.equals(r,o))continue e}return"start"===t.edge?a:l}}function re(e,t){return n=>{if(!p.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function oe(e,t){return e=>!p.isEditor(e)&&t.children.includes(e)}function ie(e,t){const n=Array.isArray(t)?t:[t];return e=>n.some((t=>t===e))}function ae(e,t){return e=>t!==e}class ce{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(re(this.editor,e)),this}notEquals(e){return this.stages.push(ae(this.editor,e)),this}equals(e){return this.stages.push(ie(this.editor,e)),this}childOf(e){return this.stages.push(oe(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const le={builder:e=>new ce(e),block:re,equals:ie,notEquals:ae,childOf:oe};const se={getAbove:ee,getPointFromLocation:te,getPointBefore:ne,getRangeBefore:function(e,t){if(!e.selection)return;const n=ne(e,l(c({},t),{edge:"start"}));if(!n)return;const r=te(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=ee(e,{type:"block"});if(!t)return;const[,n]=t,r=p.start(e,n),o=te(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&m.isExpanded(e.selection)},leafHasModifications:function(e,t=H){return t.some((t=>e[t]))},leafModifications:function(e,t=H){return t.filter((t=>e[t]))},isInBlock:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return!1;const o=p.path(e,r),[i]=p.node(e,o);if(le.block(e,t)(i))return!0;const a=ee(e,{type:"block",match:le.block(e,t)});return Boolean(a)},isOnEdges:function(e,t={}){const n=()=>{const t=ee(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const a=te(i);if(!a)return r;const[c,l]=p.edges(e,o);return[f.equals(a,c),f.equals(a,l)]}};const de={toggleModification:function(e,t){const n=p.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(u.select(e,r),!p.marks(e))return;e.addMark("href",t),u.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(u.select(e,n),!p.marks(e))return;e.removeMark("href"),u.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(m.isExpanded(e.selection))return{success:!1};const t=se.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=se.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,a=p.end(e,r),c=m.start(e.selection);return f.equals(c,a)&&se.leafHasModifications(o)?(u.insertNodes(e,function({text:e,href:t,modifications:n=[]}){return n.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!1}),u.select(e,h.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;m.isExpanded(e.selection)&&u.delete(e,{at:e.selection});const t=se.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=se.isOnEdges(e,{of:n});if(!o)return r?(u.insertNodes(e,V(),{select:!1}),void u.select(e,p.point(e,h.next(n),{edge:"start"}))):void u.splitNodes(e,{mode:"highest"});u.insertNodes(e,V(),{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(m.isExpanded(e.selection))return void e.deleteFragment("backward");const t=se.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;p.isEmpty(e,n)?u.removeNodes(e,{at:r}):e.deleteBackward("character")}};function ue({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=se.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=p.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=se.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function pe({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,a=function({editor:e,entry:t,range:n}){const r=p.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof a)return;u.delete(e,{at:n});const c=se.getAbove(e,{type:"block"}),l=se.getAbove(e,{type:"leaf"});if(!c)return;if(!l)return;const[s]=c,[d]=l,m="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});if(u.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=se.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;u.delete(e,{at:n,unit:"block"})}}p.insertNode(e,a)}({editor:e,entry:t,range:n,text:a,block:s,leaf:d}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});u.delete(e,{at:n}),u.insertNodes(e,a,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:a,block:s,leaf:d});return i&&("leaf"===t.transformType?de.getOutTheLeaf(e):r(o)),m}function me({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const a=se.getAbove(t,{type:"block"}),c=se.getAbove(t,{type:"leaf"});if(!a)return{match:!1};if(!c)return{match:!1};const[l]=a,[s]=c;if(i({block:l,leaf:s}))return{match:!1};let d;return d="after"===n.markupType?ue({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=se.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=p.before(e,o);if(!i)return{match:!1};const a=se.getPointBefore(e,{at:i,edge:"start",matchString:n});return a?{match:!0,range:{anchor:a,focus:o}}:{match:!1}}({editor:t,entry:n}),d.match&&pe({editor:t,entry:n,range:d.range,insertText:r}),d}const fe={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(se.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=me({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,n=le.block(e,["ordered-list","unordered-list"]),r=le.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return r(o),n(o),t(e)},e}};const he=[b,y,fe.listNormalization,fe.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(x.isText);return 0===t.length?K():K([q([j(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(x.isText);return 0===t.length?Y():Y([q([j(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["```"],onlyOnBlockStart:!0,transformType:"block",transform:()=>X()}])];const ge=g.exports.createContext({});function be(){return g.exports.useContext(ge)}function ye(){const e=be(),t=g.exports.useRef(null);return g.exports.useLayoutEffect((()=>{const n=v.toDOMNode(e,e);t.current=n}),[e]),t}function xe(){const[,e]=g.exports.useReducer((e=>e+1),0);return e}const ke="editor editor-dark editor-toolbar",ve="editor editor-dark editor-link-popup",we="editor editor-dark editor-keybind",Ee="editor editor-light editor-block-menu",Ce=E`
  .tippy-box[data-theme~='editor-dark'] {
    --text-color: #fff;
    --background-color: #333;
    --border-color: var(--background-color);
  }
`,Ne=E`
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
`,Le=E`
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
`,Me=E`
  .tippy-box[data-theme~='editor-light'] {
    --text-color: #1A1A23;
    --background-color: #fff;
    --border-color: #e4e4ea;

    box-shadow: 0px 2px 3px #F2F3F5;
  }
`,Ae=()=>d.createElement(d.Fragment,null,d.createElement(Ne,null),d.createElement(Ce,null),d.createElement(Me,null),d.createElement(Le,null));const Se=g.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function Be(){return g.exports.useContext(Se)}function Te(){const e=Be(),t=xe();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const De=e=>"undefined"==typeof window?null:d.createElement(Oe,c({},e)),Oe=({renderButtons:e})=>{const t=ye(),n=function(){const e=g.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return g.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=Be(),i=(a=xe(),c=300,g.exports.useMemo((()=>w(a,c)),[a,c]));var a,c;return g.exports.useEffect((()=>{if(!t.current)return;r.current=C(t.current,{theme:ke,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=L((()=>{r.current&&(i(),r.current.show())}),300),a=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},c=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return a();const n=window.getSelection();if(!n)return a();if(n.isCollapsed)return o.current="",a();const c=n.getRangeAt(0).toString();if(c===o.current)return i();a(!1),e(),o.current=c};return document.addEventListener("selectionchange",c),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",c)}}),[n,t]),N.createPortal(e(),n)},ze="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",Re=()=>new KeyboardEvent("noop");const Pe=g.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function Ie(){return g.exports.useContext(Pe)}function He(){const e=Ie(),t=xe();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const je=M.div`
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
`,Fe=M.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,qe=M(Fe)``,Ze=M(Fe)`
  cursor: pointer;
`,Ye=M.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,Ge=M.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Ke=()=>"undefined"==typeof window?null:d.createElement(Ue,null),Ue=()=>{const e=be(),t=ye(),n=g.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:a,setHref:c,hadHref:l}=Ie(),{reset:s}=He(),[u,p]=g.exports.useState(!1),[m,f]=g.exports.useState(null),h=e=>{if(f(null),e)return function(e){const t=new RegExp(ze,"i");return e.length<2083&&t.test(e)}(e)?void p(!0):(p(!1),void f("It doesn't look like an URL"));p(!1)};return g.exports.useEffect((()=>{h(a)}),[a]),g.exports.useEffect((()=>{if(t.current)return r.current=C(t.current,{theme:ve,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>s()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),N.createPortal(d.createElement("form",{onSubmit:n=>{var o,c;n.preventDefault(),u&&i.current&&(de.setHref(e,a,{at:i.current}),null==(o=r.current)||o.hide(),null==(c=t.current)||c.focus())}},d.createElement(je,null,d.createElement(qe,null,d.createElement($e,null)),d.createElement(Ye,{ref:o,value:a,onChange:e=>{c(e.target.value)},placeholder:"Enter the URL"}),l.current&&d.createElement(Ze,{onClick:()=>{var n,o;i.current&&(de.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},d.createElement(Je,null))),m&&d.createElement(Ge,null,m)),n)},$e=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),Je=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})),We=({children:e,customExtensions:t=[]})=>{const n=function(e){return g.exports.useMemo((()=>{const t=[...he,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(k(),t)}),[fe])}(t),r={instance:g.exports.useRef(null),lastSelectedText:g.exports.useRef("")},o=function(){const[e,t]=g.exports.useState("");return{instance:g.exports.useRef(null),input:g.exports.useRef(null),selection:g.exports.useRef(null),hadHref:g.exports.useRef(!1),href:e,setHref:t}}();return d.createElement(ge.Provider,{value:n},d.createElement(Se.Provider,{value:r},d.createElement(Pe.Provider,{value:o},e)))};const Qe=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();Qe.register("delete-backward",(()=>{})),Qe.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),de.insertSoftBreak(e)})),Qe.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),de.insertExitBreak(e)})),Qe.register("indent",(({event:e})=>{e.preventDefault()})),Qe.register("outdent",(({event:e})=>{e.preventDefault()})),Qe.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=de.getOutTheLeaf(e);n&&t.preventDefault()})),Qe.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),de.toggleModification(e,"bold")})),Qe.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),de.toggleModification(e,"italic")})),Qe.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),de.toggleModification(e,"underlined")})),Qe.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),de.toggleModification(e,"inlineCode")})),Qe.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=p.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))})),Qe.register("copy",(()=>{})),Qe.register("copy-all",(()=>{})),Qe.register("paste",(()=>{})),Qe.register("exit-block",(()=>{}));const Xe={};const _e=function({scope:e="global",stopAllEvents:t=!0}={}){Xe[e]||(Xe[e]=[]);const n=Xe[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:A(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"});function Ve(){return{toolbar:Te(),linkPopup:He()}}const et={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":"enter",indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k",copy:"mod+c","copy-all":"mod+a",paste:"mod+v","exit-block":"mod+enter"};const tt=M.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,nt=M.button`
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

  &:hover ${tt} {
    color: white;
  }

  &[data-active='true'] ${tt} {
    color: white;
  }
`,rt=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,a=s(t,["icon","isActive","tooltip","style"]);const l=d.createElement(nt,c({"data-active":r},a),d.createElement(tt,{style:i},n));return o?d.createElement(S,{theme:we,content:o,offset:[0,20],hideOnClick:!1},l):l};const ot=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=be(),a=function(e,t){const n=p.marks(e);return!!n&&Boolean(n[t])}(i,e),c=Ve();return d.createElement(rt,{icon:t,isActive:a,tooltip:r,onClick:e=>{e.preventDefault(),Qe.execute(n,{editor:i,event:Re(),ui:c})},style:o})};const it=({editor:e,event:t})=>{if(!e.selection)return;if(m.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(ze).test(n)&&(t.preventDefault(),de.setHref(e,n))};function at(){return{handlePaste:function(e,t=[]){return n=>{const r=c({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:be(),ui:Ve()},[it])}}const ct=E`
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
    --editor-heading1-font-size: 24px;
    --editor-heading1-line-height: 1;
    --editor-heading1-font-weight: 400;

    --editor-list-margin: 1em 0;
    --editor-list-padding: 0 0 0 24px;

    --editor-code-font-family: 'Source Code Pro', monospace;
    --editor-code-margin: 1.5em 0;
  }
`,lt=M.div`
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
    font-family: var(--editor-code-font-family);
    margin: var(--editor-code-margin);
  }

  pre[data-language] > code {
    display: block;
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
`;const st=function(){const e=[];return{register:t=>{e.push(t)},createHandler:t=>n=>{for(const r of e){const e=r(t,n);if(0!==e.length)return e}return[]}}}(),dt=g.exports.createContext({}),ut=dt.Provider;function pt(){return g.exports.useContext(dt)}const mt=({element:e,render:t})=>B()?null:d.createElement(ft,{element:e,render:t}),ft=({element:e,render:t})=>{const n=be(),r=T(),o=n.selection&&m.isCollapsed(n.selection),i=r&&o,[a,c]=g.exports.useState(!1),l={element:e,meta:{empty:p.isEmpty(n,e)},active:a,setActive:c},s=D({controls:!0,visible:a||i});return d.createElement(ut,{value:l},d.createElement("div",{className:s,contentEditable:!1},t()))},ht={paragraph:F,"heading-1":I,"ordered-list":G,"unordered-list":U,"list-item":Z,code:_,"code-line":Q},gt=({svg:e,iconClassName:t,content:n,sections:r})=>{const{active:o,setActive:i}=pt(),[a,c]=g.exports.useState(!1),l=()=>c(!1),s=D({"block-menu-icon":!0,[t]:!0,active:a});return d.createElement(S,{theme:Ee,interactive:!0,placement:"bottom-end",content:d.createElement(bt,{active:o},d.createElement(n,{show:()=>c(!0),hide:l,sections:r})),visible:a,onShow:()=>i(!0),onHidden:()=>i(!1),onClickOutside:l},d.createElement("div",{className:s,onClick:()=>c((e=>!e))},d.createElement(e,null)))},bt=({active:e,children:t})=>e?t:null,yt=({children:e})=>d.createElement("div",{className:"block-menu-container"},e),xt=({name:e,children:t})=>d.createElement("div",{className:"block-menu-section"},d.createElement("p",{className:"block-menu-list-name"},e),t),kt=e=>{var t=e,{children:n}=t,r=s(t,["children"]);return d.createElement("ul",c({className:"block-menu-list"},r),n)},vt=e=>{var t=e,{name:n,detail:r,onClick:o}=t,i=s(t,["name","detail","onClick"]);return d.createElement("li",c({className:"block-menu-item",onClick:o},i),d.createElement("span",{className:"block-menu-item-name"},n),r&&d.createElement("span",{className:"block-menu-item-detail"},r))},wt=e=>d.createElement(gt,c({svg:Et,iconClassName:"plus",content:Ct},e)),Et=e=>d.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),d.createElement("g",null,d.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),Ct=({hide:e})=>{const t=be(),n=ye(),{element:r}=pt(),o=function(e){const t=be();return v.findPath(t,e)}(r),i=g.exports.useMemo((()=>Object.values(ht).filter((e=>!1!==e.canBeAdded)).map((({type:r,name:i,code:a})=>d.createElement(vt,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;const a=ht[r];u.removeNodes(t,{at:o}),u.insertNodes(t,a.create(),{at:o,select:!0}),e(),null==(i=n.current)||i.focus()})(r)})))),[]);return d.createElement("div",{className:"block-menu"},d.createElement(xt,{name:"Select item type"},d.createElement(kt,null,i)))};const Nt=e=>d.createElement(gt,c({svg:Lt,iconClassName:"arrow",content:Mt},e)),Lt=e=>d.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),d.createElement("g",null,d.createElement("polyline",{points:"6 9 12 15 18 9"}))),Mt=e=>{const{sections:t=[]}=e;return d.createElement("div",{className:"block-menu"},d.createElement(At,c({},e)),t.map(((t,n)=>{const r=t;return d.createElement(r,c({key:n},e))})))},At=({hide:e})=>{const t=be(),n=ye(),{element:r}=pt(),o=function(e){const t=be();return v.findPath(t,e)}(r),i=ht[r.type],a=g.exports.useMemo((()=>i.allowedTransformations.map((r=>{const{name:i,code:a}=ht[r];return d.createElement(vt,{key:r,name:i,detail:`/${a}`,onClick:()=>(r=>{var i;u.setNodes(t,{type:r},{at:o}),e(),null==(i=n.current)||i.focus()})(r)})}))),[i]);return 0===a.length?null:d.createElement(xt,{name:"Select item type"},d.createElement(kt,null,a))};const St=e=>{const{meta:t}=pt(),n=t.empty?wt:Nt;return d.createElement(n,c({},e))},Bt=" ".repeat(2);const Tt={insertExitBreak:function(e){const t={handled:!0};if(!e.selection)return t;m.isExpanded(e.selection)&&u.delete(e);const n=se.getAbove(e,{type:"block",match:le.block(e,"code-line")});if(!n)return{handled:!1};const[r,o]=n;let i=0;const a=p.string(e,o);for(const l of a){if(" "!==l)break;i+=1}const c=a[p.start(e,e.selection).offset-1];if("{"===c&&(i+=2),"("===c&&(i+=2),"<"===c&&(i+=2),":"===c&&(i+=2),u.splitNodes(e,{match:le.equals(e,r),always:!0}),u.select(e,h.next(o)),u.collapse(e,{edge:"start"}),i>0){const t=p.start(e,h.next(o));u.insertText(e," ".repeat(i),{at:t})}return t},indent:function(e){const t=p.nodes(e,{match:le.block(e,"code-line")});for(const[,n]of t){const t=p.start(e,n);u.insertText(e,Bt,{at:t})}},outdent:function(e){const t=p.nodes(e,{match:le.block(e,"code-line")});for(const[,n]of t){const t=p.start(e,n),[r]=p.node(e,t),o=O.string(r);let i=t.offset,a=0;for(const e of o){if(" "!==e)break;if(i+=1,a+=1,2===a)break}if(0===a)continue;const c={path:t.path,offset:i},l=p.range(e,t,c);u.delete(e,{at:l})}}};function Dt({editor:e}){return se.isInBlock(e,"code")}Qe.override("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),Tt.insertExitBreak(e)}),{match:Dt}),Qe.override("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),Tt.insertExitBreak(e)}),{match:Dt}),Qe.override("copy-all",(({editor:e,event:t})=>{const n=se.getAbove(e,{type:"block",match:le.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),u.select(e,r)}),{match:Dt}),Qe.override("indent",(({event:e,editor:t})=>{e.preventDefault(),Tt.indent(t)}),{match:Dt}),Qe.override("outdent",(({event:e,editor:t})=>{e.preventDefault(),Tt.outdent(t)}),{match:Dt}),Qe.override("exit-block",(({editor:e,event:t})=>{const n=se.getAbove(e,{type:"block",match:le.block(e,"code")});if(!n)return{skipped:!0};const[,r]=n;t.preventDefault(),u.insertNodes(e,V(),{at:h.next(r),select:!0})}),{match:Dt});st.register(((e,t)=>{const[n,r]=t;if(!le.block(e,"code-line")(n))return[];const o=se.getAbove(e,{at:r,type:"block",match:le.block(e,"code")});if(!o)return[];const[i]=o,a=[],c=O.string(n),l=z.tokenize(c,z.languages[i.language]);let s=0;for(const d of l)"string"!=typeof d?(a.push({anchor:{path:r,offset:s},focus:{path:r,offset:s+d.length},prismToken:d.type}),s+=d.length):s+=d.length;return a}));const Ot=[{grammarName:"plain",name:"Plain Text"},{grammarName:"javascript",name:"JavaScript"},{grammarName:"typescript",name:"TypeScript"},{grammarName:"jsx",name:"React JSX"},{grammarName:"tsx",name:"React TSX"},{grammarName:"rust",name:"Rust"},{grammarName:"xml",name:"HTML"},{grammarName:"json",name:"JSON"},{grammarName:"bash",name:"Bash"},{grammarName:"csharp",name:"C#"},{grammarName:"css",name:"CSS"},{grammarName:"cmake",name:"CMake"},{grammarName:"docker",name:"Docker"},{grammarName:"graphql",name:"GraphQL"},{grammarName:"xml",name:"XML"},{grammarName:"makefile",name:"Makefile"},{grammarName:"sql",name:"SQL"},{grammarName:"xml",name:"SVG"},{grammarName:"yaml",name:"YAML"},{grammarName:"python",name:"Python"}],zt=e=>{const{element:t}=pt();return"code"!==t.type?null:d.createElement(Rt,c({},e))},Rt=({hide:e})=>{const t=be(),{element:n}=pt(),r=function(e){const t=be();return v.findPath(t,e)}(n),o=g.exports.useRef(null),[i,a]=g.exports.useState(""),c=g.exports.useMemo((()=>Ot.filter((e=>e.name.toLowerCase().includes(i.toLowerCase())))),[i]);return g.exports.useEffect((()=>{o.current&&o.current.focus()}),[]),"code"!==n.type?null:d.createElement(xt,{name:"Select code language"},d.createElement(yt,null,d.createElement(Pt,null,d.createElement(It,null,Ht),d.createElement(jt,{ref:o,value:i,onChange:e=>a(e.target.value)}))),d.createElement(kt,{style:{maxHeight:200,overflow:"auto"}},c.map((o=>{const i=o.grammarName===n.language;return d.createElement(vt,{key:o.name,name:o.name,onClick:()=>(n=>{u.setNodes(t,{language:n},{at:r}),e()})(o.grammarName),style:{color:i?"rgb(56, 132, 255)":""}})}))))},Pt=M.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #e4e4ea;
  border-radius: 3px;

  &:focus-within {
    border-color: #6494e2;
  }
`,It=M.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;
  color: #b7c0ca;

  & svg {
    width: 16px;
    height: 16px;
  }
`,Ht=d.createElement("svg",{preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor",className:"icon-7f6730be--text-3f89f380"},d.createElement("g",null,d.createElement("circle",{cx:"10.5",cy:"10.5",r:"7.5"}),d.createElement("line",{x1:"21",y1:"21",x2:"15.8",y2:"15.8"}))),jt=M.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
  color: #1a1a23;
`,Ft={paragraph:({attributes:e,children:t})=>d.createElement("p",c({},e),t),"heading-1":({attributes:e,children:t})=>d.createElement("h1",c({},e),t),"ordered-list":({attributes:e,children:t})=>d.createElement("ol",c({},e),t),"unordered-list":({attributes:e,children:t})=>d.createElement("ul",c({},e),t),"list-item":({attributes:e,children:t})=>d.createElement("li",c({},e),t),code:({element:e,attributes:t,children:n})=>"code"!==e.type?d.createElement(d.Fragment,null):d.createElement("pre",c({"data-language":e.language,spellCheck:!1},t),n),"code-line":({attributes:e,children:t})=>d.createElement("code",c({},e),t)};function qt(e){return d.createElement(Zt,c({},e))}const Zt=e=>{const{element:t}=e,n=Ft[t.type],r=function(e){const t=be();return v.findPath(t,e)}(t).length>1,o=d.createElement(n,c({},e));return"code-line"===t.type?o:r?d.createElement("div",{className:"element-container"},d.createElement("div",{className:"content"},d.createElement("div",{contentEditable:!1}),o,d.createElement("div",{contentEditable:!1}))):d.createElement(Yt,{element:t},o)},Yt=({element:e,children:t})=>{const n=B(),r=D({"element-container":!0,"first-level":!0,"read-only":n});return d.createElement("div",{className:r},d.createElement(mt,{element:e,render:()=>d.createElement(St,{sections:[zt]})}),d.createElement("div",{className:"content"},d.createElement("div",{contentEditable:!1}),t,d.createElement("div",{contentEditable:!1})))},Gt={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const Kt=e=>function({leaf:e,children:t,attributes:n}){if(e.prismToken)return d.createElement("span",c({className:`token ${e.prismToken}`},n),t);const r=se.leafModifications(e);let o=t;for(const i of r){const e=Gt[i];o=d.createElement(e,null,o)}return e.prismToken&&(o=d.createElement("span",{className:`token ${e.prismToken}`},o)),e.href&&(o=d.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=d.createElement("span",null,o)),d.cloneElement(o,n)}(e);function Ut(e){return d.createElement(Kt,c({},e))}const $t=({value:e,onChange:t,customKeybinds:n})=>{const r=be(),{handleKeyDown:o}=function(e){const t=be(),n=Ve();return g.exports.useEffect((()=>{const t=c(c({},et),e);_e.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)_e.register(o,((t,r)=>{Qe.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:g.exports.useCallback((e=>{_e.keyDown(e,t)}),[t])}}(n),{handlePaste:i}=at();return g.exports.useEffect((()=>{e.length>0||t([V()])}),[e]),d.createElement(lt,null,d.createElement(R,{editor:r,value:e,onChange:t},d.createElement(P,{renderElement:qt,renderLeaf:Ut,onKeyDown:o,onPaste:i,decorate:st.createHandler(r),readOnly:!1,autoFocus:!0})),d.createElement(Jt,null),d.createElement(Ke,null))},Jt=()=>d.createElement(De,{renderButtons:()=>d.createElement(d.Fragment,null,d.createElement(ot,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),d.createElement(ot,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),d.createElement(ot,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),d.createElement(ot,{mark:"inlineCode",icon:d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("polyline",{points:"7 8 3 12 7 16"}),d.createElement("polyline",{points:"17 8 21 12 17 16"}),d.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),d.createElement(ot,{mark:"href",icon:d.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),Wt=({value:e})=>{const t=be();return d.createElement(lt,null,d.createElement(R,{editor:t,value:e,onChange:()=>{}},d.createElement(P,{renderElement:qt,renderLeaf:Ut,readOnly:!0})))},Qt=E`
  /**
  * Nord Theme Originally by Arctic Ice Studio
  * https://nordtheme.com
  *
  * Ported for PrismJS by Zane Hitchcoxc (@zwhitchcox) and Gabriel Ramos (@gabrieluizramos)
  */

  pre[data-language] {
    color: #f8f8f2;
    background: none;
    font-family: "Fira Code", Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    text-align: left;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -moz-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
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
`,Xt=()=>d.createElement(d.Fragment,null,d.createElement(Qt,null));function _t(e){return le.block(e,["ordered-list","unordered-list"])}function Vt(e,t){return([n,r])=>{const[o,i]=se.isOnEdges(e,{of:r}),a=p.isEmpty(e,n),c=t.node.children;return{isFirst:c[0]===n,isLast:c[c.length-1]===n,isOnStart:o,isOnEnd:i,isEmpty:a,isList:_t(e)(n)}}}function en(e){return le.block(e,"paragraph")}function tn(e,t,n){const{first:r,second:o,third:i}=n;return([n])=>{const a=t.node.children.findIndex((e=>e===n));return{isSimple:!(!r||"paragraph"!==r.node.type||o&&(!_t(e)(o.node)||i)),index:a,isFirst:0===a,isLast:a===t.node.children.length-1,isEmpty:1===n.children.length&&en(e)(n.children[0])&&p.isEmpty(e,n.children[0]),hasList:_t(e)(n.children[1])}}}function nn({editor:e,entry:t,list:n}){if(!t)return{item:null,blocks:null};const r=function(e,t){const n=[t.node,t.path];return{first:on({entry:rn(n,0),createMeta:Vt(e,t)}),second:on({entry:rn(n,1),createMeta:Vt(e,t)}),third:on({entry:rn(n,2),createMeta:Vt(e,t)})}}(e,function(e){const[t,n]=e;return{node:t,path:n}}(t)),o=on({entry:t,createMeta:tn(e,n,r)});return o?{item:o,blocks:r}:{item:null,blocks:null}}function rn([e,t],n){if(e.children[n])return[e.children[n],t.concat(n)]}function on({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[n,r]=e;return{node:n,path:r,meta:t([n,r])}}z.languages.plain={};const an={info:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;const r=se.getAbove(e,{at:n,type:"block",mode:"lowest",match:_t(e)});if(!r)return;const o=se.getAbove(e,{at:n,type:"block",mode:"lowest",match:le.builder(e).block(["ordered-list","unordered-list"]).notEquals(r[0]).compile()}),i=on({entry:r,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const a=on({entry:o,createMeta:()=>({})}),{item:s,blocks:d}=nn({editor:e,entry:se.getAbove(e,{at:n,type:"block",mode:"lowest",match:le.block(e,"list-item")}),list:i});if(!s)return;if(!d)return;const u=on({entry:se.getAbove(e,{at:n,type:"block",mode:"lowest",match:le.builder(e).block("list-item").notEquals(s.node).compile()}),createMeta:()=>({})}),m=on({entry:se.getAbove(e,{at:n,type:"block",mode:"highest",match:le.childOf(e,s.node)}),createMeta:Vt(e,s)});if(!m)return;const f=le.builder(e).block("list-item").childOf(i.node).compile(),{item:h}=nn({editor:e,entry:p.previous(e,{at:s.path,match:f}),list:i}),{item:g}=nn({editor:e,entry:p.next(e,{at:s.path,match:f}),list:i}),b=le.builder(e).block().childOf(s.node).compile(),y=on({entry:p.previous(e,{at:m.path,match:b}),createMeta:Vt(e,s)}),x=on({entry:p.next(e,{at:m.path,match:b}),createMeta:Vt(e,s)});return{lists:{current:i,above:a},items:{current:s,previous:h,next:g,above:u},blocks:l(c({},d),{current:m,previous:y,next:x})}}};function cn(e,t,n={}){const{at:r=[]}=n,o=p.nodes(e,{at:r,match:n=>!!p.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let a=null;const c=(e,t)=>{const n=h.next(e);return h.equals(n,t)};for(const l of i){if(!a){a=l;continue}const[,t]=l,[,n]=a;a=l,c(t,n)&&u.mergeNodes(e,{at:n})}}function ln(e,t={}){cn(e,"ordered-list",t),cn(e,"unordered-list",t)}function sn(e,{parent:t,match:n=(()=>!0),to:r,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const a=p.pathRef(e,r),c=new Map;for(const[d,u]of t.node.children.entries())c.set(u,d);const l=t.node.children.filter(n),s=i(l.length);if(l.length>0){const r=le.block(e);if(s?u.removeNodes(e,{at:t.path}):u.removeNodes(e,{at:t.path,match(e){if(!r(e))return!1;const t=c.get(e);return"number"==typeof t&&n(e,t)}}),!a.current)return;u.insertNodes(e,o(l),{at:a.current})}}function dn(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=an.info(e,{at:n});if(r){if(!r.lists.above||!r.items.above)return function(e,t={},n){const{at:r=e.selection}=t;if(!r)return;u.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:le.equals(e,[n.lists.current.node,n.items.current.node])}),ln(e)}(e,t,r);if(1!==r.lists.current.node.children.length){if(sn(e,{parent:r.lists.current,match:(e,t)=>t>r.items.current.meta.index,to:r.items.current.path.concat(r.items.current.node.children.length),transform:e=>J(r.lists.current.node.type,e)}),ln(e,{at:r.items.current.path}),r.items.current.meta.isFirst){const t=an.info(e,{at:n});if(!t)return;if(!t.items.above)return;u.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:le.equals(e,[t.lists.current.node,t.items.above.node])})}else u.moveNodes(e,{at:r.items.current.path,to:h.next(r.items.above.path)});ln(e,{at:r.lists.above.path})}else u.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!r)return!1;const n=e===r.lists.current.node,o=e===(null==(t=r.items.above)?void 0:t.node);return n||o}})}}const un={insertExitBreak:function(e){var t;const n={handled:!0},r={handled:!1};if(!e.selection)return n;m.isExpanded(e.selection)&&u.delete(e);const o=an.info(e);return o?o.items.current.meta.isSimple?o.blocks.current.meta.isEmpty?(dn(e),n):o.blocks.first?o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||u.insertNodes(e,q(),{at:o.items.current.path}),n):o.blocks.first.meta.isOnEnd?(o.blocks.second?u.insertNodes(e,q(),{at:o.blocks.second.path.concat(0),select:!0}):u.insertNodes(e,q(),{at:h.next(o.items.current.path),select:!0}),n):(u.splitNodes(e,{match:le.equals(e,o.items.current.node),always:!0}),n):n:r:n},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(m.isExpanded(e.selection))return t;const n=se.getAbove(e,{type:"block",mode:"lowest",match:le.block(e,"list-item")});if(!n)return t;const[,r]=n,[o]=se.isOnEdges(e,{of:r});return o?(dn(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=an.info(e,{at:n});if(!r)return;const{lists:o,items:i}=r;i.current.meta.isFirst||i.previous&&(u.wrapNodes(e,J(o.current.node.type,[]),{at:i.current.path}),u.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),ln(e,{at:i.previous.path}))},outdent:dn,mergeSiblings:ln,moveChildren:sn};function pn({editor:e}){return se.isInBlock(e,["ordered-list","unordered-list"])}Qe.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=un.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:pn}),Qe.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:n}=un.insertExitBreak(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:pn}),Qe.override("indent",(({editor:e,event:t})=>{t.preventDefault(),un.indent(e)}),{match:pn}),Qe.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),un.outdent(e)}),{match:pn});const mn={indent:function(e){if(!e.selection)return;if(m.isExpanded(e.selection))return;const t=se.getAbove(e,{type:"block",mode:"lowest",match:le.block(e,"paragraph")});if(!t)return;const[,n]=t;u.wrapNodes(e,q([]),{at:n});const r=(()=>{const t=p.previous(e,{at:n}),r=p.next(e,{at:n}),o=le.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();u.wrapNodes(e,J(r,[]),{at:n}),un.mergeSiblings(e)}};Qe.override("indent",(({editor:e,event:t})=>{t.preventDefault(),mn.indent(e)}),{match:function({editor:e}){return se.isInBlock(e,"paragraph")}});const fn=e=>{const t=function(e){const t=c({},e);return e.customKeybinds||(t.customKeybinds={}),e.customExtensions||(t.customExtensions=[]),t}(e),n=t.readOnly?d.createElement(Wt,c({},t)):d.createElement($t,c({},t));return d.createElement(We,{customExtensions:t.customExtensions},d.createElement(Ae,null),d.createElement(Xt,null),d.createElement(ct,null),n)},hn=[{type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"c"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"code",children:[{type:"code-line",children:[{text:"const foo = 123;"}]},{type:"code-line",children:[{text:"const bar = 321;"}]}],language:"tsx"}];function gn(e,t=0,n=[]){for(const r of e)x.isText(r)||(n.push({name:r.type,offset:t}),gn(r.children,t+2,n));return n}function bn(e){const t=gn(e),n=[];for(const o of t){const e=" ".repeat(o.offset);n.push(e+o.name)}const r=n.join("\n");console.log(r)}const yn=()=>{const[e,t]=function(){const[e,t]=g.exports.useState(hn);return g.exports.useEffect((()=>bn(e)),[e]),[e,t]}();return d.createElement(fn,{value:e,onChange:t})};N.render(d.createElement(yn,null),document.querySelector("#root"));
