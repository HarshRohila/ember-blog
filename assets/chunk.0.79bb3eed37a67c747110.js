(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[0],{23:function(e,t,n){"use strict"
n.r(t),n.d(t,"registerInstallations",(function(){return G}))
var r,o=n(3),i=n.n(o),a=n(4),s=n(0),u=n(2),c=n(24),f=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["not-registered"]="Firebase Installation is not registered.",r["installation-not-found"]="Firebase Installation not found.",r["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',r["app-offline"]="Could not process request. Application offline.",r["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",r),l=new u.ErrorFactory("installations","Installations",f)
function p(e){return e instanceof u.FirebaseError&&e.code.includes("request-failed")}
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
 */function d(e){return"https://firebaseinstallations.googleapis.com/v1/projects/"+e.projectId+"/installations"}function h(e){return{token:e.token,requestStatus:2,expiresIn:(t=e.expiresIn,Number(t.replace("s","000"))),creationTime:Date.now()}
var t}function _(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,t.json()]
case 1:return n=o.sent(),r=n.error,[2,l.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})]}}))}))}function g(e){var t=e.apiKey
return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function b(e,t){var n=t.refreshToken,r=g(e)
return r.append("Authorization",function(e){return"FIS_v2 "+e}
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
 */(n)),r}function v(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t
return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,e()]
case 1:return(t=n.sent()).status>=500&&t.status<600?[2,e()]:[2,t]}}))}))}function y(e,t){var n=t.fid
return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,r,o,i,a,u
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return t=d(e),r=g(e),o={fid:n,authVersion:"FIS_v2",appId:e.appId,sdkVersion:"w:0.4.17"},i={method:"POST",headers:r,body:JSON.stringify(o)},[4,v((function(){return fetch(t,i)}))]
case 1:return(a=s.sent()).ok?[4,a.json()]:[3,3]
case 2:return[2,{fid:(u=s.sent()).fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:h(u.authToken)}]
case 3:return[4,_("Create Installation",a)]
case 4:throw s.sent()}}))}))}
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
 */function w(e){return new Promise((function(t){setTimeout(t,e)}))}
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
 */
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
 */var m=/^[cdef][\w-]{21}$/
function j(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16
var t=function(e){return(t=e,btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/\+/g,"-").replace(/\//g,"_")).substr(0,22)
var t}
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
 */(e)
return m.test(t)?t:""}catch(e){return""}}function O(e){return e.appName+"!"+e.appId}
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
 */var S=new Map
function I(e,t){var n=O(e)
C(n,t),function(e,t){var n=T()
n&&n.postMessage({key:e,fid:t}),x()}(n,t)}function C(e,t){var n,r,o=S.get(e)
if(o)try{for(var i=Object(s.__values)(o),a=i.next();!a.done;a=i.next())(0,a.value)(t)}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}var k=null
function T(){return!k&&"BroadcastChannel"in self&&((k=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){C(e.data.key,e.data.fid)}),k}function x(){0===S.size&&k&&(k.close(),k=null)}
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
 */var P="firebase-installations-store",D=null
