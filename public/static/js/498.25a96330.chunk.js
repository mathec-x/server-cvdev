"use strict";(self.webpackChunkweb_cvdev=self.webpackChunkweb_cvdev||[]).push([[498],{9794:function(n,e,t){var i=t(1413),a=t(2791),r=t(1889),u=t(3967),c=t(184),o=function(n){var e=(0,u.Z)(),t=a.useMemo((function(){var t=e.mixins.toolbar.minHeight,i=e.spacing(Number((null===n||void 0===n?void 0:n.spacing)||0));return"calc(".concat(window.innerHeight,"px - ").concat(parseInt(i)+t,"px)")}),[e,n.spacing]);return(0,c.jsx)(r.ZP,(0,i.Z)({container:!0,alignContent:"center",justifyContent:"center",width:"auto",height:"auto",boxSizing:"border-box",minHeight:{md:t}},n))};e.Z=a.memo(o)},8276:function(n,e,t){var i=t(1413),a=t(5987),r=(t(2791),t(977)),u=t(184),c=["button"];e.Z=function(n){var e=n.button,t=(0,a.Z)(n,c);return(0,u.jsx)("div",{style:{margin:"0 auto"},children:e?(0,u.jsx)(r.Z,(0,i.Z)({},t)):t.children})}},6498:function(n,e,t){t.r(e),t.d(e,{default:function(){return w}});var i=t(5861),a=t(885),r=t(7757),u=t.n(r),c=t(2791),o=t(4270),d=t(1889),l=t(3767),s=t(3044),f=t(7047),p=t(439),g=t(9794),h=t(1413),m=t(4567),x=t(4554),v=t(184);function b(n){return(0,v.jsxs)(x.Z,(0,h.Z)((0,h.Z)({textAlign:"left"},n),{},{children:[(0,v.jsx)(m.Z,{variant:"h2",fontSize:15,letterSpacing:-3,children:"WEB"}),(0,v.jsx)(m.Z,{variant:"h1",fontWeight:600,fontSize:28,letterSpacing:-1,children:"CVDEV"}),(0,v.jsx)(m.Z,{variant:"h2",fontSize:18,fontStyle:"initial",letterSpacing:-2,children:"de dev pra dev"})]}))}var Z=t(6030),j=t(6871),k=t(2429),C=t(8276),w=function(){var n=(0,j.s0)(),e=c.useState(!0),t=(0,a.Z)(e,2),r=t[0],h=t[1],m=(0,Z.v9)((function(n){return n.candidate})),x=c.useCallback(function(){var e=(0,i.Z)(u().mark((function e(t){return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k.Z.search({nick:t});case 2:if(200!==e.sent.status){e.next=6;break}return h(!0),e.abrupt("return",n("/candidate/".concat(t)));case 6:return e.abrupt("return",h(!1));case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),[n]);return(0,v.jsxs)(v.Fragment,{children:[(0,v.jsx)(o.Z,{children:(0,v.jsx)("title",{children:"Home"})}),(0,v.jsx)(g.Z,{justifyContent:"center",alignItems:"center",height:"100%",minHeight:"calc(100vh - 64px)",sx:{"@media (min-device-width: 933px)":{backgroundImage:"url(/assets/background.png)",backgroundSize:"cover",backgroundRepeat:"no-repeat"}},children:(0,v.jsxs)(d.ZP,{item:!0,xs:10,sm:6,lg:4,p:4,boxShadow:4,bgcolor:"background.paper",children:[(0,v.jsx)(b,{mb:4}),(0,v.jsx)(l.Z,{mb:6,children:(0,v.jsx)(C.Z,{button:!(null===m||void 0===m||!m.image),onClick:function(){return x(m.nick)},children:(0,v.jsx)(s.Z,{src:null!==m&&void 0!==m&&m.image?m.image:"/icons/maskable_icon_x192.png",alt:"home",sx:{bgcolor:"primary.main",width:160,height:160,boxShadow:10,m:"auto"}})})}),(0,v.jsx)(l.Z,{mb:1,children:(0,v.jsx)(f.Z,{fullWidth:!0,value:(null===m||void 0===m?void 0:m.nick)||"@",error:!r,onFocus:function(n){return n.target.select()},transform:function(n){return n.startsWith("@")?n:"@".concat(n)},type:"text",autoComplete:"off",label:"Nickname",variant:"standard",placeholder:"Encontre pelo nickname aqui",errorText:"Perfil n\xe3o localizado",helperText:r?"Localizar um perfil pelo nickname":"Perfil n\xe3o localizado",onSubmit:x})}),(0,v.jsxs)(l.Z,{direction:"row",justifyContent:"space-around",mt:4,children:[(0,v.jsx)(p.Z,{onClick:function(){return n("/candidate/@joanadoe")},children:"Ver Exemplo"}),(0,v.jsx)(p.Z,{variant:"contained",onClick:function(){return n("/register")},children:"Criar o meu"})]})]})})]})}},2429:function(n,e,t){var i=t(1413),a=t(8234),r=t(1047),u={search:function(n){return(0,a.default)("get","/api/candidate?"+(0,r.default)(n))},get:function(){return(0,a.default)("get","/api/candidates")},create:function(n){return(0,a.default)("post","/api/candidates",n)},delete:function(n){return(0,a.default)("delete","/api/candidates/"+n.uuid)},update:function(n,e){return(0,a.default)("put","/api/candidates/".concat(n),e)},libs:function(n){return{connect:function(e){return(0,a.default)("post","/api/skills/".concat(encodeURIComponent(e)),n)},disconnect:function(){return(0,a.default)("delete","/api/skills/".concat(encodeURIComponent(n.tag)))}}},jobs:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{create:function(n){return(0,a.default)("post","/api/jobs/",n)},update:function(e){return(0,a.default)("put","/api/jobs/".concat(n.uuid),e)},delete:function(){return(0,a.default)("delete","/api/jobs/".concat(n.uuid))},skills:function(e){return{delete:function(){return(0,a.default)("delete","/api/skills/".concat(encodeURIComponent(e.tag)),{company:n.uuid})},connect:function(t){return(0,a.default)(t?"post":"delete","/api/skills",(0,i.Z)((0,i.Z)({},e),{},{company:n.uuid}))}}}}},educations:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{create:function(n){return(0,a.default)("post","/api/educations/",n)},update:function(e){return(0,a.default)("put","/api/educations/".concat(n.uuid),e)},delete:function(){return(0,a.default)("delete","/api/educations/".concat(n.uuid))}}},languages:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{create:function(n){return(0,a.default)("post","/api/languages/",n)},update:function(e){return(0,a.default)("put","/api/languages/".concat(n.uuid),e)},delete:function(){return(0,a.default)("delete","/api/languages/".concat(n.uuid))}}}};e.Z=u}}]);
//# sourceMappingURL=498.25a96330.chunk.js.map