(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[12],{21:function(e,t,n){"use strict"
n.r(t),n(23)
var r,i=n(4),o=n(2),s=n(0),a=n(24),c=n(3),u=n.n(c)
function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}
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
 */var d,p=((r={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',r["only-available-in-window"]="This method is available in a Window context.",r["only-available-in-sw"]="This method is available in a service worker context.",r["permission-default"]="The notification permission was not granted and dismissed instead.",r["permission-blocked"]="The notification permission was not granted and blocked instead.",r["unsupported-browser"]="This browser doesn't support the API's required to use the firebase SDK.",r["failed-service-worker-registration"]="We are unable to register the default service worker. {$browserErrorMessage}",r["token-subscribe-failed"]="A problem occurred while subscribing the user to FCM: {$errorInfo}",r["token-subscribe-no-token"]="FCM returned no token when subscribing the user to push.",r["token-unsubscribe-failed"]="A problem occurred while unsubscribing the user from FCM: {$errorInfo}",r["token-update-failed"]="A problem occurred while updating the user from FCM: {$errorInfo}",r["token-update-no-token"]="FCM returned no token when updating the user to push.",r["use-sw-after-get-token"]="The useServiceWorker() method may only be called once and must be called before calling getToken() to ensure your service worker is used.",r["invalid-sw-registration"]="The input to useServiceWorker() must be a ServiceWorkerRegistration.",r["invalid-bg-handler"]="The input to setBackgroundMessageHandler() must be a function.",r["invalid-vapid-key"]="The public VAPID key must be a string.",r["use-vapid-key-after-get-token"]="The usePublicVapidKey() method may only be called once and must be called before calling getToken() to ensure your VAPID key is used.",r),f=new o.ErrorFactory("messaging","Messaging",p),h="BDOU99-h67HcA6JeFXHbSNMu7e2yNNu3RzoMj8TM4W88jITfq7ZmPvIM1Iv-4_l2LxQcYwhqby2xGpWwzjfAnG4"

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
 */function g(e){var t=new Uint8Array(e)
return btoa(String.fromCharCode.apply(String,Object(s.__spread)(t))).replace(/=/g,"").replace(/\+/g,"-").replace(/\//g,"_")}function b(e){for(var t=(e+"=".repeat((4-e.length%4)%4)).replace(/\-/g,"+").replace(/_/g,"/"),n=atob(t),r=new Uint8Array(n.length),i=0;i<n.length;++i)r[i]=n.charCodeAt(i)
return r}
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
 */function v(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n=this
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return"databases"in indexedDB?[4,indexedDB.databases()]:[3,2]
case 1:if(!r.sent().map((function(e){return e.name})).includes("fcm_token_details_db"))return[2,null]
r.label=2
case 2:return t=null,[4,Object(a.openDb)("fcm_token_details_db",5,(function(r){return Object(s.__awaiter)(n,void 0,void 0,(function(){var n,i,o,a
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return r.oldVersion<2?[2]:r.objectStoreNames.contains("fcm_token_object_Store")?[4,(n=r.transaction.objectStore("fcm_token_object_Store")).index("fcmSenderId").get(e)]:[2]
case 1:return i=s.sent(),[4,n.clear()]
case 2:if(s.sent(),!i)return[2]
if(2===r.oldVersion){if(!(o=i).auth||!o.p256dh||!o.endpoint)return[2]
t={token:o.fcmToken,createTime:null!==(a=o.createTime)&&void 0!==a?a:Date.now(),subscriptionOptions:{auth:o.auth,p256dh:o.p256dh,endpoint:o.endpoint,swScope:o.swScope,vapidKey:"string"==typeof o.vapidKey?o.vapidKey:g(o.vapidKey)}}}else(3===r.oldVersion||4===r.oldVersion)&&(t={token:(o=i).fcmToken,createTime:o.createTime,subscriptionOptions:{auth:g(o.auth),p256dh:g(o.p256dh),endpoint:o.endpoint,swScope:o.swScope,vapidKey:g(o.vapidKey)}})
return[2]}}))}))}))]
case 3:return r.sent().close(),[4,Object(a.deleteDb)("fcm_token_details_db")]
case 4:return r.sent(),[4,Object(a.deleteDb)("fcm_vapid_details_db")]
case 5:return r.sent(),[4,Object(a.deleteDb)("undefined")]
case 6:return r.sent(),[2,w(t)?t:null]}}))}))}function w(e){if(!e||!e.subscriptionOptions)return!1
var t=e.subscriptionOptions
return"number"==typeof e.createTime&&e.createTime>0&&"string"==typeof e.token&&e.token.length>0&&"string"==typeof t.auth&&t.auth.length>0&&"string"==typeof t.p256dh&&t.p256dh.length>0&&"string"==typeof t.endpoint&&t.endpoint.length>0&&"string"==typeof t.swScope&&t.swScope.length>0&&"string"==typeof t.vapidKey&&t.vapidKey.length>0}
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
 */!function(e){e.PUSH_RECEIVED="push-received",e.NOTIFICATION_CLICKED="notification-clicked"}(d||(d={}))
