(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function t(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerpolicy&&(o.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?o.credentials="include":i.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(i){if(i.ep)return;i.ep=!0;const o=t(i);fetch(i.href,o)}})();const y={},V=Symbol("solid-dev-component");let H=I;const m=1,A=2,F={owned:null,cleanups:null,context:null,owner:null};var c=null;let w=null,a=null,p=null,E=0,W=0;function q(e,n){const t=c,s=e.length===0,i={owned:null,cleanups:null,context:null,owner:n||t},o=s?()=>e(()=>{throw new Error("Dispose method must be an explicit argument to createRoot function")}):()=>e(()=>N(()=>O(i)));t&&(i.name=`${t.name}-r${W++}`),globalThis._$afterCreateRoot&&globalThis._$afterCreateRoot(i),c=i;try{return x(o,!0)}finally{c=t}}function v(e,n,t){const s=M(e,n,!1,m,t);L(s)}function N(e){try{return e()}finally{}}function G(e,n){const t=M(()=>N(()=>(Object.assign(e,{[V]:!0}),e(n))),void 0,!0);return t.props=n,t.observers=null,t.observerSlots=null,t.state=0,t.componentName=e.name,L(t),t.tValue!==void 0?t.tValue:t.value}function J(e,n,t){let s=e.value;return(!e.comparator||!e.comparator(s,n))&&(e.value=n,e.observers&&e.observers.length&&x(()=>{for(let i=0;i<e.observers.length;i+=1){const o=e.observers[i],r=w&&w.running;r&&w.disposed.has(o),(r&&!o.tState||!r&&!o.state)&&(o.pure?a.push(o):p.push(o),o.observers&&j(o)),r||(o.state=m)}if(a.length>1e6){throw a=[],new Error("Potential Infinite Loop Detected.");throw new Error}},!1)),n}function L(e){if(!e.fn)return;O(e);const n=c,t=E;c=e,K(e,e.value,t),c=n}function K(e,n,t){let s;try{s=e.fn(n)}catch(i){e.pure&&(e.state=m),R(i)}(!e.updatedAt||e.updatedAt<=t)&&(e.updatedAt!=null&&"observers"in e?J(e,s):e.value=s,e.updatedAt=t)}function M(e,n,t,s=m,i){const o={fn:e,state:s,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:n,owner:c,context:null,pure:t};return c===null?console.warn("computations created outside a `createRoot` or `render` will never be disposed"):c!==F&&(c.owned?c.owned.push(o):c.owned=[o],o.name=i&&i.name||`${c.name||"c"}-${(c.owned||c.tOwned).length}`),o}function B(e){const n=w;if(e.state===0||n)return;if(e.state===A||n)return C(e);if(e.suspense&&N(e.suspense.inFallback))return e.suspense.effects.push(e);const t=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<E);)(e.state||n)&&t.push(e);for(let s=t.length-1;s>=0;s--)if(e=t[s],e.state===m||n)L(e);else if(e.state===A||n){const i=a;a=null,x(()=>C(e,t[0]),!1),a=i}}function x(e,n){if(a)return e();let t=!1;n||(a=[]),p?t=!0:p=[],E++;try{const s=e();return Q(t),s}catch(s){a||(p=null),R(s)}}function Q(e){if(a&&(I(a),a=null),e)return;const n=p;p=null,n.length?x(()=>H(n),!1):globalThis._$afterUpdate&&globalThis._$afterUpdate()}function I(e){for(let n=0;n<e.length;n++)B(e[n])}function C(e,n){const t=w;e.state=0;for(let s=0;s<e.sources.length;s+=1){const i=e.sources[s];i.sources&&(i.state===m||t?i!==n&&B(i):(i.state===A||t)&&C(i,n))}}function j(e){const n=w;for(let t=0;t<e.observers.length;t+=1){const s=e.observers[t];(!s.state||n)&&(s.state=A,s.pure?a.push(s):p.push(s),s.observers&&j(s))}}function O(e){let n;if(e.sources)for(;e.sources.length;){const t=e.sources.pop(),s=e.sourceSlots.pop(),i=t.observers;if(i&&i.length){const o=i.pop(),r=t.observerSlots.pop();s<i.length&&(o.sourceSlots[r]=s,i[s]=o,t.observerSlots[s]=r)}}if(e.owned){for(n=0;n<e.owned.length;n++)O(e.owned[n]);e.owned=null}if(e.cleanups){for(n=0;n<e.cleanups.length;n++)e.cleanups[n]();e.cleanups=null}e.state=0,e.context=null,delete e.sourceMap}function X(e){return e instanceof Error||typeof e=="string"?e:new Error("Unknown error")}function R(e){throw e=X(e),e}function Y(e,n){return G(e,n||{})}globalThis&&(globalThis.Solid$$?console.warn("You appear to have multiple instances of Solid. This can lead to unexpected behavior."):globalThis.Solid$$=!0);function k(e,n,t){let s=t.length,i=n.length,o=s,r=0,l=0,f=n[i-1].nextSibling,u=null;for(;r<i||l<o;){if(n[r]===t[l]){r++,l++;continue}for(;n[i-1]===t[o-1];)i--,o--;if(i===r){const d=o<s?l?t[l-1].nextSibling:t[o-l]:f;for(;l<o;)e.insertBefore(t[l++],d)}else if(o===l)for(;r<i;)(!u||!u.has(n[r]))&&n[r].remove(),r++;else if(n[r]===t[o-1]&&t[l]===n[i-1]){const d=n[--i].nextSibling;e.insertBefore(t[l++],n[r++].nextSibling),e.insertBefore(t[--o],d),n[i]=t[o]}else{if(!u){u=new Map;let h=l;for(;h<o;)u.set(t[h],h++)}const d=u.get(n[r]);if(d!=null)if(l<d&&d<o){let h=r,S=1,D;for(;++h<i&&h<o&&!((D=u.get(n[h]))==null||D!==d+S);)S++;if(S>d-l){const P=n[r];for(;l<d;)e.insertBefore(t[l++],P)}else e.replaceChild(t[l++],n[r++])}else r++;else n[r++].remove()}}}function Z(e,n,t,s={}){let i;return q(o=>{i=o,n===document?e():te(n,e(),n.firstChild?null:void 0,t)},s.owner),()=>{i(),n.textContent=""}}function z(e,n,t){const s=document.createElement("template");if(s.innerHTML=e,n&&s.innerHTML.split("<").length-1!==n)throw`The browser resolved template HTML does not match JSX input:
${s.innerHTML}

${e}. Is your HTML properly formed?`;let i=s.content.firstChild;return t&&(i=i.firstChild),i}function ee(e,n,t){t==null?e.removeAttribute(n):e.setAttribute(n,t)}function b(e,n){n==null?e.removeAttribute("class"):e.className=n}function te(e,n,t,s){if(t!==void 0&&!s&&(s=[]),typeof n!="function")return $(e,n,s,t);v(i=>$(e,n(),i,t),s)}function $(e,n,t,s,i){for(y.context&&!t&&(t=[...e.childNodes]);typeof t=="function";)t=t();if(n===t)return t;const o=typeof n,r=s!==void 0;if(e=r&&t[0]&&t[0].parentNode||e,o==="string"||o==="number"){if(y.context)return t;if(o==="number"&&(n=n.toString()),r){let l=t[0];l&&l.nodeType===3?l.data=n:l=document.createTextNode(n),t=g(e,t,s,l)}else t!==""&&typeof t=="string"?t=e.firstChild.data=n:t=e.textContent=n}else if(n==null||o==="boolean"){if(y.context)return t;t=g(e,t,s)}else{if(o==="function")return v(()=>{let l=n();for(;typeof l=="function";)l=l();t=$(e,l,t,s)}),()=>t;if(Array.isArray(n)){const l=[],f=t&&Array.isArray(t);if(T(l,n,t,i))return v(()=>t=$(e,l,t,s,!0)),()=>t;if(y.context){if(!l.length)return t;for(let u=0;u<l.length;u++)if(l[u].parentNode)return t=l}if(l.length===0){if(t=g(e,t,s),r)return t}else f?t.length===0?U(e,l,s):k(e,t,l):(t&&g(e),U(e,l));t=l}else if(n instanceof Node){if(y.context&&n.parentNode)return t=r?[n]:n;if(Array.isArray(t)){if(r)return t=g(e,t,s,n);g(e,t,null,n)}else t==null||t===""||!e.firstChild?e.appendChild(n):e.replaceChild(n,e.firstChild);t=n}else console.warn("Unrecognized value. Skipped inserting",n)}return t}function T(e,n,t,s){let i=!1;for(let o=0,r=n.length;o<r;o++){let l=n[o],f=t&&t[o];if(l instanceof Node)e.push(l);else if(!(l==null||l===!0||l===!1))if(Array.isArray(l))i=T(e,l,f)||i;else if(typeof l=="function")if(s){for(;typeof l=="function";)l=l();i=T(e,Array.isArray(l)?l:[l],Array.isArray(f)?f:[f])||i}else e.push(l),i=!0;else{const u=String(l);f&&f.nodeType===3&&f.data===u?e.push(f):e.push(document.createTextNode(u))}}return i}function U(e,n,t=null){for(let s=0,i=n.length;s<i;s++)e.insertBefore(n[s],t)}function g(e,n,t,s){if(t===void 0)return e.textContent="";const i=s||document.createTextNode("");if(n.length){let o=!1;for(let r=n.length-1;r>=0;r--){const l=n[r];if(i!==l){const f=l.parentNode===e;!o&&!r?f?e.replaceChild(i,l):e.insertBefore(i,t):f&&l.remove()}else o=!0}}else e.insertBefore(i,t);return[i]}const ne="/solid-ci-cd/assets/logo.123b04bc.svg",ie="_App_j5tm5_1",se="_logo_j5tm5_5",oe="_header_j5tm5_10",le="_link_j5tm5_21",_={App:ie,logo:se,header:oe,link:le,"logo-spin":"_logo-spin_j5tm5_1"},re=z('<div><header><img alt="logo"><p>Edit <code>src/App.tsx</code> and save to reload.</p><a href="https://github.com/solidjs/solid" target="_blank" rel="noopener noreferrer">Learn Solid</a></header></div>',11),fe=()=>(()=>{const e=re.cloneNode(!0),n=e.firstChild,t=n.firstChild,s=t.nextSibling,i=s.nextSibling;return ee(t,"src",ne),v(o=>{const r=_.App,l=_.header,f=_.logo,u=_.link;return r!==o._v$&&b(e,o._v$=r),l!==o._v$2&&b(n,o._v$2=l),f!==o._v$3&&b(t,o._v$3=f),u!==o._v$4&&b(i,o._v$4=u),o},{_v$:void 0,_v$2:void 0,_v$3:void 0,_v$4:void 0}),e})();Z(()=>Y(fe,{}),document.getElementById("root"));