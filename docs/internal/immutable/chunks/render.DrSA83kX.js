import{n as P,o as O,q as R,v as V,w as k,x as I,y as T,z as C,H as Y,A as q,B as E,C as g,D as A,E as B,F as p,G as $,I as j,J as z,K as F,L as G,M as J,N as K,O as W,p as Q,P as b,a as U,c as X}from"./runtime.BbCA1e8G.js";import{b as Z}from"./disclose-version.DYUJ63WF.js";const x=["touchstart","touchmove"];function rr(r){return x.includes(r)}const er=new Set,D=new Set;function m(r){var S;var e=this,n=e.ownerDocument,c=r.type,o=((S=r.composedPath)==null?void 0:S.call(r))||[],t=o[0]||r.target,u=0,_=r.__root;if(_){var d=o.indexOf(_);if(d!==-1&&(e===document||e===window)){r.__root=e;return}var h=o.indexOf(e);if(h===-1)return;d<=h&&(u=d)}if(t=o[u]||r.target,t!==e){P(r,"currentTarget",{configurable:!0,get(){return t||n}});var w=k,i=I;O(null),R(null);try{for(var a,s=[];t!==null;){var f=t.assignedSlot||t.parentNode||t.host||null;try{var l=t["__"+c];if(l!==void 0&&!t.disabled)if(V(l)){var[H,...M]=l;H.apply(t,[r,...M])}else l.call(t,r)}catch(y){a?s.push(y):a=y}if(r.cancelBubble||f===e||f===null)break;t=f}if(a){for(let y of s)queueMicrotask(()=>{throw y});throw a}}finally{r.__root=e,delete r.currentTarget,O(w),R(i)}}}function sr(r,e){var n=e==null?"":typeof e=="object"?e+"":e;n!==(r.__t??(r.__t=r.nodeValue))&&(r.__t=n,r.nodeValue=n==null?"":n+"")}function tr(r,e){return L(r,e)}function ir(r,e){T(),e.intro=e.intro??!1;const n=e.target,c=b,o=p;try{for(var t=C(n);t&&(t.nodeType!==8||t.data!==Y);)t=q(t);if(!t)throw E;g(!0),A(t),B();const u=L(r,{...e,anchor:t});if(p===null||p.nodeType!==8||p.data!==$)throw j(),E;return g(!1),u}catch(u){if(u===E)return e.recover===!1&&z(),T(),F(n),g(!1),tr(r,e);throw u}finally{g(c),A(o)}}const v=new Map;function L(r,{target:e,anchor:n,props:c={},events:o,context:t,intro:u=!0}){T();var _=new Set,d=i=>{for(var a=0;a<i.length;a++){var s=i[a];if(!_.has(s)){_.add(s);var f=rr(s);e.addEventListener(s,m,{passive:f});var l=v.get(s);l===void 0?(document.addEventListener(s,m,{passive:f}),v.set(s,1)):v.set(s,l+1)}}};d(G(er)),D.add(d);var h=void 0,w=J(()=>{var i=n??e.appendChild(K());return W(()=>{if(t){Q({});var a=X;a.c=t}o&&(c.$$events=o),b&&Z(i,null),h=r(i,c)||{},b&&(I.nodes_end=p),t&&U()}),()=>{var f;for(var a of _){e.removeEventListener(a,m);var s=v.get(a);--s===0?(document.removeEventListener(a,m),v.delete(a)):v.set(a,s)}D.delete(d),i!==n&&((f=i.parentNode)==null||f.removeChild(i))}});return N.set(h,w),h}let N=new WeakMap;function or(r,e){const n=N.get(r);return n?(N.delete(r),n(e)):Promise.resolve()}export{ir as h,tr as m,sr as s,or as u};
