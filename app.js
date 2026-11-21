var Js=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(i){throw n=[i],i}};var rS=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};function aS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function oS(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function Ga(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function s_(){let t=Ga("canvas");return t.style.display="block",t}function ic(...t){let e="THREE."+t.shift();Ha?Ha("log",e,...t):console.log(e,...t)}function r_(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ce(...t){t=r_(t);let e="THREE."+t.shift();if(Ha)Ha("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ge(...t){t=r_(t);let e="THREE."+t.shift();if(Ha)Ha("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function Dr(...t){let e=t.join(" ");e in Og||(Og[e]=!0,Ce(...t))}function a_(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function Ji(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Rn[t&255]+Rn[t>>8&255]+Rn[t>>16&255]+Rn[t>>24&255]+"-"+Rn[e&255]+Rn[e>>8&255]+"-"+Rn[e>>16&15|64]+Rn[e>>24&255]+"-"+Rn[n&63|128]+Rn[n>>8&255]+"-"+Rn[n>>16&255]+Rn[n>>24&255]+Rn[i&255]+Rn[i>>8&255]+Rn[i>>16&255]+Rn[i>>24&255]).toLowerCase()}function nt(t,e,n){return Math.max(e,Math.min(n,t))}function Pf(t,e){return(t%e+e)%e}function cS(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function lS(t,e,n){return t!==e?(n-t)/(e-t):0}function tc(t,e,n){return(1-n)*t+n*e}function hS(t,e,n,i){return tc(t,e,1-Math.exp(-n*i))}function uS(t,e=1){return e-Math.abs(Pf(t,e*2)-e)}function dS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function fS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function pS(t,e){return t+Math.floor(Math.random()*(e-t+1))}function mS(t,e){return t+Math.random()*(e-t)}function gS(t){return t*(.5-Math.random())}function _S(t){t!==void 0&&(Bg=t);let e=Bg+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function xS(t){return t*ec}function vS(t){return t*Or}function yS(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function SS(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function Lf(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function MS(t,e,n,i,s){let r=Math.cos,a=Math.sin,o=r(n/2),c=a(n/2),l=r((e+i)/2),h=a((e+i)/2),d=r((e-i)/2),u=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*h,c*d,c*u,o*l);break;case"YZY":t.set(c*u,o*h,c*d,o*l);break;case"ZXZ":t.set(c*d,c*u,o*h,o*l);break;case"XZX":t.set(o*h,c*g,c*f,o*l);break;case"YXY":t.set(c*f,o*h,c*g,o*l);break;case"ZYZ":t.set(c*g,c*f,o*h,o*l);break;default:Ce("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function nu(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function Nf(t,e){if(e.constructor===Float32Array)return t;let n=nu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function Df(t,e){if(e.constructor===Float32Array)return t;let n=nu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}function bS(){let t={enabled:!0,workingColorSpace:Sn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===_t&&(s.r=Ts(s.r),s.g=Ts(s.g),s.b=Ts(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===_t&&(s.r=Oa(s.r),s.g=Oa(s.g),s.b=Oa(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Ds?nc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Sn]:{primaries:e,whitePoint:i,transfer:nc,toXYZ:zg,fromXYZ:Gg,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wt},outputColorSpaceConfig:{drawingBufferColorSpace:Wt}},[Wt]:{primaries:e,whitePoint:i,transfer:_t,toXYZ:zg,fromXYZ:Gg,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wt}}}),t}function Ts(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Oa(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function Td(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ql.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ce("Texture: Unable to serialize Texture."),{})}function wd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function Ud(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Pr.fromArray(t,r);let o=s.x*Math.abs(Pr.x)+s.y*Math.abs(Pr.y)+s.z*Math.abs(Pr.z),c=e.dot(Pr),l=n.dot(Pr),h=i.dot(Pr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function NS(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,s[c]=24,s[c|256]=24):(i[c]=31744,i[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function DS(t){Math.abs(t)>65504&&Ce("DataUtils.toHalfFloat(): Value out of range."),t=nt(t,-65504,65504),bs.floatView[0]=t;let e=bs.uint32View[0],n=e>>23&511;return bs.baseTable[n]+((e&8388607)>>bs.shiftTable[n])}function US(t){let e=t>>10;return bs.uint32View[0]=bs.mantissaTable[bs.offsetTable[e]+(t&1023)]+bs.exponentTable[e],bs.floatView[0]}function jg(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=Ji()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}function HS(t,e,n,i,s,r,a,o){let c;if(e.side===Mn?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ji,o),c===null)return null;Nl.copy(o),Nl.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Nl);return l<n.near||l>n.far?null:{distance:l,point:Nl.clone(),object:t}}function Dl(t,e,n,i,s,r,a,o,c,l){t.getVertexPosition(o,Cl),t.getVertexPosition(c,Il),t.getVertexPosition(l,Pl);let h=HS(t,e,n,i,Cl,Il,Pl,Qg);if(h){let d=new U;rr.getBarycoord(Qg,Cl,Il,Pl,d),s&&(h.uv=rr.getInterpolatedAttribute(s,o,c,l,d,new Ye)),r&&(h.uv1=rr.getInterpolatedAttribute(r,o,c,l,d,new Ye)),a&&(h.normal=rr.getInterpolatedAttribute(a,o,c,l,d,new U),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:c,c:l,normal:new U,materialIndex:0};rr.getNormal(Cl,Il,Pl,u.normal),h.face=u,h.barycoord=d}return h}function kl(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(ih.fromBufferAttribute(o,s),sh.fromBufferAttribute(o,r),n.distanceSqToSegment(ih,sh,Vd,l0)>i)return;Vd.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(Vd);if(!(l<e.near||l>e.far))return{distance:l,point:l0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}function f0(t,e,n,i,s,r,a){let o=Zd.distanceSqToPoint(t);if(o<n){let c=new U;Zd.closestPointToPoint(t,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function jr(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(p0(s))s.isRenderTargetTexture?(Ce("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(p0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Nn(t){let e={};for(let n=0;n<t.length;n++){let i=jr(t[n]);for(let s in i)e[s]=i[s]}return e}function p0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function $S(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Uf(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}function sr(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function Qo(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function jS(t){function e(s,r){return t[s]-t[r]}let n=t.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(e),i}function m0(t,e,n){let i=t.length,s=new t.constructor(i);for(let r=0,a=0;a!==i;++r){let o=n[r]*e;for(let c=0;c!==e;++c)s[a++]=t[o+c]}return s}function ZS(t,e,n,i){let s=1,r=t[0];for(;r!==void 0&&r[i]===void 0;)r=t[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),n.push(...a)),r=t[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(n,n.length)),r=t[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),n.push(a)),r=t[s++];while(r!==void 0)}function h_(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function JS(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function QS(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=h_(r,e,n,i,s)-t;if(Math.abs(o)<1e-10)break;let c=JS(r,e,n,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function g0(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function _0(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}function eM(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Cs;case"vector":case"vector2":case"vector3":case"vector4":return dr;case"color":return vc;case"quaternion":return Is;case"bool":case"boolean":return Rs;case"string":return Ps}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function tM(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=eM(t.type);if(t.times===void 0){let i=[],s=[];ZS(t.keys,i,s,"value"),t.times=i,t.values=s}let n;return e.parse!==void 0?n=e.parse(t):n=new e(t.name,t.times,t.values,t.interpolation),Qo(t.settings)&&(n.settings={inTangents:sr(t.settings.inTangents,Float32Array),outTangents:sr(t.settings.outTangents,Float32Array)}),n}function x0(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function T0(t,e){return t.distance-e.distance}function sf(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)sf(r[a],e,n,!0)}}function Bf(t,e,n,i){let s=hM(i);switch(n){case bf:return t*e;case Mh:return t*e/s.components*s.byteLength;case bh:return t*e/s.components*s.byteLength;case pr:return t*e*2/s.components*s.byteLength;case Th:return t*e*2/s.components*s.byteLength;case Tf:return t*e*3/s.components*s.byteLength;case yi:return t*e*4/s.components*s.byteLength;case Eh:return t*e*4/s.components*s.byteLength;case Cc:case Ic:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Pc:case Lc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:case Ch:return Math.max(t,16)*Math.max(e,8)/4;case Ah:case Rh:return Math.max(t,8)*Math.max(e,8)/2;case Ih:case Ph:case Nh:case Dh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Lh:case Nc:case Uh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Fh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Oh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Bh:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case kh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case zh:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Gh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Hh:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Vh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Wh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Xh:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case qh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case $h:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Yh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Kh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case jh:case Zh:case Jh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case Qh:case eu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Dc:case tu:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function hM(t){switch(t){case Zn:case vf:return{byteLength:1,components:1};case ro:case yf:case zn:return{byteLength:2,components:1};case yh:case Sh:return{byteLength:2,components:4};case Ui:case vh:case Ln:return{byteLength:4,components:1};case Sf:case Mf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var E0,af,A0,wc,w0,eo,ji,Mn,kn,Xr,to,of,cf,lf,R0,qr,C0,I0,P0,L0,N0,D0,U0,F0,hf,uf,O0,B0,k0,z0,G0,H0,V0,W0,X0,ql,$l,Yl,Ba,Kl,jl,Zl,Jl,gh,q0,$0,Zi,df,ff,pf,Rc,mf,gf,_f,qd,Y0,xf,$r,no,io,_h,ar,$n,ka,qt,xh,Yr,Rt,so,oi,Zn,vf,yf,ro,vh,Ui,Ln,zn,yh,Sh,Kr,Sf,Mf,bf,Tf,yi,Es,Ns,Mh,bh,pr,Th,Eh,Cc,Ic,Pc,Lc,Ah,wh,Rh,Ch,Ih,Ph,Lh,Nh,Dh,Nc,Uh,Fh,Oh,Bh,kh,zh,Gh,Hh,Vh,Wh,Xh,qh,$h,Yh,Kh,jh,Zh,Jh,Qh,eu,Dc,tu,Ur,Fr,Wl,$d,Yd,Kd,jd,K0,Ef,Uc,ao,j0,Fc,Z0,Ds,Wt,Sn,nc,_t,Xl,J0,Q0,e_,t_,Af,n_,i_,wf,Rf,Cf,If,vi,za,Og,Ha,o_,Xi,Rn,Bg,ec,Or,oo,Ye,Fn,U,Md,kg,He,bd,zg,Gg,Je,ba,Ql,TS,Va,ES,Ed,rn,yt,eh,ai,sc,th,Xe,Ta,Ii,AS,wS,Qs,vl,si,Hg,Vg,qi,Wa,RS,Wg,Ea,_s,yl,Xo,CS,IS,Xg,qg,$g,Yg,PS,Aa,Ad,Ct,Yn,LS,Xa,c_,er,Sl,Be,Cn,Br,Pi,xs,Rd,vs,wa,Ra,Kg,Cd,Id,Pd,Ld,Nd,Dd,rr,_n,ys,Li,Ml,Ca,Ia,Pa,tr,nr,Ir,qo,bl,Tl,Pr,bs,or,Zt,El,FS,yn,rc,ac,Xt,OS,$o,Fd,In,BS,xi,Od,La,ri,Yo,gn,Pn,qa,Un,$a,Bd,kS,zS,Ni,GS,On,Ss,kd,Al,wl,cr,Kn,Zg,Lr,Rl,Jg,Cl,Il,Pl,zd,Ll,Qg,Nl,Et,Ko,e0,t0,VS,n0,Ul,Gd,i0,Hd,oc,Ya,lr,s0,WS,cc,As,Na,r0,Fl,a0,XS,jo,Zo,kr,Nr,qS,Ol,hr,o0,nh,Ka,ih,sh,c0,Jo,Bl,Vd,l0,zr,h0,u0,lc,hc,ja,d0,Zd,zl,Gl,uc,dc,fc,ws,pc,mc,ur,gc,Gr,_c,l_,YS,KS,$i,rh,Yi,Bn,xc,ah,oh,Ki,ch,lh,hh,uh,jn,Rs,vc,Cs,dh,Is,Ps,dr,yc,Wi,fh,u_,Di,Ms,Jd,Hr,Da,ph,Sc,Mc,Za,Wd,v0,y0,Ja,Hl,Vl,Vi,bc,ir,S0,M0,sn,Qd,Tc,ef,Vr,Wr,tf,fr,Ls,Xd,Ec,Ua,Fa,Qa,mh,Ff,nM,Of,iM,sM,rM,aM,oM,cM,lM,nf,Tt,Jw,b0,Ac,rf,kf=Js(()=>{E0=0,af=1,A0=2,wc=1,w0=2,eo=3,ji=0,Mn=1,kn=2,Xr=0,to=1,of=2,cf=3,lf=4,R0=5,qr=100,C0=101,I0=102,P0=103,L0=104,N0=200,D0=201,U0=202,F0=203,hf=204,uf=205,O0=206,B0=207,k0=208,z0=209,G0=210,H0=211,V0=212,W0=213,X0=214,ql=0,$l=1,Yl=2,Ba=3,Kl=4,jl=5,Zl=6,Jl=7,gh=0,q0=1,$0=2,Zi=0,df=1,ff=2,pf=3,Rc=4,mf=5,gf=6,_f=7,qd="attached",Y0="detached",xf=300,$r=301,no=302,io=303,_h=304,ar=1e3,$n=1001,ka=1002,qt=1003,xh=1004,Yr=1005,Rt=1006,so=1007,oi=1008,Zn=1009,vf=1010,yf=1011,ro=1012,vh=1013,Ui=1014,Ln=1015,zn=1016,yh=1017,Sh=1018,Kr=1020,Sf=35902,Mf=35899,bf=1021,Tf=1022,yi=1023,Es=1026,Ns=1027,Mh=1028,bh=1029,pr=1030,Th=1031,Eh=1033,Cc=33776,Ic=33777,Pc=33778,Lc=33779,Ah=35840,wh=35841,Rh=35842,Ch=35843,Ih=36196,Ph=37492,Lh=37496,Nh=37488,Dh=37489,Nc=37490,Uh=37491,Fh=37808,Oh=37809,Bh=37810,kh=37811,zh=37812,Gh=37813,Hh=37814,Vh=37815,Wh=37816,Xh=37817,qh=37818,$h=37819,Yh=37820,Kh=37821,jh=36492,Zh=36494,Jh=36495,Qh=36283,eu=36284,Dc=36285,tu=36286,Ur=2300,Fr=2301,Wl=2302,$d=2303,Yd=2400,Kd=2401,jd=2402,K0=2500,Ef=0,Uc=1,ao=2,j0=3200,Fc=0,Z0=1,Ds="",Wt="srgb",Sn="srgb-linear",nc="linear",_t="srgb",Xl=7680,J0=519,Q0=512,e_=513,t_=514,Af=515,n_=516,i_=517,wf=518,Rf=519,Cf=35044,If="300 es",vi=2e3,za=2001;Og={},Ha=null;o_={[ql]:ql,[Yl]:Zl,[Kl]:Kl,[Ba]:jl,[$l]:$l,[Zl]:Yl,[Jl]:Jl,[jl]:Ba},Xi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Rn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Bg=1234567,ec=Math.PI/180,Or=180/Math.PI;oo={DEG2RAD:ec,RAD2DEG:Or,generateUUID:Ji,clamp:nt,euclideanModulo:Pf,mapLinear:cS,inverseLerp:lS,lerp:tc,damp:hS,pingpong:uS,smoothstep:dS,smootherstep:fS,randInt:pS,randFloat:mS,randFloatSpread:gS,seededRandom:_S,degToRad:xS,radToDeg:vS,isPowerOfTwo:yS,ceilPowerOfTwo:SS,floorPowerOfTwo:Lf,setQuaternionFromProperEuler:MS,normalize:Df,denormalize:Nf},Ye=class{static{this.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Fn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||c!==u||l!==f||h!==g){let m=c*u+l*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o}else{c=c*p+u*o,l=l*p+f*o,h=h*p+g*o,d=d*p+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+d*d);c*=M,l*=M,h*=M,d*=M}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=d}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return e[n]=o*g+h*d+c*f-l*u,e[n+1]=c*g+h*u+l*d-o*f,e[n+2]=l*g+h*f+o*u-c*d,e[n+3]=h*g-o*d-c*u-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),d=o(r/2),u=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d+u*f*g;break;case"YZX":this._x=u*h*d+l*f*g,this._y=l*f*d+u*h*g,this._z=l*h*g-u*f*d,this._w=l*h*d-u*f*g;break;case"XZY":this._x=u*h*d-l*f*g,this._y=l*f*d-u*h*g,this._z=l*h*g+u*f*d,this._w=l*h*d+u*f*g;break;default:Ce("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],d=n[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-n;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},U=class{static{this.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(kg.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(kg.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*n-r*s),d=2*(r*i-a*n);return this.x=n+c*l+a*d-o*h,this.y=i+c*h+o*l-r*d,this.z=s+c*d+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Md.copy(this).projectOnVector(e),this.sub(Md)}reflect(e){return this.sub(Md.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(nt(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Md=new U,kg=new Fn,He=class{static{this.prototype.isMatrix3=!0}constructor(e,n,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,c,l)}set(e,n,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],A=s[4],b=s[7],w=s[2],E=s[5],_=s[8];return r[0]=a*v+o*M+c*w,r[3]=a*m+o*A+c*E,r[6]=a*p+o*b+c*_,r[1]=l*v+h*M+d*w,r[4]=l*m+h*A+d*E,r[7]=l*p+h*b+d*_,r[2]=u*v+f*M+g*w,r[5]=u*m+f*A+g*E,r[8]=u*p+f*b+g*_,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=h*a-o*l,u=o*c-h*r,f=l*r-a*c,g=n*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=u*v,e[4]=(h*n-s*c)*v,e[5]=(s*r-o*n)*v,e[6]=f*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return Dr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(bd.makeScale(e,n)),this}rotate(e){return Dr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(bd.makeRotation(-e)),this}translate(e,n){return Dr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(bd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},bd=new He,zg=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Gg=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Je=bS();Ql=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{ba===void 0&&(ba=Ga("canvas")),ba.width=e.width,ba.height=e.height;let s=ba.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=ba}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=Ga("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ts(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ts(n[i]/255)*255):n[i]=Ts(n[i]);return{data:n,width:e.width,height:e.height}}else return Ce("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},TS=0,Va=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:TS++}),this.uuid=Ji(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Td(s[a].image)):r.push(Td(s[a]))}else r=Td(s);i.url=r}return n||(e.images[this.uuid]=i),i}};ES=0,Ed=new U,rn=class t extends Xi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=$n,s=$n,r=Rt,a=oi,o=yi,c=Zn,l=t.DEFAULT_ANISOTROPY,h=Ds){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ES++}),this.uuid=Ji(),this.name="",this.source=new Va(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new Ye(0,0),this.repeat=new Ye(1,1),this.center=new Ye(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ce(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ce(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==xf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case $n:e.x=e.x<0?0:1;break;case ka:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case $n:e.y=e.y<0?0:1;break;case ka:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};rn.DEFAULT_IMAGE=null;rn.DEFAULT_MAPPING=xf;rn.DEFAULT_ANISOTROPY=1;yt=class{static{this.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,c=e.elements,l=c[0],h=c[4],d=c[8],u=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let A=(l+1)/2,b=(f+1)/2,w=(p+1)/2,E=(h+u)/4,_=(d+v)/4,S=(g+m)/4;return A>b&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=E/i,r=_/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=S/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-v)/M,this.z=(u-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=nt(this.x,e.x,n.x),this.y=nt(this.y,e.y,n.y),this.z=nt(this.z,e.z,n.z),this.w=nt(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=nt(this.x,e,n),this.y=nt(this.y,e,n),this.z=nt(this.z,e,n),this.w=nt(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(nt(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},eh=class extends Xi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Rt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new yt(0,0,e,n),this.scissorTest=!1,this.viewport=new yt(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new rn({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Rt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new Va(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},ai=class extends eh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},sc=class extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},th=class extends rn{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=qt,this.minFilter=qt,this.wrapR=$n,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},Xe=class t{static{this.prototype.isMatrix4=!0}constructor(e,n,i,s,r,a,o,c,l,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,c,l,h,d,u,f,g,v,m)}set(e,n,i,s,r,a,o,c,l,h,d,u,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Ta.setFromMatrixColumn(e,0).length(),r=1/Ta.setFromMatrixColumn(e,1).length(),a=1/Ta.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;n[0]=c*h,n[4]=-c*d,n[8]=l,n[1]=f+g*l,n[5]=u-v*l,n[9]=-o*c,n[2]=v-u*l,n[6]=g+f*l,n[10]=a*c}else if(e.order==="YXZ"){let u=c*h,f=c*d,g=l*h,v=l*d;n[0]=u+v*o,n[4]=g*o-f,n[8]=a*l,n[1]=a*d,n[5]=a*h,n[9]=-o,n[2]=f*o-g,n[6]=v+u*o,n[10]=a*c}else if(e.order==="ZXY"){let u=c*h,f=c*d,g=l*h,v=l*d;n[0]=u-v*o,n[4]=-a*d,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*h,n[9]=v-u*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;n[0]=c*h,n[4]=g*l-f,n[8]=u*l+v,n[1]=c*d,n[5]=v*l+u,n[9]=f*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){let u=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=v-u*d,n[8]=g*d+f,n[1]=d,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=f*d+g,n[10]=u-v*d}else if(e.order==="XZY"){let u=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=-d,n[8]=l*h,n[1]=u*d+v,n[5]=a*h,n[9]=f*d-g,n[2]=g*d-f,n[6]=o*h,n[10]=v*d+u}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(AS,e,wS)}lookAt(e,n,i){let s=this.elements;return si.subVectors(e,n),si.lengthSq()===0&&(si.z=1),si.normalize(),Qs.crossVectors(i,si),Qs.lengthSq()===0&&(Math.abs(i.z)===1?si.x+=1e-4:si.z+=1e-4,si.normalize(),Qs.crossVectors(i,si)),Qs.normalize(),vl.crossVectors(si,Qs),s[0]=Qs.x,s[4]=vl.x,s[8]=si.x,s[1]=Qs.y,s[5]=vl.y,s[9]=si.y,s[2]=Qs.z,s[6]=vl.z,s[10]=si.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],A=i[7],b=i[11],w=i[15],E=s[0],_=s[4],S=s[8],N=s[12],I=s[1],L=s[5],O=s[9],H=s[13],R=s[2],z=s[6],G=s[10],V=s[14],ee=s[3],X=s[7],Z=s[11],Q=s[15];return r[0]=a*E+o*I+c*R+l*ee,r[4]=a*_+o*L+c*z+l*X,r[8]=a*S+o*O+c*G+l*Z,r[12]=a*N+o*H+c*V+l*Q,r[1]=h*E+d*I+u*R+f*ee,r[5]=h*_+d*L+u*z+f*X,r[9]=h*S+d*O+u*G+f*Z,r[13]=h*N+d*H+u*V+f*Q,r[2]=g*E+v*I+m*R+p*ee,r[6]=g*_+v*L+m*z+p*X,r[10]=g*S+v*O+m*G+p*Z,r[14]=g*N+v*H+m*V+p*Q,r[3]=M*E+A*I+b*R+w*ee,r[7]=M*_+A*L+b*z+w*X,r[11]=M*S+A*O+b*G+w*Z,r[15]=M*N+A*H+b*V+w*Q,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*f-l*u,A=o*f-l*d,b=o*u-c*d,w=a*f-l*h,E=a*u-c*h,_=a*d-o*h;return n*(v*M-m*A+p*b)-i*(g*M-m*w+p*E)+s*(g*A-v*w+p*_)-r*(g*b-v*E+m*_)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return n*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=n*o-i*a,A=n*c-s*a,b=n*l-r*a,w=i*c-s*o,E=i*l-r*o,_=s*l-r*c,S=h*v-d*g,N=h*m-u*g,I=h*p-f*g,L=d*m-u*v,O=d*p-f*v,H=u*p-f*m,R=M*H-A*O+b*L+w*I-E*N+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let z=1/R;return e[0]=(o*H-c*O+l*L)*z,e[1]=(s*O-i*H-r*L)*z,e[2]=(v*_-m*E+p*w)*z,e[3]=(u*E-d*_-f*w)*z,e[4]=(c*I-a*H-l*N)*z,e[5]=(n*H-s*I+r*N)*z,e[6]=(m*b-g*_-p*A)*z,e[7]=(h*_-u*b+f*A)*z,e[8]=(a*O-o*I+l*S)*z,e[9]=(i*I-n*O-r*S)*z,e[10]=(g*E-v*b+p*M)*z,e[11]=(d*b-h*E-f*M)*z,e[12]=(o*N-a*L-c*S)*z,e[13]=(n*L-i*N+s*S)*z,e[14]=(v*A-g*w-m*M)*z,e[15]=(h*w-d*A+u*M)*z,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,l=r+r,h=a+a,d=o+o,u=r*l,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,M=c*l,A=c*h,b=c*d,w=i.x,E=i.y,_=i.z;return s[0]=(1-(v+p))*w,s[1]=(f+b)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(u+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+A)*_,s[9]=(m-M)*_,s[10]=(1-(u+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Ta.set(s[0],s[1],s[2]).length(),o=Ta.set(s[4],s[5],s[6]).length(),c=Ta.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Ii.copy(this);let l=1/a,h=1/o,d=1/c;return Ii.elements[0]*=l,Ii.elements[1]*=l,Ii.elements[2]*=l,Ii.elements[4]*=h,Ii.elements[5]*=h,Ii.elements[6]*=h,Ii.elements[8]*=d,Ii.elements[9]*=d,Ii.elements[10]*=d,n.setFromRotationMatrix(Ii),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,s,r,a,o=vi,c=!1){let l=this.elements,h=2*r/(n-e),d=2*r/(i-s),u=(n+e)/(n-e),f=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===vi)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===za)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=d,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=vi,c=!1){let l=this.elements,h=2/(n-e),d=2/(i-s),u=-(n+e)/(n-e),f=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===vi)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===za)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=u,l[1]=0,l[5]=d,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Ta=new U,Ii=new Xe,AS=new U(0,0,0),wS=new U(1,1,1),Qs=new U,vl=new U,si=new U,Hg=new Xe,Vg=new Fn,qi=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(nt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ce("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};qi.DEFAULT_ORDER="XYZ";Wa=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},RS=0,Wg=new U,Ea=new Fn,_s=new Xe,yl=new U,Xo=new U,CS=new U,IS=new Fn,Xg=new U(1,0,0),qg=new U(0,1,0),$g=new U(0,0,1),Yg={type:"added"},PS={type:"removed"},Aa={type:"childadded",child:null},Ad={type:"childremoved",child:null},Ct=class t extends Xi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:RS++}),this.uuid=Ji(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new U,n=new qi,i=new Fn,s=new U(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Xe},normalMatrix:{value:new He}}),this.matrix=new Xe,this.matrixWorld=new Xe,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Wa,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ea.setFromAxisAngle(e,n),this.quaternion.multiply(Ea),this}rotateOnWorldAxis(e,n){return Ea.setFromAxisAngle(e,n),this.quaternion.premultiply(Ea),this}rotateX(e){return this.rotateOnAxis(Xg,e)}rotateY(e){return this.rotateOnAxis(qg,e)}rotateZ(e){return this.rotateOnAxis($g,e)}translateOnAxis(e,n){return Wg.copy(e).applyQuaternion(this.quaternion),this.position.add(Wg.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Xg,e)}translateY(e){return this.translateOnAxis(qg,e)}translateZ(e){return this.translateOnAxis($g,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_s.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?yl.copy(e):yl.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),Xo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_s.lookAt(Xo,yl,this.up):_s.lookAt(yl,Xo,this.up),this.quaternion.setFromRotationMatrix(_s),s&&(_s.extractRotation(s.matrixWorld),Ea.setFromRotationMatrix(_s),this.quaternion.premultiply(Ea.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ge("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Yg),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null):Ge("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(PS),Ad.child=e,this.dispatchEvent(Ad),Ad.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_s.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_s.multiply(e.parent.matrixWorld)),e.applyMatrix4(_s),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Yg),Aa.child=e,this.dispatchEvent(Aa),Aa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,e,CS),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xo,IS,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let d=c[l];r(e.shapes,d)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(n){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};Ct.DEFAULT_UP=new U(0,1,0);Ct.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ct.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Yn=class extends Ct{constructor(){super(),this.isGroup=!0,this.type="Group"}},LS={type:"move"},Xa=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Yn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Yn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Yn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=n.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;l.inputState.pinching&&u>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&u<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(LS)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Yn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},c_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},er={h:0,s:0,l:0},Sl={h:0,s:0,l:0};Be=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=Je.workingColorSpace){return this.r=e,this.g=n,this.b=i,Je.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=Je.workingColorSpace){if(e=Pf(e,1),n=nt(n,0,1),i=nt(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=wd(a,r,e+1/3),this.g=wd(a,r,e),this.b=wd(a,r,e-1/3)}return Je.colorSpaceToWorking(this,s),this}setStyle(e,n=Wt){function i(r){r!==void 0&&parseFloat(r)<1&&Ce("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ce("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ce("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wt){let i=c_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ce("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ts(e.r),this.g=Ts(e.g),this.b=Ts(e.b),this}copyLinearToSRGB(e){return this.r=Oa(e.r),this.g=Oa(e.g),this.b=Oa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Je.workingToColorSpace(Cn.copy(this),e),Math.round(nt(Cn.r*255,0,255))*65536+Math.round(nt(Cn.g*255,0,255))*256+Math.round(nt(Cn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Je.workingColorSpace){Je.workingToColorSpace(Cn.copy(this),n);let i=Cn.r,s=Cn.g,r=Cn.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let d=a-o;switch(l=h<=.5?d/(a+o):d/(2-a-o),a){case i:c=(s-r)/d+(s<r?6:0);break;case s:c=(r-i)/d+2;break;case r:c=(i-s)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=Je.workingColorSpace){return Je.workingToColorSpace(Cn.copy(this),n),e.r=Cn.r,e.g=Cn.g,e.b=Cn.b,e}getStyle(e=Wt){Je.workingToColorSpace(Cn.copy(this),e);let n=Cn.r,i=Cn.g,s=Cn.b;return e!==Wt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(er),this.setHSL(er.h+e,er.s+n,er.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(er),e.getHSL(Sl);let i=tc(er.h,Sl.h,n),s=tc(er.s,Sl.s,n),r=tc(er.l,Sl.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Cn=new Be;Be.NAMES=c_;Br=class extends Ct{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qi,this.environmentIntensity=1,this.environmentRotation=new qi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Pi=new U,xs=new U,Rd=new U,vs=new U,wa=new U,Ra=new U,Kg=new U,Cd=new U,Id=new U,Pd=new U,Ld=new yt,Nd=new yt,Dd=new yt,rr=class t{constructor(e=new U,n=new U,i=new U){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Pi.subVectors(e,n),s.cross(Pi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Pi.subVectors(s,n),xs.subVectors(i,n),Rd.subVectors(e,n);let a=Pi.dot(Pi),o=Pi.dot(xs),c=Pi.dot(Rd),l=xs.dot(xs),h=xs.dot(Rd),d=a*l-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(l*c-o*h)*u,g=(a*h-o*c)*u;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,vs)===null?!1:vs.x>=0&&vs.y>=0&&vs.x+vs.y<=1}static getInterpolation(e,n,i,s,r,a,o,c){return this.getBarycoord(e,n,i,s,vs)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,vs.x),c.addScaledVector(a,vs.y),c.addScaledVector(o,vs.z),c)}static getInterpolatedAttribute(e,n,i,s,r,a){return Ld.setScalar(0),Nd.setScalar(0),Dd.setScalar(0),Ld.fromBufferAttribute(e,n),Nd.fromBufferAttribute(e,i),Dd.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Ld,r.x),a.addScaledVector(Nd,r.y),a.addScaledVector(Dd,r.z),a}static isFrontFacing(e,n,i,s){return Pi.subVectors(i,n),xs.subVectors(e,n),Pi.cross(xs).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),xs.subVectors(this.a,this.b),Pi.cross(xs).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;wa.subVectors(s,i),Ra.subVectors(r,i),Cd.subVectors(e,i);let c=wa.dot(Cd),l=Ra.dot(Cd);if(c<=0&&l<=0)return n.copy(i);Id.subVectors(e,s);let h=wa.dot(Id),d=Ra.dot(Id);if(h>=0&&d<=h)return n.copy(s);let u=c*d-h*l;if(u<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),n.copy(i).addScaledVector(wa,a);Pd.subVectors(e,r);let f=wa.dot(Pd),g=Ra.dot(Pd);if(g>=0&&f<=g)return n.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Ra,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return Kg.subVectors(r,s),o=(d-h)/(d-h+(f-g)),n.copy(s).addScaledVector(Kg,o);let p=1/(m+v+u);return a=v*p,o=u*p,n.copy(i).addScaledVector(wa,a).addScaledVector(Ra,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},_n=class{constructor(e=new U(1/0,1/0,1/0),n=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Li.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Li.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=Li.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Li):Li.fromBufferAttribute(r,a),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ml.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Ml.copy(i.boundingBox)),Ml.applyMatrix4(e.matrixWorld),this.union(Ml)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(qo),bl.subVectors(this.max,qo),Ca.subVectors(e.a,qo),Ia.subVectors(e.b,qo),Pa.subVectors(e.c,qo),tr.subVectors(Ia,Ca),nr.subVectors(Pa,Ia),Ir.subVectors(Ca,Pa);let n=[0,-tr.z,tr.y,0,-nr.z,nr.y,0,-Ir.z,Ir.y,tr.z,0,-tr.x,nr.z,0,-nr.x,Ir.z,0,-Ir.x,-tr.y,tr.x,0,-nr.y,nr.x,0,-Ir.y,Ir.x,0];return!Ud(n,Ca,Ia,Pa,bl)||(n=[1,0,0,0,1,0,0,0,1],!Ud(n,Ca,Ia,Pa,bl))?!1:(Tl.crossVectors(tr,nr),n=[Tl.x,Tl.y,Tl.z],Ud(n,Ca,Ia,Pa,bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ys[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ys[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ys[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ys[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ys[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ys[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ys[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ys[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ys),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},ys=[new U,new U,new U,new U,new U,new U,new U,new U],Li=new U,Ml=new _n,Ca=new U,Ia=new U,Pa=new U,tr=new U,nr=new U,Ir=new U,qo=new U,bl=new U,Tl=new U,Pr=new U;bs=NS();or=class{static toHalfFloat(e){return DS(e)}static fromHalfFloat(e){return US(e)}},Zt=new U,El=new Ye,FS=0,yn=class extends Xi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:FS++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Cf,this.updateRanges=[],this.gpuType=Ln,this.version=0,this._normalizationScale=e!==void 0?nu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)El.fromBufferAttribute(this,n),El.applyMatrix3(e),this.setXY(n,El.x,El.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix3(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyMatrix4(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.applyNormalMatrix(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Zt.fromBufferAttribute(this,n),Zt.transformDirection(e),this.setXYZ(n,Zt.x,Zt.y,Zt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Nf(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Df(e,this.array)}},rc=class extends yn{constructor(e,n,i){super(new Uint16Array(e),n,i)}},ac=class extends yn{constructor(e,n,i){super(new Uint32Array(e),n,i)}},Xt=class extends yn{constructor(e,n,i){super(new Float32Array(e),n,i)}},OS=new _n,$o=new U,Fd=new U,In=class{constructor(e=new U,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):OS.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;$o.subVectors(e,this.center);let n=$o.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector($o,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint($o.copy(e.center).add(Fd)),this.expandByPoint($o.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},BS=0,xi=new Xe,Od=new Ct,La=new U,ri=new _n,Yo=new _n,gn=new U,Pn=class t extends Xi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:BS++}),this.uuid=Ji(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(aS(e)?ac:rc)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new He().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return xi.makeRotationFromQuaternion(e),this.applyMatrix4(xi),this}rotateX(e){return xi.makeRotationX(e),this.applyMatrix4(xi),this}rotateY(e){return xi.makeRotationY(e),this.applyMatrix4(xi),this}rotateZ(e){return xi.makeRotationZ(e),this.applyMatrix4(xi),this}translate(e,n,i){return xi.makeTranslation(e,n,i),this.applyMatrix4(xi),this}scale(e,n,i){return xi.makeScale(e,n,i),this.applyMatrix4(xi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(La).negate(),this.translate(La.x,La.y,La.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Xt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ce("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new _n);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];ri.setFromBufferAttribute(r),this.morphTargetsRelative?(gn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(gn),gn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(gn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ge('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new In);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ge("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(e){let i=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];Yo.setFromBufferAttribute(o),this.morphTargetsRelative?(gn.addVectors(ri.min,Yo.min),ri.expandByPoint(gn),gn.addVectors(ri.max,Yo.max),ri.expandByPoint(gn)):(ri.expandByPoint(Yo.min),ri.expandByPoint(Yo.max))}ri.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)gn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(gn));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)gn.fromBufferAttribute(o,l),c&&(La.fromBufferAttribute(e,l),gn.add(La)),s=Math.max(s,i.distanceToSquared(gn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ge('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ge("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new yn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let N=0;N<i.count;N++)o[N]=new U,c[N]=new U;let h=new U,d=new U,u=new U,f=new Ye,g=new Ye,v=new Ye,m=new U,p=new U;function M(N,I,L){l[N]=l[I]=l[L]=1,h.fromBufferAttribute(i,N),d.fromBufferAttribute(i,I),u.fromBufferAttribute(i,L),f.fromBufferAttribute(r,N),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,L),d.sub(h),u.sub(h),g.sub(f),v.sub(f);let O=1/(g.x*v.y-v.x*g.y);isFinite(O)&&(m.copy(d).multiplyScalar(v.y).addScaledVector(u,-g.y).multiplyScalar(O),p.copy(u).multiplyScalar(g.x).addScaledVector(d,-v.x).multiplyScalar(O),o[N].add(m),o[I].add(m),o[L].add(m),c[N].add(p),c[I].add(p),c[L].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let N=0,I=A.length;N<I;++N){let L=A[N],O=L.start,H=L.count;for(let R=O,z=O+H;R<z;R+=3)M(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new U,w=new U,E=new U,_=new U;function S(N){E.fromBufferAttribute(s,N),_.copy(E);let I=o[N];b.copy(I),b.sub(E.multiplyScalar(E.dot(I))).normalize(),w.crossVectors(_,I);let O=w.dot(c[N])<0?-1:1;a.setXYZW(N,b.x,b.y,b.z,O)}for(let N=0,I=i.count;N<I;++N)l[N]&&S(N);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new yn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new U,r=new U,a=new U,o=new U,c=new U,l=new U,h=new U,d=new U;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),v=e.getX(u+1),m=e.getX(u+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let u=0,f=n.count;u<f;u+=3)s.fromBufferAttribute(n,u+0),r.fromBufferAttribute(n,u+1),a.fromBufferAttribute(n,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)gn.fromBufferAttribute(e,n),gn.normalize(),e.setXYZ(n,gn.x,gn.y,gn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,d=o.normalized,u=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)u[g++]=l[f++]}return new yn(u,h,d)}if(this.index===null)return Ce("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);n.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,d=l.length;h<d;h++){let u=l[h],f=e(u,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let d=0,u=l.length;d<u;d++){let f=l[d];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=e.morphAttributes;for(let l in r){let h=[],d=r[l];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},qa=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Cf,this.updateRanges=[],this.version=0,this.uuid=Ji()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=jg(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=jg(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};Un=new U,$a=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?nu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Un.fromBufferAttribute(this,n),Un.applyMatrix4(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Un.fromBufferAttribute(this,n),Un.applyNormalMatrix(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Un.fromBufferAttribute(this,n),Un.transformDirection(e),this.setXYZ(n,Un.x,Un.y,Un.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){ic("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new yn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){ic("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):Nf(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):Df(e,this.data.array)}},Bd=new U,kS=new U,zS=new He,Ni=class{constructor(e=new U(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=Bd.subVectors(i,n).cross(kS.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(Bd),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||zS.getNormalMatrix(e),s=this.coplanarPoint(Bd).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},GS=0,On=class extends Xi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:GS++}),this.uuid=Ji(),this.name="",this.type="Material",this.blending=to,this.side=ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hf,this.blendDst=uf,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Be(0,0,0),this.blendAlpha=0,this.depthFunc=Ba,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=J0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Xl,this.stencilZFail=Xl,this.stencilZPass=Xl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ce(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ce(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Be().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new Ni().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new Ye().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ye().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Ss=new U,kd=new U,Al=new U,wl=new U,cr=class{constructor(e=new U,n=new U(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ss)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Ss.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Ss.copy(this.origin).addScaledVector(this.direction,n),Ss.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){kd.copy(e).add(n).multiplyScalar(.5),Al.copy(n).sub(e).normalize(),wl.copy(this.origin).sub(kd);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Al),o=wl.dot(this.direction),c=-wl.dot(Al),l=wl.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*c-o,u=a*o-c,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*c)+l}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l):u<=g?(d=0,u=Math.min(Math.max(-r,-c),r),f=u*(u+2*c)+l):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-c),r),f=-d*d+u*(u+2*c)+l);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(kd).addScaledVector(Al,u),f}intersectSphere(e,n){if(e.radius<0)return null;Ss.subVectors(e.center,this.origin);let i=Ss.dot(this.direction),s=Ss.dot(Ss)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return l>=0?(i=(e.min.x-u.x)*l,s=(e.max.x-u.x)*l):(i=(e.max.x-u.x)*l,s=(e.min.x-u.x)*l),h>=0?(r=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(r=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-u.z)*d,c=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,c=(e.min.z-u.z)*d),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Ss)!==null}intersectTriangle(e,n,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=n.x-a.x,v=n.y-a.y,m=n.z-a.z,p=i.x-a.x,M=i.y-a.y,A=i.z-a.z,b=Math.abs(c),w=Math.abs(l),E=Math.abs(h),_,S,N,I,L,O,H,R,z,G,V,ee;if(b>=w&&b>=E?(N=c,O=d,z=g,ee=p,c>=0?(_=l,S=h,I=u,L=f,H=v,R=m,G=M,V=A):(_=h,S=l,I=f,L=u,H=m,R=v,G=A,V=M)):w>=E?(N=l,O=u,z=v,ee=M,l>=0?(_=h,S=c,I=f,L=d,H=m,R=g,G=A,V=p):(_=c,S=h,I=d,L=f,H=g,R=m,G=p,V=A)):(N=h,O=f,z=m,ee=A,h>=0?(_=c,S=l,I=d,L=u,H=g,R=v,G=p,V=M):(_=l,S=c,I=u,L=d,H=v,R=g,G=M,V=p)),N===0)return null;let X=_/N,Z=S/N,Q=1/N,ye=I-X*O,De=L-Z*O,Y=H-X*z,ge=R-Z*z,be=G-X*ee,Fe=V-Z*ee,xe=be*ge-Fe*Y,qe=ye*Fe-De*be,Kt=Y*De-ge*ye;if(s){if(xe<0||qe<0||Kt<0)return null}else if((xe<0||qe<0||Kt<0)&&(xe>0||qe>0||Kt>0))return null;let ze=xe+qe+Kt;if(ze===0)return null;let xt=Q*(xe*O+qe*z+Kt*ee);return(ze>0?xt<0:xt>0)?null:this.at(xt/ze,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Kn=class extends On{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=gh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Zg=new Xe,Lr=new cr,Rl=new In,Jg=new U,Cl=new U,Il=new U,Pl=new U,zd=new U,Ll=new U,Qg=new U,Nl=new U,Et=class extends Ct{constructor(e=new Pn,n=new Kn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Ll.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],d=r[c];h!==0&&(zd.fromBufferAttribute(d,e),a?Ll.addScaledVector(zd,h):Ll.addScaledVector(zd.sub(n),h))}n.add(Ll)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Rl.copy(i.boundingSphere),Rl.applyMatrix4(r),Lr.copy(e.ray).recast(e.near),!(Rl.containsPoint(Lr.origin)===!1&&(Lr.intersectSphere(Rl,Jg)===null||Lr.origin.distanceToSquared(Jg)>(e.far-e.near)**2))&&(Zg.copy(r).invert(),Lr.copy(e.ray).applyMatrix4(Zg),!(i.boundingBox!==null&&Lr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Lr)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=A;b<w;b+=3){let E=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=Dl(this,p,e,i,l,h,d,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=Dl(this,a,e,i,l,h,d,M,A,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=A;b<w;b+=3){let E=b,_=b+1,S=b+2;s=Dl(this,p,e,i,l,h,d,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,A=m+1,b=m+2;s=Dl(this,a,e,i,l,h,d,M,A,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};Ko=new yt,e0=new yt,t0=new yt,VS=new yt,n0=new Xe,Ul=new U,Gd=new In,i0=new Xe,Hd=new cr,oc=class extends Et{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=qd,this.bindMatrix=new Xe,this.bindMatrixInverse=new Xe,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new _n),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Ul),this.boundingBox.expandByPoint(Ul)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new In),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Ul),this.boundingSphere.expandByPoint(Ul)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,n){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gd.copy(this.boundingSphere),Gd.applyMatrix4(s),e.ray.intersectsSphere(Gd)!==!1&&(i0.copy(s).invert(),Hd.copy(e.ray).applyMatrix4(i0),!(this.boundingBox!==null&&Hd.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,Hd)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new yt,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){e.fromBufferAttribute(n,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===qd?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Y0?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ce("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let i=this.skeleton,s=this.geometry;e0.fromBufferAttribute(s.attributes.skinIndex,e),t0.fromBufferAttribute(s.attributes.skinWeight,e),n.isVector4?(Ko.copy(n),n.set(0,0,0,0)):(Ko.set(n.x,n.y,n.z,1),n.set(0,0,0)),Ko.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=t0.getComponent(r);if(a!==0){let o=e0.getComponent(r);n0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(VS.copy(Ko).applyMatrix4(n0),a)}}return n.isVector4&&(n.w=Ko.w),n.applyMatrix4(this.bindMatrixInverse)}},Ya=class extends Ct{constructor(){super(),this.isBone=!0,this.type="Bone"}},lr=class extends rn{constructor(e=null,n=1,i=1,s,r,a,o,c,l=qt,h=qt,d,u){super(null,a,o,c,l,h,s,r,d,u),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},s0=new Xe,WS=new Xe,cc=class t{constructor(e=[],n=[]){this.uuid=Ji(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ce("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new Xe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let i=new Xe;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:WS;s0.multiplyMatrices(o,n[r]),s0.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let i=new lr(n,e,e,yi,Ln);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){let s=this.bones[n];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=n[r];a===void 0&&(Ce("Skeleton: No bone found with UUID:",r),a=new Ya),this.bones.push(a),this.boneInverses.push(new Xe().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let s=0,r=n.length;s<r;s++){let a=n[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},As=class extends yn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},Na=new Xe,r0=new Xe,Fl=[],a0=new _n,XS=new Xe,jo=new Et,Zo=new In,kr=class extends Et{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new As(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,XS)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new _n),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Na),a0.copy(e.boundingBox).applyMatrix4(Na),this.boundingBox.union(a0)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new In),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,Na),Zo.copy(e.boundingSphere).applyMatrix4(Na),this.boundingSphere.union(Zo)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(jo.geometry=this.geometry,jo.material=this.material,jo.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Zo.copy(this.boundingSphere),Zo.applyMatrix4(i),e.ray.intersectsSphere(Zo)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,Na),r0.multiplyMatrices(i,Na),jo.matrixWorld=r0,jo.raycast(e,Fl);for(let a=0,o=Fl.length;a<o;a++){let c=Fl[a];c.instanceId=r,c.object=this,n.push(c)}Fl.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new As(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new lr(new Float32Array(s*this.count),s,this.count,Mh,Ln));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Nr=new In,qS=new Ye(.5,.5),Ol=new U,hr=class{constructor(e=new Ni,n=new Ni,i=new Ni,s=new Ni,r=new Ni,a=new Ni){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=vi,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-g,w-M).normalize(),s[1].setComponents(l+a,f+h,p+g,w+M).normalize(),s[2].setComponents(l+o,f+d,p+v,w+A).normalize(),s[3].setComponents(l-o,f-d,p-v,w-A).normalize(),i)s[4].setComponents(c,u,m,b).normalize(),s[5].setComponents(l-c,f-u,p-m,w-b).normalize();else if(s[4].setComponents(l-c,f-u,p-m,w-b).normalize(),n===vi)s[5].setComponents(l+c,f+u,p+m,w+b).normalize();else if(n===za)s[5].setComponents(c,u,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Nr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Nr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Nr)}intersectsSprite(e){Nr.center.set(0,0,0);let n=qS.distanceTo(e.center);return Nr.radius=.7071067811865476+n,Nr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Nr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ol.x=s.normal.x>0?e.max.x:e.min.x,Ol.y=s.normal.y>0?e.max.y:e.min.y,Ol.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ol)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},o0=new Xe,nh=class t{constructor(){this.coordinateSystem=vi,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];o0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new hr),i[s].setFromProjectionMatrix(o0,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new hr),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}},Ka=class extends On{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Be(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},ih=new U,sh=new U,c0=new Xe,Jo=new cr,Bl=new In,Vd=new U,l0=new U,zr=class extends Ct{constructor(e=new Pn,n=new Ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)ih.fromBufferAttribute(n,s-1),sh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=ih.distanceTo(sh);e.setAttribute("lineDistance",new Xt(i,1))}else Ce("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Bl.copy(i.boundingSphere),Bl.applyMatrix4(s),Bl.radius+=r,e.ray.intersectsSphere(Bl)===!1)return;c0.copy(s).invert(),Jo.copy(e.ray).applyMatrix4(c0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){let p=h.getX(v),M=h.getX(v+1),A=kl(this,e,Jo,c,p,M,v);A&&n.push(A)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=kl(this,e,Jo,c,v,m,g-1);p&&n.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){let p=kl(this,e,Jo,c,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){let v=kl(this,e,Jo,c,g-1,f,g-1);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};h0=new U,u0=new U,lc=class extends zr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)h0.fromBufferAttribute(n,s),u0.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+h0.distanceTo(u0);e.setAttribute("lineDistance",new Xt(i,1))}else Ce("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},hc=class extends zr{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},ja=class extends On{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Be(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},d0=new Xe,Zd=new cr,zl=new In,Gl=new U,uc=class extends Ct{constructor(e=new Pn,n=new ja){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),zl.copy(i.boundingSphere),zl.applyMatrix4(s),zl.radius+=r,e.ray.intersectsSphere(zl)===!1)return;d0.copy(s).invert(),Zd.copy(e.ray).applyMatrix4(d0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,d=i.attributes.position;if(l!==null){let u=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=l.getX(g);Gl.fromBufferAttribute(d,m),f0(Gl,m,c,s,e,n,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Gl.fromBufferAttribute(d,g),f0(Gl,g,c,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};dc=class extends rn{constructor(e=[],n=$r,i,s,r,a,o,c,l,h){super(e,n,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},fc=class extends rn{constructor(e,n,i,s,r,a,o,c,l){super(e,n,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},ws=class extends rn{constructor(e,n,i=Ui,s,r,a,o=qt,c=qt,l,h=Es,d=1){if(h!==Es&&h!==Ns)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:n,depth:d};super(u,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Va(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},pc=class extends ws{constructor(e,n=Ui,i=$r,s,r,a=qt,o=qt,c,l=Es){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,n,i,s,r,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},mc=class extends rn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},ur=class t extends Pn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new Xt(l,3)),this.setAttribute("normal",new Xt(h,3)),this.setAttribute("uv",new Xt(d,2));function g(v,m,p,M,A,b,w,E,_,S,N){let I=b/_,L=w/S,O=b/2,H=w/2,R=E/2,z=_+1,G=S+1,V=0,ee=0,X=new U;for(let Z=0;Z<G;Z++){let Q=Z*L-H;for(let ye=0;ye<z;ye++){let De=ye*I-O;X[v]=De*M,X[m]=Q*A,X[p]=R,l.push(X.x,X.y,X.z),X[v]=0,X[m]=0,X[p]=E>0?1:-1,h.push(X.x,X.y,X.z),d.push(ye/_),d.push(1-Z/S),V+=1}}for(let Z=0;Z<S;Z++)for(let Q=0;Q<_;Q++){let ye=u+Q+z*Z,De=u+Q+z*(Z+1),Y=u+(Q+1)+z*(Z+1),ge=u+(Q+1)+z*Z;c.push(ye,De,ge),c.push(De,Y,ge),ee+=6}o.addGroup(f,ee,N),f+=ee,u+=V}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},gc=class t extends Pn{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],o=[],c=[],l=new U,h=new Ye;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,u=3;d<=n;d++,u+=3){let f=i+d/n*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[u]/e+1)/2,h.y=(a[u+1]/e+1)/2,c.push(h.x,h.y)}for(let d=1;d<=n;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new Xt(a,3)),this.setAttribute("normal",new Xt(o,3)),this.setAttribute("uv",new Xt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Gr=class t extends Pn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,d=e/o,u=n/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*u-a;for(let A=0;A<l;A++){let b=A*d-r;g.push(b,-M,0),v.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let A=M+l*p,b=M+l*(p+1),w=M+1+l*(p+1),E=M+1+l*p;f.push(A,b,E),f.push(b,w,E)}this.setIndex(f),this.setAttribute("position",new Xt(g,3)),this.setAttribute("normal",new Xt(v,3)),this.setAttribute("uv",new Xt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},_c=class t extends Pn{constructor(e=.5,n=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],d=e,u=(n-e)/s,f=new U,g=new Ye;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let M=p+m,A=M,b=M+i+1,w=M+i+2,E=M+1;o.push(A,b,E),o.push(b,w,E)}}this.setIndex(o),this.setAttribute("position",new Xt(c,3)),this.setAttribute("normal",new Xt(l,3)),this.setAttribute("uv",new Xt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};l_={clone:jr,merge:Nn},YS=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,KS=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,$i=class extends On{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=YS,this.fragmentShader=KS,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=jr(e.uniforms),this.uniformsGroups=$S(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new Be().setHex(s.value);break;case"v2":this.uniforms[i].value=new Ye().fromArray(s.value);break;case"v3":this.uniforms[i].value=new U().fromArray(s.value);break;case"v4":this.uniforms[i].value=new yt().fromArray(s.value);break;case"m3":this.uniforms[i].value=new He().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Xe().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},rh=class extends $i{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Yi=class extends On{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Be(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Bn=class extends Yi{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ye(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return nt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new Be(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Be(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Be(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return Dr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){Dr('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},xc=class extends On{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new Be(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Be(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Fc,this.normalScale=new Ye(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qi,this.combine=gh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},ah=class extends On{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=j0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},oh=class extends On{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};Ki=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break t}a=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},ch=class extends Ki{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Yd,endingEnd:Yd}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Kd:r=e,o=2*n-i;break;case jd:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case Kd:a=e,c=2*i-n;break;case jd:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,M=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,A=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[l+w]+A*a[c+w]+b*a[d+w];return r}},lh=class extends Ki{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-n)/(s-n),d=1-h;for(let u=0;u!==o;++u)r[u]=a[l+u]*d+a[c+u]*h;return r}},hh=class extends Ki{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},uh=class extends Ki{interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-n)/(s-n),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=f*u+g*2,M=d[p],A=d[p+1],b=e*u+g*2,w=h[b],E=h[b+1],_=QS(i,n,M,w,s);r[g]=h_(_,v,A,E,m)}return r}};jn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sr(n,this.TimeBufferType),this.values=sr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:sr(e.times,Array),values:sr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),Qo(e.settings)&&(i.settings={inTangents:sr(e.settings.inTangents,Array),outTangents:sr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new hh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new lh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new ch(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new uh(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Ur:n=this.InterpolantFactoryMethodDiscrete;break;case Fr:n=this.InterpolantFactoryMethodLinear;break;case Wl:n=this.InterpolantFactoryMethodSmooth;break;case $d:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ce("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Ur;case this.InterpolantFactoryMethodLinear:return Fr;case this.InterpolantFactoryMethodSmooth:return Wl;case this.InterpolantFactoryMethodBezier:return $d}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;Qo(this.settings)&&(g0(this.settings.inTangents,e),g0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;Qo(this.settings)&&(_0(this.settings.inTangents,e),_0(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ge("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ge("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ge("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ge("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&oS(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ge("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===Wl,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let v=n[d+g];if(v!==n[u+g]||v!==n[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)n[u+f]=n[d+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)n[c+l]=n[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,Qo(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};jn.prototype.ValueTypeName="";jn.prototype.TimeBufferType=Float32Array;jn.prototype.ValueBufferType=Float32Array;jn.prototype.DefaultInterpolation=Fr;Rs=class extends jn{constructor(e,n,i){super(e,n,i)}};Rs.prototype.ValueTypeName="bool";Rs.prototype.ValueBufferType=Array;Rs.prototype.DefaultInterpolation=Ur;Rs.prototype.InterpolantFactoryMethodLinear=void 0;Rs.prototype.InterpolantFactoryMethodSmooth=void 0;vc=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};vc.prototype.ValueTypeName="color";Cs=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};Cs.prototype.ValueTypeName="number";dh=class extends Ki{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-n)/(s-n),l=e*o;for(let h=l+o;l!==h;l+=4)Fn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Is=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new dh(this.times,this.values,this.getValueSize(),e)}};Is.prototype.ValueTypeName="quaternion";Is.prototype.InterpolantFactoryMethodSmooth=void 0;Ps=class extends jn{constructor(e,n,i){super(e,n,i)}};Ps.prototype.ValueTypeName="string";Ps.prototype.ValueBufferType=Array;Ps.prototype.DefaultInterpolation=Ur;Ps.prototype.InterpolantFactoryMethodLinear=void 0;Ps.prototype.InterpolantFactoryMethodSmooth=void 0;dr=class extends jn{constructor(e,n,i,s){super(e,n,i,s)}};dr.prototype.ValueTypeName="vector";yc=class{constructor(e="",n=-1,i=[],s=K0){this.name=e,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=Ji(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let n=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)n.push(tM(i[a]).scale(s));let r=new this(e.name,e.duration,n,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let n=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)n.push(jn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,n,i,s){let r=n.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=jS(c);c=m0(c,1,h),l=m0(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Cs(".morphTargetInfluences["+n[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,n){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,n,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let d=h[1],u=s[d];u||(s[d]=u=[]),u.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],n,i));return a}resetDuration(){let e=this.tracks,n=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];n=Math.max(n,r.times[r.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}};Wi={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(x0(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!x0(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};fh=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,d){return l.push(h,d),this},this.removeHandler=function(h){let d=l.indexOf(h);return d!==-1&&l.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=l.length;d<u;d+=2){let f=l[d],g=l[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},u_=new fh,Di=class{constructor(e){this.manager=e!==void 0?e:u_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Di.DEFAULT_MATERIAL_NAME="__DEFAULT";Ms={},Jd=class extends Error{constructor(e,n){super(e),this.response=n}},Hr=class extends Di{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Wi.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0);return}if(Ms[e]!==void 0){Ms[e].push({onLoad:n,onProgress:i,onError:s});return}Ms[e]=[],Ms[e].push({onLoad:n,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ce("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Ms[e],d=l.body.getReader(),u=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=u?parseInt(u):0,g=f!==0,v=0,m=new ReadableStream({start(p){M();function M(){d.read().then(({done:A,value:b})=>{if(A)p.close();else{v+=b.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,_=h.length;E<_;E++){let S=h[E];S.onProgress&&S.onProgress(w)}p.enqueue(b),M()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Jd(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let d=/charset="?([^;"\s]*)"?/i.exec(o),u=d&&d[1]?d[1].toLowerCase():void 0,f=new TextDecoder(u);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Wi.add(`file:${e}`,l);let h=Ms[e];delete Ms[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Ms[e];if(h===void 0)throw this.manager.itemError(e),l;delete Ms[e];for(let d=0,u=h.length;d<u;d++){let f=h[d];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Da=new WeakMap,ph=class extends Di{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);else{let d=Da.get(a);d===void 0&&(d=[],Da.set(a,d)),d.push({onLoad:n,onError:s})}return a}let o=Ga("img");function c(){h(),n&&n(this);let d=Da.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Da.delete(this),r.manager.itemEnd(e)}function l(d){h(),s&&s(d),Wi.remove(`image:${e}`);let u=Da.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Da.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Wi.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Sc=class extends Di{constructor(e){super(e)}load(e,n,i,s){let r=this,a=new lr,o=new Hr(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Ge(h);return}r._applyTexData(a,l),n&&n(a,l)},i,s),a}createDataTexture(e){let n=new lr;return this._applyTexData(n,this.parse(e)),n}_applyTexData(e,n){n.image!==void 0?e.image=n.image:n.data!==void 0&&(e.image.width=n.width,e.image.height=n.height,e.image.data=n.data),e.wrapS=n.wrapS!==void 0?n.wrapS:$n,e.wrapT=n.wrapT!==void 0?n.wrapT:$n,e.magFilter=n.magFilter!==void 0?n.magFilter:Rt,e.minFilter=n.minFilter!==void 0?n.minFilter:Rt,e.anisotropy=n.anisotropy!==void 0?n.anisotropy:1,n.colorSpace!==void 0&&(e.colorSpace=n.colorSpace),n.flipY!==void 0&&(e.flipY=n.flipY),n.format!==void 0&&(e.format=n.format),n.type!==void 0&&(e.type=n.type),n.mipmaps!==void 0&&(e.mipmaps=n.mipmaps,e.minFilter=oi),n.mipmapCount===1&&(e.minFilter=Rt),n.generateMipmaps!==void 0&&(e.generateMipmaps=n.generateMipmaps),e.needsUpdate=!0}},Mc=class extends Di{constructor(e){super(e)}load(e,n,i,s){let r=new rn,a=new ph(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}},Za=class extends Ct{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new Be(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},Wd=new Xe,v0=new U,y0=new U,Ja=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ye(512,512),this.mapType=Zn,this.map=null,this.mapPass=null,this.matrix=new Xe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new hr,this._frameExtents=new Ye(1,1),this._viewportCount=1,this._viewports=[new yt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;v0.setFromMatrixPosition(e.matrixWorld),n.position.copy(v0),y0.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(y0),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,s){Wd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(Wd,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===za||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(Wd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Hl=new U,Vl=new Fn,Vi=new U,bc=class extends Ct{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Xe,this.projectionMatrix=new Xe,this.projectionMatrixInverse=new Xe,this.coordinateSystem=vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Hl,Vl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(Hl,Vl,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Hl,Vl,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ir=new U,S0=new Ye,M0=new Ye,sn=class extends bc{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=Or*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(ec*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Or*2*Math.atan(Math.tan(ec*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){ir.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(ir.x,ir.y).multiplyScalar(-e/ir.z),ir.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ir.x,ir.y).multiplyScalar(-e/ir.z)}getViewSize(e,n){return this.getViewBounds(e,S0,M0),n.subVectors(M0,S0)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(ec*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},Qd=class extends Ja{constructor(){super(new sn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let n=this.camera,i=Or*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Tc=class extends Za{constructor(e,n,i=0,s=Math.PI/3,r=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new Qd}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}},ef=class extends Ja{constructor(){super(new sn(90,1,.5,500)),this.isPointLightShadow=!0}},Vr=class extends Za{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new ef}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},Wr=class extends bc{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},tf=class extends Ja{constructor(){super(new Wr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},fr=class extends Za{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ct.DEFAULT_UP),this.updateMatrix(),this.target=new Ct,this.shadow=new tf}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},Ls=class{static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}},Xd=new WeakMap,Ec=class extends Di{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ce("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ce("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Wi.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{Xd.has(a)===!0?(s&&s(Xd.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(n&&n(l),r.manager.itemEnd(e))});return}setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Wi.add(`image-bitmap:${e}`,l),n&&n(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),Xd.set(c,l),Wi.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Wi.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ua=-90,Fa=1,Qa=class extends Ct{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new sn(Ua,Fa,e,n);s.layers=this.layers,this.add(s);let r=new sn(Ua,Fa,e,n);r.layers=this.layers,this.add(r);let a=new sn(Ua,Fa,e,n);a.layers=this.layers,this.add(a);let o=new sn(Ua,Fa,e,n);o.layers=this.layers,this.add(o);let c=new sn(Ua,Fa,e,n);c.layers=this.layers,this.add(c);let l=new sn(Ua,Fa,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(let l of n)this.remove(l);if(e===vi)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===za)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},mh=class extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},Ff="\\[\\]\\.:\\/",nM=new RegExp("["+Ff+"]","g"),Of="[^"+Ff+"]",iM="[^"+Ff.replace("\\.","")+"]",sM=/((?:WC+[\/:])*)/.source.replace("WC",Of),rM=/(WCOD+)?/.source.replace("WCOD",iM),aM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Of),oM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Of),cM=new RegExp("^"+sM+rM+aM+oM+"$"),lM=["material","materials","bones","map"],nf=class{constructor(e,n,i){let s=i||Tt.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Tt=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(nM,"")}static parseTrackName(e){let n=cM.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);lM.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ce("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ge("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ge("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ge("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ge("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ge("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ge("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=n.nodeName;Ge("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ge("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Tt.Composite=nf;Tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Tt.prototype.GetterByBindingType=[Tt.prototype._getValue_direct,Tt.prototype._getValue_array,Tt.prototype._getValue_arrayElement,Tt.prototype._getValue_toArray];Tt.prototype.SetterByBindingTypeAndVersioning=[[Tt.prototype._setValue_direct,Tt.prototype._setValue_direct_setNeedsUpdate,Tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_array,Tt.prototype._setValue_array_setNeedsUpdate,Tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_arrayElement,Tt.prototype._setValue_arrayElement_setNeedsUpdate,Tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Tt.prototype._setValue_fromArray,Tt.prototype._setValue_fromArray_setNeedsUpdate,Tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];Jw=new Float32Array(1),b0=new Xe,Ac=class{constructor(e,n,i=0,s=1/0){this.ray=new cr(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new Wa,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ge("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return b0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(b0),this}intersectObject(e,n=!0,i=[]){return sf(e,this,i,n),i.sort(T0),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)sf(e[s],this,i,n);return i.sort(T0),i}};rf=class{static{this.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ce("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function N_(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function dM(t){let e=new WeakMap;function n(o,c){let l=o.array,h=o.usage,d=l.byteLength,u=t.createBuffer();t.bindBuffer(c,u),t.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:u,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,c,l){let h=c.array,d=c.updateRanges;if(t.bindBuffer(l,o),d.length===0)t.bufferSubData(l,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];t.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function $b(t,e,n,i,s,r){let a=new Be(0),o=s===!0?0:1,c,l,h=null,d=0,u=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(M){let A=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);let w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(M,A){let b=f(A);b&&b.isCubeTexture?(l===void 0&&(l=new Et(new ur(1,1,1),new $i({name:"BackgroundCubeMaterial",uniforms:jr(es.backgroundCube.uniforms),vertexShader:es.backgroundCube.vertexShader,fragmentShader:es.backgroundCube.fragmentShader,side:Mn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(qb.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(D_),l.material.toneMapped=Je.getTransfer(b.colorSpace)!==_t,(h!==b||d!==b.version||u!==t.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new Et(new Gr(2,2),new $i({name:"BackgroundMaterial",uniforms:jr(es.background.uniforms),vertexShader:es.background.vertexShader,fragmentShader:es.background.fragmentShader,side:ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Je.getTransfer(b.colorSpace)!==_t,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||u!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,u=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(iu,Uf(t)),n.buffers.color.setClear(iu.r,iu.g,iu.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function Yb(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(L,O,H,R,z){let G=!1,V=d(L,R,H,O);r!==V&&(r=V,l(r.object)),G=f(L,R,H,z),G&&g(L,R,H,z),z!==null&&e.update(z,t.ELEMENT_ARRAY_BUFFER),(G||a)&&(a=!1,b(L,O,H,R),z!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function c(){return t.createVertexArray()}function l(L){return t.bindVertexArray(L)}function h(L){return t.deleteVertexArray(L)}function d(L,O,H,R){let z=R.wireframe===!0,G=i[O.id];G===void 0&&(G={},i[O.id]=G);let V=L.isInstancedMesh===!0?L.id:0,ee=G[V];ee===void 0&&(ee={},G[V]=ee);let X=ee[H.id];X===void 0&&(X={},ee[H.id]=X);let Z=X[z];return Z===void 0&&(Z=u(c()),X[z]=Z),Z}function u(L){let O=[],H=[],R=[];for(let z=0;z<n;z++)O[z]=0,H[z]=0,R[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:O,enabledAttributes:H,attributeDivisors:R,object:L,attributes:{},index:null}}function f(L,O,H,R){let z=r.attributes,G=O.attributes,V=0,ee=H.getAttributes();for(let X in ee)if(ee[X].location>=0){let Q=z[X],ye=G[X];if(ye===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(ye=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(ye=L.instanceColor)),Q===void 0||Q.attribute!==ye||ye&&Q.data!==ye.data)return!0;V++}return r.attributesNum!==V||r.index!==R}function g(L,O,H,R){let z={},G=O.attributes,V=0,ee=H.getAttributes();for(let X in ee)if(ee[X].location>=0){let Q=G[X];Q===void 0&&(X==="instanceMatrix"&&L.instanceMatrix&&(Q=L.instanceMatrix),X==="instanceColor"&&L.instanceColor&&(Q=L.instanceColor));let ye={};ye.attribute=Q,Q&&Q.data&&(ye.data=Q.data),z[X]=ye,V++}r.attributes=z,r.attributesNum=V,r.index=R}function v(){let L=r.newAttributes;for(let O=0,H=L.length;O<H;O++)L[O]=0}function m(L){p(L,0)}function p(L,O){let H=r.newAttributes,R=r.enabledAttributes,z=r.attributeDivisors;H[L]=1,R[L]===0&&(t.enableVertexAttribArray(L),R[L]=1),z[L]!==O&&(t.vertexAttribDivisor(L,O),z[L]=O)}function M(){let L=r.newAttributes,O=r.enabledAttributes;for(let H=0,R=O.length;H<R;H++)O[H]!==L[H]&&(t.disableVertexAttribArray(H),O[H]=0)}function A(L,O,H,R,z,G,V){V===!0?t.vertexAttribIPointer(L,O,H,z,G):t.vertexAttribPointer(L,O,H,R,z,G)}function b(L,O,H,R){v();let z=R.attributes,G=H.getAttributes(),V=O.defaultAttributeValues;for(let ee in G){let X=G[ee];if(X.location>=0){let Z=z[ee];if(Z===void 0&&(ee==="instanceMatrix"&&L.instanceMatrix&&(Z=L.instanceMatrix),ee==="instanceColor"&&L.instanceColor&&(Z=L.instanceColor)),Z!==void 0){let Q=Z.normalized,ye=Z.itemSize,De=e.get(Z);if(De===void 0)continue;let Y=De.buffer,ge=De.type,be=De.bytesPerElement,Fe=ge===t.INT||ge===t.UNSIGNED_INT||Z.gpuType===vh;if(Z.isInterleavedBufferAttribute){let xe=Z.data,qe=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,Kt=Z.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let ze=0;ze<X.locationSize;ze++)p(X.location+ze,xe.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let ze=0;ze<X.locationSize;ze++)m(X.location+ze);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let ze=0;ze<X.locationSize;ze++)A(X.location+ze,ye/X.locationSize,ge,Q,qe*be,(Kt+ye/X.locationSize*ze)*be,Fe)}else{if(Z.isInstancedBufferAttribute){for(let xe=0;xe<X.locationSize;xe++)p(X.location+xe,Z.meshPerAttribute);L.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let xe=0;xe<X.locationSize;xe++)m(X.location+xe);t.bindBuffer(t.ARRAY_BUFFER,Y);for(let xe=0;xe<X.locationSize;xe++)A(X.location+xe,ye/X.locationSize,ge,Q,ye*be,ye/X.locationSize*xe*be,Fe)}}else if(V!==void 0){let Q=V[ee];if(Q!==void 0)switch(Q.length){case 2:t.vertexAttrib2fv(X.location,Q);break;case 3:t.vertexAttrib3fv(X.location,Q);break;case 4:t.vertexAttrib4fv(X.location,Q);break;default:t.vertexAttrib1fv(X.location,Q)}}}}M()}function w(){N();for(let L in i){let O=i[L];for(let H in O){let R=O[H];for(let z in R){let G=R[z];for(let V in G)h(G[V].object),delete G[V];delete R[z]}}delete i[L]}}function E(L){if(i[L.id]===void 0)return;let O=i[L.id];for(let H in O){let R=O[H];for(let z in R){let G=R[z];for(let V in G)h(G[V].object),delete G[V];delete R[z]}}delete i[L.id]}function _(L){for(let O in i){let H=i[O];for(let R in H){let z=H[R];if(z[L.id]===void 0)continue;let G=z[L.id];for(let V in G)h(G[V].object),delete G[V];delete z[L.id]}}}function S(L){for(let O in i){let H=i[O],R=L.isInstancedMesh===!0?L.id:0,z=H[R];if(z!==void 0){for(let G in z){let V=z[G];for(let ee in V)h(V[ee].object),delete V[ee];delete z[G]}delete H[R],Object.keys(H).length===0&&delete i[O]}}}function N(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:N,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function Kb(t,e,n){let i;function s(c){i=c}function r(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,h){h!==0&&(t.drawArraysInstanced(i,c,l,h),n.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let u=0;for(let f=0;f<h;f++)u+=l[f];n.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function jb(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==yi&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===zn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==Zn&&_!==Ln&&!S&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);h!==l&&(Ce("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let d=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),u=n.logarithmicDepthBuffer===!0&&d===!1;n.reversedDepthBuffer===!0&&d===!1&&Ce("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&d===!0&&Ce("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:E}}function Zb(t){let e=this,n=null,i=0,s=!1,r=!1,a=new Ni,o=new He,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){n=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=t.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,A=M*4,b=p.clippingState||null;c.value=b,b=h(g,u,A,f);for(let w=0;w!==A;++w)b[w]=n[w];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,M=u.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=f;A!==v;++A,b+=4)a.copy(d[A]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function f_(t,e,n){return new kc(t,{minFilter:oi,generateMipmaps:e,type:zn,colorSpace:Sn,depthBuffer:n})}function zc(t,e,n){return new $i({name:t,uniforms:e,vertexShader:Ze.cube_vert,fragmentShader:n,side:Mn,blending:Xr,depthTest:!1,depthWrite:!1})}function i3(){return zc("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${U_}u

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float lodBias;

		#include <common>

		// Van der Corput radical inverse
		float radicalInverse_VdC( uint bits ) {

			bits = ( bits << 16u ) | ( bits >> 16u );
			bits = ( ( bits & 0x55555555u ) << 1u ) | ( ( bits & 0xAAAAAAAAu ) >> 1u );
			bits = ( ( bits & 0x33333333u ) << 2u ) | ( ( bits & 0xCCCCCCCCu ) >> 2u );
			bits = ( ( bits & 0x0F0F0F0Fu ) << 4u ) | ( ( bits & 0xF0F0F0F0u ) >> 4u );
			bits = ( ( bits & 0x00FF00FFu ) << 8u ) | ( ( bits & 0xFF00FF00u ) >> 8u );
			return float( bits ) * 2.3283064365386963e-10; // / 0x100000000

		}

		// Hammersley sequence
		vec2 hammersley( uint i, uint N ) {

			return vec2( float( i ) / float( N ), radicalInverse_VdC( i ) );

		}

		void main() {

			vec3 N = normalize( vWorldDirection );

			// For very low roughness, just sample the environment directly
			if ( roughness < 0.001 ) {

				gl_FragColor = vec4( textureLod( envMap, N, 0.0 ).rgb, 1.0 );
				return;

			}

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			// Tangent space basis for VNDF sampling
			vec3 up = abs( N.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, N ) );
			vec3 bitangent = cross( N, tangent );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			for ( uint i = 0u; i < GGX_SAMPLES; i ++ ) {

				vec2 Xi = hammersley( i, GGX_SAMPLES );

				// With V = N, sample the reflected direction directly.
				float invQ = 1.0 / ( 1.0 - Xi.x + alpha2 * Xi.x );
				float NdotL = ( 1.0 - Xi.x - alpha2 * Xi.x ) * invQ;

				if ( NdotL > 0.0 ) {

					float phi = 2.0 * PI * Xi.y;
					float sinTheta = 2.0 * alpha * sqrt( Xi.x * ( 1.0 - Xi.x ) ) * invQ;
					vec3 L = N * NdotL + ( tangent * cos( phi ) + bitangent * sin( phi ) ) * sinTheta;

					// Match the source mip to the sample's solid angle. The terms
					// independent of the sample are precomputed in lodBias.
					float d = alpha2 * invQ;
					float lod = max( log2( d ) + lodBias, 0.0 );

					// Weight by NdotL for the split-sum approximation
					prefilteredColor += textureLod( envMap, L, lod ).rgb * NdotL;
					totalWeight += NdotL;

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function s3(){return zc("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:F_}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float roughness;
		uniform float sourceLod;
		uniform int sourceSize;

		void main() {

			vec3 N = normalize( vWorldDirection );

			float alpha = roughness * roughness;
			float alpha2 = alpha * alpha;

			float texelSize = 2.0 / float( sourceSize );

			vec3 prefilteredColor = vec3( 0.0 );
			float totalWeight = 0.0;

			// Pair opposite texels: only the one in N's hemisphere contributes.
			for ( int face = 0; face < 3; face ++ ) {

				for ( int y = 0; y < sourceSize; y ++ ) {

					for ( int x = 0; x < sourceSize; x ++ ) {

						vec2 uv = ( vec2( x, y ) + 0.5 ) * texelSize - 1.0;
						vec3 texelDirection = face == 0 ? vec3( 1.0, uv ) : ( face == 1 ? vec3( uv.x, 1.0, uv.y ) : vec3( uv, 1.0 ) );

						float invDistance = inversesqrt( 1.0 + dot( uv, uv ) );
						float NdotL = dot( N, texelDirection );
						texelDirection *= NdotL < 0.0 ? - 1.0 : 1.0;
						NdotL = abs( NdotL ) * invDistance;

						// With V = N, NdotH squared is ( 1 + NdotL ) / 2. Common factors
						// in the GGX distribution and texel solid angle cancel when normalized.
						float d = 1.0 + alpha2 + ( alpha2 - 1.0 ) * NdotL;
						float weight = NdotL * invDistance * invDistance * invDistance / ( d * d );

						prefilteredColor += textureLod( envMap, texelDirection, sourceLod ).rgb * weight;
						totalWeight += weight;

					}

				}

			}

			gl_FragColor = vec4( prefilteredColor / totalWeight, 1.0 );

		}
	`)}function r3(){return zc("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${Qb}
		#define GOLDEN_ANGLE 2.39996322973

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float sigma;

		#include <common>

		void main() {

			vec3 outputDirection = normalize( vWorldDirection );

			vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
			vec3 tangent = normalize( cross( up, outputDirection ) );
			vec3 bitangent = cross( outputDirection, tangent );

			// Truncate the kernel at three standard deviations or at the antipode.
			float thetaMax = min( 3.0 * sigma, PI );
			float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

			vec3 accumColor = vec3( 0.0 );
			float accumWeight = 0.0;

			for ( int i = 0; i < SAMPLES; i ++ ) {

				// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
				float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
				float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
				float phi = float( i ) * GOLDEN_ANGLE;

				vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
				vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

				// Correct the planar sample density to solid angle.
				float weight = sin( theta ) / theta;

				accumColor += weight * textureLod( envMap, sampleDirection, 0.0 ).rgb;
				accumWeight += weight;

			}

			gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

		}
	`)}function p_(){return zc("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

		varying vec3 vWorldDirection;

		uniform sampler2D envMap;

		#include <common>

		void main() {

			// Average four subpixel samples to preserve small, bright features.
			vec3 direction = normalize( vWorldDirection );
			vec3 dx = dFdx( direction ) * 0.25;
			vec3 dy = dFdy( direction ) * 0.25;

			vec3 color = textureLod( envMap, equirectUv( normalize( direction - dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx - dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction - dx + dy ) ), 0.0 ).rgb;
			color += textureLod( envMap, equirectUv( normalize( direction + dx + dy ) ), 0.0 ).rgb;
			gl_FragColor = vec4( color * 0.25, 1.0 );

		}
	`)}function m_(){return zc("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function a3(t){let e=new WeakMap,n=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===io||f===_h)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new kc(g.height);return v.fromEquirectangularTexture(t,u),e.set(u,v),u.addEventListener("dispose",l),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture&&u.isPMREMTexture!==!0){let f=u.mapping,g=f===io||f===_h,v=f===$r||f===no;if(g||v){let m=n.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new lo(t)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),m.texture;if(m!==void 0)return m.texture;{let M=u.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new lo(t)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,n.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===io?u.mapping=$r:f===_h&&(u.mapping=no),u}function c(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function l(u){let f=u.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function d(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function o3(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&Dr("WebGLRenderer: "+i+" extension not supported."),s}}}function c3(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function l(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)e.update(v[m],t.ARRAY_BUFFER)}function d(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let M=v!==null?v.array.length:m.array.length/3-1,A=m.count>=65535?ac:rc,b=new A(Math.ceil(M/3)*6,1),w=b.array;if(v!==null){let _=v.array;p=v.version;for(let S=0,N=0;S<M;S+=3){let I=_[S+0],L=_[S+1],O=_[S+2];w[N++]=I,w[N++]=L,w[N++]=L,w[N++]=O,w[N++]=O,w[N++]=I}}else{p=m.version;for(let _=0,S=0;_<M;_+=3){let N=_+0,I=_+1,L=_+2;w[S++]=N,w[S++]=I,w[S++]=I,w[S++]=L,w[S++]=L,w[S++]=N}}b.version=p;let E=r.get(g);E&&e.remove(E),r.set(g,b)}function u(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&d(g)}else d(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:u,dispose:f}}function l3(t,e,n){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function c(d,u){t.drawElements(i,u,r,d*a),n.update(u,i,1)}function l(d,u,f){f!==0&&(t.drawElementsInstanced(i,u,r,d*a,f),n.update(u,i,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];n.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function h3(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ge("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function u3(t,e,n){let i=new WeakMap,s=new yt;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let N=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",N)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let b=o.attributes.position.count*A,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*w*4*d),_=new sc(E,b,w,d);_.type=Ln,_.needsUpdate=!0;let S=A*4;for(let I=0;I<d;I++){let L=m[I],O=p[I],H=M[I],R=b*w*4*I;for(let z=0;z<L.count;z++){let G=z*S;f===!0&&(s.fromBufferAttribute(L,z),E[R+G+0]=s.x,E[R+G+1]=s.y,E[R+G+2]=s.z,E[R+G+3]=0),g===!0&&(s.fromBufferAttribute(O,z),E[R+G+4]=s.x,E[R+G+5]=s.y,E[R+G+6]=s.z,E[R+G+7]=0),v===!0&&(s.fromBufferAttribute(H,z),E[R+G+8]=s.x,E[R+G+9]=s.y,E[R+G+10]=s.z,E[R+G+11]=H.itemSize===4?s.w:1)}}u={count:d,texture:_,size:new Ye(b,w)},i.set(o,u),o.addEventListener("dispose",N)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",u.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",u.size)}return{update:r}}function d3(t,e,n,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,d=l.geometry,u=e.get(l,d);if(r.get(u)!==h&&(e.update(u),r.set(u,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}function p3(t,e,n,i,s,r){let a=new ai(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Pn;h.setAttribute("position",new Xt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Xt([0,2,0,0,2,0],2));let d=new rh({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new Et(h,d),f=new Wr(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,M=null,A=[],b=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),c!==null&&c.setSize(w,E);for(let _=0;_<A.length;_++){let S=A[_];S.setSize&&S.setSize(w,E)}},this.setEffects=function(w){A=w,b=A.length>0&&A[0].isRenderPass===!0;let E=a.width,_=a.height;A.length>0&&o===null&&(o=new ai(E,_,{type:zn,depthBuffer:!1,stencilBuffer:!1}),c=new ai(E,_,{type:zn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(N=>N.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new ws(E,_),r===!0&&(l.format=Ns,l.type=Kr)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let N=0;N<A.length;N++){let I=A[N];I.setSize&&I.setSize(E,_),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(w,E){if(m||w.toneMapping===Zi&&A.length===0)return!1;if(M=E,E!==null){let _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=Zi,!0},this.hasRenderPass=function(){return b},this.end=function(w,E){w.toneMapping=p,m=!0;let _=a,S=o;for(let N=0;N<A.length;N++){let I=A[N];I.enabled!==!1&&(I.render(w,S,_,E),I.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,d.defines={},Je.getTransfer(g)===_t&&(d.defines.SRGB_TRANSFER="");let N=f3[v];N&&(d.defines[N]=""),d.needsUpdate=!0}d.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(u,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),d.dispose()}}function ho(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=g_[s];if(r===void 0&&(r=new Float32Array(s),g_[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function an(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function on(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function au(t,e){let n=__[e];n===void 0&&(n=new Int32Array(e),__[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function m3(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function g3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2fv(this.addr,e),on(n,e)}}function _3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(an(n,e))return;t.uniform3fv(this.addr,e),on(n,e)}}function x3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4fv(this.addr,e),on(n,e)}}function v3(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),on(n,e)}else{if(an(n,i))return;y_.set(i),t.uniformMatrix2fv(this.addr,!1,y_),on(n,i)}}function y3(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),on(n,e)}else{if(an(n,i))return;v_.set(i),t.uniformMatrix3fv(this.addr,!1,v_),on(n,i)}}function S3(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(an(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),on(n,e)}else{if(an(n,i))return;x_.set(i),t.uniformMatrix4fv(this.addr,!1,x_),on(n,i)}}function M3(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function b3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2iv(this.addr,e),on(n,e)}}function T3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;t.uniform3iv(this.addr,e),on(n,e)}}function E3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4iv(this.addr,e),on(n,e)}}function A3(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function w3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(an(n,e))return;t.uniform2uiv(this.addr,e),on(n,e)}}function R3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(an(n,e))return;t.uniform3uiv(this.addr,e),on(n,e)}}function C3(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(an(n,e))return;t.uniform4uiv(this.addr,e),on(n,e)}}function ou(t){return t.version===0&&(t.compareFunction=Rf,t.needsUpdate=!0),t}function I3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=ou(B_):r=O_,n.setTexture2D(e||r,s)}function P3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||G_,s)}function L3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=ou(k_):r=H_,n.setTextureCube(e||r,s)}function N3(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||z_,s)}function D3(t){switch(t){case 5126:return m3;case 35664:return g3;case 35665:return _3;case 35666:return x3;case 35674:return v3;case 35675:return y3;case 35676:return S3;case 5124:case 35670:return M3;case 35667:case 35671:return b3;case 35668:case 35672:return T3;case 35669:case 35673:return E3;case 5125:return A3;case 36294:return w3;case 36295:return R3;case 36296:return C3;case 35678:case 36198:case 36298:case 36306:case 35682:return I3;case 35679:case 36299:case 36307:return P3;case 35680:case 36300:case 36308:case 36293:return L3;case 36289:case 36303:case 36311:case 36292:return N3}}function U3(t,e){t.uniform1fv(this.addr,e)}function F3(t,e){let n=ho(e,this.size,2);t.uniform2fv(this.addr,n)}function O3(t,e){let n=ho(e,this.size,3);t.uniform3fv(this.addr,n)}function B3(t,e){let n=ho(e,this.size,4);t.uniform4fv(this.addr,n)}function k3(t,e){let n=ho(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function z3(t,e){let n=ho(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function G3(t,e){let n=ho(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function H3(t,e){t.uniform1iv(this.addr,e)}function V3(t,e){t.uniform2iv(this.addr,e)}function W3(t,e){t.uniform3iv(this.addr,e)}function X3(t,e){t.uniform4iv(this.addr,e)}function q3(t,e){t.uniform1uiv(this.addr,e)}function $3(t,e){t.uniform2uiv(this.addr,e)}function Y3(t,e){t.uniform3uiv(this.addr,e)}function K3(t,e){t.uniform4uiv(this.addr,e)}function j3(t,e,n){let i=this.cache,s=e.length,r=au(n,s);an(i,r)||(t.uniform1iv(this.addr,r),on(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=ou(B_):a=O_;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function Z3(t,e,n){let i=this.cache,s=e.length,r=au(n,s);an(i,r)||(t.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||G_,r[a])}function J3(t,e,n){let i=this.cache,s=e.length,r=au(n,s);an(i,r)||(t.uniform1iv(this.addr,r),on(i,r));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=ou(k_):a=H_;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function Q3(t,e,n){let i=this.cache,s=e.length,r=au(n,s);an(i,r)||(t.uniform1iv(this.addr,r),on(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||z_,r[a])}function eT(t){switch(t){case 5126:return U3;case 35664:return F3;case 35665:return O3;case 35666:return B3;case 35674:return k3;case 35675:return z3;case 35676:return G3;case 5124:case 35670:return H3;case 35667:case 35671:return V3;case 35668:case 35672:return W3;case 35669:case 35673:return X3;case 5125:return q3;case 36294:return $3;case 36295:return Y3;case 36296:return K3;case 35678:case 36198:case 36298:case 36306:case 35682:return j3;case 35679:case 36299:case 36307:return Z3;case 35680:case 36300:case 36308:case 36293:return J3;case 36289:case 36303:case 36311:case 36292:return Q3}}function S_(t,e){t.seq.push(e),t.map[e.id]=e}function tT(t,e,n){let i=t.name,s=i.length;for(zf.lastIndex=0;;){let r=zf.exec(i),a=zf.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){S_(n,l===void 0?new Hf(o,t,e):new Vf(o,t,e));break}else{let d=n.map[o];d===void 0&&(d=new Wf(o),S_(n,d)),n=d}}}function M_(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}function sT(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function rT(t){Je._getMatrix(b_,Je.workingColorSpace,t);let e=`mat3( ${b_.elements.map(n=>n.toFixed(4))} )`;switch(Je.getTransfer(t)){case nc:return[e,"LinearTransferOETF"];case _t:return[e,"sRGBTransferOETF"];default:return Ce("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function T_(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+sT(t.getShaderSource(e),o)}else return r}function aT(t,e){let n=rT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function cT(t,e){let n=oT[e];return n===void 0?(Ce("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function lT(){Je.getLuminanceCoefficients(su);let t=su.x.toFixed(4),e=su.y.toFixed(4),n=su.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hT(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bc).join(`
`)}function uT(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function dT(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Bc(t){return t!==""}function E_(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function A_(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function Xf(t){return t.replace(fT,pT)}function pT(t,e){let n=Ze[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return Xf(n)}function w_(t){return t.replace(mT,gT)}function gT(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function R_(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function xT(t){return _T[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function yT(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":vT[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function MT(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":ST[t.combine]||"ENVMAP_BLENDING_NONE"}function bT(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,c=xT(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=yT(n),d=MT(n),u=hT(n),f=uT(r),g=s.createProgram(),v,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Bc).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Bc).join(`
`),m.length>0&&(m+=`
`)):(v=[R_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bc).join(`
`),m=[R_(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+d:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Zi?"#define TONE_MAPPING":"",n.toneMapping!==Zi?Ze.tonemapping_pars_fragment:"",n.toneMapping!==Zi?cT("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,aT("linearToOutputTexel",n.outputColorSpace),lT(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Bc).join(`
`)),a=Xf(a),a=E_(a,n),a=A_(a,n),o=Xf(o),o=E_(o,n),o=A_(o,n),a=w_(a),o=w_(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",n.glslVersion===If?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===If?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+v+a,A=p+m+o,b=M_(s,s.VERTEX_SHADER,M),w=M_(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,w),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(I){if(t.debug.checkShaderErrors){let L=s.getProgramInfoLog(g)||"",O=s.getShaderInfoLog(b)||"",H=s.getShaderInfoLog(w)||"",R=L.trim(),z=O.trim(),G=H.trim(),V=!0,ee=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(V=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,b,w);else{let X=T_(s,b,"vertex"),Z=T_(s,w,"fragment");Ge("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+X+`
`+Z)}else R!==""?Ce("WebGLProgram: Program Info Log:",R):(z===""||G==="")&&(ee=!1);ee&&(I.diagnostics={runnable:V,programLog:R,vertexShader:{log:z,prefix:v},fragmentShader:{log:G,prefix:m}})}s.deleteShader(b),s.deleteShader(w),_=new co(s,g),S=dT(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let N=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return N===!1&&(N=s.getProgramParameter(g,nT)),N},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=iT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}function ET(t){return t===pr||t===Nc||t===Dc}function AT(t,e,n,i,s,r){let a=new Wa,o=new qf,c=new Set,l=[],h=new Map,d=i.logarithmicDepthBuffer,u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,N,I,L,O){let H=I.fog,R=L.geometry,z=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,V=e.get(_.envMap||z,G),ee=u[_.type],X=i.precision;_.precision!==null&&(X=i.getMaxPrecision(_.precision),X!==_.precision&&Ce("WebGLProgram.getParameters:",_.precision,"not supported, using",X,"instead."));let Z=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,Q=Z!==void 0?Z.length:0,ye=0;R.morphAttributes.position!==void 0&&(ye=1),R.morphAttributes.normal!==void 0&&(ye=2),R.morphAttributes.color!==void 0&&(ye=3);let De,Y,ge,be;if(ee){let pe=es[ee];De=pe.vertexShader,Y=pe.fragmentShader}else{De=_.vertexShader,Y=_.fragmentShader;let pe=o.getVertexShaderStage(_),vt=o.getFragmentShaderStage(_);o.update(_,pe,vt),ge=pe.id,be=vt.id}let Fe=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),qe=L.isInstancedMesh===!0,Kt=L.isBatchedMesh===!0,ze=!!_.map,xt=!!_.matcap,Mt=!!V,it=Mt&&V.isPMREMTexture===!0,xn=!!_.aoMap,tn=!!_.lightMap,qn=!!_.bumpMap&&_.wireframe===!1,Ft=!!_.normalMap,Hi=!!_.displacementMap,fn=!!_.emissiveMap,pi=!!_.metalnessMap,mi=!!_.roughnessMap,gi=_.anisotropy>0,D=_.clearcoat>0,_i=_.diffuseRoughness>0,Lt=_.dispersion>0,Nt=_.retroreflectivity>0,fe=_.iridescence>0,nn=_.sheen>0,Oe=_.transmission>0,Ve=gi&&!!_.anisotropyMap,T=D&&!!_.clearcoatMap,x=D&&!!_.clearcoatNormalMap,B=D&&!!_.clearcoatRoughnessMap,te=_i&&!!_.diffuseRoughnessMap,J=fe&&!!_.iridescenceMap,re=fe&&!!_.iridescenceThicknessMap,ue=nn&&!!_.sheenColorMap,$=nn&&!!_.sheenRoughnessMap,K=!!_.specularMap,oe=!!_.specularColorMap,C=!!_.specularIntensityMap,j=Oe&&!!_.transmissionMap,q=Oe&&!!_.thicknessMap,ce=!!_.gradientMap,ie=!!_.alphaMap,ae=_.alphaTest>0,Ie=!!_.alphaHash,je=!!_.extensions,ne=Zi;_.toneMapped&&(Fe===null||Fe.isXRRenderTarget===!0)&&(ne=t.toneMapping);let Ue=it?V.isCompressedCubeTexture?V.image[0].mipmaps:V.mipmaps:null,Ke={shaderID:ee,shaderType:_.type,shaderName:_.name,vertexShader:De,fragmentShader:Y,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:be,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:X,batching:Kt,batchingColor:Kt&&L._colorsTexture!==null,instancing:qe,instancingColor:qe&&L.instanceColor!==null,instancingMorph:qe&&L.morphTexture!==null,outputColorSpace:Fe===null?t.outputColorSpace:Fe.isXRRenderTarget===!0?Fe.texture.colorSpace:Je.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:ze,matcap:xt,envMap:Mt,envMapMode:Mt&&V.mapping,envMapPMREM:it,envMapMaxLod:it?Ue.length-1:null,envMapSize:it?Ue[0].width:null,aoMap:xn,lightMap:tn,bumpMap:qn,normalMap:Ft,displacementMap:Hi,emissiveMap:fn,normalMapObjectSpace:Ft&&_.normalMapType===Z0,normalMapTangentSpace:Ft&&_.normalMapType===Fc,packedNormalMap:Ft&&_.normalMapType===Fc&&ET(_.normalMap.format),metalnessMap:pi,roughnessMap:mi,anisotropy:gi,anisotropyMap:Ve,clearcoat:D,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:B,diffuseRoughness:_i,diffuseRoughnessMap:te,dispersion:Lt,retroreflection:Nt,iridescence:fe,iridescenceMap:J,iridescenceThicknessMap:re,sheen:nn,sheenColorMap:ue,sheenRoughnessMap:$,specularMap:K,specularColorMap:oe,specularIntensityMap:C,transmission:Oe,transmissionMap:j,thicknessMap:q,gradientMap:ce,opaque:_.transparent===!1&&_.blending===to&&_.alphaToCoverage===!1,alphaMap:ie,alphaTest:ae,alphaHash:Ie,combine:_.combine,mapUv:ze&&f(_.map.channel),aoMapUv:xn&&f(_.aoMap.channel),lightMapUv:tn&&f(_.lightMap.channel),bumpMapUv:qn&&f(_.bumpMap.channel),normalMapUv:Ft&&f(_.normalMap.channel),displacementMapUv:Hi&&f(_.displacementMap.channel),emissiveMapUv:fn&&f(_.emissiveMap.channel),metalnessMapUv:pi&&f(_.metalnessMap.channel),roughnessMapUv:mi&&f(_.roughnessMap.channel),anisotropyMapUv:Ve&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:B&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:te&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:J&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:re&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:$&&f(_.sheenRoughnessMap.channel),specularMapUv:K&&f(_.specularMap.channel),specularColorMapUv:oe&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:j&&f(_.transmissionMap.channel),thicknessMapUv:q&&f(_.thicknessMap.channel),alphaMapUv:ie&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ft||gi),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!R.attributes.uv&&(ze||ie),fog:!!H,useFog:_.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Ft===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:xe,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:ye,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:O.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&N.length>0,shadowMapType:t.shadowMap.type,toneMapping:ne,decodeVideoTexture:ze&&_.map.isVideoTexture===!0&&Je.getTransfer(_.map.colorSpace)===_t,decodeVideoTextureEmissive:fn&&_.emissiveMap.isVideoTexture===!0&&Je.getTransfer(_.emissiveMap.colorSpace)===_t,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===kn,flipSided:_.side===Mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:je&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(je&&_.extensions.multiDraw===!0||Kt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let N in _.defines)S.push(N),S.push(_.defines[N]);return _.isRawShaderMaterial===!1&&(m(S,_),p(S,_),S.push(t.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=u[_.type],N;if(S){let I=es[S];N=l_.clone(I.uniforms)}else N=_.uniforms;return N}function A(_,S){let N=h.get(S);return N!==void 0?++N.usedTimes:(N=new bT(t,S,_,s),l.push(N),h.set(S,N)),N}function b(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:E}}function wT(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,c){t.get(a)[o]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function RT(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function C_(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function I_(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let M=t[e];return M===void 0?(M={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},t[e]=M):(M.id=u.id,M.object=u,M.geometry=f,M.material=g,M.materialVariant=a(u),M.groupOrder=v,M.renderOrder=u.renderOrder,M.z=m,M.group=p),e++,M}function c(u,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let A=o(u,f,g,v,m,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):n.push(A)}function l(u,f,g,v,m,p){let M=o(u,f,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function h(u,f){n.length>1&&n.sort(u||RT),i.length>1&&i.sort(f||C_),s.length>1&&s.sort(f||C_)}function d(){for(let u=e,f=t.length;u<f;u++){let g=t[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:d,sort:h}}function CT(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new I_,t.set(i,[a])):s>=r.length?(a=new I_,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function IT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new U,color:new Be};break;case"SpotLight":n={position:new U,direction:new U,color:new Be,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new U,color:new Be,distance:0,decay:0};break;case"HemisphereLight":n={direction:new U,skyColor:new Be,groundColor:new Be};break;case"RectAreaLight":n={color:new Be,position:new U,halfWidth:new U,halfHeight:new U};break}return t[e.id]=n,n}}}function PT(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ye,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}function NT(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function DT(t){let e=new IT,n=PT(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new U);let s=new U,r=new Xe,a=new Xe;function o(l){let h=0,d=0,u=0;for(let O=0;O<9;O++)i.probe[O].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,A=0,b=0,w=0,E=0,_=0,S=0,N=0,I=0;l.sort(NT);for(let O=0,H=l.length;O<H;O++){let R=l[O],z=R.color,G=R.intensity,V=R.distance,ee=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===pr?ee=R.shadow.map.texture:ee=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=z.r*G,d+=z.g*G,u+=z.b*G;else if(R.isLightProbe){for(let X=0;X<9;X++)i.probe[X].addScaledVector(R.sh.coefficients[X],G);I++}else if(R.isSunLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,Q=n.get(R);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),i.sunShadow[g]=Q,i.sunShadowMap[g]=ee;let ye=Z.getViewportCount();for(let De=0;De<ye;De++)i.sunShadowMatrix[v+De]=Z.getMatrix(De),i.sunShadowCascade[v+De]=Z._cascadeData[De];v+=ye,g++}i.sun[f]=X,f++}else if(R.isDirectionalLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let Z=R.shadow,Q=n.get(R);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.directionalShadow[m]=Q,i.directionalShadowMap[m]=ee,i.directionalShadowMatrix[m]=R.shadow.matrix,w++}i.directional[m]=X,m++}else if(R.isSpotLight){let X=e.get(R);X.position.setFromMatrixPosition(R.matrixWorld),X.color.copy(z).multiplyScalar(G),X.distance=V,X.coneCos=Math.cos(R.angle),X.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),X.decay=R.decay,i.spot[M]=X;let Z=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,Z.updateMatrices(R),R.castShadow&&N++),i.spotLightMatrix[M]=Z.matrix,R.castShadow){let Q=n.get(R);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,i.spotShadow[M]=Q,i.spotShadowMap[M]=ee,_++}M++}else if(R.isRectAreaLight){let X=e.get(R);X.color.copy(z).multiplyScalar(G),X.halfWidth.set(R.width*.5,0,0),X.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=X,A++}else if(R.isPointLight){let X=e.get(R);if(X.color.copy(R.color).multiplyScalar(R.intensity),X.distance=R.distance,X.decay=R.decay,R.castShadow){let Z=R.shadow,Q=n.get(R);Q.shadowIntensity=Z.intensity,Q.shadowBias=Z.bias,Q.shadowNormalBias=Z.normalBias,Q.shadowRadius=Z.radius,Q.shadowMapSize=Z.mapSize,Q.shadowCameraNear=Z.camera.near,Q.shadowCameraFar=Z.camera.far,i.pointShadow[p]=Q,i.pointShadowMap[p]=ee,i.pointShadowMatrix[p]=R.shadow.matrix,E++}i.point[p]=X,p++}else if(R.isHemisphereLight){let X=e.get(R);X.skyColor.copy(R.color).multiplyScalar(G),X.groundColor.copy(R.groundColor).multiplyScalar(G),i.hemi[b]=X,b++}}A>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let L=i.hash;(L.sunLength!==f||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==A||L.hemiLength!==b||L.numSunShadows!==g||L.numDirectionalShadows!==w||L.numPointShadows!==E||L.numSpotShadows!==_||L.numSpotMaps!==S||L.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-N,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=N,i.numLightProbes=I,L.sunLength=f,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=A,L.hemiLength=b,L.numSunShadows=g,L.numDirectionalShadows=w,L.numPointShadows=E,L.numSpotShadows=_,L.numSpotMaps=S,L.numLightProbes=I,i.version=LT++)}function c(l,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let b=l[M];if(b.isSunLight){let w=i.sun[d];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),d++}else if(b.isDirectionalLight){let w=i.directional[u];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),u++}else if(b.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function P_(t){let e=new DT(t),n=[],i=[],s=[];function r(d){h.camera=d,n.length=0,i.length=0,s.length=0}function a(d){d.isLightProbeGrid?s.push(d):n.push(d)}function o(d){i.push(d)}function c(){e.setup(n),s.sort((d,u)=>d.priority-u.priority||d.id-u.id)}function l(d){e.setupView(n,d)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function UT(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new P_(t),e.set(s,[o])):r>=a.length?(o=new P_(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}function zT(t,e,n){let i=new hr,s=new Ye,r=new Ye,a=new yt,o=new ah,c=new oh,l={},h=n.maxTextureSize,d={[ji]:Mn,[Mn]:ji,[kn]:kn},u=new $i({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ye},radius:{value:4}},vertexShader:FT,fragmentShader:OT}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Pn;g.setAttribute("position",new yn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Et(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=wc;let p=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===w0&&(Ce("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=wc);let N=t.getRenderTarget(),I=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),O=t.state;O.setBlending(Xr),O.buffers.depth.getReversed()===!0?O.buffers.color.setClear(0,0,0,0):O.buffers.color.setClear(1,1,1,1),O.buffers.depth.setTest(!0),O.setScissorTest(!1);let H=p!==this.type;H&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(z=>z.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,z=E.length;R<z;R++){let G=E[R],V=G.shadow;if(V===void 0){Ce("WebGLShadowMap:",G,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);let ee=V.getFrameExtents();s.multiply(ee),r.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/ee.x),s.x=r.x*ee.x,V.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/ee.y),s.y=r.y*ee.y,V.mapSize.y=r.y));let X=t.state.buffers.depth.getReversed();if(V.camera._reversedDepth=X,V.map===null||H===!0){if(V.map!==null&&(V.map.depthTexture!==null&&(V.map.depthTexture.dispose(),V.map.depthTexture=null),V.map.dispose()),this.type===eo){if(G.isPointLight){Ce("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}V.map=new ai(s.x,s.y,{format:pr,type:zn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1}),V.map.texture.name=G.name+".shadowMap",V.map.depthTexture=new ws(s.x,s.y,Ln),V.map.depthTexture.name=G.name+".shadowMapDepth",V.map.depthTexture.format=Es,V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt}else G.isPointLight?(V.map=new kc(s.x),V.map.depthTexture=new pc(s.x,Ui)):(V.map=new ai(s.x,s.y),V.map.depthTexture=new ws(s.x,s.y,Ui)),V.map.depthTexture.name=G.name+".shadowMap",V.map.depthTexture.format=Es,this.type===wc?(V.map.depthTexture.compareFunction=X?wf:Af,V.map.depthTexture.minFilter=Rt,V.map.depthTexture.magFilter=Rt):(V.map.depthTexture.compareFunction=null,V.map.depthTexture.minFilter=qt,V.map.depthTexture.magFilter=qt);V.camera.updateProjectionMatrix()}V.map.isWebGLCubeRenderTarget!==!0&&(V.map.width!==s.x||V.map.height!==s.y)&&V.map.setSize(s.x,s.y);let Z=V.map.isWebGLCubeRenderTarget?6:V.getViewportCount();G.isPointLight!==!0&&V.updateMatrices(G,S);let Q=(V.camera.layers.mask&4294967294)!==0?V.camera.layers:S.layers;for(let ye=0;ye<Z;ye++){let De=V.getCamera(ye);if(G.isPointLight){let Y=V.camera,ge=V.matrix,be=G.distance||Y.far;be!==Y.far&&(Y.far=be,Y.updateProjectionMatrix()),Oc.setFromMatrixPosition(G.matrixWorld),Y.position.copy(Oc),Gf.copy(Y.position),Gf.add(BT[ye]),Y.up.copy(kT[ye]),Y.lookAt(Gf),Y.updateMatrixWorld(),ge.makeTranslation(-Oc.x,-Oc.y,-Oc.z),L_.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),V._frustum.setFromProjectionMatrix(L_,Y.coordinateSystem,Y.reversedDepth)}if(V.map.isWebGLCubeRenderTarget)t.setRenderTarget(V.map,ye),t.clear();else{ye===0&&(t.setRenderTarget(V.map),t.clear());let Y=V.getViewport(ye);a.set(r.x*Y.x,r.y*Y.y,r.x*Y.z,r.y*Y.w),O.viewport(a)}i=V.getFrustum(ye),b(_,S,De,G,Q,this.type)}V.isPointLightShadow!==!0&&this.type===eo&&M(V,S),V.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(N,I,L)};function M(E,_){let S=e.update(v);u.defines.VSM_SAMPLES!==E.blurSamples&&(u.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new ai(s.x,s.y,{format:pr,type:zn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),u.uniforms.shadow_pass.value=E.map.depthTexture,u.uniforms.resolution.value.set(E.map.width,E.map.height),u.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(_,null,S,u,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(_,null,S,f,v,null)}function A(E,_,S,N){let I=null,L=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(L!==void 0)I=L;else if(I=S.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let O=I.uuid,H=_.uuid,R=l[O];R===void 0&&(R={},l[O]=R);let z=R[H];z===void 0&&(z=I.clone(),R[H]=z,_.addEventListener("dispose",w)),I=z}if(I.visible=_.visible,I.wireframe=_.wireframe,N===eo?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:d[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let O=t.properties.get(I);O.light=S}return I}function b(E,_,S,N,I,L){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&L===eo)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let R=e.update(E),z=E.material;if(Array.isArray(z)){let G=R.groups;for(let V=0,ee=G.length;V<ee;V++){let X=G[V],Z=z[X.materialIndex];if(Z&&Z.visible){let Q=A(E,Z,N,L);E.onBeforeShadow(t,E,_,S,R,Q,X),t.renderBufferDirect(S,null,R,Q,E,X),E.onAfterShadow(t,E,_,S,R,Q,X)}}}else if(z.visible){let G=A(E,z,N,L);E.onBeforeShadow(t,E,_,S,R,G,null),t.renderBufferDirect(S,null,R,G,E,null),E.onAfterShadow(t,E,_,S,R,G,null)}}let H=E.children;for(let R=0,z=H.length;R<z;R++)b(H[R],_,S,N,I,L)}function w(E){E.target.removeEventListener("dispose",w);for(let S in l){let N=l[S],I=E.target.uuid;I in N&&(N[I].dispose(),delete N[I])}}}function GT(t,e){function n(){let C=!1,j=new yt,q=null,ce=new yt(0,0,0,0);return{setMask:function(ie){q!==ie&&!C&&(t.colorMask(ie,ie,ie,ie),q=ie)},setLocked:function(ie){C=ie},setClear:function(ie,ae,Ie,je,ne){ne===!0&&(ie*=je,ae*=je,Ie*=je),j.set(ie,ae,Ie,je),ce.equals(j)===!1&&(t.clearColor(ie,ae,Ie,je),ce.copy(j))},reset:function(){C=!1,q=null,ce.set(-1,0,0,0)}}}function i(){let C=!1,j=!1,q=null,ce=null,ie=null;return{setReversed:function(ae){if(j!==ae){let Ie=e.get("EXT_clip_control");ae?Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.ZERO_TO_ONE_EXT):Ie.clipControlEXT(Ie.LOWER_LEFT_EXT,Ie.NEGATIVE_ONE_TO_ONE_EXT),j=ae;let je=ie;ie=null,this.setClear(je)}},getReversed:function(){return j},setTest:function(ae){ae?xe(t.DEPTH_TEST):qe(t.DEPTH_TEST)},setMask:function(ae){q!==ae&&!C&&(t.depthMask(ae),q=ae)},setFunc:function(ae){if(j&&(ae=o_[ae]),ce!==ae){switch(ae){case ql:t.depthFunc(t.NEVER);break;case $l:t.depthFunc(t.ALWAYS);break;case Yl:t.depthFunc(t.LESS);break;case Ba:t.depthFunc(t.LEQUAL);break;case Kl:t.depthFunc(t.EQUAL);break;case jl:t.depthFunc(t.GEQUAL);break;case Zl:t.depthFunc(t.GREATER);break;case Jl:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}ce=ae}},setLocked:function(ae){C=ae},setClear:function(ae){ie!==ae&&(ie=ae,j&&(ae=1-ae),t.clearDepth(ae))},reset:function(){C=!1,q=null,ce=null,ie=null,j=!1}}}function s(){let C=!1,j=null,q=null,ce=null,ie=null,ae=null,Ie=null,je=null,ne=null;return{setTest:function(Ue){C||(Ue?xe(t.STENCIL_TEST):qe(t.STENCIL_TEST))},setMask:function(Ue){j!==Ue&&!C&&(t.stencilMask(Ue),j=Ue)},setFunc:function(Ue,Ke,pe){(q!==Ue||ce!==Ke||ie!==pe)&&(t.stencilFunc(Ue,Ke,pe),q=Ue,ce=Ke,ie=pe)},setOp:function(Ue,Ke,pe){(ae!==Ue||Ie!==Ke||je!==pe)&&(t.stencilOp(Ue,Ke,pe),ae=Ue,Ie=Ke,je=pe)},setLocked:function(Ue){C=Ue},setClear:function(Ue){ne!==Ue&&(t.clearStencil(Ue),ne=Ue)},reset:function(){C=!1,j=null,q=null,ce=null,ie=null,ae=null,Ie=null,je=null,ne=null}}}let r=new n,a=new i,o=new s,c={},l=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,A=null,b=null,w=null,E=null,_=null,S=new Be(0,0,0),N=0,I=!1,L=null,O=null,H=null,R=null,z=null,G=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),V=!1,ee=0,X=t.getParameter(t.VERSION);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),V=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),V=ee>=2);let Z=null,Q={},ye=t.getParameter(t.SCISSOR_BOX),De=t.getParameter(t.VIEWPORT),Y=new yt().fromArray(ye),ge=new yt().fromArray(De);function be(C,j,q,ce){let ie=new Uint8Array(4),ae=t.createTexture();t.bindTexture(C,ae),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Ie=0;Ie<q;Ie++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(j,0,t.RGBA,1,1,ce,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(j+Ie,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return ae}let Fe={};Fe[t.TEXTURE_2D]=be(t.TEXTURE_2D,t.TEXTURE_2D,1),Fe[t.TEXTURE_CUBE_MAP]=be(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Fe[t.TEXTURE_2D_ARRAY]=be(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Fe[t.TEXTURE_3D]=be(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),a.setFunc(Ba),qn(!1),Ft(af),xe(t.CULL_FACE),xn(Xr);function xe(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function qe(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function Kt(C,j){return u[C]!==j?(t.bindFramebuffer(C,j),u[C]=j,C===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=j),C===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=j),!0):!1}function ze(C,j){let q=g,ce=!1;if(C){q=f.get(j),q===void 0&&(q=[],f.set(j,q));let ie=C.textures;if(q.length!==ie.length||q[0]!==t.COLOR_ATTACHMENT0){for(let ae=0,Ie=ie.length;ae<Ie;ae++)q[ae]=t.COLOR_ATTACHMENT0+ae;q.length=ie.length,ce=!0}}else q[0]!==t.BACK&&(q[0]=t.BACK,ce=!0);ce&&t.drawBuffers(q)}function xt(C){return v!==C?(t.useProgram(C),v=C,!0):!1}let Mt={[qr]:t.FUNC_ADD,[C0]:t.FUNC_SUBTRACT,[I0]:t.FUNC_REVERSE_SUBTRACT};Mt[P0]=t.MIN,Mt[L0]=t.MAX;let it={[N0]:t.ZERO,[D0]:t.ONE,[U0]:t.SRC_COLOR,[hf]:t.SRC_ALPHA,[G0]:t.SRC_ALPHA_SATURATE,[k0]:t.DST_COLOR,[O0]:t.DST_ALPHA,[F0]:t.ONE_MINUS_SRC_COLOR,[uf]:t.ONE_MINUS_SRC_ALPHA,[z0]:t.ONE_MINUS_DST_COLOR,[B0]:t.ONE_MINUS_DST_ALPHA,[H0]:t.CONSTANT_COLOR,[V0]:t.ONE_MINUS_CONSTANT_COLOR,[W0]:t.CONSTANT_ALPHA,[X0]:t.ONE_MINUS_CONSTANT_ALPHA};function xn(C,j,q,ce,ie,ae,Ie,je,ne,Ue){if(C===Xr){m===!0&&(qe(t.BLEND),m=!1);return}if(m===!1&&(xe(t.BLEND),m=!0),C!==R0){if(C!==p||Ue!==I){if((M!==qr||w!==qr)&&(t.blendEquation(t.FUNC_ADD),M=qr,w=qr),Ue)switch(C){case to:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case of:t.blendFunc(t.ONE,t.ONE);break;case cf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case lf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ge("WebGLState: Invalid blending: ",C);break}else switch(C){case to:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case of:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case cf:Ge("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case lf:Ge("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ge("WebGLState: Invalid blending: ",C);break}A=null,b=null,E=null,_=null,S.set(0,0,0),N=0,p=C,I=Ue}return}ie=ie||j,ae=ae||q,Ie=Ie||ce,(j!==M||ie!==w)&&(t.blendEquationSeparate(Mt[j],Mt[ie]),M=j,w=ie),(q!==A||ce!==b||ae!==E||Ie!==_)&&(t.blendFuncSeparate(it[q],it[ce],it[ae],it[Ie]),A=q,b=ce,E=ae,_=Ie),(je.equals(S)===!1||ne!==N)&&(t.blendColor(je.r,je.g,je.b,ne),S.copy(je),N=ne),p=C,I=!1}function tn(C,j){C.side===kn?qe(t.CULL_FACE):xe(t.CULL_FACE);let q=C.side===Mn;j&&(q=!q),qn(q),C.blending===to&&C.transparent===!1?xn(Xr):xn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let ce=C.stencilWrite;o.setTest(ce),ce&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),fn(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):qe(t.SAMPLE_ALPHA_TO_COVERAGE)}function qn(C){L!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),L=C)}function Ft(C){C!==E0?(xe(t.CULL_FACE),C!==O&&(C===af?t.cullFace(t.BACK):C===A0?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):qe(t.CULL_FACE),O=C}function Hi(C){C!==H&&(V&&t.lineWidth(C),H=C)}function fn(C,j,q){C?(xe(t.POLYGON_OFFSET_FILL),(R!==j||z!==q)&&(R=j,z=q,a.getReversed()&&(j=-j,q=-q),t.polygonOffset(j,q))):qe(t.POLYGON_OFFSET_FILL)}function pi(C){C?xe(t.SCISSOR_TEST):qe(t.SCISSOR_TEST)}function mi(C){C===void 0&&(C=t.TEXTURE0+G-1),Z!==C&&(t.activeTexture(C),Z=C)}function gi(C,j,q){q===void 0&&(Z===null?q=t.TEXTURE0+G-1:q=Z);let ce=Q[q];ce===void 0&&(ce={type:void 0,texture:void 0},Q[q]=ce),(ce.type!==C||ce.texture!==j)&&(Z!==q&&(t.activeTexture(q),Z=q),t.bindTexture(C,j||Fe[C]),ce.type=C,ce.texture=j)}function D(){let C=Q[Z];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function _i(){try{t.compressedTexImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Lt(){try{t.compressedTexImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Nt(){try{t.texSubImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function fe(){try{t.texSubImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function nn(){try{t.compressedTexSubImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Oe(){try{t.compressedTexSubImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function Ve(){try{t.texStorage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function T(){try{t.texStorage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function x(){try{t.texImage2D(...arguments)}catch(C){Ge("WebGLState:",C)}}function B(){try{t.texImage3D(...arguments)}catch(C){Ge("WebGLState:",C)}}function te(C){return d[C]!==void 0?d[C]:t.getParameter(C)}function J(C,j){d[C]!==j&&(t.pixelStorei(C,j),d[C]=j)}function re(C){Y.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),Y.copy(C))}function ue(C){ge.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function $(C,j){let q=l.get(j);q===void 0&&(q=new WeakMap,l.set(j,q));let ce=q.get(C);ce===void 0&&(ce=t.getUniformBlockIndex(j,C.name),t.uniformBlockBinding(j,ce,ce),q.set(C,ce))}function K(C,j,q){let ie=l.get(j).get(C);c[ie]!==q&&(t.bindBufferBase(t.UNIFORM_BUFFER,ie,q),c[ie]=q)}function oe(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},d={},Z=null,Q={},u={},c={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,A=null,b=null,w=null,E=null,_=null,S=new Be(0,0,0),N=0,I=!1,L=null,O=null,H=null,R=null,z=null,Y.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:qe,bindFramebuffer:Kt,drawBuffers:ze,useProgram:xt,setBlending:xn,setMaterial:tn,setFlipSided:qn,setCullFace:Ft,setLineWidth:Hi,setPolygonOffset:fn,setScissorTest:pi,activeTexture:mi,bindTexture:gi,unbindTexture:D,compressedTexImage2D:_i,compressedTexImage3D:Lt,texImage2D:x,texImage3D:B,pixelStorei:J,getParameter:te,updateUBOMapping:$,uniformBlockBinding:K,texStorage2D:Ve,texStorage3D:T,texSubImage2D:Nt,texSubImage3D:fe,compressedTexSubImage2D:nn,compressedTexSubImage3D:Oe,scissor:re,viewport:ue,reset:oe}}function HT(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Ye,h=new WeakMap,d=new Set,u,f=new WeakMap,g=new Set,v=new FinalizationRegistry(T=>g.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,x){return m?new OffscreenCanvas(T,x):Ga("canvas")}function M(T,x,B){let te=1,J=Ve(T);if((J.width>B||J.height>B)&&(te=B/Math.max(J.width,J.height)),te<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let re=Math.floor(te*J.width),ue=Math.floor(te*J.height);u===void 0&&(u=p(re,ue));let $=x?p(re,ue):u;return $.width=re,$.height=ue,$.getContext("2d").drawImage(T,0,0,re,ue),Ce("WebGLRenderer: Texture has been resized from ("+J.width+"x"+J.height+") to ("+re+"x"+ue+")."),$}else return"data"in T&&Ce("WebGLRenderer: Image in DataTexture is too big ("+J.width+"x"+J.height+")."),T;return T}function A(T){return T.generateMipmaps}function b(T){t.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(T,x,B,te,J,re=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ce("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;te&&(ue=e.get("EXT_texture_norm16"),ue||Ce("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=x;if(x===t.RED&&(B===t.FLOAT&&($=t.R32F),B===t.HALF_FLOAT&&($=t.R16F),B===t.UNSIGNED_BYTE&&($=t.R8),B===t.UNSIGNED_SHORT&&ue&&($=ue.R16_EXT),B===t.SHORT&&ue&&($=ue.R16_SNORM_EXT)),x===t.RED_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.R8UI),B===t.UNSIGNED_SHORT&&($=t.R16UI),B===t.UNSIGNED_INT&&($=t.R32UI),B===t.BYTE&&($=t.R8I),B===t.SHORT&&($=t.R16I),B===t.INT&&($=t.R32I)),x===t.RG&&(B===t.FLOAT&&($=t.RG32F),B===t.HALF_FLOAT&&($=t.RG16F),B===t.UNSIGNED_BYTE&&($=t.RG8),B===t.UNSIGNED_SHORT&&ue&&($=ue.RG16_EXT),B===t.SHORT&&ue&&($=ue.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RG8UI),B===t.UNSIGNED_SHORT&&($=t.RG16UI),B===t.UNSIGNED_INT&&($=t.RG32UI),B===t.BYTE&&($=t.RG8I),B===t.SHORT&&($=t.RG16I),B===t.INT&&($=t.RG32I)),x===t.RGB_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGB8UI),B===t.UNSIGNED_SHORT&&($=t.RGB16UI),B===t.UNSIGNED_INT&&($=t.RGB32UI),B===t.BYTE&&($=t.RGB8I),B===t.SHORT&&($=t.RGB16I),B===t.INT&&($=t.RGB32I)),x===t.RGBA_INTEGER&&(B===t.UNSIGNED_BYTE&&($=t.RGBA8UI),B===t.UNSIGNED_SHORT&&($=t.RGBA16UI),B===t.UNSIGNED_INT&&($=t.RGBA32UI),B===t.BYTE&&($=t.RGBA8I),B===t.SHORT&&($=t.RGBA16I),B===t.INT&&($=t.RGBA32I)),x===t.RGB&&(B===t.UNSIGNED_SHORT&&ue&&($=ue.RGB16_EXT),B===t.SHORT&&ue&&($=ue.RGB16_SNORM_EXT),B===t.UNSIGNED_INT_5_9_9_9_REV&&($=t.RGB9_E5),B===t.UNSIGNED_INT_10F_11F_11F_REV&&($=t.R11F_G11F_B10F)),x===t.RGBA){let K=re?nc:Je.getTransfer(J);B===t.FLOAT&&($=t.RGBA32F),B===t.HALF_FLOAT&&($=t.RGBA16F),B===t.UNSIGNED_BYTE&&($=K===_t?t.SRGB8_ALPHA8:t.RGBA8),B===t.UNSIGNED_SHORT&&ue&&($=ue.RGBA16_EXT),B===t.SHORT&&ue&&($=ue.RGBA16_SNORM_EXT),B===t.UNSIGNED_SHORT_4_4_4_4&&($=t.RGBA4),B===t.UNSIGNED_SHORT_5_5_5_1&&($=t.RGB5_A1)}return($===t.R16F||$===t.R32F||$===t.RG16F||$===t.RG32F||$===t.RGBA16F||$===t.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function _(T,x){let B;return T?x===null||x===Ui||x===Kr?B=t.DEPTH24_STENCIL8:x===Ln?B=t.DEPTH32F_STENCIL8:x===ro&&(B=t.DEPTH24_STENCIL8,Ce("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Ui||x===Kr?B=t.DEPTH_COMPONENT24:x===Ln?B=t.DEPTH_COMPONENT32F:x===ro&&(B=t.DEPTH_COMPONENT16),B}function S(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==qt&&T.minFilter!==Rt?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function N(T){let x=new WeakRef(T);i.get(T).__ref=x,g.add(x),v.register(T,x,x)}function I(T){let x=i.get(T).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function L(T){H(T.target)}function O(T){R(T.target)}function H(T){T.removeEventListener("dispose",L),I(T),G(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&d.delete(T)}function R(T){T.removeEventListener("dispose",O),I(T),ee(T)}function z(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):H(x))}g.clear(),d.clear()}function G(T){let x=i.get(T);if(x.__webglInit===void 0)return;let B=T.source,te=f.get(B);if(te){let J=te[x.__cacheKey];J.usedTimes--,J.usedTimes===0&&V(T),Object.keys(te).length===0&&f.delete(B)}i.remove(T)}function V(T){let x=i.get(T);t.deleteTexture(x.__webglTexture);let B=T.source,te=f.get(B);delete te[x.__cacheKey],a.memory.textures--}function ee(T){let x=i.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let B=T.depthTexture;if(B&&B.renderTarget===T&&H(B),T.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(x.__webglFramebuffer[J]))for(let re=0;re<x.__webglFramebuffer[J].length;re++)t.deleteFramebuffer(x.__webglFramebuffer[J][re]);else t.deleteFramebuffer(x.__webglFramebuffer[J]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[J])}else{if(Array.isArray(x.__webglFramebuffer))for(let J=0;J<x.__webglFramebuffer.length;J++)t.deleteFramebuffer(x.__webglFramebuffer[J]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let J=0;J<x.__webglColorRenderbuffer.length;J++)x.__webglColorRenderbuffer[J]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[J]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let te=T.textures;for(let J=0,re=te.length;J<re;J++){let ue=i.get(te[J]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(te[J])}i.remove(T)}let X=0;function Z(){X=0}function Q(){return X}function ye(T){X=T}function De(){let T=X;return T>=s.maxTextures&&Ce("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),X+=1,T}function Y(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ge(T,x){let B=i.get(T);if(T.isVideoTexture&&nn(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&B.__version!==T.version){let te=T.image;if(te===null)Ce("WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)Ce("WebGLRenderer: Texture marked for update but image is incomplete");else{tn(B,T,x);return}}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,B.__webglTexture,t.TEXTURE0+x)}function be(T,x){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){tn(B,T,x);return}else T.isExternalTexture&&(B.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,B.__webglTexture,t.TEXTURE0+x)}function Fe(T,x){let B=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&B.__version!==T.version){tn(B,T,x);return}n.bindTexture(t.TEXTURE_3D,B.__webglTexture,t.TEXTURE0+x)}function xe(T,x){let B=i.get(T);if(T.version>0&&B.__version!==T.version){qn(B,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,B.__webglTexture,t.TEXTURE0+x)}let qe={[ar]:t.REPEAT,[$n]:t.CLAMP_TO_EDGE,[ka]:t.MIRRORED_REPEAT},Kt={[qt]:t.NEAREST,[xh]:t.NEAREST_MIPMAP_NEAREST,[Yr]:t.NEAREST_MIPMAP_LINEAR,[Rt]:t.LINEAR,[so]:t.LINEAR_MIPMAP_NEAREST,[oi]:t.LINEAR_MIPMAP_LINEAR},ze={[Q0]:t.NEVER,[Rf]:t.ALWAYS,[e_]:t.LESS,[Af]:t.LEQUAL,[t_]:t.EQUAL,[wf]:t.GEQUAL,[n_]:t.GREATER,[i_]:t.NOTEQUAL};function xt(T,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Rt||x.magFilter===so||x.magFilter===Yr||x.magFilter===oi||x.minFilter===Rt||x.minFilter===so||x.minFilter===Yr||x.minFilter===oi)&&Ce("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,qe[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,qe[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,qe[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,Kt[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,Kt[x.minFilter]),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,ze[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===qt||x.minFilter!==Yr&&x.minFilter!==oi||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let B=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,B.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function Mt(T,x){let B=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",L),N(x));let te=x.source,J=f.get(te);J===void 0&&(J={},f.set(te,J));let re=Y(x);if(re!==T.__cacheKey){J[re]===void 0&&(J[re]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,B=!0),J[re].usedTimes++;let ue=J[T.__cacheKey];ue!==void 0&&(J[T.__cacheKey].usedTimes--,ue.usedTimes===0&&V(x)),T.__cacheKey=re,T.__webglTexture=J[re].texture}return B}function it(T,x,B){return Math.floor(Math.floor(T/B)/x)}function xn(T,x,B,te){let re=T.updateRanges;if(re.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,B,te,x.data);else{re.sort((C,j)=>C.start-j.start);let ue=0;for(let C=1;C<re.length;C++){let j=re[ue],q=re[C],ce=j.start+j.count,ie=it(q.start,x.width,4),ae=it(j.start,x.width,4);q.start<=ce+1&&ie===ae&&it(q.start+q.count-1,x.width,4)===ie?j.count=Math.max(j.count,q.start+q.count-j.start):(++ue,re[ue]=q)}re.length=ue+1;let $=n.getParameter(t.UNPACK_ROW_LENGTH),K=n.getParameter(t.UNPACK_SKIP_PIXELS),oe=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let C=0,j=re.length;C<j;C++){let q=re[C],ce=Math.floor(q.start/4),ie=Math.ceil(q.count/4),ae=ce%x.width,Ie=Math.floor(ce/x.width),je=ie,ne=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,ae),n.pixelStorei(t.UNPACK_SKIP_ROWS,Ie),n.texSubImage2D(t.TEXTURE_2D,0,ae,Ie,je,ne,B,te,x.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,$),n.pixelStorei(t.UNPACK_SKIP_PIXELS,K),n.pixelStorei(t.UNPACK_SKIP_ROWS,oe)}}function tn(T,x,B){let te=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(te=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(te=t.TEXTURE_3D);let J=Mt(T,x),re=x.source;n.bindTexture(te,T.__webglTexture,t.TEXTURE0+B);let ue=i.get(re);if(re.version!==ue.__version||J===!0){if(n.activeTexture(t.TEXTURE0+B),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ne=Je.getPrimaries(Je.workingColorSpace),Ue=x.colorSpace===Ds?null:Je.getPrimaries(x.colorSpace),Ke=x.colorSpace===Ds||ne===Ue?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ke)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let K=M(x.image,!1,s.maxTextureSize);K=Oe(x,K);let oe=r.convert(x.format,x.colorSpace),C=r.convert(x.type),j=E(x.internalFormat,oe,C,x.normalized,x.colorSpace,x.isVideoTexture);xt(te,x);let q,ce=x.mipmaps,ie=x.isVideoTexture!==!0,ae=ue.__version===void 0||J===!0,Ie=re.dataReady,je=S(x,K);if(x.isDepthTexture)j=_(x.format===Ns,x.type),ae&&(ie?n.texStorage2D(t.TEXTURE_2D,1,j,K.width,K.height):n.texImage2D(t.TEXTURE_2D,0,j,K.width,K.height,0,oe,C,null));else if(x.isDataTexture)if(ce.length>0){ie&&ae&&n.texStorage2D(t.TEXTURE_2D,je,j,ce[0].width,ce[0].height);for(let ne=0,Ue=ce.length;ne<Ue;ne++)q=ce[ne],ie?Ie&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,q.width,q.height,oe,C,q.data):n.texImage2D(t.TEXTURE_2D,ne,j,q.width,q.height,0,oe,C,q.data);x.generateMipmaps=!1}else ie?(ae&&n.texStorage2D(t.TEXTURE_2D,je,j,K.width,K.height),Ie&&xn(x,K,oe,C)):n.texImage2D(t.TEXTURE_2D,0,j,K.width,K.height,0,oe,C,K.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){ie&&ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,j,ce[0].width,ce[0].height,K.depth);for(let ne=0,Ue=ce.length;ne<Ue;ne++)if(q=ce[ne],x.format!==yi)if(oe!==null)if(ie){if(Ie)if(x.layerUpdates.size>0){let Ke=Bf(q.width,q.height,x.format,x.type);for(let pe of x.layerUpdates){let vt=q.data.subarray(pe*Ke/q.data.BYTES_PER_ELEMENT,(pe+1)*Ke/q.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,pe,q.width,q.height,1,oe,vt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,q.width,q.height,K.depth,oe,q.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ne,j,q.width,q.height,K.depth,0,q.data,0,0);else Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ie?Ie&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ne,0,0,0,q.width,q.height,K.depth,oe,C,q.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ne,j,q.width,q.height,K.depth,0,oe,C,q.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{ie&&ae&&n.texStorage2D(t.TEXTURE_2D,je,j,ce[0].width,ce[0].height);for(let ne=0,Ue=ce.length;ne<Ue;ne++)q=ce[ne],x.format!==yi?oe!==null?ie?Ie&&n.compressedTexSubImage2D(t.TEXTURE_2D,ne,0,0,q.width,q.height,oe,q.data):n.compressedTexImage2D(t.TEXTURE_2D,ne,j,q.width,q.height,0,q.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ie?Ie&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,q.width,q.height,oe,C,q.data):n.texImage2D(t.TEXTURE_2D,ne,j,q.width,q.height,0,oe,C,q.data)}else if(x.isDataArrayTexture)if(ie){if(ae&&n.texStorage3D(t.TEXTURE_2D_ARRAY,je,j,K.width,K.height,K.depth),Ie)if(x.layerUpdates.size>0){let ne=Bf(K.width,K.height,x.format,x.type);for(let Ue of x.layerUpdates){let Ke=K.data.subarray(Ue*ne/K.data.BYTES_PER_ELEMENT,(Ue+1)*ne/K.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Ue,K.width,K.height,1,oe,C,Ke)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,K.width,K.height,K.depth,oe,C,K.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,j,K.width,K.height,K.depth,0,oe,C,K.data);else if(x.isData3DTexture)ie?(ae&&n.texStorage3D(t.TEXTURE_3D,je,j,K.width,K.height,K.depth),Ie&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,K.width,K.height,K.depth,oe,C,K.data)):n.texImage3D(t.TEXTURE_3D,0,j,K.width,K.height,K.depth,0,oe,C,K.data);else if(x.isFramebufferTexture){if(ae)if(ie)n.texStorage2D(t.TEXTURE_2D,je,j,K.width,K.height);else{let ne=K.width,Ue=K.height;for(let Ke=0;Ke<je;Ke++)n.texImage2D(t.TEXTURE_2D,Ke,j,ne,Ue,0,oe,C,null),ne>>=1,Ue>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let ne=t.canvas;if(ne.hasAttribute("layoutsubtree")||ne.setAttribute("layoutsubtree","true"),K.parentNode!==ne){ne.appendChild(K),d.add(x),ne.onpaint=Ue=>{let Ke=Ue.changedElements;for(let pe of d)Ke.includes(pe.image)&&(pe.needsUpdate=!0)},ne.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,K);else{let Ke=t.RGBA,pe=t.RGBA,vt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ke,pe,vt,K)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(ce.length>0){if(ie&&ae){let ne=Ve(ce[0]);n.texStorage2D(t.TEXTURE_2D,je,j,ne.width,ne.height)}for(let ne=0,Ue=ce.length;ne<Ue;ne++)q=ce[ne],ie?Ie&&n.texSubImage2D(t.TEXTURE_2D,ne,0,0,oe,C,q):n.texImage2D(t.TEXTURE_2D,ne,j,oe,C,q);x.generateMipmaps=!1}else if(ie){if(ae){let ne=Ve(K);n.texStorage2D(t.TEXTURE_2D,je,j,ne.width,ne.height)}Ie&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,oe,C,K)}else n.texImage2D(t.TEXTURE_2D,0,j,oe,C,K);A(x)&&x.mipmapsAutoUpdate===!0&&b(te),ue.__version=re.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function qn(T,x,B){if(x.image.length!==6)return;let te=Mt(T,x),J=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+B);let re=i.get(J);if(J.version!==re.__version||te===!0){n.activeTexture(t.TEXTURE0+B);let ue=Je.getPrimaries(Je.workingColorSpace),$=x.colorSpace===Ds?null:Je.getPrimaries(x.colorSpace),K=x.colorSpace===Ds||ue===$?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,K);let oe=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,j=[];for(let pe=0;pe<6;pe++)!oe&&!C?j[pe]=M(x.image[pe],!0,s.maxCubemapSize):j[pe]=C?x.image[pe].image:x.image[pe],j[pe]=Oe(x,j[pe]);let q=j[0],ce=r.convert(x.format,x.colorSpace),ie=r.convert(x.type),ae=E(x.internalFormat,ce,ie,x.normalized,x.colorSpace),Ie=x.isVideoTexture!==!0,je=re.__version===void 0||te===!0,ne=J.dataReady,Ue=S(x,q);xt(t.TEXTURE_CUBE_MAP,x);let Ke;if(x.isDepthTexture){if(ae=_(x.format===Ns,x.type),je)if(Ie)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,ae,q.width,q.height);else for(let pe=0;pe<6;pe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,q.width,q.height,0,ce,ie,null)}else if(oe){Ie&&je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,ae,q.width,q.height);for(let pe=0;pe<6;pe++){Ke=j[pe].mipmaps;for(let vt=0;vt<Ke.length;vt++){let pn=Ke[vt];x.format!==yi?ce!==null?Ie?ne&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt,0,0,pn.width,pn.height,ce,pn.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt,ae,pn.width,pn.height,0,pn.data):Ce("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ie?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt,0,0,pn.width,pn.height,ce,ie,pn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt,ae,pn.width,pn.height,0,ce,ie,pn.data)}}}else{if(Ke=x.mipmaps,Ie&&je){Ke.length>0&&Ue++;let pe=Ve(j[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Ue,ae,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(C){Ie?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,j[pe].width,j[pe].height,ce,ie,j[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,j[pe].width,j[pe].height,0,ce,ie,j[pe].data);for(let vt=0;vt<Ke.length;vt++){let js=Ke[vt].image[pe].image;Ie?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt+1,0,0,js.width,js.height,ce,ie,js.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt+1,ae,js.width,js.height,0,ce,ie,js.data)}}else{Ie?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ce,ie,j[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,ae,ce,ie,j[pe]);for(let vt=0;vt<Ke.length;vt++){let pn=Ke[vt];Ie?ne&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt+1,0,0,ce,ie,pn.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,vt+1,ae,ce,ie,pn.image[pe])}}}A(x)&&x.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),re.__version=J.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ft(T,x,B,te,J,re){let ue=r.convert(B.format,B.colorSpace),$=r.convert(B.type),K=E(B.internalFormat,ue,$,B.normalized,B.colorSpace),oe=i.get(x),C=i.get(B);if(C.__renderTarget=x,!oe.__hasExternalTextures){let j=Math.max(1,x.width>>re),q=Math.max(1,x.height>>re);J===t.TEXTURE_3D||J===t.TEXTURE_2D_ARRAY?n.texImage3D(J,re,K,j,q,x.depth,0,ue,$,null):n.texImage2D(J,re,K,j,q,0,ue,$,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),fe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,te,J,C.__webglTexture,0,Nt(x)):(J===t.TEXTURE_2D||J>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&J<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,te,J,C.__webglTexture,re),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Hi(T,x,B){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer){let te=x.depthTexture,J=te&&te.isDepthTexture?te.type:null,re=_(x.stencilBuffer,J),ue=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Nt(x),re,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Nt(x),re,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,re,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,T)}else{let te=x.textures;for(let J=0;J<te.length;J++){let re=te[J],ue=r.convert(re.format,re.colorSpace),$=r.convert(re.type),K=E(re.internalFormat,ue,$,re.normalized,re.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Nt(x),K,x.width,x.height):B?t.renderbufferStorageMultisample(t.RENDERBUFFER,Nt(x),K,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,K,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function fn(T,x,B){let te=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let J=i.get(x.depthTexture);J.__renderTarget=x;let re=te?x.depthTexture.image[0]:x.depthTexture.image;(!J.__webglTexture||re.width!==x.width||re.height!==x.height)&&(re.width=x.width,re.height=x.height,x.depthTexture.needsUpdate=!0),te?xe(x.depthTexture,0):ge(x.depthTexture,0);let ue=J.__webglTexture,$=Nt(x),K=te?t.TEXTURE_CUBE_MAP_POSITIVE_X+B:t.TEXTURE_2D,oe=x.depthTexture.format===Ns?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Es)fe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,K,ue,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,oe,K,ue,0);else if(x.depthTexture.format===Ns)fe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,oe,K,ue,0,$):t.framebufferTexture2D(t.FRAMEBUFFER,oe,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function pi(T){let x=i.get(T),B=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let te=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),te){let J=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,te.removeEventListener("dispose",J)};te.addEventListener("dispose",J),x.__depthDisposeCallback=J}x.__boundDepthTexture=te}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(B)for(let te=0;te<6;te++)fn(x.__webglFramebuffer[te],T,te);else T.texture.mipmaps.length>0?fn(x.__webglFramebuffer[0],T,0):fn(x.__webglFramebuffer,T,0);else if(B){x.__webglDepthbuffer=[];for(let te=0;te<6;te++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[te]),x.__webglDepthbuffer[te]===void 0)x.__webglDepthbuffer[te]=t.createRenderbuffer(),Hi(x.__webglDepthbuffer[te],T,!1);else{let J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer[te];t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,re)}}else if(T.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),Hi(x.__webglDepthbuffer,T,!1);else{let J=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,re=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,re),t.framebufferRenderbuffer(t.FRAMEBUFFER,J,t.RENDERBUFFER,re)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function mi(T,x,B){let te=i.get(T);x!==void 0&&Ft(te.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),B!==void 0&&pi(T)}function gi(T){let x=T.texture,B=i.get(T),te=i.get(x);T.addEventListener("dispose",O),N(T);let J=T.textures,re=T.isWebGLCubeRenderTarget===!0,ue=J.length>1;if(ue||(te.__webglTexture===void 0&&(te.__webglTexture=t.createTexture()),te.__version=x.version,a.memory.textures++),re){B.__webglFramebuffer=[];for(let $=0;$<6;$++)if(x.mipmaps.length>0){B.__webglFramebuffer[$]=[];for(let K=0;K<x.mipmaps.length;K++)B.__webglFramebuffer[$][K]=t.createFramebuffer()}else B.__webglFramebuffer[$]=t.createFramebuffer()}else{if(x.mipmaps.length>0){B.__webglFramebuffer=[];for(let $=0;$<x.mipmaps.length;$++)B.__webglFramebuffer[$]=t.createFramebuffer()}else B.__webglFramebuffer=t.createFramebuffer();if(ue)for(let $=0,K=J.length;$<K;$++){let oe=i.get(J[$]);oe.__webglTexture===void 0&&(oe.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&fe(T)===!1){B.__webglMultisampledFramebuffer=t.createFramebuffer(),B.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,B.__webglMultisampledFramebuffer);for(let $=0;$<J.length;$++){let K=J[$];B.__webglColorRenderbuffer[$]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,B.__webglColorRenderbuffer[$]);let oe=r.convert(K.format,K.colorSpace),C=r.convert(K.type),j=E(K.internalFormat,oe,C,K.normalized,K.colorSpace,T.isXRRenderTarget===!0),q=Nt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,q,j,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+$,t.RENDERBUFFER,B.__webglColorRenderbuffer[$])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(B.__webglDepthRenderbuffer=t.createRenderbuffer(),Hi(B.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(re){n.bindTexture(t.TEXTURE_CUBE_MAP,te.__webglTexture),xt(t.TEXTURE_CUBE_MAP,x);for(let $=0;$<6;$++)if(x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Ft(B.__webglFramebuffer[$][K],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,K);else Ft(B.__webglFramebuffer[$],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);A(x)?b(t.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let $=0,K=J.length;$<K;$++){let oe=J[$],C=i.get(oe),j=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(j=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(j,C.__webglTexture),xt(j,oe),Ft(B.__webglFramebuffer,T,oe,t.COLOR_ATTACHMENT0+$,j,0),A(oe)&&b(j)}n.unbindTexture()}else{let $=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&($=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture($,te.__webglTexture),xt($,x),x.mipmaps.length>0)for(let K=0;K<x.mipmaps.length;K++)Ft(B.__webglFramebuffer[K],T,x,t.COLOR_ATTACHMENT0,$,K);else Ft(B.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,$,0);A(x)?b($):x.mipmaps.length>0&&t.texParameteri($,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}T.depthBuffer&&pi(T)}function D(T){let x=T.textures;for(let B=0,te=x.length;B<te;B++){let J=x[B];if(A(J)&&J.mipmapsAutoUpdate===!0){let re=w(T),ue=i.get(J).__webglTexture;n.bindTexture(re,ue),b(re),n.unbindTexture()}}}let _i=[];function Lt(T){if(T.samples>0){if(fe(T)===!1){let x=T.textures,B=T.width,te=T.height,J=t.COLOR_BUFFER_BIT,re=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(T),$=x.length>1;if($)for(let oe=0;oe<x.length;oe++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let oe=0;oe<x.length;oe++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(J|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(J|=t.STENCIL_BUFFER_BIT)),$){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let C=i.get(x[oe]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,B,te,0,0,B,te,J,t.NEAREST),c===!0&&(_i.length=0,_i.push(t.COLOR_ATTACHMENT0+oe),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&_i.push(re),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,_i))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),$)for(let oe=0;oe<x.length;oe++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.RENDERBUFFER,ue.__webglColorRenderbuffer[oe]);let C=i.get(x[oe]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+oe,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Nt(T){return Math.min(s.maxSamples,T.samples)}function fe(T){let x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function nn(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function Oe(T,x){let B=T.colorSpace,te=T.format,J=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||B!==Sn&&B!==Ds&&(Je.getTransfer(B)===_t?(te!==yi||J!==Zn)&&Ce("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ge("WebGLTextures: Unsupported texture color space:",B)),x}function Ve(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=De,this.resetTextureUnits=Z,this.getTextureUnits=Q,this.setTextureUnits=ye,this.setTexture2D=ge,this.setTexture2DArray=be,this.setTexture3D=Fe,this.setTextureCube=xe,this.rebindTextures=mi,this.setupRenderTarget=gi,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=Lt,this.setupDepthRenderbuffer=pi,this.setupFrameBufferTexture=Ft,this.useMultisampledRTT=fe,this.dispose=z}function VT(t,e){function n(i,s=Ds){let r,a=Je.getTransfer(s);if(i===Zn)return t.UNSIGNED_BYTE;if(i===yh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Sh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Sf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Mf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===vf)return t.BYTE;if(i===yf)return t.SHORT;if(i===ro)return t.UNSIGNED_SHORT;if(i===vh)return t.INT;if(i===Ui)return t.UNSIGNED_INT;if(i===Ln)return t.FLOAT;if(i===zn)return t.HALF_FLOAT;if(i===bf)return t.ALPHA;if(i===Tf)return t.RGB;if(i===yi)return t.RGBA;if(i===Es)return t.DEPTH_COMPONENT;if(i===Ns)return t.DEPTH_STENCIL;if(i===Mh)return t.RED;if(i===bh)return t.RED_INTEGER;if(i===pr)return t.RG;if(i===Th)return t.RG_INTEGER;if(i===Eh)return t.RGBA_INTEGER;if(i===Cc||i===Ic||i===Pc||i===Lc)if(a===_t)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Cc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ic)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Lc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Cc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ic)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Pc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Lc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Ah||i===wh||i===Rh||i===Ch)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Ah)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===wh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Rh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ch)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Ih||i===Ph||i===Lh||i===Nh||i===Dh||i===Nc||i===Uh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Ih||i===Ph)return a===_t?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Lh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Nh)return r.COMPRESSED_R11_EAC;if(i===Dh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===Nc)return r.COMPRESSED_RG11_EAC;if(i===Uh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Fh||i===Oh||i===Bh||i===kh||i===zh||i===Gh||i===Hh||i===Vh||i===Wh||i===Xh||i===qh||i===$h||i===Yh||i===Kh)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Fh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Oh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Bh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===kh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===zh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Gh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Hh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Vh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Wh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Xh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===qh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===$h)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Yh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Kh)return a===_t?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===jh||i===Zh||i===Jh)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===jh)return a===_t?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Zh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Jh)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===Qh||i===eu||i===Dc||i===tu)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===Qh)return r.COMPRESSED_RED_RGTC1_EXT;if(i===eu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Dc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===tu)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Kr?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}function $T(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Uf(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Mn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Mn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),A=M.envMap,b=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(qT.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(V_),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Mn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function YT(t,e,n,i){let s={},r={};function a(M,A){let b=A.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,A){let b=s[M.id];b===void 0&&(g(M),b=c(M),s[M.id]=b,M.addEventListener("dispose",m));let w=A.program;i.updateUBOMapping(M,w);let E=e.render.frame;r[M.id]!==E&&(l(M),r[M.id]=E)}function c(M){let A=t.createBuffer(),b=M.__size,w=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),A}function l(M){let A=s[M.id],b=M.uniforms,w=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let E=0,_=b.length;E<_;E++){let S=b[E];if(Array.isArray(S))for(let N=0,I=S.length;N<I;N++)h(S[N],E,N,w);else h(S,E,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,A,b,w){if(u(M,A,b,w)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let N=0;N<_.length;N++){let I=_[N],L=v(I,!0);d(I,M.__data,S),S+=L.storage/Float32Array.BYTES_PER_ELEMENT}}else d(_,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,M.__data)}}function d(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function u(M,A,b,w){let E=M.value,_=A+"_"+b;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let S=w[_],N=!1;for(let I=0;I<E.length;I++)f(E[I],S,I)===!0&&(N=!0);return N}return f(E,w,_)}function f(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let w=A[b];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){let A=M.uniforms,b=0,w=16;for(let _=0,S=A.length;_<S;_++){let N=Array.isArray(A[_])?A[_]:[A[_]];for(let I=0,L=N.length;I<L;I++){let O=N[I],H=Array.isArray(O.value)?O.value:[O.value],R=Array.isArray(A[_])||Array.isArray(O.value),z=b;for(let V=0,ee=H.length;V<ee;V++){let X=H[V],Z=v(X,R),Q=b%w,ye=Q%Z.boundary,De=Q+ye;b+=ye,De!==0&&w-De<Z.storage&&(b+=w-De),V===0&&(z=b),b+=Z.storage}let G=O.type==="int"?Int32Array:O.type==="uint"?Uint32Array:Float32Array;O.__data=new G((b-z)/Float32Array.BYTES_PER_ELEMENT),O.__offset=z}}let E=b%w;return E>0&&(b+=w-E),M.__size=b,M.__cache={},this}function v(M,A){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Ce("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ce("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){let A=M.target;A.removeEventListener("dispose",m),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let M in s)t.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}function jT(){return Qi===null&&(Qi=new lr(KT,16,16,pr,zn),Qi.name="DFG_LUT",Qi.minFilter=Rt,Qi.magFilter=Rt,Qi.wrapS=$n,Qi.wrapT=$n,Qi.generateMipmaps=!1,Qi.needsUpdate=!0),Qi}var fM,pM,mM,gM,_M,xM,vM,yM,SM,MM,bM,TM,EM,AM,wM,RM,CM,IM,PM,LM,NM,DM,UM,FM,OM,BM,kM,zM,GM,HM,VM,WM,XM,qM,$M,YM,KM,jM,ZM,JM,QM,e2,t2,n2,i2,s2,r2,a2,o2,c2,l2,h2,u2,d2,f2,p2,m2,g2,_2,x2,v2,y2,S2,M2,b2,T2,E2,A2,w2,R2,C2,I2,P2,L2,N2,D2,U2,F2,O2,B2,k2,z2,G2,H2,V2,W2,X2,q2,$2,Y2,K2,j2,Z2,J2,Q2,eb,tb,nb,ib,sb,rb,ab,ob,cb,lb,hb,ub,db,fb,pb,mb,gb,_b,xb,vb,yb,Sb,Mb,bb,Tb,Eb,Ab,wb,Rb,Cb,Ib,Pb,Lb,Nb,Db,Ub,Fb,Ob,Bb,kb,zb,Gb,Hb,Vb,Wb,Xb,Ze,me,es,iu,qb,D_,kc,d_,Jb,Qb,U_,F_,e3,t3,n3,lo,f3,O_,B_,k_,z_,G_,H_,g_,__,x_,v_,y_,Hf,Vf,Wf,zf,co,nT,iT,b_,oT,su,fT,mT,_T,vT,ST,TT,qf,$f,LT,FT,OT,BT,kT,L_,Oc,Gf,WT,XT,Yf,Kf,qT,V_,KT,Qi,ru,uo=Js(()=>{kf();kf();fM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,pM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,mM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,gM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,_M=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,xM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,vM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,yM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,SM=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,MM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,bM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,TM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,EM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,AM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,RM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,CM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,IM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,PM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,LM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,NM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,DM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,UM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,FM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,OM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,BM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,kM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,zM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,GM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,HM="gl_FragColor = linearToOutputTexel( gl_FragColor );",VM=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,WM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,XM=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,qM=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,$M=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,YM=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,KM=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,jM=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ZM=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,JM=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,QM=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,e2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,t2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,n2=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,i2=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,s2=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * worldNormal, ENVMAP_MAX_LOD );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_PMREM
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureLod( envMap, envMapRotation * reflectVec, roughnessToMip( roughness ) );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureLod( envMap, envMapRotation * retroVec, roughnessToMip( roughness ) );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_PMREM
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_PMREM
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,r2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,a2=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,o2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,c2=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,l2=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.045 );
material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef USE_DIFFUSE_ROUGHNESS
	float diffuseRoughnessFactor = diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		diffuseRoughnessFactor *= texture2D( diffuseRoughnessMap, vDiffuseRoughnessMapUv ).r;
	#endif
	material.diffuseRoughness = saturate( diffuseRoughnessFactor );
#endif
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.045 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,h2=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float diffuseRoughness;
	#endif
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
#ifdef USE_DIFFUSE_ROUGHNESS
	const float EON_EPSILON = 1e-7;
	float FON_DirectionalAlbedo( const in float mu, const in float roughness, const in float A ) {
		float muComp = 1.0 - mu;
		float gOverPi = muComp * ( 0.0571085289 + muComp * ( 0.491881867 + muComp * ( - 0.332181442 + muComp * 0.0714429953 ) ) );
		return A * ( 1.0 + roughness * gOverPi );
	}
	vec3 BRDF_EON( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 diffuseColor, const in float roughness ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return BRDF_Lambert( rho );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float s = dot( lightDir, viewDir ) - dotNL * dotNV;
		float sOverT = ( s > 0.0 ) ? s / max( max( dotNL, dotNV ), EON_EPSILON ) : s;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		vec3 singleScatter = rho * RECIPROCAL_PI * A * ( 1.0 + roughness * sOverT );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		float albedoV = FON_DirectionalAlbedo( dotNV, roughness, A );
		float albedoL = FON_DirectionalAlbedo( dotNL, roughness, A );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		vec3 multiScatter = rhoMultiScatter * RECIPROCAL_PI
			* max( EON_EPSILON, 1.0 - albedoV )
			* max( EON_EPSILON, 1.0 - albedoL )
			/ max( EON_EPSILON, 1.0 - averageAlbedo );
		return singleScatter + multiScatter;
	}
	vec3 EON_DirectionalAlbedo( const in vec3 diffuseColor, const in float roughness, const in float dotNV ) {
		vec3 rho = saturate( diffuseColor );
		if ( roughness <= EON_EPSILON ) return rho;
		float A = 1.0 / ( 1.0 + ( 0.5 - 2.0 / ( 3.0 * PI ) ) * roughness );
		float directionalAlbedo = FON_DirectionalAlbedo( dotNV, roughness, A );
		float averageAlbedo = A * ( 1.0 + ( 2.0 / 3.0 - 28.0 / ( 15.0 * PI ) ) * roughness );
		vec3 rhoMultiScatter = rho * rho * averageAlbedo / max( vec3( EON_EPSILON ), vec3( 1.0 ) - rho * ( 1.0 - averageAlbedo ) );
		return rho * directionalAlbedo + rhoMultiScatter * ( 1.0 - directionalAlbedo );
	}
#endif
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = max( material.clearcoatRoughness, 0.045 );
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = max( material.roughness, 0.045 );
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float alphaT = max( material.alphaT, alpha );
		float V = V_GGX_SmithCorrelated_Anisotropic( alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		vec3 diffuseBRDF = BRDF_EON( directLight.direction, geometryViewDir, geometryNormal, material.diffuseColor, material.diffuseRoughness ) * ( 1.0 - material.metalness );
	#else
		vec3 diffuseBRDF = BRDF_Lambert( material.diffuseContribution );
	#endif
	reflectedLight.directDiffuse += irradiance * diffuseBRDF * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuseAlbedo = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness );
		vec3 diffuse = irradiance * RECIPROCAL_PI * diffuseAlbedo * ( 1.0 - singleScattering - multiScattering );
	#else
		vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#endif
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	#ifdef USE_DIFFUSE_ROUGHNESS
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		vec3 diffuse = EON_DirectionalAlbedo( material.diffuseColor, material.diffuseRoughness, dotNV ) * ( 1.0 - material.metalness ) * ( 1.0 - totalScatteringDielectric );
	#else
		vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	#endif
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,u2=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_LIGHT_PROBE_GRIDS > 0
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		int probeGrid = - 1;
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( isInsideLightProbeGrid( probeWorldPos, probeWorldNormal, probesMin[ i ], probesMax[ i ], probesResolution[ i ] ) ) probeGrid = UNROLLED_LOOP_INDEX;
		}
		#pragma unroll_loop_end
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_LIGHT_PROBE_GRIDS; i ++ ) {
			if ( probeGrid == UNROLLED_LOOP_INDEX ) irradiance += getLightProbeGridIrradiance( probesSH[ i ], probesMin[ i ], probesMax[ i ], probesResolution[ i ], probeWorldPos, probeWorldNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,d2=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_PMREM )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,f2=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,p2=`#if NUM_LIGHT_PROBE_GRIDS > 0
uniform highp sampler3D probesSH[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMin[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesMax[ NUM_LIGHT_PROBE_GRIDS ];
uniform vec3 probesResolution[ NUM_LIGHT_PROBE_GRIDS ];
bool isInsideLightProbeGrid( vec3 worldPos, vec3 worldNormal, vec3 probesMin, vec3 probesMax, vec3 probesResolution ) {
	vec3 spacing = ( probesMax - probesMin ) / probesResolution;
	vec3 samplePos = worldPos + worldNormal * spacing * 0.5;
	vec3 margin = spacing * 0.01;
	return all( greaterThanEqual( samplePos, probesMin - margin ) ) && all( lessThanEqual( samplePos, probesMax + margin ) );
}
vec3 getLightProbeGridIrradiance( highp sampler3D probesSH, vec3 probesMin, vec3 probesMax, vec3 probesResolution, vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 probeSpacing = gridRange / res;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.5 / res, 1.0 - 0.5 / res );
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,m2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,g2=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,_2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,x2=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,v2=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,y2=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,S2=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,M2=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,b2=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,T2=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,E2=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,A2=`#if defined( USE_MORPHCOLORS )
	#if defined( USE_COLOR_ALPHA )
		vColor *= morphTargetBaseInfluence;
	#elif defined( USE_COLOR )
		vColor.rgb *= morphTargetBaseInfluence;
	#endif
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor.rgb += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,w2=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,R2=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,C2=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,I2=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,P2=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,L2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,N2=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,D2=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,U2=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,F2=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,O2=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,B2=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,k2=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,z2=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,G2=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,H2=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,V2=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,W2=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,X2=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,q2=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,$2=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Y2=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				vec2 radius = shadowRadius * texelSize;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float lightDistance = length( lightToPosition );
			float depthRange = shadowCameraFar - shadowCameraNear;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float depthA = - shadowCameraNear / depthRange - shadowBias;
				float depthB = shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#else
				float depthA = shadowCameraFar / depthRange + shadowBias;
				float depthB = - shadowCameraNear * shadowCameraFar / ( depthRange * lightDistance );
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			shadow = 0.0;
			for ( int i = 0; i < 5; i ++ ) {
				vec2 offset = vogelDiskSample( i, 5, phi );
				vec3 direction = bd3D + ( tangent * offset.x + bitangent * offset.y ) * texelSize;
				vec3 absDirection = abs( direction );
				float dp = depthA + depthB / max( max( absDirection.x, absDirection.y ), absDirection.z );
				shadow += texture( shadowMap, vec4( direction, dp ) );
			}
			shadow *= 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,K2=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,j2=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Z2=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,J2=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Q2=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,eb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,tb=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,nb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ib=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,sb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,rb=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,ab=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,ob=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,cb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	uniform mat3 diffuseRoughnessMapTransform;
	varying vec2 vDiffuseRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hb=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DIFFUSE_ROUGHNESSMAP
	vDiffuseRoughnessMapUv = ( diffuseRoughnessMapTransform * vec3( DIFFUSE_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ub=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,db=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,fb=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mb=`uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <envmap_common_pars_fragment>
void main() {
	#ifdef ENVMAP_TYPE_PMREM
		vec4 texColor = textureLod( envMap, backgroundRotation * vWorldDirection, roughnessToMip( backgroundBlurriness ) );
	#else
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_b=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xb=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vb=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,yb=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Sb=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mb=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,bb=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tb=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Eb=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Ab=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,wb=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rb=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Cb=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ib=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Pb=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lb=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Nb=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Db=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ub=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fb=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ob=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DIFFUSE_ROUGHNESS
	uniform float diffuseRoughness;
	#ifdef USE_DIFFUSE_ROUGHNESSMAP
		uniform sampler2D diffuseRoughnessMap;
	#endif
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bb=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kb=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zb=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Gb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Hb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Wb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Xb=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:fM,alphahash_pars_fragment:pM,alphamap_fragment:mM,alphamap_pars_fragment:gM,alphatest_fragment:_M,alphatest_pars_fragment:xM,aomap_fragment:vM,aomap_pars_fragment:yM,batching_pars_vertex:SM,batching_vertex:MM,begin_vertex:bM,beginnormal_vertex:TM,bsdfs:EM,iridescence_fragment:AM,bumpmap_pars_fragment:wM,clipping_planes_fragment:RM,clipping_planes_pars_fragment:CM,clipping_planes_pars_vertex:IM,clipping_planes_vertex:PM,color_fragment:LM,color_pars_fragment:NM,color_pars_vertex:DM,color_vertex:UM,common:FM,defaultnormal_vertex:OM,displacementmap_pars_vertex:BM,displacementmap_vertex:kM,emissivemap_fragment:zM,emissivemap_pars_fragment:GM,colorspace_fragment:HM,colorspace_pars_fragment:VM,envmap_fragment:WM,envmap_common_pars_fragment:XM,envmap_pars_fragment:qM,envmap_pars_vertex:$M,envmap_physical_pars_fragment:s2,envmap_vertex:YM,fog_vertex:KM,fog_pars_vertex:jM,fog_fragment:ZM,fog_pars_fragment:JM,gradientmap_pars_fragment:QM,lightmap_pars_fragment:e2,lights_lambert_fragment:t2,lights_lambert_pars_fragment:n2,lights_pars_begin:i2,lights_toon_fragment:r2,lights_toon_pars_fragment:a2,lights_phong_fragment:o2,lights_phong_pars_fragment:c2,lights_physical_fragment:l2,lights_physical_pars_fragment:h2,lights_fragment_begin:u2,lights_fragment_maps:d2,lights_fragment_end:f2,lightprobes_pars_fragment:p2,logdepthbuf_fragment:m2,logdepthbuf_pars_fragment:g2,logdepthbuf_pars_vertex:_2,logdepthbuf_vertex:x2,map_fragment:v2,map_pars_fragment:y2,map_particle_fragment:S2,map_particle_pars_fragment:M2,metalnessmap_fragment:b2,metalnessmap_pars_fragment:T2,morphinstance_vertex:E2,morphcolor_vertex:A2,morphnormal_vertex:w2,morphtarget_pars_vertex:R2,morphtarget_vertex:C2,normal_fragment_begin:I2,normal_fragment_maps:P2,normal_pars_fragment:L2,normal_pars_vertex:N2,normal_vertex:D2,normalmap_pars_fragment:U2,clearcoat_normal_fragment_begin:F2,clearcoat_normal_fragment_maps:O2,clearcoat_pars_fragment:B2,iridescence_pars_fragment:k2,opaque_fragment:z2,packing:G2,premultiplied_alpha_fragment:H2,project_vertex:V2,dithering_fragment:W2,dithering_pars_fragment:X2,roughnessmap_fragment:q2,roughnessmap_pars_fragment:$2,shadowmap_pars_fragment:Y2,shadowmap_pars_vertex:K2,shadowmap_vertex:j2,shadowmask_pars_fragment:Z2,skinbase_vertex:J2,skinning_pars_vertex:Q2,skinning_vertex:eb,skinnormal_vertex:tb,specularmap_fragment:nb,specularmap_pars_fragment:ib,tonemapping_fragment:sb,tonemapping_pars_fragment:rb,transmission_fragment:ab,transmission_pars_fragment:ob,uv_pars_fragment:cb,uv_pars_vertex:lb,uv_vertex:hb,worldpos_vertex:ub,background_vert:db,background_frag:fb,backgroundCube_vert:pb,backgroundCube_frag:mb,cube_vert:gb,cube_frag:_b,depth_vert:xb,depth_frag:vb,distance_vert:yb,distance_frag:Sb,equirect_vert:Mb,equirect_frag:bb,linedashed_vert:Tb,linedashed_frag:Eb,meshbasic_vert:Ab,meshbasic_frag:wb,meshlambert_vert:Rb,meshlambert_frag:Cb,meshmatcap_vert:Ib,meshmatcap_frag:Pb,meshnormal_vert:Lb,meshnormal_frag:Nb,meshphong_vert:Db,meshphong_frag:Ub,meshphysical_vert:Fb,meshphysical_frag:Ob,meshtoon_vert:Bb,meshtoon_frag:kb,points_vert:zb,points_frag:Gb,shadow_vert:Hb,shadow_frag:Vb,sprite_vert:Wb,sprite_frag:Xb},me={common:{diffuse:{value:new Be(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new Ye(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Be(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new Be(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new Be(16777215)},opacity:{value:1},center:{value:new Ye(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},es={basic:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},envMapIntensity:{value:1}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:Nn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new Be(0)},specular:{value:new Be(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:Nn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new Be(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:Nn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new Be(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:Nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:Nn([me.points,me.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:Nn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:Nn([me.common,me.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:Nn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:Nn([me.sprite,me.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distance:{uniforms:Nn([me.common,me.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distance_vert,fragmentShader:Ze.distance_frag},shadow:{uniforms:Nn([me.lights,me.fog,{color:{value:new Be(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};es.physical={uniforms:Nn([es.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new Ye(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new He},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new Be(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new Ye},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new Be(0)},specularColor:{value:new Be(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new Ye},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};iu={r:0,b:0,g:0},qb=new Xe,D_=new He;D_.set(-1,0,0,0,1,0,0,0,1);kc=class extends ai{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new dc(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new ur(5,5,5),r=new $i({name:"CubemapFromEquirect",uniforms:jr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Mn,blending:Xr});r.uniforms.tEquirect.value=n;let a=new Et(s,r),o=n.minFilter;return n.minFilter===oi&&(n.minFilter=Rt),new Qa(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},d_=256,Jb=3,Qb=20,U_=256,F_=16,e3=3,t3=new U,n3=new Be,lo=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new Qa(1,10,null),this._boxMesh=new Et(new ur(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=t3}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let d=c.autoClear,u=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(n3));let m=new Qa(i,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=d,c.autoClearColor=u,c.autoClearDepth=f,c.autoClearStencil=g,e.background=v,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(d_,Lf(e))}_fromTexture(e,n){e.mapping===$r||e.mapping===no?this._setSize(e.image.length===0?d_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=f_(e,!1,!1),i=Math.log2(e)-Jb;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=f_(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let a=e.width>>n;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===$r||e.mapping===no?(this._cubemapMaterial===null&&(this._cubemapMaterial=m_()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=p_()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=i3(),this._integrationMaterial=s3());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/F_);for(let a=0;a<=i;a++){let o=t.lodToRoughness(a,i);if(a>i-e3)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(n)+.5*Math.log2(6/(U_*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=r3());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};f3={[df]:"LINEAR_TONE_MAPPING",[ff]:"REINHARD_TONE_MAPPING",[pf]:"CINEON_TONE_MAPPING",[Rc]:"ACES_FILMIC_TONE_MAPPING",[gf]:"AGX_TONE_MAPPING",[_f]:"NEUTRAL_TONE_MAPPING",[mf]:"CUSTOM_TONE_MAPPING"};O_=new rn,B_=new ws(1,1),k_=new pc(1),z_=new sc,G_=new th,H_=new dc,g_=[],__=[],x_=new Float32Array(16),v_=new Float32Array(9),y_=new Float32Array(4);Hf=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=D3(n.type)}},Vf=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=eT(n.type)}},Wf=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},zf=/(\w+)(\])?(\[|\.)?/g;co=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);tT(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};nT=37297,iT=0;b_=new He;oT={[df]:"Linear",[ff]:"Reinhard",[pf]:"Cineon",[Rc]:"ACESFilmic",[gf]:"AgX",[_f]:"Neutral",[mf]:"Custom"};su=new U;fT=/^[ \t]*#include +<([\w\d./]+)>/gm;mT=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;_T={[wc]:"SHADOWMAP_TYPE_PCF",[eo]:"SHADOWMAP_TYPE_VSM"};vT={[no]:"ENVMAP_MODE_REFRACTION"};ST={[gh]:"ENVMAP_BLENDING_MULTIPLY",[q0]:"ENVMAP_BLENDING_MIX",[$0]:"ENVMAP_BLENDING_ADD"};TT=0,qf=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new $f(e),n.set(e,i)),i}},$f=class{constructor(e){this.id=TT++,this.code=e,this.usedTimes=0}};LT=0;FT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,OT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,BT=[new U(1,0,0),new U(-1,0,0),new U(0,1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1)],kT=[new U(0,-1,0),new U(0,-1,0),new U(0,0,1),new U(0,0,-1),new U(0,-1,0),new U(0,-1,0)],L_=new Xe,Oc=new U,Gf=new U;WT=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,XT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Yf=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new mc(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new $i({vertexShader:WT,fragmentShader:XT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new Et(new Gr(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Kf=class extends Xi{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new Yf,p={},M=n.getContextAttributes(),A=null,b=null,w=[],E=[],_=new Ye,S=null,N=null,I=new sn;I.viewport=new yt;let L=new sn;L.viewport=new yt;let O=[I,L],H=new mh,R=null,z=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let ge=w[Y];return ge===void 0&&(ge=new Xa,w[Y]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(Y){let ge=w[Y];return ge===void 0&&(ge=new Xa,w[Y]=ge),ge.getGripSpace()},this.getHand=function(Y){let ge=w[Y];return ge===void 0&&(ge=new Xa,w[Y]=ge),ge.getHandSpace()};function G(Y){let ge=E.indexOf(Y.inputSource);if(ge===-1)return;let be=w[ge];be!==void 0&&(be.update(Y.inputSource,Y.frame,l||a),be.dispatchEvent({type:Y.type,data:Y.inputSource}))}function V(){s.removeEventListener("select",G),s.removeEventListener("selectstart",G),s.removeEventListener("selectend",G),s.removeEventListener("squeeze",G),s.removeEventListener("squeezestart",G),s.removeEventListener("squeezeend",G),s.removeEventListener("end",V),s.removeEventListener("inputsourceschange",ee);for(let Y=0;Y<w.length;Y++){let ge=E[Y];ge!==null&&(E[Y]=null,w[Y].disconnect(ge))}R=null,z=null,m.reset();for(let Y in p)delete p[Y];if(e.setRenderTarget(A),f=null,u=null,d=null,s=null,b=null,De.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),N!==null){let Y=N.camera;Y.fov=N.fov,Y.zoom=N.zoom,Y.updateProjectionMatrix(),N=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){r=Y,i.isPresenting===!0&&Ce("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,i.isPresenting===!0&&Ce("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(Y){l=Y},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,n)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(Y){if(s=Y,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",G),s.addEventListener("selectstart",G),s.addEventListener("selectend",G),s.addEventListener("squeeze",G),s.addEventListener("squeezestart",G),s.addEventListener("squeezeend",G),s.addEventListener("end",V),s.addEventListener("inputsourceschange",ee),M.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let be=null,Fe=null,xe=null;M.depth&&(xe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,be=M.stencil?Ns:Es,Fe=M.stencil?Kr:Ui);let qe={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(qe),s.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),b=new ai(u.textureWidth,u.textureHeight,{format:yi,type:Zn,depthTexture:new ws(u.textureWidth,u.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,be),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let be={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,be),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new ai(f.framebufferWidth,f.framebufferHeight,{format:yi,type:Zn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),De.setContext(s),De.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(Y){for(let ge=0;ge<Y.removed.length;ge++){let be=Y.removed[ge],Fe=E.indexOf(be);Fe>=0&&(E[Fe]=null,w[Fe].disconnect(be))}for(let ge=0;ge<Y.added.length;ge++){let be=Y.added[ge],Fe=E.indexOf(be);if(Fe===-1){for(let qe=0;qe<w.length;qe++)if(qe>=E.length){E.push(be),Fe=qe;break}else if(E[qe]===null){E[qe]=be,Fe=qe;break}if(Fe===-1)break}let xe=w[Fe];xe&&xe.connect(be)}}function X(Y,ge){ge===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(ge.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(s===null)return;let ge=Y.near,be=Y.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(be=m.depthFar)),H.near=L.near=I.near=ge,H.far=L.far=I.far=be,(R!==H.near||z!==H.far)&&(s.updateRenderState({depthNear:H.near,depthFar:H.far}),R=H.near,z=H.far),H.layers.mask=Y.layers.mask|6,I.layers.mask=H.layers.mask&-5,L.layers.mask=H.layers.mask&-3;let Fe=Y.parent,xe=H.cameras;X(H,Fe);for(let qe=0;qe<xe.length;qe++)X(xe[qe],Fe);H.projectionMatrix.copy(I.projectionMatrix),H.projectionMatrixInverse.copy(I.projectionMatrixInverse),N===null&&Y.isPerspectiveCamera&&(N={camera:Y,fov:Y.fov,zoom:Y.zoom}),Z(Y,H,Fe)};function Z(Y,ge,be){be===null?Y.matrix.copy(ge.matrixWorld):(Y.matrix.copy(be.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(ge.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(ge.projectionMatrix),Y.projectionMatrixInverse.copy(ge.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=Or*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(u===null&&f===null))return c},this.setFoveation=function(Y){c=Y,u!==null&&(u.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(Y){return p[Y]};let Q=null;function ye(Y,ge){if(h=ge.getViewerPose(l||a),g=ge,h!==null){let be=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Fe=!1;be.length!==H.cameras.length&&(H.cameras.length=0,Fe=!0);for(let ze=0;ze<be.length;ze++){let xt=be[ze],Mt=null;if(f!==null)Mt=f.getViewport(xt);else{let xn=d.getViewSubImage(u,xt);Mt=xn.viewport,ze===0&&(e.setRenderTargetTextures(b,xn.colorTexture,xn.depthStencilTexture),e.setRenderTarget(b))}let it=O[ze];it===void 0&&(it=new sn,it.layers.enable(ze),it.viewport=new yt,O[ze]=it),it.matrix.fromArray(xt.transform.matrix),it.matrix.decompose(it.position,it.quaternion,it.scale),it.projectionMatrix.fromArray(xt.projectionMatrix),it.projectionMatrixInverse.copy(it.projectionMatrix).invert(),it.viewport.set(Mt.x,Mt.y,Mt.width,Mt.height),ze===0&&(H.matrix.copy(it.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Fe===!0&&H.cameras.push(it)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let ze=d.getDepthInformation(be[0]);ze&&ze.isValid&&ze.texture&&m.init(ze,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),d=i.getBinding();for(let ze=0;ze<be.length;ze++){let xt=be[ze].camera;if(xt){let Mt=p[xt];Mt||(Mt=new mc,p[xt]=Mt);let it=d.getCameraImage(xt);Mt.sourceTexture=it}}}}for(let be=0;be<w.length;be++){let Fe=E[be],xe=w[be];Fe!==null&&xe!==void 0&&xe.update(Fe,ge,l||a)}Q&&Q(Y,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}let De=new N_;De.setAnimationLoop(ye),this.setAnimationLoop=function(Y){Q=Y},this.dispose=function(){}}},qT=new Xe,V_=new He;V_.set(-1,0,0,0,1,0,0,0,1);KT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Qi=null;ru=class{constructor(e={}){let{canvas:n=s_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Zn}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Eh,Th,bh]),p=new Set([Zn,Ui,ro,Kr,yh,Sh]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],S=[],N=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Zi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,L=!1,O=null,H=null,R=null,z=null;this._outputColorSpace=Wt;let G=0,V=0,ee=null,X=-1,Z=null,Q=new yt,ye=new yt,De=null,Y=new Be(0),ge=0,be=n.width,Fe=n.height,xe=1,qe=null,Kt=null,ze=new yt(0,0,be,Fe),xt=new yt(0,0,be,Fe),Mt=!1,it=new hr,xn=new nh,tn=!1,qn=!1,Ft=new Xe,Hi=new U,fn=new yt,pi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},mi=!1;function gi(){return ee===null?xe:1}let D=i;function _i(y,P){return n.getContext(y,P)}let Lt,Nt,fe,nn,Oe,Ve,T,x,B,te,J,re,ue,$,K,oe,C,j,q,ce,ie,ae,Ie;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Ue,!1),n.addEventListener("webglcontextrestored",Ke,!1),n.addEventListener("webglcontextcreationerror",pe,!1),D===null){let P="webgl2";if(D=_i(P,y),D===null)throw _i(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}je()}catch(y){throw n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Ge("WebGLRenderer: "+y.message),y}function je(){Lt=new o3(D),Lt.init(),ie=new VT(D,Lt),Nt=new jb(D,Lt,e,ie),fe=new GT(D,Lt),Nt.reversedDepthBuffer&&u&&fe.buffers.depth.setReversed(!0),H=D.createFramebuffer(),R=D.createFramebuffer(),z=D.createFramebuffer(),nn=new h3(D),Oe=new wT,Ve=new HT(D,Lt,fe,Oe,Nt,ie,nn),T=new a3(I),x=new dM(D),ae=new Yb(D,x),B=new c3(D,x,nn,ae),te=new d3(D,B,x,ae,nn),j=new u3(D,Nt,Ve),K=new Zb(Oe),J=new AT(I,T,Lt,Nt,ae,K),re=new $T(I,Oe),ue=new CT,$=new UT(Lt),C=new $b(I,T,fe,te,g,c),oe=new zT(I,te,Nt),Ie=new YT(D,nn,Nt,fe),q=new Kb(D,Lt,nn),ce=new l3(D,Lt,nn),nn.programs=J.programs,I.capabilities=Nt,I.extensions=Lt,I.properties=Oe,I.renderLists=ue,I.shadowMap=oe,I.state=fe,I.info=nn}v!==Zn&&(N=new p3(v,n.width,n.height,o,s,r));let ne=new Kf(I,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){let y=Lt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Lt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(y){y!==void 0&&(xe=y,this.setSize(be,Fe,!1))},this.getSize=function(y){return y.set(be,Fe)},this.setSize=function(y,P,W=!0){if(ne.isPresenting){Ce("WebGLRenderer: Can't change size while VR device is presenting.");return}be=y,Fe=P,n.width=Math.floor(y*xe),n.height=Math.floor(P*xe),W===!0&&(n.style.width=y+"px",n.style.height=P+"px"),N!==null&&N.setSize(n.width,n.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(be*xe,Fe*xe).floor()},this.setDrawingBufferSize=function(y,P,W){be=y,Fe=P,xe=W,n.width=Math.floor(y*W),n.height=Math.floor(P*W),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(v===Zn){Ge("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Ce("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}N.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(Q)},this.getViewport=function(y){return y.copy(ze)},this.setViewport=function(y,P,W,F){y.isVector4?ze.set(y.x,y.y,y.z,y.w):ze.set(y,P,W,F),fe.viewport(Q.copy(ze).multiplyScalar(gi()).round())},this.getScissor=function(y){return y.copy(xt)},this.setScissor=function(y,P,W,F){y.isVector4?xt.set(y.x,y.y,y.z,y.w):xt.set(y,P,W,F),fe.scissor(ye.copy(xt).multiplyScalar(gi()).round())},this.getScissorTest=function(){return Mt},this.setScissorTest=function(y){fe.setScissorTest(Mt=y)},this.setOpaqueSort=function(y){qe=y},this.setTransparentSort=function(y){Kt=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,W=!0){let F=0;if(y){let k=!1;if(ee!==null){let de=ee.texture.format;k=m.has(de)}if(k){let de=ee.texture.type,Se=p.has(de),he=C.getClearColor(),ve=C.getClearAlpha(),Re=he.r,We=he.g,st=he.b;Se?(M[0]=Re,M[1]=We,M[2]=st,M[3]=ve,D.clearBufferuiv(D.COLOR,0,M)):(A[0]=Re,A[1]=We,A[2]=st,A[3]=ve,D.clearBufferiv(D.COLOR,0,A))}else F|=D.COLOR_BUFFER_BIT}P&&(F|=D.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),W&&(F|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),F!==0&&D.clear(F)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),O=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Ue,!1),n.removeEventListener("webglcontextrestored",Ke,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),C.dispose(),ue.dispose(),$.dispose(),Ve.dispose(),Oe.dispose(),T.dispose(),te.dispose(),B.dispose(),ae.dispose(),Ie.dispose(),J.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",wg),ne.removeEventListener("sessionend",Rg),wr.stop()};function Ue(y){y.preventDefault(),ic("WebGLRenderer: Context Lost."),L=!0}function Ke(){ic("WebGLRenderer: Context Restored."),L=!1;let y=nn.autoReset,P=oe.enabled,W=oe.autoUpdate,F=oe.needsUpdate,k=oe.type;je(),nn.autoReset=y,oe.enabled=P,oe.autoUpdate=W,oe.needsUpdate=F,oe.type=k}function pe(y){Ge("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function vt(y){let P=y.target;P.removeEventListener("dispose",vt),pn(P)}function pn(y){js(y),Oe.remove(y)}function js(y){let P=Oe.get(y).programs;P!==void 0&&(P.forEach(function(W){J.releaseProgram(W)}),y.isShaderMaterial&&J.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,W,F,k,de){P===null&&(P=pi);let Se=k.isMesh&&k.matrixWorld.determinantAffine()<0,he=nS(y,P,W,F,k);fe.setMaterial(F,Se);let ve=W.index,Re=1;if(F.wireframe===!0){if(ve=B.getWireframeAttribute(W),ve===void 0)return;Re=2}let We=W.drawRange,st=W.attributes.position,Te=We.start*Re,rt=(We.start+We.count)*Re;de!==null&&(Te=Math.max(Te,de.start*Re),rt=Math.min(rt,(de.start+de.count)*Re)),ve!==null?(Te=Math.max(Te,0),rt=Math.min(rt,ve.count)):st!=null&&(Te=Math.max(Te,0),rt=Math.min(rt,st.count));let jt=rt-Te;if(jt<0||jt===1/0)return;ae.setup(k,F,he,W,ve);let At,bt=q;if(ve!==null&&(At=x.get(ve),bt=ce,bt.setIndex(At)),k.isMesh)F.wireframe===!0?(fe.setLineWidth(F.wireframeLinewidth*gi()),bt.setMode(D.LINES)):bt.setMode(D.TRIANGLES);else if(k.isLine){let An=F.linewidth;An===void 0&&(An=1),fe.setLineWidth(An*gi()),k.isLineSegments?bt.setMode(D.LINES):k.isLineLoop?bt.setMode(D.LINE_LOOP):bt.setMode(D.LINE_STRIP)}else k.isPoints?bt.setMode(D.POINTS):k.isSprite&&bt.setMode(D.TRIANGLES);if(k.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))bt.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{let An=k._multiDrawStarts,Ee=k._multiDrawCounts,Dn=k._multiDrawCount,mt=ve?x.get(ve).bytesPerElement:1,Rr=Oe.get(F).currentProgram.getUniforms();for(let wn=0;wn<Dn;wn++)Rr.setValue(D,"_gl_DrawID",wn),bt.render(An[wn]/mt,Ee[wn])}else if(k.isInstancedMesh)bt.renderInstances(Te,jt,k.count);else if(W.isInstancedBufferGeometry){let An=W._maxInstanceCount!==void 0?W._maxInstanceCount:1/0,Ee=Math.min(W.instanceCount,An);bt.renderInstances(Te,jt,Ee)}else bt.render(Te,jt)};function Ag(y,P,W,F){O!==null&&y.isNodeMaterial&&O.setObject(F,y),tn===!0&&K.setState(y,W,!1),y.transparent===!0&&y.side===kn&&y.forceSinglePass===!1?(y.side=Mn,y.needsUpdate=!0,Wo(y,P,F),y.side=ji,y.needsUpdate=!0,Wo(y,P,F),y.side=kn):Wo(y,P,F)}this.compile=function(y,P,W=null){W===null&&(W=y),O!==null&&O.renderStart(y,P,W),E=$.get(W),E.init(P),S.push(E),W.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),y!==W&&y.traverseVisible(function(k){k.isLight&&k.layers.test(P.layers)&&(E.pushLight(k),k.castShadow&&E.pushShadow(k))}),E.setupLights(),O!==null&&O.updateLights(E.state.lightsArray),qn=this.localClippingEnabled,tn=K.init(this.clippingPlanes,qn),tn===!0&&K.setGlobalState(this.clippingPlanes,P),O!==null&&oe.render(E.state.shadowsArray,W,P);let F=new Set;return y.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;let de=k.material;if(de)if(Array.isArray(de))for(let Se=0;Se<de.length;Se++){let he=de[Se];Ag(he,W,P,k),F.add(he)}else Ag(de,W,P,k),F.add(de)}),E=S.pop(),O!==null&&O.renderEnd(),F},this.compileAsync=function(y,P,W=null){let F=this.compile(y,P,W);return new Promise(k=>{function de(){if(F.forEach(function(Se){let ve=Oe.get(Se).currentProgram;(ve===void 0||ve.isReady())&&F.delete(Se)}),F.size===0){k(y);return}setTimeout(de,10)}Lt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let yd=null;function eS(y){yd&&yd(y)}function wg(){wr.stop()}function Rg(){wr.start()}let wr=new N_;wr.setAnimationLoop(eS),typeof self<"u"&&wr.setContext(self),this.setAnimationLoop=function(y){yd=y,ne.setAnimationLoop(y),y===null?wr.stop():wr.start()},ne.addEventListener("sessionstart",wg),ne.addEventListener("sessionend",Rg),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Ge("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;O!==null&&O.renderStart(y,P);let W=ne.enabled===!0&&ne.isPresenting===!0,F=N!==null&&(ee===null||W)&&N.begin(I,ee);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(N===null||N.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(P),P=ne.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,P,ee),E=$.get(y,S.length),E.init(P),E.state.textureUnits=Ve.getTextureUnits(),S.push(E),Ft.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?xn.setFromArrayCamera(P):it.setFromProjectionMatrix(Ft,vi,P.reversedDepth),qn=this.localClippingEnabled,tn=K.init(this.clippingPlanes,qn),w=ue.get(y,_.length),w.init(),_.push(w),this.info.render.frame++,ne.enabled===!0&&ne.isPresenting===!0){let Se=I.xr.getDepthSensingMesh();Se!==null&&Sd(Se,P,-1/0,I.sortObjects)}Sd(y,P,0,I.sortObjects),w.finish(),O!==null&&O.updateLights(E.state.lightsArray),I.sortObjects===!0&&w.sort(qe,Kt),mi=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,mi&&C.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),tn===!0&&K.beginShadows();let k=E.state.shadowsArray;if(oe.render(k,y,P),tn===!0&&K.endShadows(),(F&&N.hasRenderPass())===!1){let Se=w.opaque,he=w.transmissive;if(E.setupLights(),P.isArrayCamera){let ve=P.cameras;if(he.length>0)for(let Re=0,We=ve.length;Re<We;Re++){let st=ve[Re];Ig(Se,he,y,st)}mi&&C.render(y);for(let Re=0,We=ve.length;Re<We;Re++){let st=ve[Re];Cg(w,y,st,st.viewport)}}else he.length>0&&Ig(Se,he,y,P),mi&&C.render(y),Cg(w,y,P)}ee!==null&&V===0&&(Ve.updateMultisampleRenderTarget(ee),Ve.updateRenderTargetMipmap(ee)),F&&N.end(I),y.isScene===!0&&y.onAfterRender(I,y,P),ae.resetDefaultState(),X=-1,Z=null,S.pop(),S.length>0?(E=S[S.length-1],Ve.setTextureUnits(E.state.textureUnits),tn===!0&&K.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,O!==null&&O.renderEnd()};function Sd(y,P,W,F){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)W=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let Se=P.isArrayCamera?xn:it;if(!y.frustumCulled||y.intersectsFrustum(Se)){F&&fn.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ft);let he=te.update(y),ve=y.material;ve.visible&&w.push(y,he,ve,W,fn.z,null,P)}}else if(y.isMesh||y.isLine||y.isPoints){let Se=P.isArrayCamera?xn:it;if(!y.frustumCulled||y.intersectsFrustum(Se)){let he=te.update(y),ve=y.material;if(F&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),fn.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),fn.copy(he.boundingSphere.center)),fn.applyMatrix4(y.matrixWorld).applyMatrix4(Ft)),Array.isArray(ve)){let Re=he.groups;for(let We=0,st=Re.length;We<st;We++){let Te=Re[We],rt=ve[Te.materialIndex];rt&&rt.visible&&w.push(y,he,rt,W,fn.z,Te,P)}}else ve.visible&&w.push(y,he,ve,W,fn.z,null,P)}}}let de=y.children;for(let Se=0,he=de.length;Se<he;Se++)Sd(de[Se],P,W,F)}function Cg(y,P,W,F){let{opaque:k,transmissive:de,transparent:Se}=y;E.setupLightsView(W),tn===!0&&K.setGlobalState(I.clippingPlanes,W),F&&fe.viewport(Q.copy(F)),k.length>0&&_l(k,P,W),de.length>0&&_l(de,P,W),Se.length>0&&_l(Se,P,W),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function Ig(y,P,W,F){if((W.isScene===!0?W.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[F.id]===void 0){let Te=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[F.id]=new ai(1,1,{generateMipmaps:!0,type:Te?zn:Zn,minFilter:oi,samples:Math.max(4,Nt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Je.workingColorSpace})}let de=E.state.transmissionRenderTarget[F.id],Se=F.viewport||Q;de.setSize(Se.z*I.transmissionResolutionScale,Se.w*I.transmissionResolutionScale);let he=I.getRenderTarget(),ve=I.getActiveCubeFace(),Re=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(Y),ge=I.getClearAlpha(),ge<1&&I.setClearColor(16777215,.5),I.clear(),mi&&C.render(W);let We=I.toneMapping;I.toneMapping=Zi;let st=F.viewport;if(F.viewport!==void 0&&(F.viewport=void 0),E.setupLightsView(F),tn===!0&&K.setGlobalState(I.clippingPlanes,F),_l(y,W,F),Ve.updateMultisampleRenderTarget(de),Ve.updateRenderTargetMipmap(de),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Te=!1;for(let rt=0,jt=P.length;rt<jt;rt++){let At=P[rt],{object:bt,geometry:An,material:Ee,group:Dn}=At;if(Ee.side===kn&&bt.layers.test(F.layers)){let mt=Ee.side;Ee.side=Mn,Ee.needsUpdate=!0,Pg(bt,W,F,An,Ee,Dn),Ee.side=mt,Ee.needsUpdate=!0,Te=!0}}Te===!0&&(Ve.updateMultisampleRenderTarget(de),Ve.updateRenderTargetMipmap(de))}I.setRenderTarget(he,ve,Re),I.setClearColor(Y,ge),st!==void 0&&(F.viewport=st),I.toneMapping=We}function _l(y,P,W){let F=P.isScene===!0?P.overrideMaterial:null;for(let k=0,de=y.length;k<de;k++){let Se=y[k],{object:he,geometry:ve,group:Re}=Se,We=Se.material;We.allowOverride===!0&&F!==null&&(We=F),he.layers.test(W.layers)&&Pg(he,P,W,ve,We,Re)}}function Pg(y,P,W,F,k,de){O!==null&&k.isNodeMaterial&&O.setObject(y,k),y.onBeforeRender(I,P,W,F,k,de),y.modelViewMatrix.multiplyMatrices(W.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),k.onBeforeRender(I,P,W,F,y,de),k.transparent===!0&&k.side===kn&&k.forceSinglePass===!1?(k.side=Mn,k.needsUpdate=!0,I.renderBufferDirect(W,P,F,k,y,de),k.side=ji,k.needsUpdate=!0,I.renderBufferDirect(W,P,F,k,y,de),k.side=kn):I.renderBufferDirect(W,P,F,k,y,de),y.onAfterRender(I,P,W,F,k,de)}function Lg(y){let P=0;for(let W of y)W.texture!==null&&P++;return P}function Wo(y,P,W){P.isScene!==!0&&(P=pi);let F=Oe.get(y),k=E.state.lights,de=E.state.shadowsArray,Se=k.state.version,he=J.getParameters(y,k.state,de,P,W,E.state.lightProbeGridArray),ve=J.getProgramCacheKey(he),Re=F.programs;F.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,F.fog=P.fog;let We=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;F.envMap=T.get(y.envMap||F.environment,We),F.envMapRotation=F.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Re===void 0&&(y.addEventListener("dispose",vt),Re=new Map,F.programs=Re,F.programVariants=new Map);let st=Re.get(ve);if(st!==void 0){if(F.currentProgram===st&&F.lightsStateVersion===Se)return Dg(y,he),st}else he.uniforms=J.getUniforms(y),O!==null&&y.isNodeMaterial&&O.build(y,W,he),y.onBeforeCompile(he,I),st=J.acquireProgram(he,ve),Re.set(ve,st),F.uniforms=he.uniforms;let Te=F.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Te.clippingPlanes=K.uniform),Dg(y,he),F.needsLights=sS(y),F.lightsStateVersion=Se,F.needsLights&&(Te.ambientLightColor.value=k.state.ambient,Te.lightProbe.value=k.state.probe,Te.sunLights.value=k.state.sun,Te.sunLightShadows.value=k.state.sunShadow,Te.directionalLights.value=k.state.directional,Te.directionalLightShadows.value=k.state.directionalShadow,Te.spotLights.value=k.state.spot,Te.spotLightShadows.value=k.state.spotShadow,Te.rectAreaLights.value=k.state.rectArea,Te.ltc_1.value=k.state.rectAreaLTC1,Te.ltc_2.value=k.state.rectAreaLTC2,Te.pointLights.value=k.state.point,Te.pointLightShadows.value=k.state.pointShadow,Te.hemisphereLights.value=k.state.hemi,Te.sunShadowMatrix.value=k.state.sunShadowMatrix,Te.sunShadowCascade.value=k.state.sunShadowCascade,Te.directionalShadowMatrix.value=k.state.directionalShadowMatrix,Te.spotLightMatrix.value=k.state.spotLightMatrix,Te.spotLightMap.value=k.state.spotLightMap,Te.pointShadowMatrix.value=k.state.pointShadowMatrix),F.numLightProbeGrids=Lg(E.state.lightProbeGridArray),F.currentProgram=st,F.uniformsList=null,st}function tS(y,P,W,F,k){let de=Oe.get(y),Se=de.currentProgram.id+","+F+","+k,he=de.programVariants.get(Se);return he===void 0?(he=Wo(y,P,W),de.programVariants.set(Se,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=F,de.toneMapping=k),he}function Ng(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=co.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function Dg(y,P){let W=Oe.get(y);W.outputColorSpace=P.outputColorSpace,W.batching=P.batching,W.batchingColor=P.batchingColor,W.instancing=P.instancing,W.instancingColor=P.instancingColor,W.instancingMorph=P.instancingMorph,W.skinning=P.skinning,W.morphTargets=P.morphTargets,W.morphNormals=P.morphNormals,W.morphColors=P.morphColors,W.morphTargetsCount=P.morphTargetsCount,W.numClippingPlanes=P.numClippingPlanes,W.numIntersection=P.numClipIntersection,W.vertexAlphas=P.vertexAlphas,W.vertexTangents=P.vertexTangents,W.toneMapping=P.toneMapping}function nS(y,P,W,F,k){P.isScene!==!0&&(P=pi),Ve.resetTextureUnits();let de=P.fog,Se=F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial?P.environment:null,he=ee===null?I.outputColorSpace:ee.isXRRenderTarget===!0?ee.texture.colorSpace:Je.workingColorSpace,ve=F.isMeshStandardMaterial||F.isMeshLambertMaterial&&!F.envMap||F.isMeshPhongMaterial&&!F.envMap,Re=T.get(F.envMap||Se,ve),We=F.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,st=!!W.attributes.tangent&&(!!F.normalMap||F.anisotropy>0),Te=!!W.morphAttributes.position,rt=!!W.morphAttributes.normal,jt=!!W.morphAttributes.color,At=Zi;F.toneMapped&&(ee===null||ee.isXRRenderTarget===!0)&&(At=I.toneMapping);let bt=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,An=bt!==void 0?bt.length:0,Ee=Oe.get(F),Dn=E.state.lights;if(tn===!0&&(qn===!0||y!==Z)){let Ot=y===Z&&F.id===X;K.setState(F,y,Ot)}let mt=!1,Rr=!1;F.version===Ee.__version?Ee.needsLights&&Ee.lightsStateVersion!==Dn.state.version||k.isBatchedMesh&&Ee.batching===!1||!k.isBatchedMesh&&Ee.batching===!0||k.isBatchedMesh&&Ee.batchingColor===!0&&k._colorsTexture===null||k.isBatchedMesh&&Ee.batchingColor===!1&&k._colorsTexture!==null||k.isInstancedMesh&&Ee.instancing===!1||!k.isInstancedMesh&&Ee.instancing===!0||k.isSkinnedMesh&&Ee.skinning===!1||!k.isSkinnedMesh&&Ee.skinning===!0||k.isInstancedMesh&&Ee.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&Ee.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&Ee.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&Ee.instancingMorph===!1&&k.morphTexture!==null||Ee.envMap!==Re||F.fog===!0&&Ee.fog!==de||Ee.numClippingPlanes!==void 0&&(Ee.numClippingPlanes!==K.numPlanes||Ee.numIntersection!==K.numIntersection)||Ee.vertexAlphas!==We||Ee.vertexTangents!==st||Ee.morphTargets!==Te||Ee.morphNormals!==rt||Ee.morphColors!==jt||Ee.morphTargetsCount!==An||Ee.numLightProbeGrids!==Lg(E.state.lightProbeGridArray)?mt=!0:(Ee.outputColorSpace!==he||Ee.toneMapping!==At)&&(Rr=!0):(mt=!0,Ee.__version=F.version);let wn=Ee.currentProgram;(mt===!0||Rr===!0)&&(wn=Rr===!0?tS(F,P,k,he,At):Wo(F,P,k),O&&F.isNodeMaterial&&O.onUpdateProgram(F,wn,Ee));let xl=!1,Zs=!1,Cr=!1,ht=wn.getUniforms(),vn=Ee.uniforms;if(fe.useProgram(wn.program)&&(xl=!0,Zs=!0,Cr=!0),F.id!==X&&(X=F.id,Zs=!0),xl||Z!==y){fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ht.setValue(D,"projectionMatrix",y.projectionMatrix),ht.setValue(D,"viewMatrix",y.matrixWorldInverse);let mn=ht.map.cameraPosition;mn!==void 0&&mn.setValue(D,Hi.setFromMatrixPosition(y.matrixWorld)),Nt.logarithmicDepthBuffer&&ht.setValue(D,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(F.isMeshPhongMaterial||F.isMeshToonMaterial||F.isMeshLambertMaterial||F.isMeshBasicMaterial||F.isMeshStandardMaterial||F.isShaderMaterial)&&ht.setValue(D,"isOrthographic",y.isOrthographicCamera===!0),Z!==y&&(Z=y,Zs=!0,Cr=!0)}if(Ee.needsLights&&(Dn.state.sunShadowMap.length>0&&ht.setValue(D,"sunShadowMap",Dn.state.sunShadowMap,Ve),Dn.state.directionalShadowMap.length>0&&ht.setValue(D,"directionalShadowMap",Dn.state.directionalShadowMap,Ve),Dn.state.spotShadowMap.length>0&&ht.setValue(D,"spotShadowMap",Dn.state.spotShadowMap,Ve),Dn.state.pointShadowMap.length>0&&ht.setValue(D,"pointShadowMap",Dn.state.pointShadowMap,Ve)),k.isSkinnedMesh){ht.setOptional(D,k,"bindMatrix"),ht.setOptional(D,k,"bindMatrixInverse");let Ot=k.skeleton;Ot&&(Ot.boneTexture===null&&Ot.computeBoneTexture(),ht.setValue(D,"boneTexture",Ot.boneTexture,Ve))}k.isBatchedMesh&&(ht.setOptional(D,k,"batchingTexture"),ht.setValue(D,"batchingTexture",k._matricesTexture,Ve),ht.setOptional(D,k,"batchingIdTexture"),ht.setValue(D,"batchingIdTexture",k._indirectTexture,Ve),ht.setOptional(D,k,"batchingColorTexture"),k._colorsTexture!==null&&ht.setValue(D,"batchingColorTexture",k._colorsTexture,Ve));let Ci=W.morphAttributes;if((Ci.position!==void 0||Ci.normal!==void 0||Ci.color!==void 0)&&j.update(k,W,wn),(Zs||Ee.receiveShadow!==k.receiveShadow)&&(Ee.receiveShadow=k.receiveShadow,ht.setValue(D,"receiveShadow",k.receiveShadow)),(F.isMeshStandardMaterial||F.isMeshLambertMaterial||F.isMeshPhongMaterial)&&F.envMap===null&&P.environment!==null&&(vn.envMapIntensity.value=P.environmentIntensity),vn.dfgLUT!==void 0&&(vn.dfgLUT.value=jT()),Zs){if(ht.setValue(D,"toneMappingExposure",I.toneMappingExposure),Ee.needsLights&&iS(vn,Cr),de&&F.fog===!0&&re.refreshFogUniforms(vn,de),re.refreshMaterialUniforms(vn,F,xe,Fe,E.state.transmissionRenderTarget[y.id]),Ee.needsLights&&Ee.numLightProbeGrids>0){let Ot=b,mn=0;for(let gs of E.state.lightProbeGridArray)gs.texture!==null&&(Ot.textures[mn]=gs.texture,Ot.min[mn]=gs.boundingBox.min,Ot.max[mn]=gs.boundingBox.max,Ot.resolution[mn]=gs.resolution,mn++);for(let gs in Ot)Ot[gs].length=mn;vn.probesSH.value=Ot.textures,vn.probesMin.value=Ot.min,vn.probesMax.value=Ot.max,vn.probesResolution.value=Ot.resolution}co.upload(D,Ng(Ee),vn,Ve)}if(F.isShaderMaterial&&F.uniformsNeedUpdate===!0&&(co.upload(D,Ng(Ee),vn,Ve),F.uniformsNeedUpdate=!1),F.isSpriteMaterial&&ht.setValue(D,"center",k.center),ht.setValue(D,"modelViewMatrix",k.modelViewMatrix),ht.setValue(D,"normalMatrix",k.normalMatrix),ht.setValue(D,"modelMatrix",k.matrixWorld),F.uniformsGroups!==void 0){let Ot=F.uniformsGroups;for(let mn=0,gs=Ot.length;mn<gs;mn++){let Fg=Ot[mn];Ie.update(Fg,wn),Ie.bind(Fg,wn)}}return wn}function iS(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function sS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return G},this.getActiveMipmapLevel=function(){return V},this.getRenderTarget=function(){return ee},this.setRenderTargetTextures=function(y,P,W){let F=Oe.get(y);F.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,F.__autoAllocateDepthBuffer===!1&&(F.__useRenderToTexture=!1),Oe.get(y.texture).__webglTexture=P,Oe.get(y.depthTexture).__webglTexture=F.__autoAllocateDepthBuffer?void 0:W,F.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let W=Oe.get(y);W.__webglFramebuffer=P,W.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,W=0){ee=y,G=P,V=W;let F=null,k=!1,de=!1;if(y){let he=Oe.get(y);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(D.FRAMEBUFFER,he.__webglFramebuffer),Q.copy(y.viewport),ye.copy(y.scissor),De=y.scissorTest,fe.viewport(Q),fe.scissor(ye),fe.setScissorTest(De),X=-1;return}else if(he.__webglFramebuffer===void 0)Ve.setupRenderTarget(y);else if(he.__hasExternalTextures)Ve.rebindTextures(y,Oe.get(y.texture).__webglTexture,Oe.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let We=y.depthTexture;if(he.__boundDepthTexture!==We){if(We!==null&&Oe.has(We)&&(y.width!==We.image.width||y.height!==We.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Ve.setupDepthRenderbuffer(y)}}let ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let Re=Oe.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Re[P])?F=Re[P][W]:F=Re[P],k=!0):y.samples>0&&Ve.useMultisampledRTT(y)===!1?F=Oe.get(y).__webglMultisampledFramebuffer:Array.isArray(Re)?F=Re[W]:F=Re,Q.copy(y.viewport),ye.copy(y.scissor),De=y.scissorTest}else Q.copy(ze).multiplyScalar(xe).floor(),ye.copy(xt).multiplyScalar(xe).floor(),De=Mt;if(W!==0&&(F=H),fe.bindFramebuffer(D.FRAMEBUFFER,F)&&fe.drawBuffers(y,F),fe.viewport(Q),fe.scissor(ye),fe.setScissorTest(De),k){let he=Oe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,W)}else if(de){let he=P;for(let ve=0;ve<y.textures.length;ve++){let Re=Oe.get(y.textures[ve]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+ve,Re.__webglTexture,W,he)}}else if(y!==null&&W!==0){let he=Oe.get(y.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,he.__webglTexture,W)}X=-1};function Ug(y){let P=Oe.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=Nt.textureFormatReadable(y.format),P.__typeReadable=Nt.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,W,F,k,de,Se,he=0){if(!(y&&y.isWebGLRenderTarget)){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(D.FRAMEBUFFER,ve);try{let Re=y.textures[he],We=Re.format,st=Re.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Te=Ug(Re);if(Te.__formatReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Te.__typeReadable===!1){Ge("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-F&&W>=0&&W<=y.height-k&&D.readPixels(P,W,F,k,ie.convert(We),ie.convert(st),de)}finally{let Re=ee!==null?Oe.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,Re)}}},this.readRenderTargetPixelsAsync=async function(y,P,W,F,k,de,Se,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=Oe.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Se!==void 0&&(ve=ve[Se],Array.isArray(ve)&&(ve=ve[0])),ve)if(P>=0&&P<=y.width-F&&W>=0&&W<=y.height-k){fe.bindFramebuffer(D.FRAMEBUFFER,ve);let Re=y.textures[he],We=Re.format,st=Re.type;y.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+he);let Te=Ug(Re);if(Te.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Te.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let rt=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.bufferData(D.PIXEL_PACK_BUFFER,de.byteLength,D.STREAM_READ),D.readPixels(P,W,F,k,ie.convert(We),ie.convert(st),0),D.bindBuffer(D.PIXEL_PACK_BUFFER,null);let jt=ee!==null?Oe.get(ee).__webglFramebuffer:null;fe.bindFramebuffer(D.FRAMEBUFFER,jt);let At=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await a_(D,At,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,rt),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,de),D.bindBuffer(D.PIXEL_PACK_BUFFER,null),D.deleteBuffer(rt),D.deleteSync(At),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,W=0){let F=Math.pow(2,-W),k=Math.floor(y.image.width*F),de=Math.floor(y.image.height*F),Se=P!==null?P.x:0,he=P!==null?P.y:0;Ve.setTexture2D(y,0),D.copyTexSubImage2D(D.TEXTURE_2D,W,0,0,Se,he,k,de),fe.unbindTexture()},this.copyTextureToTexture=function(y,P,W=null,F=null,k=0,de=0){let Se,he,ve,Re,We,st,Te,rt,jt,At=y.isCompressedTexture?y.mipmaps[de]:y.image;if(W!==null)Se=W.max.x-W.min.x,he=W.max.y-W.min.y,ve=W.isBox3?W.max.z-W.min.z:1,Re=W.min.x,We=W.min.y,st=W.isBox3?W.min.z:0;else{let ht=Math.pow(2,-k);Se=Math.floor(At.width*ht),he=Math.floor(At.height*ht),y.isDataArrayTexture?ve=At.depth:y.isData3DTexture?ve=Math.floor(At.depth*ht):ve=1,Re=0,We=0,st=0}F!==null?(Te=F.x,rt=F.y,jt=F.z):(Te=0,rt=0,jt=0);let bt=ie.convert(P.format),An=ie.convert(P.type),Ee;P.isData3DTexture?(Ve.setTexture3D(P,0),Ee=D.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Ve.setTexture2DArray(P,0),Ee=D.TEXTURE_2D_ARRAY):(Ve.setTexture2D(P,0),Ee=D.TEXTURE_2D),fe.activeTexture(D.TEXTURE0),fe.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(D.UNPACK_ALIGNMENT,P.unpackAlignment);let Dn=fe.getParameter(D.UNPACK_ROW_LENGTH),mt=fe.getParameter(D.UNPACK_IMAGE_HEIGHT),Rr=fe.getParameter(D.UNPACK_SKIP_PIXELS),wn=fe.getParameter(D.UNPACK_SKIP_ROWS),xl=fe.getParameter(D.UNPACK_SKIP_IMAGES);fe.pixelStorei(D.UNPACK_ROW_LENGTH,At.width),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,At.height),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Re),fe.pixelStorei(D.UNPACK_SKIP_ROWS,We),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,st);let Zs=y.isDataArrayTexture||y.isData3DTexture,Cr=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let ht=Oe.get(y),vn=Oe.get(P),Ci=Oe.get(ht.__renderTarget),Ot=Oe.get(vn.__renderTarget);fe.bindFramebuffer(D.READ_FRAMEBUFFER,Ci.__webglFramebuffer),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,Ot.__webglFramebuffer);for(let mn=0;mn<ve;mn++)Zs&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.get(y).__webglTexture,k,st+mn),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Oe.get(P).__webglTexture,de,jt+mn)),D.blitFramebuffer(Re,We,Re+Se,We+he,Te,rt,Te+Se,rt+he,D.DEPTH_BUFFER_BIT,D.NEAREST);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(k!==0||y.isRenderTargetTexture||Oe.has(y)){let ht=Oe.get(y),vn=Oe.get(P);fe.bindFramebuffer(D.READ_FRAMEBUFFER,R),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,z);for(let Ci=0;Ci<ve;Ci++)Zs?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,ht.__webglTexture,k,st+Ci):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,ht.__webglTexture,k),Cr?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,vn.__webglTexture,de,jt+Ci):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,vn.__webglTexture,de),k!==0?D.blitFramebuffer(Re,We,Re+Se,We+he,Te,rt,Te+Se,rt+he,D.COLOR_BUFFER_BIT,D.NEAREST):Cr?D.copyTexSubImage3D(Ee,de,Te,rt,jt+Ci,Re,We,Se,he):D.copyTexSubImage2D(Ee,de,Te,rt,Re,We,Se,he);fe.bindFramebuffer(D.READ_FRAMEBUFFER,null),fe.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else Cr?y.isDataTexture||y.isData3DTexture?D.texSubImage3D(Ee,de,Te,rt,jt,Se,he,ve,bt,An,At.data):P.isCompressedArrayTexture?D.compressedTexSubImage3D(Ee,de,Te,rt,jt,Se,he,ve,bt,At.data):D.texSubImage3D(Ee,de,Te,rt,jt,Se,he,ve,bt,An,At):y.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,de,Te,rt,Se,he,bt,An,At.data):y.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,de,Te,rt,At.width,At.height,bt,At.data):D.texSubImage2D(D.TEXTURE_2D,de,Te,rt,Se,he,bt,An,At);fe.pixelStorei(D.UNPACK_ROW_LENGTH,Dn),fe.pixelStorei(D.UNPACK_IMAGE_HEIGHT,mt),fe.pixelStorei(D.UNPACK_SKIP_PIXELS,Rr),fe.pixelStorei(D.UNPACK_SKIP_ROWS,wn),fe.pixelStorei(D.UNPACK_SKIP_IMAGES,xl),de===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&D.generateMipmap(Ee),fe.unbindTexture()},this.initRenderTarget=function(y){Oe.get(y).__webglFramebuffer===void 0&&Ve.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Ve.setTextureCube(y,0):y.isData3DTexture?Ve.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Ve.setTexture2DArray(y,0):Ve.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){G=0,V=0,ee=null,fe.reset(),ae.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=Je._getDrawingBufferColorSpace(e),n.unpackColorSpace=Je._getUnpackColorSpace()}}});function jf(t,e){if(e===Ef)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===ao||e===Uc){let n=t.getIndex();if(n===null){let r=[],a=t.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);t.setIndex(r),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,s=[];if(e===ao)for(let r=1;r<=i;r++)s.push(n.getX(0)),s.push(n.getX(r)),s.push(n.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(n.getX(r)),s.push(n.getX(r+1)),s.push(n.getX(r+2))):(s.push(n.getX(r+2)),s.push(n.getX(r+1)),s.push(n.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),t.setIndex(s),t.clearGroups(),t}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}var W_=Js(()=>{uo()});function X_(t){let e=new Map,n=new Map,i=t.clone();return q_(t,i,function(s,r){e.set(r,s),n.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return n.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function q_(t,e,n){n(t,e);for(let i=0;i<t.children.length;i++)q_(t.children[i],e.children[i],n)}var $_=Js(()=>{});function JT(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}function Bt(t,e,n){let i=t.json.materials[e];return i.extensions&&i.extensions[n]?i.extensions[n]:null}function tE(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new Yi({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ji})),t.DefaultMaterial}function Zr(t,e,n){for(let i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function ts(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function nE(t,e,n){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let d=e[l];if(d.POSITION!==void 0&&(i=!0),d.NORMAL!==void 0&&(s=!0),d.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(t);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let d=e[l];if(i){let u=d.POSITION!==void 0?n.getDependency("accessor",d.POSITION):t.attributes.position;a.push(u)}if(s){let u=d.NORMAL!==void 0?n.getDependency("accessor",d.NORMAL):t.attributes.normal;o.push(u)}if(r){let u=d.COLOR_0!==void 0?n.getDependency("accessor",d.COLOR_0):t.attributes.color;c.push(u)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],d=l[1],u=l[2];return i&&(t.morphAttributes.position=h),s&&(t.morphAttributes.normal=d),r&&(t.morphAttributes.color=u),t.morphTargetsRelative=!0,t})}function iE(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function sE(t){let e,n=t.extensions&&t.extensions[Qe.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Qf(n.attributes):e=t.indices+":"+Qf(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,s=t.targets.length;i<s;i++)e+=":"+Qf(t.targets[i]);return e}function Qf(t){let e="",n=Object.keys(t).sort();for(let i=0,s=n.length;i<s;i++)e+=n[i]+":"+t[n[i]]+";";return e}function Tp(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function rE(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function oE(t,e,n){let i=e.attributes,s=new _n;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new U(c[0],c[1],c[2]),new U(l[0],l[1],l[2])),o.normalized){let h=Tp(fo[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new U,c=new U;for(let l=0,h=r.length;l<h;l++){let d=r[l];if(d.POSITION!==void 0){let u=n.json.accessors[d.POSITION],f=u.min,g=u.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),u.normalized){let v=Tp(fo[u.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}t.boundingBox=s;let a=new In;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,t.boundingSphere=a}function Z_(t,e,n){let i=e.attributes,s=[];function r(a,o){return n.getDependency("accessor",a).then(function(c){t.setAttribute(o,c)})}for(let a in i){let o=bp[a]||a.toLowerCase();o in t.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!t.index){let a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});s.push(a)}return Je.workingColorSpace!==Sn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Je.workingColorSpace}" not supported.`),ts(t,e),oE(t,e,n),Promise.all(s).then(function(){return e.targets!==void 0?nE(t,e.targets,n):t})}var cu,Qe,ep,tp,np,ip,sp,rp,ap,op,cp,lp,hp,up,dp,fp,pp,mp,gp,lu,_p,J_,Gc,Y_,xp,vp,yp,Sp,hu,QT,Mp,Si,fo,K_,j_,Zf,bp,mr,eE,Jf,aE,Ep,Q_=Js(()=>{uo();W_();$_();cu=class extends Di{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new ip(n)}),this.register(function(n){return new sp(n)}),this.register(function(n){return new rp(n)}),this.register(function(n){return new pp(n)}),this.register(function(n){return new mp(n)}),this.register(function(n){return new gp(n)}),this.register(function(n){return new op(n)}),this.register(function(n){return new cp(n)}),this.register(function(n){return new lp(n)}),this.register(function(n){return new hp(n)}),this.register(function(n){return new np(n)}),this.register(function(n){return new up(n)}),this.register(function(n){return new ap(n)}),this.register(function(n){return new fp(n)}),this.register(function(n){return new dp(n)}),this.register(function(n){return new ep(n)}),this.register(function(n){return new lu(n,Qe.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new lu(n,Qe.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new _p(n)})}load(e,n,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=Ls.extractUrlBase(e);a=Ls.resolveURL(l,this.path)}else a=Ls.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new Hr(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){n(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===J_){try{a[Qe.KHR_BINARY_GLTF]=new xp(e)}catch(d){s&&s(d);return}r=JSON.parse(a[Qe.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Ep(r,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let d=this.pluginCallbacks[h](l);d.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[d.name]=d,a[d.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let d=r.extensionsUsed[h],u=r.extensionsRequired||[];switch(d){case Qe.KHR_MATERIALS_UNLIT:a[d]=new tp;break;case Qe.KHR_DRACO_MESH_COMPRESSION:a[d]=new vp(r,this.dracoLoader);break;case Qe.KHR_TEXTURE_TRANSFORM:a[d]=new yp;break;case Qe.KHR_MESH_QUANTIZATION:a[d]=new Sp;break;default:u.indexOf(d)>=0&&o[d]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+d+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,n){let i=this;return new Promise(function(s,r){i.parse(e,n,s,r)})}};Qe={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},ep=class{constructor(e){this.parser=e,this.name=Qe.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){let r=n[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,s=n.cache.get(i);if(s)return s;let r=n.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new Be(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Sn);let d=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new Vr(h),l.distance=d;break;case"spot":l=new Tc(h),l.distance=d,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ts(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=n.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),n.cache.add(i,s),s}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(n.cache,o,c)})}},tp=class{constructor(){this.name=Qe.KHR_MATERIALS_UNLIT}getMaterialType(){return Kn}extendParams(e,n,i){let s=[];e.color=new Be(1,1,1),e.opacity=1;let r=n.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Sn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}},np=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},ip=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new Ye(r,r)}return Promise.all(s)}},sp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return n.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},rp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_DISPERSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},ap=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},op=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SHEEN}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(n.sheenColor=new Be(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;n.sheenColor.setRGB(r[0],r[1],r[2],Sn)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,Wt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},cp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},lp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_VOLUME}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return n.attenuationColor=new Be().setRGB(r[0],r[1],r[2],Sn),Promise.all(s)}},hp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_IOR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},up=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_SPECULAR}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return n.specularColor=new Be().setRGB(r[0],r[1],r[2],Sn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,Wt)),Promise.all(s)}},dp=class{constructor(e){this.parser=e,this.name=Qe.EXT_MATERIALS_BUMP}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(s)}},fp=class{constructor(e){this.parser=e,this.name=Qe.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return Bt(this.parser,e,this.name)!==null?Bn:null}extendMaterialParams(e,n){let i=Bt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},pp=class{constructor(e){this.parser=e,this.name=Qe.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,r.source,a)}},mp=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_WEBP}loadTexture(e){let n=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[n])return null;let a=r.extensions[n],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},gp=class{constructor(e){this.parser=e,this.name=Qe.EXT_TEXTURE_AVIF}loadTexture(e){let n=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[n])return null;let a=r.extensions[n],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},lu=class{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,d=s.byteStride,u=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,d,u,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*d);return a.decodeGltfBuffer(new Uint8Array(f),h,d,u,s.mode,s.filter),f})})}else return null}},_p=class{constructor(e){this.name=Qe.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=n.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==Si.TRIANGLES&&l.mode!==Si.TRIANGLE_STRIP&&l.mode!==Si.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),d=h.isGroup?h.children:[h],u=l[0].count,f=[];for(let g of d){let v=new Xe,m=new U,p=new Fn,M=new U(1,1,1),A=new kr(g.geometry,g.material,u);for(let w=0;w<u;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&M.fromBufferAttribute(c.SCALE,w),A.setMatrixAt(w,v.compose(m,p,M));let b=null;for(let w in c)if(w==="_COLOR_0"){let E=c[w];A.instanceColor=new As(E.array,E.itemSize,E.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(b===null){let _=A.geometry;b=new Pn,b.name=_.name;for(let S in _.attributes)b.setAttribute(S,_.attributes[S]);for(let S in _.morphAttributes)b.morphAttributes[S]=_.morphAttributes[S];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(let S of _.groups)b.addGroup(S.start,S.count,S.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),A.geometry=b}let E=c[w];b.setAttribute(w,new As(E.array,E.itemSize,E.normalized))}Ct.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},J_="glTF",Gc=12,Y_={JSON:1313821514,BIN:5130562},xp=class{constructor(e){this.name=Qe.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,Gc),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==J_)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-Gc,r=new DataView(e,Gc),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Y_.JSON){let l=new Uint8Array(e,Gc+a,o);this.content=i.decode(l)}else if(c===Y_.BIN){let l=Gc+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},vp=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Qe.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let d=bp[h]||h.toLowerCase();o[d]=a[h]}for(let h in e.attributes){let d=bp[h]||h.toLowerCase();if(a[h]!==void 0){let u=i.accessors[e.attributes[h]],f=fo[u.componentType];l[d]=f.name,c[d]=u.normalized===!0}}return n.getDependency("bufferView",r).then(function(h){return new Promise(function(d,u){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}d(f)},o,l,Sn,u)})})}},yp=class{constructor(){this.name=Qe.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){if((n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0)return e;if(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),n.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Sp=class{constructor(){this.name=Qe.KHR_MESH_QUANTIZATION}},hu=class extends Ki{constructor(e,n,i,s){super(e,n,i,s)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)n[a]=i[r+a];return n}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-n,d=(i-n)/h,u=d*d,f=u*d,g=e*l,v=g-l,m=-2*f+3*u,p=f-u,M=1-m,A=p-u+d;for(let b=0;b!==o;b++){let w=a[v+b+o],E=a[v+b+c]*h,_=a[g+b+o],S=a[g+b]*h;r[b]=M*w+A*E+m*_+p*S}return r}},QT=new Fn,Mp=class extends hu{interpolate_(e,n,i,s){let r=super.interpolate_(e,n,i,s);return QT.fromArray(r).normalize().toArray(r),r}},Si={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},fo={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},K_={9728:qt,9729:Rt,9984:xh,9985:so,9986:Yr,9987:oi},j_={33071:$n,33648:ka,10497:ar},Zf={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},bp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},mr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},eE={CUBICSPLINE:void 0,LINEAR:Fr,STEP:Ur},Jf={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};aE=new Xe,Ep=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new JT,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?(this.textureLoader=new Mc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new Ec(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Hr(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return Zr(r,o,s),ts(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=n.length;s<r;s++){let a=n[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[n]++,s}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let s=e(n[i]);if(s)return s}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let s=0;s<n.length;s++){let r=e(n[s]);r&&i.push(r)}return i}getDependency(e,n){let i=e+":"+n,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(n);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(n)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,n)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[Qe.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(Ls.resolveURL(n.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let s=n.byteLength||0,r=n.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let n=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=Zf[s.type],o=fo[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new yn(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=Zf[s.type],l=fo[s.componentType],h=l.BYTES_PER_ELEMENT,d=h*c,u=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==d){let p=Math.floor(u/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,A=n.cache.get(M);A||(v=new l(o,p*f,s.count*f/h),A=new qa(v,f/h),n.cache.add(M,A)),m=new $a(A,c,u%f/h,g)}else o===null?v=new l(s.count*c):v=new l(o,u,s.count*c),m=new yn(v,c,g);if(s.sparse!==void 0){let p=Zf.SCALAR,M=fo[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,w=new M(a[1],A,s.sparse.count*p),E=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new yn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,S=w.length;_<S;_++){let N=w[_];if(m.setX(N,E[_*c]),c>=2&&m.setY(N,E[_*c+1]),c>=3&&m.setZ(N,E[_*c+2]),c>=4&&m.setW(N,E[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let n=this.json,i=this.options,r=n.textures[e].source,a=n.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,n,i){let s=this,r=this.json,a=r.textures[e],o=r.images[n],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let u=(r.samplers||{})[a.sampler]||{};return h.magFilter=K_[u.magFilter]||Rt,h.minFilter=K_[u.minFilter]||oi,h.wrapS=j_[u.wrapS]||ar,h.wrapT=j_[u.wrapT]||ar,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==qt&&h.minFilter!==Rt,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,n){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(n.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(u){return new Promise(function(f,g){n.parse(u,f,g)})});else{if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(u){l=!0;let f=new Blob([u],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(u){return new Promise(function(f,g){let v=f;n.isImageBitmapLoader===!0&&(v=function(m){let p=new rn(m);p.needsUpdate=!0,f(p)}),n.load(Ls.resolveURL(u,r.path),v,void 0,g)})})}let d=h.then(function(u){return l===!0&&o.revokeObjectURL(c),ts(u,a),u.userData.mimeType=a.mimeType||rE(a.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),u});return this.sourceCache[e]=d,d}assignTexture(e,n,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[Qe.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[Qe.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[Qe.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[n]=a,a})}assignFinalMaterial(e){let n=e.geometry,i=e.material,s=n.attributes.tangent===void 0,r=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new ja,On.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new Ka,On.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return Yi}loadMaterial(e){let n=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[Qe.KHR_MATERIALS_UNLIT]){let d=s[Qe.KHR_MATERIALS_UNLIT];a=d.getMaterialType(),l.push(d.extendParams(o,r,n))}else{let d=r.pbrMetallicRoughness||{};if(o.color=new Be(1,1,1),o.opacity=1,Array.isArray(d.baseColorFactor)){let u=d.baseColorFactor;o.color.setRGB(u[0],u[1],u[2],Sn),o.opacity=u[3]}d.baseColorTexture!==void 0&&l.push(n.assignTexture(o,"map",d.baseColorTexture,Wt)),o.metalness=d.metallicFactor!==void 0?d.metallicFactor:1,o.roughness=d.roughnessFactor!==void 0?d.roughnessFactor:1,d.metallicRoughnessTexture!==void 0&&(l.push(n.assignTexture(o,"metalnessMap",d.metallicRoughnessTexture)),l.push(n.assignTexture(o,"roughnessMap",d.metallicRoughnessTexture))),a=this._invokeOne(function(u){return u.getMaterialType&&u.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(u){return u.extendMaterialParams&&u.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=kn);let h=r.alphaMode||Jf.OPAQUE;if(h===Jf.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Jf.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Kn&&(l.push(n.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new Ye(1,1),r.normalTexture.scale!==void 0)){let d=r.normalTexture.scale;o.normalScale.set(d,d)}if(r.occlusionTexture!==void 0&&a!==Kn&&(l.push(n.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Kn){let d=r.emissiveFactor;o.emissive=new Be().setRGB(d[0],d[1],d[2],Sn)}return r.emissiveTexture!==void 0&&a!==Kn&&l.push(n.assignTexture(o,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(l).then(function(){let d=new a(o);return r.name&&(d.name=r.name),ts(d,r),n.associations.set(d,{materials:e}),r.extensions&&Zr(s,d,r),d})}createUniqueName(e){let n=Tt.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[Qe.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(c){return Z_(c,o,n)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=sE(l),d=s[h];if(d)a.push(d.promise);else{let u;l.extensions&&l.extensions[Qe.KHR_DRACO_MESH_COMPRESSION]?u=r(l):u=Z_(new Pn,l,n),l.mode===Si.TRIANGLE_STRIP?u=u.then(f=>jf(f,Uc)):l.mode===Si.TRIANGLE_FAN&&(u=u.then(f=>jf(f,ao))),s[h]={primitive:l,promise:u},a.push(u)}}return Promise.all(a)}loadMesh(e){let n=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?tE(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(n.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],d=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,M=l[f];if(m.mode===Si.TRIANGLES||m.mode===Si.TRIANGLE_STRIP||m.mode===Si.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");A&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&b?new oc(v,M):new Et(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===Si.LINES)p=new lc(v,M);else if(m.mode===Si.LINE_STRIP)p=new zr(v,M);else if(m.mode===Si.LINE_LOOP)p=new hc(v,M);else if(m.mode===Si.POINTS)p=new uc(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&iE(p,r),p.name=n.createUniqueName(r.name||"mesh_"+e),ts(p,r),m.extensions&&Zr(s,p,m),n.assignFinalMaterial(p),d.push(p)}for(let f=0,g=d.length;f<g;f++)n.associations.set(d[f],{meshes:e,primitives:f});if(d.length===1)return r.extensions&&Zr(s,d[0],r),d[0];let u=new Yn;r.extensions&&Zr(s,u,r),n.associations.set(u,{meshes:e});for(let f=0,g=d.length;f<g;f++)u.add(d[f]);return u})}loadCamera(e){let n,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new sn(oo.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new Wr(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),ts(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let s=0,r=n.joints.length;s<r;s++)i.push(this._loadNodeShallow(n.joints[s]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let d=a[l];if(d){o.push(d);let u=new Xe;r!==null&&u.fromArray(r.array,l*16),c.push(u)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[l])}return new cc(o,c)})}loadAnimation(e){let n=this.json,i=this,s=n.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let d=0,u=s.channels.length;d<u;d++){let f=s.channels[d],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(d){let u=d[0],f=d[1],g=d[2],v=d[3],m=d[4],p=[];for(let A=0,b=u.length;A<b;A++){let w=u[A],E=f[A],_=g[A],S=v[A],N=m[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let I=i._createAnimationTracks(w,E,_,S,N);if(I)for(let L=0;L<I.length;L++)p.push(I[L])}let M=new yc(r,void 0,p);return ts(M,s),M})}createNodeMesh(e){let n=this.json,i=this,s=n.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let n=this.json,i=this,s=n.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],d=l[1],u=l[2];u!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(u,aE)});for(let f=0,g=d.length;f<g;f++)h.add(d[f]);if(h.userData.pivot!==void 0&&d.length>0){let f=h.userData.pivot,g=d[0];h.pivot=new U().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let n=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=n.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new Ya:l.length>1?h=new Yn:l.length===1?h=l[0]:h=new Ct,h!==l[0])for(let d=0,u=l.length;d<u;d++)h.add(l[d]);if(r.name&&(h.userData.name=r.name,h.name=a),ts(h,r),r.extensions&&Zr(i,h,r),r.matrix!==void 0){let d=new Xe;d.fromArray(r.matrix),h.applyMatrix4(d)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let d=s.associations.get(h);s.associations.set(h,{...d})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],s=this,r=new Yn;i.name&&(r.name=s.createUniqueName(i.name)),ts(r,i),i.extensions&&Zr(n,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,d=c.length;h<d;h++){let u=c[h];u.parent!==null?r.add(X_(u)):r.add(u)}let l=h=>{let d=new Map;for(let[u,f]of s.associations)(u instanceof On||u instanceof rn)&&d.set(u,f);return h.traverse(u=>{let f=s.associations.get(u);f!=null&&d.set(u,f)}),d};return s.associations=l(r),r})}_createAnimationTracks(e,n,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}mr[r.path]===mr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(mr[r.path]){case mr.weights:h=Cs;break;case mr.rotation:h=Is;break;case mr.translation:case mr.scale:h=dr;break;default:i.itemSize===1?h=Cs:h=dr;break}let d=s.interpolation!==void 0?eE[s.interpolation]:Fr,u=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let v=new h(c[f]+"."+mr[r.path],n.array,u,d);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=Tp(n.constructor),s=new Float32Array(n.length);for(let r=0,a=n.length;r<a;r++)s[r]=n[r]*i;n=s}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Is?Mp:hu;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function po(t){return new xc({color:0,emissive:16777215,emissiveIntensity:t})}var uu,ex=Js(()=>{uo();uu=class extends Br{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new ur;e.deleteAttribute("uv");let n=new Yi({side:Mn}),i=new Yi,s=new Vr(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new Et(e,n);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new kr(e,i,6),o=new Ct;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new Et(e,po(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new Et(e,po(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new Et(e,po(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new Et(e,po(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new Et(e,po(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new Et(e,po(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(let n of e)n.dispose()}}});var du,tx=Js(()=>{uo();du=class extends Sc{constructor(e){super(e),this.type=zn}parse(e){let a=function(S,N){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(N||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(N||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(N||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(N||""))}},d=function(S,N,I){N=N||1024;let O=S.pos,H=-1,R=0,z="",G=String.fromCharCode.apply(null,new Uint16Array(S.subarray(O,O+128)));for(;0>(H=G.indexOf(`
`))&&R<N&&O<S.byteLength;)z+=G,R+=G.length,O+=128,G=String.fromCharCode.apply(null,new Uint16Array(S.subarray(O,O+128)));return-1<H?(I!==!1&&(S.pos+=R+H+1),z+G.slice(0,H)):!1},u=function(S){let N=/^#\?(\S+)/,I=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,L=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,O=/^\s*FORMAT=(\S+)\s*$/,H=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},z,G;for((S.pos>=S.byteLength||!(z=d(S)))&&a(1,"no header found"),(G=z.match(N))||a(3,"bad initial token"),R.valid|=1,R.programtype=G[1],R.string+=z+`
`;z=d(S),z!==!1;){if(R.string+=z+`
`,z.charAt(0)==="#"){R.comments+=z+`
`;continue}if((G=z.match(I))&&(R.gamma=parseFloat(G[1])),(G=z.match(L))&&(R.exposure=parseFloat(G[1])),(G=z.match(O))&&(R.valid|=2,R.format=G[1]),(G=z.match(H))&&(R.valid|=4,R.height=parseInt(G[1],10),R.width=parseInt(G[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},f=function(S,N,I){let L=N;if(L<8||L>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);L!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");let O=new Uint8Array(4*N*I);O.length||a(4,"unable to allocate buffer space");let H=0,R=0,z=4*L,G=new Uint8Array(4),V=new Uint8Array(z),ee=I;for(;ee>0&&R<S.byteLength;){R+4>S.byteLength&&a(1),G[0]=S[R++],G[1]=S[R++],G[2]=S[R++],G[3]=S[R++],(G[0]!=2||G[1]!=2||(G[2]<<8|G[3])!=L)&&a(3,"bad rgbe scanline format");let X=0,Z;for(;X<z&&R<S.byteLength;){Z=S[R++];let ye=Z>128;if(ye&&(Z-=128),(Z===0||X+Z>z)&&a(3,"bad scanline data"),ye){let De=S[R++];for(let Y=0;Y<Z;Y++)V[X++]=De}else V.set(S.subarray(R,R+Z),X),X+=Z,R+=Z}let Q=L;for(let ye=0;ye<Q;ye++){let De=0;O[H]=V[ye+De],De+=L,O[H+1]=V[ye+De],De+=L,O[H+2]=V[ye+De],De+=L,O[H+3]=V[ye+De],H+=4}ee--}return O},g=function(S,N,I,L){let O=S[N+3],H=Math.pow(2,O-128)/255;I[L+0]=S[N+0]*H,I[L+1]=S[N+1]*H,I[L+2]=S[N+2]*H,I[L+3]=1},v=function(S,N,I,L){let O=S[N+3],H=Math.pow(2,O-128)/255;I[L+0]=or.toHalfFloat(Math.min(S[N+0]*H,65504)),I[L+1]=or.toHalfFloat(Math.min(S[N+1]*H,65504)),I[L+2]=or.toHalfFloat(Math.min(S[N+2]*H,65504)),I[L+3]=or.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=u(m),M=p.width,A=p.height,b=f(m.subarray(m.pos),M,A),w,E,_;switch(this.type){case Ln:_=b.length/4;let S=new Float32Array(_*4);for(let I=0;I<_;I++)g(b,I*4,S,I*4);w=S,E=Ln;break;case zn:_=b.length/4;let N=new Uint16Array(_*4);for(let I=0;I<_;I++)v(b,I*4,N,I*4);w=N,E=zn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:A,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:Sn,minFilter:Rt,magFilter:Rt,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});function Pt(t,e){t=t.split(".");for(var n,i=So;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function Jr(){throw Error("Invalid UTF8")}function nx(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}function v1(t){if(hE)t=(cE||=new TextEncoder).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){let r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function sx(){var t=So.navigator;return t&&(t=t.userAgent)?t:""}function qu(t){return qu[" "](t),t}function uE(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,a){function o(l){for(;c<r.length;){let h=r.charAt(c++),d=qc[h];if(d!=null)return d;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}S1();for(var c=0;;){let l=o(-1),h=o(0),d=o(64),u=o(64);if(u===64&&l===-1)break;a(l<<2|h>>4),d!=64&&(a(h<<4&240|d>>2),u!=64&&a(d<<6&192|u))}})(t,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function S1(){if(!qc){qc={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));y1[n]=i;for(let s=0;s<i.length;s++){let r=i[s];qc[r]===void 0&&(qc[r]=s)}}}}function pE(t){return fE[t]||""}function b1(t){if(!M1)return uE(t);t=rx.test(t)?t.replace(rx,pE):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function dm(t){return dE&&t!=null&&t instanceof Uint8Array}function oa(){return mE||=new rs(null,Mo)}function fm(t){T1(Mo);var e=t.h;return(e=e==null||dm(e)?e:typeof e=="string"?b1(e):null)==null?e:t.h=e}function T1(t){if(t!==Mo)throw Error("illegal external caller")}function E1(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function jc(t){return E1(t=Error(t),"warning"),t}function bo(t,e){if(t!=null){var n=gE??={},i=n[t]||0;i>=e||(n[t]=i+1,E1(t=Error(),"incident"),(function(s){So.setTimeout(()=>{throw s},0)})(t))}}function la(){return typeof BigInt=="function"}function Xs(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}function nl(t,e){No||we in t||R1(t,w1),t[we]|=e}function en(t,e){No||we in t||R1(t,w1),t[we]=e}function Do(t){return nl(t,34),t}function Zc(t){return nl(t,8192),t}function pm(t,e){return 2&e&&(t|=2),1|t}function To(t){return t!=null&&t[A1]===C1}function Hn(t,e){return e===void 0?t.i!==ca&&!!(2&t.B[we]):!!(2&e)&&t.i!==ca}function $u(t,e){if(t!=null){if(typeof t=="string")t=t?new rs(t,Mo):oa();else if(!(t instanceof rs))if(dm(t))t=t.length?new rs(new Uint8Array(t),Mo):oa();else{if(!e)throw Error();t=void 0}}return t}function I1(t,e,n){var i,s=128&e?0:-1,r=t.length;(i=!!r)&&(i=(i=t[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-s,t[e]);if(i){t=t[r-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}function Uo(t){return 128&t?P1:void 0}function Yu(t){return t.hb=!0,t}function ln(t){var e=t;if(cx(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(SE(e)&&!Number.isSafeInteger(e))throw Error(String(e));return Ku?BigInt(t):t=ME(t)?t?"1":"0":cx(t)?t.trim()||"0":String(t)}function lx(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}function zp(t){var e=t>>>0;ut=e,St=(t-e)/4294967296>>>0}function ha(t){if(t<0){zp(-t);let[e,n]=_m(ut,St);ut=e>>>0,St=n>>>0}else zp(t)}function mm(t){var e=L1||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),St=0,ut=e.getUint32(0,!0)}function N1(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Eo(t,e)}function RE(t,e){return ln(la()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Eo(t,e))}function D1(t,e){return la()?ln(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):ln(gm(t,e))}function Eo(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else la()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+hx(n)+hx(t));return n}function hx(t){return t=String(t),"0000000".slice(t.length)+t}function gm(t,e){if(2147483648&e)if(la())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=_m(t,e);t="-"+Eo(n,i)}else t=Eo(t,e);return t}function il(t){if(t.length<16)ha(Number(t));else if(la())t=BigInt(t),ut=Number(t&BigInt(4294967295))>>>0,St=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");St=ut=0;let n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){let r=Number(t.slice(i,s));St*=1e6,(ut=1e6*ut+r)>=4294967296&&(St+=Math.trunc(ut/4294967296),St>>>=0,ut>>>=0)}if(e){let[i,s]=_m(ut,St);ut=i,St=s}}}function _m(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Oi(t){return Array.prototype.slice.call(t)}function U1(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function li(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Cu(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Fo(t){switch(typeof t){case"bigint":return!0;case"number":return sl(t);case"string":return IE.test(t);default:return!1}}function Gs(t){if(t!=null){if(!sl(t))throw jc("enum");t|=0}return t}function ua(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return sl(t)?0|t:void 0}function F1(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return sl(t)?t>>>0:void 0}function O1(t,e){if(e??=1024,!Fo(t))throw jc("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return Iu(t);case"bigint":return String(ia(64,t));default:return Hp(t)}case 1024:switch(n){case"string":return z1(t);case"bigint":return ln(ia(64,t));default:return ln(Bi(t)?t:Hp(t))}case 0:switch(n){case"string":return Iu(t);case"bigint":return ln(ia(64,t));default:return xm(t)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function B1(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(il(t),gm(ut,St))}function k1(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(il(t),Eo(ut,St))}function xm(t){if(t=vr(t),!Bi(t)){ha(t);var e=ut,n=St;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=N1(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function Hp(t){return t=vr(t),Bi(t)?t=String(t):(ha(t),t=gm(ut,St)),t}function Iu(t){var e=vr(Number(t));return Bi(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),B1(t))}function z1(t){var e=vr(Number(t));return Bi(e)?ln(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),la()?ln(ia(64,BigInt(t))):ln(B1(t)))}function Pu(t){var e=typeof t;return t==null?t:e==="bigint"?ln(ia(64,t)):Fo(t)?e==="string"?z1(t):ln(Bi(t)?t:Hp(t)):void 0}function vm(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(ia(64,t));if(Fo(t)){if(e==="string")return Iu(t);if(e==="number")return xm(t)}}function PE(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(Gp(64,t));if(Fo(t)){if(e==="string")return e=vr(Number(t)),Bi(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),t=k1(t)),t;if(e==="number")return(function(n){return(n=vr(n))>=0&&Bi(n)||(ha(n),n=N1(ut,St)),n})(t)}}function G1(t){if(t==null||typeof t=="string"||t instanceof rs)return t}function H1(t){if(typeof t!="string")throw Error();return t}function ks(t){if(t!=null&&typeof t!="string")throw Error();return t}function En(t){return t==null||typeof t=="string"?t:void 0}function ym(t,e,n,i){return To(t)?t:Array.isArray(t)?((i=(n=0|t[we])|32&i|2&i)!==n&&en(t,i),new e(t)):(n?2&i?((t=e[ax])||(Do((t=new e).B),t=e[ax]=t),e=t):e=new e:e=void 0,e)}function LE(t,e,n){return e?O1(t,1024):Pu(t)??(n?CE:void 0)}function NE(t){return t}function ux(t){return t}function Rp(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}function BE(t,e,n,i,s,r){return t=ym(t,i,n,r),s&&(t=Mm(t)),t}function kE(t){return[t,this.get(t)]}function dx(){return OE||=new Vs(Do([]),void 0,void 0,void 0,DE)}function ju(t){return as?t[as]:void 0}function Lu(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}function VE(t,e){e<100||bo(vE,1)}function Zu(t,e,n,i){var s=i!==void 0;i=!!i;var r,a=as;!s&&No&&a&&(r=t[a])&&Lu(r,VE),a=[];var o=t.length;r=4294967295;var c=!1,l=!!(64&e),h=l?128&e?0:-1:void 0;if(!(1&e)){var d=o&&t[o-1];d!=null&&typeof d=="object"&&d.constructor===Object?r=--o:d=void 0,!l||128&e||s||(c=!0,r=(zE??NE)(r-h,h,t,d,void 0)+h)}e=void 0;for(var u=0;u<o;u++){let f=t[u];if(f!=null&&(f=n(f,i))!=null)if(l&&u>=r){let g=u-h;(e??={})[g]=f}else a[u]=f}if(d)for(let f in d){if((o=d[f])==null||(o=n(o,i))==null)continue;let g;u=+f,l&&!Number.isNaN(u)&&(g=u+h)<r?a[g]=o:(e??={})[f]=o}return e&&(c?a.push(e):a[r]=e),s&&(n=as)&&(t=ju(t))&&t instanceof Vp&&(a[n]=(function(f){var g=new Vp;return Lu(f,(v,m,p)=>{g[m]=Oi(p)}),g.h=f.h,g})(t)),a}function WE(t){return t[0]=Jc(t[0]),t[1]=Jc(t[1]),t}function Jc(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return kp(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[we];return t.length===0&&1&e?void 0:Zu(t,e,Jc)}if(To(t))return V1(t);if(t instanceof rs){if((e=t.h)==null)t="";else if(typeof e=="string")t=e;else{if(M1){for(var n="",i=0,s=e.length-10240;i<s;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),S1(),n=y1[n],i=Array(Math.floor(e.length/3)),s=n[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],a=e[l+1],o=e[l+2],c=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,e.length-l){case 2:o=n[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=n[e>>2]+n[(3&e)<<4|c>>4]+o+s}e=i.join("")}t=t.h=e}return t}return t instanceof Vs?t=t.size!==0?t.fa(WE):void 0:void 0}return t}function V1(t){return Zu(t=t.B,0|t[we],Jc)}function sa(t,e){return W1(t,e[0],e[1])}function W1(t,e,n,i=0){if(t==null){var s=32;n?(t=[n],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[we],Op&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(Op)throw Error("carr");bo(yE,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&en(t,s|i),t;if(n&&(s|=128,n!==t[0]))throw Error("mid");e:{s|=64;var r=(n=t).length;if(r){var a=r-1;let c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(n[r+e]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return en(t,64|s|i),t}function XE(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[we];return t.length===0&&1&n?void 0:fx(t,n,e)}if(To(t))return px(t);if(t instanceof Vs){if(2&(e=t.N))return t;if(!t.size)return;if(n=Do(t.fa()),t.O)for(t=0;t<n.length;t++){let i=n[t],s=i[1];s=s==null||typeof s!="object"?void 0:To(s)?px(s):Array.isArray(s)?fx(s,0|s[we],!!(32&e)):void 0,i[1]=s}return n}return t instanceof rs?t:void 0}function fx(t,e,n){return 2&e||(!n||4096&e||16&e?t=Oo(t,e,!1,n&&!(16&e)):(nl(t,34),4&e&&Object.freeze(t))),t}function Sm(t,e,n){return t=new t.constructor(e),n&&(t.i=ca),t.o=ca,t}function px(t){var e=t.B,n=0|e[we];return Hn(t,n)?t:bm(t,e,n)?Sm(t,e):Oo(e,n)}function Oo(t,e,n,i){return i??=!!(34&e),t=Zu(t,e,XE,i),i=32,n&&(i|=2),en(t,e=16769217&e|i),t}function Mm(t){var e=t.B,n=0|e[we];return Hn(t,n)?bm(t,e,n)?Sm(t,e,!0):new t.constructor(Oo(e,n,!1)):t}function Bo(t){if(t.i!==ca)return!1;var e=t.B;return nl(e=Oo(e,0|e[we]),2048),t.B=e,t.i=void 0,t.o=void 0,!0}function da(t){if(!Bo(t)&&Hn(t,0|t.B[we]))throw Error()}function Mr(t,e){e===void 0&&(e=0|t[we]),32&e&&!(4096&e)&&en(t,4096|e)}function bm(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(en(e,2|n),t.i=ca,!0)}function Dt(t,e,n,i){if((e=os(t.B,e,void 0,i))!==null||n&&t.o!==ca)return e}function os(t,e,n,i){if(e===-1)return null;var s=e+(n?0:-1),r=t.length-1;if(!(r<1+(n?0:-1))){if(s>=r){var a=t[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(s!==r)return;n=a}}else n=t[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[s]=i,i}return n}}function $e(t,e,n,i){da(t);var s=t.B;return Qt(s,0|s[we],e,n,i),t}function Qt(t,e,n,i,s){var r=n+(s?0:-1),a=t.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return r<=a?(t[r]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[we])>>14&1023||536870912)?i!=null&&(t[a+(s?0:-1)]={[n]:i}):t[r]=i),e)}function q1(t,e){return To(t=os(t.B,e))||Array.isArray(t)}function $1(t,e,n){return q1(t,e=Z1(t,n)===e?e:-1)}function ta(t,e,n,i,s){var r=t.B,a=0|r[we];i=i&&i!==4?i!==1&&(t?Hn(t,a):2&a)?1:i:4,s=!!s||i===3,i===2&&Bo(t)&&(a=0|(r=t.B)[we]);var o=(t=Tm(r,e))===Sr?7:0|t[we],c=pm(o,a),l=!(4&c);if(l){let h=0,d=0;for(;h<t.length;h++){let u=n(t[h]);u!=null&&(t[d++]=u)}d<h&&(t.length=d),n=-513&c|4,c=n&=-1025,c&=-4097}return c!==o&&(en(t,c),2&c&&Object.freeze(t)),Y1(t,c,r,a,e,i,l,s)}function Y1(t,e,n,i,s,r,a,o){var c=e,l=Ao(e);return l&&r===2&&(t=Oi(t),c=0,e=ra(e,i),i=Qt(n,i,s,t),l=!1),l||(r===1||r===4&&(2&e||!(16&e)&&32&i)?((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&en(t,e),Object.freeze(t)):(o||(e|=16),e!==c&&en(t,e))),2&e||!(4096&e||16&e)||Mr(n,i),t}function Tm(t,e,n){return t=os(t,e,n),Array.isArray(t)?t:Sr}function Ao(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function K1(t){return $u(t,!0)}function j1(t){t=Oi(t);for(let e=0;e<t.length;e++){let n=t[e]=Oi(t[e]);Array.isArray(n[1])&&(n[1]=Do(n[1]))}return Zc(t)}function rl(t,e,n,i){da(t),Qt(t=t.B,0|t[we],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function br(t,e,n){if(2&e)throw Error();var i=Uo(e),s=Tm(t,n,i),r=s===Sr?7:0|s[we],a=pm(r,e);return(2&a||Ao(a)||16&a)&&(a===r||Ao(a)||en(s,a),s=Oi(s),r=0,a=ra(a,e),Qt(t,e,n,s,i)),(a&=-13)!==r&&en(s,a),s}function Z1(t,e){return Am(Em(t=t.B),t,void 0,e)}function Em(t){if(No)return t[Hc]??(t[Hc]=new Map);if(Hc in t)return t[Hc];var e=new Map;return Object.defineProperty(t,Hc,{value:e}),e}function J1(t,e,n,i,s){var r=Em(t),a=Am(r,t,e,n,s);return a!==i&&(a&&(e=Qt(t,e,a,void 0,s)),r.set(n,i)),e}function Am(t,e,n,i,s){var r=t.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];os(e,o,s)!=null&&(r!==0&&(n=Qt(e,n,r,void 0,s)),r=o)}return t.set(i,r),r}function wm(t,e,n){var i=0|t[we],s=Uo(i),r=os(t,n,s);if(To(r)){if(!Hn(r))return Bo(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r,2&i&&Do(a));if(a){let o=0|a[we];2&o&&(a=Oo(a,o))}return(a=sa(a,e))!==r&&Qt(t,i,n,a,s),a}function qE(t,e,n,i,s){var r=!1;if(i=(function(a,o,c,l){return os(a,o,c,l)})(t,i,s,a=>{var o=ym(a,n,!1,e);return r=o!==a&&o!=null,o}),i!=null)return r&&!Hn(i)&&Mr(t,e),i}function pt(t,e,n,i){var s=t.B,r=0|s[we];if((e=qE(s,r,e,n,i))==null)return e;if(!Hn(t,r=0|s[we])){let a=Mm(e);a!==e&&(Bo(t)&&(r=0|(s=t.B)[we]),Mr(s,r=Qt(s,r,n,e=a,i)))}return e}function Q1(t,e,n,i,s,r,a,o){r=r&&r!==4?r!==1&&(t?Hn(t,n):2&n)?1:r:4,a=!!a||r===3;var c=!!o&&!(t?Hn(t,n):2&n);(r===2||c)&&t&&Bo(t)&&(n=0|(e=t.B)[we]);var l=(t=Tm(e,s))===Sr?7:0|t[we],h=pm(l,n);if(o=!(4&h)){var d=t,u=n;let f=!!(2&h);f&&(u|=2);let g=!f,v=!0,m=0,p=0;for(;m<d.length;m++){let M=ym(d[m],i,!1,u);if(M instanceof i){if(!f){let A=Hn(M);g&&=!A,v&&=A}d[p++]=M}}p<m&&(d.length=p),h|=4,h=v?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(en(t,h),2&h&&Object.freeze(t)),c&&!(8&h||!t.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(Ao(h)&&(t=Oi(t),h=ra(h,n),n=Qt(e,n,s,t)),i=t,c=h,l=0;l<i.length;l++)(d=i[l])!==(h=Mm(d))&&(i[l]=h);c|=8,en(t,h=c=i.length?4096|c:-4097&c)}return Y1(t,h,e,n,s,r,o,a)}function fa(t,e,n){var i=t.B;return Q1(t,i,0|i[we],e,n,void 0,!1,!0)}function ev(t){return t==null&&(t=void 0),t}function Le(t,e,n,i,s){return $e(t,n,i=ev(i),s),i&&!Hn(i)&&Mr(t.B),t}function Fi(t,e,n,i){e:{var s=i=ev(i);da(t);let r=t.B,a=0|r[we];if(s==null){let o=Em(r);if(Am(o,r,a,n)!==e)break e;o.set(n,0)}else a=J1(r,a,n,e);Qt(r,a,e,s)}return i&&!Hn(i)&&Mr(t.B),t}function Wp(t,e,n){da(t);var i=t.B,s=0|i[we];if(n==null)Qt(i,s,e);else{var r=n===Sr?7:0|n[we],a=r,o=Ao(r),c=o||Object.isFrozen(n),l=!0,h=!0;for(let u=0;u<n.length;u++){var d=n[u];o||(d=Hn(d),l&&=!d,h&&=d)}o||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===a||(n=Oi(n),a=0,r=ra(r,s)),r!==a&&en(n,r),s=Qt(i,s,e,n),2&r||!(4096&r||16&r)||Mr(i,s)}return t}function ra(t,e){return-273&(2&e?2|t:-3&t)}function Qc(t,e,n,i){da(t);var s=t.B;t=Q1(t,s,0|s[we],n,e,2,!0),i=i??new n,t.push(i),e=n=t===Sr?7:0|t[we],(i=Hn(i))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&en(t,n),i||Mr(s)}function Ei(t,e,n){return ua(Dt(t,e,n))}function Gn(t,e){return Dt(t,e,void 0,li)??0}function Xp(t,e,n,i){return pt(t,e,n=Z1(t,i)===n?n:-1,void 0)}function qp(t,e){rl(t,3,e==null?e:Cu(e),!1)}function cs(t,e,n){if(n!=null){if(typeof n!="number"||!sl(n))throw jc("int32");n|=0}$e(t,e,n)}function Cp(t,e,n){return $e(t,e,n==null?n:O1(n))}function vu(t,e,n){return $e(t,e,n==null?n:(function(i){if(!Fo(i))throw jc("uint64");switch(typeof i){case"string":var s=vr(Number(i));return Bi(s)&&s>=0?i=ln(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=la()?ln(Gp(64,BigInt(i))):ln(k1(i))),i;case"bigint":return ln(Gp(64,i));default:return i>=0&&Bi(i)||((i=vr(i))>=0&&Bi(i)?i=String(i):(ha(i),i=Eo(ut,St))),ln(i)}})(n))}function Ne(t,e,n){$e(t,e,n==null?n:U1(n))}function _o(t,e,n){rl(t,e,n==null?n:U1(n),0)}function hi(t,e,n){rl(t,e,ks(n),"")}function Nu(t,e,n){{da(t);let a=t.B,o=0|a[we];if(n==null)Qt(a,o,e);else{var i=t=n===Sr?7:0|n[we],s=Ao(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=Oi(n),i=0,t=ra(t,o),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<n.length;s++){let c=n[s],l=H1(c);Object.is(c,l)||(r&&(n=Oi(n),i=0,t=ra(t,o),r=!1),n[s]=l)}t!==i&&(r&&(n=Oi(n),t=ra(t,o)),en(n,t)),Qt(a,o,e,n)}}}function Ju(t,e,n){da(t),ta(t,e,En,2,!0).push(H1(n))}function Qu(t,e){if(typeof t=="string")return new mo(b1(t),e);if(Array.isArray(t))return new mo(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new mo(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new mo(t,!1);if(t.constructor===rs)return e=fm(t)||new Uint8Array(0),new mo(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new mo(t,!1);throw Error()}function Rm(t,e){var n=0,i=0,s=0,r=t.i,a=t.h;do{var o=r[a++];n|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(aa(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function Cm(t){for(var e=0,n=t.h,i=n+10,s=t.i;n<i;){let r=s[n++];if(e|=r,!(128&r))return aa(t,n),!!(127&e)}throw Error()}function Ws(t){var e=t.i,n=t.h,i=e[n++],s=127&i;if(128&i&&(s|=(127&(i=e[n++]))<<7,128&i&&(s|=(127&(i=e[n++]))<<14,128&i&&(s|=(127&(i=e[n++]))<<21,128&i&&(s|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return aa(t,n),s}function ls(t){return Ws(t)>>>0}function Du(t){return Rm(t,D1)}function $p(t){var e=t.i,n=t.h,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],aa(t,t.h+4),(i|s<<8|r<<16|e<<24)>>>0}function Uu(t){var e=$p(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function $E(t){return Ws(t)}function aa(t,e){if(t.h=e,e>t.l)throw Error()}function tv(t,e){if(e<0)throw Error();var n=t.h;if((e=n+e)>t.l)throw Error();return t.h=e,n}function nv(t,e){if(e==0)return oa();var n=tv(t,e);return t.ga&&t.u?n=t.i.subarray(n,n+e):(t=t.i,n=n===(e=n+e)?new Uint8Array(0):wE?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?oa():new rs(n,Mo)}function iv(t,e,n,i){if(Fu.length){let s=Fu.pop();return s.A(i),s.h.init(t,e,n,i),s}return new KE(t,e,n,i)}function sv(t){t.h.clear(),t.l=-1,t.i=-1,Fu.length<100&&Fu.push(t)}function rv(t){var e=t.h;if(e.h==e.l)return!1;t.o=t.h.h;var n=ls(t.h);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.i=n,!0}function yu(t){try{switch(t.i){case 0:t.i!=0?yu(t):Cm(t.h);break;case 1:var e=t.h;aa(e,e.h+8);break;case 2:if(t.i!=2)yu(t);else{var n=ls(t.h),i=t.h;aa(i,i.h+n)}break;case 5:var s=t.h;aa(s,s.h+4);break;case 3:av();let r=t.l;try{for(;;){if(!rv(t))throw Error();if(t.i==4){if(t.l!=r)throw Error();break}yu(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{wo>0&&wo--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function av(){if(wo>=100)throw new SyntaxError;wo++}function al(t,e,n){var i=t.h.l,s=ls(t.h),r=(s=t.h.h+s)-i;if(r<=0&&(t.h.l=s,n(e,t,void 0,void 0,void 0),r=s-t.h.h),r)throw Error();return t.h.h=s,t.h.l=i,e}function Im(t){var e=ls(t.h),n=tv(t=t.h,e);if(t=t.i,lE){var i,s=t;(i=Ap)||(i=Ap=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(o){if(fu===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),fu=!0}catch{fu=!1}}throw!fu&&(Ap=void 0),o}}else{e=(r=n)+e,n=[];let o,c=null;for(;r<e;){var a=t[r++];a<128?n.push(a):a<224?r>=e?Jr():(o=t[r++],a<194||(192&o)!=128?(r--,Jr()):n.push((31&a)<<6|63&o)):a<240?r>=e-1?Jr():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[r++]))!=128?(r--,Jr()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?Jr():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,Jr()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):Jr(),n.length>=8192&&(c=nx(c,n),n.length=0)}r=nx(c,n)}return r}function Pm(t){var e=ls(t.h);return nv(t.h,e)}function ol(t,e,n){var i=ls(t.h);for(i=t.h.h+i;t.h.h<i;)n.push(e(t.h))}function jE(t){return new Ou(4294967295&t,Math.floor(t/4294967296))}function gx(t){return t?/^\d+$/.test(t)?(il(t),new Ou(ut,St)):null:ZE||=new Ou(0,0)}function JE(t){return new Bu(4294967295&t,Math.floor(t/4294967296))}function ov(t){return t?/^-?\d+$/.test(t)?(il(t),new Bu(ut,St)):null:QE||=new Bu(0,0)}function cv(t,e,n){return typeof BigInt64Array<"u"?(Vc||(Vc=new BigInt64Array(1),gu=new Uint32Array(Vc.buffer),Vc[0]=BigInt(1),yx=gu[0]===1),Vc[0]=t,new e(gu[t=yx?0:1],gu[1-t])):(Ip||(_x=BigInt(Number.MIN_SAFE_INTEGER),xx=BigInt(Number.MAX_SAFE_INTEGER),vx=BigInt(4294967295),Ip=BigInt(32)),t>=_x&&t<=xx?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&vx),Number(t>>Ip))))}function Hs(t,e,n){for(;n>0||e>127;)t.h.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.h.push(e)}function ko(t,e){for(;e>127;)t.h.push(127&e|128),e>>>=7;t.h.push(e)}function cl(t,e){if(e>=0)ko(t,e);else{for(let n=0;n<9;n++)t.h.push(127&e|128),e>>=7;t.h.push(1)}}function eA(t,e){il(e),(function(n){var i=St>>31;n(ut<<1^i,(St<<1|ut>>>31)^i)})((n,i)=>{Hs(t,n>>>0,i>>>0)})}function el(t,e){t.h.push(e>>>0&255),t.h.push(e>>>8&255),t.h.push(e>>>16&255),t.h.push(e>>>24&255)}function Ro(t,e){e.length!==0&&(t.l.push(e),t.i+=e.length)}function Wn(t,e,n){ko(t.h,8*e+n)}function Lm(t,e){return Wn(t,e,2),e=t.h.end(),Ro(t,e),e.push(t.i),e}function Nm(t,e){var n=e.pop();for(n=t.i+t.h.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.i++;e.push(n),t.i++}function lv(t,e,n){if(n!=null)switch(Wn(t,e,0),typeof n){case"number":t=t.h,ha(n),Hs(t,ut,St);break;case"bigint":n=cv(n,Bu,JE),Hs(t.h,n.i,n.h);break;default:n=ov(n),Hs(t.h,n.i,n.h)}}function ll(t,e,n){Wn(t,e,2),ko(t.h,n.length),Ro(t,t.h.end()),Ro(t,n)}function ku(t,e,n,i){n!=null&&(e=Lm(t,e),i(n,t),Nm(t,e))}function hv(t){typeof t=="string"&&ov(t)}function Ai(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}function hs(t,e,n){var i=t.B;as&&as in i&&(i=i[as])&&delete i[e.h],e.i?e.u(t,e.i,e.h,n,e.l):e.u(t,e.h,n,e.l)}function sd(t,e){return new zo(t,e,Dm)}function dv(t,e,n,i,s){ku(t,n,gv(e,i),s)}function pa(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ea=i,s.da=(function(d){switch(typeof d){case"boolean":return GE||=[0,void 0,!0];case"number":return d>0?void 0:d===0?HE||=[0,void 0]:[-d,void 0];case"string":return[0,d];case"object":return d}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=i[++a])=="function"&&r.length>0&&(s.wa=!0,fv??=r,pv??=i[a+1],r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let d;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof zo?d=r:(d=aA,a--),d?.l){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){let u=o[c];l?n(s,c,d,l,u):e(s,c,d,u)}}return i[t]=s}function mv(t){return Array.isArray(t)?t[0]instanceof zo?t:[oA,t]:[t,void 0]}function gv(t,e){return t instanceof _e?t.B:Array.isArray(t)?sa(t,e):void 0}function Bm(t,e,n,i){var s=n.h;t[e]=i?(r,a,o)=>s(r,a,o,i):s}function km(t,e,n,i,s){var r,a,o=n.h;t[e]=(c,l,h)=>o(c,l,h,a||=pa(ad,Bm,km,i).da,r||=zm(i),s)}function zm(t){var e=t[Yp];if(e!=null)return e;var n=pa(ad,Bm,km,t);return e=n.wa?(i,s)=>fv(i,s,n):(i,s)=>{e:{av();try{for(;rv(s)&&s.i!=4;){let u=s.l,f=n[u];if(f==null){let g=n.ja;if(g){let v=g[u];if(v){let m=lA(v);m!=null&&(f=n[u]=m)}}}if(f==null||!f(s,i,u)){var r=s;let g=r.o;if(yu(r),r.ra)var a=void 0;else{let v=r.h.h-g;r.h.h=g,a=nv(r.h,v)}r=void 0;var o=i,c=u,l=a;l&&((r=o[as]??(o[as]=new Vp))[c]??(r[c]=[])).push(l)}}let d=ju(i);d&&(d.h=n.Ea[Mx]);var h=!0;break e}catch(d){throw d instanceof RangeError?new SyntaxError:d}finally{wo>0&&wo--}h=void 0}return h},t[Yp]=e,t[Mx]=cA.bind(t),e}function cA(t,e,n,i){var s=this[ad],r=this[Yp],a=sa(void 0,s.da),o=ju(t);if(o){var c=!1,l=s.ja;if(l){if(s=(h,d,u)=>{if(u.length!==0)if(l[d])for(let f of u){h=iv(f);try{c=!0,r(a,h)}finally{sv(h)}}else i?.(t,d,u)},e==null)Lu(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(c){let h=0|t[we];if(2&h&&2048&h&&!n?.lb)throw Error();let d=Uo(h),u=(f,g)=>{if(os(t,f,d)!=null){if(n?.kb===1)return;throw Error()}g!=null&&(h=Qt(t,h,f,g,d)),delete o[f]};e==null?I1(a,0|a[we],(f,g)=>{u(f,g)}):u(e,os(a,e,d))}}}}function lA(t){var e=(t=mv(t))[0].h;if(t=t[1]){let n=zm(t),i=pa(ad,Bm,km,t).da;return(s,r,a)=>e(s,r,a,i,n)}return e}function od(t,e,n){t[e]=n.i}function cd(t,e,n,i){var s,r,a=n.i;t[e]=(o,c,l)=>a(o,c,l,r||=pa(rd,od,cd,i).da,s||=_v(i))}function _v(t){var e=t[Sx];if(!e){let n=pa(rd,od,cd,t);e=(i,s)=>xv(i,s,n),t[Sx]=e}return e}function xv(t,e,n){I1(t,0|t[we],(i,s)=>{if(s!=null){var r=(function(a,o){var c=a[o];if(c)return c;if((c=a.ja)&&(c=c[o])){var l=(c=mv(c))[0].i;if(c=c[1]){let h=_v(c),d=pa(rd,od,cd,c).da;c=a.wa?pv(d,h):(u,f,g)=>l(u,f,g,d,h)}else c=l;return a[o]=c}})(n,i);r?r(e,s,i):i<500||bo(Bp,3)}}),(t=ju(t))&&Lu(t,(i,s,r)=>{for(Ro(e,e.h.end()),i=0;i<r.length;i++)Ro(e,fm(r[i])||new Uint8Array(0))})}function qs(t,e,n){if(Array.isArray(e)){var i=0|e[we];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=t(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),t=1|i,n&&(t=-1537&t|4),t!==i&&en(e,t),n&&2&t&&Object.freeze(e),e}}function Yt(t,e,n){return new zo(t,e,n)}function $s(t,e,n){return new zo(t,e,n)}function un(t,e,n){Qt(t,0|t[we],e,n,Uo(0|t[we]))}function yv(t,e,n){(e=li(e))!=null&&(Wn(t,n,5),t=t.h,mm(e),el(t,ut))}function Gm(t,e,n){(e=vm(e))!=null&&(hv(e),lv(t,n,e))}function Sv(t,e,n){(e=ua(e))!=null&&e!=null&&(Wn(t,n,0),cl(t.h,e))}function Mv(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&(Wn(t,n,0),t.h.h.push(e?1:0))}function bv(t,e,n){(e=En(e))!=null&&ll(t,n,v1(e))}function Tv(t,e,n,i,s){ku(t,n,gv(e,i),s)}function Hm(t,e,n){(e=G1(e))!=null&&ll(t,n,Qu(e,!0).buffer)}function Ev(t,e,n){(e=F1(e))!=null&&e!=null&&(Wn(t,n,0),ko(t.h,e))}function Av(t,e,n){(e=ua(e))!=null&&(e=parseInt(e,10),Wn(t,n,0),cl(t.h,e))}function wv(t,e,n){return(t.i===5||t.i===2)&&(e=br(e,0|e[we],n),t.i==2?ol(t,Uu,e):e.push(Uu(t.h)),!0)}function Rv(t,e,n){return t.i===0&&(un(e,n,Du(t.h)),!0)}function Cv(t,e,n){return(t.i===0||t.i===2)&&(e=br(e,0|e[we],n),t.i==2?ol(t,Ws,e):e.push(Ws(t.h)),!0)}function Iv(t,e,n){return t.i===2&&(un(e,n,(t=Pm(t))===oa()?void 0:t),!0)}function us(t,e){return new Kp(t,e)}function Tr(t,e){return(n,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),n=iv(n,void 0,void 0,r);try{let a=new t,o=a.B;zm(e)(o,n);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{sv(n)}s=void 0}return s}}function Wm(t){return e=>vv(e,t)}function hl(t){return function(){return vv(this,t)}}function Rx(t){var e;return Pp===void 0&&(Pp=(function(){var n=null;if(!wx)return n;try{let i=s=>s;n=wx.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=Pp)?e.createScriptURL(t):t,new yA(t)}function Qr(t,...e){if(e.length===0)return Rx(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return Rx(n)}function Ut(t,e){Ju(t,3,e)}function lt(t,e){Ju(t,4,e)}function wi(t,e){Qc(t,1,ii,e)}function kt(t,e){Ju(t,10,e)}function gt(t,e){Ju(t,15,e)}function Qp(t,e){return e=e?e.clone():new Xm,t.displayNamesLocale!==void 0?$e(e,1,ks(t.displayNamesLocale)):t.displayNamesLocale===void 0&&$e(e,1),t.maxResults!==void 0?cs(e,2,t.maxResults):"maxResults"in t&&$e(e,2),t.scoreThreshold!==void 0?Ne(e,3,t.scoreThreshold):"scoreThreshold"in t&&$e(e,3),t.categoryAllowlist!==void 0?Nu(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&$e(e,4),t.categoryDenylist!==void 0?Nu(e,5,t.categoryDenylist):"categoryDenylist"in t&&$e(e,5),e}function py(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Jm(t,e=-1,n=""){return{categories:t.map(i=>({index:Ei(i,1)??0??-1,score:Gn(i,2)??0,categoryName:En(Dt(i,3))??""??"",displayName:En(Dt(i,4))??""??""})),headIndex:e,headName:n}}function iw(t){var e={classifications:fa(t,LA,1).map(n=>Jm(pt(n,Wv,4)?.h()??[],Ei(n,2)??0,En(Dt(n,3))??""))};return(function(n){return n==null?n:typeof n=="bigint"?(kp(n)?n=Number(n):(n=ia(64,n),n=kp(n)?Number(n):String(n)),n):Fo(n)?typeof n=="number"?xm(n):Iu(n):void 0})(Dt(t,2,void 0,Pu))!=null&&(e.timestampMs=py(Dt(t,2,void 0,Pu)??X1)),e}function my(t){var e=ta(t,3,li),n=ta(t,2,ua),i=ta(t,1,En),s=ta(t,9,En),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=pt(t,Lp,4)?.l())&&(r.boundingBox={originX:Ei(e,1,gr)??0,originY:Ei(e,2,gr)??0,width:Ei(e,3,gr)??0,height:Ei(e,4,gr)??0,angle:0}),pt(t,Lp,4)?.h().length)for(let a of pt(t,Lp,4).h())r.keypoints.push({x:Dt(a,1,gr,li)??0,y:Dt(a,2,gr,li)??0,score:Dt(a,4,gr,li)??0,label:En(Dt(a,3,gr))??""});return r}function dl(t){var e=[];for(let n of fa(t,CA,1))t={x:Gn(n,1)??0,y:Gn(n,2)??0,z:Gn(n,3)??0,visibility:Gn(n,4)??0},Dt(n,5,void 0,li)!=null&&(t.presence=Gn(n,5)??0),e.push(t);return e}function yo(t){var e=[];for(let n of fa(t,RA,1))t={x:Gn(n,1)??0,y:Gn(n,2)??0,z:Gn(n,3)??0,visibility:Gn(n,4)??0},Dt(n,5,void 0,li)!=null&&(t.presence=Gn(n,5)??0),e.push(t);return e}function Ox(t){return Array.from(t,e=>e>127?e-256:e)}function Bx(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}function ea(t,e,n){return n=`wasm${n?"_module":""}_internal`,Promise.resolve({wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`})}function kx(t){return $e(new em,1,Gs(t))}function tm(t,e){return $e(t,1,Gs(e))}function nm(t,e){return $e(t,2,Gs(e))}function sm(t,e){var n=new gy;n=Le(n,0,1,t.C),n=Le(n,0,2,e),e=$e(e=new lw,6,$u(n=n.h(),!1)),(t=t.m).error||t.i.push(e)}function Yx(t,e){var n={R:e.R-t.l.R,U:e.U-t.l.U,W:e.W-t.l.W,S:e.S-t.l.S,Y:e.Y-t.l.Y,V:e.V,ba:e.ba},i=nm(tm(new im,t.D),1);n=_y(t,n),sm(t,i=Fi(i,4,Vu,n)),t.l=e}function _y(t,e){var n=new sw;return t=vu(t=Cp(t=$e(n,1,Gs(t.F)),7,e.S),5,e.V),t=vu(t,6,e.ba),e.W>0&&vu(t,4,e.Y/e.W),e.R!==0&&(n=Cp(n=kx(3),2,e.R),Qc(t,8,em,n)),e.U!==0&&(e=Cp(n=kx(4),2,e.U),Qc(t,8,em,e)),t}function Qm(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function Kx(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function eg(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Pe(t,e,n){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.j.stringToNewUTF8(e)),t.j._free(e)}function xy(t,e,n){if(!t.j.canvas)throw Error("No OpenGL canvas configured.");if(n?t.j._bindTextureToStream(n):t.j._bindTextureToCanvas(),!(n=t.j.canvas.getContext("webgl2")||t.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=eg(e);return!t.l||i===t.j.canvas.width&&s===t.j.canvas.height||(t.j.canvas.width=i,t.j.canvas.height=s),[i,s]}function jx(t,e,n){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.j.stringToNewUTF8(e[s]);e=t.j._malloc(4*i.length),t.j.HEAPU32.set(i,e>>2),n(e);for(let s of i)t.j._free(s);t.j._free(e)}function is(t,e,n){t.j.simpleListeners=t.j.simpleListeners||{},t.j.simpleListeners[e]=n}function _r(t,e,n){var i=[];t.j.simpleListeners=t.j.simpleListeners||{},t.j.simpleListeners[e]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}function yy(t){return class extends t{get pa(){return this.j}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function Sy(t){return class extends t{Za(){this.j._registerModelResourcesGraphService()}}}async function gw(t,e,n,i){return t=await(async(s,r,a,o,c)=>{if(r&&await Kx(r),!self.ModuleFactory||a&&(await Kx(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Sa();s.o=new fw(s.D(),r,a)})(t,i),await t.A(i),t}async function Tu(t,e,n,i){return gw(t,e,n,i)}function Dp(t,e,n){try{t.h.j.FS_unlink(`/${n}`)}catch{}t.h.j.FS_createDataFile("/",n,e,!0,!1,!0),rm(t,`/${n}`)}function rm(t,e){var n=pt(t.baseOptions,Hu,1)||new Hu;typeof e=="string"?($e(n,2,ks(e)),$e(n,1)):e instanceof Uint8Array&&($e(n,1,$u(e,!1)),$e(n,2)),Le(t.baseOptions,0,1,n)}function Zx(t){try{let e=t.L.length;if(e===1)throw Error(t.L[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.L.map(n=>n.message).join(", "))}finally{t.L=[]}}function Me(t,e){t.J=Math.max(t.J,e)}function ud(t,e){t.F=new ii,hi(t.F,2,"PassThroughCalculator"),Ut(t.F,"free_memory"),lt(t.F,"free_memory_unused_out"),kt(e,"free_memory"),wi(e,t.F)}function Co(t,e){Ut(t.F,e),lt(t.F,e+"_unused_out")}function dd(t){t.h.addBoolToStream(!0,"free_memory",t.J)}function Vn(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}function Jx(t,e,n){var i=t.h;if(n=Vn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.i,n),n}function Qx(t,e){var n=t.h,i=Vn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var s=Vn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.G),n.vertexAttribPointer(t.G,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var r=Vn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new am(n,i,s,r)}function tg(t,e){if(t.h){if(e!==t.h)throw Error("Cannot change GL context once initialized")}else t.h=e}function fl(t,e,n,i){return tg(t,e),t.i||(t.o(),t.J()),n?(t.m||(t.m=Qx(t,!0)),n=t.m):(t.F||(t.F=Qx(t,!1)),n=t.F),e.useProgram(t.i),n.bind(),t.l(),t=i(),n.h.bindVertexArray(null),t}function yr(t,e,n){return tg(t,e),t=Vn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function fd(t,e,n){tg(t,e),t.D||(t.D=Vn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function ng(t){t.h?.bindFramebuffer(t.h.FRAMEBUFFER,null)}function Bs(t,e){switch(e){case 0:return t.h.find(n=>n instanceof Uint8Array);case 1:return t.h.find(n=>n instanceof Float32Array);case 2:return t.h.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function om(t){var e=Bs(t,1);if(!e){if(e=Bs(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=Io(t);var n=ig(t);if(fd(n,i,My(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.h.push(e)}return e}function My(t){var e=Bs(t,2);if(!e){let n=Io(t);e=Ty(t);let i=om(t),s=by(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),cm(t)}return e}function Io(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.i||(t.i=Vn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.i}function by(t){if(t=Io(t),!_u)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))_u=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");_u=t.R16F}return _u}function ig(t){return t.l||(t.l=new ma),t.l}function Ty(t){var e=Io(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=Bs(t,2);return n||(n=yr(ig(t),e,t.o?e.LINEAR:e.NEAREST),t.h.push(n),t.u=!0),e.bindTexture(e.TEXTURE_2D,n),n}function cm(t){t.i.bindTexture(t.i.TEXTURE_2D,null)}function Up(t){return{...vw,fillColor:(t=t||{}).color,...t}}function Us(t,e){return t instanceof Function?t(e):t}function t1(t,e,n){return Math.max(Math.min(e,n),Math.min(Math.max(e,n),t))}function Xc(t){if(!t.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.l}function tl(t){if(!t.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.u}function n1(t,e,n){if(e.X())n(e.T());else{let i=e.ua()?e.sa():e.ta();t.o=t.o??new ma;let s=tl(t);n((t=new Jt([i],e.o,!1,s.canvas,t.o,e.width,e.height)).T()),t.close()}}function i1(t,e,n,i){var s=(function(o){return o.h||(o.h=new _w),o.h})(t),r=tl(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;fl(s,r,!0,()=>{(function(c,l,h,d){var u=c.h;if(u.activeTexture(u.TEXTURE0),u.bindTexture(u.TEXTURE_2D,l),u.activeTexture(u.TEXTURE1),u.bindTexture(u.TEXTURE_2D,c.v),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,u.RGBA,u.UNSIGNED_BYTE,h),c.K&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[v,m]of f){f=v;let p=m,M=g.next();if(M.done)return!1;let[A,b]=M.value;if(f!==A||p[0]!==b[0]||p[1]!==b[1]||p[2]!==b[2]||p[3]!==b[3])return!1}return!!g.next().done})(c.K,d))u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.u);else{c.K=d;let f=Array(1024).fill(0);d.forEach((g,v)=>{if(g.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);f[4*v]=g[0],f[4*v+1]=g[1],f[4*v+2]=g[2],f[4*v+3]=g[3]}),u.activeTexture(u.TEXTURE2),u.bindTexture(u.TEXTURE_2D,c.u),u.texImage2D(u.TEXTURE_2D,0,u.RGBA,256,1,0,u.RGBA,u.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function s1(t,e,n,i){var s=tl(t),r=(function(c){return c.i||(c.i=new xw),c.i})(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;fl(r,s,!0,()=>{var c=r.h;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,e),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.u),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.v),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.h).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}function ss(t,e){switch(e){case 0:return t.h.find(n=>n instanceof ImageData);case 1:return t.h.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.h.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Ey(t){var e=ss(t,0);if(!e){e=Po(t);let n=pd(t),i=new Uint8Array(t.width*t.height*4);fd(n,e,Eu(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),ng(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.h.push(e)}return e}function Eu(t){var e=ss(t,2);if(!e){let n=Po(t);e=Au(t);let i=ss(t,1)||Ey(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),$c(t)}return e}function Po(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.i||(t.i=Vn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.i}function pd(t){return t.l||(t.l=new ma),t.l}function Au(t){var e=Po(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=ss(t,2);return n||(n=yr(pd(t),e),t.h.push(n),t.o=!0),e.bindTexture(e.TEXTURE_2D,n),n}function $c(t){t.i.bindTexture(t.i.TEXTURE_2D,null)}function r1(t){var e=Po(t);return fl(pd(t),e,!0,()=>(function(n,i){var s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();var r=s.width,a=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=a,n})(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}function ki(...t){return t.map(([e,n])=>({start:e,end:n}))}async function dt(t,e,n){return Tu(t,n.canvas??(Qm()?void 0:document.createElement("canvas")),e,n)}function Ay(t,e,n,i){if(t.o&&i!==void 0){var s=pt(t.baseOptions,Gu,3);s?.h()||s?.l()?.h()?(++(s=t.o).h.U,s.i.set(i,performance.now())):(++(s=t.o).h.R,s.i.set(i,performance.now()))}if(t.qa){if(s=new $v,n?.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");let r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ne(s,1,(r.left+r.right)/2),Ne(s,2,(r.top+r.bottom)/2),Ne(s,4,r.right-r.left),Ne(s,3,r.bottom-r.top)}else Ne(s,1,.5),Ne(s,2,.5),Ne(s,4,1),Ne(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ne(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[r,a]=eg(e);n=Gn(s,4)*r/a,Ne(s,4,Gn(s,3)*a/r),Ne(s,3,n)}}t.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",t.qa,i)}t.h.Da(e,t.Ba,i??performance.now()),t.finishProcessing(i)}function Gi(t,e,n){if(t.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");Ay(t,e,n,t.J+1)}function ds(t,e,n,i){if(!t.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");Ay(t,e,n,i)}function Lo(t,e,n,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new Jt([s],n,!1,t.h.j.canvas,t.ea,r,e),i?t.clone():t}function c1(t){t.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}function l1(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function h1(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function u1(t,e=!0){var n=[];for(let s of t){var i=ld(s);t=[];for(let r of i.h())i=e&&Ei(r,1)!=null?Ei(r,1)??0:-1,t.push({score:Gn(r,2)??0,index:i,categoryName:En(Dt(r,3))??""??"",displayName:En(Dt(r,4))??""??""});n.push(t)}return n}function d1(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}function f1(t){t.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function p1(t){try{if(!t.G)return t.i;t.G(t.i)}finally{dd(t)}}function xu(t,e){t=ul(t),e.push(dl(t))}function Sw(t){var e=(function(n){return fa(n,ii,1)})(t.ka()).filter(n=>(En(Dt(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.v=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(pt(e[0],di,7)?.u()?.h()??new Map).forEach((n,i)=>{t.v[Number(i)]=En(Dt(n,1))??""})}function m1(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function g1(t){try{let e=new lm(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.m)return e;t.m(e)}finally{dd(t)}}function Fp(){return Qm()?void 0:document.createElement("canvas")}function _1(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function x1(t){try{let e=new um(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.v)return e;t.v(e)}finally{dd(t)}}var So,Ap,cE,Op,wu,fu,lE,hE,wp,pu,mu,ix,y1,qc,dE,M1,rx,fE,Mo,mE,rs,gE,No,Sr,_E,ax,Hc,as,xE,vE,Bp,yE,A1,w1,R1,we,ox,C1,ca,Ru,P1,SE,cx,ME,Ku,kp,bE,TE,EE,AE,L1,wE,ut,St,ia,Gp,Bi,sl,vr,CE,IE,DE,UE,Yc,FE,OE,Vs,zE,GE,HE,Vp,X1,gr,mo,YE,mx,wo,KE,Fu,ZE,Ou,QE,_x,xx,vx,Ip,yx,Vc,gu,Bu,tA,nA,Dm,uv,Um,ed,Fm,td,iA,sA,nd,rA,id,Om,_e,zo,fv,pv,aA,oA,rd,ad,Yp,Sx,Mx,hA,vv,uA,bx,Ht,dA,Vm,Pv,Wc,It,fA,Su,zu,et,Tx,Go,na,ke,xr,cn,Os,se,wt,ct,xo,Lv,Nv,pA,mA,Ae,Mu,gA,Kp,_A,xA,Pp,Ex,Ax,vA,wx,yA,Dv,Uv,Fv,Ov,SA,MA,Bv,kv,zv,Cx,Gv,bA,Hv,di,hn,Ix,ii,Kc,Px,Lx,fi,Vv,TA,EA,Wv,Xv,ld,AA,wA,Lp,qv,RA,vo,CA,ul,IA,PA,$v,LA,NA,DA,UA,FA,bu,OA,Xm,Yv,Nx,BA,Gu,zs,Hu,zt,Kv,$t,kA,hd,qm,zA,GA,jv,Zv,jp,HA,go,Jv,VA,Qv,$m,Ym,ey,Dx,ty,Km,ny,WA,XA,qA,iy,sy,ry,jm,Zp,ay,$A,oy,YA,cy,Ux,ly,KA,Zm,hy,jA,ZA,JA,QA,Np,Fx,ew,uy,Jp,dy,tw,fy,nw,Fs,em,sw,zx,rw,aw,im,Vu,ow,gy,cw,lw,Gx,Hx,Vx,Wx,Xx,qx,$x,hw,uw,dw,Wu,fw,vy,pw,mw,Xu,am,ma,_w,xw,_u,Jt,e1,vw,Jn,bn,a1,o1,yw,zi,ui,Mi,sg,rg,ag,wy,og,cg,Ry,lg,Cy,Iy,ft,hg,Qn,Tn,Py,at,bi,ci,lm,ei,Mw,ti,hm,ns,Ti,um,ni,Ly=Js(()=>{So=typeof self<"u"?self:{};fu=void 0,lE=typeof TextDecoder<"u",hE=typeof TextEncoder<"u";e:{for(wp=["CLOSURE_FLAGS"],pu=So,mu=0;mu<wp.length;mu++)if((pu=pu[wp[mu]])==null){wu=null;break e}wu=pu}ix=wu&&wu[748402147];Op=ix==null||ix,qu[" "]=function(){};y1={},qc=null;dE=typeof Uint8Array<"u",M1=!(sx().indexOf("Trident")!=-1||sx().indexOf("MSIE")!=-1)&&typeof btoa=="function",rx=/[-_.]/g,fE={"-":"+",_:"/",".":"="};Mo={};rs=class{i(){return new Uint8Array(fm(this)||0)}constructor(t,e){if(T1(e),this.h=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};gE=void 0;No=typeof Symbol=="function"&&typeof Symbol()=="symbol";_E=Xs("jas",void 0,!0),ax=Xs(void 0,"0di"),Hc=Xs(void 0,"1oa"),as=Xs(void 0,Symbol()),xE=Xs(void 0,"0ub"),vE=Xs(void 0,"0ubs"),Bp=Xs(void 0,"0ubsb"),yE=Xs(void 0,"0actk"),A1=Xs("m_m","jb",!0),w1={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},R1=Object.defineProperties,we=No?_E:"Va",ox=[];en(ox,7),Sr=Object.freeze(ox);C1={};ca={};Ru=class{constructor(e,n,i){this.h=e,this.i=n,this.l=i}next(){var e=this.h.next();return e.done||(e.value=this.i.call(this.l,e.value)),e}[Symbol.iterator](){return this}};Object.freeze({});P1={};SE=Yu(t=>typeof t=="number"),cx=Yu(t=>typeof t=="string"),ME=Yu(t=>typeof t=="boolean"),Ku=typeof So.BigInt=="function"&&typeof So.BigInt(0)=="bigint";kp=Yu(t=>Ku?t>=TE&&t<=AE:t[0]==="-"?lx(t,bE):lx(t,EE)),bE=Number.MIN_SAFE_INTEGER.toString(),TE=Ku?BigInt(Number.MIN_SAFE_INTEGER):void 0,EE=Number.MAX_SAFE_INTEGER.toString(),AE=Ku?BigInt(Number.MAX_SAFE_INTEGER):void 0;wE=typeof Uint8Array.prototype.slice=="function",ut=0,St=0;ia=typeof BigInt=="function"?BigInt.asIntN:void 0,Gp=typeof BigInt=="function"?BigInt.asUintN:void 0,Bi=Number.isSafeInteger,sl=Number.isFinite,vr=Math.trunc,CE=ln(0);IE=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;DE={},UE=(function(){try{return qu(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),Yc=class{constructor(){this.h=new Map}get(e){return this.h.get(e)}set(e,n){return this.h.set(e,n),this.size=this.h.size,this}delete(e){return e=this.h.delete(e),this.size=this.h.size,e}clear(){this.h.clear(),this.size=this.h.size}has(e){return this.h.has(e)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(e,n){return this.h.forEach(e,n)}[Symbol.iterator](){return this.entries()}},FE=UE?(Object.setPrototypeOf(Yc.prototype,Map.prototype),Object.defineProperties(Yc.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),Yc):class extends Map{constructor(){super()}};Vs=class extends FE{constructor(t,e,n=ux,i=ux){super(),this.N=0|t[we],this.O=e,this.ca=n,this.na=this.O?BE:i;for(let s=0;s<t.length;s++){let r=t[s],a=n(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(t){return Zc(Array.from(super.entries(),t))}clear(){Rp(this),super.clear()}delete(t){return Rp(this),super.delete(this.ca(t,!0,!1))}entries(){if(this.O){var t=super.keys();t=new Ru(t,kE,this)}else t=super.entries();return t}values(){if(this.O){var t=super.keys();t=new Ru(t,Vs.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.O?super.forEach((n,i,s)=>{t.call(e,s.get(i),i,s)}):super.forEach(t,e)}set(t,e){return Rp(this),(t=this.ca(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.O,!1,this.N))}fb(t){var e=this.ca(t[0],!1,!0);t=t[1],t=this.O?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.ca(t,!1,!1))}get(t){t=this.ca(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.O;return n?((n=this.na(e,!1,!0,n,this.Fa,this.N))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};Vs.prototype.toJSON=void 0;Vp=class{};X1=ln(0),gr={};mo=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.h=e}};YE=class{constructor(t,e,n,i){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(t,e,n,i)}init(t,e,n,{ga:i=!1,ma:s=!1}={}){this.ga=i,this.ma=s,t&&(t=Qu(t,this.ma),this.i=t.buffer,this.u=t.h,this.o=e||0,this.l=n!==void 0?this.o+n:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},mx=[],wo=0;KE=class{constructor(t,e,n,i){if(mx.length){let s=mx.pop();s.init(t,e,n,i),t=s}else t=new YE(t,e,n,i);this.h=t,this.o=this.h.h,this.i=this.l=-1,this.A(i)}A({ra:t=!1}={}){this.ra=t}},Fu=[];Ou=class{constructor(t,e){this.i=t>>>0,this.h=e>>>0}};Bu=class{constructor(t,e){this.i=t>>>0,this.h=e>>>0}};tA=class{constructor(){this.h=[]}length(){return this.h.length}end(){var t=this.h;return this.h=[],t}};nA=class{constructor(){this.l=[],this.i=0,this.h=new tA}};Dm=Ai(),uv=Ai(),Um=Ai(),ed=Ai(),Fm=Ai(),td=Ai(),iA=Ai(),sA=Ai(),nd=Ai(),rA=Ai(),id=Ai(),Om=Ai();_e=class{constructor(t,e){this.B=W1(t,e,void 0,2048)}toJSON(){return V1(this)}u(){var t=KA,e=this.B,n=t.h,i=as;return No&&i&&e[i]?.[n]!=null&&bo(xE,3),t.i?t.o(this,t.i,t.h,t.l):t.o(this,t.h,t.defaultValue,t.l)}clone(){var t=this.B,e=0|t[we];return bm(this,t,e)?Sm(this,t,!0):new this.constructor(Oo(t,e,!1))}};_e.prototype[A1]=C1,_e.prototype.toString=function(){return this.B.toString()};zo=class{constructor(t,e,n){this.h=t,this.i=e,t=Dm,this.l=!!t&&n===t||!1}};aA=sd(function(t,e,n,i,s){return t.i===2&&(al(t,wm(e,i,n),s),!0)},dv),oA=sd(function(t,e,n,i,s){return t.i===2&&(al(t,wm(e,i,n),s),!0)},dv),rd=Symbol(),ad=Symbol(),Yp=Symbol(),Sx=Symbol(),Mx=Symbol();hA=ln(0);vv=(t,e)=>{var n=new nA;xv(t.B,n,pa(rd,od,cd,e)),Ro(n,n.h.end()),t=new Uint8Array(n.i);var i=(e=n.l).length,s=0;for(let r=0;r<i;r++){let a=e[r];t.set(a,s),s+=a.length}return n.l=[t],t};uA=sd(function(t,e,n,i,s){if(t.i!==2)return!1;if(t=Oi(t=al(t,sa([void 0,void 0],i),s)),s=Uo(i=0|e[we]),2&i)throw Error();var r=os(e,n,s);if(r instanceof Vs)2&r.N?((r=r.fa()).push(t),Qt(e,i,n,r,s)):r.fb(t);else if(Array.isArray(r)){var a=0|r[we];8192&a||en(r,a|=8192),2&a&&Qt(e,i,n,r=j1(r),s),r.push(t)}else Qt(e,i,n,Zc([t]),s);return!0},function(t,e,n,i,s){if(e instanceof Vs)e.forEach((r,a)=>{ku(t,n,sa([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&ku(t,n,sa(a,i),s)}Zc(e)}});bx=Yt(function(t,e,n){if(t.i!==1)return!1;var i=t.h;t=$p(i);var s=$p(i);i=2*(s>>31)+1;var r=s>>>20&2047;return t=4294967296*(1048575&s)+t,un(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=li(e))!=null&&(Wn(t,n,1),t=t.h,(n=L1||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),ut=n.getUint32(0,!0),St=n.getUint32(4,!0),el(t,ut),el(t,St))},rA),Ht=Yt(function(t,e,n){return t.i===5&&(un(e,n,Uu(t.h)),!0)},yv,nd),dA=$s(wv,function(t,e,n){if((e=qs(li,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Wn(i,s,5),i=i.h,mm(r),el(i,ut))}},nd),Vm=$s(wv,function(t,e,n){if((e=qs(li,e,!0))!=null&&e.length){Wn(t,n,2),ko(t.h,4*e.length);for(let i=0;i<e.length;i++)n=t.h,mm(e[i]),el(n,ut)}},nd),Pv=Yt(function(t,e,n){return t.i===5&&(un(e,n,(t=Uu(t.h))===0?void 0:t),!0)},yv,nd),Wc=Yt(function(t,e,n){return Rv(t,e,n)},Gm,td),It=Yt(function(t,e,n){return Rv(t,e,n)},Gm,td),fA=$s(function(t,e,n){return t.i!==0&&t.i!==2?t=!1:(e=br(e,0|e[we],n),t.i==2?ol(t,Du,e):e.push(Du(t.h)),t=!0),t},function(t,e,n){if((e=qs(vm,e,!1))!=null)for(let i=0;i<e.length;i++)lv(t,n,e[i])},td),Su=Yt(function(t,e,n){return t.i!==0?e=!1:(un(e,n,(t=Du(t.h))===hA?void 0:t),e=!0),e},Gm,td),zu=Yt(function(t,e,n){return t.i!==0?t=!1:(un(e,n,Rm(t.h,RE)),t=!0),t},function(t,e,n){if((e=PE(e))!=null&&(typeof e=="string"&&gx(e),e!=null))switch(Wn(t,n,0),typeof e){case"number":t=t.h,ha(e),Hs(t,ut,St);break;case"bigint":n=cv(e,Ou,jE),Hs(t.h,n.i,n.h);break;default:n=gx(e),Hs(t.h,n.i,n.h)}},iA),et=Yt(function(t,e,n){return t.i===0&&(un(e,n,Ws(t.h)),!0)},Sv,ed),Tx=$s(Cv,function(t,e,n){if((e=qs(ua,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Wn(i,s,0),cl(i.h,r))}},ed),Go=$s(Cv,function(t,e,n){if((e=qs(ua,e,!0))!=null&&e.length){n=Lm(t,n);for(let i=0;i<e.length;i++)cl(t.h,e[i]);Nm(t,n)}},ed),na=Yt(function(t,e,n){return t.i===0&&(un(e,n,(t=Ws(t.h))===0?void 0:t),!0)},Sv,ed),ke=Yt(function(t,e,n){return t.i===0&&(un(e,n,Cm(t.h)),!0)},Mv,uv),xr=Yt(function(t,e,n){return t.i===0&&(un(e,n,(t=Cm(t.h))===!1?void 0:t),!0)},Mv,uv),cn=$s(function(t,e,n){return t.i===2&&(t=Im(t),br(e,0|e[we],n).push(t),!0)},function(t,e,n){if((e=qs(En,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&ll(i,s,v1(r))}},Um),Os=Yt(function(t,e,n){return t.i===2&&(un(e,n,(t=Im(t))===""?void 0:t),!0)},bv,Um),se=Yt(function(t,e,n){return t.i===2&&(un(e,n,Im(t)),!0)},bv,Um),wt=(function(t,e,n=Dm){return new zo(t,e,n)})(function(t,e,n,i,s){return t.i===2&&(i=sa(void 0,i),br(e,0|e[we],n).push(i),al(t,i,s),!0)},function(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)Tv(t,e[r],n,i,s);1&(t=0|e[we])||en(e,1|t)}}),ct=sd(function(t,e,n,i,s,r){if(t.i!==2)return!1;var a=0|e[we];return J1(e,a,r,n,Uo(a)),al(t,e=wm(e,i,n),s),!0},Tv),xo=Yt(function(t,e,n){return t.i===2&&(un(e,n,Pm(t)),!0)},Hm,id),Lv=$s(function(t,e,n){return t.i===2&&(t=Pm(t),br(e,0|e[we],n).push(t),!0)},function(t,e,n){if((e=qs(G1,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&ll(i,s,Qu(r,!0).buffer)}},id),Nv=Yt(function(t,e,n){return t.i===0&&(un(e,n,ls(t.h)),!0)},Ev,Fm),pA=$s(function(t,e,n){return(t.i===0||t.i===2)&&(e=br(e,0|e[we],n),t.i==2?ol(t,ls,e):e.push(ls(t.h)),!0)},function(t,e,n){if((e=qs(F1,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&(Wn(i,s,0),ko(i.h,r))}},Fm),mA=Yt(function(t,e,n){return t.i===0&&(un(e,n,(t=ls(t.h))===0?void 0:t),!0)},Ev,Fm),Ae=Yt(function(t,e,n){return t.i===0&&(un(e,n,Ws(t.h)),!0)},Av,Om),Mu=Yt(function(t,e,n){return t.i===0&&(un(e,n,(t=Ws(t.h))===0?void 0:t),!0)},Av,Om),gA=Yt(function(t,e,n){return t.i!==0?t=!1:(un(e,n,(function(i){return Rm(i,(s,r)=>{var a=-(1&s);return D1(s=(s>>>1|r<<31)^a,r>>>1^a)})})(t.h)),t=!0),t},function(t,e,n){if((e=vm(e))!=null&&(hv(e),e!=null))switch(Wn(t,n,0),typeof e){case"number":t=t.h,e=(n=e)<0,zp(n=2*Math.abs(n)),n=ut;let i=St;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),Hs(t,ut=n,St=i);break;case"bigint":t=t.h,e=e<<BigInt(1)^e>>BigInt(63),ut=Number(BigInt.asUintN(32,e)),St=Number(BigInt.asUintN(32,e>>BigInt(32))),Hs(t,ut,St);break;default:eA(t.h,e)}},sA),Kp=class{constructor(e,n){var i=di;this.h=e,this.i=n,this.o=pt,this.u=Le,this.defaultValue=void 0,this.l=i.ib!=null?P1:void 0}register(){qu(this)}};_A=[0,xo,Lv,ke,se],xA=[0,Os,[0,Mu,[0,Su,na],Mu,-1,[0,Ae],Mu,-1],Yt(Iv,Hm,id)],Ex=class extends _e{constructor(t){super(t)}},Ax=[0,Os,Yt(Iv,function(t,e,n){if(e!=null){if(e instanceof _e){let i=e.mb;return void(i?(e=i(e),e!=null&&ll(t,n,Qu(e,!0).buffer)):bo(Bp,3))}if(Array.isArray(e))return void bo(Bp,3)}Hm(t,e,n)},id)],vA=[0,1,[0,12,et,10,ke],[0,7,[0,et,-1]]],wx=globalThis.trustedTypes,yA=class{constructor(t){this.h=t}toString(){return this.h+""}};Dv=[0,et,Ae,ke,-1,Go,Ae,-1,ke,-1],Uv=[0,Ae,-1,ke],Fv=class extends _e{constructor(t){super(t)}},Ov=[0,ke,se,ke,Ae,-1,$s(function(t,e,n){return(t.i===0||t.i===2)&&(e=br(e,0|e[we],n),t.i==2?ol(t,$E,e):e.push(Ws(t.h)),!0)},function(t,e,n){if((e=qs(ua,e,!0))!=null&&e.length){n=Lm(t,n);for(let i=0;i<e.length;i++)cl(t.h,e[i]);Nm(t,n)}},Om),se,-1,[0,ke,-1],Ae,ke,-1,Uv],SA=class extends _e{constructor(t){super(t)}},MA=class extends _e{constructor(t){super(t)}},Bv=class extends _e{constructor(t){super(t)}h(){return q1(this,9)}},kv=[0,3,ke,-1,2,[0,[2],et,ct,[0,Nv]],[0,Ae,ke,Ae,ke,Ae,4,[0,ke,se,-1,ke,et,-1,ke],Ae,ke,-4,Ae,cn,ke,cn,ke,-1,et,ke,-3,[0,ke,et],[0,se,et,-1],[0,ke],[0,ke,-1],[0,ke,et,-1]],[0,[3,4],se,-1,ct,[0,et],ct,[0,Ae,-2]],[0],se,ke],zv=[0,se,-2],Cx=class extends _e{constructor(t){super(t)}},Gv=[0],bA=class extends _e{constructor(t){super(t)}},Hv=[0,et,ke,1,ke,-4],di=class extends _e{constructor(t){super(t,2)}},hn={};hn[336783863]=[0,se,ke,-1,et,[0,[1,2,3,4,5,6,7,8,9],ct,Gv,ct,Ov,ct,zv,ct,Hv,ct,Dv,ct,[0,se,-2],ct,[0,se,Ae],ct,kv,ct,Uv],[0,se],ke,[0,[1,3],[2,4],ct,[0,Go],-1,ct,[0,cn],-1,wt,[0,se,-1]],se];Ix=[0,Su,-1,xr,-3,Su,Go,Os,na,Su,-1,xr,na,xr,-2,Os];ii=class extends _e{constructor(t){super(t,500)}A(t){return Le(this,0,7,t)}},Kc=[-1,{}],Px=[0,se,1,Kc],Lx=[0,se,cn,Kc];fi=class extends _e{constructor(t){super(t,500)}A(t){return Le(this,0,1001,t)}},Vv=[-500,wt,[-500,Os,-1,cn,-3,[-2,hn,ke],wt,Ax,na,-1,Px,Lx,wt,[0,Os,xr],Os,Ix,na,cn,987,cn],4,wt,[-500,se,-1,[-1,{}],998,se],wt,[-500,se,cn,-1,[-2,{},ke],997,cn,-1],na,wt,[-500,se,cn,Kc,998,cn],cn,na,Px,Lx,wt,[0,Os,-1,Kc],cn,-2,Ix,Os,-1,xr,[0,xr,mA],978,Kc,wt,Ax];fi.prototype.h=hl(Vv);TA=Tr(fi,Vv),EA=class extends _e{constructor(t){super(t)}},Wv=class extends _e{constructor(t){super(t)}h(){return fa(this,EA,1)}},Xv=[0,wt,[0,et,Ht,se,-1]],ld=Tr(Wv,Xv),AA=class extends _e{constructor(t){super(t)}},wA=class extends _e{constructor(t){super(t)}},Lp=class extends _e{constructor(t){super(t)}l(){return pt(this,AA,2)}h(){return fa(this,wA,5)}},qv=Tr(class extends _e{constructor(t){super(t)}},[0,cn,Go,Vm,[0,Ae,[0,et,-3],[0,Ht,-3],[0,et,-1,[0,wt,[0,et,-2]]],wt,[0,Ht,-1,se,Ht]],se,-1,It,wt,[0,et,Ht],cn,It]),RA=class extends _e{constructor(t){super(t)}},vo=Tr(class extends _e{constructor(t){super(t)}},[0,wt,[0,Ht,-4]]),CA=class extends _e{constructor(t){super(t)}},ul=Tr(class extends _e{constructor(t){super(t)}},[0,wt,[0,Ht,-4]]),IA=class extends _e{constructor(t){super(t)}},PA=[0,et,-1,Vm,Ae],$v=class extends _e{constructor(t){super(t)}};$v.prototype.h=hl([0,Ht,-4,It]);LA=class extends _e{constructor(t){super(t)}},NA=Tr(class extends _e{constructor(t){super(t)}},[0,wt,[0,1,et,se,Xv],It]),DA=class extends _e{constructor(t){super(t)}},UA=class extends _e{constructor(t){super(t)}h(){var t=Dt(this,1,void 0,K1);return t??oa()}},FA=class extends _e{constructor(t){super(t)}},bu=[1,2],OA=Tr(class extends _e{constructor(t){super(t)}},[0,wt,[0,bu,ct,[0,Vm],ct,[0,xo],et,se],It]),Xm=class extends _e{constructor(t){super(t)}},Yv=[0,se,et,Ht,cn,-1],Nx=class extends _e{constructor(t){super(t)}},BA=[0,ke,-1],Gu=class extends _e{constructor(t){super(t)}h(){return $1(this,2,zs)}l(){return Xp(this,Bv,6,zs)}},zs=[1,2,3,4,5,6],Hu=class extends _e{constructor(t){super(t)}h(){return Dt(this,1,void 0,K1)!=null}l(){return En(Dt(this,2))!=null}},zt=class extends _e{constructor(t){super(t)}},Kv=[0,xo,se,[0,et,It,-1],[0,zu,It]],$t=[0,Kv,ke,[0,zs,ct,Hv,ct,Ov,ct,Dv,ct,Gv,ct,zv,ct,kv],Ae],kA=Wm($t),hd=class extends _e{constructor(t){super(t)}},qm=[0,$t,Ht,-1,et],zA=us(502141897,hd);hn[502141897]=qm;GA=Tr(class extends _e{constructor(t){super(t)}},[0,[0,Ae,-1,dA,pA],PA]),jv=class extends _e{constructor(t){super(t)}},Zv=class extends _e{constructor(t){super(t)}},jp=[0,$t,Ht,[0,$t],ke],HA=us(508968150,Zv);hn[508968150]=[0,$t,qm,jp,Ht,[0,[0,Kv]]],hn[508968149]=jp;go=class extends _e{constructor(t){super(t)}l(){return pt(this,Xm,2)}h(){$e(this,2)}},Jv=[0,$t,Yv];hn[478825465]=Jv;VA=class extends _e{constructor(t){super(t)}},Qv=class extends _e{constructor(t){super(t)}},$m=class extends _e{constructor(t){super(t)}},Ym=class extends _e{constructor(t){super(t)}},ey=class extends _e{constructor(t){super(t)}},Dx=[0,$t,[0,$t],Jv,-1],ty=[0,$t,Ht,et],Km=[0,$t,Ht],ny=[0,$t,ty,Km,Ht],WA=us(479097054,ey);hn[479097054]=[0,$t,ny,Dx],hn[463370452]=Dx,hn[464864288]=ty;XA=us(462713202,Ym);hn[462713202]=ny,hn[474472470]=Km;qA=class extends _e{constructor(t){super(t)}},iy=class extends _e{constructor(t){super(t)}},sy=class extends _e{constructor(t){super(t)}},ry=class extends _e{constructor(t){super(t)}},jm=[0,$t,Ht,-1,et],Zp=[0,$t,Ht,ke];ry.prototype.h=hl([0,$t,Km,[0,$t],qm,jp,jm,Zp]);ay=class extends _e{constructor(t){super(t)}},$A=us(456383383,ay);hn[456383383]=[0,$t,Yv];oy=class extends _e{constructor(t){super(t)}},YA=us(476348187,oy);hn[476348187]=[0,$t,BA];cy=class extends _e{constructor(t){super(t)}},Ux=class extends _e{constructor(t){super(t)}},ly=[0,Ae,-1],KA=us(458105876,class extends _e{constructor(t){super(t)}h(){var t=this.B,e=0|t[we],n=Hn(this,e);return t=(function(i,s,r,a){var o=Ux;!a&&Bo(i)&&(r=0|(s=i.B)[we]);var c=os(s,2);if(i=!1,c==null){if(a)return dx();c=[]}else if(c.constructor===Vs){if(!(2&c.N)||a)return c;c=c.fa()}else Array.isArray(c)?i=!!(2&c[we]):c=[];if(a){if(!c.length)return dx();i||(i=!0,Do(c))}else i&&(i=!1,Zc(c),c=j1(c));return!i&&32&r&&nl(c,32),r=Qt(s,r,2,a=new Vs(c,o,LE,void 0)),i||Mr(s,r),a})(this,t,e,n),!n&&Ux&&(t.Fa=!0),t}});hn[458105876]=[0,ly,uA,[!0,It,[0,se,-1,cn]],[0,Go,ke,Ae],ke];Zm=class extends _e{constructor(t){super(t)}},hy=us(458105758,Zm);hn[458105758]=[0,$t,se,ly];jA=class extends _e{constructor(t){super(t)}},ZA=class extends _e{constructor(t){super(t)}},JA=class extends _e{constructor(t){super(t)}},QA=Wm([0,wt,[0,Mu,wt,[0,Pv,-1],xr]]),Np=class extends _e{constructor(t){super(t)}},Fx=[0,Pv,-1,xr],ew=class extends _e{constructor(t){super(t)}},uy=class extends _e{constructor(t){super(t)}},Jp=[1,2];uy.prototype.h=hl([0,Jp,ct,Fx,ct,[0,wt,Fx]]);dy=class extends _e{constructor(t){super(t)}},tw=us(443442058,dy);hn[443442058]=[0,$t,se,et,Ht,cn,-1,ke,Ht],hn[514774813]=jm;fy=class extends _e{constructor(t){super(t)}},nw=us(516587230,fy);hn[516587230]=[0,$t,jm,Zp,Ht],hn[518928384]=Zp;Fs=class{};Fs.forVisionTasks=function(t,e=!1){return ea("vision",t??Qr``,e)},Fs.forLiteRtLmTextTasks=function(t,e=!1){return ea("litertlm_text",t??Qr``,e)},Fs.forTextTasks=function(t,e=!1){return ea("text",t??Qr``,e)},Fs.forRetrievalTasks=function(t,e=!1){return ea("retrieval",t??Qr``,e)},Fs.forGenAiTasks=function(t,e=!1){return ea("genai",t??Qr``,e)},Fs.forDecisionTasks=function(t,e=!1){return ea("decision",t??Qr``,e)},Fs.forAudioTasks=function(t,e=!1){return ea("audio",t??Qr``,e)};em=class extends _e{constructor(t){super(t)}},sw=class extends _e{constructor(t){super(t)}},zx=[0,Ae,2,zu,-2,It,wt,[0,Ae,It]],rw=class extends _e{constructor(t){super(t)}},aw=class extends _e{constructor(t){super(t)}};im=class extends _e{constructor(t){super(t)}},Vu=[3,4,5,6,7],ow=class extends _e{constructor(t){super(t)}},gy=class extends _e{constructor(t){super(t)}};gy.prototype.h=hl([0,[0,Ae,se,-3,Ae],[0,Vu,Ae,-1,ct,[0,Ae,se,zu],ct,zx,ct,[0,1,zx],ct,[0,Ae],ct,[0,Ae,se,zu]]]);cw=class{constructor(){this.h=typeof AbortController<"u"}async send(t,e,n){var i=this.h?new AbortController:void 0,s=i&&t.la>0?setTimeout(()=>{i.abort()},t.la):void 0;try{let r=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&i?i.signal:null});r.ok?e?.(await r.text()):n?.(r.status)}catch(r){r?.name==="AbortError"?n?.(408):n?.(0)}finally{clearTimeout(s)}}},lw=class extends _e{constructor(t){super(t,37)}},Gx=[-4,{},vA,Ae,xA],Hx=[0,se,Ae,1,se,-1,Ae,1,Ae,1,It],Vx=[0,Ae,se,-2],Wx=[0,se,Ae],Xx=[0,se,Ae],qx=[0,ke,-3],$x=[0,Ae,se,-1,It,et,-1,se,-5,wt,[0,se,-4],-1,ke,[0,ke,-3],Ae],hw=class extends _e{constructor(t){super(t,19)}},uw=Wm([-19,{},[0,Ae,1,[0,se,-6,It,et,se,-1,It],1,[0,se,1,se,-5],se,-1,[0,Ae,se,-8],[0,se,-3],[0,se,Ae,se,-2],[0,se,-1,Ae,se,-1,Ae,se,-1,[0,wt,[0,se,-1],ke,se,-5],[0,Ae,ke,et,-2]],It,[0,se,-3,It,et,se,-1],[0,Ae,se,-1],[0,se,-9],[0,se,-6,Ae,se,1,se,ke,Ae,-1,ke,se,-2,Ae,se,Ae,se,et,-1],1,[0,Ae],1,[0,se,-4],1,Hx,[0,[1,2,3,4,5,6],ct,Hx,ct,Wx,ct,Xx,ct,[0,Ae],ct,$x,ct,Vx],Wx,Xx,$x,[0,[0,Ae,se,-1,It,et,-1,se,-4,wt,[0,se,-4],-1,1,qx],[0,Ae,se,-1,It,et,-1,se,-4,qx]],Vx,[0,se,[0,et,-3,Ae],Ae,-2,[0,et,-1],ke],4,[0,se,Ae,se,-1,It,Ae,se,-1,Ae,et,-1]],Ae,wt,[-37,{},Wc,se,wt,[0,se,-1],xo,1,xo,[0,cn,-1,Tx,fA,-1],se,[0,et,se,-1],ke,et,It,se,-1,gA,_A,Wc,xo,Ae,Tx,It,-1,[0,Ae,-1],se,ke,se,Go,se,-1,bx,1,bx,Gx,ke,[0,Ae,[0,Ht,et,-2],[0,Ht]],[0,Ae,It]],Wc,Lv,se,-1,Wc,Ae,-1,[0,ke,-1,Ae,ke],[0,It,-1,se],[0,Wc,ke,It],It,1,Nv,1,Gx]),dw=class{constructor(t){this.i=[],this.o=new cw,this.l=t??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(t,e){if(this.error)e?.("net-send-failed");else if(this.i.length===0)t?.();else{var n=this.i;this.i=[],n=(function(i){var s=new hw;return Wp(s=$e(s,2,Gs(1786)),3,i)})(n),n=uw(n),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,gb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{t?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),e?.("net-send-failed",i)})}}},Wu=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};fw=class{constructor(t,e,n){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new Wu,this.l=new Wu,this.m=new dw(n),this.D=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;case"TextToSpeech":return 32;default:return 0}})(t),this.F=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),t=new ow,typeof navigator>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=$e(t,1,Gs(e)),t=$e(t,2,ks("")),t=$e(t,3,ks("")),t=$e(t,4,ks("1.2.3")),t=$e(t,5,ks("")),this.C=$e(t,6,Gs((function(){var i=globalThis.__HOST_ENVIRONMENT__;if(typeof i=="string")switch(i){case"ANDROID":return 1;case"IOS":return 2;case"PYTHON":return 3;case"WEB":break;case"FLUTTER":return 5;case"FLUTTER_WEB":return 6;default:return 0}return 4})()))}ya(){var t=new aw;t=vu(t=$e(t,1,Gs(this.F)),3,performance.now()-this.v),sm(this,t=Fi(nm(tm(new im,this.D),0),3,Vu,t)),this.o=performance.now()}za(t){var e=this.i.get(t);if(e!==void 0&&(this.i.delete(t),t=performance.now()-e,++this.h.W,this.h.Y+=t,this.h.V=Math.max(this.h.V,t),this.u=Math.max(this.u,t),performance.now()>this.o+3e4)){for(let[n,i]of this.i.entries())t=n,i<e&&(this.h.S++,this.i.delete(t));e={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),Yx(this,e)}}xa(){var t={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};Yx(this,t);var e=new rw;e=Le(e,0,2,t=_y(this,t)),sm(this,e=Fi(t=nm(tm(new im,this.D),2),5,Vu,e))}close(){var t=this.m;typeof t.close=="function"?t.close():t.flush()}};vy=class{constructor(t,e){this.l=!0,this.j=t,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",e!==void 0?this.j.canvas=e:Qm()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.j._malloc(n);this.j.HEAPU8.set(t,i),e?this.j._changeBinaryGraph(n,i):this.j._changeTextGraph(n,i),this.j._free(i)}configureAudio(t,e,n,i,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Pe(this,i||"input_audio",r=>{Pe(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.j._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.j.gpuOriginForWebTexturesIsBottomLeft=t}ka(t){is(this,"__graph_config__",e=>{t(e)}),Pe(this,"__graph_config__",e=>{this.j._getGraphConfig(e,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(t){this.j.errorListener=t}attachEmptyPacketListener(t,e){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){var r=4*t.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(t,this.h/4),Pe(this,i,a=>{this.j._addAudioToInputStream(this.h,e,n,a,s)})}addGpuBufferToStream(t,e,n){Pe(this,e,i=>{var[s,r]=xy(this,t,i);this.j._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(t,e,n){Pe(this,e,i=>{this.j._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Pe(this,e,i=>{this.j._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Pe(this,e,i=>{this.j._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Pe(this,e,i=>{this.j._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Pe(this,e,i=>{this.j._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Pe(this,e,i=>{Pe(this,t,s=>{this.j._addStringToInputStream(s,i,n)})})}addStringRecordToStream(t,e,n){Pe(this,e,i=>{jx(this,Object.keys(t),s=>{jx(this,Object.values(t),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Pe(this,n,s=>{Pe(this,e,r=>{var a=this.j._malloc(t.length);this.j.HEAPU8.set(t,a),this.j._addProtoToInputStream(a,t.length,r,s,i),this.j._free(a)})})}addEmptyPacketToStream(t,e){Pe(this,t,n=>{this.j._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Pe(this,e,i=>{var s=this.j._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(t,e,n){Pe(this,e,i=>{var s=this.j._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(t,e,n){Pe(this,e,i=>{var s=this.j._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(t,e,n){Pe(this,e,i=>{var s=this.j._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(t,e,n){Pe(this,e,i=>{var s=this.j._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(t,e,n){Pe(this,e,i=>{var s=this.j._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)Pe(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(t,e){Pe(this,e,n=>{this.j._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Pe(this,e,n=>{this.j._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Pe(this,e,n=>{this.j._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Pe(this,e,n=>{this.j._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Pe(this,e,n=>{this.j._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Pe(this,e,n=>{Pe(this,t,i=>{this.j._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Pe(this,n,i=>{Pe(this,e,s=>{var r=this.j._malloc(t.length);this.j.HEAPU8.set(t,r),this.j._addProtoToInputSidePacket(r,t.length,s,i),this.j._free(r)})})}addBoolVectorToInputSidePacket(t,e){Pe(this,e,n=>{var i=this.j._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.j._addBoolVectorEntry(i,s);this.j._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Pe(this,e,n=>{var i=this.j._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.j._addDoubleVectorEntry(i,s);this.j._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Pe(this,e,n=>{var i=this.j._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.j._addFloatVectorEntry(i,s);this.j._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Pe(this,e,n=>{var i=this.j._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.j._addIntVectorEntry(i,s);this.j._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Pe(this,e,n=>{var i=this.j._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.j._addUintVectorEntry(i,s);this.j._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Pe(this,e,n=>{var i=this.j._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of t)Pe(this,s,r=>{this.j._addStringVectorEntry(i,r)});this.j._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){is(this,t,e),Pe(this,t,n=>{this.j._attachBoolListener(n)})}attachBoolVectorListener(t,e){_r(this,t,e),Pe(this,t,n=>{this.j._attachBoolVectorListener(n)})}attachIntListener(t,e){is(this,t,e),Pe(this,t,n=>{this.j._attachIntListener(n)})}attachIntVectorListener(t,e){_r(this,t,e),Pe(this,t,n=>{this.j._attachIntVectorListener(n)})}attachUintListener(t,e){is(this,t,e),Pe(this,t,n=>{this.j._attachUintListener(n)})}attachUintVectorListener(t,e){_r(this,t,e),Pe(this,t,n=>{this.j._attachUintVectorListener(n)})}attachDoubleListener(t,e){is(this,t,e),Pe(this,t,n=>{this.j._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){_r(this,t,e),Pe(this,t,n=>{this.j._attachDoubleVectorListener(n)})}attachFloatListener(t,e){is(this,t,e),Pe(this,t,n=>{this.j._attachFloatListener(n)})}attachFloatVectorListener(t,e){_r(this,t,e),Pe(this,t,n=>{this.j._attachFloatVectorListener(n)})}attachStringListener(t,e){is(this,t,e),Pe(this,t,n=>{this.j._attachStringListener(n)})}attachStringVectorListener(t,e){_r(this,t,e),Pe(this,t,n=>{this.j._attachStringVectorListener(n)})}attachProtoListener(t,e,n){is(this,t,e),Pe(this,t,i=>{this.j._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){_r(this,t,e),Pe(this,t,i=>{this.j._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),is(this,t,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Pe(this,t,i=>{this.j._attachAudioListener(i,n||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};pw=yy(Sy(vy)),mw=class extends pw{};Xu=class{constructor(t){this.h=t,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(t,e=!0,n=!1,i=!1){if(e){let s=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(pt(this.baseOptions,Hu,1)?.h()||pt(this.baseOptions,Hu,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,c=!1){var l=pt(a.baseOptions,Gu,3);if(!l){var h=l=new Gu,d=new Cx;Fi(h,4,zs,d)}"delegate"in o&&(o.delegate==="GPU"?(o=l,h=new Fv,Fi(o,2,zs,h)):(o=l,h=new Cx,Fi(o,4,zs,h))),c&&(c=l.l(),o=l.h()||c?.h()===!0,c=new Bv,o?Le(c,0,9,o=new MA):Le(c,0,8,o=new SA),Fi(l,6,zs,c)),Le(a.baseOptions,0,3,l)})(this,s,i);let r=n?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{Dp(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)n?Dp(this,s.modelAssetBuffer,r):rm(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],c=0;;){let{done:l,value:h}=await a.read();if(l)break;o.push(h),c+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(c),c=0;for(let l of o)a.set(l,c),c+=l.length;return a})(s.modelAssetBuffer).then(a=>{n?Dp(this,a,r):rm(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var t;if(this.h.ka(e=>{t=TA(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.h.attachErrorListener((n,i)=>{this.L.push(Error(i))}),this.h.Za(),this.h.setGraph(t,e),this.o?.ya(),this.F=void 0,Zx(this)}finishProcessing(t){this.h.finishProcessing(),Zx(this),this.o&&t!==void 0&&this.o.za(t)}close(){this.F=void 0,this.o?.xa(),this.o?.close(),this.h.closeGraph()}};Xu.prototype.close=Xu.prototype.close;am=class{constructor(e,n,i,s){this.h=e,this.i=n,this.o=i,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};ma=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var t=this.h;if(this.i=Vn(t.createProgram(),"Failed to create WebGL program"),this.ea=Jx(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=Jx(this,this.C(),t.FRAGMENT_SHADER),t.linkProgram(this.i),!t.getProgramParameter(this.i,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.i)}`);this.G=t.getAttribLocation(this.i,"aVertex"),this.L=t.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let t=this.h;t.deleteProgram(this.i),t.deleteShader(this.ea),t.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},_w=class extends ma{C(){return`
  precision mediump float;
  uniform sampler2D backgroundTexture;
  uniform sampler2D maskTexture;
  uniform sampler2D colorMappingTexture;
  varying vec2 vTex;
  void main() {
    vec4 backgroundColor = texture2D(backgroundTexture, vTex);
    float category = texture2D(maskTexture, vTex).r;
    vec4 categoryColor = texture2D(colorMappingTexture, vec2(category, 0.0));
    gl_FragColor = mix(backgroundColor, categoryColor, categoryColor.a);
  }
 `}J(){var t=this.h;t.activeTexture(t.TEXTURE1),this.v=yr(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.u=yr(this,t,t.NEAREST)}o(){super.o();var t=this.h;this.P=Vn(t.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=Vn(t.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=Vn(t.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var t=this.h;t.uniform1i(this.M,0),t.uniform1i(this.P,1),t.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},xw=class extends ma{C(){return`
  precision mediump float;
  uniform sampler2D maskTexture;
  uniform sampler2D defaultTexture;
  uniform sampler2D overlayTexture;
  varying vec2 vTex;
  void main() {
    float confidence = texture2D(maskTexture, vTex).r;
    vec4 defaultColor = texture2D(defaultTexture, vTex);
    vec4 overlayColor = texture2D(overlayTexture, vTex);
    // Apply the alpha from the overlay and merge in the default color
    overlayColor = mix(defaultColor, overlayColor, overlayColor.a);
    gl_FragColor = mix(defaultColor, overlayColor, confidence);
  }
 `}J(){var t=this.h;t.activeTexture(t.TEXTURE1),this.u=yr(this,t),t.activeTexture(t.TEXTURE2),this.v=yr(this,t)}o(){super.o();var t=this.h;this.M=Vn(t.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=Vn(t.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=Vn(t.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var t=this.h;t.uniform1i(this.K,0),t.uniform1i(this.M,1),t.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};Jt=class{constructor(t,e,n,i,s,r,a){this.h=t,this.o=e,this.u=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.u&&--e1===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!Bs(this,0)}ua(){return!!Bs(this,1)}X(){return!!Bs(this,2)}ta(){return(e=Bs(t=this,0))||(e=om(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.h.push(e)),e;var t,e}sa(){return om(this)}T(){return My(this)}clone(){var t=[];for(let e of this.h){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=Io(this),s=ig(this);i.activeTexture(i.TEXTURE1),n=yr(s,i,this.o?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=by(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),fd(s,i,n),fl(s,i,!1,()=>{Ty(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),cm(this)}),ng(s),cm(this)}}t.push(n)}return new Jt(t,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&Io(this).deleteTexture(Bs(this,2)),e1=-1}};Jt.prototype.close=Jt.prototype.close,Jt.prototype.clone=Jt.prototype.clone,Jt.prototype.getAsWebGLTexture=Jt.prototype.T,Jt.prototype.getAsFloat32Array=Jt.prototype.sa,Jt.prototype.getAsUint8Array=Jt.prototype.ta,Jt.prototype.hasWebGLTexture=Jt.prototype.X,Jt.prototype.hasFloat32Array=Jt.prototype.ua,Jt.prototype.hasUint8Array=Jt.prototype.Ua;e1=250,vw={color:"white",lineWidth:4,radius:6};Jn=class{constructor(t,e){typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.l=t,this.u=e):this.u=t}Ma(t,e){if(t){var n=Xc(this);e=Up(e),n.save();var i=n.canvas,s=0;for(let r of t)n.fillStyle=Us(e.fillColor,{index:s,from:r}),n.strokeStyle=Us(e.color,{index:s,from:r}),n.lineWidth=Us(e.lineWidth,{index:s,from:r}),(t=new Path2D).arc(r.x*i.width,r.y*i.height,Us(e.radius,{index:s,from:r}),0,2*Math.PI),n.fill(t),n.stroke(t),++s;n.restore()}}La(t,e,n){if(t&&e){var i=Xc(this);n=Up(n),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=t[a.start];let o=t[a.end];e&&o&&(i.strokeStyle=Us(n.color,{index:r,from:e,to:o}),i.lineWidth=Us(n.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(t,e){var n=Xc(this);e=Up(e),n.save(),n.beginPath(),n.lineWidth=Us(e.lineWidth,{}),n.strokeStyle=Us(e.color,{}),n.fillStyle=Us(e.fillColor,{}),n.moveTo(t.originX,t.originY),n.lineTo(t.originX+t.width,t.originY),n.lineTo(t.originX+t.width,t.originY+t.height),n.lineTo(t.originX,t.originY+t.height),n.lineTo(t.originX,t.originY),n.stroke(),n.fill(),n.restore()}Ja(t,e,n=[0,0,0,255]){this.l?(function(i,s,r,a){var o=tl(i);n1(i,s,c=>{i1(i,c,r,a),(c=Xc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,t,n,e):i1(this,t.T(),n,e)}Ka(t,e,n){this.l?(function(i,s,r,a){var o=tl(i);n1(i,s,c=>{s1(i,c,r,a),(c=Xc(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,t,e,n):s1(this,t.T(),e,n)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};Jn.prototype.close=Jn.prototype.close,Jn.prototype.drawConfidenceMask=Jn.prototype.Ka,Jn.prototype.drawCategoryMask=Jn.prototype.Ja,Jn.prototype.drawBoundingBox=Jn.prototype.Ia,Jn.prototype.drawConnectors=Jn.prototype.La,Jn.prototype.drawLandmarks=Jn.prototype.Ma,Jn.lerp=function(t,e,n,i,s){return t1(i*(1-(t-e)/(n-e))+s*(1-(n-t)/(n-e)),i,s)},Jn.clamp=t1;bn=class{constructor(t,e,n,i,s,r,a){this.h=t,this.u=e,this.o=n,this.canvas=i,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--a1===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!ss(this,0)}va(){return!!ss(this,1)}X(){return!!ss(this,2)}Qa(){return Ey(this)}Pa(){var t=ss(this,1);return t||(Eu(this),Au(this),t=r1(this),$c(this),this.h.push(t),this.u=!0),t}T(){return Eu(this)}clone(){var t=[];for(let e of this.h){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=Po(this),s=pd(this);i.activeTexture(i.TEXTURE1),n=yr(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),fd(s,i,n),fl(s,i,!1,()=>{Au(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),$c(this)}),ng(s),$c(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Eu(this),Au(this),n=r1(this),$c(this)}t.push(n)}return new bn(t,this.va(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&ss(this,1).close(),this.o&&Po(this).deleteTexture(ss(this,2)),a1=-1}};bn.prototype.close=bn.prototype.close,bn.prototype.clone=bn.prototype.clone,bn.prototype.getAsWebGLTexture=bn.prototype.T,bn.prototype.getAsImageBitmap=bn.prototype.Pa,bn.prototype.getAsImageData=bn.prototype.Qa,bn.prototype.hasWebGLTexture=bn.prototype.X,bn.prototype.hasImageBitmap=bn.prototype.va,bn.prototype.hasImageData=bn.prototype.Ta;a1=250;yw=Sy((o1=yy(vy),class extends o1{get oa(){return this.j}Da(t,e,n){Pe(this,e,i=>{var[s,r]=xy(this,t,i);this.oa._addBoundTextureAsImageToStream(i,s,r,n)})}ha(t,e){is(this,t,e),Pe(this,t,n=>{this.oa._attachImageListener(n)})}ia(t,e){_r(this,t,e),Pe(this,t,n=>{this.oa._attachImageVectorListener(n)})}})),zi=class extends yw{};ui=class extends Xu{constructor(t,e,n,i){super(t),this.h=t,this.Ba=e,this.qa=n,this.Ca=i,this.ea=new ma,this.K=!1}l(t,e=!0,n=!1,i=!1){if("runningMode"in t){var s=this.K=!!t.runningMode&&t.runningMode!=="IMAGE";$e(this.baseOptions,2,s==null?s:Cu(s))}if(t.canvas!==void 0&&this.h.j.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e,n,i)}close(){this.ea.close(),super.close()}};ui.prototype.close=ui.prototype.close;Mi=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect_in",!1),this.m={detections:[]},Le(t=this.i=new hd,0,1,e=new zt),Ne(this.i,2,.5),Ne(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return"minDetectionConfidence"in t&&Ne(this.i,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ne(this.i,3,t.minSuppressionThreshold??.3),this.l(t)}H(t,e){return this.m={detections:[]},Gi(this,t,e),this.m}I(t,e,n){return this.m={detections:[]},ds(this,t,n,e),this.m}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect_in"),gt(t,"detections");var e=new di;hs(e,zA,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect_in"),lt(n,"DETECTIONS:detections"),n.A(e),wi(t,n),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=qv(r),this.m.detections.push(my(i));Me(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Mi.prototype.detectForVideo=Mi.prototype.I,Mi.prototype.detect=Mi.prototype.H,Mi.prototype.setOptions=Mi.prototype.A,Mi.createFromModelPath=async function(t,e){return dt(Mi,t,{baseOptions:{modelAssetPath:e}})},Mi.createFromModelBuffer=function(t,e){return dt(Mi,t,{baseOptions:{modelAssetBuffer:e}})},Mi.createFromOptions=function(t,e){return dt(Mi,t,e)};sg=ki([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),rg=ki([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),ag=ki([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),wy=ki([474,475],[475,476],[476,477],[477,474]),og=ki([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),cg=ki([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),Ry=ki([469,470],[470,471],[471,472],[472,469]),lg=ki([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),Cy=[...sg,...rg,...ag,...og,...cg,...lg],Iy=ki([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);ft=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Le(t=this.i=new Zv,0,1,e=new zt),this.C=new jv,Le(this.i,0,3,this.C),this.v=new hd,Le(this.i,0,2,this.v),cs(this.v,4,1),Ne(this.v,2,.5),Ne(this.C,2,.5),Ne(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return"numFaces"in t&&cs(this.v,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ne(this.v,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.i,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ne(this.C,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}H(t,e){return c1(this),Gi(this,t,e),this.m}I(t,e,n){return c1(this),ds(this,t,n,e),this.m}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect"),gt(t,"face_landmarks");var e=new di;hs(e,HA,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"NORM_LANDMARKS:face_landmarks"),n.A(e),wi(t,n),this.h.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=ul(r),this.m.faceLandmarks.push(dl(i));Me(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",i=>{Me(this,i)}),this.outputFaceBlendshapes&&(gt(t,"blendshapes"),lt(n,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=ld(r),this.m.faceBlendshapes.push(Jm(i.h()??[]));Me(this,s)}),this.h.attachEmptyPacketListener("blendshapes",i=>{Me(this,i)})),this.outputFacialTransformationMatrixes&&(gt(t,"face_geometry"),lt(n,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=pt(i=GA(r),IA,2))&&this.m.facialTransformationMatrixes.push({rows:Ei(i,1)??0??0,columns:Ei(i,2)??0??0,data:ta(i,3,li).slice()??[]});Me(this,s)}),this.h.attachEmptyPacketListener("face_geometry",i=>{Me(this,i)})),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ft.prototype.detectForVideo=ft.prototype.I,ft.prototype.detect=ft.prototype.H,ft.prototype.setOptions=ft.prototype.A,ft.createFromModelPath=function(t,e){return dt(ft,t,{baseOptions:{modelAssetPath:e}})},ft.createFromModelBuffer=function(t,e){return dt(ft,t,{baseOptions:{modelAssetBuffer:e}})},ft.createFromOptions=function(t,e){return dt(ft,t,e)},ft.FACE_LANDMARKS_LIPS=sg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",ft.FACE_LANDMARKS_LIPS),ft.FACE_LANDMARKS_LEFT_EYE=rg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",ft.FACE_LANDMARKS_LEFT_EYE),ft.FACE_LANDMARKS_LEFT_EYEBROW=ag,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ft.FACE_LANDMARKS_LEFT_EYEBROW),ft.FACE_LANDMARKS_LEFT_IRIS=wy,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",ft.FACE_LANDMARKS_LEFT_IRIS),ft.FACE_LANDMARKS_RIGHT_EYE=og,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",ft.FACE_LANDMARKS_RIGHT_EYE),ft.FACE_LANDMARKS_RIGHT_EYEBROW=cg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ft.FACE_LANDMARKS_RIGHT_EYEBROW),ft.FACE_LANDMARKS_RIGHT_IRIS=Ry,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ft.FACE_LANDMARKS_RIGHT_IRIS),ft.FACE_LANDMARKS_FACE_OVAL=lg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",ft.FACE_LANDMARKS_FACE_OVAL),ft.FACE_LANDMARKS_CONTOURS=Cy,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",ft.FACE_LANDMARKS_CONTOURS),ft.FACE_LANDMARKS_TESSELATION=Iy,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",ft.FACE_LANDMARKS_TESSELATION);hg=ki([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);Qn=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.m=new ey,0,1,e=new zt),this.v=new Ym,Le(this.m,0,2,this.v),this.G=new $m,Le(this.v,0,3,this.G),this.C=new Qv,Le(this.v,0,2,this.C),this.i=new VA,Le(this.m,0,3,this.i),Ne(this.C,2,.5),Ne(this.v,4,.5),Ne(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return pt(this.m,zt,1)}set baseOptions(t){Le(this.m,0,1,t)}A(t){if(cs(this.C,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ne(this.C,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.v,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ne(this.G,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new go,n=e,i=Qp(t.cannedGesturesClassifierOptions,pt(this.i,go,3)?.l());Le(n,0,2,i),Le(this.i,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&pt(this.i,go,3)?.h();return t.customGesturesClassifierOptions?(Le(n=e=new go,0,2,i=Qp(t.customGesturesClassifierOptions,pt(this.i,go,4)?.l())),Le(this.i,0,4,e)):t.customGesturesClassifierOptions===void 0&&pt(this.i,go,4)?.h(),this.l(t)}Xa(t,e){return l1(this),Gi(this,t,e),h1(this)}Ya(t,e,n){return l1(this),ds(this,t,n,e),h1(this)}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect"),gt(t,"hand_gestures"),gt(t,"hand_landmarks"),gt(t,"world_hand_landmarks"),gt(t,"handedness");var e=new di;hs(e,WA,this.m);var n=new ii;hi(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"HAND_GESTURES:hand_gestures"),lt(n,"LANDMARKS:hand_landmarks"),lt(n,"WORLD_LANDMARKS:world_hand_landmarks"),lt(n,"HANDEDNESS:handedness"),n.A(e),wi(t,n),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=ul(r),this.landmarks.push(dl(i));Me(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{Me(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=vo(r),this.worldLandmarks.push(yo(i));Me(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{Me(this,i)}),this.h.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...u1(i,!1)),Me(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",i=>{Me(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...u1(i)),Me(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Qn.prototype.recognizeForVideo=Qn.prototype.Ya,Qn.prototype.recognize=Qn.prototype.Xa,Qn.prototype.setOptions=Qn.prototype.A,Qn.createFromModelPath=function(t,e){return dt(Qn,t,{baseOptions:{modelAssetPath:e}})},Qn.createFromModelBuffer=function(t,e){return dt(Qn,t,{baseOptions:{modelAssetBuffer:e}})},Qn.createFromOptions=function(t,e){return dt(Qn,t,e)},Qn.HAND_CONNECTIONS=hg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",Qn.HAND_CONNECTIONS);Tn=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Le(t=this.i=new Ym,0,1,e=new zt),this.v=new $m,Le(this.i,0,3,this.v),this.m=new Qv,Le(this.i,0,2,this.m),cs(this.m,3,1),Ne(this.m,2,.5),Ne(this.v,2,.5),Ne(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return"numHands"in t&&cs(this.m,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ne(this.m,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.i,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ne(this.v,2,t.minHandPresenceConfidence??.5),this.l(t)}H(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Gi(this,t,e),d1(this)}I(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ds(this,t,n,e),d1(this)}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect"),gt(t,"hand_landmarks"),gt(t,"world_hand_landmarks"),gt(t,"handedness");var e=new di;hs(e,XA,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"LANDMARKS:hand_landmarks"),lt(n,"WORLD_LANDMARKS:world_hand_landmarks"),lt(n,"HANDEDNESS:handedness"),n.A(e),wi(t,n),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=ul(r),this.landmarks.push(dl(i));Me(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{Me(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=vo(r),this.worldLandmarks.push(yo(i));Me(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{Me(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let c of i){i=ld(c);let l=[];for(let h of i.h())l.push({score:Gn(h,2)??0,index:Ei(h,1)??0??-1,categoryName:En(Dt(h,3))??""??"",displayName:En(Dt(h,4))??""??""});o.push(l)}a.call(r,...o),Me(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Tn.prototype.detectForVideo=Tn.prototype.I,Tn.prototype.detect=Tn.prototype.H,Tn.prototype.setOptions=Tn.prototype.A,Tn.createFromModelPath=function(t,e){return dt(Tn,t,{baseOptions:{modelAssetPath:e}})},Tn.createFromModelBuffer=function(t,e){return dt(Tn,t,{baseOptions:{modelAssetBuffer:e}})},Tn.createFromOptions=function(t,e){return dt(Tn,t,e)},Tn.HAND_CONNECTIONS=hg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",Tn.HAND_CONNECTIONS);Py=ki([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);at=class extends ui{constructor(t,e){super(new zi(t,e),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Le(t=this.m=new ry,0,1,e=new zt),this.Z=new $m,Le(this.m,0,2,this.Z),this.Aa=new qA,Le(this.m,0,3,this.Aa),this.v=new hd,Le(this.m,0,4,this.v),this.P=new jv,Le(this.m,0,5,this.P),this.C=new iy,Le(this.m,0,6,this.C),this.aa=new sy,Le(this.m,0,7,this.aa),Ne(this.v,2,.5),Ne(this.v,3,.3),Ne(this.P,2,.5),Ne(this.C,2,.5),Ne(this.C,3,.3),Ne(this.aa,2,.5),Ne(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return pt(this.m,zt,1)}set baseOptions(t){Le(this.m,0,1,t)}A(t){return"minFaceDetectionConfidence"in t&&Ne(this.v,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ne(this.v,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ne(this.P,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ne(this.C,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ne(this.C,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ne(this.aa,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ne(this.Z,2,t.minHandLandmarksConfidence??.5),this.l(t)}H(t,e,n){var i=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:n,f1(this),Gi(this,t,i),p1(this)}I(t,e,n,i){var s=typeof n!="function"?n:{};return this.G=typeof n=="function"?n:i,f1(this),ds(this,t,s,e),p1(this)}u(){var t=new fi;kt(t,"input_frames_image"),gt(t,"pose_landmarks"),gt(t,"pose_world_landmarks"),gt(t,"face_landmarks"),gt(t,"left_hand_landmarks"),gt(t,"left_hand_world_landmarks"),gt(t,"right_hand_landmarks"),gt(t,"right_hand_world_landmarks");var e=new di,n=new Ex;hi(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))$e(s,2,Zu(r,0,Jc));else{if(!(typeof r=="string"||r instanceof rs||dm(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");rl(s,2,$u(r,!1),oa())}})(n,this.m.h());var i=new ii;hi(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),Qc(i,8,Ex,n),Ut(i,"IMAGE:input_frames_image"),lt(i,"POSE_LANDMARKS:pose_landmarks"),lt(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),lt(i,"FACE_LANDMARKS:face_landmarks"),lt(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),lt(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),lt(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),lt(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.A(e),wi(t,i),ud(this,t),this.h.attachProtoListener("pose_landmarks",(s,r)=>{xu(s,this.i.poseLandmarks),Me(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{Me(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=vo(s),a.push(yo(s)),Me(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{Me(this,s)}),this.outputPoseSegmentationMasks&&(lt(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Co(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[Lo(this,s,!0,!this.G)],Me(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],Me(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{xu(s,this.i.faceLandmarks),Me(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{Me(this,s)}),this.outputFaceBlendshapes&&(gt(t,"extra_blendshapes"),lt(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=ld(s),a.push(Jm(s.h()??[]))),Me(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{Me(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{xu(s,this.i.leftHandLandmarks),Me(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{Me(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=vo(s),a.push(yo(s)),Me(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{Me(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{xu(s,this.i.rightHandLandmarks),Me(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{Me(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=vo(s),a.push(yo(s)),Me(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{Me(this,s)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};at.prototype.detectForVideo=at.prototype.I,at.prototype.detect=at.prototype.H,at.prototype.setOptions=at.prototype.A,at.createFromModelPath=function(t,e){return dt(at,t,{baseOptions:{modelAssetPath:e}})},at.createFromModelBuffer=function(t,e){return dt(at,t,{baseOptions:{modelAssetBuffer:e}})},at.createFromOptions=function(t,e){return dt(at,t,e)},at.HAND_CONNECTIONS=hg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",at.HAND_CONNECTIONS),at.POSE_CONNECTIONS=Py,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",at.POSE_CONNECTIONS),at.FACE_LANDMARKS_LIPS=sg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",at.FACE_LANDMARKS_LIPS),at.FACE_LANDMARKS_LEFT_EYE=rg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",at.FACE_LANDMARKS_LEFT_EYE),at.FACE_LANDMARKS_LEFT_EYEBROW=ag,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",at.FACE_LANDMARKS_LEFT_EYEBROW),at.FACE_LANDMARKS_LEFT_IRIS=wy,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",at.FACE_LANDMARKS_LEFT_IRIS),at.FACE_LANDMARKS_RIGHT_EYE=og,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",at.FACE_LANDMARKS_RIGHT_EYE),at.FACE_LANDMARKS_RIGHT_EYEBROW=cg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",at.FACE_LANDMARKS_RIGHT_EYEBROW),at.FACE_LANDMARKS_RIGHT_IRIS=Ry,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",at.FACE_LANDMARKS_RIGHT_IRIS),at.FACE_LANDMARKS_FACE_OVAL=lg,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",at.FACE_LANDMARKS_FACE_OVAL),at.FACE_LANDMARKS_CONTOURS=Cy,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",at.FACE_LANDMARKS_CONTOURS),at.FACE_LANDMARKS_TESSELATION=Iy,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",at.FACE_LANDMARKS_TESSELATION);bi=class extends ui{constructor(t,e){super(new zi(t,e),"input_image","norm_rect",!0),this.m={classifications:[]},Le(t=this.i=new ay,0,1,e=new zt)}D(){return"ImageClassifier"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return Le(this.i,0,2,Qp(t,pt(this.i,Xm,2))),this.l(t)}Ga(t,e){return this.m={classifications:[]},Gi(this,t,e),this.m}Ha(t,e,n){return this.m={classifications:[]},ds(this,t,n,e),this.m}u(){var t=new fi;kt(t,"input_image"),kt(t,"norm_rect"),gt(t,"classifications");var e=new di;hs(e,$A,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ut(n,"IMAGE:input_image"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"CLASSIFICATIONS:classifications"),n.A(e),wi(t,n),this.h.attachProtoListener("classifications",(i,s)=>{this.m=iw(NA(i)),Me(this,s)}),this.h.attachEmptyPacketListener("classifications",i=>{Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};bi.prototype.classifyForVideo=bi.prototype.Ha,bi.prototype.classify=bi.prototype.Ga,bi.prototype.setOptions=bi.prototype.A,bi.createFromModelPath=function(t,e){return dt(bi,t,{baseOptions:{modelAssetPath:e}})},bi.createFromModelBuffer=function(t,e){return dt(bi,t,{baseOptions:{modelAssetBuffer:e}})},bi.createFromOptions=function(t,e){return dt(bi,t,e)};ci=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect",!0),this.i=new oy,this.embeddings={embeddings:[]},Le(t=this.i,0,1,e=new zt)}D(){return"ImageEmbedder"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){var e=this.i,n=pt(this.i,Nx,2);if(n=n?n.clone():new Nx,t.l2Normalize!==void 0){var i=t.l2Normalize;$e(n,1,i==null?i:Cu(i))}else"l2Normalize"in t&&$e(n,1);return t.quantize!==void 0?$e(n,2,(i=t.quantize)==null?i:Cu(i)):"quantize"in t&&$e(n,2),Le(e,0,2,n),this.l(t)}Na(t,e){return Gi(this,t,e),this.embeddings}Oa(t,e,n){return ds(this,t,n,e),this.embeddings}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect"),gt(t,"embeddings_out");var e=new di;hs(e,YA,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"EMBEDDINGS:embeddings_out"),n.A(e),wi(t,n),this.h.attachProtoListener("embeddings_out",(i,s)=>{i=OA(i),this.embeddings=(function(r){return{embeddings:fa(r,FA,1).map(a=>{var o={headIndex:Ei(a,3)??0??-1,headName:En(Dt(a,4))??""??""};if($1(a,1,bu))a=ta(a=Xp(a,DA,1,bu),1,li),o.floatEmbedding=a.slice();else{let c=new Uint8Array(0);o.quantizedEmbedding=Xp(a,UA,2,bu)?.h()?.i()??c}return o}),timestampMs:py(Dt(r,2,void 0,Pu)??X1)}})(i),Me(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",i=>{Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ci.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=Bx(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=Bx(Ox(t.quantizedEmbedding),Ox(e.quantizedEmbedding))}return t},ci.prototype.embedForVideo=ci.prototype.Oa,ci.prototype.embed=ci.prototype.Na,ci.prototype.setOptions=ci.prototype.A,ci.createFromModelPath=function(t,e){return dt(ci,t,{baseOptions:{modelAssetPath:e}})},ci.createFromModelBuffer=function(t,e){return dt(ci,t,{baseOptions:{modelAssetBuffer:e}})},ci.createFromOptions=function(t,e){return dt(ci,t,e)};lm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};lm.prototype.close=lm.prototype.close;ei=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Zm,this.C=new cy,Le(this.i,0,3,this.C),Le(t=this.i,0,1,e=new zt)}D(){return"ImageSegmenter"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return t.displayNamesLocale!==void 0?$e(this.i,2,ks(t.displayNamesLocale)):"displayNamesLocale"in t&&$e(this.i,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}M(){Sw(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:n,m1(this),Gi(this,t,i),g1(this)}cb(t,e,n,i){var s=typeof n!="function"?n:{};return this.m=typeof n=="function"?n:i,m1(this),ds(this,t,s,e),g1(this)}Ra(){return this.v}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect");var e=new di;hs(e,hy,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),n.A(e),wi(t,n),ud(this,t),this.outputConfidenceMasks&&(gt(t,"confidence_masks"),lt(n,"CONFIDENCE_MASKS:confidence_masks"),Co(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Lo(this,r,!0,!this.m)),Me(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Me(this,i)})),this.outputCategoryMask&&(gt(t,"category_mask"),lt(n,"CATEGORY_MASK:category_mask"),Co(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=Lo(this,i,!1,!this.m),Me(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Me(this,i)})),gt(t,"quality_scores"),lt(n,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,Me(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ei.prototype.getLabels=ei.prototype.Ra,ei.prototype.segmentForVideo=ei.prototype.cb,ei.prototype.segment=ei.prototype.segment,ei.prototype.setOptions=ei.prototype.A,ei.createFromModelPath=function(t,e){return dt(ei,t,{baseOptions:{modelAssetPath:e}})},ei.createFromModelBuffer=function(t,e){return dt(ei,t,{baseOptions:{modelAssetBuffer:e}})},ei.createFromOptions=function(t,e){return dt(ei,t,e)};Mw={0:0,1:1,2:2,3:3};ti=class extends Xu{constructor(t,e){super(new mw(t,e)),this.v=new ma,this.delegate="CPU",this.i=0,this.baseOptions=new zt,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(t){return this.delegate=t.baseOptions?.delegate??"CPU",super.l(t)}eb(t){if(this.i===0)throw Error("Segmenter is not initialized.");var e;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=eg(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:t.length,width:e,height:n});var s=this.j._malloc(t.length);if(this.j.HEAPU8.set(t,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){if(this.i===0)throw Error("Segmenter is not initialized.");var e=(function(l){l=l.map(({isCompleted:d,brushMode:u,point:f})=>{u=Mw[u]??0,f=f.map(({x:v,y:m})=>{var p=new jA;return _o(p,1,v),_o(p,2,m),p});var g=new ZA;return qp(g,d),rl(g,1,Gs(u),0),Wp(g,2,f),g});var h=new JA;return Wp(h,1,l),QA(h)})(t);t=this.j._malloc(e.length),this.j.HEAPU8.set(e,t);var n=this.j._malloc(12),i=n+4,s=n+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var c=this.o;++c.h.R,c.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,t,e.length,n,i,s))===0)throw Error("Segmentation failed.");this.o?.za(a);let l=this.j.HEAPU32[n/4],h=this.j.HEAPU32[i/4],d=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4),u=new Float32Array(d);if(o=l*h,(u instanceof Uint8Array||u instanceof Float32Array)&&u.length!==o)throw Error("Unsupported channel count: "+u.length/o);return new Jt([u],!0,!1,this.h.j.canvas??void 0,this.v,l,h)}finally{t!==0&&this.j._free(t),n!==0&&this.j._free(n),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.xa(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var t=new Gu;if(this.delegate==="GPU"){var e=new Fv;Fi(t,2,zs,e)}else cs(e=new bA,1,4),Fi(t,1,zs,e);if(Le(this.baseOptions,0,3,t),t=kA(this.baseOptions),e=this.j._malloc(t.length),this.j.HEAPU8.set(t,e),this.i=this.j._interactive_segmenter_create(e,t.length),this.j._free(e),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.ya()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};ti.prototype.close=ti.prototype.close,ti.prototype.segment=ti.prototype.segment,ti.prototype.setImage=ti.prototype.eb,ti.prototype.setOptions=ti.prototype.A,ti.createFromModelPath=function(t,e){return Tu(ti,Fp(),t,{baseOptions:{modelAssetPath:e}})},ti.createFromModelBuffer=function(t,e){return Tu(ti,Fp(),t,{baseOptions:{modelAssetBuffer:e}})},ti.createFromOptions=function(t,e){var n=e.canvas??Fp();return Tu(ti,n,t,e)};hm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};hm.prototype.close=hm.prototype.close;ns=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new Zm,this.v=new cy,Le(this.i,0,3,this.v),Le(t=this.i,0,1,e=new zt)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){var s=typeof n!="function"?n:{};if(this.m=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new uy,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new Np;qp(r,!0),_o(r,1,e.keypoint.x),_o(r,2,e.keypoint.y),Fi(i,1,Jp,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new ew;for(r of e.scribble)qp(e=new Np,!0),_o(e,1,r.x),_o(e,2,r.y),Qc(o,1,Np,e);Fi(i,2,Jp,o)}}this.h.addProtoToStream(i.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),Gi(this,t,s);e:{try{let o=new hm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break e}this.m(o)}finally{dd(this)}a=void 0}return a}u(){var t=new fi;kt(t,"image_in"),kt(t,"roi_in"),kt(t,"norm_rect_in");var e=new di;hs(e,hy,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"ROI:roi_in"),Ut(n,"NORM_RECT:norm_rect_in"),n.A(e),wi(t,n),ud(this,t),this.outputConfidenceMasks&&(gt(t,"confidence_masks"),lt(n,"CONFIDENCE_MASKS:confidence_masks"),Co(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Lo(this,r,!0,!this.m)),Me(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],Me(this,i)})),this.outputCategoryMask&&(gt(t,"category_mask"),lt(n,"CATEGORY_MASK:category_mask"),Co(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=Lo(this,i,!1,!this.m),Me(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,Me(this,i)})),gt(t,"quality_scores"),lt(n,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,Me(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ns.prototype.segment=ns.prototype.segment,ns.prototype.setOptions=ns.prototype.A,ns.createFromModelPath=function(t,e){return dt(ns,t,{baseOptions:{modelAssetPath:e}})},ns.createFromModelBuffer=function(t,e){return dt(ns,t,{baseOptions:{modelAssetBuffer:e}})},ns.createFromOptions=function(t,e){return dt(ns,t,e)};Ti=class extends ui{constructor(t,e){super(new zi(t,e),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},Le(t=this.i=new dy,0,1,e=new zt)}D(){return"ObjectDetector"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return t.displayNamesLocale!==void 0?$e(this.i,2,ks(t.displayNamesLocale)):"displayNamesLocale"in t&&$e(this.i,2),t.maxResults!==void 0?cs(this.i,3,t.maxResults):"maxResults"in t&&$e(this.i,3),t.scoreThreshold!==void 0?Ne(this.i,4,t.scoreThreshold):"scoreThreshold"in t&&$e(this.i,4),t.categoryAllowlist!==void 0?Nu(this.i,5,t.categoryAllowlist):"categoryAllowlist"in t&&$e(this.i,5),t.categoryDenylist!==void 0?Nu(this.i,6,t.categoryDenylist):"categoryDenylist"in t&&$e(this.i,6),this.l(t)}H(t,e){return this.m={detections:[]},Gi(this,t,e),this.m}I(t,e,n){return this.m={detections:[]},ds(this,t,n,e),this.m}u(){var t=new fi;kt(t,"input_frame_gpu"),kt(t,"norm_rect"),gt(t,"detections");var e=new di;hs(e,tw,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ut(n,"IMAGE:input_frame_gpu"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"DETECTIONS:detections"),n.A(e),wi(t,n),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=qv(r),this.m.detections.push(my(i));Me(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{Me(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Ti.prototype.detectForVideo=Ti.prototype.I,Ti.prototype.detect=Ti.prototype.H,Ti.prototype.setOptions=Ti.prototype.A,Ti.createFromModelPath=async function(t,e){return dt(Ti,t,{baseOptions:{modelAssetPath:e}})},Ti.createFromModelBuffer=function(t,e){return dt(Ti,t,{baseOptions:{modelAssetBuffer:e}})},Ti.createFromOptions=function(t,e){return dt(Ti,t,e)};um=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(t=>{t.close()})}};um.prototype.close=um.prototype.close;ni=class extends ui{constructor(t,e){super(new zi(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Le(t=this.i=new fy,0,1,e=new zt),this.C=new sy,Le(this.i,0,3,this.C),this.m=new iy,Le(this.i,0,2,this.m),cs(this.m,4,1),Ne(this.m,2,.5),Ne(this.C,2,.5),Ne(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return pt(this.i,zt,1)}set baseOptions(t){Le(this.i,0,1,t)}A(t){return"numPoses"in t&&cs(this.m,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ne(this.m,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ne(this.i,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ne(this.C,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}H(t,e,n){var i=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:n,_1(this),Gi(this,t,i),x1(this)}I(t,e,n,i){var s=typeof n!="function"?n:{};return this.v=typeof n=="function"?n:i,_1(this),ds(this,t,s,e),x1(this)}u(){var t=new fi;kt(t,"image_in"),kt(t,"norm_rect"),gt(t,"normalized_landmarks"),gt(t,"world_landmarks"),gt(t,"segmentation_masks");var e=new di;hs(e,nw,this.i);var n=new ii;hi(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ut(n,"IMAGE:image_in"),Ut(n,"NORM_RECT:norm_rect"),lt(n,"NORM_LANDMARKS:normalized_landmarks"),lt(n,"WORLD_LANDMARKS:world_landmarks"),n.A(e),wi(t,n),ud(this,t),this.h.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=ul(r),this.landmarks.push(dl(i));Me(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],Me(this,i)}),this.h.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=vo(r),this.worldLandmarks.push(yo(i));Me(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],Me(this,i)}),this.outputSegmentationMasks&&(lt(n,"SEGMENTATION_MASK:segmentation_masks"),Co(this,"segmentation_masks"),this.h.ia("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Lo(this,r,!0,!this.v)),Me(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],Me(this,i)})),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.detectForVideo=ni.prototype.I,ni.prototype.detect=ni.prototype.H,ni.prototype.setOptions=ni.prototype.A,ni.createFromModelPath=function(t,e){return dt(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return dt(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return dt(ni,t,e)},ni.POSE_CONNECTIONS=Py,Pt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",ni.POSE_CONNECTIONS)});var jw=rS(()=>{uo();Q_();ex();tx();Ly();var tt=t=>document.querySelector(t),Sa=t=>new URL(t,document.baseURI).href,bw=matchMedia("(pointer: coarse)").matches,zy=innerHeight>innerWidth,fg=zy?-.42:-.66,pg=zy?.5:.36,le={explode:0,target:0,yaw:fg,pitch:pg,zoom:1,tYaw:fg,tPitch:pg,tZoom:1,facing:"user",stream:null,hand:null,gesture:"",camOn:!1};window.__demo=le;var Ma=tt("#gl"),Vt=new ru({canvas:Ma,antialias:!0,alpha:!0,powerPreference:"high-performance"});Vt.setPixelRatio(Math.min(devicePixelRatio,bw?1.5:1.75));Vt.toneMapping=Rc;Vt.toneMappingExposure=1.05;Vt.outputColorSpace=Wt;Vt.xr.enabled=!0;Vt.xr.setReferenceSpaceType("local-floor");var ms=new Br,Gy=new lo(Vt);ms.environment=Gy.fromScene(new uu,.04).texture;ms.environmentIntensity=.75;new du().load(Sa("env/studio_small_09_1k.hdr"),t=>{t.mapping=io,ms.environment=Gy.fromEquirectangular(t).texture,ms.environmentIntensity=1,t.dispose()});var Hy=new fr(16777215,1.6);Hy.position.set(2,4,3);ms.add(Hy);var Vy=new fr(10470655,1.2);Vy.position.set(-3,2,-3);ms.add(Vy);var Ys=new sn(32,1,.01,100),Gt=new Yn;ms.add(Gt);var gd=document.createElement("canvas");gd.width=gd.height=128;var Mg=gd.getContext("2d"),bg=Mg.createRadialGradient(64,64,4,64,64,64);bg.addColorStop(0,"rgba(0,0,0,0.55)");bg.addColorStop(1,"rgba(0,0,0,0)");Mg.fillStyle=bg;Mg.fillRect(0,0,128,128);var Ar=new Et(new Gr(1,1),new Kn({map:new fc(gd),transparent:!0,depthWrite:!1}));Ar.rotation.x=-Math.PI/2;Gt.add(Ar);var Wy=[],mg={},Er={r0:1,r1:1,c0:.3,c1:.5},Tw={cover:0,pcie:.06,cpu:.12,fan:.1,ram:.18,psu:.08,bezel:.04,drive:.1,board:.22,chassis:.22},gg=4,Ew=.44,Ks=null,_g=.434;async function Aw(){let[t,e]=await Promise.all([fetch(Sa("models/parts.json")).then(a=>a.json()),new cu().loadAsync(Sa("models/server.glb"),a=>{a.total&&(tt("#loadtxt").textContent=`\u8F09\u5165\u4F3A\u670D\u5668\u6A21\u578B\u2026 ${Math.round(a.loaded/a.total*100)}%`)})]),n=e.scene;Ks=n,n.scale.setScalar(gg);let i=new _n().setFromObject(n),s=i.getCenter(new U);n.position.set(-s.x,-i.min.y,-s.z),Gt.add(n),_g=(i.max.x-i.min.x)/gg,Ar.scale.set((i.max.x-i.min.x)*1.5,(i.max.z-i.min.z)*1.3,1),Ar.position.y=.002,n.traverse(a=>{let o=t.objects[a.name];if(!o)return;let c={obj:a,base:a.position.clone(),off:new U(...o.offset),group:o.group,delay:Tw[o.group]??0};if(Wy.push(c),(mg[o.group]||={parts:[],...t.groups[o.group]}).parts.push(c),a.material)for(let l of[].concat(a.material))l.envMapIntensity=1});let r=tt("#labels");for(let[a,o]of Object.entries(mg)){let c=document.createElement("div");c.className="lbl",c.innerHTML=`<b>${o.zh}</b><small>${o.en}</small>`,r.appendChild(c),o.el=c}for(let a of[0,1]){xg(a),n.updateMatrixWorld(!0);let o=new _n().setFromObject(n);Er["r"+a]=o.getBoundingSphere(new In).radius,Er["c"+a]=o.getCenter(new U).y}xg(0)}function Xy(t){if(!Ks)return;Ks.scale.setScalar(t),Ks.position.set(0,0,0),Ks.updateMatrixWorld(!0);let e=new _n().setFromObject(Ks),n=e.getCenter(new U);Ks.position.set(-n.x,-e.min.y,-n.z),Ar.scale.set((e.max.x-e.min.x)*1.5,(e.max.z-e.min.z)*1.3,1),Ar.position.y=.002}var qy=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function xg(t){for(let e of Wy){let n=qy(t*1.45-e.delay*1.45*(1-t)-e.delay*.45*t);e.obj.position.copy(e.base).addScaledVector(e.off,n)}}function Tg(){if(Vt.xr.isPresenting)return;let t=innerWidth,e=innerHeight;Vt.setSize(t,e,!1),Ys.aspect=t/e,Ys.updateProjectionMatrix()}addEventListener("resize",Tg);Tg();var md=new U,ug=new _n;function ww(){let t=le.explode>.6,e=Math.max(0,(le.explode-.6)/.4),n=[];for(let i of Object.values(mg))if(i.el){if(!t){i.el.style.opacity=0;continue}ug.makeEmpty();for(let s of i.parts)ug.expandByObject(s.obj);ug.getCenter(md),md.project(Ys),i.w||(i.w=i.el.offsetWidth,i.h=i.el.offsetHeight),n.push({gr:i,ax:(md.x*.5+.5)*innerWidth,ay:(-md.y*.5+.5)*innerHeight})}for(let i of n)i.x=i.ax,i.y=i.ay;for(let i=0;i<40;i++)for(let s=0;s<n.length;s++)for(let r=s+1;r<n.length;r++){let a=n[s],o=n[r],c=(a.gr.w+o.gr.w)/2+4-Math.abs(a.x-o.x),l=(a.gr.h+o.gr.h)/2+3-Math.abs(a.y-o.y);if(c>0&&l>0){let h=(a.y<=o.y?-1:1)*l/2;a.y+=h,o.y-=h}}for(let i of n){let s=Math.max(i.gr.w/2+4,Math.min(innerWidth-i.gr.w/2-4,i.x));i.gr.el.style.opacity=e,i.gr.el.style.transform=`translate(${s}px, ${i.y}px) translate(-50%, -50%)`}}var Ny=performance.now();function Rw(t,e){t==null&&(t=performance.now());let n=Math.min(.05,(t-Ny)/1e3);Ny=t;let i=1-Math.exp(-n*3.2);if(le.explode+=(le.target-le.explode)*(1-Math.exp(-n*3.6)),Math.abs(le.target-le.explode)<.001&&(le.explode=le.target),le.yaw+=(le.tYaw-le.yaw)*i*2,le.pitch+=(le.tPitch-le.pitch)*i*2,le.zoom+=(le.tZoom-le.zoom)*i*2,xg(le.explode),Vt.xr.isPresenting)kw(e);else{Gt.rotation.y=le.yaw;let s=oo.degToRad(Ys.fov/2),r=Math.atan(Math.tan(s)*Ys.aspect),a=qy(le.explode),o=Ys.aspect<1,c=Er.r0+(Er.r1-Er.r0)*a,l=Er.c0+(Er.c1-Er.c0)*a,h=c/Math.sin(Math.min(s,r))*(o?1-.2*a:.88)/le.zoom;Ys.position.set(0,l+Math.sin(le.pitch)*h,Math.cos(le.pitch)*h),Ys.lookAt(0,l-c*(o?.06:.04),0),ww(),le.camOn&&qw(t)}Vt.render(ms,Ys)}function ps(t){le.target=t;let e=t?"\u6536\u5408":"\u5C55\u958B";tt("#btnToggle").textContent=e,tt("#btnToggle").classList.toggle("on",!!t);let n=tt("#btnARToggle");n&&(n.textContent=e,n.classList.toggle("on",!!t))}tt("#btnToggle").onclick=()=>ps(le.target?0:1);tt("#btnReset").onclick=()=>{le.tYaw=fg,le.tPitch=pg,le.tZoom=1,ps(0)};tt("#btnHelp").onclick=()=>tt("#help").classList.toggle("show");tt("#help").onclick=()=>tt("#help").classList.remove("show");var _d=t=>Math.max(-.15,Math.min(1.35,t)),ml=t=>Math.max(.55,Math.min(2.6,t)),fs=new Map,$y=0,Yy=1,Dy=0,xd=!1;Ma.addEventListener("pointerdown",t=>{if(Ma.setPointerCapture(t.pointerId),fs.set(t.pointerId,[t.clientX,t.clientY]),xd=!1,fs.size===2){let[e,n]=[...fs.values()];$y=Math.hypot(e[0]-n[0],e[1]-n[1]),Yy=le.tZoom}});Ma.addEventListener("pointermove",t=>{let e=fs.get(t.pointerId);if(e){if(fs.size===1){let n=t.clientX-e[0],i=t.clientY-e[1];Math.abs(n)+Math.abs(i)>3&&(xd=!0),le.tYaw+=n*.008,le.tPitch=_d(le.tPitch+i*.006)}if(fs.set(t.pointerId,[t.clientX,t.clientY]),fs.size===2){xd=!0;let[n,i]=[...fs.values()];le.tZoom=ml(Yy*Math.hypot(n[0]-i[0],n[1]-i[1])/$y)}}});var Ky=t=>{if(fs.size===1&&!xd){let e=performance.now();e-Dy<320&&ps(le.target?0:1),Dy=e}fs.delete(t.pointerId)};Ma.addEventListener("pointerup",Ky);Ma.addEventListener("pointercancel",Ky);Ma.addEventListener("wheel",t=>{t.preventDefault(),le.tZoom=ml(le.tZoom*Math.exp(-t.deltaY*.0012))},{passive:!1});addEventListener("keydown",t=>{let e=t.key.toLowerCase();e==="e"||e===" "?ps(le.target?0:1):e==="c"?ps(0):e==="o"?ps(1):e==="arrowleft"?le.tYaw-=.25:e==="arrowright"?le.tYaw+=.25:e==="arrowup"?le.tPitch=_d(le.tPitch-.15):e==="arrowdown"?le.tPitch=_d(le.tPitch+.15):e==="+"||e==="="?le.tZoom=ml(le.tZoom*1.15):e==="-"&&(le.tZoom=ml(le.tZoom/1.15))});var vg=navigator.userAgent,Cw=/iP(hone|ad|od)/.test(vg)||vg.includes("Mac")&&navigator.maxTouchPoints>1,Iw=/Android/.test(vg),dn=tt("#btnAR"),ot={session:null,hitSource:null,placed:!1,placing:!0,resumeCam:!1,refType:"local-floor"};le.xrAR=!1;var _a=new U,Uy=new U,Fy=new Fn,Pw=new U,dg=new Ac,Xn=new Yn;Xn.add(new Et(new _c(.045,.062,48).rotateX(-Math.PI/2),new Kn({color:3842303,transparent:!0,opacity:.95,side:kn})));Xn.add(new Et(new gc(.045,48).rotateX(-Math.PI/2),new Kn({color:3842303,transparent:!0,opacity:.18,side:kn,depthWrite:!1})));Xn.matrixAutoUpdate=!1;Xn.visible=!1;ms.add(Xn);function Eg(t){let e=tt("#arHint");e&&(e.textContent=t)}function Lw(){let t=Sa("models/server.glb"),e=location.href;return`intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(t)}&mode=ar_preferred&title=${encodeURIComponent("2U \u4F3A\u670D\u5668")}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(e)};end;`}function Nw(){for(let t=0;t<2;t++){let e=Vt.xr.getController(t);e.addEventListener("select",Dw),ms.add(e)}}Nw();function Dw(t){if(!Vt.xr.isPresenting)return;if(ot.placing){Xn.visible?Uw(Xn.matrix):Fw();return}let e=t.target;dg.ray.origin.setFromMatrixPosition(e.matrixWorld),dg.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),(Ks?dg.intersectObject(Ks,!0):[]).length&&ps(le.target?0:1)}function Uw(t){t.decompose(_a,Fy,Pw),Gt.position.copy(_a),Gt.quaternion.copy(Fy),Gt.scale.set(1,1,1),Gt.visible=!0,ot.placed=!0,ot.placing=!1,Xn.visible=!1,Eg("\u9EDE\u6A21\u578B\u6216\u6309\u300C\u5C55\u958B\u300D\u53EF\u5206\u5C64\u67E5\u770B\uFF0C\u6309\u300C\u79FB\u52D5\u300D\u53EF\u91CD\u65B0\u653E\u7F6E")}function Fw(){let t=Vt.xr.getCamera();t.getWorldPosition(_a),t.getWorldDirection(Uy);let e=_a.clone().addScaledVector(Uy,1);ot.refType==="local-floor"?e.y=0:e.y=_a.y-1.15,Gt.position.copy(e),Gt.quaternion.identity();let n=Math.atan2(_a.x-e.x,_a.z-e.z);Gt.rotation.set(0,n,0),Gt.scale.set(1,1,1),Gt.visible=!0,ot.placed=!0,ot.placing=!1,Xn.visible=!1,Eg("\u9EDE\u6A21\u578B\u6216\u6309\u300C\u5C55\u958B\u300D\u53EF\u5206\u5C64\u67E5\u770B\uFF0C\u6309\u300C\u79FB\u52D5\u300D\u53EF\u91CD\u65B0\u653E\u7F6E")}function jy(){ot.placing=!0,ot.placed=!1,Gt.visible=!1,Xn.visible=!1,Eg("\u5C0D\u6E96\u684C\u9762\u6216\u5730\u9762\uFF0C\u9EDE\u4E00\u4E0B\u6216\u634F\u5408\u5373\u53EF\u653E\u7F6E")}function Ow(){let t=_g>0?Ew/_g:1;Xy(t),Gt.position.set(0,0,0),Gt.quaternion.identity(),Gt.rotation.set(0,0,0),Gt.scale.set(1,1,1),Ar.visible=!1,jy()}function Bw(){Xy(gg),Gt.position.set(0,0,0),Gt.quaternion.identity(),Gt.rotation.set(0,le.yaw,0),Gt.scale.set(1,1,1),Gt.visible=!0,Ar.visible=!0,Xn.visible=!1}function kw(t){if(!t||!ot.hitSource||!ot.placing)return;let e=Vt.xr.getReferenceSpace();if(!e)return;let n=t.getHitTestResults(ot.hitSource);if(n.length){let i=n[0].getPose(e);i?(Xn.visible=!0,Xn.matrix.fromArray(i.transform.matrix)):Xn.visible=!1}else Xn.visible=!1}async function zw(t){ot.hitSource=null;try{if(!t.requestHitTestSource)return;let e=await t.requestReferenceSpace("viewer");ot.hitSource=await t.requestHitTestSource({space:e})}catch(e){console.warn("hit-test \u7121\u6CD5\u4F7F\u7528",e)}}async function Gw(){if(!navigator.xr?.requestSession){ya("\u6B64\u700F\u89BD\u5668\u4E0D\u652F\u63F4 WebXR AR");return}if(!le.modelReady){ya("\u6A21\u578B\u9084\u5728\u8F09\u5165\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66");return}if(ot.session)return;ot.resumeCam=le.camOn,le.camOn&&Jy(),tt("#intro").classList.add("hide");let t=tt("#arOverlay");t.style.display="block";let e={optionalFeatures:["hit-test","dom-overlay","local-floor","hand-tracking"],domOverlay:{root:t}},n;try{n=await navigator.xr.requestSession("immersive-ar",e)}catch(r){t.style.display="none",ot.resumeCam&&vd(),ot.resumeCam=!1,ya("\u7121\u6CD5\u958B\u555F AR\uFF1A"+(r.message||r.name)+"\u3002\u8ACB\u5141\u8A31\u76F8\u6A5F\u8207\u7A7A\u9593\u6B0A\u9650\u5F8C\u518D\u8A66");return}let i=n.enabledFeatures,s=i&&(typeof i.has=="function"?i.has("local-floor"):Array.from(i).includes("local-floor"));ot.refType=s||!i?"local-floor":"local";try{Vt.xr.setReferenceSpaceType(ot.refType),await Vt.xr.setSession(n)}catch{try{ot.refType="local",Vt.xr.setReferenceSpaceType("local"),await Vt.xr.setSession(n)}catch(a){t.style.display="none";try{n.end()}catch{}ot.resumeCam&&vd(),ot.resumeCam=!1,ya("\u7121\u6CD5\u555F\u52D5 AR \u5DE5\u4F5C\u968E\u6BB5\uFF1A"+(a.message||a.name));return}}ot.session=n,n.addEventListener("end",Hw),document.body.classList.add("ar"),Ow(),await zw(n)}function Hw(){if(ot.hitSource?.cancel)try{ot.hitSource.cancel()}catch{}ot.hitSource=null,ot.session=null,ot.placing=!1,ot.placed=!1,document.body.classList.remove("ar");let t=tt("#arOverlay");t&&(t.style.display="none"),Bw(),Tg(),ot.resumeCam&&vd(),ot.resumeCam=!1}async function Vw(t){if(t?.preventDefault(),ot.session){try{await ot.session.end()}catch{}return}await Gw()}tt("#btnARExit")?.addEventListener("click",t=>{t.preventDefault(),ot.session&&ot.session.end()});tt("#btnARPlace")?.addEventListener("click",t=>{t.preventDefault(),Vt.xr.isPresenting&&jy()});tt("#btnARToggle")?.addEventListener("click",t=>{t.preventDefault(),ps(le.target?0:1)});async function Ww(){let t=!1;if(navigator.xr?.isSessionSupported)try{t=await navigator.xr.isSessionSupported("immersive-ar")}catch{}if(le.xrAR=!!t,dn.classList.remove("disabled"),t){dn.removeAttribute("rel"),dn.href="#",dn.setAttribute("role","button"),dn.onclick=Vw,dn.title="\u9032\u5165 AR\uFF0C\u628A\u4F3A\u670D\u5668\u653E\u5230\u771F\u5BE6\u684C\u4E0A";return}if(Cw){dn.href=Sa("models/server_anim.usdz"),dn.rel="ar",dn.innerHTML='<img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=">AR',dn.onclick=null,dn.title="\u7528 iPhone Quick Look \u958B\u555F AR";return}if(Iw){dn.href=Lw(),dn.removeAttribute("rel"),dn.onclick=null,dn.title="\u7528 Google Scene Viewer \u958B\u555F AR";return}dn.href="#",dn.classList.add("disabled"),dn.title="\u6B64\u88DD\u7F6E\u4E0D\u652F\u63F4 AR",dn.onclick=e=>{e.preventDefault(),ya("\u8ACB\u7528\u652F\u63F4 AR \u7684\u5B89\u5353\u624B\u6A5F\u3001iPhone \u6216 Meta Quest \u958B\u555F\u6B64\u9801")}}Ww();var xa=null,va=tt("#video"),yg=-1,Oy=0,Sg=tt("#hand"),Ri=Sg.getContext("2d");async function Xw(){if(xa)return xa;tt("#loadtxt").textContent="\u8F09\u5165\u624B\u52E2\u8FA8\u8B58\u6A21\u578B\u2026",tt("#loading").classList.remove("hide");let t=await Fs.forVisionTasks(Sa("libs/mediapipe/wasm")),e=n=>({baseOptions:{modelAssetPath:Sa("models/hand_landmarker.task"),delegate:n},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{xa=await Tn.createFromOptions(t,e("GPU")),le.delegate="GPU"}catch(n){console.warn("GPU delegate failed, using CPU",n),xa=await Tn.createFromOptions(t,e("CPU")),le.delegate="CPU"}return le.mpReady=!0,tt("#loading").classList.add("hide"),xa}async function Zy(){if(Jy(),!navigator.mediaDevices?.getUserMedia)throw new Error("\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u76F8\u6A5F\uFF08\u9700\u8981 HTTPS \u6216 localhost\uFF09");le.stream=await navigator.mediaDevices.getUserMedia({audio:!1,video:{facingMode:le.facing,width:{ideal:640},height:{ideal:480}}}),va.srcObject=le.stream,await va.play(),va.classList.toggle("mirror",le.facing==="user"),document.body.classList.add("cam"),le.camOn=!0,yg=-1}function Jy(){le.stream?.getTracks().forEach(t=>t.stop()),le.stream=null,le.camOn=!1,document.body.classList.remove("cam")}async function vd(){try{await Promise.all([Xw(),Zy()]),tt("#btnFlip").hidden=!1,gl("none")}catch(t){console.warn(t),tt("#loading").classList.add("hide"),ya("\u7121\u6CD5\u958B\u555F\u76F8\u6A5F\uFF1A"+(t.message||t.name)+"\u3002\u5DF2\u5207\u63DB\u6210\u89F8\u63A7\u6A21\u5F0F"),gl("nocam")}}tt("#btnFlip").onclick=async()=>{le.facing=le.facing==="user"?"environment":"user";try{await Zy()}catch{ya("\u5207\u63DB\u93E1\u982D\u5931\u6557")}};tt("#startCam").onclick=()=>{tt("#intro").classList.add("hide"),vd()};tt("#startTouch").onclick=()=>{tt("#intro").classList.add("hide"),gl("nocam")};var ga=(t,e)=>Math.hypot(t.x-e.x,t.y-e.y);function Qy(t){let e=ga(t[0],t[9])||.001,n=[[8,6],[12,10],[16,14],[20,18]].map(([c,l])=>ga(t[c],t[0])>ga(t[l],t[0])*1.12),i=n.filter(Boolean).length,s=ga(t[4],t[8])/e,r=ga(t[4],t[17])/e>.9;if(i>=4&&r&&s>.5)return{g:"open",pinchD:s};let a=ga(t[8],t[0])>ga(t[5],t[0])*1.1,o=!n[1]&&!n[2]&&!n[3];return o&&a?{g:"pinch",pinchD:s}:o?{g:"fist",pinchD:s}:{g:"move",pinchD:s}}le.classify=t=>Qy(t).g;var Ho={g:"none",n:0},pl=null,Vo=null;function qw(t){if(ot.session||Vt.xr.isPresenting||!xa||va.readyState<2||t-Oy<33||va.currentTime===yg)return;yg=va.currentTime,Oy=t;let e;try{e=xa.detectForVideo(va,t)}catch(o){console.warn(o);return}let n=e.landmarks?.[0];if(Kw(n),!n){Ho={g:"none",n:0},pl=null,Vo=null,gl("none");return}let i=le.facing==="user",s={x:(n[0].x+n[5].x+n[17].x)/3,y:(n[0].y+n[5].y+n[17].y)/3};i&&(s.x=1-s.x);let r=Qy(n);Ho=r.g===Ho.g?{g:r.g,n:Ho.n+1}:{g:r.g,n:1};let a=Ho.n>=3?Ho.g:le.gesture;if(a==="open"?ps(1):a==="fist"&&ps(0),a==="pinch"?(Vo||(Vo={d:Math.max(.15,r.pinchD),z:le.tZoom}),le.tZoom=ml(Vo.z*Math.pow(Math.max(.05,r.pinchD)/Vo.d,.9))):Vo=null,pl&&a!=="pinch"){let o=s.x-pl.x,c=s.y-pl.y;Math.abs(o)>.004&&(le.tYaw+=o*5.5),Math.abs(c)>.004&&(le.tPitch=_d(le.tPitch+c*3.5))}pl=s,gl(a)}var $w={none:["\u270B","\u8ACB\u628A\u624B\u653E\u9032\u756B\u9762"],open:["\u{1F590}\uFE0F","\u5F35\u958B\u624B\uFF1A\u5C55\u958B"],fist:["\u270A","\u63E1\u62F3\uFF1A\u6536\u5408"],pinch:["\u{1F90F}","\u634F\u5408\uFF1A\u7E2E\u653E"],move:["\u{1F44B}","\u79FB\u52D5\u624B\uFF1A\u65CB\u8F49"],nocam:["\u{1F446}","\u89F8\u63A7\u6A21\u5F0F\uFF1A\u62D6\u66F3\u65CB\u8F49\u30FB\u96D9\u6307\u7E2E\u653E\u30FB\u9EDE\u5169\u4E0B\u5C55\u958B"]};function gl(t){if(le.gesture===t&&t!=="nocam")return;le.gesture=t;let[e,n]=$w[t];tt("#gico").textContent=e,tt("#gtxt").textContent=n}var Yw=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];function Kw(t){let e=Sg.width,n=Sg.height;if(Ri.clearRect(0,0,e,n),!t)return;let i=le.facing==="user",s=r=>[(i?1-r.x:r.x)*e,r.y*n];Ri.lineWidth=3,Ri.strokeStyle="rgba(120,200,255,0.95)",Ri.lineCap="round";for(let[r,a]of Yw){let[o,c]=s(t[r]),[l,h]=s(t[a]);Ri.beginPath(),Ri.moveTo(o,c),Ri.lineTo(l,h),Ri.stroke()}Ri.fillStyle="#fff";for(let r of t){let[a,o]=s(r);Ri.beginPath(),Ri.arc(a,o,3,0,7),Ri.fill()}}var By;function ya(t){let e=tt("#toast");e.textContent=t,e.classList.add("show"),clearTimeout(By),By=setTimeout(()=>e.classList.remove("show"),4500)}Aw().then(()=>{tt("#loading").classList.add("hide"),le.modelReady=!0,Vt.setAnimationLoop(Rw)}).catch(t=>{console.error(t),tt("#loadtxt").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+t.message});var ky=new URLSearchParams(location.search).get("auto");ky==="cam"?tt("#startCam").click():ky==="touch"&&tt("#startTouch").click()});export default jw();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
