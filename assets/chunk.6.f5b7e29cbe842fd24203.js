(window.webpackJsonp_ember_auto_import_=window.webpackJsonp_ember_auto_import_||[]).push([[6],{14:function(t,n,e){"use strict"
e.r(n),e(25)},25:function(t,n,e){function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}(function(){var t,n=e(3).default,r="function"==typeof Object.defineProperties?Object.defineProperty:function(t,n,e){t!=Array.prototype&&t!=Object.prototype&&(t[n]=e.value)},o=function(t){t=["object"==("undefined"==typeof window?"undefined":i(window))&&window,"object"==("undefined"==typeof self?"undefined":i(self))&&self,"object"==("undefined"==typeof global?"undefined":i(global))&&global,t]
for(var n=0;n<t.length;++n){var e=t[n]
if(e&&e.Math==Math)return e}return globalThis}(this)
function a(t){var n=0
return function(){return n<t.length?{done:!1,value:t[n++]}:{done:!0}}}function s(t){var n="undefined"!=typeof Symbol&&Symbol.iterator&&t[Symbol.iterator]
return n?n.call(t):{next:a(t)}}!function(t,n){if(n){var e=o
t=t.split(".")
for(var i=0;i<t.length-1;i++){var a=t[i]
a in e||(e[a]={}),e=e[a]}(n=n(i=e[t=t[t.length-1]]))!=i&&null!=n&&r(e,t,{configurable:!0,writable:!0,value:n})}}("Promise",(function(t){function n(t){this.b=0,this.c=void 0,this.a=[]
var n=this.f()
try{t(n.resolve,n.reject)}catch(t){n.reject(t)}}function e(){this.a=null}function r(t){return t instanceof n?t:new n((function(n){n(t)}))}if(t)return t
e.prototype.b=function(t){if(null==this.a){this.a=[]
var n=this
this.c((function(){n.g()}))}this.a.push(t)}
var a=o.setTimeout
e.prototype.c=function(t){a(t,0)},e.prototype.g=function(){for(;this.a&&this.a.length;){var t=this.a
this.a=[]
for(var n=0;n<t.length;++n){var e=t[n]
t[n]=null
try{e()}catch(t){this.f(t)}}}this.a=null},e.prototype.f=function(t){this.c((function(){throw t}))},n.prototype.f=function(){function t(t){return function(i){e||(e=!0,t.call(n,i))}}var n=this,e=!1
return{resolve:t(this.v),reject:t(this.g)}},n.prototype.v=function(t){if(t===this)this.g(new TypeError("A Promise cannot resolve to itself"))
else if(t instanceof n)this.o(t)
else{t:switch(i(t)){case"object":var e=null!=t
break t
case"function":e=!0
break t
default:e=!1}e?this.m(t):this.h(t)}},n.prototype.m=function(t){var n=void 0
try{n=t.then}catch(t){return void this.g(t)}"function"==typeof n?this.u(n,t):this.h(t)},n.prototype.g=function(t){this.i(2,t)},n.prototype.h=function(t){this.i(1,t)},n.prototype.i=function(t,n){if(0!=this.b)throw Error("Cannot settle("+t+", "+n+"): Promise already settled in state"+this.b)
this.b=t,this.c=n,this.l()},n.prototype.l=function(){if(null!=this.a){for(var t=0;t<this.a.length;++t)u.b(this.a[t])
this.a=null}}
var u=new e
return n.prototype.o=function(t){var n=this.f()
t.Pa(n.resolve,n.reject)},n.prototype.u=function(t,n){var e=this.f()
try{t.call(n,e.resolve,e.reject)}catch(t){e.reject(t)}},n.prototype.then=function(t,e){function i(t,n){return"function"==typeof t?function(n){try{r(t(n))}catch(t){o(t)}}:n}var r,o,a=new n((function(t,n){r=t,o=n}))
return this.Pa(i(t,r),i(e,o)),a},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.Pa=function(t,n){function e(){switch(i.b){case 1:t(i.c)
break
case 2:n(i.c)
break
default:throw Error("Unexpected state: "+i.b)}}var i=this
null==this.a?u.b(e):this.a.push(e)},n.resolve=r,n.reject=function(t){return new n((function(n,e){e(t)}))},n.race=function(t){return new n((function(n,e){for(var i=s(t),o=i.next();!o.done;o=i.next())r(o.value).Pa(n,e)}))},n.all=function(t){var e=s(t),i=e.next()
return i.done?r([]):new n((function(t,n){function o(n){return function(e){a[n]=e,0==--s&&t(a)}}var a=[],s=0
do{a.push(void 0),s++,r(i.value).Pa(o(a.length-1),n),i=e.next()}while(!i.done)}))},n}))
var u=u||{},c=this||self,h=/^[\w+/_-]+[=]{0,2}$/,l=null
function f(){}function d(t){var n=i(t)
if("object"==n){if(!t)return"null"
if(t instanceof Array)return"array"
if(t instanceof Object)return n
var e=Object.prototype.toString.call(t)
if("[object Window]"==e)return"object"
if("[object Array]"==e||"number"==typeof t.length&&void 0!==t.splice&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("splice"))return"array"
if("[object Function]"==e||void 0!==t.call&&void 0!==t.propertyIsEnumerable&&!t.propertyIsEnumerable("call"))return"function"}else if("function"==n&&void 0===t.call)return"object"
return n}function p(t){var n=d(t)
return"array"==n||"object"==n&&"number"==typeof t.length}function v(t){return"function"==d(t)}function m(t){var n=i(t)
return"object"==n&&null!=t||"function"==n}function g(t){return Object.prototype.hasOwnProperty.call(t,b)&&t[b]||(t[b]=++y)}var b="closure_uid_"+(1e9*Math.random()>>>0),y=0
function w(t,n,e){return t.call.apply(t.bind,arguments)}function I(t,n,e){if(!t)throw Error()
if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2)
return function(){var e=Array.prototype.slice.call(arguments)
return Array.prototype.unshift.apply(e,i),t.apply(n,e)}}return function(){return t.apply(n,arguments)}}function T(t,n,e){return(T=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w:I).apply(null,arguments)}function E(t,n){var e=Array.prototype.slice.call(arguments,1)
return function(){var n=e.slice()
return n.push.apply(n,arguments),t.apply(this,n)}}var A=Date.now||function(){return+new Date}
function k(t,n){function e(){}e.prototype=n.prototype,t.$a=n.prototype,t.prototype=new e,t.prototype.constructor=t}function S(t,n,e){this.code=O+t,this.message=n||C[t]||"",this.a=e||null}function N(t){var n=t&&t.code
return n?new S(n.substring(O.length),t.message,t.serverResponse):null}k(S,Error),S.prototype.w=function(){var t={code:this.code,message:this.message}
return this.a&&(t.serverResponse=this.a),t},S.prototype.toJSON=function(){return this.w()}
var _,O="auth/",C={"admin-restricted-operation":"This operation is restricted to administrators only.","argument-error":"","app-not-authorized":"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.","app-not-installed":"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.","captcha-check-failed":"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.","code-expired":"The SMS code has expired. Please re-send the verification code to try again.","cordova-not-ready":"Cordova framework is not ready.","cors-unsupported":"This browser is not supported.","credential-already-in-use":"This credential is already associated with a different user account.","custom-token-mismatch":"The custom token corresponds to a different audience.","requires-recent-login":"This operation is sensitive and requires recent authentication. Log in again before retrying this request.","dynamic-link-not-activated":"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.","email-change-needs-verification":"Multi-factor users must always have a verified email.","email-already-in-use":"The email address is already in use by another account.","expired-action-code":"The action code has expired. ","cancelled-popup-request":"This operation has been cancelled due to another conflicting popup being opened.","internal-error":"An internal error has occurred.","invalid-app-credential":"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.","invalid-app-id":"The mobile app identifier is not registed for the current project.","invalid-user-token":"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.","invalid-auth-event":"An internal error has occurred.","invalid-verification-code":"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure use the verification code provided by the user.","invalid-continue-uri":"The continue URL provided in the request is invalid.","invalid-cordova-configuration":"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.","invalid-custom-token":"The custom token format is incorrect. Please check the documentation.","invalid-dynamic-link-domain":"The provided dynamic link domain is not configured or authorized for the current project.","invalid-email":"The email address is badly formatted.","invalid-api-key":"Your API key is invalid, please check you have copied it correctly.","invalid-cert-hash":"The SHA-1 certificate hash provided is invalid.","invalid-credential":"The supplied auth credential is malformed or has expired.","invalid-message-payload":"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-multi-factor-session":"The request does not contain a valid proof of first factor successful sign-in.","invalid-oauth-provider":"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.","invalid-oauth-client-id":"The OAuth client ID provided is either invalid or does not match the specified API key.","unauthorized-domain":"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.","invalid-action-code":"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.","wrong-password":"The password is invalid or the user does not have a password.","invalid-persistence-type":"The specified persistence type is invalid. It can only be local, session or none.","invalid-phone-number":"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].","invalid-provider-id":"The specified provider ID is invalid.","invalid-recipient-email":"The email corresponding to this action failed to send as the provided recipient email address is invalid.","invalid-sender":"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.","invalid-verification-id":"The verification ID used to create the phone auth credential is invalid.","invalid-tenant-id":"The Auth instance's tenant ID is invalid.","multi-factor-info-not-found":"The user does not have a second factor matching the identifier provided.","multi-factor-auth-required":"Proof of ownership of a second factor is required to complete sign-in.","missing-android-pkg-name":"An Android Package Name must be provided if the Android App is required to be installed.","auth-domain-config-required":"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.","missing-app-credential":"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.","missing-verification-code":"The phone auth credential was created with an empty SMS verification code.","missing-continue-uri":"A continue URL must be provided in the request.","missing-iframe-start":"An internal error has occurred.","missing-ios-bundle-id":"An iOS Bundle ID must be provided if an App Store ID is provided.","missing-multi-factor-info":"No second factor identifier is provided.","missing-multi-factor-session":"The request is missing proof of first factor successful sign-in.","missing-or-invalid-nonce":"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.","missing-phone-number":"To send verification codes, provide a phone number for the recipient.","missing-verification-id":"The phone auth credential was created with an empty verification ID.","app-deleted":"This instance of FirebaseApp has been deleted.","account-exists-with-different-credential":"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.","network-request-failed":"A network error (such as timeout, interrupted connection or unreachable host) has occurred.","no-auth-event":"An internal error has occurred.","no-such-provider":"User was not linked to an account with the given provider.","null-user":"A null user object was provided as the argument for an operation which requires a non-null user object.","operation-not-allowed":"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.","operation-not-supported-in-this-environment":'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',"popup-blocked":"Unable to establish a connection with the popup. It may have been blocked by the browser.","popup-closed-by-user":"The popup has been closed by the user before finalizing the operation.","provider-already-linked":"User can only be linked to one identity for the given provider.","quota-exceeded":"The project's quota for this operation has been exceeded.","redirect-cancelled-by-user":"The redirect operation has been cancelled by the user before finalizing.","redirect-operation-pending":"A redirect sign-in operation is already pending.","rejected-credential":"The request contains malformed or mismatching credentials.","second-factor-already-in-use":"The second factor is already enrolled on this account.","maximum-second-factor-count-exceeded":"The maximum allowed number of second factors on a user has been exceeded.","tenant-id-mismatch":"The provided tenant ID does not match the Auth instance's tenant ID",timeout:"The operation has timed out.","user-token-expired":"The user's credential is no longer valid. The user must sign in again.","too-many-requests":"We have blocked all requests from this device due to unusual activity. Try again later.","unauthorized-continue-uri":"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.","unsupported-first-factor":"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.","unsupported-persistence-type":"The current environment does not support the specified persistence type.","unsupported-tenant-operation":"This operation is not supported in a multi-tenant context.","unverified-email":"The operation requires a verified email.","user-cancelled":"The user did not grant your application the permissions it requested.","user-not-found":"There is no user record corresponding to this identifier. The user may have been deleted.","user-disabled":"The user account has been disabled by an administrator.","user-mismatch":"The supplied credentials do not correspond to the previously signed in user.","user-signed-out":"","weak-password":"The password must be 6 characters long or more.","web-storage-unsupported":"This browser is not supported or 3rd party cookies and data may be disabled."},R={kd:{Sa:"https://staging-identitytoolkit.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Va:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"b"},rd:{Sa:"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://securetoken.googleapis.com/v1/token",Va:"https://identitytoolkit.googleapis.com/v2/",id:"p"},td:{Sa:"https://staging-www.sandbox.googleapis.com/identitytoolkit/v3/relyingparty/",Ya:"https://staging-securetoken.sandbox.googleapis.com/v1/token",Va:"https://staging-identitytoolkit.sandbox.googleapis.com/v2/",id:"s"},ud:{Sa:"https://www-googleapis-test.sandbox.google.com/identitytoolkit/v3/relyingparty/",Ya:"https://test-securetoken.sandbox.googleapis.com/v1/token",Va:"https://test-identitytoolkit.sandbox.googleapis.com/v2/",id:"t"}}
function P(t){for(var n in R)if(R[n].id===t)return{firebaseEndpoint:(t=R[n]).Sa,secureTokenEndpoint:t.Ya,identityPlatformEndpoint:t.Va}
return null}function D(t){if(!t)return!1
try{return!!t.$goog_Thenable}catch(t){return!1}}function L(t){if(Error.captureStackTrace)Error.captureStackTrace(this,L)
else{var n=Error().stack
n&&(this.stack=n)}t&&(this.message=String(t))}function x(t,n){for(var e="",i=(t=t.split("%s")).length-1,r=0;r<i;r++)e+=t[r]+(r<n.length?n[r]:"%s")
L.call(this,e+t[i])}function M(t,n){throw new x("Failure"+(t?": "+t:""),Array.prototype.slice.call(arguments,1))}function j(t,n){this.c=t,this.f=n,this.b=0,this.a=null}function U(t,n){t.f(n),100>t.b&&(t.b++,n.next=t.a,t.a=n)}function V(){this.b=this.a=null}_=P("__EID__")?"__EID__":void 0,k(L,Error),L.prototype.name="CustomError",k(x,L),x.prototype.name="AssertionError",j.prototype.get=function(){if(0<this.b){this.b--
var t=this.a
this.a=t.next,t.next=null}else t=this.c()
return t}
var F=new j((function(){return new q}),(function(t){t.reset()}))
function K(){var t=yn,n=null
return t.a&&(n=t.a,t.a=t.a.next,t.a||(t.b=null),n.next=null),n}function q(){this.next=this.b=this.a=null}V.prototype.add=function(t,n){var e=F.get()
e.set(t,n),this.b?this.b.next=e:this.a=e,this.b=e},q.prototype.set=function(t,n){this.a=t,this.b=n,this.next=null},q.prototype.reset=function(){this.next=this.b=this.a=null}
var H=Array.prototype.indexOf?function(t,n){return Array.prototype.indexOf.call(t,n,void 0)}:function(t,n){if("string"==typeof t)return"string"!=typeof n||1!=n.length?-1:t.indexOf(n,0)
for(var e=0;e<t.length;e++)if(e in t&&t[e]===n)return e
return-1},G=Array.prototype.forEach?function(t,n,e){Array.prototype.forEach.call(t,n,e)}:function(t,n,e){for(var i=t.length,r="string"==typeof t?t.split(""):t,o=0;o<i;o++)o in r&&n.call(e,r[o],o,t)},B=Array.prototype.filter?function(t,n){return Array.prototype.filter.call(t,n,void 0)}:function(t,n){for(var e=t.length,i=[],r=0,o="string"==typeof t?t.split(""):t,a=0;a<e;a++)if(a in o){var s=o[a]
n.call(void 0,s,a,t)&&(i[r++]=s)}return i},W=Array.prototype.map?function(t,n){return Array.prototype.map.call(t,n,void 0)}:function(t,n){for(var e=t.length,i=Array(e),r="string"==typeof t?t.split(""):t,o=0;o<e;o++)o in r&&(i[o]=n.call(void 0,r[o],o,t))
return i},X=Array.prototype.some?function(t,n){return Array.prototype.some.call(t,n,void 0)}:function(t,n){for(var e=t.length,i="string"==typeof t?t.split(""):t,r=0;r<e;r++)if(r in i&&n.call(void 0,i[r],r,t))return!0
return!1}
function J(t,n){return 0<=H(t,n)}function Y(t,n){var e
return(e=0<=(n=H(t,n)))&&Array.prototype.splice.call(t,n,1),e}function z(t,n){!function(t,n){for(var e="string"==typeof t?t.split(""):t,i=t.length-1;0<=i;--i)i in e&&n.call(void 0,e[i],i,t)}(t,(function(e,i){n.call(void 0,e,i,t)&&Array.prototype.splice.call(t,i,1).length}))}function $(t){return Array.prototype.concat.apply([],arguments)}function Z(t){var n=t.length
if(0<n){for(var e=Array(n),i=0;i<n;i++)e[i]=t[i]
return e}return[]}var Q,tt=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]},nt=/&/g,et=/</g,it=/>/g,rt=/"/g,ot=/'/g,at=/\x00/g,st=/[\x00&<>"']/
function ut(t,n){return-1!=t.indexOf(n)}function ct(t,n){return t<n?-1:t>n?1:0}t:{var ht=c.navigator
if(ht){var lt=ht.userAgent
if(lt){Q=lt
break t}}Q=""}function ft(t){return ut(Q,t)}function dt(t,n){for(var e in t)n.call(void 0,t[e],e,t)}function pt(t){for(var n in t)return!1
return!0}function vt(t){var n,e={}
for(n in t)e[n]=t[n]
return e}var mt="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ")
function gt(t,n){for(var e,i,r=1;r<arguments.length;r++){for(e in i=arguments[r])t[e]=i[e]
for(var o=0;o<mt.length;o++)e=mt[o],Object.prototype.hasOwnProperty.call(i,e)&&(t[e]=i[e])}}function bt(t,n){t:{try{var e=t&&t.ownerDocument,r=e&&(e.defaultView||e.parentWindow)
if((r=r||c).Element&&r.Location){var o=r
break t}}catch(t){}o=null}if(o&&void 0!==o[n]&&(!t||!(t instanceof o[n])&&(t instanceof o.Location||t instanceof o.Element))){if(m(t))try{var a=t.constructor.displayName||t.constructor.name||Object.prototype.toString.call(t)}catch(t){a="<object could not be stringified>"}else a=void 0===t?"undefined":null===t?"null":i(t)
M("Argument is not a %s (or a non-Element, non-Location mock); got: %s",n,a)}}function yt(t,n){this.a=t===Tt&&n||"",this.b=It}function wt(t){return t instanceof yt&&t.constructor===yt&&t.b===It?t.a:(M("expected object of type Const, got '"+t+"'"),"type_error:Const")}yt.prototype.sa=!0,yt.prototype.ra=function(){return this.a},yt.prototype.toString=function(){return"Const{"+this.a+"}"}
var It={},Tt={},Et=new yt(Tt,"")
function At(t,n){this.a=t===Ct&&n||"",this.b=Ot}function kt(t){return t instanceof At&&t.constructor===At&&t.b===Ot?t.a:(M("expected object of type TrustedResourceUrl, got '"+t+"' of type "+d(t)),"type_error:TrustedResourceUrl")}function St(t,n){var e=wt(t)
if(!_t.test(e))throw Error("Invalid TrustedResourceUrl format: "+e)
return t=e.replace(Nt,(function(t,i){if(!Object.prototype.hasOwnProperty.call(n,i))throw Error('Found marker, "'+i+'", in format string, "'+e+'", but no valid label mapping found in args: '+JSON.stringify(n))
return(t=n[i])instanceof yt?wt(t):encodeURIComponent(String(t))})),new At(Ct,t)}At.prototype.sa=!0,At.prototype.ra=function(){return this.a.toString()},At.prototype.toString=function(){return"TrustedResourceUrl{"+this.a+"}"}
var Nt=/%{(\w+)}/g,_t=/^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i,Ot={},Ct={}
function Rt(t,n){this.a=t===Mt&&n||"",this.b=xt}function Pt(t){return t instanceof Rt&&t.constructor===Rt&&t.b===xt?t.a:(M("expected object of type SafeUrl, got '"+t+"' of type "+d(t)),"type_error:SafeUrl")}Rt.prototype.sa=!0,Rt.prototype.ra=function(){return this.a.toString()},Rt.prototype.toString=function(){return"SafeUrl{"+this.a+"}"}
var Dt=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i
function Lt(t){return t instanceof Rt?t:(t="object"==i(t)&&t.sa?t.ra():String(t),Dt.test(t)||(t="about:invalid#zClosurez"),new Rt(Mt,t))}var xt={},Mt={}
function jt(){this.a="",this.b=Vt}function Ut(t){return t instanceof jt&&t.constructor===jt&&t.b===Vt?t.a:(M("expected object of type SafeHtml, got '"+t+"' of type "+d(t)),"type_error:SafeHtml")}jt.prototype.sa=!0,jt.prototype.ra=function(){return this.a.toString()},jt.prototype.toString=function(){return"SafeHtml{"+this.a+"}"}
var Vt={}
function Ft(t){var n=new jt
return n.a=t,n}Ft("<!DOCTYPE html>")
var Kt=Ft("")
function qt(t,n){for(var e=t.split("%s"),i="",r=Array.prototype.slice.call(arguments,1);r.length&&1<e.length;)i+=e.shift()+r.shift()
return i+e.join("%s")}function Ht(t){return st.test(t)&&(-1!=t.indexOf("&")&&(t=t.replace(nt,"&amp;")),-1!=t.indexOf("<")&&(t=t.replace(et,"&lt;")),-1!=t.indexOf(">")&&(t=t.replace(it,"&gt;")),-1!=t.indexOf('"')&&(t=t.replace(rt,"&quot;")),-1!=t.indexOf("'")&&(t=t.replace(ot,"&#39;")),-1!=t.indexOf("\0")&&(t=t.replace(at,"&#0;"))),t}function Gt(t){return Gt[" "](t),t}Ft("<br>"),Gt[" "]=f
var Bt,Wt,Xt=ft("Opera"),Jt=ft("Trident")||ft("MSIE"),Yt=ft("Edge"),zt=Yt||Jt,$t=ft("Gecko")&&!(ut(Q.toLowerCase(),"webkit")&&!ft("Edge"))&&!(ft("Trident")||ft("MSIE"))&&!ft("Edge"),Zt=ut(Q.toLowerCase(),"webkit")&&!ft("Edge")
function Qt(){var t=c.document
return t?t.documentMode:void 0}t:{var tn="",nn=(Wt=Q,$t?/rv:([^\);]+)(\)|;)/.exec(Wt):Yt?/Edge\/([\d\.]+)/.exec(Wt):Jt?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(Wt):Zt?/WebKit\/(\S+)/.exec(Wt):Xt?/(?:Version)[ \/]?(\S+)/.exec(Wt):void 0)
if(nn&&(tn=nn?nn[1]:""),Jt){var en=Qt()
if(null!=en&&en>parseFloat(tn)){Bt=String(en)
break t}}Bt=tn}var rn,on={}
function an(t){return function(t,n){var e=on
return Object.prototype.hasOwnProperty.call(e,t)?e[t]:e[t]=n()}(t,(function(){for(var n=0,e=tt(String(Bt)).split("."),i=tt(String(t)).split("."),r=Math.max(e.length,i.length),o=0;0==n&&o<r;o++){var a=e[o]||"",s=i[o]||""
do{if(a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==a[0].length&&0==s[0].length)break
n=ct(0==a[1].length?0:parseInt(a[1],10),0==s[1].length?0:parseInt(s[1],10))||ct(0==a[2].length,0==s[2].length)||ct(a[2],s[2]),a=a[3],s=s[3]}while(0==n)}return 0<=n}))}rn=c.document&&Jt?Qt():void 0
try{new self.OffscreenCanvas(0,0).getContext("2d")}catch(Wt){}var sn=!Jt||9<=Number(rn)
function un(t){var n=document
return"string"==typeof t?n.getElementById(t):t}function cn(t,n){dt(n,(function(n,e){n&&"object"==i(n)&&n.sa&&(n=n.ra()),"style"==e?t.style.cssText=n:"class"==e?t.className=n:"for"==e?t.htmlFor=n:fn.hasOwnProperty(e)?t.setAttribute(fn[e],n):0==e.lastIndexOf("aria-",0)||0==e.lastIndexOf("data-",0)?t.setAttribute(e,n):t[e]=n}))}var hn,ln,fn={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"}
function dn(t,n,e){function i(e){e&&n.appendChild("string"==typeof e?t.createTextNode(e):e)}for(var r=2;r<e.length;r++){var o=e[r]
!p(o)||m(o)&&0<o.nodeType?i(o):G(vn(o)?Z(o):o,i)}}function pn(t,n){return n=String(n),"application/xhtml+xml"===t.contentType&&(n=n.toLowerCase()),t.createElement(n)}function vn(t){if(t&&"number"==typeof t.length){if(m(t))return"function"==typeof t.item||"string"==typeof t.item
if(v(t))return"function"==typeof t.item}return!1}function mn(t){c.setTimeout((function(){throw t}),0)}function gn(t,n){ln||function(){if(c.Promise&&c.Promise.resolve){var t=c.Promise.resolve(void 0)
ln=function(){t.then(wn)}}else ln=function(){var t=wn
!v(c.setImmediate)||c.Window&&c.Window.prototype&&!ft("Edge")&&c.Window.prototype.setImmediate==c.setImmediate?(hn||(hn=function(){var t=c.MessageChannel
if(void 0===t&&"undefined"!=typeof window&&window.postMessage&&window.addEventListener&&!ft("Presto")&&(t=function(){var t=pn(document,"IFRAME")
t.style.display="none",function(t){var n=new At(Ct,wt(Et))
bt(t,"HTMLIFrameElement"),t.src=kt(n).toString()}(t),document.documentElement.appendChild(t)
var n=t.contentWindow;(t=n.document).open(),t.write(Ut(Kt)),t.close()
var e="callImmediate"+Math.random(),i="file:"==n.location.protocol?"*":n.location.protocol+"//"+n.location.host
t=T((function(t){"*"!=i&&t.origin!=i||t.data!=e||this.port1.onmessage()}),this),n.addEventListener("message",t,!1),this.port1={},this.port2={postMessage:function(){n.postMessage(e,i)}}}),void 0!==t&&!ft("Trident")&&!ft("MSIE")){var n=new t,e={},i=e
return n.port1.onmessage=function(){if(void 0!==e.next){var t=(e=e.next).Fb
e.Fb=null,t()}},function(t){i.next={Fb:t},i=i.next,n.port2.postMessage(0)}}return function(t){c.setTimeout(t,0)}}()),hn(t)):c.setImmediate(t)}}(),bn||(ln(),bn=!0),yn.add(t,n)}var bn=!1,yn=new V
function wn(){for(var t;t=K();){try{t.a.call(t.b)}catch(t){mn(t)}U(F,t)}bn=!1}function In(t,n){if(this.a=Tn,this.i=void 0,this.f=this.b=this.c=null,this.g=this.h=!1,t!=f)try{var e=this
t.call(n,(function(t){Ln(e,En,t)}),(function(t){if(!(t instanceof Kn))try{if(t instanceof Error)throw t
throw Error("Promise rejected.")}catch(t){}Ln(e,An,t)}))}catch(t){Ln(this,An,t)}}var Tn=0,En=2,An=3
function kn(){this.next=this.f=this.b=this.g=this.a=null,this.c=!1}kn.prototype.reset=function(){this.f=this.b=this.g=this.a=null,this.c=!1}
var Sn=new j((function(){return new kn}),(function(t){t.reset()}))
function Nn(t,n,e){var i=Sn.get()
return i.g=t,i.b=n,i.f=e,i}function _n(t){if(t instanceof In)return t
var n=new In(f)
return Ln(n,En,t),n}function On(t){return new In((function(n,e){e(t)}))}function Cn(t,n,e){xn(t,n,e,null)||gn(E(n,t))}function Rn(t){return new In((function(n){var e=t.length,i=[]
if(e)for(var r=function(t,r,o){e--,i[t]=r?{Ob:!0,value:o}:{Ob:!1,reason:o},0==e&&n(i)},o=0;o<t.length;o++)Cn(t[o],E(r,o,!0),E(r,o,!1))
else n(i)}))}function Pn(t,n){t.b||t.a!=En&&t.a!=An||Mn(t),t.f?t.f.next=n:t.b=n,t.f=n}function Dn(t,n,e,i){var r=Nn(null,null,null)
return r.a=new In((function(t,o){r.g=n?function(e){try{var r=n.call(i,e)
t(r)}catch(t){o(t)}}:t,r.b=e?function(n){try{var r=e.call(i,n)
void 0===r&&n instanceof Kn?o(n):t(r)}catch(t){o(t)}}:o})),r.a.c=t,Pn(t,r),r.a}function Ln(t,n,e){t.a==Tn&&(t===e&&(n=An,e=new TypeError("Promise cannot resolve to itself")),t.a=1,xn(e,t.Zc,t.$c,t)||(t.i=e,t.a=n,t.c=null,Mn(t),n!=An||e instanceof Kn||function(t,n){t.g=!0,gn((function(){t.g&&Fn.call(null,n)}))}(t,e)))}function xn(t,n,e,i){if(t instanceof In)return Pn(t,Nn(n||f,e||null,i)),!0
if(D(t))return t.then(n,e,i),!0
if(m(t))try{var r=t.then
if(v(r))return function(t,n,e,i,r){function o(t){a||(a=!0,i.call(r,t))}var a=!1
try{n.call(t,(function(t){a||(a=!0,e.call(r,t))}),o)}catch(t){o(t)}}(t,r,n,e,i),!0}catch(t){return e.call(i,t),!0}return!1}function Mn(t){t.h||(t.h=!0,gn(t.fc,t))}function jn(t){var n=null
return t.b&&(n=t.b,t.b=n.next,n.next=null),t.b||(t.f=null),n}function Un(t,n,e,i){if(e==An&&n.b&&!n.c)for(;t&&t.g;t=t.c)t.g=!1
if(n.a)n.a.c=null,Vn(n,e,i)
else try{n.c?n.g.call(n.f):Vn(n,e,i)}catch(t){Fn.call(null,t)}U(Sn,n)}function Vn(t,n,e){n==En?t.g.call(t.f,e):t.b&&t.b.call(t.f,e)}In.prototype.then=function(t,n,e){return Dn(this,v(t)?t:null,v(n)?n:null,e)},In.prototype.$goog_Thenable=!0,(t=In.prototype).na=function(t,n){return(t=Nn(t,t,n)).c=!0,Pn(this,t),this},t.s=function(t,n){return Dn(this,null,t,n)},t.cancel=function(t){if(this.a==Tn){var n=new Kn(t)
gn((function(){!function t(n,e){if(n.a==Tn)if(n.c){var i=n.c
if(i.b){for(var r=0,o=null,a=null,s=i.b;s&&(s.c||(r++,s.a==n&&(o=s),!(o&&1<r)));s=s.next)o||(a=s)
o&&(i.a==Tn&&1==r?t(i,e):(a?((r=a).next==i.f&&(i.f=r),r.next=r.next.next):jn(i),Un(i,o,An,e)))}n.c=null}else Ln(n,An,e)}(this,n)}),this)}},t.Zc=function(t){this.a=Tn,Ln(this,En,t)},t.$c=function(t){this.a=Tn,Ln(this,An,t)},t.fc=function(){for(var t;t=jn(this);)Un(this,t,this.a,this.i)
this.h=!1}
var Fn=mn
function Kn(t){L.call(this,t)}function qn(){0!=Hn&&(Gn[g(this)]=this),this.xa=this.xa,this.oa=this.oa}k(Kn,L),Kn.prototype.name="cancel"
var Hn=0,Gn={}
function Bn(t){if(!t.xa&&(t.xa=!0,t.Da(),0!=Hn)){var n=g(t)
if(0!=Hn&&t.oa&&0<t.oa.length)throw Error(t+" did not empty its onDisposeCallbacks queue. This probably means it overrode dispose() or disposeInternal() without calling the superclass' method.")
delete Gn[n]}}qn.prototype.xa=!1,qn.prototype.Da=function(){if(this.oa)for(;this.oa.length;)this.oa.shift()()}
var Wn=Object.freeze||function(t){return t},Xn=!Jt||9<=Number(rn),Jn=Jt&&!an("9"),Yn=function(){if(!c.addEventListener||!Object.defineProperty)return!1
var t=!1,n=Object.defineProperty({},"passive",{get:function(){t=!0}})
try{c.addEventListener("test",f,n),c.removeEventListener("test",f,n)}catch(t){}return t}()
function zn(t,n){this.type=t,this.b=this.target=n,this.defaultPrevented=!1}function $n(t,n){if(zn.call(this,t?t.type:""),this.relatedTarget=this.b=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.pointerId=0,this.pointerType="",this.a=null,t){var e=this.type=t.type,i=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null
if(this.target=t.target||t.srcElement,this.b=n,n=t.relatedTarget){if($t){t:{try{Gt(n.nodeName)
var r=!0
break t}catch(t){}r=!1}r||(n=null)}}else"mouseover"==e?n=t.fromElement:"mouseout"==e&&(n=t.toElement)
this.relatedTarget=n,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:Zn[t.pointerType]||"",this.a=t,t.defaultPrevented&&this.preventDefault()}}zn.prototype.preventDefault=function(){this.defaultPrevented=!0},k($n,zn)
var Zn=Wn({2:"touch",3:"pen",4:"mouse"})
$n.prototype.preventDefault=function(){$n.$a.preventDefault.call(this)
var t=this.a
if(t.preventDefault)t.preventDefault()
else if(t.returnValue=!1,Jn)try{(t.ctrlKey||112<=t.keyCode&&123>=t.keyCode)&&(t.keyCode=-1)}catch(t){}},$n.prototype.g=function(){return this.a}
var Qn="closure_listenable_"+(1e6*Math.random()|0),te=0
function ne(t,n,e,i,r){this.listener=t,this.proxy=null,this.src=n,this.type=e,this.capture=!!i,this.Ua=r,this.key=++te,this.va=this.Oa=!1}function ee(t){t.va=!0,t.listener=null,t.proxy=null,t.src=null,t.Ua=null}function ie(t){this.src=t,this.a={},this.b=0}function re(t,n){var e=n.type
e in t.a&&Y(t.a[e],n)&&(ee(n),0==t.a[e].length&&(delete t.a[e],t.b--))}function oe(t,n,e,i){for(var r=0;r<t.length;++r){var o=t[r]
if(!o.va&&o.listener==n&&o.capture==!!e&&o.Ua==i)return r}return-1}ie.prototype.add=function(t,n,e,i,r){var o=t.toString();(t=this.a[o])||(t=this.a[o]=[],this.b++)
var a=oe(t,n,i,r)
return-1<a?(n=t[a],e||(n.Oa=!1)):((n=new ne(n,this.src,o,!!i,r)).Oa=e,t.push(n)),n}
var ae="closure_lm_"+(1e6*Math.random()|0),se={}
function ue(t,n,e,i,r){if(i&&i.once)he(t,n,e,i,r)
else if(Array.isArray(n))for(var o=0;o<n.length;o++)ue(t,n[o],e,i,r)
else e=ye(e),t&&t[Qn]?Ie(t,n,e,m(i)?!!i.capture:!!i,r):ce(t,n,e,!1,i,r)}function ce(t,n,e,i,r,o){if(!n)throw Error("Invalid event type")
var a=m(r)?!!r.capture:!!r,s=ge(t)
if(s||(t[ae]=s=new ie(t)),!(e=s.add(n,e,i,a,o)).proxy)if(i=function(){var t=me,n=Xn?function(e){return t.call(n.src,n.listener,e)}:function(e){if(!(e=t.call(n.src,n.listener,e)))return e}
return n}(),e.proxy=i,i.src=t,i.listener=e,t.addEventListener)Yn||(r=a),void 0===r&&(r=!1),t.addEventListener(n.toString(),i,r)
else if(t.attachEvent)t.attachEvent(de(n.toString()),i)
else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.")
t.addListener(i)}}function he(t,n,e,i,r){if(Array.isArray(n))for(var o=0;o<n.length;o++)he(t,n[o],e,i,r)
else e=ye(e),t&&t[Qn]?Te(t,n,e,m(i)?!!i.capture:!!i,r):ce(t,n,e,!0,i,r)}function le(t,n,e,i,r){if(Array.isArray(n))for(var o=0;o<n.length;o++)le(t,n[o],e,i,r)
else i=m(i)?!!i.capture:!!i,e=ye(e),t&&t[Qn]?(t=t.v,(n=String(n).toString())in t.a&&-1<(e=oe(o=t.a[n],e,i,r))&&(ee(o[e]),Array.prototype.splice.call(o,e,1),0==o.length&&(delete t.a[n],t.b--))):t&&(t=ge(t))&&(n=t.a[n.toString()],t=-1,n&&(t=oe(n,e,i,r)),(e=-1<t?n[t]:null)&&fe(e))}function fe(t){if("number"!=typeof t&&t&&!t.va){var n=t.src
if(n&&n[Qn])re(n.v,t)
else{var e=t.type,i=t.proxy
n.removeEventListener?n.removeEventListener(e,i,t.capture):n.detachEvent?n.detachEvent(de(e),i):n.addListener&&n.removeListener&&n.removeListener(i),(e=ge(n))?(re(e,t),0==e.b&&(e.src=null,n[ae]=null)):ee(t)}}}function de(t){return t in se?se[t]:se[t]="on"+t}function pe(t,n,e,i){var r=!0
if((t=ge(t))&&(n=t.a[n.toString()]))for(n=n.concat(),t=0;t<n.length;t++){var o=n[t]
o&&o.capture==e&&!o.va&&(o=ve(o,i),r=r&&!1!==o)}return r}function ve(t,n){var e=t.listener,i=t.Ua||t.src
return t.Oa&&fe(t),e.call(i,n)}function me(t,n){if(t.va)return!0
if(!Xn){if(!n)t:{n=["window","event"]
for(var e=c,i=0;i<n.length;i++)if(null==(e=e[n[i]])){n=null
break t}n=e}if(n=new $n(i=n,this),e=!0,!(0>i.keyCode||null!=i.returnValue)){t:{var r=!1
if(0==i.keyCode)try{i.keyCode=-1
break t}catch(t){r=!0}(r||null==i.returnValue)&&(i.returnValue=!0)}for(i=[],r=n.b;r;r=r.parentNode)i.push(r)
for(t=t.type,r=i.length-1;0<=r;r--){n.b=i[r]
var o=pe(i[r],t,!0,n)
e=e&&o}for(r=0;r<i.length;r++)n.b=i[r],o=pe(i[r],t,!1,n),e=e&&o}return e}return ve(t,new $n(n,this))}function ge(t){return(t=t[ae])instanceof ie?t:null}var be="__closure_events_fn_"+(1e9*Math.random()>>>0)
function ye(t){return v(t)?t:(t[be]||(t[be]=function(n){return t.handleEvent(n)}),t[be])}function we(){qn.call(this),this.v=new ie(this),this.$b=this,this.fb=null}function Ie(t,n,e,i,r){t.v.add(String(n),e,!1,i,r)}function Te(t,n,e,i,r){t.v.add(String(n),e,!0,i,r)}function Ee(t,n,e,i){if(!(n=t.v.a[String(n)]))return!0
n=n.concat()
for(var r=!0,o=0;o<n.length;++o){var a=n[o]
if(a&&!a.va&&a.capture==e){var s=a.listener,u=a.Ua||a.src
a.Oa&&re(t.v,a),r=!1!==s.call(u,i)&&r}}return r&&!i.defaultPrevented}function Ae(t,n,e){if(v(t))e&&(t=T(t,e))
else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument")
t=T(t.handleEvent,t)}return 2147483647<Number(n)?-1:c.setTimeout(t,n||0)}function ke(t){var n=null
return new In((function(e,i){-1==(n=Ae((function(){e(void 0)}),t))&&i(Error("Failed to schedule timer."))})).s((function(t){throw c.clearTimeout(n),t}))}function Se(t){if(t.V&&"function"==typeof t.V)return t.V()
if("string"==typeof t)return t.split("")
if(p(t)){for(var n=[],e=t.length,i=0;i<e;i++)n.push(t[i])
return n}for(i in n=[],e=0,t)n[e++]=t[i]
return n}function Ne(t){if(t.Y&&"function"==typeof t.Y)return t.Y()
if(!t.V||"function"!=typeof t.V){if(p(t)||"string"==typeof t){var n=[]
t=t.length
for(var e=0;e<t;e++)n.push(e)
return n}for(var i in n=[],e=0,t)n[e++]=i
return n}}function _e(t,n){this.b={},this.a=[],this.c=0
var e=arguments.length
if(1<e){if(e%2)throw Error("Uneven number of arguments")
for(var i=0;i<e;i+=2)this.set(arguments[i],arguments[i+1])}else if(t)if(t instanceof _e)for(e=t.Y(),i=0;i<e.length;i++)this.set(e[i],t.get(e[i]))
else for(i in t)this.set(i,t[i])}function Oe(t){if(t.c!=t.a.length){for(var n=0,e=0;n<t.a.length;){var i=t.a[n]
Ce(t.b,i)&&(t.a[e++]=i),n++}t.a.length=e}if(t.c!=t.a.length){var r={}
for(e=n=0;n<t.a.length;)Ce(r,i=t.a[n])||(t.a[e++]=i,r[i]=1),n++
t.a.length=e}}function Ce(t,n){return Object.prototype.hasOwnProperty.call(t,n)}k(we,qn),we.prototype[Qn]=!0,we.prototype.addEventListener=function(t,n,e,i){ue(this,t,n,e,i)},we.prototype.removeEventListener=function(t,n,e,i){le(this,t,n,e,i)},we.prototype.dispatchEvent=function(t){var n,e=this.fb
if(e)for(n=[];e;e=e.fb)n.push(e)
e=this.$b
var i=t.type||t
if("string"==typeof t)t=new zn(t,e)
else if(t instanceof zn)t.target=t.target||e
else{var r=t
gt(t=new zn(i,e),r)}if(r=!0,n)for(var o=n.length-1;0<=o;o--){var a=t.b=n[o]
r=Ee(a,i,!0,t)&&r}if(r=Ee(a=t.b=e,i,!0,t)&&r,r=Ee(a,i,!1,t)&&r,n)for(o=0;o<n.length;o++)r=Ee(a=t.b=n[o],i,!1,t)&&r
return r},we.prototype.Da=function(){if(we.$a.Da.call(this),this.v){var t,n=this.v
for(t in n.a){for(var e=n.a[t],i=0;i<e.length;i++)ee(e[i])
delete n.a[t],n.b--}}this.fb=null},(t=_e.prototype).V=function(){Oe(this)
for(var t=[],n=0;n<this.a.length;n++)t.push(this.b[this.a[n]])
return t},t.Y=function(){return Oe(this),this.a.concat()},t.clear=function(){this.b={},this.c=this.a.length=0},t.get=function(t,n){return Ce(this.b,t)?this.b[t]:n},t.set=function(t,n){Ce(this.b,t)||(this.c++,this.a.push(t)),this.b[t]=n},t.forEach=function(t,n){for(var e=this.Y(),i=0;i<e.length;i++){var r=e[i],o=this.get(r)
t.call(n,o,r,this)}}
var Re=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/
function Pe(t,n){var e
this.a=this.l=this.f="",this.g=null,this.h=this.c="",this.i=!1,t instanceof Pe?(this.i=void 0!==n?n:t.i,De(this,t.f),this.l=t.l,this.a=t.a,Le(this,t.g),this.c=t.c,xe(this,ti(t.b)),this.h=t.h):t&&(e=String(t).match(Re))?(this.i=!!n,De(this,e[1]||"",!0),this.l=Fe(e[2]||""),this.a=Fe(e[3]||"",!0),Le(this,e[4]),this.c=Fe(e[5]||"",!0),xe(this,e[6]||"",!0),this.h=Fe(e[7]||"")):(this.i=!!n,this.b=new Je(null,this.i))}function De(t,n,e){t.f=e?Fe(n,!0):n,t.f&&(t.f=t.f.replace(/:$/,""))}function Le(t,n){if(n){if(n=Number(n),isNaN(n)||0>n)throw Error("Bad port number "+n)
t.g=n}else t.g=null}function xe(t,n,e){n instanceof Je?(t.b=n,function(t,n){n&&!t.f&&(Ye(t),t.c=null,t.a.forEach((function(t,n){var e=n.toLowerCase()
n!=e&&($e(this,n),Qe(this,e,t))}),t)),t.f=n}(t.b,t.i)):(e||(n=Ke(n,We)),t.b=new Je(n,t.i))}function Me(t,n,e){t.b.set(n,e)}function je(t,n){return t.b.get(n)}function Ue(t){return t instanceof Pe?new Pe(t):new Pe(t,void 0)}function Ve(t,n,e,i){var r=new Pe(null,void 0)
return t&&De(r,t),n&&(r.a=n),e&&Le(r,e),i&&(r.c=i),r}function Fe(t,n){return t?n?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Ke(t,n,e){return"string"==typeof t?(t=encodeURI(t).replace(n,qe),e&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function qe(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}Pe.prototype.toString=function(){var t=[],n=this.f
n&&t.push(Ke(n,He,!0),":")
var e=this.a
return(e||"file"==n)&&(t.push("//"),(n=this.l)&&t.push(Ke(n,He,!0),"@"),t.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(e=this.g)&&t.push(":",String(e))),(e=this.c)&&(this.a&&"/"!=e.charAt(0)&&t.push("/"),t.push(Ke(e,"/"==e.charAt(0)?Be:Ge,!0))),(e=this.b.toString())&&t.push("?",e),(e=this.h)&&t.push("#",Ke(e,Xe)),t.join("")},Pe.prototype.resolve=function(t){var n=new Pe(this),e=!!t.f
e?De(n,t.f):e=!!t.l,e?n.l=t.l:e=!!t.a,e?n.a=t.a:e=null!=t.g
var i=t.c
if(e)Le(n,t.g)
else if(e=!!t.c){if("/"!=i.charAt(0))if(this.a&&!this.c)i="/"+i
else{var r=n.c.lastIndexOf("/");-1!=r&&(i=n.c.substr(0,r+1)+i)}if(".."==(r=i)||"."==r)i=""
else if(ut(r,"./")||ut(r,"/.")){i=0==r.lastIndexOf("/",0),r=r.split("/")
for(var o=[],a=0;a<r.length;){var s=r[a++]
"."==s?i&&a==r.length&&o.push(""):".."==s?((1<o.length||1==o.length&&""!=o[0])&&o.pop(),i&&a==r.length&&o.push("")):(o.push(s),i=!0)}i=o.join("/")}else i=r}return e?n.c=i:e=""!==t.b.toString(),e?xe(n,ti(t.b)):e=!!t.h,e&&(n.h=t.h),n}
var He=/[#\/\?@]/g,Ge=/[#\?:]/g,Be=/[#\?]/g,We=/[#\?@]/g,Xe=/#/g
function Je(t,n){this.b=this.a=null,this.c=t||null,this.f=!!n}function Ye(t){t.a||(t.a=new _e,t.b=0,t.c&&function(t,n){if(t){t=t.split("&")
for(var e=0;e<t.length;e++){var i=t[e].indexOf("="),r=null
if(0<=i){var o=t[e].substring(0,i)
r=t[e].substring(i+1)}else o=t[e]
n(o,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}(t.c,(function(n,e){t.add(decodeURIComponent(n.replace(/\+/g," ")),e)})))}function ze(t){var n=Ne(t)
if(void 0===n)throw Error("Keys are undefined")
var e=new Je(null,void 0)
t=Se(t)
for(var i=0;i<n.length;i++){var r=n[i],o=t[i]
Array.isArray(o)?Qe(e,r,o):e.add(r,o)}return e}function $e(t,n){Ye(t),n=ni(t,n),Ce(t.a.b,n)&&(t.c=null,t.b-=t.a.get(n).length,Ce((t=t.a).b,n)&&(delete t.b[n],t.c--,t.a.length>2*t.c&&Oe(t)))}function Ze(t,n){return Ye(t),n=ni(t,n),Ce(t.a.b,n)}function Qe(t,n,e){$e(t,n),0<e.length&&(t.c=null,t.a.set(ni(t,n),Z(e)),t.b+=e.length)}function ti(t){var n=new Je
return n.c=t.c,t.a&&(n.a=new _e(t.a),n.b=t.b),n}function ni(t,n){return n=String(n),t.f&&(n=n.toLowerCase()),n}function ei(t){var n=[]
return function t(n,e,r){if(null==e)r.push("null")
else{if("object"==i(e)){if(Array.isArray(e)){var o=e
e=o.length,r.push("[")
for(var a="",s=0;s<e;s++)r.push(a),t(n,o[s],r),a=","
return void r.push("]")}if(!(e instanceof String||e instanceof Number||e instanceof Boolean)){for(o in r.push("{"),a="",e)Object.prototype.hasOwnProperty.call(e,o)&&"function"!=typeof(s=e[o])&&(r.push(a),ai(o,r),r.push(":"),t(n,s,r),a=",")
return void r.push("}")}e=e.valueOf()}switch(i(e)){case"string":ai(e,r)
break
case"number":r.push(isFinite(e)&&!isNaN(e)?String(e):"null")
break
case"boolean":r.push(String(e))
break
case"function":r.push("null")
break
default:throw Error("Unknown type: "+i(e))}}}(new ii,t,n),n.join("")}function ii(){}(t=Je.prototype).add=function(t,n){Ye(this),this.c=null,t=ni(this,t)
var e=this.a.get(t)
return e||this.a.set(t,e=[]),e.push(n),this.b+=1,this},t.clear=function(){this.a=this.c=null,this.b=0},t.forEach=function(t,n){Ye(this),this.a.forEach((function(e,i){G(e,(function(e){t.call(n,e,i,this)}),this)}),this)},t.Y=function(){Ye(this)
for(var t=this.a.V(),n=this.a.Y(),e=[],i=0;i<n.length;i++)for(var r=t[i],o=0;o<r.length;o++)e.push(n[i])
return e},t.V=function(t){Ye(this)
var n=[]
if("string"==typeof t)Ze(this,t)&&(n=$(n,this.a.get(ni(this,t))))
else{t=this.a.V()
for(var e=0;e<t.length;e++)n=$(n,t[e])}return n},t.set=function(t,n){return Ye(this),this.c=null,Ze(this,t=ni(this,t))&&(this.b-=this.a.get(t).length),this.a.set(t,[n]),this.b+=1,this},t.get=function(t,n){return t&&0<(t=this.V(t)).length?String(t[0]):n},t.toString=function(){if(this.c)return this.c
if(!this.a)return""
for(var t=[],n=this.a.Y(),e=0;e<n.length;e++){var i=n[e],r=encodeURIComponent(String(i))
i=this.V(i)
for(var o=0;o<i.length;o++){var a=r
""!==i[o]&&(a+="="+encodeURIComponent(String(i[o]))),t.push(a)}}return this.c=t.join("&")}
var ri={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\v":"\\u000b"},oi=/\uffff/.test("￿")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g
function ai(t,n){n.push('"',t.replace(oi,(function(t){var n=ri[t]
return n||(n="\\u"+(65536|t.charCodeAt(0)).toString(16).substr(1),ri[t]=n),n})),'"')}function si(){var t=Si()
return Jt&&!!rn&&11==rn||/Edge\/\d+/.test(t)}function ui(){return c.window&&c.window.location.href||self&&self.location&&self.location.href||""}function ci(t,n){n=n||c.window
var e="about:blank"
t&&(e=Pt(Lt(t))),n.location.href=e}function hi(t){return!!((t=(t||Si()).toLowerCase()).match(/android/)||t.match(/webos/)||t.match(/iphone|ipad|ipod/)||t.match(/blackberry/)||t.match(/windows phone/)||t.match(/iemobile/))}function li(t){t=t||c.window
try{t.close()}catch(t){}}function fi(t,n,e){var r=Math.floor(1e9*Math.random()).toString()
n=n||500,e=e||600
var o=(window.screen.availHeight-e)/2,a=(window.screen.availWidth-n)/2
for(s in n={width:n,height:e,top:0<o?o:0,left:0<a?a:0,location:!0,resizable:!0,statusbar:!0,toolbar:!1},e=Si().toLowerCase(),r&&(n.target=r,ut(e,"crios/")&&(n.target="_blank")),Ei(Si())==Ii&&(t=t||"http://localhost",n.scrollbars=!0),e=t||"",(t=n)||(t={}),r=window,n=e instanceof Rt?e:Lt(void 0!==e.href?e.href:String(e)),e=t.target||e.target,o=[],t)switch(s){case"width":case"height":case"top":case"left":o.push(s+"="+t[s])
break
case"target":case"noopener":case"noreferrer":break
default:o.push(s+"="+(t[s]?1:0))}var s=o.join(",")
if((ft("iPhone")&&!ft("iPod")&&!ft("iPad")||ft("iPad")||ft("iPod"))&&r.navigator&&r.navigator.standalone&&e&&"_self"!=e?(bt(s=pn(document,"A"),"HTMLAnchorElement"),n instanceof Rt||n instanceof Rt||(n="object"==i(n)&&n.sa?n.ra():String(n),Dt.test(n)||(n="about:invalid#zClosurez"),n=new Rt(Mt,n)),s.href=Pt(n),s.setAttribute("target",e),t.noreferrer&&s.setAttribute("rel","noreferrer"),(t=document.createEvent("MouseEvent")).initMouseEvent("click",!0,!0,r,1),s.dispatchEvent(t),s={}):t.noreferrer?(s=r.open("",e,s),t=Pt(n),s&&(zt&&ut(t,";")&&(t="'"+t.replace(/'/g,"%27")+"'"),s.opener=null,t=Ft('<meta name="referrer" content="no-referrer"><meta http-equiv="refresh" content="0; url='+Ht(t)+'">'),r=s.document)&&(r.write(Ut(t)),r.close())):(s=r.open(Pt(n),e,s))&&t.noopener&&(s.opener=null),s)try{s.focus()}catch(t){}return s}var di=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,pi=/^[^@]+@[^@]+$/
function vi(){var t=null
return new In((function(n){"complete"==c.document.readyState?n():(t=function(){n()},he(window,"load",t))})).s((function(n){throw le(window,"load",t),n}))}function mi(t){return t=t||Si(),!("file:"!==Ri()&&"ionic:"!==Ri()||!t.toLowerCase().match(/iphone|ipad|ipod|android/))}function gi(){var t=c.window
try{return!(!t||t==t.top)}catch(t){return!1}}function bi(){return void 0!==c.WorkerGlobalScope&&"function"==typeof c.importScripts}function yi(){return n.INTERNAL.hasOwnProperty("reactNative")?"ReactNative":n.INTERNAL.hasOwnProperty("node")?"Node":bi()?"Worker":"Browser"}function wi(){var t=yi()
return"ReactNative"===t||"Node"===t}var Ii="Firefox",Ti="Chrome"
function Ei(t){var n=t.toLowerCase()
return ut(n,"opera/")||ut(n,"opr/")||ut(n,"opios/")?"Opera":ut(n,"iemobile")?"IEMobile":ut(n,"msie")||ut(n,"trident/")?"IE":ut(n,"edge/")?"Edge":ut(n,"firefox/")?Ii:ut(n,"silk/")?"Silk":ut(n,"blackberry")?"Blackberry":ut(n,"webos")?"Webos":!ut(n,"safari/")||ut(n,"chrome/")||ut(n,"crios/")||ut(n,"android")?!ut(n,"chrome/")&&!ut(n,"crios/")||ut(n,"edge/")?ut(n,"android")?"Android":(t=t.match(/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/))&&2==t.length?t[1]:"Other":Ti:"Safari"}var Ai={ld:"FirebaseCore-web",nd:"FirebaseUI-web"}
function ki(t,n){n=n||[]
var e,i=[],r={}
for(e in Ai)r[Ai[e]]=!0
for(e=0;e<n.length;e++)void 0!==r[n[e]]&&(delete r[n[e]],i.push(n[e]))
return i.sort(),(n=i).length||(n=["FirebaseCore-web"]),"Browser"===(i=yi())?i=Ei(r=Si()):"Worker"===i&&(i=Ei(r=Si())+"-"+i),i+"/JsCore/"+t+"/"+n.join(",")}function Si(){return c.navigator&&c.navigator.userAgent||""}function Ni(t,n){t=t.split("."),n=n||c
for(var e=0;e<t.length&&"object"==i(n)&&null!=n;e++)n=n[t[e]]
return e!=t.length&&(n=void 0),n}function _i(){try{var t=c.localStorage,n=Mi()
if(t)return t.setItem(n,"1"),t.removeItem(n),!si()||!!c.indexedDB}catch(t){return bi()&&!!c.indexedDB}return!1}function Oi(){return(Ci()||"chrome-extension:"===Ri()||mi())&&!wi()&&_i()&&!bi()}function Ci(){return"http:"===Ri()||"https:"===Ri()}function Ri(){return c.location&&c.location.protocol||null}function Pi(t){return!hi(t=t||Si())&&Ei(t)!=Ii}function Di(t){return void 0===t?null:ei(t)}function Li(t){var n,e={}
for(n in t)t.hasOwnProperty(n)&&null!==t[n]&&void 0!==t[n]&&(e[n]=t[n])
return e}function xi(t){if(null!==t)return JSON.parse(t)}function Mi(t){return t||Math.floor(1e9*Math.random()).toString()}function ji(t){return"Safari"!=Ei(t=t||Si())&&!t.toLowerCase().match(/iphone|ipad|ipod/)}function Ui(){var t=c.___jsl
if(t&&t.H)for(var n in t.H)if(t.H[n].r=t.H[n].r||[],t.H[n].L=t.H[n].L||[],t.H[n].r=t.H[n].L.concat(),t.CP)for(var e=0;e<t.CP.length;e++)t.CP[e]=null}function Vi(t,n){if(t>n)throw Error("Short delay should be less than long delay!")
this.a=t,this.c=n,t=Si(),n=yi(),this.b=hi(t)||"ReactNative"===n}function Fi(){var t=c.document
return!t||void 0===t.visibilityState||"visible"==t.visibilityState}function Ki(t){"undefined"!=typeof console&&"function"==typeof console.warn&&console.warn(t)}function qi(t){try{var n=new Date(parseInt(t,10))
if(!isNaN(n.getTime())&&!/[^0-9]/.test(t))return n.toUTCString()}catch(t){}return null}function Hi(){return!(!Ni("fireauth.oauthhelper",c)&&!Ni("fireauth.iframe",c))}Vi.prototype.get=function(){var t=c.navigator
return!t||"boolean"!=typeof t.onLine||!Ci()&&"chrome-extension:"!==Ri()&&void 0===t.connection||t.onLine?this.b?this.c:this.a:Math.min(5e3,this.a)}
var Gi,Bi={}
function Wi(t){Bi[t]||(Bi[t]=!0,Ki(t))}try{var Xi={}
Object.defineProperty(Xi,"abcd",{configurable:!0,enumerable:!0,value:1}),Object.defineProperty(Xi,"abcd",{configurable:!0,enumerable:!0,value:2}),Gi=2==Xi.abcd}catch(Wt){Gi=!1}function Ji(t,n,e){Gi?Object.defineProperty(t,n,{configurable:!0,enumerable:!0,value:e}):t[n]=e}function Yi(t,n){if(n)for(var e in n)n.hasOwnProperty(e)&&Ji(t,e,n[e])}function zi(t){var n={}
return Yi(n,t),n}function $i(t){var n=t
if("object"==i(t)&&null!=t)for(var e in n="length"in t?[]:{},t)Ji(n,e,$i(t[e]))
return n}function Zi(t){var n=t&&(t[ir]?"phone":null)
if(!(n&&t&&t[er]))throw new S("internal-error","Internal assert: invalid MultiFactorInfo object")
Ji(this,"uid",t[er]),Ji(this,"displayName",t[tr]||null)
var e=null
t[nr]&&(e=new Date(t[nr]).toUTCString()),Ji(this,"enrollmentTime",e),Ji(this,"factorId",n)}function Qi(t){try{var n=new rr(t)}catch(t){n=null}return n}Zi.prototype.w=function(){return{uid:this.uid,displayName:this.displayName,factorId:this.factorId,enrollmentTime:this.enrollmentTime}}
var tr="displayName",nr="enrolledAt",er="mfaEnrollmentId",ir="phoneInfo"
function rr(t){Zi.call(this,t),Ji(this,"phoneNumber",t[ir])}function or(t){var n={},e=t[cr],i=t[lr],r=t[fr]
if(t=Qi(t[hr]),!r||r!=sr&&r!=ur&&!e||r==ur&&!i||r==ar&&!t)throw Error("Invalid checkActionCode response!")
r==ur?(n[pr]=e||null,n[mr]=e||null,n[dr]=i):(n[pr]=i||null,n[mr]=i||null,n[dr]=e||null),n[vr]=t||null,Ji(this,br,r),Ji(this,gr,$i(n))}k(rr,Zi),rr.prototype.w=function(){var t=rr.$a.w.call(this)
return t.phoneNumber=this.phoneNumber,t}
var ar="REVERT_SECOND_FACTOR_ADDITION",sr="EMAIL_SIGNIN",ur="VERIFY_AND_CHANGE_EMAIL",cr="email",hr="mfaInfo",lr="newEmail",fr="requestType",dr="email",pr="fromEmail",vr="multiFactorInfo",mr="previousEmail",gr="data",br="operation"
function yr(t){var n=je(t=Ue(t),wr)||null,e=je(t,Ir)||null,i=je(t,Ar)||null
if(i=i&&Sr[i]||null,!n||!e||!i)throw new S("argument-error",wr+", "+Ir+"and "+Ar+" are required in a valid action code URL.")
Yi(this,{apiKey:n,operation:i,code:e,continueUrl:je(t,Tr)||null,languageCode:je(t,Er)||null,tenantId:je(t,kr)||null})}var wr="apiKey",Ir="oobCode",Tr="continueUrl",Er="languageCode",Ar="mode",kr="tenantId",Sr={recoverEmail:"RECOVER_EMAIL",resetPassword:"PASSWORD_RESET",revertSecondFactorAddition:ar,signIn:sr,verifyAndChangeEmail:ur,verifyEmail:"VERIFY_EMAIL"}
function Nr(t){try{return new yr(t)}catch(t){return null}}function _r(t){var n=t[Dr]
if(void 0===n)throw new S("missing-continue-uri")
if("string"!=typeof n||"string"==typeof n&&!n.length)throw new S("invalid-continue-uri")
this.h=n,this.b=this.a=null,this.g=!1
var e=t[Or]
if(e&&"object"===i(e)){n=e[Mr]
var r=e[Lr]
if(e=e[xr],"string"==typeof n&&n.length){if(this.a=n,void 0!==r&&"boolean"!=typeof r)throw new S("argument-error",Lr+" property must be a boolean when specified.")
if(this.g=!!r,void 0!==e&&("string"!=typeof e||"string"==typeof e&&!e.length))throw new S("argument-error",xr+" property must be a non empty string when specified.")
this.b=e||null}else{if(void 0!==n)throw new S("argument-error",Mr+" property must be a non empty string when specified.")
if(void 0!==r||void 0!==e)throw new S("missing-android-pkg-name")}}else if(void 0!==e)throw new S("argument-error",Or+" property must be a non null object when specified.")
if(this.f=null,(n=t[Pr])&&"object"===i(n)){if("string"==typeof(n=n[jr])&&n.length)this.f=n
else if(void 0!==n)throw new S("argument-error",jr+" property must be a non empty string when specified.")}else if(void 0!==n)throw new S("argument-error",Pr+" property must be a non null object when specified.")
if(void 0!==(n=t[Rr])&&"boolean"!=typeof n)throw new S("argument-error",Rr+" property must be a boolean when specified.")
if(this.c=!!n,void 0!==(t=t[Cr])&&("string"!=typeof t||"string"==typeof t&&!t.length))throw new S("argument-error",Cr+" property must be a non empty string when specified.")
this.i=t||null}var Or="android",Cr="dynamicLinkDomain",Rr="handleCodeInApp",Pr="iOS",Dr="url",Lr="installApp",xr="minimumVersion",Mr="packageName",jr="bundleId"
function Ur(t){var n={}
for(var e in n.continueUrl=t.h,n.canHandleCodeInApp=t.c,(n.androidPackageName=t.a)&&(n.androidMinimumVersion=t.b,n.androidInstallApp=t.g),n.iOSBundleId=t.f,n.dynamicLinkDomain=t.i,n)null===n[e]&&delete n[e]
return n}var Vr=null
function Fr(t){var n=qr(t)
if(!(n&&n.sub&&n.iss&&n.aud&&n.exp))throw Error("Invalid JWT")
this.g=t,this.c=n.exp,this.h=n.sub,A(),this.a=n.provider_id||n.firebase&&n.firebase.sign_in_provider||null,this.f=n.firebase&&n.firebase.tenant||null,this.b=!!n.is_anonymous||"anonymous"==this.a}function Kr(t){try{return new Fr(t)}catch(t){return null}}function qr(t){if(!t)return null
if(3!=(t=t.split(".")).length)return null
for(var n=(4-(t=t[1]).length%4)%4,e=0;e<n;e++)t+="."
try{return JSON.parse(function(t){var n=""
return function(t,n){function e(n){for(;i<t.length;){var e=t.charAt(i++),r=Vr[e]
if(null!=r)return r
if(!/^[\s\xa0]*$/.test(e))throw Error("Unknown base64 encoding at char: "+e)}return n}!function(){if(!Vr){Vr={}
for(var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),n=["+/=","+/","-_=","-_.","-_"],e=0;5>e;e++)for(var i=t.concat(n[e].split("")),r=0;r<i.length;r++){var o=i[r]
void 0===Vr[o]&&(Vr[o]=r)}}}()
for(var i=0;;){var r=e(-1),o=e(0),a=e(64),s=e(64)
if(64===s&&-1===r)break
n(r<<2|o>>4),64!=a&&(n(o<<4&240|a>>2),64!=s&&n(a<<6&192|s))}}(t,(function(t){n+=String.fromCharCode(t)})),n}(t))}catch(t){}return null}Fr.prototype.S=function(){return this.f},Fr.prototype.i=function(){return this.b},Fr.prototype.toString=function(){return this.g}
var Hr="oauth_consumer_key oauth_nonce oauth_signature oauth_signature_method oauth_timestamp oauth_token oauth_version".split(" "),Gr=["client_id","response_type","scope","redirect_uri","state"],Br={md:{Ja:"locale",ua:700,ta:600,fa:"facebook.com",Wa:Gr},od:{Ja:null,ua:500,ta:750,fa:"github.com",Wa:Gr},pd:{Ja:"hl",ua:515,ta:680,fa:"google.com",Wa:Gr},vd:{Ja:"lang",ua:485,ta:705,fa:"twitter.com",Wa:Hr},jd:{Ja:"locale",ua:640,ta:600,fa:"apple.com",Wa:[]}}
function Wr(t){for(var n in Br)if(Br[n].fa==t)return Br[n]
return null}function Xr(t){var n={}
n["facebook.com"]=Zr,n["google.com"]=to,n["github.com"]=Qr,n["twitter.com"]=no
var e=t&&t[Yr]
try{if(e)return n[e]?new n[e](t):new $r(t)
if(void 0!==t[Jr])return new zr(t)}catch(t){}return null}var Jr="idToken",Yr="providerId"
function zr(t){var n=t[Yr]
if(!n&&t[Jr]){var e=Kr(t[Jr])
e&&e.a&&(n=e.a)}if(!n)throw Error("Invalid additional user info!")
"anonymous"!=n&&"custom"!=n||(n=null),e=!1,void 0!==t.isNewUser?e=!!t.isNewUser:"identitytoolkit#SignupNewUserResponse"===t.kind&&(e=!0),Ji(this,"providerId",n),Ji(this,"isNewUser",e)}function $r(t){zr.call(this,t),Ji(this,"profile",$i((t=xi(t.rawUserInfo||"{}"))||{}))}function Zr(t){if($r.call(this,t),"facebook.com"!=this.providerId)throw Error("Invalid provider ID!")}function Qr(t){if($r.call(this,t),"github.com"!=this.providerId)throw Error("Invalid provider ID!")
Ji(this,"username",this.profile&&this.profile.login||null)}function to(t){if($r.call(this,t),"google.com"!=this.providerId)throw Error("Invalid provider ID!")}function no(t){if($r.call(this,t),"twitter.com"!=this.providerId)throw Error("Invalid provider ID!")
Ji(this,"username",t.screenName||null)}function eo(t){var n=Ue(t),e=je(n,"link"),i=je(Ue(e),"link")
return n=je(n,"deep_link_id"),je(Ue(n),"link")||n||i||e||t}function io(t,n){if(!t&&!n)throw new S("internal-error","Internal assert: no raw session string available")
if(t&&n)throw new S("internal-error","Internal assert: unable to determine the session type")
this.a=t||null,this.b=n||null,this.type=this.a?ro:oo}k($r,zr),k(Zr,$r),k(Qr,$r),k(to,$r),k(no,$r)
var ro="enroll",oo="signin"
function ao(){}function so(t,n){return t.then((function(t){if(t[Ja]){var e=Kr(t[Ja])
if(!e||n!=e.h)throw new S("user-mismatch")
return t}throw new S("user-mismatch")})).s((function(t){throw t&&t.code&&t.code==O+"user-not-found"?new S("user-mismatch"):t}))}function uo(t,n){if(!n)throw new S("internal-error","failed to construct a credential")
this.a=n,Ji(this,"providerId",t),Ji(this,"signInMethod",t)}function co(t){return{pendingToken:t.a,requestUri:"http://localhost"}}function ho(t){if(t&&t.providerId&&t.signInMethod&&0==t.providerId.indexOf("saml.")&&t.pendingToken)try{return new uo(t.providerId,t.pendingToken)}catch(t){}return null}function lo(t,n,e){if(this.a=null,n.idToken||n.accessToken)n.idToken&&Ji(this,"idToken",n.idToken),n.accessToken&&Ji(this,"accessToken",n.accessToken),n.nonce&&!n.pendingToken&&Ji(this,"nonce",n.nonce),n.pendingToken&&(this.a=n.pendingToken)
else{if(!n.oauthToken||!n.oauthTokenSecret)throw new S("internal-error","failed to construct a credential")
Ji(this,"accessToken",n.oauthToken),Ji(this,"secret",n.oauthTokenSecret)}Ji(this,"providerId",t),Ji(this,"signInMethod",e)}function fo(t){var n={}
return t.idToken&&(n.id_token=t.idToken),t.accessToken&&(n.access_token=t.accessToken),t.secret&&(n.oauth_token_secret=t.secret),n.providerId=t.providerId,t.nonce&&!t.a&&(n.nonce=t.nonce),n={postBody:ze(n).toString(),requestUri:"http://localhost"},t.a&&(delete n.postBody,n.pendingToken=t.a),n}function po(t){if(t&&t.providerId&&t.signInMethod){var n={idToken:t.oauthIdToken,accessToken:t.oauthTokenSecret?null:t.oauthAccessToken,oauthTokenSecret:t.oauthTokenSecret,oauthToken:t.oauthTokenSecret&&t.oauthAccessToken,nonce:t.nonce,pendingToken:t.pendingToken}
try{return new lo(t.providerId,n,t.signInMethod)}catch(t){}}return null}function vo(t,n){this.Pc=n||[],Yi(this,{providerId:t,isOAuthProvider:!0}),this.Hb={},this.ob=(Wr(t)||{}).Ja||null,this.nb=null}function mo(t){if("string"!=typeof t||0!=t.indexOf("saml."))throw new S("argument-error",'SAML provider IDs must be prefixed with "saml."')
vo.call(this,t,[])}function go(t){vo.call(this,t,Gr),this.a=[]}function bo(){go.call(this,"facebook.com")}function yo(t){if(!t)throw new S("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var n=t
return m(t)&&(n=t.accessToken),(new bo).credential({accessToken:n})}function wo(){go.call(this,"github.com")}function Io(t){if(!t)throw new S("argument-error","credential failed: expected 1 argument (the OAuth access token).")
var n=t
return m(t)&&(n=t.accessToken),(new wo).credential({accessToken:n})}function To(){go.call(this,"google.com"),this.Ca("profile")}function Eo(t,n){var e=t
return m(t)&&(e=t.idToken,n=t.accessToken),(new To).credential({idToken:e,accessToken:n})}function Ao(){vo.call(this,"twitter.com",Hr)}function ko(t,n){var e=t
if(m(e)||(e={oauthToken:t,oauthTokenSecret:n}),!e.oauthToken||!e.oauthTokenSecret)throw new S("argument-error","credential failed: expected 2 arguments (the OAuth access token and secret).")
return new lo("twitter.com",e,"twitter.com")}function So(t,n,e){this.a=t,this.f=n,Ji(this,"providerId","password"),Ji(this,"signInMethod",e===_o.EMAIL_LINK_SIGN_IN_METHOD?_o.EMAIL_LINK_SIGN_IN_METHOD:_o.EMAIL_PASSWORD_SIGN_IN_METHOD)}function No(t){return t&&t.email&&t.password?new So(t.email,t.password,t.signInMethod):null}function _o(){Yi(this,{providerId:"password",isOAuthProvider:!1})}function Oo(t,n){if(!(n=Co(n)))throw new S("argument-error","Invalid email link!")
return new So(t,n.code,_o.EMAIL_LINK_SIGN_IN_METHOD)}function Co(t){return(t=Nr(t=eo(t)))&&t.operation===sr?t:null}function Ro(t){if(!(t.cb&&t.bb||t.La&&t.ea))throw new S("internal-error")
this.a=t,Ji(this,"providerId","phone"),this.fa="phone",Ji(this,"signInMethod","phone")}function Po(t){if(t&&"phone"===t.providerId&&(t.verificationId&&t.verificationCode||t.temporaryProof&&t.phoneNumber)){var n={}
return G(["verificationId","verificationCode","temporaryProof","phoneNumber"],(function(e){t[e]&&(n[e]=t[e])})),new Ro(n)}return null}function Do(t){return t.a.La&&t.a.ea?{temporaryProof:t.a.La,phoneNumber:t.a.ea}:{sessionInfo:t.a.cb,code:t.a.bb}}function Lo(t){try{this.a=t||n.auth()}catch(t){throw new S("argument-error","Either an instance of firebase.auth.Auth must be passed as an argument to the firebase.auth.PhoneAuthProvider constructor, or the default firebase App instance must be initialized via firebase.initializeApp().")}Yi(this,{providerId:"phone",isOAuthProvider:!1})}function xo(t,n){if(!t)throw new S("missing-verification-id")
if(!n)throw new S("missing-verification-code")
return new Ro({cb:t,bb:n})}function Mo(t){if(t.temporaryProof&&t.phoneNumber)return new Ro({La:t.temporaryProof,ea:t.phoneNumber})
var n=t&&t.providerId
if(!n||"password"===n)return null
var e=t&&t.oauthAccessToken,i=t&&t.oauthTokenSecret,r=t&&t.nonce,o=t&&t.oauthIdToken,a=t&&t.pendingToken
try{switch(n){case"google.com":return Eo(o,e)
case"facebook.com":return yo(e)
case"github.com":return Io(e)
case"twitter.com":return ko(e,i)
default:return e||i||o||a?a?0==n.indexOf("saml.")?new uo(n,a):new lo(n,{pendingToken:a,idToken:t.oauthIdToken,accessToken:t.oauthAccessToken},n):new go(n).credential({idToken:o,accessToken:e,rawNonce:r}):null}}catch(t){return null}}function jo(t){if(!t.isOAuthProvider)throw new S("invalid-oauth-provider")}function Uo(t,n,e,i,r,o,a){if(this.c=t,this.b=n||null,this.g=e||null,this.f=i||null,this.i=o||null,this.h=a||null,this.a=r||null,!this.g&&!this.a)throw new S("invalid-auth-event")
if(this.g&&this.a)throw new S("invalid-auth-event")
if(this.g&&!this.f)throw new S("invalid-auth-event")}function Vo(t){return(t=t||{}).type?new Uo(t.type,t.eventId,t.urlResponse,t.sessionId,t.error&&N(t.error),t.postBody,t.tenantId):null}function Fo(){this.b=null,this.a=[]}io.prototype.Ha=function(){return this.a?_n(this.a):_n(this.b)},io.prototype.w=function(){return this.type==ro?{multiFactorSession:{idToken:this.a}}:{multiFactorSession:{pendingCredential:this.b}}},ao.prototype.ja=function(){},ao.prototype.b=function(){},ao.prototype.c=function(){},ao.prototype.w=function(){},uo.prototype.ja=function(t){return vs(t,co(this))},uo.prototype.b=function(t,n){var e=co(this)
return e.idToken=n,ms(t,e)},uo.prototype.c=function(t,n){return so(gs(t,co(this)),n)},uo.prototype.w=function(){return{providerId:this.providerId,signInMethod:this.signInMethod,pendingToken:this.a}},lo.prototype.ja=function(t){return vs(t,fo(this))},lo.prototype.b=function(t,n){var e=fo(this)
return e.idToken=n,ms(t,e)},lo.prototype.c=function(t,n){return so(gs(t,fo(this)),n)},lo.prototype.w=function(){var t={providerId:this.providerId,signInMethod:this.signInMethod}
return this.idToken&&(t.oauthIdToken=this.idToken),this.accessToken&&(t.oauthAccessToken=this.accessToken),this.secret&&(t.oauthTokenSecret=this.secret),this.nonce&&(t.nonce=this.nonce),this.a&&(t.pendingToken=this.a),t},vo.prototype.Ka=function(t){return this.Hb=vt(t),this},k(mo,vo),k(go,vo),go.prototype.Ca=function(t){return J(this.a,t)||this.a.push(t),this},go.prototype.Pb=function(){return Z(this.a)},go.prototype.credential=function(t,n){var e
if(!(e=m(t)?{idToken:t.idToken||null,accessToken:t.accessToken||null,nonce:t.rawNonce||null}:{idToken:t||null,accessToken:n||null}).idToken&&!e.accessToken)throw new S("argument-error","credential failed: must provide the ID token and/or the access token.")
return new lo(this.providerId,e,this.providerId)},k(bo,go),Ji(bo,"PROVIDER_ID","facebook.com"),Ji(bo,"FACEBOOK_SIGN_IN_METHOD","facebook.com"),k(wo,go),Ji(wo,"PROVIDER_ID","github.com"),Ji(wo,"GITHUB_SIGN_IN_METHOD","github.com"),k(To,go),Ji(To,"PROVIDER_ID","google.com"),Ji(To,"GOOGLE_SIGN_IN_METHOD","google.com"),k(Ao,vo),Ji(Ao,"PROVIDER_ID","twitter.com"),Ji(Ao,"TWITTER_SIGN_IN_METHOD","twitter.com"),So.prototype.ja=function(t){return this.signInMethod==_o.EMAIL_LINK_SIGN_IN_METHOD?Zs(t,ks,{email:this.a,oobCode:this.f}):Zs(t,Xs,{email:this.a,password:this.f})},So.prototype.b=function(t,n){return this.signInMethod==_o.EMAIL_LINK_SIGN_IN_METHOD?Zs(t,Ss,{idToken:n,email:this.a,oobCode:this.f}):Zs(t,Vs,{idToken:n,email:this.a,password:this.f})},So.prototype.c=function(t,n){return so(this.ja(t),n)},So.prototype.w=function(){return{email:this.a,password:this.f,signInMethod:this.signInMethod}},Yi(_o,{PROVIDER_ID:"password"}),Yi(_o,{EMAIL_LINK_SIGN_IN_METHOD:"emailLink"}),Yi(_o,{EMAIL_PASSWORD_SIGN_IN_METHOD:"password"}),Ro.prototype.ja=function(t){return t.eb(Do(this))},Ro.prototype.b=function(t,n){var e=Do(this)
return e.idToken=n,Zs(t,Ys,e)},Ro.prototype.c=function(t,n){var e=Do(this)
return e.operation="REAUTH",so(t=Zs(t,zs,e),n)},Ro.prototype.w=function(){var t={providerId:"phone"}
return this.a.cb&&(t.verificationId=this.a.cb),this.a.bb&&(t.verificationCode=this.a.bb),this.a.La&&(t.temporaryProof=this.a.La),this.a.ea&&(t.phoneNumber=this.a.ea),t},Lo.prototype.eb=function(t,n){var e=this.a.a
return _n(n.verify()).then((function(i){if("string"!=typeof i)throw new S("argument-error","An implementation of firebase.auth.ApplicationVerifier.prototype.verify() must return a firebase.Promise that resolves with a string.")
switch(n.type){case"recaptcha":var r=m(t)?t.session:null,o=m(t)?t.phoneNumber:t
return(r&&r.type==ro?r.Ha().then((function(t){return function(t,n){return Zs(t,Ks,n).then((function(t){return t.phoneSessionInfo.sessionInfo}))}(e,{idToken:t,phoneEnrollmentInfo:{phoneNumber:o,recaptchaToken:i}})})):r&&r.type==oo?r.Ha().then((function(n){return function(t,n){return Zs(t,qs,n).then((function(t){return t.phoneResponseInfo.sessionInfo}))}(e,{mfaPendingCredential:n,mfaEnrollmentId:t.multiFactorHint&&t.multiFactorHint.uid||t.multiFactorUid,phoneSignInInfo:{recaptchaToken:i}})})):function(t,n){return Zs(t,js,n)}(e,{phoneNumber:o,recaptchaToken:i})).then((function(t){return"function"==typeof n.reset&&n.reset(),t}),(function(t){throw"function"==typeof n.reset&&n.reset(),t}))
default:throw new S("argument-error",'Only firebase.auth.ApplicationVerifiers with type="recaptcha" are currently supported.')}}))},Yi(Lo,{PROVIDER_ID:"phone"}),Yi(Lo,{PHONE_SIGN_IN_METHOD:"phone"}),Uo.prototype.getUid=function(){var t=[]
return t.push(this.c),this.b&&t.push(this.b),this.f&&t.push(this.f),this.h&&t.push(this.h),t.join("-")},Uo.prototype.S=function(){return this.h},Uo.prototype.w=function(){return{type:this.c,eventId:this.b,urlResponse:this.g,sessionId:this.f,postBody:this.i,tenantId:this.h,error:this.a&&this.a.w()}}
var Ko,qo=null
function Ho(t){var n="unauthorized-domain",e=void 0,i=Ue(t)
t=i.a,"chrome-extension"==(i=i.f)?e=qt("This chrome extension ID (chrome-extension://%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):"http"==i||"https"==i?e=qt("This domain (%s) is not authorized to run this operation. Add it to the OAuth redirect domains list in the Firebase console -> Auth section -> Sign in method tab.",t):n="operation-not-supported-in-this-environment",S.call(this,n,e)}function Go(t,n,e){S.call(this,t,e),(t=n||{}).Ib&&Ji(this,"email",t.Ib),t.ea&&Ji(this,"phoneNumber",t.ea),t.credential&&Ji(this,"credential",t.credential),t.Yb&&Ji(this,"tenantId",t.Yb)}function Bo(t){if(t.code){var n=t.code||""
0==n.indexOf(O)&&(n=n.substring(O.length))
var e={credential:Mo(t),Yb:t.tenantId}
if(t.email)e.Ib=t.email
else if(t.phoneNumber)e.ea=t.phoneNumber
else if(!e.credential)return new S(n,t.message||void 0)
return new Go(n,e,t.message)}return null}function Wo(){}function Xo(t){return t.c||(t.c=t.b())}function Jo(){}function Yo(t){if(!t.f&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var n=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],e=0;e<n.length;e++){var i=n[e]
try{return new ActiveXObject(i),t.f=i}catch(t){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed")}return t.f}function zo(){}function $o(){this.a=new XDomainRequest,this.readyState=0,this.onreadystatechange=null,this.responseType=this.responseText=this.response="",this.status=-1,this.statusText="",this.a.onload=T(this.pc,this),this.a.onerror=T(this.Rb,this),this.a.onprogress=T(this.qc,this),this.a.ontimeout=T(this.uc,this)}function Zo(t,n){t.readyState=n,t.onreadystatechange&&t.onreadystatechange()}function Qo(t,n,e){this.reset(t,n,e,void 0,void 0)}function ta(t){this.f=t,this.b=this.c=this.a=null}function na(t,n){this.name=t,this.value=n}k(Ho,S),k(Go,S),Go.prototype.w=function(){var t={code:this.code,message:this.message}
this.email&&(t.email=this.email),this.phoneNumber&&(t.phoneNumber=this.phoneNumber),this.tenantId&&(t.tenantId=this.tenantId)
var n=this.credential&&this.credential.w()
return n&&gt(t,n),t},Go.prototype.toJSON=function(){return this.w()},Wo.prototype.c=null,k(Jo,Wo),Jo.prototype.a=function(){var t=Yo(this)
return t?new ActiveXObject(t):new XMLHttpRequest},Jo.prototype.b=function(){var t={}
return Yo(this)&&(t[0]=!0,t[1]=!0),t},Ko=new Jo,k(zo,Wo),zo.prototype.a=function(){var t=new XMLHttpRequest
if("withCredentials"in t)return t
if("undefined"!=typeof XDomainRequest)return new $o
throw Error("Unsupported browser")},zo.prototype.b=function(){return{}},(t=$o.prototype).open=function(t,n,e){if(null!=e&&!e)throw Error("Only async requests are supported.")
this.a.open(t,n)},t.send=function(t){if(t){if("string"!=typeof t)throw Error("Only string data is supported")
this.a.send(t)}else this.a.send()},t.abort=function(){this.a.abort()},t.setRequestHeader=function(){},t.getResponseHeader=function(t){return"content-type"==t.toLowerCase()?this.a.contentType:""},t.pc=function(){this.status=200,this.response=this.responseText=this.a.responseText,Zo(this,4)},t.Rb=function(){this.status=500,this.response=this.responseText="",Zo(this,4)},t.uc=function(){this.Rb()},t.qc=function(){this.status=200,Zo(this,1)},t.getAllResponseHeaders=function(){return"content-type: "+this.a.contentType},Qo.prototype.a=null,Qo.prototype.reset=function(t,n,e,i,r){i||A(),delete this.a},na.prototype.toString=function(){return this.name}
var ea=new na("SEVERE",1e3),ia=new na("WARNING",900),ra=new na("CONFIG",700),oa=new na("FINE",500)
ta.prototype.log=function(t,n,e){if(t.value>=function t(n){return n.c?n.c:n.a?t(n.a):(M("Root logger has no level set."),null)}(this).value)for(v(n)&&(n=n()),t=new Qo(t,String(n),this.f),e&&(t.a=e),e=this;e;)e=e.a}
var aa={},sa=null
function ua(t){var n
if(sa||(sa=new ta(""),aa[""]=sa,sa.c=ra),!(n=aa[t])){n=new ta(t)
var e=t.lastIndexOf("."),i=t.substr(e+1);(e=ua(t.substr(0,e))).b||(e.b={}),e.b[i]=n,n.a=e,aa[t]=n}return n}function ca(t,n){t&&t.log(oa,n,void 0)}function ha(t){this.f=t}function la(t){we.call(this),this.o=t,this.readyState=fa,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.i=new Headers,this.b=null,this.m="GET",this.g="",this.a=!1,this.h=ua("goog.net.FetchXmlHttp"),this.l=this.c=this.f=null}k(ha,Wo),ha.prototype.a=function(){return new la(this.f)},ha.prototype.b=function(t){return function(){return t}}({}),k(la,we)
var fa=0
function da(t){t.c.read().then(t.oc.bind(t)).catch(t.Ta.bind(t))}function pa(t,n){n&&t.f&&(t.status=t.f.status,t.statusText=t.f.statusText),t.readyState=4,t.f=null,t.c=null,t.l=null,va(t)}function va(t){t.onreadystatechange&&t.onreadystatechange.call(t)}function ma(t){we.call(this),this.headers=new _e,this.O=t||null,this.c=!1,this.A=this.a=null,this.h=this.P=this.l="",this.f=this.N=this.i=this.G=!1,this.g=0,this.o=null,this.m=ga,this.u=this.R=!1}(t=la.prototype).open=function(t,n){if(this.readyState!=fa)throw this.abort(),Error("Error reopening a connection")
this.m=t,this.g=n,this.readyState=1,va(this)},t.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ")
this.a=!0
var n={headers:this.i,method:this.m,credentials:void 0,cache:void 0}
t&&(n.body=t),this.o.fetch(new Request(this.g,n)).then(this.tc.bind(this),this.Ta.bind(this))},t.abort=function(){this.response=this.responseText="",this.i=new Headers,this.status=0,this.c&&this.c.cancel("Request was aborted."),1<=this.readyState&&this.a&&4!=this.readyState&&(this.a=!1,pa(this,!1)),this.readyState=fa},t.tc=function(t){this.a&&(this.f=t,this.b||(this.b=t.headers,this.readyState=2,va(this)),this.a&&(this.readyState=3,va(this),this.a&&("arraybuffer"===this.responseType?t.arrayBuffer().then(this.rc.bind(this),this.Ta.bind(this)):void 0!==c.ReadableStream&&"body"in t?(this.response=this.responseText="",this.c=t.body.getReader(),this.l=new TextDecoder,da(this)):t.text().then(this.sc.bind(this),this.Ta.bind(this)))))},t.oc=function(t){if(this.a){var n=this.l.decode(t.value?t.value:new Uint8Array(0),{stream:!t.done})
n&&(this.response=this.responseText+=n),t.done?pa(this,!0):va(this),3==this.readyState&&da(this)}},t.sc=function(t){this.a&&(this.response=this.responseText=t,pa(this,!0))},t.rc=function(t){this.a&&(this.response=t,pa(this,!0))},t.Ta=function(t){var n=this.h
n&&n.log(ia,"Failed to fetch url "+this.g,t instanceof Error?t:Error(t)),this.a&&pa(this,!0)},t.setRequestHeader=function(t,n){this.i.append(t,n)},t.getResponseHeader=function(t){return this.b?this.b.get(t.toLowerCase())||"":((t=this.h)&&t.log(ia,"Attempting to get response header but no headers have been received for url: "+this.g,void 0),"")},t.getAllResponseHeaders=function(){if(!this.b){var t=this.h
return t&&t.log(ia,"Attempting to get all response headers but no headers have been received for url: "+this.g,void 0),""}t=[]
for(var n=this.b.entries(),e=n.next();!e.done;)e=e.value,t.push(e[0]+": "+e[1]),e=n.next()
return t.join("\r\n")},k(ma,we)
var ga=""
ma.prototype.b=ua("goog.net.XhrIo")
var ba=/^https?$/i,ya=["POST","PUT"]
function wa(t){return"content-type"==t.toLowerCase()}function Ia(t,n){t.c=!1,t.a&&(t.f=!0,t.a.abort(),t.f=!1),t.h=n,Ta(t),Aa(t)}function Ta(t){t.G||(t.G=!0,t.dispatchEvent("complete"),t.dispatchEvent("error"))}function Ea(t){if(t.c&&void 0!==u)if(t.A[1]&&4==Sa(t)&&2==Na(t))ca(t.b,_a(t,"Local request error detected and ignored"))
else if(t.i&&4==Sa(t))Ae(t.Ub,0,t)
else if(t.dispatchEvent("readystatechange"),4==Sa(t)){ca(t.b,_a(t,"Request complete")),t.c=!1
try{var n,e=Na(t)
t:switch(e){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0
break t
default:i=!1}if(!(n=i)){var r
if(r=0===e){var o=String(t.l).match(Re)[1]||null
if(!o&&c.self&&c.self.location){var a=c.self.location.protocol
o=a.substr(0,a.length-1)}r=!ba.test(o?o.toLowerCase():"")}n=r}if(n)t.dispatchEvent("complete"),t.dispatchEvent("success")
else{try{var s=2<Sa(t)?t.a.statusText:""}catch(n){ca(t.b,"Can not get status: "+n.message),s=""}t.h=s+" ["+Na(t)+"]",Ta(t)}}finally{Aa(t)}}}function Aa(t,n){if(t.a){ka(t)
var e=t.a,i=t.A[0]?f:null
t.a=null,t.A=null,n||t.dispatchEvent("ready")
try{e.onreadystatechange=i}catch(n){(t=t.b)&&t.log(ea,"Problem encountered resetting onreadystatechange: "+n.message,void 0)}}}function ka(t){t.a&&t.u&&(t.a.ontimeout=null),t.o&&(c.clearTimeout(t.o),t.o=null)}function Sa(t){return t.a?t.a.readyState:0}function Na(t){try{return 2<Sa(t)?t.a.status:-1}catch(t){return-1}}function _a(t,n){return n+" ["+t.P+" "+t.l+" "+Na(t)+"]"}function Oa(t){var n=Fa
this.g=[],this.u=n,this.o=t||null,this.f=this.a=!1,this.c=void 0,this.m=this.A=this.i=!1,this.h=0,this.b=null,this.l=0}function Ca(t,n,e){t.a=!0,t.c=e,t.f=!n,La(t)}function Ra(t){if(t.a){if(!t.m)throw new xa(t)
t.m=!1}}function Pa(t,n,e,i){t.g.push([n,e,i]),t.a&&La(t)}function Da(t){return X(t.g,(function(t){return v(t[1])}))}function La(t){if(t.h&&t.a&&Da(t)){var n=t.h,e=Ua[n]
e&&(c.clearTimeout(e.a),delete Ua[n]),t.h=0}t.b&&(t.b.l--,delete t.b),n=t.c
for(var i=e=!1;t.g.length&&!t.i;){var r=t.g.shift(),o=r[0],a=r[1]
if(r=r[2],o=t.f?a:o)try{var s=o.call(r||t.o,n)
void 0!==s&&(t.f=t.f&&(s==n||s instanceof Error),t.c=n=s),(D(n)||"function"==typeof c.Promise&&n instanceof c.Promise)&&(i=!0,t.i=!0)}catch(i){n=i,t.f=!0,Da(t)||(e=!0)}}t.c=n,i&&(s=T(t.v,t,!0),i=T(t.v,t,!1),n instanceof Oa?(Pa(n,s,i),n.A=!0):n.then(s,i)),e&&(n=new ja(n),Ua[n.a]=n,t.h=n.a)}function xa(){L.call(this)}function Ma(){L.call(this)}function ja(t){this.a=c.setTimeout(T(this.c,this),0),this.b=t}(t=ma.prototype).Ma=function(){void 0!==u&&this.a&&(this.h="Timed out after "+this.g+"ms, aborting",ca(this.b,_a(this,this.h)),this.dispatchEvent("timeout"),this.abort(8))},t.abort=function(){this.a&&this.c&&(ca(this.b,_a(this,"Aborting")),this.c=!1,this.f=!0,this.a.abort(),this.f=!1,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Aa(this))},t.Da=function(){this.a&&(this.c&&(this.c=!1,this.f=!0,this.a.abort(),this.f=!1),Aa(this,!0)),ma.$a.Da.call(this)},t.Ub=function(){this.xa||(this.N||this.i||this.f?Ea(this):this.Ic())},t.Ic=function(){Ea(this)},t.getResponse=function(){try{if(!this.a)return null
if("response"in this.a)return this.a.response
switch(this.m){case ga:case"text":return this.a.responseText
case"arraybuffer":if("mozResponseArrayBuffer"in this.a)return this.a.mozResponseArrayBuffer}var t=this.b
return t&&t.log(ea,"Response type "+this.m+" is not supported on this browser",void 0),null}catch(t){return ca(this.b,"Can not get response: "+t.message),null}},Oa.prototype.cancel=function(t){if(this.a)this.c instanceof Oa&&this.c.cancel()
else{if(this.b){var n=this.b
delete this.b,t?n.cancel(t):(n.l--,0>=n.l&&n.cancel())}this.u?this.u.call(this.o,this):this.m=!0,this.a||(t=new Ma(this),Ra(this),Ca(this,!1,t))}},Oa.prototype.v=function(t,n){this.i=!1,Ca(this,t,n)},Oa.prototype.then=function(t,n,e){var i,r,o=new In((function(t,n){i=t,r=n}))
return Pa(this,i,(function(t){t instanceof Ma?o.cancel():r(t)})),o.then(t,n,e)},Oa.prototype.$goog_Thenable=!0,k(xa,L),xa.prototype.message="Deferred has already fired",xa.prototype.name="AlreadyCalledError",k(Ma,L),Ma.prototype.message="Deferred was canceled",Ma.prototype.name="CanceledError",ja.prototype.c=function(){throw delete Ua[this.a],this.b}
var Ua={}
function Va(t){var n={},e=n.document||document,i=kt(t).toString(),r=pn(document,"SCRIPT"),o={Vb:r,Ma:void 0},a=new Oa(o),s=null,u=null!=n.timeout?n.timeout:5e3
return 0<u&&(s=window.setTimeout((function(){Ka(r,!0)
var t=new Ga(Ha,"Timeout reached for loading script "+i)
Ra(a),Ca(a,!1,t)}),u),o.Ma=s),r.onload=r.onreadystatechange=function(){r.readyState&&"loaded"!=r.readyState&&"complete"!=r.readyState||(Ka(r,n.wd||!1,s),Ra(a),Ca(a,!0,null))},r.onerror=function(){Ka(r,!0,s)
var t=new Ga(qa,"Error while loading script "+i)
Ra(a),Ca(a,!1,t)},gt(o=n.attributes||{},{type:"text/javascript",charset:"UTF-8"}),cn(r,o),function(t,n){bt(t,"HTMLScriptElement"),t.src=kt(n),null===l&&(l=(n=(n=c.document).querySelector&&n.querySelector("script[nonce]"))&&(n=n.nonce||n.getAttribute("nonce"))&&h.test(n)?n:""),(n=l)&&t.setAttribute("nonce",n)}(r,t),function(t){var n
return(n=(t||document).getElementsByTagName("HEAD"))&&0!=n.length?n[0]:t.documentElement}(e).appendChild(r),a}function Fa(){if(this&&this.Vb){var t=this.Vb
t&&"SCRIPT"==t.tagName&&Ka(t,!0,this.Ma)}}function Ka(t,n,e){null!=e&&c.clearTimeout(e),t.onload=f,t.onerror=f,t.onreadystatechange=f,n&&window.setTimeout((function(){t&&t.parentNode&&t.parentNode.removeChild(t)}),0)}var qa=0,Ha=1
function Ga(t,n){var e="Jsloader error (code #"+t+")"
n&&(e+=": "+n),L.call(this,e),this.code=t}function Ba(t){this.f=t}function Wa(t,e,i){if(this.c=t,t=e||{},this.l=t.secureTokenEndpoint||"https://securetoken.googleapis.com/v1/token",this.v=t.secureTokenTimeout||Ya,this.g=vt(t.secureTokenHeaders||za),this.h=t.firebaseEndpoint||"https://www.googleapis.com/identitytoolkit/v3/relyingparty/",this.i=t.identityPlatformEndpoint||"https://identitytoolkit.googleapis.com/v2/",this.m=t.firebaseTimeout||$a,this.a=vt(t.firebaseHeaders||Za),i&&(this.a["X-Client-Version"]=i,this.g["X-Client-Version"]=i),i="Node"==yi(),!(i=c.XMLHttpRequest||i&&n.INTERNAL.node&&n.INTERNAL.node.XMLHttpRequest)&&!bi())throw new S("internal-error","The XMLHttpRequest compatibility library was not found.")
this.f=void 0,bi()?this.f=new ha(self):wi()?this.f=new Ba(i):this.f=new zo,this.b=null}k(Ga,L),k(Ba,Wo),Ba.prototype.a=function(){return new this.f},Ba.prototype.b=function(){return{}}
var Xa,Ja="idToken",Ya=new Vi(3e4,6e4),za={"Content-Type":"application/x-www-form-urlencoded"},$a=new Vi(3e4,6e4),Za={"Content-Type":"application/json"}
function Qa(t,n){n?t.a["X-Firebase-Locale"]=n:delete t.a["X-Firebase-Locale"]}function ts(t,n){n&&(t.l=ns("https://securetoken.googleapis.com/v1/token",n),t.h=ns("https://www.googleapis.com/identitytoolkit/v3/relyingparty/",n),t.i=ns("https://identitytoolkit.googleapis.com/v2/",n))}function ns(t,n){return t=Ue(t),n=Ue(n.url),t.c=t.a+t.c,De(t,n.f),t.a=n.a,Le(t,n.g),t.toString()}function es(t,n){n?(t.a["X-Client-Version"]=n,t.g["X-Client-Version"]=n):(delete t.a["X-Client-Version"],delete t.g["X-Client-Version"])}function is(t,n,e,i,r,o,a){(function(){var t=Si()
return!((t=Ei(t)!=Ti?null:(t=t.match(/\sChrome\/(\d+)/i))&&2==t.length?parseInt(t[1],10):null)&&30>t||Jt&&rn&&!(9<rn))})()||bi()?t=T(t.u,t):(Xa||(Xa=new In((function(t,n){!function(t,n){((window.gapi||{}).client||{}).request?t():(c[os]=function(){((window.gapi||{}).client||{}).request?t():n(Error("CORS_UNSUPPORTED"))},function(t,n){Pa(t,null,n,void 0)}(Va(St(rs,{onload:os})),(function(){n(Error("CORS_UNSUPPORTED"))})))}(t,n)}))),t=T(t.o,t)),t(n,e,i,r,o,a)}Wa.prototype.S=function(){return this.b},Wa.prototype.u=function(t,n,e,i,r,o){if(bi()&&(void 0===c.fetch||void 0===c.Headers||void 0===c.Request))throw new S("operation-not-supported-in-this-environment","fetch, Headers and Request native APIs or equivalent Polyfills must be available to support HTTP requests from a Worker environment.")
var a=new ma(this.f)
if(o){a.g=Math.max(0,o)
var s=setTimeout((function(){a.dispatchEvent("timeout")}),o)}Ie(a,"complete",(function(){s&&clearTimeout(s)
var t=null
try{t=JSON.parse(function(t){try{return t.a?t.a.responseText:""}catch(n){return ca(t.b,"Can not get responseText: "+n.message),""}}(this))||null}catch(n){t=null}n&&n(t)})),Te(a,"ready",(function(){s&&clearTimeout(s),Bn(this)})),Te(a,"timeout",(function(){s&&clearTimeout(s),Bn(this),n&&n(null)})),function(t,n,e,i,r){if(t.a)throw Error("[goog.net.XhrIo] Object is active with another request="+t.l+"; newUri="+n)
e=e?e.toUpperCase():"GET",t.l=n,t.h="",t.P=e,t.G=!1,t.c=!0,t.a=t.O?t.O.a():Ko.a(),t.A=t.O?Xo(t.O):Xo(Ko),t.a.onreadystatechange=T(t.Ub,t)
try{ca(t.b,_a(t,"Opening Xhr")),t.N=!0,t.a.open(e,String(n),!0),t.N=!1}catch(n){return ca(t.b,_a(t,"Error opening Xhr: "+n.message)),void Ia(t,n)}n=i||""
var o=new _e(t.headers)
r&&function(t,n){if(t.forEach&&"function"==typeof t.forEach)t.forEach(n,void 0)
else if(p(t)||"string"==typeof t)G(t,n,void 0)
else for(var e=Ne(t),i=Se(t),r=i.length,o=0;o<r;o++)n.call(void 0,i[o],e&&e[o],t)}(r,(function(t,n){o.set(n,t)})),r=function(t){t:{for(var n=wa,e=t.length,i="string"==typeof t?t.split(""):t,r=0;r<e;r++)if(r in i&&n.call(void 0,i[r],r,t)){n=r
break t}n=-1}return 0>n?null:"string"==typeof t?t.charAt(n):t[n]}(o.Y()),i=c.FormData&&n instanceof c.FormData,!J(ya,e)||r||i||o.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),o.forEach((function(t,n){this.a.setRequestHeader(n,t)}),t),t.m&&(t.a.responseType=t.m),"withCredentials"in t.a&&t.a.withCredentials!==t.R&&(t.a.withCredentials=t.R)
try{ka(t),0<t.g&&(t.u=function(t){return Jt&&an(9)&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(t.a),ca(t.b,_a(t,"Will abort after "+t.g+"ms if incomplete, xhr2 "+t.u)),t.u?(t.a.timeout=t.g,t.a.ontimeout=T(t.Ma,t)):t.o=Ae(t.Ma,t.g,t)),ca(t.b,_a(t,"Sending request")),t.i=!0,t.a.send(n),t.i=!1}catch(n){ca(t.b,_a(t,"Send error: "+n.message)),Ia(t,n)}}(a,t,e,i,r)}
var rs=new yt(Tt,"https://apis.google.com/js/client.js?onload=%{onload}"),os="__fcb"+Math.floor(1e6*Math.random()).toString()
function as(t){if("string"!=typeof(t=t.email)||!pi.test(t))throw new S("invalid-email")}function ss(t){"email"in t&&as(t)}function us(t){if(!t[Ja]){if(t.mfaPendingCredential)throw new S("multi-factor-auth-required",null,vt(t))
throw new S("internal-error")}}function cs(t){if(t.phoneNumber||t.temporaryProof){if(!t.phoneNumber||!t.temporaryProof)throw new S("internal-error")}else{if(!t.sessionInfo)throw new S("missing-verification-id")
if(!t.code)throw new S("missing-verification-code")}}Wa.prototype.o=function(t,n,e,i,r){var o=this
Xa.then((function(){window.gapi.client.setApiKey(o.c)
var a=window.gapi.auth.getToken()
window.gapi.auth.setToken(null),window.gapi.client.request({path:t,method:e,body:i,headers:r,authType:"none",callback:function(t){window.gapi.auth.setToken(a),n&&n(t)}})})).s((function(t){n&&n({error:{message:t&&t.message||"CORS_UNSUPPORTED"}})}))},Wa.prototype.yb=function(){return Zs(this,Fs,{})},Wa.prototype.Ab=function(t,n){return Zs(this,Us,{idToken:t,email:n})},Wa.prototype.Bb=function(t,n){return Zs(this,Vs,{idToken:t,password:n})}
var hs={displayName:"DISPLAY_NAME",photoUrl:"PHOTO_URL"}
function ls(t){if(!t.phoneVerificationInfo)throw new S("internal-error")
if(!t.phoneVerificationInfo.sessionInfo)throw new S("missing-verification-id")
if(!t.phoneVerificationInfo.code)throw new S("missing-verification-code")}function fs(t){if(!t.requestUri||!t.sessionId&&!t.postBody&&!t.pendingToken)throw new S("internal-error")}function ds(t,n){return n.oauthIdToken&&n.providerId&&0==n.providerId.indexOf("oidc.")&&!n.pendingToken&&(t.sessionId?n.nonce=t.sessionId:t.postBody&&Ze(t=new Je(t.postBody),"nonce")&&(n.nonce=t.get("nonce"))),n}function ps(t){var n=null
if(t.needConfirmation?(t.code="account-exists-with-different-credential",n=Bo(t)):"FEDERATED_USER_ID_ALREADY_LINKED"==t.errorMessage?(t.code="credential-already-in-use",n=Bo(t)):"EMAIL_EXISTS"==t.errorMessage?(t.code="email-already-in-use",n=Bo(t)):t.errorMessage&&(n=Qs(t.errorMessage)),n)throw n
us(t)}function vs(t,n){return n.returnIdpCredential=!0,Zs(t,Hs,n)}function ms(t,n){return n.returnIdpCredential=!0,Zs(t,Bs,n)}function gs(t,n){return n.returnIdpCredential=!0,n.autoCreate=!1,Zs(t,Gs,n)}function bs(t){if(!t.oobCode)throw new S("invalid-action-code")}(t=Wa.prototype).Cb=function(t,n){var e={idToken:t},i=[]
return dt(hs,(function(t,r){var o=n[r]
null===o?i.push(t):r in n&&(e[r]=o)})),i.length&&(e.deleteAttribute=i),Zs(this,Us,e)},t.ub=function(t,n){return gt(t={requestType:"PASSWORD_RESET",email:t},n),Zs(this,Ds,t)},t.vb=function(t,n){return gt(t={requestType:"EMAIL_SIGNIN",email:t},n),Zs(this,Cs,t)},t.tb=function(t,n){return gt(t={requestType:"VERIFY_EMAIL",idToken:t},n),Zs(this,Rs,t)},t.Db=function(t,n,e){return gt(t={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:t,newEmail:n},e),Zs(this,Ps,t)},t.eb=function(t){return Zs(this,Js,t)},t.mb=function(t,n){return Zs(this,Ms,{oobCode:t,newPassword:n})},t.Qa=function(t){return Zs(this,ws,{oobCode:t})},t.ib=function(t){return Zs(this,ys,{oobCode:t})}
var ys={endpoint:"setAccountInfo",B:bs,Z:"email",C:!0},ws={endpoint:"resetPassword",B:bs,F:function(t){var n=t.requestType
if(!n||!t.email&&"EMAIL_SIGNIN"!=n&&"VERIFY_AND_CHANGE_EMAIL"!=n)throw new S("internal-error")},C:!0},Is={endpoint:"signupNewUser",B:function(t){if(as(t),!t.password)throw new S("weak-password")},F:us,U:!0,C:!0},Ts={endpoint:"createAuthUri",C:!0},Es={endpoint:"deleteAccount",M:["idToken"]},As={endpoint:"setAccountInfo",M:["idToken","deleteProvider"],B:function(t){if("array"!=d(t.deleteProvider))throw new S("internal-error")}},ks={endpoint:"emailLinkSignin",M:["email","oobCode"],B:as,F:us,U:!0,C:!0},Ss={endpoint:"emailLinkSignin",M:["idToken","email","oobCode"],B:as,F:us,U:!0},Ns={endpoint:"accounts/mfaEnrollment:finalize",M:["idToken","phoneVerificationInfo"],B:ls,F:us,C:!0,Na:!0},_s={endpoint:"accounts/mfaSignIn:finalize",M:["mfaPendingCredential","phoneVerificationInfo"],B:ls,F:us,C:!0,Na:!0},Os={endpoint:"getAccountInfo"},Cs={endpoint:"getOobConfirmationCode",M:["requestType"],B:function(t){if("EMAIL_SIGNIN"!=t.requestType)throw new S("internal-error")
as(t)},Z:"email",C:!0},Rs={endpoint:"getOobConfirmationCode",M:["idToken","requestType"],B:function(t){if("VERIFY_EMAIL"!=t.requestType)throw new S("internal-error")},Z:"email",C:!0},Ps={endpoint:"getOobConfirmationCode",M:["idToken","newEmail","requestType"],B:function(t){if("VERIFY_AND_CHANGE_EMAIL"!=t.requestType)throw new S("internal-error")},Z:"email",C:!0},Ds={endpoint:"getOobConfirmationCode",M:["requestType"],B:function(t){if("PASSWORD_RESET"!=t.requestType)throw new S("internal-error")
as(t)},Z:"email",C:!0},Ls={kb:!0,endpoint:"getProjectConfig",Tb:"GET"},xs={kb:!0,endpoint:"getRecaptchaParam",Tb:"GET",F:function(t){if(!t.recaptchaSiteKey)throw new S("internal-error")}},Ms={endpoint:"resetPassword",B:bs,Z:"email",C:!0},js={endpoint:"sendVerificationCode",M:["phoneNumber","recaptchaToken"],Z:"sessionInfo",C:!0},Us={endpoint:"setAccountInfo",M:["idToken"],B:ss,U:!0},Vs={endpoint:"setAccountInfo",M:["idToken"],B:function(t){if(ss(t),!t.password)throw new S("weak-password")},F:us,U:!0},Fs={endpoint:"signupNewUser",F:us,U:!0,C:!0},Ks={endpoint:"accounts/mfaEnrollment:start",M:["idToken","phoneEnrollmentInfo"],B:function(t){if(!t.phoneEnrollmentInfo)throw new S("internal-error")
if(!t.phoneEnrollmentInfo.phoneNumber)throw new S("missing-phone-number")
if(!t.phoneEnrollmentInfo.recaptchaToken)throw new S("missing-app-credential")},F:function(t){if(!t.phoneSessionInfo||!t.phoneSessionInfo.sessionInfo)throw new S("internal-error")},C:!0,Na:!0},qs={endpoint:"accounts/mfaSignIn:start",M:["mfaPendingCredential","mfaEnrollmentId","phoneSignInInfo"],B:function(t){if(!t.phoneSignInInfo||!t.phoneSignInInfo.recaptchaToken)throw new S("missing-app-credential")},F:function(t){if(!t.phoneResponseInfo||!t.phoneResponseInfo.sessionInfo)throw new S("internal-error")},C:!0,Na:!0},Hs={endpoint:"verifyAssertion",B:fs,Xa:ds,F:ps,U:!0,C:!0},Gs={endpoint:"verifyAssertion",B:fs,Xa:ds,F:function(t){if(t.errorMessage&&"USER_NOT_FOUND"==t.errorMessage)throw new S("user-not-found")
if(t.errorMessage)throw Qs(t.errorMessage)
us(t)},U:!0,C:!0},Bs={endpoint:"verifyAssertion",B:function(t){if(fs(t),!t.idToken)throw new S("internal-error")},Xa:ds,F:ps,U:!0},Ws={endpoint:"verifyCustomToken",B:function(t){if(!t.token)throw new S("invalid-custom-token")},F:us,U:!0,C:!0},Xs={endpoint:"verifyPassword",B:function(t){if(as(t),!t.password)throw new S("wrong-password")},F:us,U:!0,C:!0},Js={endpoint:"verifyPhoneNumber",B:cs,F:us,C:!0},Ys={endpoint:"verifyPhoneNumber",B:function(t){if(!t.idToken)throw new S("internal-error")
cs(t)},F:function(t){if(t.temporaryProof)throw t.code="credential-already-in-use",Bo(t)
us(t)}},zs={Gb:{USER_NOT_FOUND:"user-not-found"},endpoint:"verifyPhoneNumber",B:cs,F:us,C:!0},$s={endpoint:"accounts/mfaEnrollment:withdraw",M:["idToken","mfaEnrollmentId"],F:function(t){if(!!t[Ja]^!!t.refreshToken)throw new S("internal-error")},C:!0,Na:!0}
function Zs(t,n,e){if(!function(t,n){if(!n||!n.length)return!0
if(!t)return!1
for(var e=0;e<n.length;e++){var i=t[n[e]]
if(null==i||""===i)return!1}return!0}(e,n.M))return On(new S("internal-error"))
var i,r=!!n.Na,o=n.Tb||"POST"
return _n(e).then(n.B).then((function(){return n.U&&(e.returnSecureToken=!0),n.C&&t.b&&void 0===e.tenantId&&(e.tenantId=t.b),function(t,n,e,i,r,o,a){var s=Ue(n+e)
Me(s,"key",t.c),a&&Me(s,"cb",A().toString())
var u="GET"==i
if(u)for(var c in r)r.hasOwnProperty(c)&&Me(s,c,r[c])
return new In((function(n,e){is(t,s.toString(),(function(t){t?t.error?e(tu(t,o||{})):n(t):e(new S("network-request-failed"))}),i,u?void 0:ei(Li(r)),t.a,t.m.get())}))}(t,r?t.i:t.h,n.endpoint,o,e,n.Gb,n.kb||!1)})).then((function(t){return i=t,n.Xa?n.Xa(e,i):i})).then(n.F).then((function(){if(!n.Z)return i
if(!(n.Z in i))throw new S("internal-error")
return i[n.Z]}))}function Qs(t){return tu({error:{errors:[{message:t}],code:400,message:t}})}function tu(t,n){var e=(t.error&&t.error.errors&&t.error.errors[0]||{}).reason||"",i={keyInvalid:"invalid-api-key",ipRefererBlocked:"app-not-authorized"}
if(e=i[e]?new S(i[e]):null)return e
for(var r in e=t.error&&t.error.message||"",gt(i={INVALID_CUSTOM_TOKEN:"invalid-custom-token",CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_EMAIL:"invalid-email",INVALID_PASSWORD:"wrong-password",USER_DISABLED:"user-disabled",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_OR_INVALID_NONCE:"missing-or-invalid-nonce",INVALID_MESSAGE_PAYLOAD:"invalid-message-payload",INVALID_RECIPIENT_EMAIL:"invalid-recipient-email",INVALID_SENDER:"invalid-sender",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",INVALID_PROVIDER_ID:"invalid-provider-id",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",CORS_UNSUPPORTED:"cors-unsupported",DYNAMIC_LINK_NOT_ACTIVATED:"dynamic-link-not-activated",INVALID_APP_ID:"invalid-app-id",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",WEAK_PASSWORD:"weak-password",OPERATION_NOT_ALLOWED:"operation-not-allowed",USER_CANCELLED:"user-cancelled",CAPTCHA_CHECK_FAILED:"captcha-check-failed",INVALID_APP_CREDENTIAL:"invalid-app-credential",INVALID_CODE:"invalid-verification-code",INVALID_PHONE_NUMBER:"invalid-phone-number",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_APP_CREDENTIAL:"missing-app-credential",MISSING_CODE:"missing-verification-code",MISSING_PHONE_NUMBER:"missing-phone-number",MISSING_SESSION_INFO:"missing-verification-id",QUOTA_EXCEEDED:"quota-exceeded",SESSION_EXPIRED:"code-expired",REJECTED_CREDENTIAL:"rejected-credential",INVALID_CONTINUE_URI:"invalid-continue-uri",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",MISSING_IOS_BUNDLE_ID:"missing-ios-bundle-id",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_DYNAMIC_LINK_DOMAIN:"invalid-dynamic-link-domain",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",INVALID_CERT_HASH:"invalid-cert-hash",UNSUPPORTED_TENANT_OPERATION:"unsupported-tenant-operation",INVALID_TENANT_ID:"invalid-tenant-id",TENANT_ID_MISMATCH:"tenant-id-mismatch",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",EMAIL_CHANGE_NEEDS_VERIFICATION:"email-change-needs-verification",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",UNSUPPORTED_FIRST_FACTOR:"unsupported-first-factor",UNVERIFIED_EMAIL:"unverified-email"},n||{}),n=(n=e.match(/^[^\s]+\s*:\s*([\s\S]*)$/))&&1<n.length?n[1]:void 0,i)if(0===e.indexOf(r))return new S(i[r],n)
return!n&&t&&(n=Di(t)),new S("internal-error",n)}function nu(t){this.b=t,this.a=null,this.qb=function(t){return(ou||(ou=new In((function(t,n){function e(){Ui(),Ni("gapi.load")("gapi.iframes",{callback:t,ontimeout:function(){Ui(),n(Error("Network Error"))},timeout:iu.get()})}if(Ni("gapi.iframes.Iframe"))t()
else if(Ni("gapi.load"))e()
else{var i="__iframefcb"+Math.floor(1e6*Math.random()).toString()
c[i]=function(){Ni("gapi.load")?e():n(Error("Network Error"))},_n(Va(i=St(eu,{onload:i}))).s((function(){n(Error("Network Error"))}))}})).s((function(t){throw ou=null,t})))).then((function(){return new In((function(n,e){Ni("gapi.iframes.getContext")().open({where:document.body,url:t.b,messageHandlersFilter:Ni("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"),attributes:{style:{position:"absolute",top:"-100px",width:"1px",height:"1px"}},dontclear:!0},(function(i){function r(){clearTimeout(o),n()}t.a=i,t.a.restyle({setHideOnLeave:!1})
var o=setTimeout((function(){e(Error("Network Error"))}),ru.get())
i.ping(r).then(r,(function(){e(Error("Network Error"))}))}))}))}))}(this)}var eu=new yt(Tt,"https://apis.google.com/js/api.js?onload=%{onload}"),iu=new Vi(3e4,6e4),ru=new Vi(5e3,15e3),ou=null
function au(t,n,e,i){this.l=t,this.h=n,this.i=e,this.g=i,this.f=null,t=this.g?Ve((t=Ue(this.g.url)).f,t.a,t.g,"/emulator/auth/iframe"):Ve("https",this.l,null,"/__/auth/iframe"),this.a=t,Me(this.a,"apiKey",this.h),Me(this.a,"appName",this.i),this.b=null,this.c=[]}function su(t,n,e,i,r,o){this.u=t,this.o=n,this.c=e,this.v=i,this.m=o,this.i=this.g=this.l=null,this.a=r,this.h=this.f=null}function uu(t){try{return n.app(t).auth().Ga()}catch(t){return[]}}function cu(t,n,e,i,r,o){this.o=t,this.g=n,this.b=e,this.f=o,this.c=i||null,this.i=r||null,this.l=this.u=this.A=null,this.h=[],this.v=this.a=null}function hu(t){var n=ui()
return function(t){return Zs(t,Ls,{}).then((function(t){return t.authorizedDomains||[]}))}(t).then((function(t){t:{var e=Ue(n),i=e.f
e=e.a
for(var r=0;r<t.length;r++){var o=t[r],a=e,s=i
if(0==o.indexOf("chrome-extension://")?a=Ue(o).a==a&&"chrome-extension"==s:"http"!=s&&"https"!=s?a=!1:di.test(o)?a=a==o:(o=o.split(".").join("\\."),a=new RegExp("^(.+\\."+o+"|"+o+")$","i").test(a)),a){t=!0
break t}}t=!1}if(!t)throw new Ho(ui())}))}function lu(t){return t.v||(t.v=vi().then((function(){if(!t.u){var n=t.c,e=t.i,i=uu(t.b),r=new au(t.o,t.g,t.b,t.f)
r.f=n,r.b=e,r.c=Z(i||[]),t.u=r.toString()}t.m=new nu(t.u),function(t){if(!t.m)throw Error("IfcHandler must be initialized!")
!function(t,n){t.qb.then((function(){t.a.register("authEvent",n,Ni("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))}))}(t.m,(function(n){var e={}
if(n&&n.authEvent){var i=!1
for(n=Vo(n.authEvent),e=0;e<t.h.length;e++)i=t.h[e](n)||i
return(e={}).status=i?"ACK":"ERROR",_n(e)}return e.status="ERROR",_n(e)}))}(t)}))),t.v}function fu(t){return t.l||(t.A=t.c?ki(t.c,uu(t.b)):null,t.l=new Wa(t.g,P(t.i),t.A),t.f&&ts(t.l,t.f)),t.l}function du(t,n,e,i,r,o,a,s,u,c,h,l){return(t=new su(t,n,e,i,r,l)).l=o,t.g=a,t.i=s,t.b=vt(u||null),t.f=c,t.xb(h).toString()}function pu(t){if(this.a=t||n.INTERNAL.reactNative&&n.INTERNAL.reactNative.AsyncStorage,!this.a)throw new S("internal-error","The React Native compatibility library was not found.")
this.type="asyncStorage"}function vu(t){this.b=t,this.a={},this.f=T(this.c,this)}au.prototype.toString=function(){return this.f?Me(this.a,"v",this.f):$e(this.a.b,"v"),this.b?Me(this.a,"eid",this.b):$e(this.a.b,"eid"),this.c.length?Me(this.a,"fw",this.c.join(",")):$e(this.a.b,"fw"),this.a.toString()},su.prototype.xb=function(t){return this.h=t,this},su.prototype.toString=function(){if(this.m){var t=Ue(this.m.url)
t=Ve(t.f,t.a,t.g,"/emulator/auth/handler")}else t=Ve("https",this.u,null,"/__/auth/handler")
if(Me(t,"apiKey",this.o),Me(t,"appName",this.c),Me(t,"authType",this.v),this.a.isOAuthProvider){var e=this.a
try{var i=n.app(this.c).auth().ka()}catch(t){i=null}for(var r in e.nb=i,Me(t,"providerId",this.a.providerId),e=Li((i=this.a).Hb))e[r]=e[r].toString()
r=i.Pc,e=vt(e)
for(var o=0;o<r.length;o++){var a=r[o]
a in e&&delete e[a]}i.ob&&i.nb&&!e[i.ob]&&(e[i.ob]=i.nb),pt(e)||Me(t,"customParameters",Di(e))}if("function"==typeof this.a.Pb&&(i=this.a.Pb()).length&&Me(t,"scopes",i.join(",")),this.l?Me(t,"redirectUrl",this.l):$e(t.b,"redirectUrl"),this.g?Me(t,"eventId",this.g):$e(t.b,"eventId"),this.i?Me(t,"v",this.i):$e(t.b,"v"),this.b)for(var s in this.b)this.b.hasOwnProperty(s)&&!je(t,s)&&Me(t,s,this.b[s])
return this.h?Me(t,"tid",this.h):$e(t.b,"tid"),this.f?Me(t,"eid",this.f):$e(t.b,"eid"),(s=uu(this.c)).length&&Me(t,"fw",s.join(",")),t.toString()},(t=cu.prototype).Nb=function(t,n,e){var i=new S("popup-closed-by-user"),r=new S("web-storage-unsupported"),o=this,a=!1
return this.la().then((function(){(function(t){var n={type:"webStorageSupport"}
return lu(t).then((function(){return function(t,n){return t.qb.then((function(){return new In((function(e){t.a.send(n.type,n,e,Ni("gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER"))}))}))}(t.m,n)})).then((function(t){if(t&&t.length&&void 0!==t[0].webStorageSupport)return t[0].webStorageSupport
throw Error()}))})(o).then((function(e){e||(t&&li(t),n(r),a=!0)}))})).s((function(){})).then((function(){if(!a)return function(t){return new In((function(n){return function e(){ke(2e3).then((function(){if(t&&!t.closed)return e()
n()}))}()}))}(t)})).then((function(){if(!a)return ke(e).then((function(){n(i)}))}))},t.Wb=function(){var t=Si()
return!Pi(t)&&!ji(t)},t.Sb=function(){return!1},t.Lb=function(t,n,e,i,r,o,a,s){if(!t)return On(new S("popup-blocked"))
if(a&&!Pi())return this.la().s((function(n){li(t),r(n)})),i(),_n()
this.a||(this.a=hu(fu(this)))
var u=this
return this.a.then((function(){var n=u.la().s((function(n){throw li(t),r(n),n}))
return i(),n})).then((function(){jo(e),a||ci(du(u.o,u.g,u.b,n,e,null,o,u.c,void 0,u.i,s,u.f),t)})).s((function(t){throw"auth/network-request-failed"==t.code&&(u.a=null),t}))},t.Mb=function(t,n,e,i){this.a||(this.a=hu(fu(this)))
var r=this
return this.a.then((function(){jo(n),ci(du(r.o,r.g,r.b,t,n,ui(),e,r.c,void 0,r.i,i,r.f))})).s((function(t){throw"auth/network-request-failed"==t.code&&(r.a=null),t}))},t.la=function(){var t=this
return lu(this).then((function(){return t.m.qb})).s((function(){throw t.a=null,new S("network-request-failed")}))},t.Zb=function(){return!0},t.Ea=function(t){this.h.push(t)},t.Ra=function(t){z(this.h,(function(n){return n==t}))},(t=pu.prototype).get=function(t){return _n(this.a.getItem(t)).then((function(t){return t&&xi(t)}))},t.set=function(t,n){return _n(this.a.setItem(t,Di(n)))},t.T=function(t){return _n(this.a.removeItem(t))},t.ca=function(){},t.ia=function(){}
var mu,gu=[]
function bu(t,n,e){pt(t.a)&&t.b.addEventListener("message",t.f),void 0===t.a[n]&&(t.a[n]=[]),t.a[n].push(e)}function yu(t){this.a=t}function wu(t){this.c=t,this.b=!1,this.a=[]}function Iu(t,n,e,i){var r,o,a,s,u=e||{},c=null
if(t.b)return On(Error("connection_unavailable"))
var h=i?800:50,l="undefined"!=typeof MessageChannel?new MessageChannel:null
return new In((function(e,i){l?(r=Math.floor(Math.random()*Math.pow(10,20)).toString(),l.port1.start(),a=setTimeout((function(){i(Error("unsupported_event"))}),h),c={messageChannel:l,onMessage:o=function(t){t.data.eventId===r&&("ack"===t.data.status?(clearTimeout(a),s=setTimeout((function(){i(Error("timeout"))}),3e3)):"done"===t.data.status?(clearTimeout(s),void 0!==t.data.response?e(t.data.response):i(Error("unknown_error"))):(clearTimeout(a),clearTimeout(s),i(Error("invalid_response"))))}},t.a.push(c),l.port1.addEventListener("message",o),t.c.postMessage({eventType:n,eventId:r,data:u},[l.port2])):i(Error("connection_unavailable"))})).then((function(n){return Tu(t,c),n})).s((function(n){throw Tu(t,c),n}))}function Tu(t,n){if(n){var e=n.messageChannel,i=n.onMessage
e&&(e.port1.removeEventListener("message",i),e.port1.close()),z(t.a,(function(t){return t==n}))}}function Eu(){if(!Su())throw new S("web-storage-unsupported")
this.c={},this.a=[],this.b=0,this.m=c.indexedDB,this.type="indexedDB",this.g=this.l=this.f=this.i=null,this.o=!1,this.h=null
var t=this
bi()&&self?(this.l=function(){var t=bi()?self:null
if(G(gu,(function(e){e.b==t&&(n=e)})),!n){var n=new vu(t)
gu.push(n)}return n}(),bu(this.l,"keyChanged",(function(n,e){return Ru(t).then((function(n){return 0<n.length&&G(t.a,(function(t){t(n)})),{keyProcessed:J(n,e.key)}}))})),bu(this.l,"ping",(function(){return _n(["keyChanged"])}))):function(){var t=c.navigator
return t&&t.serviceWorker?_n().then((function(){return t.serviceWorker.ready})).then((function(t){return t.active||null})).s((function(){return null})):_n(null)}().then((function(n){(t.h=n)&&(t.g=new wu(new yu(n)),Iu(t.g,"ping",null,!0).then((function(n){n[0].fulfilled&&J(n[0].value,"keyChanged")&&(t.o=!0)})).s((function(){})))}))}function Au(t){return new In((function(n,e){var i=t.m.open("firebaseLocalStorageDb",1)
i.onerror=function(t){try{t.preventDefault()}catch(t){}e(Error(t.target.error))},i.onupgradeneeded=function(t){t=t.target.result
try{t.createObjectStore("firebaseLocalStorage",{keyPath:"fbase_key"})}catch(t){e(t)}},i.onsuccess=function(i){(i=i.target.result).objectStoreNames.contains("firebaseLocalStorage")?n(i):function(t){return new In((function(n,e){var i=t.m.deleteDatabase("firebaseLocalStorageDb")
i.onsuccess=function(){n()},i.onerror=function(t){e(Error(t.target.error))}}))}(t).then((function(){return Au(t)})).then((function(t){n(t)})).s((function(t){e(t)}))}}))}function ku(t){return t.v||(t.v=Au(t)),t.v}function Su(){try{return!!c.indexedDB}catch(t){return!1}}function Nu(t){return t.objectStore("firebaseLocalStorage")}function _u(t,n){return t.transaction(["firebaseLocalStorage"],n?"readwrite":"readonly")}function Ou(t){return new In((function(n,e){t.onsuccess=function(t){t&&t.target?n(t.target.result):n()},t.onerror=function(t){e(t.target.error)}}))}function Cu(t,n){return t.g&&t.h&&function(){var t=c.navigator
return t&&t.serviceWorker&&t.serviceWorker.controller||null}()===t.h?Iu(t.g,"keyChanged",{key:n},t.o).then((function(){})).s((function(){})):_n()}function Ru(t){return ku(t).then((function(t){var n=Nu(_u(t,!1))
return n.getAll?Ou(n.getAll()):new In((function(t,e){var i=[],r=n.openCursor()
r.onsuccess=function(n){(n=n.target.result)?(i.push(n.value),n.continue()):t(i)},r.onerror=function(t){e(t.target.error)}}))})).then((function(n){var e={},r=[]
if(0==t.b){for(r=0;r<n.length;r++)e[n[r].fbase_key]=n[r].value
r=function t(n,e){var r,o=[]
for(r in n)r in e?i(n[r])!=i(e[r])?o.push(r):"object"==i(n[r])&&null!=n[r]&&null!=e[r]?0<t(n[r],e[r]).length&&o.push(r):n[r]!==e[r]&&o.push(r):o.push(r)
for(r in e)r in n||o.push(r)
return o}(t.c,e),t.c=e}return r}))}function Pu(t){t.i&&t.i.cancel("STOP_EVENT"),t.f&&(clearTimeout(t.f),t.f=null)}function Du(t){var n=this,e=null
this.a=[],this.type="indexedDB",this.c=t,this.b=_n().then((function(){if(Su()){var t=Mi(),i="__sak"+t
return mu||(mu=new Eu),(e=mu).set(i,t).then((function(){return e.get(i)})).then((function(n){if(n!==t)throw Error("indexedDB not supported!")
return e.T(i)})).then((function(){return e})).s((function(){return n.c}))}return n.c})).then((function(t){return n.type=t.type,t.ca((function(t){G(n.a,(function(n){n(t)}))})),t}))}function Lu(){this.a={},this.type="inMemory"}function xu(){if(!function(){var t="Node"==yi()
if(!(t=Mu()||t&&n.INTERNAL.node&&n.INTERNAL.node.localStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==yi())throw new S("internal-error","The LocalStorage compatibility library was not found.")
throw new S("web-storage-unsupported")}this.a=Mu()||n.INTERNAL.node.localStorage,this.type="localStorage"}function Mu(){try{var t=c.localStorage,n=Mi()
return t&&(t.setItem(n,"1"),t.removeItem(n)),t}catch(t){return null}}function ju(){this.type="nullStorage"}function Uu(){if(!function(){var t="Node"==yi()
if(!(t=Vu()||t&&n.INTERNAL.node&&n.INTERNAL.node.sessionStorage))return!1
try{return t.setItem("__sak","1"),t.removeItem("__sak"),!0}catch(t){return!1}}()){if("Node"==yi())throw new S("internal-error","The SessionStorage compatibility library was not found.")
throw new S("web-storage-unsupported")}this.a=Vu()||n.INTERNAL.node.sessionStorage,this.type="sessionStorage"}function Vu(){try{var t=c.sessionStorage,n=Mi()
return t&&(t.setItem(n,"1"),t.removeItem(n)),t}catch(t){return null}}function Fu(){var t={}
t.Browser=Hu,t.Node=Gu,t.ReactNative=Bu,t.Worker=Wu,this.a=t[yi()]}vu.prototype.c=function(t){var n=t.data.eventType,e=t.data.eventId,i=this.a[n]
if(i&&0<i.length){t.ports[0].postMessage({status:"ack",eventId:e,eventType:n,response:null})
var r=[]
G(i,(function(n){r.push(_n().then((function(){return n(t.origin,t.data.data)})))})),Rn(r).then((function(i){var r=[]
G(i,(function(t){r.push({fulfilled:t.Ob,value:t.value,reason:t.reason?t.reason.message:void 0})})),G(r,(function(t){for(var n in t)void 0===t[n]&&delete t[n]})),t.ports[0].postMessage({status:"done",eventId:e,eventType:n,response:r})}))}},yu.prototype.postMessage=function(t,n){this.a.postMessage(t,n)},wu.prototype.close=function(){for(;0<this.a.length;)Tu(this,this.a[0])
this.b=!0},(t=Eu.prototype).set=function(t,n){var e,i=!1,r=this
return ku(this).then((function(n){return Ou((n=Nu(_u(e=n,!0))).get(t))})).then((function(o){var a=Nu(_u(e,!0))
return o?(o.value=n,Ou(a.put(o))):(r.b++,i=!0,(o={}).fbase_key=t,o.value=n,Ou(a.add(o)))})).then((function(){return r.c[t]=n,Cu(r,t)})).na((function(){i&&r.b--}))},t.get=function(t){return ku(this).then((function(n){return Ou(Nu(_u(n,!1)).get(t))})).then((function(t){return t&&t.value}))},t.T=function(t){var n=!1,e=this
return ku(this).then((function(i){return n=!0,e.b++,Ou(Nu(_u(i,!0)).delete(t))})).then((function(){return delete e.c[t],Cu(e,t)})).na((function(){n&&e.b--}))},t.ca=function(t){0==this.a.length&&function(t){Pu(t),function n(){t.f=setTimeout((function(){t.i=Ru(t).then((function(n){0<n.length&&G(t.a,(function(t){t(n)}))})).then((function(){n()})).s((function(t){"STOP_EVENT"!=t.message&&n()}))}),800)}()}(this),this.a.push(t)},t.ia=function(t){z(this.a,(function(n){return n==t})),0==this.a.length&&Pu(this)},(t=Du.prototype).get=function(t){return this.b.then((function(n){return n.get(t)}))},t.set=function(t,n){return this.b.then((function(e){return e.set(t,n)}))},t.T=function(t){return this.b.then((function(n){return n.T(t)}))},t.ca=function(t){this.a.push(t)},t.ia=function(t){z(this.a,(function(n){return n==t}))},(t=Lu.prototype).get=function(t){return _n(this.a[t])},t.set=function(t,n){return this.a[t]=n,_n()},t.T=function(t){return delete this.a[t],_n()},t.ca=function(){},t.ia=function(){},(t=xu.prototype).get=function(t){var n=this
return _n().then((function(){return xi(n.a.getItem(t))}))},t.set=function(t,n){var e=this
return _n().then((function(){var i=Di(n)
null===i?e.T(t):e.a.setItem(t,i)}))},t.T=function(t){var n=this
return _n().then((function(){n.a.removeItem(t)}))},t.ca=function(t){c.window&&ue(c.window,"storage",t)},t.ia=function(t){c.window&&le(c.window,"storage",t)},(t=ju.prototype).get=function(){return _n(null)},t.set=function(){return _n()},t.T=function(){return _n()},t.ca=function(){},t.ia=function(){},(t=Uu.prototype).get=function(t){var n=this
return _n().then((function(){return xi(n.a.getItem(t))}))},t.set=function(t,n){var e=this
return _n().then((function(){var i=Di(n)
null===i?e.T(t):e.a.setItem(t,i)}))},t.T=function(t){var n=this
return _n().then((function(){n.a.removeItem(t)}))},t.ca=function(){},t.ia=function(){}
var Ku,qu,Hu={D:xu,ab:Uu},Gu={D:xu,ab:Uu},Bu={D:pu,ab:ju},Wu={D:xu,ab:ju},Xu={qd:"local",NONE:"none",sd:"session"}
function Ju(){var t=!(ji(Si())||!gi()),n=Pi(),e=_i()
this.v=t,this.h=n,this.l=e,this.a={},Ku||(Ku=new Fu),t=Ku
try{this.g=!si()&&Hi()||!c.indexedDB?new t.a.D:new Du(bi()?new Lu:new t.a.D)}catch(t){this.g=new Lu,this.h=!0}try{this.i=new t.a.ab}catch(t){this.i=new Lu}this.m=new Lu,this.f=T(this.Xb,this),this.b={}}function Yu(){return qu||(qu=new Ju),qu}function zu(t,n){switch(n){case"session":return t.i
case"none":return t.m
default:return t.g}}function $u(t,n){return"firebase:"+t.name+(n?":"+n:"")}function Zu(t,n,e){return e=$u(n,e),"local"==n.D&&(t.b[e]=null),zu(t,n.D).T(e)}function Qu(t){t.c&&(clearInterval(t.c),t.c=null)}function tc(t){this.a=t,this.b=Yu()}(t=Ju.prototype).get=function(t,n){return zu(this,t.D).get($u(t,n))},t.set=function(t,n,e){var i=$u(t,e),r=this,o=zu(this,t.D)
return o.set(i,n).then((function(){return o.get(i)})).then((function(n){"local"==t.D&&(r.b[i]=n)}))},t.addListener=function(t,n,e){t=$u(t,n),this.l&&(this.b[t]=c.localStorage.getItem(t)),pt(this.a)&&(zu(this,"local").ca(this.f),this.h||(si()||!Hi())&&c.indexedDB||!this.l||function(t){Qu(t),t.c=setInterval((function(){for(var n in t.a){var e=c.localStorage.getItem(n),i=t.b[n]
e!=i&&(t.b[n]=e,e=new $n({type:"storage",key:n,target:window,oldValue:i,newValue:e,a:!0}),t.Xb(e))}}),1e3)}(this)),this.a[t]||(this.a[t]=[]),this.a[t].push(e)},t.removeListener=function(t,n,e){t=$u(t,n),this.a[t]&&(z(this.a[t],(function(t){return t==e})),0==this.a[t].length&&delete this.a[t]),pt(this.a)&&(zu(this,"local").ia(this.f),Qu(this))},t.Xb=function(t){if(t&&t.g){var n=t.a.key
if(null==n)for(var e in this.a){var i=this.b[e]
void 0===i&&(i=null)
var r=c.localStorage.getItem(e)
r!==i&&(this.b[e]=r,this.lb(e))}else if(0==n.indexOf("firebase:")&&this.a[n]){if(void 0!==t.a.a?zu(this,"local").ia(this.f):Qu(this),this.v)if(e=c.localStorage.getItem(n),(i=t.a.newValue)!==e)null!==i?c.localStorage.setItem(n,i):c.localStorage.removeItem(n)
else if(this.b[n]===i&&void 0===t.a.a)return
var o=this
e=function(){void 0===t.a.a&&o.b[n]===c.localStorage.getItem(n)||(o.b[n]=c.localStorage.getItem(n),o.lb(n))},Jt&&rn&&10==rn&&c.localStorage.getItem(n)!==t.a.newValue&&t.a.newValue!==t.a.oldValue?setTimeout(e,10):e()}}else G(t,T(this.lb,this))},t.lb=function(t){this.a[t]&&G(this.a[t],(function(t){t()}))}
var nc,ec={name:"authEvent",D:"local"}
function ic(){this.a=Yu()}function rc(t,n){this.b=oc,this.f=c.Uint8Array?new Uint8Array(this.b):Array(this.b),this.g=this.c=0,this.a=[],this.i=t,this.h=n,this.l=c.Int32Array?new Int32Array(64):Array(64),void 0===nc&&(nc=c.Int32Array?new Int32Array(fc):fc),this.reset()}k(rc,(function(){this.b=-1}))
for(var oc=64,ac=oc-1,sc=[],uc=0;uc<ac;uc++)sc[uc]=0
var cc=$(128,sc)
function hc(t){for(var n=t.f,e=t.l,i=0,r=0;r<n.length;)e[i++]=n[r]<<24|n[r+1]<<16|n[r+2]<<8|n[r+3],r=4*i
for(n=16;64>n;n++){r=0|e[n-15],i=0|e[n-2]
var o=(0|e[n-16])+((r>>>7|r<<25)^(r>>>18|r<<14)^r>>>3)|0,a=(0|e[n-7])+((i>>>17|i<<15)^(i>>>19|i<<13)^i>>>10)|0
e[n]=o+a|0}i=0|t.a[0],r=0|t.a[1]
var s=0|t.a[2],u=0|t.a[3],c=0|t.a[4],h=0|t.a[5],l=0|t.a[6]
for(o=0|t.a[7],n=0;64>n;n++){var f=((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))+(i&r^i&s^r&s)|0
a=(o=o+((c>>>6|c<<26)^(c>>>11|c<<21)^(c>>>25|c<<7))|0)+((a=(a=c&h^~c&l)+(0|nc[n])|0)+(0|e[n])|0)|0,o=l,l=h,h=c,c=u+a|0,u=s,s=r,r=i,i=a+f|0}t.a[0]=t.a[0]+i|0,t.a[1]=t.a[1]+r|0,t.a[2]=t.a[2]+s|0,t.a[3]=t.a[3]+u|0,t.a[4]=t.a[4]+c|0,t.a[5]=t.a[5]+h|0,t.a[6]=t.a[6]+l|0,t.a[7]=t.a[7]+o|0}function lc(t,n,e){void 0===e&&(e=n.length)
var i=0,r=t.c
if("string"==typeof n)for(;i<e;)t.f[r++]=n.charCodeAt(i++),r==t.b&&(hc(t),r=0)
else{if(!p(n))throw Error("message must be string or array")
for(;i<e;){var o=n[i++]
if(!("number"==typeof o&&0<=o&&255>=o&&o==(0|o)))throw Error("message must be a byte array")
t.f[r++]=o,r==t.b&&(hc(t),r=0)}}t.c=r,t.g+=e}rc.prototype.reset=function(){this.g=this.c=0,this.a=c.Int32Array?new Int32Array(this.h):Z(this.h)}
var fc=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]
function dc(){rc.call(this,8,pc)}k(dc,rc)
var pc=[1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225]
function vc(t,n,e,i,r,o){this.m=t,this.i=n,this.l=e,this.v=i||null,this.u=r||null,this.o=o,this.h=n+":"+e,this.A=new ic,this.g=new tc(this.h),this.f=null,this.b=[],this.a=this.c=null}function mc(t){return new S("invalid-cordova-configuration",t)}function gc(t,n){for(var e=0;e<t.b.length;e++)try{t.b[e](n)}catch(t){}}function bc(t){return t.f||(t.f=t.la().then((function(){return new In((function(n){t.Ea((function e(i){return n(i),t.Ra(e),!1})),function(t){function n(n){r=!0,o&&o.cancel(),yc(t).then((function(r){var o=e
if(r&&n&&n.url){var a=null;-1!=(o=eo(n.url)).indexOf("/__/auth/callback")&&(a=(a="object"===i(a=xi(je(a=Ue(o),"firebaseError")||null))?N(a):null)?new Uo(r.c,r.b,null,null,a,null,r.S()):new Uo(r.c,r.b,o,r.f,null,null,r.S())),o=a||e}gc(t,o)}))}var e=new Uo("unknown",null,null,null,new S("no-auth-event")),r=!1,o=ke(500).then((function(){return yc(t).then((function(){r||gc(t,e)}))})),a=c.handleOpenURL
c.handleOpenURL=function(t){if(0==t.toLowerCase().indexOf(Ni("BuildInfo.packageName",c).toLowerCase()+"://")&&n({url:t}),"function"==typeof a)try{a(t)}catch(t){console.error(t)}},qo||(qo=new Fo),function(t){var n=qo
n.a.push(t),n.b||(n.b=function(t){for(var e=0;e<n.a.length;e++)n.a[e](t)},"function"==typeof(t=Ni("universalLinks.subscribe",c))&&t(null,n.b))}(n)}(t)}))}))),t.f}function yc(t){var n=null
return function(t){return t.b.get(ec,t.a).then((function(t){return Vo(t)}))}(t.g).then((function(e){return n=e,Zu((e=t.g).b,ec,e.a)})).then((function(){return n}))}function wc(t){this.a=t,this.b=Yu()}(t=vc.prototype).la=function(){return this.Ia?this.Ia:this.Ia=(mi(void 0)?vi().then((function(){return new In((function(t,n){var e=c.document,i=setTimeout((function(){n(Error("Cordova framework is not ready."))}),1e3)
e.addEventListener("deviceready",(function(){clearTimeout(i),t()}),!1)}))})):On(Error("Cordova must run in an Android or iOS file scheme."))).then((function(){if("function"!=typeof Ni("universalLinks.subscribe",c))throw mc("cordova-universal-links-plugin-fix is not installed")
if(void 0===Ni("BuildInfo.packageName",c))throw mc("cordova-plugin-buildinfo is not installed")
if("function"!=typeof Ni("cordova.plugins.browsertab.openUrl",c))throw mc("cordova-plugin-browsertab is not installed")
if("function"!=typeof Ni("cordova.InAppBrowser.open",c))throw mc("cordova-plugin-inappbrowser is not installed")}),(function(){throw new S("cordova-not-ready")}))},t.Nb=function(t,n){return n(new S("operation-not-supported-in-this-environment")),_n()},t.Lb=function(){return On(new S("operation-not-supported-in-this-environment"))},t.Zb=function(){return!1},t.Wb=function(){return!0},t.Sb=function(){return!0},t.Mb=function(t,n,e,i){if(this.c)return On(new S("redirect-operation-pending"))
var r=this,o=c.document,a=null,s=null,u=null,h=null
return this.c=_n().then((function(){return jo(n),bc(r)})).then((function(){return function(t,n,e,i,r){var o=function(){for(var t=20,n=[];0<t;)n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return n.join("")}(),a=new Uo(n,i,null,o,new S("no-auth-event"),null,r),s=Ni("BuildInfo.packageName",c)
if("string"!=typeof s)throw new S("invalid-cordova-configuration")
var u=Ni("BuildInfo.displayName",c),h={}
if(Si().toLowerCase().match(/iphone|ipad|ipod/))h.ibi=s
else{if(!Si().toLowerCase().match(/android/))return On(new S("operation-not-supported-in-this-environment"))
h.apn=s}u&&(h.appDisplayName=u),o=function(t){var n=new dc
lc(n,t),t=[]
var e=8*n.g
56>n.c?lc(n,cc,56-n.c):lc(n,cc,n.b-(n.c-56))
for(var i=63;56<=i;i--)n.f[i]=255&e,e/=256
for(hc(n),i=e=0;i<n.i;i++)for(var r=24;0<=r;r-=8)t[e++]=n.a[i]>>r&255
return function(t){return W(t,(function(t){return 1<(t=t.toString(16)).length?t:"0"+t})).join("")}(t)}(o),h.sessionId=o
var l=du(t.m,t.i,t.l,n,e,null,i,t.v,h,t.u,r,t.o)
return t.la().then((function(){var n=t.h
return t.A.a.set(ec,a.w(),n)})).then((function(){var n=Ni("cordova.plugins.browsertab.isAvailable",c)
if("function"!=typeof n)throw new S("invalid-cordova-configuration")
var e=null
n((function(n){if(n){if("function"!=typeof(e=Ni("cordova.plugins.browsertab.openUrl",c)))throw new S("invalid-cordova-configuration")
e(l)}else{if("function"!=typeof(e=Ni("cordova.InAppBrowser.open",c)))throw new S("invalid-cordova-configuration")
n=Si(),t.a=e(l,n.match(/(iPad|iPhone|iPod).*OS 7_\d/i)||n.match(/(iPad|iPhone|iPod).*OS 8_\d/i)?"_blank":"_system","location=yes")}}))}))}(r,t,n,e,i)})).then((function(){return new In((function(t,n){s=function(){var n=Ni("cordova.plugins.browsertab.close",c)
return t(),"function"==typeof n&&n(),r.a&&"function"==typeof r.a.close&&(r.a.close(),r.a=null),!1},r.Ea(s),u=function(){a||(a=ke(2e3).then((function(){n(new S("redirect-cancelled-by-user"))})))},h=function(){Fi()&&u()},o.addEventListener("resume",u,!1),Si().toLowerCase().match(/android/)||o.addEventListener("visibilitychange",h,!1)})).s((function(t){return yc(r).then((function(){throw t}))}))})).na((function(){u&&o.removeEventListener("resume",u,!1),h&&o.removeEventListener("visibilitychange",h,!1),a&&a.cancel(),s&&r.Ra(s),r.c=null}))},t.Ea=function(t){this.b.push(t),bc(this).s((function(n){"auth/invalid-cordova-configuration"===n.code&&(n=new Uo("unknown",null,null,null,new S("no-auth-event")),t(n))}))},t.Ra=function(t){z(this.b,(function(n){return n==t}))}
var Ic={name:"pendingRedirect",D:"session"}
function Tc(t){return Zu(t.b,Ic,t.a)}function Ec(t,n,e,i){this.i={},this.u=0,this.O=t,this.m=n,this.v=e,this.G=i,this.h=[],this.f=!1,this.l=T(this.o,this),this.b=new Uc,this.A=new Hc,this.g=new wc(Mc(this.m,this.v)),this.c={},this.c.unknown=this.b,this.c.signInViaRedirect=this.b,this.c.linkViaRedirect=this.b,this.c.reauthViaRedirect=this.b,this.c.signInViaPopup=this.A,this.c.linkViaPopup=this.A,this.c.reauthViaPopup=this.A,this.a=Ac(this.O,this.m,this.v,_,this.G)}function Ac(t,e,i,r,o){var a=n.SDK_VERSION||null
return mi()?new vc(t,e,i,a,r,o):new cu(t,e,i,a,r,o)}function kc(t){t.f||(t.f=!0,t.a.Ea(t.l))
var n=t.a
return t.a.la().s((function(e){throw t.a==n&&t.reset(),e}))}function Sc(t){t.a.Wb()&&kc(t).s((function(n){var e=new Uo("unknown",null,null,null,new S("operation-not-supported-in-this-environment"))
Pc(n)&&t.o(e)})),t.a.Sb()||Vc(t.b)}function Nc(t,n){J(t.h,n)||t.h.push(n),t.f||function(t){return t.b.get(Ic,t.a).then((function(t){return"pending"==t}))}(t.g).then((function(n){n?Tc(t.g).then((function(){kc(t).s((function(n){var e=new Uo("unknown",null,null,null,new S("operation-not-supported-in-this-environment"))
Pc(n)&&t.o(e)}))})):Sc(t)})).s((function(){Sc(t)}))}function _c(t,n){z(t.h,(function(t){return t==n}))}Ec.prototype.reset=function(){this.f=!1,this.a.Ra(this.l),this.a=Ac(this.O,this.m,this.v,null,this.G),this.i={}},Ec.prototype.o=function(t){if(!t)throw new S("invalid-auth-event")
if(6e5<=A()-this.u&&(this.i={},this.u=0),t&&t.getUid()&&this.i.hasOwnProperty(t.getUid()))return!1
for(var n=!1,e=0;e<this.h.length;e++){var i=this.h[e]
if(i.Eb(t.c,t.b)){(n=this.c[t.c])&&(n.h(t,i),t&&(t.f||t.b)&&(this.i[t.getUid()]=!0,this.u=A())),n=!0
break}}return Vc(this.b),n}
var Oc=new Vi(2e3,1e4),Cc=new Vi(3e4,6e4)
function Rc(t,n,e,i,r,o,a){return t.a.Lb(n,e,i,(function(){t.f||(t.f=!0,t.a.Ea(t.l))}),(function(){t.reset()}),r,o,a)}function Pc(t){return!(!t||"auth/cordova-not-ready"!=t.code)}function Dc(t,n,e,i,r){var o
return function(t){return t.b.set(Ic,"pending",t.a)}(t.g).then((function(){return t.a.Mb(n,e,i,r).s((function(n){if(Pc(n))throw new S("operation-not-supported-in-this-environment")
return o=n,Tc(t.g).then((function(){throw o}))})).then((function(){return t.a.Zb()?new In((function(){})):Tc(t.g).then((function(){return t.qa()})).then((function(){})).s((function(){}))}))}))}function Lc(t,n,e,i,r){return t.a.Nb(i,(function(t){n.ma(e,null,t,r)}),Oc.get())}Ec.prototype.qa=function(){return this.b.qa()}
var xc={}
function Mc(t,n,e){return t=t+":"+n,e&&(t=t+":"+e.url),t}function jc(t,n,e,i){var r=Mc(n,e,i)
return xc[r]||(xc[r]=new Ec(t,n,e,i)),xc[r]}function Uc(){this.b=null,this.f=[],this.c=[],this.a=null,this.i=this.g=!1}function Vc(t){t.g||(t.g=!0,qc(t,!1,null,null))}function Fc(t){t.g&&!t.i&&qc(t,!1,null,null)}function Kc(t,n){if(t.b=function(){return _n(n)},t.f.length)for(var e=0;e<t.f.length;e++)t.f[e](n)}function qc(t,n,e,i){n?i?function(t,n){if(t.b=function(){return On(n)},t.c.length)for(var e=0;e<t.c.length;e++)t.c[e](n)}(t,i):Kc(t,e):Kc(t,{user:null}),t.f=[],t.c=[]}function Hc(){}function Gc(){this.hb=!1,Object.defineProperty(this,"appVerificationDisabled",{get:function(){return this.hb},set:function(t){this.hb=t},enumerable:!1})}function Bc(t,n){this.a=n,Ji(this,"verificationId",t)}function Wc(t,n,e,i){return new Lo(t).eb(n,e).then((function(t){return new Bc(t,i)}))}function Xc(t){var n=qr(t)
if(!(n&&n.exp&&n.auth_time&&n.iat))throw new S("internal-error","An internal error occurred. The token obtained by Firebase appears to be malformed. Please retry the operation.")
Yi(this,{token:t,expirationTime:qi(1e3*n.exp),authTime:qi(1e3*n.auth_time),issuedAtTime:qi(1e3*n.iat),signInProvider:n.firebase&&n.firebase.sign_in_provider?n.firebase.sign_in_provider:null,signInSecondFactor:n.firebase&&n.firebase.sign_in_second_factor?n.firebase.sign_in_second_factor:null,claims:n})}function Jc(t,n,e){var i=n&&n[zc]
if(!i)throw new S("argument-error","Internal assert: Invalid MultiFactorResolver")
this.a=t,this.f=vt(n),this.g=e,this.c=new io(null,i),this.b=[]
var r=this
G(n[Yc]||[],(function(t){(t=Qi(t))&&r.b.push(t)})),Ji(this,"auth",this.a),Ji(this,"session",this.c),Ji(this,"hints",this.b)}Uc.prototype.reset=function(){this.b=null,this.a&&(this.a.cancel(),this.a=null)},Uc.prototype.h=function(t,n){if(t){this.reset(),this.g=!0
var e=t.c,i=t.b,r=t.a&&"auth/web-storage-unsupported"==t.a.code,o=t.a&&"auth/operation-not-supported-in-this-environment"==t.a.code
this.i=!(!r&&!o),"unknown"!=e||r||o?t.a?(qc(this,!0,null,t.a),_n()):n.Fa(e,i)?function(t,n,e){e=e.Fa(n.c,n.b)
var i=n.g,r=n.f,o=n.i,a=n.S(),s=!!n.c.match(/Redirect$/)
e(i,r,a,o).then((function(n){qc(t,s,n,null)})).s((function(n){qc(t,s,null,n)}))}(this,t,n):On(new S("invalid-auth-event")):(qc(this,!1,null,null),_n())}else On(new S("invalid-auth-event"))},Uc.prototype.qa=function(){var t=this
return new In((function(n,e){t.b?t.b().then(n,e):(t.f.push(n),t.c.push(e),function(t){var n=new S("timeout")
t.a&&t.a.cancel(),t.a=ke(Cc.get()).then((function(){t.b||(t.g=!0,qc(t,!0,null,n))}))}(t))}))},Hc.prototype.h=function(t,n){if(t){var e=t.c,i=t.b
t.a?(n.ma(t.c,null,t.a,t.b),_n()):n.Fa(e,i)?function(t,n){var e=t.b,i=t.c
n.Fa(i,e)(t.g,t.f,t.S(),t.i).then((function(t){n.ma(i,t,null,e)})).s((function(t){n.ma(i,null,t,e)}))}(t,n):On(new S("invalid-auth-event"))}else On(new S("invalid-auth-event"))},Bc.prototype.confirm=function(t){return t=xo(this.verificationId,t),this.a(t)}
var Yc="mfaInfo",zc="mfaPendingCredential"
function $c(t,n,e,i){S.call(this,"multi-factor-auth-required",i,n),this.b=new Jc(t,n,e),Ji(this,"resolver",this.b)}function Zc(t,n,e){if(t&&m(t.serverResponse)&&"auth/multi-factor-auth-required"===t.code)try{return new $c(n,t.serverResponse,e,t.message)}catch(t){}return null}function Qc(){}function th(t){Ji(this,"factorId",t.fa),this.a=t}function nh(t){if(th.call(this,t),this.a.fa!=Lo.PROVIDER_ID)throw new S("argument-error","firebase.auth.PhoneMultiFactorAssertion requires a valid firebase.auth.PhoneAuthCredential")}function eh(t,n){for(var e in zn.call(this,t),n)this[e]=n[e]}function ih(t,n){this.a=t,this.b=[],this.c=T(this.xc,this),ue(this.a,"userReloaded",this.c)
var e=[]
n&&n.multiFactor&&n.multiFactor.enrolledFactors&&G(n.multiFactor.enrolledFactors,(function(t){var n=null,i={}
if(t){t.uid&&(i[er]=t.uid),t.displayName&&(i[tr]=t.displayName),t.enrollmentTime&&(i[nr]=new Date(t.enrollmentTime).toISOString()),t.phoneNumber&&(i[ir]=t.phoneNumber)
try{n=new rr(i)}catch(t){}t=n}else t=null
t&&e.push(t)})),rh(this,e)}function rh(t,n){t.b=n,Ji(t,"enrolledFactors",n)}function oh(t,n,e){if(this.h=t,this.i=n,this.g=e,this.c=3e4,this.f=96e4,this.b=null,this.a=this.c,this.f<this.c)throw Error("Proactive refresh lower bound greater than upper bound!")}function ah(t){this.c=t,this.b=this.a=null}function sh(t){return t.b&&1e3*t.b.c||0}function uh(t,n){var e=n.refreshToken
t.b=Kr(n[Ja]||""),t.a=e}function ch(t,n){this.a=t||null,this.b=n||null,Yi(this,{lastSignInTime:qi(n||null),creationTime:qi(t||null)})}function hh(t,n,e,i,r,o){Yi(this,{uid:t,displayName:i||null,photoURL:r||null,email:e||null,phoneNumber:o||null,providerId:n})}function lh(t,e,i){this.G=[],this.l=t.apiKey,this.m=t.appName,this.o=t.authDomain||null
var r=n.SDK_VERSION?ki(n.SDK_VERSION):null
this.a=new Wa(this.l,P(_),r),t.emulatorConfig&&ts(this.a,t.emulatorConfig),this.b=new ah(this.a),yh(this,e[Ja]),uh(this.b,e),Ji(this,"refreshToken",this.b.a),Th(this,i||{}),we.call(this),this.P=!1,this.o&&Oi()&&(this.i=jc(this.o,this.l,this.m)),this.R=[],this.f=null,this.u=function(t){return new oh((function(){return t.I(!0)}),(function(t){return!(!t||"auth/network-request-failed"!=t.code)}),(function(){var n=sh(t.b)-A()-3e5
return 0<n?n:0}))}(this),this.$=T(this.gb,this)
var o=this
this.pa=null,this.Ba=function(t){o.wa(t.h)},this.ba=null,this.za=function(t){ts(o.a,t.c)},this.W=null,this.X=[],this.Aa=function(t){ph(o,t.f)},this.aa=null,this.N=new ih(this,i),Ji(this,"multiFactor",this.N)}function fh(t,n){t.ba&&le(t.ba,"languageCodeChanged",t.Ba),(t.ba=n)&&ue(n,"languageCodeChanged",t.Ba)}function dh(t,n){t.W&&le(t.W,"emulatorConfigChanged",t.za),(t.W=n)&&ue(n,"emulatorConfigChanged",t.za)}function ph(t,e){t.X=e,es(t.a,n.SDK_VERSION?ki(n.SDK_VERSION,t.X):null)}function vh(t,n){t.aa&&le(t.aa,"frameworkChanged",t.Aa),(t.aa=n)&&ue(n,"frameworkChanged",t.Aa)}function mh(t){try{return n.app(t.m).auth()}catch(n){throw new S("internal-error","No firebase.auth.Auth instance is available for the Firebase App '"+t.m+"'!")}}function gh(t){t.A||t.u.b||(t.u.start(),le(t,"tokenChanged",t.$),ue(t,"tokenChanged",t.$))}function bh(t){le(t,"tokenChanged",t.$),t.u.stop()}function yh(t,n){t.ya=n,Ji(t,"_lat",n)}function wh(t){for(var n=[],e=0;e<t.R.length;e++)n.push(t.R[e](t))
return Rn(n).then((function(){return t}))}function Ih(t){t.i&&!t.P&&(t.P=!0,Nc(t.i,t))}function Th(t,n){Yi(t,{uid:n.uid,displayName:n.displayName||null,photoURL:n.photoURL||null,email:n.email||null,emailVerified:n.emailVerified||!1,phoneNumber:n.phoneNumber||null,isAnonymous:n.isAnonymous||!1,tenantId:n.tenantId||null,metadata:new ch(n.createdAt,n.lastLoginAt),providerData:[]}),t.a.b=t.tenantId}function Eh(){}function Ah(t){return _n().then((function(){if(t.A)throw new S("app-deleted")}))}function kh(t){return W(t.providerData,(function(t){return t.providerId}))}function Sh(t,n){n&&(Nh(t,n.providerId),t.providerData.push(n))}function Nh(t,n){z(t.providerData,(function(t){return t.providerId==n}))}function _h(t,n,e){("uid"!=n||e)&&t.hasOwnProperty(n)&&Ji(t,n,e)}function Oh(t,n){t!=n&&(Yi(t,{uid:n.uid,displayName:n.displayName,photoURL:n.photoURL,email:n.email,emailVerified:n.emailVerified,phoneNumber:n.phoneNumber,isAnonymous:n.isAnonymous,tenantId:n.tenantId,providerData:[]}),n.metadata?Ji(t,"metadata",function(t){return new ch(t.a,t.b)}(n.metadata)):Ji(t,"metadata",new ch),G(n.providerData,(function(n){Sh(t,n)})),function(t,n){t.b=n.b,t.a=n.a}(t.b,n.b),Ji(t,"refreshToken",t.b.a),rh(t.N,n.N.b))}function Ch(t){return t.I().then((function(n){var e=t.isAnonymous
return function(t,n){return Zs(t.a,Os,{idToken:n}).then(T(t.Jc,t))}(t,n).then((function(){return e||_h(t,"isAnonymous",!1),n}))}))}function Rh(t,n){n[Ja]&&t.ya!=n[Ja]&&(uh(t.b,n),t.dispatchEvent(new eh("tokenChanged")),yh(t,n[Ja]),_h(t,"refreshToken",t.b.a))}function Ph(t,n){return Ch(t).then((function(){if(J(kh(t),n))return wh(t).then((function(){throw new S("provider-already-linked")}))}))}function Dh(t,n,e){return zi({user:t,credential:Mo(n),additionalUserInfo:n=Xr(n),operationType:e})}function Lh(t,n){return Rh(t,n),t.reload().then((function(){return t}))}function xh(t,e,i,r,o){if(!Oi())return On(new S("operation-not-supported-in-this-environment"))
if(t.f&&!o)return On(t.f)
var a=Wr(i.providerId),s=Mi(t.uid+":::"),u=null;(!Pi()||gi())&&t.o&&i.isOAuthProvider&&(u=du(t.o,t.l,t.m,e,i,null,s,n.SDK_VERSION||null,null,null,t.tenantId))
var c=fi(u,a&&a.ua,a&&a.ta)
return r=r().then((function(){if(jh(t),!o)return t.I().then((function(){}))})).then((function(){return Rc(t.i,c,e,i,s,!!u,t.tenantId)})).then((function(){return new In((function(n,i){t.ma(e,null,new S("cancelled-popup-request"),t.h||null),t.g=n,t.O=i,t.h=s,t.c=Lc(t.i,t,e,c,s)}))})).then((function(t){return c&&li(c),t?zi(t):null})).s((function(t){throw c&&li(c),t})),Uh(t,r,o)}function Mh(t,n,e,i,r){if(!Oi())return On(new S("operation-not-supported-in-this-environment"))
if(t.f&&!r)return On(t.f)
var o=null,a=Mi(t.uid+":::")
return i=i().then((function(){if(jh(t),!r)return t.I().then((function(){}))})).then((function(){return t.ga=a,wh(t)})).then((function(n){return t.ha&&(n=(n=t.ha).b.set(Kh,t.w(),n.a)),n})).then((function(){return Dc(t.i,n,e,a,t.tenantId)})).s((function(n){if(o=n,t.ha)return qh(t.ha)
throw o})).then((function(){if(o)throw o})),Uh(t,i,r)}function jh(t){if(!t.i||!t.P){if(t.i&&!t.P)throw new S("internal-error")
throw new S("auth-domain-config-required")}}function Uh(t,n,e){var i=function(t,n,e){return t.f&&!e?(n.cancel(),On(t.f)):n.s((function(n){throw!n||"auth/user-disabled"!=n.code&&"auth/user-token-expired"!=n.code||(t.f||t.dispatchEvent(new eh("userInvalidated")),t.f=n),n}))}(t,n,e)
return t.G.push(i),i.na((function(){Y(t.G,i)})),i.s((function(n){var e=null
throw n&&"auth/multi-factor-auth-required"===n.code&&(e=Zc(n.w(),mh(t),T(t.ic,t))),e||n}))}function Vh(t){if(!t.apiKey)return null
var n={apiKey:t.apiKey,authDomain:t.authDomain,appName:t.appName,emulatorConfig:t.emulatorConfig},e={}
if(!t.stsTokenManager||!t.stsTokenManager.accessToken)return null
e[Ja]=t.stsTokenManager.accessToken,e.refreshToken=t.stsTokenManager.refreshToken||null
var i=new lh(n,e,t)
return t.providerData&&G(t.providerData,(function(t){t&&Sh(i,zi(t))})),t.redirectEventId&&(i.ga=t.redirectEventId),i}function Fh(t){this.a=t,this.b=Yu()}Jc.prototype.Qc=function(t){var n=this
return t.rb(this.a.a,this.c).then((function(t){var e=vt(n.f)
return delete e[Yc],delete e[zc],gt(e,t),n.g(e)}))},k($c,S),Qc.prototype.rb=function(t,n,e){return n.type==ro?function(t,n,e,i){return e.Ha().then((function(e){return e={idToken:e},void 0!==i&&(e.displayName=i),gt(e,{phoneVerificationInfo:Do(t.a)}),Zs(n,Ns,e)}))}(this,t,n,e):function(t,n,e){return e.Ha().then((function(e){return gt(e={mfaPendingCredential:e},{phoneVerificationInfo:Do(t.a)}),Zs(n,_s,e)}))}(this,t,n)},k(th,Qc),k(nh,th),k(eh,zn),(t=ih.prototype).xc=function(t){rh(this,function(t){var n=[]
return G(t.mfaInfo||[],(function(t){(t=Qi(t))&&n.push(t)})),n}(t.gd))},t.Qb=function(){return this.a.I().then((function(t){return new io(t,null)}))},t.ec=function(t,n){var e=this,i=this.a.a
return this.Qb().then((function(e){return t.rb(i,e,n)})).then((function(t){return Rh(e.a,t),e.a.reload()}))},t.ad=function(t){var n=this,e="string"==typeof t?t:t.uid,i=this.a.a
return this.a.I().then((function(t){return Zs(i,$s,{idToken:t,mfaEnrollmentId:e})})).then((function(t){var i=B(n.b,(function(t){return t.uid!=e}))
return rh(n,i),Rh(n.a,t),n.a.reload().s((function(t){if("auth/user-token-expired"!=t.code)throw t}))}))},t.w=function(){return{multiFactor:{enrolledFactors:W(this.b,(function(t){return t.w()}))}}},oh.prototype.start=function(){this.a=this.c,function t(n,e){n.stop(),n.b=ke(function(t,n){return n?(t.a=t.c,t.g()):(n=t.a,t.a*=2,t.a>t.f&&(t.a=t.f),n)}(n,e)).then((function(){return function(){var t=c.document,n=null
return Fi()||!t?_n():new In((function(e){n=function(){Fi()&&(t.removeEventListener("visibilitychange",n,!1),e())},t.addEventListener("visibilitychange",n,!1)})).s((function(e){throw t.removeEventListener("visibilitychange",n,!1),e}))}()})).then((function(){return n.h()})).then((function(){t(n,!0)})).s((function(e){n.i(e)&&t(n,!1)}))}(this,!0)},oh.prototype.stop=function(){this.b&&(this.b.cancel(),this.b=null)},ah.prototype.w=function(){return{apiKey:this.c.c,refreshToken:this.a,accessToken:this.b&&this.b.toString(),expirationTime:sh(this)}},ah.prototype.getToken=function(t){return t=!!t,this.b&&!this.a?On(new S("user-token-expired")):t||!this.b||A()>sh(this)-3e4?this.a?function(t,n){return function(t,n){return new In((function(e,i){"refresh_token"==n.grant_type&&n.refresh_token||"authorization_code"==n.grant_type&&n.code?is(t,t.l+"?key="+encodeURIComponent(t.c),(function(t){t?t.error?i(tu(t)):t.access_token&&t.refresh_token?e(t):i(new S("internal-error")):i(new S("network-request-failed"))}),"POST",ze(n).toString(),t.g,t.v.get()):i(new S("internal-error"))}))}(t.c,n).then((function(n){return t.b=Kr(n.access_token),t.a=n.refresh_token,{accessToken:t.b.toString(),refreshToken:t.a}})).s((function(n){throw"auth/user-token-expired"==n.code&&(t.a=null),n}))}(this,{grant_type:"refresh_token",refresh_token:this.a}):_n(null):_n({accessToken:this.b.toString(),refreshToken:this.a})},ch.prototype.w=function(){return{lastLoginAt:this.b,createdAt:this.a}},k(lh,we),lh.prototype.wa=function(t){this.pa=t,Qa(this.a,t)},lh.prototype.ka=function(){return this.pa},lh.prototype.Ga=function(){return Z(this.X)},lh.prototype.gb=function(){this.u.b&&(this.u.stop(),this.u.start())},Ji(lh.prototype,"providerId","firebase"),(t=lh.prototype).reload=function(){var t=this
return Uh(this,Ah(this).then((function(){return Ch(t).then((function(){return wh(t)})).then(Eh)})))},t.nc=function(t){return this.I(t).then((function(t){return new Xc(t)}))},t.I=function(t){var n=this
return Uh(this,Ah(this).then((function(){return n.b.getToken(t)})).then((function(t){if(!t)throw new S("internal-error")
return t.accessToken!=n.ya&&(yh(n,t.accessToken),n.dispatchEvent(new eh("tokenChanged"))),_h(n,"refreshToken",t.refreshToken),t.accessToken})))},t.Jc=function(t){if(!(t=t.users)||!t.length)throw new S("internal-error")
Th(this,{uid:(t=t[0]).localId,displayName:t.displayName,photoURL:t.photoUrl,email:t.email,emailVerified:!!t.emailVerified,phoneNumber:t.phoneNumber,lastLoginAt:t.lastLoginAt,createdAt:t.createdAt,tenantId:t.tenantId})
for(var n=function(t){return(t=t.providerUserInfo)&&t.length?W(t,(function(t){return new hh(t.rawId,t.providerId,t.email,t.displayName,t.photoUrl,t.phoneNumber)})):[]}(t),e=0;e<n.length;e++)Sh(this,n[e])
_h(this,"isAnonymous",!(this.email&&t.passwordHash||this.providerData&&this.providerData.length)),this.dispatchEvent(new eh("userReloaded",{gd:t}))},t.Kc=function(t){return Wi("firebase.User.prototype.reauthenticateAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.reauthenticateWithCredential instead."),this.sb(t)},t.sb=function(t){var n=this,e=null
return Uh(this,t.c(this.a,this.uid).then((function(t){return Rh(n,t),e=Dh(n,t,"reauthenticate"),n.f=null,n.reload()})).then((function(){return e})),!0)},t.Bc=function(t){return Wi("firebase.User.prototype.linkAndRetrieveDataWithCredential is deprecated. Please use firebase.User.prototype.linkWithCredential instead."),this.pb(t)},t.pb=function(t){var n=this,e=null
return Uh(this,Ph(this,t.providerId).then((function(){return n.I()})).then((function(e){return t.b(n.a,e)})).then((function(t){return e=Dh(n,t,"link"),Lh(n,t)})).then((function(){return e})))},t.Cc=function(t,n){var e=this
return Uh(this,Ph(this,"phone").then((function(){return Wc(mh(e),t,n,T(e.pb,e))})))},t.Lc=function(t,n){var e=this
return Uh(this,_n().then((function(){return Wc(mh(e),t,n,T(e.sb,e))})),!0)},t.Ab=function(t){var n=this
return Uh(this,this.I().then((function(e){return n.a.Ab(e,t)})).then((function(t){return Rh(n,t),n.reload()})))},t.dd=function(t){var n=this
return Uh(this,this.I().then((function(e){return t.b(n.a,e)})).then((function(t){return Rh(n,t),n.reload()})))},t.Bb=function(t){var n=this
return Uh(this,this.I().then((function(e){return n.a.Bb(e,t)})).then((function(t){return Rh(n,t),n.reload()})))},t.Cb=function(t){if(void 0===t.displayName&&void 0===t.photoURL)return Ah(this)
var n=this
return Uh(this,this.I().then((function(e){return n.a.Cb(e,{displayName:t.displayName,photoUrl:t.photoURL})})).then((function(t){return Rh(n,t),_h(n,"displayName",t.displayName||null),_h(n,"photoURL",t.photoUrl||null),G(n.providerData,(function(t){"password"===t.providerId&&(Ji(t,"displayName",n.displayName),Ji(t,"photoURL",n.photoURL))})),wh(n)})).then(Eh))},t.bd=function(t){var n=this
return Uh(this,Ch(this).then((function(e){return J(kh(n),t)?function(t,n,e){return Zs(t,As,{idToken:n,deleteProvider:e})}(n.a,e,[t]).then((function(t){var e={}
return G(t.providerUserInfo||[],(function(t){e[t.providerId]=!0})),G(kh(n),(function(t){e[t]||Nh(n,t)})),e[Lo.PROVIDER_ID]||Ji(n,"phoneNumber",null),wh(n)})):wh(n).then((function(){throw new S("no-such-provider")}))})))},t.delete=function(){var t=this
return Uh(this,this.I().then((function(n){return Zs(t.a,Es,{idToken:n})})).then((function(){t.dispatchEvent(new eh("userDeleted"))}))).then((function(){for(var n=0;n<t.G.length;n++)t.G[n].cancel("app-deleted")
fh(t,null),dh(t,null),vh(t,null),t.G=[],t.A=!0,bh(t),Ji(t,"refreshToken",null),t.i&&_c(t.i,t)}))},t.Eb=function(t,n){return!!("linkViaPopup"==t&&(this.h||null)==n&&this.g||"reauthViaPopup"==t&&(this.h||null)==n&&this.g||"linkViaRedirect"==t&&(this.ga||null)==n||"reauthViaRedirect"==t&&(this.ga||null)==n)},t.ma=function(t,n,e,i){"linkViaPopup"!=t&&"reauthViaPopup"!=t||i!=(this.h||null)||(e&&this.O?this.O(e):n&&!e&&this.g&&this.g(n),this.c&&(this.c.cancel(),this.c=null),delete this.g,delete this.O)},t.Fa=function(t,n){return"linkViaPopup"==t&&n==(this.h||null)?T(this.Jb,this):"reauthViaPopup"==t&&n==(this.h||null)?T(this.Kb,this):"linkViaRedirect"==t&&(this.ga||null)==n?T(this.Jb,this):"reauthViaRedirect"==t&&(this.ga||null)==n?T(this.Kb,this):null},t.Dc=function(t){var n=this
return xh(this,"linkViaPopup",t,(function(){return Ph(n,t.providerId).then((function(){return wh(n)}))}),!1)},t.Mc=function(t){return xh(this,"reauthViaPopup",t,(function(){return _n()}),!0)},t.Ec=function(t){var n=this
return Mh(this,"linkViaRedirect",t,(function(){return Ph(n,t.providerId)}),!1)},t.Nc=function(t){return Mh(this,"reauthViaRedirect",t,(function(){return _n()}),!0)},t.Jb=function(t,n,e,i){var r=this
this.c&&(this.c.cancel(),this.c=null)
var o=null
return Uh(this,this.I().then((function(e){return ms(r.a,{requestUri:t,postBody:i,sessionId:n,idToken:e})})).then((function(t){return o=Dh(r,t,"link"),Lh(r,t)})).then((function(){return o})))},t.Kb=function(t,n,e,i){var r=this
this.c&&(this.c.cancel(),this.c=null)
var o=null
return Uh(this,_n().then((function(){return so(gs(r.a,{requestUri:t,sessionId:n,postBody:i,tenantId:e}),r.uid)})).then((function(t){return o=Dh(r,t,"reauthenticate"),Rh(r,t),r.f=null,r.reload()})).then((function(){return o})),!0)},t.tb=function(t){var n=this,e=null
return Uh(this,this.I().then((function(n){return e=n,void 0===t||pt(t)?{}:Ur(new _r(t))})).then((function(t){return n.a.tb(e,t)})).then((function(t){if(n.email!=t)return n.reload()})).then((function(){})))},t.Db=function(t,n){var e=this,i=null
return Uh(this,this.I().then((function(t){return i=t,void 0===n||pt(n)?{}:Ur(new _r(n))})).then((function(n){return e.a.Db(i,t,n)})).then((function(t){if(e.email!=t)return e.reload()})).then((function(){})))},t.ic=function(t){var n=null,e=this
return Uh(this,t=so(_n(t),e.uid).then((function(t){return n=Dh(e,t,"reauthenticate"),Rh(e,t),e.f=null,e.reload()})).then((function(){return n})),!0)},t.toJSON=function(){return this.w()},t.w=function(){var t={uid:this.uid,displayName:this.displayName,photoURL:this.photoURL,email:this.email,emailVerified:this.emailVerified,phoneNumber:this.phoneNumber,isAnonymous:this.isAnonymous,tenantId:this.tenantId,providerData:[],apiKey:this.l,appName:this.m,authDomain:this.o,stsTokenManager:this.b.w(),redirectEventId:this.ga||null}
return this.metadata&&gt(t,this.metadata.w()),G(this.providerData,(function(n){t.providerData.push(function(t){var n,e={}
for(n in t)t.hasOwnProperty(n)&&(e[n]=t[n])
return e}(n))})),gt(t,this.N.w()),t}
var Kh={name:"redirectUser",D:"session"}
function qh(t){return Zu(t.b,Kh,t.a)}function Hh(t){this.a=t,this.b=Yu(),this.c=null,this.f=function(t){var n=Wh("local"),e=Wh("session"),i=Wh("none")
return function(t,n,e){var i=$u(n,e),r=zu(t,n.D)
return t.get(n,e).then((function(o){var a=null
try{a=xi(c.localStorage.getItem(i))}catch(t){}if(a&&!o)return c.localStorage.removeItem(i),t.set(n,a,e)
a&&o&&"localStorage"!=r.type&&c.localStorage.removeItem(i)}))}(t.b,n,t.a).then((function(){return t.b.get(e,t.a)})).then((function(r){return r?e:t.b.get(i,t.a).then((function(e){return e?i:t.b.get(n,t.a).then((function(e){return e?n:t.b.get(Bh,t.a).then((function(t){return t?Wh(t):n}))}))}))})).then((function(n){return t.c=n,Gh(t,n.D)})).s((function(){t.c||(t.c=n)}))}(this),this.b.addListener(Wh("local"),this.a,T(this.g,this))}function Gh(t,n){var e,i=[]
for(e in Xu)Xu[e]!==n&&i.push(Zu(t.b,Wh(Xu[e]),t.a))
return i.push(Zu(t.b,Bh,t.a)),function(t){return new In((function(n,e){var i=t.length,r=[]
if(i)for(var o=function(t,e){i--,r[t]=e,0==i&&n(r)},a=function(t){e(t)},s=0;s<t.length;s++)Cn(t[s],E(o,s),a)
else n(r)}))}(i)}Hh.prototype.g=function(){var t=this,n=Wh("local")
zh(this,(function(){return _n().then((function(){return t.c&&"local"!=t.c.D?t.b.get(n,t.a):null})).then((function(e){if(e)return Gh(t,"local").then((function(){t.c=n}))}))}))}
var Bh={name:"persistence",D:"session"}
function Wh(t){return{name:"authUser",D:t}}function Xh(t,n){return zh(t,(function(){return t.b.set(t.c,n.w(),t.a)}))}function Jh(t){return zh(t,(function(){return Zu(t.b,t.c,t.a)}))}function Yh(t,n,e){return zh(t,(function(){return t.b.get(t.c,t.a).then((function(t){return t&&n&&(t.authDomain=n),t&&e&&(t.emulatorConfig=e),Vh(t||{})}))}))}function zh(t,n){return t.f=t.f.then(n,n),t.f}function $h(t){if(this.m=!1,Ji(this,"settings",new Gc),Ji(this,"app",t),!ol(this).options||!ol(this).options.apiKey)throw new S("invalid-api-key")
t=n.SDK_VERSION?ki(n.SDK_VERSION):null,this.a=new Wa(ol(this).options&&ol(this).options.apiKey,P(_),t),this.R=[],this.u=[],this.P=[],this.ac=n.INTERNAL.createSubscribe(T(this.yc,this)),this.X=void 0,this.bc=n.INTERNAL.createSubscribe(T(this.zc,this)),il(this,null),this.l=new Hh(ol(this).options.apiKey+":"+ol(this).name),this.G=new Fh(ol(this).options.apiKey+":"+ol(this).name),this.$=cl(this,function(t){var n=ol(t).options.authDomain,e=function(t){var n=function(t,n){return t.b.get(Kh,t.a).then((function(t){return t&&n&&(t.authDomain=n),Vh(t||{})}))}(t.G,ol(t).options.authDomain).then((function(n){return(t.o=n)&&(n.ha=t.G),qh(t.G)}))
return cl(t,n)}(t).then((function(){return Yh(t.l,n,t.f)})).then((function(n){return n?(n.ha=t.G,t.o&&(t.o.ga||null)==(n.ga||null)?n:n.reload().then((function(){return Xh(t.l,n).then((function(){return n}))})).s((function(e){return"auth/network-request-failed"==e.code?n:Jh(t.l)}))):null})).then((function(n){il(t,n||null)}))
return cl(t,e)}(this)),this.i=cl(this,function(t){return t.$.then((function(){return el(t)})).s((function(){})).then((function(){if(!t.m)return t.pa()})).s((function(){})).then((function(){if(!t.m){t.ba=!0
var n=t.l
n.b.addListener(Wh("local"),n.a,t.pa)}}))}(this)),this.ba=!1,this.pa=T(this.Yc,this),this.Ba=T(this.da,this),this.ya=T(this.kc,this),this.za=T(this.vc,this),this.Aa=T(this.wc,this),this.b=null,function(t){var n=ol(t).options.authDomain,e=ol(t).options.apiKey
n&&Oi()&&(t.gb=t.$.then((function(){if(!t.m){if(t.b=jc(n,e,ol(t).name,t.f),Nc(t.b,t),al(t)&&Ih(al(t)),t.o){Ih(t.o)
var i=t.o
i.wa(t.ka()),fh(i,t),ph(i=t.o,t.N),vh(i,t),ts((i=t.o).a,t.f),dh(i,t),t.o=null}return t.b}})))}(this),this.INTERNAL={},this.INTERNAL.delete=T(this.delete,this),this.INTERNAL.logFramework=T(this.Fc,this),this.A=0,we.call(this),function(t){Object.defineProperty(t,"lc",{get:function(){return this.ka()},set:function(t){this.wa(t)},enumerable:!1}),t.aa=null,Object.defineProperty(t,"ti",{get:function(){return this.S()},set:function(t){this.xb(t)},enumerable:!1}),t.W=null}(this),this.N=[],this.f=null}function Zh(t){zn.call(this,"languageCodeChanged"),this.h=t}function Qh(t){zn.call(this,"emulatorConfigChanged"),this.c=t}function tl(t){zn.call(this,"frameworkChanged"),this.f=t}function nl(t){return t.gb||On(new S("auth-domain-config-required"))}function el(t){if(!Oi())return On(new S("operation-not-supported-in-this-environment"))
var n=nl(t).then((function(){return t.b.qa()})).then((function(t){return t?zi(t):null}))
return cl(t,n)}function il(t,n){al(t)&&(function(t,n){z(t.R,(function(t){return t==n}))}(al(t),t.Ba),le(al(t),"tokenChanged",t.ya),le(al(t),"userDeleted",t.za),le(al(t),"userInvalidated",t.Aa),bh(al(t))),n&&(n.R.push(t.Ba),ue(n,"tokenChanged",t.ya),ue(n,"userDeleted",t.za),ue(n,"userInvalidated",t.Aa),0<t.A&&gh(n)),Ji(t,"currentUser",n),n&&(n.wa(t.ka()),fh(n,t),ph(n,t.N),vh(n,t),ts(n.a,t.f),dh(n,t))}function rl(t,n){var e=null,i=null
return cl(t,n.then((function(n){return e=Mo(n),i=Xr(n),function(t,n){var e={}
return e.apiKey=ol(t).options.apiKey,e.authDomain=ol(t).options.authDomain,e.appName=ol(t).name,t.f&&(e.emulatorConfig=t.f),t.$.then((function(){return function(t,n,e,i){var r=new lh(t,n)
return e&&(r.ha=e),i&&ph(r,i),r.reload().then((function(){return r}))}(e,n,t.G,t.Ga())})).then((function(n){return al(t)&&n.uid==al(t).uid?(Oh(al(t),n),t.da(n)):(il(t,n),Ih(n),t.da(n))})).then((function(){ul(t)}))}(t,n)}),(function(n){var e=null
throw n&&"auth/multi-factor-auth-required"===n.code&&(e=Zc(n.w(),t,T(t.jc,t))),e||n})).then((function(){return zi({user:al(t),credential:e,additionalUserInfo:i,operationType:"signIn"})})))}function ol(t){return t.app}function al(t){return t.currentUser}function sl(t){return al(t)&&al(t)._lat||null}function ul(t){if(t.ba){for(var n=0;n<t.u.length;n++)t.u[n]&&t.u[n](sl(t))
if(t.X!==t.getUid()&&t.P.length)for(t.X=t.getUid(),n=0;n<t.P.length;n++)t.P[n]&&t.P[n](sl(t))}}function cl(t,n){return t.R.push(n),n.na((function(){Y(t.R,n)})),n}function hl(){}function ll(){this.a={},this.b=1e12}Hh.prototype.wb=function(t){var n=null,e=this
return function(t){var n=new S("invalid-persistence-type"),e=new S("unsupported-persistence-type")
t:{for(i in Xu)if(Xu[i]==t){var i=!0
break t}i=!1}if(!i||"string"!=typeof t)throw n
switch(yi()){case"ReactNative":if("session"===t)throw e
break
case"Node":if("none"!==t)throw e
break
case"Worker":if("session"===t||!Su()&&"none"!==t)throw e
break
default:if(!_i()&&"none"!==t)throw e}}(t),zh(this,(function(){return t!=e.c.D?e.b.get(e.c,e.a).then((function(i){return n=i,Gh(e,t)})).then((function(){if(e.c=Wh(t),n)return e.b.set(e.c,n,e.a)})):_n()}))},k($h,we),k(Zh,zn),k(Qh,zn),k(tl,zn),(t=$h.prototype).wb=function(t){return cl(this,t=this.l.wb(t))},t.wa=function(t){this.aa===t||this.m||(this.aa=t,Qa(this.a,this.aa),this.dispatchEvent(new Zh(this.ka())))},t.ka=function(){return this.aa},t.ed=function(){var t=c.navigator
this.wa(t&&(t.languages&&t.languages[0]||t.language||t.userLanguage)||null)},t.fd=function(t){if(!this.f){if(!/^https?:\/\//.test(t))throw new S("argument-error","Emulator URL must start with a valid scheme (http:// or https://).")
Ki("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),c.document&&vi().then((function(){var t=c.document.createElement("div")
t.innerText="Running in emulator mode. Do not use with production credentials.",t.style.position="fixed",t.style.width="100%",t.style.backgroundColor="#ffffff",t.style.border=".1em solid #000000",t.style.color="#ff0000",t.style.bottom="0px",t.style.left="0px",t.style.margin="0px",t.style.zIndex=1e4,t.style.textAlign="center",t.classList.add("firebase-emulator-warning"),c.document.body.appendChild(t)})),this.f={url:t},this.settings.hb=!0,ts(this.a,this.f),this.dispatchEvent(new Qh(this.f))}},t.Fc=function(t){this.N.push(t),es(this.a,n.SDK_VERSION?ki(n.SDK_VERSION,this.N):null),this.dispatchEvent(new tl(this.N))},t.Ga=function(){return Z(this.N)},t.xb=function(t){this.W===t||this.m||(this.W=t,this.a.b=this.W)},t.S=function(){return this.W},t.toJSON=function(){return{apiKey:ol(this).options.apiKey,authDomain:ol(this).options.authDomain,appName:ol(this).name,currentUser:al(this)&&al(this).w()}},t.Eb=function(t,n){switch(t){case"unknown":case"signInViaRedirect":return!0
case"signInViaPopup":return this.h==n&&!!this.g
default:return!1}},t.ma=function(t,n,e,i){"signInViaPopup"==t&&this.h==i&&(e&&this.O?this.O(e):n&&!e&&this.g&&this.g(n),this.c&&(this.c.cancel(),this.c=null),delete this.g,delete this.O)},t.Fa=function(t,n){return"signInViaRedirect"==t||"signInViaPopup"==t&&this.h==n&&this.g?T(this.hc,this):null},t.hc=function(t,n,e,i){var r=this,o={requestUri:t,postBody:i,sessionId:n,tenantId:e}
return this.c&&(this.c.cancel(),this.c=null),r.$.then((function(){return rl(r,vs(r.a,o))}))},t.Wc=function(t){if(!Oi())return On(new S("operation-not-supported-in-this-environment"))
var e=this,i=Wr(t.providerId),r=Mi(),o=null;(!Pi()||gi())&&ol(this).options.authDomain&&t.isOAuthProvider&&(o=du(ol(this).options.authDomain,ol(this).options.apiKey,ol(this).name,"signInViaPopup",t,null,r,n.SDK_VERSION||null,null,null,this.S(),this.f))
var a=fi(o,i&&i.ua,i&&i.ta)
return cl(this,i=nl(this).then((function(n){return Rc(n,a,"signInViaPopup",t,r,!!o,e.S())})).then((function(){return new In((function(t,n){e.ma("signInViaPopup",null,new S("cancelled-popup-request"),e.h),e.g=t,e.O=n,e.h=r,e.c=Lc(e.b,e,"signInViaPopup",a,r)}))})).then((function(t){return a&&li(a),t?zi(t):null})).s((function(t){throw a&&li(a),t})))},t.Xc=function(t){if(!Oi())return On(new S("operation-not-supported-in-this-environment"))
var n=this
return cl(this,nl(this).then((function(){return function(t){return zh(t,(function(){return t.b.set(Bh,t.c.D,t.a)}))}(n.l)})).then((function(){return Dc(n.b,"signInViaRedirect",t,void 0,n.S())})))},t.qa=function(){var t=this
return el(this).then((function(n){return t.b&&Fc(t.b.b),n})).s((function(n){throw t.b&&Fc(t.b.b),n}))},t.cd=function(t){if(!t)return On(new S("null-user"))
if(this.W!=t.tenantId)return On(new S("tenant-id-mismatch"))
var n=this,e={}
e.apiKey=ol(this).options.apiKey,e.authDomain=ol(this).options.authDomain,e.appName=ol(this).name
var i=function(t,n,e,i){var r=t.b,o={}
return o[Ja]=r.b&&r.b.toString(),o.refreshToken=r.a,n=new lh(n||{apiKey:t.l,authDomain:t.o,appName:t.m},o),e&&(n.ha=e),i&&ph(n,i),Oh(n,t),n}(t,e,n.G,n.Ga())
return cl(this,this.i.then((function(){if(ol(n).options.apiKey!=t.l)return i.reload()})).then((function(){return al(n)&&t.uid==al(n).uid?(Oh(al(n),t),n.da(t)):(il(n,i),Ih(i),n.da(i))})).then((function(){ul(n)})))},t.zb=function(){var t=this
return cl(this,this.i.then((function(){return t.b&&Fc(t.b.b),al(t)?(il(t,null),Jh(t.l).then((function(){ul(t)}))):_n()})))},t.Yc=function(){var t=this
return Yh(this.l,ol(this).options.authDomain).then((function(n){if(!t.m){var e
if(e=al(t)&&n){e=al(t).uid
var i=n.uid
e=null!=e&&""!==e&&null!=i&&""!==i&&e==i}if(e)return Oh(al(t),n),al(t).I();(al(t)||n)&&(il(t,n),n&&(Ih(n),n.ha=t.G),t.b&&Nc(t.b,t),ul(t))}}))},t.da=function(t){return Xh(this.l,t)},t.kc=function(){ul(this),this.da(al(this))},t.vc=function(){this.zb()},t.wc=function(){this.zb()},t.jc=function(t){var n=this
return this.i.then((function(){return rl(n,_n(t))}))},t.yc=function(t){var n=this
this.addAuthTokenListener((function(){t.next(al(n))}))},t.zc=function(t){var n=this
!function(t,n){t.P.push(n),cl(t,t.i.then((function(){!t.m&&J(t.P,n)&&t.X!==t.getUid()&&(t.X=t.getUid(),n(sl(t)))})))}(this,(function(){t.next(al(n))}))},t.Hc=function(t,n,e){var i=this
return this.ba&&Promise.resolve().then((function(){"function"==typeof t?t(al(i)):"function"==typeof t.next&&t.next(al(i))})),this.ac(t,n,e)},t.Gc=function(t,n,e){var i=this
return this.ba&&Promise.resolve().then((function(){i.X=i.getUid(),"function"==typeof t?t(al(i)):"function"==typeof t.next&&t.next(al(i))})),this.bc(t,n,e)},t.mc=function(t){var n=this
return cl(this,this.i.then((function(){return al(n)?al(n).I(t).then((function(t){return{accessToken:t}})):null})))},t.Sc=function(t){var n=this
return this.i.then((function(){return rl(n,Zs(n.a,Ws,{token:t}))})).then((function(t){var e=t.user
return _h(e,"isAnonymous",!1),n.da(e),t}))},t.Tc=function(t,n){var e=this
return this.i.then((function(){return rl(e,Zs(e.a,Xs,{email:t,password:n}))}))},t.dc=function(t,n){var e=this
return this.i.then((function(){return rl(e,Zs(e.a,Is,{email:t,password:n}))}))},t.Za=function(t){var n=this
return this.i.then((function(){return rl(n,t.ja(n.a))}))},t.Rc=function(t){return Wi("firebase.auth.Auth.prototype.signInAndRetrieveDataWithCredential is deprecated. Please use firebase.auth.Auth.prototype.signInWithCredential instead."),this.Za(t)},t.yb=function(){var t=this
return this.i.then((function(){var n=al(t)
if(n&&n.isAnonymous){var e=zi({providerId:null,isNewUser:!1})
return zi({user:n,credential:null,additionalUserInfo:e,operationType:"signIn"})}return rl(t,t.a.yb()).then((function(n){var e=n.user
return _h(e,"isAnonymous",!0),t.da(e),n}))}))},t.getUid=function(){return al(this)&&al(this).uid||null},t.cc=function(t){this.addAuthTokenListener(t),this.A++,0<this.A&&al(this)&&gh(al(this))},t.Oc=function(t){var n=this
G(this.u,(function(e){e==t&&n.A--})),0>this.A&&(this.A=0),0==this.A&&al(this)&&bh(al(this)),this.removeAuthTokenListener(t)},t.addAuthTokenListener=function(t){var n=this
this.u.push(t),cl(this,this.i.then((function(){n.m||J(n.u,t)&&t(sl(n))})))},t.removeAuthTokenListener=function(t){z(this.u,(function(n){return n==t}))},t.delete=function(){this.m=!0
for(var t=0;t<this.R.length;t++)this.R[t].cancel("app-deleted")
return this.R=[],this.l&&(t=this.l).b.removeListener(Wh("local"),t.a,this.pa),this.b&&(_c(this.b,this),Fc(this.b.b)),Promise.resolve()},t.gc=function(t){return cl(this,function(t,n){return Zs(t,Ts,{identifier:n,continueUri:Ci()?ui():"http://localhost"}).then((function(t){return t.signinMethods||[]}))}(this.a,t))},t.Ac=function(t){return!!Co(t)},t.vb=function(t,n){var e=this
return cl(this,_n().then((function(){var t=new _r(n)
if(!t.c)throw new S("argument-error",Rr+" must be true when sending sign in link to email")
return Ur(t)})).then((function(n){return e.a.vb(t,n)})).then((function(){})))},t.hd=function(t){return this.Qa(t).then((function(t){return t.data.email}))},t.mb=function(t,n){return cl(this,this.a.mb(t,n).then((function(){})))},t.Qa=function(t){return cl(this,this.a.Qa(t).then((function(t){return new or(t)})))},t.ib=function(t){return cl(this,this.a.ib(t).then((function(){})))},t.ub=function(t,n){var e=this
return cl(this,_n().then((function(){return void 0===n||pt(n)?{}:Ur(new _r(n))})).then((function(n){return e.a.ub(t,n)})).then((function(){})))},t.Vc=function(t,n){return cl(this,Wc(this,t,n,T(this.Za,this)))},t.Uc=function(t,n){var e=this
return cl(this,_n().then((function(){var i=n||ui(),r=Oo(t,i)
if(!(i=Co(i)))throw new S("argument-error","Invalid email link!")
if(i.tenantId!==e.S())throw new S("tenant-id-mismatch")
return e.Za(r)})))},hl.prototype.render=function(){},hl.prototype.reset=function(){},hl.prototype.getResponse=function(){},hl.prototype.execute=function(){}
var fl=null
function dl(t,n){return(n=pl(n))&&t.a[n]||null}function pl(t){return(t=void 0===t?1e12:t)?t.toString():null}function vl(t,n){this.g=!1,this.c=n,this.a=this.b=null,this.h="invisible"!==this.c.size,this.f=un(t)
var e=this
this.i=function(){e.execute()},this.h?this.execute():ue(this.f,"click",this.i)}function ml(t){if(t.g)throw Error("reCAPTCHA mock was already deleted!")}function gl(){}function bl(){}ll.prototype.render=function(t,n){return this.a[this.b.toString()]=new vl(t,n),this.b++},ll.prototype.reset=function(t){var n=dl(this,t)
t=pl(t),n&&t&&(n.delete(),delete this.a[t])},ll.prototype.getResponse=function(t){return(t=dl(this,t))?t.getResponse():null},ll.prototype.execute=function(t){(t=dl(this,t))&&t.execute()},vl.prototype.getResponse=function(){return ml(this),this.b},vl.prototype.execute=function(){ml(this)
var t=this
this.a||(this.a=setTimeout((function(){t.b=function(){for(var t=50,n=[];0<t;)n.push("1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".charAt(Math.floor(62*Math.random()))),t--
return n.join("")}()
var n=t.c.callback,e=t.c["expired-callback"]
if(n)try{n(t.b)}catch(t){}t.a=setTimeout((function(){if(t.a=null,t.b=null,e)try{e()}catch(t){}t.h&&t.execute()}),6e4)}),500))},vl.prototype.delete=function(){ml(this),this.g=!0,clearTimeout(this.a),this.a=null,le(this.f,"click",this.i)},Ji(gl,"FACTOR_ID","phone"),bl.prototype.g=function(){return fl||(fl=new ll),_n(fl)},bl.prototype.c=function(){}
var yl=null
function wl(){this.b=c.grecaptcha?1/0:0,this.f=null,this.a="__rcb"+Math.floor(1e6*Math.random()).toString()}var Il=new yt(Tt,"https://www.google.com/recaptcha/api.js?onload=%{onload}&render=explicit&hl=%{hl}"),Tl=new Vi(3e4,6e4)
wl.prototype.g=function(t){var n=this
return new In((function(e,i){var r=setTimeout((function(){i(new S("network-request-failed"))}),Tl.get())
!c.grecaptcha||t!==n.f&&!n.b?(c[n.a]=function(){if(c.grecaptcha){n.f=t
var o=c.grecaptcha.render
c.grecaptcha.render=function(t,e){return t=o(t,e),n.b++,t},clearTimeout(r),e(c.grecaptcha)}else clearTimeout(r),i(new S("internal-error"))
delete c[n.a]},_n(Va(St(Il,{onload:n.a,hl:t||""}))).s((function(){clearTimeout(r),i(new S("internal-error","Unable to load external reCAPTCHA dependencies!"))}))):(clearTimeout(r),e(c.grecaptcha))}))},wl.prototype.c=function(){this.b--}
var El=null
function Al(t,n,e,i,r,o,a){if(Ji(this,"type","recaptcha"),this.c=this.f=null,this.A=!1,this.m=n,this.g=null,a?(yl||(yl=new bl),a=yl):(El||(El=new wl),a=El),this.v=a,this.a=e||{theme:"light",type:"image"},this.h=[],this.a[Nl])throw new S("argument-error","sitekey should not be provided for reCAPTCHA as one is automatically provisioned for the current project.")
if(this.i="invisible"===this.a[_l],!c.document)throw new S("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment with DOM support.")
if(!un(n)||!this.i&&un(n).hasChildNodes())throw new S("argument-error","reCAPTCHA container is either not found or already contains inner elements!")
this.o=new Wa(t,o||null,r||null),this.u=i||function(){return null}
var s=this
this.l=[]
var u=this.a[kl]
this.a[kl]=function(t){if(Ol(s,t),"function"==typeof u)u(t)
else if("string"==typeof u){var n=Ni(u,c)
"function"==typeof n&&n(t)}}
var h=this.a[Sl]
this.a[Sl]=function(){if(Ol(s,null),"function"==typeof h)h()
else if("string"==typeof h){var t=Ni(h,c)
"function"==typeof t&&t()}}}var kl="callback",Sl="expired-callback",Nl="sitekey",_l="size"
function Ol(t,n){for(var e=0;e<t.l.length;e++)try{t.l[e](n)}catch(t){}}function Cl(t,n){return t.h.push(n),n.na((function(){Y(t.h,n)})),n}function Rl(t){if(t.A)throw new S("internal-error","RecaptchaVerifier instance has been destroyed.")}function Pl(t,e,i){var r=!1
try{this.b=i||n.app()}catch(t){throw new S("argument-error","No firebase.app.App instance is currently initialized.")}if(!this.b.options||!this.b.options.apiKey)throw new S("invalid-api-key")
i=this.b.options.apiKey
var o=this,a=null
try{a=this.b.auth().Ga()}catch(t){}try{r=this.b.auth().settings.appVerificationDisabledForTesting}catch(t){}a=n.SDK_VERSION?ki(n.SDK_VERSION,a):null,Al.call(this,i,t,e,(function(){try{var t=o.b.auth().ka()}catch(n){t=null}return t}),a,P(_),r)}function Dl(t,n,e,i){t:{e=Array.prototype.slice.call(e)
for(var r=0,o=!1,a=0;a<n.length;a++)if(n[a].optional)o=!0
else{if(o)throw new S("internal-error","Argument validator encountered a required argument after an optional argument.")
r++}if(o=n.length,e.length<r||o<e.length)i="Expected "+(r==o?1==r?"1 argument":r+" arguments":r+"-"+o+" arguments")+" but got "+e.length+"."
else{for(r=0;r<e.length;r++)if(o=n[r].optional&&void 0===e[r],!n[r].K(e[r])&&!o){if(n=n[r],0>r||r>=Ll.length)throw new S("internal-error","Argument validator received an unsupported number of arguments.")
e=Ll[r],i=(i?"":e+" argument ")+(n.name?'"'+n.name+'" ':"")+"must be "+n.J+"."
break t}i=null}}if(i)throw new S("argument-error",t+" failed: "+i)}(t=Al.prototype).Ia=function(){var t=this
return this.f?this.f:this.f=Cl(this,_n().then((function(){if(Ci()&&!bi())return vi()
throw new S("operation-not-supported-in-this-environment","RecaptchaVerifier is only supported in a browser HTTP/HTTPS environment.")})).then((function(){return t.v.g(t.u())})).then((function(n){return t.g=n,Zs(t.o,xs,{})})).then((function(n){t.a[Nl]=n.recaptchaSiteKey})).s((function(n){throw t.f=null,n})))},t.render=function(){Rl(this)
var t=this
return Cl(this,this.Ia().then((function(){if(null===t.c){var n=t.m
if(!t.i){var e=un(n)
n=function(t,n,e){var i=arguments,r=document,o=String(i[0]),a=i[1]
if(!sn&&a&&(a.name||a.type)){if(o=["<",o],a.name&&o.push(' name="',Ht(a.name),'"'),a.type){o.push(' type="',Ht(a.type),'"')
var s={}
gt(s,a),delete s.type,a=s}o.push(">"),o=o.join("")}return o=pn(r,o),a&&("string"==typeof a?o.className=a:Array.isArray(a)?o.className=a.join(" "):cn(o,a)),2<i.length&&dn(r,o,i),o}("DIV"),e.appendChild(n)}t.c=t.g.render(n,t.a)}return t.c})))},t.verify=function(){Rl(this)
var t=this
return Cl(this,this.render().then((function(n){return new In((function(e){var i=t.g.getResponse(n)
i?e(i):(t.l.push((function n(i){i&&(function(t,n){z(t.l,(function(t){return t==n}))}(t,n),e(i))})),t.i&&t.g.execute(t.c))}))})))},t.reset=function(){Rl(this),null!==this.c&&this.g.reset(this.c)},t.clear=function(){Rl(this),this.A=!0,this.v.c()
for(var t=0;t<this.h.length;t++)this.h[t].cancel("RecaptchaVerifier instance has been destroyed.")
if(!this.i){t=un(this.m)
for(var n;n=t.firstChild;)t.removeChild(n)}},k(Pl,Al)
var Ll="First Second Third Fourth Fifth Sixth Seventh Eighth Ninth".split(" ")
function xl(t,n){return{name:t||"",J:"a valid string",optional:!!n,K:function(t){return"string"==typeof t}}}function Ml(t,n){return{name:t||"",J:"a boolean",optional:!!n,K:function(t){return"boolean"==typeof t}}}function jl(t,n){return{name:t||"",J:"a valid object",optional:!!n,K:m}}function Ul(t,n){return{name:t||"",J:"a function",optional:!!n,K:function(t){return"function"==typeof t}}}function Vl(t,n){return{name:t||"",J:"null",optional:!!n,K:function(t){return null===t}}}function Fl(t){return{name:t?t+"Credential":"credential",J:t?"a valid "+t+" credential":"a valid credential",optional:!1,K:function(n){if(!n)return!1
var e=!t||n.providerId===t
return!(!n.ja||!e)}}}function Kl(t,n){return m(t)&&"string"==typeof t.type&&t.type===n&&"function"==typeof t.Ha}function ql(t){return m(t)&&"string"==typeof t.uid}function Hl(t,n,e,i){return{name:e||"",J:t.J+" or "+n.J,optional:!!i,K:function(e){return t.K(e)||n.K(e)}}}function Gl(t,n){for(var e in n){var i=n[e].name
t[i]=Xl(i,t[e],n[e].j)}}function Bl(t,n){for(var e in n){var i=n[e].name
i!==e&&Object.defineProperty(t,i,{get:E((function(t){return this[t]}),e),set:E((function(t,n,e,i){Dl(t,[e],[i],!0),this[n]=i}),i,e,n[e].jb),enumerable:!0})}}function Wl(t,n,e,i){t[n]=Xl(n,e,i)}function Xl(t,n,e){function i(){var t=Array.prototype.slice.call(arguments)
return Dl(o,e,t),n.apply(this,t)}if(!e)return n
var r,o=function(t){return(t=t.split("."))[t.length-1]}(t)
for(r in n)i[r]=n[r]
for(r in n.prototype)i.prototype[r]=n.prototype[r]
return i}Gl($h.prototype,{ib:{name:"applyActionCode",j:[xl("code")]},Qa:{name:"checkActionCode",j:[xl("code")]},mb:{name:"confirmPasswordReset",j:[xl("code"),xl("newPassword")]},dc:{name:"createUserWithEmailAndPassword",j:[xl("email"),xl("password")]},gc:{name:"fetchSignInMethodsForEmail",j:[xl("email")]},qa:{name:"getRedirectResult",j:[]},Ac:{name:"isSignInWithEmailLink",j:[xl("emailLink")]},Gc:{name:"onAuthStateChanged",j:[Hl(jl(),Ul(),"nextOrObserver"),Ul("opt_error",!0),Ul("opt_completed",!0)]},Hc:{name:"onIdTokenChanged",j:[Hl(jl(),Ul(),"nextOrObserver"),Ul("opt_error",!0),Ul("opt_completed",!0)]},ub:{name:"sendPasswordResetEmail",j:[xl("email"),Hl(jl("opt_actionCodeSettings",!0),Vl(null,!0),"opt_actionCodeSettings",!0)]},vb:{name:"sendSignInLinkToEmail",j:[xl("email"),jl("actionCodeSettings")]},wb:{name:"setPersistence",j:[xl("persistence")]},Rc:{name:"signInAndRetrieveDataWithCredential",j:[Fl()]},yb:{name:"signInAnonymously",j:[]},Za:{name:"signInWithCredential",j:[Fl()]},Sc:{name:"signInWithCustomToken",j:[xl("token")]},Tc:{name:"signInWithEmailAndPassword",j:[xl("email"),xl("password")]},Uc:{name:"signInWithEmailLink",j:[xl("email"),xl("emailLink",!0)]},Vc:{name:"signInWithPhoneNumber",j:[xl("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Wc:{name:"signInWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Xc:{name:"signInWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},cd:{name:"updateCurrentUser",j:[Hl({name:"user",J:"an instance of Firebase User",optional:!1,K:function(t){return!!(t&&t instanceof lh)}},Vl(),"user")]},zb:{name:"signOut",j:[]},toJSON:{name:"toJSON",j:[xl(null,!0)]},ed:{name:"useDeviceLanguage",j:[]},fd:{name:"useEmulator",j:[xl("url")]},hd:{name:"verifyPasswordResetCode",j:[xl("code")]}}),Bl($h.prototype,{lc:{name:"languageCode",jb:Hl(xl(),Vl(),"languageCode")},ti:{name:"tenantId",jb:Hl(xl(),Vl(),"tenantId")}}),$h.Persistence=Xu,$h.Persistence.LOCAL="local",$h.Persistence.SESSION="session",$h.Persistence.NONE="none",Gl(lh.prototype,{delete:{name:"delete",j:[]},nc:{name:"getIdTokenResult",j:[Ml("opt_forceRefresh",!0)]},I:{name:"getIdToken",j:[Ml("opt_forceRefresh",!0)]},Bc:{name:"linkAndRetrieveDataWithCredential",j:[Fl()]},pb:{name:"linkWithCredential",j:[Fl()]},Cc:{name:"linkWithPhoneNumber",j:[xl("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Dc:{name:"linkWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Ec:{name:"linkWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Kc:{name:"reauthenticateAndRetrieveDataWithCredential",j:[Fl()]},sb:{name:"reauthenticateWithCredential",j:[Fl()]},Lc:{name:"reauthenticateWithPhoneNumber",j:[xl("phoneNumber"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]},Mc:{name:"reauthenticateWithPopup",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},Nc:{name:"reauthenticateWithRedirect",j:[{name:"authProvider",J:"a valid Auth provider",optional:!1,K:function(t){return!!(t&&t.providerId&&t.hasOwnProperty&&t.hasOwnProperty("isOAuthProvider"))}}]},reload:{name:"reload",j:[]},tb:{name:"sendEmailVerification",j:[Hl(jl("opt_actionCodeSettings",!0),Vl(null,!0),"opt_actionCodeSettings",!0)]},toJSON:{name:"toJSON",j:[xl(null,!0)]},bd:{name:"unlink",j:[xl("provider")]},Ab:{name:"updateEmail",j:[xl("email")]},Bb:{name:"updatePassword",j:[xl("password")]},dd:{name:"updatePhoneNumber",j:[Fl("phone")]},Cb:{name:"updateProfile",j:[jl("profile")]},Db:{name:"verifyBeforeUpdateEmail",j:[xl("email"),Hl(jl("opt_actionCodeSettings",!0),Vl(null,!0),"opt_actionCodeSettings",!0)]}}),Gl(ll.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Gl(hl.prototype,{execute:{name:"execute"},render:{name:"render"},reset:{name:"reset"},getResponse:{name:"getResponse"}}),Gl(In.prototype,{na:{name:"finally"},s:{name:"catch"},then:{name:"then"}}),Bl(Gc.prototype,{appVerificationDisabled:{name:"appVerificationDisabledForTesting",jb:Ml("appVerificationDisabledForTesting")}}),Gl(Bc.prototype,{confirm:{name:"confirm",j:[xl("verificationCode")]}}),Wl(ao,"fromJSON",(function(t){t="string"==typeof t?JSON.parse(t):t
for(var n,e=[po,No,Po,ho],i=0;i<e.length;i++)if(n=e[i](t))return n
return null}),[Hl(xl(),jl(),"json")]),Wl(_o,"credential",(function(t,n){return new So(t,n)}),[xl("email"),xl("password")]),Gl(So.prototype,{w:{name:"toJSON",j:[xl(null,!0)]}}),Gl(bo.prototype,{Ca:{name:"addScope",j:[xl("scope")]},Ka:{name:"setCustomParameters",j:[jl("customOAuthParameters")]}}),Wl(bo,"credential",yo,[Hl(xl(),jl(),"token")]),Wl(_o,"credentialWithLink",Oo,[xl("email"),xl("emailLink")]),Gl(wo.prototype,{Ca:{name:"addScope",j:[xl("scope")]},Ka:{name:"setCustomParameters",j:[jl("customOAuthParameters")]}}),Wl(wo,"credential",Io,[Hl(xl(),jl(),"token")]),Gl(To.prototype,{Ca:{name:"addScope",j:[xl("scope")]},Ka:{name:"setCustomParameters",j:[jl("customOAuthParameters")]}}),Wl(To,"credential",Eo,[Hl(xl(),Hl(jl(),Vl()),"idToken"),Hl(xl(),Vl(),"accessToken",!0)]),Gl(Ao.prototype,{Ka:{name:"setCustomParameters",j:[jl("customOAuthParameters")]}}),Wl(Ao,"credential",ko,[Hl(xl(),jl(),"token"),xl("secret",!0)]),Gl(go.prototype,{Ca:{name:"addScope",j:[xl("scope")]},credential:{name:"credential",j:[Hl(xl(),Hl(jl(),Vl()),"optionsOrIdToken"),Hl(xl(),Vl(),"accessToken",!0)]},Ka:{name:"setCustomParameters",j:[jl("customOAuthParameters")]}}),Gl(lo.prototype,{w:{name:"toJSON",j:[xl(null,!0)]}}),Gl(uo.prototype,{w:{name:"toJSON",j:[xl(null,!0)]}}),Wl(Lo,"credential",xo,[xl("verificationId"),xl("verificationCode")]),Gl(Lo.prototype,{eb:{name:"verifyPhoneNumber",j:[Hl(xl(),{name:"phoneInfoOptions",J:"valid phone info options",optional:!1,K:function(t){return!!t&&(t.session&&t.phoneNumber?Kl(t.session,ro)&&"string"==typeof t.phoneNumber:t.session&&t.multiFactorHint?Kl(t.session,oo)&&ql(t.multiFactorHint):t.session&&t.multiFactorUid?Kl(t.session,oo)&&"string"==typeof t.multiFactorUid:!!t.phoneNumber&&"string"==typeof t.phoneNumber)}},"phoneInfoOptions"),{name:"applicationVerifier",J:"an implementation of firebase.auth.ApplicationVerifier",optional:!1,K:function(t){return!(!t||"string"!=typeof t.type||"function"!=typeof t.verify)}}]}}),Gl(Ro.prototype,{w:{name:"toJSON",j:[xl(null,!0)]}}),Gl(S.prototype,{toJSON:{name:"toJSON",j:[xl(null,!0)]}}),Gl(Go.prototype,{toJSON:{name:"toJSON",j:[xl(null,!0)]}}),Gl(Ho.prototype,{toJSON:{name:"toJSON",j:[xl(null,!0)]}}),Gl($c.prototype,{toJSON:{name:"toJSON",j:[xl(null,!0)]}}),Gl(Jc.prototype,{Qc:{name:"resolveSignIn",j:[{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,K:function(t){return!!t&&!!t.rb}}]}}),Gl(ih.prototype,{Qb:{name:"getSession",j:[]},ec:{name:"enroll",j:[{name:"multiFactorAssertion",J:"a valid multiFactorAssertion",optional:!1,K:function(t){return!!t&&!!t.rb}},xl("displayName",!0)]},ad:{name:"unenroll",j:[Hl({name:"multiFactorInfo",J:"a valid multiFactorInfo",optional:!1,K:ql},xl(),"multiFactorInfoIdentifier")]}}),Gl(Pl.prototype,{clear:{name:"clear",j:[]},render:{name:"render",j:[]},verify:{name:"verify",j:[]}}),Wl(yr,"parseLink",Nr,[xl("link")]),Wl(gl,"assertion",(function(t){return new nh(t)}),[Fl("phone")]),function(){if(void 0===n||!n.INTERNAL||!n.INTERNAL.registerComponent)throw Error("Cannot find the firebase namespace; be sure to include firebase-app.js before this library.")
var t={ActionCodeInfo:{Operation:{EMAIL_SIGNIN:sr,PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:ar,VERIFY_AND_CHANGE_EMAIL:ur,VERIFY_EMAIL:"VERIFY_EMAIL"}},Auth:$h,AuthCredential:ao,Error:S}
Wl(t,"EmailAuthProvider",_o,[]),Wl(t,"FacebookAuthProvider",bo,[]),Wl(t,"GithubAuthProvider",wo,[]),Wl(t,"GoogleAuthProvider",To,[]),Wl(t,"TwitterAuthProvider",Ao,[]),Wl(t,"OAuthProvider",go,[xl("providerId")]),Wl(t,"SAMLAuthProvider",mo,[xl("providerId")]),Wl(t,"PhoneAuthProvider",Lo,[{name:"auth",J:"an instance of Firebase Auth",optional:!0,K:function(t){return!!(t&&t instanceof $h)}}]),Wl(t,"RecaptchaVerifier",Pl,[Hl(xl(),{name:"",J:"an HTML element",optional:!1,K:function(t){return!!(t&&t instanceof Element)}},"recaptchaContainer"),jl("recaptchaParameters",!0),{name:"app",J:"an instance of Firebase App",optional:!0,K:function(t){return!!(t&&t instanceof n.app.App)}}]),Wl(t,"ActionCodeURL",yr,[]),Wl(t,"PhoneMultiFactorGenerator",gl,[]),n.INTERNAL.registerComponent({name:"auth",instanceFactory:function(t){return new $h(t=t.getProvider("app").getImmediate())},multipleInstances:!1,serviceProps:t,instantiationMode:"LAZY",type:"PUBLIC"}),n.INTERNAL.registerComponent({name:"auth-internal",instanceFactory:function(t){return{getUid:T((t=t.getProvider("auth").getImmediate()).getUid,t),getToken:T(t.mc,t),addAuthTokenListener:T(t.cc,t),removeAuthTokenListener:T(t.Oc,t)}},multipleInstances:!1,instantiationMode:"LAZY",type:"PRIVATE"}),n.registerVersion("@firebase/auth","0.15.0"),n.INTERNAL.extendNamespace({User:lh})}()}).apply("undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{})}}])
