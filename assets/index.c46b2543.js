var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,l=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&c(e,n,t[n]);return e},s=(e,r)=>t(e,n(r)),a=(e,t)=>{var n={};for(var c in e)o.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&r)for(var c of r(e))t.indexOf(c)<0&&i.call(e,c)&&(n[c]=e[c]);return n};import{R as d,n as u,T as f,E as p,a as m,P as h,b as g,r as y,w as x,c as b,d as k,e as v,f as w,t as E,g as C,h as L,j as S,q as B,_ as A,i as O,$ as T,S as R,k as D}from"./vendor.91f3ccc0.js";const M=["bold","italic","underlined","inlineCode"],P=(e=[{text:""}])=>({id:u(),type:"list-item-content",children:e});Array.from(M);const N=(e=[{text:""}])=>({id:u(),type:"list-item",children:[P(e)]});Array.from(M);const H=(e=[{text:""}])=>({id:u(),type:"ordered-list",children:[N(e)]});Array.from(M);const z=(e=[{text:""}])=>({id:u(),type:"unordered-list",children:[N(e)]});Array.from(M);const j={"ordered-list":H,"unordered-list":z},I=(e,t=[{text:""}])=>(0,j[e])(t);Array.from(M);const q=(e=[{text:""}])=>({id:u(),type:"paragraph",children:e}),K={paragraph:({attributes:e,children:t})=>d.createElement("p",l({},e),t),"heading-1":({attributes:e,children:t})=>d.createElement("h1",l({},e),t),"ordered-list":({attributes:e,children:t})=>d.createElement("ol",l({},e),t),"unordered-list":({attributes:e,children:t})=>d.createElement("ul",l({},e),t),"list-item":({attributes:e,children:t})=>d.createElement("li",l({},e),t),"list-item-content":({attributes:e,children:t})=>d.createElement("div",l({},e),t)};function F(e){const t=K[e.element.type];return d.createElement(t,l({},e))}function Z(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return p.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=a(n,["match"]);return p.above(e,s(l({},o),{match:t=>!!p.isBlock(e,t)&&r(t)}))}function U(e){return m.isRange(e)?e.anchor:h.isPoint(e)?e:g.isPath(e)?{path:e,offset:0}:void 0}function $(e,t){if(!e.selection)return;const n=Z(e,{type:"leaf"});if(!n)return;const[,r]=n,o=U(r);if(!o)return;const i=U(t.at||e.selection);if(!i)return;const c="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const l of c){let n=l.split(""),r=i,c=i,s=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const a=p.before(e,r);if(!a)continue e;if(p.string(e,{anchor:a,focus:r})!==i){if(t.failOnInvalid)continue e;n=l.split("")}if(c=a,n.length+1===l.length&&(s=r),r=a,n.length>0&&h.equals(r,o))continue e}return"start"===t.edge?c:s}}function W(e,t){return n=>{if(!p.isBlock(e,n))return!1;if(!t)return!0;return(Array.isArray(t)?t:[t]).includes(n.type)}}function _(e,t){return e=>t!==e}class G{constructor(e){this.stages=[],this.editor=e}block(e){return this.stages.push(W(this.editor,e)),this}notEquals(e){return this.stages.push(_(this.editor,e)),this}compile(){return e=>this.stages.every((t=>t(e)))}}const J={builder:e=>new G(e),block:W,notEquals:_};const Q={getAbove:Z,getPointFromLocation:U,getPointBefore:$,getRangeBefore:function(e,t){if(!e.selection)return;const n=$(e,s(l({},t),{edge:"start"}));if(!n)return;const r=U(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=Z(e,{type:"block"});if(!t)return;const[,n]=t,r=p.start(e,n),o=U(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&m.isExpanded(e.selection)},leafHasModifications:function(e,t=M){return t.some((t=>e[t]))},leafModifications:function(e,t=M){return t.filter((t=>e[t]))},isInBlock:function(e,t){const n=Z(e,{type:"block",match:J.block(e,t)});return Boolean(n)},isOnEdges:function(e,t={}){const n=()=>{const t=Z(e,{type:"block",mode:"lowest"});if(t)return t[1]},r=[!1,!1],{of:o=n(),location:i=e.selection}=t;if(!o)return r;if(!i)return r;const c=U(i);if(!c)return r;const[l,s]=p.edges(e,o);return[h.equals(c,l),h.equals(c,s)]}};const V={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const X=e=>function({leaf:e,children:t,attributes:n}){const r=Q.leafModifications(e);let o=t;for(const i of r){const e=V[i];o=d.createElement(e,null,o)}return e.href&&(o=d.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=d.createElement("span",null,o)),d.cloneElement(o,n)}(e);function Y(e){return d.createElement(X,l({},e))}const ee={toggleModification:function(e,t){const n=p.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(f.select(e,r),!p.marks(e))return;e.addMark("href",t),f.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(f.select(e,n),!p.marks(e))return;e.removeMark("href"),f.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(m.isExpanded(e.selection))return{success:!1};const t=Q.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=Q.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o,i]=n,c=p.end(e,r),l=m.start(e.selection);return h.equals(l,c)&&Q.leafHasModifications(o)?(f.insertNodes(e,function({text:e,href:t,modifications:n=[]}){return n.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!1}),f.select(e,g.next(i)),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;m.isExpanded(e.selection)&&f.delete(e,{at:e.selection});const t=Q.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=Q.isOnEdges(e,{of:n});if(!o)return r?(f.insertNodes(e,q(),{select:!1}),void f.select(e,p.point(e,g.next(n),{edge:"start"}))):void f.splitNodes(e,{mode:"highest"});f.insertNodes(e,q(),{select:!0})},insertSoftBreak:e=>{e.selection&&e.insertText("\n")},deleteBackward:e=>{if(!e.selection)return;if(m.isExpanded(e.selection))return void e.deleteFragment("backward");const t=Q.getAbove(e,{type:"block",mode:"highest"});if(!t)return;const[n,r]=t;p.isEmpty(e,n)?f.removeNodes(e,{at:r}):e.deleteBackward("character")}};function te({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=Q.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=p.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=Q.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function ne({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,c=function({editor:e,entry:t,range:n}){const r=p.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof c)return;f.delete(e,{at:n});const l=Q.getAbove(e,{type:"block"}),s=Q.getAbove(e,{type:"leaf"});if(!l)return;if(!s)return;const[a]=l,[d]=s,u="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const c=t.transform({text:r,block:o,leaf:i});if(f.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=Q.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;f.delete(e,{at:n,unit:"block"})}}p.insertNode(e,c)}({editor:e,entry:t,range:n,text:c,block:a,leaf:d}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const c=t.transform({text:r,block:o,leaf:i});f.delete(e,{at:n}),f.insertNodes(e,c,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:c,block:a,leaf:d});return i&&("leaf"===t.transformType?ee.getOutTheLeaf(e):r(o)),u}function re({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const c=Q.getAbove(t,{type:"block"}),l=Q.getAbove(t,{type:"leaf"});if(!c)return{match:!1};if(!l)return{match:!1};const[s]=c,[a]=l;if(i({block:s,leaf:a}))return{match:!1};let d;return d="after"===n.markupType?te({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=Q.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=p.before(e,o);if(!i)return{match:!1};const c=Q.getPointBefore(e,{at:i,edge:"start",matchString:n});return c?{match:!0,range:{anchor:c,focus:o}}:{match:!1}}({editor:t,entry:n}),d.match&&ne({editor:t,entry:n,range:d.range,insertText:r}),d}const oe={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(Q.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=re({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)}};const ie=[x,b,oe.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(k.isText);return 0===t.length?z():z(t)}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(k.isText);return 0===t.length?H():H(t)}}])];const ce=y.exports.createContext({});function le(){return y.exports.useContext(ce)}function se(){const e=le(),t=y.exports.useRef(null);return y.exports.useLayoutEffect((()=>{const n=w.toDOMNode(e,e);t.current=n}),[e]),t}const ae="editor-default editor-toolbar",de="editor-default editor-link-popup",ue="editor-default editor-keybind";function fe(){const[,e]=y.exports.useReducer((e=>e+1),0);return e}const pe=y.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function me(){return y.exports.useContext(pe)}function he(){const e=me(),t=fe();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const ge=e=>"undefined"==typeof window?null:d.createElement(ye,l({},e)),ye=({renderButtons:e})=>{const t=se(),n=function(){const e=y.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("toolbar-container"),e}),[]);return y.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=me(),i=(c=fe(),l=300,y.exports.useMemo((()=>E(c,l)),[c,l]));var c,l;return y.exports.useEffect((()=>{if(!t.current)return;r.current=C(t.current,{theme:ae,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=S((()=>{r.current&&(i(),r.current.show())}),300),c=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},l=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return c();const n=window.getSelection();if(!n)return c();if(n.isCollapsed)return o.current="",c();const l=n.getRangeAt(0).toString();if(l===o.current)return i();c(!1),e(),o.current=l};return document.addEventListener("selectionchange",l),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",l)}}),[n,t]),L.createPortal(e(),n)},xe="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",be=new KeyboardEvent("noop");const ke=y.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function ve(){return y.exports.useContext(ke)}function we(){const e=ve(),t=fe();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const Ee=B.div`
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
`,Ce=B.div`
  display: flex;
  align-items: center;
  height: 28px;
  padding: 0 5px;

  & svg {
    width: 20px;
    height: 20px;
  }
`,Le=B(Ce)``,Se=B(Ce)`
  cursor: pointer;
`,Be=B.input`
  width: 100%;
  height: 28px;
  padding: 0;
  font-size: 14px;
  line-height: 28px;
  border: none;
  background: transparent;
  color: inherit;
  outline: none;
`,Ae=B.div`
  margin-top: 8px;
  margin-bottom: 0;
  padding: 0 4px;
  font-size: 12px;
`;const Oe=()=>"undefined"==typeof window?null:d.createElement(Te,null),Te=()=>{const e=le(),t=se(),n=y.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add("link-popup-container"),e}),[]),{instance:r,input:o,selection:i,href:c,setHref:l,hadHref:s}=ve(),{reset:a}=we(),[u,f]=y.exports.useState(!1),[p,m]=y.exports.useState(null),h=e=>{if(m(null),e)return function(e){const t=new RegExp(xe,"i");return e.length<2083&&t.test(e)}(e)?void f(!0):(f(!1),void m("It doesn't look like an URL"));f(!1)};return y.exports.useEffect((()=>{h(c)}),[c]),y.exports.useEffect((()=>{if(t.current)return r.current=C(t.current,{theme:de,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>a()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),L.createPortal(d.createElement("form",{onSubmit:n=>{var o,l;n.preventDefault(),u&&i.current&&(ee.setHref(e,c,{at:i.current}),null==(o=r.current)||o.hide(),null==(l=t.current)||l.focus())}},d.createElement(Ee,null,d.createElement(Le,null,d.createElement(Re,null)),d.createElement(Be,{ref:o,value:c,onChange:e=>{l(e.target.value)},placeholder:"Enter the URL"}),s.current&&d.createElement(Se,{onClick:()=>{var n,o;i.current&&(ee.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},d.createElement(De,null))),p&&d.createElement(Ae,null,p)),n)},Re=e=>d.createElement("svg",l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),De=e=>d.createElement("svg",l({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),d.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})),Me=({children:e,customExtensions:t=[]})=>{const n=function(e){return y.exports.useMemo((()=>{const t=[...ie,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(v(),t)}),[oe])}(t),r={instance:y.exports.useRef(null),lastSelectedText:y.exports.useRef("")},o=function(){const[e,t]=y.exports.useState("");return{instance:y.exports.useRef(null),input:y.exports.useRef(null),selection:y.exports.useRef(null),hadHref:y.exports.useRef(!1),href:e,setHref:t}}();return d.createElement(ce.Provider,{value:n},d.createElement(pe.Provider,{value:r},d.createElement(ke.Provider,{value:o},e)))};const Pe=function(){const e=[],t=(t,n)=>{const r=e.filter((e=>e.action===t)).sort(((e,t)=>t.priority-e.priority));for(const e of r){if(!e.match(n))continue;const t=e.callback(n)||{},{skipped:r=!1}=t;if(!r)break}};return{register:(t,n)=>{e.push({action:t,priority:1,callback:n,match:()=>!0})},override:(t,n,{match:r=(()=>!0),priority:o=2}={})=>{e.push({action:t,priority:o,callback:n,match:r})},execute:t,curryExecute:e=>n=>{t(e,n)}}}();Pe.register("delete-backward",(()=>{})),Pe.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),ee.insertSoftBreak(e)})),Pe.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),ee.insertExitBreak(e)})),Pe.register("indent",(()=>{})),Pe.register("outdent",(()=>{})),Pe.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=ee.getOutTheLeaf(e);n&&t.preventDefault()})),Pe.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),ee.toggleModification(e,"bold")})),Pe.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),ee.toggleModification(e,"italic")})),Pe.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),ee.toggleModification(e,"underlined")})),Pe.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),ee.toggleModification(e,"inlineCode")})),Pe.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=p.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))}));const Ne={};const He=function({scope:e="global",stopAllEvents:t=!0}={}){Ne[e]||(Ne[e]=[]);const n=Ne[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:A(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"});function ze(){return{toolbar:he(),linkPopup:we()}}const je={"delete-backward":"backspace","insert-soft-break":"shift+enter","insert-exit-break":["enter","mod+enter"],indent:"tab",outdent:"shift+tab","get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k"};const Ie=B.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
`,qe=B.button`
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

  &:hover ${Ie} {
    color: white;
  }

  &[data-active='true'] ${Ie} {
    color: white;
  }
`,Ke=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,c=a(t,["icon","isActive","tooltip","style"]);const s=d.createElement(qe,l({"data-active":r},c),d.createElement(Ie,{style:i},n));return o?d.createElement(O,{theme:ue,content:o,offset:[0,20],hideOnClick:!1},s):s};const Fe=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=le(),c=function(e,t){const n=p.marks(e);return!!n&&Boolean(n[t])}(i,e),l=ze();return d.createElement(Ke,{icon:t,isActive:c,tooltip:r,onClick:e=>{e.preventDefault(),Pe.execute(n,{editor:i,event:be,ui:l})},style:o})};const Ze=({editor:e,event:t})=>{if(!e.selection)return;if(m.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(xe).test(n)&&(t.preventDefault(),ee.setHref(e,n))};function Ue(){return{handlePaste:function(e,t=[]){return n=>{const r=l({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:le(),ui:ze()},[Ze])}}function $e(e,t,n={}){const{at:r=[]}=n,o=p.nodes(e,{at:r,match:n=>!!p.isBlock(e,n)&&n.type===t,reverse:!0}),i=Array.from(o).sort(((e,t)=>e[1].length-t[1].length));let c=null;const l=(e,t)=>{const n=g.next(e);return g.equals(n,t)};for(const s of i){if(!c){c=s;continue}const[,t]=s,[,n]=c;c=s,l(t,n)&&f.mergeNodes(e,{at:n})}}function We(e,t={}){$e(e,"ordered-list",t),$e(e,"unordered-list",t)}function _e(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=J.block(e,["ordered-list","unordered-list"]),o=Q.getAbove(e,{at:n,type:"block",mode:"lowest",match:r});if(!o)return;const[i,c]=o,l=Q.getAbove(e,{at:n,type:"block",mode:"lowest",match:J.block(e,"list-item")});if(!l)return;const[s,a]=l,d=Q.getAbove(e,{at:n,type:"block",mode:"lowest",match:J.builder(e).block("list-item").notEquals(s).compile()});if(!d){if(s.children.length>1){for(let t=s.children[1].children.length-1;t>=0;t--)_e(e,{at:a.concat([1,t,0])})}return f.setNodes(e,{type:"paragraph"},{at:a.concat(0)}),f.unwrapNodes(e,{at:a.concat(0),mode:"lowest",match:J.block(e,"list-item")}),f.unwrapNodes(e,{at:a,mode:"lowest",match:J.block(e,["ordered-list","unordered-list"]),split:!0}),void We(e)}const[,u]=d,h=p.next(e,{at:a}),y=s===i.children[0],x=1===i.children.length;if(h){const[,t]=h;f.splitNodes(e,{at:t,mode:"lowest",match:r});const n=g.next(g.parent(t));f.moveNodes(e,{at:n,to:a.concat(s.children.length)})}f.moveNodes(e,{at:a,to:g.next(u)}),(y||x)&&f.removeNodes(e,{at:c}),We(e)}const Ge={insertExitBreak:function(e){if(!e.selection)return;m.isExpanded(e.selection)&&f.delete(e,{at:e.selection});const t=Q.getAbove(e,{type:"block",mode:"lowest",match:J.block(e,["ordered-list","unordered-list"])});if(!t)return;const[n]=t,r=J.block(e,"list-item"),o=Q.getAbove(e,{type:"block",mode:"lowest",match:r});if(!o)return;const[i,c]=o,[l,s]=Q.isOnEdges(e,{of:c}),a=i===n.children[n.children.length-1],d=i.children.length>1;if(l&&s&&a&&!d)_e(e);else{if(!s)return l?(f.insertNodes(e,N(),{select:!1,match:r}),void f.select(e,p.point(e,g.next(c),{edge:"start"}))):void f.splitNodes(e,{mode:"lowest",match:r,always:!0});f.insertNodes(e,N(),{select:!0,match:r})}},deleteBackward:function(e){const t={handled:!1};if(!e.selection)return t;if(m.isExpanded(e.selection))return t;const n=Q.getAbove(e,{type:"block",mode:"lowest",match:e=>"list-item-content"===e.type});if(!n)return t;const[,r]=n,[o]=Q.isOnEdges(e,{of:r});return o?(_e(e),{handled:!0}):t},indent:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(m.isRange(n)&&m.isExpanded(n))return;const r=Q.getAbove(e,{at:n,type:"block",mode:"lowest",match:J.block(e,["ordered-list","unordered-list"])});if(!r)return;const[o]=r,i=Q.getAbove(e,{at:n,type:"block",mode:"lowest",match:J.block(e,"list-item")});if(!i)return;const[c,l]=i;if(c===o.children[0])return;const s=p.previous(e,{at:l,mode:"lowest"});if(!s)return;const[a,d]=s;f.wrapNodes(e,I(o.type,[]),{at:l}),f.moveNodes(e,{at:l,to:d.concat(a.children.length)}),We(e,{at:d})},outdent:_e,mergeSiblings:We};function Je({editor:e}){return Q.isInBlock(e,["ordered-list","unordered-list"])}Pe.override("delete-backward",(({editor:e,event:t})=>{const{handled:n}=Ge.deleteBackward(e);if(!n)return{skipped:!0};t.preventDefault()}),{match:Je}),Pe.override("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),Ge.insertExitBreak(e)}),{match:Je}),Pe.override("indent",(({editor:e,event:t})=>{t.preventDefault(),Ge.indent(e)}),{match:Je}),Pe.override("outdent",(({editor:e,event:t})=>{t.preventDefault(),Ge.outdent(e)}),{match:Je});const Qe={indent:function(e){if(!e.selection)return;if(m.isExpanded(e.selection))return;const t=Q.getAbove(e,{type:"block",mode:"lowest",match:J.block(e,"paragraph")});if(!t)return;const[,n]=t;f.setNodes(e,{type:"list-item-content"},{at:n}),f.wrapNodes(e,N([]),{at:n});const r=(()=>{const t=p.previous(e,{at:n}),r=p.next(e,{at:n}),o=J.block(e,["ordered-list","unordered-list"]);if(t){const e=t[0];if(o(e))return e.type}if(r){const e=r[0];if(o(e))return e.type}return"unordered-list"})();f.wrapNodes(e,I(r,[]),{at:n}),Ge.mergeSiblings(e)}};Pe.override("indent",(({editor:e,event:t})=>{t.preventDefault(),Qe.indent(e)}),{match:function({editor:e}){return Q.isInBlock(e,"paragraph")}});const Ve=T`
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
`,Xe=B.div`
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

  .toolbar-container {
    display: flex;
    padding: 6px;
    user-select: none;
  }

  .link-popup-container {
    width: 280px;
    padding: 8px;
  }
`,Ye=({value:e,onChange:t,readOnly:n=!1,customKeybinds:r={}})=>{const o=le(),{handleKeyDown:i}=function(e){const t=le(),n=ze();return y.exports.useEffect((()=>{const t=l(l({},je),e);He.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)He.register(o,((t,r)=>{Pe.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:y.exports.useCallback((e=>{He.keyDown(e,t)}),[t])}}(r),{handlePaste:c}=Ue();return d.createElement(Xe,null,d.createElement(Ve,null),d.createElement(R,{editor:o,value:e,onChange:t},d.createElement(D,{renderElement:F,renderLeaf:Y,onKeyDown:i,readOnly:n,onPaste:c,autoFocus:!0})),!n&&d.createElement(d.Fragment,null,d.createElement(et,null),d.createElement(Oe,null)))},et=()=>d.createElement(ge,{renderButtons:()=>d.createElement(d.Fragment,null,d.createElement(Fe,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),d.createElement(Fe,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),d.createElement(Fe,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),d.createElement(Fe,{mark:"inlineCode",icon:d.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},d.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),d.createElement("polyline",{points:"7 8 3 12 7 16"}),d.createElement("polyline",{points:"17 8 21 12 17 16"}),d.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),d.createElement(Fe,{mark:"href",icon:d.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},d.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),d.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),d.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),tt=({value:e,onChange:t,readOnly:n=!1,customKeybinds:r={},customExtensions:o=[]})=>d.createElement(Me,{customExtensions:o},d.createElement(Ye,{value:e,onChange:t,readOnly:n,customKeybinds:r})),nt=[{id:u(),type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{id:u(),type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"a"}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"nested"}]}]}]}]},{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"b"}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"nested"}]}]}]}]},{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"c"}]},{id:u(),type:"unordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"nested"}]}]}]}]}]},{id:u(),type:"ordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"a"}]},{id:u(),type:"ordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"nested"}]}]}]}]},{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"b"}]},{id:u(),type:"ordered-list",children:[{id:u(),type:"list-item",children:[{id:u(),type:"list-item-content",children:[{text:"nested"}]}]}]}]}]}];const rt=()=>{const[e,t]=function(){const[e,t]=y.exports.useState(nt);return[e,t]}();return d.createElement(tt,{value:e,onChange:t})};L.render(d.createElement(rt,null),document.querySelector("#root"));
