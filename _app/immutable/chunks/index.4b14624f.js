var E=Object.defineProperty;var b=(t,e,n)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var _=(t,e,n)=>(b(t,typeof e!="symbol"?e+"":e,n),n);import{J as $,x as c,P as p,h as C,d as I,Q as O,R as v,S as P,K as x,T as R,U,V as w,W as V,X as j,Y as B,Z as J,_ as K}from"./scheduler.115522ed.js";const u=new Set;let d;function Y(){d={r:0,c:[],p:d}}function Z(){d.r||$(d.c),d=d.p}function L(t,e){t&&t.i&&(u.delete(t),t.i(e))}function z(t,e,n,a){if(t&&t.o){if(u.has(t))return;u.add(t),d.c.push(()=>{u.delete(t),a&&(n&&t.d(1),a())}),t.o(e)}else a&&a()}function A(t){t&&t.c()}function D(t,e){t&&t.l(e)}function M(t,e,n){const{fragment:a,after_update:i}=t.$$;a&&a.m(e,n),x(()=>{const f=t.$$.on_mount.map(V).filter(v);t.$$.on_destroy?t.$$.on_destroy.push(...f):$(f),t.$$.on_mount=[]}),i.forEach(x)}function N(t,e){const n=t.$$;n.fragment!==null&&(R(n.after_update),$(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Q(t,e){t.$$.dirty[0]===-1&&(j.push(t),B(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function F(t,e,n,a,i,f,h,S=[-1]){const o=U;w(t);const s=t.$$={fragment:null,ctx:[],props:f,update:c,not_equal:i,bound:p(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(o?o.$$.context:[])),callbacks:p(),dirty:S,skip_bound:!1,root:e.target||o.$$.root};h&&h(s.root);let l=!1;if(s.ctx=n?n(t,e.props||{},(r,g,...m)=>{const y=m.length?m[0]:g;return s.ctx&&i(s.ctx[r],s.ctx[r]=y)&&(!s.skip_bound&&s.bound[r]&&s.bound[r](y),l&&Q(t,r)),g}):[],s.update(),l=!0,$(s.before_update),s.fragment=a?a(s.ctx):!1,e.target){if(e.hydrate){J();const r=C(e.target);s.fragment&&s.fragment.l(r),r.forEach(I)}else s.fragment&&s.fragment.c();e.intro&&L(t.$$.fragment),M(t,e.target,e.anchor),K(),O()}w(o)}class G{constructor(){_(this,"$$");_(this,"$$set")}$destroy(){N(this,1),this.$destroy=c}$on(e,n){if(!v(n))return c;const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(n),()=>{const i=a.indexOf(n);i!==-1&&a.splice(i,1)}}$set(e){this.$$set&&!P(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const T="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(T);export{G as S,L as a,A as b,Z as c,D as d,N as e,Y as g,F as i,M as m,z as t};
