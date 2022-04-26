"use strict";(self.webpackChunkweb_cvdev=self.webpackChunkweb_cvdev||[]).push([[411],{9794:function(n,e,t){var i=t(1413),a=t(2791),r=t(1889),l=t(3967),o=t(184),s=function(n){var e=(0,l.Z)(),t=a.useMemo((function(){var t=e.mixins.toolbar.minHeight,i=e.spacing(Number((null===n||void 0===n?void 0:n.spacing)||0));return"calc(".concat(window.innerHeight,"px - ").concat(parseInt(i)+t,"px)")}),[e,n.spacing]);return(0,o.jsx)(r.ZP,(0,i.Z)({container:!0,alignContent:"center",justifyContent:"center",width:"auto",height:"auto",boxSizing:"border-box",minHeight:{md:t}},n))};e.Z=a.memo(s)},1411:function(n,e,t){t.r(e),t.d(e,{default:function(){return Jn}});var i=t(1413),a=t(2791),r=t(4270),l=t(6030),o=t(6871),s=t(3365),c=t(5987),d=t(7621),u=t(9585),p=t(6647),m=t(184),x=["variant","button","actionArea","children","padding","fill","sx"],h=function(n){var e=n.variant,t=void 0===e?"elevation":e,a=n.button,r=n.actionArea,l=n.children,o=n.padding,s=n.fill,h=void 0===s||s,f=n.sx,Z=(0,c.Z)(n,x);return(0,m.jsxs)(d.Z,{className:"CardPanel",variant:t,sx:(0,i.Z)({p:o,display:"block",width:"100%",minHeight:h&&{md:"calc(100vh - 84px)"}},f),children:[a?(0,m.jsx)(p.Z,{children:(0,m.jsx)(u.Z,(0,i.Z)({sx:{p:1,fontSize:"80%"}},Z))}):(null===Z||void 0===Z?void 0:Z.title)&&(0,m.jsx)(u.Z,(0,i.Z)({sx:{p:1,fontSize:"80%"}},Z)),r?(0,m.jsx)(p.Z,(0,i.Z)((0,i.Z)({},Z),{},{children:l})):l]})},f=t(4554),Z=t(4567),j=t(1554);function g(n){return(0,m.jsxs)(f.Z,{sx:{placeContent:"center",width:"100%",position:"relative",boxSizing:"border-box",display:"inline-flex"},children:[(0,m.jsx)(j.Z,(0,i.Z)((0,i.Z)({},n),{},{variant:"determinate",value:n.value>99?99:n.value,size:60})),(0,m.jsx)(f.Z,{sx:{top:0,left:0,bottom:0,right:0,position:"absolute",display:"flex",alignItems:"center",justifyContent:"center"},children:(0,m.jsx)(f.Z,{textAlign:"center",children:(0,m.jsx)(Z.Z,{variant:"subtitle2",component:"div",fontSize:11,color:"text.primary",children:n.children})})})]})}var v=t(9794),b=["show"],y=function(n){var e=n.show,t=void 0===e||e,a=(0,c.Z)(n,b);return!0!==t?null:(0,m.jsx)(f.Z,(0,i.Z)({display:"flex",alignContent:"center",justifyContent:"center",alignItems:"center",width:"100%"},a))},k=t(2498),w=t(5861),C=t(7757),P=t.n(C),N=t(2429),S=t(6809),z=t(493),I=t(9834),D=t(3044),A=t(977),T=t(7247),F=t(5986),E=t(9952),V=t(772),L=t(4281),O=t(8562),R=t(8439),U=t(2975),W=function(n){var e,t=n.candidate,r=n.permission,l=(0,o.s0)(),s=(0,U.ac)("print"),c=a.useCallback((function(n,e){return window.Prompt(n,[(0,i.Z)({type:"text"},e)]).then((function(n){return N.Z.update(t.uuid,n).then((function(t){if(200===t.status)"nick"===e.name&&l("/candidate/".concat(n.nick));else setTimeout((function(){return window.Alert("Nickname indispon\xedvel ou inv\xe1lido")}),400)}))})).catch((function(){return console.log("ok")}))}),[t,l]),d=a.useCallback((function(){window.Confirm("Deseja excluir permanentemente o candidato ".concat(t.nick)).then((0,w.Z)(P().mark((function n(){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,N.Z.delete(t);case 2:200===n.sent.status&&l("/home");case 4:case"end":return n.stop()}}),n)})))).catch((function(){return console.log("No delete")}))}),[t,l]),u=a.useMemo((function(){try{return t.links?Object.keys(t.links).map((function(n){return{icon:t.links[n],url:n,host:new URL(n).host,title:new URL(n).pathname}})):[]}catch(n){return[]}}),[t.links]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)("div",{className:"print-flex-columns",children:[(0,m.jsx)(f.Z,{height:200,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",sx:{"@media print":{width:400,height:300},"@media (max-device-width: 933px)":{backgroundImage:"url(/assets/background.png)",backgroundSize:"100%",backgroundRepeat:"no-repeat"}},children:(0,m.jsxs)(f.Z,{sx:{textAlign:"center"},children:[(0,m.jsx)(A.Z,{disabled:!r,onClick:function(){return r&&c("Atualizar imagem de perfil",{label:"Cole uma url valida",name:"image",type:"url"})},children:(0,m.jsx)(D.Z,{variant:"rounded",alt:t.name,src:t.image,sx:{width:106,height:106,"@media print":{width:150,height:150}}})}),(0,m.jsxs)(Z.Z,{p:2,textAlign:"center",color:"WindowText",fontWeight:666,children:[r&&(0,m.jsx)(A.Z,{className:"noprint",onClick:d,color:"default","aria-label":"delete-candidate",children:(0,m.jsx)(S.Z,{title:"deletar cadastro",children:(0,m.jsx)(T.Z,{})})}),t.name]})]})}),(0,m.jsxs)(z.Z,{dense:!0,children:[(0,m.jsx)(I.Z,{sx:{mt:2,mb:2},children:(0,m.jsx)(Z.Z,{children:"Perfil"})}),r&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(k.Z,{className:"noprint",icon:!s&&(0,m.jsx)(D.Z,{variant:"rounded",children:(0,m.jsx)(F.Z,{})}),onClick:function(){return r&&c("Atualizar Nickname",{label:"Informe o novo apelido, inicie com @",name:"nick",initialValue:t.nick})},button:r,primary:t.nick}),(0,m.jsx)(k.Z,{className:"noprint",icon:!s&&(0,m.jsx)(D.Z,{variant:"rounded",children:(0,m.jsx)(E.Z,{})}),onClick:function(){return r&&c("Atualizar Nome",{label:"Informe o novo Nome",name:"name",initialValue:t.name})},button:r,primary:"Nome",secondary:t.name})]}),(0,m.jsx)(k.Z,{className:t.birthday?"":"noprint",icon:!s&&(0,m.jsx)(D.Z,{variant:"rounded",children:(0,m.jsx)(V.Z,{})}),onClick:function(){var n;return r&&c("Atualizar Idade",{label:"Informe sua data de nascimento",name:"birthday",type:"date",initialValue:null===(n=t.birthday)||void 0===n?void 0:n.Format("yyyy-mm-dd")})},button:r,primary:"Idade",secondary:t.birthday?(null===(e=t.birthday.toDate())||void 0===e?void 0:e.DiffYears((new Date).toDate()).Round())+" Anos":"N\xe3o informada"}),(0,m.jsx)(k.Z,{icon:!s&&(0,m.jsx)(D.Z,{variant:"rounded",children:(0,m.jsx)(L.Z,{})}),onClick:function(){return r&&c("Atualizar Email",{label:"Informe o novo email",name:"email",initialValue:t.email})},button:r,primary:"Email",secondary:t.email}),(0,m.jsx)(k.Z,{className:t.addressLine?"":"noprint",icon:!s&&(0,m.jsx)(D.Z,{variant:"rounded",children:(0,m.jsx)(O.Z,{})}),onClick:function(){return r&&c("Atualizar linha de endere\xe7o",{label:"Informe apenas cidade, estado / UF",name:"addressLine",initialValue:t.addressLine})},button:r,primary:"Endere\xe7o",secondary:t.addressLine})]}),(0,m.jsxs)(z.Z,{className:(null===u||void 0===u?void 0:u.length)>0?"":"noprint",dense:!0,component:"div",children:[(0,m.jsx)(I.Z,{component:"div",sx:{mt:2,mb:2},children:(0,m.jsx)(Z.Z,{children:"Social"})}),u.map((function(n){return(0,m.jsx)(k.Z,{button:!0,onClick:function(){return window.open(n.url)},icon:(0,m.jsx)(D.Z,{variant:"rounded",alt:n.title,src:n.icon,sx:{p:1}}),primary:n.title,secondary:n.host,actions:r&&(0,m.jsx)(A.Z,{className:"noprint",onClick:function(){return delete t.links[n.url],N.Z.update(t.uuid,{links:t.links})},children:(0,m.jsx)(T.Z,{})})},n.url)})),r&&(0,m.jsx)(k.Z,{button:!0,className:"noprint",icon:(0,m.jsx)(D.Z,{variant:"rounded",children:(0,m.jsx)(R.Z,{})}),primary:"Adicionar links",onClick:function(){return r&&window.Prompt("Inclu\xedr link externo",[{label:"Url ex: https://github.com/".concat(t.nick),name:"link",type:"url"}]).then((function(n){return N.Z.update(t.uuid,{link:n.link,links:t.links})})).catch((function(){return console.log("ok")}))}})]})]}),(0,m.jsx)(z.Z,{dense:!0,sx:{"@media print":{mt:-3}},children:(0,m.jsx)(k.Z,{onClick:function(){return r&&c("Sobre Mim",{label:"Digite sua biografia",name:"about",initialValue:t.about,multiline:!0,rows:9})},button:r,primary:"Biografia",secondary:(0,m.jsx)(Z.Z,{variant:"caption",component:"pre",sx:{whiteSpace:"pre-wrap"},children:t.about||"n\xe3o informada ..."})})})]})},H=t(7762),M=t(2982),q=t(885),B=t(1889),J=t(1918),_=t(8234),Y={get:function(n){return(0,_.default)("get","/api/skills?q=".concat(n))},update:function(n,e){return(0,_.default)("put","/api/skills/".concat(encodeURIComponent(n.tag)),e)},question:function(n){return{create:function(e){return(0,_.default)("post","/api/question/".concat(n),e)}}},libs:function(n){return{filter:function(e){return e.filter((function(e){return n.tag+e.title.replace(/[^\w#&*]/g,"").toLocaleLowerCase()===e.tag}))},get:function(e){return(0,_.default)("get","/api/skills/".concat(encodeURIComponent(n.tag),"?q=").concat(e))},question:function(n){return{create:function(e){return(0,_.default)("post","/api/question/".concat(n),e)}}}}}},G=t(3970);function K(n,e){var t=new Date(n),i=e?new Date(e):new Date,a=Math.floor(i.getTime()-t.getTime()),r=Math.ceil(a/864e5),l=Math.ceil(r/31);return{days:r,months:l,years:Math.ceil(l/12)}}var Q=function(n){var e=n.candidate,t=n.permission,r=n.user,l=a.useState([]),o=(0,q.Z)(l,2),s=o[0],c=o[1],d=a.useCallback((function(n){c(s.Has(n)?s.filter((function(e){return e!==n})):[].concat((0,M.Z)(s),[n]))}),[s]),u=a.useState([]),p=(0,q.Z)(u,2),x=p[0],h=p[1],f=a.useCallback((function(n){return Y.libs(n).filter(e.libs)}),[e.libs]),j=a.useMemo((function(){var n={};if(e.jobs){var a,r=(0,H.Z)(e.jobs);try{for(r.s();!(a=r.n()).done;){var l,o=a.value,s=(0,H.Z)(o.skills);try{for(s.s();!(l=s.n()).done;){var c=l.value;n[c.tag]||(n[c.tag]=(0,i.Z)((0,i.Z)({},c),{},{points:0,years:0,begin:o.begin,finish:o.finish||new Date})),new Date(n[c.tag].begin)>new Date(o.begin)&&(n[c.tag].begin=o.begin),new Date(n[c.tag].finish)<new Date(o.finish)&&(n[c.tag].finish=o.finish);var d=K(n[c.tag].begin,n[c.tag].finish),u=d.months,p=d.years;n[c.tag].years<p&&(n[c.tag].years=p),n[c.tag].points+=u,n[c.tag].points+=f(c).length}}catch(m){s.e(m)}finally{s.f()}}}catch(m){r.e(m)}finally{r.f()}}return Object.values(n).sort((function(n,e){return e.points-n.points})).filter((function(n){return!!t||n.points>12}))}),[e.jobs,f,t]),v=a.useCallback((function(n){window.Prompt("Atualizar imagem da skill",[{label:"Define um link url para imagem de ".concat(n.title),name:"image",type:"url",initialValue:n.image}]).then((function(e){var t=e.image;t&&t!==n.image&&Y.update(n,{image:t})})).catch((function(){return console.log("Cancel Skill Update")}))}),[]),b=a.useCallback((function(n){Y.libs(n).get("*").then((function(t){var i=t.data.filter((function(n){return!e.libs.Has({tag:n.tag})})).sort((function(n,e){return n.title.localeCompare(e.title)}));h(i),window.Prompt("Habilidades sobre a skill ".concat(n.title),[{label:"Informar uma lib",name:"title",type:"text",inputProps:{list:"libs",autoComplete:"off"}}]).then((function(e){var t=e.title;t&&N.Z.libs({title:t}).connect(n.tag)})).catch((function(){return console.log("Cancel Skill Connect")})).finally((function(){return h([])}))}))}),[e]),k=a.useCallback((function(n){return t?{onDelete:function(){return N.Z.libs(n).disconnect()}}:{}}),[t]);return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)("datalist",{id:"libs",children:x.map((function(n){return(0,m.jsx)("option",{value:n.title},n.tag)}))}),(0,m.jsxs)(B.ZP,{container:!0,spacing:1,children:[(0,m.jsx)(B.ZP,{item:!0,xs:12,children:(0,m.jsx)(I.Z,{component:"div",children:"Conhecimentos"})}),(0,m.jsx)(G.Z,{activationDistance:20,children:(0,m.jsx)(B.ZP,{container:!0,className:"printpadding",flexWrap:"nowrap",sx:{cursor:"move",p:"0 12px","@media print":{}},children:j.map((function(n){return(0,m.jsx)(B.ZP,{item:!0,className:"printpadding",p:"0 9px",children:(0,m.jsxs)(y,{flexDirection:"column",sx:{opacity:n.points<=12&&.5,userSelect:"none"},children:[(0,m.jsx)(g,{variant:"determinate",value:parseInt(Number(n.points).Percent(160,2)),children:(0,m.jsx)(A.Z,{size:"small",onClick:function(){return t?b(n):d(n.tag)},children:(0,m.jsx)(S.Z,{placement:"right-start",title:n.points<=12?"Pontua\xe7\xe3o m\xednima n\xe3o atingida":"".concat(n.points,"pts"),children:(0,m.jsx)(D.Z,{className:"notranslate",sx:{width:38,height:38,userSelect:"none"},alt:n.title,src:n.image,children:n.title})})})}),(0,m.jsx)(Z.Z,{noWrap:!0,mt:1,fontWeight:550,fontSize:8,letterSpacing:0,align:"center",variant:"h2",children:n.title}),(0,m.jsxs)(Z.Z,{sx:(null===r||void 0===r?void 0:r.super)&&{textDecoration:"underline",cursor:"pointer","@media print":{textDecoration:"none"}},onClick:function(){return(null===r||void 0===r?void 0:r.super)&&v(n)},paragraph:!0,variant:"caption",textAlign:"center",fontSize:9,children:[n.years," anos"]})]})},n.uuid)}))})}),e.libs.length>0&&(0,m.jsxs)(B.ZP,{item:!0,xs:12,className:"printpadding",children:[(0,m.jsx)(I.Z,{component:"div",className:"notranslate noprint",children:"Skill's"}),(0,m.jsxs)(y,{justifyContent:"flex-start",flexWrap:"wrap",p:1.2,children:[j.map((function(n){return Y.libs(n).filter(e.libs).filter((function(){return 0===s.length||s.some((function(e){return n.tag===e}))})).map((function(e){return(0,m.jsx)(J.Z,(0,i.Z)({className:"notranslate",variant:"outlined",avatar:(0,m.jsx)(D.Z,{alt:n.title,src:n.image}),label:e.title,size:"small",sx:{mr:1,mb:1}},k(e)),e.uuid)}))})),s.length>0&&(0,m.jsx)("i",{className:"noprint",onClick:function(){return c([])},style:{display:"block",marginLeft:"auto",fontSize:12,textDecoration:"underline",cursor:"pointer"},children:"Limpar sele\xe7\xe3o"})]})]})]})]})},X=t(3060),$=t(6535),nn=t(6259),en=t(6112),tn=t(5901),an=t(1286),rn=t(4942),ln=t(4509),on=t(6172),sn=["Service","OnSet","OptionLabel","allowCreate","clearOnSet","variant","label","placeholder","size","disableUnderline"],cn=function(n){var e=n.Service,t=n.OnSet,r=n.OptionLabel,l=n.allowCreate,o=void 0===l||l,s=n.clearOnSet,d=n.variant,u=n.label,p=n.placeholder,x=n.size,h=void 0===x?"small":x,f=n.disableUnderline,Z=void 0===f?void 0:f,g=(0,c.Z)(n,sn),v=a.useState([]),b=(0,q.Z)(v,2),y=b[0],k=b[1],w=a.useState(!1),C=(0,q.Z)(w,2),P=C[0],N=C[1],S=a.useState(g.defaultValue),z=(0,q.Z)(S,2),I=z[0],D=z[1],A=(0,U.Nr)(I,1e3);a.useEffect((function(){A&&(k([]),N(!0),e(I).then((function(n){200===n.status&&k((0,M.Z)(n.data))})).catch((function(){return k([])})).finally((function(){N(!1)})))}),[A]);var T={};return Z&&(T.disableUnderline=!0),(0,m.jsx)(on.Z,(0,i.Z)((0,i.Z)({},g),{},{fullWidth:!0,autoHighlight:!0,freeSolo:!0,isOptionEqualToValue:function(n,e){return n[r]===e[r]},getOptionLabel:function(n){return n[r]},sx:{"& label":{fontSize:function(n){return n.typography.caption.fontSize}},"& input":{fontSize:function(n){return n.typography.caption.fontSize}}},options:y,onChange:function(n,e){s&&D(""),t&&t(e)},onInputChange:function(n){var e;return D(null===(e=n.currentTarget)||void 0===e?void 0:e.value)},loading:P,size:h,renderOption:function(n,e,t){var a=t.selected;return(0,m.jsx)($.ZP,(0,i.Z)((0,i.Z)({dense:!0,selected:a},n),{},{children:(0,m.jsx)(nn.Z,{primaryTypographyProps:{variant:"caption"},primary:e[r],secondaryTypographyProps:{variant:"caption",fontSize:12},secondary:(null===e||void 0===e?void 0:e.isNew)&&"Adicionar novo"})}))},filterOptions:function(n,e){var t=e.inputValue;if(o){var i,a=2;if(n.length>0)a=(null===n||void 0===n||null===(i=n.Search(t))||void 0===i?void 0:i.length)||0;P||""===t||1===a||n.unshift((0,rn.Z)({isNew:!0},r,t))}return n},renderInput:function(n){return(0,m.jsx)(ln.Z,(0,i.Z)((0,i.Z)({},n),{},{disabled:P,onFocus:function(n){return n.target.select()},variant:d,placeholder:p,label:u,InputProps:(0,i.Z)((0,i.Z)((0,i.Z)({},n.InputProps),T),{},{endAdornment:(0,m.jsxs)(a.Fragment,{children:[P?(0,m.jsx)(j.Z,{color:"inherit",size:20}):null,n.InputProps.endAdornment]})})}))}}))},dn=a.memo(cn),un=t(6125),pn=t(3064),mn=t(6562),xn=t(5651),hn=t(4327),fn=t(8666),Zn=t(5092),jn=t(5552),gn=t(7454),vn=["component","title","action","icon","children"],bn=function(n){var e=n.component,t=void 0===e?"h1":e,a=n.title,r=n.action,l=n.icon,o=n.children,s=(0,c.Z)(n,vn);return(0,m.jsxs)(I.Z,{component:t,sx:{m:0},children:[o,r&&(0,m.jsx)(S.Z,{title:a,children:(0,m.jsx)(A.Z,(0,i.Z)((0,i.Z)({sx:{float:"right"},className:"noprint"},s),{},{children:l}))})]})},yn=["list","children","actions","icon","primaryText","secondaryText","first","title","collapsed"],kn=function(n){return n.begin&&(0,m.jsx)(Z.Z,{variant:"caption",fontSize:12,display:"block",sx:{"@media print":{width:80}},children:(0,m.jsxs)("i",{children:[new Date(n.begin).Format("mm/yyyy")," at\xe9 ",n.finish?new Date(n.finish).Format("mm/yyyy"):"Atual"]})})},wn=a.memo((function(n){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(bn,{children:(0,m.jsx)(pn.Z,{sx:{mt:2},variant:"text",width:100,height:24})}),(0,m.jsx)(mn.Z,{children:Array.from({length:3}).map((function(e,t){return(0,m.jsxs)(hn.Z,{children:[(0,m.jsx)(Zn.Z,{sx:{p:0,flex:0,mt:0}}),(0,m.jsxs)(fn.Z,{children:[(0,m.jsx)(pn.Z,{variant:"circular",width:42,height:42}),t<2&&(0,m.jsx)(jn.Z,{})]}),(0,m.jsxs)(gn.Z,{mb:2,children:[(0,m.jsx)(z.Z,{component:"div",dense:!0,disablePadding:!0,sx:{borderRadius:2,ml:-1,mt:-2},children:(0,m.jsx)($.ZP,{component:"div",children:(0,m.jsx)(nn.Z,{primaryTypographyProps:{variant:"subtitle2"},primary:(0,m.jsx)(pn.Z,{variant:"text",width:90}),secondaryTypographyProps:{variant:"caption",color:"primary"},secondary:(0,m.jsx)(pn.Z,{variant:"text",width:135})})})}),n.child&&(0,m.jsx)(f.Z,{pl:1,children:(0,m.jsxs)(Z.Z,{gutterBottom:!0,display:"block",variant:"caption",children:[(0,m.jsx)(pn.Z,{variant:"text"}),(0,m.jsx)(pn.Z,{variant:"text",width:250})]})})]})]},"timeline-skeleton-"+t)}))})]})})),Cn=function(n){var e=n.list,t=void 0===e?[]:e,r=n.children,l=n.actions,o=n.icon,s=n.primaryText,d=n.secondaryText,u=n.first,p=n.title,x=n.collapsed,h=void 0===x?[0]:x,f=(0,c.Z)(n,yn),Z=a.useState(h),j=(0,q.Z)(Z,2),g=j[0],v=j[1],b=(0,U.ac)("print");return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(bn,{children:p}),(0,m.jsxs)(mn.Z,(0,i.Z)((0,i.Z)({},f),{},{children:[!!u&&(0,m.jsxs)(hn.Z,{className:"noprint",children:[(0,m.jsx)(Zn.Z,{sx:{p:0,flex:0}}),(0,m.jsxs)(fn.Z,{children:[o?(0,m.jsx)(D.Z,{children:o}):(0,m.jsx)(xn.Z,{color:"primary"}),(0,m.jsx)(jn.Z,{})]}),(0,m.jsx)(gn.Z,{children:u})]}),0===t.length&&(0,m.jsxs)(hn.Z,{className:"noprint",sx:{opacity:.5},children:[(0,m.jsx)(Zn.Z,{sx:{p:0,flex:0}}),(0,m.jsxs)(fn.Z,{children:[o?(0,m.jsx)(D.Z,{children:o}):(0,m.jsx)(xn.Z,{color:"primary"}),(0,m.jsx)(jn.Z,{})]}),(0,m.jsx)(gn.Z,{children:(0,m.jsx)(z.Z,{component:"div",dense:!0,disablePadding:!0,sx:{borderRadius:2,ml:-1,mt:-2},children:(0,m.jsx)($.ZP,{component:"div",children:(0,m.jsx)(nn.Z,{primaryTypographyProps:{variant:"subtitle2"},primary:(0,m.jsx)(m.Fragment,{children:(0,m.jsx)("b",{children:"N\xe3o informado"})}),secondaryTypographyProps:{variant:"caption",color:"primary"},secondary:"Adicione alguns items na sua linha do tempo"})})})})]}),t.map((function(n,e){return(0,m.jsxs)(hn.Z,{children:[(0,m.jsx)(Zn.Z,{sx:{p:0,flex:0,mt:0,"@media print":{pr:2}},children:b&&(0,m.jsx)(kn,(0,i.Z)({},n))}),(0,m.jsxs)(fn.Z,{children:[o?(0,m.jsx)(D.Z,{src:n.image,alt:n[d],children:o}):(0,m.jsx)(xn.Z,{color:"primary"}),e+1<t.length&&(0,m.jsx)(jn.Z,{})]}),(0,m.jsxs)(gn.Z,{mb:2,children:[(0,m.jsx)(z.Z,{component:"div",dense:!0,disablePadding:!0,sx:{borderRadius:2,ml:-1,mt:n[d]?-3:-2,"@media print":{mt:n[d]?-2:-1}},children:(0,m.jsxs)($.ZP,{component:"div",button:!!r,onClick:function(){return v([e])},children:[(0,m.jsx)(nn.Z,{primaryTypographyProps:{variant:"subtitle2"},primary:(0,m.jsxs)(m.Fragment,{children:[!b&&(0,m.jsx)(kn,(0,i.Z)({},n)),(0,m.jsx)("b",{children:n[s]})]}),secondaryTypographyProps:{variant:"caption",color:"primary"},secondary:n[d]}),l&&(0,m.jsx)(l,(0,i.Z)({},n))]})}),!!r&&(0,m.jsx)(un.Z,{in:g.includes(e)||b,children:(0,m.jsx)(r,(0,i.Z)({},n))})]})]},n.uuid+"-"+e)}))]}))]})},Pn={occupation:{label:"Cargo/Fun\xe7\xe3o/Projeto",name:"occupation",type:"text"},begin:{label:"Data inicio",name:"begin",type:"date"},company:{label:"Empresa/Institui\xe7\xe3o",name:"company",type:"text",optional:!0},finish:{label:"Data T\xe9rmino",name:"finish",type:"date",optional:!0},description:{label:"Descri\xe7\xe3o das atividades",name:"description",multiline:!0,rows:4},site:{label:"Site",name:"site",type:"url",optional:!0}},Nn=function(n){var e=n.candidate,t=n.permission,r=a.useCallback((function(n){var e,t;return window.Prompt("Editar job",[(0,i.Z)((0,i.Z)({},Pn.occupation),{},{initialValue:n.occupation}),(0,i.Z)((0,i.Z)({},Pn.company),{},{initialValue:n.company}),(0,i.Z)((0,i.Z)({},Pn.description),{},{initialValue:n.description}),(0,i.Z)((0,i.Z)({},Pn.begin),{},{initialValue:(null===(e=n.begin)||void 0===e?void 0:e.Format("yyyy-mm-dd"))||null}),(0,i.Z)((0,i.Z)({},Pn.finish),{},{initialValue:(null===(t=n.finish)||void 0===t?void 0:t.Format("yyyy-mm-dd"))||null}),(0,i.Z)((0,i.Z)({},Pn.site),{},{initialValue:n.site||null})]).then(N.Z.jobs(n).update)}),[]),l=a.useCallback((function(n){return window.Confirm("Confirma a exclus\xe3o de ".concat(n.company,"?")).then(N.Z.jobs(n).delete)}),[]),o=a.useCallback((function(n,e){if(null!==e&&void 0!==e&&e.title)return N.Z.jobs(n).skills(e).connect(!0)}),[]),s=a.useCallback((function(n,e){return t?{onDelete:function(){return N.Z.jobs(n).skills(e).connect(!1)}}:{}}),[t]);return(0,m.jsx)(Cn,{title:"Experi\xeancias",icon:(0,m.jsx)(tn.Z,{fontSize:"small"}),list:e.jobs.sort((function(n,e){return new Date(e.begin).getTime()-new Date(n.begin).getTime()})),primaryText:"occupation",secondaryText:"company",first:t&&(0,m.jsx)($.ZP,{onClick:function(){return window.Prompt("Cadastrar Job",[Pn.occupation,Pn.begin,Pn.company,Pn.finish,Pn.description]).then(N.Z.jobs().create)},dense:!0,button:!0,component:"div",sx:{borderRadius:2,ml:-1,mt:-1},children:(0,m.jsx)(nn.Z,{component:"div",primaryTypographyProps:{variant:"subtitle2"},primary:"Adicionar experi\xeancia"})}),actions:function(n){return t&&(0,m.jsxs)(en.Z,{children:[(0,m.jsx)(S.Z,{title:"Editar Job",children:(0,m.jsx)(A.Z,{className:"noprint",size:"small",onClick:function(){return r(n)},children:(0,m.jsx)(an.Z,{color:"primary"})})}),(0,m.jsx)(S.Z,{title:"Excluir Job",children:(0,m.jsx)(A.Z,{className:"noprint",size:"small",onClick:function(){return l(n)},children:(0,m.jsx)(T.Z,{color:"warning"})})})]})},children:function(n){return(0,m.jsxs)(f.Z,{pl:1,children:[n.site&&(0,m.jsx)(X.Z,{href:n.site,target:"_blank",underline:"none",children:(0,m.jsx)(Z.Z,{gutterBottom:!0,display:"block",variant:"caption",children:n.site})}),(0,m.jsx)(Z.Z,{gutterBottom:!0,display:"block",variant:"caption",children:n.description}),(0,m.jsx)(Z.Z,{gutterBottom:!0,display:"block",variant:"caption",children:"Conhecimentos"}),(0,m.jsx)(f.Z,{width:"100%",pt:2,children:n.skills.map((function(e){return(0,m.jsx)(J.Z,(0,i.Z)({avatar:(0,m.jsx)(D.Z,{alt:e.title,src:e.image}),className:"notranslate",label:e.title,variant:"outlined",size:"small",sx:{mr:1,mb:1}},s(n,e)),e.uuid)}))}),(0,m.jsx)(f.Z,{hidden:!t,width:"100%",pt:2,children:(0,m.jsx)(dn,{className:"notranslate noprint",clearOnSet:!0,OptionLabel:"title",label:"Nova skill",Service:function(n){return Y.get(n)},OnSet:function(e){return o(n,e)}})})]})}})},Sn=t(1897),zn={begin:{label:"Data inicio",name:"begin",type:"date"},course:{label:"Curso/Aprendizado",name:"course",type:"text"},institution:{label:"Institui\xe7\xe3o",name:"institution",type:"text",optional:!0},finish:{label:"Data T\xe9rmino",name:"finish",type:"date",optional:!0},site:{label:"Site",name:"site",type:"url",optional:!0}},In=function(n){var e=n.candidate,t=n.permission,r=a.useCallback((function(){window.Prompt("Cadastrar Estudo",[zn.begin,zn.course,zn.institution,zn.finish]).then(N.Z.educations().create)}),[]),l=a.useCallback((function(n){var e,t;return window.Prompt("Editar Estudo",[(0,i.Z)((0,i.Z)({},zn.begin),{},{initialValue:(null===(e=n.begin)||void 0===e?void 0:e.Format("yyyy-mm-dd"))||null}),(0,i.Z)((0,i.Z)({},zn.course),{},{initialValue:n.course}),(0,i.Z)((0,i.Z)({},zn.institution),{},{initialValue:n.institution}),(0,i.Z)((0,i.Z)({},zn.finish),{},{initialValue:(null===(t=n.finish)||void 0===t?void 0:t.Format("yyyy-mm-dd"))||null}),(0,i.Z)((0,i.Z)({},zn.site),{},{initialValue:n.site||null})]).then(N.Z.educations(n).update)}),[]),o=a.useCallback((function(n){return window.Confirm("Confirma a exclus\xe3o de ".concat(n.company,"?")).then(N.Z.educations(n).delete)}),[]);return(0,m.jsx)(Cn,{icon:(0,m.jsx)(Sn.Z,{fontSize:"small"}),title:"Estudos/Aprendizados",list:((null===e||void 0===e?void 0:e.educations)||[]).sort((function(n,e){return new Date(e.begin).getTime()-new Date(n.begin).getTime()})),primaryText:"course",secondaryText:"institution",first:t&&(0,m.jsx)($.ZP,{onClick:r,dense:!0,button:!0,component:"div",sx:{borderRadius:2,ml:-1,mt:-1},children:(0,m.jsx)(nn.Z,{component:"div",primaryTypographyProps:{variant:"subtitle2"},primary:"Adicionar Estudo"})}),actions:function(n){return t&&(0,m.jsxs)(en.Z,{children:[(0,m.jsx)(S.Z,{title:"Editar Estudo",children:(0,m.jsx)(A.Z,{className:"noprint",size:"small",onClick:function(){return l(n)},children:(0,m.jsx)(an.Z,{color:"primary"})})}),(0,m.jsx)(S.Z,{title:"Excluir Estudo",children:(0,m.jsx)(A.Z,{className:"noprint",size:"small",onClick:function(){return o(n)},children:(0,m.jsx)(T.Z,{color:"warning"})})})]})}})},Dn=t(9333),An=t(983),Tn=t(9284),Fn=t(6378),En={title:{label:"L\xedngua",name:"title",type:"text"},level:{label:"Level",name:"level",type:"text"}},Vn=function(n){var e=n.candidate,t=n.permission,r=a.useCallback((function(){window.Prompt("Cadastrar Idioma",[En.title]).then(N.Z.languages().create)}),[]),l=a.useCallback((function(n){return window.Prompt("Editar Idioma",[(0,i.Z)((0,i.Z)({},En.title),{},{initialValue:n.title})]).then(N.Z.languages(n).update)}),[]),o=a.useCallback((function(n){switch(n){case 1:return"Nenhuma";case 2:return"B\xe1sico";case 3:return"Intermedi\xe1rio";case 4:return"Avan\xe7ado";case 5:return"Fluente";default:return""}}),[]),s=a.useCallback((function(n){return window.Confirm("Confirma a exclus\xe3o de ".concat(n.title,"?")).then(N.Z.languages(n).delete)}),[]);return(0,m.jsx)(z.Z,{dense:!0,subheader:(0,m.jsxs)(I.Z,{children:["Idiomas",t&&(0,m.jsx)(A.Z,{sx:{float:"right"},className:"noprint",onClick:r,children:(0,m.jsx)(R.Z,{})})]}),children:((null===e||void 0===e?void 0:e.languages)||[]).map((function(n){return(0,m.jsxs)($.ZP,{dense:!0,children:[(0,m.jsx)(Dn.Z,{className:"noprint",children:(0,m.jsx)(D.Z,{children:(0,m.jsx)(An.Z,{fontSize:"small"})})}),(0,m.jsx)(nn.Z,{primary:n.title}),(0,m.jsxs)(en.Z,{children:[!t&&n.level>5?(0,m.jsx)(Z.Z,{color:"primary",variant:"caption",children:(0,m.jsx)("i",{style:{fontWeight:650},children:"Nativo"})}):[1,2,3,4,5].map((function(e){return(0,m.jsx)(S.Z,{title:o(e),children:(0,m.jsx)(A.Z,{onClick:function(){return t&&N.Z.languages(n).update({level:e})},size:"small",sx:{mr:-1.3},children:n.level>=e?(0,m.jsx)(Tn.Z,{color:"primary",fontSize:"small"}):(0,m.jsx)(Fn.Z,{color:"primary",fontSize:"small"})})},"start-".concat(e))})),t&&(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(S.Z,{title:"Nativo",children:(0,m.jsx)(A.Z,{className:"noprint",onClick:function(){return t&&N.Z.languages(n).update({level:6})},size:"small",children:n.level>5?(0,m.jsx)(Tn.Z,{}):(0,m.jsx)(Fn.Z,{})})}),(0,m.jsx)(S.Z,{title:"Editar Idioma",children:(0,m.jsx)(A.Z,{className:"noprint",size:"small",onClick:function(){return l(n)},children:(0,m.jsx)(an.Z,{color:"primary"})})}),(0,m.jsx)(S.Z,{title:"Excluir Idioma",children:(0,m.jsx)(A.Z,{className:"noprint",size:"small",onClick:function(){return s(n)},children:(0,m.jsx)(T.Z,{color:"warning"})})})]})]})]},n.uuid)}))})},Ln=a.memo((function(){return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(f.Z,{height:200,display:"flex",justifyContent:"center",alignItems:"center",position:"relative",overflow:"hidden",children:(0,m.jsxs)(f.Z,{sx:{textAlign:"center"},children:[(0,m.jsx)(pn.Z,{variant:"rectangular",width:120,height:120}),(0,m.jsx)(Z.Z,{p:2,textAlign:"center",color:"WindowText",fontWeight:666,children:(0,m.jsx)(pn.Z,{variant:"text"})})]})}),Array.from({length:2}).map((function(n,e){return(0,m.jsxs)(z.Z,{dense:!0,children:[(0,m.jsx)(I.Z,{sx:{mt:2,mb:2},children:(0,m.jsxs)(Z.Z,{children:[" ",(0,m.jsx)(pn.Z,{width:75,variant:"text"})]})}),[0,1,2].map((function(n,t){return(0,m.jsx)(k.Z,{icon:(0,m.jsx)(pn.Z,{variant:"rectangular",width:40,height:40}),primary:(0,m.jsx)(pn.Z,{width:100,variant:"text"}),secondary:(0,m.jsx)(pn.Z,{width:150,variant:"text"})},"perfil-".concat(e,"-").concat(t))}))]},"perfil-".concat(e))}))]})}));var On=a.memo((function(){return(0,m.jsxs)(B.ZP,{container:!0,spacing:1,children:[(0,m.jsx)(B.ZP,{item:!0,xs:12,m:2,children:(0,m.jsx)(pn.Z,{height:20,width:100,variant:"text"})}),(0,m.jsx)(B.ZP,{container:!0,flexWrap:"nowrap",sx:{p:"0 12px"},children:Array.from({length:8}).map((function(n,e){return(0,m.jsx)(B.ZP,{item:!0,p:"0 8px",children:(0,m.jsxs)(f.Z,{flexDirection:"column",children:[(0,m.jsx)(pn.Z,{variant:"circular",width:68,height:68,sx:{mb:2}}),(0,m.jsx)(pn.Z,{height:14,sx:{mb:.5},variant:"text"}),(0,m.jsx)(pn.Z,{height:10,width:50,sx:{m:"0 auto"},variant:"text"})]})},"skills-".concat(e))}))}),(0,m.jsxs)(B.ZP,{item:!0,xs:12,children:[(0,m.jsx)(pn.Z,{sx:{m:2},height:20,width:75,variant:"text"}),(0,m.jsx)(f.Z,{justifyContent:"flex-start",flexWrap:"wrap",p:1.2,children:Array.from({length:25}).map((function(n,e){return(0,m.jsx)(J.Z,{variant:"outlined",avatar:(0,m.jsx)(pn.Z,{variant:"circular",width:18,height:18}),label:(0,m.jsx)(pn.Z,{height:15,width:(t=30,i=75,Math.floor(Math.random()*(i-t+1))+t),variant:"text"}),size:"small",sx:{mr:1,mb:1}},"libs-".concat(e));var t,i}))})]})]})})),Rn=a.memo((function(){return(0,m.jsxs)(z.Z,{dense:!0,children:[(0,m.jsx)(I.Z,{children:(0,m.jsx)(pn.Z,{sx:{mt:2,mb:2},height:20,width:75,variant:"text"})}),Array.from({length:3}).map((function(n,e){return(0,m.jsx)(k.Z,{icon:(0,m.jsx)(pn.Z,{variant:"rectangular",width:40,height:40}),primary:(0,m.jsx)(pn.Z,{width:100,variant:"text"}),actions:(0,m.jsx)(pn.Z,{width:150,variant:"text"})},"languages-".concat(e))}))]})})),Un=t(7394),Wn=function(n){var e=n.params,t=(0,o.s0)();return(0,m.jsx)(v.Z,{justifyContent:"center",alignItems:"center",minHeight:"calc(100vh - 74px)",children:(0,m.jsx)(B.ZP,{item:!0,xs:10,lg:4,p:4,boxShadow:4,bgcolor:"background.paper",children:(0,m.jsx)(B.ZP,{container:!0,spacing:1,children:(0,m.jsxs)(f.Z,{p:1,display:"flex",children:[(0,m.jsx)(D.Z,{sx:{ml:1,mr:3,mt:1},children:(0,m.jsx)(A.Z,{color:"secondary",onClick:function(){return t("/home")},children:(0,m.jsx)(Un.Z,{})})}),(0,m.jsxs)("div",{children:[(0,m.jsx)(Z.Z,{variant:"subtitle1",children:e.nick}),(0,m.jsx)(Z.Z,{variant:"subtitle2",children:"N\xe3o foi localizado"})]})]})})})})},Hn=a.memo((function(n){var e;return(0,m.jsx)(B.ZP,{item:!0,xs:12,sm:4,lg:3,children:(0,m.jsx)(h,{sx:{mb:2,pl:2,"@media print":{m:0,p:0}},children:null!==n&&void 0!==n&&null!==(e=n.candidate)&&void 0!==e&&e.nick?(0,m.jsx)(W,(0,i.Z)({},n)):(0,m.jsx)(Ln,{})})})})),Mn=a.memo((function(n){var e;return(0,m.jsx)(B.ZP,{item:!0,xs:12,lg:12,children:(0,m.jsx)(h,{titleTypographyProps:{variant:"caption"},fill:!1,sx:{mb:2,pl:2,pr:2,"@media print":{m:0,p:0}},children:null!==n&&void 0!==n&&null!==(e=n.candidate)&&void 0!==e&&e.libs&&n.candidate.jobs?(0,m.jsx)(Q,(0,i.Z)({},n)):(0,m.jsx)(On,{})})})})),qn=a.memo((function(n){var e,t;return(0,m.jsxs)(B.ZP,{item:!0,xs:12,lg:6,sx:{height:"100%",minHeight:275},children:[(0,m.jsx)(h,{fill:!1,sx:{mb:2,pb:2,pl:2,"@media print":{width:"35%",float:"right",height:"100%",mr:8}},children:null!==n&&void 0!==n&&null!==(e=n.candidate)&&void 0!==e&&e.languages?(0,m.jsx)(Vn,(0,i.Z)({},n)):(0,m.jsx)(Rn,{})}),(0,m.jsx)(h,{titleTypographyProps:{variant:"caption"},fill:!1,sx:{pl:2,display:"block","@media print":{m:0,p:0,width:"65%",float:"left"}},children:null!==n&&void 0!==n&&null!==(t=n.candidate)&&void 0!==t&&t.educations?(0,m.jsx)(In,(0,i.Z)({},n)):(0,m.jsx)(wn,{child:!1})})]})})),Bn=a.memo((function(n){var e;return(0,m.jsxs)(B.ZP,{item:!0,xs:12,lg:6,children:[(0,m.jsx)("div",{className:"pagebreak"}),(0,m.jsx)(h,{fill:!1,sx:{mb:2,pl:2,"@media print":{m:0,p:0}},children:null!==n&&void 0!==n&&null!==(e=n.candidate)&&void 0!==e&&e.jobs?(0,m.jsx)(Nn,(0,i.Z)({},n)):(0,m.jsx)(wn,{child:!0})})]})})),Jn=function(){var n=(0,l.v9)((function(n){return n.user})),e=(0,l.v9)((function(n){return n.candidate})),t=(0,l.v9)((function(n){return n.candidates})),c=(0,U.ac)("print"),d=(0,s.sV)(),u=(0,o.UO)();a.useEffect((function(){return d.emit("subscribe",u.nick),function(){d.emit("unsubscribe",u.nick)}}),[d,u.nick,n]);var p={candidate:e,candidates:t,permission:-1!==t.findIndex((function(n){return n.uuid===e.uuid})),user:n};return null!==e&&void 0!==e&&e.notFound?(0,m.jsx)(Wn,{params:u}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(r.Z,{children:(0,m.jsx)("title",{children:u.nick})}),(0,m.jsxs)(v.Z,{spacing:1,p:1,alignContent:"flex-start",children:[(0,m.jsx)(Hn,(0,i.Z)({},p)),(0,m.jsx)(B.ZP,{item:!0,xs:12,sm:8,lg:9,children:(0,m.jsxs)(B.ZP,{container:!0,spacing:1,children:[c?(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(qn,(0,i.Z)({},p)),(0,m.jsx)(Mn,(0,i.Z)({},p))]}):(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(Mn,(0,i.Z)({},p)),(0,m.jsx)(qn,(0,i.Z)({},p))]}),(0,m.jsx)(Bn,(0,i.Z)({},p))]})})]})]})}},2429:function(n,e,t){var i=t(1413),a=t(8234),r=t(1047),l={search:function(n){return(0,a.default)("get","/api/candidate?"+(0,r.default)(n))},get:function(){return(0,a.default)("get","/api/candidates")},create:function(n){return(0,a.default)("post","/api/candidates",n)},delete:function(n){return(0,a.default)("delete","/api/candidates/"+n.uuid)},update:function(n,e){return(0,a.default)("put","/api/candidates/".concat(n),e)},libs:function(n){return{connect:function(e){return(0,a.default)("post","/api/skills/".concat(encodeURIComponent(e)),n)},disconnect:function(){return(0,a.default)("delete","/api/skills/".concat(encodeURIComponent(n.tag)))}}},jobs:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{create:function(n){return(0,a.default)("post","/api/jobs/",n)},update:function(e){return(0,a.default)("put","/api/jobs/".concat(n.uuid),e)},delete:function(){return(0,a.default)("delete","/api/jobs/".concat(n.uuid))},skills:function(e){return{delete:function(){return(0,a.default)("delete","/api/skills/".concat(encodeURIComponent(e.tag)),{company:n.uuid})},connect:function(t){return(0,a.default)(t?"post":"delete","/api/skills",(0,i.Z)((0,i.Z)({},e),{},{company:n.uuid}))}}}}},educations:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{create:function(n){return(0,a.default)("post","/api/educations/",n)},update:function(e){return(0,a.default)("put","/api/educations/".concat(n.uuid),e)},delete:function(){return(0,a.default)("delete","/api/educations/".concat(n.uuid))}}},languages:function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{create:function(n){return(0,a.default)("post","/api/languages/",n)},update:function(e){return(0,a.default)("put","/api/languages/".concat(n.uuid),e)},delete:function(){return(0,a.default)("delete","/api/languages/".concat(n.uuid))}}}};e.Z=l}}]);
//# sourceMappingURL=411.68dd1dc1.chunk.js.map