var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&c(e,n,t[n]);if(r)for(var n of r(t))i.call(t,n)&&c(e,n,t[n]);return e},a=(e,r)=>t(e,n(r)),l=(e,t)=>{var n={};for(var c in e)o.call(e,c)&&t.indexOf(c)<0&&(n[c]=e[c]);if(null!=e&&r)for(var c of r(e))t.indexOf(c)<0&&i.call(e,c)&&(n[c]=e[c]);return n};import{R as u,n as f,T as d,E as m,a as p,P as g,b as h,r as v,w as y,c as x,d as k,e as b,f as E,t as C,g as w,h as L,j as _,_ as S,i as T,S as M,k as O}from"./vendor.59446192.js";var R="_heading_10tov_1";const B=["bold","italic","underlined","inlineCode"];var P={orderedList:"_ordered-list_1tkat_1",unorderedList:"_unordered-list_1tkat_5"};const D=(e=[{text:""}])=>({id:f(),type:"list-item-content",children:e});Array.from(B);const A=(e=[{text:""}])=>({id:f(),type:"list-item",children:[D(e)]});Array.from(B);const N=(e=[{text:""}])=>({id:f(),type:"ordered-list",children:[A(e)]});Array.from(B);const H=(e=[{text:""}])=>({id:f(),type:"unordered-list",children:[A(e)]});Array.from(B);var j="_paragraph_3qk71_1";Array.from(B);const I=(e="")=>({id:f(),type:"paragraph",children:[{text:e}]}),K={paragraph:({attributes:e,children:t})=>u.createElement("p",s({className:j},e),t),"heading-1":({attributes:e,children:t})=>u.createElement("h1",s({className:R},e),t),"ordered-list":({attributes:e,children:t})=>u.createElement("ol",s({className:P.orderedList},e),t),"unordered-list":({attributes:e,children:t})=>u.createElement("ul",s({className:P.unorderedList},e),t),"list-item":({attributes:e,children:t})=>u.createElement("li",s({className:P.listItem},e),t),"list-item-content":({attributes:e,children:t})=>u.createElement("div",s({className:P.listItemContent},e),t)};function F(e){const t=K[e.element.type];return u.createElement(t,s({},e))}function Z(e,t){if("leaf"===t.type){const{at:n=e.selection}=t;if(!n)return;return m.leaf(e,n)}const n=t,{match:r=(()=>!0)}=n,o=l(n,["match"]);return m.above(e,a(s({},o),{match:t=>!!m.isBlock(e,t)&&r(t)}))}function q(e){return p.isRange(e)?e.anchor:g.isPoint(e)?e:h.isPath(e)?{path:e,offset:0}:void 0}function z(e,t){if(!e.selection)return;const n=Z(e,{type:"leaf"});if(!n)return;const[,r]=n,o=q(r);if(!o)return;const i=q(t.at||e.selection);if(!i)return;const c="string"==typeof t.matchString?[t.matchString]:t.matchString;e:for(const s of c){let n=s.split(""),r=i,c=i,a=i;for(;n.length>0;){const i=n.pop();if(!i)continue e;const l=m.before(e,r);if(!l)continue e;if(m.string(e,{anchor:l,focus:r})!==i){if(t.failOnInvalid)continue e;n=s.split("")}if(c=l,n.length+1===s.length&&(a=r),r=l,n.length>0&&g.equals(r,o))continue e}return"start"===t.edge?c:a}}const U={getAbove:Z,getPointFromLocation:q,getPointBefore:z,getRangeBefore:function(e,t){if(!e.selection)return;const n=z(e,a(s({},t),{edge:"start"}));if(!n)return;const r=q(e.selection);return r?{anchor:n,focus:r}:void 0},getRangeFromBlockStart:function(e){if(!e.selection)return;const t=Z(e,{type:"block"});if(!t)return;const[,n]=t,r=m.start(e,n),o=q(e.selection);return o?{anchor:r,focus:o}:void 0},hasSelection:function(e){return!!e.selection&&p.isExpanded(e.selection)},leafHasModifications:function(e,t=B){return t.some((t=>e[t]))},leafModifications:function(e,t=B){return t.filter((t=>e[t]))}};const W={bold:"b",italic:"em",underlined:"u",inlineCode:"code"};const $=e=>function({leaf:e,children:t,attributes:n}){const r=U.leafModifications(e);let o=t;for(const i of r){const e=W[i];o=u.createElement(e,null,o)}return e.href&&(o=u.createElement("a",{href:e.href,target:"_blank"},o)),o===t&&(o=u.createElement("span",null,o)),u.cloneElement(o,n)}(e);function G(e){return u.createElement($,s({},e))}const J={toggleModification:function(e,t){const n=m.marks(e);n&&(n[t]?e.removeMark(t):e.addMark(t,!0))},setHref:function(e,t,n={}){const{at:r=e.selection}=n;if(!r)return;if(d.select(e,r),!m.marks(e))return;e.addMark("href",t),d.collapse(e,{edge:"focus"})},clearHref:function(e,t={}){const{at:n=e.selection}=t;if(!n)return;if(d.select(e,n),!m.marks(e))return;e.removeMark("href"),d.collapse(e,{edge:"focus"})},getOutTheLeaf:function(e){if(!e.selection)return{success:!1};if(p.isExpanded(e.selection))return{success:!1};const t=U.getAbove(e,{type:"block",mode:"lowest"});if(!t)return{success:!1};const n=U.getAbove(e,{type:"leaf"});if(!n)return{success:!1};const[,r]=t,[o]=n,i=m.end(e,r),c=p.start(e.selection);return g.equals(c,i)&&U.leafHasModifications(o)?(d.insertNodes(e,function({text:e,href:t,modifications:n=[]}){return n.reduce(((e,t)=>(e[t]=!0,e)),{text:e,href:t})}({text:" "}),{select:!0}),{success:!0}):{success:!1}},insertExitBreak:function(e){if(!e.selection)return;p.isExpanded(e.selection)&&d.delete(e,{at:e.selection});const t=U.getAbove(e,{type:"block",mode:"lowest"});if(!t)return;const[,n]=t,[r,o]=m.edges(e,n),i=U.getPointFromLocation(e.selection);if(i){if(!g.equals(i,o))return g.equals(i,r)?(d.insertNodes(e,I(),{select:!1}),void d.select(e,{path:h.next(n).concat(0),offset:0})):void d.splitNodes(e,{mode:"highest"});d.insertNodes(e,I(),{select:!0})}},insertSoftBreak:e=>{e.selection&&e.insertText("\n")}};function Q({editor:e,entry:t}){if(t.onlyOnBlockStart)return function({editor:e,entry:t}){const n=U.getRangeFromBlockStart(e);if(!n)return{match:!1};const r=m.string(e,n);if(!r)return{match:!1};if(!t.markup.includes(r))return{match:!1};return{match:!0,range:n}}({editor:e,entry:t});if(!e.selection)return{match:!1};const n=U.getRangeBefore(e,{matchString:t.markup});return n?{match:!0,range:n}:{match:!1}}function V({editor:e,entry:t,range:n,insertText:r}){const{trigger:o=" ",keepTrigger:i=!0}=t,c=function({editor:e,entry:t,range:n}){const r=m.string(e,n);if(!r)return;if("after"===t.markupType)return"";const[o,i]=t.markup;return r.slice(o.length,-i.length)}({editor:e,entry:t,range:n});if("string"!=typeof c)return;d.delete(e,{at:n});const s=U.getAbove(e,{type:"block"}),a=U.getAbove(e,{type:"leaf"});if(!s)return;if(!a)return;const[l]=s,[u]=a,f="block"===t.transformType?function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const c=t.transform({text:r,block:o,leaf:i});if(d.delete(e,{at:n}),"after"===t.markupType&&t.onlyOnBlockStart){const t=U.getAbove(e,{type:"block",mode:"lowest"});if(t){const[,n]=t;d.delete(e,{at:n,unit:"block"})}}m.insertNode(e,c)}({editor:e,entry:t,range:n,text:c,block:l,leaf:u}):function({editor:e,entry:t,range:n,text:r,block:o,leaf:i}){const c=t.transform({text:r,block:o,leaf:i});d.delete(e,{at:n}),d.insertNodes(e,c,{at:n.anchor,select:!0})}({editor:e,entry:t,range:n,text:c,block:l,leaf:u});return i&&("leaf"===t.transformType?J.getOutTheLeaf(e):r(o)),f}function X({text:e,editor:t,entry:n,insertText:r}){const{trigger:o=" ",skip:i=(()=>!1)}=n;if(e!==o)return{match:!1};const c=U.getAbove(t,{type:"block"}),s=U.getAbove(t,{type:"leaf"});if(!c)return{match:!1};if(!s)return{match:!1};const[a]=c,[l]=s;if(i({block:a,leaf:l}))return{match:!1};let u;return u="after"===n.markupType?Q({editor:t,entry:n}):function({editor:e,entry:t}){const[n,r]=t.markup,o=U.getPointBefore(e,{edge:"end",matchString:r,failOnInvalid:!0});if(!o)return{match:!1};const i=m.before(e,o);if(!i)return{match:!1};const c=U.getPointBefore(e,{at:i,edge:"start",matchString:n});return c?{match:!0,range:{anchor:c,focus:o}}:{match:!1}}({editor:t,entry:n}),u.match&&V({editor:t,entry:n,range:u.range,insertText:r}),u}const Y={format:function(e){return t=>function(e,t){const{insertText:n}=e;return e.insertText=r=>{if(U.hasSelection(e))return n(r);let o=0;for(const i of t){const{match:t}=X({text:r,editor:e,entry:i,insertText:n});t&&(o+=1)}o||n(r)},e}(t,e)}};const ee=[y,x,Y.format([{trigger:" ",keepTrigger:!1,markupType:"after",markup:["-"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(k.isText);return 0===t.length?H():H(t)}},{trigger:" ",keepTrigger:!1,markupType:"after",markup:["1.","1)"],onlyOnBlockStart:!0,transformType:"block",transform:({block:e})=>{const t=e.children.filter(k.isText);return 0===t.length?N():N(t)}}])];const te=v.exports.createContext({});function ne(){return v.exports.useContext(te)}function re(){const e=ne(),t=v.exports.useRef(null);return v.exports.useLayoutEffect((()=>{const n=E.toDOMNode(e,e);t.current=n}),[e]),t}const oe="editor-default editor-toolbar",ie="editor-default editor-link-popup",ce="editor-default editor-keybind";function se(){const[,e]=v.exports.useReducer((e=>e+1),0);return e}var ae="_container_11gia_1";const le=v.exports.createContext({instance:{current:null},lastSelectedText:{current:""}});function ue(){return v.exports.useContext(le)}function fe(){const e=ue(),t=se();return{update:()=>{t()},hide:()=>{e.instance.current&&(e.instance.current.hide(),e.lastSelectedText.current="")}}}const de=({renderButtons:e})=>{const t=re(),n=function(){const e=v.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add(ae),e}),[]);return v.exports.useEffect((()=>{const t=e=>e.preventDefault();return e.addEventListener("mousedown",t),()=>e.removeEventListener("mousedown",t)}),[e]),e}(),{instance:r,lastSelectedText:o}=ue(),i=(c=se(),s=300,v.exports.useMemo((()=>C(c,s)),[c,s]));var c,s;return v.exports.useEffect((()=>{if(!t.current)return;r.current=w(t.current,{theme:oe,content:n,placement:"top",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()}});const e=_((()=>{r.current&&(i(),r.current.show())}),300),c=(t=!0)=>{r.current&&(r.current.hide(),t&&e.cancel())},s=()=>{if(!t.current)return;if(!r.current)return;if(document.activeElement!==t.current)return c();const n=window.getSelection();if(!n)return c();if(n.isCollapsed)return o.current="",c();const s=n.getRangeAt(0).toString();if(s===o.current)return i();c(!1),e(),o.current=s};return document.addEventListener("selectionchange",s),()=>{var e;null==(e=r.current)||e.destroy(),document.removeEventListener("selectionchange",s)}}),[n,t]),L.createPortal(e(),n)},me="^(?!mailto:)(?:(?:http|https|ftp)://)(?:\\S+(?::\\S*)?@)?(?:(?:(?:[1-9]\\d?|1\\d\\d|2[01]\\d|22[0-3])(?:\\.(?:1?\\d{1,2}|2[0-4]\\d|25[0-5])){2}(?:\\.(?:[0-9]\\d?|1\\d\\d|2[0-4]\\d|25[0-4]))|(?:(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)(?:\\.(?:[a-z\\u00a1-\\uffff0-9]+-?)*[a-z\\u00a1-\\uffff0-9]+)*(?:\\.(?:[a-z\\u00a1-\\uffff]{2,})))|localhost)(?::\\d{2,5})?(?:(/|\\?|#)[^\\s]*)?$",pe=new KeyboardEvent("noop");var ge="_container_16223_1",he="_input-wrapper_16223_6",ve="_link-icon_16223_20",ye="_clear-icon_16223_27",xe="_input_16223_6",ke="_error_16223_53";const be=v.exports.createContext({instance:{current:null},input:{current:null},selection:{current:null},hadHref:{current:!1},href:"",setHref:()=>{}});function Ee(){return v.exports.useContext(be)}function Ce(){const e=Ee(),t=se();return{show:({selection:t,href:n=""})=>{e.instance.current&&(e.selection.current=t,e.instance.current.show(),n&&(e.setHref(n),e.hadHref.current=!0))},hide:()=>{e.instance.current&&e.instance.current.hide()},reset:()=>{e.selection.current=null,e.hadHref.current=!1,e.setHref("")},focus:()=>{e.input.current&&e.input.current.focus()},update:()=>{t()}}}const we=()=>{const e=ne(),t=re(),n=v.exports.useMemo((()=>{const e=document.createElement("div");return e.classList.add(ge),e}),[]),{instance:r,input:o,selection:i,href:c,setHref:s,hadHref:a}=Ee(),{reset:l}=Ce(),[f,d]=v.exports.useState(!1),[m,p]=v.exports.useState(null),g=e=>{if(p(null),e)return function(e){const t=new RegExp(me,"i");return e.length<2083&&t.test(e)}(e)?void d(!0):(d(!1),void p("It doesn't look like an URL"));d(!1)};return v.exports.useEffect((()=>{g(c)}),[c]),v.exports.useEffect((()=>{if(t.current)return r.current=w(t.current,{theme:ie,content:n,placement:"bottom",trigger:"manual",interactive:!0,offset:[0,15],moveTransition:"transform 0.1s ease-out",getReferenceClientRect:()=>{const e=window.getSelection();if(!e)return new DOMRect;return e.getRangeAt(0).getBoundingClientRect()},hideOnClick:!0,onHidden:()=>l()}),()=>{var e;return null==(e=r.current)?void 0:e.destroy()}}),[n,t]),L.createPortal(u.createElement("form",{onSubmit:n=>{var o,s;n.preventDefault(),f&&i.current&&(J.setHref(e,c,{at:i.current}),null==(o=r.current)||o.hide(),null==(s=t.current)||s.focus())}},u.createElement("div",{className:he},u.createElement("div",{className:ve},u.createElement(Le,null)),u.createElement("input",{ref:o,className:xe,value:c,onChange:e=>{s(e.target.value)},placeholder:"Enter the URL"}),a.current&&u.createElement("div",{className:ye,onClick:()=>{var n,o;i.current&&(J.clearHref(e,{at:i.current}),null==(n=r.current)||n.hide(),null==(o=t.current)||o.focus())}},u.createElement(_e,null))),m&&u.createElement("p",{className:ke},m)),n)},Le=e=>u.createElement("svg",s({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),u.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),u.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),_e=e=>u.createElement("svg",s({width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e),u.createElement("path",{d:"M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z",fill:"currentColor"})),Se=({children:e,customExtensions:t=[]})=>{const n=function(e){return v.exports.useMemo((()=>{const t=[...ee,...e];return function(e,t){return t.reduce(((e,t)=>t(e)),e)}(b(),t)}),[Y])}(t),r={instance:v.exports.useRef(null),lastSelectedText:v.exports.useRef("")},o=function(){const[e,t]=v.exports.useState("");return{instance:v.exports.useRef(null),input:v.exports.useRef(null),selection:v.exports.useRef(null),hadHref:v.exports.useRef(!1),href:e,setHref:t}}();return u.createElement(te.Provider,{value:n},u.createElement(le.Provider,{value:r},u.createElement(be.Provider,{value:o},e)))};var Te="_editor_1hbjr_1";const Me=function(){const e=new Map,t=(t,n)=>{const r=e.get(t);r&&r(n)};return{register:(t,n)=>{e.set(t,n)},execute:t,curryExecute:e=>n=>{t(e,n)}}}();Me.register("insert-soft-break",(({editor:e,event:t})=>{t.preventDefault(),J.insertSoftBreak(e)})),Me.register("insert-exit-break",(({editor:e,event:t})=>{t.preventDefault(),J.insertExitBreak(e)})),Me.register("get-out-the-leaf",(({editor:e,event:t})=>{const{success:n}=J.getOutTheLeaf(e);n&&t.preventDefault()})),Me.register("make-bold",(({editor:e,event:t})=>{t.preventDefault(),J.toggleModification(e,"bold")})),Me.register("make-italic",(({editor:e,event:t})=>{t.preventDefault(),J.toggleModification(e,"italic")})),Me.register("make-underlined",(({editor:e,event:t})=>{t.preventDefault(),J.toggleModification(e,"underlined")})),Me.register("make-inline-code",(({editor:e,event:t})=>{t.preventDefault(),J.toggleModification(e,"inlineCode")})),Me.register("set-link-for-text",(({editor:e,event:t,ui:n})=>{if(t.preventDefault(),!e.selection)return;const r=m.marks(e);r&&(n.linkPopup.show({selection:e.selection,href:r.href}),setTimeout(n.linkPopup.focus))}));const Oe={};const Re=function({scope:e="global",stopAllEvents:t=!0}={}){Oe[e]||(Oe[e]=[]);const n=Oe[e];return{register:(e,t)=>{n.push({keybind:e,callback:t,is:S(e,{byKey:!0})})},unregister:e=>{const t=n.findIndex((t=>t.keybind===e));-1!==t&&n.splice(t,1)},unregisterAll:()=>{n.splice(0,n.length)},keyDown:(e,r)=>{const o=e instanceof Event?e:e.nativeEvent;t&&o.stopPropagation();for(const i of n){if(i.is(o)){t||o.stopPropagation(),i.callback(r,o);break}}}}}({scope:"slate-editor"});function Be(){return{toolbar:fe(),linkPopup:Ce()}}const Pe={"insert-soft-break":"shift+enter","insert-exit-break":["enter","mod+enter"],"get-out-the-leaf":"arrowright","make-bold":"mod+b","make-italic":"mod+i","make-underlined":"mod+u","make-inline-code":["mod+e","mod+`"],"set-link-for-text":"mod+k"};var De="_container_17abf_1",Ae="_icon_17abf_15";const Ne=e=>{var t=e,{icon:n,isActive:r,tooltip:o,style:i}=t,c=l(t,["icon","isActive","tooltip","style"]);const a=u.createElement("button",s({className:De,"data-active":r},c),u.createElement("span",{className:Ae,style:i},n));return o?u.createElement(T,{theme:ce,content:o,offset:[0,20],hideOnClick:!1},a):a};const He=({mark:e,icon:t,action:n,tooltip:r,style:o={}})=>{const i=ne(),c=function(e,t){const n=m.marks(e);return!!n&&Boolean(n[t])}(i,e),s=Be();return u.createElement(Ne,{icon:t,isActive:c,tooltip:r,onClick:e=>{e.preventDefault(),Me.execute(n,{editor:i,event:pe,ui:s})},style:o})};const je=({editor:e,event:t})=>{if(!e.selection)return;if(p.isCollapsed(e.selection))return;const n=t.clipboardData.getData("text");new RegExp(me).test(n)&&(t.preventDefault(),J.setHref(e,n))};function Ie(){return{handlePaste:function(e,t=[]){return n=>{const r=s({event:n},e);for(const e of t){const t=e(r);if(t&&!t.continue)break}}}({editor:ne(),ui:Be()},[je])}}const Ke=({value:e,onChange:t,readOnly:n=!1,customKeybinds:r={}})=>{const o=ne(),{handleKeyDown:i}=function(e){const t=ne(),n=Be();return v.exports.useEffect((()=>{const t=s(s({},Pe),e);Re.unregisterAll(),Object.entries(t).forEach((([e,t])=>{if(!t)return;const r="string"==typeof t?[t]:t;for(const o of r)Re.register(o,((t,r)=>{Me.execute(e,{editor:t,event:r,ui:n})}))}))}),[e]),{handleKeyDown:v.exports.useCallback((e=>{Re.keyDown(e,t)}),[t])}}(r),{handlePaste:c}=Ie();return u.createElement(u.Fragment,null,u.createElement(M,{editor:o,value:e,onChange:t},u.createElement(O,{className:Te,renderElement:F,renderLeaf:G,onKeyDown:i,readOnly:n,onPaste:c,autoFocus:!0})),!n&&u.createElement(u.Fragment,null,u.createElement(Fe,null),u.createElement(we,null)))},Fe=()=>u.createElement(de,{renderButtons:()=>u.createElement(u.Fragment,null,u.createElement(He,{mark:"bold",icon:"B",action:"make-bold",tooltip:"Bold (⌘B)",style:{fontWeight:"bold"}}),u.createElement(He,{mark:"italic",icon:"I",action:"make-italic",tooltip:"Italic (⌘I)",style:{fontStyle:"italic"}}),u.createElement(He,{mark:"underlined",icon:"U",action:"make-underlined",tooltip:"Underlined (⌘U)",style:{textDecoration:"underline"}}),u.createElement(He,{mark:"inlineCode",icon:u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"icon icon-tabler icon-tabler-code",width:"24",height:"24",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor",fill:"none",strokeLinecap:"round",strokeLinejoin:"round"},u.createElement("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),u.createElement("polyline",{points:"7 8 3 12 7 16"}),u.createElement("polyline",{points:"17 8 21 12 17 16"}),u.createElement("line",{x1:"14",y1:"4",x2:"10",y2:"20"})),action:"make-inline-code",tooltip:"Inline-code (⌘E)",style:{width:18,height:18,paddingLeft:4}}),u.createElement(He,{mark:"href",icon:u.createElement("svg",{width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u.createElement("path",{d:"M14.8284 12L16.2426 13.4142L19.071 10.5858C20.6331 9.02365 20.6331 6.49099 19.071 4.9289C17.509 3.3668 14.9763 3.3668 13.4142 4.9289L10.5858 7.75732L12 9.17154L14.8284 6.34311C15.6095 5.56206 16.8758 5.56206 17.6568 6.34311C18.4379 7.12416 18.4379 8.39049 17.6568 9.17154L14.8284 12Z",fill:"currentColor"}),u.createElement("path",{d:"M12 14.8285L13.4142 16.2427L10.5858 19.0711C9.02372 20.6332 6.49106 20.6332 4.92896 19.0711C3.36686 17.509 3.36686 14.9764 4.92896 13.4143L7.75739 10.5858L9.1716 12L6.34317 14.8285C5.56212 15.6095 5.56212 16.8758 6.34317 17.6569C7.12422 18.4379 8.39055 18.4379 9.1716 17.6569L12 14.8285Z",fill:"currentColor"}),u.createElement("path",{d:"M14.8285 10.5857C15.219 10.1952 15.219 9.56199 14.8285 9.17147C14.4379 8.78094 13.8048 8.78094 13.4142 9.17147L9.1716 13.4141C8.78107 13.8046 8.78107 14.4378 9.1716 14.8283C9.56212 15.2188 10.1953 15.2188 10.5858 14.8283L14.8285 10.5857Z",fill:"currentColor"})),action:"set-link-for-text",tooltip:"Link (⌘K)",style:{width:18,height:18,paddingLeft:4}}))}),Ze=({value:e,onChange:t,readOnly:n=!1,customKeybinds:r={},customExtensions:o=[]})=>u.createElement(Se,{customExtensions:o},u.createElement(Ke,{value:e,onChange:t,readOnly:n,customKeybinds:r})),qe=[{id:f(),type:"heading-1",children:[{text:"Manage map or Set in effector store"}]},{id:f(),type:"paragraph",children:[{text:"Sometimes we need to save Set in "},{text:"effector",italic:!0,href:"https://effector.dev"},{text:" store.\nSimple "},{text:"createStore(new Set())",inlineCode:!0},{text:" "},{text:"will not",bold:!0},{text:" trigger updates on "},{text:".add(item)",inlineCode:!0}]},{id:f(),type:"unordered-list",children:[{id:f(),type:"list-item",children:[{id:f(),type:"list-item-content",children:[{text:"a"}]}]},{id:f(),type:"list-item",children:[{id:f(),type:"list-item-content",children:[{text:"b"}]},{id:f(),type:"unordered-list",children:[{id:f(),type:"list-item",children:[{id:f(),type:"list-item-content",children:[{text:"nested"}]}]}]}]}]},{id:f(),type:"ordered-list",children:[{id:f(),type:"list-item",children:[{id:f(),type:"list-item-content",children:[{text:"a"}]}]},{id:f(),type:"list-item",children:[{id:f(),type:"list-item-content",children:[{text:"b"}]}]}]}];const ze=()=>{const[e,t]=function(){const[e,t]=v.exports.useState(qe);return v.exports.useEffect((()=>{console.log("value",e)}),[e]),[e,t]}();return u.createElement(Ze,{value:e,onChange:t})};L.render(u.createElement(ze,null),document.querySelector("#root"));
