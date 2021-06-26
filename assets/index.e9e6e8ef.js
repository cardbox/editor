var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&a(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&a(e,n,t[n]);return e},s=(e,r)=>t(e,n(r)),l=(e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&r)for(var a of r(e))t.indexOf(a)<0&&i.call(e,a)&&(n[a]=e[a]);return n};import{R as d,T as u,E as f,a as p,P as m,b as h,r as g,w as y,c as b,d as x,e as v,f as k,t as E,g as w,h as C,j as L,q as S,_ as O,i as B,$ as M,S as A,k as T}from"./vendor.349c6da3.js";const D=["bold","italic","underlined","inlineCode"],R=(e=[{text:""}])=>({type:"paragraph",children:e});Array.from(D);const N=(e=[R()])=>({type:"list-item",children:e});Array.from(D);const P=(e=[N()])=>({type:"ordered-list",children:e});Array.from(D);const z=(e=[N()])=>({type:"unordered-list",children:e});Array.from(D);const H={"ordered-list":P,"unordered-list":z},q=(e,t=[N()])=>(0,H[e])(t),j=R,I={paragraph:({attributes:e,children:t})=>d.createElement("p",c({},e),t),"heading-1":({attributes:e,children:t})=>d.createElement("h1",c({},e),t),"ordered-list":({attributes:e,children:t})=>d.createElement("ol",c({},e),t),"unordered-list":({attributes:e,children:t})=>d.createElement("ul",c({},e),t),"list-item":({attributes:e,children:t})=>d.createElement("li",c({},e),t)};function K(e){const t=I[e.element.type];return d.createElement(t,c({},e))}function F(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return f.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=l(n,["match"]);return f.above(e,s(c({},o),{match:t=>!!f.isBlock(e,t)&&r(t)}))}function Z(e){return p.isRange(e)?e.anchor:m.isPoint(e)?e:h.isPath(e)?{path:e,offset:0}:void 0}function U(e,t){if(!e.selection)return;const n=F(e,{type:"leaf"});if(!n)return;const[,r]=n,o=Z(r);if(!o)return;const i=Z(t.at||e.selection);if(!i)return;const a="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const c of a){let n=c.split(""),r=i,a=i,s=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const l=f.before(e,r);if(!l)continue e;if(f.string(e,{anchor:l,focus:r})!==i){if(t.failOnInvalid)continue e;n=c.split("")}if(a=l,n.length+1===c.length&&(s=r),r=l,n.length>0&&m.equals(r,o))continue e}return"start"===t.edge?a:s}}function $(e,t){return n=>{if(!f.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function W(e,t){return e=>!f.isEditor(e)&&t.children.includes(e)}function _(e,t){const n=Array.isArray(t)?t:[t];return e=>n.some((t=>t===e))}function G(e,t){return e=>t!==e}class J{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push($(this.editor,e)),this}notEquals(e){return this.stages.push(G(this.editor,e)),this}equals(e){return this.stages.push(_(this.editor,e)),this}childOf(e){return this.stages.push(W(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const Q={builder:e=>new J(e),block:$,equals:_,notEquals:G,childOf:W};const V={getAbove:F,getPointFromLocation:Z,getPointBefore:U,getRangeBefore:function(e,t){if(!e.selection)return;const n=U(e,s(c({},t),{edge:"start"}));if(!n)return;const r=Z(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=F(e,{type:"block"});if(!t)return;const[,n]=t,r=f.start(e,n),o=Z(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&p.isExpanded(e.selection)},leafHasModifications:function(e,t=D){return t.some((t=>e[t]))},leafModifications:function(e,t=D){return t.filter((t=>e[t]))},isInBlock:function(e,t){const n=F(e,{type:"block",match:Q.block(e,t)});return Boolean(n)},isOnEdges:function(e,t={}){const n=()=>{const t=F(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const a=Z(i);if(!a)return r;const[c,s]=f.edges(e,o);return[m.equals(a,c),m.equals(a,s)]}};const X={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const Y=e=>function({leaf:e,children:t,attributes:n}){const r=V.leafModifications(e);let o=t;for(const i of r){const e=X[i];o=d.createElement(e,null,o)}return e.href&&(o=d.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=d.createElement("span",null,o)),d.cloneElement(o,n)}(e);function ee(e){return d.createElement(Y,c({},e))}const te={toggleModification:function(e,t){const n=f.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(u.select(e,r),!f.marks(e))return;e.addMark("href",t),u.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(u.select(e,n),!f.marks(e))return;e.removeMark("href"),u.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(p.isExpanded(e.selection))return{success:!1};const t=V.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=V.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,a=f.end(e,r),c=p.start(e.selection);return m.equals(c,a)&&V.leafHasModifications(o)?(u.insertNodes(e,function({text:e,href:t,modifications:n=[]}){return n.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!1}),u.select(e,h.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;p.isExpanded(e.selection)&&u.delete(e,{at:e.selection});const t=V.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=V.isOnEdges(e,{of:n});if(!o)return r?(u.insertNodes(e,j(),{select:!1}),void u.select(e,f.point(e,h.next(n),{edge:"start"}))):void u.splitNodes(e,{mode:"highest"});u.insertNodes(e,j(),{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(p.isExpanded(e.selection))return void e.deleteFragment("backward");const t=V.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;f.isEmpty(e,n)?u.removeNodes(e,{at:r}):e.deleteBackward("character")}};function ne({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=V.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=f.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=V.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function re({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,a=function({editor:e,entry:t,range:n}){const r=f.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof a)return;u.delete(e,{at:n});const c=V.getAbove(e,{type:"block"}),s=V.getAbove(e,{type:"leaf"});if(!c)return;if(!s)return;const[l]=c,[d]=s,p="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});if(u.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=V.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;u.delete(e,{at:n,unit:"block"})}}f.insertNode(e,a)}({editor:e,entry:t,range:n,text:a,block:l,leaf:d}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const a=t.transform({text:r,block:o,leaf:i});u.delete(e,{at:n}),u.insertNodes(e,a,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:a,block:l,leaf:d});return i&&("leaf"===t.transformType?te.getOutTheLeaf(e):r(o)),p}function oe({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const a=V.getAbove(t,{type:"block"}),c=V.getAbove(t,{type:"leaf"});if(!a)return{match:!1};if(!c)return{match:!1};const[s]=a,[l]=c;if(i({block:s,leaf:l}))return{match:!1};let d;return d="after"===n.markupType?ne({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=V.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=f.before(e,o);if(!i)return{match:!1};const a=V.getPointBefore(e,{at:i,edge:"start",matchString:n});return a?{match:!0,range:{anchor:a,focus:o}}:{match:!1}}({editor:t,entry:n}),d.match&&re({editor:t,entry:n,range:d.range,insertText:r}),d}const ie={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(V.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=oe({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,n=Q.block(e,["ordered-list","unordered-list"]),r=Q.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return r(o),n(o),t(e)},e}};const ae=[y,b,ie.listNormalization,ie.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(x.isText);return 0===t.length?z():z([N([R(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(x.isText);return 0===t.length?P():P([N([R(t)])])}}])];const ce=g.exports.createContext({});function se(){return g.exports.useContext(ce)}function le(){const e=se(),t=g.exports.useRef(null);return g.exports.useLayoutEffect((()=>{const n=k.toDOMNode(e,e);t.current=n}),[e]),t}const de="editor-default editor-toolbar",ue="editor-default editor-link-popup",fe="editor-default editor-keybind";function pe(){const[,e]=g.exports.useReducer((e=>e+1),0);return e}const me=g.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function he(){return g.exports.useContext(me)}function ge(){const e=he(),t=pe();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const ye=e=>"undefined"==typeof window?null:d.createElement(be,c({},e)),be=({renderButtons:e})=>{const t=le(),n=function(){const e=g.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return g.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=he(),i=(a=pe(),c=300,g.exports.useMemo((()=>E(a,c)),[a,c]));var a,c;return g.exports.useEffect((()=>{if(!t.current)return;r.current=w(t.current,{theme:de,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=L((()=>{r.current&&(i(),r.current.show())}),300),a=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},c=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return a();const n=window.getSelection();if(!n)return a();if(n.isCollapsed)return o.current="",a();const c=n.getRangeAt(0).toString();if(c===o.current)return i();a(!1),e(),o.current=c};return document.addEventListener("selectionchange",c),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",c)}}),[n,t]),C.createPortal(e(),n)},xe="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",ve=()=>new KeyboardEvent("noop");const ke=g.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function Ee(){return g.exports.useContext(ke)}function we(){const e=Ee(),t=pe();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const Ce=S.div`
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
`,Le=S.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,Se=S(Le)``,Oe=S(Le)`
  cursor: pointer;
`,Be=S.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,Me=S.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Ae=()=>"undefined"==typeof window?null:d.createElement(Te,null),Te=()=>{const e=se(),t=le(),n=g.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:a,setHref:c,hadHref:s}=Ee(),{reset:l}=we(),[u,f]=g.exports.useState(!1),[p,m]=g.exports.useState(null),h=e=>{if(m(null),e)return function(e){const t=new RegExp(xe,"i");return e.length<2083&&t.test(e)}(e)?void f(!0):(f(!1),void m("It doesn't look like an URL"));f(!1)};return g.exports.useEffect((()=>{h(a)}),[a]),g.exports.useEffect((()=>{if(t.current)return r.current=w(t.current,{theme:ue,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>l()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),C.createPortal(d.createElement("form",{onSubmit:n=>{var o,c;n.preventDefault(),u&&i.current&&(te.setHref(e,a,{at:i.current}),null==(o=r.current)||o.hide(),null==(c=t.current)||c.focus())}},d.createElement(Ce,null,d.createElement(Se,null,d.createElement(De,null)),d.createElement(Be,{ref:o,value:a,onChange:e=>{c(e.target.value)},placeholder:"Enter the URL"}),s.current&&d.createElement(Oe,{onClick:()=>{var n,o;i.current&&(te.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},d.createElement(Re,null))),p&&d.createElement(Me,null,p)),n)},De=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),Re=e=>d.createElement("svg",c({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})),Ne=({children:e,customExtensions:t=[]})=>{const n=function(e){return g.exports.useMemo((()=>{const t=[...ae,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(v(),t)}),[ie])}(t),r={instance:g.exports.useRef(null),lastSelectedText:g.exports.useRef("")},o=function(){const[e,t]=g.exports.useState("");return{instance:g.exports.useRef(null),input:g.exports.useRef(null),selection:g.exports.useRef(null),hadHref:g.exports.useRef(!1),href:e,setHref:t}}();return d.createElement(ce.Provider,{value:n},d.createElement(me.Provider,{value:r},d.createElement(ke.Provider,{value:o},e)))};const Pe=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();Pe.register("delete-backward",(()=>{})),Pe.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),te.insertSoftBreak(e)})),Pe.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),te.insertExitBreak(e)})),Pe.register("indent",(({event:e})=>{e.preventDefault()})),Pe.register("outdent",(({event:e})=>{e.preventDefault()})),Pe.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=te.getOutTheLeaf(e);n&&t.preventDefault()})),Pe.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),te.toggleModification(e,"bold")})),Pe.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),te.toggleModification(e,"italic")})),Pe.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),te.toggleModification(e,"underlined")})),Pe.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),te.toggleModification(e,"inlineCode")})),Pe.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=f.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))}));const ze={};const He=function({scope:e="global",stopAllEvents:t=!0}={}){ze[e]||(ze[e]=[]);const n=ze[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:O(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"});function qe(){return{toolbar:ge(),linkPopup:we()}}const je={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":["enter","mod+enter"],indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k"};function Ie(e){const t=se(),n=qe();g.exports.useEffect((()=>{const t=c(c({},je),e);He.unregisterAll();Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)He.register(o,((t,r)=>{Pe.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]);return{handleKeyDown:g.exports.useCallback((e=>{He.keyDown(e,t)}),[t])}}const Ke=S.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,Fe=S.button`
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

  &:hover ${Ke} {
    color: white;
  }

  &[data-active='true'] ${Ke} {
    color: white;
  }
`,Ze=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,a=l(t,["icon","isActive","tooltip","style"]);const s=d.createElement(Fe,c({"data-active":r},a),d.createElement(Ke,{style:i},n));return o?d.createElement(B,{theme:fe,content:o,offset:[0,20],hideOnClick:!1},s):s};const Ue=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=se(),a=function(e,t){const n=f.marks(e);return!!n&&Boolean(n[t])}(i,e),c=qe();return d.createElement(Ze,{icon:t,isActive:a,tooltip:r,onClick:e=>{e.preventDefault(),Pe.execute(n,{editor:i,event:ve(),ui:c})},style:o})};const $e=({editor:e,event:t})=>{if(!e.selection)return;if(p.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(xe).test(n)&&(t.preventDefault(),te.setHref(e,n))};function We(){return{handlePaste:function(e,t=[]){return n=>{const r=c({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:se(),ui:qe()},[$e])}}function _e(e){return Q.block(e,["ordered-list","unordered-list"])}function Ge(e,t){return([n,r])=>{const[o,i]=V.isOnEdges(e,{of:r}),a=f.isEmpty(e,n),c=t.node.children;return{isFirst:c[0]===n,isLast:c[c.length-1]===n,isOnStart:o,isOnEnd:i,isEmpty:a,isList:_e(e)(n)}}}function Je(e){return Q.block(e,"paragraph")}function Qe(e,t,n){const{first:r,second:o,third:i}=n;return([n])=>{const a=t.node.children.findIndex((e=>e===n));return{isSimple:!(!r||"paragraph"!==r.node.type||o&&(!_e(e)(o.node)||i)),index:a,isFirst:0===a,isLast:a===t.node.children.length-1,isEmpty:1===n.children.length&&Je(e)(n.children[0])&&f.isEmpty(e,n.children[0]),hasList:_e(e)(n.children[1])}}}function Ve({editor:e,entry:t,list:n}){if(!t)return{item:null,blocks:null};const r=function(e,t){const n=[t.node,t.path];return{first:Ye({entry:Xe(n,0),createMeta:Ge(e,t)}),second:Ye({entry:Xe(n,1),createMeta:Ge(e,t)}),third:Ye({entry:Xe(n,2),createMeta:Ge(e,t)})}}(e,function(e){const[t,n]=e;return{node:t,path:n}}(t)),o=Ye({entry:t,createMeta:Qe(e,n,r)});return o?{item:o,blocks:r}:{item:null,blocks:null}}function Xe([e,t],n){if(e.children[n])return[e.children[n],t.concat(n)]}function Ye({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[n,r]=e;return{node:n,path:r,meta:t([n,r])}}const et={info:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;const r=V.getAbove(e,{at:n,type:"block",mode:"lowest",match:_e(e)});if(!r)return;const o=V.getAbove(e,{at:n,type:"block",mode:"lowest",match:Q.builder(e).block(["ordered-list","unordered-list"]).notEquals(r[0]).compile()}),i=Ye({entry:r,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const a=Ye({entry:o,createMeta:()=>({})}),{item:l,blocks:d}=Ve({editor:e,entry:V.getAbove(e,{at:n,type:"block",mode:"lowest",match:Q.block(e,"list-item")}),list:i});if(!l)return;if(!d)return;const u=Ye({entry:V.getAbove(e,{at:n,type:"block",mode:"lowest",match:Q.builder(e).block("list-item").notEquals(l.node).compile()}),createMeta:()=>({})}),p=Ye({entry:V.getAbove(e,{at:n,type:"block",mode:"highest",match:Q.childOf(e,l.node)}),createMeta:Ge(e,l)});if(!p)return;const m=Q.builder(e).block("list-item").childOf(i.node).compile(),{item:h}=Ve({editor:e,entry:f.previous(e,{at:l.path,match:m}),list:i}),{item:g}=Ve({editor:e,entry:f.next(e,{at:l.path,match:m}),list:i}),y=Q.builder(e).block().childOf(l.node).compile(),b=Ye({entry:f.previous(e,{at:p.path,match:y}),createMeta:Ge(e,l)}),x=Ye({entry:f.next(e,{at:p.path,match:y}),createMeta:Ge(e,l)});return{lists:{current:i,above:a},items:{current:l,previous:h,next:g,above:u},blocks:s(c({},d),{current:p,previous:b,next:x})}}};function tt(e,t,n={}){const{at:r=[]}=n,o=f.nodes(e,{at:r,match:n=>!!f.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let a=null;const c=(e,t)=>{const n=h.next(e);return h.equals(n,t)};for(const s of i){if(!a){a=s;continue}const[,t]=s,[,n]=a;a=s,c(t,n)&&u.mergeNodes(e,{at:n})}}function nt(e,t={}){tt(e,"ordered-list",t),tt(e,"unordered-list",t)}function rt(e,{parent:t,match:n=(()=>!0),to:r,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const a=f.pathRef(e,r),c=new Map;for(const[d,u]of t.node.children.entries())c.set(u,d);const s=t.node.children.filter(n),l=i(s.length);if(s.length>0){const r=Q.block(e);if(l?u.removeNodes(e,{at:t.path}):u.removeNodes(e,{at:t.path,match(e){if(!r(e))return!1;const t=c.get(e);return"number"==typeof t&&n(e,t)}}),!a.current)return;u.insertNodes(e,o(s),{at:a.current})}}function ot(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(p.isRange(n)&&p.isExpanded(n))return;const r=et.info(e,{at:n});if(r){if(!r.lists.above||!r.items.above)return function(e,t={},n){const{at:r=e.selection}=t;if(!r)return;u.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:Q.equals(e,[n.lists.current.node,n.items.current.node])}),nt(e)}(e,t,r);if(1!==r.lists.current.node.children.length){if(rt(e,{parent:r.lists.current,match:(e,t)=>t>r.items.current.meta.index,to:r.items.current.path.concat(r.items.current.node.children.length),transform:e=>q(r.lists.current.node.type,e)}),nt(e,{at:r.items.current.path}),r.items.current.meta.isFirst){const t=et.info(e,{at:n});if(!t)return;if(!t.items.above)return;u.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:Q.equals(e,[t.lists.current.node,t.items.above.node])})}else u.moveNodes(e,{at:r.items.current.path,to:h.next(r.items.above.path)});nt(e,{at:r.lists.above.path})}else u.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!r)return!1;const n=e===r.lists.current.node,o=e===(null==(t=r.items.above)?void 0:t.node);return n||o}})}}const it={insertExitBreak:function(e){var t;const n={handled:!0},r={handled:!1};if(!e.selection)return n;p.isExpanded(e.selection)&&u.delete(e);const o=et.info(e);return o?o.items.current.meta.isSimple?o.blocks.current.meta.isEmpty?(ot(e),n):o.blocks.first?o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||u.insertNodes(e,N(),{at:o.items.current.path}),n):o.blocks.first.meta.isOnEnd?(o.blocks.second?u.insertNodes(e,N(),{at:o.blocks.second.path.concat(0),select:!0}):u.insertNodes(e,N(),{at:h.next(o.items.current.path),select:!0}),n):(u.splitNodes(e,{match:Q.equals(e,o.items.current.node),always:!0}),n):n:r:n},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(p.isExpanded(e.selection))return t;const n=V.getAbove(e,{type:"block",mode:"lowest",match:Q.block(e,"list-item")});if(!n)return t;const[,r]=n,[o]=V.isOnEdges(e,{of:r});return o?(ot(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(p.isRange(n)&&p.isExpanded(n))return;const r=et.info(e,{at:n});if(!r)return;const{lists:o,items:i}=r;i.current.meta.isFirst||i.previous&&(u.wrapNodes(e,q(o.current.node.type,[]),{at:i.current.path}),u.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),nt(e,{at:i.previous.path}))},outdent:ot,mergeSiblings:nt,moveChildren:rt};function at({editor:e}){return V.isInBlock(e,["ordered-list","unordered-list"])}Pe.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=it.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:at}),Pe.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:n}=it.insertExitBreak(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:at}),Pe.override("indent",(({editor:e,event:t})=>{t.preventDefault(),it.indent(e)}),{match:at}),Pe.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),it.outdent(e)}),{match:at});const ct={indent:function(e){if(!e.selection)return;if(p.isExpanded(e.selection))return;const t=V.getAbove(e,{type:"block",mode:"lowest",match:Q.block(e,"paragraph")});if(!t)return;const[,n]=t;u.wrapNodes(e,N([]),{at:n});const r=(()=>{const t=f.previous(e,{at:n}),r=f.next(e,{at:n}),o=Q.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();u.wrapNodes(e,q(r,[]),{at:n}),it.mergeSiblings(e)}};Pe.override("indent",(({editor:e,event:t})=>{t.preventDefault(),ct.indent(e)}),{match:function({editor:e}){return V.isInBlock(e,"paragraph")}});const st=M`
  .tippy-box[data-animation='fade'][data-state='hidden'] {
    opacity: 0;
  }

  [data-tippy-root] {
    max-width: calc(100vw - 10px);
  }

  .tippy-box {
    position: relative;
    background-color: #333;
    color: #fff;
    border-radius: 4px;
    font-size: 14px;
    line-height: 1.4;
    outline: 0;
    transition-property: transform, visibility, opacity;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow {
    bottom: 0;
  }

  .tippy-box[data-placement^='top'] > .tippy-arrow:before {
    bottom: -7px;
    left: 0;
    border-width: 8px 8px 0;
    border-top-color: initial;
    transform-origin: center top;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow {
    top: 0;
  }

  .tippy-box[data-placement^='bottom'] > .tippy-arrow:before {
    top: -7px;
    left: 0;
    border-width: 0 8px 8px;
    border-bottom-color: initial;
    transform-origin: center bottom;
  }

  .tippy-box[data-placement^='left'] > .tippy-arrow {
    right: 0;
  }

  .tippy-box[data-placement^='left'] > .tippy-arrow:before {
    border-width: 8px 0 8px 8px;
    border-left-color: initial;
    right: -7px;
    transform-origin: center left;
  }

  .tippy-box[data-placement^='right'] > .tippy-arrow {
    left: 0;
  }

  .tippy-box[data-placement^='right'] > .tippy-arrow:before {
    left: -7px;
    border-width: 8px 8px 8px 0;
    border-right-color: initial;
    transform-origin: center right;
  }

  .tippy-box[data-inertia][data-state='visible'] {
    transition-timing-function: cubic-bezier(0.54, 1.5, 0.38, 1.11);
  }

  .tippy-arrow {
    width: 16px;
    height: 16px;
    color: #333;
  }

  .tippy-arrow:before {
    content: '';
    position: absolute;
    border-color: transparent;
    border-style: solid;
  }

  .tippy-content {
    position: relative;
    padding: 5px 9px;
    z-index: 1;
  }

  /* Themes */

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
`,lt=M`
  :root {
    --editor-font-family: 'Open Sans', sans-serif;
    --editor-font-size: 16px;
    --editor-line-height: 24px;

    --editor-mod-bold-font-weight: 600;
    --editor-mod-inline-code-font-family: 'Source Code Pro', monospace;
    --editor-mod-inline-code-padding: 4px 6px;
    --editor-mod-inline-code-background: #f7f6f9;
    --editor-mod-inline-code-border-radius: 6px;
    --editor-mod-link-color: rgb(75, 50, 195);

    --editor-paragraph-margin: 1em 0;

    --editor-heading1-margin: 0.67em 0;
    --editor-heading1-font-size: 30px;
    --editor-heading1-line-height: 36px;
    --editor-heading1-font-weight: 400;

    --editor-list-margin: 1em 0;
    --editor-list-padding: 0 0 0 24px;
  }
`,dt=S.div`
  font-family: var(--editor-font-family);
  font-size: var(--editor-font-size);
  line-height: var(--editor-line-height);

  a {
    color: var(--editor-mod-link-color);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
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
  ol ol {
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
`,ut=({value:e,onChange:t,customKeybinds:n})=>{const r=se(),{handleKeyDown:o}=Ie(n),{handlePaste:i}=We();return g.exports.useEffect((()=>{e.length>0||t([j()])}),[e]),d.createElement(dt,null,d.createElement(st,null),d.createElement(A,{editor:r,value:e,onChange:t},d.createElement(T,{renderElement:K,renderLeaf:ee,onKeyDown:o,readOnly:!1,onPaste:i,autoFocus:!0})),d.createElement(ft,null),d.createElement(Ae,null))},ft=()=>d.createElement(ye,{renderButtons:()=>d.createElement(d.Fragment,null,d.createElement(Ue,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),d.createElement(Ue,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),d.createElement(Ue,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),d.createElement(Ue,{mark:"inlineCode",icon:d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("polyline",{points:"7 8 3 12 7 16"}),d.createElement("polyline",{points:"17 8 21 12 17 16"}),d.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),d.createElement(Ue,{mark:"href",icon:d.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),pt=({value:e,customKeybinds:t})=>{const n=se(),{handleKeyDown:r}=Ie(t),{handlePaste:o}=We();return d.createElement(dt,null,d.createElement(st,null),d.createElement(A,{editor:n,value:e,onChange:()=>{}},d.createElement(T,{renderElement:K,renderLeaf:ee,onKeyDown:r,readOnly:!0,onPaste:o,autoFocus:!0})))};const mt=e=>{const t=function(e){const t=c({},e);return e.customKeybinds||(t.customKeybinds={}),e.customExtensions||(t.customExtensions=[]),t}(e),n=t.readOnly?d.createElement(pt,c({},t)):d.createElement(ut,c({},t));return d.createElement(Ne,{customExtensions:t.customExtensions},d.createElement(lt,null),n)},ht=[{type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"c"}]},{type:"unordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"a"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]},{type:"list-item",children:[{type:"paragraph",children:[{text:"b"}]},{type:"ordered-list",children:[{type:"list-item",children:[{type:"paragraph",children:[{text:"nested"}]}]}]}]}]}];function gt(e,t=0,n=[]){for(const r of e)x.isText(r)||(n.push({name:r.type,offset:t}),gt(r.children,t+2,n));return n}function yt(e){const t=gt(e),n=[];for(const o of t){const e=" ".repeat(o.offset);n.push(e+o.name)}const r=n.join("\n");console.log(r)}const bt=()=>{const[e,t]=function(){const[e,t]=g.exports.useState(ht);return g.exports.useEffect((()=>yt(e)),[e]),[e,t]}();return d.createElement(mt,{value:e,onChange:t})};C.render(d.createElement(bt,null),document.querySelector("#root"));
