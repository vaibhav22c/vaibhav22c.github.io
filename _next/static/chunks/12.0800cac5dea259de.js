"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[12],{1046:(t,e,i)=>{i.d(e,{n:()=>n});var s=i(2115),r=i(264),a=i(5339);let n=s.forwardRef(({children:t,enabled:e=!0,speed:i=1,rotationIntensity:n=1,floatIntensity:o=1,floatingRange:u=[-.1,.1],autoInvalidate:h=!1,...l},p)=>{let c=s.useRef(null);s.useImperativeHandle(p,()=>c.current,[]);let d=s.useRef(1e4*Math.random());return(0,r.D)(t=>{var s,r;if(!e||0===i)return;h&&t.invalidate();let l=d.current+t.clock.elapsedTime;c.current.rotation.x=Math.cos(l/4*i)/8*n,c.current.rotation.y=Math.sin(l/4*i)/8*n,c.current.rotation.z=Math.sin(l/4*i)/20*n;let p=Math.sin(l/4*i)/10;p=a.cj9.mapLinear(p,-.1,.1,null!=(s=null==u?void 0:u[0])?s:-.1,null!=(r=null==u?void 0:u[1])?r:.1),c.current.position.y=p*o,c.current.updateMatrix()}),s.createElement("group",l,s.createElement("group",{ref:c,matrixAutoUpdate:!1},t))})},7012:(t,e,i)=>{i.r(e),i.d(e,{TechStackCanvas:()=>w});var s=i(5155),r=i(1046),a=i(264),n=i(2115),o=i(5339),u=i(7548),h=Object.defineProperty,l=(t,e,i)=>(((t,e,i)=>e in t?h(t,e,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[e]=i)(t,"symbol"!=typeof e?e+"":e,i),i);function p(t,e,i,s,r){let a;if(t=t.subarray||t.slice?t:t.buffer,i=i.subarray||i.slice?i:i.buffer,t=e?t.subarray?t.subarray(e,r&&e+r):t.slice(e,r&&e+r):t,i.set)i.set(t,s);else for(a=0;a<t.length;a++)i[a+s]=t[a];return i}class c extends o.LoY{constructor(){super(),l(this,"type","MeshLine"),l(this,"isMeshLine",!0),l(this,"positions",[]),l(this,"previous",[]),l(this,"next",[]),l(this,"side",[]),l(this,"width",[]),l(this,"indices_array",[]),l(this,"uvs",[]),l(this,"counters",[]),l(this,"widthCallback",null),l(this,"_attributes"),l(this,"_points",[]),l(this,"points"),l(this,"matrixWorld",new o.kn4),Object.defineProperties(this,{points:{enumerable:!0,get(){return this._points},set(t){this.setPoints(t,this.widthCallback)}}})}setMatrixWorld(t){this.matrixWorld=t}setPoints(t,e){var i;if(t=(i=t)instanceof Float32Array?i:i instanceof o.LoY?i.getAttribute("position").array:i.map(t=>{let e=Array.isArray(t);return t instanceof o.Pq0?[t.x,t.y,t.z]:t instanceof o.I9Y?[t.x,t.y,0]:e&&3===t.length?[t[0],t[1],t[2]]:e&&2===t.length?[t[0],t[1],0]:t}).flat(),this._points=t,this.widthCallback=null!=e?e:null,this.positions=[],this.counters=[],t.length&&t[0]instanceof o.Pq0)for(let e=0;e<t.length;e++){let i=t[e],s=e/(t.length-1);this.positions.push(i.x,i.y,i.z),this.positions.push(i.x,i.y,i.z),this.counters.push(s),this.counters.push(s)}else for(let e=0;e<t.length;e+=3){let i=e/(t.length-1);this.positions.push(t[e],t[e+1],t[e+2]),this.positions.push(t[e],t[e+1],t[e+2]),this.counters.push(i),this.counters.push(i)}this.process()}compareV3(t,e){let i=6*t,s=6*e;return this.positions[i]===this.positions[s]&&this.positions[i+1]===this.positions[s+1]&&this.positions[i+2]===this.positions[s+2]}copyV3(t){let e=6*t;return[this.positions[e],this.positions[e+1],this.positions[e+2]]}process(){let t,e,i=this.positions.length/6;this.previous=[],this.next=[],this.side=[],this.width=[],this.indices_array=[],this.uvs=[],e=this.compareV3(0,i-1)?this.copyV3(i-2):this.copyV3(0),this.previous.push(e[0],e[1],e[2]),this.previous.push(e[0],e[1],e[2]);for(let s=0;s<i;s++){if(this.side.push(1),this.side.push(-1),t=this.widthCallback?this.widthCallback(s/(i-1)):1,this.width.push(t),this.width.push(t),this.uvs.push(s/(i-1),0),this.uvs.push(s/(i-1),1),s<i-1){e=this.copyV3(s),this.previous.push(e[0],e[1],e[2]),this.previous.push(e[0],e[1],e[2]);let t=2*s;this.indices_array.push(t,t+1,t+2),this.indices_array.push(t+2,t+1,t+3)}s>0&&(e=this.copyV3(s),this.next.push(e[0],e[1],e[2]),this.next.push(e[0],e[1],e[2]))}e=this.compareV3(i-1,0)?this.copyV3(1):this.copyV3(i-1),this.next.push(e[0],e[1],e[2]),this.next.push(e[0],e[1],e[2]),this._attributes&&this._attributes.position.count===this.counters.length?(this._attributes.position.copyArray(new Float32Array(this.positions)),this._attributes.position.needsUpdate=!0,this._attributes.previous.copyArray(new Float32Array(this.previous)),this._attributes.previous.needsUpdate=!0,this._attributes.next.copyArray(new Float32Array(this.next)),this._attributes.next.needsUpdate=!0,this._attributes.side.copyArray(new Float32Array(this.side)),this._attributes.side.needsUpdate=!0,this._attributes.width.copyArray(new Float32Array(this.width)),this._attributes.width.needsUpdate=!0,this._attributes.uv.copyArray(new Float32Array(this.uvs)),this._attributes.uv.needsUpdate=!0,this._attributes.index.copyArray(new Uint16Array(this.indices_array)),this._attributes.index.needsUpdate=!0):this._attributes={position:new o.THS(new Float32Array(this.positions),3),previous:new o.THS(new Float32Array(this.previous),3),next:new o.THS(new Float32Array(this.next),3),side:new o.THS(new Float32Array(this.side),1),width:new o.THS(new Float32Array(this.width),1),uv:new o.THS(new Float32Array(this.uvs),2),index:new o.THS(new Uint16Array(this.indices_array),1),counters:new o.THS(new Float32Array(this.counters),1)},this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setAttribute("position",this._attributes.position),this.setAttribute("previous",this._attributes.previous),this.setAttribute("next",this._attributes.next),this.setAttribute("side",this._attributes.side),this.setAttribute("width",this._attributes.width),this.setAttribute("uv",this._attributes.uv),this.setAttribute("counters",this._attributes.counters),this.setIndex(this._attributes.index),this.computeBoundingSphere(),this.computeBoundingBox()}advance({x:t,y:e,z:i}){let s=this._attributes.position.array,r=this._attributes.previous.array,a=this._attributes.next.array,n=s.length;p(s,0,r,0,n),p(s,6,s,0,n-6),s[n-6]=t,s[n-5]=e,s[n-4]=i,s[n-3]=t,s[n-2]=e,s[n-1]=i,p(s,6,a,0,n-6),a[n-6]=t,a[n-5]=e,a[n-4]=i,a[n-3]=t,a[n-2]=e,a[n-1]=i,this._attributes.position.needsUpdate=!0,this._attributes.previous.needsUpdate=!0,this._attributes.next.needsUpdate=!0}}let d=`
  #include <common>
  #include <logdepthbuf_pars_vertex>
  #include <fog_pars_vertex>
  #include <clipping_planes_pars_vertex>

  attribute vec3 previous;
  attribute vec3 next;
  attribute float side;
  attribute float width;
  attribute float counters;
  
  uniform vec2 resolution;
  uniform float lineWidth;
  uniform vec3 color;
  uniform float opacity;
  uniform float sizeAttenuation;
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  vec2 fix(vec4 i, float aspect) {
    vec2 res = i.xy / i.w;
    res.x *= aspect;
    return res;
  }
  
  void main() {
    float aspect = resolution.x / resolution.y;
    vColor = vec4(color, opacity);
    vUV = uv;
    vCounters = counters;
  
    mat4 m = projectionMatrix * modelViewMatrix;
    vec4 finalPosition = m * vec4(position, 1.0) * aspect;
    vec4 prevPos = m * vec4(previous, 1.0);
    vec4 nextPos = m * vec4(next, 1.0);
  
    vec2 currentP = fix(finalPosition, aspect);
    vec2 prevP = fix(prevPos, aspect);
    vec2 nextP = fix(nextPos, aspect);
  
    float w = lineWidth * width;
  
    vec2 dir;
    if (nextP == currentP) dir = normalize(currentP - prevP);
    else if (prevP == currentP) dir = normalize(nextP - currentP);
    else {
      vec2 dir1 = normalize(currentP - prevP);
      vec2 dir2 = normalize(nextP - currentP);
      dir = normalize(dir1 + dir2);
  
      vec2 perp = vec2(-dir1.y, dir1.x);
      vec2 miter = vec2(-dir.y, dir.x);
      //w = clamp(w / dot(miter, perp), 0., 4. * lineWidth * width);
    }
  
    //vec2 normal = (cross(vec3(dir, 0.), vec3(0., 0., 1.))).xy;
    vec4 normal = vec4(-dir.y, dir.x, 0., 1.);
    normal.xy *= .5 * w;
    //normal *= projectionMatrix;
    if (sizeAttenuation == 0.) {
      normal.xy *= finalPosition.w;
      normal.xy /= (vec4(resolution, 0., 1.) * projectionMatrix).xy * aspect;
    }
  
    finalPosition.xy += normal.xy * side;
    gl_Position = finalPosition;
    #include <logdepthbuf_vertex>
    #include <fog_vertex>
    vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
    #include <clipping_planes_vertex>
    #include <fog_vertex>
  }