function q(){return D||(D=Object(c.openDb)("firebase-installations-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(P)}}))),D}function E(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i,a
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=O(e),[4,q()]
case 1:return r=s.sent(),o=r.transaction(P,"readwrite"),[4,(i=o.objectStore(P)).get(n)]
case 2:return a=s.sent(),[4,i.put(t,n)]
case 3:return s.sent(),[4,o.complete]
case 4:return s.sent(),a&&a.fid===t.fid||I(e,t.fid),[2,t]}}))}))}function A(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return t=O(e),[4,q()]
case 1:return n=o.sent(),[4,(r=n.transaction(P,"readwrite")).objectStore(P).delete(t)]
case 2:return o.sent(),[4,r.complete]
case 3:return o.sent(),[2]}}))}))}function N(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i,a,u
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return n=O(e),[4,q()]
case 1:return r=s.sent(),o=r.transaction(P,"readwrite"),[4,(i=o.objectStore(P)).get(n)]
case 2:return a=s.sent(),void 0!==(u=t(a))?[3,4]:[4,i.delete(n)]
case 3:return s.sent(),[3,6]
case 4:return[4,i.put(u,n)]
case 5:s.sent(),s.label=6
case 6:return[4,o.complete]
case 7:return s.sent(),!u||a&&a.fid===u.fid||I(e,u.fid),[2,u]}}))}))}
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
 */function B(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,N(e,(function(n){var r=function(e){return L(e||{fid:j(),registrationStatus:0})}(n),o=function(e,t){if(0===t.registrationStatus){if(!navigator.onLine)return{installationEntry:t,registrationPromise:Promise.reject(l.create("app-offline"))}
var n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return o.trys.push([0,2,,7]),[4,y(e,t)]
case 1:return n=o.sent(),[2,E(e,n)]
case 2:return p(r=o.sent())&&409===r.serverCode?[4,A(e)]:[3,4]
case 3:return o.sent(),[3,6]
case 4:return[4,E(e,{fid:t.fid,registrationStatus:0})]
case 5:o.sent(),o.label=6
case 6:throw r
case 7:return[2]}}))}))}(e,n)
return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:K(e)}:{installationEntry:t}}(e,r)
return t=o.registrationPromise,o.installationEntry}))]
case 1:return""!==(n=o.sent()).fid?[3,3]:(r={},[4,t])
case 2:return[2,(r.installationEntry=o.sent(),r)]
case 3:return[2,{installationEntry:n,registrationPromise:t}]}}))}))}function K(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,o
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,F(e)]
case 1:t=i.sent(),i.label=2
case 2:return 1!==t.registrationStatus?[3,5]:[4,w(100)]
case 3:return i.sent(),[4,F(e)]
case 4:return t=i.sent(),[3,2]
case 5:return 0!==t.registrationStatus?[3,7]:[4,B(e)]
case 6:return n=i.sent(),r=n.installationEntry,(o=n.registrationPromise)?[2,o]:[2,r]
case 7:return[2,t]}}))}))}function F(e){return N(e,(function(e){if(!e)throw l.create("installation-not-found")
return L(e)}))}function L(e){return 1===(t=e).registrationStatus&&t.registrationTime+1e4<Date.now()?{fid:e.fid,registrationStatus:0}:e
var t

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
 */}function V(e,t){var n=e.appConfig,r=e.platformLoggerProvider
return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,o,i,a,u,c
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return e=function(e,t){var n=t.fid
return d(e)+"/"+n+"/authTokens:generate"}
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
 */(n,t),o=b(n,t),(i=r.getImmediate({optional:!0}))&&o.append("x-firebase-client",i.getPlatformInfoString()),a={installation:{sdkVersion:"w:0.4.17"}},u={method:"POST",headers:o,body:JSON.stringify(a)},[4,v((function(){return fetch(e,u)}))]
case 1:return(c=s.sent()).ok?[4,c.json()]:[3,3]
case 2:return[2,h(s.sent())]
case 3:return[4,_("Generate Auth Token",c)]
case 4:throw s.sent()}}))}))}function M(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,N(e.appConfig,(function(r){if(!J(r))throw l.create("not-registered")
var o=r.authToken
if(!t&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now()
return t<e.creationTime||e.creationTime+e.expiresIn<t+36e5}(e)}(o))return r
if(1===o.requestStatus)return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,$(e.appConfig)]
case 1:n=o.sent(),o.label=2
case 2:return 1!==n.authToken.requestStatus?[3,5]:[4,w(100)]
case 3:return o.sent(),[4,$(e.appConfig)]
case 4:return n=o.sent(),[3,2]
case 5:return 0===(r=n.authToken).requestStatus?[2,M(e,t)]:[2,r]}}))}))}(e,t),r
if(!navigator.onLine)throw l.create("app-offline")
var i=function(e){var t={requestStatus:1,requestTime:Date.now()}
return Object(s.__assign)(Object(s.__assign)({},e),{authToken:t})}(r)
return n=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return i.trys.push([0,3,,8]),[4,V(e,t)]
case 1:return n=i.sent(),o=Object(s.__assign)(Object(s.__assign)({},t),{authToken:n}),[4,E(e.appConfig,o)]
case 2:return i.sent(),[2,n]
case 3:return!p(r=i.sent())||401!==r.serverCode&&404!==r.serverCode?[3,5]:[4,A(e.appConfig)]
case 4:return i.sent(),[3,7]
case 5:return o=Object(s.__assign)(Object(s.__assign)({},t),{authToken:{requestStatus:0}}),[4,E(e.appConfig,o)]
case 6:i.sent(),i.label=7
case 7:throw r
case 8:return[2]}}))}))}(e,i),i}))]
case 1:return r=i.sent(),n?[4,n]:[3,3]
case 2:return o=i.sent(),[3,4]
case 3:o=r.authToken,i.label=4
case 4:return[2,o]}}))}))}function $(e){return N(e,(function(e){if(!J(e))throw l.create("not-registered")
var t
return 1===(t=e.authToken).requestStatus&&t.requestTime+1e4<Date.now()?Object(s.__assign)(Object(s.__assign)({},e),{authToken:{requestStatus:0}}):e}))}function J(e){return void 0!==e&&2===e.registrationStatus}function z(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t
return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,B(e)]
case 1:return(t=n.sent().registrationPromise)?[4,t]:[3,3]
case 2:n.sent(),n.label=3
case 3:return[2]}}))}))}
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
 */function R(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,o,i
return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return n=function(e,t){var n=t.fid
return d(e)+"/"+n}
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
 */(e,t),r=b(e,t),o={method:"DELETE",headers:r},[4,v((function(){return fetch(n,o)}))]
case 1:return(i=a.sent()).ok?[3,3]:[4,_("Delete Installation",i)]
case 2:throw a.sent()
case 3:return[2]}}))}))}
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
 */
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
 */
