(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[185],{4618:function(e,t,n){Promise.resolve().then(n.t.bind(n,6827,23)),Promise.resolve().then(n.bind(n,2342)),Promise.resolve().then(n.bind(n,5654)),Promise.resolve().then(n.bind(n,9711)),Promise.resolve().then(n.bind(n,7948))},5377:function(e,t,n){"use strict";n.d(t,{N:function(){return o}});let o=(0,n(4702).U)(e=>({setThemeState:t=>{e({themeState:t})},themeState:"light",toggleThemeState:()=>{e(e=>{let{themeState:t}=e,n="light"===t?"dark":"light";return localStorage.setItem("theme",n),{themeState:n}})}}))},2342:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return h}});var o=n(2076),i=n(591),r=n(6119),l=n(8217),s=n(3670),a=n.n(s),d=n(5377),u=n(7310);let c=[a().style.fontFamily,"sans-serif"];function h(e){let{children:t}=e,{themeState:n,setThemeState:s}=(0,d.N)(),a=(0,u.useCallback)(e=>(0,i.Z)({palette:{mode:e},transitions:{duration:{standard:.3}},typography:{fontFamily:c.join(", ")}}),[]);return(0,u.useLayoutEffect)(()=>{let e=localStorage.getItem("theme");("light"===e||"dark"===e)&&s(e)},[]),(0,u.useLayoutEffect)(()=>{document.body.classList.remove("light","dark"),document.body.classList.add(n)},[n]),(0,o.jsxs)(r.Z,{"data-component":"AppThemeProvider",theme:a(n),children:[(0,o.jsx)(l.ZP,{enableColorScheme:!0}),t]})}},5654:function(e,t,n){"use strict";n.d(t,{default:function(){return f}});var o=n(2076),i=n(3434),r=n(30),l=n(2537),s=n(4988),a=n(8895),d=n(1407),u=n(5974),c=n(5377),h=n(7310);function f(){let{toggleThemeState:e,themeState:t}=(0,c.N)(),n=(0,h.useMemo)(()=>"light"===t?"white":"#242424",[t]),f=(0,h.useCallback)(()=>{window.scrollTo({behavior:"smooth",top:0})},[]),m=(0,h.useCallback)(()=>{window.scrollTo({behavior:"smooth",top:99999})},[]),x=(0,h.useCallback)(()=>{e()},[t,e]);return(0,o.jsxs)(u.default,{bottom:20,"data-component":"Floater",gap:2,position:"fixed",right:20,children:[(0,o.jsx)(a.default,{bgcolor:n,borderRadius:"50%",boxShadow:"0px 0px 10px #33333350",overflow:"hidden",children:(0,o.jsx)(d.Z,{onClick:f,children:(0,o.jsx)(u.default,{alignItems:"center",height:40,justifyContent:"center",width:40,children:(0,o.jsx)(l.Z,{color:"inherit"})})})}),(0,o.jsx)(a.default,{bgcolor:n,borderRadius:"50%",boxShadow:"0px 0px 10px #33333350",overflow:"hidden",children:(0,o.jsx)(d.Z,{onClick:m,children:(0,o.jsx)(u.default,{alignItems:"center",height:40,justifyContent:"center",width:40,children:(0,o.jsx)(r.Z,{color:"inherit"})})})}),(0,o.jsx)(a.default,{bgcolor:n,borderRadius:"50%",boxShadow:"0px 0px 10px #33333350",overflow:"hidden",children:(0,o.jsx)(d.Z,{onClick:x,children:(0,o.jsxs)(u.default,{alignItems:"center",height:40,justifyContent:"center",width:40,children:["light"===t?(0,o.jsx)(i.Z,{htmlColor:"indigo"}):null,"dark"===t?(0,o.jsx)(s.Z,{htmlColor:"orange"}):null]})})})]})}},9711:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return r}});var o=n(2076),i=n(6276);function r(e){let{gaKey:t,children:n}=e;return i.ZP.initialize(t),(0,o.jsx)(o.Fragment,{children:n})}},7948:function(e,t,n){"use strict";n.d(t,{default:function(){return a}});var o=n(2076),i=n(5659),r=n(2705),l=n(976),s=n(7310);function a(e){let{children:t}=e,n=(0,s.useMemo)(()=>new i.S({defaultOptions:{queries:{staleTime:36e5}}}),[]);return(0,o.jsxs)(r.aH,{client:n,children:[t,(0,o.jsx)(l.t,{buttonPosition:"bottom-left"})]})}},6827:function(){}},function(e){e.O(0,[622,990,480,384,332,796,744],function(){return e(e.s=4618)}),_N_E=e.O()}]);