`,f=parseInt(o.sPf.replace(/\D+/g,"")),v=`
  #include <fog_pars_fragment>
  #include <logdepthbuf_pars_fragment>
  #include <clipping_planes_pars_fragment>
  
  uniform sampler2D map;
  uniform sampler2D alphaMap;
  uniform float useGradient;
  uniform float useMap;
  uniform float useAlphaMap;
  uniform float useDash;
  uniform float dashArray;
  uniform float dashOffset;
  uniform float dashRatio;
  uniform float visibility;
  uniform float alphaTest;
  uniform vec2 repeat;
  uniform vec3 gradient[2];
  
  varying vec2 vUV;
  varying vec4 vColor;
  varying float vCounters;
  
  void main() {
    #include <logdepthbuf_fragment>
    vec4 diffuseColor = vColor;
    if (useGradient == 1.) diffuseColor = vec4(mix(gradient[0], gradient[1], vCounters), 1.0);
    if (useMap == 1.) diffuseColor *= texture2D(map, vUV * repeat);
    if (useAlphaMap == 1.) diffuseColor.a *= texture2D(alphaMap, vUV * repeat).a;
    if (diffuseColor.a < alphaTest) discard;
    if (useDash == 1.) diffuseColor.a *= ceil(mod(vCounters + dashOffset, dashArray) - (dashArray * dashRatio));
    diffuseColor.a *= step(vCounters, visibility);
    #include <clipping_planes_fragment>
    gl_FragColor = diffuseColor;     
    #include <fog_fragment>
    #include <tonemapping_fragment>
    #include <${f>=154?"colorspace_fragment":"encodings_fragment"}>
  }