var y="firebase-messaging-store",_=null
function m(){return _||(_=Object(a.openDb)("firebase-messaging-database",1,(function(e){switch(e.oldVersion){case 0:e.createObjectStore(y)}}))),_}function k(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=S(e),[4,m()]
case 1:return[4,i.sent().transaction(y).objectStore(y).get(t)]
case 2:return(n=i.sent())?[2,n]:[3,3]
case 3:return[4,v(e.appConfig.senderId)]
case 4:return(r=i.sent())?[4,O(e,r)]:[3,6]
case 5:return i.sent(),[2,r]
case 6:return[2]}}))}))}function O(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return n=S(e),[4,m()]
case 1:return r=o.sent(),[4,(i=r.transaction(y,"readwrite")).objectStore(y).put(t,n)]
case 2:return o.sent(),[4,i.complete]
case 3:return o.sent(),[2,t]}}))}))}function j(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return t=S(e),[4,m()]
case 1:return n=i.sent(),[4,(r=n.transaction(y,"readwrite")).objectStore(y).delete(t)]
case 2:return i.sent(),[4,r.complete]
case 3:return i.sent(),[2]}}))}))}function S(e){return e.appConfig.appId}
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
 */function M(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a,c
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,C(e)]
case 1:n=s.sent(),r=D(t),i={method:"POST",headers:n,body:JSON.stringify(r)},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(K(e.appConfig),i)]
case 3:return[4,s.sent().json()]
case 4:return o=s.sent(),[3,6]
case 5:throw a=s.sent(),f.create("token-subscribe-failed",{errorInfo:a})
case 6:if(o.error)throw c=o.error.message,f.create("token-subscribe-failed",{errorInfo:c})
if(!o.token)throw f.create("token-subscribe-no-token")
return[2,o.token]}}))}))}function T(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a,c
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,C(e)]
case 1:n=s.sent(),r=D(t.subscriptionOptions),i={method:"PATCH",headers:n,body:JSON.stringify(r)},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(K(e.appConfig)+"/"+t.token,i)]
case 3:return[4,s.sent().json()]
case 4:return o=s.sent(),[3,6]
case 5:throw a=s.sent(),f.create("token-update-failed",{errorInfo:a})
case 6:if(o.error)throw c=o.error.message,f.create("token-update-failed",{errorInfo:c})
if(!o.token)throw f.create("token-update-no-token")
return[2,o.token]}}))}))}function I(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r,i,o,a
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return[4,C(e)]
case 1:n=s.sent(),r={method:"DELETE",headers:n},s.label=2
case 2:return s.trys.push([2,5,,6]),[4,fetch(K(e.appConfig)+"/"+t,r)]
case 3:return[4,s.sent().json()]
case 4:if((i=s.sent()).error)throw o=i.error.message,f.create("token-unsubscribe-failed",{errorInfo:o})
return[3,6]
case 5:throw a=s.sent(),f.create("token-unsubscribe-failed",{errorInfo:a})
case 6:return[2]}}))}))}function K(e){return"https://fcmregistrations.googleapis.com/v1/projects/"+e.projectId+"/registrations"}function C(e){var t=e.appConfig,n=e.installations
return Object(s.__awaiter)(this,void 0,void 0,(function(){var e
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,n.getToken()]
case 1:return e=r.sent(),[2,new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t.apiKey,"x-goog-firebase-installations-auth":"FIS "+e})]}}))}))}function D(e){var t=e.p256dh,n=e.auth,r=e.endpoint,i=e.vapidKey,o={web:{endpoint:r,auth:n,p256dh:t}}
return i!==h&&(o.web.applicationPubKey=i),o}
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
 */function P(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o,a
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:if("granted"!==Notification.permission)throw f.create("permission-blocked")
return[4,x(t,n)]
case 1:return r=s.sent(),[4,k(e)]
case 2:return i=s.sent(),o={vapidKey:n,swScope:t.scope,endpoint:r.endpoint,auth:g(r.getKey("auth")),p256dh:g(r.getKey("p256dh"))},i?[3,3]:[2,R(e,o)]
case 3:if(c=i.subscriptionOptions,l=(u=o).vapidKey===c.vapidKey,d=u.endpoint===c.endpoint,p=u.auth===c.auth,h=u.p256dh===c.p256dh,l&&d&&p&&h)return[3,8]
s.label=4
case 4:return s.trys.push([4,6,,7]),[4,I(e,i.token)]
case 5:return s.sent(),[3,7]
case 6:return a=s.sent(),console.warn(a),[3,7]
case 7:return[2,R(e,o)]
case 8:return Date.now()>=i.createTime+6048e5?[2,N({token:i.token,createTime:Date.now(),subscriptionOptions:o},e,t)]:[2,i.token]
case 9:return[2]}var c,u,l,d,p,h

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
 */}))}))}function E(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,k(e)]
