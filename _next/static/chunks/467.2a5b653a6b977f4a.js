"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[467],{1046:(e,t,r)=>{r.d(t,{n:()=>n});var i=r(2115),o=r(264),a=r(5339);let n=i.forwardRef(({children:e,enabled:t=!0,speed:r=1,rotationIntensity:n=1,floatIntensity:s=1,floatingRange:l=[-.1,.1],autoInvalidate:c=!1,...u},f)=>{let m=i.useRef(null);i.useImperativeHandle(f,()=>m.current,[]);let p=i.useRef(1e4*Math.random());return(0,o.D)(e=>{var i,o;if(!t||0===r)return;c&&e.invalidate();let u=p.current+e.clock.elapsedTime;m.current.rotation.x=Math.cos(u/4*r)/8*n,m.current.rotation.y=Math.sin(u/4*r)/8*n,m.current.rotation.z=Math.sin(u/4*r)/20*n;let f=Math.sin(u/4*r)/10;f=a.cj9.mapLinear(f,-.1,.1,null!=(i=null==l?void 0:l[0])?i:-.1,null!=(o=null==l?void 0:l[1])?o:.1),m.current.position.y=f*s,m.current.updateMatrix()}),i.createElement("group",u,i.createElement("group",{ref:m,matrixAutoUpdate:!1},e))})},2467:(e,t,r)=>{r.r(t),r.d(t,{HeroCanvas:()=>b});var i=r(5155),o=r(5571),a=r(1046),n=r(8945),s=r(2115),l=r(5339),c=r(264);let u=parseInt(l.sPf.replace(/\D+/g,""));class f extends l.BKk{constructor(){super({uniforms:{time:{value:0},pixelRatio:{value:1}},vertexShader:`
        uniform float pixelRatio;
        uniform float time;
        attribute float size;  
        attribute float speed;  
        attribute float opacity;
        attribute vec3 noise;
        attribute vec3 color;
        varying vec3 vColor;
        varying float vOpacity;

        void main() {
          vec4 modelPosition = modelMatrix * vec4(position, 1.0);
          modelPosition.y += sin(time * speed + modelPosition.x * noise.x * 100.0) * 0.2;
          modelPosition.z += cos(time * speed + modelPosition.x * noise.y * 100.0) * 0.2;
          modelPosition.x += cos(time * speed + modelPosition.x * noise.z * 100.0) * 0.2;
          vec4 viewPosition = viewMatrix * modelPosition;
          vec4 projectionPostion = projectionMatrix * viewPosition;
          gl_Position = projectionPostion;
          gl_PointSize = size * 25. * pixelRatio;
          gl_PointSize *= (1.0 / - viewPosition.z);
          vColor = color;
          vOpacity = opacity;
        }
      `,fragmentShader:`
        varying vec3 vColor;
        varying float vOpacity;
        void main() {
          float distanceToCenter = distance(gl_PointCoord, vec2(0.5));
          float strength = 0.05 / distanceToCenter - 0.1;
          gl_FragColor = vec4(vColor, strength * vOpacity);
          #include <tonemapping_fragment>
          #include <${u>=154?"colorspace_fragment":"encodings_fragment"}>
        }
      `})}get time(){return this.uniforms.time.value}set time(e){this.uniforms.time.value=e}get pixelRatio(){return this.uniforms.pixelRatio.value}set pixelRatio(e){this.uniforms.pixelRatio.value=e}}let m=e=>e&&e.constructor===Float32Array,p=e=>e instanceof l.I9Y||e instanceof l.Pq0||e instanceof l.IUQ,d=e=>Array.isArray(e)?e:p(e)?e.toArray():[e,e,e];function h(e,t,r){return s.useMemo(()=>{if(void 0!==t)if(m(t))return t;else{if(t instanceof l.Q1f){let r=Array.from({length:3*e},()=>[t.r,t.g,t.b]).flat();return Float32Array.from(r)}if(p(t)||Array.isArray(t)){let r=Array.from({length:3*e},()=>d(t)).flat();return Float32Array.from(r)}return Float32Array.from({length:e},()=>t)}return Float32Array.from({length:e},r)},[t])}let v=s.forwardRef(({noise:e=1,count:t=100,speed:r=1,opacity:i=1,scale:o=1,size:a,color:u,children:p,...v},g)=>{s.useMemo(()=>(0,c.e)({SparklesImplMaterial:f}),[]);let y=s.useRef(null),x=(0,c.C)(e=>e.viewport.dpr),b=d(o),A=s.useMemo(()=>Float32Array.from(Array.from({length:t},()=>b.map(l.cj9.randFloatSpread)).flat()),[t,...b]),M=h(t,a,Math.random),j=h(t,i),P=h(t,r),E=h(3*t,e),R=h(void 0===u?3*t:t,m(u)?u:new l.Q1f(u),()=>1);return(0,c.D)(e=>{y.current&&y.current.material&&(y.current.material.time=e.clock.elapsedTime)}),s.useImperativeHandle(g,()=>y.current,[]),s.createElement("points",(0,n.A)({key:`particle-${t}-${JSON.stringify(o)}`},v,{ref:y}),s.createElement("bufferGeometry",null,s.createElement("bufferAttribute",{attach:"attributes-position",args:[A,3]}),s.createElement("bufferAttribute",{attach:"attributes-size",args:[M,1]}),s.createElement("bufferAttribute",{attach:"attributes-opacity",args:[j,1]}),s.createElement("bufferAttribute",{attach:"attributes-speed",args:[P,1]}),s.createElement("bufferAttribute",{attach:"attributes-color",args:[R,3]}),s.createElement("bufferAttribute",{attach:"attributes-noise",args:[E,3]})),p||s.createElement("sparklesImplMaterial",{transparent:!0,pixelRatio:x,depthWrite:!1}))});var g=r(258);function y(e,t){let r=43758.5453123*Math.sin((e+1)*128.31+77.11*t);return(r-Math.floor(r))*2-1}function x(){let e=(0,s.useRef)(null),{nodes:t,edges:r}=(0,s.useMemo)(()=>(function(e){let t=Array.from({length:28},(e,t)=>[3.2*y(t,0),2*y(t,1),2.6*y(t,2)]),r=[];for(let e=0;e<t.length;e+=1){let i=t[e];t.map((e,t)=>({node:e,idx:t,dist:Math.hypot(e[0]-i[0],e[1]-i[1],e[2]-i[2])})).filter(t=>t.idx!==e).sort((e,t)=>e.dist-t.dist).slice(0,2).forEach(e=>{e.dist<1.85&&r.push([i,e.node])})}return{nodes:t,edges:r}})(0),[]);return(0,c.D)((t,r)=>{e.current&&(e.current.rotation.y+=.05*r,e.current.rotation.x=.18*Math.sin(.2*t.clock.elapsedTime))}),(0,i.jsxs)("group",{ref:e,children:[t.map((e,t)=>(0,i.jsxs)("mesh",{position:e,children:[(0,i.jsx)("sphereGeometry",{args:[.042,12,12]}),(0,i.jsx)("meshStandardMaterial",{color:"#57f5ff",emissive:"#57f5ff",emissiveIntensity:1.3})]},"node-".concat(t))),r.map((e,t)=>(0,i.jsx)(o.N,{points:e,color:"#7effc4",transparent:!0,opacity:.26,lineWidth:.9},"edge-".concat(t))),(0,i.jsx)(a.n,{speed:1.2,rotationIntensity:.6,floatIntensity:1,children:(0,i.jsxs)("mesh",{position:[0,0,0],children:[(0,i.jsx)("icosahedronGeometry",{args:[.42,0]}),(0,i.jsx)("meshStandardMaterial",{color:"#00c3ff",wireframe:!0,emissive:"#00c3ff",emissiveIntensity:.35,transparent:!0,opacity:.66})]})}),(0,i.jsx)(v,{count:45,scale:[8,5,4],size:2.4,color:"#5dffba",speed:.2})]})}function b(){return(0,i.jsxs)(g.Hl,{dpr:[1,1.5],gl:{antialias:!0,alpha:!0,powerPreference:"high-performance"},camera:{position:[0,0,8],fov:55},className:"h-full w-full",children:[(0,i.jsx)("ambientLight",{intensity:.55}),(0,i.jsx)("pointLight",{position:[2,1.2,4],intensity:2.2,color:"#00e0ff"}),(0,i.jsx)("pointLight",{position:[-2.5,-1,3],intensity:1.4,color:"#5dffba"}),(0,i.jsx)(x,{})]})}}}]);