`;class m extends o.BKk{constructor(t){super({uniforms:{...u.UniformsLib.fog,lineWidth:{value:1},map:{value:null},useMap:{value:0},alphaMap:{value:null},useAlphaMap:{value:0},color:{value:new o.Q1f(0xffffff)},gradient:{value:[new o.Q1f(0xff0000),new o.Q1f(65280)]},opacity:{value:1},resolution:{value:new o.I9Y(1,1)},sizeAttenuation:{value:1},dashArray:{value:0},dashOffset:{value:0},dashRatio:{value:.5},useDash:{value:0},useGradient:{value:0},visibility:{value:1},alphaTest:{value:0},repeat:{value:new o.I9Y(1,1)}},vertexShader:d,fragmentShader:v}),l(this,"lineWidth"),l(this,"map"),l(this,"useMap"),l(this,"alphaMap"),l(this,"useAlphaMap"),l(this,"color"),l(this,"gradient"),l(this,"resolution"),l(this,"sizeAttenuation"),l(this,"dashArray"),l(this,"dashOffset"),l(this,"dashRatio"),l(this,"useDash"),l(this,"useGradient"),l(this,"visibility"),l(this,"repeat"),this.type="MeshLineMaterial",Object.defineProperties(this,{lineWidth:{enumerable:!0,get(){return this.uniforms.lineWidth.value},set(t){this.uniforms.lineWidth.value=t}},map:{enumerable:!0,get(){return this.uniforms.map.value},set(t){this.uniforms.map.value=t}},useMap:{enumerable:!0,get(){return this.uniforms.useMap.value},set(t){this.uniforms.useMap.value=t}},alphaMap:{enumerable:!0,get(){return this.uniforms.alphaMap.value},set(t){this.uniforms.alphaMap.value=t}},useAlphaMap:{enumerable:!0,get(){return this.uniforms.useAlphaMap.value},set(t){this.uniforms.useAlphaMap.value=t}},color:{enumerable:!0,get(){return this.uniforms.color.value},set(t){this.uniforms.color.value=t}},gradient:{enumerable:!0,get(){return this.uniforms.gradient.value},set(t){this.uniforms.gradient.value=t}},opacity:{enumerable:!0,get(){return this.uniforms.opacity.value},set(t){this.uniforms.opacity.value=t}},resolution:{enumerable:!0,get(){return this.uniforms.resolution.value},set(t){this.uniforms.resolution.value.copy(t)}},sizeAttenuation:{enumerable:!0,get(){return this.uniforms.sizeAttenuation.value},set(t){this.uniforms.sizeAttenuation.value=t}},dashArray:{enumerable:!0,get(){return this.uniforms.dashArray.value},set(t){this.uniforms.dashArray.value=t,this.useDash=+(0!==t)}},dashOffset:{enumerable:!0,get(){return this.uniforms.dashOffset.value},set(t){this.uniforms.dashOffset.value=t}},dashRatio:{enumerable:!0,get(){return this.uniforms.dashRatio.value},set(t){this.uniforms.dashRatio.value=t}},useDash:{enumerable:!0,get(){return this.uniforms.useDash.value},set(t){this.uniforms.useDash.value=t}},useGradient:{enumerable:!0,get(){return this.uniforms.useGradient.value},set(t){this.uniforms.useGradient.value=t}},visibility:{enumerable:!0,get(){return this.uniforms.visibility.value},set(t){this.uniforms.visibility.value=t}},alphaTest:{enumerable:!0,get(){return this.uniforms.alphaTest.value},set(t){this.uniforms.alphaTest.value=t}},repeat:{enumerable:!0,get(){return this.uniforms.repeat.value},set(t){this.uniforms.repeat.value.copy(t)}}}),this.setValues(t)}copy(t){return super.copy(t),this.lineWidth=t.lineWidth,this.map=t.map,this.useMap=t.useMap,this.alphaMap=t.alphaMap,this.useAlphaMap=t.useAlphaMap,this.color.copy(t.color),this.gradient=t.gradient,this.opacity=t.opacity,this.resolution.copy(t.resolution),this.sizeAttenuation=t.sizeAttenuation,this.dashArray=t.dashArray,this.dashOffset=t.dashOffset,this.dashRatio=t.dashRatio,this.useDash=t.useDash,this.useGradient=t.useGradient,this.visibility=t.visibility,this.alphaTest=t.alphaTest,this.repeat.copy(t.repeat),this}}let y={width:.2,length:1,decay:1,local:!1,stride:0,interval:1},b=(t,e=1)=>(t.set(t.subarray(e)),t.fill(-1/0,-e),t),g=n.forwardRef((t,e)=>{let{children:i}=t,{width:s,length:r,decay:u,local:h,stride:l,interval:p}={...y,...t},{color:d="hotpink",attenuation:f,target:v}=t,g=(0,a.C)(t=>t.size),x=(0,a.C)(t=>t.scene),_=n.useRef(null),[w,A]=n.useState(null),M=function(t,e){let{length:i,local:s,decay:r,interval:u,stride:h}={...y,...e},l=n.useRef(null),[p]=n.useState(()=>new o.Pq0);n.useLayoutEffect(()=>{t&&(l.current=Float32Array.from({length:10*i*3},(e,i)=>t.position.getComponent(i%3)))},[i,t]);let c=n.useRef(new o.Pq0),d=n.useRef(0);return(0,a.D)(()=>{if(t&&l.current){if(0===d.current){let e;s?e=t.position:(t.getWorldPosition(p),e=p);let i=+r;for(let t=0;t<i;t++)e.distanceTo(c.current)<h||(b(l.current,3),l.current.set(e.toArray(),l.current.length-3));c.current.copy(e)}d.current++,d.current=d.current%u}}),l}(w,{length:r,decay:u,local:h,stride:l,interval:p});n.useEffect(()=>{let t=(null==v?void 0:v.current)||_.current.children.find(t=>t instanceof o.B69);t&&A(t)},[M,v]);let P=n.useMemo(()=>new c,[]),C=n.useMemo(()=>{var t,e;let r,a=new m({lineWidth:.1*s,color:d,sizeAttenuation:1,resolution:new o.I9Y(g.width,g.height)});return i&&(Array.isArray(i)?r=i.find(t=>"string"==typeof t.type&&"meshLineMaterial"===t.type):"string"==typeof i.type&&"meshLineMaterial"===i.type&&(r=i)),"object"==typeof(null==(t=r)?void 0:t.props)&&(null==(e=r)?void 0:e.props)!==null&&a.setValues(r.props),a},[s,d,g,i]);return n.useEffect(()=>{C.uniforms.resolution.value.set(g.width,g.height)},[g]),(0,a.D)(()=>{M.current&&P.setPoints(M.current,f)}),n.createElement("group",null,(0,a.o)(n.createElement("mesh",{ref:e,geometry:P,material:C}),x),n.createElement("group",{ref:_},i))});var x=i(258);function _(){let t=(0,n.useRef)(null);return(0,a.D)((e,i)=>{t.current&&(t.current.rotation.y+=.28*i,t.current.rotation.z-=.08*i)}),(0,s.jsxs)("group",{ref:t,children:[(0,s.jsx)(r.n,{speed:1.3,floatIntensity:.6,rotationIntensity:.8,children:(0,s.jsxs)("mesh",{children:[(0,s.jsx)("icosahedronGeometry",{args:[.85,1]}),(0,s.jsx)("meshStandardMaterial",{color:"#00ddff",wireframe:!0,emissive:"#00ddff",emissiveIntensity:.6})]})}),[0,Math.PI/2,Math.PI,3*Math.PI/2].map((t,e)=>(0,s.jsx)(g,{width:.6,color:"#6dffd2",length:3,decay:2,local:!0,children:(0,s.jsxs)("mesh",{position:[1.5*Math.cos(t),.8*Math.sin(t),.8*Math.sin(t)],children:[(0,s.jsx)("sphereGeometry",{args:[.08,16,16]}),(0,s.jsx)("meshStandardMaterial",{color:"#6dffd2",emissive:"#6dffd2",emissiveIntensity:1.2})]})},e))]})}function w(){return(0,s.jsxs)(x.Hl,{dpr:[1,1.5],camera:{position:[0,0,4],fov:45},className:"h-full w-full",children:[(0,s.jsx)("ambientLight",{intensity:.6}),(0,s.jsx)("pointLight",{position:[2,2,3],intensity:2,color:"#55d9ff"}),(0,s.jsx)(_,{})]})}}}]);