function D(){}function T(t,e){for(const n in e)t[n]=e[n];return t}function H(t){return t()}function K(){return Object.create(null)}function M(t){t.forEach(H)}function Q(t){return typeof t=="function"}function U(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}function V(t){return Object.keys(t).length===0}function k(t,...e){if(t==null){for(const i of e)i(void 0);return D}const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function X(t){let e;return k(t,n=>e=n)(),e}function Y(t,e,n){t.$$.on_destroy.push(k(e,n))}function Z(t,e,n,i){if(t){const c=N(t,e,n,i);return t[0](c)}}function N(t,e,n,i){return t[1]&&i?T(n.ctx.slice(),t[1](i(e))):n.ctx}function $(t,e,n,i){if(t[2]&&i){const c=t[2](i(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const s=[],r=Math.max(e.dirty.length,c.length);for(let u=0;u<r;u+=1)s[u]=e.dirty[u]|c[u];return s}return e.dirty|c}return e.dirty}function tt(t,e,n,i,c,s){if(c){const r=N(e,n,i,s);t.p(r,c)}}function et(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let i=0;i<n;i++)e[i]=-1;return e}return-1}let m=!1;function nt(){m=!0}function it(){m=!1}function P(t,e,n,i){for(;t<e;){const c=t+(e-t>>1);n(c)<=i?t=c+1:e=c}return t}function q(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const l=[];for(let o=0;o<e.length;o++){const a=e[o];a.claim_order!==void 0&&l.push(a)}e=l}const n=new Int32Array(e.length+1),i=new Int32Array(e.length);n[0]=-1;let c=0;for(let l=0;l<e.length;l++){const o=e[l].claim_order,a=(c>0&&e[n[c]].claim_order<=o?c+1:P(1,c,C=>e[n[C]].claim_order,o))-1;i[l]=n[a]+1;const v=a+1;n[v]=l,c=Math.max(v,c)}const s=[],r=[];let u=e.length-1;for(let l=n[c]+1;l!=0;l=i[l-1]){for(s.push(e[l-1]);u>=l;u--)r.push(e[u]);u--}for(;u>=0;u--)r.push(e[u]);s.reverse(),r.sort((l,o)=>l.claim_order-o.claim_order);for(let l=0,o=0;l<r.length;l++){for(;o<s.length&&r[l].claim_order>=s[o].claim_order;)o++;const a=o<s.length?s[o]:null;t.insertBefore(r[l],a)}}function B(t,e){if(m){for(q(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function ct(t,e,n){m&&!n?B(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function rt(t){t.parentNode&&t.parentNode.removeChild(t)}function lt(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function L(t){return document.createElement(t)}function O(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function ut(){return g(" ")}function st(){return g("")}function ot(t,e,n,i){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n,i)}function at(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ft(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function _t(t){return t.dataset.svelteH}function dt(t){return t===""?null:+t}function ht(t){return Array.from(t.childNodes)}function z(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function A(t,e,n,i,c=!1){z(t);const s=(()=>{for(let r=t.claim_info.last_index;r<t.length;r++){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,c||(t.claim_info.last_index=r),u}}for(let r=t.claim_info.last_index-1;r>=0;r--){const u=t[r];if(e(u)){const l=n(u);return l===void 0?t.splice(r,1):t[r]=l,c?l===void 0&&t.claim_info.last_index--:t.claim_info.last_index=r,u}}return i()})();return s.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,s}function S(t,e,n,i){return A(t,c=>c.nodeName===e,c=>{const s=[];for(let r=0;r<c.attributes.length;r++){const u=c.attributes[r];n[u.name]||s.push(u.name)}s.forEach(r=>c.removeAttribute(r))},()=>i(e))}function mt(t,e,n){return S(t,e,n,L)}function pt(t,e,n){return S(t,e,n,O)}function F(t,e){return A(t,n=>n.nodeType===3,n=>{const i=""+e;if(n.data.startsWith(i)){if(n.data.length!==i.length)return n.splitText(i.length)}else n.data=i},()=>g(e),!0)}function bt(t){return F(t," ")}function yt(t,e){e=""+e,t.data!==e&&(t.data=e)}function gt(t,e){t.value=e??""}function xt(t,e,n,i){n==null?t.style.removeProperty(e):t.style.setProperty(e,n,i?"important":"")}function vt(t,e,n){for(let i=0;i<t.options.length;i+=1){const c=t.options[i];if(c.__value===e){c.selected=!0;return}}(!n||e!==void 0)&&(t.selectedIndex=-1)}function Et(t){const e=t.querySelector(":checked");return e&&e.__value}function I(t,e,{bubbles:n=!1,cancelable:i=!1}={}){return new CustomEvent(t,{detail:e,bubbles:n,cancelable:i})}function wt(t,e){const n=[];let i=0;for(const c of e.childNodes)if(c.nodeType===8){const s=c.textContent.trim();s===`HEAD_${t}_END`?(i-=1,n.push(c)):s===`HEAD_${t}_START`&&(i+=1,n.push(c))}else i>0&&n.push(c);return n}function kt(t,e){return new t(e)}let h;function p(t){h=t}function x(){if(!h)throw new Error("Function called outside component initialization");return h}function Nt(t){x().$$.on_mount.push(t)}function At(t){x().$$.after_update.push(t)}function St(){const t=x();return(e,n,{cancelable:i=!1}={})=>{const c=t.$$.callbacks[e];if(c){const s=I(e,n,{cancelable:i});return c.slice().forEach(r=>{r.call(t,s)}),!s.defaultPrevented}return!0}}function jt(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(i=>i.call(this,e))}const d=[],E=[];let _=[];const w=[],j=Promise.resolve();let y=!1;function R(){y||(y=!0,j.then(G))}function Ct(){return R(),j}function W(t){_.push(t)}const b=new Set;let f=0;function G(){if(f!==0)return;const t=h;do{try{for(;f<d.length;){const e=d[f];f++,p(e),J(e.$$)}}catch(e){throw d.length=0,f=0,e}for(p(null),d.length=0,f=0;E.length;)E.pop()();for(let e=0;e<_.length;e+=1){const n=_[e];b.has(n)||(b.add(n),n())}_.length=0}while(d.length);for(;w.length;)w.pop()();y=!1,b.clear(),p(t)}function J(t){if(t.fragment!==null){t.update(),M(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(W)}}function Dt(t){const e=[],n=[];_.forEach(i=>t.indexOf(i)===-1?e.push(i):n.push(i)),n.forEach(i=>i()),_=e}export{it as $,Z as A,tt as B,et as C,$ as D,wt as E,ot as F,St as G,gt as H,dt as I,M as J,W as K,vt as L,jt as M,Et as N,at as O,X as P,K as Q,G as R,Q as S,V as T,Dt as U,h as V,p as W,H as X,d as Y,R as Z,nt as _,ut as a,At as b,bt as c,rt as d,st as e,L as f,mt as g,ht as h,ct as i,ft as j,xt as k,g as l,F as m,yt as n,Nt as o,E as p,kt as q,O as r,U as s,Ct as t,_t as u,pt as v,B as w,D as x,lt as y,Y as z};