case 1:return(n=i.sent())?[4,I(e,n.token)]:[3,4]
case 2:return i.sent(),[4,j(e)]
case 3:i.sent(),i.label=4
case 4:return[4,t.pushManager.getSubscription()]
case 5:return(r=i.sent())?[2,r.unsubscribe()]:[2,!0]}}))}))}function N(e,t,n){return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o
return Object(s.__generator)(this,(function(a){switch(a.label){case 0:return a.trys.push([0,3,,5]),[4,T(t,e)]
case 1:return r=a.sent(),i=Object(s.__assign)(Object(s.__assign)({},e),{token:r,createTime:Date.now()}),[4,O(t,i)]
case 2:return a.sent(),[2,r]
case 3:return o=a.sent(),[4,E(t,n)]
case 4:throw a.sent(),o
case 5:return[2]}}))}))}function R(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n,r
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return[4,M(e,t)]
case 1:return n=i.sent(),r={token:n,createTime:Date.now(),subscriptionOptions:t},[4,O(e,r)]
case 2:return i.sent(),[2,r.token]}}))}))}function x(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return[4,e.pushManager.getSubscription()]
case 1:return(n=r.sent())?[2,n]:[2,e.pushManager.subscribe({userVisibleOnly:!0,applicationServerKey:b(t)})]}}))}))}
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
 */function A(e){return"object"===l(e)&&!!e&&"google.c.a.c_id"in e}
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
 */var W=function(){function e(e){var t=this
this.firebaseDependencies=e,this.isOnBackgroundMessageUsed=null,this.vapidKey=null,this.bgMessageHandler=null,self.addEventListener("push",(function(e){e.waitUntil(t.onPush(e))})),self.addEventListener("pushsubscriptionchange",(function(e){e.waitUntil(t.onSubChange(e))})),self.addEventListener("notificationclick",(function(e){e.waitUntil(t.onNotificationClick(e))}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.setBackgroundMessageHandler=function(e){if(this.isOnBackgroundMessageUsed=!1,!e||"function"!=typeof e)throw f.create("invalid-bg-handler")
this.bgMessageHandler=e},e.prototype.onBackgroundMessage=function(e){var t=this
return this.isOnBackgroundMessageUsed=!0,this.bgMessageHandler=e,function(){t.bgMessageHandler=null}},e.prototype.getToken=function(){var e,t
return Object(s.__awaiter)(this,void 0,void 0,(function(){var n
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return this.vapidKey?[3,2]:[4,k(this.firebaseDependencies)]
case 1:n=r.sent(),this.vapidKey=null!==(t=null===(e=null==n?void 0:n.subscriptionOptions)||void 0===e?void 0:e.vapidKey)&&void 0!==t?t:h,r.label=2
case 2:return[2,P(this.firebaseDependencies,self.registration,this.vapidKey)]}}))}))},e.prototype.deleteToken=function(){return E(this.firebaseDependencies,self.registration)},e.prototype.requestPermission=function(){throw f.create("only-available-in-window")},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw f.create("use-vapid-key-after-get-token")
if("string"!=typeof e||0===e.length)throw f.create("invalid-vapid-key")
this.vapidKey=e},e.prototype.useServiceWorker=function(){throw f.create("only-available-in-window")},e.prototype.onMessage=function(){throw f.create("only-available-in-window")},e.prototype.onTokenRefresh=function(){throw f.create("only-available-in-window")},e.prototype.onPush=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i
return Object(s.__generator)(this,(function(o){switch(o.label){case 0:return(t=function(e){var t=e.data
if(!t)return null
try{return t.json()}catch(e){return null}}(e))?[4,V()]:(console.debug("FirebaseMessaging: failed to get parsed MessagePayload from the PushEvent. Skip handling the push."),[2])
case 1:return function(e){return e.some((function(e){return"visible"===e.visibilityState&&!e.url.startsWith("chrome-extension://")}))}(n=o.sent())?[2,F(n,t)]:(r=!1,t.notification?[4,B(H(t))]:[3,3])
case 2:o.sent(),r=!0,o.label=3
case 3:return!0===r&&!1===this.isOnBackgroundMessageUsed||this.bgMessageHandler&&(i=function(e){var t={from:e.from,collapseKey:e.collapse_key}
return function(e,t){if(t.notification){e.notification={}
var n=t.notification.title
n&&(e.notification.title=n)
var r=t.notification.body
r&&(e.notification.body=r)
var i=t.notification.image
i&&(e.notification.image=i)}}(t,e),function(e,t){t.data&&(e.data=t.data)}(t,e),function(e,t){if(t.fcmOptions){e.fcmOptions={}
var n=t.fcmOptions.link
n&&(e.fcmOptions.link=n)
var r=t.fcmOptions.analytics_label
r&&(e.fcmOptions.analyticsLabel=r)}}(t,e),t}(t),"function"==typeof this.bgMessageHandler?this.bgMessageHandler(i):this.bgMessageHandler.next(i)),[2]}}))}))},e.prototype.onSubChange=function(e){var t,n
return Object(s.__awaiter)(this,void 0,void 0,(function(){var r
return Object(s.__generator)(this,(function(i){switch(i.label){case 0:return e.newSubscription?[3,2]:[4,E(this.firebaseDependencies,self.registration)]
case 1:return i.sent(),[2]
case 2:return[4,k(this.firebaseDependencies)]
case 3:return r=i.sent(),[4,E(this.firebaseDependencies,self.registration)]
case 4:return i.sent(),[4,P(this.firebaseDependencies,self.registration,null!==(n=null===(t=null==r?void 0:r.subscriptionOptions)||void 0===t?void 0:t.vapidKey)&&void 0!==n?n:h)]
case 5:return i.sent(),[2]}}))}))},e.prototype.onNotificationClick=function(e){var t,n
return Object(s.__awaiter)(this,void 0,void 0,(function(){var r,i,o,a,c
return Object(s.__generator)(this,(function(s){switch(s.label){case 0:return(r=null===(n=null===(t=e.notification)||void 0===t?void 0:t.data)||void 0===n?void 0:n.FCM_MSG)?e.action?[2]:(e.stopImmediatePropagation(),e.notification.close(),(i=function(e){var t,n,r,i=null!==(n=null===(t=e.fcmOptions)||void 0===t?void 0:t.link)&&void 0!==n?n:null===(r=e.notification)||void 0===r?void 0:r.click_action
return i||(A(e.data)?self.location.origin:null)}
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
 */(r))?(o=new URL(i,self.location.href),a=new URL(self.location.origin),o.host!==a.host?[2]:[4,U(o)]):[2]):[2]
case 1:return(c=s.sent())?[3,4]:[4,self.clients.openWindow(i)]
case 2:return c=s.sent(),[4,(3e3,new Promise((function(e){setTimeout(e,3e3)})))]
case 3:return s.sent(),[3,6]
case 4:return[4,c.focus()]
case 5:c=s.sent(),s.label=6
case 6:return c?(r.messageType=d.NOTIFICATION_CLICKED,r.isFirebaseMessaging=!0,[2,c.postMessage(r)]):[2]}}))}))},e}()
function H(e){var t,n=Object(s.__assign)({},e.notification)
return n.data=((t={}).FCM_MSG=e,t),n}function U(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n,r,i,o,a,c
return Object(s.__generator)(this,(function(u){switch(u.label){case 0:return[4,V()]
case 1:t=u.sent()
try{for(n=Object(s.__values)(t),r=n.next();!r.done;r=n.next())if(i=r.value,o=new URL(i.url,self.location.href),e.host===o.host)return[2,i]}catch(e){a={error:e}}finally{try{r&&!r.done&&(c=n.return)&&c.call(n)}finally{if(a)throw a.error}}return[2,null]}}))}))}function F(e,t){var n,r
t.isFirebaseMessaging=!0,t.messageType=d.PUSH_RECEIVED
try{for(var i=Object(s.__values)(e),o=i.next();!o.done;o=i.next())o.value.postMessage(t)}catch(e){n={error:e}}finally{try{o&&!o.done&&(r=i.return)&&r.call(i)}finally{if(n)throw n.error}}}function V(){return self.clients.matchAll({type:"window",includeUncontrolled:!0})}function B(e){var t,n=e.actions,r=Notification.maxActions
return n&&r&&n.length>r&&console.warn("This browser only supports "+r+" actions. The remaining actions will not be displayed."),self.registration.showNotification(null!==(t=e.title)&&void 0!==t?t:"",e)}var L=function(){function e(e){var t=this
this.firebaseDependencies=e,this.vapidKey=null,this.onMessageCallback=null,navigator.serviceWorker.addEventListener("message",(function(e){return t.messageEventListener(e)}))}return Object.defineProperty(e.prototype,"app",{get:function(){return this.firebaseDependencies.app},enumerable:!1,configurable:!0}),e.prototype.messageEventListener=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){var t,n
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return(t=e.data).isFirebaseMessaging?(this.onMessageCallback&&t.messageType===d.PUSH_RECEIVED&&("function"==typeof this.onMessageCallback?this.onMessageCallback(function(e){return delete e.messageType,delete e.isFirebaseMessaging,e}
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
 */(Object.assign({},t))):this.onMessageCallback.next(Object.assign({},t))),A(n=t.data)&&"1"===n["google.c.a.e"]?[4,this.logEvent(t.messageType,n)]:[3,2]):[2]
case 1:r.sent(),r.label=2
case 2:return[2]}}))}))},e.prototype.getVapidKey=function(){return this.vapidKey},e.prototype.getSwReg=function(){return this.swRegistration},e.prototype.getToken=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return"default"!==Notification.permission?[3,2]:[4,Notification.requestPermission()]
case 1:t.sent(),t.label=2
case 2:if("granted"!==Notification.permission)throw f.create("permission-blocked")
return[4,this.updateVapidKey(null==e?void 0:e.vapidKey)]
case 3:return t.sent(),[4,this.updateSwReg(null==e?void 0:e.serviceWorkerRegistration)]
case 4:return t.sent(),[2,P(this.firebaseDependencies,this.swRegistration,this.vapidKey)]}}))}))},e.prototype.updateVapidKey=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(t){return e?this.vapidKey=e:this.vapidKey||(this.vapidKey=h),[2]}))}))},e.prototype.updateSwReg=function(e){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return e||this.swRegistration?[3,2]:[4,this.registerDefaultSw()]
case 1:t.sent(),t.label=2
case 2:if(!e&&this.swRegistration)return[2]
if(!(e instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration")
return this.swRegistration=e,[2]}}))}))},e.prototype.registerDefaultSw=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e,t
return Object(s.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,2,,3]),e=this,[4,navigator.serviceWorker.register("/firebase-messaging-sw.js",{scope:"/firebase-cloud-messaging-push-scope"})]
case 1:return e.swRegistration=n.sent(),this.swRegistration.update().catch((function(){})),[3,3]
case 2:throw t=n.sent(),f.create("failed-service-worker-registration",{browserErrorMessage:t.message})
case 3:return[2]}}))}))},e.prototype.deleteToken=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){return Object(s.__generator)(this,(function(e){switch(e.label){case 0:return this.swRegistration?[3,2]:[4,this.registerDefaultSw()]
case 1:e.sent(),e.label=2
case 2:return[2,E(this.firebaseDependencies,this.swRegistration)]}}))}))},e.prototype.requestPermission=function(){return Object(s.__awaiter)(this,void 0,void 0,(function(){var e
return Object(s.__generator)(this,(function(t){switch(t.label){case 0:return"granted"===Notification.permission?[2]:[4,Notification.requestPermission()]
case 1:if("granted"===(e=t.sent()))return[2]
throw"denied"===e?f.create("permission-blocked"):f.create("permission-default")}}))}))},e.prototype.usePublicVapidKey=function(e){if(null!==this.vapidKey)throw f.create("use-vapid-key-after-get-token")
if("string"!=typeof e||0===e.length)throw f.create("invalid-vapid-key")
this.vapidKey=e},e.prototype.useServiceWorker=function(e){if(!(e instanceof ServiceWorkerRegistration))throw f.create("invalid-sw-registration")
if(this.swRegistration)throw f.create("use-sw-after-get-token")
this.swRegistration=e},e.prototype.onMessage=function(e){var t=this
return this.onMessageCallback=e,function(){t.onMessageCallback=null}},e.prototype.setBackgroundMessageHandler=function(){throw f.create("only-available-in-sw")},e.prototype.onBackgroundMessage=function(){throw f.create("only-available-in-sw")},e.prototype.onTokenRefresh=function(){return function(){}},e.prototype.logEvent=function(e,t){return Object(s.__awaiter)(this,void 0,void 0,(function(){var n
return Object(s.__generator)(this,(function(r){switch(r.label){case 0:return n=function(e){switch(e){case d.NOTIFICATION_CLICKED:return"notification_open"
case d.PUSH_RECEIVED:return"notification_foreground"
default:throw new Error}}(e),[4,this.firebaseDependencies.analyticsProvider.get()]
case 1:return r.sent().logEvent(n,{message_id:t["google.c.a.c_id"],message_name:t["google.c.a.c_l"],message_time:t["google.c.a.ts"],message_device_time:Math.floor(Date.now()/1e3)}),[2]}}))}))},e}()
function q(e){return f.create("missing-app-config-values",{valueName:e})}
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
 */var G={isSupported:J}
