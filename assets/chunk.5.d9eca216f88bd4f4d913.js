(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[5],{16:function(t,e,n){"use strict"
n.r(e),n(27)},27:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}Object.defineProperty(e,"__esModule",{value:!0})
var i=n(0),o=n(3),s=n(5),u=n(2),a=n(28),c=n(4),h=function(t){return t&&"object"==r(t)&&"default"in t?t:{default:t}}(o),f={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"},l=function(t){function e(e,n){var r=this
return(r=t.call(this,n)||this).code=e,r.message=n,r.name="FirebaseError",r.toString=function(){return r.name+": [code="+r.code+"]: "+r.message},r}return i.__extends(e,t),e}(Error),p=new s.Logger("@firebase/firestore")

;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function d(){return p.logLevel}function v(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(p.logLevel<=s.LogLevel.DEBUG){var r=e.map(m)
p.debug.apply(p,i.__spreadArrays(["Firestore (7.24.0): "+t],r))}}function y(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(p.logLevel<=s.LogLevel.ERROR){var r=e.map(m)
p.error.apply(p,i.__spreadArrays(["Firestore (7.24.0): "+t],r))}}function g(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n]
if(p.logLevel<=s.LogLevel.WARN){var r=e.map(m)
p.warn.apply(p,i.__spreadArrays(["Firestore (7.24.0): "+t],r))}}function m(t){if("string"==typeof t)return t
try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(t){void 0===t&&(t="Unexpected state")
var e="FIRESTORE (7.24.0) INTERNAL ASSERTION FAILED: "+t
throw y(e),new Error(e)}function b(t,e){t||w()}function _(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function I(t){var e=0
for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++
return e}function E(t,e){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function T(t){for(var e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1
return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var A=function(){function t(t,e,n){void 0===e?e=0:e>t.length&&w(),void 0===n?n=t.length-e:n>t.length-e&&w(),this.segments=t,this.offset=e,this.t=n}return Object.defineProperty(t.prototype,"length",{get:function(){return this.t},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){return 0===t.i(this,e)},t.prototype.child=function(e){var n=this.segments.slice(this.offset,this.limit())
return e instanceof t?e.forEach((function(t){n.push(t)})):n.push(e),this.o(n)},t.prototype.limit=function(){return this.offset+this.length},t.prototype.u=function(t){return t=void 0===t?1:t,this.o(this.segments,this.offset+t,this.length-t)},t.prototype.h=function(){return this.o(this.segments,this.offset,this.length-1)},t.prototype.l=function(){return this.segments[this.offset]},t.prototype._=function(){return this.get(this.length-1)},t.prototype.get=function(t){return this.segments[this.offset+t]},t.prototype.m=function(){return 0===this.length},t.prototype.T=function(t){if(t.length<this.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.I=function(t){if(this.length+1!==t.length)return!1
for(var e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1
return!0},t.prototype.forEach=function(t){for(var e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])},t.prototype.A=function(){return this.segments.slice(this.offset,this.limit())},t.i=function(t,e){for(var n=Math.min(t.length,e.length),r=0;r<n;r++){var i=t.get(r),o=e.get(r)
if(i<o)return-1
if(i>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0},t}(),N=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.o=function(t,n,r){return new e(t,n,r)},e.prototype.R=function(){return this.A().join("/")},e.prototype.toString=function(){return this.R()},e.g=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
for(var r=[],i=0,o=t;i<o.length;i++){var s=o[i]
if(s.indexOf("//")>=0)throw new l(f.INVALID_ARGUMENT,"Invalid segment ("+s+"). Paths must not contain // in them.")
r.push.apply(r,s.split("/").filter((function(t){return t.length>0})))}return new e(r)},e.P=function(){return new e([])},e}(A),S=/^[_a-zA-Z][_a-zA-Z0-9]*$/,D=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.o=function(t,n,r){return new e(t,n,r)},e.V=function(t){return S.test(t)},e.prototype.R=function(){return this.A().map((function(t){return t=t.replace("\\","\\\\").replace("`","\\`"),e.V(t)||(t="`"+t+"`"),t})).join(".")},e.prototype.toString=function(){return this.R()},e.prototype.p=function(){return 1===this.length&&"__name__"===this.get(0)},e.v=function(){return new e(["__name__"])},e.S=function(t){for(var n=[],r="",i=0,o=function(){if(0===r.length)throw new l(f.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")
n.push(r),r=""},s=!1;i<t.length;){var u=t[i]
if("\\"===u){if(i+1===t.length)throw new l(f.INVALID_ARGUMENT,"Path has trailing escape character: "+t)
var a=t[i+1]
if("\\"!==a&&"."!==a&&"`"!==a)throw new l(f.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t)
r+=a,i+=2}else"`"===u?(s=!s,i++):"."!==u||s?(r+=u,i++):(o(),i++)}if(o(),s)throw new l(f.INVALID_ARGUMENT,"Unterminated ` in path: "+t)
return new e(n)},e.P=function(){return new e([])},e}(A),x=function(){function t(t){this.path=t}return t.D=function(e){return new t(N.g(e))},t.C=function(e){return new t(N.g(e).u(5))},t.prototype.N=function(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t},t.prototype.isEqual=function(t){return null!==t&&0===N.i(this.path,t.path)},t.prototype.toString=function(){return this.path.toString()},t.i=function(t,e){return N.i(t.path,e.path)},t.F=function(t){return t.length%2==0},t.$=function(e){return new t(new N(e.slice()))},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function L(t,e){if(0!==e.length)throw new l(f.INVALID_ARGUMENT,"Function "+t+"() does not support arguments, but was called with "+Q(e.length,"argument")+".")}function k(t,e,n){if(e.length!==n)throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires "+Q(n,"argument")+", but was called with "+Q(e.length,"argument")+".")}function R(t,e,n){if(e.length<n)throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires at least "+Q(n,"argument")+", but was called with "+Q(e.length,"argument")+".")}function O(t,e,n,r){if(e.length<n||e.length>r)throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires between "+n+" and "+r+" arguments, but was called with "+Q(e.length,"argument")+".")}function P(t,e,n,r){j(t,e,H(n)+" argument",r)}function C(t,e,n,r){void 0!==r&&P(t,e,n,r)}function U(t,e,n,r){j(t,e,n+" option",r)}function V(t,e,n,r){void 0!==r&&U(t,e,n,r)}function M(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){for(var o=[],s=0,u=i;s<u.length;s++){var a=u[s]
if(a===r)return
o.push(G(a))}var c=G(r)
throw new l(f.INVALID_ARGUMENT,"Invalid value "+c+" provided to function "+t+'() for option "'+n+'". Acceptable values: '+o.join(", "))}(t,0,n,r,i)}function F(t,e,n,r){if(!e.some((function(t){return t===r})))throw new l(f.INVALID_ARGUMENT,"Invalid value "+G(r)+" provided to function "+t+"() for its "+H(n)+" argument. Acceptable values: "+e.join(", "))
return r}function j(t,e,n,i){if(!("object"===e?q(i):"non-empty string"===e?"string"==typeof i&&""!==i:r(i)===e)){var o=G(i)
throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires its "+n+" to be of type "+e+", but it was: "+o)}}function q(t){return"object"==r(t)&&null!==t&&(Object.getPrototypeOf(t)===Object.prototype||null===Object.getPrototypeOf(t))}function G(t){if(void 0===t)return"undefined"
if(null===t)return"null"
if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t)
if("number"==typeof t||"boolean"==typeof t)return""+t
if("object"==r(t)){if(t instanceof Array)return"an array"
var e=function(t){if(t.constructor){var e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString())
if(e&&e.length>1)return e[1]}return null}(t)
return e?"a custom "+e+" object":"an object"}return"function"==typeof t?"a function":w()}function B(t,e,n){if(void 0===n)throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires a valid "+H(e)+" argument, but it was undefined.")}function z(t,e,n){E(e,(function(e,r){if(n.indexOf(e)<0)throw new l(f.INVALID_ARGUMENT,"Unknown option '"+e+"' passed to function "+t+"(). Available options: "+n.join(", "))}))}function K(t,e,n,r){var i=G(r)
return new l(f.INVALID_ARGUMENT,"Function "+t+"() requires its "+H(n)+" argument to be a "+e+", but it was: "+i)}function W(t,e,n){if(n<=0)throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires its "+H(e)+" argument to be a positive number, but it was: "+n+".")}function H(t){switch(t){case 1:return"first"
case 2:return"second"
case 3:return"third"
default:return t+"th"}}function Q(t,e){return t+" "+e+(1===t?"":"s")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function X(t){var e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t)
if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n)
else for(var r=0;r<t;r++)n[r]=Math.floor(256*Math.random())
return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Y=function(){function t(){}return t.k=function(){for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length,n="";n.length<20;)for(var r=X(40),i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))
return n},t}()
function J(t,e){return t<e?-1:t>e?1:0}function $(t,e,n){return t.length===e.length&&t.every((function(t,r){return n(t,e[r])}))}function Z(t){return t+"\0"}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var tt=function(){function t(t){this.M=t}return t.fromBase64String=function(e){return new t(atob(e))},t.fromUint8Array=function(e){return new t(function(t){for(var e="",n=0;n<t.length;++n)e+=String.fromCharCode(t[n])
return e}(e))},t.prototype.toBase64=function(){return t=this.M,btoa(t)
var t},t.prototype.toUint8Array=function(){return function(t){for(var e=new Uint8Array(t.length),n=0;n<t.length;n++)e[n]=t.charCodeAt(n)
return e}(this.M)},t.prototype.O=function(){return 2*this.M.length},t.prototype.L=function(t){return J(this.M,t.M)},t.prototype.isEqual=function(t){return this.M===t.M},t}()
tt.B=new tt("")
var et=function(){function t(t){this.q=t}return t.fromBase64String=function(e){try{return new t(tt.fromBase64String(e))}catch(e){throw new l(f.INVALID_ARGUMENT,"Failed to construct Bytes from Base64 string: "+e)}},t.fromUint8Array=function(e){return new t(tt.fromUint8Array(e))},t.prototype.toBase64=function(){return this.q.toBase64()},t.prototype.toUint8Array=function(){return this.q.toUint8Array()},t.prototype.toString=function(){return"Bytes(base64: "+this.toBase64()+")"},t.prototype.isEqual=function(t){return this.q.isEqual(t.q)},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nt(){if("undefined"==typeof Uint8Array)throw new l(f.UNIMPLEMENTED,"Uint8Arrays are not available in this environment.")}function rt(){if("undefined"==typeof atob)throw new l(f.UNIMPLEMENTED,"Blobs are unavailable in Firestore in this environment.")}var it=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.fromBase64String=function(t){k("Blob.fromBase64String",arguments,1),P("Blob.fromBase64String","string",1,t),rt()
try{return new e(tt.fromBase64String(t))}catch(t){throw new l(f.INVALID_ARGUMENT,"Failed to construct Blob from Base64 string: "+t)}},e.fromUint8Array=function(t){if(k("Blob.fromUint8Array",arguments,1),nt(),!(t instanceof Uint8Array))throw K("Blob.fromUint8Array","Uint8Array",1,t)
return new e(tt.fromUint8Array(t))},e.prototype.toBase64=function(){return k("Blob.toBase64",arguments,0),rt(),t.prototype.toBase64.call(this)},e.prototype.toUint8Array=function(){return k("Blob.toUint8Array",arguments,0),nt(),t.prototype.toUint8Array.call(this)},e.prototype.toString=function(){return"Blob(base64: "+this.toBase64()+")"},e}(et),ot=function(t,e,n,r,i,o){this.U=t,this.persistenceKey=e,this.host=n,this.ssl=r,this.forceLongPolling=i,this.W=o},st=function(){function t(t,e){this.projectId=t,this.database=e||"(default)"}return Object.defineProperty(t.prototype,"j",{get:function(){return"(default)"===this.database},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){return e instanceof t&&e.projectId===this.projectId&&e.database===this.database},t.prototype.L=function(t){return J(this.projectId,t.projectId)||J(this.database,t.database)},t}(),ut=function(){function t(t,e){this.K=t,this.G=e,this.H={}}return t.prototype.get=function(t){var e=this.K(t),n=this.H[e]
if(void 0!==n)for(var r=0,i=n;r<i.length;r++){var o=i[r],s=o[0],u=o[1]
if(this.G(s,t))return u}},t.prototype.has=function(t){return void 0!==this.get(t)},t.prototype.set=function(t,e){var n=this.K(t),r=this.H[n]
if(void 0!==r){for(var i=0;i<r.length;i++)if(this.G(r[i][0],t))return void(r[i]=[t,e])
r.push([t,e])}else this.H[n]=[[t,e]]},t.prototype.delete=function(t){var e=this.K(t),n=this.H[e]
if(void 0===n)return!1
for(var r=0;r<n.length;r++)if(this.G(n[r][0],t))return 1===n.length?delete this.H[e]:n.splice(r,1),!0
return!1},t.prototype.forEach=function(t){E(this.H,(function(e,n){for(var r=0,i=n;r<i.length;r++){var o=i[r],s=o[0],u=o[1]
t(s,u)}}))},t.prototype.m=function(){return T(this.H)},t}(),at=function(){function t(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new l(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(e>=1e9)throw new l(f.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e)
if(t<-62135596800)throw new l(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)
if(t>=253402300800)throw new l(f.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}return t.now=function(){return t.fromMillis(Date.now())},t.fromDate=function(e){return t.fromMillis(e.getTime())},t.fromMillis=function(e){var n=Math.floor(e/1e3)
return new t(n,1e6*(e-1e3*n))},t.prototype.toDate=function(){return new Date(this.toMillis())},t.prototype.toMillis=function(){return 1e3*this.seconds+this.nanoseconds/1e6},t.prototype.Y=function(t){return this.seconds===t.seconds?J(this.nanoseconds,t.nanoseconds):J(this.seconds,t.seconds)},t.prototype.isEqual=function(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds},t.prototype.toString=function(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"},t.prototype.toJSON=function(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}},t.prototype.valueOf=function(){var t=this.seconds- -62135596800
return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")},t}(),ct=function(){function t(t){this.timestamp=t}return t.J=function(e){return new t(e)},t.min=function(){return new t(new at(0,0))},t.prototype.L=function(t){return this.timestamp.Y(t.timestamp)},t.prototype.isEqual=function(t){return this.timestamp.isEqual(t.timestamp)},t.prototype.X=function(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3},t.prototype.toString=function(){return"SnapshotVersion("+this.timestamp.toString()+")"},t.prototype.Z=function(){return this.timestamp},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){return null==t}function ft(t){return 0===t&&1/t==-1/0}function lt(t){return"number"==typeof t&&Number.isInteger(t)&&!ft(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pt=function(t,e,n,r,i,o,s){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===s&&(s=null),this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=o,this.endAt=s,this.tt=null}
function dt(t,e,n,r,i,o,s){return void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o=null),void 0===s&&(s=null),new pt(t,e,n,r,i,o,s)}function vt(t){var e=_(t)
if(null===e.tt){var n=e.path.R()
null!==e.collectionGroup&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map((function(t){return function(t){return t.field.R()+t.op.toString()+oe(t.value)}(t)})).join(","),n+="|ob:",n+=e.orderBy.map((function(t){return(e=t).field.R()+e.dir
var e})).join(","),ht(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=ar(e.startAt)),e.endAt&&(n+="|ub:",n+=ar(e.endAt)),e.tt=n}return e.tt}function yt(t,e){if(t.limit!==e.limit)return!1
if(t.orderBy.length!==e.orderBy.length)return!1
for(var n=0;n<t.orderBy.length;n++)if(!pr(t.orderBy[n],e.orderBy[n]))return!1
if(t.filters.length!==e.filters.length)return!1
for(var r=0;r<t.filters.length;r++)if(i=t.filters[r],o=e.filters[r],i.op!==o.op||!i.field.isEqual(o.field)||!ee(i.value,o.value))return!1
var i,o
return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!hr(t.startAt,e.startAt)&&hr(t.endAt,e.endAt)}function gt(t){return x.F(t.path)&&null===t.collectionGroup&&0===t.filters.length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var mt,wt,bt=function(){function t(t,e,n,r,i,o,s){void 0===i&&(i=ct.min()),void 0===o&&(o=ct.min()),void 0===s&&(s=tt.B),this.target=t,this.targetId=e,this.et=n,this.sequenceNumber=r,this.nt=i,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=s}return t.prototype.st=function(e){return new t(this.target,this.targetId,this.et,e,this.nt,this.lastLimboFreeSnapshotVersion,this.resumeToken)},t.prototype.it=function(e,n){return new t(this.target,this.targetId,this.et,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)},t.prototype.rt=function(e){return new t(this.target,this.targetId,this.et,this.sequenceNumber,this.nt,e,this.resumeToken)},t}(),_t=function(t){this.count=t}

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function It(t){switch(t){case f.OK:return w()
case f.CANCELLED:case f.UNKNOWN:case f.DEADLINE_EXCEEDED:case f.RESOURCE_EXHAUSTED:case f.INTERNAL:case f.UNAVAILABLE:case f.UNAUTHENTICATED:return!1
case f.INVALID_ARGUMENT:case f.NOT_FOUND:case f.ALREADY_EXISTS:case f.PERMISSION_DENIED:case f.FAILED_PRECONDITION:case f.ABORTED:case f.OUT_OF_RANGE:case f.UNIMPLEMENTED:case f.DATA_LOSS:return!0
default:return w()}}function Et(t){if(void 0===t)return y("GRPC error has no .code"),f.UNKNOWN
switch(t){case mt.OK:return f.OK
case mt.CANCELLED:return f.CANCELLED
case mt.UNKNOWN:return f.UNKNOWN
case mt.DEADLINE_EXCEEDED:return f.DEADLINE_EXCEEDED
case mt.RESOURCE_EXHAUSTED:return f.RESOURCE_EXHAUSTED
case mt.INTERNAL:return f.INTERNAL
case mt.UNAVAILABLE:return f.UNAVAILABLE
case mt.UNAUTHENTICATED:return f.UNAUTHENTICATED
case mt.INVALID_ARGUMENT:return f.INVALID_ARGUMENT
case mt.NOT_FOUND:return f.NOT_FOUND
case mt.ALREADY_EXISTS:return f.ALREADY_EXISTS
case mt.PERMISSION_DENIED:return f.PERMISSION_DENIED
case mt.FAILED_PRECONDITION:return f.FAILED_PRECONDITION
case mt.ABORTED:return f.ABORTED
case mt.OUT_OF_RANGE:return f.OUT_OF_RANGE
case mt.UNIMPLEMENTED:return f.UNIMPLEMENTED
case mt.DATA_LOSS:return f.DATA_LOSS
default:return w()}}(wt=mt||(mt={}))[wt.OK=0]="OK",wt[wt.CANCELLED=1]="CANCELLED",wt[wt.UNKNOWN=2]="UNKNOWN",wt[wt.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",wt[wt.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",wt[wt.NOT_FOUND=5]="NOT_FOUND",wt[wt.ALREADY_EXISTS=6]="ALREADY_EXISTS",wt[wt.PERMISSION_DENIED=7]="PERMISSION_DENIED",wt[wt.UNAUTHENTICATED=16]="UNAUTHENTICATED",wt[wt.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",wt[wt.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",wt[wt.ABORTED=10]="ABORTED",wt[wt.OUT_OF_RANGE=11]="OUT_OF_RANGE",wt[wt.UNIMPLEMENTED=12]="UNIMPLEMENTED",wt[wt.INTERNAL=13]="INTERNAL",wt[wt.UNAVAILABLE=14]="UNAVAILABLE",wt[wt.DATA_LOSS=15]="DATA_LOSS"

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var Tt=function(){function t(t,e){this.i=t,this.root=e||Nt.EMPTY}return t.prototype.ot=function(e,n){return new t(this.i,this.root.ot(e,n,this.i).copy(null,null,Nt.at,null,null))},t.prototype.remove=function(e){return new t(this.i,this.root.remove(e,this.i).copy(null,null,Nt.at,null,null))},t.prototype.get=function(t){for(var e=this.root;!e.m();){var n=this.i(t,e.key)
if(0===n)return e.value
n<0?e=e.left:n>0&&(e=e.right)}return null},t.prototype.indexOf=function(t){for(var e=0,n=this.root;!n.m();){var r=this.i(t,n.key)
if(0===r)return e+n.left.size
r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1},t.prototype.m=function(){return this.root.m()},Object.defineProperty(t.prototype,"size",{get:function(){return this.root.size},enumerable:!1,configurable:!0}),t.prototype.ct=function(){return this.root.ct()},t.prototype.ut=function(){return this.root.ut()},t.prototype.ht=function(t){return this.root.ht(t)},t.prototype.forEach=function(t){this.ht((function(e,n){return t(e,n),!1}))},t.prototype.toString=function(){var t=[]
return this.ht((function(e,n){return t.push(e+":"+n),!1})),"{"+t.join(", ")+"}"},t.prototype.lt=function(t){return this.root.lt(t)},t.prototype._t=function(){return new At(this.root,null,this.i,!1)},t.prototype.ft=function(t){return new At(this.root,t,this.i,!1)},t.prototype.dt=function(){return new At(this.root,null,this.i,!0)},t.prototype.wt=function(t){return new At(this.root,t,this.i,!0)},t}(),At=function(){function t(t,e,n,r){this.Tt=r,this.Et=[]
for(var i=1;!t.m();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.Tt?t.left:t.right
else{if(0===i){this.Et.push(t)
break}this.Et.push(t),t=this.Tt?t.right:t.left}}return t.prototype.It=function(){var t=this.Et.pop(),e={key:t.key,value:t.value}
if(this.Tt)for(t=t.left;!t.m();)this.Et.push(t),t=t.right
else for(t=t.right;!t.m();)this.Et.push(t),t=t.left
return e},t.prototype.At=function(){return this.Et.length>0},t.prototype.Rt=function(){if(0===this.Et.length)return null
var t=this.Et[this.Et.length-1]
return{key:t.key,value:t.value}},t}(),Nt=function(){function t(e,n,r,i,o){this.key=e,this.value=n,this.color=null!=r?r:t.RED,this.left=null!=i?i:t.EMPTY,this.right=null!=o?o:t.EMPTY,this.size=this.left.size+1+this.right.size}return t.prototype.copy=function(e,n,r,i,o){return new t(null!=e?e:this.key,null!=n?n:this.value,null!=r?r:this.color,null!=i?i:this.left,null!=o?o:this.right)},t.prototype.m=function(){return!1},t.prototype.ht=function(t){return this.left.ht(t)||t(this.key,this.value)||this.right.ht(t)},t.prototype.lt=function(t){return this.right.lt(t)||t(this.key,this.value)||this.left.lt(t)},t.prototype.min=function(){return this.left.m()?this:this.left.min()},t.prototype.ct=function(){return this.min().key},t.prototype.ut=function(){return this.right.m()?this.key:this.right.ut()},t.prototype.ot=function(t,e,n){var r=this,i=n(t,r.key)
return(r=i<0?r.copy(null,null,null,r.left.ot(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.ot(t,e,n))).gt()},t.prototype.Pt=function(){if(this.left.m())return t.EMPTY
var e=this
return e.left.yt()||e.left.left.yt()||(e=e.Vt()),(e=e.copy(null,null,null,e.left.Pt(),null)).gt()},t.prototype.remove=function(e,n){var r,i=this
if(n(e,i.key)<0)i.left.m()||i.left.yt()||i.left.left.yt()||(i=i.Vt()),i=i.copy(null,null,null,i.left.remove(e,n),null)
else{if(i.left.yt()&&(i=i.bt()),i.right.m()||i.right.yt()||i.right.left.yt()||(i=i.vt()),0===n(e,i.key)){if(i.right.m())return t.EMPTY
r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.Pt())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.gt()},t.prototype.yt=function(){return this.color},t.prototype.gt=function(){var t=this
return t.right.yt()&&!t.left.yt()&&(t=t.St()),t.left.yt()&&t.left.left.yt()&&(t=t.bt()),t.left.yt()&&t.right.yt()&&(t=t.Dt()),t},t.prototype.Vt=function(){var t=this.Dt()
return t.right.left.yt()&&(t=(t=(t=t.copy(null,null,null,null,t.right.bt())).St()).Dt()),t},t.prototype.vt=function(){var t=this.Dt()
return t.left.left.yt()&&(t=(t=t.bt()).Dt()),t},t.prototype.St=function(){var e=this.copy(null,null,t.RED,null,this.right.left)
return this.right.copy(null,null,this.color,e,null)},t.prototype.bt=function(){var e=this.copy(null,null,t.RED,this.left.right,null)
return this.left.copy(null,null,this.color,null,e)},t.prototype.Dt=function(){var t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null)
return this.copy(null,null,!this.color,t,e)},t.prototype.Ct=function(){var t=this.Nt()
return Math.pow(2,t)<=this.size+1},t.prototype.Nt=function(){if(this.yt()&&this.left.yt())throw w()
if(this.right.yt())throw w()
var t=this.left.Nt()
if(t!==this.right.Nt())throw w()
return t+(this.yt()?0:1)},t}()
Nt.EMPTY=null,Nt.RED=!0,Nt.at=!1,Nt.EMPTY=new(function(){function t(){this.size=0}return Object.defineProperty(t.prototype,"key",{get:function(){throw w()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"value",{get:function(){throw w()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"color",{get:function(){throw w()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"left",{get:function(){throw w()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"right",{get:function(){throw w()},enumerable:!1,configurable:!0}),t.prototype.copy=function(t,e,n,r,i){return this},t.prototype.ot=function(t,e,n){return new Nt(t,e)},t.prototype.remove=function(t,e){return this},t.prototype.m=function(){return!0},t.prototype.ht=function(t){return!1},t.prototype.lt=function(t){return!1},t.prototype.ct=function(){return null},t.prototype.ut=function(){return null},t.prototype.yt=function(){return!1},t.prototype.Ct=function(){return!0},t.prototype.Nt=function(){return 0},t}())

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var St=function(){function t(t){this.i=t,this.data=new Tt(this.i)}return t.prototype.has=function(t){return null!==this.data.get(t)},t.prototype.first=function(){return this.data.ct()},t.prototype.last=function(){return this.data.ut()},Object.defineProperty(t.prototype,"size",{get:function(){return this.data.size},enumerable:!1,configurable:!0}),t.prototype.indexOf=function(t){return this.data.indexOf(t)},t.prototype.forEach=function(t){this.data.ht((function(e,n){return t(e),!1}))},t.prototype.Ft=function(t,e){for(var n=this.data.ft(t[0]);n.At();){var r=n.It()
if(this.i(r.key,t[1])>=0)return
e(r.key)}},t.prototype.xt=function(t,e){var n
for(n=void 0!==e?this.data.ft(e):this.data._t();n.At();)if(!t(n.It().key))return},t.prototype.$t=function(t){var e=this.data.ft(t)
return e.At()?e.It().key:null},t.prototype._t=function(){return new Dt(this.data._t())},t.prototype.ft=function(t){return new Dt(this.data.ft(t))},t.prototype.add=function(t){return this.copy(this.data.remove(t).ot(t,!0))},t.prototype.delete=function(t){return this.has(t)?this.copy(this.data.remove(t)):this},t.prototype.m=function(){return this.data.m()},t.prototype.kt=function(t){var e=this
return e.size<t.size&&(e=t,t=this),t.forEach((function(t){e=e.add(t)})),e},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.data._t(),r=e.data._t();n.At();){var i=n.It().key,o=r.It().key
if(0!==this.i(i,o))return!1}return!0},t.prototype.A=function(){var t=[]
return this.forEach((function(e){t.push(e)})),t},t.prototype.toString=function(){var t=[]
return this.forEach((function(e){return t.push(e)})),"SortedSet("+t.toString()+")"},t.prototype.copy=function(e){var n=new t(this.i)
return n.data=e,n},t}(),Dt=function(){function t(t){this.Mt=t}return t.prototype.It=function(){return this.Mt.It().key},t.prototype.At=function(){return this.Mt.At()},t}(),xt=new Tt(x.i)
function Lt(){return xt}function kt(){return Lt()}var Rt=new Tt(x.i)
function Ot(){return Rt}var Pt=new Tt(x.i),Ct=new St(x.i)
function Ut(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
for(var n=Ct,r=0,i=t;r<i.length;r++){var o=i[r]
n=n.add(o)}return n}var Vt=new St(J)
function Mt(){return Vt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ft=function(){function t(t){this.i=t?function(e,n){return t(e,n)||x.i(e.key,n.key)}:function(t,e){return x.i(t.key,e.key)},this.Ot=Ot(),this.Lt=new Tt(this.i)}return t.Bt=function(e){return new t(e.i)},t.prototype.has=function(t){return null!=this.Ot.get(t)},t.prototype.get=function(t){return this.Ot.get(t)},t.prototype.first=function(){return this.Lt.ct()},t.prototype.last=function(){return this.Lt.ut()},t.prototype.m=function(){return this.Lt.m()},t.prototype.indexOf=function(t){var e=this.Ot.get(t)
return e?this.Lt.indexOf(e):-1},Object.defineProperty(t.prototype,"size",{get:function(){return this.Lt.size},enumerable:!1,configurable:!0}),t.prototype.forEach=function(t){this.Lt.ht((function(e,n){return t(e),!1}))},t.prototype.add=function(t){var e=this.delete(t.key)
return e.copy(e.Ot.ot(t.key,t),e.Lt.ot(t,null))},t.prototype.delete=function(t){var e=this.get(t)
return e?this.copy(this.Ot.remove(t),this.Lt.remove(e)):this},t.prototype.isEqual=function(e){if(!(e instanceof t))return!1
if(this.size!==e.size)return!1
for(var n=this.Lt._t(),r=e.Lt._t();n.At();){var i=n.It().key,o=r.It().key
if(!i.isEqual(o))return!1}return!0},t.prototype.toString=function(){var t=[]
return this.forEach((function(e){t.push(e.toString())})),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"},t.prototype.copy=function(e,n){var r=new t
return r.i=this.i,r.Ot=e,r.Lt=n,r},t}(),jt=function(){function t(){this.qt=new Tt(x.i)}return t.prototype.track=function(t){var e=t.doc.key,n=this.qt.get(e)
n?0!==t.type&&3===n.type?this.qt=this.qt.ot(e,t):3===t.type&&1!==n.type?this.qt=this.qt.ot(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.qt=this.qt.ot(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.qt=this.qt.ot(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.qt=this.qt.remove(e):1===t.type&&2===n.type?this.qt=this.qt.ot(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.qt=this.qt.ot(e,{type:2,doc:t.doc}):w():this.qt=this.qt.ot(e,t)},t.prototype.Ut=function(){var t=[]
return this.qt.ht((function(e,n){t.push(n)})),t},t}(),qt=function(){function t(t,e,n,r,i,o,s,u){this.query=t,this.docs=e,this.Qt=n,this.docChanges=r,this.Wt=i,this.fromCache=o,this.jt=s,this.Kt=u}return t.Gt=function(e,n,r,i){var o=[]
return n.forEach((function(t){o.push({type:0,doc:t})})),new t(e,n,Ft.Bt(n),o,r,i,!0,!1)},Object.defineProperty(t.prototype,"hasPendingWrites",{get:function(){return!this.Wt.m()},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(t){if(!(this.fromCache===t.fromCache&&this.jt===t.jt&&this.Wt.isEqual(t.Wt)&&Hn(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.Qt.isEqual(t.Qt)))return!1
var e=this.docChanges,n=t.docChanges
if(e.length!==n.length)return!1
for(var r=0;r<e.length;r++)if(e[r].type!==n[r].type||!e[r].doc.isEqual(n[r].doc))return!1
return!0},t}(),Gt=function(){function t(t,e,n,r,i){this.nt=t,this.zt=e,this.Ht=n,this.Yt=r,this.Jt=i}return t.Xt=function(e,n){var r=new Map
return r.set(e,Bt.Zt(e,n)),new t(ct.min(),r,Mt(),Lt(),Ut())},t}(),Bt=function(){function t(t,e,n,r,i){this.resumeToken=t,this.te=e,this.ee=n,this.ne=r,this.se=i}return t.Zt=function(e,n){return new t(tt.B,n,Ut(),Ut(),Ut())},t}(),zt=function(t,e,n,r){this.ie=t,this.removedTargetIds=e,this.key=n,this.re=r},Kt=function(t,e){this.targetId=t,this.oe=e},Wt=function(t,e,n,r){void 0===n&&(n=tt.B),void 0===r&&(r=null),this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r},Ht=function(){function t(){this.ae=0,this.ce=Yt(),this.ue=tt.B,this.he=!1,this.le=!0}return Object.defineProperty(t.prototype,"te",{get:function(){return this.he},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"resumeToken",{get:function(){return this.ue},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"_e",{get:function(){return 0!==this.ae},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"fe",{get:function(){return this.le},enumerable:!1,configurable:!0}),t.prototype.de=function(t){t.O()>0&&(this.le=!0,this.ue=t)},t.prototype.we=function(){var t=Ut(),e=Ut(),n=Ut()
return this.ce.forEach((function(r,i){switch(i){case 0:t=t.add(r)
break
case 2:e=e.add(r)
break
case 1:n=n.add(r)
break
default:w()}})),new Bt(this.ue,this.he,t,e,n)},t.prototype.me=function(){this.le=!1,this.ce=Yt()},t.prototype.Te=function(t,e){this.le=!0,this.ce=this.ce.ot(t,e)},t.prototype.Ee=function(t){this.le=!0,this.ce=this.ce.remove(t)},t.prototype.Ie=function(){this.ae+=1},t.prototype.Ae=function(){this.ae-=1},t.prototype.Re=function(){this.le=!0,this.he=!0},t}(),Qt=function(){function t(t){this.ge=t,this.Pe=new Map,this.ye=Lt(),this.Ve=Xt(),this.pe=new St(J)}return t.prototype.be=function(t){for(var e=0,n=t.ie;e<n.length;e++){var r=n[e]
t.re instanceof kn?this.ve(r,t.re):t.re instanceof Rn&&this.Se(r,t.key,t.re)}for(var i=0,o=t.removedTargetIds;i<o.length;i++){var s=o[i]
this.Se(s,t.key,t.re)}},t.prototype.De=function(t){var e=this
this.Ce(t,(function(n){var r=e.Ne(n)
switch(t.state){case 0:e.Fe(n)&&r.de(t.resumeToken)
break
case 1:r.Ae(),r._e||r.me(),r.de(t.resumeToken)
break
case 2:r.Ae(),r._e||e.removeTarget(n)
break
case 3:e.Fe(n)&&(r.Re(),r.de(t.resumeToken))
break
case 4:e.Fe(n)&&(e.xe(n),r.de(t.resumeToken))
break
default:w()}}))},t.prototype.Ce=function(t,e){var n=this
t.targetIds.length>0?t.targetIds.forEach(e):this.Pe.forEach((function(t,r){n.Fe(r)&&e(r)}))},t.prototype.$e=function(t){var e=t.targetId,n=t.oe.count,r=this.ke(e)
if(r){var i=r.target
if(gt(i))if(0===n){var o=new x(i.path)
this.Se(e,o,new Rn(o,ct.min()))}else b(1===n)
else this.Me(e)!==n&&(this.xe(e),this.pe=this.pe.add(e))}},t.prototype.Oe=function(t){var e=this,n=new Map
this.Pe.forEach((function(r,i){var o=e.ke(i)
if(o){if(r.te&&gt(o.target)){var s=new x(o.target.path)
null!==e.ye.get(s)||e.Le(i,s)||e.Se(i,s,new Rn(s,t))}r.fe&&(n.set(i,r.we()),r.me())}}))
var r=Ut()
this.Ve.forEach((function(t,n){var i=!0
n.xt((function(t){var n=e.ke(t)
return!n||2===n.et||(i=!1,!1)})),i&&(r=r.add(t))}))
var i=new Gt(t,n,this.pe,this.ye,r)
return this.ye=Lt(),this.Ve=Xt(),this.pe=new St(J),i},t.prototype.ve=function(t,e){if(this.Fe(t)){var n=this.Le(t,e.key)?2:0
this.Ne(t).Te(e.key,n),this.ye=this.ye.ot(e.key,e),this.Ve=this.Ve.ot(e.key,this.Be(e.key).add(t))}},t.prototype.Se=function(t,e,n){if(this.Fe(t)){var r=this.Ne(t)
this.Le(t,e)?r.Te(e,1):r.Ee(e),this.Ve=this.Ve.ot(e,this.Be(e).delete(t)),n&&(this.ye=this.ye.ot(e,n))}},t.prototype.removeTarget=function(t){this.Pe.delete(t)},t.prototype.Me=function(t){var e=this.Ne(t).we()
return this.ge.qe(t).size+e.ee.size-e.se.size},t.prototype.Ie=function(t){this.Ne(t).Ie()},t.prototype.Ne=function(t){var e=this.Pe.get(t)
return e||(e=new Ht,this.Pe.set(t,e)),e},t.prototype.Be=function(t){var e=this.Ve.get(t)
return e||(e=new St(J),this.Ve=this.Ve.ot(t,e)),e},t.prototype.Fe=function(t){var e=null!==this.ke(t)
return e||v("WatchChangeAggregator","Detected inactive target",t),e},t.prototype.ke=function(t){var e=this.Pe.get(t)
return e&&e._e?null:this.ge.Ue(t)},t.prototype.xe=function(t){var e=this
this.Pe.set(t,new Ht),this.ge.qe(t).forEach((function(n){e.Se(t,n,null)}))},t.prototype.Le=function(t,e){return this.ge.qe(t).has(e)},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(){return new Tt(x.i)}function Yt(){return new Tt(x.i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jt(t){var e,n
return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function $t(t){var e=se(t.mapValue.fields.__local_write_time__.timestampValue)
return new at(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Zt=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/)
function te(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?Jt(t)?4:10:w()}function ee(t,e){var n=te(t)
if(n!==te(e))return!1
switch(n){case 0:return!0
case 1:return t.booleanValue===e.booleanValue
case 4:return $t(t).isEqual($t(e))
case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue
var n=se(t.timestampValue),r=se(e.timestampValue)
return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e)
case 5:return t.stringValue===e.stringValue
case 6:return function(t,e){return ae(t.bytesValue).isEqual(ae(e.bytesValue))}(t,e)
case 7:return t.referenceValue===e.referenceValue
case 8:return function(t,e){return ue(t.geoPointValue.latitude)===ue(e.geoPointValue.latitude)&&ue(t.geoPointValue.longitude)===ue(e.geoPointValue.longitude)}(t,e)
case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return ue(t.integerValue)===ue(e.integerValue)
if("doubleValue"in t&&"doubleValue"in e){var n=ue(t.doubleValue),r=ue(e.doubleValue)
return n===r?ft(n)===ft(r):isNaN(n)&&isNaN(r)}return!1}(t,e)
case 9:return $(t.arrayValue.values||[],e.arrayValue.values||[],ee)
case 10:return function(t,e){var n=t.mapValue.fields||{},r=e.mapValue.fields||{}
if(I(n)!==I(r))return!1
for(var i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!ee(n[i],r[i])))return!1
return!0}(t,e)
default:return w()}}function ne(t,e){return void 0!==(t.values||[]).find((function(t){return ee(t,e)}))}function re(t,e){var n=te(t),r=te(e)
if(n!==r)return J(n,r)
switch(n){case 0:return 0
case 1:return J(t.booleanValue,e.booleanValue)
case 2:return function(t,e){var n=ue(t.integerValue||t.doubleValue),r=ue(e.integerValue||e.doubleValue)
return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e)
case 3:return ie(t.timestampValue,e.timestampValue)
case 4:return ie($t(t),$t(e))
case 5:return J(t.stringValue,e.stringValue)
case 6:return function(t,e){var n=ae(t),r=ae(e)
return n.L(r)}(t.bytesValue,e.bytesValue)
case 7:return function(t,e){for(var n=t.split("/"),r=e.split("/"),i=0;i<n.length&&i<r.length;i++){var o=J(n[i],r[i])
if(0!==o)return o}return J(n.length,r.length)}(t.referenceValue,e.referenceValue)
case 8:return function(t,e){var n=J(ue(t.latitude),ue(e.latitude))
return 0!==n?n:J(ue(t.longitude),ue(e.longitude))}(t.geoPointValue,e.geoPointValue)
case 9:return function(t,e){for(var n=t.values||[],r=e.values||[],i=0;i<n.length&&i<r.length;++i){var o=re(n[i],r[i])
if(o)return o}return J(n.length,r.length)}(t.arrayValue,e.arrayValue)
case 10:return function(t,e){var n=t.fields||{},r=Object.keys(n),i=e.fields||{},o=Object.keys(i)
r.sort(),o.sort()
for(var s=0;s<r.length&&s<o.length;++s){var u=J(r[s],o[s])
if(0!==u)return u
var a=re(n[r[s]],i[o[s]])
if(0!==a)return a}return J(r.length,o.length)}(t.mapValue,e.mapValue)
default:throw w()}}function ie(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return J(t,e)
var n=se(t),r=se(e),i=J(n.seconds,r.seconds)
return 0!==i?i:J(n.nanos,r.nanos)}function oe(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){var e=se(t)
return"time("+e.seconds+","+e.nanos+")"}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ae(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,x.C(r).toString()):"geoPointValue"in e?"geo("+(n=e.geoPointValue).latitude+","+n.longitude+")":"arrayValue"in e?function(e){for(var n="[",r=!0,i=0,o=e.values||[];i<o.length;i++)r?r=!1:n+=",",n+=t(o[i])
return n+"]"}(e.arrayValue):"mapValue"in e?function(e){for(var n="{",r=!0,i=0,o=Object.keys(e.fields||{}).sort();i<o.length;i++){var s=o[i]
r?r=!1:n+=",",n+=s+":"+t(e.fields[s])}return n+"}"}(e.mapValue):w()
var n,r}(t)}function se(t){if(b(!!t),"string"==typeof t){var e=0,n=Zt.exec(t)
if(b(!!n),n[1]){var r=n[1]
r=(r+"000000000").substr(0,9),e=Number(r)}var i=new Date(t)
return{seconds:Math.floor(i.getTime()/1e3),nanos:e}}return{seconds:ue(t.seconds),nanos:ue(t.nanos)}}function ue(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function ae(t){return"string"==typeof t?tt.fromBase64String(t):tt.fromUint8Array(t)}function ce(t,e){return{referenceValue:"projects/"+t.projectId+"/databases/"+t.database+"/documents/"+e.path.R()}}function he(t){return!!t&&"integerValue"in t}function fe(t){return!!t&&"arrayValue"in t}function le(t){return!!t&&"nullValue"in t}function pe(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function de(t){return!!t&&"mapValue"in t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ve={asc:"ASCENDING",desc:"DESCENDING"},ye={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"},ge=function(t,e){this.U=t,this.Qe=e}
function me(t){return{integerValue:""+t}}function we(t,e){if(t.Qe){if(isNaN(e))return{doubleValue:"NaN"}
if(e===1/0)return{doubleValue:"Infinity"}
if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ft(e)?"-0":e}}function be(t,e){return lt(e)?me(e):we(t,e)}function _e(t,e){return t.Qe?new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")+"."+("000000000"+e.nanoseconds).slice(-9)+"Z":{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ie(t,e){return t.Qe?e.toBase64():e.toUint8Array()}function Ee(t,e){return _e(t,e.Z())}function Te(t){return b(!!t),ct.J(function(t){var e=se(t)
return new at(e.seconds,e.nanos)}(t))}function Ae(t,e){return function(t){return new N(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).R()}function Ne(t){var e=N.g(t)
return b(Qe(e)),e}function Se(t,e){return Ae(t.U,e.path)}function De(t,e){var n=Ne(e)
return b(n.get(1)===t.U.projectId),b(!n.get(3)&&!t.U.database||n.get(3)===t.U.database),new x(Re(n))}function xe(t,e){return Ae(t.U,e)}function Le(t){var e=Ne(t)
return 4===e.length?N.P():Re(e)}function ke(t){return new N(["projects",t.U.projectId,"databases",t.U.database]).R()}function Re(t){return b(t.length>4&&"documents"===t.get(4)),t.u(5)}function Oe(t,e,n){return{name:Se(t,e),fields:n.proto.mapValue.fields}}function Pe(t,e){var n
if(e instanceof wn)n={update:Oe(t,e.key,e.value)}
else if(e instanceof An)n={delete:Se(t,e.key)}
else if(e instanceof bn)n={update:Oe(t,e.key,e.data),updateMask:He(e.We)}
else if(e instanceof In)n={transform:{document:Se(t,e.key),fieldTransforms:e.fieldTransforms.map((function(t){return function(t,e){var n=e.transform
if(n instanceof Ze)return{fieldPath:e.field.R(),setToServerValue:"REQUEST_TIME"}
if(n instanceof tn)return{fieldPath:e.field.R(),appendMissingElements:{values:n.elements}}
if(n instanceof nn)return{fieldPath:e.field.R(),removeAllFromArray:{values:n.elements}}
if(n instanceof on)return{fieldPath:e.field.R(),increment:n.je}
throw w()}(0,t)}))}}
else{if(!(e instanceof Nn))return w()
n={verify:Se(t,e.key)}}return e.Ge.Ke||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:Ee(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:w()}(t,e.Ge)),n}function Ce(t,e){var n=e.currentDocument?function(t){return void 0!==t.updateTime?fn.updateTime(Te(t.updateTime)):void 0!==t.exists?fn.exists(t.exists):fn.ze()}(e.currentDocument):fn.ze()
if(e.update){e.update.name
var r=De(t,e.update.name),i=new Sn({mapValue:{fields:e.update.fields}})
if(e.updateMask){var o=function(t){var e=t.fieldPaths||[]
return new an(e.map((function(t){return D.S(t)})))}(e.updateMask)
return new bn(r,i,o,n)}return new wn(r,i,n)}if(e.delete){var s=De(t,e.delete)
return new An(s,n)}if(e.transform){var u=De(t,e.transform.document),a=e.transform.fieldTransforms.map((function(e){return function(t,e){var n=null
if("setToServerValue"in e)b("REQUEST_TIME"===e.setToServerValue),n=new Ze
else if("appendMissingElements"in e){var r=e.appendMissingElements.values||[]
n=new tn(r)}else if("removeAllFromArray"in e){var i=e.removeAllFromArray.values||[]
n=new nn(i)}else"increment"in e?n=new on(t,e.increment):w()
var o=D.S(e.fieldPath)
return new cn(o,n)}(t,e)}))
return b(!0===n.exists),new In(u,a)}if(e.verify){var c=De(t,e.verify)
return new Nn(c,n)}return w()}function Ue(t,e){return{documents:[xe(t,e.path)]}}function Ve(t,e){var n={structuredQuery:{}},r=e.path
null!==e.collectionGroup?(n.parent=xe(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=xe(t,r.h()),n.structuredQuery.from=[{collectionId:r._()}])
var i=function(t){if(0!==t.length){var e=t.map((function(t){return function(t){if("=="===t.op){if(pe(t.value))return{unaryFilter:{field:Be(t.field),op:"IS_NAN"}}
if(le(t.value))return{unaryFilter:{field:Be(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(pe(t.value))return{unaryFilter:{field:Be(t.field),op:"IS_NOT_NAN"}}
if(le(t.value))return{unaryFilter:{field:Be(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Be(t.field),op:Ge(t.op),value:t.value}}}(t)}))
return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}}(e.filters)
i&&(n.structuredQuery.where=i)
var o=function(t){if(0!==t.length)return t.map((function(t){return function(t){return{field:Be(t.field),direction:qe(t.dir)}}(t)}))}(e.orderBy)
o&&(n.structuredQuery.orderBy=o)
var s=function(t,e){return t.Qe||ht(e)?e:{value:e}}(t,e.limit)
return null!==s&&(n.structuredQuery.limit=s),e.startAt&&(n.structuredQuery.startAt=Fe(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Fe(e.endAt)),n}function Me(t){var e=Le(t.parent),n=t.structuredQuery,i=n.from?n.from.length:0,o=null
if(i>0){b(1===i)
var s=n.from[0]
s.allDescendants?o=s.collectionId:e=e.child(s.collectionId)}var u=[]
n.where&&(u=function t(e){return e?void 0!==e.unaryFilter?[We(e)]:void 0!==e.fieldFilter?[Ke(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((function(e){return t(e)})).reduce((function(t,e){return t.concat(e)})):w():[]}(n.where))
var a=[]
n.orderBy&&(a=n.orderBy.map((function(t){return function(t){return new fr(ze(t.field),function(t){switch(t){case"ASCENDING":return"asc"
case"DESCENDING":return"desc"
default:return}}(t.direction))}(t)})))
var c=null
n.limit&&(c=function(t){var e
return ht(e="object"==r(t)?t.value:t)?null:e}(n.limit))
var h=null
n.startAt&&(h=je(n.startAt))
var f=null
return n.endAt&&(f=je(n.endAt)),Bn(Cn(e,o,a,u,c,"F",h,f))}function Fe(t){return{before:t.before,values:t.position}}function je(t){var e=!!t.before,n=t.values||[]
return new ur(n,e)}function qe(t){return ve[t]}function Ge(t){return ye[t]}function Be(t){return{fieldPath:t.R()}}function ze(t){return D.S(t.fieldPath)}function Ke(t){return $n.create(ze(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"=="
case"NOT_EQUAL":return"!="
case"GREATER_THAN":return">"
case"GREATER_THAN_OR_EQUAL":return">="
case"LESS_THAN":return"<"
case"LESS_THAN_OR_EQUAL":return"<="
case"ARRAY_CONTAINS":return"array-contains"
case"IN":return"in"
case"NOT_IN":return"not-in"
case"ARRAY_CONTAINS_ANY":return"array-contains-any"
case"OPERATOR_UNSPECIFIED":default:return w()}}(t.fieldFilter.op),t.fieldFilter.value)}function We(t){switch(t.unaryFilter.op){case"IS_NAN":var e=ze(t.unaryFilter.field)
return $n.create(e,"==",{doubleValue:NaN})
case"IS_NULL":var n=ze(t.unaryFilter.field)
return $n.create(n,"==",{nullValue:"NULL_VALUE"})
case"IS_NOT_NAN":var r=ze(t.unaryFilter.field)
return $n.create(r,"!=",{doubleValue:NaN})
case"IS_NOT_NULL":var i=ze(t.unaryFilter.field)
return $n.create(i,"!=",{nullValue:"NULL_VALUE"})
case"OPERATOR_UNSPECIFIED":default:return w()}}function He(t){var e=[]
return t.fields.forEach((function(t){return e.push(t.R())})),{fieldPaths:e}}function Qe(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Xe=function(){this.He=void 0}
function Ye(t,e,n){return t instanceof Ze?function(t,e){var n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}}
return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof tn?en(t,e):t instanceof nn?rn(t,e):function(t,e){var n=$e(t,e),r=sn(n)+sn(t.je)
return he(n)&&he(t.je)?me(r):we(t.serializer,r)}(t,e)}function Je(t,e,n){return t instanceof tn?en(t,e):t instanceof nn?rn(t,e):n}function $e(t,e){return t instanceof on?he(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null
var n}var Ze=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e}(Xe),tn=function(t){function e(e){var n=this
return(n=t.call(this)||this).elements=e,n}return i.__extends(e,t),e}(Xe)
function en(t,e){for(var n=un(e),r=function(t){n.some((function(e){return ee(e,t)}))||n.push(t)},i=0,o=t.elements;i<o.length;i++)r(o[i])
return{arrayValue:{values:n}}}var nn=function(t){function e(e){var n=this
return(n=t.call(this)||this).elements=e,n}return i.__extends(e,t),e}(Xe)
function rn(t,e){for(var n=un(e),r=function(t){n=n.filter((function(e){return!ee(e,t)}))},i=0,o=t.elements;i<o.length;i++)r(o[i])
return{arrayValue:{values:n}}}var on=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).serializer=e,r.je=n,r}return i.__extends(e,t),e}(Xe)
function sn(t){return ue(t.integerValue||t.doubleValue)}function un(t){return fe(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var an=function(){function t(t){this.fields=t,t.sort(D.i)}return t.prototype.Ye=function(t){for(var e=0,n=this.fields;e<n.length;e++)if(n[e].T(t))return!0
return!1},t.prototype.isEqual=function(t){return $(this.fields,t.fields,(function(t,e){return t.isEqual(e)}))},t}(),cn=function(t,e){this.field=t,this.transform=e},hn=function(t,e){this.version=t,this.transformResults=e},fn=function(){function t(t,e){this.updateTime=t,this.exists=e}return t.ze=function(){return new t},t.exists=function(e){return new t(void 0,e)},t.updateTime=function(e){return new t(e)},Object.defineProperty(t.prototype,"Ke",{get:function(){return void 0===this.updateTime&&void 0===this.exists},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)},t}()
function ln(t,e){return void 0!==t.updateTime?e instanceof kn&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e instanceof kn}var pn=function(){}
function dn(t,e,n){return t instanceof wn?function(t,e,n){return new kn(t.key,n.version,t.value,{hasCommittedMutations:!0})}(t,0,n):t instanceof bn?function(t,e,n){if(!ln(t.Ge,e))return new On(t.key,n.version)
var r=_n(t,e)
return new kn(t.key,n.version,r,{hasCommittedMutations:!0})}(t,e,n):t instanceof In?function(t,e,n){if(b(null!=n.transformResults),!ln(t.Ge,e))return new On(t.key,n.version)
var r=En(t,e),i=function(t,e,n){var r=[]
b(t.length===n.length)
for(var i=0;i<n.length;i++){var o=t[i],s=o.transform,u=null
e instanceof kn&&(u=e.field(o.field)),r.push(Je(s,u,n[i]))}return r}(t.fieldTransforms,e,n.transformResults),o=n.version,s=Tn(t,r.data(),i)
return new kn(t.key,o,s,{hasCommittedMutations:!0})}(t,e,n):function(t,e,n){return new Rn(t.key,n.version,{hasCommittedMutations:!0})}(t,0,n)}function vn(t,e,n,r){return t instanceof wn?function(t,e){if(!ln(t.Ge,e))return e
var n=mn(e)
return new kn(t.key,n,t.value,{Je:!0})}(t,e):t instanceof bn?function(t,e){if(!ln(t.Ge,e))return e
var n=mn(e),r=_n(t,e)
return new kn(t.key,n,r,{Je:!0})}(t,e):t instanceof In?function(t,e,n,r){if(!ln(t.Ge,e))return e
var i=En(t,e),o=function(t,e,n,r){for(var i=[],o=0,s=t;o<s.length;o++){var u=s[o],a=u.transform,c=null
n instanceof kn&&(c=n.field(u.field)),null===c&&r instanceof kn&&(c=r.field(u.field)),i.push(Ye(a,c,e))}return i}(t.fieldTransforms,n,e,r),s=Tn(t,i.data(),o)
return new kn(t.key,i.version,s,{Je:!0})}(t,e,r,n):function(t,e){return ln(t.Ge,e)?new Rn(t.key,ct.min()):e}(t,e)}function yn(t,e){return t instanceof In?function(t,e){for(var n=null,r=0,i=t.fieldTransforms;r<i.length;r++){var o=i[r],s=e instanceof kn?e.field(o.field):void 0,u=$e(o.transform,s||null)
null!=u&&(n=null==n?(new Dn).set(o.field,u):n.set(o.field,u))}return n?n.Xe():null}(t,e):null}function gn(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.Ge.isEqual(e.Ge)&&(0===t.type?t.value.isEqual(e.value):1===t.type?t.data.isEqual(e.data)&&t.We.isEqual(e.We):2!==t.type||$(t.fieldTransforms,t.fieldTransforms,(function(t,e){return function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof tn&&e instanceof tn||t instanceof nn&&e instanceof nn?$(t.elements,e.elements,ee):t instanceof on&&e instanceof on?ee(t.je,e.je):t instanceof Ze&&e instanceof Ze}(t.transform,e.transform)}(t,e)})))}function mn(t){return t instanceof kn?t.version:ct.min()}var wn=function(t){function e(e,n,r){var i=this
return(i=t.call(this)||this).key=e,i.value=n,i.Ge=r,i.type=0,i}return i.__extends(e,t),e}(pn),bn=function(t){function e(e,n,r,i){var o=this
return(o=t.call(this)||this).key=e,o.data=n,o.We=r,o.Ge=i,o.type=1,o}return i.__extends(e,t),e}(pn)
function _n(t,e){return function(t,e){var n=new Dn(e)
return t.We.fields.forEach((function(e){if(!e.m()){var r=t.data.field(e)
null!==r?n.set(e,r):n.delete(e)}})),n.Xe()}(t,e instanceof kn?e.data():Sn.empty())}var In=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).key=e,r.fieldTransforms=n,r.type=2,r.Ge=fn.exists(!0),r}return i.__extends(e,t),e}(pn)
function En(t,e){return e}function Tn(t,e,n){for(var r=new Dn(e),i=0;i<t.fieldTransforms.length;i++){var o=t.fieldTransforms[i]
r.set(o.field,n[i])}return r.Xe()}var An=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).key=e,r.Ge=n,r.type=3,r}return i.__extends(e,t),e}(pn),Nn=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).key=e,r.Ge=n,r.type=4,r}return i.__extends(e,t),e}(pn),Sn=function(){function t(t){this.proto=t}return t.empty=function(){return new t({mapValue:{}})},t.prototype.field=function(t){if(t.m())return this.proto
for(var e=this.proto,n=0;n<t.length-1;++n){if(!e.mapValue.fields)return null
if(!de(e=e.mapValue.fields[t.get(n)]))return null}return(e=(e.mapValue.fields||{})[t._()])||null},t.prototype.isEqual=function(t){return ee(this.proto,t.proto)},t}(),Dn=function(){function t(t){void 0===t&&(t=Sn.empty()),this.Ze=t,this.tn=new Map}return t.prototype.set=function(t,e){return this.en(t,e),this},t.prototype.delete=function(t){return this.en(t,null),this},t.prototype.en=function(t,e){for(var n=this.tn,r=0;r<t.length-1;++r){var i=t.get(r),o=n.get(i)
o instanceof Map?n=o:o&&10===te(o)?(o=new Map(Object.entries(o.mapValue.fields||{})),n.set(i,o),n=o):(o=new Map,n.set(i,o),n=o)}n.set(t._(),e)},t.prototype.Xe=function(){var t=this.nn(D.P(),this.tn)
return null!=t?new Sn(t):this.Ze},t.prototype.nn=function(t,e){var n=this,r=!1,i=this.Ze.field(t),o=de(i)?Object.assign({},i.mapValue.fields):{}
return e.forEach((function(e,i){if(e instanceof Map){var s=n.nn(t.child(i),e)
null!=s&&(o[i]=s,r=!0)}else null!==e?(o[i]=e,r=!0):o.hasOwnProperty(i)&&(delete o[i],r=!0)})),r?{mapValue:{fields:o}}:null},t}()
function xn(t){var e=[]
return E(t.fields||{},(function(t,n){var r=new D([t])
if(de(n)){var i=xn(n.mapValue).fields
if(0===i.length)e.push(r)
else for(var o=0,s=i;o<s.length;o++){var u=s[o]
e.push(r.child(u))}}else e.push(r)})),new an(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var Ln=function(t,e){this.key=t,this.version=e},kn=function(t){function e(e,n,r,i){var o=this
return(o=t.call(this,e,n)||this).sn=r,o.Je=!!i.Je,o.hasCommittedMutations=!!i.hasCommittedMutations,o}return i.__extends(e,t),e.prototype.field=function(t){return this.sn.field(t)},e.prototype.data=function(){return this.sn},e.prototype.rn=function(){return this.sn.proto},e.prototype.isEqual=function(t){return t instanceof e&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.Je===t.Je&&this.hasCommittedMutations===t.hasCommittedMutations&&this.sn.isEqual(t.sn)},e.prototype.toString=function(){return"Document("+this.key+", "+this.version+", "+this.sn.toString()+", {hasLocalMutations: "+this.Je+"}), {hasCommittedMutations: "+this.hasCommittedMutations+"})"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.Je||this.hasCommittedMutations},enumerable:!1,configurable:!0}),e}(Ln),Rn=function(t){function e(e,n,r){var i=this
return(i=t.call(this,e,n)||this).hasCommittedMutations=!(!r||!r.hasCommittedMutations),i}return i.__extends(e,t),e.prototype.toString=function(){return"NoDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return this.hasCommittedMutations},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.hasCommittedMutations===this.hasCommittedMutations&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(Ln),On=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.toString=function(){return"UnknownDocument("+this.key+", "+this.version+")"},Object.defineProperty(e.prototype,"hasPendingWrites",{get:function(){return!0},enumerable:!1,configurable:!0}),e.prototype.isEqual=function(t){return t instanceof e&&t.version.isEqual(this.version)&&t.key.isEqual(this.key)},e}(Ln),Pn=function(t,e,n,r,i,o,s,u){void 0===e&&(e=null),void 0===n&&(n=[]),void 0===r&&(r=[]),void 0===i&&(i=null),void 0===o&&(o="F"),void 0===s&&(s=null),void 0===u&&(u=null),this.path=t,this.collectionGroup=e,this.on=n,this.filters=r,this.limit=i,this.an=o,this.startAt=s,this.endAt=u,this.cn=null,this.un=null,this.startAt,this.endAt}
function Cn(t,e,n,r,i,o,s,u){return new Pn(t,e,n,r,i,o,s,u)}function Un(t){return new Pn(t)}function Vn(t){return!ht(t.limit)&&"F"===t.an}function Mn(t){return!ht(t.limit)&&"L"===t.an}function Fn(t){return t.on.length>0?t.on[0].field:null}function jn(t){for(var e=0,n=t.filters;e<n.length;e++){var r=n[e]
if(r.hn())return r.field}return null}function qn(t){return null!==t.collectionGroup}function Gn(t){var e=_(t)
if(null===e.cn){e.cn=[]
var n=jn(e),r=Fn(e)
if(null!==n&&null===r)n.p()||e.cn.push(new fr(n)),e.cn.push(new fr(D.v(),"asc"))
else{for(var i=!1,o=0,s=e.on;o<s.length;o++){var u=s[o]
e.cn.push(u),u.field.p()&&(i=!0)}if(!i){var a=e.on.length>0?e.on[e.on.length-1].dir:"asc"
e.cn.push(new fr(D.v(),a))}}}return e.cn}function Bn(t){var e=_(t)
if(!e.un)if("F"===e.an)e.un=dt(e.path,e.collectionGroup,Gn(e),e.filters,e.limit,e.startAt,e.endAt)
else{for(var n=[],r=0,i=Gn(e);r<i.length;r++){var o=i[r],s="desc"===o.dir?"asc":"desc"
n.push(new fr(o.field,s))}var u=e.endAt?new ur(e.endAt.position,!e.endAt.before):null,a=e.startAt?new ur(e.startAt.position,!e.startAt.before):null
e.un=dt(e.path,e.collectionGroup,n,e.filters,e.limit,u,a)}return e.un}function zn(t,e,n){return new Pn(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Kn(t,e){return new Pn(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),t.limit,t.an,e,t.endAt)}function Wn(t,e){return new Pn(t.path,t.collectionGroup,t.on.slice(),t.filters.slice(),t.limit,t.an,t.startAt,e)}function Hn(t,e){return yt(Bn(t),Bn(e))&&t.an===e.an}function Qn(t){return vt(Bn(t))+"|lt:"+t.an}function Xn(t){return"Query(target="+function(t){var e=t.path.R()
return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=", filters: ["+t.filters.map((function(t){return(e=t).field.R()+" "+e.op+" "+oe(e.value)
var e})).join(", ")+"]"),ht(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=", orderBy: ["+t.orderBy.map((function(t){return(e=t).field.R()+" ("+e.dir+")"
var e})).join(", ")+"]"),t.startAt&&(e+=", startAt: "+ar(t.startAt)),t.endAt&&(e+=", endAt: "+ar(t.endAt)),"Target("+e+")"}(Bn(t))+"; limitType="+t.an+")"}function Yn(t,e){return function(t,e){var n=e.key.path
return null!==t.collectionGroup?e.key.N(t.collectionGroup)&&t.path.T(n):x.F(t.path)?t.path.isEqual(n):t.path.I(n)}(t,e)&&function(t,e){for(var n=0,r=t.on;n<r.length;n++){var i=r[n]
if(!i.field.p()&&null===e.field(i.field))return!1}return!0}(t,e)&&function(t,e){for(var n=0,r=t.filters;n<r.length;n++)if(!r[n].matches(e))return!1
return!0}(t,e)&&function(t,e){return!(t.startAt&&!cr(t.startAt,Gn(t),e)||t.endAt&&cr(t.endAt,Gn(t),e))}(t,e)}function Jn(t){return function(e,n){for(var r=!1,i=0,o=Gn(t);i<o.length;i++){var s=o[i],u=lr(s,e,n)
if(0!==u)return u
r=r||s.field.p()}return 0}}var $n=function(t){function e(e,n,r){var i=this
return(i=t.call(this)||this).field=e,i.op=n,i.value=r,i}return i.__extends(e,t),e.create=function(t,n,r){if(t.p())return"in"===n||"not-in"===n?this.ln(t,n,r):new Zn(t,n,r)
if(le(r)){if("=="!==n&&"!="!==n)throw new l(f.INVALID_ARGUMENT,"Invalid query. Null only supports '==' and '!=' comparisons.")
return new e(t,n,r)}if(pe(r)){if("=="!==n&&"!="!==n)throw new l(f.INVALID_ARGUMENT,"Invalid query. NaN only supports '==' and '!=' comparisons.")
return new e(t,n,r)}return"array-contains"===n?new rr(t,r):"in"===n?new ir(t,r):"not-in"===n?new or(t,r):"array-contains-any"===n?new sr(t,r):new e(t,n,r)},e.ln=function(t,e,n){return"in"===e?new tr(t,n):new er(t,n)},e.prototype.matches=function(t){var e=t.field(this.field)
return"!="===this.op?null!==e&&this._n(re(e,this.value)):null!==e&&te(this.value)===te(e)&&this._n(re(e,this.value))},e.prototype._n=function(t){switch(this.op){case"<":return t<0
case"<=":return t<=0
case"==":return 0===t
case"!=":return 0!==t
case">":return t>0
case">=":return t>=0
default:return w()}},e.prototype.hn=function(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0},e}((function(){})),Zn=function(t){function e(e,n,r){var i=this
return(i=t.call(this,e,n,r)||this).key=x.C(r.referenceValue),i}return i.__extends(e,t),e.prototype.matches=function(t){var e=x.i(t.key,this.key)
return this._n(e)},e}($n),tr=function(t){function e(e,n){var r=this
return(r=t.call(this,e,"in",n)||this).keys=nr("in",n),r}return i.__extends(e,t),e.prototype.matches=function(t){return this.keys.some((function(e){return e.isEqual(t.key)}))},e}($n),er=function(t){function e(e,n){var r=this
return(r=t.call(this,e,"not-in",n)||this).keys=nr("not-in",n),r}return i.__extends(e,t),e.prototype.matches=function(t){return!this.keys.some((function(e){return e.isEqual(t.key)}))},e}($n)
function nr(t,e){var n
return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map((function(t){return x.C(t.referenceValue)}))}var rr=function(t){function e(e,n){return t.call(this,e,"array-contains",n)||this}return i.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return fe(e)&&ne(e.arrayValue,this.value)},e}($n),ir=function(t){function e(e,n){return t.call(this,e,"in",n)||this}return i.__extends(e,t),e.prototype.matches=function(t){var e=t.field(this.field)
return null!==e&&ne(this.value.arrayValue,e)},e}($n),or=function(t){function e(e,n){return t.call(this,e,"not-in",n)||this}return i.__extends(e,t),e.prototype.matches=function(t){if(ne(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1
var e=t.field(this.field)
return null!==e&&!ne(this.value.arrayValue,e)},e}($n),sr=function(t){function e(e,n){return t.call(this,e,"array-contains-any",n)||this}return i.__extends(e,t),e.prototype.matches=function(t){var e=this,n=t.field(this.field)
return!(!fe(n)||!n.arrayValue.values)&&n.arrayValue.values.some((function(t){return ne(e.value.arrayValue,t)}))},e}($n),ur=function(t,e){this.position=t,this.before=e}
function ar(t){return(t.before?"b":"a")+":"+t.position.map((function(t){return oe(t)})).join(",")}function cr(t,e,n){for(var r=0,i=0;i<t.position.length;i++){var o=e[i],s=t.position[i]
if(r=o.field.p()?x.i(x.C(s.referenceValue),n.key):re(s,n.field(o.field)),"desc"===o.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function hr(t,e){if(null===t)return null===e
if(null===e)return!1
if(t.before!==e.before||t.position.length!==e.position.length)return!1
for(var n=0;n<t.position.length;n++)if(!ee(t.position[n],e.position[n]))return!1
return!0}var fr=function(t,e){void 0===e&&(e="asc"),this.field=t,this.dir=e}
function lr(t,e,n){var r=t.field.p()?x.i(e.key,n.key):function(t,e,n){var r=e.field(t),i=n.field(t)
return null!==r&&null!==i?re(r,i):w()}(t.field,e,n)
switch(t.dir){case"asc":return r
case"desc":return-1*r
default:return w()}}function pr(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var dr=function(){var t=this
this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))},vr=function(){function t(t,e,n,r,i){void 0===n&&(n=1e3),void 0===r&&(r=1.5),void 0===i&&(i=6e4),this.fn=t,this.dn=e,this.wn=n,this.mn=r,this.Tn=i,this.En=0,this.In=null,this.An=Date.now(),this.reset()}return t.prototype.reset=function(){this.En=0},t.prototype.Rn=function(){this.En=this.Tn},t.prototype.gn=function(t){var e=this
this.cancel()
var n=Math.floor(this.En+this.Pn()),r=Math.max(0,Date.now()-this.An),i=Math.max(0,n-r)
i>0&&v("ExponentialBackoff","Backing off for "+i+" ms (base delay: "+this.En+" ms, delay with jitter: "+n+" ms, last attempt: "+r+" ms ago)"),this.In=this.fn.yn(this.dn,i,(function(){return e.An=Date.now(),t()})),this.En*=this.mn,this.En<this.wn&&(this.En=this.wn),this.En>this.Tn&&(this.En=this.Tn)},t.prototype.Vn=function(){null!==this.In&&(this.In.pn(),this.In=null)},t.prototype.cancel=function(){null!==this.In&&(this.In.cancel(),this.In=null)},t.prototype.Pn=function(){return(Math.random()-.5)*this.En},t}(),yr=function(){function t(t){var e=this
this.bn=null,this.vn=null,this.result=void 0,this.error=void 0,this.Sn=!1,this.Dn=!1,t((function(t){e.Sn=!0,e.result=t,e.bn&&e.bn(t)}),(function(t){e.Sn=!0,e.error=t,e.vn&&e.vn(t)}))}return t.prototype.catch=function(t){return this.next(void 0,t)},t.prototype.next=function(e,n){var r=this
return this.Dn&&w(),this.Dn=!0,this.Sn?this.error?this.Cn(n,this.error):this.Nn(e,this.result):new t((function(t,i){r.bn=function(n){r.Nn(e,n).next(t,i)},r.vn=function(e){r.Cn(n,e).next(t,i)}}))},t.prototype.Fn=function(){var t=this
return new Promise((function(e,n){t.next(e,n)}))},t.prototype.xn=function(e){try{var n=e()
return n instanceof t?n:t.resolve(n)}catch(e){return t.reject(e)}},t.prototype.Nn=function(e,n){return e?this.xn((function(){return e(n)})):t.resolve(n)},t.prototype.Cn=function(e,n){return e?this.xn((function(){return e(n)})):t.reject(n)},t.resolve=function(e){return new t((function(t,n){t(e)}))},t.reject=function(e){return new t((function(t,n){n(e)}))},t.$n=function(e){return new t((function(t,n){var r=0,i=0,o=!1
e.forEach((function(e){++r,e.next((function(){++i,o&&i===r&&t()}),(function(t){return n(t)}))})),o=!0,i===r&&t()}))},t.kn=function(e){for(var n=t.resolve(!1),r=function(e){n=n.next((function(n){return n?t.resolve(n):e()}))},i=0,o=e;i<o.length;i++)r(o[i])
return n},t.forEach=function(t,e){var n=this,r=[]
return t.forEach((function(t,i){r.push(e.call(n,t,i))})),this.$n(r)},t}(),gr=function(){function t(e,n,r){this.name=e,this.version=n,this.Mn=r,12.2===t.On(u.getUA())&&y("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}return t.delete=function(t){return v("SimpleDb","Removing database:",t),Er(window.indexedDB.deleteDatabase(t)).Fn()},t.Ln=function(){if("undefined"==typeof indexedDB)return!1
if(t.Bn())return!0
var e=u.getUA(),n=t.On(e),r=0<n&&n<10,i=t.qn(e),o=0<i&&i<4.5
return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||r||o)},t.Bn=function(){var t
return"undefined"!=typeof process&&"YES"===(null===(t=process.env)||void 0===t?void 0:t.Un)},t.Qn=function(t,e){return t.store(e)},t.On=function(t){var e=t.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=e?e[1].split("_").slice(0,2).join("."):"-1"
return Number(n)},t.qn=function(t){var e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1"
return Number(n)},t.prototype.Wn=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n=this
return i.__generator(this,(function(r){switch(r.label){case 0:return this.db?[3,2]:(v("SimpleDb","Opening database:",this.name),e=this,[4,new Promise((function(e,r){var i=indexedDB.open(n.name,n.version)
i.onsuccess=function(t){var n=t.target.result
e(n)},i.onblocked=function(){r(new wr(t,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=function(e){var n=e.target.error
"VersionError"===n.name?r(new l(f.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):r(new wr(t,n))},i.onupgradeneeded=function(t){v("SimpleDb",'Database "'+n.name+'" requires upgrade from version:',t.oldVersion)
var e=t.target.result
n.Mn.createOrUpgrade(e,i.transaction,t.oldVersion,n.version).next((function(){v("SimpleDb","Database upgrade to version "+n.version+" complete")}))}}))])
case 1:e.db=r.sent(),r.label=2
case 2:return[2,(this.jn&&(this.db.onversionchange=function(t){return n.jn(t)}),this.db)]}}))}))},t.prototype.Kn=function(t){this.jn=t,this.db&&(this.db.onversionchange=function(e){return t(e)})},t.prototype.runTransaction=function(t,e,n,o){return i.__awaiter(this,void 0,void 0,(function(){var s,u,a,c,h
return i.__generator(this,(function(f){switch(f.label){case 0:s="readonly"===e,u=0,a=function(){var e,r,a,h,f
return i.__generator(this,(function(i){switch(i.label){case 0:++u,i.label=1
case 1:return i.trys.push([1,4,,5]),[4,c.Wn(t)]
case 2:return c.db=i.sent(),e=_r.open(c.db,t,s?"readonly":"readwrite",n),r=o(e).catch((function(t){return e.abort(t),yr.reject(t)})).Fn(),a={},r.catch((function(){})),[4,e.Gn]
case 3:return[2,(a.value=(i.sent(),r),a)]
case 4:return h=i.sent(),f="FirebaseError"!==h.name&&u<3,v("SimpleDb","Transaction failed with error:",h.message,"Retrying:",f),c.close(),f?[3,5]:[2,{value:Promise.reject(h)}]
case 5:return[2]}}))},c=this,f.label=1
case 1:return[5,a()]
case 2:if("object"==r(h=f.sent()))return[2,h.value]
f.label=3
case 3:return[3,1]
case 4:return[2]}}))}))},t.prototype.close=function(){this.db&&this.db.close(),this.db=void 0},t}(),mr=function(){function t(t){this.zn=t,this.Hn=!1,this.Yn=null}return Object.defineProperty(t.prototype,"Sn",{get:function(){return this.Hn},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"Jn",{get:function(){return this.Yn},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"cursor",{set:function(t){this.zn=t},enumerable:!1,configurable:!0}),t.prototype.done=function(){this.Hn=!0},t.prototype.Xn=function(t){this.Yn=t},t.prototype.delete=function(){return Er(this.zn.delete())},t}(),wr=function(t){function e(e,n){var r=this
return(r=t.call(this,f.UNAVAILABLE,"IndexedDB transaction '"+e+"' failed: "+n)||this).name="IndexedDbTransactionError",r}return i.__extends(e,t),e}(l)

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){return"IndexedDbTransactionError"===t.name}var _r=function(){function t(t,e){var n=this
this.action=t,this.transaction=e,this.aborted=!1,this.Zn=new dr,this.transaction.oncomplete=function(){n.Zn.resolve()},this.transaction.onabort=function(){e.error?n.Zn.reject(new wr(t,e.error)):n.Zn.resolve()},this.transaction.onerror=function(e){var r=Ar(e.target.error)
n.Zn.reject(new wr(t,r))}}return t.open=function(e,n,r,i){try{return new t(n,e.transaction(i,r))}catch(e){throw new wr(n,e)}},Object.defineProperty(t.prototype,"Gn",{get:function(){return this.Zn.promise},enumerable:!1,configurable:!0}),t.prototype.abort=function(t){t&&this.Zn.reject(t),this.aborted||(v("SimpleDb","Aborting transaction:",t?t.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())},t.prototype.store=function(t){var e=this.transaction.objectStore(t)
return new Ir(e)},t}(),Ir=function(){function t(t){this.store=t}return t.prototype.put=function(t,e){var n
return void 0!==e?(v("SimpleDb","PUT",this.store.name,t,e),n=this.store.put(e,t)):(v("SimpleDb","PUT",this.store.name,"<auto-key>",t),n=this.store.put(t)),Er(n)},t.prototype.add=function(t){return v("SimpleDb","ADD",this.store.name,t,t),Er(this.store.add(t))},t.prototype.get=function(t){var e=this
return Er(this.store.get(t)).next((function(n){return void 0===n&&(n=null),v("SimpleDb","GET",e.store.name,t,n),n}))},t.prototype.delete=function(t){return v("SimpleDb","DELETE",this.store.name,t),Er(this.store.delete(t))},t.prototype.count=function(){return v("SimpleDb","COUNT",this.store.name),Er(this.store.count())},t.prototype.ts=function(t,e){var n=this.cursor(this.options(t,e)),r=[]
return this.es(n,(function(t,e){r.push(e)})).next((function(){return r}))},t.prototype.ns=function(t,e){v("SimpleDb","DELETE ALL",this.store.name)
var n=this.options(t,e)
n.ss=!1
var r=this.cursor(n)
return this.es(r,(function(t,e,n){return n.delete()}))},t.prototype.rs=function(t,e){var n
e?n=t:(n={},e=t)
var r=this.cursor(n)
return this.es(r,e)},t.prototype.os=function(t){var e=this.cursor({})
return new yr((function(n,r){e.onerror=function(t){var e=Ar(t.target.error)
r(e)},e.onsuccess=function(e){var r=e.target.result
r?t(r.primaryKey,r.value).next((function(t){t?r.continue():n()})):n()}}))},t.prototype.es=function(t,e){var n=[]
return new yr((function(r,i){t.onerror=function(t){i(t.target.error)},t.onsuccess=function(t){var i=t.target.result
if(i){var o=new mr(i),s=e(i.primaryKey,i.value,o)
if(s instanceof yr){var u=s.catch((function(t){return o.done(),yr.reject(t)}))
n.push(u)}o.Sn?r():null===o.Jn?i.continue():i.continue(o.Jn)}else r()}})).next((function(){return yr.$n(n)}))},t.prototype.options=function(t,e){var n=void 0
return void 0!==t&&("string"==typeof t?n=t:e=t),{index:n,range:e}},t.prototype.cursor=function(t){var e="next"
if(t.reverse&&(e="prev"),t.index){var n=this.store.index(t.index)
return t.ss?n.openKeyCursor(t.range,e):n.openCursor(t.range,e)}return this.store.openCursor(t.range,e)},t}()
function Er(t){return new yr((function(e,n){t.onsuccess=function(t){var n=t.target.result
e(n)},t.onerror=function(t){var e=Ar(t.target.error)
n(e)}}))}var Tr=!1
function Ar(t){var e=gr.On(u.getUA())
if(e>=12.2&&e<13){var n="An internal error was encountered in the Indexed Database server"
if(t.message.indexOf(n)>=0){var r=new l("internal","IOS_INDEXEDDB_BUG1: IndexedDb has thrown '"+n+"'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")
return Tr||(Tr=!0,setTimeout((function(){throw r}),0)),r}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nr(){return"undefined"!=typeof window?window:null}function Sr(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Dr=function(){function t(t,e,n,r,i){this.cs=t,this.dn=e,this.us=n,this.op=r,this.hs=i,this.ls=new dr,this.then=this.ls.promise.then.bind(this.ls.promise),this.ls.promise.catch((function(t){}))}return t._s=function(e,n,r,i,o){var s=new t(e,n,Date.now()+r,i,o)
return s.start(r),s},t.prototype.start=function(t){var e=this
this.fs=setTimeout((function(){return e.ds()}),t)},t.prototype.pn=function(){return this.ds()},t.prototype.cancel=function(t){null!==this.fs&&(this.clearTimeout(),this.ls.reject(new l(f.CANCELLED,"Operation cancelled"+(t?": "+t:""))))},t.prototype.ds=function(){var t=this
this.cs.ws((function(){return null!==t.fs?(t.clearTimeout(),t.op().then((function(e){return t.ls.resolve(e)}))):Promise.resolve()}))},t.prototype.clearTimeout=function(){null!==this.fs&&(this.hs(this),clearTimeout(this.fs),this.fs=null)},t}(),xr=function(){function t(){var t=this
this.Ts=Promise.resolve(),this.Es=[],this.Is=!1,this.As=[],this.Rs=null,this.gs=!1,this.Ps=[],this.ys=new vr(this,"async_queue_retry"),this.Vs=function(){var e=Sr()
e&&v("AsyncQueue","Visibility state changed to  ",e.visibilityState),t.ys.Vn()}
var e=Sr()
e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Vs)}return Object.defineProperty(t.prototype,"ps",{get:function(){return this.Is},enumerable:!1,configurable:!0}),t.prototype.ws=function(t){this.enqueue(t)},t.prototype.bs=function(t){this.vs(),this.Ss(t)},t.prototype.Ds=function(){if(!this.Is){this.Is=!0
var t=Sr()
t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Vs)}},t.prototype.enqueue=function(t){return this.vs(),this.Is?new Promise((function(t){})):this.Ss(t)},t.prototype.Cs=function(t){var e=this
this.ws((function(){return e.Es.push(t),e.Ns()}))},t.prototype.Ns=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e=this
return i.__generator(this,(function(n){switch(n.label){case 0:if(0===this.Es.length)return[3,5]
n.label=1
case 1:return n.trys.push([1,3,,4]),[4,this.Es[0]()]
case 2:return n.sent(),this.Es.shift(),this.ys.reset(),[3,4]
case 3:if(!br(t=n.sent()))throw t
return v("AsyncQueue","Operation failed with retryable error: "+t),[3,4]
case 4:this.Es.length>0&&this.ys.gn((function(){return e.Ns()})),n.label=5
case 5:return[2]}}))}))},t.prototype.Ss=function(t){var e=this,n=this.Ts.then((function(){return e.gs=!0,t().catch((function(t){throw e.Rs=t,e.gs=!1,y("INTERNAL UNHANDLED ERROR: ",function(t){var e=t.message||""
return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}(t)),t})).then((function(t){return e.gs=!1,t}))}))
return this.Ts=n,n},t.prototype.yn=function(t,e,n){var r=this
this.vs(),this.Ps.indexOf(t)>-1&&(e=0)
var i=Dr._s(this,t,e,n,(function(t){return r.Fs(t)}))
return this.As.push(i),i},t.prototype.vs=function(){this.Rs&&w()},t.prototype.xs=function(){},t.prototype.$s=function(){return i.__awaiter(this,void 0,void 0,(function(){var t
return i.__generator(this,(function(e){switch(e.label){case 0:return[4,t=this.Ts]
case 1:e.sent(),e.label=2
case 2:if(t!==this.Ts)return[3,0]
e.label=3
case 3:return[2]}}))}))},t.prototype.ks=function(t){for(var e=0,n=this.As;e<n.length;e++)if(n[e].dn===t)return!0
return!1},t.prototype.Ms=function(t){var e=this
return this.$s().then((function(){e.As.sort((function(t,e){return t.us-e.us}))
for(var n=0,r=e.As;n<r.length;n++){var i=r[n]
if(i.pn(),"all"!==t&&i.dn===t)break}return e.$s()}))},t.prototype.Os=function(t){this.Ps.push(t)},t.prototype.Fs=function(t){var e=this.As.indexOf(t)
this.As.splice(e,1)},t}()
function Lr(t,e){if(y("AsyncQueue",e+": "+t),br(t))return new l(f.UNAVAILABLE,e+": "+t)
throw t}var kr=function(){this.Ls=void 0,this.listeners=[]},Rr=function(){this.Bs=new ut((function(t){return Qn(t)}),Hn),this.onlineState="Unknown",this.qs=new Set}
function Or(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u,a,c
return i.__generator(this,(function(i){switch(i.label){case 0:if(n=_(t),r=e.query,o=!1,(s=n.Bs.get(r))||(o=!0,s=new kr),!o)return[3,4]
i.label=1
case 1:return i.trys.push([1,3,,4]),u=s,[4,n.Us(r)]
case 2:return u.Ls=i.sent(),[3,4]
case 3:return a=i.sent(),c=Lr(a,"Initialization of query '"+Xn(e.query)+"' failed"),[2,void e.onError(c)]
case 4:return n.Bs.set(r,s),s.listeners.push(e),e.Qs(n.onlineState),s.Ls&&e.Ws(s.Ls)&&Vr(n),[2]}}))}))}function Pr(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u
return i.__generator(this,(function(i){return n=_(t),r=e.query,o=!1,(s=n.Bs.get(r))&&(u=s.listeners.indexOf(e))>=0&&(s.listeners.splice(u,1),o=0===s.listeners.length),o?[2,(n.Bs.delete(r),n.js(r))]:[2]}))}))}function Cr(t,e){for(var n=_(t),r=!1,i=0,o=e;i<o.length;i++){var s=o[i],u=s.query,a=n.Bs.get(u)
if(a){for(var c=0,h=a.listeners;c<h.length;c++)h[c].Ws(s)&&(r=!0)
a.Ls=s}}r&&Vr(n)}function Ur(t,e,n){var r=_(t),i=r.Bs.get(e)
if(i)for(var o=0,s=i.listeners;o<s.length;o++)s[o].onError(n)
r.Bs.delete(e)}function Vr(t){t.qs.forEach((function(t){t.next()}))}var Mr=function(){function t(t,e,n){this.query=t,this.Ks=e,this.Gs=!1,this.zs=null,this.onlineState="Unknown",this.options=n||{}}return t.prototype.Ws=function(t){if(!this.options.includeMetadataChanges){for(var e=[],n=0,r=t.docChanges;n<r.length;n++){var i=r[n]
3!==i.type&&e.push(i)}t=new qt(t.query,t.docs,t.Qt,e,t.Wt,t.fromCache,t.jt,!0)}var o=!1
return this.Gs?this.Hs(t)&&(this.Ks.next(t),o=!0):this.Ys(t,this.onlineState)&&(this.Js(t),o=!0),this.zs=t,o},t.prototype.onError=function(t){this.Ks.error(t)},t.prototype.Qs=function(t){this.onlineState=t
var e=!1
return this.zs&&!this.Gs&&this.Ys(this.zs,t)&&(this.Js(this.zs),e=!0),e},t.prototype.Ys=function(t,e){if(!t.fromCache)return!0
var n="Offline"!==e
return!(this.options.Xs&&n||t.docs.m()&&"Offline"!==e)},t.prototype.Hs=function(t){if(t.docChanges.length>0)return!0
var e=this.zs&&this.zs.hasPendingWrites!==t.hasPendingWrites
return!(!t.jt&&!e)&&!0===this.options.includeMetadataChanges},t.prototype.Js=function(t){t=qt.Gt(t.query,t.docs,t.Wt,t.fromCache),this.Gs=!0,this.Ks.next(t)},t}(),Fr=function(){function t(t){this.uid=t}return t.prototype.Zs=function(){return null!=this.uid},t.prototype.ti=function(){return this.Zs()?"uid:"+this.uid:"anonymous-user"},t.prototype.isEqual=function(t){return t.uid===this.uid},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fr.UNAUTHENTICATED=new Fr(null),Fr.ei=new Fr("google-credentials-uid"),Fr.ni=new Fr("first-party-uid")

;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var jr=function(){function t(t,e){var n=this
this.previousValue=t,e&&(e.si=function(t){return n.ii(t)},this.ri=function(t){return e.oi(t)})}return t.prototype.ii=function(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue},t.prototype.next=function(){var t=++this.previousValue
return this.ri&&this.ri(t),t},t}()
function qr(t,e){return"firestore_clients_"+t+"_"+e}function Gr(t,e,n){var r="firestore_mutations_"+t+"_"+n
return e.Zs()&&(r+="_"+e.uid),r}function Br(t,e){return"firestore_targets_"+t+"_"+e}jr.ai=-1
var zr=function(){function t(t,e,n,r){this.user=t,this.batchId=e,this.state=n,this.error=r}return t.ci=function(e,n,i){var o=JSON.parse(i),s="object"==r(o)&&-1!==["pending","acknowledged","rejected"].indexOf(o.state)&&(void 0===o.error||"object"==r(o.error)),u=void 0
return s&&o.error&&(s="string"==typeof o.error.message&&"string"==typeof o.error.code)&&(u=new l(o.error.code,o.error.message)),s?new t(e,n,o.state,u):(y("SharedClientState","Failed to parse mutation state for ID '"+n+"': "+i),null)},t.prototype.ui=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Kr=function(){function t(t,e,n){this.targetId=t,this.state=e,this.error=n}return t.ci=function(e,n){var i=JSON.parse(n),o="object"==r(i)&&-1!==["not-current","current","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==r(i.error)),s=void 0
return o&&i.error&&(o="string"==typeof i.error.message&&"string"==typeof i.error.code)&&(s=new l(i.error.code,i.error.message)),o?new t(e,i.state,s):(y("SharedClientState","Failed to parse target state for ID '"+e+"': "+n),null)},t.prototype.ui=function(){var t={state:this.state,updateTimeMs:Date.now()}
return this.error&&(t.error={code:this.error.code,message:this.error.message}),JSON.stringify(t)},t}(),Wr=function(){function t(t,e){this.clientId=t,this.activeTargetIds=e}return t.ci=function(e,n){for(var i=JSON.parse(n),o="object"==r(i)&&i.activeTargetIds instanceof Array,s=Mt(),u=0;o&&u<i.activeTargetIds.length;++u)o=lt(i.activeTargetIds[u]),s=s.add(i.activeTargetIds[u])
return o?new t(e,s):(y("SharedClientState","Failed to parse client data for instance '"+e+"': "+n),null)},t}(),Hr=function(){function t(t,e){this.clientId=t,this.onlineState=e}return t.ci=function(e){var n=JSON.parse(e)
return"object"==r(n)&&-1!==["Unknown","Online","Offline"].indexOf(n.onlineState)&&"string"==typeof n.clientId?new t(n.clientId,n.onlineState):(y("SharedClientState","Failed to parse online state: "+e),null)},t}(),Qr=function(){function t(){this.activeTargetIds=Mt()}return t.prototype.hi=function(t){this.activeTargetIds=this.activeTargetIds.add(t)},t.prototype.li=function(t){this.activeTargetIds=this.activeTargetIds.delete(t)},t.prototype.ui=function(){var t={activeTargetIds:this.activeTargetIds.A(),updateTimeMs:Date.now()}
return JSON.stringify(t)},t}(),Xr=function(){function t(t,e,n,r,i){this.window=t,this.fn=e,this.persistenceKey=n,this._i=r,this.fi=null,this.di=null,this.si=null,this.wi=this.mi.bind(this),this.Ti=new Tt(J),this.Ei=!1,this.Ii=[]
var o=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")
this.storage=this.window.localStorage,this.currentUser=i,this.Ai=qr(this.persistenceKey,this._i),this.Ri=function(t){return"firestore_sequence_number_"+t}(this.persistenceKey),this.Ti=this.Ti.ot(this._i,new Qr),this.gi=new RegExp("^firestore_clients_"+o+"_([^_]*)$"),this.Pi=new RegExp("^firestore_mutations_"+o+"_(\\d+)(?:_(.*))?$"),this.yi=new RegExp("^firestore_targets_"+o+"_(\\d+)$"),this.Vi=function(t){return"firestore_online_state_"+t}(this.persistenceKey),this.window.addEventListener("storage",this.wi)}return t.Ln=function(t){return!(!t||!t.localStorage)},t.prototype.start=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e,n,r,o,s,u,a,c,h,f,l=this
return i.__generator(this,(function(i){switch(i.label){case 0:return[4,this.fi.pi()]
case 1:for(t=i.sent(),e=0,n=t;e<n.length;e++)(r=n[e])!==this._i&&(o=this.getItem(qr(this.persistenceKey,r)))&&(s=Wr.ci(r,o))&&(this.Ti=this.Ti.ot(s.clientId,s))
for(this.bi(),(u=this.storage.getItem(this.Vi))&&(a=this.vi(u))&&this.Si(a),c=0,h=this.Ii;c<h.length;c++)f=h[c],this.mi(f)
return this.Ii=[],this.window.addEventListener("unload",(function(){return l.Di()})),this.Ei=!0,[2]}}))}))},t.prototype.oi=function(t){this.setItem(this.Ri,JSON.stringify(t))},t.prototype.Ci=function(){return this.Ni(this.Ti)},t.prototype.Fi=function(t){var e=!1
return this.Ti.forEach((function(n,r){r.activeTargetIds.has(t)&&(e=!0)})),e},t.prototype.xi=function(t){this.$i(t,"pending")},t.prototype.ki=function(t,e,n){this.$i(t,e,n),this.Mi(t)},t.prototype.Oi=function(t){var e="not-current"
if(this.Fi(t)){var n=this.storage.getItem(Br(this.persistenceKey,t))
if(n){var r=Kr.ci(t,n)
r&&(e=r.state)}}return this.Li.hi(t),this.bi(),e},t.prototype.Bi=function(t){this.Li.li(t),this.bi()},t.prototype.qi=function(t){return this.Li.activeTargetIds.has(t)},t.prototype.Ui=function(t){this.removeItem(Br(this.persistenceKey,t))},t.prototype.Qi=function(t,e,n){this.Wi(t,e,n)},t.prototype.ji=function(t,e,n){var r=this
e.forEach((function(t){r.Mi(t)})),this.currentUser=t,n.forEach((function(t){r.xi(t)}))},t.prototype.Ki=function(t){this.Gi(t)},t.prototype.Di=function(){this.Ei&&(this.window.removeEventListener("storage",this.wi),this.removeItem(this.Ai),this.Ei=!1)},t.prototype.getItem=function(t){var e=this.storage.getItem(t)
return v("SharedClientState","READ",t,e),e},t.prototype.setItem=function(t,e){v("SharedClientState","SET",t,e),this.storage.setItem(t,e)},t.prototype.removeItem=function(t){v("SharedClientState","REMOVE",t),this.storage.removeItem(t)},t.prototype.mi=function(t){var e=this,n=t
if(n.storageArea===this.storage){if(v("SharedClientState","EVENT",n.key,n.newValue),n.key===this.Ai)return void y("Received WebStorage notification for local change. Another client might have garbage-collected our state")
this.fn.Cs((function(){return i.__awaiter(e,void 0,void 0,(function(){var t,e,r,o,s,u
return i.__generator(this,(function(i){if(this.Ei){if(null!==n.key)if(this.gi.test(n.key)){if(null==n.newValue)return t=this.zi(n.key),[2,this.Hi(t,null)]
if(e=this.Yi(n.key,n.newValue))return[2,this.Hi(e.clientId,e)]}else if(this.Pi.test(n.key)){if(null!==n.newValue&&(r=this.Ji(n.key,n.newValue)))return[2,this.Xi(r)]}else if(this.yi.test(n.key)){if(null!==n.newValue&&(o=this.Zi(n.key,n.newValue)))return[2,this.tr(o)]}else if(n.key===this.Vi){if(null!==n.newValue&&(s=this.vi(n.newValue)))return[2,this.Si(s)]}else n.key===this.Ri&&(u=function(t){var e=jr.ai
if(null!=t)try{var n=JSON.parse(t)
b("number"==typeof n),e=n}catch(t){y("SharedClientState","Failed to read sequence number from WebStorage",t)}return e}(n.newValue))!==jr.ai&&this.si(u)}else this.Ii.push(n)
return[2]}))}))}))}},Object.defineProperty(t.prototype,"Li",{get:function(){return this.Ti.get(this._i)},enumerable:!1,configurable:!0}),t.prototype.bi=function(){this.setItem(this.Ai,this.Li.ui())},t.prototype.$i=function(t,e,n){var r=new zr(this.currentUser,t,e,n),i=Gr(this.persistenceKey,this.currentUser,t)
this.setItem(i,r.ui())},t.prototype.Mi=function(t){var e=Gr(this.persistenceKey,this.currentUser,t)
this.removeItem(e)},t.prototype.Gi=function(t){var e={clientId:this._i,onlineState:t}
this.storage.setItem(this.Vi,JSON.stringify(e))},t.prototype.Wi=function(t,e,n){var r=Br(this.persistenceKey,t),i=new Kr(t,e,n)
this.setItem(r,i.ui())},t.prototype.zi=function(t){var e=this.gi.exec(t)
return e?e[1]:null},t.prototype.Yi=function(t,e){var n=this.zi(t)
return Wr.ci(n,e)},t.prototype.Ji=function(t,e){var n=this.Pi.exec(t),r=Number(n[1]),i=void 0!==n[2]?n[2]:null
return zr.ci(new Fr(i),r,e)},t.prototype.Zi=function(t,e){var n=this.yi.exec(t),r=Number(n[1])
return Kr.ci(r,e)},t.prototype.vi=function(t){return Hr.ci(t)},t.prototype.Xi=function(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return t.user.uid===this.currentUser.uid?[2,this.fi.er(t.batchId,t.state,t.error)]:(v("SharedClientState","Ignoring mutation for non-active user "+t.user.uid),[2])}))}))},t.prototype.tr=function(t){return this.fi.nr(t.targetId,t.state,t.error)},t.prototype.Hi=function(t,e){var n=this,r=e?this.Ti.ot(t,e):this.Ti.remove(t),i=this.Ni(this.Ti),o=this.Ni(r),s=[],u=[]
return o.forEach((function(t){i.has(t)||s.push(t)})),i.forEach((function(t){o.has(t)||u.push(t)})),this.fi.sr(s,u).then((function(){n.Ti=r}))},t.prototype.Si=function(t){this.Ti.get(t.clientId)&&this.di(t.onlineState)},t.prototype.Ni=function(t){var e=Mt()
return t.forEach((function(t,n){e=e.kt(n.activeTargetIds)})),e},t}(),Yr=function(){function t(){this.ir=new Qr,this.rr={},this.di=null,this.si=null}return t.prototype.xi=function(t){},t.prototype.ki=function(t,e,n){},t.prototype.Oi=function(t){return this.ir.hi(t),this.rr[t]||"not-current"},t.prototype.Qi=function(t,e,n){this.rr[t]=e},t.prototype.Bi=function(t){this.ir.li(t)},t.prototype.qi=function(t){return this.ir.activeTargetIds.has(t)},t.prototype.Ui=function(t){delete this.rr[t]},t.prototype.Ci=function(){return this.ir.activeTargetIds},t.prototype.Fi=function(t){return this.ir.activeTargetIds.has(t)},t.prototype.start=function(){return this.ir=new Qr,Promise.resolve()},t.prototype.ji=function(t,e,n){},t.prototype.Ki=function(t){},t.prototype.Di=function(){},t.prototype.oi=function(t){},t}(),Jr=function(){function t(t,e,n,r){this.batchId=t,this.ar=e,this.baseMutations=n,this.mutations=r}return t.prototype.cr=function(t,e,n){for(var r=n.ur,i=0;i<this.mutations.length;i++){var o=this.mutations[i]
o.key.isEqual(t)&&(e=dn(o,e,r[i]))}return e},t.prototype.hr=function(t,e){for(var n=0,r=this.baseMutations;n<r.length;n++){var i=r[n]
i.key.isEqual(t)&&(e=vn(i,e,e,this.ar))}for(var o=e,s=0,u=this.mutations;s<u.length;s++){var a=u[s]
a.key.isEqual(t)&&(e=vn(a,e,o,this.ar))}return e},t.prototype.lr=function(t){var e=this,n=t
return this.mutations.forEach((function(r){var i=e.hr(r.key,t.get(r.key))
i&&(n=n.ot(r.key,i))})),n},t.prototype.keys=function(){return this.mutations.reduce((function(t,e){return t.add(e.key)}),Ut())},t.prototype.isEqual=function(t){return this.batchId===t.batchId&&$(this.mutations,t.mutations,(function(t,e){return gn(t,e)}))&&$(this.baseMutations,t.baseMutations,(function(t,e){return gn(t,e)}))},t}(),$r=function(){function t(t,e,n,r){this.batch=t,this._r=e,this.ur=n,this.dr=r}return t.from=function(e,n,r){b(e.mutations.length===r.length)
for(var i=Pt,o=e.mutations,s=0;s<o.length;s++)i=i.ot(o[s].key,r[s].version)
return new t(e,n,r,i)},t}(),Zr=function(){function t(){this.wr=new ut((function(t){return t.toString()}),(function(t,e){return t.isEqual(e)})),this.mr=!1}return Object.defineProperty(t.prototype,"readTime",{get:function(){return this.Tr},set:function(t){this.Tr=t},enumerable:!1,configurable:!0}),t.prototype.Er=function(t,e){this.Ir(),this.readTime=e,this.wr.set(t.key,t)},t.prototype.Ar=function(t,e){this.Ir(),e&&(this.readTime=e),this.wr.set(t,null)},t.prototype.Rr=function(t,e){this.Ir()
var n=this.wr.get(e)
return void 0!==n?yr.resolve(n):this.gr(t,e)},t.prototype.getEntries=function(t,e){return this.Pr(t,e)},t.prototype.apply=function(t){return this.Ir(),this.mr=!0,this.yr(t)},t.prototype.Ir=function(){},t}(),ti="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.",ei=function(){function t(){this.Vr=[]}return t.prototype.pr=function(t){this.Vr.push(t)},t.prototype.br=function(){this.Vr.forEach((function(t){return t()}))},t}(),ni=function(){function t(t,e,n){this.vr=t,this.Sr=e,this.Dr=n}return t.prototype.Cr=function(t,e){var n=this
return this.Sr.Nr(t,e).next((function(r){return n.Fr(t,e,r)}))},t.prototype.Fr=function(t,e,n){return this.vr.Rr(t,e).next((function(t){for(var r=0,i=n;r<i.length;r++)t=i[r].hr(e,t)
return t}))},t.prototype.$r=function(t,e,n){var r=kt()
return e.forEach((function(t,e){for(var i=0,o=n;i<o.length;i++)e=o[i].hr(t,e)
r=r.ot(t,e)})),r},t.prototype.kr=function(t,e){var n=this
return this.vr.getEntries(t,e).next((function(e){return n.Mr(t,e)}))},t.prototype.Mr=function(t,e){var n=this
return this.Sr.Or(t,e).next((function(r){var i=n.$r(t,e,r),o=Lt()
return i.forEach((function(t,e){e||(e=new Rn(t,ct.min())),o=o.ot(t,e)})),o}))},t.prototype.Lr=function(t,e,n){return function(t){return x.F(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Br(t,e.path):qn(e)?this.qr(t,e,n):this.Ur(t,e,n)},t.prototype.Br=function(t,e){return this.Cr(t,new x(e)).next((function(t){var e=Ot()
return t instanceof kn&&(e=e.ot(t.key,t)),e}))},t.prototype.qr=function(t,e,n){var r=this,i=e.collectionGroup,o=Ot()
return this.Dr.Qr(t,i).next((function(s){return yr.forEach(s,(function(s){var u=function(t,e){return new Pn(e,null,t.on.slice(),t.filters.slice(),t.limit,t.an,t.startAt,t.endAt)}(e,s.child(i))
return r.Ur(t,u,n).next((function(t){t.forEach((function(t,e){o=o.ot(t,e)}))}))})).next((function(){return o}))}))},t.prototype.Ur=function(t,e,n){var r,i,o=this
return this.vr.Lr(t,e,n).next((function(n){return r=n,o.Sr.Wr(t,e)})).next((function(e){return i=e,o.jr(t,i,r).next((function(t){r=t
for(var e=0,n=i;e<n.length;e++)for(var o=n[e],s=0,u=o.mutations;s<u.length;s++){var a=u[s],c=a.key,h=r.get(c),f=vn(a,h,h,o.ar)
r=f instanceof kn?r.ot(c,f):r.remove(c)}}))})).next((function(){return r.forEach((function(t,n){Yn(e,n)||(r=r.remove(t))})),r}))},t.prototype.jr=function(t,e,n){for(var r=Ut(),i=0,o=e;i<o.length;i++)for(var s=0,u=o[i].mutations;s<u.length;s++){var a=u[s]
a instanceof bn&&null===n.get(a.key)&&(r=r.add(a.key))}var c=n
return this.vr.getEntries(t,r).next((function(t){return t.forEach((function(t,e){null!==e&&e instanceof kn&&(c=c.ot(t,e))})),c}))},t}(),ri=function(){function t(t,e,n,r){this.targetId=t,this.fromCache=e,this.Kr=n,this.Gr=r}return t.zr=function(e,n){for(var r=Ut(),i=Ut(),o=0,s=n.docChanges;o<s.length;o++){var u=s[o]
switch(u.type){case 0:r=r.add(u.doc.key)
break
case 1:i=i.add(u.doc.key)}}return new t(e,n.fromCache,r,i)},t}()

;/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ii(t,e){var n=t[0],r=t[1],i=e[0],o=e[1],s=J(n,i)
return 0===s?J(r,o):s}var oi=function(){function t(t){this.Hr=t,this.buffer=new St(ii),this.Yr=0}return t.prototype.Jr=function(){return++this.Yr},t.prototype.Xr=function(t){var e=[t,this.Jr()]
if(this.buffer.size<this.Hr)this.buffer=this.buffer.add(e)
else{var n=this.buffer.last()
ii(e,n)<0&&(this.buffer=this.buffer.delete(n).add(e))}},Object.defineProperty(t.prototype,"maxValue",{get:function(){return this.buffer.last()[0]},enumerable:!1,configurable:!0}),t}(),si={Zr:!1,eo:0,no:0,so:0},ui=function(){function t(t,e,n){this.io=t,this.ro=e,this.oo=n}return t.ao=function(e){return new t(e,t.co,t.uo)},t}()
ui.ho=-1,ui.lo=1048576,ui._o=41943040,ui.co=10,ui.uo=1e3,ui.fo=new ui(ui._o,ui.co,ui.uo),ui.do=new ui(ui.ho,0,0)
var ai=function(){function t(t,e){this.wo=t,this.cs=e,this.mo=!1,this.To=null}return t.prototype.start=function(t){this.wo.params.io!==ui.ho&&this.Eo(t)},t.prototype.stop=function(){this.To&&(this.To.cancel(),this.To=null)},Object.defineProperty(t.prototype,"Ei",{get:function(){return null!==this.To},enumerable:!1,configurable:!0}),t.prototype.Eo=function(t){var e=this,n=this.mo?3e5:6e4
v("LruGarbageCollector","Garbage collection scheduled in "+n+"ms"),this.To=this.cs.yn("lru_garbage_collection",n,(function(){return i.__awaiter(e,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){switch(n.label){case 0:this.To=null,this.mo=!0,n.label=1
case 1:return n.trys.push([1,3,,7]),[4,t.Io(this.wo)]
case 2:return n.sent(),[3,7]
case 3:return br(e=n.sent())?(v("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e),[3,6]):[3,4]
case 4:return[4,Do(e)]
case 5:n.sent(),n.label=6
case 6:return[3,7]
case 7:return[4,this.Eo(t)]
case 8:return n.sent(),[2]}}))}))}))},t}(),ci=function(){function t(t,e){this.Ao=t,this.params=e}return t.prototype.Ro=function(t,e){return this.Ao.Po(t).next((function(t){return Math.floor(e/100*t)}))},t.prototype.yo=function(t,e){var n=this
if(0===e)return yr.resolve(jr.ai)
var r=new oi(e)
return this.Ao.Ce(t,(function(t){return r.Xr(t.sequenceNumber)})).next((function(){return n.Ao.Vo(t,(function(t){return r.Xr(t)}))})).next((function(){return r.maxValue}))},t.prototype.po=function(t,e,n){return this.Ao.po(t,e,n)},t.prototype.bo=function(t,e){return this.Ao.bo(t,e)},t.prototype.vo=function(t,e){var n=this
return this.params.io===ui.ho?(v("LruGarbageCollector","Garbage collection skipped; disabled"),yr.resolve(si)):this.So(t).next((function(r){return r<n.params.io?(v("LruGarbageCollector","Garbage collection skipped; Cache size "+r+" is lower than threshold "+n.params.io),si):n.Do(t,e)}))},t.prototype.So=function(t){return this.Ao.So(t)},t.prototype.Do=function(t,e){var n,r,i,o,u,a,c,h=this,f=Date.now()
return this.Ro(t,this.params.ro).next((function(e){return e>h.params.oo?(v("LruGarbageCollector","Capping sequence numbers to collect down to the maximum of "+h.params.oo+" from "+e),r=h.params.oo):r=e,o=Date.now(),h.yo(t,r)})).next((function(r){return n=r,u=Date.now(),h.po(t,n,e)})).next((function(e){return i=e,a=Date.now(),h.bo(t,n)})).next((function(t){return c=Date.now(),d()<=s.LogLevel.DEBUG&&v("LruGarbageCollector","LRU Garbage Collection\n\tCounted targets in "+(o-f)+"ms\n\tDetermined least recently used "+r+" in "+(u-o)+"ms\n\tRemoved "+i+" targets in "+(a-u)+"ms\n\tRemoved "+t+" documents in "+(c-a)+"ms\nTotal Duration: "+(c-f)+"ms"),yr.resolve({Zr:!0,eo:r,no:i,so:t})}))},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function hi(t){for(var e="",n=0;n<t.length;n++)e.length>0&&(e=li(e)),e=fi(t.get(n),e)
return li(e)}function fi(t,e){for(var n=e,r=t.length,i=0;i<r;i++){var o=t.charAt(i)
switch(o){case"\0":n+=""
break
case"":n+=""
break
default:n+=o}}return n}function li(t){return t+""}function pi(t){var e=t.length
if(b(e>=2),2===e)return b(""===t.charAt(0)&&""===t.charAt(1)),N.P()
for(var n=e-2,r=[],i="",o=0;o<e;){var s=t.indexOf("",o)
switch((s<0||s>n)&&w(),t.charAt(s+1)){case"":var u=t.substring(o,s),a=void 0
0===i.length?a=u:(a=i+=u,i=""),r.push(a)
break
case"":i+=t.substring(o,s),i+="\0"
break
case"":i+=t.substring(o,s+1)
break
default:w()}o=s+2}return new N(r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var di=function(t){this.Co=t}
function vi(t,e){if(e.document)return function(t,e,n){var r=De(t,e.name),i=Te(e.updateTime),o=new Sn({mapValue:{fields:e.fields}})
return new kn(r,i,o,{hasCommittedMutations:!!n})}(t.Co,e.document,!!e.hasCommittedMutations)
if(e.noDocument){var n=x.$(e.noDocument.path),r=bi(e.noDocument.readTime)
return new Rn(n,r,{hasCommittedMutations:!!e.hasCommittedMutations})}if(e.unknownDocument){var i=x.$(e.unknownDocument.path),o=bi(e.unknownDocument.version)
return new On(i,o)}return w()}function yi(t,e,n){var r=gi(n),i=e.key.path.h().A()
if(e instanceof kn){var o=function(t,e){return{name:Se(t,e.key),fields:e.rn().mapValue.fields,updateTime:_e(t,e.version.Z())}}(t.Co,e),s=e.hasCommittedMutations
return new Wi(null,null,o,s,r,i)}if(e instanceof Rn){var u=e.key.path.A(),a=wi(e.version),c=e.hasCommittedMutations
return new Wi(null,new zi(u,a),null,c,r,i)}if(e instanceof On){var h=e.key.path.A(),f=wi(e.version)
return new Wi(new Ki(h,f),null,null,!0,r,i)}return w()}function gi(t){var e=t.Z()
return[e.seconds,e.nanoseconds]}function mi(t){var e=new at(t[0],t[1])
return ct.J(e)}function wi(t){var e=t.Z()
return new Fi(e.seconds,e.nanoseconds)}function bi(t){var e=new at(t.seconds,t.nanoseconds)
return ct.J(e)}function _i(t,e){var n=(e.baseMutations||[]).map((function(e){return Ce(t.Co,e)})),r=e.mutations.map((function(e){return Ce(t.Co,e)})),i=at.fromMillis(e.localWriteTimeMs)
return new Jr(e.batchId,i,n,r)}function Ii(t){var e,n,r=bi(t.readTime),i=void 0!==t.lastLimboFreeSnapshotVersion?bi(t.lastLimboFreeSnapshotVersion):ct.min()
return void 0!==t.query.documents?(b(1===(n=t.query).documents.length),e=Bn(Un(Le(n.documents[0])))):e=Me(t.query),new bt(e,t.targetId,0,t.lastListenSequenceNumber,r,i,tt.fromBase64String(t.resumeToken))}function Ei(t,e){var n,r=wi(e.nt),i=wi(e.lastLimboFreeSnapshotVersion)
n=gt(e.target)?Ue(t.Co,e.target):Ve(t.Co,e.target)
var o=e.resumeToken.toBase64()
return new Qi(e.targetId,vt(e.target),r,o,e.sequenceNumber,i,n)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ti=function(){function t(t,e,n,r){this.userId=t,this.serializer=e,this.Dr=n,this.No=r,this.Fo={}}return t.xo=function(e,n,r,i){return b(""!==e.uid),new t(e.Zs()?e.uid:"",n,r,i)},t.prototype.$o=function(t){var e=!0,n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY])
return Si(t).rs({index:Gi.userMutationsIndex,range:n},(function(t,n,r){e=!1,r.done()})).next((function(){return e}))},t.prototype.ko=function(t,e,n,r){var i=this,o=Di(t),s=Si(t)
return s.add({}).next((function(u){b("number"==typeof u)
for(var a=new Jr(u,e,n,r),c=function(t,e,n){var r=n.baseMutations.map((function(e){return Pe(t.Co,e)})),i=n.mutations.map((function(e){return Pe(t.Co,e)}))
return new Gi(e,n.batchId,n.ar.toMillis(),r,i)}(i.serializer,i.userId,a),h=[],f=new St((function(t,e){return J(t.R(),e.R())})),l=0,p=r;l<p.length;l++){var d=p[l],v=Bi.key(i.userId,d.key.path,u)
f=f.add(d.key.path.h()),h.push(s.put(c)),h.push(o.put(v,Bi.PLACEHOLDER))}return f.forEach((function(e){h.push(i.Dr.Mo(t,e))})),t.pr((function(){i.Fo[u]=a.keys()})),yr.$n(h).next((function(){return a}))}))},t.prototype.Oo=function(t,e){var n=this
return Si(t).get(e).next((function(t){return t?(b(t.userId===n.userId),_i(n.serializer,t)):null}))},t.prototype.Lo=function(t,e){var n=this
return this.Fo[e]?yr.resolve(this.Fo[e]):this.Oo(t,e).next((function(t){if(t){var r=t.keys()
return n.Fo[e]=r,r}return null}))},t.prototype.Bo=function(t,e){var n=this,r=e+1,i=IDBKeyRange.lowerBound([this.userId,r]),o=null
return Si(t).rs({index:Gi.userMutationsIndex,range:i},(function(t,e,i){e.userId===n.userId&&(b(e.batchId>=r),o=_i(n.serializer,e)),i.done()})).next((function(){return o}))},t.prototype.qo=function(t){var e=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]),n=-1
return Si(t).rs({index:Gi.userMutationsIndex,range:e,reverse:!0},(function(t,e,r){n=e.batchId,r.done()})).next((function(){return n}))},t.prototype.Uo=function(t){var e=this,n=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY])
return Si(t).ts(Gi.userMutationsIndex,n).next((function(t){return t.map((function(t){return _i(e.serializer,t)}))}))},t.prototype.Nr=function(t,e){var n=this,r=Bi.prefixForPath(this.userId,e.path),i=IDBKeyRange.lowerBound(r),o=[]
return Di(t).rs({range:i},(function(r,i,s){var u=r[0],a=r[1],c=r[2],h=pi(a)
if(u===n.userId&&e.path.isEqual(h))return Si(t).get(c).next((function(t){if(!t)throw w()
b(t.userId===n.userId),o.push(_i(n.serializer,t))}))
s.done()})).next((function(){return o}))},t.prototype.Or=function(t,e){var n=this,r=new St(J),i=[]
return e.forEach((function(e){var o=Bi.prefixForPath(n.userId,e.path),s=IDBKeyRange.lowerBound(o),u=Di(t).rs({range:s},(function(t,i,o){var s=t[0],u=t[1],a=t[2],c=pi(u)
s===n.userId&&e.path.isEqual(c)?r=r.add(a):o.done()}))
i.push(u)})),yr.$n(i).next((function(){return n.Qo(t,r)}))},t.prototype.Wr=function(t,e){var n=this,r=e.path,i=r.length+1,o=Bi.prefixForPath(this.userId,r),s=IDBKeyRange.lowerBound(o),u=new St(J)
return Di(t).rs({range:s},(function(t,e,o){var s=t[0],a=t[1],c=t[2],h=pi(a)
s===n.userId&&r.T(h)?h.length===i&&(u=u.add(c)):o.done()})).next((function(){return n.Qo(t,u)}))},t.prototype.Qo=function(t,e){var n=this,r=[],i=[]
return e.forEach((function(e){i.push(Si(t).get(e).next((function(t){if(null===t)throw w()
b(t.userId===n.userId),r.push(_i(n.serializer,t))})))})),yr.$n(i).next((function(){return r}))},t.prototype.Wo=function(t,e){var n=this
return Ni(t.jo,this.userId,e).next((function(r){return t.pr((function(){n.Ko(e.batchId)})),yr.forEach(r,(function(e){return n.No.Go(t,e)}))}))},t.prototype.Ko=function(t){delete this.Fo[t]},t.prototype.zo=function(t){var e=this
return this.$o(t).next((function(n){if(!n)return yr.resolve()
var r=IDBKeyRange.lowerBound(Bi.prefixForUser(e.userId)),i=[]
return Di(t).rs({range:r},(function(t,n,r){if(t[0]===e.userId){var o=pi(t[1])
i.push(o)}else r.done()})).next((function(){b(0===i.length)}))}))},t.prototype.Ho=function(t,e){return Ai(t,this.userId,e)},t.prototype.Yo=function(t){var e=this
return xi(t).get(this.userId).next((function(t){return t||new qi(e.userId,-1,"")}))},t}()
function Ai(t,e,n){var r=Bi.prefixForPath(e,n.path),i=r[1],o=IDBKeyRange.lowerBound(r),s=!1
return Di(t).rs({range:o,ss:!0},(function(t,n,r){var o=t[0],u=t[1]
t[2],o===e&&u===i&&(s=!0),r.done()})).next((function(){return s}))}function Ni(t,e,n){var r=t.store(Gi.store),i=t.store(Bi.store),o=[],s=IDBKeyRange.only(n.batchId),u=0,a=r.rs({range:s},(function(t,e,n){return u++,n.delete()}))
o.push(a.next((function(){b(1===u)})))
for(var c=[],h=0,f=n.mutations;h<f.length;h++){var l=f[h],p=Bi.key(e,l.key.path,n.batchId)
o.push(i.delete(p)),c.push(l.key)}return yr.$n(o).next((function(){return c}))}function Si(t){return ho.Qn(t,Gi.store)}function Di(t){return ho.Qn(t,Bi.store)}function xi(t){return ho.Qn(t,qi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Li=function(){function t(t,e){this.serializer=t,this.Dr=e}return t.prototype.Er=function(t,e,n){return Oi(t).put(Pi(e),n)},t.prototype.Ar=function(t,e){var n=Oi(t),r=Pi(e)
return n.delete(r)},t.prototype.updateMetadata=function(t,e){var n=this
return this.getMetadata(t).next((function(r){return r.byteSize+=e,n.Jo(t,r)}))},t.prototype.Rr=function(t,e){var n=this
return Oi(t).get(Pi(e)).next((function(t){return n.Xo(t)}))},t.prototype.Zo=function(t,e){var n=this
return Oi(t).get(Pi(e)).next((function(t){var e=n.Xo(t)
return e?{ta:e,size:Ci(t)}:null}))},t.prototype.getEntries=function(t,e){var n=this,r=kt()
return this.ea(t,e,(function(t,e){var i=n.Xo(e)
r=r.ot(t,i)})).next((function(){return r}))},t.prototype.na=function(t,e){var n=this,r=kt(),i=new Tt(x.i)
return this.ea(t,e,(function(t,e){var o=n.Xo(e)
o?(r=r.ot(t,o),i=i.ot(t,Ci(e))):(r=r.ot(t,null),i=i.ot(t,0))})).next((function(){return{sa:r,ia:i}}))},t.prototype.ea=function(t,e,n){if(e.m())return yr.resolve()
var r=IDBKeyRange.bound(e.first().path.A(),e.last().path.A()),i=e._t(),o=i.It()
return Oi(t).rs({range:r},(function(t,e,r){for(var s=x.$(t);o&&x.i(o,s)<0;)n(o,null),o=i.It()
o&&o.isEqual(s)&&(n(o,e),o=i.At()?i.It():null),o?r.Xn(o.path.A()):r.done()})).next((function(){for(;o;)n(o,null),o=i.At()?i.It():null}))},t.prototype.Lr=function(t,e,n){var r=this,i=Ot(),o=e.path.length+1,s={}
if(n.isEqual(ct.min())){var u=e.path.A()
s.range=IDBKeyRange.lowerBound(u)}else{var a=e.path.A(),c=gi(n)
s.range=IDBKeyRange.lowerBound([a,c],!0),s.index=Wi.collectionReadTimeIndex}return Oi(t).rs(s,(function(t,n,s){if(t.length===o){var u=vi(r.serializer,n)
e.path.T(u.key.path)?u instanceof kn&&Yn(e,u)&&(i=i.ot(u.key,u)):s.done()}})).next((function(){return i}))},t.prototype.ra=function(t){return new ki(this,!!t&&t.oa)},t.prototype.aa=function(t){return this.getMetadata(t).next((function(t){return t.byteSize}))},t.prototype.getMetadata=function(t){return Ri(t).get(Hi.key).next((function(t){return b(!!t),t}))},t.prototype.Jo=function(t,e){return Ri(t).put(Hi.key,e)},t.prototype.Xo=function(t){if(t){var e=vi(this.serializer,t)
return e instanceof Rn&&e.version.isEqual(ct.min())?null:e}return null},t}(),ki=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).ca=e,r.oa=n,r.ua=new ut((function(t){return t.toString()}),(function(t,e){return t.isEqual(e)})),r}return i.__extends(e,t),e.prototype.yr=function(t){var e=this,n=[],r=0,i=new St((function(t,e){return J(t.R(),e.R())}))
return this.wr.forEach((function(o,s){var u=e.ua.get(o)
if(s){var a=yi(e.ca.serializer,s,e.readTime)
i=i.add(o.path.h())
var c=Ci(a)
r+=c-u,n.push(e.ca.Er(t,o,a))}else if(r-=u,e.oa){var h=yi(e.ca.serializer,new Rn(o,ct.min()),e.readTime)
n.push(e.ca.Er(t,o,h))}else n.push(e.ca.Ar(t,o))})),i.forEach((function(r){n.push(e.ca.Dr.Mo(t,r))})),n.push(this.ca.updateMetadata(t,r)),yr.$n(n)},e.prototype.gr=function(t,e){var n=this
return this.ca.Zo(t,e).next((function(t){return null===t?(n.ua.set(e,0),null):(n.ua.set(e,t.size),t.ta)}))},e.prototype.Pr=function(t,e){var n=this
return this.ca.na(t,e).next((function(t){var e=t.sa
return t.ia.forEach((function(t,e){n.ua.set(t,e)})),e}))},e}(Zr)
function Ri(t){return ho.Qn(t,Hi.store)}function Oi(t){return ho.Qn(t,Wi.store)}function Pi(t){return t.path.A()}function Ci(t){var e
if(t.document)e=t.document
else if(t.unknownDocument)e=t.unknownDocument
else{if(!t.noDocument)throw w()
e=t.noDocument}return JSON.stringify(e).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ui=function(){function t(){this.ha=new Vi}return t.prototype.Mo=function(t,e){return this.ha.add(e),yr.resolve()},t.prototype.Qr=function(t,e){return yr.resolve(this.ha.getEntries(e))},t}(),Vi=function(){function t(){this.index={}}return t.prototype.add=function(t){var e=t._(),n=t.h(),r=this.index[e]||new St(N.i),i=!r.has(n)
return this.index[e]=r.add(n),i},t.prototype.has=function(t){var e=t._(),n=t.h(),r=this.index[e]
return r&&r.has(n)},t.prototype.getEntries=function(t){return(this.index[t]||new St(N.i)).A()},t}(),Mi=function(){function t(t){this.serializer=t}return t.prototype.createOrUpgrade=function(t,e,n,r){var i=this
b(n<r&&n>=0&&r<=10)
var o=new _r("createOrUpgrade",e)
n<1&&r>=1&&(function(t){t.createObjectStore(ji.store)}(t),function(t){t.createObjectStore(qi.store,{keyPath:qi.keyPath}),t.createObjectStore(Gi.store,{keyPath:Gi.keyPath,autoIncrement:!0}).createIndex(Gi.userMutationsIndex,Gi.userMutationsKeyPath,{unique:!0}),t.createObjectStore(Bi.store)}(t),$i(t),function(t){t.createObjectStore(Wi.store)}(t))
var s=yr.resolve()
return n<3&&r>=3&&(0!==n&&(function(t){t.deleteObjectStore(Xi.store),t.deleteObjectStore(Qi.store),t.deleteObjectStore(Yi.store)}(t),$i(t)),s=s.next((function(){return function(t){var e=t.store(Yi.store),n=new Yi(0,0,ct.min().Z(),0)
return e.put(Yi.key,n)}(o)}))),n<4&&r>=4&&(0!==n&&(s=s.next((function(){return function(t,e){return e.store(Gi.store).ts().next((function(n){t.deleteObjectStore(Gi.store),t.createObjectStore(Gi.store,{keyPath:Gi.keyPath,autoIncrement:!0}).createIndex(Gi.userMutationsIndex,Gi.userMutationsKeyPath,{unique:!0})
var r=e.store(Gi.store),i=n.map((function(t){return r.put(t)}))
return yr.$n(i)}))}(t,o)}))),s=s.next((function(){!function(t){t.createObjectStore(Zi.store,{keyPath:Zi.keyPath})}(t)}))),n<5&&r>=5&&(s=s.next((function(){return i.removeAcknowledgedMutations(o)}))),n<6&&r>=6&&(s=s.next((function(){return function(t){t.createObjectStore(Hi.store)}(t),i.addDocumentGlobal(o)}))),n<7&&r>=7&&(s=s.next((function(){return i.ensureSequenceNumbers(o)}))),n<8&&r>=8&&(s=s.next((function(){return i.createCollectionParentIndex(t,o)}))),n<9&&r>=9&&(s=s.next((function(){!function(t){t.objectStoreNames.contains("remoteDocumentChanges")&&t.deleteObjectStore("remoteDocumentChanges")}(t),function(t){var e=t.objectStore(Wi.store)
e.createIndex(Wi.readTimeIndex,Wi.readTimeIndexPath,{unique:!1}),e.createIndex(Wi.collectionReadTimeIndex,Wi.collectionReadTimeIndexPath,{unique:!1})}(e)}))),n<10&&r>=10&&(s=s.next((function(){return i.rewriteCanonicalIds(o)}))),s},t.prototype.addDocumentGlobal=function(t){var e=0
return t.store(Wi.store).rs((function(t,n){e+=Ci(n)})).next((function(){var n=new Hi(e)
return t.store(Hi.store).put(Hi.key,n)}))},t.prototype.removeAcknowledgedMutations=function(t){var e=this,n=t.store(qi.store),r=t.store(Gi.store)
return n.ts().next((function(n){return yr.forEach(n,(function(n){var i=IDBKeyRange.bound([n.userId,-1],[n.userId,n.lastAcknowledgedBatchId])
return r.ts(Gi.userMutationsIndex,i).next((function(r){return yr.forEach(r,(function(r){b(r.userId===n.userId)
var i=_i(e.serializer,r)
return Ni(t,n.userId,i).next((function(){}))}))}))}))}))},t.prototype.ensureSequenceNumbers=function(t){var e=t.store(Xi.store),n=t.store(Wi.store)
return t.store(Yi.store).get(Yi.key).next((function(t){var r=[]
return n.rs((function(n,i){var o=new N(n),s=function(t){return[0,hi(t)]}(o)
r.push(e.get(s).next((function(n){return n?yr.resolve():function(n){return e.put(new Xi(0,hi(n),t.highestListenSequenceNumber))}(o)})))})).next((function(){return yr.$n(r)}))}))},t.prototype.createCollectionParentIndex=function(t,e){t.createObjectStore(Ji.store,{keyPath:Ji.keyPath})
var n=e.store(Ji.store),r=new Vi,i=function(t){if(r.add(t)){var e=t._(),i=t.h()
return n.put({collectionId:e,parent:hi(i)})}}
return e.store(Wi.store).rs({ss:!0},(function(t,e){var n=new N(t)
return i(n.h())})).next((function(){return e.store(Bi.store).rs({ss:!0},(function(t,e){t[0]
var n=t[1],r=(t[2],pi(n))
return i(r.h())}))}))},t.prototype.rewriteCanonicalIds=function(t){var e=this,n=t.store(Qi.store)
return n.rs((function(t,r){var i=Ii(r),o=Ei(e.serializer,i)
return n.put(o)}))},t}(),Fi=function(t,e){this.seconds=t,this.nanoseconds=e},ji=function(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}
ji.store="owner",ji.key="owner"
var qi=function(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}
qi.store="mutationQueues",qi.keyPath="userId"
var Gi=function(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}
Gi.store="mutations",Gi.keyPath="batchId",Gi.userMutationsIndex="userMutationsIndex",Gi.userMutationsKeyPath=["userId","batchId"]
var Bi=function(){function t(){}return t.prefixForUser=function(t){return[t]},t.prefixForPath=function(t,e){return[t,hi(e)]},t.key=function(t,e,n){return[t,hi(e),n]},t}()
Bi.store="documentMutations",Bi.PLACEHOLDER=new Bi
var zi=function(t,e){this.path=t,this.readTime=e},Ki=function(t,e){this.path=t,this.version=e},Wi=function(t,e,n,r,i,o){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=o}
Wi.store="remoteDocuments",Wi.readTimeIndex="readTimeIndex",Wi.readTimeIndexPath="readTime",Wi.collectionReadTimeIndex="collectionReadTimeIndex",Wi.collectionReadTimeIndexPath=["parentPath","readTime"]
var Hi=function(t){this.byteSize=t}
Hi.store="remoteDocumentGlobal",Hi.key="remoteDocumentGlobalKey"
var Qi=function(t,e,n,r,i,o,s){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=o,this.query=s}
Qi.store="targets",Qi.keyPath="targetId",Qi.queryTargetsIndexName="queryTargetsIndex",Qi.queryTargetsKeyPath=["canonicalId","targetId"]
var Xi=function(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}
Xi.store="targetDocuments",Xi.keyPath=["targetId","path"],Xi.documentTargetsIndex="documentTargetsIndex",Xi.documentTargetsKeyPath=["path","targetId"]
var Yi=function(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}
Yi.key="targetGlobalKey",Yi.store="targetGlobal"
var Ji=function(t,e){this.collectionId=t,this.parent=e}
function $i(t){t.createObjectStore(Xi.store,{keyPath:Xi.keyPath}).createIndex(Xi.documentTargetsIndex,Xi.documentTargetsKeyPath,{unique:!0}),t.createObjectStore(Qi.store,{keyPath:Qi.keyPath}).createIndex(Qi.queryTargetsIndexName,Qi.queryTargetsKeyPath,{unique:!0}),t.createObjectStore(Yi.store)}Ji.store="collectionParents",Ji.keyPath=["collectionId","parent"]
var Zi=function(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}
Zi.store="clientMetadata",Zi.keyPath="clientId"
var to=i.__spreadArrays(i.__spreadArrays(i.__spreadArrays([qi.store,Gi.store,Bi.store,Wi.store,Qi.store,ji.store,Yi.store,Xi.store],[Zi.store]),[Hi.store]),[Ji.store]),eo=function(){function t(){this.la=new Vi}return t.prototype.Mo=function(t,e){var n=this
if(!this.la.has(e)){var r=e._(),i=e.h()
t.pr((function(){n.la.add(e)}))
var o={collectionId:r,parent:hi(i)}
return no(t).put(o)}return yr.resolve()},t.prototype.Qr=function(t,e){var n=[],r=IDBKeyRange.bound([e,""],[Z(e),""],!1,!0)
return no(t).ts(r).next((function(t){for(var r=0,i=t;r<i.length;r++){var o=i[r]
if(o.collectionId!==e)break
n.push(pi(o.parent))}return n}))},t}()

;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function no(t){return ho.Qn(t,Ji.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ro=function(){function t(t){this._a=t}return t.prototype.next=function(){return this._a+=2,this._a},t.fa=function(){return new t(0)},t.da=function(){return new t(-1)},t}(),io=function(){function t(t,e){this.No=t,this.serializer=e}return t.prototype.wa=function(t){var e=this
return this.ma(t).next((function(n){var r=new ro(n.highestTargetId)
return n.highestTargetId=r.next(),e.Ta(t,n).next((function(){return n.highestTargetId}))}))},t.prototype.Ea=function(t){return this.ma(t).next((function(t){return ct.J(new at(t.lastRemoteSnapshotVersion.seconds,t.lastRemoteSnapshotVersion.nanoseconds))}))},t.prototype.Ia=function(t){return this.ma(t).next((function(t){return t.highestListenSequenceNumber}))},t.prototype.Aa=function(t,e,n){var r=this
return this.ma(t).next((function(i){return i.highestListenSequenceNumber=e,n&&(i.lastRemoteSnapshotVersion=n.Z()),e>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=e),r.Ta(t,i)}))},t.prototype.Ra=function(t,e){var n=this
return this.ga(t,e).next((function(){return n.ma(t).next((function(r){return r.targetCount+=1,n.Pa(e,r),n.Ta(t,r)}))}))},t.prototype.ya=function(t,e){return this.ga(t,e)},t.prototype.Va=function(t,e){var n=this
return this.pa(t,e.targetId).next((function(){return oo(t).delete(e.targetId)})).next((function(){return n.ma(t)})).next((function(e){return b(e.targetCount>0),e.targetCount-=1,n.Ta(t,e)}))},t.prototype.po=function(t,e,n){var r=this,i=0,o=[]
return oo(t).rs((function(s,u){var a=Ii(u)
a.sequenceNumber<=e&&null===n.get(a.targetId)&&(i++,o.push(r.Va(t,a)))})).next((function(){return yr.$n(o)})).next((function(){return i}))},t.prototype.Ce=function(t,e){return oo(t).rs((function(t,n){var r=Ii(n)
e(r)}))},t.prototype.ma=function(t){return so(t).get(Yi.key).next((function(t){return b(null!==t),t}))},t.prototype.Ta=function(t,e){return so(t).put(Yi.key,e)},t.prototype.ga=function(t,e){return oo(t).put(Ei(this.serializer,e))},t.prototype.Pa=function(t,e){var n=!1
return t.targetId>e.highestTargetId&&(e.highestTargetId=t.targetId,n=!0),t.sequenceNumber>e.highestListenSequenceNumber&&(e.highestListenSequenceNumber=t.sequenceNumber,n=!0),n},t.prototype.ba=function(t){return this.ma(t).next((function(t){return t.targetCount}))},t.prototype.va=function(t,e){var n=vt(e),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]),i=null
return oo(t).rs({range:r,index:Qi.queryTargetsIndexName},(function(t,n,r){var o=Ii(n)
yt(e,o.target)&&(i=o,r.done())})).next((function(){return i}))},t.prototype.Sa=function(t,e,n){var r=this,i=[],o=uo(t)
return e.forEach((function(e){var s=hi(e.path)
i.push(o.put(new Xi(n,s))),i.push(r.No.Da(t,n,e))})),yr.$n(i)},t.prototype.Ca=function(t,e,n){var r=this,i=uo(t)
return yr.forEach(e,(function(e){var o=hi(e.path)
return yr.$n([i.delete([n,o]),r.No.Na(t,n,e)])}))},t.prototype.pa=function(t,e){var n=uo(t),r=IDBKeyRange.bound([e],[e+1],!1,!0)
return n.delete(r)},t.prototype.Fa=function(t,e){var n=IDBKeyRange.bound([e],[e+1],!1,!0),r=uo(t),i=Ut()
return r.rs({range:n,ss:!0},(function(t,e,n){var r=pi(t[1]),o=new x(r)
i=i.add(o)})).next((function(){return i}))},t.prototype.Ho=function(t,e){var n=hi(e.path),r=IDBKeyRange.bound([n],[Z(n)],!1,!0),i=0
return uo(t).rs({index:Xi.documentTargetsIndex,ss:!0,range:r},(function(t,e,n){var r=t[0]
t[1],0!==r&&(i++,n.done())})).next((function(){return i>0}))},t.prototype.Ue=function(t,e){return oo(t).get(e).next((function(t){return t?Ii(t):null}))},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oo(t){return ho.Qn(t,Qi.store)}function so(t){return ho.Qn(t,Yi.store)}function uo(t){return ho.Qn(t,Xi.store)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ao="Failed to obtain exclusive access to the persistence layer. To allow shared access, make sure to invoke `enablePersistence()` with `synchronizeTabs:true` in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",co=function(t){function e(e,n){var r=this
return(r=t.call(this)||this).jo=e,r.xa=n,r}return i.__extends(e,t),e}(ei),ho=function(){function t(e,n,r,i,o,s,u,a,c,h){if(this.allowTabSynchronization=e,this.persistenceKey=n,this.clientId=r,this.fn=o,this.window=s,this.document=u,this.$a=c,this.ka=h,this.Ma=null,this.Oa=!1,this.isPrimary=!1,this.networkEnabled=!0,this.La=null,this.inForeground=!1,this.Ba=null,this.qa=null,this.Ua=Number.NEGATIVE_INFINITY,this.Qa=function(t){return Promise.resolve()},!t.Ln())throw new l(f.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.")
this.No=new po(this,i),this.Wa=n+"main",this.serializer=new di(a),this.ja=new gr(this.Wa,10,new Mi(this.serializer)),this.Ka=new io(this.No,this.serializer),this.Dr=new eo,this.vr=function(t,e){return new Li(t,e)}(this.serializer,this.Dr),this.window&&this.window.localStorage?this.Ga=this.window.localStorage:(this.Ga=null,!1===h&&y("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}return t.Qn=function(t,e){if(t instanceof co)return gr.Qn(t.jo,e)
throw w()},t.prototype.start=function(){var t=this
return this.za().then((function(){if(!t.isPrimary&&!t.allowTabSynchronization)throw new l(f.FAILED_PRECONDITION,ao)
return t.Ha(),t.Ya(),t.Ja(),t.runTransaction("getHighestListenSequenceNumber","readonly",(function(e){return t.Ka.Ia(e)}))})).then((function(e){t.Ma=new jr(e,t.$a)})).then((function(){t.Oa=!0})).catch((function(e){return t.ja&&t.ja.close(),Promise.reject(e)}))},t.prototype.Xa=function(t){var e=this
return this.Qa=function(n){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(e){return this.Ei?[2,t(n)]:[2]}))}))},t(this.isPrimary)},t.prototype.Za=function(t){var e=this
this.ja.Kn((function(n){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:return null===n.newVersion?[4,t()]:[3,2]
case 1:e.sent(),e.label=2
case 2:return[2]}}))}))}))},t.prototype.tc=function(t){var e=this
this.networkEnabled!==t&&(this.networkEnabled=t,this.fn.ws((function(){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return this.Ei?[4,this.za()]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}}))}))})))},t.prototype.za=function(){var t=this
return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(function(e){return lo(e).put(new Zi(t.clientId,Date.now(),t.networkEnabled,t.inForeground)).next((function(){if(t.isPrimary)return t.ec(e).next((function(e){e||(t.isPrimary=!1,t.fn.Cs((function(){return t.Qa(!1)})))}))})).next((function(){return t.nc(e)})).next((function(n){return t.isPrimary&&!n?t.sc(e).next((function(){return!1})):!!n&&t.ic(e).next((function(){return!0}))}))})).catch((function(e){if(br(e))return v("IndexedDbPersistence","Failed to extend owner lease: ",e),t.isPrimary
if(!t.allowTabSynchronization)throw e
return v("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((function(e){t.isPrimary!==e&&t.fn.Cs((function(){return t.Qa(e)})),t.isPrimary=e}))},t.prototype.ec=function(t){var e=this
return fo(t).get(ji.key).next((function(t){return yr.resolve(e.rc(t))}))},t.prototype.oc=function(t){return lo(t).delete(this.clientId)},t.prototype.ac=function(){return i.__awaiter(this,void 0,void 0,(function(){var e,n,r,o,s=this
return i.__generator(this,(function(i){switch(i.label){case 0:return!this.isPrimary||this.cc(this.Ua,18e5)?[3,2]:(this.Ua=Date.now(),[4,this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(function(e){var n=t.Qn(e,Zi.store)
return n.ts().next((function(t){var e=s.uc(t,18e5),r=t.filter((function(t){return-1===e.indexOf(t)}))
return yr.forEach(r,(function(t){return n.delete(t.clientId)})).next((function(){return r}))}))})).catch((function(){return[]}))])
case 1:if(e=i.sent(),this.Ga)for(n=0,r=e;n<r.length;n++)o=r[n],this.Ga.removeItem(this.hc(o.clientId))
i.label=2
case 2:return[2]}}))}))},t.prototype.Ja=function(){var t=this
this.qa=this.fn.yn("client_metadata_refresh",4e3,(function(){return t.za().then((function(){return t.ac()})).then((function(){return t.Ja()}))}))},t.prototype.rc=function(t){return!!t&&t.ownerId===this.clientId},t.prototype.nc=function(t){var e=this
return this.ka?yr.resolve(!0):fo(t).get(ji.key).next((function(n){if(null!==n&&e.cc(n.leaseTimestampMs,5e3)&&!e.lc(n.ownerId)){if(e.rc(n)&&e.networkEnabled)return!0
if(!e.rc(n)){if(!n.allowTabSynchronization)throw new l(f.FAILED_PRECONDITION,ao)
return!1}}return!(!e.networkEnabled||!e.inForeground)||lo(t).ts().next((function(t){return void 0===e.uc(t,5e3).find((function(t){if(e.clientId!==t.clientId){var n=!e.networkEnabled&&t.networkEnabled,r=!e.inForeground&&t.inForeground,i=e.networkEnabled===t.networkEnabled
if(n||r&&i)return!0}return!1}))}))})).next((function(t){return e.isPrimary!==t&&v("IndexedDbPersistence","Client "+(t?"is":"is not")+" eligible for a primary lease."),t}))},t.prototype.Di=function(){return i.__awaiter(this,void 0,void 0,(function(){var t=this
return i.__generator(this,(function(e){switch(e.label){case 0:return this.Oa=!1,this._c(),this.qa&&(this.qa.cancel(),this.qa=null),this.fc(),this.dc(),[4,this.ja.runTransaction("shutdown","readwrite",[ji.store,Zi.store],(function(e){var n=new co(e,jr.ai)
return t.sc(n).next((function(){return t.oc(n)}))}))]
case 1:return e.sent(),this.ja.close(),this.wc(),[2]}}))}))},t.prototype.uc=function(t,e){var n=this
return t.filter((function(t){return n.cc(t.updateTimeMs,e)&&!n.lc(t.clientId)}))},t.prototype.pi=function(){var t=this
return this.runTransaction("getActiveClients","readonly",(function(e){return lo(e).ts().next((function(e){return t.uc(e,18e5).map((function(t){return t.clientId}))}))}))},Object.defineProperty(t.prototype,"Ei",{get:function(){return this.Oa},enumerable:!1,configurable:!0}),t.prototype.mc=function(t){return Ti.xo(t,this.serializer,this.Dr,this.No)},t.prototype.Tc=function(){return this.Ka},t.prototype.Ec=function(){return this.vr},t.prototype.Ic=function(){return this.Dr},t.prototype.runTransaction=function(t,e,n){var r=this
v("IndexedDbPersistence","Starting transaction:",t)
var i,o="readonly"===e?"readonly":"readwrite"
return this.ja.runTransaction(t,o,to,(function(o){return i=new co(o,r.Ma?r.Ma.next():jr.ai),"readwrite-primary"===e?r.ec(i).next((function(t){return!!t||r.nc(i)})).next((function(e){if(!e)throw y("Failed to obtain primary lease for action '"+t+"'."),r.isPrimary=!1,r.fn.Cs((function(){return r.Qa(!1)})),new l(f.FAILED_PRECONDITION,ti)
return n(i)})).next((function(t){return r.ic(i).next((function(){return t}))})):r.Ac(i).next((function(){return n(i)}))})).then((function(t){return i.br(),t}))},t.prototype.Ac=function(t){var e=this
return fo(t).get(ji.key).next((function(t){if(null!==t&&e.cc(t.leaseTimestampMs,5e3)&&!e.lc(t.ownerId)&&!e.rc(t)&&!(e.ka||e.allowTabSynchronization&&t.allowTabSynchronization))throw new l(f.FAILED_PRECONDITION,ao)}))},t.prototype.ic=function(t){var e=new ji(this.clientId,this.allowTabSynchronization,Date.now())
return fo(t).put(ji.key,e)},t.Ln=function(){return gr.Ln()},t.prototype.sc=function(t){var e=this,n=fo(t)
return n.get(ji.key).next((function(t){return e.rc(t)?(v("IndexedDbPersistence","Releasing primary lease."),n.delete(ji.key)):yr.resolve()}))},t.prototype.cc=function(t,e){var n=Date.now()
return!(t<n-e||t>n&&(y("Detected an update time that is in the future: "+t+" > "+n),1))},t.prototype.Ha=function(){var t=this
null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Ba=function(){t.fn.ws((function(){return t.inForeground="visible"===t.document.visibilityState,t.za()}))},this.document.addEventListener("visibilitychange",this.Ba),this.inForeground="visible"===this.document.visibilityState)},t.prototype.fc=function(){this.Ba&&(this.document.removeEventListener("visibilitychange",this.Ba),this.Ba=null)},t.prototype.Ya=function(){var t,e=this
"function"==typeof(null===(t=this.window)||void 0===t?void 0:t.addEventListener)&&(this.La=function(){e._c(),e.fn.ws((function(){return e.Di()}))},this.window.addEventListener("unload",this.La))},t.prototype.dc=function(){this.La&&(this.window.removeEventListener("unload",this.La),this.La=null)},t.prototype.lc=function(t){var e
try{var n=null!==(null===(e=this.Ga)||void 0===e?void 0:e.getItem(this.hc(t)))
return v("IndexedDbPersistence","Client '"+t+"' "+(n?"is":"is not")+" zombied in LocalStorage"),n}catch(t){return y("IndexedDbPersistence","Failed to get zombied client id.",t),!1}},t.prototype._c=function(){if(this.Ga)try{this.Ga.setItem(this.hc(this.clientId),String(Date.now()))}catch(t){y("Failed to set zombie client id.",t)}},t.prototype.wc=function(){if(this.Ga)try{this.Ga.removeItem(this.hc(this.clientId))}catch(t){}},t.prototype.hc=function(t){return"firestore_zombie_"+this.persistenceKey+"_"+t},t}()
function fo(t){return ho.Qn(t,ji.store)}function lo(t){return ho.Qn(t,Zi.store)}var po=function(){function t(t,e){this.db=t,this.wo=new ci(this,e)}return t.prototype.Po=function(t){var e=this.Rc(t)
return this.db.Tc().ba(t).next((function(t){return e.next((function(e){return t+e}))}))},t.prototype.Rc=function(t){var e=0
return this.Vo(t,(function(t){e++})).next((function(){return e}))},t.prototype.Ce=function(t,e){return this.db.Tc().Ce(t,e)},t.prototype.Vo=function(t,e){return this.gc(t,(function(t,n){return e(n)}))},t.prototype.Da=function(t,e,n){return vo(t,n)},t.prototype.Na=function(t,e,n){return vo(t,n)},t.prototype.po=function(t,e,n){return this.db.Tc().po(t,e,n)},t.prototype.Go=function(t,e){return vo(t,e)},t.prototype.Pc=function(t,e){return function(t,e){var n=!1
return xi(t).os((function(r){return Ai(t,r,e).next((function(t){return t&&(n=!0),yr.resolve(!t)}))})).next((function(){return n}))}(t,e)},t.prototype.bo=function(t,e){var n=this,r=this.db.Ec().ra(),i=[],o=0
return this.gc(t,(function(s,u){if(u<=e){var a=n.Pc(t,s).next((function(e){if(!e)return o++,r.Rr(t,s).next((function(){return r.Ar(s),uo(t).delete([0,hi(s.path)])}))}))
i.push(a)}})).next((function(){return yr.$n(i)})).next((function(){return r.apply(t)})).next((function(){return o}))},t.prototype.removeTarget=function(t,e){var n=e.st(t.xa)
return this.db.Tc().ya(t,n)},t.prototype.yc=function(t,e){return vo(t,e)},t.prototype.gc=function(t,e){var n,r=uo(t),i=jr.ai
return r.rs({index:Xi.documentTargetsIndex},(function(t,r){var o=t[0],s=(t[1],r.path),u=r.sequenceNumber
0===o?(i!==jr.ai&&e(new x(pi(n)),i),i=u,n=s):i=jr.ai})).next((function(){i!==jr.ai&&e(new x(pi(n)),i)}))},t.prototype.So=function(t){return this.db.Ec().aa(t)},t}()
function vo(t,e){return uo(t).put(function(t,e){return new Xi(0,hi(t.path),e)}(e,t.xa))}function yo(t,e){var n=t.projectId
return t.j||(n+="."+t.database),"firestore/"+e+"/"+n+"/"}var go=function(){function t(t,e,n){this.persistence=t,this.Vc=e,this.bc=new Tt(J),this.vc=new ut((function(t){return vt(t)}),yt),this.Sc=ct.min(),this.Sr=t.mc(n),this.Dc=t.Ec(),this.Ka=t.Tc(),this.Cc=new ni(this.Dc,this.Sr,this.persistence.Ic()),this.Vc.Nc(this.Cc)}return t.prototype.Io=function(t){var e=this
return this.persistence.runTransaction("Collect garbage","readwrite-primary",(function(n){return t.vo(n,e.bc)}))},t}()
function mo(t,e){var n=_(t)
return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(function(t){var r=e.batch.keys(),i=n.Dc.ra({oa:!0})
return function(t,e,n,r){var i=n.batch,o=i.keys(),s=yr.resolve()
return o.forEach((function(t){s=s.next((function(){return r.Rr(e,t)})).next((function(e){var o=e,s=n.dr.get(t)
b(null!==s),(!o||o.version.L(s)<0)&&(o=i.cr(t,o,n))&&r.Er(o,n._r)}))})),s.next((function(){return t.Sr.Wo(e,i)}))}(n,t,e,i).next((function(){return i.apply(t)})).next((function(){return n.Sr.zo(t)})).next((function(){return n.Cc.kr(t,r)}))}))}function wo(t){var e=_(t)
return e.persistence.runTransaction("Get last remote snapshot version","readonly",(function(t){return e.Ka.Ea(t)}))}function bo(t,e){var n=_(t),r=e.nt,i=n.bc
return n.persistence.runTransaction("Apply remote event","readwrite-primary",(function(t){var o=n.Dc.ra({oa:!0})
i=n.bc
var s=[]
e.zt.forEach((function(e,o){var u=i.get(o)
if(u){s.push(n.Ka.Ca(t,e.se,o).next((function(){return n.Ka.Sa(t,e.ee,o)})))
var a=e.resumeToken
if(a.O()>0){var c=u.it(a,r).st(t.xa)
i=i.ot(o,c),function(t,e,n){return b(e.resumeToken.O()>0),0===t.resumeToken.O()||e.nt.X()-t.nt.X()>=3e8||n.ee.size+n.ne.size+n.se.size>0}(u,c,e)&&s.push(n.Ka.ya(t,c))}}}))
var u=Lt(),a=Ut()
if(e.Yt.forEach((function(t,e){a=a.add(t)})),s.push(o.getEntries(t,a).next((function(i){e.Yt.forEach((function(a,c){var h=i.get(a)
c instanceof Rn&&c.version.isEqual(ct.min())?(o.Ar(a,r),u=u.ot(a,c)):null==h||c.version.L(h.version)>0||0===c.version.L(h.version)&&h.hasPendingWrites?(o.Er(c,r),u=u.ot(a,c)):v("LocalStore","Ignoring outdated watch update for ",a,". Current version:",h.version," Watch version:",c.version),e.Jt.has(a)&&s.push(n.persistence.No.yc(t,a))}))}))),!r.isEqual(ct.min())){var c=n.Ka.Ea(t).next((function(e){return n.Ka.Aa(t,t.xa,r)}))
s.push(c)}return yr.$n(s).next((function(){return o.apply(t)})).next((function(){return n.Cc.Mr(t,u)}))})).then((function(t){return n.bc=i,t}))}function _o(t,e){var n=_(t)
return n.persistence.runTransaction("Get next mutation batch","readonly",(function(t){return void 0===e&&(e=-1),n.Sr.Bo(t,e)}))}function Io(t,e){var n=_(t)
return n.persistence.runTransaction("Allocate target","readwrite",(function(t){var r
return n.Ka.va(t,e).next((function(i){return i?(r=i,yr.resolve(r)):n.Ka.wa(t).next((function(i){return r=new bt(e,i,0,t.xa),n.Ka.Ra(t,r).next((function(){return r}))}))}))})).then((function(t){var r=n.bc.get(t.targetId)
return(null===r||t.nt.L(r.nt)>0)&&(n.bc=n.bc.ot(t.targetId,t),n.vc.set(e,t.targetId)),t}))}function Eo(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s,u
return i.__generator(this,(function(i){switch(i.label){case 0:r=_(t),o=r.bc.get(e),s=n?"readwrite":"readwrite-primary",i.label=1
case 1:return i.trys.push([1,4,,5]),n?[3,3]:[4,r.persistence.runTransaction("Release target",s,(function(t){return r.persistence.No.removeTarget(t,o)}))]
case 2:i.sent(),i.label=3
case 3:return[3,5]
case 4:if(!br(u=i.sent()))throw u
return v("LocalStore","Failed to update sequence numbers for target "+e+": "+u),[3,5]
case 5:return r.bc=r.bc.remove(e),r.vc.delete(o.target),[2]}}))}))}function To(t,e,n){var r=_(t),i=ct.min(),o=Ut()
return r.persistence.runTransaction("Execute query","readonly",(function(t){return function(t,e,n){var r=_(t),i=r.vc.get(n)
return void 0!==i?yr.resolve(r.bc.get(i)):r.Ka.va(e,n)}(r,t,Bn(e)).next((function(e){if(e)return i=e.lastLimboFreeSnapshotVersion,r.Ka.Fa(t,e.targetId).next((function(t){o=t}))})).next((function(){return r.Vc.Lr(t,e,n?i:ct.min(),n?o:Ut())})).next((function(t){return{documents:t,Fc:o}}))}))}function Ao(t,e){var n=_(t),r=_(n.Ka),i=n.bc.get(e)
return i?Promise.resolve(i.target):n.persistence.runTransaction("Get target data","readonly",(function(t){return r.Ue(t,e).next((function(t){return t?t.target:null}))}))}function No(t){var e=_(t)
return e.persistence.runTransaction("Get new document changes","readonly",(function(t){return function(t,e,n){var r=_(t),i=Lt(),o=gi(n),s=Oi(e),u=IDBKeyRange.lowerBound(o,!0)
return s.rs({index:Wi.readTimeIndex,range:u},(function(t,e){var n=vi(r.serializer,e)
i=i.ot(n.key,n),o=e.readTime})).next((function(){return{xc:i,readTime:mi(o)}}))}(e.Dc,t,e.Sc)})).then((function(t){var n=t.xc,r=t.readTime
return e.Sc=r,n}))}function So(t){return i.__awaiter(this,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){return[2,(e=_(t)).persistence.runTransaction("Synchronize last document change read time","readonly",(function(t){return function(t){var e=Oi(t),n=ct.min()
return e.rs({index:Wi.readTimeIndex,reverse:!0},(function(t,e,r){e.readTime&&(n=mi(e.readTime)),r.done()})).next((function(){return n}))}(t)})).then((function(t){e.Sc=t}))]}))}))}function Do(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){if(t.code!==f.FAILED_PRECONDITION||t.message!==ti)throw t
return v("LocalStore","Unexpectedly lost primary lease"),[2]}))}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var xo=function(){function t(){this.$c=new St(Lo.kc),this.Mc=new St(Lo.Oc)}return t.prototype.m=function(){return this.$c.m()},t.prototype.Da=function(t,e){var n=new Lo(t,e)
this.$c=this.$c.add(n),this.Mc=this.Mc.add(n)},t.prototype.Lc=function(t,e){var n=this
t.forEach((function(t){return n.Da(t,e)}))},t.prototype.Na=function(t,e){this.Bc(new Lo(t,e))},t.prototype.qc=function(t,e){var n=this
t.forEach((function(t){return n.Na(t,e)}))},t.prototype.Uc=function(t){var e=this,n=new x(new N([])),r=new Lo(n,t),i=new Lo(n,t+1),o=[]
return this.Mc.Ft([r,i],(function(t){e.Bc(t),o.push(t.key)})),o},t.prototype.Qc=function(){var t=this
this.$c.forEach((function(e){return t.Bc(e)}))},t.prototype.Bc=function(t){this.$c=this.$c.delete(t),this.Mc=this.Mc.delete(t)},t.prototype.Wc=function(t){var e=new x(new N([])),n=new Lo(e,t),r=new Lo(e,t+1),i=Ut()
return this.Mc.Ft([n,r],(function(t){i=i.add(t.key)})),i},t.prototype.Ho=function(t){var e=new Lo(t,0),n=this.$c.$t(e)
return null!==n&&t.isEqual(n.key)},t}(),Lo=function(){function t(t,e){this.key=t,this.jc=e}return t.kc=function(t,e){return x.i(t.key,e.key)||J(t.jc,e.jc)},t.Oc=function(t,e){return J(t.jc,e.jc)||x.i(t.key,e.key)},t}(),ko=function(t,e){this.user=e,this.type="OAuth",this.Kc={},this.Kc.Authorization="Bearer "+t},Ro=function(){function t(){this.Gc=null}return t.prototype.getToken=function(){return Promise.resolve(null)},t.prototype.zc=function(){},t.prototype.Hc=function(t){this.Gc=t,t(Fr.UNAUTHENTICATED)},t.prototype.Yc=function(){this.Gc=null},t}(),Oo=function(){function t(t){var e=this
this.Jc=null,this.currentUser=Fr.UNAUTHENTICATED,this.Xc=!1,this.Zc=0,this.Gc=null,this.forceRefresh=!1,this.Jc=function(){e.Zc++,e.currentUser=e.tu(),e.Xc=!0,e.Gc&&e.Gc(e.currentUser)},this.Zc=0,this.auth=t.getImmediate({optional:!0}),this.auth?this.auth.addAuthTokenListener(this.Jc):(this.Jc(null),t.get().then((function(t){e.auth=t,e.Jc&&e.auth.addAuthTokenListener(e.Jc)}),(function(){})))}return t.prototype.getToken=function(){var t=this,e=this.Zc,n=this.forceRefresh
return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then((function(n){return t.Zc!==e?(v("FirebaseCredentialsProvider","getToken aborted due to token change."),t.getToken()):n?(b("string"==typeof n.accessToken),new ko(n.accessToken,t.currentUser)):null})):Promise.resolve(null)},t.prototype.zc=function(){this.forceRefresh=!0},t.prototype.Hc=function(t){this.Gc=t,this.Xc&&t(this.currentUser)},t.prototype.Yc=function(){this.auth&&this.auth.removeAuthTokenListener(this.Jc),this.Jc=null,this.Gc=null},t.prototype.tu=function(){var t=this.auth&&this.auth.getUid()
return b(null===t||"string"==typeof t),new Fr(t)},t}(),Po=function(){function t(t,e){this.eu=t,this.nu=e,this.type="FirstParty",this.user=Fr.ni}return Object.defineProperty(t.prototype,"Kc",{get:function(){var t={"X-Goog-AuthUser":this.nu},e=this.eu.auth.getAuthHeaderValueForFirstParty([])
return e&&(t.Authorization=e),t},enumerable:!1,configurable:!0}),t}(),Co=function(){function t(t,e){this.eu=t,this.nu=e}return t.prototype.getToken=function(){return Promise.resolve(new Po(this.eu,this.nu))},t.prototype.Hc=function(t){t(Fr.ni)},t.prototype.Yc=function(){},t.prototype.zc=function(){},t}(),Uo=function(){function t(t,e,n,r,i,o){this.fn=t,this.su=n,this.iu=r,this.ru=i,this.listener=o,this.state=0,this.ou=0,this.au=null,this.stream=null,this.ys=new vr(t,e)}return t.prototype.cu=function(){return 1===this.state||2===this.state||4===this.state},t.prototype.uu=function(){return 2===this.state},t.prototype.start=function(){3!==this.state?this.auth():this.hu()},t.prototype.stop=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return this.cu()?[4,this.close(0)]:[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}}))}))},t.prototype.lu=function(){this.state=0,this.ys.reset()},t.prototype._u=function(){var t=this
this.uu()&&null===this.au&&(this.au=this.fn.yn(this.su,6e4,(function(){return t.fu()})))},t.prototype.du=function(t){this.wu(),this.stream.send(t)},t.prototype.fu=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){return this.uu()?[2,this.close(0)]:[2]}))}))},t.prototype.wu=function(){this.au&&(this.au.cancel(),this.au=null)},t.prototype.close=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(n){switch(n.label){case 0:return this.wu(),this.ys.cancel(),this.ou++,3!==t?this.ys.reset():e&&e.code===f.RESOURCE_EXHAUSTED?(y(e.toString()),y("Using maximum backoff delay to prevent overloading the backend."),this.ys.Rn()):e&&e.code===f.UNAUTHENTICATED&&this.ru.zc(),null!==this.stream&&(this.mu(),this.stream.close(),this.stream=null),this.state=t,[4,this.listener.Tu(e)]
case 1:return n.sent(),[2]}}))}))},t.prototype.mu=function(){},t.prototype.auth=function(){var t=this
this.state=1
var e=this.Eu(this.ou),n=this.ou
this.ru.getToken().then((function(e){t.ou===n&&t.Iu(e)}),(function(n){e((function(){var e=new l(f.UNKNOWN,"Fetching auth token failed: "+n.message)
return t.Au(e)}))}))},t.prototype.Iu=function(t){var e=this,n=this.Eu(this.ou)
this.stream=this.Ru(t),this.stream.gu((function(){n((function(){return e.state=2,e.listener.gu()}))})),this.stream.Tu((function(t){n((function(){return e.Au(t)}))})),this.stream.onMessage((function(t){n((function(){return e.onMessage(t)}))}))},t.prototype.hu=function(){var t=this
this.state=4,this.ys.gn((function(){return i.__awaiter(t,void 0,void 0,(function(){return i.__generator(this,(function(t){return this.state=0,this.start(),[2]}))}))}))},t.prototype.Au=function(t){return v("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)},t.prototype.Eu=function(t){var e=this
return function(n){e.fn.ws((function(){return e.ou===t?n():(v("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())}))}},t}(),Vo=function(t){function e(e,n,r,i,o){var s=this
return(s=t.call(this,e,"listen_stream_connection_backoff","listen_stream_idle",n,r,o)||this).serializer=i,s}return i.__extends(e,t),e.prototype.Ru=function(t){return this.iu.Pu("Listen",t)},e.prototype.onMessage=function(t){this.ys.reset()
var e=function(t,e){var n
if("targetChange"in e){e.targetChange
var r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:w()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],o=function(t,e){return t.Qe?(b(void 0===e||"string"==typeof e),tt.fromBase64String(e||"")):(b(void 0===e||e instanceof Uint8Array),tt.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),s=e.targetChange.cause,u=s&&function(t){var e=void 0===t.code?f.UNKNOWN:Et(t.code)
return new l(e,t.message||"")}(s)
n=new Wt(r,i,o,u||null)}else if("documentChange"in e){e.documentChange
var a=e.documentChange
a.document,a.document.name,a.document.updateTime
var c=De(t,a.document.name),h=Te(a.document.updateTime),p=new Sn({mapValue:{fields:a.document.fields}}),d=new kn(c,h,p,{}),v=a.targetIds||[],y=a.removedTargetIds||[]
n=new zt(v,y,d.key,d)}else if("documentDelete"in e){e.documentDelete
var g=e.documentDelete
g.document
var m=De(t,g.document),_=g.readTime?Te(g.readTime):ct.min(),I=new Rn(m,_),E=g.removedTargetIds||[]
n=new zt([],E,I.key,I)}else if("documentRemove"in e){e.documentRemove
var T=e.documentRemove
T.document
var A=De(t,T.document),N=T.removedTargetIds||[]
n=new zt([],N,A,null)}else{if(!("filter"in e))return w()
e.filter
var S=e.filter
S.targetId
var D=S.count||0,x=new _t(D),L=S.targetId
n=new Kt(L,x)}return n}(this.serializer,t),n=function(t){if(!("targetChange"in t))return ct.min()
var e=t.targetChange
return e.targetIds&&e.targetIds.length?ct.min():e.readTime?Te(e.readTime):ct.min()}(t)
return this.listener.yu(e,n)},e.prototype.Vu=function(t){var e={}
e.database=ke(this.serializer),e.addTarget=function(t,e){var n,r=e.target
return(n=gt(r)?{documents:Ue(t,r)}:{query:Ve(t,r)}).targetId=e.targetId,e.resumeToken.O()>0&&(n.resumeToken=Ie(t,e.resumeToken)),n}(this.serializer,t)
var n=function(t,e){var n=function(t,e){switch(e){case 0:return null
case 1:return"existence-filter-mismatch"
case 2:return"limbo-document"
default:return w()}}(0,e.et)
return null==n?null:{"goog-listen-tags":n}}(this.serializer,t)
n&&(e.labels=n),this.du(e)},e.prototype.pu=function(t){var e={}
e.database=ke(this.serializer),e.removeTarget=t,this.du(e)},e}(Uo),Mo=function(t){function e(e,n,r,i,o){var s=this
return(s=t.call(this,e,"write_stream_connection_backoff","write_stream_idle",n,r,o)||this).serializer=i,s.bu=!1,s}return i.__extends(e,t),Object.defineProperty(e.prototype,"vu",{get:function(){return this.bu},enumerable:!1,configurable:!0}),e.prototype.start=function(){this.bu=!1,this.lastStreamToken=void 0,t.prototype.start.call(this)},e.prototype.mu=function(){this.bu&&this.Su([])},e.prototype.Ru=function(t){return this.iu.Pu("Write",t)},e.prototype.onMessage=function(t){if(b(!!t.streamToken),this.lastStreamToken=t.streamToken,this.bu){this.ys.reset()
var e=function(t,e){return t&&t.length>0?(b(void 0!==e),t.map((function(t){return function(t,e){var n=t.updateTime?Te(t.updateTime):Te(e)
n.isEqual(ct.min())&&(n=Te(e))
var r=null
return t.transformResults&&t.transformResults.length>0&&(r=t.transformResults),new hn(n,r)}(t,e)}))):[]}(t.writeResults,t.commitTime),n=Te(t.commitTime)
return this.listener.Du(n,e)}return b(!t.writeResults||0===t.writeResults.length),this.bu=!0,this.listener.Cu()},e.prototype.Nu=function(){var t={}
t.database=ke(this.serializer),this.du(t)},e.prototype.Su=function(t){var e=this,n={streamToken:this.lastStreamToken,writes:t.map((function(t){return Pe(e.serializer,t)}))}
this.du(n)},e}(Uo),Fo=function(t){function e(e,n,r){var i=this
return(i=t.call(this)||this).credentials=e,i.iu=n,i.serializer=r,i.Fu=!1,i}return i.__extends(e,t),e.prototype.xu=function(){if(this.Fu)throw new l(f.FAILED_PRECONDITION,"The client has already been terminated.")},e.prototype.$u=function(t,e,n){var r=this
return this.xu(),this.credentials.getToken().then((function(i){return r.iu.$u(t,e,n,i)})).catch((function(t){throw t.code===f.UNAUTHENTICATED&&r.credentials.zc(),t}))},e.prototype.ku=function(t,e,n){var r=this
return this.xu(),this.credentials.getToken().then((function(i){return r.iu.ku(t,e,n,i)})).catch((function(t){throw t.code===f.UNAUTHENTICATED&&r.credentials.zc(),t}))},e.prototype.terminate=function(){this.Fu=!1},e}((function(){})),jo=function(){function t(t,e){this.cs=t,this.di=e,this.state="Unknown",this.Mu=0,this.Ou=null,this.Lu=!0}return t.prototype.Bu=function(){var t=this
0===this.Mu&&(this.qu("Unknown"),this.Ou=this.cs.yn("online_state_timeout",1e4,(function(){return t.Ou=null,t.Uu("Backend didn't respond within 10 seconds."),t.qu("Offline"),Promise.resolve()})))},t.prototype.Qu=function(t){"Online"===this.state?this.qu("Unknown"):(this.Mu++,this.Mu>=1&&(this.Wu(),this.Uu("Connection failed 1 times. Most recent error: "+t.toString()),this.qu("Offline")))},t.prototype.set=function(t){this.Wu(),this.Mu=0,"Online"===t&&(this.Lu=!1),this.qu(t)},t.prototype.qu=function(t){t!==this.state&&(this.state=t,this.di(t))},t.prototype.Uu=function(t){var e="Could not reach Cloud Firestore backend. "+t+"\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend."
this.Lu?(y(e),this.Lu=!1):v("OnlineStateTracker",e)},t.prototype.Wu=function(){null!==this.Ou&&(this.Ou.cancel(),this.Ou=null)},t}(),qo=function(t,e,n,r,o){var s=this
this.ju=t,this.Ku=e,this.cs=n,this.Gu={},this.zu=[],this.Hu=new Map,this.Yu=new Set,this.Ju=[],this.Xu=o,this.Xu.Zu((function(t){n.ws((function(){return i.__awaiter(s,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return Jo(this)?(v("RemoteStore","Restarting streams for network reachability change."),[4,function(t){return i.__awaiter(this,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){switch(n.label){case 0:return(e=_(t)).Yu.add(4),[4,Bo(e)]
case 1:return n.sent(),e.th.set("Unknown"),e.Yu.delete(4),[4,Go(e)]
case 2:return n.sent(),[2]}}))}))}(this)]):[3,2]
case 1:t.sent(),t.label=2
case 2:return[2]}}))}))}))})),this.th=new jo(n,r)}
function Go(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n
return i.__generator(this,(function(r){switch(r.label){case 0:if(!Jo(t))return[3,4]
e=0,n=t.Ju,r.label=1
case 1:return e<n.length?[4,(0,n[e])(!0)]:[3,4]
case 2:r.sent(),r.label=3
case 3:return e++,[3,1]
case 4:return[2]}}))}))}function Bo(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n
return i.__generator(this,(function(r){switch(r.label){case 0:e=0,n=t.Ju,r.label=1
case 1:return e<n.length?[4,(0,n[e])(!1)]:[3,4]
case 2:r.sent(),r.label=3
case 3:return e++,[3,1]
case 4:return[2]}}))}))}function zo(t){return i.__awaiter(this,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){switch(n.label){case 0:return e=_(t),v("RemoteStore","RemoteStore shutting down."),e.Yu.add(5),[4,Bo(e)]
case 1:return n.sent(),e.Xu.Di(),e.th.set("Unknown"),[2]}}))}))}function Ko(t,e){var n=_(t)
n.Hu.has(e.targetId)||(n.Hu.set(e.targetId,e),Yo(n)?Xo(n):ls(n).uu()&&Ho(n,e))}function Wo(t,e){var n=_(t),r=ls(n)
n.Hu.delete(e),r.uu()&&Qo(n,e),0===n.Hu.size&&(r.uu()?r._u():Jo(n)&&n.th.set("Unknown"))}function Ho(t,e){t.eh.Ie(e.targetId),ls(t).Vu(e)}function Qo(t,e){t.eh.Ie(e),ls(t).pu(e)}function Xo(t){t.eh=new Qt({qe:function(e){return t.Gu.qe(e)},Ue:function(e){return t.Hu.get(e)||null}}),ls(t).start(),t.th.Bu()}function Yo(t){return Jo(t)&&!ls(t).cu()&&t.Hu.size>0}function Jo(t){return 0===_(t).Yu.size}function $o(t){t.eh=void 0}function Zo(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return t.Hu.forEach((function(e,n){Ho(t,e)})),[2]}))}))}function ts(t,e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(n){return $o(t),Yo(t)?(t.th.Qu(e),Xo(t)):t.th.set("Unknown"),[2]}))}))}function es(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s
return i.__generator(this,(function(u){switch(u.label){case 0:if(t.th.set("Online"),!(e instanceof Wt&&2===e.state&&e.cause))return[3,6]
u.label=1
case 1:return u.trys.push([1,3,,5]),[4,function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s
return i.__generator(this,(function(i){switch(i.label){case 0:n=e.cause,r=0,o=e.targetIds,i.label=1
case 1:return r<o.length?(s=o[r],t.Hu.has(s)?[4,t.Gu.nh(s,n)]:[3,3]):[3,5]
case 2:i.sent(),t.Hu.delete(s),t.eh.removeTarget(s),i.label=3
case 3:i.label=4
case 4:return r++,[3,1]
case 5:return[2]}}))}))}(t,e)]
case 2:return u.sent(),[3,5]
case 3:return r=u.sent(),v("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),[4,ns(t,r)]
case 4:return u.sent(),[3,5]
case 5:return[3,13]
case 6:if(e instanceof zt?t.eh.be(e):e instanceof Kt?t.eh.$e(e):t.eh.De(e),n.isEqual(ct.min()))return[3,13]
u.label=7
case 7:return u.trys.push([7,11,,13]),[4,wo(t.ju)]
case 8:return o=u.sent(),n.L(o)>=0?[4,function(t,e){var n=t.eh.Oe(e)
return n.zt.forEach((function(n,r){if(n.resumeToken.O()>0){var i=t.Hu.get(r)
i&&t.Hu.set(r,i.it(n.resumeToken,e))}})),n.Ht.forEach((function(e){var n=t.Hu.get(e)
if(n){t.Hu.set(e,n.it(tt.B,n.nt)),Qo(t,e)
var r=new bt(n.target,e,1,n.sequenceNumber)
Ho(t,r)}})),t.Gu.sh(n)}(t,n)]:[3,10]
case 9:u.sent(),u.label=10
case 10:return[3,13]
case 11:return v("RemoteStore","Failed to raise snapshot:",s=u.sent()),[4,ns(t,s)]
case 12:return u.sent(),[3,13]
case 13:return[2]}}))}))}function ns(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r=this
return i.__generator(this,(function(o){switch(o.label){case 0:if(!br(e))throw e
return t.Yu.add(1),[4,Bo(t)]
case 1:return o.sent(),t.th.set("Offline"),n||(n=function(){return wo(t.ju)}),t.cs.Cs((function(){return i.__awaiter(r,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:return v("RemoteStore","Retrying IndexedDB access"),[4,n()]
case 1:return e.sent(),t.Yu.delete(1),[4,Go(t)]
case 2:return e.sent(),[2]}}))}))})),[2]}}))}))}function rs(t,e){return e().catch((function(n){return ns(t,n,e)}))}function is(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n,r,o,s
return i.__generator(this,(function(i){switch(i.label){case 0:e=_(t),n=ps(e),r=e.zu.length>0?e.zu[e.zu.length-1].batchId:-1,i.label=1
case 1:if(!function(t){return Jo(t)&&t.zu.length<10}(e))return[3,7]
i.label=2
case 2:return i.trys.push([2,4,,6]),[4,_o(e.ju,r)]
case 3:return null===(o=i.sent())?(0===e.zu.length&&n._u(),[3,7]):(r=o.batchId,function(t,e){t.zu.push(e)
var n=ps(t)
n.uu()&&n.vu&&n.Su(e.mutations)}(e,o),[3,6])
case 4:return s=i.sent(),[4,ns(e,s)]
case 5:return i.sent(),[3,6]
case 6:return[3,1]
case 7:return os(e)&&ss(e),[2]}}))}))}function os(t){return Jo(t)&&!ps(t).cu()&&t.zu.length>0}function ss(t){ps(t).start()}function us(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){return ps(t).Nu(),[2]}))}))}function as(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n,r,o
return i.__generator(this,(function(i){for(e=ps(t),n=0,r=t.zu;n<r.length;n++)o=r[n],e.Su(o.mutations)
return[2]}))}))}function cs(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o
return i.__generator(this,(function(i){switch(i.label){case 0:return r=t.zu.shift(),o=$r.from(r,e,n),[4,rs(t,(function(){return t.Gu.ih(o)}))]
case 1:return i.sent(),[4,is(t)]
case 2:return i.sent(),[2]}}))}))}function hs(t,e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(n){switch(n.label){case 0:return e&&ps(t).vu?[4,function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r
return i.__generator(this,(function(i){switch(i.label){case 0:return It(r=e.code)&&r!==f.ABORTED?(n=t.zu.shift(),ps(t).lu(),[4,rs(t,(function(){return t.Gu.rh(n.batchId,e)}))]):[3,3]
case 1:return i.sent(),[4,is(t)]
case 2:i.sent(),i.label=3
case 3:return[2]}}))}))}(t,e)]:[3,2]
case 1:n.sent(),n.label=2
case 2:return os(t)&&ss(t),[2]}}))}))}function fs(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n
return i.__generator(this,(function(r){switch(r.label){case 0:return n=_(t),e?(n.Yu.delete(2),[4,Go(n)]):[3,2]
case 1:return r.sent(),[3,5]
case 2:return e?[3,4]:(n.Yu.add(2),[4,Bo(n)])
case 3:r.sent(),n.th.set("Unknown"),r.label=4
case 4:r.label=5
case 5:return[2]}}))}))}function ls(t){var e=this
return t.oh||(t.oh=function(t,e,n){var r=_(t)
return r.xu(),new Vo(e,r.iu,r.credentials,r.serializer,n)}(t.Ku,t.cs,{gu:Zo.bind(null,t),Tu:ts.bind(null,t),yu:es.bind(null,t)}),t.Ju.push((function(n){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:return n?(t.oh.lu(),Yo(t)?Xo(t):t.th.set("Unknown"),[3,3]):[3,1]
case 1:return[4,t.oh.stop()]
case 2:e.sent(),$o(t),e.label=3
case 3:return[2]}}))}))}))),t.oh}function ps(t){var e=this
return t.ah||(t.ah=function(t,e,n){var r=_(t)
return r.xu(),new Mo(e,r.iu,r.credentials,r.serializer,n)}(t.Ku,t.cs,{gu:us.bind(null,t),Tu:hs.bind(null,t),Cu:as.bind(null,t),Du:cs.bind(null,t)}),t.Ju.push((function(n){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:return n?(t.ah.lu(),[4,is(t)]):[3,2]
case 1:return e.sent(),[3,4]
case 2:return[4,t.ah.stop()]
case 3:e.sent(),t.zu.length>0&&(v("RemoteStore","Stopping write stream with "+t.zu.length+" pending writes"),t.zu=[]),e.label=4
case 4:return[2]}}))}))}))),t.ah
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}var ds=function(t){this.key=t},vs=function(t){this.key=t},ys=function(){function t(t,e){this.query=t,this.uh=e,this.hh=null,this.te=!1,this.lh=Ut(),this.Wt=Ut(),this._h=Jn(t),this.fh=new Ft(this._h)}return Object.defineProperty(t.prototype,"dh",{get:function(){return this.uh},enumerable:!1,configurable:!0}),t.prototype.wh=function(t,e){var n=this,r=e?e.mh:new jt,i=e?e.fh:this.fh,o=e?e.Wt:this.Wt,s=i,u=!1,a=Vn(this.query)&&i.size===this.query.limit?i.last():null,c=Mn(this.query)&&i.size===this.query.limit?i.first():null
if(t.ht((function(t,e){var h=i.get(t),f=e instanceof kn?e:null
f&&(f=Yn(n.query,f)?f:null)
var l=!!h&&n.Wt.has(h.key),p=!!f&&(f.Je||n.Wt.has(f.key)&&f.hasCommittedMutations),d=!1
h&&f?h.data().isEqual(f.data())?l!==p&&(r.track({type:3,doc:f}),d=!0):n.Th(h,f)||(r.track({type:2,doc:f}),d=!0,(a&&n._h(f,a)>0||c&&n._h(f,c)<0)&&(u=!0)):!h&&f?(r.track({type:0,doc:f}),d=!0):h&&!f&&(r.track({type:1,doc:h}),d=!0,(a||c)&&(u=!0)),d&&(f?(s=s.add(f),o=p?o.add(t):o.delete(t)):(s=s.delete(t),o=o.delete(t)))})),Vn(this.query)||Mn(this.query))for(;s.size>this.query.limit;){var h=Vn(this.query)?s.last():s.first()
s=s.delete(h.key),o=o.delete(h.key),r.track({type:1,doc:h})}return{fh:s,mh:r,Eh:u,Wt:o}},t.prototype.Th=function(t,e){return t.Je&&e.hasCommittedMutations&&!e.Je},t.prototype.yr=function(t,e,n){var r=this,i=this.fh
this.fh=t.fh,this.Wt=t.Wt
var o=t.mh.Ut()
o.sort((function(t,e){return function(t,e){var n=function(t){switch(t){case 0:return 1
case 2:case 3:return 2
case 1:return 0
default:return w()}}
return n(t)-n(e)}(t.type,e.type)||r._h(t.doc,e.doc)})),this.Ih(n)
var s=e?this.Ah():[],u=0===this.lh.size&&this.te?1:0,a=u!==this.hh
return this.hh=u,0!==o.length||a?{snapshot:new qt(this.query,t.fh,i,o,t.Wt,0===u,a,!1),Rh:s}:{Rh:s}},t.prototype.Qs=function(t){return this.te&&"Offline"===t?(this.te=!1,this.yr({fh:this.fh,mh:new jt,Wt:this.Wt,Eh:!1},!1)):{Rh:[]}},t.prototype.gh=function(t){return!this.uh.has(t)&&!!this.fh.has(t)&&!this.fh.get(t).Je},t.prototype.Ih=function(t){var e=this
t&&(t.ee.forEach((function(t){return e.uh=e.uh.add(t)})),t.ne.forEach((function(t){})),t.se.forEach((function(t){return e.uh=e.uh.delete(t)})),this.te=t.te)},t.prototype.Ah=function(){var t=this
if(!this.te)return[]
var e=this.lh
this.lh=Ut(),this.fh.forEach((function(e){t.gh(e.key)&&(t.lh=t.lh.add(e.key))}))
var n=[]
return e.forEach((function(e){t.lh.has(e)||n.push(new vs(e))})),this.lh.forEach((function(t){e.has(t)||n.push(new ds(t))})),n},t.prototype.Ph=function(t){this.uh=t.Fc,this.lh=Ut()
var e=this.wh(t.documents)
return this.yr(e,!0)},t.prototype.yh=function(){return qt.Gt(this.query,this.fh,this.Wt,0===this.hh)},t}(),gs=function(t,e,n){this.query=t,this.targetId=e,this.view=n},ms=function(t){this.key=t,this.Vh=!1},ws=function(){function t(t,e,n,r,i,o){this.ju=t,this.ph=e,this.bh=n,this.Sh=r,this.currentUser=i,this.Dh=o,this.Ch={},this.Nh=new ut((function(t){return Qn(t)}),Hn),this.Fh=new Map,this.xh=[],this.$h=new Tt(x.i),this.kh=new Map,this.Mh=new xo,this.Oh={},this.Lh=new Map,this.Bh=ro.da(),this.onlineState="Unknown",this.qh=void 0}return Object.defineProperty(t.prototype,"Uh",{get:function(){return!0===this.qh},enumerable:!1,configurable:!0}),t}()
function bs(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u,a
return i.__generator(this,(function(i){switch(i.label){case 0:return n=Ws(t),(s=n.Nh.get(e))?(r=s.targetId,n.Sh.Oi(r),o=s.view.yh(),[3,4]):[3,1]
case 1:return[4,Io(n.ju,Bn(e))]
case 2:return u=i.sent(),a=n.Sh.Oi(u.targetId),r=u.targetId,[4,_s(n,e,r,"current"===a)]
case 3:o=i.sent(),n.Uh&&Ko(n.ph,u),i.label=4
case 4:return[2,o]}}))}))}function _s(t,e,n,r){return i.__awaiter(this,void 0,void 0,(function(){var o,s,u,a,c,h
return i.__generator(this,(function(f){switch(f.label){case 0:return t.Qh=function(e,n,r){return function(t,e,n,r){return i.__awaiter(this,void 0,void 0,(function(){var o,s,u
return i.__generator(this,(function(i){switch(i.label){case 0:return(o=e.view.wh(n)).Eh?[4,To(t.ju,e.query,!1).then((function(t){var n=t.documents
return e.view.wh(n,o)}))]:[3,2]
case 1:o=i.sent(),i.label=2
case 2:return s=r&&r.zt.get(e.targetId),u=e.view.yr(o,t.Uh,s),[2,(Rs(t,e.targetId,u.Rh),u.snapshot)]}}))}))}(t,e,n,r)},[4,To(t.ju,e,!0)]
case 1:return o=f.sent(),s=new ys(e,o.Fc),u=s.wh(o.documents),a=Bt.Zt(n,r&&"Offline"!==t.onlineState),c=s.yr(u,t.Uh,a),Rs(t,n,c.Rh),h=new gs(e,n,s),[2,(t.Nh.set(e,h),t.Fh.has(n)?t.Fh.get(n).push(e):t.Fh.set(n,[e]),c.snapshot)]}}))}))}function Is(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o
return i.__generator(this,(function(i){switch(i.label){case 0:return n=_(t),r=n.Nh.get(e),(o=n.Fh.get(r.targetId)).length>1?[2,(n.Fh.set(r.targetId,o.filter((function(t){return!Hn(t,e)}))),void n.Nh.delete(e))]:n.Uh?(n.Sh.Bi(r.targetId),n.Sh.Fi(r.targetId)?[3,2]:[4,Eo(n.ju,r.targetId,!1).then((function(){n.Sh.Ui(r.targetId),Wo(n.ph,r.targetId),Ls(n,r.targetId)})).catch(Do)]):[3,3]
case 1:i.sent(),i.label=2
case 2:return[3,5]
case 3:return Ls(n,r.targetId),[4,Eo(n.ju,r.targetId,!0)]
case 4:i.sent(),i.label=5
case 5:return[2]}}))}))}function Es(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r
return i.__generator(this,(function(i){switch(i.label){case 0:n=_(t),i.label=1
case 1:return i.trys.push([1,4,,6]),[4,bo(n.ju,e)]
case 2:return r=i.sent(),e.zt.forEach((function(t,e){var r=n.kh.get(e)
r&&(b(t.ee.size+t.ne.size+t.se.size<=1),t.ee.size>0?r.Vh=!0:t.ne.size>0?b(r.Vh):t.se.size>0&&(b(r.Vh),r.Vh=!1))})),[4,Cs(n,r,e)]
case 3:return i.sent(),[3,6]
case 4:return[4,Do(i.sent())]
case 5:return i.sent(),[3,6]
case 6:return[2]}}))}))}function Ts(t,e,n){var r=_(t)
if(r.Uh&&0===n||!r.Uh&&1===n){var i=[]
r.Nh.forEach((function(t,n){var r=n.view.Qs(e)
r.snapshot&&i.push(r.snapshot)})),function(t,e){var n=_(t)
n.onlineState=e
var r=!1
n.Bs.forEach((function(t,n){for(var i=0,o=n.listeners;i<o.length;i++)o[i].Qs(e)&&(r=!0)})),r&&Vr(n)}(r.bh,e),i.length&&r.Ch.yu(i),r.onlineState=e,r.Uh&&r.Sh.Ki(e)}}function As(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s,u,a,c
return i.__generator(this,(function(i){switch(i.label){case 0:return(r=_(t)).Sh.Qi(e,"rejected",n),o=r.kh.get(e),(s=o&&o.key)?(u=(u=new Tt(x.i)).ot(s,new Rn(s,ct.min())),a=Ut().add(s),c=new Gt(ct.min(),new Map,new St(J),u,a),[4,Es(r,c)]):[3,2]
case 1:return i.sent(),r.$h=r.$h.remove(s),r.kh.delete(e),Ps(r),[3,4]
case 2:return[4,Eo(r.ju,e,!1).then((function(){return Ls(r,e,n)})).catch(Do)]
case 3:i.sent(),i.label=4
case 4:return[2]}}))}))}function Ns(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o
return i.__generator(this,(function(i){switch(i.label){case 0:n=_(t),r=e.batch.batchId,i.label=1
case 1:return i.trys.push([1,4,,6]),[4,mo(n.ju,e)]
case 2:return o=i.sent(),xs(n,r,null),Ds(n,r),n.Sh.ki(r,"acknowledged"),[4,Cs(n,o)]
case 3:return i.sent(),[3,6]
case 4:return[4,Do(i.sent())]
case 5:return i.sent(),[3,6]
case 6:return[2]}}))}))}function Ss(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o
return i.__generator(this,(function(i){switch(i.label){case 0:r=_(t),i.label=1
case 1:return i.trys.push([1,4,,6]),[4,function(t,e){var n=_(t)
return n.persistence.runTransaction("Reject batch","readwrite-primary",(function(t){var r
return n.Sr.Oo(t,e).next((function(e){return b(null!==e),r=e.keys(),n.Sr.Wo(t,e)})).next((function(){return n.Sr.zo(t)})).next((function(){return n.Cc.kr(t,r)}))}))}(r.ju,e)]
case 2:return o=i.sent(),xs(r,e,n),Ds(r,e),r.Sh.ki(e,"rejected",n),[4,Cs(r,o)]
case 3:return i.sent(),[3,6]
case 4:return[4,Do(i.sent())]
case 5:return i.sent(),[3,6]
case 6:return[2]}}))}))}function Ds(t,e){(t.Lh.get(e)||[]).forEach((function(t){t.resolve()})),t.Lh.delete(e)}function xs(t,e,n){var r=_(t),i=r.Oh[r.currentUser.ti()]
if(i){var o=i.get(e)
o&&(n?o.reject(n):o.resolve(),i=i.remove(e)),r.Oh[r.currentUser.ti()]=i}}function Ls(t,e,n){void 0===n&&(n=null),t.Sh.Bi(e)
for(var r=0,i=t.Fh.get(e);r<i.length;r++){var o=i[r]
t.Nh.delete(o),n&&t.Ch.Wh(o,n)}t.Fh.delete(e),t.Uh&&t.Mh.Uc(e).forEach((function(e){t.Mh.Ho(e)||ks(t,e)}))}function ks(t,e){var n=t.$h.get(e)
null!==n&&(Wo(t.ph,n),t.$h=t.$h.remove(e),t.kh.delete(n),Ps(t))}function Rs(t,e,n){for(var r=0,i=n;r<i.length;r++){var o=i[r]
o instanceof ds?(t.Mh.Da(o.key,e),Os(t,o)):o instanceof vs?(v("SyncEngine","Document no longer in limbo: "+o.key),t.Mh.Na(o.key,e),t.Mh.Ho(o.key)||ks(t,o.key)):w()}}function Os(t,e){var n=e.key
t.$h.get(n)||(v("SyncEngine","New document in limbo: "+n),t.xh.push(n),Ps(t))}function Ps(t){for(;t.xh.length>0&&t.$h.size<t.Dh;){var e=t.xh.shift(),n=t.Bh.next()
t.kh.set(n,new ms(e)),t.$h=t.$h.ot(e,n),Ko(t.ph,new bt(Bn(Un(e.path)),n,2,jr.ai))}}function Cs(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s,u
return i.__generator(this,(function(a){switch(a.label){case 0:return r=_(t),o=[],s=[],u=[],r.Nh.m()?[3,3]:(r.Nh.forEach((function(t,i){u.push(r.Qh(i,e,n).then((function(t){if(t){r.Uh&&r.Sh.Qi(i.targetId,t.fromCache?"not-current":"current"),o.push(t)
var e=ri.zr(i.targetId,t)
s.push(e)}})))})),[4,Promise.all(u)])
case 1:return a.sent(),r.Ch.yu(o),[4,function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u,a,c,h,f
return i.__generator(this,(function(i){switch(i.label){case 0:n=_(t),i.label=1
case 1:return i.trys.push([1,3,,4]),[4,n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(function(t){return yr.forEach(e,(function(e){return yr.forEach(e.Kr,(function(r){return n.persistence.No.Da(t,e.targetId,r)})).next((function(){return yr.forEach(e.Gr,(function(r){return n.persistence.No.Na(t,e.targetId,r)}))}))}))}))]
case 2:return i.sent(),[3,4]
case 3:if(!br(r=i.sent()))throw r
return v("LocalStore","Failed to update sequence numbers: "+r),[3,4]
case 4:for(o=0,s=e;o<s.length;o++)u=s[o],a=u.targetId,u.fromCache||(c=n.bc.get(a),h=c.nt,f=c.rt(h),n.bc=n.bc.ot(a,f))
return[2]}}))}))}(r.ju,s)]
case 2:a.sent(),a.label=3
case 3:return[2]}}))}))}function Us(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r
return i.__generator(this,(function(o){switch(o.label){case 0:return(n=_(t)).currentUser.isEqual(e)?[3,3]:(v("SyncEngine","User change. New user:",e.ti()),[4,function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s
return i.__generator(this,(function(i){switch(i.label){case 0:return n=_(t),r=n.Sr,o=n.Cc,[4,n.persistence.runTransaction("Handle user change","readonly",(function(t){var i
return n.Sr.Uo(t).next((function(s){return i=s,r=n.persistence.mc(e),o=new ni(n.Dc,r,n.persistence.Ic()),r.Uo(t)})).next((function(e){for(var n=[],r=[],s=Ut(),u=0,a=i;u<a.length;u++){var c=a[u]
n.push(c.batchId)
for(var h=0,f=c.mutations;h<f.length;h++){var l=f[h]
s=s.add(l.key)}}for(var p=0,d=e;p<d.length;p++){var v=d[p]
r.push(v.batchId)
for(var y=0,g=v.mutations;y<g.length;y++){var m=g[y]
s=s.add(m.key)}}return o.kr(t,s).next((function(t){return{jh:t,Kh:n,Gh:r}}))}))}))]
case 1:return s=i.sent(),[2,(n.Sr=r,n.Cc=o,n.Vc.Nc(n.Cc),s)]}}))}))}(n.ju,e)])
case 1:return r=o.sent(),n.currentUser=e,function(t,e){t.Lh.forEach((function(t){t.forEach((function(t){t.reject(new l(f.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))}))})),t.Lh.clear()}(n),n.Sh.ji(e,r.Kh,r.Gh),[4,Cs(n,r.jh)]
case 2:o.sent(),o.label=3
case 3:return[2]}}))}))}function Vs(t,e){var n=_(t),r=n.kh.get(e)
if(r&&r.Vh)return Ut().add(r.key)
var i=Ut(),o=n.Fh.get(e)
if(!o)return i
for(var s=0,u=o;s<u.length;s++){var a=u[s],c=n.Nh.get(a)
i=i.kt(c.view.dh)}return i}function Ms(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o
return i.__generator(this,(function(i){switch(i.label){case 0:return[4,To((n=_(t)).ju,e.query,!0)]
case 1:return r=i.sent(),o=e.view.Ph(r),[2,(n.Uh&&Rs(n,e.targetId,o.Rh),o)]}}))}))}function Fs(t,e,n,r){return i.__awaiter(this,void 0,void 0,(function(){var o,s
return i.__generator(this,(function(i){switch(i.label){case 0:return[4,function(t,e){var n=_(t),r=_(n.Sr)
return n.persistence.runTransaction("Lookup mutation documents","readonly",(function(t){return r.Lo(t,e).next((function(e){return e?n.Cc.kr(t,e):yr.resolve(null)}))}))}((o=_(t)).ju,e)]
case 1:return null===(s=i.sent())?[3,6]:"pending"!==n?[3,3]:[4,is(o.ph)]
case 2:return i.sent(),[3,4]
case 3:"acknowledged"===n||"rejected"===n?(xs(o,e,r||null),Ds(o,e),function(t,e){_(_(t).Sr).Ko(e)}(o.ju,e)):w(),i.label=4
case 4:return[4,Cs(o,s)]
case 5:return i.sent(),[3,7]
case 6:v("SyncEngine","Cannot apply mutation batch with id: "+e),i.label=7
case 7:return[2]}}))}))}function js(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u,a,c,h
return i.__generator(this,(function(i){switch(i.label){case 0:return Ws(n=_(t)),Hs(n),!0!==e||!0===n.qh?[3,3]:(r=n.Sh.Ci(),[4,qs(n,r.A())])
case 1:return o=i.sent(),n.qh=!0,[4,fs(n.ph,!0)]
case 2:for(i.sent(),s=0,u=o;s<u.length;s++)a=u[s],Ko(n.ph,a)
return[3,7]
case 3:return!1!==e||!1===n.qh?[3,7]:(c=[],h=Promise.resolve(),n.Fh.forEach((function(t,e){n.Sh.qi(e)?c.push(e):h=h.then((function(){return Ls(n,e),Eo(n.ju,e,!0)})),Wo(n.ph,e)})),[4,h])
case 4:return i.sent(),[4,qs(n,c)]
case 5:return i.sent(),function(t){var e=_(t)
e.kh.forEach((function(t,n){Wo(e.ph,n)})),e.Mh.Qc(),e.kh=new Map,e.$h=new Tt(x.i)}(n),n.qh=!1,[4,fs(n.ph,!1)]
case 6:i.sent(),i.label=7
case 7:return[2]}}))}))}function qs(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u,a,c,h,f,l,p,d,v,y
return i.__generator(this,(function(i){switch(i.label){case 0:n=_(t),r=[],o=[],s=0,u=e,i.label=1
case 1:return s<u.length?(a=u[s],c=void 0,(h=n.Fh.get(a))&&0!==h.length?[4,Io(n.ju,Bn(h[0]))]:[3,7]):[3,13]
case 2:c=i.sent(),f=0,l=h,i.label=3
case 3:return f<l.length?(p=l[f],d=n.Nh.get(p),[4,Ms(n,d)]):[3,6]
case 4:(v=i.sent()).snapshot&&o.push(v.snapshot),i.label=5
case 5:return f++,[3,3]
case 6:return[3,11]
case 7:return[4,Ao(n.ju,a)]
case 8:return y=i.sent(),[4,Io(n.ju,y)]
case 9:return c=i.sent(),[4,_s(n,Gs(y),a,!1)]
case 10:i.sent(),i.label=11
case 11:r.push(c),i.label=12
case 12:return s++,[3,1]
case 13:return[2,(n.Ch.yu(o),r)]}}))}))}function Gs(t){return Cn(t.path,t.collectionGroup,t.orderBy,t.filters,t.limit,"F",t.startAt,t.endAt)}function Bs(t){var e=_(t)
return _(_(e.ju).persistence).pi()}function zs(t,e,n,r){return i.__awaiter(this,void 0,void 0,(function(){var o,s,u
return i.__generator(this,(function(i){switch(i.label){case 0:return(o=_(t)).qh?(v("SyncEngine","Ignoring unexpected query state notification."),[3,8]):[3,1]
case 1:if(!o.Fh.has(e))return[3,8]
switch(n){case"current":case"not-current":return[3,2]
case"rejected":return[3,5]}return[3,7]
case 2:return[4,No(o.ju)]
case 3:return s=i.sent(),u=Gt.Xt(e,"current"===n),[4,Cs(o,s,u)]
case 4:return i.sent(),[3,8]
case 5:return[4,Eo(o.ju,e,!0)]
case 6:return i.sent(),Ls(o,e,r),[3,8]
case 7:w(),i.label=8
case 8:return[2]}}))}))}function Ks(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s,u,a,c,h,f,l,p
return i.__generator(this,(function(d){switch(d.label){case 0:if(!(r=Ws(t)).qh)return[3,10]
o=0,s=e,d.label=1
case 1:return o<s.length?(u=s[o],r.Fh.has(u)?(v("SyncEngine","Adding an already active target "+u),[3,5]):[4,Ao(r.ju,u)]):[3,6]
case 2:return a=d.sent(),[4,Io(r.ju,a)]
case 3:return c=d.sent(),[4,_s(r,Gs(a),c.targetId,!1)]
case 4:d.sent(),Ko(r.ph,c),d.label=5
case 5:return o++,[3,1]
case 6:h=function(t){return i.__generator(this,(function(e){switch(e.label){case 0:return r.Fh.has(t)?[4,Eo(r.ju,t,!1).then((function(){Wo(r.ph,t),Ls(r,t)})).catch(Do)]:[3,2]
case 1:e.sent(),e.label=2
case 2:return[2]}}))},f=0,l=n,d.label=7
case 7:return f<l.length?(p=l[f],[5,h(p)]):[3,10]
case 8:d.sent(),d.label=9
case 9:return f++,[3,7]
case 10:return[2]}}))}))}function Ws(t){var e=_(t)
return e.ph.Gu.sh=Es.bind(null,e),e.ph.Gu.qe=Vs.bind(null,e),e.ph.Gu.nh=As.bind(null,e),e.Ch.yu=Cr.bind(null,e.bh),e.Ch.Wh=Ur.bind(null,e.bh),e}function Hs(t){var e=_(t)
return e.ph.Gu.ih=Ns.bind(null,e),e.ph.Gu.rh=Ss.bind(null,e),e}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Qs=function(){function t(){}return t.prototype.Nc=function(t){this.zh=t},t.prototype.Lr=function(t,e,n,r){var i=this
return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.on.length||1===t.on.length&&t.on[0].field.p())}(e)||n.isEqual(ct.min())?this.Hh(t,e):this.zh.kr(t,r).next((function(o){var u=i.Yh(e,o)
return(Vn(e)||Mn(e))&&i.Eh(e.an,u,r,n)?i.Hh(t,e):(d()<=s.LogLevel.DEBUG&&v("IndexFreeQueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Xn(e)),i.zh.Lr(t,e,n).next((function(t){return u.forEach((function(e){t=t.ot(e.key,e)})),t})))}))},t.prototype.Yh=function(t,e){var n=new St(Jn(t))
return e.forEach((function(e,r){r instanceof kn&&Yn(t,r)&&(n=n.add(r))})),n},t.prototype.Eh=function(t,e,n,r){if(n.size!==e.size)return!0
var i="F"===t?e.last():e.first()
return!!i&&(i.hasPendingWrites||i.version.L(r)>0)},t.prototype.Hh=function(t,e){return d()<=s.LogLevel.DEBUG&&v("IndexFreeQueryEngine","Using full collection scan to execute query:",Xn(e)),this.zh.Lr(t,e,ct.min())},t}(),Xs=function(){function t(t,e){this.Dr=t,this.No=e,this.Sr=[],this.Jh=1,this.Xh=new St(Lo.kc)}return t.prototype.$o=function(t){return yr.resolve(0===this.Sr.length)},t.prototype.ko=function(t,e,n,r){var i=this.Jh
this.Jh++,this.Sr.length>0&&this.Sr[this.Sr.length-1]
var o=new Jr(i,e,n,r)
this.Sr.push(o)
for(var s=0,u=r;s<u.length;s++){var a=u[s]
this.Xh=this.Xh.add(new Lo(a.key,i)),this.Dr.Mo(t,a.key.path.h())}return yr.resolve(o)},t.prototype.Oo=function(t,e){return yr.resolve(this.Zh(e))},t.prototype.Bo=function(t,e){var n=e+1,r=this.tl(n),i=r<0?0:r
return yr.resolve(this.Sr.length>i?this.Sr[i]:null)},t.prototype.qo=function(){return yr.resolve(0===this.Sr.length?-1:this.Jh-1)},t.prototype.Uo=function(t){return yr.resolve(this.Sr.slice())},t.prototype.Nr=function(t,e){var n=this,r=new Lo(e,0),i=new Lo(e,Number.POSITIVE_INFINITY),o=[]
return this.Xh.Ft([r,i],(function(t){var e=n.Zh(t.jc)
o.push(e)})),yr.resolve(o)},t.prototype.Or=function(t,e){var n=this,r=new St(J)
return e.forEach((function(t){var e=new Lo(t,0),i=new Lo(t,Number.POSITIVE_INFINITY)
n.Xh.Ft([e,i],(function(t){r=r.add(t.jc)}))})),yr.resolve(this.el(r))},t.prototype.Wr=function(t,e){var n=e.path,r=n.length+1,i=n
x.F(i)||(i=i.child(""))
var o=new Lo(new x(i),0),s=new St(J)
return this.Xh.xt((function(t){var e=t.key.path
return!!n.T(e)&&(e.length===r&&(s=s.add(t.jc)),!0)}),o),yr.resolve(this.el(s))},t.prototype.el=function(t){var e=this,n=[]
return t.forEach((function(t){var r=e.Zh(t)
null!==r&&n.push(r)})),n},t.prototype.Wo=function(t,e){var n=this
b(0===this.nl(e.batchId,"removed")),this.Sr.shift()
var r=this.Xh
return yr.forEach(e.mutations,(function(i){var o=new Lo(i.key,e.batchId)
return r=r.delete(o),n.No.Go(t,i.key)})).next((function(){n.Xh=r}))},t.prototype.Ko=function(t){},t.prototype.Ho=function(t,e){var n=new Lo(e,0),r=this.Xh.$t(n)
return yr.resolve(e.isEqual(r&&r.key))},t.prototype.zo=function(t){return this.Sr.length,yr.resolve()},t.prototype.nl=function(t,e){return this.tl(t)},t.prototype.tl=function(t){return 0===this.Sr.length?0:t-this.Sr[0].batchId},t.prototype.Zh=function(t){var e=this.tl(t)
return e<0||e>=this.Sr.length?null:this.Sr[e]},t}(),Ys=function(){function t(t,e){this.Dr=t,this.sl=e,this.docs=new Tt(x.i),this.size=0}return t.prototype.Er=function(t,e,n){var r=e.key,i=this.docs.get(r),o=i?i.size:0,s=this.sl(e)
return this.docs=this.docs.ot(r,{ta:e,size:s,readTime:n}),this.size+=s-o,this.Dr.Mo(t,r.path.h())},t.prototype.Ar=function(t){var e=this.docs.get(t)
e&&(this.docs=this.docs.remove(t),this.size-=e.size)},t.prototype.Rr=function(t,e){var n=this.docs.get(e)
return yr.resolve(n?n.ta:null)},t.prototype.getEntries=function(t,e){var n=this,r=kt()
return e.forEach((function(t){var e=n.docs.get(t)
r=r.ot(t,e?e.ta:null)})),yr.resolve(r)},t.prototype.Lr=function(t,e,n){for(var r=Ot(),i=new x(e.path.child("")),o=this.docs.ft(i);o.At();){var s=o.It(),u=s.key,a=s.value,c=a.ta,h=a.readTime
if(!e.path.T(u.path))break
h.L(n)<=0||c instanceof kn&&Yn(e,c)&&(r=r.ot(c.key,c))}return yr.resolve(r)},t.prototype.il=function(t,e){return yr.forEach(this.docs,(function(t){return e(t)}))},t.prototype.ra=function(t){return new Js(this)},t.prototype.aa=function(t){return yr.resolve(this.size)},t}(),Js=function(t){function e(e){var n=this
return(n=t.call(this)||this).ca=e,n}return i.__extends(e,t),e.prototype.yr=function(t){var e=this,n=[]
return this.wr.forEach((function(r,i){i?n.push(e.ca.Er(t,i,e.readTime)):e.ca.Ar(r)})),yr.$n(n)},e.prototype.gr=function(t,e){return this.ca.Rr(t,e)},e.prototype.Pr=function(t,e){return this.ca.getEntries(t,e)},e}(Zr),$s=function(){function t(t){this.persistence=t,this.rl=new ut((function(t){return vt(t)}),yt),this.lastRemoteSnapshotVersion=ct.min(),this.highestTargetId=0,this.ol=0,this.al=new xo,this.targetCount=0,this.cl=ro.fa()}return t.prototype.Ce=function(t,e){return this.rl.forEach((function(t,n){return e(n)})),yr.resolve()},t.prototype.Ea=function(t){return yr.resolve(this.lastRemoteSnapshotVersion)},t.prototype.Ia=function(t){return yr.resolve(this.ol)},t.prototype.wa=function(t){return this.highestTargetId=this.cl.next(),yr.resolve(this.highestTargetId)},t.prototype.Aa=function(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.ol&&(this.ol=e),yr.resolve()},t.prototype.ga=function(t){this.rl.set(t.target,t)
var e=t.targetId
e>this.highestTargetId&&(this.cl=new ro(e),this.highestTargetId=e),t.sequenceNumber>this.ol&&(this.ol=t.sequenceNumber)},t.prototype.Ra=function(t,e){return this.ga(e),this.targetCount+=1,yr.resolve()},t.prototype.ya=function(t,e){return this.ga(e),yr.resolve()},t.prototype.Va=function(t,e){return this.rl.delete(e.target),this.al.Uc(e.targetId),this.targetCount-=1,yr.resolve()},t.prototype.po=function(t,e,n){var r=this,i=0,o=[]
return this.rl.forEach((function(s,u){u.sequenceNumber<=e&&null===n.get(u.targetId)&&(r.rl.delete(s),o.push(r.pa(t,u.targetId)),i++)})),yr.$n(o).next((function(){return i}))},t.prototype.ba=function(t){return yr.resolve(this.targetCount)},t.prototype.va=function(t,e){var n=this.rl.get(e)||null
return yr.resolve(n)},t.prototype.Sa=function(t,e,n){return this.al.Lc(e,n),yr.resolve()},t.prototype.Ca=function(t,e,n){this.al.qc(e,n)
var r=this.persistence.No,i=[]
return r&&e.forEach((function(e){i.push(r.Go(t,e))})),yr.$n(i)},t.prototype.pa=function(t,e){return this.al.Uc(e),yr.resolve()},t.prototype.Fa=function(t,e){var n=this.al.Wc(e)
return yr.resolve(n)},t.prototype.Ho=function(t,e){return yr.resolve(this.al.Ho(e))},t}(),Zs=function(){function t(t){var e=this
this.ul={},this.Ma=new jr(0),this.Oa=!1,this.Oa=!0,this.No=t(this),this.Ka=new $s(this),this.Dr=new Ui,this.vr=function(t,n){return new Ys(t,(function(t){return e.No.hl(t)}))}(this.Dr)}return t.prototype.start=function(){return Promise.resolve()},t.prototype.Di=function(){return this.Oa=!1,Promise.resolve()},Object.defineProperty(t.prototype,"Ei",{get:function(){return this.Oa},enumerable:!1,configurable:!0}),t.prototype.Za=function(){},t.prototype.tc=function(){},t.prototype.Ic=function(){return this.Dr},t.prototype.mc=function(t){var e=this.ul[t.ti()]
return e||(e=new Xs(this.Dr,this.No),this.ul[t.ti()]=e),e},t.prototype.Tc=function(){return this.Ka},t.prototype.Ec=function(){return this.vr},t.prototype.runTransaction=function(t,e,n){var r=this
v("MemoryPersistence","Starting transaction:",t)
var i=new tu(this.Ma.next())
return this.No.ll(),n(i).next((function(t){return r.No._l(i).next((function(){return t}))})).Fn().then((function(t){return i.br(),t}))},t.prototype.fl=function(t,e){return yr.kn(Object.values(this.ul).map((function(n){return function(){return n.Ho(t,e)}})))},t}(),tu=function(t){function e(e){var n=this
return(n=t.call(this)||this).xa=e,n}return i.__extends(e,t),e}(ei),eu=function(){function t(t){this.persistence=t,this.dl=new xo,this.wl=null}return t.ml=function(e){return new t(e)},Object.defineProperty(t.prototype,"Tl",{get:function(){if(this.wl)return this.wl
throw w()},enumerable:!1,configurable:!0}),t.prototype.Da=function(t,e,n){return this.dl.Da(n,e),this.Tl.delete(n.toString()),yr.resolve()},t.prototype.Na=function(t,e,n){return this.dl.Na(n,e),this.Tl.add(n.toString()),yr.resolve()},t.prototype.Go=function(t,e){return this.Tl.add(e.toString()),yr.resolve()},t.prototype.removeTarget=function(t,e){var n=this
this.dl.Uc(e.targetId).forEach((function(t){return n.Tl.add(t.toString())}))
var r=this.persistence.Tc()
return r.Fa(t,e.targetId).next((function(t){t.forEach((function(t){return n.Tl.add(t.toString())}))})).next((function(){return r.Va(t,e)}))},t.prototype.ll=function(){this.wl=new Set},t.prototype._l=function(t){var e=this,n=this.persistence.Ec().ra()
return yr.forEach(this.Tl,(function(r){var i=x.D(r)
return e.El(t,i).next((function(t){t||n.Ar(i)}))})).next((function(){return e.wl=null,n.apply(t)}))},t.prototype.yc=function(t,e){var n=this
return this.El(t,e).next((function(t){t?n.Tl.delete(e.toString()):n.Tl.add(e.toString())}))},t.prototype.hl=function(t){return 0},t.prototype.El=function(t,e){var n=this
return yr.kn([function(){return yr.resolve(n.dl.Ho(e))},function(){return n.persistence.Tc().Ho(t,e)},function(){return n.persistence.fl(t,e)}])},t}(),nu=function(){function t(t){this.Il=t.Il,this.Al=t.Al}return t.prototype.gu=function(t){this.Rl=t},t.prototype.Tu=function(t){this.gl=t},t.prototype.onMessage=function(t){this.Pl=t},t.prototype.close=function(){this.Al()},t.prototype.send=function(t){this.Il(t)},t.prototype.yl=function(){this.Rl()},t.prototype.Vl=function(t){this.gl(t)},t.prototype.pl=function(t){this.Pl(t)},t}(),ru={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"},iu=function(t){function e(e){var n=this
return(n=t.call(this,e)||this).forceLongPolling=e.forceLongPolling,n.W=e.W,n}return i.__extends(e,t),e.prototype.Nl=function(t,e,n,r){return new Promise((function(i,o){var s=new a.XhrIo
s.listenOnce(a.EventType.COMPLETE,(function(){try{switch(s.getLastErrorCode()){case a.ErrorCode.NO_ERROR:var e=s.getResponseJson()
v("Connection","XHR received:",JSON.stringify(e)),i(e)
break
case a.ErrorCode.TIMEOUT:v("Connection",'RPC "'+t+'" timed out'),o(new l(f.DEADLINE_EXCEEDED,"Request time out"))
break
case a.ErrorCode.HTTP_ERROR:var n=s.getStatus()
if(v("Connection",'RPC "'+t+'" failed with status:',n,"response text:",s.getResponseText()),n>0){var r=s.getResponseJson().error
if(r&&r.status&&r.message){var u=function(t){var e=t.toLowerCase().replace("_","-")
return Object.values(f).indexOf(e)>=0?e:f.UNKNOWN}(r.status)
o(new l(u,r.message))}else o(new l(f.UNKNOWN,"Server responded with status "+s.getStatus()))}else o(new l(f.UNAVAILABLE,"Connection failed."))
break
default:w()}}finally{v("Connection",'RPC "'+t+'" completed.')}}))
var u=JSON.stringify(r)
s.send(e,"POST",u,n,15)}))},e.prototype.Pu=function(t,e){var n=[this.vl,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=a.createWebChannelTransport(),i={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:"projects/"+this.U.projectId+"/databases/"+this.U.database},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.W}
this.Cl(i.initMessageHeaders,e),u.isMobileCordova()||u.isReactNative()||u.isElectron()||u.isIE()||u.isUWP()||u.isBrowserExtension()||(i.httpHeadersOverwriteParam="$httpHeaders")
var o=n.join("")
v("Connection","Creating WebChannel: "+o,i)
var s=r.createWebChannel(o,i),c=!1,h=!1,p=new nu({Il:function(t){h?v("Connection","Not sending because WebChannel is closed:",t):(c||(v("Connection","Opening WebChannel transport."),s.open(),c=!0),v("Connection","WebChannel sending:",t),s.send(t))},Al:function(){return s.close()}}),d=function(t,e){s.listen(t,(function(t){try{e(t)}catch(t){setTimeout((function(){throw t}),0)}}))}
return d(a.WebChannel.EventType.OPEN,(function(){h||v("Connection","WebChannel transport opened.")})),d(a.WebChannel.EventType.CLOSE,(function(){h||(h=!0,v("Connection","WebChannel transport closed"),p.Vl())})),d(a.WebChannel.EventType.ERROR,(function(t){h||(h=!0,g("Connection","WebChannel transport errored:",t),p.Vl(new l(f.UNAVAILABLE,"The operation could not be completed")))})),d(a.WebChannel.EventType.MESSAGE,(function(t){var e
if(!h){var n=t.data[0]
b(!!n)
var r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error)
if(i){v("Connection","WebChannel received error:",i)
var o=i.status,u=function(t){var e=mt[t]
if(void 0!==e)return Et(e)}(o),a=i.message
void 0===u&&(u=f.INTERNAL,a="Unknown error status: "+o+" with message "+i.message),h=!0,p.Vl(new l(u,a)),s.close()}else v("Connection","WebChannel received:",n),p.pl(n)}})),setTimeout((function(){p.yl()}),0),p},e}(function(){function t(t){this.bl=t,this.U=t.U
var e=t.ssl?"https":"http"
this.vl=e+"://"+t.host,this.Sl="projects/"+this.U.projectId+"/databases/"+this.U.database+"/documents"}return t.prototype.$u=function(t,e,n,r){var i=this.Dl(t,e)
v("RestConnection","Sending: ",i,n)
var o={}
return this.Cl(o,r),this.Nl(t,i,o,n).then((function(t){return v("RestConnection","Received: ",t),t}),(function(e){throw g("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e}))},t.prototype.ku=function(t,e,n,r){return this.$u(t,e,n,r)},t.prototype.Cl=function(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/7.24.0",t["Content-Type"]="text/plain",e)for(var n in e.Kc)e.Kc.hasOwnProperty(n)&&(t[n]=e.Kc[n])},t.prototype.Dl=function(t,e){var n=ru[t]
return this.vl+"/v1/"+e+":"+n},t}()),ou=function(){function t(){var t=this
this.Fl=function(){return t.xl()},this.$l=function(){return t.kl()},this.Ml=[],this.Ol()}return t.prototype.Zu=function(t){this.Ml.push(t)},t.prototype.Di=function(){window.removeEventListener("online",this.Fl),window.removeEventListener("offline",this.$l)},t.prototype.Ol=function(){window.addEventListener("online",this.Fl),window.addEventListener("offline",this.$l)},t.prototype.xl=function(){v("ConnectivityMonitor","Network connectivity changed: AVAILABLE")
for(var t=0,e=this.Ml;t<e.length;t++)(0,e[t])(0)},t.prototype.kl=function(){v("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE")
for(var t=0,e=this.Ml;t<e.length;t++)(0,e[t])(1)},t.Ln=function(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener},t}(),su=function(){function t(){}return t.prototype.Zu=function(t){},t.prototype.Di=function(){},t}()

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uu(t){return new ge(t,!0)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var au="You are using the memory-only build of Firestore. Persistence support is only available via the @firebase/firestore bundle or the firebase-firestore.js build.",cu=function(){function t(){}return t.prototype.initialize=function(t){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:return this.Sh=this.Ll(t),this.persistence=this.Bl(t),[4,this.persistence.start()]
case 1:return e.sent(),this.ql=this.Ul(t),this.ju=this.Ql(t),[2]}}))}))},t.prototype.Ul=function(t){return null},t.prototype.Ql=function(t){return e=this.persistence,n=new Qs,r=t.Wl,new go(e,n,r)
var e,n,r},t.prototype.Bl=function(t){if(t.persistenceSettings.jl)throw new l(f.FAILED_PRECONDITION,au)
return new Zs(eu.ml)},t.prototype.Ll=function(t){return new Yr},t.prototype.terminate=function(){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return this.ql&&this.ql.stop(),[4,this.Sh.Di()]
case 1:return t.sent(),[4,this.persistence.Di()]
case 2:return t.sent(),[2]}}))}))},t.prototype.clearPersistence=function(t,e){throw new l(f.FAILED_PRECONDITION,au)},t}(),hu=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.initialize=function(e){return i.__awaiter(this,void 0,void 0,(function(){var n,r=this
return i.__generator(this,(function(o){switch(o.label){case 0:return[4,t.prototype.initialize.call(this,e)]
case 1:return o.sent(),n=this.Kl.fi,this.Sh instanceof Xr?(this.Sh.fi={er:Fs.bind(null,n),nr:zs.bind(null,n),sr:Ks.bind(null,n),pi:Bs.bind(null,n)},[4,this.Sh.start()]):[3,3]
case 2:o.sent(),o.label=3
case 3:return[4,this.persistence.Xa((function(t){return i.__awaiter(r,void 0,void 0,(function(){return i.__generator(this,(function(e){switch(e.label){case 0:return[4,js(this.Kl.fi,t)]
case 1:return e.sent(),this.ql&&(t&&!this.ql.Ei?this.ql.start(this.ju):t||this.ql.stop()),[2]}}))}))}))]
case 4:return o.sent(),[2]}}))}))},e.prototype.Ll=function(t){if(t.persistenceSettings.jl&&t.persistenceSettings.synchronizeTabs){var e=Nr()
if(!Xr.Ln(e))throw new l(f.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.")
var n=yo(t.bl.U,t.bl.persistenceKey)
return new Xr(e,t.cs,n,t.clientId,t.Wl)}return new Yr},e}(function(t){function e(e){var n=this
return(n=t.call(this)||this).Kl=e,n}return i.__extends(e,t),e.prototype.initialize=function(e){return i.__awaiter(this,void 0,void 0,(function(){return i.__generator(this,(function(n){switch(n.label){case 0:return[4,t.prototype.initialize.call(this,e)]
case 1:return n.sent(),[4,So(this.ju)]
case 2:return n.sent(),[4,this.Kl.initialize(this,e)]
case 3:return n.sent(),[4,Hs(this.Kl.fi)]
case 4:return n.sent(),[4,is(this.Kl.ph)]
case 5:return n.sent(),[2]}}))}))},e.prototype.Ul=function(t){var e=this.persistence.No.wo
return new ai(e,t.cs)},e.prototype.Bl=function(t){var e=yo(t.bl.U,t.bl.persistenceKey),n=uu(t.bl.U)
return new ho(t.persistenceSettings.synchronizeTabs,e,t.clientId,ui.ao(t.persistenceSettings.cacheSizeBytes),t.cs,Nr(),Sr(),n,this.Sh,t.persistenceSettings.ka)},e.prototype.Ll=function(t){return new Yr},e.prototype.clearPersistence=function(t,e){return function(t){return i.__awaiter(this,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){switch(n.label){case 0:return gr.Ln()?(e=t+"main",[4,gr.delete(e)]):[2,Promise.resolve()]
case 1:return n.sent(),[2]}}))}))}(yo(t,e))},e}(cu)),fu=function(){function t(){}return t.prototype.initialize=function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n=this
return i.__generator(this,(function(r){switch(r.label){case 0:return this.ju?[3,2]:(this.ju=t.ju,this.Sh=t.Sh,this.Ku=this.Gl(e),this.ph=this.zl(e),this.bh=this.Hl(e),this.fi=this.Yl(e),this.Sh.di=function(t){return Ts(n.fi,t,1)},this.ph.Gu.Jl=Us.bind(null,this.fi),[4,fs(this.ph,this.fi.Uh)])
case 1:r.sent(),r.label=2
case 2:return[2]}}))}))},t.prototype.Hl=function(t){return new Rr},t.prototype.Gl=function(t){var e,n=uu(t.bl.U),r=(e=t.bl,new iu(e))
return function(t,e,n){return new Fo(t,e,n)}(t.credentials,r,n)},t.prototype.zl=function(t){var e,n,r,i,o,s=this
return e=this.ju,n=this.Ku,r=t.cs,i=function(t){return Ts(s.fi,t,0)},o=ou.Ln()?new ou:new su,new qo(e,n,r,i,o)},t.prototype.Yl=function(t){return function(t,e,n,r,i,o,s){var u=new ws(t,e,n,r,i,o)
return s&&(u.qh=!0),u}(this.ju,this.ph,this.bh,this.Sh,t.Wl,t.Dh,!t.persistenceSettings.jl||!t.persistenceSettings.synchronizeTabs)},t.prototype.terminate=function(){return zo(this.ph)},t}(),lu=function(){function t(t){this.observer=t,this.muted=!1}return t.prototype.next=function(t){this.observer.next&&this.Xl(this.observer.next,t)},t.prototype.error=function(t){this.observer.error?this.Xl(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)},t.prototype.Zl=function(){this.muted=!0},t.prototype.Xl=function(t,e){var n=this
this.muted||setTimeout((function(){n.muted||t(e)}),0)},t}(),pu=function(t){!function(t,e,n,r){if(!(e instanceof Array)||e.length<1)throw new l(f.INVALID_ARGUMENT,"Function FieldPath() requires its fieldNames argument to be an array with at least "+Q(1,"element")+".")}(0,t)
for(var e=0;e<t.length;++e)if(P("FieldPath","string",e,t[e]),0===t[e].length)throw new l(f.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.")
this.t_=new D(t)},du=function(t){function e(){for(var e=[],n=0;n<arguments.length;n++)e[n]=arguments[n]
return t.call(this,e)||this}return i.__extends(e,t),e.documentId=function(){return new e(D.v().R())},e.prototype.isEqual=function(t){if(!(t instanceof e))throw K("isEqual","FieldPath",1,t)
return this.t_.isEqual(t.t_)},e}(pu),vu=new RegExp("[~\\*/\\[\\]]"),yu=function(t){this.e_=t},gu=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.n_=function(t){if(2!==t.s_)throw 1===t.s_?t.i_(this.e_+"() can only appear at the top level of your update data"):t.i_(this.e_+"() cannot be used with set() unless you pass {merge:true}")
return t.We.push(t.path),null},e.prototype.isEqual=function(t){return t instanceof e},e}(yu)
function mu(t,e,n){return new Lu({s_:3,r_:e.settings.r_,methodName:t.e_,o_:n},e.U,e.serializer,e.ignoreUndefinedProperties)}var wu=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.n_=function(t){return new cn(t.path,new Ze)},e.prototype.isEqual=function(t){return t instanceof e},e}(yu),bu=function(t){function e(e,n){var r=this
return(r=t.call(this,e)||this).a_=n,r}return i.__extends(e,t),e.prototype.n_=function(t){var e=mu(this,t,!0),n=this.a_.map((function(t){return Uu(t,e)})),r=new tn(n)
return new cn(t.path,r)},e.prototype.isEqual=function(t){return this===t},e}(yu),_u=function(t){function e(e,n){var r=this
return(r=t.call(this,e)||this).a_=n,r}return i.__extends(e,t),e.prototype.n_=function(t){var e=mu(this,t,!0),n=this.a_.map((function(t){return Uu(t,e)})),r=new nn(n)
return new cn(t.path,r)},e.prototype.isEqual=function(t){return this===t},e}(yu),Iu=function(t){function e(e,n){var r=this
return(r=t.call(this,e)||this).c_=n,r}return i.__extends(e,t),e.prototype.n_=function(t){var e=new on(t.serializer,be(t.serializer,this.c_))
return new cn(t.path,e)},e.prototype.isEqual=function(t){return this===t},e}(yu),Eu=function(){function t(t,e){if(k("GeoPoint",arguments,2),P("GeoPoint","number",1,t),P("GeoPoint","number",2,e),!isFinite(t)||t<-90||t>90)throw new l(f.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t)
if(!isFinite(e)||e<-180||e>180)throw new l(f.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e)
this.u_=t,this.h_=e}return Object.defineProperty(t.prototype,"latitude",{get:function(){return this.u_},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"longitude",{get:function(){return this.h_},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(t){return this.u_===t.u_&&this.h_===t.h_},t.prototype.toJSON=function(){return{latitude:this.u_,longitude:this.h_}},t.prototype.Y=function(t){return J(this.u_,t.u_)||J(this.h_,t.h_)},t}(),Tu=function(t){this.l_=t},Au=/^__.*__$/,Nu=function(t,e,n){this.__=t,this.f_=e,this.d_=n},Su=function(){function t(t,e,n){this.data=t,this.We=e,this.fieldTransforms=n}return t.prototype.w_=function(t,e){var n=[]
return null!==this.We?n.push(new bn(t,this.data,this.We,e)):n.push(new wn(t,this.data,e)),this.fieldTransforms.length>0&&n.push(new In(t,this.fieldTransforms)),n},t}(),Du=function(){function t(t,e,n){this.data=t,this.We=e,this.fieldTransforms=n}return t.prototype.w_=function(t,e){var n=[new bn(t,this.data,this.We,e)]
return this.fieldTransforms.length>0&&n.push(new In(t,this.fieldTransforms)),n},t}()
function xu(t){switch(t){case 0:case 2:case 1:return!0
case 3:case 4:return!1
default:throw w()}}var Lu=function(){function t(t,e,n,r,i,o){this.settings=t,this.U=e,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===i&&this.m_(),this.fieldTransforms=i||[],this.We=o||[]}return Object.defineProperty(t.prototype,"path",{get:function(){return this.settings.path},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"s_",{get:function(){return this.settings.s_},enumerable:!1,configurable:!0}),t.prototype.T_=function(e){return new t(Object.assign(Object.assign({},this.settings),e),this.U,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.We)},t.prototype.E_=function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.T_({path:n,o_:!1})
return r.I_(t),r},t.prototype.A_=function(t){var e,n=null===(e=this.path)||void 0===e?void 0:e.child(t),r=this.T_({path:n,o_:!1})
return r.m_(),r},t.prototype.R_=function(t){return this.T_({path:void 0,o_:!0})},t.prototype.i_=function(t){return Gu(t,this.settings.methodName,this.settings.g_||!1,this.path,this.settings.r_)},t.prototype.contains=function(t){return void 0!==this.We.find((function(e){return t.T(e)}))||void 0!==this.fieldTransforms.find((function(e){return t.T(e.field)}))},t.prototype.m_=function(){if(this.path)for(var t=0;t<this.path.length;t++)this.I_(this.path.get(t))},t.prototype.I_=function(t){if(0===t.length)throw this.i_("Document fields must not be empty")
if(xu(this.s_)&&Au.test(t))throw this.i_('Document fields cannot begin and end with "__"')},t}(),ku=function(){function t(t,e,n){this.U=t,this.ignoreUndefinedProperties=e,this.serializer=n||uu(t)}return t.prototype.P_=function(t,e,n,r){return void 0===r&&(r=!1),new Lu({s_:t,methodName:e,r_:n,path:D.P(),o_:!1,g_:r},this.U,this.serializer,this.ignoreUndefinedProperties)},t}()
function Ru(t,e,n,r,i,o){void 0===o&&(o={})
var s=t.P_(o.merge||o.mergeFields?2:0,e,n,i)
Fu("Data must be an object, but it was:",s,r)
var u,a,c=Vu(r,s)
if(o.merge)u=new an(s.We),a=s.fieldTransforms
else if(o.mergeFields){for(var h=[],p=0,d=o.mergeFields;p<d.length;p++){var v=d[p],y=void 0
if(v instanceof pu)y=v.t_
else{if("string"!=typeof v)throw w()
y=qu(e,v,n)}if(!s.contains(y))throw new l(f.INVALID_ARGUMENT,"Field '"+y+"' is specified in your field mask but missing from your input data.")
Bu(h,y)||h.push(y)}u=new an(h),a=s.fieldTransforms.filter((function(t){return u.Ye(t.field)}))}else u=null,a=s.fieldTransforms
return new Su(new Sn(c),u,a)}function Ou(t,e,n,r){var i=t.P_(1,e,n)
Fu("Data must be an object, but it was:",i,r)
var o=[],s=new Dn
E(r,(function(t,r){var u=qu(e,t,n),a=i.A_(u)
if(r instanceof gu||r instanceof Tu&&r.l_ instanceof gu)o.push(u)
else{var c=Uu(r,a)
null!=c&&(o.push(u),s.set(u,c))}}))
var u=new an(o)
return new Du(s.Xe(),u,i.fieldTransforms)}function Pu(t,e,n,r,i,o){var s=t.P_(1,e,n),u=[ju(e,r,n)],a=[i]
if(o.length%2!=0)throw new l(f.INVALID_ARGUMENT,"Function "+e+"() needs to be called with an even number of arguments that alternate between field names and values.")
for(var c=0;c<o.length;c+=2)u.push(ju(e,o[c])),a.push(o[c+1])
for(var h=[],p=new Dn,d=u.length-1;d>=0;--d)if(!Bu(h,u[d])){var v=u[d],y=a[d],g=s.A_(v)
if(y instanceof gu||y instanceof Tu&&y.l_ instanceof gu)h.push(v)
else{var m=Uu(y,g)
null!=m&&(h.push(v),p.set(v,m))}}var w=new an(h)
return new Du(p.Xe(),w,s.fieldTransforms)}function Cu(t,e,n,r){return void 0===r&&(r=!1),Uu(n,t.P_(r?4:3,e))}function Uu(t,e){if(t instanceof Tu&&(t=t.l_),Mu(t))return Fu("Unsupported field value:",e,t),Vu(t,e)
if(t instanceof yu)return function(t,e){if(!xu(e.s_))throw e.i_(t.e_+"() can only be used with update() and set()")
if(!e.path)throw e.i_(t.e_+"() is not currently supported inside arrays")
var n=t.n_(e)
n&&e.fieldTransforms.push(n)}(t,e),null
if(e.path&&e.We.push(e.path),t instanceof Array){if(e.settings.o_&&4!==e.s_)throw e.i_("Nested arrays are not supported")
return function(t,e){for(var n=[],r=0,i=0,o=t;i<o.length;i++){var s=Uu(o[i],e.R_(r))
null==s&&(s={nullValue:"NULL_VALUE"}),n.push(s),r++}return{arrayValue:{values:n}}}(t,e)}return function(t,e){if(null===t)return{nullValue:"NULL_VALUE"}
if("number"==typeof t)return be(e.serializer,t)
if("boolean"==typeof t)return{booleanValue:t}
if("string"==typeof t)return{stringValue:t}
if(t instanceof Date){var n=at.fromDate(t)
return{timestampValue:_e(e.serializer,n)}}if(t instanceof at){var r=new at(t.seconds,1e3*Math.floor(t.nanoseconds/1e3))
return{timestampValue:_e(e.serializer,r)}}if(t instanceof Eu)return{geoPointValue:{latitude:t.latitude,longitude:t.longitude}}
if(t instanceof et)return{bytesValue:Ie(e.serializer,t.q)}
if(t instanceof Nu){var i=e.U,o=t.__
if(!o.isEqual(i))throw e.i_("Document reference is for database "+o.projectId+"/"+o.database+" but should be for database "+i.projectId+"/"+i.database)
return{referenceValue:Ae(t.__||e.U,t.f_.path)}}if(void 0===t&&e.ignoreUndefinedProperties)return null
throw e.i_("Unsupported field value: "+G(t))}(t,e)}function Vu(t,e){var n={}
return T(t)?e.path&&e.path.length>0&&e.We.push(e.path):E(t,(function(t,r){var i=Uu(r,e.E_(t))
null!=i&&(n[t]=i)})),{mapValue:{fields:n}}}function Mu(t){return!("object"!=r(t)||null===t||t instanceof Array||t instanceof Date||t instanceof at||t instanceof Eu||t instanceof et||t instanceof Nu||t instanceof yu)}function Fu(t,e,n){if(!Mu(n)||!q(n)){var r=G(n)
throw"an object"===r?e.i_(t+" a custom object"):e.i_(t+" "+r)}}function ju(t,e,n){if(e instanceof pu)return e.t_
if("string"==typeof e)return qu(t,e)
throw Gu("Field path arguments must be of type string or FieldPath.",t,!1,void 0,n)}function qu(t,e,n){try{return function(t){if(t.search(vu)>=0)throw new l(f.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not contain '~', '*', '/', '[', or ']'")
try{return new(du.bind.apply(du,i.__spreadArrays([void 0],t.split("."))))}catch(e){throw new l(f.INVALID_ARGUMENT,"Invalid field path ("+t+"). Paths must not be empty, begin with '.', end with '.', or contain '..'")}}(e).t_}catch(e){throw Gu((r=e)instanceof Error?r.message:r.toString(),t,!1,void 0,n)}var r}function Gu(t,e,n,r,i){var o=r&&!r.m(),s=void 0!==i,u="Function "+e+"() called with invalid data"
n&&(u+=" (via `toFirestore()`)")
var a=""
return(o||s)&&(a+=" (found",o&&(a+=" in field "+r),s&&(a+=" in document "+i),a+=")"),new l(f.INVALID_ARGUMENT,(u+=". ")+t+a)}function Bu(t,e){return t.some((function(t){return t.isEqual(e)}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var zu=function(){function t(t){this.Ku=t,this.y_=new Map,this.mutations=[],this.V_=!1,this.p_=null,this.b_=new Set}return t.prototype.v_=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n=this
return i.__generator(this,(function(r){switch(r.label){case 0:if(this.S_(),this.mutations.length>0)throw new l(f.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.")
return[4,function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u,a
return i.__generator(this,(function(i){switch(i.label){case 0:return n=_(t),r=ke(n.serializer)+"/documents",o={documents:e.map((function(t){return Se(n.serializer,t)}))},[4,n.ku("BatchGetDocuments",r,o)]
case 1:return s=i.sent(),u=new Map,s.forEach((function(t){var e=function(t,e){return"found"in e?function(t,e){b(!!e.found),e.found.name,e.found.updateTime
var n=De(t,e.found.name),r=Te(e.found.updateTime),i=new Sn({mapValue:{fields:e.found.fields}})
return new kn(n,r,i,{})}(t,e):"missing"in e?function(t,e){b(!!e.missing),b(!!e.readTime)
var n=De(t,e.missing),r=Te(e.readTime)
return new Rn(n,r)}(t,e):w()}(n.serializer,t)
u.set(e.key.toString(),e)})),a=[],[2,(e.forEach((function(t){var e=u.get(t.toString())
b(!!e),a.push(e)})),a)]}}))}))}(this.Ku,t)]
case 1:return[2,((e=r.sent()).forEach((function(t){t instanceof Rn||t instanceof kn?n.D_(t):w()})),e)]}}))}))},t.prototype.set=function(t,e){this.write(e.w_(t,this.Ge(t))),this.b_.add(t.toString())},t.prototype.update=function(t,e){try{this.write(e.w_(t,this.C_(t)))}catch(t){this.p_=t}this.b_.add(t.toString())},t.prototype.delete=function(t){this.write([new An(t,this.Ge(t))]),this.b_.add(t.toString())},t.prototype.commit=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e=this
return i.__generator(this,(function(n){switch(n.label){case 0:if(this.S_(),this.p_)throw this.p_
return t=this.y_,this.mutations.forEach((function(e){t.delete(e.key.toString())})),t.forEach((function(t,n){var r=x.D(n)
e.mutations.push(new Nn(r,e.Ge(r)))})),[4,function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o
return i.__generator(this,(function(i){switch(i.label){case 0:return n=_(t),r=ke(n.serializer)+"/documents",o={writes:e.map((function(t){return Pe(n.serializer,t)}))},[4,n.$u("Commit",r,o)]
case 1:return i.sent(),[2]}}))}))}(this.Ku,this.mutations)]
case 1:return n.sent(),this.V_=!0,[2]}}))}))},t.prototype.D_=function(t){var e
if(t instanceof kn)e=t.version
else{if(!(t instanceof Rn))throw w()
e=ct.min()}var n=this.y_.get(t.key.toString())
if(n){if(!e.isEqual(n))throw new l(f.ABORTED,"Document version changed between two reads.")}else this.y_.set(t.key.toString(),e)},t.prototype.Ge=function(t){var e=this.y_.get(t.toString())
return!this.b_.has(t.toString())&&e?fn.updateTime(e):fn.ze()},t.prototype.C_=function(t){var e=this.y_.get(t.toString())
if(!this.b_.has(t.toString())&&e){if(e.isEqual(ct.min()))throw new l(f.INVALID_ARGUMENT,"Can't update a document that doesn't exist.")
return fn.updateTime(e)}return fn.exists(!0)},t.prototype.write=function(t){this.S_(),this.mutations=this.mutations.concat(t)},t.prototype.S_=function(){},t}(),Ku=function(){function t(t,e,n,r){this.cs=t,this.Ku=e,this.updateFunction=n,this.ls=r,this.N_=5,this.ys=new vr(this.cs,"transaction_retry")}return t.prototype.run=function(){this.F_()},t.prototype.F_=function(){var t=this
this.ys.gn((function(){return i.__awaiter(t,void 0,void 0,(function(){var t,e,n=this
return i.__generator(this,(function(r){return t=new zu(this.Ku),(e=this.x_(t))&&e.then((function(e){n.cs.ws((function(){return t.commit().then((function(){n.ls.resolve(e)})).catch((function(t){n.k_(t)}))}))})).catch((function(t){n.k_(t)})),[2]}))}))}))},t.prototype.x_=function(t){try{var e=this.updateFunction(t)
return!ht(e)&&e.catch&&e.then?e:(this.ls.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.ls.reject(t),null}},t.prototype.k_=function(t){var e=this
this.N_>0&&this.M_(t)?(this.N_-=1,this.cs.ws((function(){return e.F_(),Promise.resolve()}))):this.ls.reject(t)},t.prototype.M_=function(t){if("FirebaseError"===t.name){var e=t.code
return"aborted"===e||"failed-precondition"===e||!It(e)}return!1},t}(),Wu=function(){function t(t,e){this.credentials=t,this.cs=e,this.clientId=Y.k(),this.O_=new dr}return t.prototype.start=function(t,e,n,r){var o=this
this.L_(),this.bl=t
var s=new dr,u=!1
return this.credentials.Hc((function(t){if(!u)return u=!0,v("FirestoreClient","Initializing. user=",t.uid),o.B_(e,n,r,t,s).then(o.O_.resolve,o.O_.reject)
o.cs.Cs((function(){return function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r
return i.__generator(this,(function(i){switch(i.label){case 0:return(n=_(t)).cs.xs(),v("RemoteStore","RemoteStore received new credentials"),r=Jo(n),n.Yu.add(3),[4,Bo(n)]
case 1:return i.sent(),r&&n.th.set("Unknown"),[4,n.Gu.Jl(e)]
case 2:return i.sent(),n.Yu.delete(3),[4,Go(n)]
case 3:return i.sent(),[2]}}))}))}(o.ph,t)}))})),this.cs.ws((function(){return o.O_.promise})),s.promise},t.prototype.enableNetwork=function(){var t=this
return this.L_(),this.cs.enqueue((function(){return t.persistence.tc(!0),function(t){var e=_(t)
return e.Yu.delete(0),Go(e)}(t.ph)}))},t.prototype.B_=function(t,e,n,r,o){return i.__awaiter(this,void 0,void 0,(function(){var s,u,a=this
return i.__generator(this,(function(c){switch(c.label){case 0:return c.trys.push([0,3,,4]),s={cs:this.cs,bl:this.bl,clientId:this.clientId,credentials:this.credentials,Wl:r,Dh:100,persistenceSettings:n},[4,t.initialize(s)]
case 1:return c.sent(),[4,e.initialize(t,s)]
case 2:return c.sent(),this.persistence=t.persistence,this.Sh=t.Sh,this.ju=t.ju,this.ql=t.ql,this.Ku=e.Ku,this.ph=e.ph,this.fi=e.fi,this.q_=e.bh,this.q_.Us=bs.bind(null,this.fi),this.q_.js=Is.bind(null,this.fi),this.persistence.Za((function(){return i.__awaiter(a,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return[4,this.terminate()]
case 1:return t.sent(),[2]}}))}))})),o.resolve(),[3,4]
case 3:if(u=c.sent(),o.reject(u),!this.U_(u))throw u
return[2,(console.warn("Error enabling offline persistence. Falling back to persistence disabled: "+u),this.B_(new cu,new fu,{jl:!1},r,o))]
case 4:return[2]}}))}))},t.prototype.U_=function(t){return"FirebaseError"===t.name?t.code===f.FAILED_PRECONDITION||t.code===f.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code},t.prototype.L_=function(){if(this.cs.ps)throw new l(f.FAILED_PRECONDITION,"The client has already been terminated.")},t.prototype.disableNetwork=function(){var t=this
return this.L_(),this.cs.enqueue((function(){return t.persistence.tc(!1),function(t){return i.__awaiter(this,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){switch(n.label){case 0:return(e=_(t)).Yu.add(0),[4,Bo(e)]
case 1:return n.sent(),e.th.set("Offline"),[2]}}))}))}(t.ph)}))},t.prototype.terminate=function(){var t=this
this.cs.Ds()
var e=new dr
return this.cs.bs((function(){return i.__awaiter(t,void 0,void 0,(function(){var t,n
return i.__generator(this,(function(r){switch(r.label){case 0:return r.trys.push([0,4,,5]),this.ql&&this.ql.stop(),[4,zo(this.ph)]
case 1:return r.sent(),[4,this.Sh.Di()]
case 2:return r.sent(),[4,this.persistence.Di()]
case 3:return r.sent(),this.credentials.Yc(),e.resolve(),[3,5]
case 4:return t=r.sent(),n=Lr(t,"Failed to shutdown persistence"),e.reject(n),[3,5]
case 5:return[2]}}))}))})),e.promise},t.prototype.waitForPendingWrites=function(){var t=this
this.L_()
var e=new dr
return this.cs.ws((function(){return function(t,e){return i.__awaiter(this,void 0,void 0,(function(){var n,r,o,s,u
return i.__generator(this,(function(i){switch(i.label){case 0:Jo((n=_(t)).ph)||v("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled."),i.label=1
case 1:return i.trys.push([1,3,,4]),[4,function(t){var e=_(t)
return e.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(function(t){return e.Sr.qo(t)}))}(n.ju)]
case 2:return-1===(r=i.sent())?[2,void e.resolve()]:((o=n.Lh.get(r)||[]).push(e),n.Lh.set(r,o),[3,4])
case 3:return s=i.sent(),u=Lr(s,"Initialization of waitForPendingWrites() operation failed"),e.reject(u),[3,4]
case 4:return[2]}}))}))}(t.fi,e)})),e.promise},t.prototype.listen=function(t,e,n){var r=this
this.L_()
var i=new lu(n),o=new Mr(t,i,e)
return this.cs.ws((function(){return Or(r.q_,o)})),function(){i.Zl(),r.cs.ws((function(){return Pr(r.q_,o)}))}},t.prototype.Q_=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n=this
return i.__generator(this,(function(r){switch(r.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return r.sent(),e=new dr,[2,(this.cs.ws((function(){return function(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s
return i.__generator(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,function(t,e){var n=_(t)
return n.persistence.runTransaction("read document","readonly",(function(t){return n.Cc.Cr(t,e)}))}(t,e)]
case 1:return(r=i.sent())instanceof kn?n.resolve(r):r instanceof Rn?n.resolve(null):n.reject(new l(f.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)")),[3,3]
case 2:return o=i.sent(),s=Lr(o,"Failed to get document '"+e+" from cache"),n.reject(s),[3,3]
case 3:return[2]}}))}))}(n.ju,t,e)})),e.promise)]}}))}))},t.prototype.W_=function(t,e){return void 0===e&&(e={}),i.__awaiter(this,void 0,void 0,(function(){var n,r=this
return i.__generator(this,(function(i){switch(i.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return i.sent(),n=new dr,[2,(this.cs.ws((function(){return function(t,e,n,r,i){var o=new lu({next:function(o){e.ws((function(){return Pr(t,s)}))
var u=o.docs.has(n)
!u&&o.fromCache?i.reject(new l(f.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&o.fromCache&&r&&"server"===r.source?i.reject(new l(f.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(o)},error:function(t){return i.reject(t)}}),s=new Mr(Un(n.path),o,{includeMetadataChanges:!0,Xs:!0})
return Or(t,s)}(r.q_,r.cs,t,e,n)})),n.promise)]}}))}))},t.prototype.j_=function(t){return i.__awaiter(this,void 0,void 0,(function(){var e,n=this
return i.__generator(this,(function(r){switch(r.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return r.sent(),e=new dr,[2,(this.cs.ws((function(){return function(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s,u,a,c
return i.__generator(this,(function(i){switch(i.label){case 0:return i.trys.push([0,2,,3]),[4,To(t,e,!0)]
case 1:return r=i.sent(),o=new ys(e,r.Fc),s=o.wh(r.documents),u=o.yr(s,!1),n.resolve(u.snapshot),[3,3]
case 2:return a=i.sent(),c=Lr(a,"Failed to execute query '"+e+" against cache"),n.reject(c),[3,3]
case 3:return[2]}}))}))}(n.ju,t,e)})),e.promise)]}}))}))},t.prototype.K_=function(t,e){return void 0===e&&(e={}),i.__awaiter(this,void 0,void 0,(function(){var n,r=this
return i.__generator(this,(function(i){switch(i.label){case 0:return this.L_(),[4,this.O_.promise]
case 1:return i.sent(),n=new dr,[2,(this.cs.ws((function(){return function(t,e,n,r,i){var o=new lu({next:function(n){e.ws((function(){return Pr(t,s)})),n.fromCache&&"server"===r.source?i.reject(new l(f.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:function(t){return i.reject(t)}}),s=new Mr(n,o,{includeMetadataChanges:!0,Xs:!0})
return Or(t,s)}(r.q_,r.cs,t,e,n)})),n.promise)]}}))}))},t.prototype.write=function(t){var e=this
this.L_()
var n=new dr
return this.cs.ws((function(){return function(t,e,n){return i.__awaiter(this,void 0,void 0,(function(){var r,o,s,u
return i.__generator(this,(function(i){switch(i.label){case 0:r=Hs(t),i.label=1
case 1:return i.trys.push([1,5,,6]),[4,function(t,e){var n,r=_(t),i=at.now(),o=e.reduce((function(t,e){return t.add(e.key)}),Ut())
return r.persistence.runTransaction("Locally write mutations","readwrite",(function(t){return r.Cc.kr(t,o).next((function(o){n=o
for(var s=[],u=0,a=e;u<a.length;u++){var c=a[u],h=yn(c,n.get(c.key))
null!=h&&s.push(new bn(c.key,h,xn(h.proto.mapValue),fn.exists(!0)))}return r.Sr.ko(t,i,s,e)}))})).then((function(t){var e=t.lr(n)
return{batchId:t.batchId,wr:e}}))}(r.ju,e)]
case 2:return o=i.sent(),r.Sh.xi(o.batchId),function(t,e,n){var r=t.Oh[t.currentUser.ti()]
r||(r=new Tt(J)),r=r.ot(e,n),t.Oh[t.currentUser.ti()]=r}(r,o.batchId,n),[4,Cs(r,o.wr)]
case 3:return i.sent(),[4,is(r.ph)]
case 4:return i.sent(),[3,6]
case 5:return s=i.sent(),u=Lr(s,"Failed to persist write"),n.reject(u),[3,6]
case 6:return[2]}}))}))}(e.fi,t,n)})),n.promise},t.prototype.U=function(){return this.bl.U},t.prototype.G_=function(t){var e=this
this.L_()
var n=new lu(t)
return this.cs.ws((function(){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2,function(t,e){_(t).qs.add(e),e.next()}(this.q_,n)]}))}))})),function(){n.Zl(),e.cs.ws((function(){return i.__awaiter(e,void 0,void 0,(function(){return i.__generator(this,(function(t){return[2,function(t,e){_(t).qs.delete(e)}(this.q_,n)]}))}))}))}},Object.defineProperty(t.prototype,"z_",{get:function(){return this.cs.ps},enumerable:!1,configurable:!0}),t.prototype.transaction=function(t){var e=this
this.L_()
var n=new dr
return this.cs.ws((function(){return new Ku(e.cs,e.Ku,t,n).run(),Promise.resolve()})),n.promise},t}()

;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hu(t){return function(t,e){if("object"!=r(t)||null===t)return!1
for(var n=t,i=0,o=["next","error","complete"];i<o.length;i++){var s=o[i]
if(s in n&&"function"==typeof n[s])return!0}return!1}(t)}var Qu=function(){function t(t,e,n,r,i){this.U=t,this.timestampsInSnapshots=e,this.H_=n,this.Y_=r,this.J_=i}return t.prototype.X_=function(t){switch(te(t)){case 0:return null
case 1:return t.booleanValue
case 2:return ue(t.integerValue||t.doubleValue)
case 3:return this.Z_(t.timestampValue)
case 4:return this.tf(t)
case 5:return t.stringValue
case 6:return this.J_(ae(t.bytesValue))
case 7:return this.ef(t.referenceValue)
case 8:return this.nf(t.geoPointValue)
case 9:return this.sf(t.arrayValue)
case 10:return this.if(t.mapValue)
default:throw w()}},t.prototype.if=function(t){var e=this,n={}
return E(t.fields||{},(function(t,r){n[t]=e.X_(r)})),n},t.prototype.nf=function(t){return new Eu(ue(t.latitude),ue(t.longitude))},t.prototype.sf=function(t){var e=this
return(t.values||[]).map((function(t){return e.X_(t)}))},t.prototype.tf=function(t){switch(this.H_){case"previous":var e=function t(e){var n=e.mapValue.fields.__previous_value__
return Jt(n)?t(n):n}(t)
return null==e?null:this.X_(e)
case"estimate":return this.Z_($t(t))
default:return null}},t.prototype.Z_=function(t){var e=se(t),n=new at(e.seconds,e.nanos)
return this.timestampsInSnapshots?n:n.toDate()},t.prototype.ef=function(t){var e=N.g(t)
b(Qe(e))
var n=new st(e.get(1),e.get(3)),r=new x(e.u(5))
return n.isEqual(this.U)||y("Document "+r+" contains a document reference within a different database ("+n.projectId+"/"+n.database+") which is not supported. It will be treated as a reference in the current database ("+this.U.projectId+"/"+this.U.database+") instead."),this.Y_(r)},t}(),Xu=ui.ho,Yu=function(){function t(t){var e,n,r,i,o
if(void 0===t.host){if(void 0!==t.ssl)throw new l(f.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set")
this.host="firestore.googleapis.com",this.ssl=!0}else U("settings","non-empty string","host",t.host),this.host=t.host,V("settings","boolean","ssl",t.ssl),this.ssl=null===(e=t.ssl)||void 0===e||e
if(z("settings",t,["host","ssl","credentials","timestampsInSnapshots","cacheSizeBytes","experimentalForceLongPolling","experimentalAutoDetectLongPolling","ignoreUndefinedProperties"]),V("settings","object","credentials",t.credentials),this.credentials=t.credentials,V("settings","boolean","timestampsInSnapshots",t.timestampsInSnapshots),V("settings","boolean","ignoreUndefinedProperties",t.ignoreUndefinedProperties),!0===t.timestampsInSnapshots?y("The setting 'timestampsInSnapshots: true' is no longer required and should be removed."):!1===t.timestampsInSnapshots&&y("Support for 'timestampsInSnapshots: false' will be removed soon. You must update your code to handle Timestamp objects."),this.timestampsInSnapshots=null===(n=t.timestampsInSnapshots)||void 0===n||n,this.ignoreUndefinedProperties=null!==(r=t.ignoreUndefinedProperties)&&void 0!==r&&r,V("settings","number","cacheSizeBytes",t.cacheSizeBytes),void 0===t.cacheSizeBytes)this.cacheSizeBytes=ui._o
else{if(t.cacheSizeBytes!==Xu&&t.cacheSizeBytes<ui.lo)throw new l(f.INVALID_ARGUMENT,"cacheSizeBytes must be at least "+ui.lo)
this.cacheSizeBytes=t.cacheSizeBytes}V("settings","boolean","experimentalForceLongPolling",t.experimentalForceLongPolling),this.experimentalForceLongPolling=null!==(i=t.experimentalForceLongPolling)&&void 0!==i&&i,V("settings","boolean","experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalAutoDetectLongPolling=null!==(o=t.experimentalAutoDetectLongPolling)&&void 0!==o&&o,function(t,e,n,r){if(!0===e&&!0===r)throw new l(f.INVALID_ARGUMENT,"experimentalForceLongPolling and experimentalAutoDetectLongPolling cannot be used together.")}(0,t.experimentalForceLongPolling,0,t.experimentalAutoDetectLongPolling)}return t.prototype.isEqual=function(t){return this.host===t.host&&this.ssl===t.ssl&&this.timestampsInSnapshots===t.timestampsInSnapshots&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties},t}(),Ju=function(){function t(e,n,o,s){var u=this
if(void 0===o&&(o=new cu),void 0===s&&(s=new fu),this.rf=o,this.af=s,this.cf=null,this.uf=new xr,this.INTERNAL={delete:function(){return i.__awaiter(u,void 0,void 0,(function(){return i.__generator(this,(function(t){switch(t.label){case 0:return this.hf(),[4,this.lf.terminate()]
case 1:return t.sent(),[2]}}))}))}},"object"==r(e.options)){var a=e
this.cf=a,this.__=t._f(a),this.ff=a.name,this.df=new Oo(n)}else{var c=e
if(!c.projectId)throw new l(f.INVALID_ARGUMENT,"Must provide projectId")
this.__=new st(c.projectId,c.database),this.ff="[DEFAULT]",this.df=new Ro}this.wf=new Yu({})}return Object.defineProperty(t.prototype,"mf",{get:function(){return this.Tf||(this.Tf=new ku(this.__,this.wf.ignoreUndefinedProperties)),this.Tf},enumerable:!1,configurable:!0}),t.prototype.settings=function(t){k("Firestore.settings",arguments,1),P("Firestore.settings","object",1,t),t.merge&&delete(t=Object.assign(Object.assign({},this.wf),t)).merge
var e=new Yu(t)
if(this.lf&&!this.wf.isEqual(e))throw new l(f.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only call settings() before calling any other methods on a Firestore object.")
this.wf=e,void 0!==e.credentials&&(this.df=function(t){if(!t)return new Ro
switch(t.type){case"gapi":var e=t.client
return b(!("object"!=r(e)||null===e||!e.auth||!e.auth.getAuthHeaderValueForFirstParty)),new Co(e,t.sessionIndex||"0")
case"provider":return t.client
default:throw new l(f.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(e.credentials))},t.prototype.enableNetwork=function(){return this.hf(),this.lf.enableNetwork()},t.prototype.disableNetwork=function(){return this.hf(),this.lf.disableNetwork()},t.prototype.enablePersistence=function(t){var e,n
if(this.lf)throw new l(f.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only call enablePersistence() before calling any other methods on a Firestore object.")
var r=!1,i=!1
if(t&&(void 0!==t.experimentalTabSynchronization&&y("The 'experimentalTabSynchronization' setting will be removed. Use 'synchronizeTabs' instead."),r=null!==(n=null!==(e=t.synchronizeTabs)&&void 0!==e?e:t.experimentalTabSynchronization)&&void 0!==n&&n,i=!!t.experimentalForceOwningTab&&t.experimentalForceOwningTab,r&&i))throw new l(f.INVALID_ARGUMENT,"The 'experimentalForceOwningTab' setting cannot be used with 'synchronizeTabs'.")
return this.Ef(this.rf,this.af,{jl:!0,cacheSizeBytes:this.wf.cacheSizeBytes,synchronizeTabs:r,ka:i})},t.prototype.clearPersistence=function(){return i.__awaiter(this,void 0,void 0,(function(){var t,e=this
return i.__generator(this,(function(n){if(void 0!==this.lf&&!this.lf.z_)throw new l(f.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.")
return t=new dr,[2,(this.uf.bs((function(){return i.__awaiter(e,void 0,void 0,(function(){var e
return i.__generator(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),[4,this.rf.clearPersistence(this.__,this.ff)]
case 1:return n.sent(),t.resolve(),[3,3]
case 2:return e=n.sent(),t.reject(e),[3,3]
case 3:return[2]}}))}))})),t.promise)]}))}))},t.prototype.terminate=function(){return this.app._removeServiceInstance("firestore"),this.INTERNAL.delete()},Object.defineProperty(t.prototype,"If",{get:function(){return this.hf(),this.lf.z_},enumerable:!1,configurable:!0}),t.prototype.waitForPendingWrites=function(){return this.hf(),this.lf.waitForPendingWrites()},t.prototype.onSnapshotsInSync=function(t){if(this.hf(),Hu(t))return this.lf.G_(t)
P("Firestore.onSnapshotsInSync","function",1,t)
var e={next:t}
return this.lf.G_(e)},t.prototype.hf=function(){return this.lf||this.Ef(new cu,new fu,{jl:!1}),this.lf},t.prototype.Af=function(){return new ot(this.__,this.ff,this.wf.host,this.wf.ssl,this.wf.experimentalForceLongPolling,this.wf.experimentalAutoDetectLongPolling)},t.prototype.Ef=function(t,e,n){var r=this.Af()
return this.lf=new Wu(this.df,this.uf),this.lf.start(r,t,e,n)},t._f=function(t){if(e=t.options,!Object.prototype.hasOwnProperty.call(e,"projectId"))throw new l(f.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.')
var e,n=t.options.projectId
if(!n||"string"!=typeof n)throw new l(f.INVALID_ARGUMENT,"projectId must be a string in FirebaseApp.options")
return new st(n)},Object.defineProperty(t.prototype,"app",{get:function(){if(!this.cf)throw new l(f.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available")
return this.cf},enumerable:!1,configurable:!0}),t.prototype.collection=function(t){return k("Firestore.collection",arguments,1),P("Firestore.collection","non-empty string",1,t),this.hf(),new la(N.g(t),this,null)},t.prototype.doc=function(t){return k("Firestore.doc",arguments,1),P("Firestore.doc","non-empty string",1,t),this.hf(),ta.Rf(N.g(t),this,null)},t.prototype.collectionGroup=function(t){if(k("Firestore.collectionGroup",arguments,1),P("Firestore.collectionGroup","non-empty string",1,t),t.indexOf("/")>=0)throw new l(f.INVALID_ARGUMENT,"Invalid collection ID '"+t+"' passed to function Firestore.collectionGroup(). Collection IDs must not contain '/'.")
return this.hf(),new ha(function(t){return new Pn(N.P(),t)}(t),this,null)},t.prototype.runTransaction=function(t){var e=this
return k("Firestore.runTransaction",arguments,1),P("Firestore.runTransaction","function",1,t),this.hf().transaction((function(n){return t(new $u(e,n))}))},t.prototype.batch=function(){return this.hf(),new Zu(this)},Object.defineProperty(t,"logLevel",{get:function(){switch(d()){case s.LogLevel.DEBUG:return"debug"
case s.LogLevel.ERROR:return"error"
case s.LogLevel.SILENT:return"silent"
case s.LogLevel.WARN:return"warn"
case s.LogLevel.INFO:return"info"
case s.LogLevel.VERBOSE:return"verbose"
default:return"error"}},enumerable:!1,configurable:!0}),t.setLogLevel=function(t){var e
k("Firestore.setLogLevel",arguments,1),F("setLogLevel",["debug","error","silent","warn","info","verbose"],1,t),e=t,p.setLogLevel(e)},t.prototype.gf=function(){return this.wf.timestampsInSnapshots},t.prototype.Pf=function(){return this.wf},t}(),$u=function(){function t(t,e){this.yf=t,this.Vf=e}return t.prototype.get=function(t){var e=this
k("Transaction.get",arguments,1)
var n=ya("Transaction.get",t,this.yf)
return this.Vf.v_([n.f_]).then((function(t){if(!t||1!==t.length)return w()
var r=t[0]
if(r instanceof Rn)return new na(e.yf,n.f_,null,!1,!1,n.d_)
if(r instanceof kn)return new na(e.yf,n.f_,r,!1,!1,n.d_)
throw w()}))},t.prototype.set=function(t,e,n){O("Transaction.set",arguments,2,3)
var r=ya("Transaction.set",t,this.yf)
n=pa("Transaction.set",n)
var i=ma(r.d_,e,n),o=Ru(this.yf.mf,"Transaction.set",r.f_,i,null!==r.d_,n)
return this.Vf.set(r.f_,o),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s]
return"string"==typeof e||e instanceof du?(R("Transaction.update",arguments,3),r=ya("Transaction.update",t,this.yf),i=Pu(this.yf.mf,"Transaction.update",r.f_,e,n,o)):(k("Transaction.update",arguments,2),r=ya("Transaction.update",t,this.yf),i=Ou(this.yf.mf,"Transaction.update",r.f_,e)),this.Vf.update(r.f_,i),this},t.prototype.delete=function(t){k("Transaction.delete",arguments,1)
var e=ya("Transaction.delete",t,this.yf)
return this.Vf.delete(e.f_),this},t}(),Zu=function(){function t(t){this.yf=t,this.pf=[],this.bf=!1}return t.prototype.set=function(t,e,n){O("WriteBatch.set",arguments,2,3),this.vf()
var r=ya("WriteBatch.set",t,this.yf)
n=pa("WriteBatch.set",n)
var i=ma(r.d_,e,n),o=Ru(this.yf.mf,"WriteBatch.set",r.f_,i,null!==r.d_,n)
return this.pf=this.pf.concat(o.w_(r.f_,fn.ze())),this},t.prototype.update=function(t,e,n){for(var r,i,o=[],s=3;s<arguments.length;s++)o[s-3]=arguments[s]
return this.vf(),"string"==typeof e||e instanceof du?(R("WriteBatch.update",arguments,3),r=ya("WriteBatch.update",t,this.yf),i=Pu(this.yf.mf,"WriteBatch.update",r.f_,e,n,o)):(k("WriteBatch.update",arguments,2),r=ya("WriteBatch.update",t,this.yf),i=Ou(this.yf.mf,"WriteBatch.update",r.f_,e)),this.pf=this.pf.concat(i.w_(r.f_,fn.exists(!0))),this},t.prototype.delete=function(t){k("WriteBatch.delete",arguments,1),this.vf()
var e=ya("WriteBatch.delete",t,this.yf)
return this.pf=this.pf.concat(new An(e.f_,fn.ze())),this},t.prototype.commit=function(){return this.vf(),this.bf=!0,this.pf.length>0?this.yf.hf().write(this.pf):Promise.resolve()},t.prototype.vf=function(){if(this.bf)throw new l(f.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")},t}(),ta=function(t){function e(e,n,r){var i=this
return(i=t.call(this,n.__,e,r)||this).f_=e,i.firestore=n,i.d_=r,i.lf=i.firestore.hf(),i}return i.__extends(e,t),e.Rf=function(t,n,r){if(t.length%2!=0)throw new l(f.INVALID_ARGUMENT,"Invalid document reference. Document references must have an even number of segments, but "+t.R()+" has "+t.length)
return new e(new x(t),n,r)},Object.defineProperty(e.prototype,"id",{get:function(){return this.f_.path._()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){return new la(this.f_.path.h(),this.firestore,this.d_)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this.f_.path.R()},enumerable:!1,configurable:!0}),e.prototype.collection=function(t){if(k("DocumentReference.collection",arguments,1),P("DocumentReference.collection","non-empty string",1,t),!t)throw new l(f.INVALID_ARGUMENT,"Must provide a non-empty collection name to collection()")
var e=N.g(t)
return new la(this.f_.path.child(e),this.firestore,null)},e.prototype.isEqual=function(t){if(!(t instanceof e))throw K("isEqual","DocumentReference",1,t)
return this.firestore===t.firestore&&this.f_.isEqual(t.f_)&&this.d_===t.d_},e.prototype.set=function(t,e){O("DocumentReference.set",arguments,1,2),e=pa("DocumentReference.set",e)
var n=ma(this.d_,t,e),r=Ru(this.firestore.mf,"DocumentReference.set",this.f_,n,null!==this.d_,e)
return this.lf.write(r.w_(this.f_,fn.ze()))},e.prototype.update=function(t,e){for(var n,r=[],i=2;i<arguments.length;i++)r[i-2]=arguments[i]
return"string"==typeof t||t instanceof du?(R("DocumentReference.update",arguments,2),n=Pu(this.firestore.mf,"DocumentReference.update",this.f_,t,e,r)):(k("DocumentReference.update",arguments,1),n=Ou(this.firestore.mf,"DocumentReference.update",this.f_,t)),this.lf.write(n.w_(this.f_,fn.exists(!0)))},e.prototype.delete=function(){return k("DocumentReference.delete",arguments,0),this.lf.write([new An(this.f_,fn.ze())])},e.prototype.onSnapshot=function(){for(var t,e,n,i=this,o=[],s=0;s<arguments.length;s++)o[s]=arguments[s]
O("DocumentReference.onSnapshot",arguments,1,4)
var u={includeMetadataChanges:!1},a=0
"object"!=r(o[a])||Hu(o[a])||(z("DocumentReference.onSnapshot",u=o[a],["includeMetadataChanges"]),V("DocumentReference.onSnapshot","boolean","includeMetadataChanges",u.includeMetadataChanges),a++)
var c={includeMetadataChanges:u.includeMetadataChanges}
if(Hu(o[a])){var h=o[a]
o[a]=null===(t=h.next)||void 0===t?void 0:t.bind(h),o[a+1]=null===(e=h.error)||void 0===e?void 0:e.bind(h),o[a+2]=null===(n=h.complete)||void 0===n?void 0:n.bind(h)}else P("DocumentReference.onSnapshot","function",a,o[a]),C("DocumentReference.onSnapshot","function",a+1,o[a+1]),C("DocumentReference.onSnapshot","function",a+2,o[a+2])
var f={next:function(t){o[a]&&o[a](i.Sf(t))},error:o[a+1],complete:o[a+2]}
return this.lf.listen(Un(this.f_.path),c,f)},e.prototype.get=function(t){var e=this
O("DocumentReference.get",arguments,0,1),va("DocumentReference.get",t)
var n=this.firestore.hf()
return t&&"cache"===t.source?n.Q_(this.f_).then((function(t){return new na(e.firestore,e.f_,t,!0,t instanceof kn&&t.Je,e.d_)})):n.W_(this.f_,t).then((function(t){return e.Sf(t)}))},e.prototype.withConverter=function(t){return new e(this.f_,this.firestore,t)},e.prototype.Sf=function(t){var e=t.docs.get(this.f_)
return new na(this.firestore,this.f_,e,t.fromCache,t.hasPendingWrites,this.d_)},e}(Nu),ea=function(){function t(t,e){this.hasPendingWrites=t,this.fromCache=e}return t.prototype.isEqual=function(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache},t}(),na=function(){function t(t,e,n,r,i,o){this.yf=t,this.f_=e,this.Df=n,this.Cf=r,this.Nf=i,this.d_=o}return t.prototype.data=function(t){var e=this
if(O("DocumentSnapshot.data",arguments,0,1),t=da("DocumentSnapshot.data",t),this.Df){if(this.d_){var n=new ra(this.yf,this.f_,this.Df,this.Cf,this.Nf,null)
return this.d_.fromFirestore(n,t)}return new Qu(this.yf.__,this.yf.gf(),t.serverTimestamps||"none",(function(t){return new ta(t,e.yf,null)}),(function(t){return new it(t)})).X_(this.Df.rn())}},t.prototype.get=function(t,e){var n=this
if(O("DocumentSnapshot.get",arguments,1,2),e=da("DocumentSnapshot.get",e),this.Df){var r=this.Df.data().field(ju("DocumentSnapshot.get",t,this.f_))
if(null!==r)return new Qu(this.yf.__,this.yf.gf(),e.serverTimestamps||"none",(function(t){return new ta(t,n.yf,n.d_)}),(function(t){return new it(t)})).X_(r)}},Object.defineProperty(t.prototype,"id",{get:function(){return this.f_.path._()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"ref",{get:function(){return new ta(this.f_,this.yf,this.d_)},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"exists",{get:function(){return null!==this.Df},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"metadata",{get:function(){return new ea(this.Nf,this.Cf)},enumerable:!1,configurable:!0}),t.prototype.isEqual=function(e){if(!(e instanceof t))throw K("isEqual","DocumentSnapshot",1,e)
return this.yf===e.yf&&this.Cf===e.Cf&&this.f_.isEqual(e.f_)&&(null===this.Df?null===e.Df:this.Df.isEqual(e.Df))&&this.d_===e.d_},t}(),ra=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.prototype.data=function(e){return t.prototype.data.call(this,e)},e}(na)

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ia(t,e,n,r,i,o,s){var u
if(i.p()){if("array-contains"===o||"array-contains-any"===o)throw new l(f.INVALID_ARGUMENT,"Invalid Query. You can't perform '"+o+"' queries on FieldPath.documentId().")
if("in"===o||"not-in"===o){ua(s,o)
for(var a=[],c=0,h=s;c<h.length;c++){var p=h[c]
a.push(sa(r,t,p))}u={arrayValue:{values:a}}}else u=sa(r,t,s)}else"in"!==o&&"not-in"!==o&&"array-contains-any"!==o||ua(s,o),u=Cu(n,e,s,"in"===o||"not-in"===o)
var d=$n.create(i,o,u)
return function(t,e){if(e.hn()){var n=jn(t)
if(null!==n&&!n.isEqual(e.field))throw new l(f.INVALID_ARGUMENT,"Invalid query. All where filters with an inequality (<, <=, >, or >=) must be on the same field. But you have inequality filters on '"+n.toString()+"' and '"+e.field.toString()+"'")
var r=Fn(t)
null!==r&&aa(t,e.field,r)}var i=function(t,e){for(var n=0,r=t.filters;n<r.length;n++){var i=r[n]
if(e.indexOf(i.op)>=0)return i.op}return null}(t,function(t){switch(t){case"!=":return["!=","not-in"]
case"array-contains":return["array-contains","array-contains-any","not-in"]
case"in":return["array-contains-any","in","not-in"]
case"array-contains-any":return["array-contains","array-contains-any","in","not-in"]
case"not-in":return["array-contains","array-contains-any","in","not-in","!="]
default:return[]}}(e.op))
if(null!==i)throw i===e.op?new l(f.INVALID_ARGUMENT,"Invalid query. You cannot use more than one '"+e.op.toString()+"' filter."):new l(f.INVALID_ARGUMENT,"Invalid query. You cannot use '"+e.op.toString()+"' filters with '"+i.toString()+"' filters.")}(t,d),d}function oa(t,e,n){if(null!==t.startAt)throw new l(f.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().")
if(null!==t.endAt)throw new l(f.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().")
var r=new fr(e,n)
return function(t,e){if(null===Fn(t)){var n=jn(t)
null!==n&&aa(t,n,e.field)}}(t,r),r}function sa(t,e,n){if("string"==typeof n){if(""===n)throw new l(f.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid document ID, but it was an empty string.")
if(!qn(e)&&-1!==n.indexOf("/"))throw new l(f.INVALID_ARGUMENT,"Invalid query. When querying a collection by FieldPath.documentId(), you must provide a plain document ID, but '"+n+"' contains a '/' character.")
var r=e.path.child(N.g(n))
if(!x.F(r))throw new l(f.INVALID_ARGUMENT,"Invalid query. When querying a collection group by FieldPath.documentId(), the value provided must result in a valid document path, but '"+r+"' is not because it has an odd number of segments ("+r.length+").")
return ce(t,new x(r))}if(n instanceof Nu)return ce(t,n.f_)
throw new l(f.INVALID_ARGUMENT,"Invalid query. When querying with FieldPath.documentId(), you must provide a valid string or a DocumentReference, but it was: "+G(n)+".")}function ua(t,e){if(!Array.isArray(t)||0===t.length)throw new l(f.INVALID_ARGUMENT,"Invalid Query. A non-empty array is required for '"+e.toString()+"' filters.")
if(t.length>10)throw new l(f.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters support a maximum of 10 elements in the value array.")
if("in"===e||"array-contains-any"===e){if(t.indexOf(null)>=0)throw new l(f.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'null' in the value array.")
if(t.filter((function(t){return Number.isNaN(t)})).length>0)throw new l(f.INVALID_ARGUMENT,"Invalid Query. '"+e.toString()+"' filters cannot contain 'NaN' in the value array.")}}function aa(t,e,n){if(!n.isEqual(e))throw new l(f.INVALID_ARGUMENT,"Invalid query. You have a where filter with an inequality (<, <=, >, or >=) on field '"+e.toString()+"' and so you must also use '"+e.toString()+"' as your first orderBy(), but your first orderBy() is on field '"+n.toString()+"' instead.")}function ca(t){if(Mn(t)&&0===t.on.length)throw new l(f.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}var ha=function(){function t(t,e,n){this.Ff=t,this.firestore=e,this.d_=n}return t.prototype.where=function(e,n,r){k("Query.where",arguments,3),B("Query.where",3,r)
var i=F("Query.where",["<","<=","==","!=",">=",">","array-contains","in","array-contains-any","not-in"],2,n),o=ju("Query.where",e),s=ia(this.Ff,"Query.where",this.firestore.mf,this.firestore.__,o,i,r)
return new t(function(t,e){var n=t.filters.concat([e])
return new Pn(t.path,t.collectionGroup,t.on.slice(),n,t.limit,t.an,t.startAt,t.endAt)}(this.Ff,s),this.firestore,this.d_)},t.prototype.orderBy=function(e,n){var r
if(O("Query.orderBy",arguments,1,2),C("Query.orderBy","non-empty string",2,n),void 0===n||"asc"===n)r="asc"
else{if("desc"!==n)throw new l(f.INVALID_ARGUMENT,"Function Query.orderBy() has unknown direction '"+n+"', expected 'asc' or 'desc'.")
r="desc"}var i=ju("Query.orderBy",e),o=oa(this.Ff,i,r)
return new t(function(t,e){var n=t.on.concat([e])
return new Pn(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.an,t.startAt,t.endAt)}(this.Ff,o),this.firestore,this.d_)},t.prototype.limit=function(e){return k("Query.limit",arguments,1),P("Query.limit","number",1,e),W("Query.limit",1,e),new t(zn(this.Ff,e,"F"),this.firestore,this.d_)},t.prototype.limitToLast=function(e){return k("Query.limitToLast",arguments,1),P("Query.limitToLast","number",1,e),W("Query.limitToLast",1,e),new t(zn(this.Ff,e,"L"),this.firestore,this.d_)},t.prototype.startAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
R("Query.startAt",arguments,1)
var i=this.xf("Query.startAt",e,n,!0)
return new t(Kn(this.Ff,i),this.firestore,this.d_)},t.prototype.startAfter=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
R("Query.startAfter",arguments,1)
var i=this.xf("Query.startAfter",e,n,!1)
return new t(Kn(this.Ff,i),this.firestore,this.d_)},t.prototype.endBefore=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
R("Query.endBefore",arguments,1)
var i=this.xf("Query.endBefore",e,n,!0)
return new t(Wn(this.Ff,i),this.firestore,this.d_)},t.prototype.endAt=function(e){for(var n=[],r=1;r<arguments.length;r++)n[r-1]=arguments[r]
R("Query.endAt",arguments,1)
var i=this.xf("Query.endAt",e,n,!1)
return new t(Wn(this.Ff,i),this.firestore,this.d_)},t.prototype.isEqual=function(e){if(!(e instanceof t))throw K("isEqual","Query",1,e)
return this.firestore===e.firestore&&Hn(this.Ff,e.Ff)&&this.d_===e.d_},t.prototype.withConverter=function(e){return new t(this.Ff,this.firestore,e)},t.prototype.xf=function(t,e,n,o){if(B(t,1,e),e instanceof na)return k(t,i.__spreadArrays([e],n),1),function(t,e,n,r,i){if(!r)throw new l(f.NOT_FOUND,"Can't use a DocumentSnapshot that doesn't exist for "+n+"().")
for(var o=[],s=0,u=Gn(t);s<u.length;s++){var a=u[s]
if(a.field.p())o.push(ce(e,r.key))
else{var c=r.field(a.field)
if(Jt(c))throw new l(f.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+a.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)')
if(null===c){var h=a.field.R()
throw new l(f.INVALID_ARGUMENT,"Invalid query. You are trying to start or end a query using a document for which the field '"+h+"' (used as the orderBy) does not exist.")}o.push(c)}}return new ur(o,i)}(this.Ff,this.firestore.__,t,e.Df,o)
var s=[e].concat(n)
return function(t,e,n,i,o,s){var u=t.on
if(o.length>u.length)throw new l(f.INVALID_ARGUMENT,"Too many arguments provided to "+i+"(). The number of arguments must be less than or equal to the number of orderBy() clauses")
for(var a=[],c=0;c<o.length;c++){var h=o[c]
if(u[c].field.p()){if("string"!=typeof h)throw new l(f.INVALID_ARGUMENT,"Invalid query. Expected a string for document ID in "+i+"(), but got a "+r(h))
if(!qn(t)&&-1!==h.indexOf("/"))throw new l(f.INVALID_ARGUMENT,"Invalid query. When querying a collection and ordering by FieldPath.documentId(), the value passed to "+i+"() must be a plain document ID, but '"+h+"' contains a slash.")
var p=t.path.child(N.g(h))
if(!x.F(p))throw new l(f.INVALID_ARGUMENT,"Invalid query. When querying a collection group and ordering by FieldPath.documentId(), the value passed to "+i+"() must result in a valid document path, but '"+p+"' is not because it contains an odd number of segments.")
var d=new x(p)
a.push(ce(e,d))}else{var v=Cu(n,i,h)
a.push(v)}}return new ur(a,s)}(this.Ff,this.firestore.__,this.firestore.mf,t,s,o)},t.prototype.onSnapshot=function(){for(var t,e,n,i=this,o=[],s=0;s<arguments.length;s++)o[s]=arguments[s]
O("Query.onSnapshot",arguments,1,4)
var u={},a=0
if("object"!=r(o[a])||Hu(o[a])||(z("Query.onSnapshot",u=o[a],["includeMetadataChanges"]),V("Query.onSnapshot","boolean","includeMetadataChanges",u.includeMetadataChanges),a++),Hu(o[a])){var c=o[a]
o[a]=null===(t=c.next)||void 0===t?void 0:t.bind(c),o[a+1]=null===(e=c.error)||void 0===e?void 0:e.bind(c),o[a+2]=null===(n=c.complete)||void 0===n?void 0:n.bind(c)}else P("Query.onSnapshot","function",a,o[a]),C("Query.onSnapshot","function",a+1,o[a+1]),C("Query.onSnapshot","function",a+2,o[a+2])
var h={next:function(t){o[a]&&o[a](new fa(i.firestore,i.Ff,t,i.d_))},error:o[a+1],complete:o[a+2]}
return ca(this.Ff),this.firestore.hf().listen(this.Ff,u,h)},t.prototype.get=function(t){var e=this
O("Query.get",arguments,0,1),va("Query.get",t),ca(this.Ff)
var n=this.firestore.hf()
return(t&&"cache"===t.source?n.j_(this.Ff):n.K_(this.Ff,t)).then((function(t){return new fa(e.firestore,e.Ff,t,e.d_)}))},t}(),fa=function(){function t(t,e,n,r){this.yf=t,this.$f=e,this.kf=n,this.d_=r,this.Mf=null,this.Of=null,this.metadata=new ea(n.hasPendingWrites,n.fromCache)}return Object.defineProperty(t.prototype,"docs",{get:function(){var t=[]
return this.forEach((function(e){return t.push(e)})),t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"empty",{get:function(){return this.kf.docs.m()},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"size",{get:function(){return this.kf.docs.size},enumerable:!1,configurable:!0}),t.prototype.forEach=function(t,e){var n=this
O("QuerySnapshot.forEach",arguments,1,2),P("QuerySnapshot.forEach","function",1,t),this.kf.docs.forEach((function(r){t.call(e,n.Lf(r,n.metadata.fromCache,n.kf.Wt.has(r.key)))}))},Object.defineProperty(t.prototype,"query",{get:function(){return new ha(this.$f,this.yf,this.d_)},enumerable:!1,configurable:!0}),t.prototype.docChanges=function(t){t&&(z("QuerySnapshot.docChanges",t,["includeMetadataChanges"]),V("QuerySnapshot.docChanges","boolean","includeMetadataChanges",t.includeMetadataChanges))
var e=!(!t||!t.includeMetadataChanges)
if(e&&this.kf.Kt)throw new l(f.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().")
return this.Mf&&this.Of===e||(this.Mf=function(t,e,n){if(t.Qt.m()){var r=0
return t.docChanges.map((function(e){var i=n(e.doc,t.fromCache,t.Wt.has(e.doc.key))
return e.doc,{type:"added",doc:i,oldIndex:-1,newIndex:r++}}))}var i=t.Qt
return t.docChanges.filter((function(t){return e||3!==t.type})).map((function(e){var r=n(e.doc,t.fromCache,t.Wt.has(e.doc.key)),o=-1,s=-1
return 0!==e.type&&(o=i.indexOf(e.doc.key),i=i.delete(e.doc.key)),1!==e.type&&(s=(i=i.add(e.doc)).indexOf(e.doc.key)),{type:ga(e.type),doc:r,oldIndex:o,newIndex:s}}))}(this.kf,e,this.Lf.bind(this)),this.Of=e),this.Mf},t.prototype.isEqual=function(e){if(!(e instanceof t))throw K("isEqual","QuerySnapshot",1,e)
return this.yf===e.yf&&Hn(this.$f,e.$f)&&this.kf.isEqual(e.kf)&&this.d_===e.d_},t.prototype.Lf=function(t,e,n){return new ra(this.yf,t.key,t,e,n,this.d_)},t}(),la=function(t){function e(e,n,r){var i=this
if((i=t.call(this,Un(e),n,r)||this).Bf=e,e.length%2!=1)throw new l(f.INVALID_ARGUMENT,"Invalid collection reference. Collection references must have an odd number of segments, but "+e.R()+" has "+e.length)
return i}return i.__extends(e,t),Object.defineProperty(e.prototype,"id",{get:function(){return this.Ff.path._()},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"parent",{get:function(){var t=this.Ff.path.h()
return t.m()?null:new ta(new x(t),this.firestore,null)},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"path",{get:function(){return this.Ff.path.R()},enumerable:!1,configurable:!0}),e.prototype.doc=function(t){O("CollectionReference.doc",arguments,0,1),0===arguments.length&&(t=Y.k()),P("CollectionReference.doc","non-empty string",1,t)
var e=N.g(t)
return ta.Rf(this.Ff.path.child(e),this.firestore,this.d_)},e.prototype.add=function(t){k("CollectionReference.add",arguments,1)
var e=this.d_?this.d_.toFirestore(t):t
P("CollectionReference.add","object",1,e)
var n=this.doc()
return new ta(n.f_,this.firestore,null).set(e).then((function(){return n}))},e.prototype.withConverter=function(t){return new e(this.Bf,this.firestore,t)},e}(ha)
function pa(t,e){if(void 0===e)return{merge:!1}
if(z(t,e,["merge","mergeFields"]),V(t,"boolean","merge",e.merge),function(t,e,n,r,i){void 0!==r&&function(t,e,n,r,i){if(!(r instanceof Array))throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires its "+e+" option to be an array, but it was: "+G(r))
for(var o=0;o<r.length;++o)if(!i(r[o]))throw new l(f.INVALID_ARGUMENT,"Function "+t+"() requires all "+e+" elements to be a string or a FieldPath, but the value at index "+o+" was: "+G(r[o]))}(t,"mergeFields",0,r,(function(t){return"string"==typeof t||t instanceof du}))}(t,0,0,e.mergeFields),void 0!==e.mergeFields&&void 0!==e.merge)throw new l(f.INVALID_ARGUMENT,"Invalid options passed to function "+t+'(): You cannot specify both "merge" and "mergeFields".')
return e}function da(t,e){return void 0===e?{}:(z(t,e,["serverTimestamps"]),M(t,0,"serverTimestamps",e.serverTimestamps,["estimate","previous","none"]),e)}function va(t,e){C(t,"object",1,e),e&&(z(t,e,["source"]),M(t,0,"source",e.source,["default","server","cache"]))}function ya(t,e,n){if(e instanceof Nu){if(e.firestore!==n)throw new l(f.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.")
return e}throw K(t,"DocumentReference",1,e)}function ga(t){switch(t){case 0:return"added"
case 2:case 3:return"modified"
case 1:return"removed"
default:return w()}}function ma(t,e,n){return t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var wa=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return i.__extends(e,t),e.serverTimestamp=function(){L("FieldValue.serverTimestamp",arguments)
var t=new wu("serverTimestamp")
return t.e_="FieldValue.serverTimestamp",new e(t)},e.delete=function(){L("FieldValue.delete",arguments)
var t=new gu("deleteField")
return t.e_="FieldValue.delete",new e(t)},e.arrayUnion=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
R("FieldValue.arrayUnion",arguments,1)
var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return R("arrayUnion()",arguments,1),new bu("arrayUnion",t)}.apply(void 0,t)
return r.e_="FieldValue.arrayUnion",new e(r)},e.arrayRemove=function(){for(var t=[],n=0;n<arguments.length;n++)t[n]=arguments[n]
R("FieldValue.arrayRemove",arguments,1)
var r=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e]
return R("arrayRemove()",arguments,1),new _u("arrayRemove",t)}.apply(void 0,t)
return r.e_="FieldValue.arrayRemove",new e(r)},e.increment=function(t){P("FieldValue.increment","number",1,t),k("FieldValue.increment",arguments,1)
var n=function(t){return new Iu("increment",t)}(t)
return n.e_="FieldValue.increment",new e(n)},e.prototype.isEqual=function(t){return this.l_.isEqual(t.l_)},e}(Tu),ba={Firestore:Ju,GeoPoint:Eu,Timestamp:at,Blob:it,Transaction:$u,WriteBatch:Zu,DocumentReference:ta,DocumentSnapshot:na,Query:ha,QueryDocumentSnapshot:ra,QuerySnapshot:fa,CollectionReference:la,FieldPath:du,FieldValue:wa,setLogLevel:Ju.setLogLevel,CACHE_SIZE_UNLIMITED:Xu}

;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){!function(t,e){t.INTERNAL.registerComponent(new c.Component("firestore",(function(t){return function(t,e){var n=new fu,r=new hu(n)
return new Ju(t,e,r,n)}(t.getProvider("app").getImmediate(),t.getProvider("auth-internal"))}),"PUBLIC").setServiceProps(Object.assign({},ba)))}(t),t.registerVersion("@firebase/firestore","1.18.0")}_a(h.default),e.__PRIVATE_registerFirestore=_a},28:function(t,e,n){"use strict"
function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */n.r(e),n.d(e,"ErrorCode",(function(){return er})),n.d(e,"EventType",(function(){return nr})),n.d(e,"WebChannel",(function(){return rr})),n.d(e,"XhrIo",(function(){return ir})),n.d(e,"createWebChannelTransport",(function(){return tr}))
var i=function(t,e){return(i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)}
function o(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0
if(n)return n.call(t)
if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}}
throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,u="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},a=a||{},c=u||self
function h(){}function f(t){var e=r(t)
return"object"!=e?e:t?Array.isArray(t)?"array":e:"null"}function l(t){var e=f(t)
return"array"==e||"object"==e&&"number"==typeof t.length}function p(t){var e=r(t)
return"object"==e&&null!=t||"function"==e}var d="closure_uid_"+(1e9*Math.random()>>>0),v=0
function y(t,e,n){return t.call.apply(t.bind,arguments)}function g(t,e,n){if(!t)throw Error()
if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2)
return function(){var n=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function m(t,e,n){return(m=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:g).apply(null,arguments)}function w(t,e){var n=Array.prototype.slice.call(arguments,1)
return function(){var e=n.slice()
return e.push.apply(e,arguments),t.apply(this,e)}}var b=Date.now
function _(t,e){function n(){}n.prototype=e.prototype,t.S=e.prototype,t.prototype=new n,t.prototype.constructor=t}function I(){this.j=this.j,this.i=this.i}I.prototype.j=!1,I.prototype.ja=function(){!this.j&&(this.j=!0,this.G(),0)&&function(t){Object.prototype.hasOwnProperty.call(t,d)&&t[d]||(t[d]=++v)}(this)},I.prototype.G=function(){if(this.i)for(;this.i.length;)this.i.shift()()}
var E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0)
for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n
return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,o=0;o<r;o++)o in i&&e.call(n,i[o],o,t)}
function A(t){return Array.prototype.concat.apply([],arguments)}function N(t){var e=t.length
if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r]
return n}return[]}function S(t){return/^[\s\xa0]*$/.test(t)}var D,x=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]}
function L(t,e){return-1!=t.indexOf(e)}function k(t,e){return t<e?-1:t>e?1:0}t:{var R=c.navigator
if(R){var O=R.userAgent
if(O){D=O
break t}}D=""}function P(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function C(t){var e={}
for(var n in t)e[n]=t[n]
return e}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function V(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n]
for(var o=0;o<U.length;o++)n=U[o],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function M(t){return M[" "](t),t}M[" "]=h
var F,j,q=L(D,"Opera"),G=L(D,"Trident")||L(D,"MSIE"),B=L(D,"Edge"),z=B||G,K=L(D,"Gecko")&&!(L(D.toLowerCase(),"webkit")&&!L(D,"Edge"))&&!(L(D,"Trident")||L(D,"MSIE"))&&!L(D,"Edge"),W=L(D.toLowerCase(),"webkit")&&!L(D,"Edge")
function H(){var t=c.document
return t?t.documentMode:void 0}t:{var Q="",X=(j=D,K?/rv:([^\);]+)(\)|;)/.exec(j):B?/Edge\/([\d\.]+)/.exec(j):G?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(j):W?/WebKit\/(\S+)/.exec(j):q?/(?:Version)[ \/]?(\S+)/.exec(j):void 0)
if(X&&(Q=X?X[1]:""),G){var Y=H()
if(null!=Y&&Y>parseFloat(Q)){F=String(Y)
break t}}F=Q}var J,$={}
function Z(t){return function(t,e){var n=$
return Object.prototype.hasOwnProperty.call(n,t)?n[t]:n[t]=e()}(t,(function(){for(var e=0,n=x(String(F)).split("."),r=x(String(t)).split("."),i=Math.max(n.length,r.length),o=0;0==e&&o<i;o++){var s=n[o]||"",u=r[o]||""
do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],u=/(\d*)(\D*)(.*)/.exec(u)||["","","",""],0==s[0].length&&0==u[0].length)break
e=k(0==s[1].length?0:parseInt(s[1],10),0==u[1].length?0:parseInt(u[1],10))||k(0==s[2].length,0==u[2].length)||k(s[2],u[2]),s=s[3],u=u[3]}while(0==e)}return 0<=e}))}c.document&&G?J=H()||parseInt(F,10)||void 0:J=void 0
var tt=J,et=!G||9<=Number(tt),nt=G&&!Z("9"),rt=function(){if(!c.addEventListener||!Object.defineProperty)return!1
var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{c.addEventListener("test",h,e),c.removeEventListener("test",h,e)}catch(t){}return t}()
function it(t,e){this.type=t,this.a=this.target=e,this.defaultPrevented=!1}function ot(t,e){if(it.call(this,t?t.type:""),this.relatedTarget=this.a=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.c=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.a=e,e=t.relatedTarget){if(K){t:{try{M(e.nodeName)
var i=!0
break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement)
this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:st[t.pointerType]||"",this.c=t,t.defaultPrevented&&this.b()}}it.prototype.b=function(){this.defaultPrevented=!0},_(ot,it)
var st={2:"touch",3:"pen",4:"mouse"}
ot.prototype.b=function(){ot.S.b.call(this)
var t=this.c
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,nt)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}}
var ut="closure_listenable_"+(1e6*Math.random()|0),at=0
function ct(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ca=i,this.key=++at,this.Y=this.Z=!1}function ht(t){t.Y=!0,t.listener=null,t.proxy=null,t.src=null,t.ca=null}function ft(t){this.src=t,this.a={},this.b=0}function lt(t,e){var n=e.type
if(n in t.a){var r,i=t.a[n],o=E(i,e);(r=0<=o)&&Array.prototype.splice.call(i,o,1),r&&(ht(e),0==t.a[n].length&&(delete t.a[n],t.b--))}}function pt(t,e,n,r){for(var i=0;i<t.length;++i){var o=t[i]
if(!o.Y&&o.listener==e&&o.capture==!!n&&o.ca==r)return i}return-1}ft.prototype.add=function(t,e,n,r,i){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var s=pt(t,e,r,i)
return-1<s?(e=t[s],n||(e.Z=!1)):((e=new ct(e,this.src,o,!!r,i)).Z=n,t.push(e)),e}
var dt="closure_lm_"+(1e6*Math.random()|0),vt={}
function yt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,o){if(Array.isArray(n)){for(var s=0;s<n.length;s++)t(e,n[s],r,i,o)
return null}return r=Tt(r),e&&e[ut]?e.wa(n,r,p(i)?!!i.capture:!!i,o):gt(e,n,r,!0,i,o)}(t,e,n,r,i)
if(Array.isArray(e)){for(var o=0;o<e.length;o++)yt(t,e[o],n,r,i)
return null}return n=Tt(n),t&&t[ut]?t.va(e,n,p(r)?!!r.capture:!!r,i):gt(t,e,n,!1,r,i)}function gt(t,e,n,r,i,o){if(!e)throw Error("Invalid event type")
var s=p(i)?!!i.capture:!!i
if(s&&!et)return null
var u=It(t)
if(u||(t[dt]=u=new ft(t)),(n=u.add(e,n,r,s,o)).proxy)return n
if(r=function(){var t=_t,e=et?function(n){return t.call(e.src,e.listener,n)}:function(n){if(!(n=t.call(e.src,e.listener,n)))return n}
return e}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)rt||(i=s),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i)
else if(t.attachEvent)t.attachEvent(wt(e.toString()),r)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(r)}return n}function mt(t){if("number"!=typeof t&&t&&!t.Y){var e=t.src
if(e&&e[ut])lt(e.c,t)
else{var n=t.type,r=t.proxy
e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(wt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=It(e))?(lt(n,t),0==n.b&&(n.src=null,e[dt]=null)):ht(t)}}}function wt(t){return t in vt?vt[t]:vt[t]="on"+t}function bt(t,e){var n=t.listener,r=t.ca||t.src
return t.Z&&mt(t),n.call(r,e)}function _t(t,e){if(t.Y)return!0
if(!et){if(!e)t:{e=["window","event"]
for(var n=c,r=0;r<e.length;r++)if(null==(n=n[e[r]])){e=null
break t}e=n}return bt(t,e=new ot(e,this))}return bt(t,new ot(e,this))}function It(t){return(t=t[dt])instanceof ft?t:null}var Et="__closure_events_fn_"+(1e9*Math.random()>>>0)
function Tt(t){return"function"==f(t)?t:(t[Et]||(t[Et]=function(e){return t.handleEvent(e)}),t[Et])}function At(){I.call(this),this.c=new ft(this),this.J=this,this.C=null}function Nt(t,e,n,r){if(!(e=t.c.a[String(e)]))return!0
e=e.concat()
for(var i=!0,o=0;o<e.length;++o){var s=e[o]
if(s&&!s.Y&&s.capture==n){var u=s.listener,a=s.ca||s.src
s.Z&&lt(t.c,s),i=!1!==u.call(a,r)&&i}}return i&&!r.defaultPrevented}_(At,I),At.prototype[ut]=!0,(s=At.prototype).addEventListener=function(t,e,n,r){yt(this,t,e,n,r)},s.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,o){if(Array.isArray(n))for(var s=0;s<n.length;s++)t(e,n[s],r,i,o)
else i=p(i)?!!i.capture:!!i,r=Tt(r),e&&e[ut]?(e=e.c,(n=String(n).toString())in e.a&&-1<(r=pt(s=e.a[n],r,i,o))&&(ht(s[r]),Array.prototype.splice.call(s,r,1),0==s.length&&(delete e.a[n],e.b--))):e&&(e=It(e))&&(n=e.a[n.toString()],e=-1,n&&(e=pt(n,r,i,o)),(r=-1<e?n[e]:null)&&mt(r))}(this,t,e,n,r)},s.dispatchEvent=function(t){var e,n=this.C
if(n)for(e=[];n;n=n.C)e.push(n)
n=this.J
var r=t.type||t
if("string"==typeof t)t=new it(t,n)
else if(t instanceof it)t.target=t.target||n
else{var i=t
V(t=new it(r,n),i)}if(i=!0,e)for(var o=e.length-1;0<=o;o--){var s=t.a=e[o]
i=Nt(s,r,!0,t)&&i}if(i=Nt(s=t.a=n,r,!0,t)&&i,i=Nt(s,r,!1,t)&&i,e)for(o=0;o<e.length;o++)i=Nt(s=t.a=e[o],r,!1,t)&&i
return i},s.G=function(){if(At.S.G.call(this),this.c){var t,e=this.c
for(t in e.a){for(var n=e.a[t],r=0;r<n.length;r++)ht(n[r])
delete e.a[t],e.b--}}this.C=null},s.va=function(t,e,n,r){return this.c.add(String(t),e,!1,n,r)},s.wa=function(t,e,n,r){return this.c.add(String(t),e,!0,n,r)}
var St=c.JSON.stringify
function Dt(){this.b=this.a=null}var xt,Lt=new(function(){function t(t,e,n){this.f=n,this.c=t,this.g=e,this.b=0,this.a=null}return t.prototype.get=function(){var t
return 0<this.b?(this.b--,t=this.a,this.a=t.next,t.next=null):t=this.c(),t},t}())((function(){return new Rt}),(function(t){t.reset()}),100)
function kt(){var t=Ut,e=null
return t.a&&(e=t.a,t.a=t.a.next,t.a||(t.b=null),e.next=null),e}function Rt(){this.next=this.b=this.a=null}function Ot(t){c.setTimeout((function(){throw t}),0)}function Pt(t,e){xt||function(){var t=c.Promise.resolve(void 0)
xt=function(){t.then(Vt)}}(),Ct||(xt(),Ct=!0),Ut.add(t,e)}Dt.prototype.add=function(t,e){var n=Lt.get()
n.set(t,e),this.b?this.b.next=n:this.a=n,this.b=n},Rt.prototype.set=function(t,e){this.a=t,this.b=e,this.next=null},Rt.prototype.reset=function(){this.next=this.b=this.a=null}
var Ct=!1,Ut=new Dt
function Vt(){for(var t;t=kt();){try{t.a.call(t.b)}catch(t){Ot(t)}var e=Lt
e.g(t),e.b<e.f&&(e.b++,t.next=e.a,e.a=t)}Ct=!1}function Mt(t,e){At.call(this),this.b=t||1,this.a=e||c,this.f=m(this.Ya,this),this.g=b()}function Ft(t){t.aa=!1,t.M&&(t.a.clearTimeout(t.M),t.M=null)}function jt(t,e,n){if("function"==f(t))n&&(t=m(t,n))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=m(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function qt(t){t.a=jt((function(){t.a=null,t.c&&(t.c=!1,qt(t))}),t.h)
var e=t.b
t.b=null,t.g.apply(null,e)}_(Mt,At),(s=Mt.prototype).aa=!1,s.M=null,s.Ya=function(){if(this.aa){var t=b()-this.g
0<t&&t<.8*this.b?this.M=this.a.setTimeout(this.f,this.b-t):(this.M&&(this.a.clearTimeout(this.M),this.M=null),this.dispatchEvent("tick"),this.aa&&(Ft(this),this.start()))}},s.start=function(){this.aa=!0,this.M||(this.M=this.a.setTimeout(this.f,this.b),this.g=b())},s.G=function(){Mt.S.G.call(this),Ft(this),delete this.a}
var Gt=function(t){function e(e,n,r){var i=t.call(this)||this
return i.g=null!=r?e.bind(r):e,i.h=n,i.b=null,i.c=!1,i.a=null,i}return function(t,e){function n(){this.constructor=t}i(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.f=function(t){this.b=arguments,this.a?this.c=!0:qt(this)},e.prototype.G=function(){t.prototype.G.call(this),this.a&&(c.clearTimeout(this.a),this.a=null,this.c=!1,this.b=null)},e}(I)
function Bt(t){I.call(this),this.b=t,this.a={}}_(Bt,I)
var zt=[]
function Kt(t,e,n,r){Array.isArray(n)||(n&&(zt[0]=n.toString()),n=zt)
for(var i=0;i<n.length;i++){var o=yt(e,n[i],r||t.handleEvent,!1,t.b||t)
if(!o)break
t.a[o.key]=o}}function Wt(t){P(t.a,(function(t,e){this.a.hasOwnProperty(e)&&mt(t)}),t),t.a={}}function Ht(){this.a=!0}function Qt(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.a)return e
if(!e)return null
try{var n=JSON.parse(e)
if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t]
if(!(2>r.length)){var i=r[1]
if(Array.isArray(i)&&!(1>i.length)){var o=i[0]
if("noop"!=o&&"stop"!=o&&"close"!=o)for(var s=1;s<i.length;s++)i[s]=""}}}return St(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Bt.prototype.G=function(){Bt.S.G.call(this),Wt(this)},Bt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Ht.prototype.info=function(){}
var Xt=null
function Yt(){return Xt=Xt||new At}function Jt(t){it.call(this,"serverreachability",t)}function $t(t){var e=Yt()
e.dispatchEvent(new Jt(e,t))}function Zt(t){it.call(this,"statevent",t)}function te(t){var e=Yt()
e.dispatchEvent(new Zt(e,t))}function ee(t){it.call(this,"timingevent",t)}function ne(t,e){if("function"!=f(t))throw Error("Fn must not be null and must be a function")
return c.setTimeout((function(){t()}),e)}_(Jt,it),_(Zt,it),_(ee,it)
var re={NO_ERROR:0,Za:1,gb:2,fb:3,bb:4,eb:5,hb:6,Da:7,TIMEOUT:8,kb:9},ie={ab:"complete",ob:"success",Ea:"error",Da:"abort",mb:"ready",nb:"readystatechange",TIMEOUT:"timeout",ib:"incrementaldata",lb:"progress",cb:"downloadprogress",pb:"uploadprogress"}
function oe(){}function se(t){var e
return(e=t.a)||(e=t.a={}),e}function ue(){}oe.prototype.a=null
var ae,ce={OPEN:"a",$a:"b",Ea:"c",jb:"d"}
function he(){it.call(this,"d")}function fe(){it.call(this,"c")}function le(){}function pe(t,e,n,r){this.g=t,this.c=e,this.f=n,this.T=r||1,this.J=new Bt(this),this.P=de,t=z?125:void 0,this.R=new Mt(t),this.B=null,this.b=!1,this.j=this.l=this.i=this.H=this.u=this.U=this.o=null,this.s=[],this.a=null,this.D=0,this.h=this.m=null,this.N=-1,this.A=!1,this.O=0,this.F=null,this.W=this.C=this.V=this.I=!1}_(he,it),_(fe,it),_(le,oe),ae=new le
var de=45e3,ve={},ye={}
function ge(t,e,n){t.H=1,t.i=Fe(Oe(e)),t.j=n,t.I=!0,me(t,null)}function me(t,e){t.u=b(),_e(t),t.l=Oe(t.i)
var n=t.l,r=t.T
Array.isArray(r)||(r=[String(r)]),$e(n.b,"t",r),t.D=0,t.a=Hn(t.g,t.g.C?e:null),0<t.O&&(t.F=new Gt(m(t.Ca,t,t.a),t.O)),Kt(t.J,t.a,"readystatechange",t.Wa),e=t.B?C(t.B):{},t.j?(t.m||(t.m="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.a.ba(t.l,t.m,t.j,e)):(t.m="GET",t.a.ba(t.l,t.m,null,e)),$t(1),function(t,e,n,r,i,o){t.info((function(){if(t.a)if(o)for(var s="",u=o.split("&"),a=0;a<u.length;a++){var c=u[a].split("=")
if(1<c.length){var h=c[0]
c=c[1]
var f=h.split("_")
s=2<=f.length&&"type"==f[1]?s+(h+"=")+c+"&":s+(h+"=redacted&")}}else s=null
else s=o
return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+s}))}(t.c,t.m,t.l,t.f,t.T,t.j)}function we(t,e,n){for(var r=!0;!t.A&&t.D<n.length;){var i=be(t,n)
if(i==ye){4==e&&(t.h=4,te(14),r=!1),Qt(t.c,t.f,null,"[Incomplete Response]")
break}if(i==ve){t.h=4,te(15),Qt(t.c,t.f,n,"[Invalid Chunk]"),r=!1
break}Qt(t.c,t.f,i,null),Ne(t,i)}4==e&&0==n.length&&(t.h=1,te(16),r=!1),t.b=t.b&&r,r?0<n.length&&!t.W&&(t.W=!0,(e=t.g).a==t&&e.V&&!e.F&&(e.c.info("Great, no buffering proxy detected. Bytes received: "+n.length),Fn(e),e.F=!0)):(Qt(t.c,t.f,n,"[Invalid Chunked Response]"),Ae(t),Te(t))}function be(t,e){var n=t.D,r=e.indexOf("\n",n)
return-1==r?ye:(n=Number(e.substring(n,r)),isNaN(n)?ve:(r+=1)+n>e.length?ye:(e=e.substr(r,n),t.D=r+n,e))}function _e(t){t.U=b()+t.P,Ie(t,t.P)}function Ie(t,e){if(null!=t.o)throw Error("WatchDog timer not null")
t.o=ne(m(t.Ua,t),e)}function Ee(t){t.o&&(c.clearTimeout(t.o),t.o=null)}function Te(t){0==t.g.v||t.A||Gn(t.g,t)}function Ae(t){Ee(t)
var e=t.F
e&&"function"==typeof e.ja&&e.ja(),t.F=null,Ft(t.R),Wt(t.J),t.a&&(e=t.a,t.a=null,e.abort(),e.ja())}function Ne(t,e){try{var n=t.g
if(0!=n.v&&(n.a==t||sn(n.b,t)))if(n.I=t.N,!t.C&&sn(n.b,t)&&3==n.v){try{var r=n.ka.a.parse(e)}catch(t){r=null}if(Array.isArray(r)&&3==r.length){var i=r
if(0==i[0]){t:if(!n.j){if(n.a){if(!(n.a.u+3e3<t.u))break t
qn(n),Ln(n)}Mn(n),te(18)}}else n.oa=i[1],0<n.oa-n.P&&37500>i[2]&&n.H&&0==n.o&&!n.m&&(n.m=ne(m(n.Ra,n),6e3))
if(1>=on(n.b)&&n.ea){try{n.ea()}catch(t){}n.ea=void 0}}else zn(n,11)}else if((t.C||n.a==t)&&qn(n),!S(e))for(e=r=n.ka.a.parse(e),r=0;r<e.length;r++)if(i=e[r],n.P=i[0],i=i[1],2==n.v)if("c"==i[0]){n.J=i[1],n.ga=i[2]
var o=i[3]
null!=o&&(n.ha=o,n.c.info("VER="+n.ha))
var s=i[4]
null!=s&&(n.pa=s,n.c.info("SVER="+n.pa))
var u=i[5]
if(null!=u&&"number"==typeof u&&0<u){var a=1.5*u
n.D=a,n.c.info("backChannelRequestTimeoutMs_="+a)}a=n
var c=t.a
if(c){var h=c.a?c.a.getResponseHeader("X-Client-Wire-Protocol"):null
if(h){var f=a.b
!f.a&&(L(h,"spdy")||L(h,"quic")||L(h,"h2"))&&(f.f=f.g,f.a=new Set,f.b&&(un(f,f.b),f.b=null))}if(a.A){var l=c.a?c.a.getResponseHeader("X-HTTP-Session-Id"):null
l&&(a.na=l,Me(a.B,a.A,l))}}n.v=3,n.f&&n.f.ta(),n.V&&(n.N=b()-t.u,n.c.info("Handshake RTT: "+n.N+"ms"))
var p=t
if((a=n).la=Wn(a,a.C?a.ga:null,a.fa),p.C){an(a.b,p)
var d=p,v=a.D
v&&d.setTimeout(v),d.o&&(Ee(d),_e(d)),a.a=p}else Vn(a)
0<n.g.length&&On(n)}else"stop"!=i[0]&&"close"!=i[0]||zn(n,7)
else 3==n.v&&("stop"==i[0]||"close"==i[0]?"stop"==i[0]?zn(n,7):xn(n):"noop"!=i[0]&&n.f&&n.f.sa(i),n.o=0)
$t(4)}catch(t){}}function Se(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0)
else if(l(t)||"string"==typeof t)T(t,e,void 0)
else{if(t.L&&"function"==typeof t.L)var n=t.L()
else if(t.K&&"function"==typeof t.K)n=void 0
else if(l(t)||"string"==typeof t){n=[]
for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i
i=(r=function(t){if(t.K&&"function"==typeof t.K)return t.K()
if("string"==typeof t)return t.split("")
if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r])
return e}for(r in e=[],n=0,t)e[n++]=t[r]
return e}(t)).length
for(var o=0;o<i;o++)e.call(void 0,r[o],n&&n[o],t)}}function De(t,e){this.b={},this.a=[],this.c=0
var n=arguments.length
if(1<n){if(n%2)throw Error("Uneven number of arguments")
for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof De)for(n=t.L(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]))
else for(r in t)this.set(r,t[r])}function xe(t){if(t.c!=t.a.length){for(var e=0,n=0;e<t.a.length;){var r=t.a[e]
Le(t.b,r)&&(t.a[n++]=r),e++}t.a.length=n}if(t.c!=t.a.length){var i={}
for(n=e=0;e<t.a.length;)Le(i,r=t.a[e])||(t.a[n++]=r,i[r]=1),e++
t.a.length=n}}function Le(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(s=pe.prototype).setTimeout=function(t){this.P=t},s.Wa=function(t){t=t.target
var e=this.F
e&&3==An(t)?e.f():this.Ca(t)},s.Ca=function(t){try{if(t==this.a)t:{var e=An(this.a),n=this.a.ua(),r=this.a.X()
if(!(3>e||3==e&&!z&&!this.a.$())){this.A||4!=e||7==n||$t(8==n||0>=r?3:2),Ee(this)
var i=this.a.X()
this.N=i
var o=this.a.$()
if(this.b=200==i,function(t,e,n,r,i,o,s){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+o+" "+s}))}(this.c,this.m,this.l,this.f,this.T,e,i),this.b){if(this.V&&!this.C){e:{if(this.a){var s,u=this.a
if((s=u.a?u.a.getResponseHeader("X-HTTP-Initial-Response"):null)&&!S(s)){var a=s
break e}}a=null}if(!a){this.b=!1,this.h=3,te(12),Ae(this),Te(this)
break t}Qt(this.c,this.f,a,"Initial handshake response via X-HTTP-Initial-Response"),this.C=!0,Ne(this,a)}this.I?(we(this,e,o),z&&this.b&&3==e&&(Kt(this.J,this.R,"tick",this.Va),this.R.start())):(Qt(this.c,this.f,o,null),Ne(this,o)),4==e&&Ae(this),this.b&&!this.A&&(4==e?Gn(this.g,this):(this.b=!1,_e(this)))}else 400==i&&0<o.indexOf("Unknown SID")?(this.h=3,te(12)):(this.h=0,te(13)),Ae(this),Te(this)}}}catch(t){}},s.Va=function(){if(this.a){var t=An(this.a),e=this.a.$()
this.D<e.length&&(Ee(this),we(this,t,e),this.b&&4!=t&&_e(this))}},s.cancel=function(){this.A=!0,Ae(this)},s.Ua=function(){this.o=null
var t=b()
0<=t-this.U?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.c,this.l),2!=this.H&&($t(3),te(17)),Ae(this),this.h=2,Te(this)):Ie(this,this.U-t)},(s=De.prototype).K=function(){xe(this)
for(var t=[],e=0;e<this.a.length;e++)t.push(this.b[this.a[e]])
return t},s.L=function(){return xe(this),this.a.concat()},s.get=function(t,e){return Le(this.b,t)?this.b[t]:e},s.set=function(t,e){Le(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=e},s.forEach=function(t,e){for(var n=this.L(),r=0;r<n.length;r++){var i=n[r],o=this.get(i)
t.call(e,o,i,this)}}
var ke=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Re(t,e){if(this.c=this.j=this.f="",this.h=null,this.i=this.g="",this.a=!1,t instanceof Re){this.a=void 0!==e?e:t.a,Pe(this,t.f),this.j=t.j,Ce(this,t.c),Ue(this,t.h),this.g=t.g,e=t.b
var n=new Qe
n.c=e.c,e.a&&(n.a=new De(e.a),n.b=e.b),Ve(this,n),this.i=t.i}else t&&(n=String(t).match(ke))?(this.a=!!e,Pe(this,n[1]||"",!0),this.j=je(n[2]||""),Ce(this,n[3]||"",!0),Ue(this,n[4]),this.g=je(n[5]||"",!0),Ve(this,n[6]||"",!0),this.i=je(n[7]||"")):(this.a=!!e,this.b=new Qe(null,this.a))}function Oe(t){return new Re(t)}function Pe(t,e,n){t.f=n?je(e,!0):e,t.f&&(t.f=t.f.replace(/:$/,""))}function Ce(t,e,n){t.c=n?je(e,!0):e}function Ue(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e)
t.h=e}else t.h=null}function Ve(t,e,n){e instanceof Qe?(t.b=e,function(t,e){e&&!t.f&&(Xe(t),t.c=null,t.a.forEach((function(t,e){var n=e.toLowerCase()
e!=n&&(Ye(this,e),$e(this,n,t))}),t)),t.f=e}(t.b,t.a)):(n||(e=qe(e,We)),t.b=new Qe(e,t.a))}function Me(t,e,n){t.b.set(e,n)}function Fe(t){return Me(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^b()).toString(36)),t}function je(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function qe(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,Ge),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function Ge(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Re.prototype.toString=function(){var t=[],e=this.f
e&&t.push(qe(e,Be,!0),":")
var n=this.c
return(n||"file"==e)&&(t.push("//"),(e=this.j)&&t.push(qe(e,Be,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.h)&&t.push(":",String(n))),(n=this.g)&&(this.c&&"/"!=n.charAt(0)&&t.push("/"),t.push(qe(n,"/"==n.charAt(0)?Ke:ze,!0))),(n=this.b.toString())&&t.push("?",n),(n=this.i)&&t.push("#",qe(n,He)),t.join("")}
var Be=/[#\/\?@]/g,ze=/[#\?:]/g,Ke=/[#\?]/g,We=/[#\?@]/g,He=/#/g
function Qe(t,e){this.b=this.a=null,this.c=t||null,this.f=!!e}function Xe(t){t.a||(t.a=new De,t.b=0,t.c&&function(t,e){if(t){t=t.split("&")
for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null
if(0<=r){var o=t[n].substring(0,r)
i=t[n].substring(r+1)}else o=t[n]
e(o,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.c,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Ye(t,e){Xe(t),e=Ze(t,e),Le(t.a.b,e)&&(t.c=null,t.b-=t.a.get(e).length,Le((t=t.a).b,e)&&(delete t.b[e],t.c--,t.a.length>2*t.c&&xe(t)))}function Je(t,e){return Xe(t),e=Ze(t,e),Le(t.a.b,e)}function $e(t,e,n){Ye(t,e),0<n.length&&(t.c=null,t.a.set(Ze(t,e),N(n)),t.b+=n.length)}function Ze(t,e){return e=String(e),t.f&&(e=e.toLowerCase()),e}function tn(t,e){this.b=t,this.a=e}function en(t){this.g=t||nn,t=c.PerformanceNavigationTiming?0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):!!(c.ia&&c.ia.ya&&c.ia.ya()&&c.ia.ya().qb),this.f=t?this.g:1,this.a=null,1<this.f&&(this.a=new Set),this.b=null,this.c=[]}(s=Qe.prototype).add=function(t,e){Xe(this),this.c=null,t=Ze(this,t)
var n=this.a.get(t)
return n||this.a.set(t,n=[]),n.push(e),this.b+=1,this},s.forEach=function(t,e){Xe(this),this.a.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},s.L=function(){Xe(this)
for(var t=this.a.K(),e=this.a.L(),n=[],r=0;r<e.length;r++)for(var i=t[r],o=0;o<i.length;o++)n.push(e[r])
return n},s.K=function(t){Xe(this)
var e=[]
if("string"==typeof t)Je(this,t)&&(e=A(e,this.a.get(Ze(this,t))))
else{t=this.a.K()
for(var n=0;n<t.length;n++)e=A(e,t[n])}return e},s.set=function(t,e){return Xe(this),this.c=null,Je(this,t=Ze(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[e]),this.b+=1,this},s.get=function(t,e){return t&&0<(t=this.K(t)).length?String(t[0]):e},s.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],e=this.a.L(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r))
r=this.K(r)
for(var o=0;o<r.length;o++){var s=i
""!==r[o]&&(s+="="+encodeURIComponent(String(r[o]))),t.push(s)}}return this.c=t.join("&")}
var nn=10
function rn(t){return!!t.b||!!t.a&&t.a.size>=t.f}function on(t){return t.b?1:t.a?t.a.size:0}function sn(t,e){return t.b?t.b==e:!!t.a&&t.a.has(e)}function un(t,e){t.a?t.a.add(e):t.b=e}function an(t,e){t.b&&t.b==e?t.b=null:t.a&&t.a.has(e)&&t.a.delete(e)}function cn(t){var e,n
if(null!=t.b)return t.c.concat(t.b.s)
if(null!=t.a&&0!==t.a.size){var r=t.c
try{for(var i=o(t.a.values()),s=i.next();!s.done;s=i.next()){var u=s.value
r=r.concat(u.s)}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}return r}return N(t.c)}function hn(){}function fn(){this.a=new hn}function ln(t,e,n){var r=n||""
try{Se(t,(function(t,n){var i=t
p(t)&&(i=St(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function pn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}en.prototype.cancel=function(){var t,e
if(this.c=cn(this),this.b)this.b.cancel(),this.b=null
else if(this.a&&0!==this.a.size){try{for(var n=o(this.a.values()),r=n.next();!r.done;r=n.next())r.value.cancel()}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.a.clear()}},hn.prototype.stringify=function(t){return c.JSON.stringify(t,void 0)},hn.prototype.parse=function(t){return c.JSON.parse(t,void 0)}
var dn=c.JSON.parse
function vn(t){At.call(this),this.headers=new De,this.H=t||null,this.b=!1,this.s=this.a=null,this.B="",this.h=0,this.f="",this.g=this.A=this.l=this.u=!1,this.o=0,this.m=null,this.I=yn,this.D=this.F=!1}_(vn,At)
var yn="",gn=/^https?$/i,mn=["POST","PUT"]
function wn(t){return"content-type"==t.toLowerCase()}function bn(t,e){t.b=!1,t.a&&(t.g=!0,t.a.abort(),t.g=!1),t.f=e,t.h=5,_n(t),En(t)}function _n(t){t.u||(t.u=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function In(t){if(t.b&&void 0!==a&&(!t.s[1]||4!=An(t)||2!=t.X()))if(t.l&&4==An(t))jt(t.za,0,t)
else if(t.dispatchEvent("readystatechange"),4==An(t)){t.b=!1
try{var e,n=t.X()
t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0
break t
default:r=!1}if(!(e=r)){var i
if(i=0===n){var o=String(t.B).match(ke)[1]||null
if(!o&&c.self&&c.self.location){var s=c.self.location.protocol
o=s.substr(0,s.length-1)}i=!gn.test(o?o.toLowerCase():"")}e=i}if(e)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{t.h=6
try{var u=2<An(t)?t.a.statusText:""}catch(t){u=""}t.f=u+" ["+t.X()+"]",_n(t)}}finally{En(t)}}}function En(t,e){if(t.a){Tn(t)
var n=t.a,r=t.s[0]?h:null
t.a=null,t.s=null,e||t.dispatchEvent("ready")
try{n.onreadystatechange=r}catch(t){}}}function Tn(t){t.a&&t.D&&(t.a.ontimeout=null),t.m&&(c.clearTimeout(t.m),t.m=null)}function An(t){return t.a?t.a.readyState:0}function Nn(t,e,n){t:{for(r in n){var r=!1
break t}r=!0}r||(n=function(t){var e=""
return P(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Me(t,e,n))}function Sn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Dn(t){this.pa=0,this.g=[],this.c=new Ht,this.ga=this.la=this.B=this.fa=this.a=this.na=this.A=this.W=this.i=this.O=this.l=null,this.La=this.R=0,this.Ia=Sn("failFast",!1,t),this.H=this.m=this.j=this.h=this.f=null,this.T=!0,this.I=this.oa=this.P=-1,this.U=this.o=this.u=0,this.Fa=Sn("baseRetryDelayMs",5e3,t),this.Ma=Sn("retryDelaySeedMs",1e4,t),this.Ja=Sn("forwardChannelMaxRetries",2,t),this.ma=Sn("forwardChannelRequestTimeoutMs",2e4,t),this.Ka=t&&t.g||void 0,this.D=void 0,this.C=t&&t.supportsCrossDomainXhr||!1,this.J="",this.b=new en(t&&t.concurrentRequestLimit),this.ka=new fn,this.da=t&&t.fastHandshake||!1,this.Ga=t&&t.b||!1,t&&t.f&&(this.c.a=!1),t&&t.forceLongPolling&&(this.T=!1),this.V=!this.da&&this.T&&t&&t.c||!1,this.ea=void 0,this.N=0,this.F=!1,this.s=null}function xn(t){if(kn(t),3==t.v){var e=t.R++,n=Oe(t.B)
Me(n,"SID",t.J),Me(n,"RID",e),Me(n,"TYPE","terminate"),Cn(t,n),(e=new pe(t,t.c,e,void 0)).H=2,e.i=Fe(Oe(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(e.i.toString(),"")),!n&&c.Image&&((new Image).src=e.i,n=!0),n||(e.a=Hn(e.g,null),e.a.ba(e.i)),e.u=b(),_e(e)}Kn(t)}function Ln(t){t.a&&(Fn(t),t.a.cancel(),t.a=null)}function kn(t){Ln(t),t.j&&(c.clearTimeout(t.j),t.j=null),qn(t),t.b.cancel(),t.h&&("number"==typeof t.h&&c.clearTimeout(t.h),t.h=null)}function Rn(t,e){t.g.push(new tn(t.La++,e)),3==t.v&&On(t)}function On(t){rn(t.b)||t.h||(t.h=!0,Pt(t.Ba,t),t.u=0)}function Pn(t,e){var n
n=e?e.f:t.R++
var r=Oe(t.B)
Me(r,"SID",t.J),Me(r,"RID",n),Me(r,"AID",t.P),Cn(t,r),t.i&&t.l&&Nn(r,t.i,t.l),n=new pe(t,t.c,n,t.u+1),null===t.i&&(n.B=t.l),e&&(t.g=e.s.concat(t.g)),e=Un(t,n,1e3),n.setTimeout(Math.round(.5*t.ma)+Math.round(.5*t.ma*Math.random())),un(t.b,n),ge(n,r,e)}function Cn(t,e){t.f&&Se({},(function(t,n){Me(e,n,t)}))}function Un(t,e,n){n=Math.min(t.g.length,n)
var r=t.f?m(t.f.Ha,t.f,t):null
t:for(var i=t.g,o=-1;;){var s=["count="+n];-1==o?0<n?(o=i[0].b,s.push("ofs="+o)):o=0:s.push("ofs="+o)
for(var u=!0,a=0;a<n;a++){var c=i[a].b,h=i[a].a
if(0>(c-=o))o=Math.max(0,i[a].b-100),u=!1
else try{ln(h,s,"req"+c+"_")}catch(t){r&&r(h)}}if(u){r=s.join("&")
break t}}return t=t.g.splice(0,n),e.s=t,r}function Vn(t){t.a||t.j||(t.U=1,Pt(t.Aa,t),t.o=0)}function Mn(t){return!(t.a||t.j||3<=t.o||(t.U++,t.j=ne(m(t.Aa,t),Bn(t,t.o)),t.o++,0))}function Fn(t){null!=t.s&&(c.clearTimeout(t.s),t.s=null)}function jn(t){t.a=new pe(t,t.c,"rpc",t.U),null===t.i&&(t.a.B=t.l),t.a.O=0
var e=Oe(t.la)
Me(e,"RID","rpc"),Me(e,"SID",t.J),Me(e,"CI",t.H?"0":"1"),Me(e,"AID",t.P),Cn(t,e),Me(e,"TYPE","xmlhttp"),t.i&&t.l&&Nn(e,t.i,t.l),t.D&&t.a.setTimeout(t.D)
var n=t.a
t=t.ga,n.H=1,n.i=Fe(Oe(e)),n.j=null,n.I=!0,me(n,t)}function qn(t){null!=t.m&&(c.clearTimeout(t.m),t.m=null)}function Gn(t,e){var n=null
if(t.a==e){qn(t),Fn(t),t.a=null
var r=2}else{if(!sn(t.b,e))return
n=e.s,an(t.b,e),r=1}if(t.I=e.N,0!=t.v)if(e.b)if(1==r){n=e.j?e.j.length:0,e=b()-e.u
var i=t.u;(r=Yt()).dispatchEvent(new ee(r,n,e,i)),On(t)}else Vn(t)
else if(3==(i=e.h)||0==i&&0<t.I||!(1==r&&function(t,e){return!(on(t.b)>=t.b.f-(t.h?1:0)||(t.h?(t.g=e.s.concat(t.g),0):1==t.v||2==t.v||t.u>=(t.Ia?0:t.Ja)||(t.h=ne(m(t.Ba,t,e),Bn(t,t.u)),t.u++,0)))}(t,e)||2==r&&Mn(t)))switch(n&&0<n.length&&(e=t.b,e.c=e.c.concat(n)),i){case 1:zn(t,5)
break
case 4:zn(t,10)
break
case 3:zn(t,6)
break
default:zn(t,2)}}function Bn(t,e){var n=t.Fa+Math.floor(Math.random()*t.Ma)
return t.f||(n*=2),n*e}function zn(t,e){if(t.c.info("Error code "+e),2==e){var n=null
t.f&&(n=null)
var r=m(t.Xa,t)
n||(n=new Re("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Pe(n,"https"),Fe(n)),function(t,e){var n=new Ht
if(c.Image){var r=new Image
r.onload=w(pn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=w(pn,n,r,"TestLoadImage: error",!1,e),r.onabort=w(pn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=w(pn,n,r,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else te(2)
t.v=0,t.f&&t.f.ra(e),Kn(t),kn(t)}function Kn(t){t.v=0,t.I=-1,t.f&&(0==cn(t.b).length&&0==t.g.length||(t.b.c.length=0,N(t.g),t.g.length=0),t.f.qa())}function Wn(t,e,n){var r=function(t){return t instanceof Re?Oe(t):new Re(t,void 0)}(n)
if(""!=r.c)e&&Ce(r,e+"."+r.c),Ue(r,r.h)
else{var i=c.location
r=function(t,e,n,r){var i=new Re(null,void 0)
return t&&Pe(i,t),e&&Ce(i,e),n&&Ue(i,n),r&&(i.g=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.W&&P(t.W,(function(t,e){Me(r,e,t)})),e=t.A,n=t.na,e&&n&&Me(r,e,n),Me(r,"VER",t.ha),Cn(t,r),r}function Hn(t,e){if(e&&!t.C)throw Error("Can't create secondary domain capable XhrIo object.")
return(e=new vn(t.Ka)).F=t.C,e}function Qn(){}function Xn(){if(G&&!(10<=Number(tt)))throw Error("Environmental error: no available transport.")}function Yn(t,e){At.call(this),this.a=new Dn(e),this.l=t,this.b=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.a.l=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.a&&(t?t["X-WebChannel-Client-Profile"]=e.a:t={"X-WebChannel-Client-Profile":e.a}),this.a.O=t,(t=e&&e.httpHeadersOverwriteParam)&&!S(t)&&(this.a.i=t),this.h=e&&e.supportsCrossDomainXhr||!1,this.g=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!S(e)&&(this.a.A=e,null!==(t=this.b)&&e in t&&e in(t=this.b)&&delete t[e]),this.f=new Zn(this)}function Jn(t){he.call(this)
var e=t.__sm__
if(e){t:{for(var n in e){t=n
break t}t=void 0}(this.c=t)?(t=this.c,this.data=null!==e&&t in e?e[t]:void 0):this.data=e}else this.data=t}function $n(){fe.call(this),this.status=1}function Zn(t){this.a=t}(s=vn.prototype).ba=function(t,e,n,r){if(this.a)throw Error("[goog.net.XhrIo] Object is active with another request="+this.B+"; newUri="+t)
e=e?e.toUpperCase():"GET",this.B=t,this.f="",this.h=0,this.u=!1,this.b=!0,this.a=new XMLHttpRequest,this.s=this.H?se(this.H):se(ae),this.a.onreadystatechange=m(this.za,this)
try{this.A=!0,this.a.open(e,String(t),!0),this.A=!1}catch(t){return void bn(this,t)}t=n||""
var i=new De(this.headers)
r&&Se(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=wn,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i
break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.L()),n=c.FormData&&t instanceof c.FormData,!(0<=E(mn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.a.setRequestHeader(e,t)}),this),this.I&&(this.a.responseType=this.I),"withCredentials"in this.a&&this.a.withCredentials!==this.F&&(this.a.withCredentials=this.F)
try{Tn(this),0<this.o&&((this.D=function(t){return G&&Z(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.a))?(this.a.timeout=this.o,this.a.ontimeout=m(this.xa,this)):this.m=jt(this.xa,this.o,this)),this.l=!0,this.a.send(t),this.l=!1}catch(t){bn(this,t)}},s.xa=function(){void 0!==a&&this.a&&(this.f="Timed out after "+this.o+"ms, aborting",this.h=8,this.dispatchEvent("timeout"),this.abort(8))},s.abort=function(t){this.a&&this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1,this.h=t||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),En(this))},s.G=function(){this.a&&(this.b&&(this.b=!1,this.g=!0,this.a.abort(),this.g=!1),En(this,!0)),vn.S.G.call(this)},s.za=function(){this.j||(this.A||this.l||this.g?In(this):this.Ta())},s.Ta=function(){In(this)},s.X=function(){try{return 2<An(this)?this.a.status:-1}catch(t){return-1}},s.$=function(){try{return this.a?this.a.responseText:""}catch(t){return""}},s.Na=function(t){if(this.a){var e=this.a.responseText
return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),dn(e)}},s.ua=function(){return this.h},s.Qa=function(){return"string"==typeof this.f?this.f:String(this.f)},(s=Dn.prototype).ha=8,s.v=1,s.Ba=function(t){if(this.h)if(this.h=null,1==this.v){if(!t){this.R=Math.floor(1e5*Math.random()),t=this.R++
var e,n=new pe(this,this.c,t,void 0),r=this.l
if(this.O&&(r?V(r=C(r),this.O):r=this.O),null===this.i&&(n.B=r),this.da)t:{for(var i=e=0;i<this.g.length;i++){var o=this.g[i]
if(void 0===(o="__data__"in o.a&&"string"==typeof(o=o.a.__data__)?o.length:void 0))break
if(4096<(e+=o)){e=i
break t}if(4096===e||i===this.g.length-1){e=i+1
break t}}e=1e3}else e=1e3
e=Un(this,n,e),Me(i=Oe(this.B),"RID",t),Me(i,"CVER",22),this.A&&Me(i,"X-HTTP-Session-Id",this.A),Cn(this,i),this.i&&r&&Nn(i,this.i,r),un(this.b,n),this.Ga&&Me(i,"TYPE","init"),this.da?(Me(i,"$req",e),Me(i,"SID","null"),n.V=!0,ge(n,i,null)):ge(n,i,e),this.v=2}}else 3==this.v&&(t?Pn(this,t):0==this.g.length||rn(this.b)||Pn(this))},s.Aa=function(){if(this.j=null,jn(this),this.V&&!(this.F||null==this.a||0>=this.N)){var t=2*this.N
this.c.info("BP detection timer enabled: "+t),this.s=ne(m(this.Sa,this),t)}},s.Sa=function(){this.s&&(this.s=null,this.c.info("BP detection timeout reached."),this.c.info("Buffering proxy detected and switch to long-polling!"),this.H=!1,this.F=!0,Ln(this),jn(this))},s.Ra=function(){null!=this.m&&(this.m=null,Ln(this),Mn(this),te(19))},s.Xa=function(t){t?(this.c.info("Successfully pinged google.com"),te(2)):(this.c.info("Failed to ping google.com"),te(1))},(s=Qn.prototype).ta=function(){},s.sa=function(){},s.ra=function(){},s.qa=function(){},s.Ha=function(){},Xn.prototype.a=function(t,e){return new Yn(t,e)},_(Yn,At),(s=Yn.prototype).addEventListener=function(t,e,n,r){Yn.S.addEventListener.call(this,t,e,n,r)},s.removeEventListener=function(t,e,n,r){Yn.S.removeEventListener.call(this,t,e,n,r)},s.Oa=function(){this.a.f=this.f,this.h&&(this.a.C=!0)
var t=this.a,e=this.l,n=this.b||void 0
te(0),t.fa=e,t.W=n||{},t.H=t.T,t.B=Wn(t,null,t.fa),On(t)},s.close=function(){xn(this.a)},s.Pa=function(t){if("string"==typeof t){var e={}
e.__data__=t,Rn(this.a,e)}else this.g?((e={}).__data__=St(t),Rn(this.a,e)):Rn(this.a,t)},s.G=function(){this.a.f=null,delete this.f,xn(this.a),delete this.a,Yn.S.G.call(this)},_(Jn,he),_($n,fe),_(Zn,Qn),Zn.prototype.ta=function(){this.a.dispatchEvent("a")},Zn.prototype.sa=function(t){this.a.dispatchEvent(new Jn(t))},Zn.prototype.ra=function(t){this.a.dispatchEvent(new $n(t))},Zn.prototype.qa=function(){this.a.dispatchEvent("b")},Xn.prototype.createWebChannel=Xn.prototype.a,Yn.prototype.send=Yn.prototype.Pa,Yn.prototype.open=Yn.prototype.Oa,Yn.prototype.close=Yn.prototype.close,re.NO_ERROR=0,re.TIMEOUT=8,re.HTTP_ERROR=6,ie.COMPLETE="complete",ue.EventType=ce,ce.OPEN="a",ce.CLOSE="b",ce.ERROR="c",ce.MESSAGE="d",At.prototype.listen=At.prototype.va,vn.prototype.listenOnce=vn.prototype.wa,vn.prototype.getLastError=vn.prototype.Qa,vn.prototype.getLastErrorCode=vn.prototype.ua,vn.prototype.getStatus=vn.prototype.X,vn.prototype.getResponseJson=vn.prototype.Na,vn.prototype.getResponseText=vn.prototype.$,vn.prototype.send=vn.prototype.ba
var tr=function(){return new Xn},er=re,nr=ie,rr=ue,ir=vn,or={createWebChannelTransport:tr,ErrorCode:er,EventType:nr,WebChannel:rr,XhrIo:ir}
e.default=or}}])
