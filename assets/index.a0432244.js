var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&c(e,n,t[n]);return e},a=(e,r)=>t(e,n(r)),l=(e,t)=>{var n={};for(var c in e)o.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&r)for(var c of r(e))t.indexOf(c)<0&&i.call(e,c)&&(n[c]=e[c]);return n};import{R as d,n as u,T as f,E as p,a as m,P as h,b as g,r as y,w as b,c as x,d as v,e as k,f as E,t as w,g as C,h as L,j as S,q as O,_ as B,i as M,$ as A,S as T,k as R}from"./vendor.483c251a.js";const D=["bold","italic","underlined","inlineCode"],N=(e=[{text:""}])=>({id:u(),type:"paragraph",children:e});Array.from(D);const P=(e=[N()])=>({id:u(),type:"list-item",children:e});Array.from(D);const z=(e=[P()])=>({id:u(),type:"ordered-list",children:e});Array.from(D);const H=(e=[P()])=>({id:u(),type:"unordered-list",children:e});Array.from(D);const q={"ordered-list":z,"unordered-list":H},j=(e,t=[P()])=>(0,q[e])(t),I=N,F={paragraph:({attributes:e,children:t})=>d.createElement("p",s({},e),t),"heading-1":({attributes:e,children:t})=>d.createElement("h1",s({},e),t),"ordered-list":({attributes:e,children:t})=>d.createElement("ol",s({},e),t),"unordered-list":({attributes:e,children:t})=>d.createElement("ul",s({},e),t),"list-item":({attributes:e,children:t})=>d.createElement("li",s({},e),t)};function K(e){const t=F[e.element.type];return d.createElement(t,s({},e))}function Z(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return p.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=l(n,["match"]);return p.above(e,a(s({},o),{match:t=>!!p.isBlock(e,t)&&r(t)}))}function U(e){return m.isRange(e)?e.anchor:h.isPoint(e)?e:g.isPath(e)?{path:e,offset:0}:void 0}function $(e,t){if(!e.selection)return;const n=Z(e,{type:"leaf"});if(!n)return;const[,r]=n,o=U(r);if(!o)return;const i=U(t.at||e.selection);if(!i)return;const c="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const s of c){let n=s.split(""),r=i,c=i,a=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const l=p.before(e,r);if(!l)continue e;if(p.string(e,{anchor:l,focus:r})!==i){if(t.failOnInvalid)continue e;n=s.split("")}if(c=l,n.length+1===s.length&&(a=r),r=l,n.length>0&&h.equals(r,o))continue e}return"start"===t.edge?c:a}}function W(e,t){return n=>{if(!p.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function _(e,t){return e=>!p.isEditor(e)&&t.children.includes(e)}function G(e,t){const n=Array.isArray(t)?t:[t];return e=>n.some((t=>t===e))}function J(e,t){return e=>t!==e}class Q{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(W(this.editor,e)),this}notEquals(e){return this.stages.push(J(this.editor,e)),this}equals(e){return this.stages.push(G(this.editor,e)),this}childOf(e){return this.stages.push(_(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const V={builder:e=>new Q(e),block:W,equals:G,notEquals:J,childOf:_};const X={getAbove:Z,getPointFromLocation:U,getPointBefore:$,getRangeBefore:function(e,t){if(!e.selection)return;const n=$(e,a(s({},t),{edge:"start"}));if(!n)return;const r=U(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=Z(e,{type:"block"});if(!t)return;const[,n]=t,r=p.start(e,n),o=U(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&m.isExpanded(e.selection)},leafHasModifications:function(e,t=D){return t.some((t=>e[t]))},leafModifications:function(e,t=D){return t.filter((t=>e[t]))},isInBlock:function(e,t){const n=Z(e,{type:"block",match:V.block(e,t)});return Boolean(n)},isOnEdges:function(e,t={}){const n=()=>{const t=Z(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const c=U(i);if(!c)return r;const[s,a]=p.edges(e,o);return[h.equals(c,s),h.equals(c,a)]}};const Y={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const ee=e=>function({leaf:e,children:t,attributes:n}){const r=X.leafModifications(e);let o=t;for(const i of r){const e=Y[i];o=d.createElement(e,null,o)}return e.href&&(o=d.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=d.createElement("span",null,o)),d.cloneElement(o,n)}(e);function te(e){return d.createElement(ee,s({},e))}const ne={toggleModification:function(e,t){const n=p.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(f.select(e,r),!p.marks(e))return;e.addMark("href",t),f.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(f.select(e,n),!p.marks(e))return;e.removeMark("href"),f.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(m.isExpanded(e.selection))return{success:!1};const t=X.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=X.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,c=p.end(e,r),s=m.start(e.selection);return h.equals(s,c)&&X.leafHasModifications(o)?(f.insertNodes(e,function({text:e,href:t,modifications:n=[]}){return n.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!1}),f.select(e,g.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;m.isExpanded(e.selection)&&f.delete(e,{at:e.selection});const t=X.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=X.isOnEdges(e,{of:n});if(!o)return r?(f.insertNodes(e,I(),{select:!1}),void f.select(e,p.point(e,g.next(n),{edge:"start"}))):void f.splitNodes(e,{mode:"highest"});f.insertNodes(e,I(),{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(m.isExpanded(e.selection))return void e.deleteFragment("backward");const t=X.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;p.isEmpty(e,n)?f.removeNodes(e,{at:r}):e.deleteBackward("character")}};function re({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=X.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=p.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=X.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function oe({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,c=function({editor:e,entry:t,range:n}){const r=p.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof c)return;f.delete(e,{at:n});const s=X.getAbove(e,{type:"block"}),a=X.getAbove(e,{type:"leaf"});if(!s)return;if(!a)return;const[l]=s,[d]=a,u="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const c=t.transform({text:r,block:o,leaf:i});if(f.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=X.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;f.delete(e,{at:n,unit:"block"})}}p.insertNode(e,c)}({editor:e,entry:t,range:n,text:c,block:l,leaf:d}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const c=t.transform({text:r,block:o,leaf:i});f.delete(e,{at:n}),f.insertNodes(e,c,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:c,block:l,leaf:d});return i&&("leaf"===t.transformType?ne.getOutTheLeaf(e):r(o)),u}function ie({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const c=X.getAbove(t,{type:"block"}),s=X.getAbove(t,{type:"leaf"});if(!c)return{match:!1};if(!s)return{match:!1};const[a]=c,[l]=s;if(i({block:a,leaf:l}))return{match:!1};let d;return d="after"===n.markupType?re({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=X.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=p.before(e,o);if(!i)return{match:!1};const c=X.getPointBefore(e,{at:i,edge:"start",matchString:n});return c?{match:!0,range:{anchor:c,focus:o}}:{match:!1}}({editor:t,entry:n}),d.match&&oe({editor:t,entry:n,range:d.range,insertText:r}),d}const ce={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(X.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=ie({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)},listNormalization:function(e){const{normalizeNode:t}=e,n=V.block(e,["ordered-list","unordered-list"]),r=V.block(e,"list-item");return e.normalizeNode=e=>{const[o]=e;return r(o),n(o),t(e)},e}};const se=[b,x,ce.listNormalization,ce.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(v.isText);return 0===t.length?H():H([P([N(t)])])}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(v.isText);return 0===t.length?z():z([P([N(t)])])}}])];const ae=y.exports.createContext({});function le(){return y.exports.useContext(ae)}function de(){const e=le(),t=y.exports.useRef(null);return y.exports.useLayoutEffect((()=>{const n=E.toDOMNode(e,e);t.current=n}),[e]),t}const ue="editor-default editor-toolbar",fe="editor-default editor-link-popup",pe="editor-default editor-keybind";function me(){const[,e]=y.exports.useReducer((e=>e+1),0);return e}const he=y.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function ge(){return y.exports.useContext(he)}function ye(){const e=ge(),t=me();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const be=e=>"undefined"==typeof window?null:d.createElement(xe,s({},e)),xe=({renderButtons:e})=>{const t=de(),n=function(){const e=y.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return y.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=ge(),i=(c=me(),s=300,y.exports.useMemo((()=>w(c,s)),[c,s]));var c,s;return y.exports.useEffect((()=>{if(!t.current)return;r.current=C(t.current,{theme:ue,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=S((()=>{r.current&&(i(),r.current.show())}),300),c=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},s=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return c();const n=window.getSelection();if(!n)return c();if(n.isCollapsed)return o.current="",c();const s=n.getRangeAt(0).toString();if(s===o.current)return i();c(!1),e(),o.current=s};return document.addEventListener("selectionchange",s),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",s)}}),[n,t]),L.createPortal(e(),n)},ve="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",ke=new KeyboardEvent("noop");const Ee=y.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function we(){return y.exports.useContext(Ee)}function Ce(){const e=we(),t=me();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const Le=O.div`
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
`,Se=O.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,Oe=O(Se)``,Be=O(Se)`
  cursor: pointer;
`,Me=O.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,Ae=O.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Te=()=>"undefined"==typeof window?null:d.createElement(Re,null),Re=()=>{const e=le(),t=de(),n=y.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:c,setHref:s,hadHref:a}=we(),{reset:l}=Ce(),[u,f]=y.exports.useState(!1),[p,m]=y.exports.useState(null),h=e=>{if(m(null),e)return function(e){const t=new RegExp(ve,"i");return e.length<2083&&t.test(e)}(e)?void f(!0):(f(!1),void m("It doesn't look like an URL"));f(!1)};return y.exports.useEffect((()=>{h(c)}),[c]),y.exports.useEffect((()=>{if(t.current)return r.current=C(t.current,{theme:fe,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>l()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),L.createPortal(d.createElement("form",{onSubmit:n=>{var o,s;n.preventDefault(),u&&i.current&&(ne.setHref(e,c,{at:i.current}),null==(o=r.current)||o.hide(),null==(s=t.current)||s.focus())}},d.createElement(Le,null,d.createElement(Oe,null,d.createElement(De,null)),d.createElement(Me,{ref:o,value:c,onChange:e=>{s(e.target.value)},placeholder:"Enter the URL"}),a.current&&d.createElement(Be,{onClick:()=>{var n,o;i.current&&(ne.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},d.createElement(Ne,null))),p&&d.createElement(Ae,null,p)),n)},De=e=>d.createElement("svg",s({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),Ne=e=>d.createElement("svg",s({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})),Pe=({children:e,customExtensions:t=[]})=>{const n=function(e){return y.exports.useMemo((()=>{const t=[...se,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(k(),t)}),[ce])}(t),r={instance:y.exports.useRef(null),lastSelectedText:y.exports.useRef("")},o=function(){const[e,t]=y.exports.useState("");return{instance:y.exports.useRef(null),input:y.exports.useRef(null),selection:y.exports.useRef(null),hadHref:y.exports.useRef(!1),href:e,setHref:t}}();return d.createElement(ae.Provider,{value:n},d.createElement(he.Provider,{value:r},d.createElement(Ee.Provider,{value:o},e)))};const ze=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();ze.register("delete-backward",(()=>{})),ze.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),ne.insertSoftBreak(e)})),ze.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),ne.insertExitBreak(e)})),ze.register("indent",(({event:e})=>{e.preventDefault()})),ze.register("outdent",(({event:e})=>{e.preventDefault()})),ze.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=ne.getOutTheLeaf(e);n&&t.preventDefault()})),ze.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),ne.toggleModification(e,"bold")})),ze.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),ne.toggleModification(e,"italic")})),ze.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),ne.toggleModification(e,"underlined")})),ze.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),ne.toggleModification(e,"inlineCode")})),ze.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=p.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))}));const He={};const qe=function({scope:e="global",stopAllEvents:t=!0}={}){He[e]||(He[e]=[]);const n=He[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:B(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"});function je(){return{toolbar:ye(),linkPopup:Ce()}}const Ie={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":["enter","mod+enter"],indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k"};const Fe=O.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,Ke=O.button`
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

  &:hover ${Fe} {
    color: white;
  }

  &[data-active='true'] ${Fe} {
    color: white;
  }
`,Ze=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,c=l(t,["icon","isActive","tooltip","style"]);const a=d.createElement(Ke,s({"data-active":r},c),d.createElement(Fe,{style:i},n));return o?d.createElement(M,{theme:pe,content:o,offset:[0,20],hideOnClick:!1},a):a};const Ue=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=le(),c=function(e,t){const n=p.marks(e);return!!n&&Boolean(n[t])}(i,e),s=je();return d.createElement(Ze,{icon:t,isActive:c,tooltip:r,onClick:e=>{e.preventDefault(),ze.execute(n,{editor:i,event:ke,ui:s})},style:o})};const $e=({editor:e,event:t})=>{if(!e.selection)return;if(m.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(ve).test(n)&&(t.preventDefault(),ne.setHref(e,n))};function We(){return{handlePaste:function(e,t=[]){return n=>{const r=s({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:le(),ui:je()},[$e])}}function _e(e){return V.block(e,["ordered-list","unordered-list"])}function Ge(e,t){return([n,r])=>{const[o,i]=X.isOnEdges(e,{of:r}),c=p.isEmpty(e,n),s=t.node.children;return{isFirst:s[0]===n,isLast:s[s.length-1]===n,isOnStart:o,isOnEnd:i,isEmpty:c,isList:_e(e)(n)}}}function Je(e){return V.block(e,"paragraph")}function Qe(e,t,n){const{first:r,second:o,third:i}=n;return([n])=>{const c=t.node.children.findIndex((e=>e===n));return{isSimple:!(!r||"paragraph"!==r.node.type||o&&(!_e(e)(o.node)||i)),index:c,isFirst:0===c,isLast:c===t.node.children.length-1,isEmpty:1===n.children.length&&Je(e)(n.children[0])&&p.isEmpty(e,n.children[0]),hasList:_e(e)(n.children[1])}}}function Ve({editor:e,entry:t,list:n}){if(!t)return{item:null,blocks:null};const r=function(e,t){const n=[t.node,t.path];return{first:Ye({entry:Xe(n,0),createMeta:Ge(e,t)}),second:Ye({entry:Xe(n,1),createMeta:Ge(e,t)}),third:Ye({entry:Xe(n,2),createMeta:Ge(e,t)})}}(e,function(e){const[t,n]=e;return{node:t,path:n}}(t)),o=Ye({entry:t,createMeta:Qe(e,n,r)});return o?{item:o,blocks:r}:{item:null,blocks:null}}function Xe([e,t],n){if(e.children[n])return[e.children[n],t.concat(n)]}function Ye({entry:e,createMeta:t=(()=>({}))}){if(!e)return null;const[n,r]=e;return{node:n,path:r,meta:t([n,r])}}const et={info:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;const r=X.getAbove(e,{at:n,type:"block",mode:"lowest",match:_e(e)});if(!r)return;const o=X.getAbove(e,{at:n,type:"block",mode:"lowest",match:V.builder(e).block(["ordered-list","unordered-list"]).notEquals(r[0]).compile()}),i=Ye({entry:r,createMeta:()=>({isNested:Boolean(o)})});if(!i)return;const c=Ye({entry:o,createMeta:()=>({})}),{item:l,blocks:d}=Ve({editor:e,entry:X.getAbove(e,{at:n,type:"block",mode:"lowest",match:V.block(e,"list-item")}),list:i});if(!l)return;if(!d)return;const u=Ye({entry:X.getAbove(e,{at:n,type:"block",mode:"lowest",match:V.builder(e).block("list-item").notEquals(l.node).compile()}),createMeta:()=>({})}),f=Ye({entry:X.getAbove(e,{at:n,type:"block",mode:"highest",match:V.childOf(e,l.node)}),createMeta:Ge(e,l)});if(!f)return;const m=V.builder(e).block("list-item").childOf(i.node).compile(),{item:h}=Ve({editor:e,entry:p.previous(e,{at:l.path,match:m}),list:i}),{item:g}=Ve({editor:e,entry:p.next(e,{at:l.path,match:m}),list:i}),y=V.builder(e).block().childOf(l.node).compile(),b=Ye({entry:p.previous(e,{at:f.path,match:y}),createMeta:Ge(e,l)}),x=Ye({entry:p.next(e,{at:f.path,match:y}),createMeta:Ge(e,l)});return{lists:{current:i,above:c},items:{current:l,previous:h,next:g,above:u},blocks:a(s({},d),{current:f,previous:b,next:x})}}};function tt(e,t,n={}){const{at:r=[]}=n,o=p.nodes(e,{at:r,match:n=>!!p.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let c=null;const s=(e,t)=>{const n=g.next(e);return g.equals(n,t)};for(const a of i){if(!c){c=a;continue}const[,t]=a,[,n]=c;c=a,s(t,n)&&f.mergeNodes(e,{at:n})}}function nt(e,t={}){tt(e,"ordered-list",t),tt(e,"unordered-list",t)}function rt(e,{parent:t,match:n=(()=>!0),to:r,transform:o=(e=>e),willRemoveParent:i=(e=>e===t.node.children.length)}){const c=p.pathRef(e,r),s=new Map;for(const[d,u]of t.node.children.entries())s.set(u,d);const a=t.node.children.filter(n),l=i(a.length);if(a.length>0){const r=V.block(e);if(l?f.removeNodes(e,{at:t.path}):f.removeNodes(e,{at:t.path,match(e){if(!r(e))return!1;const t=s.get(e);return"number"==typeof t&&n(e,t)}}),!c.current)return;f.insertNodes(e,o(a),{at:c.current})}}function ot(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=et.info(e,{at:n});if(r){if(!r.lists.above||!r.items.above)return function(e,t={},n){const{at:r=e.selection}=t;if(!r)return;f.unwrapNodes(e,{at:n.items.current.path,mode:"all",split:!0,match:V.equals(e,[n.lists.current.node,n.items.current.node])}),nt(e)}(e,t,r);if(1!==r.lists.current.node.children.length){if(rt(e,{parent:r.lists.current,match:(e,t)=>t>r.items.current.meta.index,to:r.items.current.path.concat(r.items.current.node.children.length),transform:e=>j(r.lists.current.node.type,e)}),nt(e,{at:r.items.current.path}),r.items.current.meta.isFirst){const t=et.info(e,{at:n});if(!t)return;if(!t.items.above)return;f.unwrapNodes(e,{at:t.items.current.path,mode:"all",split:!0,match:V.equals(e,[t.lists.current.node,t.items.above.node])})}else f.moveNodes(e,{at:r.items.current.path,to:g.next(r.items.above.path)});nt(e,{at:r.lists.above.path})}else f.unwrapNodes(e,{at:r.items.current.path,mode:"all",split:!0,match:function(e){var t;if(!r)return!1;const n=e===r.lists.current.node,o=e===(null==(t=r.items.above)?void 0:t.node);return n||o}})}}const it={insertExitBreak:function(e){var t;const n={handled:!0},r={handled:!1};if(!e.selection)return n;m.isExpanded(e.selection)&&f.delete(e);const o=et.info(e);return o?o.items.current.meta.isSimple?o.blocks.current.meta.isEmpty?(ot(e),n):o.blocks.first?o.blocks.first.meta.isOnStart?((null==(t=o.items.previous)?void 0:t.meta.isEmpty)||f.insertNodes(e,P(),{at:o.items.current.path}),n):o.blocks.first.meta.isOnEnd?(o.blocks.second?f.insertNodes(e,P(),{at:o.blocks.second.path.concat(0),select:!0}):f.insertNodes(e,P(),{at:g.next(o.items.current.path),select:!0}),n):(f.splitNodes(e,{match:V.equals(e,o.items.current.node),always:!0}),n):n:r:n},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(m.isExpanded(e.selection))return t;const n=X.getAbove(e,{type:"block",mode:"lowest",match:V.block(e,"list-item")});if(!n)return t;const[,r]=n,[o]=X.isOnEdges(e,{of:r});return o?(ot(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=et.info(e,{at:n});if(!r)return;const{lists:o,items:i}=r;i.current.meta.isFirst||i.previous&&(f.wrapNodes(e,j(o.current.node.type,[]),{at:i.current.path}),f.moveNodes(e,{at:i.current.path,to:i.previous.path.concat(i.previous.node.children.length)}),nt(e,{at:i.previous.path}))},outdent:ot,mergeSiblings:nt,moveChildren:rt};function ct({editor:e}){return X.isInBlock(e,["ordered-list","unordered-list"])}ze.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=it.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:ct}),ze.override("insert-exit-break",(({editor:e,event:t})=>{const{handled:n}=it.insertExitBreak(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:ct}),ze.override("indent",(({editor:e,event:t})=>{t.preventDefault(),it.indent(e)}),{match:ct}),ze.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),it.outdent(e)}),{match:ct});const st={indent:function(e){if(!e.selection)return;if(m.isExpanded(e.selection))return;const t=X.getAbove(e,{type:"block",mode:"lowest",match:V.block(e,"paragraph")});if(!t)return;const[,n]=t;f.wrapNodes(e,P([]),{at:n});const r=(()=>{const t=p.previous(e,{at:n}),r=p.next(e,{at:n}),o=V.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();f.wrapNodes(e,j(r,[]),{at:n}),it.mergeSiblings(e)}};ze.override("indent",(({editor:e,event:t})=>{t.preventDefault(),st.indent(e)}),{match:function({editor:e}){return X.isInBlock(e,"paragraph")}});const at=A`
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
`,lt=O.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  line-height: 24px;

  a {
    color: rgb(75, 50, 195);
    text-decoration: none;
  }

  a:hover {
    text-decoration: underline;
  }

  code {
    font-family: 'Source Code Pro', monospace;
    padding: 4px 6px;
    background: #f7f6f9;
    border-radius: 6px;
  }

  b {
    font-weight: 600;
  }

  h1 {
    font-size: 30px;
    line-height: 36px;
    font-weight: 400;
  }

  p {
    font-size: 16px;
    line-height: 24px;
  }

  ol,
  ul {
    padding-left: 24px;
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
`,dt=({value:e,onChange:t,readOnly:n=!1,customKeybinds:r={}})=>{const o=le(),{handleKeyDown:i}=function(e){const t=le(),n=je();return y.exports.useEffect((()=>{const t=s(s({},Ie),e);qe.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)qe.register(o,((t,r)=>{ze.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:y.exports.useCallback((e=>{qe.keyDown(e,t)}),[t])}}(r),{handlePaste:c}=We();return y.exports.useEffect((()=>{e.length>0||t([I()])}),[e]),d.createElement(lt,null,d.createElement(at,null),d.createElement(T,{editor:o,value:e,onChange:t},d.createElement(R,{renderElement:K,renderLeaf:te,onKeyDown:i,readOnly:n,onPaste:c,autoFocus:!0})),!n&&d.createElement(d.Fragment,null,d.createElement(ut,null),d.createElement(Te,null)))},ut=()=>d.createElement(be,{renderButtons:()=>d.createElement(d.Fragment,null,d.createElement(Ue,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),d.createElement(Ue,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),d.createElement(Ue,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),d.createElement(Ue,{mark:"inlineCode",icon:d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("polyline",{points:"7 8 3 12 7 16"}),d.createElement("polyline",{points:"17 8 21 12 17 16"}),d.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),d.createElement(Ue,{mark:"href",icon:d.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),ft=({value:e,onChange:t,readOnly:n=!1,customKeybinds:r={},customExtensions:o=[]})=>d.createElement(Pe,{customExtensions:o},d.createElement(dt,{value:e,onChange:t,readOnly:n,customKeybinds:r})),pt=[{id:u(),type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{id:u(),type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"a"}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"nested"}]}]}]}]},{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"b"}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"nested"}]}]}]}]},{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"c"}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"nested"}]}]}]}]}]},{id:u(),type:"ordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"a"}]},{id:u(),type:"ordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"nested"}]}]}]}]},{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"b"}]},{id:u(),type:"ordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"paragraph",children:[{text:"nested"}]}]}]}]}]}];function mt(e,t=0,n=[]){for(const r of e)v.isText(r)||(n.push({name:r.type,offset:t}),mt(r.children,t+2,n));return n}function ht(e){const t=mt(e),n=[];for(const o of t){const e=" ".repeat(o.offset);n.push(e+o.name)}const r=n.join("\n");console.log(r)}const gt=()=>{const[e,t]=function(){const[e,t]=y.exports.useState(pt);return y.exports.useEffect((()=>ht(e)),[e]),[e,t]}();return d.createElement(ft,{value:e,onChange:t})};L.render(d.createElement(gt,null),document.querySelector("#root"));