function U(e){return l.create("missing-app-config-values",{valueName:e})}
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
 */function G(e){e.INTERNAL.registerComponent(new a.Component("installations",(function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n
if(!e||!e.options)throw U("App Configuration")
if(!e.name)throw U("App Name")
try{for(var r=Object(s.__values)(["projectId","apiKey","appId"]),o=r.next();!o.done;o=r.next()){var i=o.value
if(!e.options[i])throw U(i)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")}
return{app:t,getId:function(){
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
 */
return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return[4,B(e.appConfig)]
case 1:return t=o.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):M(e).catch(console.error),[2,n.fid]}}))}))}
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
 */(n)},getToken:function(e){return function(e,t){return void 0===t&&(t=!1),Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return[4,z(e.appConfig)]
case 1:return n.sent(),[4,M(e,t)]
case 2:return[2,n.sent().token]}}))}))}(n,e)},delete:function(){return function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,N(t=e.appConfig,(function(e){if(!e||0!==e.registrationStatus)return e}))]
case 1:if(!(n=r.sent()))return[3,6]
if(1!==n.registrationStatus)return[3,2]
throw l.create("delete-pending-registration")
case 2:if(2!==n.registrationStatus)return[3,6]
if(navigator.onLine)return[3,3]
throw l.create("app-offline")
case 3:return[4,R(t,n)]
case 4:return r.sent(),[4,A(t)]
case 5:r.sent(),r.label=6
case 6:return[2]}}))}))}(n)},onIdChange:function(e){return function(e,t){var n=e.appConfig
return function(e,t){T()
var n=O(e),r=S.get(n)
r||(r=new Set,S.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=O(e),r=S.get(n)
r&&(r.delete(t),0===r.size&&S.delete(n),x())}(n,t)}}(n,e)}}}),"PUBLIC")),e.registerVersion("@firebase/installations","0.4.17")}G(i.a)},24:function(e,t,n){var r,o,i,a
function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a=function(e){"use strict"
function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var o,i=new Promise((function(i,a){n(o=e[t].apply(e,r)).then(i,a)}))
return i.request=o,i}function o(e,t,n){var o=r(e,t,n)
return o.then((function(e){if(e)return new f(e,o.request)}))}function i(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function a(e,t,n,o){o.forEach((function(o){o in n.prototype&&(e.prototype[o]=function(){return r(this[t],o,arguments)})}))}function s(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function u(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return o(this[t],r,arguments)})}))}function c(e){this._index=e}function f(e,t){this._cursor=e,this._request=t}function l(e){this._store=e}function p(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function d(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new p(n)}function h(e){this._db=e}i(c,"_index",["name","keyPath","multiEntry","unique"]),a(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),u(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),i(f,"_cursor",["direction","key","primaryKey","value"]),a(f,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(f.prototype[e]=function(){var t=this,r=arguments
return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new f(e,t._request)}))}))})})),l.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},l.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},i(l,"_store",["name","keyPath","indexNames","autoIncrement"]),a(l,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),u(l,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),s(l,"_store",IDBObjectStore,["deleteIndex"]),p.prototype.objectStore=function(){return new l(this._tx.objectStore.apply(this._tx,arguments))},i(p,"_tx",["objectStoreNames","mode"]),s(p,"_tx",IDBTransaction,["abort"]),d.prototype.createObjectStore=function(){return new l(this._db.createObjectStore.apply(this._db,arguments))},i(d,"_db",["name","version","objectStoreNames"]),s(d,"_db",IDBDatabase,["deleteObjectStore","close"]),h.prototype.transaction=function(){return new p(this._db.transaction.apply(this._db,arguments))},i(h,"_db",["name","version","objectStoreNames"]),s(h,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[l,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],o=this._store||this._index,i=o[e].apply(o,n.slice(0,-1))
i.onsuccess=function(){r(i.result)}})}))})),[c,l].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[]
return new Promise((function(o){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():o(r)):o(r)}))}))})})),e.openDb=function(e,t,n){var o=r(indexedDB,"open",[e,t]),i=o.request
return i&&(i.onupgradeneeded=function(e){n&&n(new d(i.result,e.oldVersion,i.transaction))}),o.then((function(e){return new h(e)}))},e.deleteDb=function(e){return r(indexedDB,"deleteDatabase",[e])},Object.defineProperty(e,"__esModule",{value:!0})},"object"===s(t)&&void 0!==e?a(t):(o=[t],void 0===(i="function"==typeof(r=a)?r.apply(t,o):r)||(e.exports=i))}}])
