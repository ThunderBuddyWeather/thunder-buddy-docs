"use strict";(self.webpackChunkthunder_buddy=self.webpackChunkthunder_buddy||[]).push([[976],{357:(e,n,i)=>{i.d(n,{R:()=>a,x:()=>o});var t=i(8155);const s={},r=t.createContext(s);function a(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(r.Provider,{value:n},e.children)}},4353:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"intro","title":"Thunder Buddy","description":"Overview","source":"@site/docs/intro.md","sourceDirName":".","slug":"/intro","permalink":"/thunder-buddy-docs/docs/intro","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","next":{"title":"Features","permalink":"/thunder-buddy-docs/docs/category/features"}}');var s=i(8939),r=i(357);const a={sidebar_position:1},o="Thunder Buddy",l={},d=[{value:"Overview",id:"overview",level:2},{value:"Tech Stack",id:"tech-stack",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}];function c(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.header,{children:(0,s.jsx)(n.h1,{id:"thunder-buddy",children:"Thunder Buddy"})}),"\n",(0,s.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,s.jsx)(n.p,{children:"A real-time weather and disaster alert system that provides timely and localized severe weather notifications. This system integrates weather data from Weatherbit, push notifications via OneSignal, interactive maps with Google Maps & Geolocation APIs, and robust analytics powered by Pandas. The mobile app is built using React Native with NativeWind CSS and deployed for demos via the Expo Go app."}),"\n",(0,s.jsx)(n.p,{children:"Thunder Buddy is designed to:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Fetch and process severe weather data in real time using the Weatherbit API."}),"\n",(0,s.jsx)(n.li,{children:"Deliver instant push notifications using OneSignal."}),"\n",(0,s.jsx)(n.li,{children:"Provide an interactive map interface with Google Maps & Geolocation APIs for hyper-localized alerts."}),"\n",(0,s.jsx)(n.li,{children:"Allow users to share alerts with friends and family."}),"\n",(0,s.jsx)(n.li,{children:"Process engagement data using Pandas for analytical insights."}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"tech-stack",children:"Tech Stack"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Frontend Framework:"})," React Native with NativeWind CSS (for streamlined styling)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Backend Technology:"})," Flask (Python)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Database:"})," PostgreSQL"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"APIs & Integrations:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Weatherbit API (for severe weather data)"}),"\n",(0,s.jsx)(n.li,{children:"Google Maps & Geolocation APIs (for interactive maps and location detection)"}),"\n",(0,s.jsx)(n.li,{children:"OneSignal (for push notification delivery)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Analytics & Data Processing:"})," Pandas (Python)"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testing & Quality Assurance:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"pytest (for API, unit, and integration tests)"}),"\n",(0,s.jsx)(n.li,{children:"Detox (for end-to-end mobile app testing)"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Deployment:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Frontend: Demo deployment via Expo Go app"}),"\n",(0,s.jsx)(n.li,{children:"Backend: Flask application on EC2 instance"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"CI/CD:"})," GitHub Actions"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Testing:"})," pytest, Detox"]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"architecture-diagram",children:"Architecture Diagram"}),"\n",(0,s.jsx)(n.p,{children:"Below is a simplified diagram showing how different components of the system interact:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-plaintext",children:"                    +----------------------------------+\n                    |         User Devices           |\n                    |  (iOS/Android via Expo Go App)   |\n                    +---------------+------------------+\n                                    |\n                                    | (React Native App via Expo)\n                                    V\n                    +----------------------------------+\n                    |         Frontend Layer           |\n                    |    React Native with NativeWind  |\n                    +---------------+------------------+\n                                    |\n                                    | REST API Calls\n                                    V\n                    +----------------------------------+\n                    |         Backend API Layer        |\n                    |         (Flask Application)      |\n                    +---------------+------------------+\n                     /      |         \\         \\\n                    /       |          \\         \\\n                   V        V           V         V\n       +----------------+ +--------------+  +--------------+  \n       | Weatherbit API | |  OneSignal   |  | Google Maps  |  \n       | (Weather Data) | | (Push Notif.)|  | & Geolocation|\n       +----------------+ +--------------+  +--------------+  \n                          \\       |        /\n                           \\      |       /\n                            V     V      V\n                    +----------------------------------+\n                    |         PostgreSQL Database      |\n                    | (User Data, Alerts, Engagement   |\n                    |  Logs, Preferences & History)    |\n                    +----------------------------------+\n                                    |\n                                    | Analytics Processing\n                                    V\n                    +----------------------------------+\n                    |         Analytics Module         |\n                    |         (Pandas Scripts)         |\n                    +----------------------------------+\n"})})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);