(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{6292:function(t,e,i){Promise.resolve().then(i.bind(i,3420)),Promise.resolve().then(i.bind(i,9978)),Promise.resolve().then(i.bind(i,8801)),Promise.resolve().then(i.bind(i,8895)),Promise.resolve().then(i.bind(i,3387)),Promise.resolve().then(i.bind(i,9815)),Promise.resolve().then(i.bind(i,5229)),Promise.resolve().then(i.bind(i,5974)),Promise.resolve().then(i.bind(i,1112)),Promise.resolve().then(i.t.bind(i,4763,23)),Promise.resolve().then(i.bind(i,2419)),Promise.resolve().then(i.bind(i,9018)),Promise.resolve().then(i.bind(i,4595))},2366:function(t,e,i){"use strict";i.d(e,{AU:function(){return a},Dk:function(){return s}});var o=i(597);let n=[{logo:"https://itcode.dev/favicon.ico",title:"\uD835\uDF45번째 알파카의 개발 연구소",url:"https://itcode.dev/favicon.ico"},{logo:"https://blog.itcode.dev/favicon.ico",title:"\uD835\uDF45번째 알파카의 개발 낙서장",url:"https://blog.itcode.dev/favicon.ico"},{logo:"https://project.itcode.dev/gis-dev/favicon.ico",title:"OpenLayers Box",url:"https://project.itcode.dev/gis-dev/favicon.ico"},{logo:"https://project.itcode.dev/jader/favicon.ico",title:"JADER",url:"https://project.itcode.dev/jader/favicon.ico"},{logo:"https://project.itcode.dev/kakaostyle/favicon.ico",title:"KAKAO STYLE",url:"https://project.itcode.dev/kakaostyle/favicon.ico"},{logo:"https://project.itcode.dev/klid/favicon.ico",title:"KLID",url:"https://project.itcode.dev/klid/favicon.ico"},{logo:"https://project.itcode.dev/oauth2/favicon.ico",title:"OAuth2",url:"https://project.itcode.dev/oauth2/favicon.ico"},{logo:"https://project.itcode.dev/piedit/favicon.ico",title:"파이딧",url:"https://project.itcode.dev/piedit/favicon.ico"},{logo:"https://project.itcode.dev/lottie/favicon.svg",title:"Lottie",url:"https://project.itcode.dev/lottie/favicon.svg"}],r=[{logo:"https://project.itcode.dev/gis-dev/favicon.ico",title:"OpenLayers Box",url:"https://api.itcode.dev/geoserver"},{logo:"https://project.itcode.dev/jader/favicon.ico",title:"JADER",url:"https://api.itcode.dev/jader/api/ping"},{logo:"https://project.itcode.dev/kakaostyle/favicon.ico",title:"KAKAO STYLE",url:"https://api.itcode.dev/kakaostyle/api/ping"},{logo:"https://project.itcode.dev/klid/favicon.ico",title:"KLID",url:"https://api.itcode.dev/klid/api/ping"},{logo:"https://project.itcode.dev/oauth2/favicon.ico",title:"OAuth2",url:"https://api.itcode.dev/oauth2/api/ping"}];async function c(t){try{let e=await fetch(t.url,{method:"GET"});return{code:e.status,status:e.ok,target:t}}catch(e){return{code:500,status:!1,target:t}}}function s(){return(0,o.h)({queries:n.map(t=>({queryFn:async()=>await c(t),queryKey:["api","useGetWebStatuses",t.url],refetchInterval:6e4}))})}function a(){return(0,o.h)({queries:r.map(t=>({queryFn:async()=>await c(t),queryKey:["api","useGetApiStatuses",t.url],refetchInterval:6e4}))})}},2419:function(t,e,i){"use strict";i.d(e,{default:function(){return r}});var o=i(2076),n=i(3430);function r(t){let{...e}=t;return(0,o.jsx)(n.nI,{"data-component":"DotLottie",...e})}},9018:function(t,e,i){"use strict";i.d(e,{default:function(){return c}});var o=i(2076),n=i(2366),r=i(4664);function c(){let t=(0,n.AU)();return(0,o.jsx)(r.Z,{list:t.reduce((t,e)=>{let{data:i}=e;return i&&t.push(i),t},[])})}},4664:function(t,e,i){"use strict";i.d(e,{Z:function(){return j}});var o=i(2076),n=i(8392),r=i(2743),c=i(8895),s=i(5974),a=i(1112),d=i(9326),l=i.n(d),u=i(2546),p=i.n(u);let v=l().bind(p());var h=function(t){let{code:e,logo:i,title:n,ok:d}=t;return(0,o.jsx)(c.default,{"data-component":"StatusCard",children:(0,o.jsx)(r.Z,{className:v("card"),severity:d?"success":"error",children:(0,o.jsx)(s.default,{alignItems:"center",direction:"row",gap:1,justifyContent:"space-between",width:"100%",children:(0,o.jsxs)(s.default,{gap:1,children:[(0,o.jsxs)(s.default,{direction:"row",gap:1,children:[(0,o.jsx)("img",{alt:i,height:24,src:i,width:24}),(0,o.jsx)(a.default,{className:v("text"),children:n})]}),(0,o.jsxs)(a.default,{className:v("text"),variant:"caption",children:[d?"Operational":"Nonfunctional"," (",e,")"]})]})})})})},f=function(t){let{title:e,subtitle:i,ok:n}=t;return(0,o.jsxs)(r.Z,{"data-component":"StatusSummary",severity:n?"success":"error",variant:"filled",children:[(0,o.jsx)(a.default,{children:e}),i?(0,o.jsx)(s.default,{children:i.map(t=>(0,o.jsx)(a.default,{variant:"caption",children:t},t))}):null]})},j=function(t){let{list:e}=t,i=e.every(t=>t.status);return(0,o.jsxs)(n.Z,{"data-component":"StatusList",spacing:2,container:!0,children:[(0,o.jsx)(n.Z,{paddingY:2,size:{xs:12},children:(0,o.jsx)(f,{ok:i,title:i?"All Systems Operational":"System Malfunction Dectetive"})}),e.length>0?e.map(t=>t?(0,o.jsx)(n.Z,{size:{md:4,sm:6,xs:12},children:(0,o.jsx)(h,{code:t.code,logo:t.target.logo,ok:t.status,title:t.target.title})},t.target.url):null):null]})}},4595:function(t,e,i){"use strict";i.r(e),i.d(e,{default:function(){return c}});var o=i(2076),n=i(2366),r=i(4664);function c(){let t=(0,n.Dk)();return(0,o.jsx)(r.Z,{list:t.reduce((t,e)=>{let{data:i}=e;return i&&t.push(i),t},[])})}},2546:function(t){t.exports={card:"StatusCard_card__tGObx",text:"StatusCard_text__BfOA7"}}},function(t){t.O(0,[628,816,480,984,332,796,744],function(){return t(t.s=6292)}),_N_E=t.O()}]);