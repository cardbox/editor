var e=Object.defineProperty,t=Object.defineProperties,r=Object.getOwnPropertyDescriptors,n=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,r,n)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[r]=n,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&a(e,r,t[r]);if(n)for(var r of n(t))i.call(t,r)&&a(e,r,t[r]);return e},l=(e,n)=>t(e,r(n)),s=(e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&n)for(var a of n(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};import{R as d,r as u,a as p,$ as f,u as m,b as h,c as g,d as b,E as y,i as x,T as v,P as k,e as w,w as E,f as C,g as L,h as M,t as S,j as N,k as A,l as O,q as B,_ as D,S as T,m as z}from"./vendor.eaccf8b9.js";const R={type:"heading-1",name:"Heading-1",code:"h1",aliases:["heading-1","title"],allowedModifications:[],allowedTransformations:["paragraph"],create:(e=[{text:""}])=>({type:"heading-1",children:e})},P=["bold","italic","underlined","inlineCode"],I=(e=[{text:""}])=>({type:"paragraph",children:e}),j={type:"paragraph",name:"Paragraph",code:"p",aliases:["paragraph","text"],allowedModifications:Array.from(P),allowedTransformations:["heading-1"],create:I},H=(e=[I()])=>({type:"list-item",children:e}),F={type:"list-item",name:"List Item",code:"li",aliases:["list-item"],canBeAdded:!1,allowedModifications:Array.from(P),allowedTransformations:[],create:H},q=(e=[H()])=>({type:"ordered-list",children:e}),K={type:"ordered-list",name:"Ordered List",code:"ol",aliases:["ordered-list"],allowedModifications:Array.from(P),allowedTransformations:["unordered-list"],create:q},Z=(e=[H()])=>({type:"unordered-list",children:e}),Y={type:"unordered-list",name:"Unordered List",code:"ul",aliases:["unordered-list"],allowedModifications:Array.from(P),allowedTransformations:["ordered-list"],create:Z},U={"ordered-list":q,"unordered-list":Z},G=(e,t=[H()])=>(0,U[e])(t),W=u.exports.createContext({});function $(){return u.exports.useContext(W)}function J(){const e=$(),t=u.exports.useRef(null);return u.exports.useLayoutEffect((()=>{const r=p.toDOMNode(e,e);t.current=r}),[e]),t}const Q="editor editor-dark editor-toolbar",_="editor editor-dark editor-link-popup",V="editor editor-dark editor-keybind",X="editor editor-light editor-block-type-menu",ee=f`
  .tippy-box[data-theme~='editor-dark'] {
    --text-color: #fff;
    --background-color: #333;
    --border-color: var(--background-color);
  }
`,te=f`
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
`,re=f`
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

  .tippy-box[data-theme~='editor-block-type-menu'] {
    width: 230px;
    padding: 6px;

    & .tippy-content {
      padding: 0;
    }

    & .block-type-menu-advice {
      font-size: 12px;
      color: #A9AAB3;
      margin: 0;
      padding: 6px 12px;
    }

    & .block-type-menu-item-list {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    & .block-type-menu-item {
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

    & .block-type-menu-item-command {
      color: #A9AAB3;
    }
  }
`,ne=f`
  .tippy-box[data-theme~='editor-light'] {
    --text-color: #1A1A23;
    --background-color: #fff;
    --border-color: #e4e4ea;

    box-shadow: 0px 2px 3px #F2F3F5;
  }
`,oe=()=>d.createElement(d.Fragment,null,d.createElement(te,null),d.createElement(ee,null),d.createElement(ne,null),d.createElement(re,null)),ie={paragraph:j,"heading-1":R,"ordered-list":K,"unordered-list":Y,"list-item":F},ae={paragraph:({attributes:e,children:t})=>d.createElement("p",c({},e),t),"heading-1":({attributes:e,children:t})=>d.createElement("h1",c({},e),t),"ordered-list":({attributes:e,children:t})=>d.createElement("ol",c({},e),t),"unordered-list":({attributes:e,children:t})=>d.createElement("ul",c({},e),t),"list-item":({attributes:e,children:t})=>d.createElement("li",c({},e),t)};function ce(e){return d.createElement(se,c({},e))}function le(e){const t=$();return p.findPath(t,e)}const se=e=>{const{element:t}=e,r=ae[t.type],n=le(t).length>1,o=d.createElement(r,c({},e));return n?d.createElement("div",{className:"element-container"},d.createElement("div",{className:"content"},d.createElement("div",{contentEditable:!1}),o,d.createElement("div",{contentEditable:!1}))):d.createElement(pe,{element:t},o)},de=d.createContext({});function ue(){return u.exports.useContext(de)}const pe=({element:e,children:t})=>{const r=$(),n=m(),o=h(),i=r.selection&&g.isCollapsed(r.selection),[a,c]=u.exports.useState(!1),l=b({"element-container":!0,"first-level":!0,visible:o&&i||a,"read-only":n}),s={element:e,meta:{empty:y.isEmpty(r,e)},active:a,setActive:c};return d.createElement(de.Provider,{value:s},d.createElement("div",{className:l},!n&&d.createElement("div",{className:"controls",contentEditable:!1},d.createElement(fe,null)),d.createElement("div",{className:"content"},d.createElement("div",{contentEditable:!1}),t,d.createElement("div",{contentEditable:!1}))))},fe=()=>{const{meta:e,setActive:t}=ue(),r=e.empty?"add":"transform",{Svg:n,iconClass:o,Content:i}=me[r],[a,c]=u.exports.useState(!1),l=()=>c(!1),s=b({"block-menu-icon":!0,[o]:!0,active:a});return d.createElement(x,{theme:X,interactive:!0,placement:"bottom-end",content:d.createElement(i,{show:()=>c(!0),hide:l}),visible:a,onShow:()=>t(!0),onHide:()=>t(!1),onClickOutside:l},d.createElement("div",{className:s,onClick:()=>c((e=>!e))},d.createElement(n,null)))},me={add:{Svg:e=>d.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),d.createElement("g",null,d.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),d.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))),iconClass:"plus",Content:({hide:e})=>{const t=$(),r=J(),{element:n}=ue(),o=le(n),i=u.exports.useMemo((()=>Object.values(ie).filter((e=>!1!==e.canBeAdded)).map((({type:n,name:i,code:a})=>d.createElement("li",{className:"block-type-menu-item",key:n,onClick:()=>(n=>{var i;const a=ie[n];v.removeNodes(t,{at:o}),v.insertNodes(t,a.create(),{at:o,select:!0}),e(),null==(i=r.current)||i.focus()})(n)},d.createElement("span",{className:"block-type-menu-item-name"},i),d.createElement("span",{className:"block-type-menu-item-command"},"/",a))))),[]);return d.createElement("div",{className:"block-type-menu"},d.createElement("p",{className:"block-type-menu-advice"},"Select item type"),d.createElement("ul",{className:"block-type-menu-item-list"},i))}},transform:{Svg:e=>d.createElement("svg",c({preserveAspectRatio:"xMidYMid meet",height:"1em",width:"1em",fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round",stroke:"currentColor"},e),d.createElement("g",null,d.createElement("polyline",{points:"6 9 12 15 18 9"}))),iconClass:"arrow",Content:({hide:e})=>{const t=$(),r=J(),{element:n}=ue(),o=le(n),i=ie[n.type],a=u.exports.useMemo((()=>i.allowedTransformations.map((n=>{const{name:i,code:a}=ie[n];return d.createElement("li",{className:"block-type-menu-item",key:n,onClick:()=>(n=>{var i;v.setNodes(t,{type:n},{at:o}),e(),null==(i=r.current)||i.focus()})(n)},d.createElement("span",{className:"block-type-menu-item-name"},i),d.createElement("span",{className:"block-type-menu-item-command"},"/",a))}))),[i]);return d.createElement("div",{className:"block-type-menu"},d.createElement("p",{className:"block-type-menu-advice"},"Select item type"),d.createElement("ul",{className:"block-type-menu-item-list"},a))}}},he=I;function ge(e,t){if("leaf"===t.type){const{at:r=e.selection}=t;if(!r)return;return y.leaf(e,r)}const r=t,{match:n=(()=>!0)}=r,o=s(r,["match"]);return y.above(e,l(c({},o),{match:t=>!!y.isBlock(e,t)&&n(t)}))}function be(e){return g.isRange(e)?e.anchor:k.isPoint(e)?e:w.isPath(e)?{path:e,offset:0}:void 0}function ye(e,t){if(!e.selection)return;const r=ge(e,{type:"leaf"});if(!r)return;const[,n]=r,o=be(n);if(!o)return;const i=be(t.at||e.selection);if(!i)return;const a="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const c of a){let r=c.split(""),n=i,a=i,l=i;for(;r.length>0;){const i=r.pop();if(!i)continue e;const s=y.before(e,n);if(!s)continue e;if(y.string(e,{anchor:s,focus:n})!==i){if(t.failOnInvalid)continue e;r=c.split("")}if(a=s,r.length+1===c.length&&(l=n),n=s,r.length>0&&k.equals(n,o))continue e}return"start"===t.edge?a:l}}function xe(e,t){return r=>{if(!y.isBlock(e,r))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(r.type)}}function ve(e,t){return e=>!y.isEditor(e)&&t.children.includes(e)}function ke(e,t){const r=Array.isArray(t)?t:[t];return e=>r.some((t=>t===e))}function we(e,t){return e=>t!==e}class Ee{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(xe(this.editor,e)),this}notEquals(e){return this.stages.push(we(this.editor,e)),this}equals(e){return this.stages.push(ke(this.editor,e)),this}childOf(e){return this.stages.push(ve(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const Ce={builder:e=>new Ee(e),block:xe,equals:ke,notEquals:we,childOf:ve};const Le={getAbove:ge,getPointFromLocation:be,getPointBefore:ye,getRangeBefore:function(e,t){if(!e.selection)return;const r=ye(e,l(c({},t),{edge:"start"}));if(!r)return;const n=be(e.selection);return n?{anchor:r,focus:n}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=ge(e,{type:"block"});if(!t)return;const[,r]=t,n=y.start(e,r),o=be(e.selection);return o?{anchor:n,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&g.isExpanded(e.selection)},leafHasModifications:function(e,t=P){return t.some((t=>e[t]))},leafModifications:function(e,t=P){return t.filter((t=>e[t]))},isInBlock:function(e,t){const r=ge(e,{type:"block",match:Ce.block(e,t)});return Boolean(r)},isOnEdges:function(e,t={}){const r=()=>{const t=ge(e,{type:"block",mode:"lowest"});if(t)return t[1]},n=[!1,!1],{of:o=r(),location:i=e.selection}=t;if(!o)return n;if(!i)return n;const a=be(i);if(!a)return n;const[c,l]=y.edges(e,o);return[k.equals(a,c),k.equals(a,l)]}};const Me={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const Se=e=>function({leaf:e,children:t,attributes:r}){const n=Le.leafModifications(e);let o=t;for(const i of n){const e=Me[i];o=d.createElement(e,null,o)}return e.href&&(o=d.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=d.createElement("span",null,o)),d.cloneElement(o,r)}(e);function Ne(e){return d.createElement(Se,c({},e))}const Ae={toggleModification:function(e,t){const r=y.marks(e);r&&(r[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,r={}){const{at:n=e.selection}=r;if(!n)return;if(v.select(e,n),!y.marks(e))return;e.addMark("href",t),v.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:r=e.selection}=t;if(!r)return;if(v.select(e,r),!y.marks(e))return;e.removeMark("href"),v.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(g.isExpanded(e.selection))return{success:!1};const t=Le.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const r=Le.getAbove(e,{type:"leaf"});if(!r)return{success:!1};const[,n]=t,[o,i]=r,a=y.end(e,n),c=g.start(e.selection);return k.equals(c,a)&&Le.leafHasModifications(o)?(v.insertNodes(e,function({text:e,href:t,modifications:r=[]}){return r.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!1}),v.select(e,w.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;g.isExpanded(e.selection)&&v.delete(e,{at:e.selection});const t=Le.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,r]=t,[n,o]=Le.isOnEdges(e,{of:r});if(!o)return n?(v.insertNodes(e,he(),{select:!1}),void v.select(e,y.point(e,w.next(r),{edge:"start"}))):void v.splitNodes(e,{mode:"highest"});v.insertNodes(e,he(),{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(g.isExpanded(e.selection))return void e.deleteFragment("backward");const t=Le.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[r,n]=t;y.isEmpty(e,r)?v.removeNodes(e,{at:n}):e.deleteBackward("character")}};function Oe({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const r=Le.getRangeFromBlockStart(e);if(!r)return{match:!1};const n=y.string(e,r);if(!n)return{match:!1};if(!t.markup.includes(n))return{match:!1};return{match:!0,range:r}}({editor:e,entry:t});if(!e.selection)return{match:!1};const r=Le.getRangeBefore(e,{matchString:t.markup});return r?{match:!0,range:r}:{match:!1}}function Be({editor:e,entry:t,range:r,insertText:n}){const{trigger:o=" ",keepTrigger:i=!0}=t,a=function({editor:e,entry:t,range:r}){const n=y.string(e,r);if(!n)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return n.slice(o.length,-i.length)}({editor:e,entry:t,range:r});if("string"!=typeof a)return;v.delete(e,{at:r});const c=Le.getAbove(e,{type:"block"}),l=Le.getAbove(e,{type:"leaf"});if(!c)return;if(!l)return;const[s]=c,[d]=l,u="block"===t.transformType?function({editor:e,entry:t,range:r,text:n,block:o,leaf:i}){const a=t.transform({text:n,block:o,leaf:i});if(v.delete(e,{at:r}),"after"===t.markupType&&t.onlyOnBlockStart){const t=Le.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,r]=t;v.delete(e,{at:r,unit:"block"})}}y.insertNode(e,a)}({editor:e,entry:t,range:r,text:a,block:s,leaf:d}):function({editor:e,entry:t,range:r,text:n,block:o,leaf:i}){const a=t.transform({text:n,block:o,leaf:i});v.delete(e,{at:r}),v.insertNodes(e,a,{at:r.anchor,select:!0})}({editor:e,entry:t,range:r,text:a,block:s,leaf:d});return i&&("leaf"===t.transformType?Ae.getOutTheLeaf(e):n(o)),u}function De({text:e,editor:t,entry:r,insertText:n}){const{trigger:o=" ",skip:i=(()=>!1)}=r;if(e!==o)return{match:!1};const a=Le.getAbove(t,{type:"block"}),c=Le.getAbove(t,{type:"leaf"});if(!a)return{match:!1};if(!c)return{match:!1};const[l]=a,[s]=c;if(i({block:l,leaf:s}))return{match:!1};let d;return d="after"===r.markupType?Oe({editor:t,entry:r}):function({editor:e,entry:t}){const[r,n]=t.markup,o=Le.getPointBefore(e,{edge:"end",matchString:n,failOnInvalid:!0});if(!o)return{match:!1};const i=y.before(e,o);if(!i)return{match:!1};const a=Le.getPointBefore(e,{at:i,edge:"start",matchString:r});return a?{match:!0,range:{anchor:a,focus:o}}:{match:!1}}({editor:t,entry:r}),d.match&&Be({editor:t,entry:r,range:d.range,insertText:n}),d}const Te={format:function(e){return t=>function(e,t){const{insertText:r}=e;return e.insertText=n=>{if(Le.hasSelection(e))return r(n);let o=0;for(const i of t){const{match:t}=De({text:n,editor:e,entry:i,insertText:r});t&&(o+=1)}o||r(n)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,r=Ce.block(e,["ordered-list","unordered-list"]),n=Ce.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return n(o),r(o),t(e)},e}};const ze=[E,C,Te.listNormalization,Te.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(L.isText);return 0===t.length?Z():Z([H([I(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(L.isText);return 0===t.length?q():q([H([I(t)])])}}])];function Re(){const[,e]=u.exports.useReducer((e=>e+1),0);return e}const Pe=u.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function Ie(){return u.exports.useContext(Pe)}function je(){const e=Ie(),t=Re();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const He=e=>"undefined"==typeof window?null:d.createElement(Fe,c({},e)),Fe=({renderButtons:e})=>{const t=J(),r=function(){const e=u.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return u.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:n,lastSelectedText:o}=Ie(),i=(a=Re(),c=300,u.exports.useMemo((()=>S(a,c)),[a,c]));var a,c;return u.exports.useEffect((()=>{if(!t.current)return;n.current=N(t.current,{theme:Q,content:r,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=O((()=>{n.current&&(i(),n.current.show())}),300),a=(t=!0)=>{n.current&&(n.current.hide(),t&&e.cancel())},c=()=>{if(!t.current)return;if(!n.current)return;if(document.activeElement!==t.current)return a();const r=window.getSelection();if(!r)return a();if(r.isCollapsed)return o.current="",a();const c=r.getRangeAt(0).toString();if(c===o.current)return i();a(!1),e(),o.current=c};return document.addEventListener("selectionchange",c),()=>{var e;null==(e=n.current)||e.destroy(),document.removeEventListener("selectionchange",c)}}),[r,t]),A.createPortal(e(),r)},qe="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",Ke=()=>new KeyboardEvent("noop");const Ze=u.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function Ye(){return u.exports.useContext(Ze)}function Ue(){const e=Ye(),t=Re();return{show:({selection:t,href:r=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),r&&(e.setHref(r),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const Ge=B.div`
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
`,We=B.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,$e=B(We)``,Je=B(We)`
  cursor: pointer;
`,Qe=B.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,_e=B.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Ve=()=>"undefined"==typeof window?null:d.createElement(Xe,null),Xe=()=>{const e=$(),t=J(),r=u.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:n,input:o,selection:i,href:a,setHref:c,hadHref:l}=Ye(),{reset:s}=Ue(),[p,f]=u.exports.useState(!1),[m,h]=u.exports.useState(null),g=e=>{if(h(null),e)return function(e){const t=new RegExp(qe,"i");return e.length<2083&&t.test(e)}(e)?void f(!0):(f(!1),void h("It doesn't look like an URL"));f(!1)};return u.exports.useEffect((()=>{g(a)}),[a]),u.exports.useEffect((()=>{if(t.current)return n.current=N(t.current,{theme:_,content:r,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>s()}),()=>{var e;return null==(e=n.current)?void 0:e.destroy()}}),[r,t]),A.createPortal(d.createElement("form",{onSubmit:r=>{var o,c;r.preventDefault(),p&&i.current&&(Ae.setHref(e,a,{at:i.current}),null==(o=n.current)||o.hide(),null==(c=t.current)||c.focus())}},d.createElement(Ge,null,d.createElement($e,null,d.createElement(et,null)),d.createElement(Qe,{ref:o,value:a,onChange:e=>{c(e.target.value)},placeholder:"Enter the URL"}),l.current&&d.createElement(Je,{onClick:()=>{var r,o;i.current&&(Ae.clearHref(e,{at:i.current}),null==(r=n.current)||r.hide(),null==(o=t.current)||o.focus())}},d.createElement(tt,null))),m&&d.createElement(_e,null,m)),r)},et=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),tt=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})),rt=({children:e,customExtensions:t=[]})=>{const r=function(e){return u.exports.useMemo((()=>{const t=[...ze,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(M(),t)}),[Te])}(t),n={instance:u.exports.useRef(null),lastSelectedText:u.exports.useRef("")},o=function(){const[e,t]=u.exports.useState("");return{instance:u.exports.useRef(null),input:u.exports.useRef(null),selection:u.exports.useRef(null),hadHref:u.exports.useRef(!1),href:e,setHref:t}}();return d.createElement(W.Provider,{value:r},d.createElement(Pe.Provider,{value:n},d.createElement(Ze.Provider,{value:o},e)))};const nt=function(){const e=[],t=(t,r)=>{const n=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of n){if(!e.match(r))continue;const t=e.callback(r)||{},{skipped:n=!1}=t;if(!n)break}};return{register:(t,r)=>{e.push({action:t,priority:1,callback:r,match:()=>!0})},override:(t,r,{match:n=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:r,match:n})},execute:t,curryExecute:e=>r=>{t(e,r)}}}();nt.register("delete-backward",(()=>{})),nt.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),Ae.insertSoftBreak(e)})),nt.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),Ae.insertExitBreak(e)})),nt.register("indent",(({event:e})=>{e.preventDefault()})),nt.register("outdent",(({event:e})=>{e.preventDefault()})),nt.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:r}=Ae.getOutTheLeaf(e);r&&t.preventDefault()})),nt.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),Ae.toggleModification(e,"bold")})),nt.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),Ae.toggleModification(e,"italic")})),nt.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),Ae.toggleModification(e,"underlined")})),nt.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),Ae.toggleModification(e,"inlineCode")})),nt.register("set-link-for-text",(({editor:e,event:t,ui:r})=>{if(t.preventDefault(),!e.selection)return;const n=y.marks(e);n&&(r.linkPopup.show({selection:e.selection,href:n.href}),setTimeout(r.linkPopup.focus))}));const ot={};const it=function({scope:e="global",stopAllEvents:t=!0}={}){ot[e]||(ot[e]=[]);const r=ot[e];return{register:(e,t)=>{r.push({keybind:e,callback:t,is:D(e,{byKey:!0})})},unregister:e=>{const t=r.findIndex((t=>t.keybind===e));-1!==t&&r.splice(t,1)},unregisterAll:()=>{r.splice(0,r.length)},keyDown:(e,n)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of r){if(i.is(o)){t||o.stopPropagation(),i.callback(n,o);break}}}}}({scope:"slate-editor"});function at(){return{toolbar:je(),linkPopup:Ue()}}const ct={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":["enter","mod+enter"],indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k"};function lt(e){const t=$(),r=at();u.exports.useEffect((()=>{const t=c(c({},ct),e);it.unregisterAll();Object.entries(t).forEach((([e,t])=>{if(!t)return;const n="string"==typeof t?[t]:t;for(const o of n)it.register(o,((t,n)=>{nt.execute(e,{editor:t,event:n,ui:r})}))}))}),[e]);return{handleKeyDown:u.exports.useCallback((e=>{it.keyDown(e,t)}),[t])}}const st=B.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,dt=B.button`
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

  &:hover ${st} {
    color: white;
  }

  &[data-active='true'] ${st} {
    color: white;
  }
`,ut=e=>{var t=e,{icon:r,isActive:n,tooltip:o,style:i}=t,a=s(t,["icon","isActive","tooltip","style"]);const l=d.createElement(dt,c({"data-active":n},a),d.createElement(st,{style:i},r));return o?d.createElement(x,{theme:V,content:o,offset:[0,20],hideOnClick:!1},l):l};const pt=({mark:e,icon:t,action:r,tooltip:n,style:o={}})=>{const i=$(),a=function(e,t){const r=y.marks(e);return!!r&&Boolean(r[t])}(i,e),c=at();return d.createElement(ut,{icon:t,isActive:a,tooltip:n,onClick:e=>{e.preventDefault(),nt.execute(r,{editor:i,event:Ke(),ui:c})},style:o})};const ft=({editor:e,event:t})=>{if(!e.selection)return;if(g.isCollapsed(e.selection))return;const r=t.clipboardData.getData("text");new RegExp(qe).test(r)&&(t.preventDefault(),Ae.setHref(e,r))};function mt(){return{handlePaste:function(e,t=[]){return r=>{const n=c({event:r},e);for(const e of t){const t=e(n);if(t&&!t.continue)break}}}({editor:$(),ui:at()},[ft])}}function ht(e){return Ce.block(e,["ordered-list","unordered-list"])}function gt(e,t){return([r,n])=>{const[o,i]=Le.isOnEdges(e,{of:n}),a=y.isEmpty(e,r),c=t.node.children;return{isFirst:c[0]===r,isLast:c[c.length-1]===r,isOnStart:o,isOnEnd:i,isEmpty:a,isList:ht(e)(r)}}}function bt(e){return Ce.block(e,"paragraph")}function yt(e,t,r){const{first:n,second:o,third:i}=r;return([r])=>{const a=t.node.children.findIndex((e=>e===r));return{isSimple:!(!n||"paragraph"!==n.node.type||o&&(!ht(e)(o.node)||i)),index:a,isFirst:0===a,isLast:a===t.node.children.length-1,isEmpty:1===r.children.length&&bt(e)(r.children[0])&&y.isEmpty(e,r.children[0]),hasList:ht(e)(r.children[1])}}}function xt({editor:e,entry:t,list:r}){if(!t)return{item:null,blocks:null};const n=function(e,t){const r=[t.node,t.path];return{first:kt({entry:vt(r,0),createMeta:gt(e,t)}),second:kt({entry:vt(r,1),createMeta:gt(e,t)}),third:kt({entry:vt(r,2),createMeta:gt(e,t)})}}(e,function(e){const[t,r]=e;return{node:t,path:r}}(t)),o=kt({entry:t,createMeta:yt(e,r,n)});return o?{item:o,blocks:n}:{item:null,blocks:null}}function vt([e,t],r){if(e.children[r])return[e.children[r],t.concat(r)]}function kt({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[r,n]=e;return{node:r,path:n,meta:t([r,n])}}const wt={info:function(e,t={}){const{at:r=e.selection}=t;if(!r)return;const n=Le.getAbove(e,{at:r,type:"block",mode:"lowest",match:ht(e)});if(!n)return;const o=Le.getAbove(e,{at:r,type:"block",mode:"lowest",match:Ce.builder(e).block(["ordered-list","unordered-list"]).notEquals(n[0]).compile()}),i=kt({entry:n,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const a=kt({entry:o,createMeta:()=>({})}),{item:s,blocks:d}=xt({editor:e,entry:Le.getAbove(e,{at:r,type:"block",mode:"lowest",match:Ce.block(e,"list-item")}),list:i});if(!s)return;if(!d)return;const u=kt({entry:Le.getAbove(e,{at:r,type:"block",mode:"lowest",match:Ce.builder(e).block("list-item").notEquals(s.node).compile()}),createMeta:()=>({})}),p=kt({entry:Le.getAbove(e,{at:r,type:"block",mode:"highest",match:Ce.childOf(e,s.node)}),createMeta:gt(e,s)});if(!p)return;const f=Ce.builder(e).block("list-item").childOf(i.node).compile(),{item:m}=xt({editor:e,entry:y.previous(e,{at:s.path,match:f}),list:i}),{item:h}=xt({editor:e,entry:y.next(e,{at:s.path,match:f}),list:i}),g=Ce.builder(e).block().childOf(s.node).compile(),b=kt({entry:y.previous(e,{at:p.path,match:g}),createMeta:gt(e,s)}),x=kt({entry:y.next(e,{at:p.path,match:g}),createMeta:gt(e,s)});return{lists:{current:i,above:a},items:{current:s,previous:m,next:h,above:u},blocks:l(c({},d),{current:p,previous:b,next:x})}}};function Et(e,t,r={}){const{at:n=[]}=r,o=y.nodes(e,{at:n,match:r=>!!y.isBlock(e,r)&&r.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let a=null;const c=(e,t)=>{const r=w.next(e);return w.equals(r,t)};for(const l of i){if(!a){a=l;continue}const[,t]=l,[,r]=a;a=l,c(t,r)&&v.mergeNodes(e,{at:r})}}function Ct(e,t={}){Et(e,"ordered-list",t),Et(e,"unordered-list",t)}function Lt(e,{parent:t,match:r=(()=>!0),to:n,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const a=y.pathRef(e,n),c=new Map;for(const[d,u]of t.node.children.entries())c.set(u,d);const l=t.node.children.filter(r),s=i(l.length);if(l.length>0){const n=Ce.block(e);if(s?v.removeNodes(e,{at:t.path}):v.removeNodes(e,{at:t.path,match(e){if(!n(e))return!1;const t=c.get(e);return"number"==typeof t&&r(e,t)}}),!a.current)return;v.insertNodes(e,o(l),{at:a.current})}}function Mt(e,t={}){const{at:r=e.selection}=t;if(!r)return;if(g.isRange(r)&&g.isExpanded(r))return;const n=wt.info(e,{at:r});if(n){if(!n.lists.above||!n.items.above)return function(e,t={},r){const{at:n=e.selection}=t;if(!n)return;v.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:Ce.equals(e,[r.lists.current.node,r.items.current.node])}),Ct(e)}(e,t,n);if(1!==n.lists.current.node.children.length){if(Lt(e,{parent:n.lists.current,match:(e,t)=>t>n.items.current.meta.index,to:n.items.current.path.concat(n.items.current.node.children.length),transform:e=>G(n.lists.current.node.type,e)}),Ct(e,{at:n.items.current.path}),n.items.current.meta.isFirst){const t=wt.info(e,{at:r});if(!t)return;if(!t.items.above)return;v.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:Ce.equals(e,[t.lists.current.node,t.items.above.node])})}else v.moveNodes(e,{at:n.items.current.path,to:w.next(n.items.above.path)});Ct(e,{at:n.lists.above.path})}else v.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!n)return!1;const r=e===n.lists.current.node,o=e===(null==(t=n.items.above)?void 0:t.node);return r||o}})}}const St={insertExitBreak:function(e){var t;const r={handled:!0},n={handled:!1};if(!e.selection)return r;g.isExpanded(e.selection)&&v.delete(e);const o=wt.info(e);return o?o.items.current.meta.isSimple?o.blocks.current.meta.isEmpty?(Mt(e),r):o.blocks.first?o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||v.insertNodes(e,H(),{at:o.items.current.path}),r):o.blocks.first.meta.isOnEnd?(o.blocks.second?v.insertNodes(e,H(),{at:o.blocks.second.path.concat(0),select:!0}):v.insertNodes(e,H(),{at:w.next(o.items.current.path),select:!0}),r):(v.splitNodes(e,{match:Ce.equals(e,o.items.current.node),always:!0}),r):r:n:r},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(g.isExpanded(e.selection))return t;const r=Le.getAbove(e,{type:"block",mode:"lowest",match:Ce.block(e,"list-item")});if(!r)return t;const[,n]=r,[o]=Le.isOnEdges(e,{of:n});return o?(Mt(e),{handled:!0}):t},indent:function(e,t={}){const{at:r=e.selection}=t;if(!r)return;if(g.isRange(r)&&g.isExpanded(r))return;const n=wt.info(e,{at:r});if(!n)return;const{lists:o,items:i}=n;i.current.meta.isFirst||i.previous&&(v.wrapNodes(e,G(o.current.node.type,[]),{at:i.current.path}),v.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),Ct(e,{at:i.previous.path}))},outdent:Mt,mergeSiblings:Ct,moveChildren:Lt};function Nt({editor:e}){return Le.isInBlock(e,["ordered-list","unordered-list"])}nt.override("delete-backward",(({editor:e,event:t})=>{const{handled:r}=St.deleteBackward(e);if(!r)return{skipped:!0};t.preventDefault()}),{match:Nt}),nt.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:r}=St.insertExitBreak(e);if(!r)return{skipped:!0};t.preventDefault()}),{match:Nt}),nt.override("indent",(({editor:e,event:t})=>{t.preventDefault(),St.indent(e)}),{match:Nt}),nt.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),St.outdent(e)}),{match:Nt});const At={indent:function(e){if(!e.selection)return;if(g.isExpanded(e.selection))return;const t=Le.getAbove(e,{type:"block",mode:"lowest",match:Ce.block(e,"paragraph")});if(!t)return;const[,r]=t;v.wrapNodes(e,H([]),{at:r});const n=(()=>{const t=y.previous(e,{at:r}),n=y.next(e,{at:r}),o=Ce.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(n){const e=n[0];if(o(e))return e.type}return"unordered-list"})();v.wrapNodes(e,G(n,[]),{at:r}),St.mergeSiblings(e)}};nt.override("indent",(({editor:e,event:t})=>{t.preventDefault(),At.indent(e)}),{match:function({editor:e}){return Le.isInBlock(e,"paragraph")}});const Ot=f`
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
  }
`,Bt=B.div`
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

  .element-container.first-level.visible > .controls {
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

  code {
    font-family: var(--editor-mod-inline-code-font-family);
    padding: var(--editor-mod-inline-code-padding);
    background: var(--editor-mod-inline-code-background);
    border-radius: var(--editor-mod-inline-code-border-radius);
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
`,Dt=({value:e,onChange:t,customKeybinds:r})=>{const n=$(),{handleKeyDown:o}=lt(r),{handlePaste:i}=mt();return u.exports.useEffect((()=>{e.length>0||t([he()])}),[e]),d.createElement(Bt,null,d.createElement(T,{editor:n,value:e,onChange:t},d.createElement(z,{renderElement:ce,renderLeaf:Ne,onKeyDown:o,readOnly:!1,onPaste:i,autoFocus:!0})),d.createElement(Tt,null),d.createElement(Ve,null))},Tt=()=>d.createElement(He,{renderButtons:()=>d.createElement(d.Fragment,null,d.createElement(pt,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),d.createElement(pt,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),d.createElement(pt,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),d.createElement(pt,{mark:"inlineCode",icon:d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("polyline",{points:"7 8 3 12 7 16"}),d.createElement("polyline",{points:"17 8 21 12 17 16"}),d.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),d.createElement(pt,{mark:"href",icon:d.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),zt=({value:e,customKeybinds:t})=>{const r=$(),{handleKeyDown:n}=lt(t),{handlePaste:o}=mt();return d.createElement(Bt,null,d.createElement(T,{editor:r,value:e,onChange:()=>{}},d.createElement(z,{renderElement:ce,renderLeaf:Ne,onKeyDown:n,readOnly:!0,onPaste:o,autoFocus:!0})))};const Rt=e=>{const t=function(e){const t=c({},e);return e.customKeybinds||(t.customKeybinds={}),e.customExtensions||(t.customExtensions=[]),t}(e),r=t.readOnly?d.createElement(zt,c({},t)):d.createElement(Dt,c({},t));return d.createElement(rt,{customExtensions:t.customExtensions},d.createElement(Ot,null),d.createElement(oe,null),r)},Pt=[{type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"c"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]}];function It(e,t=0,r=[]){for(const n of e)L.isText(n)||(r.push({name:n.type,offset:t}),It(n.children,t+2,r));return r}function jt(e){const t=It(e),r=[];for(const o of t){const e=" ".repeat(o.offset);r.push(e+o.name)}const n=r.join("\n");console.log(n)}const Ht=()=>{const[e,t]=function(){const[e,t]=u.exports.useState(Pt);return u.exports.useEffect((()=>jt(e)),[e]),[e,t]}();return d.createElement(Rt,{value:e,onChange:t})};A.render(d.createElement(Ht,null),document.querySelector("#root"));