function J(){return self&&"ServiceWorkerGlobalScope"in self?"indexedDB"in self&&null!==indexedDB&&"PushManager"in self&&"Notification"in self&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey"):"indexedDB"in window&&null!==indexedDB&&navigator.cookieEnabled&&"serviceWorker"in navigator&&"PushManager"in window&&"Notification"in window&&"fetch"in window&&ServiceWorkerRegistration.prototype.hasOwnProperty("showNotification")&&PushSubscription.prototype.hasOwnProperty("getKey")}u.a.INTERNAL.registerComponent(new i.Component("messaging",(function(e){var t=e.getProvider("app").getImmediate(),n={app:t,appConfig:function(e){var t,n
if(!e||!e.options)throw q("App Configuration Object")
if(!e.name)throw q("App Name")
var r=e.options
try{for(var i=Object(s.__values)(["projectId","apiKey","appId","messagingSenderId"]),o=i.next();!o.done;o=i.next()){var a=o.value
if(!r[a])throw q(a)}}catch(e){t={error:e}}finally{try{o&&!o.done&&(n=i.return)&&n.call(i)}finally{if(t)throw t.error}}return{appName:e.name,projectId:r.projectId,apiKey:r.apiKey,appId:r.appId,senderId:r.messagingSenderId}}(t),installations:e.getProvider("installations").getImmediate(),analyticsProvider:e.getProvider("analytics-internal")}
if(!J())throw f.create("unsupported-browser")
return self&&"ServiceWorkerGlobalScope"in self?new W(n):new L(n)}),"PUBLIC").setServiceProps(G))}}])
