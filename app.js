var or=(t,e,n)=>()=>{if(n)throw n[0];try{return t&&(e=t(t=0)),e}catch(i){throw n=[i],i}};var ZS=(t,e)=>()=>{try{return e||t((e={exports:{}}).exports,e),e.exports}catch(n){throw e=0,n}};function JS(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function QS(t){return ArrayBuffer.isView(t)&&!(t instanceof DataView)}function eo(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function B_(){let t=eo("canvas");return t.style.display="block",t}function _c(...t){let e="THREE."+t.shift();to?to("log",e,...t):console.log(e,...t)}function k_(t){let e=t[0];if(typeof e=="string"&&e.startsWith("TSL:")){let n=t[1];n&&n.isStackTrace?t[0]+=" "+n.getLocation():t[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return t}function Ie(...t){t=k_(t);let e="THREE."+t.shift();if(to)to("warn",e,...t);else{let n=t[0];n&&n.isStackTrace?console.warn(n.getError(e)):console.warn(e,...t)}}function Ve(...t){t=k_(t);let e="THREE."+t.shift();if(to)to("error",e,...t);else{let n=t[0];n&&n.isStackTrace?console.error(n.getError(e)):console.error(e,...t)}}function $r(...t){let e=t.join(" ");e in _0||(_0[e]=!0,Ie(...t))}function z_(t,e,n){return new Promise(function(i,s){function r(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:s();break;case t.TIMEOUT_EXPIRED:setTimeout(r,n);break;default:i()}}setTimeout(r,n)})}function as(){let t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pn[t&255]+Pn[t>>8&255]+Pn[t>>16&255]+Pn[t>>24&255]+"-"+Pn[e&255]+Pn[e>>8&255]+"-"+Pn[e>>16&15|64]+Pn[e>>24&255]+"-"+Pn[n&63|128]+Pn[n>>8&255]+"-"+Pn[n>>16&255]+Pn[n>>24&255]+Pn[i&255]+Pn[i>>8&255]+Pn[i>>16&255]+Pn[i>>24&255]).toLowerCase()}function it(t,e,n){return Math.max(e,Math.min(n,t))}function ep(t,e){return(t%e+e)%e}function eM(t,e,n,i,s){return i+(t-e)*(s-i)/(n-e)}function tM(t,e,n){return t!==e?(n-t)/(e-t):0}function mc(t,e,n){return(1-n)*t+n*e}function nM(t,e,n,i){return mc(t,e,1-Math.exp(-n*i))}function iM(t,e=1){return e-Math.abs(ep(t,e*2)-e)}function sM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function rM(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function aM(t,e){return t+Math.floor(Math.random()*(e-t+1))}function oM(t,e){return t+Math.random()*(e-t)}function cM(t){return t*(.5-Math.random())}function lM(t){t!==void 0&&(x0=t);let e=x0+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function hM(t){return t*pc}function uM(t){return t*jr}function dM(t){return t>0&&Number.isInteger(t)&&2**Math.round(Math.log2(t))===t}function fM(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function tp(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function pM(t,e,n,i,s){let r=Math.cos,a=Math.sin,o=r(n/2),c=a(n/2),l=r((e+i)/2),h=a((e+i)/2),u=r((e-i)/2),d=a((e-i)/2),f=r((i-e)/2),g=a((i-e)/2);switch(s){case"XYX":t.set(o*h,c*u,c*d,o*l);break;case"YZY":t.set(c*d,o*h,c*u,o*l);break;case"ZXZ":t.set(c*u,c*d,o*h,o*l);break;case"XZX":t.set(o*h,c*g,c*f,o*l);break;case"YXY":t.set(c*f,o*h,c*g,o*l);break;case"ZYZ":t.set(c*g,c*f,o*h,o*l);break;default:Ie("MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xu(t){switch(t.constructor){case Uint32Array:return 4294967295;case Uint16Array:return 65535;case Uint8Array:case Uint8ClampedArray:return 255;case Int32Array:return 2147483647;case Int16Array:return 32767;case Int8Array:return 127;default:return}}function np(t,e){if(e.constructor===Float32Array)return t;let n=xu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.max(t/n,-1)}function ip(t,e){if(e.constructor===Float32Array)return t;let n=xu(e);if(n===void 0)throw new Error("THREE.MathUtils: Invalid component type.");return Math.round(t*n)}function mM(){let t={enabled:!0,workingColorSpace:Tn,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===xt&&(s.r=Ls(s.r),s.g=Ls(s.g),s.b=Ls(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===xt&&(s.r=ja(s.r),s.g=ja(s.g),s.b=ja(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Hs?gc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[a].fromXYZ).multiply(this.spaces[r].toXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Tn]:{primaries:e,whitePoint:i,transfer:gc,toXYZ:y0,fromXYZ:S0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Xt},outputColorSpaceConfig:{drawingBufferColorSpace:Xt}},[Xt]:{primaries:e,whitePoint:i,transfer:xt,toXYZ:y0,fromXYZ:S0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Xt}}}),t}function Ls(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function ja(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}function $d(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?mh.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Ie("Texture: Unable to serialize Texture."),{})}function jd(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}function rf(t,e,n,i,s){for(let r=0,a=t.length-3;r<=a;r+=3){Wr.fromArray(t,r);let o=s.x*Math.abs(Wr.x)+s.y*Math.abs(Wr.y)+s.z*Math.abs(Wr.z),c=e.dot(Wr),l=n.dot(Wr),h=i.dot(Wr);if(Math.max(-Math.max(c,l,h),Math.min(c,l,h))>o)return!1}return!0}function EM(){let t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),s=new Uint32Array(512);for(let c=0;c<256;++c){let l=c-127;l<-27?(i[c]=0,i[c|256]=32768,s[c]=24,s[c|256]=24):l<-14?(i[c]=1024>>-l-14,i[c|256]=1024>>-l-14|32768,s[c]=-l-1,s[c|256]=-l-1):l<=15?(i[c]=l+15<<10,i[c|256]=l+15<<10|32768,s[c]=13,s[c|256]=13):l<128?(i[c]=31744,i[c|256]=64512,s[c]=24,s[c|256]=24):(i[c]=31744,i[c|256]=64512,s[c]=13,s[c|256]=13)}let r=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,h=0;for(;(l&8388608)===0;)l<<=1,h-=8388608;l&=-8388609,h+=947912704,r[c]=l|h}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)a[c]=c<<23;a[31]=1199570944,a[32]=2147483648;for(let c=33;c<63;++c)a[c]=2147483648+(c-32<<23);a[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(o[c]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:s,mantissaTable:r,exponentTable:a,offsetTable:o}}function AM(t){Math.abs(t)>65504&&Ie("DataUtils.toHalfFloat(): Value out of range."),t=it(t,-65504,65504),Ps.floatView[0]=t;let e=Ps.uint32View[0],n=e>>23&511;return Ps.baseTable[n]+((e&8388607)>>Ps.shiftTable[n])}function wM(t){let e=t>>10;return Ps.uint32View[0]=Ps.mantissaTable[Ps.offsetTable[e]+(t&1023)]+Ps.exponentTable[e],Ps.floatView[0]}function I0(t){return t.buffer._uuid===void 0&&(t.buffer._uuid=as()),t.byteOffset===0&&t.byteLength===t.buffer.byteLength?t.buffer._uuid:t.buffer._uuid+":"+t.byteOffset+":"+t.byteLength}function DM(t,e,n,i,s,r,a,o){let c;if(e.side===En?c=i.intersectTriangle(a,r,s,!0,o):c=i.intersectTriangle(s,r,a,e.side===ss,o),c===null)return null;Kl.copy(o),Kl.applyMatrix4(t.matrixWorld);let l=n.ray.origin.distanceTo(Kl);return l<n.near||l>n.far?null:{distance:l,point:Kl.clone(),object:t}}function jl(t,e,n,i,s,r,a,o,c,l){t.getVertexPosition(o,Xl),t.getVertexPosition(c,ql),t.getVertexPosition(l,$l);let h=DM(t,e,n,i,Xl,ql,$l,N0);if(h){let u=new F;pr.getBarycoord(N0,Xl,ql,$l,u),s&&(h.uv=pr.getInterpolatedAttribute(s,o,c,l,u,new je)),r&&(h.uv1=pr.getInterpolatedAttribute(r,o,c,l,u,new je)),a&&(h.normal=pr.getInterpolatedAttribute(a,o,c,l,u,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let d={a:o,b:c,c:l,normal:new F,materialIndex:0};pr.getNormal(Xl,ql,$l,d.normal),h.face=d,h.barycoord=u}return h}function th(t,e,n,i,s,r,a){let o=t.geometry.attributes.position;if(vh.fromBufferAttribute(o,s),yh.fromBufferAttribute(o,r),n.distanceSqToSegment(vh,yh,ff,V0)>i)return;ff.applyMatrix4(t.matrixWorld);let l=e.ray.origin.distanceTo(ff);if(!(l<e.near||l>e.far))return{distance:l,point:V0.clone().applyMatrix4(t.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:t}}function $0(t,e,n,i,s,r,a){let o=Sf.distanceSqToPoint(t);if(o<n){let c=new F;Sf.closestPointToPoint(t,c),c.applyMatrix4(i);let l=s.ray.origin.distanceTo(c);if(l<s.near||l>s.far)return;r.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}function la(t){let e={};for(let n in t){e[n]={};for(let i in t[n]){let s=t[n][i];if(Y0(s))s.isRenderTargetTexture?(Ie("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=s.clone();else if(Array.isArray(s))if(Y0(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[n][i]=r}else e[n][i]=s.slice();else e[n][i]=s}}return e}function Fn(t){let e={};for(let n=0;n<t.length;n++){let i=la(t[n]);for(let s in i)e[s]=i[s]}return e}function Y0(t){return t&&(t.isColor||t.isMatrix3||t.isMatrix4||t.isVector2||t.isVector3||t.isVector4||t.isTexture||t.isQuaternion)}function kM(t){let e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function sp(t){let e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}function fr(t,e){return!t||t.constructor===e?t:typeof e.BYTES_PER_ELEMENT=="number"?new e(t):Array.prototype.slice.call(t)}function fc(t){return t!==void 0&&t.inTangents!==void 0&&t.outTangents!==void 0}function HM(t){function e(s,r){return t[s]-t[r]}let n=t.length,i=new Array(n);for(let s=0;s!==n;++s)i[s]=s;return i.sort(e),i}function K0(t,e,n){let i=t.length,s=new t.constructor(i);for(let r=0,a=0;a!==i;++r){let o=n[r]*e;for(let c=0;c!==e;++c)s[a++]=t[o+c]}return s}function VM(t,e,n,i){let s=1,r=t[0];for(;r!==void 0&&r[i]===void 0;)r=t[s++];if(r===void 0)return;let a=r[i];if(a!==void 0)if(Array.isArray(a))do a=r[i],a!==void 0&&(e.push(r.time),n.push(...a)),r=t[s++];while(r!==void 0);else if(a.toArray!==void 0)do a=r[i],a!==void 0&&(e.push(r.time),a.toArray(n,n.length)),r=t[s++];while(r!==void 0);else do a=r[i],a!==void 0&&(e.push(r.time),n.push(a)),r=t[s++];while(r!==void 0)}function W_(t,e,n,i,s){let r=1-t;return r*r*r*e+3*r*r*t*n+3*r*t*t*i+t*t*t*s}function WM(t,e,n,i,s){let r=1-t;return 3*r*r*(n-e)+6*r*t*(i-n)+3*t*t*(s-i)}function XM(t,e,n,i,s){let r=(t-e)/(s-e);for(let a=0;a<8;a++){let o=W_(r,e,n,i,s)-t;if(Math.abs(o)<1e-10)break;let c=WM(r,e,n,i,s);if(Math.abs(c)<1e-10)break;r=Math.max(0,Math.min(1,r-o/c))}return r}function j0(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]+=e}function Z0(t,e){for(let n=0,i=t.length;n!==i;n+=2)t[n]*=e}function qM(t){switch(t.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Os;case"vector":case"vector2":case"vector3":case"vector4":return Sr;case"color":return Nc;case"quaternion":return Bs;case"bool":case"boolean":return Fs;case"string":return ks}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+t)}function $M(t){if(t.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");let e=qM(t.type);if(t.times===void 0){let i=[],s=[];VM(t.keys,i,s,"value"),t.times=i,t.values=s}let n;return e.parse!==void 0?n=e.parse(t):n=new e(t.name,t.times,t.values,t.interpolation),fc(t.settings)&&(n.settings={inTangents:fr(t.settings.inTangents,Float32Array),outTangents:fr(t.settings.outTangents,Float32Array)}),n}function J0(t){try{let e=t.slice(t.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}function s_(t,e){return t.distance-e.distance}function wf(t,e,n,i){let s=!0;if(t.layers.test(e.layers)&&t.raycast(e,n)===!1&&(s=!1),s===!0&&i===!0){let r=t.children;for(let a=0,o=r.length;a<o;a++)wf(r[a],e,n,!0)}}function op(t,e,n,i){let s=n2(i);switch(n){case qf:return t*e;case Bh:return t*e/s.components*s.byteLength;case kh:return t*e/s.components*s.byteLength;case br:return t*e*2/s.components*s.byteLength;case zh:return t*e*2/s.components*s.byteLength;case $f:return t*e*3/s.components*s.byteLength;case Ai:return t*e*4/s.components*s.byteLength;case Gh:return t*e*4/s.components*s.byteLength;case Vc:case Wc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Xc:case qc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Vh:case Xh:return Math.max(t,16)*Math.max(e,8)/4;case Hh:case Wh:return Math.max(t,8)*Math.max(e,8)/2;case qh:case $h:case Kh:case jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case Yh:case $c:case Zh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Jh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Qh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case eu:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case tu:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case nu:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case iu:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case su:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case ru:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case au:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case ou:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case cu:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case lu:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case hu:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case uu:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case du:case fu:case pu:return Math.ceil(t/4)*Math.ceil(e/4)*16;case mu:case gu:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Yc:case _u:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function n2(t){switch(t){case ei:case Hf:return{byteLength:1,components:1};case vo:case Vf:case Vn:return{byteLength:2,components:1};case Fh:case Oh:return{byteLength:2,components:4};case Hi:case Uh:case Un:return{byteLength:4,components:1};case Wf:case Xf:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${t}.`)}var r_,Cf,a_,Gc,o_,po,ss,En,Hn,sa,mo,If,Pf,Lf,c_,ra,l_,h_,u_,d_,f_,p_,m_,g_,Nf,Df,__,x_,v_,y_,S_,M_,b_,T_,E_,ch,lh,hh,Za,uh,dh,fh,ph,Lh,A_,w_,rs,Uf,Ff,Of,Hc,Bf,kf,zf,gf,R_,Gf,aa,go,_o,Nh,mr,jn,Ja,$t,Dh,oa,Ct,xo,ui,ei,Hf,Vf,vo,Uh,Hi,Un,Vn,Fh,Oh,ca,Wf,Xf,qf,$f,Ai,Ns,Gs,Bh,kh,br,zh,Gh,Vc,Wc,Xc,qc,Hh,Vh,Wh,Xh,qh,$h,Yh,Kh,jh,$c,Zh,Jh,Qh,eu,tu,nu,iu,su,ru,au,ou,cu,lu,hu,uu,du,fu,pu,mu,gu,Yc,_u,Yr,Kr,ah,_f,xf,vf,yf,C_,Yf,Kc,yo,I_,jc,P_,Hs,Xt,Tn,gc,xt,oh,L_,N_,D_,U_,Kf,F_,O_,jf,Zf,Jf,Qf,Ei,Qa,_0,to,G_,Qi,Pn,x0,pc,jr,So,je,kn,F,Xd,v0,We,qd,y0,S0,et,Fa,mh,gM,no,_M,Yd,an,St,gh,hi,xc,_h,$e,Oa,Oi,xM,vM,cr,Ul,ci,M0,b0,es,io,yM,T0,Ba,Es,Fl,rc,SM,MM,E0,A0,w0,R0,bM,ka,Kd,It,Zn,TM,so,H_,lr,Ol,ze,Ln,Zr,Bi,As,Zd,ws,za,Ga,C0,Jd,Qd,ef,tf,nf,sf,pr,vn,Rs,ki,Bl,Ha,Va,Wa,hr,ur,Vr,ac,kl,zl,Wr,Ps,gr,Jt,Gl,RM,bn,vc,yc,qt,CM,oc,af,Nn,IM,Ti,of,Xa,li,cc,xn,Dn,ro,Bn,ao,cf,PM,LM,zi,NM,zn,Cs,lf,Hl,Vl,_r,Jn,P0,Xr,Wl,L0,Xl,ql,$l,hf,Yl,N0,Kl,At,lc,D0,U0,UM,F0,Zl,uf,O0,df,Sc,oo,xr,B0,FM,Mc,Ds,qa,k0,Jl,z0,OM,hc,uc,Jr,qr,BM,Ql,vr,G0,xh,co,vh,yh,H0,dc,eh,ff,V0,Qr,W0,X0,bc,Tc,lo,q0,Sf,nh,ih,Ec,Ac,wc,Us,Rc,Cc,yr,Ic,ea,Pc,V_,zM,GM,ts,Sh,ns,Gn,Lc,Mh,bh,is,Th,Eh,Ah,wh,Qn,Fs,Nc,Os,Rh,Bs,ks,Sr,Dc,Ji,Ch,X_,Gi,Is,Mf,ta,$a,Ih,Uc,Fc,ho,pf,Q0,e_,uo,sh,rh,Zi,Oc,dr,t_,n_,rn,bf,Bc,Tf,na,ia,Ef,Mr,zs,mf,kc,Ya,Ka,fo,Ph,rp,YM,ap,KM,jM,ZM,JM,QM,e2,t2,Af,Et,dC,i_,zc,Rf,cp=or(()=>{r_=0,Cf=1,a_=2,Gc=1,o_=2,po=3,ss=0,En=1,Hn=2,sa=0,mo=1,If=2,Pf=3,Lf=4,c_=5,ra=100,l_=101,h_=102,u_=103,d_=104,f_=200,p_=201,m_=202,g_=203,Nf=204,Df=205,__=206,x_=207,v_=208,y_=209,S_=210,M_=211,b_=212,T_=213,E_=214,ch=0,lh=1,hh=2,Za=3,uh=4,dh=5,fh=6,ph=7,Lh=0,A_=1,w_=2,rs=0,Uf=1,Ff=2,Of=3,Hc=4,Bf=5,kf=6,zf=7,gf="attached",R_="detached",Gf=300,aa=301,go=302,_o=303,Nh=304,mr=1e3,jn=1001,Ja=1002,$t=1003,Dh=1004,oa=1005,Ct=1006,xo=1007,ui=1008,ei=1009,Hf=1010,Vf=1011,vo=1012,Uh=1013,Hi=1014,Un=1015,Vn=1016,Fh=1017,Oh=1018,ca=1020,Wf=35902,Xf=35899,qf=1021,$f=1022,Ai=1023,Ns=1026,Gs=1027,Bh=1028,kh=1029,br=1030,zh=1031,Gh=1033,Vc=33776,Wc=33777,Xc=33778,qc=33779,Hh=35840,Vh=35841,Wh=35842,Xh=35843,qh=36196,$h=37492,Yh=37496,Kh=37488,jh=37489,$c=37490,Zh=37491,Jh=37808,Qh=37809,eu=37810,tu=37811,nu=37812,iu=37813,su=37814,ru=37815,au=37816,ou=37817,cu=37818,lu=37819,hu=37820,uu=37821,du=36492,fu=36494,pu=36495,mu=36283,gu=36284,Yc=36285,_u=36286,Yr=2300,Kr=2301,ah=2302,_f=2303,xf=2400,vf=2401,yf=2402,C_=2500,Yf=0,Kc=1,yo=2,I_=3200,jc=0,P_=1,Hs="",Xt="srgb",Tn="srgb-linear",gc="linear",xt="srgb",oh=7680,L_=519,N_=512,D_=513,U_=514,Kf=515,F_=516,O_=517,jf=518,Zf=519,Jf=35044,Qf="300 es",Ei=2e3,Qa=2001;_0={},to=null;G_={[ch]:ch,[hh]:fh,[uh]:uh,[Za]:dh,[lh]:lh,[fh]:hh,[ph]:ph,[dh]:Za},Qi=class{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){let i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){let i=this._listeners;if(i===void 0)return;let s=i[e];if(s!==void 0){let r=s.indexOf(n);r!==-1&&s.splice(r,1)}}dispatchEvent(e){let n=this._listeners;if(n===void 0)return;let i=n[e.type];if(i!==void 0){e.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Pn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],x0=1234567,pc=Math.PI/180,jr=180/Math.PI;So={DEG2RAD:pc,RAD2DEG:jr,generateUUID:as,clamp:it,euclideanModulo:ep,mapLinear:eM,inverseLerp:tM,lerp:mc,damp:nM,pingpong:iM,smoothstep:sM,smootherstep:rM,randInt:aM,randFloat:oM,randFloatSpread:cM,seededRandom:lM,degToRad:hM,radToDeg:uM,isPowerOfTwo:dM,ceilPowerOfTwo:fM,floorPowerOfTwo:tp,setQuaternionFromProperEuler:pM,normalize:ip,denormalize:np},je=class{static{this.prototype.isVector2=!0}constructor(e=0,n=0){this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let n=this.x,i=this.y,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6],this.y=s[1]*n+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){let i=Math.cos(n),s=Math.sin(n),r=this.x-e.x,a=this.y-e.y;return this.x=r*i-a*s+e.x,this.y=r*s+a*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},kn=class{constructor(e=0,n=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=s}static slerpFlat(e,n,i,s,r,a,o){let c=i[s+0],l=i[s+1],h=i[s+2],u=i[s+3],d=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(u!==v||c!==d||l!==f||h!==g){let m=c*d+l*f+h*g+u*v;m<0&&(d=-d,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let M=Math.acos(m),A=Math.sin(M);p=Math.sin(p*M)/A,o=Math.sin(o*M)/A,c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+v*o}else{c=c*p+d*o,l=l*p+f*o,h=h*p+g*o,u=u*p+v*o;let M=1/Math.sqrt(c*c+l*l+h*h+u*u);c*=M,l*=M,h*=M,u*=M}}e[n]=c,e[n+1]=l,e[n+2]=h,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,s,r,a){let o=i[s],c=i[s+1],l=i[s+2],h=i[s+3],u=r[a],d=r[a+1],f=r[a+2],g=r[a+3];return e[n]=o*g+h*u+c*f-l*d,e[n+1]=c*g+h*d+l*u-o*f,e[n+2]=l*g+h*f+o*d-c*u,e[n+3]=h*g-o*u-c*d-l*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,s){return this._x=e,this._y=n,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){let i=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(i/2),h=o(s/2),u=o(r/2),d=c(i/2),f=c(s/2),g=c(r/2);switch(a){case"XYZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"YXZ":this._x=d*h*u+l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"ZXY":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u-d*f*g;break;case"ZYX":this._x=d*h*u-l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u+d*f*g;break;case"YZX":this._x=d*h*u+l*f*g,this._y=l*f*u+d*h*g,this._z=l*h*g-d*f*u,this._w=l*h*u-d*f*g;break;case"XZY":this._x=d*h*u-l*f*g,this._y=l*f*u-d*h*g,this._z=l*h*g+d*f*u,this._w=l*h*u+d*f*g;break;default:Ie("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){let i=n/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){let n=e.elements,i=n[0],s=n[4],r=n[8],a=n[1],o=n[5],c=n[9],l=n[2],h=n[6],u=n[10],d=i+o+u;if(d>0){let f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(h-c)*f,this._y=(r-l)*f,this._z=(a-s)*f}else if(i>o&&i>u){let f=2*Math.sqrt(1+i-o-u);this._w=(h-c)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+l)/f}else if(o>u){let f=2*Math.sqrt(1+o-i-u);this._w=(r-l)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(c+h)/f}else{let f=2*Math.sqrt(1+u-i-o);this._w=(a-s)/f,this._x=(r+l)/f,this._y=(c+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(it(this.dot(e),-1,1)))}rotateTowards(e,n){let i=this.angleTo(e);if(i===0)return this;let s=Math.min(1,n/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=n._x,c=n._y,l=n._z,h=n._w;return this._x=i*h+a*o+s*l-r*c,this._y=s*h+a*c+r*o-i*l,this._z=r*h+a*l+i*c-s*o,this._w=a*h-i*o-s*c-r*l,this._onChangeCallback(),this}slerp(e,n){let i=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let c=1-n;if(o<.9995){let l=Math.acos(o),h=Math.sin(l);c=Math.sin(c*l)/h,n=Math.sin(n*l)/h,this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this._onChangeCallback()}else this._x=this._x*c+i*n,this._y=this._y*c+s*n,this._z=this._z*c+r*n,this._w=this._w*c+a*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){let e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(n),r*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},F=class{static{this.prototype.isVector3=!0}constructor(e=0,n=0,i=0){this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(v0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(v0.setFromAxisAngle(e,n))}applyMatrix3(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6]*s,this.y=r[1]*n+r[4]*i+r[7]*s,this.z=r[2]*n+r[5]*i+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=e.elements,a=1/(r[3]*n+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*n+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*n+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*n+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(e){let n=this.x,i=this.y,s=this.z,r=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*s-o*i),h=2*(o*n-r*s),u=2*(r*i-a*n);return this.x=n+c*l+a*u-o*h,this.y=i+c*h+o*l-r*u,this.z=s+c*u+r*h-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let n=this.x,i=this.y,s=this.z,r=e.elements;return this.x=r[0]*n+r[4]*i+r[8]*s,this.y=r[1]*n+r[5]*i+r[9]*s,this.z=r[2]*n+r[6]*i+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){let i=e.x,s=e.y,r=e.z,a=n.x,o=n.y,c=n.z;return this.x=s*c-r*o,this.y=r*a-i*c,this.z=i*o-s*a,this}projectOnVector(e){let n=e.lengthSq();if(n===0)return this.set(0,0,0);let i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Xd.copy(this).projectOnVector(e),this.sub(Xd)}reflect(e){return this.sub(Xd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;let i=this.dot(e)/n;return Math.acos(it(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let n=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return n*n+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){let s=Math.sin(n)*e;return this.x=s*Math.sin(i),this.y=Math.cos(n)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){let n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=s,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},Xd=new F,v0=new kn,We=class{static{this.prototype.isMatrix3=!0}constructor(e,n,i,s,r,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,c,l)}set(e,n,i,s,r,a,o,c,l){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=n,h[4]=r,h[5]=c,h[6]=i,h[7]=a,h[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[3],c=i[6],l=i[1],h=i[4],u=i[7],d=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],M=s[1],A=s[4],b=s[7],w=s[2],E=s[5],_=s[8];return r[0]=a*v+o*M+c*w,r[3]=a*m+o*A+c*E,r[6]=a*p+o*b+c*_,r[1]=l*v+h*M+u*w,r[4]=l*m+h*A+u*E,r[7]=l*p+h*b+u*_,r[2]=d*v+f*M+g*w,r[5]=d*m+f*A+g*E,r[8]=d*p+f*b+g*_,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8];return n*a*h-n*o*l-i*r*h+i*o*c+s*r*l-s*a*c}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=h*a-o*l,d=o*c-h*r,f=l*r-a*c,g=n*u+i*d+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=u*v,e[1]=(s*l-h*i)*v,e[2]=(o*i-s*a)*v,e[3]=d*v,e[4]=(h*n-s*c)*v,e[5]=(s*r-o*n)*v,e[6]=f*v,e[7]=(i*c-l*n)*v,e[8]=(a*n-i*r)*v,this}transpose(){let e,n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,s,r,a,o){let c=Math.cos(r),l=Math.sin(r);return this.set(i*c,i*l,-i*(c*a+l*o)+a+e,-s*l,s*c,-s*(-l*a+c*o)+o+n,0,0,1),this}scale(e,n){return $r("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(qd.makeScale(e,n)),this}rotate(e){return $r("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(qd.makeRotation(-e)),this}translate(e,n){return $r("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(qd.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<9;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}},qd=new We,y0=new We().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),S0=new We().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);et=mM();mh=class{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Fa===void 0&&(Fa=eo("canvas")),Fa.width=e.width,Fa.height=e.height;let s=Fa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Fa}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let n=eo("canvas");n.width=e.width,n.height=e.height;let i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);let s=i.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ls(r[a]/255)*255;return i.putImageData(s,0,0),n}else if(e.data){let n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(Ls(n[i]/255)*255):n[i]=Ls(n[i]);return{data:n,width:e.width,height:e.height}}else return Ie("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},gM=0,no=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:gM++}),this.uuid=as(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayWidth,n.displayHeight,0):n!==null?e.set(n.width||0,n.height||0,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push($d(s[a].image)):r.push($d(s[a]))}else r=$d(s);i.url=r}return n||(e.images[this.uuid]=i),i}};_M=0,Yd=new F,an=class t extends Qi{constructor(e=t.DEFAULT_IMAGE,n=t.DEFAULT_MAPPING,i=jn,s=jn,r=Ct,a=ui,o=Ai,c=ei,l=t.DEFAULT_ANISOTROPY,h=Hs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=as(),this.name="",this.source=new no(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new je(0,0),this.repeat=new je(1,1),this.center=new je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.mipmapsAutoUpdate=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.isPMREMTexture=!1,this.normalized=!1}get width(){return this.source.getSize(Yd).x}get height(){return this.source.getSize(Yd).y}get depth(){return this.source.getSize(Yd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.mipmapsAutoUpdate=e.mipmapsAutoUpdate,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isPMREMTexture=e.isPMREMTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let n in e){let i=e[n];if(i===void 0){Ie(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ie(`Texture.setValues(): property '${n}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,mipmapsAutoUpdate:this.mipmapsAutoUpdate,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Gf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case mr:e.x=e.x-Math.floor(e.x);break;case jn:e.x=e.x<0?0:1;break;case Ja:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case mr:e.y=e.y-Math.floor(e.y);break;case jn:e.y=e.y<0?0:1;break;case Ja:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};an.DEFAULT_IMAGE=null;an.DEFAULT_MAPPING=Gf;an.DEFAULT_ANISOTROPY=1;St=class{static{this.prototype.isVector4=!0}constructor(e=0,n=0,i=0,s=1){this.x=e,this.y=n,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,s){return this.x=e,this.y=n,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let n=this.x,i=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*n+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*n+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*n+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*n+a[7]*i+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,s,r,c=e.elements,l=c[0],h=c[4],u=c[8],d=c[1],f=c[5],g=c[9],v=c[2],m=c[6],p=c[10];if(Math.abs(h-d)<.01&&Math.abs(u-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+v)<.1&&Math.abs(g+m)<.1&&Math.abs(l+f+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;let A=(l+1)/2,b=(f+1)/2,w=(p+1)/2,E=(h+d)/4,_=(u+v)/4,S=(g+m)/4;return A>b&&A>w?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=E/i,r=_/i):b>w?b<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(b),i=E/s,r=S/s):w<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(w),i=_/r,s=S/r),this.set(i,s,r,n),this}let M=Math.sqrt((m-g)*(m-g)+(u-v)*(u-v)+(d-h)*(d-h));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(u-v)/M,this.z=(d-h)/M,this.w=Math.acos((l+f+p-1)/2),this}setFromMatrixPosition(e){let n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=it(this.x,e.x,n.x),this.y=it(this.y,e.y,n.y),this.z=it(this.z,e.z,n.z),this.w=it(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=it(this.x,e,n),this.y=it(this.y,e,n),this.z=it(this.z,e,n),this.w=it(this.w,e,n),this}clampLength(e,n){let i=this.length();return this.divideScalar(i||1).multiplyScalar(it(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},gh=class extends Qi{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ct,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new St(0,0,e,n),this.scissorTest=!1,this.viewport=new St(0,0,e,n),this.textures=[];let s=i.count;for(let r=0;r<s;r++)this.textures[r]=new an({width:e,height:n,depth:i.depth}),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(e={}){let n={minFilter:Ct,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.mipmapsAutoUpdate!==void 0&&(n.mipmapsAutoUpdate=e.mipmapsAutoUpdate),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=n,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;let s=Object.assign({},e.textures[n].image);this.textures[n].source=new no(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let n=e.depthTexture.clone();n.renderTarget=null,this.depthTexture=n}else this.depthTexture=e.depthTexture;else this.depthTexture=null;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},hi=class extends gh{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}},xc=class extends an{constructor(e=null,n=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}},_h=class extends an{constructor(e=null,n=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:s},this.magFilter=$t,this.minFilter=$t,this.wrapR=jn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}},$e=class t{static{this.prototype.isMatrix4=!0}constructor(e,n,i,s,r,a,o,c,l,h,u,d,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,s,r,a,o,c,l,h,u,d,f,g,v,m)}set(e,n,i,s,r,a,o,c,l,h,u,d,f,g,v,m){let p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=h,p[10]=u,p[14]=d,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new t().fromArray(this.elements)}copy(e){let n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){let n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){let n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinantAffine()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let n=this.elements,i=e.elements,s=1/Oa.setFromMatrixColumn(e,0).length(),r=1/Oa.setFromMatrixColumn(e,1).length(),a=1/Oa.setFromMatrixColumn(e,2).length();return n[0]=i[0]*s,n[1]=i[1]*s,n[2]=i[2]*s,n[3]=0,n[4]=i[4]*r,n[5]=i[5]*r,n[6]=i[6]*r,n[7]=0,n[8]=i[8]*a,n[9]=i[9]*a,n[10]=i[10]*a,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){let n=this.elements,i=e.x,s=e.y,r=e.z,a=Math.cos(i),o=Math.sin(i),c=Math.cos(s),l=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){let d=a*h,f=a*u,g=o*h,v=o*u;n[0]=c*h,n[4]=-c*u,n[8]=l,n[1]=f+g*l,n[5]=d-v*l,n[9]=-o*c,n[2]=v-d*l,n[6]=g+f*l,n[10]=a*c}else if(e.order==="YXZ"){let d=c*h,f=c*u,g=l*h,v=l*u;n[0]=d+v*o,n[4]=g*o-f,n[8]=a*l,n[1]=a*u,n[5]=a*h,n[9]=-o,n[2]=f*o-g,n[6]=v+d*o,n[10]=a*c}else if(e.order==="ZXY"){let d=c*h,f=c*u,g=l*h,v=l*u;n[0]=d-v*o,n[4]=-a*u,n[8]=g+f*o,n[1]=f+g*o,n[5]=a*h,n[9]=v-d*o,n[2]=-a*l,n[6]=o,n[10]=a*c}else if(e.order==="ZYX"){let d=a*h,f=a*u,g=o*h,v=o*u;n[0]=c*h,n[4]=g*l-f,n[8]=d*l+v,n[1]=c*u,n[5]=v*l+d,n[9]=f*l-g,n[2]=-l,n[6]=o*c,n[10]=a*c}else if(e.order==="YZX"){let d=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=v-d*u,n[8]=g*u+f,n[1]=u,n[5]=a*h,n[9]=-o*h,n[2]=-l*h,n[6]=f*u+g,n[10]=d-v*u}else if(e.order==="XZY"){let d=a*c,f=a*l,g=o*c,v=o*l;n[0]=c*h,n[4]=-u,n[8]=l*h,n[1]=d*u+v,n[5]=a*h,n[9]=f*u-g,n[2]=g*u-f,n[6]=o*h,n[10]=v*u+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xM,e,vM)}lookAt(e,n,i){let s=this.elements;return ci.subVectors(e,n),ci.lengthSq()===0&&(ci.z=1),ci.normalize(),cr.crossVectors(i,ci),cr.lengthSq()===0&&(Math.abs(i.z)===1?ci.x+=1e-4:ci.z+=1e-4,ci.normalize(),cr.crossVectors(i,ci)),cr.normalize(),Ul.crossVectors(ci,cr),s[0]=cr.x,s[4]=Ul.x,s[8]=ci.x,s[1]=cr.y,s[5]=Ul.y,s[9]=ci.y,s[2]=cr.z,s[6]=Ul.z,s[10]=ci.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){let i=e.elements,s=n.elements,r=this.elements,a=i[0],o=i[4],c=i[8],l=i[12],h=i[1],u=i[5],d=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],A=i[7],b=i[11],w=i[15],E=s[0],_=s[4],S=s[8],D=s[12],I=s[1],N=s[5],B=s[9],V=s[13],R=s[2],G=s[6],H=s[10],W=s[14],te=s[3],q=s[7],J=s[11],ee=s[15];return r[0]=a*E+o*I+c*R+l*te,r[4]=a*_+o*N+c*G+l*q,r[8]=a*S+o*B+c*H+l*J,r[12]=a*D+o*V+c*W+l*ee,r[1]=h*E+u*I+d*R+f*te,r[5]=h*_+u*N+d*G+f*q,r[9]=h*S+u*B+d*H+f*J,r[13]=h*D+u*V+d*W+f*ee,r[2]=g*E+v*I+m*R+p*te,r[6]=g*_+v*N+m*G+p*q,r[10]=g*S+v*B+m*H+p*J,r[14]=g*D+v*V+m*W+p*ee,r[3]=M*E+A*I+b*R+w*te,r[7]=M*_+A*N+b*G+w*q,r[11]=M*S+A*B+b*H+w*J,r[15]=M*D+A*V+b*W+w*ee,this}multiplyScalar(e){let n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[12],a=e[1],o=e[5],c=e[9],l=e[13],h=e[2],u=e[6],d=e[10],f=e[14],g=e[3],v=e[7],m=e[11],p=e[15],M=c*f-l*d,A=o*f-l*u,b=o*d-c*u,w=a*f-l*h,E=a*d-c*h,_=a*u-o*h;return n*(v*M-m*A+p*b)-i*(g*M-m*w+p*E)+s*(g*A-v*w+p*_)-r*(g*b-v*E+m*_)}determinantAffine(){let e=this.elements,n=e[0],i=e[4],s=e[8],r=e[1],a=e[5],o=e[9],c=e[2],l=e[6],h=e[10];return n*(a*h-o*l)-i*(r*h-o*c)+s*(r*l-a*c)}transpose(){let e=this.elements,n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=n,s[14]=i),this}invert(){let e=this.elements,n=e[0],i=e[1],s=e[2],r=e[3],a=e[4],o=e[5],c=e[6],l=e[7],h=e[8],u=e[9],d=e[10],f=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=n*o-i*a,A=n*c-s*a,b=n*l-r*a,w=i*c-s*o,E=i*l-r*o,_=s*l-r*c,S=h*v-u*g,D=h*m-d*g,I=h*p-f*g,N=u*m-d*v,B=u*p-f*v,V=d*p-f*m,R=M*V-A*B+b*N+w*I-E*D+_*S;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let G=1/R;return e[0]=(o*V-c*B+l*N)*G,e[1]=(s*B-i*V-r*N)*G,e[2]=(v*_-m*E+p*w)*G,e[3]=(d*E-u*_-f*w)*G,e[4]=(c*I-a*V-l*D)*G,e[5]=(n*V-s*I+r*D)*G,e[6]=(m*b-g*_-p*A)*G,e[7]=(h*_-d*b+f*A)*G,e[8]=(a*B-o*I+l*S)*G,e[9]=(i*I-n*B-r*S)*G,e[10]=(g*E-v*b+p*M)*G,e[11]=(u*b-h*E-f*M)*G,e[12]=(o*D-a*N-c*S)*G,e[13]=(n*N-i*D+s*S)*G,e[14]=(v*A-g*w-m*M)*G,e[15]=(h*w-u*A+d*M)*G,this}scale(e){let n=this.elements,i=e.x,s=e.y,r=e.z;return n[0]*=i,n[4]*=s,n[8]*=r,n[1]*=i,n[5]*=s,n[9]*=r,n[2]*=i,n[6]*=s,n[10]*=r,n[3]*=i,n[7]*=s,n[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,s))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){let n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){let n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){let i=Math.cos(n),s=Math.sin(n),r=1-i,a=e.x,o=e.y,c=e.z,l=r*a,h=r*o;return this.set(l*a+i,l*o-s*c,l*c+s*o,0,l*o+s*c,h*o+i,h*c-s*a,0,l*c-s*o,h*c+s*a,r*c*c+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,s,r,a){return this.set(1,i,r,0,e,1,a,0,n,s,1,0,0,0,0,1),this}compose(e,n,i){let s=this.elements,r=n._x,a=n._y,o=n._z,c=n._w,l=r+r,h=a+a,u=o+o,d=r*l,f=r*h,g=r*u,v=a*h,m=a*u,p=o*u,M=c*l,A=c*h,b=c*u,w=i.x,E=i.y,_=i.z;return s[0]=(1-(v+p))*w,s[1]=(f+b)*w,s[2]=(g-A)*w,s[3]=0,s[4]=(f-b)*E,s[5]=(1-(d+p))*E,s[6]=(m+M)*E,s[7]=0,s[8]=(g+A)*_,s[9]=(m-M)*_,s[10]=(1-(d+v))*_,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,n,i){let s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),n.identity(),this;let a=Oa.set(s[0],s[1],s[2]).length(),o=Oa.set(s[4],s[5],s[6]).length(),c=Oa.set(s[8],s[9],s[10]).length();r<0&&(a=-a),Oi.copy(this);let l=1/a,h=1/o,u=1/c;return Oi.elements[0]*=l,Oi.elements[1]*=l,Oi.elements[2]*=l,Oi.elements[4]*=h,Oi.elements[5]*=h,Oi.elements[6]*=h,Oi.elements[8]*=u,Oi.elements[9]*=u,Oi.elements[10]*=u,n.setFromRotationMatrix(Oi),i.x=a,i.y=o,i.z=c,this}makePerspective(e,n,i,s,r,a,o=Ei,c=!1){let l=this.elements,h=2*r/(n-e),u=2*r/(i-s),d=(n+e)/(n-e),f=(i+s)/(i-s),g,v;if(c)g=r/(a-r),v=a*r/(a-r);else if(o===Ei)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===Qa)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,s,r,a,o=Ei,c=!1){let l=this.elements,h=2/(n-e),u=2/(i-s),d=-(n+e)/(n-e),f=-(i+s)/(i-s),g,v;if(c)g=1/(a-r),v=a/(a-r);else if(o===Ei)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===Qa)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=h,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=g,l[14]=v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let n=this.elements,i=e.elements;for(let s=0;s<16;s++)if(n[s]!==i[s])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){let i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}},Oa=new F,Oi=new $e,xM=new F(0,0,0),vM=new F(1,1,1),cr=new F,Ul=new F,ci=new F,M0=new $e,b0=new kn,es=class t{constructor(e=0,n=0,i=0,s=t.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,s=this._order){return this._x=e,this._y=n,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],c=s[1],l=s[5],h=s[9],u=s[2],d=s[6],f=s[10];switch(n){case"XYZ":this._y=Math.asin(it(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-it(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(it(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-it(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(it(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-h,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-it(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:Ie("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return M0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(M0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return b0.setFromEuler(this),this.setFromQuaternion(b0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};es.DEFAULT_ORDER="XYZ";io=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},yM=0,T0=new F,Ba=new kn,Es=new $e,Fl=new F,rc=new F,SM=new F,MM=new kn,E0=new F(1,0,0),A0=new F(0,1,0),w0=new F(0,0,1),R0={type:"added"},bM={type:"removed"},ka={type:"childadded",child:null},Kd={type:"childremoved",child:null},It=class t extends Qi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=as(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=t.DEFAULT_UP.clone();let e=new F,n=new es,i=new kn,s=new F(1,1,1);function r(){i.setFromEuler(n,!1)}function a(){n.setFromQuaternion(i,void 0,!1)}n._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new $e},normalMatrix:{value:new We}}),this.matrix=new $e,this.matrixWorld=new $e,this.matrixAutoUpdate=t.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=t.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new io,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale),this.pivot!==null&&this.position.copy(this.pivot).applyMatrix4(this.matrix).sub(this.pivot)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Ba.setFromAxisAngle(e,n),this.quaternion.multiply(Ba),this}rotateOnWorldAxis(e,n){return Ba.setFromAxisAngle(e,n),this.quaternion.premultiply(Ba),this}rotateX(e){return this.rotateOnAxis(E0,e)}rotateY(e){return this.rotateOnAxis(A0,e)}rotateZ(e){return this.rotateOnAxis(w0,e)}translateOnAxis(e,n){return T0.copy(e).applyQuaternion(this.quaternion),this.position.add(T0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(E0,e)}translateY(e){return this.translateOnAxis(A0,e)}translateZ(e){return this.translateOnAxis(w0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Es.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Fl.copy(e):Fl.set(e,n,i);let s=this.parent;this.updateWorldMatrix(!0,!1),rc.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Es.lookAt(rc,Fl,this.up):Es.lookAt(Fl,rc,this.up),this.quaternion.setFromRotationMatrix(Es),s&&(Es.extractRotation(s.matrixWorld),Ba.setFromRotationMatrix(Es),this.quaternion.premultiply(Ba.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(Ve("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(R0),ka.child=e,this.dispatchEvent(ka),ka.child=null):Ve("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(bM),Kd.child=e,this.dispatchEvent(Kd),Kd.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Es.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Es.multiply(e.parent.matrixWorld)),e.applyMatrix4(Es),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(R0),ka.child=e,this.dispatchEvent(ka),ka.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(e,n);if(a!==void 0)return a}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,e,SM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(rc,MM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}intersectsFrustum(){return!0}traverse(e){e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].traverseVisible(e)}traverseAncestors(e){let n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let n=e.x,i=e.y,s=e.z,r=this.matrix.elements;r[12]+=n-r[0]*n-r[4]*i-r[8]*s,r[13]+=i-r[1]*n-r[5]*i-r[9]*s,r[14]+=s-r[2]*n-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let n=this.children;for(let i=0,s=n.length;i<s;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n,i=!1){let s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),n===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(e){let n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let c=o.shapes;if(Array.isArray(c))for(let l=0,h=c.length;l<h;l++){let u=c[l];r(e.shapes,u)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(r(e.materials,this.material[c]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let c=this.animations[o];s.animations.push(r(e.animations,c))}}if(n){let o=a(e.geometries),c=a(e.materials),l=a(e.textures),h=a(e.images),u=a(e.shapes),d=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(i.geometries=o),c.length>0&&(i.materials=c),l.length>0&&(i.textures=l),h.length>0&&(i.images=h),u.length>0&&(i.shapes=u),d.length>0&&(i.skeletons=d),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let c=[];for(let l in o){let h=o[l];delete h.metadata,c.push(h)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){let s=e.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};It.DEFAULT_UP=new F(0,1,0);It.DEFAULT_MATRIX_AUTO_UPDATE=!0;It.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;Zn=class extends It{constructor(){super(),this.isGroup=!0,this.type="Group"}},TM={type:"move"},so=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let n=this._hand;if(n)for(let i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let s=null,r=null,a=null,o=this._targetRay,c=this._grip,l=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(let v of e.hand.values()){let m=n.getJointPose(v,i),p=this._getHandJoint(l,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.quaternion,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=h.position.distanceTo(u.position),f=.02,g=.005;l.inputState.pinching&&d>f+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=f-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=n.getPose(e.gripSpace,i),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.quaternion,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=n.getPose(e.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.quaternion,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(TM)))}return o!==null&&(o.visible=s!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){let i=new Zn;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}},H_={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lr={h:0,s:0,l:0},Ol={h:0,s:0,l:0};ze=class{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Xt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,n),this}setRGB(e,n,i,s=et.workingColorSpace){return this.r=e,this.g=n,this.b=i,et.colorSpaceToWorking(this,s),this}setHSL(e,n,i,s=et.workingColorSpace){if(e=ep(e,1),n=it(n,0,1),i=it(i,0,1),n===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+n):i+n-i*n,a=2*i-r;this.r=jd(a,r,e+1/3),this.g=jd(a,r,e),this.b=jd(a,r,e-1/3)}return et.colorSpaceToWorking(this,s),this}setStyle(e,n=Xt){function i(r){r!==void 0&&parseFloat(r)<1&&Ie("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,n);if(r=/^\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseFloat(r[1]))/100,Math.min(100,parseFloat(r[2]))/100,Math.min(100,parseFloat(r[3]))/100,n);break;case"hsl":case"hsla":if(r=/^\s*([+-]?(?:\d+(?:\.\d+)?|\.\d+))\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*,\s*(\d+(?:\.\d+)?|\.\d+)\%\s*(?:,\s*(\d+(?:\.\d+)?|\.\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,n);break;default:Ie("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,n);if(a===6)return this.setHex(parseInt(r,16),n);Ie("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Xt){let i=H_[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Ie("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ls(e.r),this.g=Ls(e.g),this.b=Ls(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Xt){return et.workingToColorSpace(Ln.copy(this),e),Math.round(it(Ln.r*255,0,255))*65536+Math.round(it(Ln.g*255,0,255))*256+Math.round(it(Ln.b*255,0,255))}getHexString(e=Xt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=et.workingColorSpace){et.workingToColorSpace(Ln.copy(this),n);let i=Ln.r,s=Ln.g,r=Ln.b,a=Math.max(i,s,r),o=Math.min(i,s,r),c,l,h=(o+a)/2;if(o===a)c=0,l=0;else{let u=a-o;switch(l=h<=.5?u/(a+o):u/(2-a-o),a){case i:c=(s-r)/u+(s<r?6:0);break;case s:c=(r-i)/u+2;break;case r:c=(i-s)/u+4;break}c/=6}return e.h=c,e.s=l,e.l=h,e}getRGB(e,n=et.workingColorSpace){return et.workingToColorSpace(Ln.copy(this),n),e.r=Ln.r,e.g=Ln.g,e.b=Ln.b,e}getStyle(e=Xt){et.workingToColorSpace(Ln.copy(this),e);let n=Ln.r,i=Ln.g,s=Ln.b;return e!==Xt?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,n,i){return this.getHSL(lr),this.setHSL(lr.h+e,lr.s+n,lr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(lr),e.getHSL(Ol);let i=mc(lr.h,Ol.h,n),s=mc(lr.s,Ol.s,n),r=mc(lr.l,Ol.l,n);return this.setHSL(i,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let n=this.r,i=this.g,s=this.b,r=e.elements;return this.r=r[0]*n+r[3]*i+r[6]*s,this.g=r[1]*n+r[4]*i+r[7]*s,this.b=r[2]*n+r[5]*i+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ln=new ze;ze.NAMES=H_;Zr=class extends It{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new es,this.environmentIntensity=1,this.environmentRotation=new es,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),this.background=e.background!==null?e.background.clone():null,this.environment=e.environment!==null?e.environment.clone():null,this.fog=e.fog!==null?e.fog.clone():null,this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),this.overrideMaterial=e.overrideMaterial!==null?e.overrideMaterial.clone():null,this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),n.object.backgroundBlurriness=this.backgroundBlurriness,n.object.backgroundIntensity=this.backgroundIntensity,n.object.backgroundRotation=this.backgroundRotation.toArray(),n.object.environmentIntensity=this.environmentIntensity,n.object.environmentRotation=this.environmentRotation.toArray(),n}},Bi=new F,As=new F,Zd=new F,ws=new F,za=new F,Ga=new F,C0=new F,Jd=new F,Qd=new F,ef=new F,tf=new St,nf=new St,sf=new St,pr=class t{constructor(e=new F,n=new F,i=new F){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,s){s.subVectors(i,n),Bi.subVectors(e,n),s.cross(Bi);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,n,i,s,r){Bi.subVectors(s,n),As.subVectors(i,n),Zd.subVectors(e,n);let a=Bi.dot(Bi),o=Bi.dot(As),c=Bi.dot(Zd),l=As.dot(As),h=As.dot(Zd),u=a*l-o*o;if(u===0)return r.set(0,0,0),null;let d=1/u,f=(l*c-o*h)*d,g=(a*h-o*c)*d;return r.set(1-f-g,g,f)}static containsPoint(e,n,i,s){return this.getBarycoord(e,n,i,s,ws)===null?!1:ws.x>=0&&ws.y>=0&&ws.x+ws.y<=1}static getInterpolation(e,n,i,s,r,a,o,c){return this.getBarycoord(e,n,i,s,ws)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,ws.x),c.addScaledVector(a,ws.y),c.addScaledVector(o,ws.z),c)}static getInterpolatedAttribute(e,n,i,s,r,a){return tf.setScalar(0),nf.setScalar(0),sf.setScalar(0),tf.fromBufferAttribute(e,n),nf.fromBufferAttribute(e,i),sf.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(tf,r.x),a.addScaledVector(nf,r.y),a.addScaledVector(sf,r.z),a}static isFrontFacing(e,n,i,s){return Bi.subVectors(i,n),As.subVectors(e,n),Bi.cross(As).dot(s)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,s){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,n,i,s){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Bi.subVectors(this.c,this.b),As.subVectors(this.a,this.b),Bi.cross(As).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return t.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return t.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,s,r){return t.getInterpolation(e,this.a,this.b,this.c,n,i,s,r)}containsPoint(e){return t.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return t.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){let i=this.a,s=this.b,r=this.c,a,o;za.subVectors(s,i),Ga.subVectors(r,i),Jd.subVectors(e,i);let c=za.dot(Jd),l=Ga.dot(Jd);if(c<=0&&l<=0)return n.copy(i);Qd.subVectors(e,s);let h=za.dot(Qd),u=Ga.dot(Qd);if(h>=0&&u<=h)return n.copy(s);let d=c*u-h*l;if(d<=0&&c>=0&&h<=0&&c-h>0)return a=c/(c-h),n.copy(i).addScaledVector(za,a);ef.subVectors(e,r);let f=za.dot(ef),g=Ga.dot(ef);if(g>=0&&f<=g)return n.copy(r);let v=f*l-c*g;if(v<=0&&l>=0&&g<=0)return o=l/(l-g),n.copy(i).addScaledVector(Ga,o);let m=h*g-f*u;if(m<=0&&u-h>=0&&f-g>=0)return C0.subVectors(r,s),o=(u-h)/(u-h+(f-g)),n.copy(s).addScaledVector(C0,o);let p=1/(m+v+d);return a=v*p,o=d*p,n.copy(i).addScaledVector(za,a).addScaledVector(Ga,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},vn=class{constructor(e=new F(1/0,1/0,1/0),n=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ki.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ki.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){let i=ki.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);let i=e.geometry;if(i!==void 0){let r=i.getAttribute("position");if(n===!0&&r!==void 0&&e.isInstancedMesh!==!0&&e.isBatchedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,ki):ki.fromBufferAttribute(r,a),ki.applyMatrix4(e.matrixWorld),this.expandByPoint(ki);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Bl.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Bl.copy(i.boundingBox)),Bl.applyMatrix4(e.matrixWorld),this.union(Bl)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ki),ki.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ac),kl.subVectors(this.max,ac),Ha.subVectors(e.a,ac),Va.subVectors(e.b,ac),Wa.subVectors(e.c,ac),hr.subVectors(Va,Ha),ur.subVectors(Wa,Va),Vr.subVectors(Ha,Wa);let n=[0,-hr.z,hr.y,0,-ur.z,ur.y,0,-Vr.z,Vr.y,hr.z,0,-hr.x,ur.z,0,-ur.x,Vr.z,0,-Vr.x,-hr.y,hr.x,0,-ur.y,ur.x,0,-Vr.y,Vr.x,0];return!rf(n,Ha,Va,Wa,kl)||(n=[1,0,0,0,1,0,0,0,1],!rf(n,Ha,Va,Wa,kl))?!1:(zl.crossVectors(hr,ur),n=[zl.x,zl.y,zl.z],rf(n,Ha,Va,Wa,kl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ki).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ki).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rs[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rs[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rs[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rs[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rs[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rs[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rs[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rs[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rs),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},Rs=[new F,new F,new F,new F,new F,new F,new F,new F],ki=new F,Bl=new vn,Ha=new F,Va=new F,Wa=new F,hr=new F,ur=new F,Vr=new F,ac=new F,kl=new F,zl=new F,Wr=new F;Ps=EM();gr=class{static toHalfFloat(e){return AM(e)}static fromHalfFloat(e){return wM(e)}},Jt=new F,Gl=new je,RM=0,bn=class extends Qi{constructor(e,n,i=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:RM++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Jf,this.updateRanges=[],this.gpuType=Un,this.version=0,this._normalizationScale=e!==void 0?xu(e):void 0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this._normalizationScale=e._normalizationScale,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=n.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Gl.fromBufferAttribute(this,n),Gl.applyMatrix3(e),this.setXY(n,Gl.x,Gl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix3(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyMatrix4(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.applyNormalMatrix(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Jt.fromBufferAttribute(this,n),Jt.transformDirection(e),this.setXYZ(n,Jt.x,Jt.y,Jt.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=this._denormalize(n)),n}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=this._denormalize(n)),n}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=this._denormalize(n)),n}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=this._denormalize(n)),n}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,s){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e*=this.itemSize,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):np(e,this.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):ip(e,this.array)}},vc=class extends bn{constructor(e,n,i){super(new Uint16Array(e),n,i)}},yc=class extends bn{constructor(e,n,i){super(new Uint32Array(e),n,i)}},qt=class extends bn{constructor(e,n,i){super(new Float32Array(e),n,i)}},CM=new vn,oc=new F,af=new F,Nn=class{constructor(e=new F,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){let i=this.center;n!==void 0?i.copy(n):CM.setFromPoints(e).getCenter(i);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,i.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){let i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oc.subVectors(e,this.center);let n=oc.lengthSq();if(n>this.radius*this.radius){let i=Math.sqrt(n),s=(i-this.radius)*.5;this.center.addScaledVector(oc,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(af.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oc.copy(e.center).add(af)),this.expandByPoint(oc.copy(e.center).sub(af))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},IM=0,Ti=new $e,of=new It,Xa=new F,li=new vn,cc=new vn,xn=new F,Dn=class t extends Qi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IM++}),this.uuid=as(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(JS(e)?yc:vc)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){let n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new We().getNormalMatrix(e);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Ti.makeRotationFromQuaternion(e),this.applyMatrix4(Ti),this}rotateX(e){return Ti.makeRotationX(e),this.applyMatrix4(Ti),this}rotateY(e){return Ti.makeRotationY(e),this.applyMatrix4(Ti),this}rotateZ(e){return Ti.makeRotationZ(e),this.applyMatrix4(Ti),this}translate(e,n,i){return Ti.makeTranslation(e,n,i),this.applyMatrix4(Ti),this}scale(e,n,i){return Ti.makeScale(e,n,i),this.applyMatrix4(Ti),this}lookAt(e){return of.lookAt(e),of.updateMatrix(),this.applyMatrix4(of.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Xa).negate(),this.translate(Xa.x,Xa.y,Xa.z),this}setFromPoints(e){let n=this.getAttribute("position");if(n===void 0){let i=[];for(let s=0,r=e.length;s<r;s++){let a=e[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new qt(i,3))}else{let i=Math.min(e.length,n.count);for(let s=0;s<i;s++){let r=e[s];n.setXYZ(s,r.x,r.y,r.z||0)}e.length>n.count&&Ie("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,s=n.length;i<s;i++){let r=n[i];li.setFromBufferAttribute(r),this.morphTargetsRelative?(xn.addVectors(this.boundingBox.min,li.min),this.boundingBox.expandByPoint(xn),xn.addVectors(this.boundingBox.max,li.max),this.boundingBox.expandByPoint(xn)):(this.boundingBox.expandByPoint(li.min),this.boundingBox.expandByPoint(li.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ve('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Nn);let e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ve("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){let i=this.boundingSphere.center;if(li.setFromBufferAttribute(e),n)for(let r=0,a=n.length;r<a;r++){let o=n[r];cc.setFromBufferAttribute(o),this.morphTargetsRelative?(xn.addVectors(li.min,cc.min),li.expandByPoint(xn),xn.addVectors(li.max,cc.max),li.expandByPoint(xn)):(li.expandByPoint(cc.min),li.expandByPoint(cc.max))}li.getCenter(i);let s=0;for(let r=0,a=e.count;r<a;r++)xn.fromBufferAttribute(e,r),s=Math.max(s,i.distanceToSquared(xn));if(n)for(let r=0,a=n.length;r<a;r++){let o=n[r],c=this.morphTargetsRelative;for(let l=0,h=o.count;l<h;l++)xn.fromBufferAttribute(o,l),c&&(Xa.fromBufferAttribute(e,l),xn.add(Xa)),s=Math.max(s,i.distanceToSquared(xn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ve('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){Ve("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=n.position,s=n.normal,r=n.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new bn(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],c=[],l=new Uint8Array(i.count);for(let D=0;D<i.count;D++)o[D]=new F,c[D]=new F;let h=new F,u=new F,d=new F,f=new je,g=new je,v=new je,m=new F,p=new F;function M(D,I,N){l[D]=l[I]=l[N]=1,h.fromBufferAttribute(i,D),u.fromBufferAttribute(i,I),d.fromBufferAttribute(i,N),f.fromBufferAttribute(r,D),g.fromBufferAttribute(r,I),v.fromBufferAttribute(r,N),u.sub(h),d.sub(h),g.sub(f),v.sub(f);let B=1/(g.x*v.y-v.x*g.y);isFinite(B)&&(m.copy(u).multiplyScalar(v.y).addScaledVector(d,-g.y).multiplyScalar(B),p.copy(d).multiplyScalar(g.x).addScaledVector(u,-v.x).multiplyScalar(B),o[D].add(m),o[I].add(m),o[N].add(m),c[D].add(p),c[I].add(p),c[N].add(p))}let A=this.groups;A.length===0&&(A=[{start:0,count:e.count}]);for(let D=0,I=A.length;D<I;++D){let N=A[D],B=N.start,V=N.count;for(let R=B,G=B+V;R<G;R+=3)M(e.getX(R+0),e.getX(R+1),e.getX(R+2))}let b=new F,w=new F,E=new F,_=new F;function S(D){E.fromBufferAttribute(s,D),_.copy(E);let I=o[D];b.copy(I),b.sub(E.multiplyScalar(E.dot(I))).normalize(),w.crossVectors(_,I);let B=w.dot(c[D])<0?-1:1;a.setXYZW(D,b.x,b.y,b.z,B)}for(let D=0,I=i.count;D<I;++D)l[D]&&S(D);this._transformed=!0}computeVertexNormals(){let e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==n.count)i=new bn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,f=i.count;d<f;d++)i.setXYZ(d,0,0,0);let s=new F,r=new F,a=new F,o=new F,c=new F,l=new F,h=new F,u=new F;if(e)for(let d=0,f=e.count;d<f;d+=3){let g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(n,g),r.fromBufferAttribute(n,v),a.fromBufferAttribute(n,m),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(i,g),c.fromBufferAttribute(i,v),l.fromBufferAttribute(i,m),o.add(h),c.add(h),l.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,c.x,c.y,c.z),i.setXYZ(m,l.x,l.y,l.z)}else for(let d=0,f=n.count;d<f;d+=3)s.fromBufferAttribute(n,d+0),r.fromBufferAttribute(n,d+1),a.fromBufferAttribute(n,d+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),i.setXYZ(d+0,h.x,h.y,h.z),i.setXYZ(d+1,h.x,h.y,h.z),i.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)xn.fromBufferAttribute(e,n),xn.normalize(),e.setXYZ(n,xn.x,xn.y,xn.z)}toNonIndexed(){function e(o,c){let l=o.array,h=o.itemSize,u=o.normalized,d=new l.constructor(c.length*h),f=0,g=0;for(let v=0,m=c.length;v<m;v++){o.isInterleavedBufferAttribute?f=c[v]*o.data.stride+o.offset:f=c[v]*h;for(let p=0;p<h;p++)d[g++]=l[f++]}return new bn(d,h,u)}if(this.index===null)return Ie("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let n=new t,i=this.index.array,s=this.attributes;for(let o in s){let c=s[o],l=e(c,i);n.setAttribute(o,l)}let r=this.morphAttributes;for(let o in r){let c=[],l=r[o];for(let h=0,u=l.length;h<u;h++){let d=l[h],f=e(d,i);c.push(f)}n.morphAttributes[o]=c}n.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,c=a.length;o<c;o++){let l=a[o];n.addGroup(l.start,l.count,l.materialIndex)}return n}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let c=this.parameters;for(let l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};let n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});let i=this.attributes;for(let c in i){let l=i[c];e.data.attributes[c]=l.toJSON(e.data)}let s={},r=!1;for(let c in this.morphAttributes){let l=this.morphAttributes[c],h=[];for(let u=0,d=l.length;u<d;u++){let f=l[u];h.push(f.toJSON(e.data))}h.length>0&&(s[c]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let n={};this.name=e.name;let i=e.index;i!==null&&this.setIndex(i.clone());let s=e.attributes;for(let l in s){let h=s[l];this.setAttribute(l,h.clone(n))}let r=e.morphAttributes;for(let l in r){let h=[],u=r[l];for(let d=0,f=u.length;d<f;d++)h.push(u[d].clone(n));this.morphAttributes[l]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let l=0,h=a.length;l<h;l++){let u=a[l];this.addGroup(u.start,u.count,u.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},ro=class{constructor(e,n){this.isInterleavedBuffer=!0,this.array=e,this.stride=n,this.count=e!==void 0?e.length/n:0,this.usage=Jf,this.updateRanges=[],this.version=0,this.uuid=as()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,n,i){e*=this.stride,i*=n.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=n.array[i+s];return this}set(e,n=0){return this.array.set(e,n),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=I0(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=this.array.slice(0).buffer);let i=new this.array.constructor(e.arrayBuffers[n]),s=new this.constructor(i,this.stride);return s.setUsage(this.usage),s}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={});let n=I0(this.array);e.arrayBuffers[n]===void 0&&(e.arrayBuffers[n]=Array.from(new Uint32Array(this.array.slice(0).buffer)));let i={uuid:this.uuid,buffer:n,type:this.array.constructor.name,stride:this.stride};return i.usage=this.usage,i}};Bn=new F,ao=class t{constructor(e,n,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=n,this.offset=i,this.normalized=s,this._normalizationScale=e!==void 0?xu(e.array):void 0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let n=0,i=this.data.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyMatrix4(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.applyNormalMatrix(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Bn.fromBufferAttribute(this,n),Bn.transformDirection(e),this.setXYZ(n,Bn.x,Bn.y,Bn.z);return this}getComponent(e,n){let i=this.array[e*this.data.stride+this.offset+n];return this.normalized&&(i=this._denormalize(i)),i}setComponent(e,n,i){return this.normalized&&(i=this._normalize(i)),this.data.array[e*this.data.stride+this.offset+n]=i,this}setX(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset]=n,this}setY(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+1]=n,this}setZ(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+2]=n,this}setW(e,n){return this.normalized&&(n=this._normalize(n)),this.data.array[e*this.data.stride+this.offset+3]=n,this}getX(e){let n=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(n=this._denormalize(n)),n}getY(e){let n=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(n=this._denormalize(n)),n}getZ(e){let n=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(n=this._denormalize(n)),n}getW(e){let n=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(n=this._denormalize(n)),n}setXY(e,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i)),this.data.array[e+0]=n,this.data.array[e+1]=i,this}setXYZ(e,n,i,s){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this}setXYZW(e,n,i,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(n=this._normalize(n),i=this._normalize(i),s=this._normalize(s),r=this._normalize(r)),this.data.array[e+0]=n,this.data.array[e+1]=i,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){_c("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return new bn(new this.array.constructor(n),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new t(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){_c("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let n=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)n.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:n,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}_denormalize(e){let n=this._normalizationScale;return n!==void 0?Math.max(e/n,-1):np(e,this.data.array)}_normalize(e){let n=this._normalizationScale;return n!==void 0?Math.round(e*n):ip(e,this.data.array)}},cf=new F,PM=new F,LM=new We,zi=class{constructor(e=new F(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,s){return this.normal.set(e,n,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){let s=cf.subVectors(i,n).cross(PM.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n,i=!0){let s=e.delta(cf),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:n.copy(e.start).addScaledVector(s,a)}intersectsLine(e){let n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){let i=n||LM.getNormalMatrix(e),s=this.coplanarPoint(cf).applyMatrix4(e),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},NM=0,zn=class extends Qi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NM++}),this.uuid=as(),this.name="",this.type="Material",this.blending=mo,this.side=ss,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nf,this.blendDst=Df,this.blendEquation=ra,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Za,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=L_,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oh,this.stencilZFail=oh,this.stencilZPass=oh,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let n in e){let i=e[n];if(i===void 0){Ie(`Material: parameter '${n}' has value of undefined.`);continue}let s=this[n];if(s===void 0){Ie(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[n]=i}}toJSON(e){let n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.diffuseRoughness!==void 0&&(i.diffuseRoughness=this.diffuseRoughness),this.diffuseRoughnessMap&&this.diffuseRoughnessMap.isTexture&&(i.diffuseRoughnessMap=this.diffuseRoughnessMap.toJSON(e).uuid),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessMinimum!==void 0&&(i.iridescenceThicknessMinimum=this.iridescenceThicknessMinimum),this.iridescenceThicknessMaximum!==void 0&&(i.iridescenceThicknessMaximum=this.iridescenceThicknessMaximum),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let c=r[o];delete c.metadata,a.push(c)}return a}if(n){let r=s(e.textures),a=s(e.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(e,n){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.diffuseRoughness!==void 0&&(this.diffuseRoughness=e.diffuseRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessMinimum!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum),e.iridescenceThicknessMaximum!==void 0&&(this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessMinimum=e.iridescenceThicknessRange[0],this.iridescenceThicknessMaximum=e.iridescenceThicknessRange[1]),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(i=>new zi().fromJSON(i))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=n[e.map]||null),e.matcap!==void 0&&(this.matcap=n[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=n[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=n[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=n[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let i=e.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new je().fromArray(i)}return e.displacementMap!==void 0&&(this.displacementMap=n[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=n[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=n[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=n[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=n[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=n[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=n[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=n[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=n[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=n[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=n[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=n[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=n[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=n[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new je().fromArray(e.clearcoatNormalScale)),e.diffuseRoughnessMap!==void 0&&(this.diffuseRoughnessMap=n[e.diffuseRoughnessMap]||null),e.iridescenceMap!==void 0&&(this.iridescenceMap=n[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=n[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=n[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=n[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=n[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=n[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=n[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let n=e.clippingPlanes,i=null;if(n!==null){let s=n.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=n[r].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}},Cs=new F,lf=new F,Hl=new F,Vl=new F,_r=class{constructor(e=new F,n=new F(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Cs)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);let i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let n=Cs.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Cs.copy(this.origin).addScaledVector(this.direction,n),Cs.distanceToSquared(e))}distanceSqToSegment(e,n,i,s){lf.copy(e).add(n).multiplyScalar(.5),Hl.copy(n).sub(e).normalize(),Vl.copy(this.origin).sub(lf);let r=e.distanceTo(n)*.5,a=-this.direction.dot(Hl),o=Vl.dot(this.direction),c=-Vl.dot(Hl),l=Vl.lengthSq(),h=Math.abs(1-a*a),u,d,f,g;if(h>0)if(u=a*c-o,d=a*o-c,g=r*h,u>=0)if(d>=-g)if(d<=g){let v=1/h;u*=v,d*=v,f=u*(u+a*d+2*o)+d*(a*u+d+2*c)+l}else d=r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d=-r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;else d<=-g?(u=Math.max(0,-(-a*r+o)),d=u>0?-r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l):d<=g?(u=0,d=Math.min(Math.max(-r,-c),r),f=d*(d+2*c)+l):(u=Math.max(0,-(a*r+o)),d=u>0?r:Math.min(Math.max(-r,-c),r),f=-u*u+d*(d+2*c)+l);else d=a>0?-r:r,u=Math.max(0,-(a*d+o)),f=-u*u+d*(d+2*c)+l;return i&&i.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(lf).addScaledVector(Hl,d),f}intersectSphere(e,n){if(e.radius<0)return null;Cs.subVectors(e.center,this.origin);let i=Cs.dot(this.direction),s=Cs.dot(Cs)-i*i,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,c=i+a;return c<0?null:o<0?this.at(c,n):this.at(o,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){let i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){let n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,s,r,a,o,c,l=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(i=(e.min.x-d.x)*l,s=(e.max.x-d.x)*l):(i=(e.max.x-d.x)*l,s=(e.min.x-d.x)*l),h>=0?(r=(e.min.y-d.y)*h,a=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,a=(e.min.y-d.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-d.z)*u,c=(e.max.z-d.z)*u):(o=(e.max.z-d.z)*u,c=(e.min.z-d.z)*u),i>c||o>s)||((o>i||i!==i)&&(i=o),(c<s||s!==s)&&(s=c),s<0)?null:this.at(i>=0?i:s,n)}intersectsBox(e){return this.intersectBox(e,Cs)!==null}intersectTriangle(e,n,i,s,r){let a=this.origin,o=this.direction,c=o.x,l=o.y,h=o.z,u=e.x-a.x,d=e.y-a.y,f=e.z-a.z,g=n.x-a.x,v=n.y-a.y,m=n.z-a.z,p=i.x-a.x,M=i.y-a.y,A=i.z-a.z,b=Math.abs(c),w=Math.abs(l),E=Math.abs(h),_,S,D,I,N,B,V,R,G,H,W,te;if(b>=w&&b>=E?(D=c,B=u,G=g,te=p,c>=0?(_=l,S=h,I=d,N=f,V=v,R=m,H=M,W=A):(_=h,S=l,I=f,N=d,V=m,R=v,H=A,W=M)):w>=E?(D=l,B=d,G=v,te=M,l>=0?(_=h,S=c,I=f,N=u,V=m,R=g,H=A,W=p):(_=c,S=h,I=u,N=f,V=g,R=m,H=p,W=A)):(D=h,B=f,G=m,te=A,h>=0?(_=c,S=l,I=u,N=d,V=g,R=v,H=p,W=M):(_=l,S=c,I=d,N=u,V=v,R=g,H=M,W=p)),D===0)return null;let q=_/D,J=S/D,ee=1/D,ye=I-q*B,Fe=N-J*B,K=V-q*G,ge=R-J*G,Te=H-q*te,Be=W-J*te,xe=Te*ge-Be*K,Ye=ye*Be-Fe*Te,jt=K*Fe-ge*ye;if(s){if(xe<0||Ye<0||jt<0)return null}else if((xe<0||Ye<0||jt<0)&&(xe>0||Ye>0||jt>0))return null;let He=xe+Ye+jt;if(He===0)return null;let vt=ee*(xe*B+Ye*G+jt*te);return(He>0?vt<0:vt>0)?null:this.at(vt/He,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Jn=class extends zn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=Lh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},P0=new $e,Xr=new _r,Wl=new Nn,L0=new F,Xl=new F,ql=new F,$l=new F,hf=new F,Yl=new F,N0=new F,Kl=new F,At=class extends It{constructor(e=new Dn,n=new Jn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,n){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;n.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){Yl.set(0,0,0);for(let c=0,l=r.length;c<l;c++){let h=o[c],u=r[c];h!==0&&(hf.fromBufferAttribute(u,e),a?Yl.addScaledVector(hf,h):Yl.addScaledVector(hf.sub(n),h))}n.add(Yl)}return n}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),Xr.copy(e.ray).recast(e.near),!(Wl.containsPoint(Xr.origin)===!1&&(Xr.intersectSphere(Wl,L0)===null||Xr.origin.distanceToSquared(L0)>(e.far-e.near)**2))&&(P0.copy(r).invert(),Xr.copy(e.ray).applyMatrix4(P0),!(i.boundingBox!==null&&Xr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Xr)))}_computeIntersections(e,n,i){let s,r=this.geometry,a=this.material,o=r.index,c=r.attributes.position,l=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=A;b<w;b+=3){let E=o.getX(b),_=o.getX(b+1),S=o.getX(b+2);s=jl(this,p,e,i,l,h,u,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=o.getX(m),A=o.getX(m+1),b=o.getX(m+2);s=jl(this,a,e,i,l,h,u,M,A,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,v=d.length;g<v;g++){let m=d[g],p=a[m.materialIndex],M=Math.max(m.start,f.start),A=Math.min(c.count,Math.min(m.start+m.count,f.start+f.count));for(let b=M,w=A;b<w;b+=3){let E=b,_=b+1,S=b+2;s=jl(this,p,e,i,l,h,u,E,_,S),s&&(s.faceIndex=Math.floor(b/3),s.face.materialIndex=m.materialIndex,n.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(c.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let M=m,A=m+1,b=m+2;s=jl(this,a,e,i,l,h,u,M,A,b),s&&(s.faceIndex=Math.floor(m/3),n.push(s))}}}};lc=new St,D0=new St,U0=new St,UM=new St,F0=new $e,Zl=new F,uf=new Nn,O0=new $e,df=new _r,Sc=class extends At{constructor(e,n){super(e,n),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=gf,this.bindMatrix=new $e,this.bindMatrixInverse=new $e,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){let e=this.geometry;this.boundingBox===null&&(this.boundingBox=new vn),this.boundingBox.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Zl),this.boundingBox.expandByPoint(Zl)}computeBoundingSphere(){let e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Nn),this.boundingSphere.makeEmpty();let n=e.getAttribute("position");for(let i=0;i<n.count;i++)this.getVertexPosition(i,Zl),this.boundingSphere.expandByPoint(Zl)}copy(e,n){return super.copy(e,n),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}raycast(e,n){let i=this.material,s=this.matrixWorld;i!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uf.copy(this.boundingSphere),uf.applyMatrix4(s),e.ray.intersectsSphere(uf)!==!1&&(O0.copy(s).invert(),df.copy(e.ray).applyMatrix4(O0),!(this.boundingBox!==null&&df.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,n,df)))}getVertexPosition(e,n){return super.getVertexPosition(e,n),this.applyBoneTransform(e,n),n}bind(e,n){this.skeleton=e,n===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),n=this.matrixWorld),this.bindMatrix.copy(n),this.bindMatrixInverse.copy(n).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){let e=new St,n=this.geometry.attributes.skinWeight;for(let i=0,s=n.count;i<s;i++){e.fromBufferAttribute(n,i);let r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),n.setXYZW(i,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===gf?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===R_?this.bindMatrixInverse.copy(this.bindMatrix).invert():Ie("SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,n){let i=this.skeleton,s=this.geometry;D0.fromBufferAttribute(s.attributes.skinIndex,e),U0.fromBufferAttribute(s.attributes.skinWeight,e),n.isVector4?(lc.copy(n),n.set(0,0,0,0)):(lc.set(n.x,n.y,n.z,1),n.set(0,0,0)),lc.applyMatrix4(this.bindMatrix);for(let r=0;r<4;r++){let a=U0.getComponent(r);if(a!==0){let o=D0.getComponent(r);F0.multiplyMatrices(i.bones[o].matrixWorld,i.boneInverses[o]),n.addScaledVector(UM.copy(lc).applyMatrix4(F0),a)}}return n.isVector4&&(n.w=lc.w),n.applyMatrix4(this.bindMatrixInverse)}},oo=class extends It{constructor(){super(),this.isBone=!0,this.type="Bone"}},xr=class extends an{constructor(e=null,n=1,i=1,s,r,a,o,c,l=$t,h=$t,u,d){super(null,a,o,c,l,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},B0=new $e,FM=new $e,Mc=class t{constructor(e=[],n=[]){this.uuid=as(),this.bones=e.slice(0),this.boneInverses=n,this.boneMatrices=null,this.previousBoneMatrices=null,this.boneTexture=null,this.previousBoneTexture=null,this.init()}init(){let e=this.bones,n=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),n.length===0)this.calculateInverses();else if(e.length!==n.length){Ie("Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let i=0,s=this.bones.length;i<s;i++)this.boneInverses.push(new $e)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,n=this.bones.length;e<n;e++){let i=new $e;this.bones[e]&&i.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(i)}}pose(){for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&i.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,n=this.bones.length;e<n;e++){let i=this.bones[e];i&&(i.parent&&i.parent.isBone?(i.matrix.copy(i.parent.matrixWorld).invert(),i.matrix.multiply(i.matrixWorld)):i.matrix.copy(i.matrixWorld),i.matrix.decompose(i.position,i.quaternion,i.scale))}}update(){let e=this.bones,n=this.boneInverses,i=this.boneMatrices,s=this.boneTexture;for(let r=0,a=e.length;r<a;r++){let o=e[r]?e[r].matrixWorld:FM;B0.multiplyMatrices(o,n[r]),B0.toArray(i,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new t(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);let n=new Float32Array(e*e*4);n.set(this.boneMatrices);let i=new xr(n,e,e,Ai,Un);return i.needsUpdate=!0,this.boneMatrices=n,this.boneTexture=i,this}getBoneByName(e){for(let n=0,i=this.bones.length;n<i;n++){let s=this.bones[n];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null),this.previousBoneTexture!==null&&(this.previousBoneTexture.dispose(),this.previousBoneTexture=null)}fromJSON(e,n){this.uuid=e.uuid;for(let i=0,s=e.bones.length;i<s;i++){let r=e.bones[i],a=n[r];a===void 0&&(Ie("Skeleton: No bone found with UUID:",r),a=new oo),this.bones.push(a),this.boneInverses.push(new $e().fromArray(e.boneInverses[i]))}return this.init(),this}toJSON(){let e={metadata:{version:4.7,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;let n=this.bones,i=this.boneInverses;for(let s=0,r=n.length;s<r;s++){let a=n[s];e.bones.push(a.uuid);let o=i[s];e.boneInverses.push(o.toArray())}return e}},Ds=class extends bn{constructor(e,n,i,s=1){super(e,n,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}},qa=new $e,k0=new $e,Jl=[],z0=new vn,OM=new $e,hc=new At,uc=new Nn,Jr=class extends At{constructor(e,n,i){super(e,n),this.isInstancedMesh=!0,this.instanceMatrix=new Ds(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,OM)}computeBoundingBox(){let e=this.geometry,n=this.count;this.boundingBox===null&&(this.boundingBox=new vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,qa),z0.copy(e.boundingBox).applyMatrix4(qa),this.boundingBox.union(z0)}computeBoundingSphere(){let e=this.geometry,n=this.count;this.boundingSphere===null&&(this.boundingSphere=new Nn),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<n;i++)this.getMatrixAt(i,qa),uc.copy(e.boundingSphere).applyMatrix4(qa),this.boundingSphere.union(uc)}copy(e,n){return super.copy(e,n),this.instanceMatrix.copy(e.instanceMatrix),this.morphTexture=e.morphTexture!==null?e.morphTexture.clone():null,this.instanceColor=e.instanceColor!==null?e.instanceColor.clone():null,this.count=e.count,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this}getColorAt(e,n){return this.instanceColor===null?n.setRGB(1,1,1):n.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,n){return n.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,n){let i=n.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=e*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(e,n){let i=this.matrixWorld,s=this.count;if(hc.geometry=this.geometry,hc.material=this.material,hc.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),uc.copy(this.boundingSphere),uc.applyMatrix4(i),e.ray.intersectsSphere(uc)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,qa),k0.multiplyMatrices(i,qa),hc.matrixWorld=k0,hc.raycast(e,Jl);for(let a=0,o=Jl.length;a<o;a++){let c=Jl[a];c.instanceId=r,c.object=this,n.push(c)}Jl.length=0}}setColorAt(e,n){return this.instanceColor===null&&(this.instanceColor=new Ds(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),n.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,n){return n.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,n){let i=n.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new xr(new Float32Array(s*this.count),s,this.count,Bh,Un));let r=this.morphTexture.source.data.data,a=0;for(let l=0;l<i.length;l++)a+=i[l];let o=this.geometry.morphTargetsRelative?1:1-a,c=s*e;return r[c]=o,r.set(i,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.instanceMatrix.dispose(),this.instanceColor!==null&&this.instanceColor.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},qr=new Nn,BM=new je(.5,.5),Ql=new F,vr=class{constructor(e=new zi,n=new zi,i=new zi,s=new zi,r=new zi,a=new zi){this.planes=[e,n,i,s,r,a]}set(e,n,i,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(n),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ei,i=!1){let s=this.planes,r=e.elements,a=r[0],o=r[1],c=r[2],l=r[3],h=r[4],u=r[5],d=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],M=r[12],A=r[13],b=r[14],w=r[15];if(s[0].setComponents(l-a,f-h,p-g,w-M).normalize(),s[1].setComponents(l+a,f+h,p+g,w+M).normalize(),s[2].setComponents(l+o,f+u,p+v,w+A).normalize(),s[3].setComponents(l-o,f-u,p-v,w-A).normalize(),i)s[4].setComponents(c,d,m,b).normalize(),s[5].setComponents(l-c,f-d,p-m,w-b).normalize();else if(s[4].setComponents(l-c,f-d,p-m,w-b).normalize(),n===Ei)s[5].setComponents(l+c,f+d,p+m,w+b).normalize();else if(n===Qa)s[5].setComponents(c,d,m,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),qr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),qr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(qr)}intersectsSprite(e){qr.center.set(0,0,0);let n=BM.distanceTo(e.center);return qr.radius=.7071067811865476+n,qr.applyMatrix4(e.matrixWorld),this.intersectsSphere(qr)}intersectsSphere(e){let n=this.planes,i=e.center,s=-e.radius;for(let r=0;r<6;r++)if(n[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){let n=this.planes;for(let i=0;i<6;i++){let s=n[i];if(Ql.x=s.normal.x>0?e.max.x:e.min.x,Ql.y=s.normal.y>0?e.max.y:e.min.y,Ql.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Ql)<0)return!1}return!0}containsPoint(e){let n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},G0=new $e,xh=class t{constructor(){this.coordinateSystem=Ei,this._frustums=[],this._count=0}setFromArrayCamera(e){let n=e.cameras,i=this._frustums;for(let s=0;s<n.length;s++){let r=n[s];G0.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),i[s]===void 0&&(i[s]=new vr),i[s].setFromProjectionMatrix(G0,r.coordinateSystem,r.reversedDepth)}return this._count=n.length,this}getFrustum(e){return this._frustums[e]}intersectsObject(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsObject(e))return!0;return!1}intersectsSprite(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSprite(e))return!0;return!1}intersectsSphere(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsSphere(e))return!0;return!1}intersectsBox(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].intersectsBox(e))return!0;return!1}containsPoint(e){let n=this._frustums;for(let i=0;i<this._count;i++)if(n[i].containsPoint(e))return!0;return!1}copy(e){this.coordinateSystem=e.coordinateSystem;let n=this._frustums,i=e._frustums;for(let s=0;s<e._count;s++)n[s]===void 0&&(n[s]=new vr),n[s].copy(i[s]);return this._count=e._count,this}clone(){return new t().copy(this)}},co=class extends zn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ze(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}},vh=new F,yh=new F,H0=new $e,dc=new _r,eh=new Nn,ff=new F,V0=new F,Qr=class extends It{constructor(e=new Dn,n=new co){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[0];for(let s=1,r=n.count;s<r;s++)vh.fromBufferAttribute(n,s-1),yh.fromBufferAttribute(n,s),i[s]=i[s-1],i[s]+=vh.distanceTo(yh);e.setAttribute("lineDistance",new qt(i,1))}else Ie("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),eh.copy(i.boundingSphere),eh.applyMatrix4(s),eh.radius+=r,e.ray.intersectsSphere(eh)===!1)return;H0.copy(s).invert(),dc.copy(e.ray).applyMatrix4(H0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,h=i.index,d=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){let p=h.getX(v),M=h.getX(v+1),A=th(this,e,dc,c,p,M,v);A&&n.push(A)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=th(this,e,dc,c,v,m,g-1);p&&n.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(d.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=l){let p=th(this,e,dc,c,v,v+1,v);p&&n.push(p)}if(this.isLineLoop){let v=th(this,e,dc,c,g-1,f,g-1);v&&n.push(v)}}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};W0=new F,X0=new F,bc=class extends Qr{constructor(e,n){super(e,n),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){let e=this.geometry;if(e.index===null){let n=e.attributes.position,i=[];for(let s=0,r=n.count;s<r;s+=2)W0.fromBufferAttribute(n,s),X0.fromBufferAttribute(n,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+W0.distanceTo(X0);e.setAttribute("lineDistance",new qt(i,1))}else Ie("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}},Tc=class extends Qr{constructor(e,n){super(e,n),this.isLineLoop=!0,this.type="LineLoop"}},lo=class extends zn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},q0=new $e,Sf=new _r,nh=new Nn,ih=new F,Ec=class extends It{constructor(e=new Dn,n=new lo){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0?this.morphTargetInfluences=e.morphTargetInfluences.slice():this.morphTargetInfluences=void 0,e.morphTargetDictionary!==void 0?this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary):this.morphTargetDictionary=void 0,this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,n){let i=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),nh.copy(i.boundingSphere),nh.applyMatrix4(s),nh.radius+=r,e.ray.intersectsSphere(nh)===!1)return;q0.copy(s).invert(),Sf.copy(e.ray).applyMatrix4(q0);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=i.index,u=i.attributes.position;if(l!==null){let d=Math.max(0,a.start),f=Math.min(l.count,a.start+a.count);for(let g=d,v=f;g<v;g++){let m=l.getX(g);ih.fromBufferAttribute(u,m),$0(ih,m,c,s,e,n,this)}}else{let d=Math.max(0,a.start),f=Math.min(u.count,a.start+a.count);for(let g=d,v=f;g<v;g++)ih.fromBufferAttribute(u,g),$0(ih,g,c,s,e,n,this)}}updateMorphTargets(){let n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){let s=n[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ac=class extends an{constructor(e=[],n=aa,i,s,r,a,o,c,l,h){super(e,n,i,s,r,a,o,c,l,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},wc=class extends an{constructor(e,n,i,s,r,a,o,c,l){super(e,n,i,s,r,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}},Us=class extends an{constructor(e,n,i=Hi,s,r,a,o=$t,c=$t,l,h=Ns,u=1){if(h!==Ns&&h!==Gs)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let d={width:e,height:n,depth:u};super(d,s,r,a,o,c,h,i,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new no(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let n=super.toJSON(e);return n.compareFunction=this.compareFunction,n}},Rc=class extends Us{constructor(e,n=Hi,i=aa,s,r,a=$t,o=$t,c,l=Ns){let h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,n,i,s,r,a,o,c,l),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Cc=class extends an{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},yr=class t extends Dn{constructor(e=1,n=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let c=[],l=[],h=[],u=[],d=0,f=0;g("z","y","x",-1,-1,i,n,e,a,r,0),g("z","y","x",1,-1,i,n,-e,a,r,1),g("x","z","y",1,1,e,i,n,s,a,2),g("x","z","y",1,-1,e,i,-n,s,a,3),g("x","y","z",1,-1,e,n,i,s,r,4),g("x","y","z",-1,-1,e,n,-i,s,r,5),this.setIndex(c),this.setAttribute("position",new qt(l,3)),this.setAttribute("normal",new qt(h,3)),this.setAttribute("uv",new qt(u,2));function g(v,m,p,M,A,b,w,E,_,S,D){let I=b/_,N=w/S,B=b/2,V=w/2,R=E/2,G=_+1,H=S+1,W=0,te=0,q=new F;for(let J=0;J<H;J++){let ee=J*N-V;for(let ye=0;ye<G;ye++){let Fe=ye*I-B;q[v]=Fe*M,q[m]=ee*A,q[p]=R,l.push(q.x,q.y,q.z),q[v]=0,q[m]=0,q[p]=E>0?1:-1,h.push(q.x,q.y,q.z),u.push(ye/_),u.push(1-J/S),W+=1}}for(let J=0;J<S;J++)for(let ee=0;ee<_;ee++){let ye=d+ee+G*J,Fe=d+ee+G*(J+1),K=d+(ee+1)+G*(J+1),ge=d+(ee+1)+G*J;c.push(ye,Fe,ge),c.push(Fe,K,ge),te+=6}o.addGroup(f,te,D),f+=te,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}},Ic=class t extends Dn{constructor(e=1,n=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:n,thetaStart:i,thetaLength:s},n=Math.max(3,n);let r=[],a=[],o=[],c=[],l=new F,h=new je;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let u=0,d=3;u<=n;u++,d+=3){let f=i+u/n*s;l.x=e*Math.cos(f),l.y=e*Math.sin(f),a.push(l.x,l.y,l.z),o.push(0,0,1),h.x=(a[d]/e+1)/2,h.y=(a[d+1]/e+1)/2,c.push(h.x,h.y)}for(let u=1;u<=n;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new qt(a,3)),this.setAttribute("normal",new qt(o,3)),this.setAttribute("uv",new qt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.radius,e.segments,e.thetaStart,e.thetaLength)}},ea=class t extends Dn{constructor(e=1,n=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:s};let r=e/2,a=n/2,o=Math.floor(i),c=Math.floor(s),l=o+1,h=c+1,u=e/o,d=n/c,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let M=p*d-a;for(let A=0;A<l;A++){let b=A*u-r;g.push(b,-M,0),v.push(0,0,1),m.push(A/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){let A=M+l*p,b=M+l*(p+1),w=M+1+l*(p+1),E=M+1+l*p;f.push(A,b,E),f.push(b,w,E)}this.setIndex(f),this.setAttribute("position",new qt(g,3)),this.setAttribute("normal",new qt(v,3)),this.setAttribute("uv",new qt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.width,e.height,e.widthSegments,e.heightSegments)}},Pc=class t extends Dn{constructor(e=.5,n=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:n,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],c=[],l=[],h=[],u=e,d=(n-e)/s,f=new F,g=new je;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=u*Math.cos(p),f.y=u*Math.sin(p),c.push(f.x,f.y,f.z),l.push(0,0,1),g.x=(f.x/n+1)/2,g.y=(f.y/n+1)/2,h.push(g.x,g.y)}u+=d}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let M=p+m,A=M,b=M+i+1,w=M+i+2,E=M+1;o.push(A,b,E),o.push(b,w,E)}}this.setIndex(o),this.setAttribute("position",new qt(c,3)),this.setAttribute("normal",new qt(l,3)),this.setAttribute("uv",new qt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new t(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};V_={clone:la,merge:Fn},zM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,GM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ts=class extends zn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zM,this.fragmentShader=GM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=la(e.uniforms),this.uniformsGroups=kM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?n.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?n.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?n.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?n.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?n.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?n.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?n.uniforms[s]={type:"m4",value:a.toArray()}:n.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}fromJSON(e,n){if(super.fromJSON(e,n),e.uniforms!==void 0)for(let i in e.uniforms){let s=e.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=n[s.value]||null;break;case"c":this.uniforms[i].value=new ze().setHex(s.value);break;case"v2":this.uniforms[i].value=new je().fromArray(s.value);break;case"v3":this.uniforms[i].value=new F().fromArray(s.value);break;case"v4":this.uniforms[i].value=new St().fromArray(s.value);break;case"m3":this.uniforms[i].value=new We().fromArray(s.value);break;case"m4":this.uniforms[i].value=new $e().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let i in e.extensions)this.extensions[i]=e.extensions[i];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Sh=class extends ts{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ns=class extends zn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Gn=class extends ns{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new je(1,1),this.clearcoatNormalMap=null,this.diffuseRoughnessMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return it(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(n){this.ior=(1+.4*n)/(1-.4*n)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessMinimum=100,this.iridescenceThicknessMaximum=400,this.iridescenceThicknessMap=null,this.sheenColor=new ze(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ze(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ze(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._diffuseRoughness=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get diffuseRoughness(){return this._diffuseRoughness}set diffuseRoughness(e){this._diffuseRoughness>0!=e>0&&this.version++,this._diffuseRoughness=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}get iridescenceThicknessRange(){return $r('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),[this.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum]}set iridescenceThicknessRange(e){$r('MeshPhysicalMaterial: The "iridescenceThicknessRange" property has been replaced by "iridescenceThicknessMinimum" and "iridescenceThicknessMaximum".'),this.iridescenceThicknessMinimum=e[0],this.iridescenceThicknessMaximum=e[1]}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.diffuseRoughness=e.diffuseRoughness,this.diffuseRoughnessMap=e.diffuseRoughnessMap,this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessMinimum=e.iridescenceThicknessMinimum,this.iridescenceThicknessMaximum=e.iridescenceThicknessMaximum,this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}},Lc=class extends zn{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=jc,this.normalScale=new je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new es,this.combine=Lh,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.envMapIntensity=e.envMapIntensity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}},Mh=class extends zn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=I_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},bh=class extends zn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};is=class{constructor(e,n,i,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new n.constructor(i),this.sampleValues=n,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(e){let n=this.parameterPositions,i=this._cachedIndex,s=n[i],r=n[i-1];e:{t:{let a;n:{i:if(!(e<s)){for(let o=i+2;;){if(s===void 0){if(e<r)break i;return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=n[++i],e<s)break t}a=n.length;break n}if(!(e>=r)){let o=n[1];e<o&&(i=2,r=o);for(let c=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===c)break;if(s=r,r=n[--i-1],e>=r)break t}a=i,i=0;break n}break e}for(;i<a;){let o=i+a>>>1;e<n[o]?a=o:i=o+1}if(s=n[i],r=n[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=n.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)n[a]=i[r+a];return n}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},Th=class extends is{constructor(e,n,i,s){super(e,n,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:xf,endingEnd:xf}}intervalChanged_(e,n,i){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],c=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case vf:r=e,o=2*n-i;break;case yf:r=s.length-2,o=n+s[r]-s[r+1];break;default:r=e,o=i}if(c===void 0)switch(this.getSettings_().endingEnd){case vf:a=e,c=2*i-n;break;case yf:a=1,c=i+s[1]-s[0];break;default:a=e-1,c=n}let l=(i-n)*.5,h=this.valueSize;this._weightPrev=l/(n-o),this._weightNext=l/(c-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,f=this._weightNext,g=(i-n)/(s-n),v=g*g,m=v*g,p=-d*m+2*d*v-d*g,M=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,A=(-1-f)*m+(1.5+f)*v+.5*g,b=f*m-f*v;for(let w=0;w!==o;++w)r[w]=p*a[h+w]+M*a[l+w]+A*a[c+w]+b*a[u+w];return r}},Eh=class extends is{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=(i-n)/(s-n),u=1-h;for(let d=0;d!==o;++d)r[d]=a[l+d]*u+a[c+d]*h;return r}},Ah=class extends is{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e){return this.copySampleValue_(e-1)}},wh=class extends is{interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=e*o,l=c-o,h=this.inTangents,u=this.outTangents;if(!h||!u){let g=(i-n)/(s-n),v=1-g;for(let m=0;m!==o;++m)r[m]=a[l+m]*v+a[c+m]*g;return r}let d=o*2,f=e-1;for(let g=0;g!==o;++g){let v=a[l+g],m=a[c+g],p=f*d+g*2,M=u[p],A=u[p+1],b=e*d+g*2,w=h[b],E=h[b+1],_=XM(i,n,M,w,s);r[g]=W_(_,v,A,E,m)}return r}};Qn=class{constructor(e,n,i,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(n===void 0||n.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=fr(n,this.TimeBufferType),this.values=fr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let n=e.constructor,i;if(n.toJSON!==this.toJSON)i=n.toJSON(e);else{i={name:e.name,times:fr(e.times,Array),values:fr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(i.interpolation=s),fc(e.settings)&&(i.settings={inTangents:fr(e.settings.inTangents,Array),outTangents:fr(e.settings.outTangents,Array)})}return i.type=e.ValueTypeName,i}InterpolantFactoryMethodDiscrete(e){return new Ah(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Eh(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Th(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let n=new wh(this.times,this.values,this.getValueSize(),e);return this.settings&&(n.inTangents=this.settings.inTangents,n.outTangents=this.settings.outTangents),n}setInterpolation(e){let n;switch(e){case Yr:n=this.InterpolantFactoryMethodDiscrete;break;case Kr:n=this.InterpolantFactoryMethodLinear;break;case ah:n=this.InterpolantFactoryMethodSmooth;break;case _f:n=this.InterpolantFactoryMethodBezier;break}if(n===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return Ie("KeyframeTrack:",i),this}return this.createInterpolant=n,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Yr;case this.InterpolantFactoryMethodLinear:return Kr;case this.InterpolantFactoryMethodSmooth:return ah;case this.InterpolantFactoryMethodBezier:return _f}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]+=e;fc(this.settings)&&(j0(this.settings.inTangents,e),j0(this.settings.outTangents,e))}return this}scale(e){if(e!==1){let n=this.times;for(let i=0,s=n.length;i!==s;++i)n[i]*=e;fc(this.settings)&&(Z0(this.settings.inTangents,e),Z0(this.settings.outTangents,e))}return this}trim(e,n){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<e;)++r;for(;a!==-1&&i[a]>n;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,n=this.getValueSize();n-Math.floor(n)!==0&&(Ve("KeyframeTrack: Invalid value size in track.",this),e=!1);let i=this.times,s=this.values,r=i.length;r===0&&(Ve("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let c=i[o];if(typeof c=="number"&&isNaN(c)){Ve("KeyframeTrack: Time is not a valid number.",this,o,c),e=!1;break}if(a!==null&&a>c){Ve("KeyframeTrack: Out of order keys.",this,o,c,a),e=!1;break}a=c}if(s!==void 0&&QS(s))for(let o=0,c=s.length;o!==c;++o){let l=s[o];if(isNaN(l)){Ve("KeyframeTrack: Value is not a valid number.",this,o,l),e=!1;break}}return e}optimize(){let e=this.times.slice(),n=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===ah,r=e.length-1,a=1;for(let o=1;o<r;++o){let c=!1,l=e[o],h=e[o+1];if(l!==h&&(o!==1||l!==e[0]))if(s)c=!0;else{let u=o*i,d=u-i,f=u+i;for(let g=0;g!==i;++g){let v=n[u+g];if(v!==n[d+g]||v!==n[f+g]){c=!0;break}}}if(c){if(o!==a){e[a]=e[o];let u=o*i,d=a*i;for(let f=0;f!==i;++f)n[d+f]=n[u+f]}++a}}if(r>0){e[a]=e[r];for(let o=r*i,c=a*i,l=0;l!==i;++l)n[c+l]=n[o+l];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=n.slice(0,a*i)):(this.times=e,this.values=n),this}clone(){let e=this.times.slice(),n=this.values.slice(),i=this.constructor,s=new i(this.name,e,n);return s.createInterpolant=this.createInterpolant,fc(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Qn.prototype.ValueTypeName="";Qn.prototype.TimeBufferType=Float32Array;Qn.prototype.ValueBufferType=Float32Array;Qn.prototype.DefaultInterpolation=Kr;Fs=class extends Qn{constructor(e,n,i){super(e,n,i)}};Fs.prototype.ValueTypeName="bool";Fs.prototype.ValueBufferType=Array;Fs.prototype.DefaultInterpolation=Yr;Fs.prototype.InterpolantFactoryMethodLinear=void 0;Fs.prototype.InterpolantFactoryMethodSmooth=void 0;Nc=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}};Nc.prototype.ValueTypeName="color";Os=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}};Os.prototype.ValueTypeName="number";Rh=class extends is{constructor(e,n,i,s){super(e,n,i,s)}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=(i-n)/(s-n),l=e*o;for(let h=l+o;l!==h;l+=4)kn.slerpFlat(r,0,a,l-o,a,l,c);return r}},Bs=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}InterpolantFactoryMethodLinear(e){return new Rh(this.times,this.values,this.getValueSize(),e)}};Bs.prototype.ValueTypeName="quaternion";Bs.prototype.InterpolantFactoryMethodSmooth=void 0;ks=class extends Qn{constructor(e,n,i){super(e,n,i)}};ks.prototype.ValueTypeName="string";ks.prototype.ValueBufferType=Array;ks.prototype.DefaultInterpolation=Yr;ks.prototype.InterpolantFactoryMethodLinear=void 0;ks.prototype.InterpolantFactoryMethodSmooth=void 0;Sr=class extends Qn{constructor(e,n,i,s){super(e,n,i,s)}};Sr.prototype.ValueTypeName="vector";Dc=class{constructor(e="",n=-1,i=[],s=C_){this.name=e,this.tracks=i,this.duration=n,this.blendMode=s,this.uuid=as(),this.userData={},this.duration<0&&this.resetDuration()}static parse(e){let n=[],i=e.tracks,s=1/(e.fps||1);for(let a=0,o=i.length;a!==o;++a)n.push($M(i[a]).scale(s));let r=new this(e.name,e.duration,n,e.blendMode);return r.uuid=e.uuid,r.userData=JSON.parse(e.userData||"{}"),r}static toJSON(e){let n=[],i=e.tracks,s={name:e.name,duration:e.duration,tracks:n,uuid:e.uuid,blendMode:e.blendMode,userData:JSON.stringify(e.userData)};for(let r=0,a=i.length;r!==a;++r)n.push(Qn.toJSON(i[r]));return s}static CreateFromMorphTargetSequence(e,n,i,s){let r=n.length,a=[];for(let o=0;o<r;o++){let c=[],l=[];c.push((o+r-1)%r,o,(o+1)%r),l.push(0,1,0);let h=HM(c);c=K0(c,1,h),l=K0(l,1,h),!s&&c[0]===0&&(c.push(r),l.push(l[0])),a.push(new Os(".morphTargetInfluences["+n[o].name+"]",c,l).scale(1/i))}return new this(e,-1,a)}static findByName(e,n){let i=e;if(!Array.isArray(e)){let s=e;i=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<i.length;s++)if(i[s].name===n)return i[s];return null}static CreateClipsFromMorphTargetSequences(e,n,i){let s={},r=/^([\w-]*?)([\d]+)$/;for(let o=0,c=e.length;o<c;o++){let l=e[o],h=l.name.match(r);if(h&&h.length>1){let u=h[1],d=s[u];d||(s[u]=d=[]),d.push(l)}}let a=[];for(let o in s)a.push(this.CreateFromMorphTargetSequence(o,s[o],n,i));return a}resetDuration(){let e=this.tracks,n=0;for(let i=0,s=e.length;i!==s;++i){let r=this.tracks[i];n=Math.max(n,r.times[r.times.length-1])}return this.duration=n,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let n=0;n<this.tracks.length;n++)e=e&&this.tracks[n].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){let e=[];for(let i=0;i<this.tracks.length;i++)e.push(this.tracks[i].clone());let n=new this.constructor(this.name,this.duration,e,this.blendMode);return n.userData=JSON.parse(JSON.stringify(this.userData)),n}toJSON(){return this.constructor.toJSON(this)}};Ji={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(J0(t)||(this.files[t]=e))},get:function(t){if(this.enabled!==!1&&!J0(t))return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};Ch=class{constructor(e,n,i){let s=this,r=!1,a=0,o=0,c,l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),c?c(h):h},this.setURLModifier=function(h){return c=h,this},this.addHandler=function(h,u){return l.push(h,u),this},this.removeHandler=function(h){let u=l.indexOf(h);return u!==-1&&l.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=l.length;u<d;u+=2){let f=l[u],g=l[u+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},X_=new Ch,Gi=class{constructor(e){this.manager=e!==void 0?e:X_,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},this.priority="auto",this.cache="default",typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,n){let i=this;return new Promise(function(s,r){i.load(e,s,n,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}setPriority(e){return this.priority=e,this}setCache(e){return this.cache=e,this}abort(){return this}};Gi.DEFAULT_MATERIAL_NAME="__DEFAULT";Is={},Mf=class extends Error{constructor(e,n){super(e),this.response=n}},ta=class extends Gi{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=Ji.get(`file:${e}`);if(r!==void 0){this.manager.itemStart(e),setTimeout(()=>{n&&n(r),this.manager.itemEnd(e)},0);return}if(Is[e]!==void 0){Is[e].push({onLoad:n,onProgress:i,onError:s});return}Is[e]=[],Is[e].push({onLoad:n,onProgress:i,onError:s});let a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",priority:this.priority,cache:this.cache,signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),o=this.mimeType,c=this.responseType;fetch(a).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&Ie("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;let h=Is[e],u=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),f=d?parseInt(d):0,g=f!==0,v=0,m=new ReadableStream({start(p){M();function M(){u.read().then(({done:A,value:b})=>{if(A)p.close();else{v+=b.byteLength;let w=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:f});for(let E=0,_=h.length;E<_;E++){let S=h[E];S.onProgress&&S.onProgress(w)}p.enqueue(b),M()}},A=>{p.error(A)})}}});return new Response(m)}else throw new Mf(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(h=>new DOMParser().parseFromString(h,o));case"json":return l.json();default:if(o==="")return l.text();{let u=/charset="?([^;"\s]*)"?/i.exec(o),d=u&&u[1]?u[1].toLowerCase():void 0,f=new TextDecoder(d);return l.arrayBuffer().then(g=>f.decode(g))}}}).then(l=>{Ji.add(`file:${e}`,l);let h=Is[e];delete Is[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onLoad&&f.onLoad(l)}}).catch(l=>{let h=Is[e];if(h===void 0)throw this.manager.itemError(e),l;delete Is[e];for(let u=0,d=h.length;u<d;u++){let f=h[u];f.onError&&f.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},$a=new WeakMap,Ih=class extends Gi{constructor(e){super(e)}load(e,n,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ji.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);else{let u=$a.get(a);u===void 0&&(u=[],$a.set(a,u)),u.push({onLoad:n,onError:s})}return a}let o=eo("img");function c(){h(),n&&n(this);let u=$a.get(this)||[];for(let d=0;d<u.length;d++){let f=u[d];f.onLoad&&f.onLoad(this)}$a.delete(this),r.manager.itemEnd(e)}function l(u){h(),s&&s(u),Ji.remove(`image:${e}`);let d=$a.get(this)||[];for(let f=0;f<d.length;f++){let g=d[f];g.onError&&g.onError(u)}$a.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",c,!1),o.removeEventListener("error",l,!1)}return o.addEventListener("load",c,!1),o.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Ji.add(`image:${e}`,o),r.manager.itemStart(e),o.fetchPriority=this.priority,o.src=e,o}},Uc=class extends Gi{constructor(e){super(e)}load(e,n,i,s){let r=this,a=new xr,o=new ta(this.manager);return o.setPriority(this.priority),o.setCache(this.cache),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(r.withCredentials),o.load(e,function(c){let l;try{l=r.parse(c)}catch(h){s!==void 0?s(h):Ve(h);return}r._applyTexData(a,l),n&&n(a,l)},i,s),a}createDataTexture(e){let n=new xr;return this._applyTexData(n,this.parse(e)),n}_applyTexData(e,n){n.image!==void 0?e.image=n.image:n.data!==void 0&&(e.image.width=n.width,e.image.height=n.height,e.image.data=n.data),e.wrapS=n.wrapS!==void 0?n.wrapS:jn,e.wrapT=n.wrapT!==void 0?n.wrapT:jn,e.magFilter=n.magFilter!==void 0?n.magFilter:Ct,e.minFilter=n.minFilter!==void 0?n.minFilter:Ct,e.anisotropy=n.anisotropy!==void 0?n.anisotropy:1,n.colorSpace!==void 0&&(e.colorSpace=n.colorSpace),n.flipY!==void 0&&(e.flipY=n.flipY),n.format!==void 0&&(e.format=n.format),n.type!==void 0&&(e.type=n.type),n.mipmaps!==void 0&&(e.mipmaps=n.mipmaps,e.minFilter=ui),n.mipmapCount===1&&(e.minFilter=Ct),n.generateMipmaps!==void 0&&(e.generateMipmaps=n.generateMipmaps),e.needsUpdate=!0}},Fc=class extends Gi{constructor(e){super(e)}load(e,n,i,s){let r=new an,a=new Ih(this.manager);return a.setPriority(this.priority),a.setCache(this.cache),a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,n!==void 0&&n(r)},i,s),r}},ho=class extends It{static registerNode(e){this.prototype._lightNode=e}constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=n}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,n}},pf=new $e,Q0=new F,e_=new F,uo=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new je(512,512),this.mapType=ei,this.map=null,this.mapPass=null,this.matrix=new $e,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new vr,this._frameExtents=new je(1,1),this._viewportCount=1,this._viewports=[new St(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let n=this.camera;Q0.setFromMatrixPosition(e.matrixWorld),n.position.copy(Q0),e_.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(e_),n.updateMatrixWorld(),this._updateMatrix(n,this.matrix,this._frustum)}_updateMatrix(e,n,i,s){pf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),i.setFromProjectionMatrix(pf,e.coordinateSystem,e.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,c=s?s.x/r.x:0,l=s?s.y/r.y:0;e.coordinateSystem===Qa||e.reversedDepth?n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):n.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),n.multiply(pf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.mapType=e.mapType,this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.mapType=this.mapType,e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},sh=new F,rh=new kn,Zi=new F,Oc=class extends It{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $e,this.projectionMatrix=new $e,this.projectionMatrixInverse=new $e,this.coordinateSystem=Ei,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(sh,rh,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sh,rh,Zi.set(1,1,1)).invert()}updateWorldMatrix(e,n,i=!1){super.updateWorldMatrix(e,n,i),this.matrixWorld.decompose(sh,rh,Zi),Zi.x===1&&Zi.y===1&&Zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(sh,rh,Zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},dr=new F,t_=new je,n_=new je,rn=class extends Oc{constructor(e=50,n=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let n=.5*this.getFilmHeight()/e;this.fov=jr*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(pc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jr*2*Math.atan(Math.tan(pc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){dr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(dr.x,dr.y).multiplyScalar(-e/dr.z),dr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(dr.x,dr.y).multiplyScalar(-e/dr.z)}getViewSize(e,n){return this.getViewBounds(e,t_,n_),n.subVectors(n_,t_)}setViewOffset(e,n,i,s,r,a){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,n=e*Math.tan(pc*.5*this.fov)/this.zoom,i=2*n,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let c=a.fullWidth,l=a.fullHeight;r+=a.offsetX*s/c,n-=a.offsetY*i/l,s*=a.width/c,i*=a.height/l}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}},bf=class extends uo{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1,this.aspect=1}updateMatrices(e){let n=this.camera,i=jr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height*this.aspect,r=e.distance||n.far;(i!==n.fov||s!==n.aspect||r!==n.far)&&(n.fov=i,n.aspect=s,n.far=r,n.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this.aspect=e.aspect,this}toJSON(){let e=super.toJSON();return e.focus=this.focus,e.aspect=this.aspect,e}},Bc=class extends ho{constructor(e,n,i=0,s=Math.PI/3,r=0,a=2){super(e,n),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.distance=i,this.angle=s,this.penumbra=r,this.decay=a,this.map=null,this.shadow=new bf}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.map=e.map,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.angle=this.angle,n.object.decay=this.decay,n.object.penumbra=this.penumbra,n.object.target=this.target.uuid,this.map&&this.map.isTexture&&(n.object.map=this.map.toJSON(e).uuid),n.object.shadow=this.shadow.toJSON(),n}},Tf=class extends uo{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0}},na=class extends ho{constructor(e,n,i=0,s=2){super(e,n),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Tf}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,n){return super.copy(e,n),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.distance=this.distance,n.object.decay=this.decay,n.object.shadow=this.shadow.toJSON(),n}},ia=class extends Oc{constructor(e=-1,n=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-e,a=i+e,o=s+n,c=s-n;if(this.view!==null&&this.view.enabled){let l=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,a=r+l*this.view.width,o-=h*this.view.offsetY,c=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}},Ef=class extends uo{constructor(){super(new ia(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},Mr=class extends ho{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(It.DEFAULT_UP),this.updateMatrix(),this.target=new It,this.shadow=new Ef}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let n=super.toJSON(e);return n.object.shadow=this.shadow.toJSON(),n.object.target=this.target.uuid,n}},zs=class{static extractUrlBase(e){let n=e.lastIndexOf("/");return n===-1?"./":e.slice(0,n+1)}static resolveURL(e,n){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(n)&&/^\//.test(e)&&(n=n.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:n+e)}},mf=new WeakMap,kc=class extends Gi{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&Ie("ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&Ie("ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"},this._abortController=new AbortController}setOptions(e){return this.options=e,this}load(e,n,i,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let r=this,a=Ji.get(`image-bitmap:${e}`);if(a!==void 0){if(r.manager.itemStart(e),a.then){a.then(l=>{mf.has(a)===!0?(s&&s(mf.get(a)),r.manager.itemError(e),r.manager.itemEnd(e)):(n&&n(l),r.manager.itemEnd(e))});return}setTimeout(function(){n&&n(a),r.manager.itemEnd(e)},0);return}let o={};o.credentials=this.withCredentials||this.crossOrigin!=="anonymous"?"include":"same-origin",o.headers=this.requestHeader,o.priority=this.priority,o.cache=this.cache,o.signal=typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal;let c=fetch(e,o).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign({},r.options,{colorSpaceConversion:"none"}))}).then(function(l){return Ji.add(`image-bitmap:${e}`,l),n&&n(l),r.manager.itemEnd(e),l}).catch(function(l){s&&s(l),mf.set(c,l),Ji.remove(`image-bitmap:${e}`),r.manager.itemError(e),r.manager.itemEnd(e)});Ji.add(`image-bitmap:${e}`,c),r.manager.itemStart(e)}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}},Ya=-90,Ka=1,fo=class extends It{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new rn(Ya,Ka,e,n);s.layers=this.layers,this.add(s);let r=new rn(Ya,Ka,e,n);r.layers=this.layers,this.add(r);let a=new rn(Ya,Ka,e,n);a.layers=this.layers,this.add(a);let o=new rn(Ya,Ka,e,n);o.layers=this.layers,this.add(o);let c=new rn(Ya,Ka,e,n);c.layers=this.layers,this.add(c);let l=new rn(Ya,Ka,e,n);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){let e=this.coordinateSystem,n=this.children.concat(),[i,s,r,a,o,c]=n;for(let l of n)this.remove(l);if(e===Ei)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Qa)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let l of n)this.add(l),l.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,c,l,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=i.texture.mipmapsAutoUpdate;i.texture.mipmapsAutoUpdate=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(i,0,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,r),e.setRenderTarget(i,1,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,a),e.setRenderTarget(i,2,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,o),e.setRenderTarget(i,3,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,c),e.setRenderTarget(i,4,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,l),i.texture.mipmapsAutoUpdate=v,e.setRenderTarget(i,5,s),m&&e.autoClear===!1&&e.clearDepth(),e.render(n,h),e.setRenderTarget(u,d,f),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},Ph=class extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e,this.perCameraFrustumCulled=!1}},rp="\\[\\]\\.:\\/",YM=new RegExp("["+rp+"]","g"),ap="[^"+rp+"]",KM="[^"+rp.replace("\\.","")+"]",jM=/((?:WC+[\/:])*)/.source.replace("WC",ap),ZM=/(WCOD+)?/.source.replace("WCOD",KM),JM=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ap),QM=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ap),e2=new RegExp("^"+jM+ZM+JM+QM+"$"),t2=["material","materials","bones","map"],Af=class{constructor(e,n,i){let s=i||Et.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,s)}getValue(e,n){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(e,n)}setValue(e,n){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(e,n)}bind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){let e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}},Et=class t{constructor(e,n,i){this.path=n,this.parsedPath=i||t.parseTrackName(n),this.node=t.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new t.Composite(e,n,i):new t(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(YM,"")}static parseTrackName(e){let n=e2.exec(e);if(n===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);t2.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){let i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===n||o.uuid===n)return o;let c=i(o.children);if(c)return c}return null},s=i(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)e[n++]=i[s]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++]}_setValue_array_setNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node,n=this.parsedPath,i=n.objectName,s=n.propertyName,r=n.propertyIndex;if(e||(e=t.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){Ie("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let l=n.objectIndex;switch(i){case"materials":if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){Ve("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){Ve("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===l){l=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){Ve("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){Ve("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){Ve("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(l!==void 0){if(e[l]===void 0){Ve("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}let a=e[s];if(a===void 0){let l=n.nodeName;Ve("PropertyBinding: Trying to update property for track: "+l+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){Ve("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(c=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Et.Composite=Af;Et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Et.prototype.GetterByBindingType=[Et.prototype._getValue_direct,Et.prototype._getValue_array,Et.prototype._getValue_arrayElement,Et.prototype._getValue_toArray];Et.prototype.SetterByBindingTypeAndVersioning=[[Et.prototype._setValue_direct,Et.prototype._setValue_direct_setNeedsUpdate,Et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_array,Et.prototype._setValue_array_setNeedsUpdate,Et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_arrayElement,Et.prototype._setValue_arrayElement_setNeedsUpdate,Et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Et.prototype._setValue_fromArray,Et.prototype._setValue_fromArray_setNeedsUpdate,Et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];dC=new Float32Array(1),i_=new $e,zc=class{constructor(e,n,i=0,s=1/0){this.ray=new _r(e,n),this.near=i,this.far=s,this.camera=null,this.layers=new io,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,n){this.ray.set(e,n)}setFromCamera(e,n){n.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(n.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(n).sub(this.ray.origin).normalize(),this.camera=n):n.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,n.projectionMatrix.elements[14]).unproject(n),this.ray.direction.set(0,0,-1).transformDirection(n.matrixWorld),this.camera=n):Ve("Raycaster: Unsupported camera type: "+n.type)}setFromXRController(e){return i_.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(i_),this}intersectObject(e,n=!0,i=[]){return wf(e,this,i,n),i.sort(s_),i}intersectObjects(e,n=!0,i=[]){for(let s=0,r=e.length;s<r;s++)wf(e[s],this,i,n);return i.sort(s_),i}};Rf=class{static{this.prototype.isMatrix2=!0}constructor(e,n,i,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,n,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,n=0){for(let i=0;i<4;i++)this.elements[i]=e[i+n];return this}set(e,n,i,s){let r=this.elements;return r[0]=e,r[2]=n,r[1]=i,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"187"}}));typeof window<"u"&&(window.__THREE__?Ie("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="187")});function fx(){let t=null,e=!1,n=null,i=null;function s(r,a){i=t.requestAnimationFrame(s),n(r,a)}return{start:function(){e!==!0&&n!==null&&t!==null&&(i=t.requestAnimationFrame(s),e=!0)},stop:function(){t!==null&&t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(r){n=r},setContext:function(r){t=r}}}function s2(t){let e=new WeakMap;function n(o,c){let l=o.array,h=o.usage,u=l.byteLength,d=t.createBuffer();t.bindBuffer(c,d),t.bufferData(c,l,h),o.onUploadCallback();let f;if(l instanceof Float32Array)f=t.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=t.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?f=t.HALF_FLOAT:f=t.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=t.SHORT;else if(l instanceof Uint32Array)f=t.UNSIGNED_INT;else if(l instanceof Int32Array)f=t.INT;else if(l instanceof Int8Array)f=t.BYTE;else if(l instanceof Uint8Array)f=t.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:u}}function i(o,c,l){let h=c.array,u=c.updateRanges;if(t.bindBuffer(l,o),u.length===0)t.bufferSubData(l,0,h);else{u.sort((f,g)=>f.start-g.start);let d=0;for(let f=1;f<u.length;f++){let g=u[d],v=u[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,u[d]=v)}u.length=d+1;for(let f=0,g=u.length;f<g;f++){let v=u[f];t.bufferSubData(l,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let c=e.get(o);c&&(t.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let l=e.get(o);if(l===void 0)e.set(o,n(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(l.buffer,o,c),l.version=o.version}}return{get:s,remove:r,update:a}}function k3(t,e,n,i,s,r){let a=new ze(0),o=s===!0?0:1,c,l,h=null,u=0,d=null;function f(M){let A=M.isScene===!0?M.background:null;if(A&&A.isTexture){let b=M.backgroundBlurriness>0;A=e.get(A,b)}return A}function g(M){let A=!1,b=f(M);b===null?m(a,o):b&&b.isColor&&(m(b,1),A=!0);let w=t.xr.getEnvironmentBlendMode();w==="additive"?n.buffers.color.setClear(0,0,0,1,r):w==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,r),(t.autoClear||A)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function v(M,A){let b=f(A);b&&b.isCubeTexture?(l===void 0&&(l=new At(new yr(1,1,1),new ts({name:"BackgroundCubeMaterial",uniforms:la(cs.backgroundCube.uniforms),vertexShader:cs.backgroundCube.vertexShader,fragmentShader:cs.backgroundCube.fragmentShader,side:En,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(w,E,_){this.matrixWorld.copyPosition(_.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(l)),l.material.uniforms.envMap.value=b,l.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(B3.makeRotationFromEuler(A.backgroundRotation)).transpose(),b.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(px),l.material.toneMapped=et.getTransfer(b.colorSpace)!==xt,(h!==b||u!==b.version||d!==t.toneMapping)&&(l.material.needsUpdate=!0,h=b,u=b.version,d=t.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new At(new ea(2,2),new ts({name:"BackgroundMaterial",uniforms:la(cs.background.uniforms),vertexShader:cs.background.vertexShader,fragmentShader:cs.background.fragmentShader,side:ss,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=et.getTransfer(b.colorSpace)!==xt,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||u!==b.version||d!==t.toneMapping)&&(c.material.needsUpdate=!0,h=b,u=b.version,d=t.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,A){M.getRGB(vu,sp(t)),n.buffers.color.setClear(vu.r,vu.g,vu.b,A,r)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,A=1){a.set(M),o=A,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:v,dispose:p}}function z3(t,e){let n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},s=d(null),r=s,a=!1;function o(N,B,V,R,G){let H=!1,W=u(N,R,V,B);r!==W&&(r=W,l(r.object)),H=f(N,R,V,G),H&&g(N,R,V,G),G!==null&&e.update(G,t.ELEMENT_ARRAY_BUFFER),(H||a)&&(a=!1,b(N,B,V,R),G!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return t.createVertexArray()}function l(N){return t.bindVertexArray(N)}function h(N){return t.deleteVertexArray(N)}function u(N,B,V,R){let G=R.wireframe===!0,H=i[B.id];H===void 0&&(H={},i[B.id]=H);let W=N.isInstancedMesh===!0?N.id:0,te=H[W];te===void 0&&(te={},H[W]=te);let q=te[V.id];q===void 0&&(q={},te[V.id]=q);let J=q[G];return J===void 0&&(J=d(c()),q[G]=J),J}function d(N){let B=[],V=[],R=[];for(let G=0;G<n;G++)B[G]=0,V[G]=0,R[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:V,attributeDivisors:R,object:N,attributes:{},index:null}}function f(N,B,V,R){let G=r.attributes,H=B.attributes,W=0,te=V.getAttributes();for(let q in te)if(te[q].location>=0){let ee=G[q],ye=H[q];if(ye===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ye=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ye=N.instanceColor)),ee===void 0||ee.attribute!==ye||ye&&ee.data!==ye.data)return!0;W++}return r.attributesNum!==W||r.index!==R}function g(N,B,V,R){let G={},H=B.attributes,W=0,te=V.getAttributes();for(let q in te)if(te[q].location>=0){let ee=H[q];ee===void 0&&(q==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),q==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor));let ye={};ye.attribute=ee,ee&&ee.data&&(ye.data=ee.data),G[q]=ye,W++}r.attributes=G,r.attributesNum=W,r.index=R}function v(){let N=r.newAttributes;for(let B=0,V=N.length;B<V;B++)N[B]=0}function m(N){p(N,0)}function p(N,B){let V=r.newAttributes,R=r.enabledAttributes,G=r.attributeDivisors;V[N]=1,R[N]===0&&(t.enableVertexAttribArray(N),R[N]=1),G[N]!==B&&(t.vertexAttribDivisor(N,B),G[N]=B)}function M(){let N=r.newAttributes,B=r.enabledAttributes;for(let V=0,R=B.length;V<R;V++)B[V]!==N[V]&&(t.disableVertexAttribArray(V),B[V]=0)}function A(N,B,V,R,G,H,W){W===!0?t.vertexAttribIPointer(N,B,V,G,H):t.vertexAttribPointer(N,B,V,R,G,H)}function b(N,B,V,R){v();let G=R.attributes,H=V.getAttributes(),W=B.defaultAttributeValues;for(let te in H){let q=H[te];if(q.location>=0){let J=G[te];if(J===void 0&&(te==="instanceMatrix"&&N.instanceMatrix&&(J=N.instanceMatrix),te==="instanceColor"&&N.instanceColor&&(J=N.instanceColor)),J!==void 0){let ee=J.normalized,ye=J.itemSize,Fe=e.get(J);if(Fe===void 0)continue;let K=Fe.buffer,ge=Fe.type,Te=Fe.bytesPerElement,Be=ge===t.INT||ge===t.UNSIGNED_INT||J.gpuType===Uh;if(J.isInterleavedBufferAttribute){let xe=J.data,Ye=xe.isInterleavedBuffer===!0?xe.stride:xe.itemSize,jt=J.offset;if(xe.isInstancedInterleavedBuffer||xe.isInstancedBufferAttribute){for(let He=0;He<q.locationSize;He++)p(q.location+He,xe.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let He=0;He<q.locationSize;He++)m(q.location+He);t.bindBuffer(t.ARRAY_BUFFER,K);for(let He=0;He<q.locationSize;He++)A(q.location+He,ye/q.locationSize,ge,ee,Ye*Te,(jt+ye/q.locationSize*He)*Te,Be)}else{if(J.isInstancedBufferAttribute){for(let xe=0;xe<q.locationSize;xe++)p(q.location+xe,J.meshPerAttribute);N.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let xe=0;xe<q.locationSize;xe++)m(q.location+xe);t.bindBuffer(t.ARRAY_BUFFER,K);for(let xe=0;xe<q.locationSize;xe++)A(q.location+xe,ye/q.locationSize,ge,ee,ye*Te,ye/q.locationSize*xe*Te,Be)}}else if(W!==void 0){let ee=W[te];if(ee!==void 0)switch(ee.length){case 2:t.vertexAttrib2fv(q.location,ee);break;case 3:t.vertexAttrib3fv(q.location,ee);break;case 4:t.vertexAttrib4fv(q.location,ee);break;default:t.vertexAttrib1fv(q.location,ee)}}}}M()}function w(){D();for(let N in i){let B=i[N];for(let V in B){let R=B[V];for(let G in R){let H=R[G];for(let W in H)h(H[W].object),delete H[W];delete R[G]}}delete i[N]}}function E(N){if(i[N.id]===void 0)return;let B=i[N.id];for(let V in B){let R=B[V];for(let G in R){let H=R[G];for(let W in H)h(H[W].object),delete H[W];delete R[G]}}delete i[N.id]}function _(N){for(let B in i){let V=i[B];for(let R in V){let G=V[R];if(G[N.id]===void 0)continue;let H=G[N.id];for(let W in H)h(H[W].object),delete H[W];delete G[N.id]}}}function S(N){for(let B in i){let V=i[B],R=N.isInstancedMesh===!0?N.id:0,G=V[R];if(G!==void 0){for(let H in G){let W=G[H];for(let te in W)h(W[te].object),delete W[te];delete G[H]}delete V[R],Object.keys(V).length===0&&delete i[B]}}}function D(){I(),a=!0,r!==s&&(r=s,l(r.object))}function I(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:I,dispose:w,releaseStatesOfGeometry:E,releaseStatesOfObject:S,releaseStatesOfProgram:_,initAttributes:v,enableAttribute:m,disableUnusedAttributes:M}}function G3(t,e,n){let i;function s(c){i=c}function r(c,l){t.drawArrays(i,c,l),n.update(l,i,1)}function a(c,l,h){h!==0&&(t.drawArraysInstanced(i,c,l,h),n.update(l,i,h))}function o(c,l,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,l,0,h);let d=0;for(let f=0;f<h;f++)d+=l[f];n.update(d,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function H3(t,e,n,i){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let _=e.get("EXT_texture_filter_anisotropic");s=t.getParameter(_.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(_){return!(_!==Ai&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(_){let S=_===Vn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(_!==ei&&_!==Un&&!S&&i.convert(_)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE))}function c(_){if(_==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";_="mediump"}return _==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=n.precision!==void 0?n.precision:"highp",h=c(l);h!==l&&(Ie("WebGLRenderer:",l,"not supported, using",h,"instead."),l=h);let u=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),d=n.logarithmicDepthBuffer===!0&&u===!1;n.reversedDepthBuffer===!0&&u===!1&&Ie("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer."),n.logarithmicDepthBuffer===!0&&u===!0&&Ie("WebGLRenderer: Logarithmic depth buffer is ignored when reversed depth buffer is enabled.");let f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),p=t.getParameter(t.MAX_VERTEX_ATTRIBS),M=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),A=t.getParameter(t.MAX_VARYING_VECTORS),b=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),w=t.getParameter(t.MAX_SAMPLES),E=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:A,maxFragmentUniforms:b,maxSamples:w,samples:E}}function V3(t){let e=this,n=null,i=0,s=!1,r=!1,a=new zi,o=new We,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){let f=u.length!==0||d||i!==0||s;return s=d,i=u.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){n=h(u,d,0)},this.setState=function(u,d,f){let g=u.clippingPlanes,v=u.clipIntersection,m=u.clipShadows,p=t.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):l();else{let M=r?0:i,A=M*4,b=p.clippingState||null;c.value=b,b=h(g,d,A,f);for(let w=0;w!==A;++w)b[w]=n[w];p.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==n&&(c.value=n,c.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(u,d,f,g){let v=u!==null?u.length:0,m=null;if(v!==0){if(m=c.value,g!==!0||m===null){let p=f+v*4,M=d.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let A=0,b=f;A!==v;++A,b+=4)a.copy(u[A]).applyMatrix4(M,o),a.normal.toArray(m,b),m[b+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function $_(t,e,n){return new Qc(t,{minFilter:ui,generateMipmaps:e,type:Vn,colorSpace:Tn,depthBuffer:n})}function el(t,e,n){return new ts({name:t,uniforms:e,vertexShader:Qe.cube_vert,fragmentShader:n,side:En,blending:sa,depthTest:!1,depthWrite:!1})}function K3(){return el("PMREMGGXConvolution",{envMap:{value:null},roughness:{value:0},lodBias:{value:0}},`

		#define GGX_SAMPLES ${mx}u

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
	`)}function j3(){return el("PMREMGGXIntegration",{envMap:{value:null},roughness:{value:0},sourceLod:{value:0},sourceSize:{value:gx}},`

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
	`)}function Z3(){return el("PMREMSphericalGaussianBlur",{envMap:{value:null},sigma:{value:0}},`

		#define SAMPLES ${X3}
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
	`)}function Y_(){return el("PMREMEquirectangularToCubemap",{envMap:{value:null}},`

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
	`)}function K_(){return el("PMREMCubemapToCubemap",{envMap:{value:null},flipEnvMap:{value:-1}},`

		varying vec3 vWorldDirection;

		uniform samplerCube envMap;
		uniform float flipEnvMap;

		void main() {

			gl_FragColor = vec4( textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) ).rgb, 1.0 );

		}
	`)}function J3(t){let e=new WeakMap,n=new WeakMap,i=null;function s(d,f=!1){return d==null?null:f?a(d):r(d)}function r(d){if(d&&d.isTexture){let f=d.mapping;if(f===_o||f===Nh)if(e.has(d)){let g=e.get(d).texture;return o(g,d.mapping)}else{let g=d.image;if(g&&g.height>0){let v=new Qc(g.height);return v.fromEquirectangularTexture(t,d),e.set(d,v),d.addEventListener("dispose",l),o(v.texture,d.mapping)}else return null}}return d}function a(d){if(d&&d.isTexture&&d.isPMREMTexture!==!0){let f=d.mapping,g=f===_o||f===Nh,v=f===aa||f===go;if(g||v){let m=n.get(d),p=m!==void 0?m.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==p)return i===null&&(i=new bo(t)),m=g?i.fromEquirectangular(d,m):i.fromCubemap(d,m),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),m.texture;if(m!==void 0)return m.texture;{let M=d.image;return g&&M&&M.height>0||v&&M&&c(M)?(i===null&&(i=new bo(t)),m=g?i.fromEquirectangular(d):i.fromCubemap(d),m.texture.pmremVersion=d.pmremVersion,n.set(d,m),d.addEventListener("dispose",h),m.texture):null}}}return d}function o(d,f){return f===_o?d.mapping=aa:f===Nh&&(d.mapping=go),d}function c(d){let f=0,g=6;for(let v=0;v<g;v++)d[v]!==void 0&&f++;return f===g}function l(d){let f=d.target;f.removeEventListener("dispose",l);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(d){let f=d.target;f.removeEventListener("dispose",h);let g=n.get(f);g!==void 0&&(n.delete(f),g.dispose())}function u(){e=new WeakMap,n=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:u}}function Q3(t){let e={};function n(i){if(e[i]!==void 0)return e[i];let s=t.getExtension(i);return e[i]=s,s}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){let s=n(i);return s===null&&$r("WebGLRenderer: "+i+" extension not supported."),s}}}function eT(t,e,n,i){let s={},r=new WeakMap,a=new FinalizationRegistry(g=>delete s[g]);function o(g){c(g.target)}function c(g){g.index!==null&&e.remove(g.index);for(let m in g.attributes)e.remove(g.attributes[m]);g.removeEventListener("dispose",o),delete s[g.id],a.unregister(g);let v=r.get(g);v&&(e.remove(v),r.delete(g)),i.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,n.memory.geometries--}function l(g,v){return s[v.id]!==void 0||(v.addEventListener("dispose",o),s[v.id]=new WeakRef(v),a.register(v,v.id,v),n.memory.geometries++),v}function h(g){let v=g.attributes;for(let m in v)e.update(v[m],t.ARRAY_BUFFER)}function u(g){let v=g.index,m=g.attributes.position,p=0;if(m===void 0)return;let M=v!==null?v.array.length:m.array.length/3-1,A=m.count>=65535?yc:vc,b=new A(Math.ceil(M/3)*6,1),w=b.array;if(v!==null){let _=v.array;p=v.version;for(let S=0,D=0;S<M;S+=3){let I=_[S+0],N=_[S+1],B=_[S+2];w[D++]=I,w[D++]=N,w[D++]=N,w[D++]=B,w[D++]=B,w[D++]=I}}else{p=m.version;for(let _=0,S=0;_<M;_+=3){let D=_+0,I=_+1,N=_+2;w[S++]=D,w[S++]=I,w[S++]=I,w[S++]=N,w[S++]=N,w[S++]=D}}b.version=p;let E=r.get(g);E&&e.remove(E),r.set(g,b)}function d(g){let v=r.get(g);if(v){let m=g.index;m!==null&&v.version<m.version&&u(g)}else u(g);return r.get(g)}function f(){for(let g in s){let v=s[g].deref();v!==void 0&&c(v)}}return{get:l,update:h,getWireframeAttribute:d,dispose:f}}function tT(t,e,n){let i;function s(u){i=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function c(u,d){t.drawElements(i,d,r,u*a),n.update(d,i,1)}function l(u,d,f){f!==0&&(t.drawElementsInstanced(i,d,r,u*a,f),n.update(d,i,f))}function h(u,d,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,d,0,r,u,0,f);let v=0;for(let m=0;m<f;m++)v+=d[m];n.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=h}function nT(t){let e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(n.calls++,a){case t.TRIANGLES:n.triangles+=o*(r/3);break;case t.LINES:n.lines+=o*(r/2);break;case t.LINE_STRIP:n.lines+=o*(r-1);break;case t.LINE_LOOP:n.lines+=o*r;break;case t.POINTS:n.points+=o*r;break;default:Ve("WebGLInfo: Unknown draw mode:",a);break}}function s(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:s,update:i}}function iT(t,e,n){let i=new WeakMap,s=new St;function r(a,o,c){let l=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0,d=i.get(o);if(d===void 0||d.count!==u){let D=function(){_.dispose(),i.delete(o),o.removeEventListener("dispose",D)};d!==void 0&&d.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[],A=0;f===!0&&(A=1),g===!0&&(A=2),v===!0&&(A=3);let b=o.attributes.position.count*A,w=1;b>e.maxTextureSize&&(w=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);let E=new Float32Array(b*w*4*u),_=new xc(E,b,w,u);_.type=Un,_.needsUpdate=!0;let S=A*4;for(let I=0;I<u;I++){let N=m[I],B=p[I],V=M[I],R=b*w*4*I;for(let G=0;G<N.count;G++){let H=G*S;f===!0&&(s.fromBufferAttribute(N,G),E[R+H+0]=s.x,E[R+H+1]=s.y,E[R+H+2]=s.z,E[R+H+3]=0),g===!0&&(s.fromBufferAttribute(B,G),E[R+H+4]=s.x,E[R+H+5]=s.y,E[R+H+6]=s.z,E[R+H+7]=0),v===!0&&(s.fromBufferAttribute(V,G),E[R+H+8]=s.x,E[R+H+9]=s.y,E[R+H+10]=s.z,E[R+H+11]=V.itemSize===4?s.w:1)}}d={count:u,texture:_,size:new je(b,w)},i.set(o,d),o.addEventListener("dispose",D)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(t,"morphTexture",a.morphTexture,n);else{let f=0;for(let v=0;v<l.length;v++)f+=l[v];let g=o.morphTargetsRelative?1:1-f;c.getUniforms().setValue(t,"morphTargetBaseInfluence",g),c.getUniforms().setValue(t,"morphTargetInfluences",l)}c.getUniforms().setValue(t,"morphTargetsTexture",d.texture,n),c.getUniforms().setValue(t,"morphTargetsTextureSize",d.size)}return{update:r}}function sT(t,e,n,i,s){let r=new WeakMap;function a(l){let h=s.render.frame,u=l.geometry,d=e.get(l,u);if(r.get(d)!==h&&(e.update(d),r.set(d,h)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),r.get(l)!==h&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,h))),l.isSkinnedMesh){let f=l.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return d}function o(){r=new WeakMap}function c(l){let h=l.target;h.removeEventListener("dispose",c),i.releaseStatesOfObject(h),n.remove(h.instanceMatrix),h.instanceColor!==null&&n.remove(h.instanceColor)}return{update:a,dispose:o}}function aT(t,e,n,i,s,r){let a=new hi(e,n,{type:t,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,c=null,l=null,h=new Dn;h.setAttribute("position",new qt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new qt([0,2,0,0,2,0],2));let u=new Sh({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(h,u),f=new ia(-1,1,1,-1,0,1),g=null,v=null,m=!1,p,M=null,A=[],b=!1;this.setSize=function(w,E){a.setSize(w,E),o!==null&&o.setSize(w,E),c!==null&&c.setSize(w,E);for(let _=0;_<A.length;_++){let S=A[_];S.setSize&&S.setSize(w,E)}},this.setEffects=function(w){A=w,b=A.length>0&&A[0].isRenderPass===!0;let E=a.width,_=a.height;A.length>0&&o===null&&(o=new hi(E,_,{type:Vn,depthBuffer:!1,stencilBuffer:!1}),c=new hi(E,_,{type:Vn,depthBuffer:!1,stencilBuffer:!1}));let S=s===!0&&A.some(D=>D.needsDepthTexture===!0);S!==(a.depthTexture!==null)&&(S===!0&&l===null&&(l=new Us(E,_),r===!0&&(l.format=Gs,l.type=ca)),a.dispose(),a.depthTexture=S?l:null,a.resolveDepthBuffer=S,a.storeMultisampledDepthBuffer=S);for(let D=0;D<A.length;D++){let I=A[D];I.setSize&&I.setSize(E,_),S&&I.needsDepthTexture===!0&&I.setDepthTexture&&I.setDepthTexture(l)}},this.begin=function(w,E){if(m||w.toneMapping===rs&&A.length===0)return!1;if(M=E,E!==null){let _=E.width,S=E.height;(a.width!==_||a.height!==S)&&this.setSize(_,S)}return b===!1&&w.setRenderTarget(a),p=w.toneMapping,w.toneMapping=rs,!0},this.hasRenderPass=function(){return b},this.end=function(w,E){w.toneMapping=p,m=!0;let _=a,S=o;for(let D=0;D<A.length;D++){let I=A[D];I.enabled!==!1&&(I.render(w,S,_,E),I.needsSwap!==!1&&(_=S,S=S===o?c:o))}if(g!==w.outputColorSpace||v!==w.toneMapping){g=w.outputColorSpace,v=w.toneMapping,u.defines={},et.getTransfer(g)===xt&&(u.defines.SRGB_TRANSFER="");let D=rT[v];D&&(u.defines[D]=""),u.needsUpdate=!0}u.uniforms.tDiffuse.value=_.texture,w.setRenderTarget(M),w.render(d,f),M=null,m=!1},this.isCompositing=function(){return m},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),h.dispose(),u.dispose()}}function To(t,e,n){let i=t[0];if(i<=0||i>0)return t;let s=e*n,r=j_[s];if(r===void 0&&(r=new Float32Array(s),j_[s]=r),e!==0){i.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=n,t[a].toArray(r,o)}return r}function on(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function cn(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function Mu(t,e){let n=Z_[e];n===void 0&&(n=new Int32Array(e),Z_[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function oT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function cT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2fv(this.addr,e),cn(n,e)}}function lT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(on(n,e))return;t.uniform3fv(this.addr,e),cn(n,e)}}function hT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4fv(this.addr,e),cn(n,e)}}function uT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),cn(n,e)}else{if(on(n,i))return;ex.set(i),t.uniformMatrix2fv(this.addr,!1,ex),cn(n,i)}}function dT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),cn(n,e)}else{if(on(n,i))return;Q_.set(i),t.uniformMatrix3fv(this.addr,!1,Q_),cn(n,i)}}function fT(t,e){let n=this.cache,i=e.elements;if(i===void 0){if(on(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),cn(n,e)}else{if(on(n,i))return;J_.set(i),t.uniformMatrix4fv(this.addr,!1,J_),cn(n,i)}}function pT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function mT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2iv(this.addr,e),cn(n,e)}}function gT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3iv(this.addr,e),cn(n,e)}}function _T(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4iv(this.addr,e),cn(n,e)}}function xT(t,e){let n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function vT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(on(n,e))return;t.uniform2uiv(this.addr,e),cn(n,e)}}function yT(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(on(n,e))return;t.uniform3uiv(this.addr,e),cn(n,e)}}function ST(t,e){let n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(on(n,e))return;t.uniform4uiv(this.addr,e),cn(n,e)}}function bu(t){return t.version===0&&(t.compareFunction=Zf,t.needsUpdate=!0),t}function MT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_2D_SHADOW?r=bu(xx):r=_x,n.setTexture2D(e||r,s)}function bT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture3D(e||Sx,s)}function TT(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s);let r;this.type===t.SAMPLER_CUBE_SHADOW?r=bu(vx):r=Mx,n.setTextureCube(e||r,s)}function ET(t,e,n){let i=this.cache,s=n.allocateTextureUnit();i[0]!==s&&(t.uniform1i(this.addr,s),i[0]=s),n.setTexture2DArray(e||yx,s)}function AT(t){switch(t){case 5126:return oT;case 35664:return cT;case 35665:return lT;case 35666:return hT;case 35674:return uT;case 35675:return dT;case 35676:return fT;case 5124:case 35670:return pT;case 35667:case 35671:return mT;case 35668:case 35672:return gT;case 35669:case 35673:return _T;case 5125:return xT;case 36294:return vT;case 36295:return yT;case 36296:return ST;case 35678:case 36198:case 36298:case 36306:case 35682:return MT;case 35679:case 36299:case 36307:return bT;case 35680:case 36300:case 36308:case 36293:return TT;case 36289:case 36303:case 36311:case 36292:return ET}}function wT(t,e){t.uniform1fv(this.addr,e)}function RT(t,e){let n=To(e,this.size,2);t.uniform2fv(this.addr,n)}function CT(t,e){let n=To(e,this.size,3);t.uniform3fv(this.addr,n)}function IT(t,e){let n=To(e,this.size,4);t.uniform4fv(this.addr,n)}function PT(t,e){let n=To(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function LT(t,e){let n=To(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function NT(t,e){let n=To(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function DT(t,e){t.uniform1iv(this.addr,e)}function UT(t,e){t.uniform2iv(this.addr,e)}function FT(t,e){t.uniform3iv(this.addr,e)}function OT(t,e){t.uniform4iv(this.addr,e)}function BT(t,e){t.uniform1uiv(this.addr,e)}function kT(t,e){t.uniform2uiv(this.addr,e)}function zT(t,e){t.uniform3uiv(this.addr,e)}function GT(t,e){t.uniform4uiv(this.addr,e)}function HT(t,e,n){let i=this.cache,s=e.length,r=Mu(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));let a;this.type===t.SAMPLER_2D_SHADOW?a=bu(xx):a=_x;for(let o=0;o!==s;++o)n.setTexture2D(e[o]||a,r[o])}function VT(t,e,n){let i=this.cache,s=e.length,r=Mu(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)n.setTexture3D(e[a]||Sx,r[a])}function WT(t,e,n){let i=this.cache,s=e.length,r=Mu(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));let a;this.type===t.SAMPLER_CUBE_SHADOW?a=bu(vx):a=Mx;for(let o=0;o!==s;++o)n.setTextureCube(e[o]||a,r[o])}function XT(t,e,n){let i=this.cache,s=e.length,r=Mu(n,s);on(i,r)||(t.uniform1iv(this.addr,r),cn(i,r));for(let a=0;a!==s;++a)n.setTexture2DArray(e[a]||yx,r[a])}function qT(t){switch(t){case 5126:return wT;case 35664:return RT;case 35665:return CT;case 35666:return IT;case 35674:return PT;case 35675:return LT;case 35676:return NT;case 5124:case 35670:return DT;case 35667:case 35671:return UT;case 35668:case 35672:return FT;case 35669:case 35673:return OT;case 5125:return BT;case 36294:return kT;case 36295:return zT;case 36296:return GT;case 35678:case 36198:case 36298:case 36306:case 35682:return HT;case 35679:case 36299:case 36307:return VT;case 35680:case 36300:case 36308:case 36293:return WT;case 36289:case 36303:case 36311:case 36292:return XT}}function tx(t,e){t.seq.push(e),t.map[e.id]=e}function $T(t,e,n){let i=t.name,s=i.length;for(lp.lastIndex=0;;){let r=lp.exec(i),a=lp.lastIndex,o=r[1],c=r[2]==="]",l=r[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===s){tx(n,l===void 0?new up(o,t,e):new dp(o,t,e));break}else{let u=n.map[o];u===void 0&&(u=new fp(o),tx(n,u)),n=u}}}function nx(t,e,n){let i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}function jT(t,e){let n=t.split(`
`),i=[],s=Math.max(e-6,0),r=Math.min(e+6,n.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===e?">":" "} ${o}: ${n[a]}`)}return i.join(`
`)}function ZT(t){et._getMatrix(ix,et.workingColorSpace,t);let e=`mat3( ${ix.elements.map(n=>n.toFixed(4))} )`;switch(et.getTransfer(t)){case gc:return[e,"LinearTransferOETF"];case xt:return[e,"sRGBTransferOETF"];default:return Ie("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sx(t,e,n){let i=t.getShaderParameter(e,t.COMPILE_STATUS),r=(t.getShaderInfoLog(e)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return n.toUpperCase()+`

`+r+`

`+jT(t.getShaderSource(e),o)}else return r}function JT(t,e){let n=ZT(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( ${n[0]} * value.rgb, value.a ) );`,"}"].join(`
`)}function eE(t,e){let n=QT[e];return n===void 0?(Ie("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function tE(){et.getLuminanceCoefficients(yu);let t=yu.x.toFixed(4),e=yu.y.toFixed(4),n=yu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function nE(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Jc).join(`
`)}function iE(t){let e=[];for(let n in t){let i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function sE(t,e){let n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=t.getActiveAttrib(e,s),a=r.name,o=1;r.type===t.FLOAT_MAT2&&(o=2),r.type===t.FLOAT_MAT3&&(o=3),r.type===t.FLOAT_MAT4&&(o=4),n[a]={type:r.type,location:t.getAttribLocation(e,a),locationSize:o}}return n}function Jc(t){return t!==""}function rx(t,e){let n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows).replace(/NUM_LIGHT_PROBE_GRIDS/g,e.numLightProbeGrids)}function ax(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}function pp(t){return t.replace(rE,aE)}function aE(t,e){let n=Qe[e];if(n===void 0)throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">");return pp(n)}function ox(t){return t.replace(oE,cE)}function cE(t,e,n,i){let s="";for(let r=parseInt(e);r<parseInt(n);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function cx(t){let e=`precision ${t.precision} float;
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
#define LOW_PRECISION`),e}function hE(t){return lE[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function dE(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":uE[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}function pE(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":fE[t.combine]||"ENVMAP_BLENDING_NONE"}function mE(t,e,n,i){let s=t.getContext(),r=n.defines,a=n.vertexShader,o=n.fragmentShader,c=hE(n),l=n.envMapPMREM===!0?"ENVMAP_TYPE_PMREM":"ENVMAP_TYPE_CUBE",h=dE(n),u=pE(n),d=nE(n),f=iE(r),g=s.createProgram(),v,m,p=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(v=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Jc).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f].filter(Jc).join(`
`),m.length>0&&(m+=`
`)):(v=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+h:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.diffuseRoughnessMapUv?"#define DIFFUSE_ROUGHNESSMAP_UV "+n.diffuseRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexNormals?"#define HAS_NORMAL":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Jc).join(`
`),m=[cx(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,f,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+l:"",n.envMap?"#define "+h:"",n.envMap?"#define "+u:"",n.envMapPMREM?"#define ENVMAP_MAX_LOD "+n.envMapMaxLod+".0":"",n.envMapPMREM?"#define ENVMAP_SIZE "+n.envMapSize+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.diffuseRoughness?"#define USE_DIFFUSE_ROUGHNESS":"",n.diffuseRoughnessMap?"#define USE_DIFFUSE_ROUGHNESSMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.retroreflection?"#define USE_RETROREFLECTION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas||n.batchingColor?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+c:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==rs?"#define TONE_MAPPING":"",n.toneMapping!==rs?Qe.tonemapping_pars_fragment:"",n.toneMapping!==rs?eE("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,JT("linearToOutputTexel",n.outputColorSpace),tE(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(Jc).join(`
`)),a=pp(a),a=rx(a,n),a=ax(a,n),o=pp(o),o=rx(o,n),o=ax(o,n),a=ox(a),o=ox(o),n.isRawShaderMaterial!==!0&&(p=`#version 300 es
`,v=[d,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",n.glslVersion===Qf?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Qf?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let M=p+v+a,A=p+m+o,b=nx(s,s.VERTEX_SHADER,M),w=nx(s,s.FRAGMENT_SHADER,A);s.attachShader(g,b),s.attachShader(g,w),n.index0AttributeName!==void 0?s.bindAttribLocation(g,0,n.index0AttributeName):n.hasPositionAttribute===!0&&s.bindAttribLocation(g,0,"position"),s.linkProgram(g);function E(I){if(t.debug.checkShaderErrors){let N=s.getProgramInfoLog(g)||"",B=s.getShaderInfoLog(b)||"",V=s.getShaderInfoLog(w)||"",R=N.trim(),G=B.trim(),H=V.trim(),W=!0,te=!0;if(s.getProgramParameter(g,s.LINK_STATUS)===!1)if(W=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(s,g,b,w);else{let q=sx(s,b,"vertex"),J=sx(s,w,"fragment");Ve("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(g,s.VALIDATE_STATUS)+`

Material Name: `+I.name+`
Material Type: `+I.type+`

Program Info Log: `+R+`
`+q+`
`+J)}else R!==""?Ie("WebGLProgram: Program Info Log:",R):(G===""||H==="")&&(te=!1);te&&(I.diagnostics={runnable:W,programLog:R,vertexShader:{log:G,prefix:v},fragmentShader:{log:H,prefix:m}})}s.deleteShader(b),s.deleteShader(w),_=new Mo(s,g),S=sE(s,g)}let _;this.getUniforms=function(){return _===void 0&&E(this),_};let S;this.getAttributes=function(){return S===void 0&&E(this),S};let D=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return D===!1&&(D=s.getProgramParameter(g,YT)),D},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(g),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=KT++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=b,this.fragmentShader=w,this}function _E(t){return t===br||t===$c||t===Yc}function xE(t,e,n,i,s,r){let a=new io,o=new mp,c=new Set,l=[],h=new Map,u=i.logarithmicDepthBuffer,d={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function f(_){return c.add(_),_===0?"uv":`uv${_}`}function g(_,S,D,I,N,B){let V=I.fog,R=N.geometry,G=_.isMeshStandardMaterial||_.isMeshLambertMaterial||_.isMeshPhongMaterial?I.environment:null,H=_.isMeshStandardMaterial||_.isMeshLambertMaterial&&!_.envMap||_.isMeshPhongMaterial&&!_.envMap,W=e.get(_.envMap||G,H),te=d[_.type],q=i.precision;_.precision!==null&&(q=i.getMaxPrecision(_.precision),q!==_.precision&&Ie("WebGLProgram.getParameters:",_.precision,"not supported, using",q,"instead."));let J=R.morphAttributes.position||R.morphAttributes.normal||R.morphAttributes.color,ee=J!==void 0?J.length:0,ye=0;R.morphAttributes.position!==void 0&&(ye=1),R.morphAttributes.normal!==void 0&&(ye=2),R.morphAttributes.color!==void 0&&(ye=3);let Fe,K,ge,Te;if(te){let pe=cs[te];Fe=pe.vertexShader,K=pe.fragmentShader}else{Fe=_.vertexShader,K=_.fragmentShader;let pe=o.getVertexShaderStage(_),yt=o.getFragmentShaderStage(_);o.update(_,pe,yt),ge=pe.id,Te=yt.id}let Be=t.getRenderTarget(),xe=t.state.buffers.depth.getReversed(),Ye=N.isInstancedMesh===!0,jt=N.isBatchedMesh===!0,He=!!_.map,vt=!!_.matcap,bt=!!W,st=bt&&W.isPMREMTexture===!0,Sn=!!_.aoMap,nn=!!_.lightMap,Kn=!!_.bumpMap&&_.wireframe===!1,Ot=!!_.normalMap,ji=!!_.displacementMap,mn=!!_.emissiveMap,yi=!!_.metalnessMap,Si=!!_.roughnessMap,Mi=_.anisotropy>0,U=_.clearcoat>0,bi=_.diffuseRoughness>0,Nt=_.dispersion>0,Dt=_.retroreflectivity>0,fe=_.iridescence>0,sn=_.sheen>0,ke=_.transmission>0,Xe=Mi&&!!_.anisotropyMap,T=U&&!!_.clearcoatMap,x=U&&!!_.clearcoatNormalMap,k=U&&!!_.clearcoatRoughnessMap,ne=bi&&!!_.diffuseRoughnessMap,Q=fe&&!!_.iridescenceMap,ae=fe&&!!_.iridescenceThicknessMap,ue=sn&&!!_.sheenColorMap,Y=sn&&!!_.sheenRoughnessMap,j=!!_.specularMap,ce=!!_.specularColorMap,C=!!_.specularIntensityMap,Z=ke&&!!_.transmissionMap,$=ke&&!!_.thicknessMap,le=!!_.gradientMap,se=!!_.alphaMap,oe=_.alphaTest>0,Pe=!!_.alphaHash,Je=!!_.extensions,ie=rs;_.toneMapped&&(Be===null||Be.isXRRenderTarget===!0)&&(ie=t.toneMapping);let Oe=st?W.isCompressedCubeTexture?W.image[0].mipmaps:W.mipmaps:null,Ze={shaderID:te,shaderType:_.type,shaderName:_.name,vertexShader:Fe,fragmentShader:K,defines:_.defines,customVertexShaderID:ge,customFragmentShaderID:Te,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:q,batching:jt,batchingColor:jt&&N._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&N.instanceColor!==null,instancingMorph:Ye&&N.morphTexture!==null,outputColorSpace:Be===null?t.outputColorSpace:Be.isXRRenderTarget===!0?Be.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!_.alphaToCoverage,map:He,matcap:vt,envMap:bt,envMapMode:bt&&W.mapping,envMapPMREM:st,envMapMaxLod:st?Oe.length-1:null,envMapSize:st?Oe[0].width:null,aoMap:Sn,lightMap:nn,bumpMap:Kn,normalMap:Ot,displacementMap:ji,emissiveMap:mn,normalMapObjectSpace:Ot&&_.normalMapType===P_,normalMapTangentSpace:Ot&&_.normalMapType===jc,packedNormalMap:Ot&&_.normalMapType===jc&&_E(_.normalMap.format),metalnessMap:yi,roughnessMap:Si,anisotropy:Mi,anisotropyMap:Xe,clearcoat:U,clearcoatMap:T,clearcoatNormalMap:x,clearcoatRoughnessMap:k,diffuseRoughness:bi,diffuseRoughnessMap:ne,dispersion:Nt,retroreflection:Dt,iridescence:fe,iridescenceMap:Q,iridescenceThicknessMap:ae,sheen:sn,sheenColorMap:ue,sheenRoughnessMap:Y,specularMap:j,specularColorMap:ce,specularIntensityMap:C,transmission:ke,transmissionMap:Z,thicknessMap:$,gradientMap:le,opaque:_.transparent===!1&&_.blending===mo&&_.alphaToCoverage===!1,alphaMap:se,alphaTest:oe,alphaHash:Pe,combine:_.combine,mapUv:He&&f(_.map.channel),aoMapUv:Sn&&f(_.aoMap.channel),lightMapUv:nn&&f(_.lightMap.channel),bumpMapUv:Kn&&f(_.bumpMap.channel),normalMapUv:Ot&&f(_.normalMap.channel),displacementMapUv:ji&&f(_.displacementMap.channel),emissiveMapUv:mn&&f(_.emissiveMap.channel),metalnessMapUv:yi&&f(_.metalnessMap.channel),roughnessMapUv:Si&&f(_.roughnessMap.channel),anisotropyMapUv:Xe&&f(_.anisotropyMap.channel),clearcoatMapUv:T&&f(_.clearcoatMap.channel),clearcoatNormalMapUv:x&&f(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:k&&f(_.clearcoatRoughnessMap.channel),diffuseRoughnessMapUv:ne&&f(_.diffuseRoughnessMap.channel),iridescenceMapUv:Q&&f(_.iridescenceMap.channel),iridescenceThicknessMapUv:ae&&f(_.iridescenceThicknessMap.channel),sheenColorMapUv:ue&&f(_.sheenColorMap.channel),sheenRoughnessMapUv:Y&&f(_.sheenRoughnessMap.channel),specularMapUv:j&&f(_.specularMap.channel),specularColorMapUv:ce&&f(_.specularColorMap.channel),specularIntensityMapUv:C&&f(_.specularIntensityMap.channel),transmissionMapUv:Z&&f(_.transmissionMap.channel),thicknessMapUv:$&&f(_.thicknessMap.channel),alphaMapUv:se&&f(_.alphaMap.channel),vertexTangents:!!R.attributes.tangent&&(Ot||Mi),vertexNormals:!!R.attributes.normal,vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!R.attributes.color&&R.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!R.attributes.uv&&(He||se),fog:!!V,useFog:_.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:_.wireframe===!1&&(_.flatShading===!0||R.attributes.normal===void 0&&Ot===!1&&(_.isMeshLambertMaterial||_.isMeshPhongMaterial||_.isMeshStandardMaterial||_.isMeshPhysicalMaterial)),sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:xe,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:R.attributes.position!==void 0,morphTargets:R.morphAttributes.position!==void 0,morphNormals:R.morphAttributes.normal!==void 0,morphColors:R.morphAttributes.color!==void 0,morphTargetsCount:ee,morphTextureStride:ye,numSunLights:S.sun.length,numDirLights:S.directional.length,numPointLights:S.point.length,numSpotLights:S.spot.length,numSpotLightMaps:S.spotLightMap.length,numRectAreaLights:S.rectArea.length,numHemiLights:S.hemi.length,numSunLightShadows:S.sunShadowMap.length,numDirLightShadows:S.directionalShadowMap.length,numPointLightShadows:S.pointShadowMap.length,numSpotLightShadows:S.spotShadowMap.length,numSpotLightShadowsWithMaps:S.numSpotLightShadowsWithMaps,numLightProbes:S.numLightProbes,numLightProbeGrids:B.filter(pe=>pe.texture!==null).length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:_.dithering,shadowMapEnabled:t.shadowMap.enabled&&D.length>0,shadowMapType:t.shadowMap.type,toneMapping:ie,decodeVideoTexture:He&&_.map.isVideoTexture===!0&&et.getTransfer(_.map.colorSpace)===xt,decodeVideoTextureEmissive:mn&&_.emissiveMap.isVideoTexture===!0&&et.getTransfer(_.emissiveMap.colorSpace)===xt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===Hn,flipSided:_.side===En,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Je&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Je&&_.extensions.multiDraw===!0||jt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return Ze.vertexUv1s=c.has(1),Ze.vertexUv2s=c.has(2),Ze.vertexUv3s=c.has(3),c.clear(),Ze}function v(_){let S=[];if(_.shaderID?S.push(_.shaderID):(S.push(_.customVertexShaderID),S.push(_.customFragmentShaderID)),_.defines!==void 0)for(let D in _.defines)S.push(D),S.push(_.defines[D]);return _.isRawShaderMaterial===!1&&(m(S,_),p(S,_),S.push(t.outputColorSpace)),S.push(_.customProgramCacheKey),S.join()}function m(_,S){_.push(S.precision),_.push(S.outputColorSpace),_.push(S.envMapMode),_.push(S.envMapPMREM),_.push(S.envMapMaxLod),_.push(S.envMapSize),_.push(S.mapUv),_.push(S.alphaMapUv),_.push(S.lightMapUv),_.push(S.aoMapUv),_.push(S.bumpMapUv),_.push(S.normalMapUv),_.push(S.displacementMapUv),_.push(S.emissiveMapUv),_.push(S.metalnessMapUv),_.push(S.roughnessMapUv),_.push(S.anisotropyMapUv),_.push(S.clearcoatMapUv),_.push(S.clearcoatNormalMapUv),_.push(S.clearcoatRoughnessMapUv),_.push(S.diffuseRoughnessMapUv),_.push(S.iridescenceMapUv),_.push(S.iridescenceThicknessMapUv),_.push(S.sheenColorMapUv),_.push(S.sheenRoughnessMapUv),_.push(S.specularMapUv),_.push(S.specularColorMapUv),_.push(S.specularIntensityMapUv),_.push(S.transmissionMapUv),_.push(S.thicknessMapUv),_.push(S.combine),_.push(S.fogExp2),_.push(S.sizeAttenuation),_.push(S.morphTargetsCount),_.push(S.numSunLights),_.push(S.numDirLights),_.push(S.numPointLights),_.push(S.numSpotLights),_.push(S.numSpotLightMaps),_.push(S.numHemiLights),_.push(S.numRectAreaLights),_.push(S.numSunLightShadows),_.push(S.numDirLightShadows),_.push(S.numPointLightShadows),_.push(S.numSpotLightShadows),_.push(S.numSpotLightShadowsWithMaps),_.push(S.numLightProbes),_.push(S.numLightProbeGrids),_.push(S.shadowMapType),_.push(S.toneMapping),_.push(S.numClippingPlanes),_.push(S.numClipIntersection),_.push(S.depthPacking)}function p(_,S){a.disableAll(),S.instancing&&a.enable(0),S.instancingColor&&a.enable(1),S.instancingMorph&&a.enable(2),S.matcap&&a.enable(3),S.envMap&&a.enable(4),S.normalMapObjectSpace&&a.enable(5),S.normalMapTangentSpace&&a.enable(6),S.clearcoat&&a.enable(7),S.iridescence&&a.enable(8),S.alphaTest&&a.enable(9),S.vertexColors&&a.enable(10),S.vertexAlphas&&a.enable(11),S.vertexUv1s&&a.enable(12),S.vertexUv2s&&a.enable(13),S.vertexUv3s&&a.enable(14),S.vertexTangents&&a.enable(15),S.anisotropy&&a.enable(16),S.alphaHash&&a.enable(17),S.batching&&a.enable(18),S.dispersion&&a.enable(19),S.retroreflection&&a.enable(24),S.diffuseRoughness&&a.enable(25),S.batchingColor&&a.enable(20),S.gradientMap&&a.enable(21),S.packedNormalMap&&a.enable(22),S.vertexNormals&&a.enable(23),_.push(a.mask),a.disableAll(),S.fog&&a.enable(0),S.useFog&&a.enable(1),S.flatShading&&a.enable(2),S.logarithmicDepthBuffer&&a.enable(3),S.reversedDepthBuffer&&a.enable(4),S.skinning&&a.enable(5),S.morphTargets&&a.enable(6),S.morphNormals&&a.enable(7),S.morphColors&&a.enable(8),S.premultipliedAlpha&&a.enable(9),S.shadowMapEnabled&&a.enable(10),S.doubleSided&&a.enable(11),S.flipSided&&a.enable(12),S.useDepthPacking&&a.enable(13),S.dithering&&a.enable(14),S.transmission&&a.enable(15),S.sheen&&a.enable(16),S.opaque&&a.enable(17),S.pointsUvs&&a.enable(18),S.decodeVideoTexture&&a.enable(19),S.decodeVideoTextureEmissive&&a.enable(20),S.alphaToCoverage&&a.enable(21),S.numLightProbeGrids>0&&a.enable(22),S.hasPositionAttribute&&a.enable(23),_.push(a.mask)}function M(_){let S=d[_.type],D;if(S){let I=cs[S];D=V_.clone(I.uniforms)}else D=_.uniforms;return D}function A(_,S){let D=h.get(S);return D!==void 0?++D.usedTimes:(D=new mE(t,S,_,s),l.push(D),h.set(S,D)),D}function b(_){if(--_.usedTimes===0){let S=l.indexOf(_);l[S]=l[l.length-1],l.pop(),h.delete(_.cacheKey),_.destroy()}}function w(_){o.remove(_)}function E(){o.dispose()}return{getParameters:g,getProgramCacheKey:v,getUniforms:M,acquireProgram:A,releaseProgram:b,releaseShaderCache:w,programs:l,dispose:E}}function vE(){let t=new WeakMap;function e(a){return t.has(a)}function n(a){let o=t.get(a);return o===void 0&&(o={},t.set(a,o)),o}function i(a){t.delete(a)}function s(a,o,c){t.get(a)[o]=c}function r(){t=new WeakMap}return{has:e,get:n,remove:i,update:s,dispose:r}}function yE(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.materialVariant!==e.materialVariant?t.materialVariant-e.materialVariant:t.z!==e.z?t.z-e.z:t.id-e.id}function lx(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function hx(){let t=[],e=0,n=[],i=[],s=[];function r(){e=0,n.length=0,i.length=0,s.length=0}function a(d){let f=0;return d.isInstancedMesh&&(f+=2),d.isSkinnedMesh&&(f+=1),f}function o(d,f,g,v,m,p){let M=t[e];return M===void 0?(M={id:d.id,object:d,geometry:f,material:g,materialVariant:a(d),groupOrder:v,renderOrder:d.renderOrder,z:m,group:p},t[e]=M):(M.id=d.id,M.object=d,M.geometry=f,M.material=g,M.materialVariant=a(d),M.groupOrder=v,M.renderOrder=d.renderOrder,M.z=m,M.group=p),e++,M}function c(d,f,g,v,m,p,M){M.reversedDepth===!0&&(m=-m);let A=o(d,f,g,v,m,p);g.transmission>0?i.push(A):g.transparent===!0?s.push(A):n.push(A)}function l(d,f,g,v,m,p){let M=o(d,f,g,v,m,p);g.transmission>0?i.unshift(M):g.transparent===!0?s.unshift(M):n.unshift(M)}function h(d,f){n.length>1&&n.sort(d||yE),i.length>1&&i.sort(f||lx),s.length>1&&s.sort(f||lx)}function u(){for(let d=e,f=t.length;d<f;d++){let g=t[d];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:n,transmissive:i,transparent:s,init:r,push:c,unshift:l,finish:u,sort:h}}function SE(){let t=new WeakMap;function e(i,s){let r=t.get(i),a;return r===void 0?(a=new hx,t.set(i,[a])):s>=r.length?(a=new hx,r.push(a)):a=r[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}function ME(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={direction:new F,color:new ze};break;case"SpotLight":n={position:new F,direction:new F,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new F,color:new ze,distance:0,decay:0};break;case"HemisphereLight":n={direction:new F,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":n={color:new ze,position:new F,halfWidth:new F,halfHeight:new F};break}return t[e.id]=n,n}}}function bE(){let t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"SunLight":case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new je,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}function EE(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function AE(t){let e=new ME,n=bE(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)i.probe.push(new F);let s=new F,r=new $e,a=new $e;function o(l){let h=0,u=0,d=0;for(let B=0;B<9;B++)i.probe[B].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,M=0,A=0,b=0,w=0,E=0,_=0,S=0,D=0,I=0;l.sort(EE);for(let B=0,V=l.length;B<V;B++){let R=l[B],G=R.color,H=R.intensity,W=R.distance,te=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===br?te=R.shadow.map.texture:te=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=G.r*H,u+=G.g*H,d+=G.b*H;else if(R.isLightProbe){for(let q=0;q<9;q++)i.probe[q].addScaledVector(R.sh.coefficients[q],H);I++}else if(R.isSunLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,ee=n.get(R);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize.copy(J.mapSize).multiply(J.getFrameExtents()),i.sunShadow[g]=ee,i.sunShadowMap[g]=te;let ye=J.getViewportCount();for(let Fe=0;Fe<ye;Fe++)i.sunShadowMatrix[v+Fe]=J.getMatrix(Fe),i.sunShadowCascade[v+Fe]=J._cascadeData[Fe];v+=ye,g++}i.sun[f]=q,f++}else if(R.isDirectionalLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let J=R.shadow,ee=n.get(R);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.directionalShadow[m]=ee,i.directionalShadowMap[m]=te,i.directionalShadowMatrix[m]=R.shadow.matrix,w++}i.directional[m]=q,m++}else if(R.isSpotLight){let q=e.get(R);q.position.setFromMatrixPosition(R.matrixWorld),q.color.copy(G).multiplyScalar(H),q.distance=W,q.coneCos=Math.cos(R.angle),q.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),q.decay=R.decay,i.spot[M]=q;let J=R.shadow;if(R.map&&(i.spotLightMap[S]=R.map,S++,J.updateMatrices(R),R.castShadow&&D++),i.spotLightMatrix[M]=J.matrix,R.castShadow){let ee=n.get(R);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,i.spotShadow[M]=ee,i.spotShadowMap[M]=te,_++}M++}else if(R.isRectAreaLight){let q=e.get(R);q.color.copy(G).multiplyScalar(H),q.halfWidth.set(R.width*.5,0,0),q.halfHeight.set(0,R.height*.5,0),i.rectArea[A]=q,A++}else if(R.isPointLight){let q=e.get(R);if(q.color.copy(R.color).multiplyScalar(R.intensity),q.distance=R.distance,q.decay=R.decay,R.castShadow){let J=R.shadow,ee=n.get(R);ee.shadowIntensity=J.intensity,ee.shadowBias=J.bias,ee.shadowNormalBias=J.normalBias,ee.shadowRadius=J.radius,ee.shadowMapSize=J.mapSize,ee.shadowCameraNear=J.camera.near,ee.shadowCameraFar=J.camera.far,i.pointShadow[p]=ee,i.pointShadowMap[p]=te,i.pointShadowMatrix[p]=R.shadow.matrix,E++}i.point[p]=q,p++}else if(R.isHemisphereLight){let q=e.get(R);q.skyColor.copy(R.color).multiplyScalar(H),q.groundColor.copy(R.groundColor).multiplyScalar(H),i.hemi[b]=q,b++}}A>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=u,i.ambient[2]=d;let N=i.hash;(N.sunLength!==f||N.directionalLength!==m||N.pointLength!==p||N.spotLength!==M||N.rectAreaLength!==A||N.hemiLength!==b||N.numSunShadows!==g||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==_||N.numSpotMaps!==S||N.numLightProbes!==I)&&(i.sun.length=f,i.directional.length=m,i.spot.length=M,i.rectArea.length=A,i.point.length=p,i.hemi.length=b,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.directionalShadowMatrix.length=w,i.pointShadow.length=E,i.pointShadowMap.length=E,i.pointShadowMatrix.length=E,i.spotShadow.length=_,i.spotShadowMap.length=_,i.spotLightMatrix.length=_+S-D,i.spotLightMap.length=S,i.numSpotLightShadowsWithMaps=D,i.numLightProbes=I,N.sunLength=f,N.directionalLength=m,N.pointLength=p,N.spotLength=M,N.rectAreaLength=A,N.hemiLength=b,N.numSunShadows=g,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=_,N.numSpotMaps=S,N.numLightProbes=I,i.version=TE++)}function c(l,h){let u=0,d=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let M=0,A=l.length;M<A;M++){let b=l[M];if(b.isSunLight){let w=i.sun[u];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),u++}else if(b.isDirectionalLight){let w=i.directional[d];w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),d++}else if(b.isSpotLight){let w=i.spot[g];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),w.direction.setFromMatrixPosition(b.matrixWorld),s.setFromMatrixPosition(b.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(p),g++}else if(b.isRectAreaLight){let w=i.rectArea[v];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),a.identity(),r.copy(b.matrixWorld),r.premultiply(p),a.extractRotation(r),w.halfWidth.set(b.width*.5,0,0),w.halfHeight.set(0,b.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),v++}else if(b.isPointLight){let w=i.point[f];w.position.setFromMatrixPosition(b.matrixWorld),w.position.applyMatrix4(p),f++}else if(b.isHemisphereLight){let w=i.hemi[m];w.direction.setFromMatrixPosition(b.matrixWorld),w.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:i}}function ux(t){let e=new AE(t),n=[],i=[],s=[];function r(u){h.camera=u,n.length=0,i.length=0,s.length=0}function a(u){u.isLightProbeGrid?s.push(u):n.push(u)}function o(u){i.push(u)}function c(){e.setup(n),s.sort((u,d)=>u.priority-d.priority||u.id-d.id)}function l(u){e.setupView(n,u)}let h={lightsArray:n,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:h,setupLights:c,setupLightsView:l,pushLight:a,pushShadow:o}}function wE(t){let e=new WeakMap;function n(s,r=0){let a=e.get(s),o;return a===void 0?(o=new ux(t),e.set(s,[o])):r>=a.length?(o=new ux(t),a.push(o)):o=a[r],o}function i(){e=new WeakMap}return{get:n,dispose:i}}function LE(t,e,n){let i=new vr,s=new je,r=new je,a=new St,o=new Mh,c=new bh,l={},h=n.maxTextureSize,u={[ss]:En,[En]:ss,[Hn]:Hn},d=new ts({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new je},radius:{value:4}},vertexShader:RE,fragmentShader:CE}),f=d.clone();f.defines.HORIZONTAL_PASS=1;let g=new Dn;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new At(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gc;let p=this.type;this.render=function(E,_,S){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||E.length===0)return;this.type===o_&&(Ie("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gc);let D=t.getRenderTarget(),I=t.getActiveCubeFace(),N=t.getActiveMipmapLevel(),B=t.state;B.setBlending(sa),B.buffers.depth.getReversed()===!0?B.buffers.color.setClear(0,0,0,0):B.buffers.color.setClear(1,1,1,1),B.buffers.depth.setTest(!0),B.setScissorTest(!1);let V=p!==this.type;V&&_.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(G=>G.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,G=E.length;R<G;R++){let H=E[R],W=H.shadow;if(W===void 0){Ie("WebGLShadowMap:",H,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;s.copy(W.mapSize);let te=W.getFrameExtents();s.multiply(te),r.copy(W.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/te.x),s.x=r.x*te.x,W.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/te.y),s.y=r.y*te.y,W.mapSize.y=r.y));let q=t.state.buffers.depth.getReversed();if(W.camera._reversedDepth=q,W.map===null||V===!0){if(W.map!==null&&(W.map.depthTexture!==null&&(W.map.depthTexture.dispose(),W.map.depthTexture=null),W.map.dispose()),this.type===po){if(H.isPointLight){Ie("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}W.map=new hi(s.x,s.y,{format:br,type:Vn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1}),W.map.texture.name=H.name+".shadowMap",W.map.depthTexture=new Us(s.x,s.y,Un),W.map.depthTexture.name=H.name+".shadowMapDepth",W.map.depthTexture.format=Ns,W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$t,W.map.depthTexture.magFilter=$t}else H.isPointLight?(W.map=new Qc(s.x),W.map.depthTexture=new Rc(s.x,Hi)):(W.map=new hi(s.x,s.y),W.map.depthTexture=new Us(s.x,s.y,Hi)),W.map.depthTexture.name=H.name+".shadowMap",W.map.depthTexture.format=Ns,this.type===Gc?(W.map.depthTexture.compareFunction=q?jf:Kf,W.map.depthTexture.minFilter=Ct,W.map.depthTexture.magFilter=Ct):(W.map.depthTexture.compareFunction=null,W.map.depthTexture.minFilter=$t,W.map.depthTexture.magFilter=$t);W.camera.updateProjectionMatrix()}W.map.isWebGLCubeRenderTarget!==!0&&(W.map.width!==s.x||W.map.height!==s.y)&&W.map.setSize(s.x,s.y);let J=W.map.isWebGLCubeRenderTarget?6:W.getViewportCount();H.isPointLight!==!0&&W.updateMatrices(H,S);let ee=(W.camera.layers.mask&4294967294)!==0?W.camera.layers:S.layers;for(let ye=0;ye<J;ye++){let Fe=W.getCamera(ye);if(H.isPointLight){let K=W.camera,ge=W.matrix,Te=H.distance||K.far;Te!==K.far&&(K.far=Te,K.updateProjectionMatrix()),Zc.setFromMatrixPosition(H.matrixWorld),K.position.copy(Zc),hp.copy(K.position),hp.add(IE[ye]),K.up.copy(PE[ye]),K.lookAt(hp),K.updateMatrixWorld(),ge.makeTranslation(-Zc.x,-Zc.y,-Zc.z),dx.multiplyMatrices(K.projectionMatrix,K.matrixWorldInverse),W._frustum.setFromProjectionMatrix(dx,K.coordinateSystem,K.reversedDepth)}if(W.map.isWebGLCubeRenderTarget)t.setRenderTarget(W.map,ye),t.clear();else{ye===0&&(t.setRenderTarget(W.map),t.clear());let K=W.getViewport(ye);a.set(r.x*K.x,r.y*K.y,r.x*K.z,r.y*K.w),B.viewport(a)}i=W.getFrustum(ye),b(_,S,Fe,H,ee,this.type)}W.isPointLightShadow!==!0&&this.type===po&&M(W,S),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(D,I,N)};function M(E,_){let S=e.update(v);d.defines.VSM_SAMPLES!==E.blurSamples&&(d.defines.VSM_SAMPLES=E.blurSamples,f.defines.VSM_SAMPLES=E.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),E.mapPass===null?E.mapPass=new hi(s.x,s.y,{format:br,type:Vn}):(E.mapPass.width!==E.map.width||E.mapPass.height!==E.map.height)&&E.mapPass.setSize(E.map.width,E.map.height),d.uniforms.shadow_pass.value=E.map.depthTexture,d.uniforms.resolution.value.set(E.map.width,E.map.height),d.uniforms.radius.value=E.radius,t.setRenderTarget(E.mapPass),t.clear(),t.renderBufferDirect(_,null,S,d,v,null),f.uniforms.shadow_pass.value=E.mapPass.texture,f.uniforms.resolution.value.set(E.map.width,E.map.height),f.uniforms.radius.value=E.radius,t.setRenderTarget(E.map),t.clear(),t.renderBufferDirect(_,null,S,f,v,null)}function A(E,_,S,D){let I=null,N=S.isPointLight===!0?E.customDistanceMaterial:E.customDepthMaterial;if(N!==void 0)I=N;else if(I=S.isPointLight===!0?c:o,t.localClippingEnabled&&_.clipShadows===!0&&Array.isArray(_.clippingPlanes)&&_.clippingPlanes.length!==0||_.displacementMap&&_.displacementScale!==0||_.alphaMap&&_.alphaTest>0||_.map&&_.alphaTest>0||_.alphaToCoverage===!0){let B=I.uuid,V=_.uuid,R=l[B];R===void 0&&(R={},l[B]=R);let G=R[V];G===void 0&&(G=I.clone(),R[V]=G,_.addEventListener("dispose",w)),I=G}if(I.visible=_.visible,I.wireframe=_.wireframe,D===po?I.side=_.shadowSide!==null?_.shadowSide:_.side:I.side=_.shadowSide!==null?_.shadowSide:u[_.side],I.alphaMap=_.alphaMap,I.alphaTest=_.alphaToCoverage===!0?.5:_.alphaTest,I.map=_.map,I.clipShadows=_.clipShadows,I.clippingPlanes=_.clippingPlanes,I.clipIntersection=_.clipIntersection,I.displacementMap=_.displacementMap,I.displacementScale=_.displacementScale,I.displacementBias=_.displacementBias,I.wireframeLinewidth=_.wireframeLinewidth,I.linewidth=_.linewidth,S.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let B=t.properties.get(I);B.light=S}return I}function b(E,_,S,D,I,N){if(E.visible===!1)return;if(E.layers.test(I)&&(E.isMesh||E.isLine||E.isPoints)&&(E.castShadow||E.receiveShadow&&N===po)&&(!E.frustumCulled||E.intersectsFrustum(i))){E.modelViewMatrix.multiplyMatrices(S.matrixWorldInverse,E.matrixWorld);let R=e.update(E),G=E.material;if(Array.isArray(G)){let H=R.groups;for(let W=0,te=H.length;W<te;W++){let q=H[W],J=G[q.materialIndex];if(J&&J.visible){let ee=A(E,J,D,N);E.onBeforeShadow(t,E,_,S,R,ee,q),t.renderBufferDirect(S,null,R,ee,E,q),E.onAfterShadow(t,E,_,S,R,ee,q)}}}else if(G.visible){let H=A(E,G,D,N);E.onBeforeShadow(t,E,_,S,R,H,null),t.renderBufferDirect(S,null,R,H,E,null),E.onAfterShadow(t,E,_,S,R,H,null)}}let V=E.children;for(let R=0,G=V.length;R<G;R++)b(V[R],_,S,D,I,N)}function w(E){E.target.removeEventListener("dispose",w);for(let S in l){let D=l[S],I=E.target.uuid;I in D&&(D[I].dispose(),delete D[I])}}}function NE(t,e){function n(){let C=!1,Z=new St,$=null,le=new St(0,0,0,0);return{setMask:function(se){$!==se&&!C&&(t.colorMask(se,se,se,se),$=se)},setLocked:function(se){C=se},setClear:function(se,oe,Pe,Je,ie){ie===!0&&(se*=Je,oe*=Je,Pe*=Je),Z.set(se,oe,Pe,Je),le.equals(Z)===!1&&(t.clearColor(se,oe,Pe,Je),le.copy(Z))},reset:function(){C=!1,$=null,le.set(-1,0,0,0)}}}function i(){let C=!1,Z=!1,$=null,le=null,se=null;return{setReversed:function(oe){if(Z!==oe){let Pe=e.get("EXT_clip_control");oe?Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.ZERO_TO_ONE_EXT):Pe.clipControlEXT(Pe.LOWER_LEFT_EXT,Pe.NEGATIVE_ONE_TO_ONE_EXT),Z=oe;let Je=se;se=null,this.setClear(Je)}},getReversed:function(){return Z},setTest:function(oe){oe?xe(t.DEPTH_TEST):Ye(t.DEPTH_TEST)},setMask:function(oe){$!==oe&&!C&&(t.depthMask(oe),$=oe)},setFunc:function(oe){if(Z&&(oe=G_[oe]),le!==oe){switch(oe){case ch:t.depthFunc(t.NEVER);break;case lh:t.depthFunc(t.ALWAYS);break;case hh:t.depthFunc(t.LESS);break;case Za:t.depthFunc(t.LEQUAL);break;case uh:t.depthFunc(t.EQUAL);break;case dh:t.depthFunc(t.GEQUAL);break;case fh:t.depthFunc(t.GREATER);break;case ph:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}le=oe}},setLocked:function(oe){C=oe},setClear:function(oe){se!==oe&&(se=oe,Z&&(oe=1-oe),t.clearDepth(oe))},reset:function(){C=!1,$=null,le=null,se=null,Z=!1}}}function s(){let C=!1,Z=null,$=null,le=null,se=null,oe=null,Pe=null,Je=null,ie=null;return{setTest:function(Oe){C||(Oe?xe(t.STENCIL_TEST):Ye(t.STENCIL_TEST))},setMask:function(Oe){Z!==Oe&&!C&&(t.stencilMask(Oe),Z=Oe)},setFunc:function(Oe,Ze,pe){($!==Oe||le!==Ze||se!==pe)&&(t.stencilFunc(Oe,Ze,pe),$=Oe,le=Ze,se=pe)},setOp:function(Oe,Ze,pe){(oe!==Oe||Pe!==Ze||Je!==pe)&&(t.stencilOp(Oe,Ze,pe),oe=Oe,Pe=Ze,Je=pe)},setLocked:function(Oe){C=Oe},setClear:function(Oe){ie!==Oe&&(t.clearStencil(Oe),ie=Oe)},reset:function(){C=!1,Z=null,$=null,le=null,se=null,oe=null,Pe=null,Je=null,ie=null}}}let r=new n,a=new i,o=new s,c={},l=new WeakMap,h={},u={},d={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,A=null,b=null,w=null,E=null,_=null,S=new ze(0,0,0),D=0,I=!1,N=null,B=null,V=null,R=null,G=null,H=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS),W=!1,te=0,q=t.getParameter(t.VERSION);q.indexOf("WebGL")!==-1?(te=parseFloat(/^WebGL (\d)/.exec(q)[1]),W=te>=1):q.indexOf("OpenGL ES")!==-1&&(te=parseFloat(/^OpenGL ES (\d)/.exec(q)[1]),W=te>=2);let J=null,ee={},ye=t.getParameter(t.SCISSOR_BOX),Fe=t.getParameter(t.VIEWPORT),K=new St().fromArray(ye),ge=new St().fromArray(Fe);function Te(C,Z,$,le){let se=new Uint8Array(4),oe=t.createTexture();t.bindTexture(C,oe),t.texParameteri(C,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(C,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let Pe=0;Pe<$;Pe++)C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY?t.texImage3D(Z,0,t.RGBA,1,1,le,0,t.RGBA,t.UNSIGNED_BYTE,se):t.texImage2D(Z+Pe,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,se);return oe}let Be={};Be[t.TEXTURE_2D]=Te(t.TEXTURE_2D,t.TEXTURE_2D,1),Be[t.TEXTURE_CUBE_MAP]=Te(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),Be[t.TEXTURE_2D_ARRAY]=Te(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),Be[t.TEXTURE_3D]=Te(t.TEXTURE_3D,t.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),xe(t.DEPTH_TEST),a.setFunc(Za),Kn(!1),Ot(Cf),xe(t.CULL_FACE),Sn(sa);function xe(C){h[C]!==!0&&(t.enable(C),h[C]=!0)}function Ye(C){h[C]!==!1&&(t.disable(C),h[C]=!1)}function jt(C,Z){return d[C]!==Z?(t.bindFramebuffer(C,Z),d[C]=Z,C===t.DRAW_FRAMEBUFFER&&(d[t.FRAMEBUFFER]=Z),C===t.FRAMEBUFFER&&(d[t.DRAW_FRAMEBUFFER]=Z),!0):!1}function He(C,Z){let $=g,le=!1;if(C){$=f.get(Z),$===void 0&&($=[],f.set(Z,$));let se=C.textures;if($.length!==se.length||$[0]!==t.COLOR_ATTACHMENT0){for(let oe=0,Pe=se.length;oe<Pe;oe++)$[oe]=t.COLOR_ATTACHMENT0+oe;$.length=se.length,le=!0}}else $[0]!==t.BACK&&($[0]=t.BACK,le=!0);le&&t.drawBuffers($)}function vt(C){return v!==C?(t.useProgram(C),v=C,!0):!1}let bt={[ra]:t.FUNC_ADD,[l_]:t.FUNC_SUBTRACT,[h_]:t.FUNC_REVERSE_SUBTRACT};bt[u_]=t.MIN,bt[d_]=t.MAX;let st={[f_]:t.ZERO,[p_]:t.ONE,[m_]:t.SRC_COLOR,[Nf]:t.SRC_ALPHA,[S_]:t.SRC_ALPHA_SATURATE,[v_]:t.DST_COLOR,[__]:t.DST_ALPHA,[g_]:t.ONE_MINUS_SRC_COLOR,[Df]:t.ONE_MINUS_SRC_ALPHA,[y_]:t.ONE_MINUS_DST_COLOR,[x_]:t.ONE_MINUS_DST_ALPHA,[M_]:t.CONSTANT_COLOR,[b_]:t.ONE_MINUS_CONSTANT_COLOR,[T_]:t.CONSTANT_ALPHA,[E_]:t.ONE_MINUS_CONSTANT_ALPHA};function Sn(C,Z,$,le,se,oe,Pe,Je,ie,Oe){if(C===sa){m===!0&&(Ye(t.BLEND),m=!1);return}if(m===!1&&(xe(t.BLEND),m=!0),C!==c_){if(C!==p||Oe!==I){if((M!==ra||w!==ra)&&(t.blendEquation(t.FUNC_ADD),M=ra,w=ra),Oe)switch(C){case mo:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case If:t.blendFunc(t.ONE,t.ONE);break;case Pf:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case Lf:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:Ve("WebGLState: Invalid blending: ",C);break}else switch(C){case mo:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case If:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case Pf:Ve("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Lf:Ve("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ve("WebGLState: Invalid blending: ",C);break}A=null,b=null,E=null,_=null,S.set(0,0,0),D=0,p=C,I=Oe}return}se=se||Z,oe=oe||$,Pe=Pe||le,(Z!==M||se!==w)&&(t.blendEquationSeparate(bt[Z],bt[se]),M=Z,w=se),($!==A||le!==b||oe!==E||Pe!==_)&&(t.blendFuncSeparate(st[$],st[le],st[oe],st[Pe]),A=$,b=le,E=oe,_=Pe),(Je.equals(S)===!1||ie!==D)&&(t.blendColor(Je.r,Je.g,Je.b,ie),S.copy(Je),D=ie),p=C,I=!1}function nn(C,Z){C.side===Hn?Ye(t.CULL_FACE):xe(t.CULL_FACE);let $=C.side===En;Z&&($=!$),Kn($),C.blending===mo&&C.transparent===!1?Sn(sa):Sn(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),a.setFunc(C.depthFunc),a.setTest(C.depthTest),a.setMask(C.depthWrite),r.setMask(C.colorWrite);let le=C.stencilWrite;o.setTest(le),le&&(o.setMask(C.stencilWriteMask),o.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),o.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),mn(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?xe(t.SAMPLE_ALPHA_TO_COVERAGE):Ye(t.SAMPLE_ALPHA_TO_COVERAGE)}function Kn(C){N!==C&&(C?t.frontFace(t.CW):t.frontFace(t.CCW),N=C)}function Ot(C){C!==r_?(xe(t.CULL_FACE),C!==B&&(C===Cf?t.cullFace(t.BACK):C===a_?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):Ye(t.CULL_FACE),B=C}function ji(C){C!==V&&(W&&t.lineWidth(C),V=C)}function mn(C,Z,$){C?(xe(t.POLYGON_OFFSET_FILL),(R!==Z||G!==$)&&(R=Z,G=$,a.getReversed()&&(Z=-Z,$=-$),t.polygonOffset(Z,$))):Ye(t.POLYGON_OFFSET_FILL)}function yi(C){C?xe(t.SCISSOR_TEST):Ye(t.SCISSOR_TEST)}function Si(C){C===void 0&&(C=t.TEXTURE0+H-1),J!==C&&(t.activeTexture(C),J=C)}function Mi(C,Z,$){$===void 0&&(J===null?$=t.TEXTURE0+H-1:$=J);let le=ee[$];le===void 0&&(le={type:void 0,texture:void 0},ee[$]=le),(le.type!==C||le.texture!==Z)&&(J!==$&&(t.activeTexture($),J=$),t.bindTexture(C,Z||Be[C]),le.type=C,le.texture=Z)}function U(){let C=ee[J];C!==void 0&&C.type!==void 0&&(t.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function bi(){try{t.compressedTexImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function Nt(){try{t.compressedTexImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function Dt(){try{t.texSubImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function fe(){try{t.texSubImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function sn(){try{t.compressedTexSubImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function ke(){try{t.compressedTexSubImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function Xe(){try{t.texStorage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function T(){try{t.texStorage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function x(){try{t.texImage2D(...arguments)}catch(C){Ve("WebGLState:",C)}}function k(){try{t.texImage3D(...arguments)}catch(C){Ve("WebGLState:",C)}}function ne(C){return u[C]!==void 0?u[C]:t.getParameter(C)}function Q(C,Z){u[C]!==Z&&(t.pixelStorei(C,Z),u[C]=Z)}function ae(C){K.equals(C)===!1&&(t.scissor(C.x,C.y,C.z,C.w),K.copy(C))}function ue(C){ge.equals(C)===!1&&(t.viewport(C.x,C.y,C.z,C.w),ge.copy(C))}function Y(C,Z){let $=l.get(Z);$===void 0&&($=new WeakMap,l.set(Z,$));let le=$.get(C);le===void 0&&(le=t.getUniformBlockIndex(Z,C.name),t.uniformBlockBinding(Z,le,le),$.set(C,le))}function j(C,Z,$){let se=l.get(Z).get(C);c[se]!==$&&(t.bindBufferBase(t.UNIFORM_BUFFER,se,$),c[se]=$)}function ce(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),a.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),t.pixelStorei(t.PACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_ALIGNMENT,4),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!1),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.BROWSER_DEFAULT_WEBGL),t.pixelStorei(t.PACK_ROW_LENGTH,0),t.pixelStorei(t.PACK_SKIP_PIXELS,0),t.pixelStorei(t.PACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_ROW_LENGTH,0),t.pixelStorei(t.UNPACK_IMAGE_HEIGHT,0),t.pixelStorei(t.UNPACK_SKIP_PIXELS,0),t.pixelStorei(t.UNPACK_SKIP_ROWS,0),t.pixelStorei(t.UNPACK_SKIP_IMAGES,0),h={},u={},J=null,ee={},d={},c={},f=new WeakMap,g=[],v=null,m=!1,p=null,M=null,A=null,b=null,w=null,E=null,_=null,S=new ze(0,0,0),D=0,I=!1,N=null,B=null,V=null,R=null,G=null,K.set(0,0,t.canvas.width,t.canvas.height),ge.set(0,0,t.canvas.width,t.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:xe,disable:Ye,bindFramebuffer:jt,drawBuffers:He,useProgram:vt,setBlending:Sn,setMaterial:nn,setFlipSided:Kn,setCullFace:Ot,setLineWidth:ji,setPolygonOffset:mn,setScissorTest:yi,activeTexture:Si,bindTexture:Mi,unbindTexture:U,compressedTexImage2D:bi,compressedTexImage3D:Nt,texImage2D:x,texImage3D:k,pixelStorei:Q,getParameter:ne,updateUBOMapping:Y,uniformBlockBinding:j,texStorage2D:Xe,texStorage3D:T,texSubImage2D:Dt,texSubImage3D:fe,compressedTexSubImage2D:sn,compressedTexSubImage3D:ke,scissor:ae,viewport:ue,reset:ce}}function DE(t,e,n,i,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new je,h=new WeakMap,u=new Set,d,f=new WeakMap,g=new Set,v=new FinalizationRegistry(T=>g.delete(T)),m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(T,x){return m?new OffscreenCanvas(T,x):eo("canvas")}function M(T,x,k){let ne=1,Q=Xe(T);if((Q.width>k||Q.height>k)&&(ne=k/Math.max(Q.width,Q.height)),ne<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){let ae=Math.floor(ne*Q.width),ue=Math.floor(ne*Q.height);d===void 0&&(d=p(ae,ue));let Y=x?p(ae,ue):d;return Y.width=ae,Y.height=ue,Y.getContext("2d").drawImage(T,0,0,ae,ue),Ie("WebGLRenderer: Texture has been resized from ("+Q.width+"x"+Q.height+") to ("+ae+"x"+ue+")."),Y}else return"data"in T&&Ie("WebGLRenderer: Image in DataTexture is too big ("+Q.width+"x"+Q.height+")."),T;return T}function A(T){return T.generateMipmaps}function b(T){t.generateMipmap(T)}function w(T){return T.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?t.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function E(T,x,k,ne,Q,ae=!1){if(T!==null){if(t[T]!==void 0)return t[T];Ie("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let ue;ne&&(ue=e.get("EXT_texture_norm16"),ue||Ie("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let Y=x;if(x===t.RED&&(k===t.FLOAT&&(Y=t.R32F),k===t.HALF_FLOAT&&(Y=t.R16F),k===t.UNSIGNED_BYTE&&(Y=t.R8),k===t.UNSIGNED_SHORT&&ue&&(Y=ue.R16_EXT),k===t.SHORT&&ue&&(Y=ue.R16_SNORM_EXT)),x===t.RED_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.R8UI),k===t.UNSIGNED_SHORT&&(Y=t.R16UI),k===t.UNSIGNED_INT&&(Y=t.R32UI),k===t.BYTE&&(Y=t.R8I),k===t.SHORT&&(Y=t.R16I),k===t.INT&&(Y=t.R32I)),x===t.RG&&(k===t.FLOAT&&(Y=t.RG32F),k===t.HALF_FLOAT&&(Y=t.RG16F),k===t.UNSIGNED_BYTE&&(Y=t.RG8),k===t.UNSIGNED_SHORT&&ue&&(Y=ue.RG16_EXT),k===t.SHORT&&ue&&(Y=ue.RG16_SNORM_EXT)),x===t.RG_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RG8UI),k===t.UNSIGNED_SHORT&&(Y=t.RG16UI),k===t.UNSIGNED_INT&&(Y=t.RG32UI),k===t.BYTE&&(Y=t.RG8I),k===t.SHORT&&(Y=t.RG16I),k===t.INT&&(Y=t.RG32I)),x===t.RGB_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGB8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGB16UI),k===t.UNSIGNED_INT&&(Y=t.RGB32UI),k===t.BYTE&&(Y=t.RGB8I),k===t.SHORT&&(Y=t.RGB16I),k===t.INT&&(Y=t.RGB32I)),x===t.RGBA_INTEGER&&(k===t.UNSIGNED_BYTE&&(Y=t.RGBA8UI),k===t.UNSIGNED_SHORT&&(Y=t.RGBA16UI),k===t.UNSIGNED_INT&&(Y=t.RGBA32UI),k===t.BYTE&&(Y=t.RGBA8I),k===t.SHORT&&(Y=t.RGBA16I),k===t.INT&&(Y=t.RGBA32I)),x===t.RGB&&(k===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGB16_EXT),k===t.SHORT&&ue&&(Y=ue.RGB16_SNORM_EXT),k===t.UNSIGNED_INT_5_9_9_9_REV&&(Y=t.RGB9_E5),k===t.UNSIGNED_INT_10F_11F_11F_REV&&(Y=t.R11F_G11F_B10F)),x===t.RGBA){let j=ae?gc:et.getTransfer(Q);k===t.FLOAT&&(Y=t.RGBA32F),k===t.HALF_FLOAT&&(Y=t.RGBA16F),k===t.UNSIGNED_BYTE&&(Y=j===xt?t.SRGB8_ALPHA8:t.RGBA8),k===t.UNSIGNED_SHORT&&ue&&(Y=ue.RGBA16_EXT),k===t.SHORT&&ue&&(Y=ue.RGBA16_SNORM_EXT),k===t.UNSIGNED_SHORT_4_4_4_4&&(Y=t.RGBA4),k===t.UNSIGNED_SHORT_5_5_5_1&&(Y=t.RGB5_A1)}return(Y===t.R16F||Y===t.R32F||Y===t.RG16F||Y===t.RG32F||Y===t.RGBA16F||Y===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Y}function _(T,x){let k;return T?x===null||x===Hi||x===ca?k=t.DEPTH24_STENCIL8:x===Un?k=t.DEPTH32F_STENCIL8:x===vo&&(k=t.DEPTH24_STENCIL8,Ie("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Hi||x===ca?k=t.DEPTH_COMPONENT24:x===Un?k=t.DEPTH_COMPONENT32F:x===vo&&(k=t.DEPTH_COMPONENT16),k}function S(T,x){return A(T)===!0||T.isFramebufferTexture&&T.minFilter!==$t&&T.minFilter!==Ct?Math.log2(Math.max(x.width,x.height))+1:T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?x.mipmaps.length:1}function D(T){let x=new WeakRef(T);i.get(T).__ref=x,g.add(x),v.register(T,x,x)}function I(T){let x=i.get(T).__ref;x!==void 0&&(g.delete(x),v.unregister(x))}function N(T){V(T.target)}function B(T){R(T.target)}function V(T){T.removeEventListener("dispose",N),I(T),H(T),T.isVideoTexture&&h.delete(T),T.isHTMLTexture&&u.delete(T)}function R(T){T.removeEventListener("dispose",B),I(T),te(T)}function G(){for(let T of g){let x=T.deref();x!==void 0&&(x.isRenderTarget===!0?R(x):V(x))}g.clear(),u.clear()}function H(T){let x=i.get(T);if(x.__webglInit===void 0)return;let k=T.source,ne=f.get(k);if(ne){let Q=ne[x.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&W(T),Object.keys(ne).length===0&&f.delete(k)}i.remove(T)}function W(T){let x=i.get(T);t.deleteTexture(x.__webglTexture);let k=T.source,ne=f.get(k);delete ne[x.__cacheKey],a.memory.textures--}function te(T){let x=i.get(T);x.__depthDisposeCallback&&x.__depthDisposeCallback();let k=T.depthTexture;if(k&&k.renderTarget===T&&V(k),T.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(x.__webglFramebuffer[Q]))for(let ae=0;ae<x.__webglFramebuffer[Q].length;ae++)t.deleteFramebuffer(x.__webglFramebuffer[Q][ae]);else t.deleteFramebuffer(x.__webglFramebuffer[Q]);x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer[Q])}else{if(Array.isArray(x.__webglFramebuffer))for(let Q=0;Q<x.__webglFramebuffer.length;Q++)t.deleteFramebuffer(x.__webglFramebuffer[Q]);else t.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&t.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&t.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Q=0;Q<x.__webglColorRenderbuffer.length;Q++)x.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(x.__webglColorRenderbuffer[Q]);x.__webglDepthRenderbuffer&&t.deleteRenderbuffer(x.__webglDepthRenderbuffer)}let ne=T.textures;for(let Q=0,ae=ne.length;Q<ae;Q++){let ue=i.get(ne[Q]);ue.__webglTexture&&(t.deleteTexture(ue.__webglTexture),a.memory.textures--),i.remove(ne[Q])}i.remove(T)}let q=0;function J(){q=0}function ee(){return q}function ye(T){q=T}function Fe(){let T=q;return T>=s.maxTextures&&Ie("WebGLTextures: Trying to use "+(T+1)+" texture units while this GPU supports only "+s.maxTextures),q+=1,T}function K(T){let x=[];return x.push(T.wrapS),x.push(T.wrapT),x.push(T.wrapR||0),x.push(T.magFilter),x.push(T.minFilter),x.push(T.anisotropy),x.push(T.internalFormat),x.push(T.format),x.push(T.type),x.push(T.generateMipmaps),x.push(T.mipmapsAutoUpdate),x.push(T.premultiplyAlpha),x.push(T.flipY),x.push(T.unpackAlignment),x.push(T.colorSpace),x.join()}function ge(T,x){let k=i.get(T);if(T.isVideoTexture&&sn(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&k.__version!==T.version){let ne=T.image;if(ne===null)Ie("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)Ie("WebGLRenderer: Texture marked for update but image is incomplete");else{nn(k,T,x);return}}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,k.__webglTexture,t.TEXTURE0+x)}function Te(T,x){let k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){nn(k,T,x);return}else T.isExternalTexture&&(k.__webglTexture=T.sourceTexture?T.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,k.__webglTexture,t.TEXTURE0+x)}function Be(T,x){let k=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&k.__version!==T.version){nn(k,T,x);return}n.bindTexture(t.TEXTURE_3D,k.__webglTexture,t.TEXTURE0+x)}function xe(T,x){let k=i.get(T);if(T.version>0&&k.__version!==T.version){Kn(k,T,x);return}n.bindTexture(t.TEXTURE_CUBE_MAP,k.__webglTexture,t.TEXTURE0+x)}let Ye={[mr]:t.REPEAT,[jn]:t.CLAMP_TO_EDGE,[Ja]:t.MIRRORED_REPEAT},jt={[$t]:t.NEAREST,[Dh]:t.NEAREST_MIPMAP_NEAREST,[oa]:t.NEAREST_MIPMAP_LINEAR,[Ct]:t.LINEAR,[xo]:t.LINEAR_MIPMAP_NEAREST,[ui]:t.LINEAR_MIPMAP_LINEAR},He={[N_]:t.NEVER,[Zf]:t.ALWAYS,[D_]:t.LESS,[Kf]:t.LEQUAL,[U_]:t.EQUAL,[jf]:t.GEQUAL,[F_]:t.GREATER,[O_]:t.NOTEQUAL};function vt(T,x){if(x.type===Un&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Ct||x.magFilter===xo||x.magFilter===oa||x.magFilter===ui||x.minFilter===Ct||x.minFilter===xo||x.minFilter===oa||x.minFilter===ui)&&Ie("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(T,t.TEXTURE_WRAP_S,Ye[x.wrapS]),t.texParameteri(T,t.TEXTURE_WRAP_T,Ye[x.wrapT]),(T===t.TEXTURE_3D||T===t.TEXTURE_2D_ARRAY)&&t.texParameteri(T,t.TEXTURE_WRAP_R,Ye[x.wrapR]),t.texParameteri(T,t.TEXTURE_MAG_FILTER,jt[x.magFilter]),t.texParameteri(T,t.TEXTURE_MIN_FILTER,jt[x.minFilter]),x.compareFunction&&(t.texParameteri(T,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(T,t.TEXTURE_COMPARE_FUNC,He[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===$t||x.minFilter!==oa&&x.minFilter!==ui||x.type===Un&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||i.get(x).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");t.texParameterf(T,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,s.getMaxAnisotropy())),i.get(x).__currentAnisotropy=x.anisotropy}}}function bt(T,x){let k=!1;T.__webglInit===void 0&&(T.__webglInit=!0,x.addEventListener("dispose",N),D(x));let ne=x.source,Q=f.get(ne);Q===void 0&&(Q={},f.set(ne,Q));let ae=K(x);if(ae!==T.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:t.createTexture(),usedTimes:0},a.memory.textures++,k=!0),Q[ae].usedTimes++;let ue=Q[T.__cacheKey];ue!==void 0&&(Q[T.__cacheKey].usedTimes--,ue.usedTimes===0&&W(x)),T.__cacheKey=ae,T.__webglTexture=Q[ae].texture}return k}function st(T,x,k){return Math.floor(Math.floor(T/k)/x)}function Sn(T,x,k,ne){let ae=T.updateRanges;if(ae.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,x.width,x.height,k,ne,x.data);else{ae.sort((C,Z)=>C.start-Z.start);let ue=0;for(let C=1;C<ae.length;C++){let Z=ae[ue],$=ae[C],le=Z.start+Z.count,se=st($.start,x.width,4),oe=st(Z.start,x.width,4);$.start<=le+1&&se===oe&&st($.start+$.count-1,x.width,4)===se?Z.count=Math.max(Z.count,$.start+$.count-Z.start):(++ue,ae[ue]=$)}ae.length=ue+1;let Y=n.getParameter(t.UNPACK_ROW_LENGTH),j=n.getParameter(t.UNPACK_SKIP_PIXELS),ce=n.getParameter(t.UNPACK_SKIP_ROWS);n.pixelStorei(t.UNPACK_ROW_LENGTH,x.width);for(let C=0,Z=ae.length;C<Z;C++){let $=ae[C],le=Math.floor($.start/4),se=Math.ceil($.count/4),oe=le%x.width,Pe=Math.floor(le/x.width),Je=se,ie=1;n.pixelStorei(t.UNPACK_SKIP_PIXELS,oe),n.pixelStorei(t.UNPACK_SKIP_ROWS,Pe),n.texSubImage2D(t.TEXTURE_2D,0,oe,Pe,Je,ie,k,ne,x.data)}T.clearUpdateRanges(),n.pixelStorei(t.UNPACK_ROW_LENGTH,Y),n.pixelStorei(t.UNPACK_SKIP_PIXELS,j),n.pixelStorei(t.UNPACK_SKIP_ROWS,ce)}}function nn(T,x,k){let ne=t.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(ne=t.TEXTURE_2D_ARRAY),x.isData3DTexture&&(ne=t.TEXTURE_3D);let Q=bt(T,x),ae=x.source;n.bindTexture(ne,T.__webglTexture,t.TEXTURE0+k);let ue=i.get(ae);if(ae.version!==ue.__version||Q===!0){if(n.activeTexture(t.TEXTURE0+k),(typeof ImageBitmap<"u"&&x.image instanceof ImageBitmap)===!1){let ie=et.getPrimaries(et.workingColorSpace),Oe=x.colorSpace===Hs?null:et.getPrimaries(x.colorSpace),Ze=x.colorSpace===Hs||ie===Oe?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ze)}n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment);let j=M(x.image,!1,s.maxTextureSize);j=ke(x,j);let ce=r.convert(x.format,x.colorSpace),C=r.convert(x.type),Z=E(x.internalFormat,ce,C,x.normalized,x.colorSpace,x.isVideoTexture);vt(ne,x);let $,le=x.mipmaps,se=x.isVideoTexture!==!0,oe=ue.__version===void 0||Q===!0,Pe=ae.dataReady,Je=S(x,j);if(x.isDepthTexture)Z=_(x.format===Gs,x.type),oe&&(se?n.texStorage2D(t.TEXTURE_2D,1,Z,j.width,j.height):n.texImage2D(t.TEXTURE_2D,0,Z,j.width,j.height,0,ce,C,null));else if(x.isDataTexture)if(le.length>0){se&&oe&&n.texStorage2D(t.TEXTURE_2D,Je,Z,le[0].width,le[0].height);for(let ie=0,Oe=le.length;ie<Oe;ie++)$=le[ie],se?Pe&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,$.width,$.height,ce,C,$.data):n.texImage2D(t.TEXTURE_2D,ie,Z,$.width,$.height,0,ce,C,$.data);x.generateMipmaps=!1}else se?(oe&&n.texStorage2D(t.TEXTURE_2D,Je,Z,j.width,j.height),Pe&&Sn(x,j,ce,C)):n.texImage2D(t.TEXTURE_2D,0,Z,j.width,j.height,0,ce,C,j.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){se&&oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Je,Z,le[0].width,le[0].height,j.depth);for(let ie=0,Oe=le.length;ie<Oe;ie++)if($=le[ie],x.format!==Ai)if(ce!==null)if(se){if(Pe)if(x.layerUpdates.size>0){let Ze=op($.width,$.height,x.format,x.type);for(let pe of x.layerUpdates){let yt=$.data.subarray(pe*Ze/$.data.BYTES_PER_ELEMENT,(pe+1)*Ze/$.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,pe,$.width,$.height,1,ce,yt)}}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,j.depth,ce,$.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Z,$.width,$.height,j.depth,0,$.data,0,0);else Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else se?Pe&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,$.width,$.height,j.depth,ce,C,$.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Z,$.width,$.height,j.depth,0,ce,C,$.data);x.layerUpdates.size>0&&x.clearLayerUpdates()}else{se&&oe&&n.texStorage2D(t.TEXTURE_2D,Je,Z,le[0].width,le[0].height);for(let ie=0,Oe=le.length;ie<Oe;ie++)$=le[ie],x.format!==Ai?ce!==null?se?Pe&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,$.width,$.height,ce,$.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Z,$.width,$.height,0,$.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):se?Pe&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,$.width,$.height,ce,C,$.data):n.texImage2D(t.TEXTURE_2D,ie,Z,$.width,$.height,0,ce,C,$.data)}else if(x.isDataArrayTexture)if(se){if(oe&&n.texStorage3D(t.TEXTURE_2D_ARRAY,Je,Z,j.width,j.height,j.depth),Pe)if(x.layerUpdates.size>0){let ie=op(j.width,j.height,x.format,x.type);for(let Oe of x.layerUpdates){let Ze=j.data.subarray(Oe*ie/j.data.BYTES_PER_ELEMENT,(Oe+1)*ie/j.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,Oe,j.width,j.height,1,ce,C,Ze)}x.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,j.width,j.height,j.depth,ce,C,j.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Z,j.width,j.height,j.depth,0,ce,C,j.data);else if(x.isData3DTexture)se?(oe&&n.texStorage3D(t.TEXTURE_3D,Je,Z,j.width,j.height,j.depth),Pe&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,j.width,j.height,j.depth,ce,C,j.data)):n.texImage3D(t.TEXTURE_3D,0,Z,j.width,j.height,j.depth,0,ce,C,j.data);else if(x.isFramebufferTexture){if(oe)if(se)n.texStorage2D(t.TEXTURE_2D,Je,Z,j.width,j.height);else{let ie=j.width,Oe=j.height;for(let Ze=0;Ze<Je;Ze++)n.texImage2D(t.TEXTURE_2D,Ze,Z,ie,Oe,0,ce,C,null),ie>>=1,Oe>>=1}}else if(x.isHTMLTexture){if("texElementImage2D"in t){let ie=t.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),j.parentNode!==ie){ie.appendChild(j),u.add(x),ie.onpaint=Oe=>{let Ze=Oe.changedElements;for(let pe of u)Ze.includes(pe.image)&&(pe.needsUpdate=!0)},ie.requestPaint();return}if(t.texElementImage2D.length===3)t.texElementImage2D(t.TEXTURE_2D,t.RGBA8,j);else{let Ze=t.RGBA,pe=t.RGBA,yt=t.UNSIGNED_BYTE;t.texElementImage2D(t.TEXTURE_2D,0,Ze,pe,yt,j)}t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE)}}else if(le.length>0){if(se&&oe){let ie=Xe(le[0]);n.texStorage2D(t.TEXTURE_2D,Je,Z,ie.width,ie.height)}for(let ie=0,Oe=le.length;ie<Oe;ie++)$=le[ie],se?Pe&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,ce,C,$):n.texImage2D(t.TEXTURE_2D,ie,Z,ce,C,$);x.generateMipmaps=!1}else if(se){if(oe){let ie=Xe(j);n.texStorage2D(t.TEXTURE_2D,Je,Z,ie.width,ie.height)}Pe&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,ce,C,j)}else n.texImage2D(t.TEXTURE_2D,0,Z,ce,C,j);A(x)&&x.mipmapsAutoUpdate===!0&&b(ne),ue.__version=ae.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Kn(T,x,k){if(x.image.length!==6)return;let ne=bt(T,x),Q=x.source;n.bindTexture(t.TEXTURE_CUBE_MAP,T.__webglTexture,t.TEXTURE0+k);let ae=i.get(Q);if(Q.version!==ae.__version||ne===!0){n.activeTexture(t.TEXTURE0+k);let ue=et.getPrimaries(et.workingColorSpace),Y=x.colorSpace===Hs?null:et.getPrimaries(x.colorSpace),j=x.colorSpace===Hs||ue===Y?t.NONE:t.BROWSER_DEFAULT_WEBGL;n.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,x.flipY),n.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),n.pixelStorei(t.UNPACK_ALIGNMENT,x.unpackAlignment),n.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let ce=x.isCompressedTexture||x.image[0].isCompressedTexture,C=x.image[0]&&x.image[0].isDataTexture,Z=[];for(let pe=0;pe<6;pe++)!ce&&!C?Z[pe]=M(x.image[pe],!0,s.maxCubemapSize):Z[pe]=C?x.image[pe].image:x.image[pe],Z[pe]=ke(x,Z[pe]);let $=Z[0],le=r.convert(x.format,x.colorSpace),se=r.convert(x.type),oe=E(x.internalFormat,le,se,x.normalized,x.colorSpace),Pe=x.isVideoTexture!==!0,Je=ae.__version===void 0||ne===!0,ie=Q.dataReady,Oe=S(x,$);vt(t.TEXTURE_CUBE_MAP,x);let Ze;if(x.isDepthTexture){if(oe=_(x.format===Gs,x.type),Je)if(Pe)n.texStorage2D(t.TEXTURE_CUBE_MAP,1,oe,$.width,$.height);else for(let pe=0;pe<6;pe++)n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,$.width,$.height,0,le,se,null)}else if(ce){Pe&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,oe,$.width,$.height);for(let pe=0;pe<6;pe++){Ze=Z[pe].mipmaps;for(let yt=0;yt<Ze.length;yt++){let gn=Ze[yt];x.format!==Ai?le!==null?Pe?ie&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt,0,0,gn.width,gn.height,le,gn.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt,oe,gn.width,gn.height,0,gn.data):Ie("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Pe?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt,0,0,gn.width,gn.height,le,se,gn.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt,oe,gn.width,gn.height,0,le,se,gn.data)}}}else{if(Ze=x.mipmaps,Pe&&Je){Ze.length>0&&Oe++;let pe=Xe(Z[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,Oe,oe,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(C){Pe?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,Z[pe].width,Z[pe].height,le,se,Z[pe].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,Z[pe].width,Z[pe].height,0,le,se,Z[pe].data);for(let yt=0;yt<Ze.length;yt++){let rr=Ze[yt].image[pe].image;Pe?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt+1,0,0,rr.width,rr.height,le,se,rr.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt+1,oe,rr.width,rr.height,0,le,se,rr.data)}}else{Pe?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,le,se,Z[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,oe,le,se,Z[pe]);for(let yt=0;yt<Ze.length;yt++){let gn=Ze[yt];Pe?ie&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt+1,0,0,le,se,gn.image[pe]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+pe,yt+1,oe,le,se,gn.image[pe])}}}A(x)&&x.mipmapsAutoUpdate===!0&&b(t.TEXTURE_CUBE_MAP),ae.__version=Q.version,x.onUpdate&&x.onUpdate(x)}T.__version=x.version}function Ot(T,x,k,ne,Q,ae){let ue=r.convert(k.format,k.colorSpace),Y=r.convert(k.type),j=E(k.internalFormat,ue,Y,k.normalized,k.colorSpace),ce=i.get(x),C=i.get(k);if(C.__renderTarget=x,!ce.__hasExternalTextures){let Z=Math.max(1,x.width>>ae),$=Math.max(1,x.height>>ae);Q===t.TEXTURE_3D||Q===t.TEXTURE_2D_ARRAY?n.texImage3D(Q,ae,j,Z,$,x.depth,0,ue,Y,null):n.texImage2D(Q,ae,j,Z,$,0,ue,Y,null)}n.bindFramebuffer(t.FRAMEBUFFER,T),fe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ne,Q,C.__webglTexture,0,Dt(x)):(Q===t.TEXTURE_2D||Q>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&Q<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ne,Q,C.__webglTexture,ae),n.bindFramebuffer(t.FRAMEBUFFER,null)}function ji(T,x,k){if(t.bindRenderbuffer(t.RENDERBUFFER,T),x.depthBuffer){let ne=x.depthTexture,Q=ne&&ne.isDepthTexture?ne.type:null,ae=_(x.stencilBuffer,Q),ue=x.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;fe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Dt(x),ae,x.width,x.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Dt(x),ae,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,ae,x.width,x.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,ue,t.RENDERBUFFER,T)}else{let ne=x.textures;for(let Q=0;Q<ne.length;Q++){let ae=ne[Q],ue=r.convert(ae.format,ae.colorSpace),Y=r.convert(ae.type),j=E(ae.internalFormat,ue,Y,ae.normalized,ae.colorSpace);fe(x)?o.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Dt(x),j,x.width,x.height):k?t.renderbufferStorageMultisample(t.RENDERBUFFER,Dt(x),j,x.width,x.height):t.renderbufferStorage(t.RENDERBUFFER,j,x.width,x.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function mn(T,x,k){let ne=x.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,T),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let Q=i.get(x.depthTexture);Q.__renderTarget=x;let ae=ne?x.depthTexture.image[0]:x.depthTexture.image;(!Q.__webglTexture||ae.width!==x.width||ae.height!==x.height)&&(ae.width=x.width,ae.height=x.height,x.depthTexture.needsUpdate=!0),ne?xe(x.depthTexture,0):ge(x.depthTexture,0);let ue=Q.__webglTexture,Y=Dt(x),j=ne?t.TEXTURE_CUBE_MAP_POSITIVE_X+k:t.TEXTURE_2D,ce=x.depthTexture.format===Gs?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(x.depthTexture.format===Ns)fe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,j,ue,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,ce,j,ue,0);else if(x.depthTexture.format===Gs)fe(x)?o.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ce,j,ue,0,Y):t.framebufferTexture2D(t.FRAMEBUFFER,ce,j,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function yi(T){let x=i.get(T),k=T.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==T.depthTexture){let ne=T.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),ne){let Q=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,ne.removeEventListener("dispose",Q)};ne.addEventListener("dispose",Q),x.__depthDisposeCallback=Q}x.__boundDepthTexture=ne}if(T.depthTexture&&!x.__autoAllocateDepthBuffer)if(k)for(let ne=0;ne<6;ne++)mn(x.__webglFramebuffer[ne],T,ne);else T.texture.mipmaps.length>0?mn(x.__webglFramebuffer[0],T,0):mn(x.__webglFramebuffer,T,0);else if(k){x.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[ne]),x.__webglDepthbuffer[ne]===void 0)x.__webglDepthbuffer[ne]=t.createRenderbuffer(),ji(x.__webglDepthbuffer[ne],T,!1);else{let Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer[ne];t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ae)}}else if(T.texture.mipmaps.length>0?n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=t.createRenderbuffer(),ji(x.__webglDepthbuffer,T,!1);else{let Q=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ae=x.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,ae),t.framebufferRenderbuffer(t.FRAMEBUFFER,Q,t.RENDERBUFFER,ae)}n.bindFramebuffer(t.FRAMEBUFFER,null)}function Si(T,x,k){let ne=i.get(T);x!==void 0&&Ot(ne.__webglFramebuffer,T,T.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),k!==void 0&&yi(T)}function Mi(T){let x=T.texture,k=i.get(T),ne=i.get(x);T.addEventListener("dispose",B),D(T);let Q=T.textures,ae=T.isWebGLCubeRenderTarget===!0,ue=Q.length>1;if(ue||(ne.__webglTexture===void 0&&(ne.__webglTexture=t.createTexture()),ne.__version=x.version,a.memory.textures++),ae){k.__webglFramebuffer=[];for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0){k.__webglFramebuffer[Y]=[];for(let j=0;j<x.mipmaps.length;j++)k.__webglFramebuffer[Y][j]=t.createFramebuffer()}else k.__webglFramebuffer[Y]=t.createFramebuffer()}else{if(x.mipmaps.length>0){k.__webglFramebuffer=[];for(let Y=0;Y<x.mipmaps.length;Y++)k.__webglFramebuffer[Y]=t.createFramebuffer()}else k.__webglFramebuffer=t.createFramebuffer();if(ue)for(let Y=0,j=Q.length;Y<j;Y++){let ce=i.get(Q[Y]);ce.__webglTexture===void 0&&(ce.__webglTexture=t.createTexture(),a.memory.textures++)}if(T.samples>0&&fe(T)===!1){k.__webglMultisampledFramebuffer=t.createFramebuffer(),k.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let Y=0;Y<Q.length;Y++){let j=Q[Y];k.__webglColorRenderbuffer[Y]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,k.__webglColorRenderbuffer[Y]);let ce=r.convert(j.format,j.colorSpace),C=r.convert(j.type),Z=E(j.internalFormat,ce,C,j.normalized,j.colorSpace,T.isXRRenderTarget===!0),$=Dt(T);t.renderbufferStorageMultisample(t.RENDERBUFFER,$,Z,T.width,T.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Y,t.RENDERBUFFER,k.__webglColorRenderbuffer[Y])}t.bindRenderbuffer(t.RENDERBUFFER,null),T.depthBuffer&&(k.__webglDepthRenderbuffer=t.createRenderbuffer(),ji(k.__webglDepthRenderbuffer,T,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ae){n.bindTexture(t.TEXTURE_CUBE_MAP,ne.__webglTexture),vt(t.TEXTURE_CUBE_MAP,x);for(let Y=0;Y<6;Y++)if(x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ot(k.__webglFramebuffer[Y][j],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,j);else Ot(k.__webglFramebuffer[Y],T,x,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0);A(x)?b(t.TEXTURE_CUBE_MAP):x.mipmaps.length>0&&t.texParameteri(t.TEXTURE_CUBE_MAP,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}else if(ue){for(let Y=0,j=Q.length;Y<j;Y++){let ce=Q[Y],C=i.get(ce),Z=t.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Z=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Z,C.__webglTexture),vt(Z,ce),Ot(k.__webglFramebuffer,T,ce,t.COLOR_ATTACHMENT0+Y,Z,0),A(ce)&&b(Z)}n.unbindTexture()}else{let Y=t.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(Y=T.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(Y,ne.__webglTexture),vt(Y,x),x.mipmaps.length>0)for(let j=0;j<x.mipmaps.length;j++)Ot(k.__webglFramebuffer[j],T,x,t.COLOR_ATTACHMENT0,Y,j);else Ot(k.__webglFramebuffer,T,x,t.COLOR_ATTACHMENT0,Y,0);A(x)?b(Y):x.mipmaps.length>0&&t.texParameteri(Y,t.TEXTURE_MAX_LEVEL,x.mipmaps.length-1),n.unbindTexture()}T.depthBuffer&&yi(T)}function U(T){let x=T.textures;for(let k=0,ne=x.length;k<ne;k++){let Q=x[k];if(A(Q)&&Q.mipmapsAutoUpdate===!0){let ae=w(T),ue=i.get(Q).__webglTexture;n.bindTexture(ae,ue),b(ae),n.unbindTexture()}}}let bi=[];function Nt(T){if(T.samples>0){if(fe(T)===!1){let x=T.textures,k=T.width,ne=T.height,Q=t.COLOR_BUFFER_BIT,ae=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,ue=i.get(T),Y=x.length>1;if(Y)for(let ce=0;ce<x.length;ce++)n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,ue.__webglMultisampledFramebuffer),T.texture.mipmaps.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglFramebuffer);for(let ce=0;ce<x.length;ce++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(Q|=t.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(Q|=t.STENCIL_BUFFER_BIT)),Y){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let C=i.get(x[ce]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,C,0)}t.blitFramebuffer(0,0,k,ne,0,0,k,ne,Q,t.NEAREST),c===!0&&(bi.length=0,bi.push(t.COLOR_ATTACHMENT0+ce),T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&bi.push(ae),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,bi))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),Y)for(let ce=0;ce<x.length;ce++){n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.RENDERBUFFER,ue.__webglColorRenderbuffer[ce]);let C=i.get(x[ce]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,ue.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+ce,t.TEXTURE_2D,C,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,ue.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.storeMultisampledDepthBuffer===!1&&c){let x=T.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[x])}}}function Dt(T){return Math.min(s.maxSamples,T.samples)}function fe(T){let x=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function sn(T){let x=a.render.frame;h.get(T)!==x&&(h.set(T,x),T.update())}function ke(T,x){let k=T.colorSpace,ne=T.format,Q=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||k!==Tn&&k!==Hs&&(et.getTransfer(k)===xt?(ne!==Ai||Q!==ei)&&Ie("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ve("WebGLTextures: Unsupported texture color space:",k)),x}function Xe(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(l.width=T.naturalWidth||T.width,l.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(l.width=T.displayWidth,l.height=T.displayHeight):(l.width=T.width,l.height=T.height),l}this.allocateTextureUnit=Fe,this.resetTextureUnits=J,this.getTextureUnits=ee,this.setTextureUnits=ye,this.setTexture2D=ge,this.setTexture2DArray=Te,this.setTexture3D=Be,this.setTextureCube=xe,this.rebindTextures=Si,this.setupRenderTarget=Mi,this.updateRenderTargetMipmap=U,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=yi,this.setupFrameBufferTexture=Ot,this.useMultisampledRTT=fe,this.dispose=G}function UE(t,e){function n(i,s=Hs){let r,a=et.getTransfer(s);if(i===ei)return t.UNSIGNED_BYTE;if(i===Fh)return t.UNSIGNED_SHORT_4_4_4_4;if(i===Oh)return t.UNSIGNED_SHORT_5_5_5_1;if(i===Wf)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===Xf)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===Hf)return t.BYTE;if(i===Vf)return t.SHORT;if(i===vo)return t.UNSIGNED_SHORT;if(i===Uh)return t.INT;if(i===Hi)return t.UNSIGNED_INT;if(i===Un)return t.FLOAT;if(i===Vn)return t.HALF_FLOAT;if(i===qf)return t.ALPHA;if(i===$f)return t.RGB;if(i===Ai)return t.RGBA;if(i===Ns)return t.DEPTH_COMPONENT;if(i===Gs)return t.DEPTH_STENCIL;if(i===Bh)return t.RED;if(i===kh)return t.RED_INTEGER;if(i===br)return t.RG;if(i===zh)return t.RG_INTEGER;if(i===Gh)return t.RGBA_INTEGER;if(i===Vc||i===Wc||i===Xc||i===qc)if(a===xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Vc)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Wc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Xc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===qc)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Vc)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Wc)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Xc)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===qc)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Hh||i===Vh||i===Wh||i===Xh)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Hh)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Vh)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Wh)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Xh)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===qh||i===$h||i===Yh||i===Kh||i===jh||i===$c||i===Zh)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(i===qh||i===$h)return a===xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Yh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Kh)return r.COMPRESSED_R11_EAC;if(i===jh)return r.COMPRESSED_SIGNED_R11_EAC;if(i===$c)return r.COMPRESSED_RG11_EAC;if(i===Zh)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Jh||i===Qh||i===eu||i===tu||i===nu||i===iu||i===su||i===ru||i===au||i===ou||i===cu||i===lu||i===hu||i===uu)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Jh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Qh)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===eu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===nu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===iu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===su)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===ru)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===au)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ou)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===cu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===lu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===hu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===uu)return a===xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===du||i===fu||i===pu)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(i===du)return a===xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===fu)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===pu)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===mu||i===gu||i===Yc||i===_u)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(i===mu)return r.COMPRESSED_RED_RGTC1_EXT;if(i===gu)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Yc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===_u)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===ca?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}function kE(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,sp(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,M,A,b){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),u(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),d(m,p),p.isMeshPhysicalMaterial&&f(m,p,b)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,A):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===En&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===En&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let M=e.get(p),A=M.envMap,b=M.envMapRotation;A&&(m.envMap.value=A,m.envMapRotation.value.setFromMatrix4(BE.makeRotationFromEuler(b)).transpose(),A.isCubeTexture&&A.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(bx),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,n(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,A){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=A*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function u(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,M){m.ior.value=p.ior,p.diffuseRoughness>0&&(m.diffuseRoughness.value=p.diffuseRoughness,p.diffuseRoughnessMap&&(m.diffuseRoughnessMap.value=p.diffuseRoughnessMap,n(p.diffuseRoughnessMap,m.diffuseRoughnessMapTransform))),p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===En&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessMinimum,m.iridescenceThicknessMaximum.value=p.iridescenceThicknessMaximum,p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function zE(t,e,n,i){let s={},r={};function a(M,A){let b=A.program;i.uniformBlockBinding(M,b,s[M.id])}function o(M,A){let b=s[M.id];b===void 0&&(g(M),b=c(M),s[M.id]=b,M.addEventListener("dispose",m));let w=A.program;i.updateUBOMapping(M,w);let E=e.render.frame;r[M.id]!==E&&(l(M),r[M.id]=E)}function c(M){let A=t.createBuffer(),b=M.__size,w=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,A),t.bufferData(t.UNIFORM_BUFFER,b,w),t.bindBuffer(t.UNIFORM_BUFFER,null),A}function l(M){let A=s[M.id],b=M.uniforms,w=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,A);for(let E=0,_=b.length;E<_;E++){let S=b[E];if(Array.isArray(S))for(let D=0,I=S.length;D<I;D++)h(S[D],E,D,w);else h(S,E,0,w)}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,A,b,w){if(d(M,A,b,w)===!0){let E=M.__offset,_=M.value;if(Array.isArray(_)){let S=0;for(let D=0;D<_.length;D++){let I=_[D],N=v(I,!0);u(I,M.__data,S),S+=N.storage/Float32Array.BYTES_PER_ELEMENT}}else u(_,M.__data,0);t.bufferSubData(t.UNIFORM_BUFFER,E,M.__data)}}function u(M,A,b){typeof M=="number"||typeof M=="boolean"?A[b]=M:M.isMatrix3?(A[b]=M.elements[0],A[b+1]=M.elements[1],A[b+2]=M.elements[2],A[b+3]=0,A[b+4]=M.elements[3],A[b+5]=M.elements[4],A[b+6]=M.elements[5],A[b+7]=0,A[b+8]=M.elements[6],A[b+9]=M.elements[7],A[b+10]=M.elements[8],A[b+11]=0):ArrayBuffer.isView(M)?A.set(M.subarray(0,A.length-b),b):M.toArray(A,b)}function d(M,A,b,w){let E=M.value,_=A+"_"+b;if(Array.isArray(E)){w[_]===void 0&&(w[_]=[]);let S=w[_],D=!1;for(let I=0;I<E.length;I++)f(E[I],S,I)===!0&&(D=!0);return D}return f(E,w,_)}function f(M,A,b){if(A[b]===void 0)return typeof M=="number"||typeof M=="boolean"?A[b]=M:ArrayBuffer.isView(M)?A[b]=M.slice():A[b]=M.clone(),!0;{let w=A[b];if(typeof M=="number"||typeof M=="boolean"){if(w!==M)return A[b]=M,!0}else{if(ArrayBuffer.isView(M))return!0;if(w.equals(M)===!1)return w.copy(M),!0}}return!1}function g(M){let A=M.uniforms,b=0,w=16;for(let _=0,S=A.length;_<S;_++){let D=Array.isArray(A[_])?A[_]:[A[_]];for(let I=0,N=D.length;I<N;I++){let B=D[I],V=Array.isArray(B.value)?B.value:[B.value],R=Array.isArray(A[_])||Array.isArray(B.value),G=b;for(let W=0,te=V.length;W<te;W++){let q=V[W],J=v(q,R),ee=b%w,ye=ee%J.boundary,Fe=ee+ye;b+=ye,Fe!==0&&w-Fe<J.storage&&(b+=w-Fe),W===0&&(G=b),b+=J.storage}let H=B.type==="int"?Int32Array:B.type==="uint"?Uint32Array:Float32Array;B.__data=new H((b-G)/Float32Array.BYTES_PER_ELEMENT),B.__offset=G}}let E=b%w;return E>0&&(b+=w-E),M.__size=b,M.__cache={},this}function v(M,A){let b={boundary:0,storage:0};return typeof M=="number"||typeof M=="boolean"?(b.boundary=4,b.storage=4):M.isVector2?(b.boundary=8,b.storage=8):M.isVector3||M.isColor?(b.boundary=16,b.storage=12):M.isVector4?(b.boundary=16,b.storage=16):M.isMatrix3?(b.boundary=16,b.storage=48):M.isMatrix4?(b.boundary=16,b.storage=64):M.isTexture?Ie("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(M)?(b.boundary=16,b.storage=M.byteLength):Ie("WebGLRenderer: Unsupported uniform value type.",M),A===!0&&(b.boundary=16,b.storage=Math.ceil(b.storage/16)*16),b}function m(M){let A=M.target;A.removeEventListener("dispose",m),t.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function p(){for(let M in s)t.deleteBuffer(s[M]);s={},r={}}return{bind:a,update:o,dispose:p}}function HE(){return os===null&&(os=new xr(GE,16,16,br,Vn),os.name="DFG_LUT",os.minFilter=Ct,os.magFilter=Ct,os.wrapS=jn,os.wrapT=jn,os.generateMipmaps=!1,os.needsUpdate=!0),os}var r2,a2,o2,c2,l2,h2,u2,d2,f2,p2,m2,g2,_2,x2,v2,y2,S2,M2,b2,T2,E2,A2,w2,R2,C2,I2,P2,L2,N2,D2,U2,F2,O2,B2,k2,z2,G2,H2,V2,W2,X2,q2,$2,Y2,K2,j2,Z2,J2,Q2,eb,tb,nb,ib,sb,rb,ab,ob,cb,lb,hb,ub,db,fb,pb,mb,gb,_b,xb,vb,yb,Sb,Mb,bb,Tb,Eb,Ab,wb,Rb,Cb,Ib,Pb,Lb,Nb,Db,Ub,Fb,Ob,Bb,kb,zb,Gb,Hb,Vb,Wb,Xb,qb,$b,Yb,Kb,jb,Zb,Jb,Qb,e3,t3,n3,i3,s3,r3,a3,o3,c3,l3,h3,u3,d3,f3,p3,m3,g3,_3,x3,v3,y3,S3,M3,b3,T3,E3,A3,w3,R3,C3,I3,P3,L3,N3,D3,U3,F3,O3,Qe,me,cs,vu,B3,px,Qc,q_,W3,X3,mx,gx,q3,$3,Y3,bo,rT,_x,xx,vx,yx,Sx,Mx,j_,Z_,J_,Q_,ex,up,dp,fp,lp,Mo,YT,KT,ix,QT,yu,rE,oE,lE,uE,fE,gE,mp,gp,TE,RE,CE,IE,PE,dx,Zc,hp,FE,OE,_p,xp,BE,bx,GE,os,Su,Eo=or(()=>{cp();cp();r2=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,a2=`#ifdef USE_ALPHAHASH
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
#endif`,o2=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,c2=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,l2=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,h2=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,u2=`#ifdef USE_AOMAP
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
#endif`,d2=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,f2=`#ifdef USE_BATCHING
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
#endif`,p2=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,m2=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,g2=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,_2=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,x2=`#ifdef USE_IRIDESCENCE
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
#endif`,v2=`#ifdef USE_BUMPMAP
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
#endif`,y2=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,S2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,M2=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,b2=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,T2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,E2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,A2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,w2=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,R2=`#define PI 3.141592653589793
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
} // validated`,C2=`vec3 transformedNormal = objectNormal;
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
#endif`,I2=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,P2=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,L2=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,N2=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,D2="gl_FragColor = linearToOutputTexel( gl_FragColor );",U2=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,F2=`#ifdef USE_ENVMAP
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
#endif`,O2=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	uniform samplerCube envMap;
	#ifdef ENVMAP_TYPE_PMREM
		float roughnessToMip( const in float roughness ) {
			float r = clamp( roughness, 0.0, 1.0 );
			return ENVMAP_MAX_LOD * r * ( 2.0 - r );
		}
	#endif
#endif`,B2=`#ifdef USE_ENVMAP
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
#endif`,k2=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,z2=`#ifdef USE_ENVMAP
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
#endif`,G2=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,H2=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,V2=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,W2=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,X2=`#ifdef USE_GRADIENTMAP
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
}`,q2=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$2=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Y2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,K2=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,j2=`#ifdef USE_ENVMAP
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
#endif`,Z2=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,J2=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Q2=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,eb=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tb=`PhysicalMaterial material;
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
#endif`,nb=`uniform sampler2D dfgLUT;
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
}`,ib=`
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
#endif`,sb=`#if defined( RE_IndirectDiffuse )
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
#endif`,rb=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ab=`#if NUM_LIGHT_PROBE_GRIDS > 0
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
#endif`,ob=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,cb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,lb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,ub=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,db=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,fb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,pb=`#if defined( USE_POINTS_UV )
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
#endif`,mb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,_b=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,xb=`#if defined( USE_MORPHCOLORS )
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
#endif`,vb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yb=`#ifdef USE_MORPHTARGETS
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
#endif`,Sb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,bb=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Tb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Eb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ab=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,wb=`#ifdef USE_NORMALMAP
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
#endif`,Rb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cb=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Ib=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pb=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Lb=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Nb=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Db=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Ub=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Fb=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ob=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bb=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,kb=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,zb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Gb=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Hb=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Vb=`float getShadowMask() {
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
}`,Wb=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xb=`#ifdef USE_SKINNING
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
#endif`,qb=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$b=`#ifdef USE_SKINNING
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
#endif`,Yb=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kb=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,jb=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Zb=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jb=`#ifdef USE_TRANSMISSION
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
#endif`,Qb=`#ifdef USE_TRANSMISSION
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
#endif`,e3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,t3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,n3=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,i3=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,s3=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,r3=`uniform sampler2D t2D;
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
}`,a3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,o3=`uniform float backgroundBlurriness;
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
}`,c3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,l3=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,h3=`#include <common>
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
}`,u3=`#if DEPTH_PACKING == 3200
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
}`,d3=`#define DISTANCE
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
}`,f3=`#define DISTANCE
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
}`,p3=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,m3=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g3=`uniform float scale;
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
}`,_3=`uniform vec3 diffuse;
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
}`,x3=`#include <common>
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
}`,v3=`uniform vec3 diffuse;
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
}`,y3=`#define LAMBERT
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
}`,S3=`#define LAMBERT
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
}`,M3=`#define MATCAP
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
}`,b3=`#define MATCAP
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
}`,T3=`#define NORMAL
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
}`,E3=`#define NORMAL
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
}`,A3=`#define PHONG
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
}`,w3=`#define PHONG
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
}`,R3=`#define STANDARD
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
}`,C3=`#define STANDARD
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
}`,I3=`#define TOON
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
}`,P3=`#define TOON
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
}`,L3=`uniform float size;
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
}`,N3=`uniform vec3 diffuse;
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
}`,D3=`#include <common>
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
}`,U3=`uniform vec3 color;
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
}`,F3=`uniform float rotation;
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
}`,O3=`uniform vec3 diffuse;
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
}`,Qe={alphahash_fragment:r2,alphahash_pars_fragment:a2,alphamap_fragment:o2,alphamap_pars_fragment:c2,alphatest_fragment:l2,alphatest_pars_fragment:h2,aomap_fragment:u2,aomap_pars_fragment:d2,batching_pars_vertex:f2,batching_vertex:p2,begin_vertex:m2,beginnormal_vertex:g2,bsdfs:_2,iridescence_fragment:x2,bumpmap_pars_fragment:v2,clipping_planes_fragment:y2,clipping_planes_pars_fragment:S2,clipping_planes_pars_vertex:M2,clipping_planes_vertex:b2,color_fragment:T2,color_pars_fragment:E2,color_pars_vertex:A2,color_vertex:w2,common:R2,defaultnormal_vertex:C2,displacementmap_pars_vertex:I2,displacementmap_vertex:P2,emissivemap_fragment:L2,emissivemap_pars_fragment:N2,colorspace_fragment:D2,colorspace_pars_fragment:U2,envmap_fragment:F2,envmap_common_pars_fragment:O2,envmap_pars_fragment:B2,envmap_pars_vertex:k2,envmap_physical_pars_fragment:j2,envmap_vertex:z2,fog_vertex:G2,fog_pars_vertex:H2,fog_fragment:V2,fog_pars_fragment:W2,gradientmap_pars_fragment:X2,lightmap_pars_fragment:q2,lights_lambert_fragment:$2,lights_lambert_pars_fragment:Y2,lights_pars_begin:K2,lights_toon_fragment:Z2,lights_toon_pars_fragment:J2,lights_phong_fragment:Q2,lights_phong_pars_fragment:eb,lights_physical_fragment:tb,lights_physical_pars_fragment:nb,lights_fragment_begin:ib,lights_fragment_maps:sb,lights_fragment_end:rb,lightprobes_pars_fragment:ab,logdepthbuf_fragment:ob,logdepthbuf_pars_fragment:cb,logdepthbuf_pars_vertex:lb,logdepthbuf_vertex:hb,map_fragment:ub,map_pars_fragment:db,map_particle_fragment:fb,map_particle_pars_fragment:pb,metalnessmap_fragment:mb,metalnessmap_pars_fragment:gb,morphinstance_vertex:_b,morphcolor_vertex:xb,morphnormal_vertex:vb,morphtarget_pars_vertex:yb,morphtarget_vertex:Sb,normal_fragment_begin:Mb,normal_fragment_maps:bb,normal_pars_fragment:Tb,normal_pars_vertex:Eb,normal_vertex:Ab,normalmap_pars_fragment:wb,clearcoat_normal_fragment_begin:Rb,clearcoat_normal_fragment_maps:Cb,clearcoat_pars_fragment:Ib,iridescence_pars_fragment:Pb,opaque_fragment:Lb,packing:Nb,premultiplied_alpha_fragment:Db,project_vertex:Ub,dithering_fragment:Fb,dithering_pars_fragment:Ob,roughnessmap_fragment:Bb,roughnessmap_pars_fragment:kb,shadowmap_pars_fragment:zb,shadowmap_pars_vertex:Gb,shadowmap_vertex:Hb,shadowmask_pars_fragment:Vb,skinbase_vertex:Wb,skinning_pars_vertex:Xb,skinning_vertex:qb,skinnormal_vertex:$b,specularmap_fragment:Yb,specularmap_pars_fragment:Kb,tonemapping_fragment:jb,tonemapping_pars_fragment:Zb,transmission_fragment:Jb,transmission_pars_fragment:Qb,uv_pars_fragment:e3,uv_pars_vertex:t3,uv_vertex:n3,worldpos_vertex:i3,background_vert:s3,background_frag:r3,backgroundCube_vert:a3,backgroundCube_frag:o3,cube_vert:c3,cube_frag:l3,depth_vert:h3,depth_frag:u3,distance_vert:d3,distance_frag:f3,equirect_vert:p3,equirect_frag:m3,linedashed_vert:g3,linedashed_frag:_3,meshbasic_vert:x3,meshbasic_frag:v3,meshlambert_vert:y3,meshlambert_frag:S3,meshmatcap_vert:M3,meshmatcap_frag:b3,meshnormal_vert:T3,meshnormal_frag:E3,meshphong_vert:A3,meshphong_frag:w3,meshphysical_vert:R3,meshphysical_frag:C3,meshtoon_vert:I3,meshtoon_frag:P3,points_vert:L3,points_frag:N3,shadow_vert:D3,shadow_frag:U3,sprite_vert:F3,sprite_frag:O3},me={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:[]},probesMin:{value:[]},probesMax:{value:[]},probesResolution:{value:[]}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},cs={basic:{uniforms:Fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Fn([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Fn([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Fn([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ze(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Fn([me.points,me.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Fn([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Fn([me.common,me.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Fn([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Fn([me.sprite,me.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distance:{uniforms:Fn([me.common,me.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distance_vert,fragmentShader:Qe.distance_frag},shadow:{uniforms:Fn([me.lights,me.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};cs.physical={uniforms:Fn([cs.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},diffuseRoughness:{value:0},diffuseRoughnessMap:{value:null},diffuseRoughnessMapTransform:{value:new We},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};vu={r:0,b:0,g:0},B3=new $e,px=new We;px.set(-1,0,0,0,1,0,0,0,1);Qc=class extends hi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;let i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Ac(s),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new yr(5,5,5),r=new ts({name:"CubemapFromEquirect",uniforms:la(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:En,blending:sa});r.uniforms.tEquirect.value=n;let a=new At(s,r),o=n.minFilter;return n.minFilter===ui&&(n.minFilter=Ct),new fo(1,10,this).update(e,a),n.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,n=!0,i=!0,s=!0){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(n,i,s);e.setRenderTarget(r)}},q_=256,W3=3,X3=20,mx=256,gx=16,q3=3,$3=new F,Y3=new ze,bo=class t{constructor(e){this._renderer=e,this._cubeSize=0,this._sourceTarget=null,this._cubeCamera=new fo(1,10,null),this._boxMesh=new At(new yr(5,5,5),null),this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null,this._integrationMaterial=null}fromScene(e,n=0,i=.1,s=100,r={}){let{size:a=256,position:o=$3}=r,c=this._renderer;this._setSize(a);let l=this._allocateTarget(),h=this._getSourceTarget(!0);n>0&&(h.texture.mipmapsAutoUpdate=!1);let u=c.autoClear,d=c.autoClearColor,f=c.autoClearDepth,g=c.autoClearStencil,v=e.background;c.autoClear=!0,c.autoClearColor=!0,c.autoClearDepth=!0,c.autoClearStencil=!0,v===null&&(e.background=c.getClearColor(Y3));let m=new fo(i,s,h);return m.position.copy(o),m.update(c,e),c.autoClear=u,c.autoClearColor=d,c.autoClearDepth=f,c.autoClearStencil=g,e.background=v,n>0&&(h.texture.mipmapsAutoUpdate=!0,this._blur(l,n)),this._applyPMREM(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Y_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._sourceTarget!==null&&this._sourceTarget.dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._integrationMaterial!==null&&this._integrationMaterial.dispose(),this._boxMesh.geometry.dispose()}static lodToRoughness(e,n){return n>0?1-Math.sqrt(1-e/n):0}_setSize(e){this._cubeSize=Math.max(q_,tp(e))}_fromTexture(e,n){e.mapping===aa||e.mapping===go?this._setSize(e.image.length===0?q_:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4);let i=n||this._allocateTarget();return this._textureToCubemap(e),this._applyPMREM(i),i}_allocateTarget(){let e=this._cubeSize,n=$_(e,!1,!1),i=Math.log2(e)-W3;for(let s=0;s<=i;s++)n.texture.mipmaps.push({width:e>>s,height:e>>s});return n.texture.name="PMREM",n.texture.isPMREMTexture=!0,n}_getSourceTarget(e=!1){let n=this._cubeSize,i=this._sourceTarget;return(i===null||i.width!==n||e&&i.depthBuffer===!1)&&(i!==null&&i.dispose(),this._sourceTarget=$_(n,!0,e)),this._sourceTarget}_compileMaterial(e){this._boxMesh.material=e,this._renderer.compile(this._boxMesh,this._cubeCamera.children[0])}_renderCube(e,n,i){let s=this._boxMesh,r=this._cubeCamera;s.material=i,r.renderTarget=e,r.activeMipmapLevel=n;let a=e.width>>n;e.viewport.set(0,0,a,a),r.update(this._renderer,s),e.viewport.set(0,0,e.width,e.height)}_textureToCubemap(e){let n;e.mapping===aa||e.mapping===go?(this._cubemapMaterial===null&&(this._cubemapMaterial=K_()),n=this._cubemapMaterial,n.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):(this._equirectMaterial===null&&(this._equirectMaterial=Y_()),n=this._equirectMaterial),n.uniforms.envMap.value=e,this._renderCube(this._getSourceTarget(),0,n)}_applyPMREM(e){this._ggxMaterial===null&&(this._ggxMaterial=K3(),this._integrationMaterial=j3());let n=this._cubeSize,i=e.texture.mipmaps.length-1,s=this._ggxMaterial.uniforms;s.envMap.value=this._sourceTarget.texture;let r=this._integrationMaterial.uniforms;r.envMap.value=this._sourceTarget.texture,r.sourceLod.value=Math.log2(n/gx);for(let a=0;a<=i;a++){let o=t.lodToRoughness(a,i);if(a>i-q3)r.roughness.value=o,this._renderCube(e,a,this._integrationMaterial);else{let c=o>0?Math.log2(n)+.5*Math.log2(6/(mx*Math.pow(o,4)))+.5:0;s.roughness.value=o,s.lodBias.value=c,this._renderCube(e,a,this._ggxMaterial)}}}_blur(e,n){this._blurMaterial===null&&(this._blurMaterial=Z3());let i=this._blurMaterial,s=i.uniforms,r=this._sourceTarget;s.sigma.value=Math.min(n,Math.PI)/Math.SQRT2,s.envMap.value=r.texture,this._renderCube(e,0,i),s.envMap.value=e.texture,this._renderCube(r,0,i)}};rT={[Uf]:"LINEAR_TONE_MAPPING",[Ff]:"REINHARD_TONE_MAPPING",[Of]:"CINEON_TONE_MAPPING",[Hc]:"ACES_FILMIC_TONE_MAPPING",[kf]:"AGX_TONE_MAPPING",[zf]:"NEUTRAL_TONE_MAPPING",[Bf]:"CUSTOM_TONE_MAPPING"};_x=new an,xx=new Us(1,1),vx=new Rc(1),yx=new xc,Sx=new _h,Mx=new Ac,j_=[],Z_=[],J_=new Float32Array(16),Q_=new Float32Array(9),ex=new Float32Array(4);up=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=AT(n.type)}},dp=class{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=qT(n.type)}},fp=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,n[o.id],i)}}},lp=/(\w+)(\])?(\[|\.)?/g;Mo=class{constructor(e,n){this.seq=[],this.map={};let i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=e.getActiveUniform(n,a),c=e.getUniformLocation(n,o.name);$T(o,c,this)}let s=[],r=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,n,i,s){let r=this.map[n];r!==void 0&&r.setValue(e,i,s)}setOptional(e,n,i){let s=n[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,n,i,s){for(let r=0,a=n.length;r!==a;++r){let o=n[r],c=i[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,s)}}static seqWithValue(e,n){let i=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in n&&i.push(a)}return i}};YT=37297,KT=0;ix=new We;QT={[Uf]:"Linear",[Ff]:"Reinhard",[Of]:"Cineon",[Hc]:"ACESFilmic",[kf]:"AgX",[zf]:"Neutral",[Bf]:"Custom"};yu=new F;rE=/^[ \t]*#include +<([\w\d./]+)>/gm;oE=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;lE={[Gc]:"SHADOWMAP_TYPE_PCF",[po]:"SHADOWMAP_TYPE_VSM"};uE={[go]:"ENVMAP_MODE_REFRACTION"};fE={[Lh]:"ENVMAP_BLENDING_MULTIPLY",[A_]:"ENVMAP_BLENDING_MIX",[w_]:"ENVMAP_BLENDING_ADD"};gE=0,mp=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,n,i){let s=this._getShaderCacheForMaterial(e);return s.has(n)===!1&&(s.add(n),n.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(e){let n=this.materialCache.get(e);for(let i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let n=this.materialCache,i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){let n=this.shaderCache,i=n.get(e);return i===void 0&&(i=new gp(e),n.set(e,i)),i}},gp=class{constructor(e){this.id=gE++,this.code=e,this.usedTimes=0}};TE=0;RE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,CE=`uniform sampler2D shadow_pass;
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
}`,IE=[new F(1,0,0),new F(-1,0,0),new F(0,1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1)],PE=[new F(0,-1,0),new F(0,-1,0),new F(0,0,1),new F(0,0,-1),new F(0,-1,0),new F(0,-1,0)],dx=new $e,Zc=new F,hp=new F;FE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,OE=`
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

}`,_p=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){let i=new Cc(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){let n=e.cameras[0].viewport,i=new ts({vertexShader:FE,fragmentShader:OE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new At(new ea(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},xp=class extends Qi{constructor(e,n){super();let i=this,s=null,r=1,a=null,o="local-floor",c=1,l=null,h=null,u=null,d=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new _p,p={},M=n.getContextAttributes(),A=null,b=null,w=[],E=[],_=new je,S=null,D=null,I=new rn;I.viewport=new St;let N=new rn;N.viewport=new St;let B=[I,N],V=new Ph,R=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(K){let ge=w[K];return ge===void 0&&(ge=new so,w[K]=ge),ge.getTargetRaySpace()},this.getControllerGrip=function(K){let ge=w[K];return ge===void 0&&(ge=new so,w[K]=ge),ge.getGripSpace()},this.getHand=function(K){let ge=w[K];return ge===void 0&&(ge=new so,w[K]=ge),ge.getHandSpace()};function H(K){let ge=E.indexOf(K.inputSource);if(ge===-1)return;let Te=w[ge];Te!==void 0&&(Te.update(K.inputSource,K.frame,l||a),Te.dispatchEvent({type:K.type,data:K.inputSource}))}function W(){s.removeEventListener("select",H),s.removeEventListener("selectstart",H),s.removeEventListener("selectend",H),s.removeEventListener("squeeze",H),s.removeEventListener("squeezestart",H),s.removeEventListener("squeezeend",H),s.removeEventListener("end",W),s.removeEventListener("inputsourceschange",te);for(let K=0;K<w.length;K++){let ge=E[K];ge!==null&&(E[K]=null,w[K].disconnect(ge))}R=null,G=null,m.reset();for(let K in p)delete p[K];if(e.setRenderTarget(A),f=null,d=null,u=null,s=null,b=null,Fe.stop(),i.isPresenting=!1,e.setPixelRatio(S),e.setSize(_.width,_.height,!1),D!==null){let K=D.camera;K.fov=D.fov,K.zoom=D.zoom,K.updateProjectionMatrix(),D=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(K){r=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(K){o=K,i.isPresenting===!0&&Ie("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(K){l=K},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&v&&(u=new XRWebGLBinding(s,n)),u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(K){if(s=K,s!==null){if(A=e.getRenderTarget(),s.addEventListener("select",H),s.addEventListener("selectstart",H),s.addEventListener("selectend",H),s.addEventListener("squeeze",H),s.addEventListener("squeezestart",H),s.addEventListener("squeezeend",H),s.addEventListener("end",W),s.addEventListener("inputsourceschange",te),M.xrCompatible!==!0&&await n.makeXRCompatible(),S=e.getPixelRatio(),e.getSize(_),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Te=null,Be=null,xe=null;M.depth&&(xe=M.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,Te=M.stencil?Gs:Ns,Be=M.stencil?ca:Hi);let Ye={colorFormat:n.RGBA8,depthFormat:xe,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Ye),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),b=new hi(d.textureWidth,d.textureHeight,{format:Ai,type:ei,depthTexture:new Us(d.textureWidth,d.textureHeight,Be,void 0,void 0,void 0,void 0,void 0,void 0,Te),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1,storeMultisampledDepthBuffer:d.ignoreDepthValues===!1,storeMultisampledStencilBuffer:d.ignoreDepthValues===!1})}else{let Te={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,n,Te),s.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),b=new hi(f.framebufferWidth,f.framebufferHeight,{format:Ai,type:ei,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function te(K){for(let ge=0;ge<K.removed.length;ge++){let Te=K.removed[ge],Be=E.indexOf(Te);Be>=0&&(E[Be]=null,w[Be].disconnect(Te))}for(let ge=0;ge<K.added.length;ge++){let Te=K.added[ge],Be=E.indexOf(Te);if(Be===-1){for(let Ye=0;Ye<w.length;Ye++)if(Ye>=E.length){E.push(Te),Be=Ye;break}else if(E[Ye]===null){E[Ye]=Te,Be=Ye;break}if(Be===-1)break}let xe=w[Be];xe&&xe.connect(Te)}}function q(K,ge){ge===null?K.matrixWorld.copy(K.matrix):K.matrixWorld.multiplyMatrices(ge.matrixWorld,K.matrix),K.matrixWorldInverse.copy(K.matrixWorld).invert()}this.updateCamera=function(K){if(s===null)return;let ge=K.near,Te=K.far;m.texture!==null&&(m.depthNear>0&&(ge=m.depthNear),m.depthFar>0&&(Te=m.depthFar)),V.near=N.near=I.near=ge,V.far=N.far=I.far=Te,(R!==V.near||G!==V.far)&&(s.updateRenderState({depthNear:V.near,depthFar:V.far}),R=V.near,G=V.far),V.layers.mask=K.layers.mask|6,I.layers.mask=V.layers.mask&-5,N.layers.mask=V.layers.mask&-3;let Be=K.parent,xe=V.cameras;q(V,Be);for(let Ye=0;Ye<xe.length;Ye++)q(xe[Ye],Be);V.projectionMatrix.copy(I.projectionMatrix),V.projectionMatrixInverse.copy(I.projectionMatrixInverse),D===null&&K.isPerspectiveCamera&&(D={camera:K,fov:K.fov,zoom:K.zoom}),J(K,V,Be)};function J(K,ge,Te){Te===null?K.matrix.copy(ge.matrixWorld):(K.matrix.copy(Te.matrixWorld),K.matrix.invert(),K.matrix.multiply(ge.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0),K.projectionMatrix.copy(ge.projectionMatrix),K.projectionMatrixInverse.copy(ge.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=jr*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getCamera=function(){return V},this.getFoveation=function(){if(!(d===null&&f===null))return c},this.setFoveation=function(K){c=K,d!==null&&(d.fixedFoveation=K),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=K)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(V)},this.getCameraTexture=function(K){return p[K]};let ee=null;function ye(K,ge){if(h=ge.getViewerPose(l||a),g=ge,h!==null){let Te=h.views;f!==null&&(e.setRenderTargetFramebuffer(b,f.framebuffer),e.setRenderTarget(b));let Be=!1;Te.length!==V.cameras.length&&(V.cameras.length=0,Be=!0);for(let He=0;He<Te.length;He++){let vt=Te[He],bt=null;if(f!==null)bt=f.getViewport(vt);else{let Sn=u.getViewSubImage(d,vt);bt=Sn.viewport,He===0&&(e.setRenderTargetTextures(b,Sn.colorTexture,Sn.depthStencilTexture),e.setRenderTarget(b))}let st=B[He];st===void 0&&(st=new rn,st.layers.enable(He),st.viewport=new St,B[He]=st),st.matrix.fromArray(vt.transform.matrix),st.matrix.decompose(st.position,st.quaternion,st.scale),st.projectionMatrix.fromArray(vt.projectionMatrix),st.projectionMatrixInverse.copy(st.projectionMatrix).invert(),st.viewport.set(bt.x,bt.y,bt.width,bt.height),He===0&&(V.matrix.copy(st.matrix),V.matrix.decompose(V.position,V.quaternion,V.scale)),Be===!0&&V.cameras.push(st)}let xe=s.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){u=i.getBinding();let He=u.getDepthInformation(Te[0]);He&&He.isValid&&He.texture&&m.init(He,s.renderState)}if(xe&&xe.includes("camera-access")&&v){e.state.unbindTexture(),u=i.getBinding();for(let He=0;He<Te.length;He++){let vt=Te[He].camera;if(vt){let bt=p[vt];bt||(bt=new Cc,p[vt]=bt);let st=u.getCameraImage(vt);bt.sourceTexture=st}}}}for(let Te=0;Te<w.length;Te++){let Be=E[Te],xe=w[Te];Be!==null&&xe!==void 0&&xe.update(Be,ge,l||a)}ee&&ee(K,ge),ge.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ge}),g=null}let Fe=new fx;Fe.setAnimationLoop(ye),this.setAnimationLoop=function(K){ee=K},this.dispose=function(){}}},BE=new $e,bx=new We;bx.set(-1,0,0,0,1,0,0,0,1);GE=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),os=null;Su=class{constructor(e={}){let{canvas:n=B_(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1,outputBufferType:f=ei}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Gh,zh,kh]),p=new Set([ei,Hi,vo,ca,Fh,Oh]),M=new Uint32Array(4),A=new Int32Array(4),b={textures:[],min:[],max:[],resolution:[]},w=null,E=null,_=[],S=[],D=null;this.domElement=n,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=rs,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,N=!1,B=null,V=null,R=null,G=null;this._outputColorSpace=Xt;let H=0,W=0,te=null,q=-1,J=null,ee=new St,ye=new St,Fe=null,K=new ze(0),ge=0,Te=n.width,Be=n.height,xe=1,Ye=null,jt=null,He=new St(0,0,Te,Be),vt=new St(0,0,Te,Be),bt=!1,st=new vr,Sn=new xh,nn=!1,Kn=!1,Ot=new $e,ji=new F,mn=new St,yi={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},Si=!1;function Mi(){return te===null?xe:1}let U=i;function bi(y,P){return n.getContext(y,P)}let Nt,Dt,fe,sn,ke,Xe,T,x,k,ne,Q,ae,ue,Y,j,ce,C,Z,$,le,se,oe,Pe;try{let y={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${"187"}`),n.addEventListener("webglcontextlost",Oe,!1),n.addEventListener("webglcontextrestored",Ze,!1),n.addEventListener("webglcontextcreationerror",pe,!1),U===null){let P="webgl2";if(U=bi(P,y),U===null)throw bi(P)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Je()}catch(y){throw n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),Ve("WebGLRenderer: "+y.message),y}function Je(){Nt=new Q3(U),Nt.init(),se=new UE(U,Nt),Dt=new H3(U,Nt,e,se),fe=new NE(U,Nt),Dt.reversedDepthBuffer&&d&&fe.buffers.depth.setReversed(!0),V=U.createFramebuffer(),R=U.createFramebuffer(),G=U.createFramebuffer(),sn=new nT(U),ke=new vE,Xe=new DE(U,Nt,fe,ke,Dt,se,sn),T=new J3(I),x=new s2(U),oe=new z3(U,x),k=new eT(U,x,sn,oe),ne=new sT(U,k,x,oe,sn),Z=new iT(U,Dt,Xe),j=new V3(ke),Q=new xE(I,T,Nt,Dt,oe,j),ae=new kE(I,ke),ue=new SE,Y=new wE(Nt),C=new k3(I,T,fe,ne,g,c),ce=new LE(I,ne,Dt),Pe=new zE(U,sn,Dt,fe),$=new G3(U,Nt,sn),le=new tT(U,Nt,sn),sn.programs=Q.programs,I.capabilities=Dt,I.extensions=Nt,I.properties=ke,I.renderLists=ue,I.shadowMap=ce,I.state=fe,I.info=sn}v!==ei&&(D=new aT(v,n.width,n.height,o,s,r));let ie=new xp(I,U);this.xr=ie,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let y=Nt.get("WEBGL_lose_context");y&&y.loseContext()},this.forceContextRestore=function(){let y=Nt.get("WEBGL_lose_context");y&&y.restoreContext()},this.getPixelRatio=function(){return xe},this.setPixelRatio=function(y){y!==void 0&&(xe=y,this.setSize(Te,Be,!1))},this.getSize=function(y){return y.set(Te,Be)},this.setSize=function(y,P,X=!0){if(ie.isPresenting){Ie("WebGLRenderer: Can't change size while VR device is presenting.");return}Te=y,Be=P,n.width=Math.floor(y*xe),n.height=Math.floor(P*xe),X===!0&&(n.style.width=y+"px",n.style.height=P+"px"),D!==null&&D.setSize(n.width,n.height),this.setViewport(0,0,y,P)},this.getDrawingBufferSize=function(y){return y.set(Te*xe,Be*xe).floor()},this.setDrawingBufferSize=function(y,P,X){Te=y,Be=P,xe=X,n.width=Math.floor(y*X),n.height=Math.floor(P*X),this.setViewport(0,0,y,P)},this.setEffects=function(y){if(v===ei){Ve("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(y){for(let P=0;P<y.length;P++)if(y[P].isOutputPass===!0){Ie("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}D.setEffects(y||[])},this.getCurrentViewport=function(y){return y.copy(ee)},this.getViewport=function(y){return y.copy(He)},this.setViewport=function(y,P,X,O){y.isVector4?He.set(y.x,y.y,y.z,y.w):He.set(y,P,X,O),fe.viewport(ee.copy(He).multiplyScalar(Mi()).round())},this.getScissor=function(y){return y.copy(vt)},this.setScissor=function(y,P,X,O){y.isVector4?vt.set(y.x,y.y,y.z,y.w):vt.set(y,P,X,O),fe.scissor(ye.copy(vt).multiplyScalar(Mi()).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(y){fe.setScissorTest(bt=y)},this.setOpaqueSort=function(y){Ye=y},this.setTransparentSort=function(y){jt=y},this.getClearColor=function(y){return y.copy(C.getClearColor())},this.setClearColor=function(){C.setClearColor(...arguments)},this.getClearAlpha=function(){return C.getClearAlpha()},this.setClearAlpha=function(){C.setClearAlpha(...arguments)},this.clear=function(y=!0,P=!0,X=!0){let O=0;if(y){let z=!1;if(te!==null){let de=te.texture.format;z=m.has(de)}if(z){let de=te.texture.type,Me=p.has(de),he=C.getClearColor(),ve=C.getClearAlpha(),Ce=he.r,qe=he.g,rt=he.b;Me?(M[0]=Ce,M[1]=qe,M[2]=rt,M[3]=ve,U.clearBufferuiv(U.COLOR,0,M)):(A[0]=Ce,A[1]=qe,A[2]=rt,A[3]=ve,U.clearBufferiv(U.COLOR,0,A))}else O|=U.COLOR_BUFFER_BIT}P&&(O|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),X&&(O|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),O!==0&&U.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(y){y.setRenderer(this),B=y},this.dispose=function(){n.removeEventListener("webglcontextlost",Oe,!1),n.removeEventListener("webglcontextrestored",Ze,!1),n.removeEventListener("webglcontextcreationerror",pe,!1),C.dispose(),ue.dispose(),Y.dispose(),Xe.dispose(),ke.dispose(),T.dispose(),ne.dispose(),k.dispose(),oe.dispose(),Pe.dispose(),Q.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",o0),ie.removeEventListener("sessionend",c0),zr.stop()};function Oe(y){y.preventDefault(),_c("WebGLRenderer: Context Lost."),N=!0}function Ze(){_c("WebGLRenderer: Context Restored."),N=!1;let y=sn.autoReset,P=ce.enabled,X=ce.autoUpdate,O=ce.needsUpdate,z=ce.type;Je(),sn.autoReset=y,ce.enabled=P,ce.autoUpdate=X,ce.needsUpdate=O,ce.type=z}function pe(y){Ve("WebGLRenderer: A WebGL context could not be created. Reason: ",y.statusMessage)}function yt(y){let P=y.target;P.removeEventListener("dispose",yt),gn(P)}function gn(y){rr(y),ke.remove(y)}function rr(y){let P=ke.get(y).programs;P!==void 0&&(P.forEach(function(X){Q.releaseProgram(X)}),y.isShaderMaterial&&Q.releaseShaderCache(y))}this.renderBufferDirect=function(y,P,X,O,z,de){P===null&&(P=yi);let Me=z.isMesh&&z.matrixWorld.determinantAffine()<0,he=YS(y,P,X,O,z);fe.setMaterial(O,Me);let ve=X.index,Ce=1;if(O.wireframe===!0){if(ve=k.getWireframeAttribute(X),ve===void 0)return;Ce=2}let qe=X.drawRange,rt=X.attributes.position,Ee=qe.start*Ce,at=(qe.start+qe.count)*Ce;de!==null&&(Ee=Math.max(Ee,de.start*Ce),at=Math.min(at,(de.start+de.count)*Ce)),ve!==null?(Ee=Math.max(Ee,0),at=Math.min(at,ve.count)):rt!=null&&(Ee=Math.max(Ee,0),at=Math.min(at,rt.count));let Zt=at-Ee;if(Zt<0||Zt===1/0)return;oe.setup(z,O,he,X,ve);let wt,Tt=$;if(ve!==null&&(wt=x.get(ve),Tt=le,Tt.setIndex(wt)),z.isMesh)O.wireframe===!0?(fe.setLineWidth(O.wireframeLinewidth*Mi()),Tt.setMode(U.LINES)):Tt.setMode(U.TRIANGLES);else if(z.isLine){let Cn=O.linewidth;Cn===void 0&&(Cn=1),fe.setLineWidth(Cn*Mi()),z.isLineSegments?Tt.setMode(U.LINES):z.isLineLoop?Tt.setMode(U.LINE_LOOP):Tt.setMode(U.LINE_STRIP)}else z.isPoints?Tt.setMode(U.POINTS):z.isSprite&&Tt.setMode(U.TRIANGLES);if(z.isBatchedMesh)if(Nt.get("WEBGL_multi_draw"))Tt.renderMultiDraw(z._multiDrawStarts,z._multiDrawCounts,z._multiDrawCount);else{let Cn=z._multiDrawStarts,Ae=z._multiDrawCounts,On=z._multiDrawCount,gt=ve?x.get(ve).bytesPerElement:1,Gr=ke.get(O).currentProgram.getUniforms();for(let In=0;In<On;In++)Gr.setValue(U,"_gl_DrawID",In),Tt.render(Cn[In]/gt,Ae[In])}else if(z.isInstancedMesh)Tt.renderInstances(Ee,Zt,z.count);else if(X.isInstancedBufferGeometry){let Cn=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ae=Math.min(X.instanceCount,Cn);Tt.renderInstances(Ee,Zt,Ae)}else Tt.render(Ee,Zt)};function a0(y,P,X,O){B!==null&&y.isNodeMaterial&&B.setObject(O,y),nn===!0&&j.setState(y,X,!1),y.transparent===!0&&y.side===Hn&&y.forceSinglePass===!1?(y.side=En,y.needsUpdate=!0,sc(y,P,O),y.side=ss,y.needsUpdate=!0,sc(y,P,O),y.side=Hn):sc(y,P,O)}this.compile=function(y,P,X=null){X===null&&(X=y),B!==null&&B.renderStart(y,P,X),E=Y.get(X),E.init(P),S.push(E),X.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),y!==X&&y.traverseVisible(function(z){z.isLight&&z.layers.test(P.layers)&&(E.pushLight(z),z.castShadow&&E.pushShadow(z))}),E.setupLights(),B!==null&&B.updateLights(E.state.lightsArray),Kn=this.localClippingEnabled,nn=j.init(this.clippingPlanes,Kn),nn===!0&&j.setGlobalState(this.clippingPlanes,P),B!==null&&ce.render(E.state.shadowsArray,X,P);let O=new Set;return y.traverse(function(z){if(!(z.isMesh||z.isPoints||z.isLine||z.isSprite))return;let de=z.material;if(de)if(Array.isArray(de))for(let Me=0;Me<de.length;Me++){let he=de[Me];a0(he,X,P,z),O.add(he)}else a0(de,X,P,z),O.add(de)}),E=S.pop(),B!==null&&B.renderEnd(),O},this.compileAsync=function(y,P,X=null){let O=this.compile(y,P,X);return new Promise(z=>{function de(){if(O.forEach(function(Me){let ve=ke.get(Me).currentProgram;(ve===void 0||ve.isReady())&&O.delete(Me)}),O.size===0){z(y);return}setTimeout(de,10)}Nt.get("KHR_parallel_shader_compile")!==null?de():setTimeout(de,10)})};let Vd=null;function qS(y){Vd&&Vd(y)}function o0(){zr.stop()}function c0(){zr.start()}let zr=new fx;zr.setAnimationLoop(qS),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(y){Vd=y,ie.setAnimationLoop(y),y===null?zr.stop():zr.start()},ie.addEventListener("sessionstart",o0),ie.addEventListener("sessionend",c0),this.render=function(y,P){if(P!==void 0&&P.isCamera!==!0){Ve("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(N===!0)return;B!==null&&B.renderStart(y,P);let X=ie.enabled===!0&&ie.isPresenting===!0,O=D!==null&&(te===null||X)&&D.begin(I,te);if(y.matrixWorldAutoUpdate===!0&&y.updateMatrixWorld(),P.parent===null&&P.matrixWorldAutoUpdate===!0&&P.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(D===null||D.isCompositing()===!1)&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(P),P=ie.getCamera()),y.isScene===!0&&y.onBeforeRender(I,y,P,te),E=Y.get(y,S.length),E.init(P),E.state.textureUnits=Xe.getTextureUnits(),S.push(E),Ot.multiplyMatrices(P.projectionMatrix,P.matrixWorldInverse),P.isArrayCamera?Sn.setFromArrayCamera(P):st.setFromProjectionMatrix(Ot,Ei,P.reversedDepth),Kn=this.localClippingEnabled,nn=j.init(this.clippingPlanes,Kn),w=ue.get(y,_.length),w.init(),_.push(w),this.info.render.frame++,ie.enabled===!0&&ie.isPresenting===!0){let Me=I.xr.getDepthSensingMesh();Me!==null&&Wd(Me,P,-1/0,I.sortObjects)}Wd(y,P,0,I.sortObjects),w.finish(),B!==null&&B.updateLights(E.state.lightsArray),I.sortObjects===!0&&w.sort(Ye,jt),Si=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Si&&C.addToRenderList(w,y),this.info.autoReset===!0&&this.info.reset(),nn===!0&&j.beginShadows();let z=E.state.shadowsArray;if(ce.render(z,y,P),nn===!0&&j.endShadows(),(O&&D.hasRenderPass())===!1){let Me=w.opaque,he=w.transmissive;if(E.setupLights(),P.isArrayCamera){let ve=P.cameras;if(he.length>0)for(let Ce=0,qe=ve.length;Ce<qe;Ce++){let rt=ve[Ce];h0(Me,he,y,rt)}Si&&C.render(y);for(let Ce=0,qe=ve.length;Ce<qe;Ce++){let rt=ve[Ce];l0(w,y,rt,rt.viewport)}}else he.length>0&&h0(Me,he,y,P),Si&&C.render(y),l0(w,y,P)}te!==null&&W===0&&(Xe.updateMultisampleRenderTarget(te),Xe.updateRenderTargetMipmap(te)),O&&D.end(I),y.isScene===!0&&y.onAfterRender(I,y,P),oe.resetDefaultState(),q=-1,J=null,S.pop(),S.length>0?(E=S[S.length-1],Xe.setTextureUnits(E.state.textureUnits),nn===!0&&j.setGlobalState(I.clippingPlanes,E.state.camera)):E=null,_.pop(),_.length>0?w=_[_.length-1]:w=null,B!==null&&B.renderEnd()};function Wd(y,P,X,O){if(y.visible===!1)return;if(y.layers.test(P.layers)){if(y.isGroup)X=y.renderOrder;else if(y.isLOD)y.autoUpdate===!0&&y.update(P);else if(y.isLight)E.pushLight(y),y.castShadow&&E.pushShadow(y);else if(y.isSprite){let Me=P.isArrayCamera?Sn:st;if(!y.frustumCulled||y.intersectsFrustum(Me)){O&&mn.setFromMatrixPosition(y.matrixWorld).applyMatrix4(Ot);let he=ne.update(y),ve=y.material;ve.visible&&w.push(y,he,ve,X,mn.z,null,P)}}else if(y.isMesh||y.isLine||y.isPoints){let Me=P.isArrayCamera?Sn:st;if(!y.frustumCulled||y.intersectsFrustum(Me)){let he=ne.update(y),ve=y.material;if(O&&(y.boundingSphere!==void 0?(y.boundingSphere===null&&y.computeBoundingSphere(),mn.copy(y.boundingSphere.center)):(he.boundingSphere===null&&he.computeBoundingSphere(),mn.copy(he.boundingSphere.center)),mn.applyMatrix4(y.matrixWorld).applyMatrix4(Ot)),Array.isArray(ve)){let Ce=he.groups;for(let qe=0,rt=Ce.length;qe<rt;qe++){let Ee=Ce[qe],at=ve[Ee.materialIndex];at&&at.visible&&w.push(y,he,at,X,mn.z,Ee,P)}}else ve.visible&&w.push(y,he,ve,X,mn.z,null,P)}}}let de=y.children;for(let Me=0,he=de.length;Me<he;Me++)Wd(de[Me],P,X,O)}function l0(y,P,X,O){let{opaque:z,transmissive:de,transparent:Me}=y;E.setupLightsView(X),nn===!0&&j.setGlobalState(I.clippingPlanes,X),O&&fe.viewport(ee.copy(O)),z.length>0&&Nl(z,P,X),de.length>0&&Nl(de,P,X),Me.length>0&&Nl(Me,P,X),fe.buffers.depth.setTest(!0),fe.buffers.depth.setMask(!0),fe.buffers.color.setMask(!0),fe.setPolygonOffset(!1)}function h0(y,P,X,O){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[O.id]===void 0){let Ee=Nt.has("EXT_color_buffer_half_float")||Nt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[O.id]=new hi(1,1,{generateMipmaps:!0,type:Ee?Vn:ei,minFilter:ui,samples:Math.max(4,Dt.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}let de=E.state.transmissionRenderTarget[O.id],Me=O.viewport||ee;de.setSize(Me.z*I.transmissionResolutionScale,Me.w*I.transmissionResolutionScale);let he=I.getRenderTarget(),ve=I.getActiveCubeFace(),Ce=I.getActiveMipmapLevel();I.setRenderTarget(de),I.getClearColor(K),ge=I.getClearAlpha(),ge<1&&I.setClearColor(16777215,.5),I.clear(),Si&&C.render(X);let qe=I.toneMapping;I.toneMapping=rs;let rt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),E.setupLightsView(O),nn===!0&&j.setGlobalState(I.clippingPlanes,O),Nl(y,X,O),Xe.updateMultisampleRenderTarget(de),Xe.updateRenderTargetMipmap(de),Nt.has("WEBGL_multisampled_render_to_texture")===!1){let Ee=!1;for(let at=0,Zt=P.length;at<Zt;at++){let wt=P[at],{object:Tt,geometry:Cn,material:Ae,group:On}=wt;if(Ae.side===Hn&&Tt.layers.test(O.layers)){let gt=Ae.side;Ae.side=En,Ae.needsUpdate=!0,u0(Tt,X,O,Cn,Ae,On),Ae.side=gt,Ae.needsUpdate=!0,Ee=!0}}Ee===!0&&(Xe.updateMultisampleRenderTarget(de),Xe.updateRenderTargetMipmap(de))}I.setRenderTarget(he,ve,Ce),I.setClearColor(K,ge),rt!==void 0&&(O.viewport=rt),I.toneMapping=qe}function Nl(y,P,X){let O=P.isScene===!0?P.overrideMaterial:null;for(let z=0,de=y.length;z<de;z++){let Me=y[z],{object:he,geometry:ve,group:Ce}=Me,qe=Me.material;qe.allowOverride===!0&&O!==null&&(qe=O),he.layers.test(X.layers)&&u0(he,P,X,ve,qe,Ce)}}function u0(y,P,X,O,z,de){B!==null&&z.isNodeMaterial&&B.setObject(y,z),y.onBeforeRender(I,P,X,O,z,de),y.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,y.matrixWorld),y.normalMatrix.getNormalMatrix(y.modelViewMatrix),z.onBeforeRender(I,P,X,O,y,de),z.transparent===!0&&z.side===Hn&&z.forceSinglePass===!1?(z.side=En,z.needsUpdate=!0,I.renderBufferDirect(X,P,O,z,y,de),z.side=ss,z.needsUpdate=!0,I.renderBufferDirect(X,P,O,z,y,de),z.side=Hn):I.renderBufferDirect(X,P,O,z,y,de),y.onAfterRender(I,P,X,O,z,de)}function d0(y){let P=0;for(let X of y)X.texture!==null&&P++;return P}function sc(y,P,X){P.isScene!==!0&&(P=yi);let O=ke.get(y),z=E.state.lights,de=E.state.shadowsArray,Me=z.state.version,he=Q.getParameters(y,z.state,de,P,X,E.state.lightProbeGridArray),ve=Q.getProgramCacheKey(he),Ce=O.programs;O.environment=y.isMeshStandardMaterial||y.isMeshLambertMaterial||y.isMeshPhongMaterial?P.environment:null,O.fog=P.fog;let qe=y.isMeshStandardMaterial||y.isMeshLambertMaterial&&!y.envMap||y.isMeshPhongMaterial&&!y.envMap;O.envMap=T.get(y.envMap||O.environment,qe),O.envMapRotation=O.environment!==null&&y.envMap===null?P.environmentRotation:y.envMapRotation,Ce===void 0&&(y.addEventListener("dispose",yt),Ce=new Map,O.programs=Ce,O.programVariants=new Map);let rt=Ce.get(ve);if(rt!==void 0){if(O.currentProgram===rt&&O.lightsStateVersion===Me)return p0(y,he),rt}else he.uniforms=Q.getUniforms(y),B!==null&&y.isNodeMaterial&&B.build(y,X,he),y.onBeforeCompile(he,I),rt=Q.acquireProgram(he,ve),Ce.set(ve,rt),O.uniforms=he.uniforms;let Ee=O.uniforms;return(!y.isShaderMaterial&&!y.isRawShaderMaterial||y.clipping===!0)&&(Ee.clippingPlanes=j.uniform),p0(y,he),O.needsLights=jS(y),O.lightsStateVersion=Me,O.needsLights&&(Ee.ambientLightColor.value=z.state.ambient,Ee.lightProbe.value=z.state.probe,Ee.sunLights.value=z.state.sun,Ee.sunLightShadows.value=z.state.sunShadow,Ee.directionalLights.value=z.state.directional,Ee.directionalLightShadows.value=z.state.directionalShadow,Ee.spotLights.value=z.state.spot,Ee.spotLightShadows.value=z.state.spotShadow,Ee.rectAreaLights.value=z.state.rectArea,Ee.ltc_1.value=z.state.rectAreaLTC1,Ee.ltc_2.value=z.state.rectAreaLTC2,Ee.pointLights.value=z.state.point,Ee.pointLightShadows.value=z.state.pointShadow,Ee.hemisphereLights.value=z.state.hemi,Ee.sunShadowMatrix.value=z.state.sunShadowMatrix,Ee.sunShadowCascade.value=z.state.sunShadowCascade,Ee.directionalShadowMatrix.value=z.state.directionalShadowMatrix,Ee.spotLightMatrix.value=z.state.spotLightMatrix,Ee.spotLightMap.value=z.state.spotLightMap,Ee.pointShadowMatrix.value=z.state.pointShadowMatrix),O.numLightProbeGrids=d0(E.state.lightProbeGridArray),O.currentProgram=rt,O.uniformsList=null,rt}function $S(y,P,X,O,z){let de=ke.get(y),Me=de.currentProgram.id+","+O+","+z,he=de.programVariants.get(Me);return he===void 0?(he=sc(y,P,X),de.programVariants.set(Me,he)):(de.currentProgram=he,de.uniformsList=null,de.outputColorSpace=O,de.toneMapping=z),he}function f0(y){if(y.uniformsList===null){let P=y.currentProgram.getUniforms();y.uniformsList=Mo.seqWithValue(P.seq,y.uniforms)}return y.uniformsList}function p0(y,P){let X=ke.get(y);X.outputColorSpace=P.outputColorSpace,X.batching=P.batching,X.batchingColor=P.batchingColor,X.instancing=P.instancing,X.instancingColor=P.instancingColor,X.instancingMorph=P.instancingMorph,X.skinning=P.skinning,X.morphTargets=P.morphTargets,X.morphNormals=P.morphNormals,X.morphColors=P.morphColors,X.morphTargetsCount=P.morphTargetsCount,X.numClippingPlanes=P.numClippingPlanes,X.numIntersection=P.numClipIntersection,X.vertexAlphas=P.vertexAlphas,X.vertexTangents=P.vertexTangents,X.toneMapping=P.toneMapping}function YS(y,P,X,O,z){P.isScene!==!0&&(P=yi),Xe.resetTextureUnits();let de=P.fog,Me=O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial?P.environment:null,he=te===null?I.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,ve=O.isMeshStandardMaterial||O.isMeshLambertMaterial&&!O.envMap||O.isMeshPhongMaterial&&!O.envMap,Ce=T.get(O.envMap||Me,ve),qe=O.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,rt=!!X.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Ee=!!X.morphAttributes.position,at=!!X.morphAttributes.normal,Zt=!!X.morphAttributes.color,wt=rs;O.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(wt=I.toneMapping);let Tt=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Cn=Tt!==void 0?Tt.length:0,Ae=ke.get(O),On=E.state.lights;if(nn===!0&&(Kn===!0||y!==J)){let Bt=y===J&&O.id===q;j.setState(O,y,Bt)}let gt=!1,Gr=!1;O.version===Ae.__version?Ae.needsLights&&Ae.lightsStateVersion!==On.state.version||z.isBatchedMesh&&Ae.batching===!1||!z.isBatchedMesh&&Ae.batching===!0||z.isBatchedMesh&&Ae.batchingColor===!0&&z._colorsTexture===null||z.isBatchedMesh&&Ae.batchingColor===!1&&z._colorsTexture!==null||z.isInstancedMesh&&Ae.instancing===!1||!z.isInstancedMesh&&Ae.instancing===!0||z.isSkinnedMesh&&Ae.skinning===!1||!z.isSkinnedMesh&&Ae.skinning===!0||z.isInstancedMesh&&Ae.instancingColor===!0&&z.instanceColor===null||z.isInstancedMesh&&Ae.instancingColor===!1&&z.instanceColor!==null||z.isInstancedMesh&&Ae.instancingMorph===!0&&z.morphTexture===null||z.isInstancedMesh&&Ae.instancingMorph===!1&&z.morphTexture!==null||Ae.envMap!==Ce||O.fog===!0&&Ae.fog!==de||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==j.numPlanes||Ae.numIntersection!==j.numIntersection)||Ae.vertexAlphas!==qe||Ae.vertexTangents!==rt||Ae.morphTargets!==Ee||Ae.morphNormals!==at||Ae.morphColors!==Zt||Ae.morphTargetsCount!==Cn||Ae.numLightProbeGrids!==d0(E.state.lightProbeGridArray)?gt=!0:(Ae.outputColorSpace!==he||Ae.toneMapping!==wt)&&(Gr=!0):(gt=!0,Ae.__version=O.version);let In=Ae.currentProgram;(gt===!0||Gr===!0)&&(In=Gr===!0?$S(O,P,z,he,wt):sc(O,P,z),B&&O.isNodeMaterial&&B.onUpdateProgram(O,In,Ae));let Dl=!1,ar=!1,Hr=!1,ut=In.getUniforms(),Mn=Ae.uniforms;if(fe.useProgram(In.program)&&(Dl=!0,ar=!0,Hr=!0),O.id!==q&&(q=O.id,ar=!0),Dl||J!==y){fe.buffers.depth.getReversed()&&y.reversedDepth!==!0&&(y._reversedDepth=!0,y.updateProjectionMatrix()),ut.setValue(U,"projectionMatrix",y.projectionMatrix),ut.setValue(U,"viewMatrix",y.matrixWorldInverse);let _n=ut.map.cameraPosition;_n!==void 0&&_n.setValue(U,ji.setFromMatrixPosition(y.matrixWorld)),Dt.logarithmicDepthBuffer&&ut.setValue(U,"logDepthBufFC",2/(Math.log(y.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ut.setValue(U,"isOrthographic",y.isOrthographicCamera===!0),J!==y&&(J=y,ar=!0,Hr=!0)}if(Ae.needsLights&&(On.state.sunShadowMap.length>0&&ut.setValue(U,"sunShadowMap",On.state.sunShadowMap,Xe),On.state.directionalShadowMap.length>0&&ut.setValue(U,"directionalShadowMap",On.state.directionalShadowMap,Xe),On.state.spotShadowMap.length>0&&ut.setValue(U,"spotShadowMap",On.state.spotShadowMap,Xe),On.state.pointShadowMap.length>0&&ut.setValue(U,"pointShadowMap",On.state.pointShadowMap,Xe)),z.isSkinnedMesh){ut.setOptional(U,z,"bindMatrix"),ut.setOptional(U,z,"bindMatrixInverse");let Bt=z.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),ut.setValue(U,"boneTexture",Bt.boneTexture,Xe))}z.isBatchedMesh&&(ut.setOptional(U,z,"batchingTexture"),ut.setValue(U,"batchingTexture",z._matricesTexture,Xe),ut.setOptional(U,z,"batchingIdTexture"),ut.setValue(U,"batchingIdTexture",z._indirectTexture,Xe),ut.setOptional(U,z,"batchingColorTexture"),z._colorsTexture!==null&&ut.setValue(U,"batchingColorTexture",z._colorsTexture,Xe));let Fi=X.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&Z.update(z,X,In),(ar||Ae.receiveShadow!==z.receiveShadow)&&(Ae.receiveShadow=z.receiveShadow,ut.setValue(U,"receiveShadow",z.receiveShadow)),(O.isMeshStandardMaterial||O.isMeshLambertMaterial||O.isMeshPhongMaterial)&&O.envMap===null&&P.environment!==null&&(Mn.envMapIntensity.value=P.environmentIntensity),Mn.dfgLUT!==void 0&&(Mn.dfgLUT.value=HE()),ar){if(ut.setValue(U,"toneMappingExposure",I.toneMappingExposure),Ae.needsLights&&KS(Mn,Hr),de&&O.fog===!0&&ae.refreshFogUniforms(Mn,de),ae.refreshMaterialUniforms(Mn,O,xe,Be,E.state.transmissionRenderTarget[y.id]),Ae.needsLights&&Ae.numLightProbeGrids>0){let Bt=b,_n=0;for(let Ts of E.state.lightProbeGridArray)Ts.texture!==null&&(Bt.textures[_n]=Ts.texture,Bt.min[_n]=Ts.boundingBox.min,Bt.max[_n]=Ts.boundingBox.max,Bt.resolution[_n]=Ts.resolution,_n++);for(let Ts in Bt)Bt[Ts].length=_n;Mn.probesSH.value=Bt.textures,Mn.probesMin.value=Bt.min,Mn.probesMax.value=Bt.max,Mn.probesResolution.value=Bt.resolution}Mo.upload(U,f0(Ae),Mn,Xe)}if(O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Mo.upload(U,f0(Ae),Mn,Xe),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ut.setValue(U,"center",z.center),ut.setValue(U,"modelViewMatrix",z.modelViewMatrix),ut.setValue(U,"normalMatrix",z.normalMatrix),ut.setValue(U,"modelMatrix",z.matrixWorld),O.uniformsGroups!==void 0){let Bt=O.uniformsGroups;for(let _n=0,Ts=Bt.length;_n<Ts;_n++){let g0=Bt[_n];Pe.update(g0,In),Pe.bind(g0,In)}}return In}function KS(y,P){y.ambientLightColor.needsUpdate=P,y.lightProbe.needsUpdate=P,y.sunLights.needsUpdate=P,y.sunLightShadows.needsUpdate=P,y.directionalLights.needsUpdate=P,y.directionalLightShadows.needsUpdate=P,y.pointLights.needsUpdate=P,y.pointLightShadows.needsUpdate=P,y.spotLights.needsUpdate=P,y.spotLightShadows.needsUpdate=P,y.rectAreaLights.needsUpdate=P,y.hemisphereLights.needsUpdate=P}function jS(y){return y.isMeshLambertMaterial||y.isMeshToonMaterial||y.isMeshPhongMaterial||y.isMeshStandardMaterial||y.isShadowMaterial||y.isShaderMaterial&&y.lights===!0}this.getActiveCubeFace=function(){return H},this.getActiveMipmapLevel=function(){return W},this.getRenderTarget=function(){return te},this.setRenderTargetTextures=function(y,P,X){let O=ke.get(y);O.__autoAllocateDepthBuffer=y.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ke.get(y.texture).__webglTexture=P,ke.get(y.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:X,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(y,P){let X=ke.get(y);X.__webglFramebuffer=P,X.__useDefaultFramebuffer=P===void 0},this.setRenderTarget=function(y,P=0,X=0){te=y,H=P,W=X;let O=null,z=!1,de=!1;if(y){let he=ke.get(y);if(he.__useDefaultFramebuffer!==void 0){fe.bindFramebuffer(U.FRAMEBUFFER,he.__webglFramebuffer),ee.copy(y.viewport),ye.copy(y.scissor),Fe=y.scissorTest,fe.viewport(ee),fe.scissor(ye),fe.setScissorTest(Fe),q=-1;return}else if(he.__webglFramebuffer===void 0)Xe.setupRenderTarget(y);else if(he.__hasExternalTextures)Xe.rebindTextures(y,ke.get(y.texture).__webglTexture,ke.get(y.depthTexture).__webglTexture);else if(y.depthBuffer){let qe=y.depthTexture;if(he.__boundDepthTexture!==qe){if(qe!==null&&ke.has(qe)&&(y.width!==qe.image.width||y.height!==qe.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");Xe.setupDepthRenderbuffer(y)}}let ve=y.texture;(ve.isData3DTexture||ve.isDataArrayTexture||ve.isCompressedArrayTexture)&&(de=!0);let Ce=ke.get(y).__webglFramebuffer;y.isWebGLCubeRenderTarget?(Array.isArray(Ce[P])?O=Ce[P][X]:O=Ce[P],z=!0):y.samples>0&&Xe.useMultisampledRTT(y)===!1?O=ke.get(y).__webglMultisampledFramebuffer:Array.isArray(Ce)?O=Ce[X]:O=Ce,ee.copy(y.viewport),ye.copy(y.scissor),Fe=y.scissorTest}else ee.copy(He).multiplyScalar(xe).floor(),ye.copy(vt).multiplyScalar(xe).floor(),Fe=bt;if(X!==0&&(O=V),fe.bindFramebuffer(U.FRAMEBUFFER,O)&&fe.drawBuffers(y,O),fe.viewport(ee),fe.scissor(ye),fe.setScissorTest(Fe),z){let he=ke.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+P,he.__webglTexture,X)}else if(de){let he=P;for(let ve=0;ve<y.textures.length;ve++){let Ce=ke.get(y.textures[ve]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+ve,Ce.__webglTexture,X,he)}}else if(y!==null&&X!==0){let he=ke.get(y.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,he.__webglTexture,X)}q=-1};function m0(y){let P=ke.get(y);return(P.__readFormat!==y.format||P.__readType!==y.type)&&(P.__readFormat=y.format,P.__readType=y.type,P.__formatReadable=Dt.textureFormatReadable(y.format),P.__typeReadable=Dt.textureTypeReadable(y.type)),P}this.readRenderTargetPixels=function(y,P,X,O,z,de,Me,he=0){if(!(y&&y.isWebGLRenderTarget)){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ve=ke.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(ve=ve[Me],Array.isArray(ve)&&(ve=ve[0])),ve){fe.bindFramebuffer(U.FRAMEBUFFER,ve);try{let Ce=y.textures[he],qe=Ce.format,rt=Ce.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let Ee=m0(Ce);if(Ee.__formatReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ee.__typeReadable===!1){Ve("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}P>=0&&P<=y.width-O&&X>=0&&X<=y.height-z&&U.readPixels(P,X,O,z,se.convert(qe),se.convert(rt),de)}finally{let Ce=te!==null?ke.get(te).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Ce)}}},this.readRenderTargetPixelsAsync=async function(y,P,X,O,z,de,Me,he=0){if(!(y&&y.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ve=ke.get(y).__webglFramebuffer;if(y.isWebGLCubeRenderTarget&&Me!==void 0&&(ve=ve[Me],Array.isArray(ve)&&(ve=ve[0])),ve)if(P>=0&&P<=y.width-O&&X>=0&&X<=y.height-z){fe.bindFramebuffer(U.FRAMEBUFFER,ve);let Ce=y.textures[he],qe=Ce.format,rt=Ce.type;y.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+he);let Ee=m0(Ce);if(Ee.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ee.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let at=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.bufferData(U.PIXEL_PACK_BUFFER,de.byteLength,U.STREAM_READ),U.readPixels(P,X,O,z,se.convert(qe),se.convert(rt),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let Zt=te!==null?ke.get(te).__webglFramebuffer:null;fe.bindFramebuffer(U.FRAMEBUFFER,Zt);let wt=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await z_(U,wt,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,at),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,de),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(at),U.deleteSync(wt),de}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(y,P=null,X=0){let O=Math.pow(2,-X),z=Math.floor(y.image.width*O),de=Math.floor(y.image.height*O),Me=P!==null?P.x:0,he=P!==null?P.y:0;Xe.setTexture2D(y,0),U.copyTexSubImage2D(U.TEXTURE_2D,X,0,0,Me,he,z,de),fe.unbindTexture()},this.copyTextureToTexture=function(y,P,X=null,O=null,z=0,de=0){let Me,he,ve,Ce,qe,rt,Ee,at,Zt,wt=y.isCompressedTexture?y.mipmaps[de]:y.image;if(X!==null)Me=X.max.x-X.min.x,he=X.max.y-X.min.y,ve=X.isBox3?X.max.z-X.min.z:1,Ce=X.min.x,qe=X.min.y,rt=X.isBox3?X.min.z:0;else{let ut=Math.pow(2,-z);Me=Math.floor(wt.width*ut),he=Math.floor(wt.height*ut),y.isDataArrayTexture?ve=wt.depth:y.isData3DTexture?ve=Math.floor(wt.depth*ut):ve=1,Ce=0,qe=0,rt=0}O!==null?(Ee=O.x,at=O.y,Zt=O.z):(Ee=0,at=0,Zt=0);let Tt=se.convert(P.format),Cn=se.convert(P.type),Ae;P.isData3DTexture?(Xe.setTexture3D(P,0),Ae=U.TEXTURE_3D):P.isDataArrayTexture||P.isCompressedArrayTexture?(Xe.setTexture2DArray(P,0),Ae=U.TEXTURE_2D_ARRAY):(Xe.setTexture2D(P,0),Ae=U.TEXTURE_2D),fe.activeTexture(U.TEXTURE0),fe.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,P.flipY),fe.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,P.premultiplyAlpha),fe.pixelStorei(U.UNPACK_ALIGNMENT,P.unpackAlignment);let On=fe.getParameter(U.UNPACK_ROW_LENGTH),gt=fe.getParameter(U.UNPACK_IMAGE_HEIGHT),Gr=fe.getParameter(U.UNPACK_SKIP_PIXELS),In=fe.getParameter(U.UNPACK_SKIP_ROWS),Dl=fe.getParameter(U.UNPACK_SKIP_IMAGES);fe.pixelStorei(U.UNPACK_ROW_LENGTH,wt.width),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,wt.height),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Ce),fe.pixelStorei(U.UNPACK_SKIP_ROWS,qe),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,rt);let ar=y.isDataArrayTexture||y.isData3DTexture,Hr=P.isDataArrayTexture||P.isData3DTexture;if(y.isDepthTexture){let ut=ke.get(y),Mn=ke.get(P),Fi=ke.get(ut.__renderTarget),Bt=ke.get(Mn.__renderTarget);fe.bindFramebuffer(U.READ_FRAMEBUFFER,Fi.__webglFramebuffer),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,Bt.__webglFramebuffer);for(let _n=0;_n<ve;_n++)ar&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.get(y).__webglTexture,z,rt+_n),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ke.get(P).__webglTexture,de,Zt+_n)),U.blitFramebuffer(Ce,qe,Ce+Me,qe+he,Ee,at,Ee+Me,at+he,U.DEPTH_BUFFER_BIT,U.NEAREST);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(z!==0||y.isRenderTargetTexture||ke.has(y)){let ut=ke.get(y),Mn=ke.get(P);fe.bindFramebuffer(U.READ_FRAMEBUFFER,R),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,G);for(let Fi=0;Fi<ve;Fi++)ar?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ut.__webglTexture,z,rt+Fi):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ut.__webglTexture,z),Hr?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,Mn.__webglTexture,de,Zt+Fi):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Mn.__webglTexture,de),z!==0?U.blitFramebuffer(Ce,qe,Ce+Me,qe+he,Ee,at,Ee+Me,at+he,U.COLOR_BUFFER_BIT,U.NEAREST):Hr?U.copyTexSubImage3D(Ae,de,Ee,at,Zt+Fi,Ce,qe,Me,he):U.copyTexSubImage2D(Ae,de,Ee,at,Ce,qe,Me,he);fe.bindFramebuffer(U.READ_FRAMEBUFFER,null),fe.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Hr?y.isDataTexture||y.isData3DTexture?U.texSubImage3D(Ae,de,Ee,at,Zt,Me,he,ve,Tt,Cn,wt.data):P.isCompressedArrayTexture?U.compressedTexSubImage3D(Ae,de,Ee,at,Zt,Me,he,ve,Tt,wt.data):U.texSubImage3D(Ae,de,Ee,at,Zt,Me,he,ve,Tt,Cn,wt):y.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,de,Ee,at,Me,he,Tt,Cn,wt.data):y.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,de,Ee,at,wt.width,wt.height,Tt,wt.data):U.texSubImage2D(U.TEXTURE_2D,de,Ee,at,Me,he,Tt,Cn,wt);fe.pixelStorei(U.UNPACK_ROW_LENGTH,On),fe.pixelStorei(U.UNPACK_IMAGE_HEIGHT,gt),fe.pixelStorei(U.UNPACK_SKIP_PIXELS,Gr),fe.pixelStorei(U.UNPACK_SKIP_ROWS,In),fe.pixelStorei(U.UNPACK_SKIP_IMAGES,Dl),de===0&&P.generateMipmaps===!0&&P.mipmapsAutoUpdate===!0&&U.generateMipmap(Ae),fe.unbindTexture()},this.initRenderTarget=function(y){ke.get(y).__webglFramebuffer===void 0&&Xe.setupRenderTarget(y)},this.initTexture=function(y){y.isCubeTexture?Xe.setTextureCube(y,0):y.isData3DTexture?Xe.setTexture3D(y,0):y.isDataArrayTexture||y.isCompressedArrayTexture?Xe.setTexture2DArray(y,0):Xe.setTexture2D(y,0),fe.unbindTexture()},this.resetState=function(){H=0,W=0,te=null,fe.reset(),oe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ei}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let n=this.getContext();n.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),n.unpackColorSpace=et._getUnpackColorSpace()}}});function vp(t,e){if(e===Yf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(e===yo||e===Kc){let n=t.getIndex();if(n===null){let r=[],a=t.getAttribute("position");if(a!==void 0){for(let o=0;o<a.count;o++)r.push(o);t.setIndex(r),n=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}let i=n.count-2,s=[];if(e===yo)for(let r=1;r<=i;r++)s.push(n.getX(0)),s.push(n.getX(r)),s.push(n.getX(r+1));else for(let r=0;r<i;r++)r%2===0?(s.push(n.getX(r)),s.push(n.getX(r+1)),s.push(n.getX(r+2))):(s.push(n.getX(r+2)),s.push(n.getX(r+1)),s.push(n.getX(r)));return s.length/3!==i&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles."),t.setIndex(s),t.clearGroups(),t}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),t}var Tx=or(()=>{Eo()});function Ex(t){let e=new Map,n=new Map,i=t.clone();return Ax(t,i,function(s,r){e.set(r,s),n.set(s,r)}),i.traverse(function(s){if(!s.isSkinnedMesh)return;let r=s,a=e.get(s),o=a.skeleton.bones;r.skeleton=a.skeleton.clone(),r.bindMatrix.copy(a.bindMatrix),r.skeleton.bones=o.map(function(c){return n.get(c)}),r.bind(r.skeleton,r.bindMatrix)}),i}function Ax(t,e,n){n(t,e);for(let i=0;i<t.children.length;i++)Ax(t.children[i],e.children[i],n)}var wx=or(()=>{});function WE(){let t={};return{get:function(e){return t[e]},add:function(e,n){t[e]=n},remove:function(e){delete t[e]},removeAll:function(){t={}}}}function kt(t,e,n){let i=t.json.materials[e];return i.extensions&&i.extensions[n]?i.extensions[n]:null}function $E(t){return t.DefaultMaterial===void 0&&(t.DefaultMaterial=new ns({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ss})),t.DefaultMaterial}function ha(t,e,n){for(let i in n.extensions)t[i]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[i]=n.extensions[i])}function ls(t,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(t.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function YE(t,e,n){let i=!1,s=!1,r=!1;for(let l=0,h=e.length;l<h;l++){let u=e[l];if(u.POSITION!==void 0&&(i=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),i&&s&&r)break}if(!i&&!s&&!r)return Promise.resolve(t);let a=[],o=[],c=[];for(let l=0,h=e.length;l<h;l++){let u=e[l];if(i){let d=u.POSITION!==void 0?n.getDependency("accessor",u.POSITION):t.attributes.position;a.push(d)}if(s){let d=u.NORMAL!==void 0?n.getDependency("accessor",u.NORMAL):t.attributes.normal;o.push(d)}if(r){let d=u.COLOR_0!==void 0?n.getDependency("accessor",u.COLOR_0):t.attributes.color;c.push(d)}}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c)]).then(function(l){let h=l[0],u=l[1],d=l[2];return i&&(t.morphAttributes.position=h),s&&(t.morphAttributes.normal=u),r&&(t.morphAttributes.color=d),t.morphTargetsRelative=!0,t})}function KE(t,e){if(t.updateMorphTargets(),e.weights!==void 0)for(let n=0,i=e.weights.length;n<i;n++)t.morphTargetInfluences[n]=e.weights[n];if(e.extras&&Array.isArray(e.extras.targetNames)){let n=e.extras.targetNames;if(t.morphTargetInfluences.length===n.length){t.morphTargetDictionary={};for(let i=0,s=n.length;i<s;i++)t.morphTargetDictionary[n[i]]=i}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function jE(t){let e,n=t.extensions&&t.extensions[tt.KHR_DRACO_MESH_COMPRESSION];if(n?e="draco:"+n.bufferView+":"+n.indices+":"+Mp(n.attributes):e=t.indices+":"+Mp(t.attributes)+":"+t.mode,t.targets!==void 0)for(let i=0,s=t.targets.length;i<s;i++)e+=":"+Mp(t.targets[i]);return e}function Mp(t){let e="",n=Object.keys(t).sort();for(let i=0,s=n.length;i<s;i++)e+=n[i]+":"+t[n[i]]+";";return e}function $p(t){switch(t){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function ZE(t){return t.search(/\.jpe?g($|\?)/i)>0||t.search(/^data\:image\/jpeg/)===0?"image/jpeg":t.search(/\.webp($|\?)/i)>0||t.search(/^data\:image\/webp/)===0?"image/webp":t.search(/\.ktx2($|\?)/i)>0||t.search(/^data\:image\/ktx2/)===0?"image/ktx2":"image/png"}function QE(t,e,n){let i=e.attributes,s=new vn;if(i.POSITION!==void 0){let o=n.json.accessors[i.POSITION],c=o.min,l=o.max;if(c!==void 0&&l!==void 0){if(s.set(new F(c[0],c[1],c[2]),new F(l[0],l[1],l[2])),o.normalized){let h=$p(Ao[o.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;let r=e.targets;if(r!==void 0){let o=new F,c=new F;for(let l=0,h=r.length;l<h;l++){let u=r[l];if(u.POSITION!==void 0){let d=n.json.accessors[u.POSITION],f=d.min,g=d.max;if(f!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(f[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(f[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(f[2]),Math.abs(g[2]))),d.normalized){let v=$p(Ao[d.componentType]);c.multiplyScalar(v)}o.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(o)}t.boundingBox=s;let a=new Nn;s.getCenter(a.center),a.radius=s.min.distanceTo(s.max)/2,t.boundingSphere=a}function Px(t,e,n){let i=e.attributes,s=[];function r(a,o){return n.getDependency("accessor",a).then(function(c){t.setAttribute(o,c)})}for(let a in i){let o=qp[a]||a.toLowerCase();o in t.attributes||s.push(r(i[a],o))}if(e.indices!==void 0&&!t.index){let a=n.getDependency("accessor",e.indices).then(function(o){t.setIndex(o)});s.push(a)}return et.workingColorSpace!==Tn&&"COLOR_0"in i&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${et.workingColorSpace}" not supported.`),ls(t,e),QE(t,e,n),Promise.all(s).then(function(){return e.targets!==void 0?YE(t,e.targets,n):t})}var Tu,tt,bp,Tp,Ep,Ap,wp,Rp,Cp,Ip,Pp,Lp,Np,Dp,Up,Fp,Op,Bp,kp,Eu,zp,Lx,tl,Rx,Gp,Hp,Vp,Wp,Au,XE,Xp,wi,Ao,Cx,Ix,yp,qp,Tr,qE,Sp,JE,Yp,Nx=or(()=>{Eo();Tx();wx();Tu=class extends Gi{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(n){return new Ap(n)}),this.register(function(n){return new wp(n)}),this.register(function(n){return new Rp(n)}),this.register(function(n){return new Op(n)}),this.register(function(n){return new Bp(n)}),this.register(function(n){return new kp(n)}),this.register(function(n){return new Ip(n)}),this.register(function(n){return new Pp(n)}),this.register(function(n){return new Lp(n)}),this.register(function(n){return new Np(n)}),this.register(function(n){return new Ep(n)}),this.register(function(n){return new Dp(n)}),this.register(function(n){return new Cp(n)}),this.register(function(n){return new Fp(n)}),this.register(function(n){return new Up(n)}),this.register(function(n){return new bp(n)}),this.register(function(n){return new Eu(n,tt.EXT_MESHOPT_COMPRESSION)}),this.register(function(n){return new Eu(n,tt.KHR_MESHOPT_COMPRESSION)}),this.register(function(n){return new zp(n)})}load(e,n,i,s){let r=this,a;if(this.resourcePath!=="")a=this.resourcePath;else if(this.path!==""){let l=zs.extractUrlBase(e);a=zs.resolveURL(l,this.path)}else a=zs.extractUrlBase(e);this.manager.itemStart(e);let o=function(l){s?s(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new ta(this.manager);c.setPriority(this.priority),c.setCache(this.cache),c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,a,function(h){n(h),r.manager.itemEnd(e)},o)}catch(h){o(h)}},i,o)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,n,i,s){let r,a={},o={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Lx){try{a[tt.KHR_BINARY_GLTF]=new Gp(e)}catch(u){s&&s(u);return}r=JSON.parse(a[tt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}let l=new Yp(r,{path:n||this.resourcePath||"",crossOrigin:this.crossOrigin,priority:this.priority,cache:this.cache,withCredentials:this.withCredentials,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){let u=this.pluginCallbacks[h](l);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),o[u.name]=u,a[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){let u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case tt.KHR_MATERIALS_UNLIT:a[u]=new Tp;break;case tt.KHR_DRACO_MESH_COMPRESSION:a[u]=new Hp(r,this.dracoLoader);break;case tt.KHR_TEXTURE_TRANSFORM:a[u]=new Vp;break;case tt.KHR_MESH_QUANTIZATION:a[u]=new Wp;break;default:d.indexOf(u)>=0&&o[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}l.setExtensions(a),l.setPlugins(o),l.parse(i,s)}parseAsync(e,n){let i=this;return new Promise(function(s,r){i.parse(e,n,s,r)})}};tt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DIFFUSE_ROUGHNESS:"KHR_materials_diffuse_roughness",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",KHR_MESHOPT_COMPRESSION:"KHR_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"},bp=class{constructor(e){this.parser=e,this.name=tt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){let e=this.parser,n=this.parser.json.nodes||[];for(let i=0,s=n.length;i<s;i++){let r=n[i];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){let n=this.parser,i="light:"+e,s=n.cache.get(i);if(s)return s;let r=n.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e],l,h=new ze(16777215);c.color!==void 0&&h.setRGB(c.color[0],c.color[1],c.color[2],Tn);let u=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new Mr(h),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new na(h),l.distance=u;break;case"spot":l=new Bc(h),l.distance=u,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),ls(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=n.createUniqueName(c.name||"light_"+e),s=Promise.resolve(l),n.cache.add(i,s),s}getDependency(e,n){if(e==="light")return this._loadLight(n)}createNodeAttachment(e){let n=this,i=this.parser,r=i.json.nodes[e],o=(r.extensions&&r.extensions[this.name]||{}).light;return o===void 0?null:this._loadLight(o).then(function(c){return i._getNodeRef(n.cache,o,c)})}},Tp=class{constructor(){this.name=tt.KHR_MATERIALS_UNLIT}getMaterialType(){return Jn}extendParams(e,n,i){let s=[];e.color=new ze(1,1,1),e.opacity=1;let r=n.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){let a=r.baseColorFactor;e.color.setRGB(a[0],a[1],a[2],Tn),e.opacity=a[3]}r.baseColorTexture!==void 0&&s.push(i.assignTexture(e,"map",r.baseColorTexture,Xt))}return Promise.all(s)}},Ep=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);return i===null||i.emissiveStrength!==void 0&&(n.emissiveIntensity=i.emissiveStrength),Promise.resolve()}},Ap=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(i.clearcoatFactor!==void 0&&(n.clearcoat=i.clearcoatFactor),i.clearcoatTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatMap",i.clearcoatTexture)),i.clearcoatRoughnessFactor!==void 0&&(n.clearcoatRoughness=i.clearcoatRoughnessFactor),i.clearcoatRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"clearcoatRoughnessMap",i.clearcoatRoughnessTexture)),i.clearcoatNormalTexture!==void 0&&(s.push(this.parser.assignTexture(n,"clearcoatNormalMap",i.clearcoatNormalTexture)),i.clearcoatNormalTexture.scale!==void 0)){let r=i.clearcoatNormalTexture.scale;n.clearcoatNormalScale=new je(r,r)}return Promise.all(s)}},wp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DIFFUSE_ROUGHNESS}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return n.diffuseRoughness=i.diffuseRoughnessFactor!==void 0?i.diffuseRoughnessFactor:0,i.diffuseRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"diffuseRoughnessMap",i.diffuseRoughnessTexture)),Promise.all(s)}},Rp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_DISPERSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);return i===null||(n.dispersion=i.dispersion!==void 0?i.dispersion:0),Promise.resolve()}},Cp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.iridescenceFactor!==void 0&&(n.iridescence=i.iridescenceFactor),i.iridescenceTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceMap",i.iridescenceTexture)),i.iridescenceIor!==void 0&&(n.iridescenceIOR=i.iridescenceIor),i.iridescenceThicknessMinimum!==void 0&&(n.iridescenceThicknessMinimum=i.iridescenceThicknessMinimum),i.iridescenceThicknessMaximum!==void 0&&(n.iridescenceThicknessMaximum=i.iridescenceThicknessMaximum),i.iridescenceThicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"iridescenceThicknessMap",i.iridescenceThicknessTexture)),Promise.all(s)}},Ip=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SHEEN}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];if(n.sheenColor=new ze(0,0,0),n.sheenRoughness=0,n.sheen=1,i.sheenColorFactor!==void 0){let r=i.sheenColorFactor;n.sheenColor.setRGB(r[0],r[1],r[2],Tn)}return i.sheenRoughnessFactor!==void 0&&(n.sheenRoughness=i.sheenRoughnessFactor),i.sheenColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenColorMap",i.sheenColorTexture,Xt)),i.sheenRoughnessTexture!==void 0&&s.push(this.parser.assignTexture(n,"sheenRoughnessMap",i.sheenRoughnessTexture)),Promise.all(s)}},Pp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.transmissionFactor!==void 0&&(n.transmission=i.transmissionFactor),i.transmissionTexture!==void 0&&s.push(this.parser.assignTexture(n,"transmissionMap",i.transmissionTexture)),Promise.all(s)}},Lp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_VOLUME}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.thickness=i.thicknessFactor!==void 0?i.thicknessFactor:0,i.thicknessTexture!==void 0&&s.push(this.parser.assignTexture(n,"thicknessMap",i.thicknessTexture)),n.attenuationDistance=i.attenuationDistance||1/0;let r=i.attenuationColor||[1,1,1];return n.attenuationColor=new ze().setRGB(r[0],r[1],r[2],Tn),Promise.all(s)}},Np=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_IOR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);return i===null||(n.ior=i.ior!==void 0?i.ior:1.5,n.ior===0&&(n.ior=1e3)),Promise.resolve()}},Dp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_SPECULAR}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];n.specularIntensity=i.specularFactor!==void 0?i.specularFactor:1,i.specularTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularIntensityMap",i.specularTexture));let r=i.specularColorFactor||[1,1,1];return n.specularColor=new ze().setRGB(r[0],r[1],r[2],Tn),i.specularColorTexture!==void 0&&s.push(this.parser.assignTexture(n,"specularColorMap",i.specularColorTexture,Xt)),Promise.all(s)}},Up=class{constructor(e){this.parser=e,this.name=tt.EXT_MATERIALS_BUMP}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return n.bumpScale=i.bumpFactor!==void 0?i.bumpFactor:1,i.bumpTexture!==void 0&&s.push(this.parser.assignTexture(n,"bumpMap",i.bumpTexture)),Promise.all(s)}},Fp=class{constructor(e){this.parser=e,this.name=tt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){return kt(this.parser,e,this.name)!==null?Gn:null}extendMaterialParams(e,n){let i=kt(this.parser,e,this.name);if(i===null)return Promise.resolve();let s=[];return i.anisotropyStrength!==void 0&&(n.anisotropy=i.anisotropyStrength),i.anisotropyRotation!==void 0&&(n.anisotropyRotation=i.anisotropyRotation),i.anisotropyTexture!==void 0&&s.push(this.parser.assignTexture(n,"anisotropyMap",i.anisotropyTexture)),Promise.all(s)}},Op=class{constructor(e){this.parser=e,this.name=tt.KHR_TEXTURE_BASISU}loadTexture(e){let n=this.parser,i=n.json,s=i.textures[e];if(!s.extensions||!s.extensions[this.name])return null;let r=s.extensions[this.name],a=n.options.ktx2Loader;if(!a){if(i.extensionsRequired&&i.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return n.loadTextureImage(e,r.source,a)}},Bp=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_WEBP}loadTexture(e){let n=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[n])return null;let a=r.extensions[n],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},kp=class{constructor(e){this.parser=e,this.name=tt.EXT_TEXTURE_AVIF}loadTexture(e){let n=this.name,i=this.parser,s=i.json,r=s.textures[e];if(!r.extensions||!r.extensions[n])return null;let a=r.extensions[n],o=s.images[a.source],c=i.textureLoader;if(o.uri){let l=i.options.manager.getHandler(o.uri);l!==null&&(c=l)}return i.loadTextureImage(e,a.source,c)}},Eu=class{constructor(e,n){this.name=n,this.parser=e}loadBufferView(e){let n=this.parser.json,i=n.bufferViews[e];if(i.extensions&&i.extensions[this.name]){let s=i.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),a=this.parser.options.meshoptDecoder;if(!a||!a.supported){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(o){let c=s.byteOffset||0,l=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(o,c,l);return a.decodeGltfBufferAsync?a.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(f){return f.buffer}):a.ready.then(function(){let f=new ArrayBuffer(h*u);return a.decodeGltfBuffer(new Uint8Array(f),h,u,d,s.mode,s.filter),f})})}else return null}},zp=class{constructor(e){this.name=tt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){let n=this.parser.json,i=n.nodes[e];if(!i.extensions||!i.extensions[this.name]||i.mesh===void 0)return null;let s=n.meshes[i.mesh];for(let l of s.primitives)if(l.mode!==wi.TRIANGLES&&l.mode!==wi.TRIANGLE_STRIP&&l.mode!==wi.TRIANGLE_FAN&&l.mode!==void 0)return null;let a=i.extensions[this.name].attributes,o=[],c={};for(let l in a)o.push(this.parser.getDependency("accessor",a[l]).then(h=>(c[l]=h,c[l])));return o.length<1?null:(o.push(this.parser.createNodeMesh(e)),Promise.all(o).then(l=>{let h=l.pop(),u=h.isGroup?h.children:[h],d=l[0].count,f=[];for(let g of u){let v=new $e,m=new F,p=new kn,M=new F(1,1,1),A=new Jr(g.geometry,g.material,d);for(let w=0;w<d;w++)c.TRANSLATION&&m.fromBufferAttribute(c.TRANSLATION,w),c.ROTATION&&p.fromBufferAttribute(c.ROTATION,w),c.SCALE&&M.fromBufferAttribute(c.SCALE,w),A.setMatrixAt(w,v.compose(m,p,M));let b=null;for(let w in c)if(w==="_COLOR_0"){let E=c[w];A.instanceColor=new Ds(E.array,E.itemSize,E.normalized)}else if(w!=="TRANSLATION"&&w!=="ROTATION"&&w!=="SCALE"){if(b===null){let _=A.geometry;b=new Dn,b.name=_.name;for(let S in _.attributes)b.setAttribute(S,_.attributes[S]);for(let S in _.morphAttributes)b.morphAttributes[S]=_.morphAttributes[S];_.index!==null&&b.setIndex(_.index),b.morphTargetsRelative=_.morphTargetsRelative;for(let S of _.groups)b.addGroup(S.start,S.count,S.materialIndex);_.boundingBox!==null&&(b.boundingBox=_.boundingBox.clone()),_.boundingSphere!==null&&(b.boundingSphere=_.boundingSphere.clone()),b.drawRange.start=_.drawRange.start,b.drawRange.count=_.drawRange.count,b.userData=Object.assign({},_.userData),A.geometry=b}let E=c[w];b.setAttribute(w,new Ds(E.array,E.itemSize,E.normalized))}It.prototype.copy.call(A,g),this.parser.assignFinalMaterial(A),f.push(A)}return h.isGroup?(h.clear(),h.add(...f),h):f[0]}))}},Lx="glTF",tl=12,Rx={JSON:1313821514,BIN:5130562},Gp=class{constructor(e){this.name=tt.KHR_BINARY_GLTF,this.content=null,this.body=null;let n=new DataView(e,0,tl),i=new TextDecoder;if(this.header={magic:i.decode(new Uint8Array(e.slice(0,4))),version:n.getUint32(4,!0),length:n.getUint32(8,!0)},this.header.magic!==Lx)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");let s=this.header.length-tl,r=new DataView(e,tl),a=0;for(;a<s;){let o=r.getUint32(a,!0);a+=4;let c=r.getUint32(a,!0);if(a+=4,c===Rx.JSON){let l=new Uint8Array(e,tl+a,o);this.content=i.decode(l)}else if(c===Rx.BIN){let l=tl+a;this.body=e.slice(l,l+o)}a+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}},Hp=class{constructor(e,n){if(!n)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=tt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=n,this.dracoLoader.preload()}decodePrimitive(e,n){let i=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,a=e.extensions[this.name].attributes,o={},c={},l={};for(let h in a){let u=qp[h]||h.toLowerCase();o[u]=a[h]}for(let h in e.attributes){let u=qp[h]||h.toLowerCase();if(a[h]!==void 0){let d=i.accessors[e.attributes[h]],f=Ao[d.componentType];l[u]=f.name,c[u]=d.normalized===!0}}return n.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(f){for(let g in f.attributes){let v=f.attributes[g],m=c[g];m!==void 0&&(v.normalized=m)}u(f)},o,l,Tn,d)})})}},Vp=class{constructor(){this.name=tt.KHR_TEXTURE_TRANSFORM}extendTexture(e,n){if((n.texCoord===void 0||n.texCoord===e.channel)&&n.offset===void 0&&n.rotation===void 0&&n.scale===void 0)return e;if(e=e.clone(),n.texCoord!==void 0&&(e.channel=n.texCoord),n.offset!==void 0&&e.offset.fromArray(n.offset),n.rotation!==void 0&&(e.rotation=n.rotation),n.scale!==void 0&&e.repeat.fromArray(n.scale),n.rotation!==void 0){let i=Math.cos(e.rotation),s=Math.sin(e.rotation);e.matrix.set(e.repeat.x*i,e.repeat.y*s,e.offset.x,-e.repeat.x*s,e.repeat.y*i,e.offset.y,0,0,1),e.matrixAutoUpdate=!1}return e.needsUpdate=!0,e}},Wp=class{constructor(){this.name=tt.KHR_MESH_QUANTIZATION}},Au=class extends is{constructor(e,n,i,s){super(e,n,i,s)}copySampleValue_(e){let n=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let a=0;a!==s;a++)n[a]=i[r+a];return n}interpolate_(e,n,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,c=o*2,l=o*3,h=s-n,u=(i-n)/h,d=u*u,f=d*u,g=e*l,v=g-l,m=-2*f+3*d,p=f-d,M=1-m,A=p-d+u;for(let b=0;b!==o;b++){let w=a[v+b+o],E=a[v+b+c]*h,_=a[g+b+o],S=a[g+b]*h;r[b]=M*w+A*E+m*_+p*S}return r}},XE=new kn,Xp=class extends Au{interpolate_(e,n,i,s){let r=super.interpolate_(e,n,i,s);return XE.fromArray(r).normalize().toArray(r),r}},wi={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ao={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Cx={9728:$t,9729:Ct,9984:Dh,9985:xo,9986:oa,9987:ui},Ix={33071:jn,33648:Ja,10497:mr},yp={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},qp={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Tr={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},qE={CUBICSPLINE:void 0,LINEAR:Kr,STEP:Yr},Sp={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};JE=new $e,Yp=class{constructor(e={},n={}){this.json=e,this.extensions={},this.plugins={},this.options=n,this.cache=new WE,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let i=!1,s=-1,r=!1,a=-1;if(typeof navigator<"u"&&typeof navigator.userAgent<"u"){let o=navigator.userAgent;i=/^((?!chrome|android).)*safari/i.test(o)===!0;let c=o.match(/Version\/(\d+)/);s=i&&c?parseInt(c[1],10):-1,r=o.indexOf("Firefox")>-1,a=r?o.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||i&&s<17||r&&a<98?(this.textureLoader=new Fc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)):(this.textureLoader=new kc(this.options.manager),this.textureLoader.setPriority(this.options.priority),this.textureLoader.setCache(this.options.cache)),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setWithCredentials(this.options.withCredentials),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new ta(this.options.manager),this.fileLoader.setPriority(this.options.priority),this.fileLoader.setCache(this.options.cache),this.fileLoader.setResponseType("arraybuffer"),(this.options.withCredentials||this.options.crossOrigin==="use-credentials")&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,n){let i=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(a){return a._markDefs&&a._markDefs()}),Promise.all(this._invokeAll(function(a){return a.beforeRoot&&a.beforeRoot()})).then(function(){return Promise.all([i.getDependencies("scene"),i.getDependencies("animation"),i.getDependencies("camera")])}).then(function(a){let o={scene:a[0][s.scene||0],scenes:a[0],animations:a[1],cameras:a[2],asset:s.asset,parser:i,userData:{}};return ha(r,o,s),ls(o,s),Promise.all(i._invokeAll(function(c){return c.afterRoot&&c.afterRoot(o)})).then(function(){for(let c of o.scenes)c.updateMatrixWorld();e(o)})}).catch(n)}_markDefs(){let e=this.json.nodes||[],n=this.json.skins||[],i=this.json.meshes||[];for(let s=0,r=n.length;s<r;s++){let a=n[s].joints;for(let o=0,c=a.length;o<c;o++)e[a[o]].isBone=!0}for(let s=0,r=e.length;s<r;s++){let a=e[s];a.mesh!==void 0&&(this._addNodeRef(this.meshCache,a.mesh),a.skin!==void 0&&(i[a.mesh].isSkinnedMesh=!0)),a.camera!==void 0&&this._addNodeRef(this.cameraCache,a.camera)}}_addNodeRef(e,n){n!==void 0&&(e.refs[n]===void 0&&(e.refs[n]=e.uses[n]=0),e.refs[n]++)}_getNodeRef(e,n,i){if(e.refs[n]<=1)return i;let s=i.clone(),r=(a,o)=>{let c=this.associations.get(a);c!=null&&this.associations.set(o,c);for(let[l,h]of a.children.entries())r(h,o.children[l])};return r(i,s),s.name+="_instance_"+e.uses[n]++,s}_invokeOne(e){let n=Object.values(this.plugins);n.push(this);for(let i=0;i<n.length;i++){let s=e(n[i]);if(s)return s}return null}_invokeAll(e){let n=Object.values(this.plugins);n.unshift(this);let i=[];for(let s=0;s<n.length;s++){let r=e(n[s]);r&&i.push(r)}return i}getDependency(e,n){let i=e+":"+n,s=this.cache.get(i);if(!s){switch(e){case"scene":s=this.loadScene(n);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(n)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(n)});break;case"accessor":s=this.loadAccessor(n);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(n)});break;case"buffer":s=this.loadBuffer(n);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(n)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(n)});break;case"skin":s=this.loadSkin(n);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(n)});break;case"camera":s=this.loadCamera(n);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,n)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(i,s)}return s}getDependencies(e){let n=this.cache.get(e);if(!n){let i=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];n=Promise.all(s.map(function(r,a){return i.getDependency(e,a)})),this.cache.add(e,n)}return n}loadBuffer(e){let n=this.json.buffers[e],i=this.fileLoader;if(n.type&&n.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+n.type+" buffer type is not supported.");if(n.uri===void 0&&e===0)return Promise.resolve(this.extensions[tt.KHR_BINARY_GLTF].body);let s=this.options;return new Promise(function(r,a){i.load(zs.resolveURL(n.uri,s.path),r,void 0,function(){a(new Error('THREE.GLTFLoader: Failed to load buffer "'+n.uri+'".'))})})}loadBufferView(e){let n=this.json.bufferViews[e];return this.getDependency("buffer",n.buffer).then(function(i){let s=n.byteLength||0,r=n.byteOffset||0;return i.slice(r,r+s)})}loadAccessor(e){let n=this,i=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){let a=yp[s.type],o=Ao[s.componentType],c=s.normalized===!0,l=new o(s.count*a);return Promise.resolve(new bn(l,a,c))}let r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(a){let o=a[0],c=yp[s.type],l=Ao[s.componentType],h=l.BYTES_PER_ELEMENT,u=h*c,d=s.byteOffset||0,f=s.bufferView!==void 0?i.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0,v,m;if(f&&f!==u){let p=Math.floor(d/f),M="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+p+":"+s.count,A=n.cache.get(M);A||(v=new l(o,p*f,s.count*f/h),A=new ro(v,f/h),n.cache.add(M,A)),m=new ao(A,c,d%f/h,g)}else o===null?v=new l(s.count*c):v=new l(o,d,s.count*c),m=new bn(v,c,g);if(s.sparse!==void 0){let p=yp.SCALAR,M=Ao[s.sparse.indices.componentType],A=s.sparse.indices.byteOffset||0,b=s.sparse.values.byteOffset||0,w=new M(a[1],A,s.sparse.count*p),E=new l(a[2],b,s.sparse.count*c);o!==null&&(m=new bn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let _=0,S=w.length;_<S;_++){let D=w[_];if(m.setX(D,E[_*c]),c>=2&&m.setY(D,E[_*c+1]),c>=3&&m.setZ(D,E[_*c+2]),c>=4&&m.setW(D,E[_*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){let n=this.json,i=this.options,r=n.textures[e].source,a=n.images[r],o=this.textureLoader;if(a.uri){let c=i.manager.getHandler(a.uri);c!==null&&(o=c)}return this.loadTextureImage(e,r,o)}loadTextureImage(e,n,i){let s=this,r=this.json,a=r.textures[e],o=r.images[n],c=(o.uri||o.bufferView)+":"+a.sampler;if(this.textureCache[c])return this.textureCache[c];let l=this.loadImageSource(n,i).then(function(h){h.flipY=!1,h.name=a.name||o.name||"",h.name===""&&typeof o.uri=="string"&&o.uri.startsWith("data:image/")===!1&&(h.name=o.uri);let d=(r.samplers||{})[a.sampler]||{};return h.magFilter=Cx[d.magFilter]||Ct,h.minFilter=Cx[d.minFilter]||ui,h.wrapS=Ix[d.wrapS]||mr,h.wrapT=Ix[d.wrapT]||mr,h.generateMipmaps=!h.isCompressedTexture&&h.minFilter!==$t&&h.minFilter!==Ct,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,n){let i=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(d=>d.clone());let a=s.images[e],o=self.URL||self.webkitURL,c=a.uri||"",l=!1,h;if(n.isKTX2Loader===!0&&a.bufferView!==void 0)h=i.getDependency("bufferView",a.bufferView).then(function(d){return new Promise(function(f,g){n.parse(d,f,g)})});else{if(a.bufferView!==void 0)c=i.getDependency("bufferView",a.bufferView).then(function(d){l=!0;let f=new Blob([d],{type:a.mimeType});return c=o.createObjectURL(f),c});else if(a.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");h=Promise.resolve(c).then(function(d){return new Promise(function(f,g){let v=f;n.isImageBitmapLoader===!0&&(v=function(m){let p=new an(m);p.needsUpdate=!0,f(p)}),n.load(zs.resolveURL(d,r.path),v,void 0,g)})})}let u=h.then(function(d){return l===!0&&o.revokeObjectURL(c),ls(d,a),d.userData.mimeType=a.mimeType||ZE(a.uri),d}).catch(function(d){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),d});return this.sourceCache[e]=u,u}assignTexture(e,n,i,s){let r=this;return this.getDependency("texture",i.index).then(function(a){if(!a)return null;if(i.texCoord!==void 0&&i.texCoord>0&&(a=a.clone(),a.channel=i.texCoord),r.extensions[tt.KHR_TEXTURE_TRANSFORM]){let o=i.extensions!==void 0?i.extensions[tt.KHR_TEXTURE_TRANSFORM]:void 0;if(o){let c=r.associations.get(a);a=r.extensions[tt.KHR_TEXTURE_TRANSFORM].extendTexture(a,o),r.associations.set(a,c)}}return s!==void 0&&(a.colorSpace=s),e[n]=a,a})}assignFinalMaterial(e){let n=e.geometry,i=e.material,s=n.attributes.tangent===void 0,r=n.attributes.color!==void 0,a=n.attributes.normal===void 0;if(e.isPoints){let o="PointsMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new lo,zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,c.sizeAttenuation=!1,this.cache.add(o,c)),i=c}else if(e.isLine){let o="LineBasicMaterial:"+i.uuid,c=this.cache.get(o);c||(c=new co,zn.prototype.copy.call(c,i),c.color.copy(i.color),c.map=i.map,this.cache.add(o,c)),i=c}if(s||r||a){let o="ClonedMaterial:"+i.uuid+":";s&&(o+="derivative-tangents:"),r&&(o+="vertex-colors:"),a&&(o+="flat-shading:");let c=this.cache.get(o);c||(c=i.clone(),r&&(c.vertexColors=!0),a&&(c.flatShading=!0),s&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(o,c),this.associations.set(c,this.associations.get(i))),i=c}e.material=i}getMaterialType(){return ns}loadMaterial(e){let n=this,i=this.json,s=this.extensions,r=i.materials[e],a,o={},c=r.extensions||{},l=[];if(c[tt.KHR_MATERIALS_UNLIT]){let u=s[tt.KHR_MATERIALS_UNLIT];a=u.getMaterialType(),l.push(u.extendParams(o,r,n))}else{let u=r.pbrMetallicRoughness||{};if(o.color=new ze(1,1,1),o.opacity=1,Array.isArray(u.baseColorFactor)){let d=u.baseColorFactor;o.color.setRGB(d[0],d[1],d[2],Tn),o.opacity=d[3]}u.baseColorTexture!==void 0&&l.push(n.assignTexture(o,"map",u.baseColorTexture,Xt)),o.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,o.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(l.push(n.assignTexture(o,"metalnessMap",u.metallicRoughnessTexture)),l.push(n.assignTexture(o,"roughnessMap",u.metallicRoughnessTexture))),a=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,o)})))}r.doubleSided===!0&&(o.side=Hn);let h=r.alphaMode||Sp.OPAQUE;if(h===Sp.BLEND?(o.transparent=!0,o.depthWrite=!1):(o.transparent=!1,h===Sp.MASK&&(o.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&a!==Jn&&(l.push(n.assignTexture(o,"normalMap",r.normalTexture)),o.normalScale=new je(1,1),r.normalTexture.scale!==void 0)){let u=r.normalTexture.scale;o.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&a!==Jn&&(l.push(n.assignTexture(o,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(o.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&a!==Jn){let u=r.emissiveFactor;o.emissive=new ze().setRGB(u[0],u[1],u[2],Tn)}return r.emissiveTexture!==void 0&&a!==Jn&&l.push(n.assignTexture(o,"emissiveMap",r.emissiveTexture,Xt)),Promise.all(l).then(function(){let u=new a(o);return r.name&&(u.name=r.name),ls(u,r),n.associations.set(u,{materials:e}),r.extensions&&ha(s,u,r),u})}createUniqueName(e){let n=Et.sanitizeNodeName(e||"");return n in this.nodeNamesUsed?n+"_"+ ++this.nodeNamesUsed[n]:(this.nodeNamesUsed[n]=0,n)}loadGeometries(e){let n=this,i=this.extensions,s=this.primitiveCache;function r(o){return i[tt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(o,n).then(function(c){return Px(c,o,n)})}let a=[];for(let o=0,c=e.length;o<c;o++){let l=e[o],h=jE(l),u=s[h];if(u)a.push(u.promise);else{let d;l.extensions&&l.extensions[tt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Px(new Dn,l,n),l.mode===wi.TRIANGLE_STRIP?d=d.then(f=>vp(f,Kc)):l.mode===wi.TRIANGLE_FAN&&(d=d.then(f=>vp(f,yo))),s[h]={primitive:l,promise:d},a.push(d)}}return Promise.all(a)}loadMesh(e){let n=this,i=this.json,s=this.extensions,r=i.meshes[e],a=r.primitives,o=[];for(let c=0,l=a.length;c<l;c++){let h=a[c].material===void 0?$E(this.cache):this.getDependency("material",a[c].material);o.push(h)}return o.push(n.loadGeometries(a)),Promise.all(o).then(async function(c){let l=c.slice(0,c.length-1),h=c[c.length-1],u=[];for(let f=0,g=h.length;f<g;f++){let v=h[f],m=a[f],p,M=l[f];if(m.mode===wi.TRIANGLES||m.mode===wi.TRIANGLE_STRIP||m.mode===wi.TRIANGLE_FAN||m.mode===void 0){let A=r.isSkinnedMesh===!0,b=v.hasAttribute("skinIndex")&&v.hasAttribute("skinWeight");A&&b===!1&&console.warn("THREE.GLTFLoader: Missing skinIndex or skinWeight attributes. Skinning disabled."),p=A&&b?new Sc(v,M):new At(v,M),p.isSkinnedMesh===!0&&p.normalizeSkinWeights()}else if(m.mode===wi.LINES)p=new bc(v,M);else if(m.mode===wi.LINE_STRIP)p=new Qr(v,M);else if(m.mode===wi.LINE_LOOP)p=new Tc(v,M);else if(m.mode===wi.POINTS)p=new Ec(v,M);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(p.geometry.morphAttributes).length>0&&KE(p,r),p.name=n.createUniqueName(r.name||"mesh_"+e),ls(p,r),m.extensions&&ha(s,p,m),n.assignFinalMaterial(p),u.push(p)}for(let f=0,g=u.length;f<g;f++)n.associations.set(u[f],{meshes:e,primitives:f});if(u.length===1)return r.extensions&&ha(s,u[0],r),u[0];let d=new Zn;r.extensions&&ha(s,d,r),n.associations.set(d,{meshes:e});for(let f=0,g=u.length;f<g;f++)d.add(u[f]);return d})}loadCamera(e){let n,i=this.json.cameras[e],s=i[i.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return i.type==="perspective"?n=new rn(So.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):i.type==="orthographic"&&(n=new ia(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),i.name&&(n.name=this.createUniqueName(i.name)),ls(n,i),Promise.resolve(n)}loadSkin(e){let n=this.json.skins[e],i=[];for(let s=0,r=n.joints.length;s<r;s++)i.push(this._loadNodeShallow(n.joints[s]));return n.inverseBindMatrices!==void 0?i.push(this.getDependency("accessor",n.inverseBindMatrices)):i.push(null),Promise.all(i).then(function(s){let r=s.pop(),a=s,o=[],c=[];for(let l=0,h=a.length;l<h;l++){let u=a[l];if(u){o.push(u);let d=new $e;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',n.joints[l])}return new Mc(o,c)})}loadAnimation(e){let n=this.json,i=this,s=n.animations[e],r=s.name?s.name:"animation_"+e,a=[],o=[],c=[],l=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){let f=s.channels[u],g=s.samplers[f.sampler],v=f.target,m=v.node,p=s.parameters!==void 0?s.parameters[g.input]:g.input,M=s.parameters!==void 0?s.parameters[g.output]:g.output;v.node!==void 0&&(a.push(this.getDependency("node",m)),o.push(this.getDependency("accessor",p)),c.push(this.getDependency("accessor",M)),l.push(g),h.push(v))}return Promise.all([Promise.all(a),Promise.all(o),Promise.all(c),Promise.all(l),Promise.all(h)]).then(function(u){let d=u[0],f=u[1],g=u[2],v=u[3],m=u[4],p=[];for(let A=0,b=d.length;A<b;A++){let w=d[A],E=f[A],_=g[A],S=v[A],D=m[A];if(w===void 0)continue;w.updateMatrix&&w.updateMatrix();let I=i._createAnimationTracks(w,E,_,S,D);if(I)for(let N=0;N<I.length;N++)p.push(I[N])}let M=new Dc(r,void 0,p);return ls(M,s),M})}createNodeMesh(e){let n=this.json,i=this,s=n.nodes[e];return s.mesh===void 0?null:i.getDependency("mesh",s.mesh).then(function(r){let a=i._getNodeRef(i.meshCache,s.mesh,r);return s.weights!==void 0&&a.traverse(function(o){if(o.isMesh)for(let c=0,l=s.weights.length;c<l;c++)o.morphTargetInfluences[c]=s.weights[c]}),a})}loadNode(e){let n=this.json,i=this,s=n.nodes[e],r=i._loadNodeShallow(e),a=[],o=s.children||[];for(let l=0,h=o.length;l<h;l++)a.push(i.getDependency("node",o[l]));let c=s.skin===void 0?Promise.resolve(null):i.getDependency("skin",s.skin);return Promise.all([r,Promise.all(a),c]).then(function(l){let h=l[0],u=l[1],d=l[2];d!==null&&h.traverse(function(f){f.isSkinnedMesh&&f.bind(d,JE)});for(let f=0,g=u.length;f<g;f++)h.add(u[f]);if(h.userData.pivot!==void 0&&u.length>0){let f=h.userData.pivot,g=u[0];h.pivot=new F().fromArray(f),h.position.x-=f[0],h.position.y-=f[1],h.position.z-=f[2],g.position.set(0,0,0),delete h.userData.pivot}return h})}_loadNodeShallow(e){let n=this.json,i=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];let r=n.nodes[e],a=r.name?s.createUniqueName(r.name):"",o=[],c=s._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&o.push(c),r.camera!==void 0&&o.push(s.getDependency("camera",r.camera).then(function(l){return s._getNodeRef(s.cameraCache,r.camera,l)})),s._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){o.push(l)}),this.nodeCache[e]=Promise.all(o).then(function(l){let h;if(r.isBone===!0?h=new oo:l.length>1?h=new Zn:l.length===1?h=l[0]:h=new It,h!==l[0])for(let u=0,d=l.length;u<d;u++)h.add(l[u]);if(r.name&&(h.userData.name=r.name,h.name=a),ls(h,r),r.extensions&&ha(i,h,r),r.matrix!==void 0){let u=new $e;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);if(!s.associations.has(h))s.associations.set(h,{});else if(r.mesh!==void 0&&s.meshCache.refs[r.mesh]>1){let u=s.associations.get(h);s.associations.set(h,{...u})}return s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){let n=this.extensions,i=this.json.scenes[e],s=this,r=new Zn;i.name&&(r.name=s.createUniqueName(i.name)),ls(r,i),i.extensions&&ha(n,r,i);let a=i.nodes||[],o=[];for(let c=0,l=a.length;c<l;c++)o.push(s.getDependency("node",a[c]));return Promise.all(o).then(function(c){for(let h=0,u=c.length;h<u;h++){let d=c[h];d.parent!==null?r.add(Ex(d)):r.add(d)}let l=h=>{let u=new Map;for(let[d,f]of s.associations)(d instanceof zn||d instanceof an)&&u.set(d,f);return h.traverse(d=>{let f=s.associations.get(d);f!=null&&u.set(d,f)}),u};return s.associations=l(r),r})}_createAnimationTracks(e,n,i,s,r){let a=[],o=e.name?e.name:e.uuid,c=[];function l(f){f.morphTargetInfluences&&c.push(f.name?f.name:f.uuid)}Tr[r.path]===Tr.weights?(l(e),e.isGroup&&e.children.forEach(l)):c.push(o);let h;switch(Tr[r.path]){case Tr.weights:h=Os;break;case Tr.rotation:h=Bs;break;case Tr.translation:case Tr.scale:h=Sr;break;default:i.itemSize===1?h=Os:h=Sr;break}let u=s.interpolation!==void 0?qE[s.interpolation]:Kr,d=this._getArrayFromAccessor(i);for(let f=0,g=c.length;f<g;f++){let v=new h(c[f]+"."+Tr[r.path],n.array,d,u);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(v),a.push(v)}return a}_getArrayFromAccessor(e){let n=e.array;if(e.normalized){let i=$p(n.constructor),s=new Float32Array(n.length);for(let r=0,a=n.length;r<a;r++)s[r]=n[r]*i;n=s}return n}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(i){let s=this instanceof Bs?Xp:Au;return new s(this.times,this.values,this.getValueSize()/3,i)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}});function wo(t){return new Lc({color:0,emissive:16777215,emissiveIntensity:t})}var wu,Dx=or(()=>{Eo();wu=class extends Zr{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let e=new yr;e.deleteAttribute("uv");let n=new ns({side:En}),i=new ns,s=new na(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new At(e,n);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new Jr(e,i,6),o=new It;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let c=new At(e,wo(50));c.position.set(-16.116,14.37,8.208),c.scale.set(.1,2.428,2.739),this.add(c);let l=new At(e,wo(50));l.position.set(-16.109,18.021,-8.207),l.scale.set(.1,2.425,2.751),this.add(l);let h=new At(e,wo(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let u=new At(e,wo(43));u.position.set(-.462,8.89,14.52),u.scale.set(4.38,5.441,.088),this.add(u);let d=new At(e,wo(20));d.position.set(3.235,11.486,-12.541),d.scale.set(2.5,2,.1),this.add(d);let f=new At(e,wo(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let e=new Set;this.traverse(n=>{n.isMesh&&(e.add(n.geometry),e.add(n.material))});for(let n of e)n.dispose()}}});var Ru,Ux=or(()=>{Eo();Ru=class extends Uc{constructor(e){super(e),this.type=Vn}parse(e){let a=function(S,D){switch(S){case 1:throw new Error("THREE.HDRLoader: Read Error: "+(D||""));case 2:throw new Error("THREE.HDRLoader: Write Error: "+(D||""));case 3:throw new Error("THREE.HDRLoader: Bad File Format: "+(D||""));default:case 4:throw new Error("THREE.HDRLoader: Memory Error: "+(D||""))}},u=function(S,D,I){D=D||1024;let B=S.pos,V=-1,R=0,G="",H=String.fromCharCode.apply(null,new Uint16Array(S.subarray(B,B+128)));for(;0>(V=H.indexOf(`
`))&&R<D&&B<S.byteLength;)G+=H,R+=H.length,B+=128,H=String.fromCharCode.apply(null,new Uint16Array(S.subarray(B,B+128)));return-1<V?(I!==!1&&(S.pos+=R+V+1),G+H.slice(0,V)):!1},d=function(S){let D=/^#\?(\S+)/,I=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,N=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,B=/^\s*FORMAT=(\S+)\s*$/,V=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,R={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0},G,H;for((S.pos>=S.byteLength||!(G=u(S)))&&a(1,"no header found"),(H=G.match(D))||a(3,"bad initial token"),R.valid|=1,R.programtype=H[1],R.string+=G+`
`;G=u(S),G!==!1;){if(R.string+=G+`
`,G.charAt(0)==="#"){R.comments+=G+`
`;continue}if((H=G.match(I))&&(R.gamma=parseFloat(H[1])),(H=G.match(N))&&(R.exposure=parseFloat(H[1])),(H=G.match(B))&&(R.valid|=2,R.format=H[1]),(H=G.match(V))&&(R.valid|=4,R.height=parseInt(H[1],10),R.width=parseInt(H[2],10)),R.valid&2&&R.valid&4)break}return R.valid&2||a(3,"missing format specifier"),R.valid&4||a(3,"missing image size specifier"),R},f=function(S,D,I){let N=D;if(N<8||N>32767||S[0]!==2||S[1]!==2||S[2]&128)return new Uint8Array(S);N!==(S[2]<<8|S[3])&&a(3,"wrong scanline width");let B=new Uint8Array(4*D*I);B.length||a(4,"unable to allocate buffer space");let V=0,R=0,G=4*N,H=new Uint8Array(4),W=new Uint8Array(G),te=I;for(;te>0&&R<S.byteLength;){R+4>S.byteLength&&a(1),H[0]=S[R++],H[1]=S[R++],H[2]=S[R++],H[3]=S[R++],(H[0]!=2||H[1]!=2||(H[2]<<8|H[3])!=N)&&a(3,"bad rgbe scanline format");let q=0,J;for(;q<G&&R<S.byteLength;){J=S[R++];let ye=J>128;if(ye&&(J-=128),(J===0||q+J>G)&&a(3,"bad scanline data"),ye){let Fe=S[R++];for(let K=0;K<J;K++)W[q++]=Fe}else W.set(S.subarray(R,R+J),q),q+=J,R+=J}let ee=N;for(let ye=0;ye<ee;ye++){let Fe=0;B[V]=W[ye+Fe],Fe+=N,B[V+1]=W[ye+Fe],Fe+=N,B[V+2]=W[ye+Fe],Fe+=N,B[V+3]=W[ye+Fe],V+=4}te--}return B},g=function(S,D,I,N){let B=S[D+3],V=Math.pow(2,B-128)/255;I[N+0]=S[D+0]*V,I[N+1]=S[D+1]*V,I[N+2]=S[D+2]*V,I[N+3]=1},v=function(S,D,I,N){let B=S[D+3],V=Math.pow(2,B-128)/255;I[N+0]=gr.toHalfFloat(Math.min(S[D+0]*V,65504)),I[N+1]=gr.toHalfFloat(Math.min(S[D+1]*V,65504)),I[N+2]=gr.toHalfFloat(Math.min(S[D+2]*V,65504)),I[N+3]=gr.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;let p=d(m),M=p.width,A=p.height,b=f(m.subarray(m.pos),M,A),w,E,_;switch(this.type){case Un:_=b.length/4;let S=new Float32Array(_*4);for(let I=0;I<_;I++)g(b,I*4,S,I*4);w=S,E=Un;break;case Vn:_=b.length/4;let D=new Uint16Array(_*4);for(let I=0;I<_;I++)v(b,I*4,D,I*4);w=D,E=Vn;break;default:throw new Error("THREE.HDRLoader: Unsupported type: "+this.type)}return{width:M,height:A,data:w,header:p.string,gamma:p.gamma,exposure:p.exposure,type:E,colorSpace:Tn,minFilter:Ct,magFilter:Ct,generateMipmaps:!1,flipY:!0}}setDataType(e){return this.type=e,this}}});function Lt(t,e){t=t.split(".");for(var n,i=Do;t.length&&(n=t.shift());)t.length||e===void 0?i=i[n]&&i[n]!==Object.prototype[n]?i[n]:i[n]={}:i[n]=e}function ua(){throw Error("Invalid UTF8")}function Fx(t,e){return e=String.fromCharCode.apply(null,e),t==null?e:t+e}function Q1(t){if(nA)t=(eA||=new TextEncoder).encode(t);else{let n=0,i=new Uint8Array(3*t.length);for(let s=0;s<t.length;s++){var e=t.charCodeAt(s);if(e<128)i[n++]=e;else{if(e<2048)i[n++]=e>>6|192;else{if(e>=55296&&e<=57343){if(e<=56319&&s<t.length){let r=t.charCodeAt(++s);if(r>=56320&&r<=57343){e=1024*(e-55296)+r-56320+65536,i[n++]=e>>18|240,i[n++]=e>>12&63|128,i[n++]=e>>6&63|128,i[n++]=63&e|128;continue}s--}e=65533}i[n++]=e>>12|224,i[n++]=e>>6&63|128}i[n++]=63&e|128}}t=n===i.length?i:i.subarray(0,n)}return t}function Bx(){var t=Do.navigator;return t&&(t=t.userAgent)?t:""}function cd(t){return cd[" "](t),t}function iA(t){var e=t.length,n=3*e/4;n%3?n=Math.floor(n):"=.".indexOf(t[e-1])!=-1&&(n="=.".indexOf(t[e-2])!=-1?n-2:n-1);var i=new Uint8Array(n),s=0;return(function(r,a){function o(l){for(;c<r.length;){let h=r.charAt(c++),u=al[h];if(u!=null)return u;if(!/^[\s\xa0]*$/.test(h))throw Error("Unknown base64 encoding at char: "+h)}return l}tv();for(var c=0;;){let l=o(-1),h=o(0),u=o(64),d=o(64);if(d===64&&l===-1)break;a(l<<2|h>>4),u!=64&&(a(h<<4&240|u>>2),d!=64&&a(u<<6&192|d))}})(t,function(r){i[s++]=r}),s!==n?i.subarray(0,s):i}function tv(){if(!al){al={};var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"];for(let n=0;n<5;n++){let i=t.concat(e[n].split(""));ev[n]=i;for(let s=0;s<i.length;s++){let r=i[s];al[r]===void 0&&(al[r]=s)}}}}function aA(t){return rA[t]||""}function iv(t){if(!nv)return iA(t);t=kx.test(t)?t.replace(kx,aA):t,t=atob(t);var e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}function Um(t){return sA&&t!=null&&t instanceof Uint8Array}function ya(){return oA||=new fs(null,Uo)}function Fm(t){sv(Uo);var e=t.h;return(e=e==null||Um(e)?e:typeof e=="string"?iv(e):null)==null?e:t.h=e}function sv(t){if(t!==Uo)throw Error("illegal external caller")}function rv(t,e){t.__closure__error__context__984382||(t.__closure__error__context__984382={}),t.__closure__error__context__984382.severity=e}function hl(t){return rv(t=Error(t),"warning"),t}function Fo(t,e){if(t!=null){var n=cA??={},i=n[t]||0;i>=e||(n[t]=i+1,rv(t=Error(),"incident"),(function(s){Do.setTimeout(()=>{throw s},0)})(t))}}function Ma(){return typeof BigInt=="function"}function Qs(t,e,n=!1){return typeof Symbol=="function"&&typeof Symbol()=="symbol"?n&&Symbol.for&&t?Symbol.for(t):t!=null?Symbol(t):Symbol():e}function gl(t,e){qo||Re in t||cv(t,ov),t[Re]|=e}function tn(t,e){qo||Re in t||cv(t,ov),t[Re]=e}function $o(t){return gl(t,34),t}function ul(t){return gl(t,8192),t}function Om(t,e){return 2&e&&(t|=2),1|t}function Oo(t){return t!=null&&t[av]===lv}function Xn(t,e){return e===void 0?t.i!==Sa&&!!(2&t.B[Re]):!!(2&e)&&t.i!==Sa}function ld(t,e){if(t!=null){if(typeof t=="string")t=t?new fs(t,Uo):ya();else if(!(t instanceof fs))if(Um(t))t=t.length?new fs(new Uint8Array(t),Uo):ya();else{if(!e)throw Error();t=void 0}}return t}function hv(t,e,n){var i,s=128&e?0:-1,r=t.length;(i=!!r)&&(i=(i=t[r-1])!=null&&typeof i=="object"&&i.constructor===Object);var a=r+(i?-1:0);for(e=128&e?1:0;e<a;e++)n(e-s,t[e]);if(i){t=t[r-1];for(let o in t)!isNaN(o)&&n(+o,t[o])}}function Yo(t){return 128&t?uv:void 0}function hd(t){return t.hb=!0,t}function hn(t){var e=t;if(Hx(e)){if(!/^\s*(?:-?[1-9]\d*|0)?\s*$/.test(e))throw Error(String(e))}else if(fA(e)&&!Number.isSafeInteger(e))throw Error(String(e));return ud?BigInt(t):t=pA(t)?t?"1":"0":Hx(t)?t.trim()||"0":String(t)}function Vx(t,e){if(t.length>e.length)return!1;if(t.length<e.length||t===e)return!0;for(let n=0;n<t.length;n++){let i=t[n],s=e[n];if(i>s)return!1;if(i<s)return!0}}function lm(t){var e=t>>>0;dt=e,Mt=(t-e)/4294967296>>>0}function ba(t){if(t<0){lm(-t);let[e,n]=zm(dt,Mt);dt=e>>>0,Mt=n>>>0}else lm(t)}function Bm(t){var e=dv||=new DataView(new ArrayBuffer(8));e.setFloat32(0,+t,!0),Mt=0,dt=e.getUint32(0,!0)}function fv(t,e){var n=4294967296*e+(t>>>0);return Number.isSafeInteger(n)?n:Bo(t,e)}function yA(t,e){return hn(Ma()?BigInt.asUintN(64,(BigInt(e>>>0)<<BigInt(32))+BigInt(t>>>0)):Bo(t,e))}function pv(t,e){return Ma()?hn(BigInt.asIntN(64,(BigInt.asUintN(32,BigInt(e))<<BigInt(32))+BigInt.asUintN(32,BigInt(t)))):hn(km(t,e))}function Bo(t,e){if(t>>>=0,(e>>>=0)<=2097151)var n=""+(4294967296*e+t);else Ma()?n=""+(BigInt(e)<<BigInt(32)|BigInt(t)):(t=(16777215&t)+6777216*(n=16777215&(t>>>24|e<<8))+6710656*(e=e>>16&65535),n+=8147497*e,e*=2,t>=1e7&&(n+=t/1e7>>>0,t%=1e7),n>=1e7&&(e+=n/1e7>>>0,n%=1e7),n=e+Wx(n)+Wx(t));return n}function Wx(t){return t=String(t),"0000000".slice(t.length)+t}function km(t,e){if(2147483648&e)if(Ma())t=""+(BigInt(0|e)<<BigInt(32)|BigInt(t>>>0));else{let[n,i]=zm(t,e);t="-"+Bo(n,i)}else t=Bo(t,e);return t}function _l(t){if(t.length<16)ba(Number(t));else if(Ma())t=BigInt(t),dt=Number(t&BigInt(4294967295))>>>0,Mt=Number(t>>BigInt(32)&BigInt(4294967295));else{let e=+(t[0]==="-");Mt=dt=0;let n=t.length;for(let i=e,s=(n-e)%6+e;s<=n;i=s,s+=6){let r=Number(t.slice(i,s));Mt*=1e6,(dt=1e6*dt+r)>=4294967296&&(Mt+=Math.trunc(dt/4294967296),Mt>>>=0,dt>>>=0)}if(e){let[i,s]=zm(dt,Mt);dt=i,Mt=s}}}function zm(t,e){return e=~e,t?t=1+~t:e+=1,[t,e]}function Wi(t){return Array.prototype.slice.call(t)}function mv(t){if(typeof t!="number")throw Error(`Value of float/double field must be a number, found ${typeof t}: ${t}`);return t}function fi(t){return t==null||typeof t=="number"?t:t==="NaN"||t==="Infinity"||t==="-Infinity"?Number(t):void 0}function Xu(t){if(typeof t!="boolean"){var e=typeof t;throw Error(`Expected boolean but got ${e!="object"?e:t?Array.isArray(t)?"array":e:"null"}: ${t}`)}return t}function Ko(t){switch(typeof t){case"bigint":return!0;case"number":return xl(t);case"string":return MA.test(t);default:return!1}}function Ks(t){if(t!=null){if(!xl(t))throw hl("enum");t|=0}return t}function Ta(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return xl(t)?0|t:void 0}function gv(t){if(t==null)return t;if(typeof t=="string"&&t)t=+t;else if(typeof t!="number")return;return xl(t)?t>>>0:void 0}function _v(t,e){if(e??=1024,!Ko(t))throw hl("int64");var n=typeof t;switch(e){case 512:switch(n){case"string":return qu(t);case"bigint":return String(ga(64,t));default:return um(t)}case 1024:switch(n){case"string":return yv(t);case"bigint":return hn(ga(64,t));default:return hn(Xi(t)?t:um(t))}case 0:switch(n){case"string":return qu(t);case"bigint":return hn(ga(64,t));default:return Gm(t)}default:return(function(i,s=`unexpected value ${i}!`){throw Error(s)})(e,"Unknown format requested type for int64")}}function xv(t){var e=t.length;return(t[0]==="-"?e<20||e===20&&t<="-9223372036854775808":e<19||e===19&&t<="9223372036854775807")?t:(_l(t),km(dt,Mt))}function vv(t){if(t[0]==="-")var e=!1;else e=(e=t.length)<20||e===20&&t<="18446744073709551615";return e?t:(_l(t),Bo(dt,Mt))}function Gm(t){if(t=Rr(t),!Xi(t)){ba(t);var e=dt,n=Mt;(t=2147483648&n)&&(n=~n>>>0,(e=1+~e>>>0)==0&&(n=n+1>>>0)),t=typeof(e=fv(e,n))=="number"?t?-e:e:t?"-"+e:e}return t}function um(t){return t=Rr(t),Xi(t)?t=String(t):(ba(t),t=km(dt,Mt)),t}function qu(t){var e=Rr(Number(t));return Xi(e)?String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),xv(t))}function yv(t){var e=Rr(Number(t));return Xi(e)?hn(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),Ma()?hn(ga(64,BigInt(t))):hn(xv(t)))}function $u(t){var e=typeof t;return t==null?t:e==="bigint"?hn(ga(64,t)):Ko(t)?e==="string"?yv(t):hn(Xi(t)?t:um(t)):void 0}function Hm(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(ga(64,t));if(Ko(t)){if(e==="string")return qu(t);if(e==="number")return Gm(t)}}function bA(t){if(t==null)return t;var e=typeof t;if(e==="bigint")return String(hm(64,t));if(Ko(t)){if(e==="string")return e=Rr(Number(t)),Xi(e)&&e>=0?t=String(e):((e=t.indexOf("."))!==-1&&(t=t.substring(0,e)),t=vv(t)),t;if(e==="number")return(function(n){return(n=Rr(n))>=0&&Xi(n)||(ba(n),n=fv(dt,Mt)),n})(t)}}function Sv(t){if(t==null||typeof t=="string"||t instanceof fs)return t}function Mv(t){if(typeof t!="string")throw Error();return t}function $s(t){if(t!=null&&typeof t!="string")throw Error();return t}function Rn(t){return t==null||typeof t=="string"?t:void 0}function Vm(t,e,n,i){return Oo(t)?t:Array.isArray(t)?((i=(n=0|t[Re])|32&i|2&i)!==n&&tn(t,i),new e(t)):(n?2&i?((t=e[zx])||($o((t=new e).B),t=e[zx]=t),e=t):e=new e:e=void 0,e)}function TA(t,e,n){return e?_v(t,1024):$u(t)??(n?SA:void 0)}function EA(t){return t}function Xx(t){return t}function Zp(t){if(2&t.N)throw Error("Cannot mutate an immutable Map")}function IA(t,e,n,i,s,r){return t=Vm(t,i,n,r),s&&(t=Xm(t)),t}function PA(t){return[t,this.get(t)]}function qx(){return CA||=new Zs($o([]),void 0,void 0,void 0,AA)}function dd(t){return ps?t[ps]:void 0}function Yu(t,e){for(let n in t)!isNaN(n)&&e(t,+n,t[n])}function UA(t,e){e<100||Fo(uA,1)}function fd(t,e,n,i){var s=i!==void 0;i=!!i;var r,a=ps;!s&&qo&&a&&(r=t[a])&&Yu(r,UA),a=[];var o=t.length;r=4294967295;var c=!1,l=!!(64&e),h=l?128&e?0:-1:void 0;if(!(1&e)){var u=o&&t[o-1];u!=null&&typeof u=="object"&&u.constructor===Object?r=--o:u=void 0,!l||128&e||s||(c=!0,r=(LA??EA)(r-h,h,t,u,void 0)+h)}e=void 0;for(var d=0;d<o;d++){let f=t[d];if(f!=null&&(f=n(f,i))!=null)if(l&&d>=r){let g=d-h;(e??={})[g]=f}else a[d]=f}if(u)for(let f in u){if((o=u[f])==null||(o=n(o,i))==null)continue;let g;d=+f,l&&!Number.isNaN(d)&&(g=d+h)<r?a[g]=o:(e??={})[f]=o}return e&&(c?a.push(e):a[r]=e),s&&(n=ps)&&(t=dd(t))&&t instanceof dm&&(a[n]=(function(f){var g=new dm;return Yu(f,(v,m,p)=>{g[m]=Wi(p)}),g.h=f.h,g})(t)),a}function FA(t){return t[0]=dl(t[0]),t[1]=dl(t[1]),t}function dl(t){switch(typeof t){case"number":return Number.isFinite(t)?t:""+t;case"bigint":return cm(t)?Number(t):""+t;case"boolean":return t?1:0;case"object":if(Array.isArray(t)){var e=0|t[Re];return t.length===0&&1&e?void 0:fd(t,e,dl)}if(Oo(t))return bv(t);if(t instanceof fs){if((e=t.h)==null)t="";else if(typeof e=="string")t=e;else{if(nv){for(var n="",i=0,s=e.length-10240;i<s;)n+=String.fromCharCode.apply(null,e.subarray(i,i+=10240));n+=String.fromCharCode.apply(null,i?e.subarray(i):e),e=btoa(n)}else{n===void 0&&(n=0),tv(),n=ev[n],i=Array(Math.floor(e.length/3)),s=n[64]||"";let l=0,h=0;for(;l<e.length-2;l+=3){var r=e[l],a=e[l+1],o=e[l+2],c=n[r>>2];r=n[(3&r)<<4|a>>4],a=n[(15&a)<<2|o>>6],o=n[63&o],i[h++]=c+r+a+o}switch(c=0,o=s,e.length-l){case 2:o=n[(15&(c=e[l+1]))<<2]||s;case 1:e=e[l],i[h]=n[e>>2]+n[(3&e)<<4|c>>4]+o+s}e=i.join("")}t=t.h=e}return t}return t instanceof Zs?t=t.size!==0?t.fa(FA):void 0:void 0}return t}function bv(t){return fd(t=t.B,0|t[Re],dl)}function _a(t,e){return Tv(t,e[0],e[1])}function Tv(t,e,n,i=0){if(t==null){var s=32;n?(t=[n],s|=128):t=[],e&&(s=-16760833&s|(1023&e)<<14)}else{if(!Array.isArray(t))throw Error("narr");if(s=0|t[Re],am&&1&s)throw Error("rfarr");if(2048&s&&!(2&s)&&(function(){if(am)throw Error("carr");Fo(dA,5)})(),256&s)throw Error("farr");if(64&s)return(s|i)!==s&&tn(t,s|i),t;if(n&&(s|=128,n!==t[0]))throw Error("mid");e:{s|=64;var r=(n=t).length;if(r){var a=r-1;let c=n[a];if(c!=null&&typeof c=="object"&&c.constructor===Object){if((a-=e=128&s?0:-1)>=1024)throw Error("pvtlmt");for(var o in c)(r=+o)<a&&(n[r+e]=c[o],delete c[o]);s=-16760833&s|(1023&a)<<14;break e}}if(e){if((o=Math.max(e,r-(128&s?0:-1)))>1024)throw Error("spvt");s=-16760833&s|(1023&o)<<14}}}return tn(t,64|s|i),t}function OA(t,e){if(typeof t!="object")return t;if(Array.isArray(t)){var n=0|t[Re];return t.length===0&&1&n?void 0:$x(t,n,e)}if(Oo(t))return Yx(t);if(t instanceof Zs){if(2&(e=t.N))return t;if(!t.size)return;if(n=$o(t.fa()),t.O)for(t=0;t<n.length;t++){let i=n[t],s=i[1];s=s==null||typeof s!="object"?void 0:Oo(s)?Yx(s):Array.isArray(s)?$x(s,0|s[Re],!!(32&e)):void 0,i[1]=s}return n}return t instanceof fs?t:void 0}function $x(t,e,n){return 2&e||(!n||4096&e||16&e?t=jo(t,e,!1,n&&!(16&e)):(gl(t,34),4&e&&Object.freeze(t))),t}function Wm(t,e,n){return t=new t.constructor(e),n&&(t.i=Sa),t.o=Sa,t}function Yx(t){var e=t.B,n=0|e[Re];return Xn(t,n)?t:qm(t,e,n)?Wm(t,e):jo(e,n)}function jo(t,e,n,i){return i??=!!(34&e),t=fd(t,e,OA,i),i=32,n&&(i|=2),tn(t,e=16769217&e|i),t}function Xm(t){var e=t.B,n=0|e[Re];return Xn(t,n)?qm(t,e,n)?Wm(t,e,!0):new t.constructor(jo(e,n,!1)):t}function Zo(t){if(t.i!==Sa)return!1;var e=t.B;return gl(e=jo(e,0|e[Re]),2048),t.B=e,t.i=void 0,t.o=void 0,!0}function Ea(t){if(!Zo(t)&&Xn(t,0|t.B[Re]))throw Error()}function Pr(t,e){e===void 0&&(e=0|t[Re]),32&e&&!(4096&e)&&tn(t,4096|e)}function qm(t,e,n){return!!(2&n)||!(!(32&n)||4096&n)&&(tn(e,2|n),t.i=Sa,!0)}function Ut(t,e,n,i){if((e=ms(t.B,e,void 0,i))!==null||n&&t.o!==Sa)return e}function ms(t,e,n,i){if(e===-1)return null;var s=e+(n?0:-1),r=t.length-1;if(!(r<1+(n?0:-1))){if(s>=r){var a=t[r];if(a!=null&&typeof a=="object"&&a.constructor===Object){n=a[e];var o=!0}else{if(s!==r)return;n=a}}else n=t[s];if(i&&n!=null){if((i=i(n))==null)return i;if(!Object.is(i,n))return o?a[e]=i:t[s]=i,i}return n}}function Ke(t,e,n,i){Ea(t);var s=t.B;return en(s,0|s[Re],e,n,i),t}function en(t,e,n,i,s){var r=n+(s?0:-1),a=t.length-1;if(a>=1+(s?0:-1)&&r>=a){let o=t[a];if(o!=null&&typeof o=="object"&&o.constructor===Object)return o[n]=i,e}return r<=a?(t[r]=i,e):(i!==void 0&&(n>=(a=(e??=0|t[Re])>>14&1023||536870912)?i!=null&&(t[a+(s?0:-1)]={[n]:i}):t[r]=i),e)}function Av(t,e){return Oo(t=ms(t.B,e))||Array.isArray(t)}function wv(t,e,n){return Av(t,e=Pv(t,n)===e?e:-1)}function pa(t,e,n,i,s){var r=t.B,a=0|r[Re];i=i&&i!==4?i!==1&&(t?Xn(t,a):2&a)?1:i:4,s=!!s||i===3,i===2&&Zo(t)&&(a=0|(r=t.B)[Re]);var o=(t=$m(r,e))===Ir?7:0|t[Re],c=Om(o,a),l=!(4&c);if(l){let h=0,u=0;for(;h<t.length;h++){let d=n(t[h]);d!=null&&(t[u++]=d)}u<h&&(t.length=u),n=-513&c|4,c=n&=-1025,c&=-4097}return c!==o&&(tn(t,c),2&c&&Object.freeze(t)),Rv(t,c,r,a,e,i,l,s)}function Rv(t,e,n,i,s,r,a,o){var c=e,l=ko(e);return l&&r===2&&(t=Wi(t),c=0,e=xa(e,i),i=en(n,i,s,t),l=!1),l||(r===1||r===4&&(2&e||!(16&e)&&32&i)?((e|=!t.length||a&&!(4096&e)||32&i&&!(4096&e||16&e)?2:256)!==c&&tn(t,e),Object.freeze(t)):(o||(e|=16),e!==c&&tn(t,e))),2&e||!(4096&e||16&e)||Pr(n,i),t}function $m(t,e,n){return t=ms(t,e,n),Array.isArray(t)?t:Ir}function ko(t){return!!(2&t)&&!!(4&t)||!!(256&t)}function Cv(t){return ld(t,!0)}function Iv(t){t=Wi(t);for(let e=0;e<t.length;e++){let n=t[e]=Wi(t[e]);Array.isArray(n[1])&&(n[1]=$o(n[1]))}return ul(t)}function vl(t,e,n,i){Ea(t),en(t=t.B,0|t[Re],e,(i==="0"?Number(n)===0:n===i)?void 0:n)}function Lr(t,e,n){if(2&e)throw Error();var i=Yo(e),s=$m(t,n,i),r=s===Ir?7:0|s[Re],a=Om(r,e);return(2&a||ko(a)||16&a)&&(a===r||ko(a)||tn(s,a),s=Wi(s),r=0,a=xa(a,e),en(t,e,n,s,i)),(a&=-13)!==r&&tn(s,a),s}function Pv(t,e){return Km(Ym(t=t.B),t,void 0,e)}function Ym(t){if(qo)return t[nl]??(t[nl]=new Map);if(nl in t)return t[nl];var e=new Map;return Object.defineProperty(t,nl,{value:e}),e}function Lv(t,e,n,i,s){var r=Ym(t),a=Km(r,t,e,n,s);return a!==i&&(a&&(e=en(t,e,a,void 0,s)),r.set(n,i)),e}function Km(t,e,n,i,s){var r=t.get(i);if(r!=null)return r;r=0;for(let a=0;a<i.length;a++){let o=i[a];ms(e,o,s)!=null&&(r!==0&&(n=en(e,n,r,void 0,s)),r=o)}return t.set(i,r),r}function jm(t,e,n){var i=0|t[Re],s=Yo(i),r=ms(t,n,s);if(Oo(r)){if(!Xn(r))return Zo(r),r.B;var a=r.B}else Array.isArray(r)&&(a=r,2&i&&$o(a));if(a){let o=0|a[Re];2&o&&(a=jo(a,o))}return(a=_a(a,e))!==r&&en(t,i,n,a,s),a}function BA(t,e,n,i,s){var r=!1;if(i=(function(a,o,c,l){return ms(a,o,c,l)})(t,i,s,a=>{var o=Vm(a,n,!1,e);return r=o!==a&&o!=null,o}),i!=null)return r&&!Xn(i)&&Pr(t,e),i}function mt(t,e,n,i){var s=t.B,r=0|s[Re];if((e=BA(s,r,e,n,i))==null)return e;if(!Xn(t,r=0|s[Re])){let a=Xm(e);a!==e&&(Zo(t)&&(r=0|(s=t.B)[Re]),Pr(s,r=en(s,r,n,e=a,i)))}return e}function Nv(t,e,n,i,s,r,a,o){r=r&&r!==4?r!==1&&(t?Xn(t,n):2&n)?1:r:4,a=!!a||r===3;var c=!!o&&!(t?Xn(t,n):2&n);(r===2||c)&&t&&Zo(t)&&(n=0|(e=t.B)[Re]);var l=(t=$m(e,s))===Ir?7:0|t[Re],h=Om(l,n);if(o=!(4&h)){var u=t,d=n;let f=!!(2&h);f&&(d|=2);let g=!f,v=!0,m=0,p=0;for(;m<u.length;m++){let M=Vm(u[m],i,!1,d);if(M instanceof i){if(!f){let A=Xn(M);g&&=!A,v&&=A}u[p++]=M}}p<m&&(u.length=p),h|=4,h=v?-4097&h:4096|h,h=g?8|h:-9&h}if(h!==l&&(tn(t,h),2&h&&Object.freeze(t)),c&&!(8&h||!t.length&&(r===1||r===4&&(2&h||!(16&h)&&32&n)))){for(ko(h)&&(t=Wi(t),h=xa(h,n),n=en(e,n,s,t)),i=t,c=h,l=0;l<i.length;l++)(u=i[l])!==(h=Xm(u))&&(i[l]=h);c|=8,tn(t,h=c=i.length?4096|c:-4097&c)}return Rv(t,h,e,n,s,r,o,a)}function Aa(t,e,n){var i=t.B;return Nv(t,i,0|i[Re],e,n,void 0,!1,!0)}function Dv(t){return t==null&&(t=void 0),t}function Ne(t,e,n,i,s){return Ke(t,n,i=Dv(i),s),i&&!Xn(i)&&Pr(t.B),t}function Vi(t,e,n,i){e:{var s=i=Dv(i);Ea(t);let r=t.B,a=0|r[Re];if(s==null){let o=Ym(r);if(Km(o,r,a,n)!==e)break e;o.set(n,0)}else a=Lv(r,a,n,e);en(r,a,e,s)}return i&&!Xn(i)&&Pr(t.B),t}function fm(t,e,n){Ea(t);var i=t.B,s=0|i[Re];if(n==null)en(i,s,e);else{var r=n===Ir?7:0|n[Re],a=r,o=ko(r),c=o||Object.isFrozen(n),l=!0,h=!0;for(let d=0;d<n.length;d++){var u=n[d];o||(u=Xn(u),l&&=!u,h&&=u)}o||(r=l?13:5,r=h?-4097&r:4096|r),c&&r===a||(n=Wi(n),a=0,r=xa(r,s)),r!==a&&tn(n,r),s=en(i,s,e,n),2&r||!(4096&r||16&r)||Pr(i,s)}return t}function xa(t,e){return-273&(2&e?2|t:-3&t)}function fl(t,e,n,i){Ea(t);var s=t.B;t=Nv(t,s,0|s[Re],n,e,2,!0),i=i??new n,t.push(i),e=n=t===Ir?7:0|t[Re],(i=Xn(i))?(n&=-9,t.length===1&&(n&=-4097)):n|=4096,n!==e&&tn(t,n),i||Pr(s)}function Pi(t,e,n){return Ta(Ut(t,e,n))}function Wn(t,e){return Ut(t,e,void 0,fi)??0}function pm(t,e,n,i){return mt(t,e,n=Pv(t,i)===n?n:-1,void 0)}function mm(t,e){vl(t,3,e==null?e:Xu(e),!1)}function gs(t,e,n){if(n!=null){if(typeof n!="number"||!xl(n))throw hl("int32");n|=0}Ke(t,e,n)}function Jp(t,e,n){return Ke(t,e,n==null?n:_v(n))}function Uu(t,e,n){return Ke(t,e,n==null?n:(function(i){if(!Ko(i))throw hl("uint64");switch(typeof i){case"string":var s=Rr(Number(i));return Xi(s)&&s>=0?i=hn(s):((s=i.indexOf("."))!==-1&&(i=i.substring(0,s)),i=Ma()?hn(hm(64,BigInt(i))):hn(vv(i))),i;case"bigint":return hn(hm(64,i));default:return i>=0&&Xi(i)||((i=Rr(i))>=0&&Xi(i)?i=String(i):(ba(i),i=Bo(dt,Mt))),hn(i)}})(n))}function Ue(t,e,n){Ke(t,e,n==null?n:mv(n))}function Io(t,e,n){vl(t,e,n==null?n:mv(n),0)}function pi(t,e,n){vl(t,e,$s(n),"")}function Ku(t,e,n){{Ea(t);let a=t.B,o=0|a[Re];if(n==null)en(a,o,e);else{var i=t=n===Ir?7:0|n[Re],s=ko(t),r=s||Object.isFrozen(n);for(s||(t=0),r||(n=Wi(n),i=0,t=xa(t,o),r=!1),t|=5,t|=(4&t?512&t?512:1024&t?1024:0:void 0)??1024,s=0;s<n.length;s++){let c=n[s],l=Mv(c);Object.is(c,l)||(r&&(n=Wi(n),i=0,t=xa(t,o),r=!1),n[s]=l)}t!==i&&(r&&(n=Wi(n),t=xa(t,o)),tn(n,t)),en(a,o,e,n)}}}function pd(t,e,n){Ea(t),pa(t,e,Rn,2,!0).push(Mv(n))}function md(t,e){if(typeof t=="string")return new Ro(iv(t),e);if(Array.isArray(t))return new Ro(new Uint8Array(t),e);if(t.constructor===Uint8Array)return new Ro(t,!1);if(t.constructor===ArrayBuffer)return t=new Uint8Array(t),new Ro(t,!1);if(t.constructor===fs)return e=Fm(t)||new Uint8Array(0),new Ro(e,!0,t);if(t instanceof Uint8Array)return t=t.constructor===Uint8Array?t:new Uint8Array(t.buffer,t.byteOffset,t.byteLength),new Ro(t,!1);throw Error()}function Zm(t,e){var n=0,i=0,s=0,r=t.i,a=t.h;do{var o=r[a++];n|=(127&o)<<s,s+=7}while(s<32&&128&o);if(s>32)for(i|=(127&o)>>4,s=3;s<32&&128&o;s+=7)i|=(127&(o=r[a++]))<<s;if(va(t,a),!(128&o))return e(n>>>0,i>>>0);throw Error()}function Jm(t){for(var e=0,n=t.h,i=n+10,s=t.i;n<i;){let r=s[n++];if(e|=r,!(128&r))return va(t,n),!!(127&e)}throw Error()}function Js(t){var e=t.i,n=t.h,i=e[n++],s=127&i;if(128&i&&(s|=(127&(i=e[n++]))<<7,128&i&&(s|=(127&(i=e[n++]))<<14,128&i&&(s|=(127&(i=e[n++]))<<21,128&i&&(s|=(i=e[n++])<<28,128&i&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++]&&128&e[n++])))))throw Error();return va(t,n),s}function _s(t){return Js(t)>>>0}function ju(t){return Zm(t,pv)}function gm(t){var e=t.i,n=t.h,i=e[n],s=e[n+1],r=e[n+2];return e=e[n+3],va(t,t.h+4),(i|s<<8|r<<16|e<<24)>>>0}function Zu(t){var e=gm(t);t=2*(e>>31)+1;var n=e>>>23&255;return e&=8388607,n==255?e?NaN:t*(1/0):n==0?1401298464324817e-60*t*e:t*Math.pow(2,n-150)*(e+8388608)}function kA(t){return Js(t)}function va(t,e){if(t.h=e,e>t.l)throw Error()}function Uv(t,e){if(e<0)throw Error();var n=t.h;if((e=n+e)>t.l)throw Error();return t.h=e,n}function Fv(t,e){if(e==0)return ya();var n=Uv(t,e);return t.ga&&t.u?n=t.i.subarray(n,n+e):(t=t.i,n=n===(e=n+e)?new Uint8Array(0):vA?t.slice(n,e):new Uint8Array(t.subarray(n,e))),n.length==0?ya():new fs(n,Uo)}function Ov(t,e,n,i){if(Ju.length){let s=Ju.pop();return s.A(i),s.h.init(t,e,n,i),s}return new GA(t,e,n,i)}function Bv(t){t.h.clear(),t.l=-1,t.i=-1,Ju.length<100&&Ju.push(t)}function kv(t){var e=t.h;if(e.h==e.l)return!1;t.o=t.h.h;var n=_s(t.h);if(e=n>>>3,!((n&=7)>=0&&n<=5)||e<1)throw Error();return t.l=e,t.i=n,!0}function Fu(t){try{switch(t.i){case 0:t.i!=0?Fu(t):Jm(t.h);break;case 1:var e=t.h;va(e,e.h+8);break;case 2:if(t.i!=2)Fu(t);else{var n=_s(t.h),i=t.h;va(i,i.h+n)}break;case 5:var s=t.h;va(s,s.h+4);break;case 3:zv();let r=t.l;try{for(;;){if(!kv(t))throw Error();if(t.i==4){if(t.l!=r)throw Error();break}Fu(t)}}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{zo>0&&zo--}break;default:throw Error()}}catch(r){throw r instanceof RangeError?new SyntaxError:r}}function zv(){if(zo>=100)throw new SyntaxError;zo++}function yl(t,e,n){var i=t.h.l,s=_s(t.h),r=(s=t.h.h+s)-i;if(r<=0&&(t.h.l=s,n(e,t,void 0,void 0,void 0),r=s-t.h.h),r)throw Error();return t.h.h=s,t.h.l=i,e}function Qm(t){var e=_s(t.h),n=Uv(t=t.h,e);if(t=t.i,tA){var i,s=t;(i=Kp)||(i=Kp=new TextDecoder("utf-8",{fatal:!0})),e=n+e,s=n===0&&e===s.length?s:s.subarray(n,e);try{var r=i.decode(s)}catch(o){if(Cu===void 0){try{i.decode(new Uint8Array([128]))}catch{}try{i.decode(new Uint8Array([97])),Cu=!0}catch{Cu=!1}}throw!Cu&&(Kp=void 0),o}}else{e=(r=n)+e,n=[];let o,c=null;for(;r<e;){var a=t[r++];a<128?n.push(a):a<224?r>=e?ua():(o=t[r++],a<194||(192&o)!=128?(r--,ua()):n.push((31&a)<<6|63&o)):a<240?r>=e-1?ua():(o=t[r++],(192&o)!=128||a===224&&o<160||a===237&&o>=160||(192&(i=t[r++]))!=128?(r--,ua()):n.push((15&a)<<12|(63&o)<<6|63&i)):a<=244?r>=e-2?ua():(o=t[r++],(192&o)!=128||o-144+(a<<28)>>30||(192&(i=t[r++]))!=128||(192&(s=t[r++]))!=128?(r--,ua()):(a=(7&a)<<18|(63&o)<<12|(63&i)<<6|63&s,a-=65536,n.push(55296+(a>>10&1023),56320+(1023&a)))):ua(),n.length>=8192&&(c=Fx(c,n),n.length=0)}r=Fx(c,n)}return r}function eg(t){var e=_s(t.h);return Fv(t.h,e)}function Sl(t,e,n){var i=_s(t.h);for(i=t.h.h+i;t.h.h<i;)n.push(e(t.h))}function HA(t){return new Qu(4294967295&t,Math.floor(t/4294967296))}function jx(t){return t?/^\d+$/.test(t)?(_l(t),new Qu(dt,Mt)):null:VA||=new Qu(0,0)}function WA(t){return new ed(4294967295&t,Math.floor(t/4294967296))}function Gv(t){return t?/^-?\d+$/.test(t)?(_l(t),new ed(dt,Mt)):null:XA||=new ed(0,0)}function Hv(t,e,n){return typeof BigInt64Array<"u"?(il||(il=new BigInt64Array(1),Lu=new Uint32Array(il.buffer),il[0]=BigInt(1),e1=Lu[0]===1),il[0]=t,new e(Lu[t=e1?0:1],Lu[1-t])):(Qp||(Zx=BigInt(Number.MIN_SAFE_INTEGER),Jx=BigInt(Number.MAX_SAFE_INTEGER),Qx=BigInt(4294967295),Qp=BigInt(32)),t>=Zx&&t<=Jx?n(Number(t)):(t=BigInt.asUintN(64,t),new e(Number(t&Qx),Number(t>>Qp))))}function js(t,e,n){for(;n>0||e>127;)t.h.push(127&e|128),e=(e>>>7|n<<25)>>>0,n>>>=7;t.h.push(e)}function Jo(t,e){for(;e>127;)t.h.push(127&e|128),e>>>=7;t.h.push(e)}function Ml(t,e){if(e>=0)Jo(t,e);else{for(let n=0;n<9;n++)t.h.push(127&e|128),e>>=7;t.h.push(1)}}function qA(t,e){_l(e),(function(n){var i=Mt>>31;n(dt<<1^i,(Mt<<1|dt>>>31)^i)})((n,i)=>{js(t,n>>>0,i>>>0)})}function pl(t,e){t.h.push(e>>>0&255),t.h.push(e>>>8&255),t.h.push(e>>>16&255),t.h.push(e>>>24&255)}function Go(t,e){e.length!==0&&(t.l.push(e),t.i+=e.length)}function $n(t,e,n){Jo(t.h,8*e+n)}function tg(t,e){return $n(t,e,2),e=t.h.end(),Go(t,e),e.push(t.i),e}function ng(t,e){var n=e.pop();for(n=t.i+t.h.length()-n;n>127;)e.push(127&n|128),n>>>=7,t.i++;e.push(n),t.i++}function Vv(t,e,n){if(n!=null)switch($n(t,e,0),typeof n){case"number":t=t.h,ba(n),js(t,dt,Mt);break;case"bigint":n=Hv(n,ed,WA),js(t.h,n.i,n.h);break;default:n=Gv(n),js(t.h,n.i,n.h)}}function bl(t,e,n){$n(t,e,2),Jo(t.h,n.length),Go(t,t.h.end()),Go(t,n)}function td(t,e,n,i){n!=null&&(e=tg(t,e),i(n,t),ng(t,e))}function Wv(t){typeof t=="string"&&Gv(t)}function Li(){var t=class{constructor(){throw Error()}};return Object.setPrototypeOf(t,t.prototype),t}function xs(t,e,n){var i=t.B;ps&&ps in i&&(i=i[ps])&&delete i[e.h],e.i?e.u(t,e.i,e.h,n,e.l):e.u(t,e.h,n,e.l)}function yd(t,e){return new Qo(t,e,ig)}function qv(t,e,n,i,s){td(t,n,jv(e,i),s)}function wa(t,e,n,i){var s=i[t];if(s)return s;(s={}).Ea=i,s.da=(function(u){switch(typeof u){case"boolean":return NA||=[0,void 0,!0];case"number":return u>0?void 0:u===0?DA||=[0,void 0]:[-u,void 0];case"string":return[0,u];case"object":return u}})(i[0]);var r=i[1],a=1;r&&r.constructor===Object&&(s.ja=r,typeof(r=i[++a])=="function"&&r.length>0&&(s.wa=!0,$v??=r,Yv??=i[a+1],r=i[a+=2]));for(var o={};r&&Array.isArray(r)&&r.length&&typeof r[0]=="number"&&r[0]>0;){for(var c=0;c<r.length;c++)o[r[c]]=r;r=i[++a]}for(c=1;r!==void 0;){let u;typeof r=="number"&&(c+=r,r=i[++a]);var l=void 0;if(r instanceof Qo?u=r:(u=JA,a--),u?.l){r=i[++a],l=i;var h=a;typeof r=="function"&&(r=r(),l[h]=r),l=r}for(h=c+1,typeof(r=i[++a])=="number"&&r<0&&(h-=r,r=i[++a]);c<h;c++){let d=o[c];l?n(s,c,u,l,d):e(s,c,u,d)}}return i[t]=s}function Kv(t){return Array.isArray(t)?t[0]instanceof Qo?t:[QA,t]:[t,void 0]}function jv(t,e){return t instanceof _e?t.B:Array.isArray(t)?_a(t,e):void 0}function og(t,e,n,i){var s=n.h;t[e]=i?(r,a,o)=>s(r,a,o,i):s}function cg(t,e,n,i,s){var r,a,o=n.h;t[e]=(c,l,h)=>o(c,l,h,a||=wa(Md,og,cg,i).da,r||=lg(i),s)}function lg(t){var e=t[_m];if(e!=null)return e;var n=wa(Md,og,cg,t);return e=n.wa?(i,s)=>$v(i,s,n):(i,s)=>{e:{zv();try{for(;kv(s)&&s.i!=4;){let d=s.l,f=n[d];if(f==null){let g=n.ja;if(g){let v=g[d];if(v){let m=tw(v);m!=null&&(f=n[d]=m)}}}if(f==null||!f(s,i,d)){var r=s;let g=r.o;if(Fu(r),r.ra)var a=void 0;else{let v=r.h.h-g;r.h.h=g,a=Fv(r.h,v)}r=void 0;var o=i,c=d,l=a;l&&((r=o[ps]??(o[ps]=new dm))[c]??(r[c]=[])).push(l)}}let u=dd(i);u&&(u.h=n.Ea[n1]);var h=!0;break e}catch(u){throw u instanceof RangeError?new SyntaxError:u}finally{zo>0&&zo--}h=void 0}return h},t[_m]=e,t[n1]=ew.bind(t),e}function ew(t,e,n,i){var s=this[Md],r=this[_m],a=_a(void 0,s.da),o=dd(t);if(o){var c=!1,l=s.ja;if(l){if(s=(h,u,d)=>{if(d.length!==0)if(l[u])for(let f of d){h=Ov(f);try{c=!0,r(a,h)}finally{Bv(h)}}else i?.(t,u,d)},e==null)Yu(o,s);else if(o!=null){let h=o[e];h&&s(o,e,h)}if(c){let h=0|t[Re];if(2&h&&2048&h&&!n?.lb)throw Error();let u=Yo(h),d=(f,g)=>{if(ms(t,f,u)!=null){if(n?.kb===1)return;throw Error()}g!=null&&(h=en(t,h,f,g,u)),delete o[f]};e==null?hv(a,0|a[Re],(f,g)=>{d(f,g)}):d(e,ms(a,e,u))}}}}function tw(t){var e=(t=Kv(t))[0].h;if(t=t[1]){let n=lg(t),i=wa(Md,og,cg,t).da;return(s,r,a)=>e(s,r,a,i,n)}return e}function bd(t,e,n){t[e]=n.i}function Td(t,e,n,i){var s,r,a=n.i;t[e]=(o,c,l)=>a(o,c,l,r||=wa(Sd,bd,Td,i).da,s||=Zv(i))}function Zv(t){var e=t[t1];if(!e){let n=wa(Sd,bd,Td,t);e=(i,s)=>Jv(i,s,n),t[t1]=e}return e}function Jv(t,e,n){hv(t,0|t[Re],(i,s)=>{if(s!=null){var r=(function(a,o){var c=a[o];if(c)return c;if((c=a.ja)&&(c=c[o])){var l=(c=Kv(c))[0].i;if(c=c[1]){let h=Zv(c),u=wa(Sd,bd,Td,c).da;c=a.wa?Yv(u,h):(d,f,g)=>l(d,f,g,u,h)}else c=l;return a[o]=c}})(n,i);r?r(e,s,i):i<500||Fo(om,3)}}),(t=dd(t))&&Yu(t,(i,s,r)=>{for(Go(e,e.h.end()),i=0;i<r.length;i++)Go(e,Fm(r[i])||new Uint8Array(0))})}function er(t,e,n){if(Array.isArray(e)){var i=0|e[Re];if(4&i)return e;for(var s=0,r=0;s<e.length;s++){let a=t(e[s]);a!=null&&(e[r++]=a)}return r<s&&(e.length=r),t=1|i,n&&(t=-1537&t|4),t!==i&&tn(e,t),n&&2&t&&Object.freeze(e),e}}function Kt(t,e,n){return new Qo(t,e,n)}function tr(t,e,n){return new Qo(t,e,n)}function dn(t,e,n){en(t,0|t[Re],e,n,Yo(0|t[Re]))}function ey(t,e,n){(e=fi(e))!=null&&($n(t,n,5),t=t.h,Bm(e),pl(t,dt))}function hg(t,e,n){(e=Hm(e))!=null&&(Wv(e),Vv(t,n,e))}function ty(t,e,n){(e=Ta(e))!=null&&e!=null&&($n(t,n,0),Ml(t.h,e))}function ny(t,e,n){(e=e==null||typeof e=="boolean"?e:typeof e=="number"?!!e:void 0)!=null&&($n(t,n,0),t.h.h.push(e?1:0))}function iy(t,e,n){(e=Rn(e))!=null&&bl(t,n,Q1(e))}function sy(t,e,n,i,s){td(t,n,jv(e,i),s)}function ug(t,e,n){(e=Sv(e))!=null&&bl(t,n,md(e,!0).buffer)}function ry(t,e,n){(e=gv(e))!=null&&e!=null&&($n(t,n,0),Jo(t.h,e))}function ay(t,e,n){(e=Ta(e))!=null&&(e=parseInt(e,10),$n(t,n,0),Ml(t.h,e))}function oy(t,e,n){return(t.i===5||t.i===2)&&(e=Lr(e,0|e[Re],n),t.i==2?Sl(t,Zu,e):e.push(Zu(t.h)),!0)}function cy(t,e,n){return t.i===0&&(dn(e,n,ju(t.h)),!0)}function ly(t,e,n){return(t.i===0||t.i===2)&&(e=Lr(e,0|e[Re],n),t.i==2?Sl(t,Js,e):e.push(Js(t.h)),!0)}function hy(t,e,n){return t.i===2&&(dn(e,n,(t=eg(t))===ya()?void 0:t),!0)}function vs(t,e){return new xm(t,e)}function Nr(t,e){return(n,i)=>{e:{let r={ma:!0};i&&Object.assign(r,i),n=Ov(n,void 0,void 0,r);try{let a=new t,o=a.B;lg(e)(o,n);var s=a;break e}catch(a){throw a instanceof RangeError?new SyntaxError:a}finally{Bv(n)}s=void 0}return s}}function fg(t){return e=>Qv(e,t)}function Tl(t){return function(){return Qv(this,t)}}function c1(t){var e;return em===void 0&&(em=(function(){var n=null;if(!o1)return n;try{let i=s=>s;n=o1.createPolicy("goog#html",{createHTML:i,createScript:i,createScriptURL:i})}catch{}return n})()),t=(e=em)?e.createScriptURL(t):t,new dw(t)}function da(t,...e){if(e.length===0)return c1(t[0]);var n=t[0];for(let i=0;i<e.length;i++)n+=encodeURIComponent(e[i])+t[i+1];return c1(n)}function Ft(t,e){pd(t,3,e)}function ht(t,e){pd(t,4,e)}function Ni(t,e){fl(t,1,ai,e)}function zt(t,e){pd(t,10,e)}function _t(t,e){pd(t,15,e)}function Mm(t,e){return e=e?e.clone():new pg,t.displayNamesLocale!==void 0?Ke(e,1,$s(t.displayNamesLocale)):t.displayNamesLocale===void 0&&Ke(e,1),t.maxResults!==void 0?gs(e,2,t.maxResults):"maxResults"in t&&Ke(e,2),t.scoreThreshold!==void 0?Ue(e,3,t.scoreThreshold):"scoreThreshold"in t&&Ke(e,3),t.categoryAllowlist!==void 0?Ku(e,4,t.categoryAllowlist):"categoryAllowlist"in t&&Ke(e,4),t.categoryDenylist!==void 0?Ku(e,5,t.categoryDenylist):"categoryDenylist"in t&&Ke(e,5),e}function Yy(t){var e=Number(t);return Number.isSafeInteger(e)?e:String(t)}function Sg(t,e=-1,n=""){return{categories:t.map(i=>({index:Pi(i,1)??0??-1,score:Wn(i,2)??0,categoryName:Rn(Ut(i,3))??""??"",displayName:Rn(Ut(i,4))??""??""})),headIndex:e,headName:n}}function Kw(t){var e={classifications:Aa(t,Tw,1).map(n=>Sg(mt(n,Ty,4)?.h()??[],Pi(n,2)??0,Rn(Ut(n,3))??""))};return(function(n){return n==null?n:typeof n=="bigint"?(cm(n)?n=Number(n):(n=ga(64,n),n=cm(n)?Number(n):String(n)),n):Ko(n)?typeof n=="number"?Gm(n):qu(n):void 0})(Ut(t,2,void 0,$u))!=null&&(e.timestampMs=Yy(Ut(t,2,void 0,$u)??Ev)),e}function Ky(t){var e=pa(t,3,fi),n=pa(t,2,Ta),i=pa(t,1,Rn),s=pa(t,9,Rn),r={categories:[],keypoints:[]};for(let a=0;a<e.length;a++)r.categories.push({score:e[a],index:n[a]??-1,categoryName:i[a]??"",displayName:s[a]??""});if((e=mt(t,tm,4)?.l())&&(r.boundingBox={originX:Pi(e,1,Er)??0,originY:Pi(e,2,Er)??0,width:Pi(e,3,Er)??0,height:Pi(e,4,Er)??0,angle:0}),mt(t,tm,4)?.h().length)for(let a of mt(t,tm,4).h())r.keypoints.push({x:Ut(a,1,Er,fi)??0,y:Ut(a,2,Er,fi)??0,score:Ut(a,4,Er,fi)??0,label:Rn(Ut(a,3,Er))??""});return r}function Al(t){var e=[];for(let n of Aa(t,Sw,1))t={x:Wn(n,1)??0,y:Wn(n,2)??0,z:Wn(n,3)??0,visibility:Wn(n,4)??0},Ut(n,5,void 0,fi)!=null&&(t.presence=Wn(n,5)??0),e.push(t);return e}function No(t){var e=[];for(let n of Aa(t,yw,1))t={x:Wn(n,1)??0,y:Wn(n,2)??0,z:Wn(n,3)??0,visibility:Wn(n,4)??0},Ut(n,5,void 0,fi)!=null&&(t.presence=Wn(n,5)??0),e.push(t);return e}function _1(t){return Array.from(t,e=>e>127?e-256:e)}function x1(t,e){if(t.length!==e.length)throw Error(`Cannot compute cosine similarity between embeddings of different sizes (${t.length} vs. ${e.length}).`);var n=0,i=0,s=0;for(let r=0;r<t.length;r++)n+=t[r]*e[r],i+=t[r]*t[r],s+=e[r]*e[r];if(i<=0||s<=0)throw Error("Cannot compute cosine similarity on embedding with 0 norm.");return n/Math.sqrt(i*s)}function fa(t,e,n){return n=`wasm${n?"_module":""}_internal`,Promise.resolve({wasmLoaderPath:`${e}/${t}_${n}.js`,wasmBinaryPath:`${e}/${t}_${n}.wasm`})}function v1(t){return Ke(new bm,1,Ks(t))}function Tm(t,e){return Ke(t,1,Ks(e))}function Em(t,e){return Ke(t,2,Ks(e))}function wm(t,e){var n=new jy;n=Ne(n,0,1,t.C),n=Ne(n,0,2,e),e=Ke(e=new tR,6,ld(n=n.h(),!1)),(t=t.m).error||t.i.push(e)}function R1(t,e){var n={R:e.R-t.l.R,U:e.U-t.l.U,W:e.W-t.l.W,S:e.S-t.l.S,Y:e.Y-t.l.Y,V:e.V,ba:e.ba},i=Em(Tm(new Am,t.D),1);n=Zy(t,n),wm(t,i=Vi(i,4,rd,n)),t.l=e}function Zy(t,e){var n=new jw;return t=Uu(t=Jp(t=Ke(n,1,Ks(t.F)),7,e.S),5,e.V),t=Uu(t,6,e.ba),e.W>0&&Uu(t,4,e.Y/e.W),e.R!==0&&(n=Jp(n=v1(3),2,e.R),fl(t,8,bm,n)),e.U!==0&&(e=Jp(n=v1(4),2,e.U),fl(t,8,bm,e)),t}function Mg(){var t=navigator;return typeof OffscreenCanvas<"u"&&(!(function(e=navigator){return(e=e.userAgent).includes("Safari")&&!e.includes("Chrome")})(t)||!!((t=t.userAgent.match(/Version\/([\d]+).*Safari/))&&t.length>=1&&Number(t[1])>=17))}async function C1(t){if(typeof importScripts!="function"){let e=document.createElement("script");return e.src=t.toString(),e.crossOrigin="anonymous",new Promise((n,i)=>{e.addEventListener("load",()=>{n()},!1),e.addEventListener("error",s=>{i(s)},!1),document.body.appendChild(e)})}try{importScripts(t.toString())}catch(e){if(!(e instanceof TypeError))throw e;{let n=self.import;n?await n(t.toString()):await import(t.toString())}}}function bg(t){return t.videoWidth!==void 0?[t.videoWidth,t.videoHeight]:t.naturalWidth!==void 0?[t.naturalWidth,t.naturalHeight]:t.displayWidth!==void 0?[t.displayWidth,t.displayHeight]:[t.width,t.height]}function Le(t,e,n){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target"),n(e=t.j.stringToNewUTF8(e)),t.j._free(e)}function Jy(t,e,n){if(!t.j.canvas)throw Error("No OpenGL canvas configured.");if(n?t.j._bindTextureToStream(n):t.j._bindTextureToCanvas(),!(n=t.j.canvas.getContext("webgl2")||t.j.canvas.getContext("webgl")))throw Error("Failed to obtain WebGL context from the provided canvas. `getContext()` should only be invoked with `webgl` or `webgl2`.");t.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!0),n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,e),t.j.gpuOriginForWebTexturesIsBottomLeft&&n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1);var[i,s]=bg(e);return!t.l||i===t.j.canvas.width&&s===t.j.canvas.height||(t.j.canvas.width=i,t.j.canvas.height=s),[i,s]}function I1(t,e,n){t.o||console.error("No wasm multistream support detected: ensure dependency inclusion of :gl_graph_runner_internal_multi_input target");var i=new Uint32Array(e.length);for(let s=0;s<e.length;s++)i[s]=t.j.stringToNewUTF8(e[s]);e=t.j._malloc(4*i.length),t.j.HEAPU32.set(i,e>>2),n(e);for(let s of i)t.j._free(s);t.j._free(e)}function us(t,e,n){t.j.simpleListeners=t.j.simpleListeners||{},t.j.simpleListeners[e]=n}function Ar(t,e,n){var i=[];t.j.simpleListeners=t.j.simpleListeners||{},t.j.simpleListeners[e]=(s,r,a)=>{r?(n(i,a),i=[]):i.push(s)}}function eS(t){return class extends t{get pa(){return this.j}Sa(){if(typeof this.pa._mediapipeLoggerGetEncodedApiKey=="function"){let e=this.pa._mediapipeLoggerGetEncodedApiKey();return this.pa._decodeBase64(e)}}}}function tS(t){return class extends t{Za(){this.j._registerModelResourcesGraphService()}}}async function cR(t,e,n,i){return t=await(async(s,r,a,o,c)=>{if(r&&await C1(r),!self.ModuleFactory||a&&(await C1(a),!self.ModuleFactory))throw Error("ModuleFactory not set.");return self.Module&&c&&((r=self.Module).locateFile=c.locateFile,c.mainScriptUrlOrBlob&&(r.mainScriptUrlOrBlob=c.mainScriptUrlOrBlob)),c=await self.ModuleFactory(self.Module||c),self.ModuleFactory=self.Module=void 0,new s(c,o)})(t,n.wasmLoaderPath,n.assetLoaderPath,e,{locateFile:s=>s.endsWith(".wasm")?n.wasmBinaryPath.toString():n.assetBinaryPath&&s.endsWith(".data")?n.assetBinaryPath.toString():s}),(function(s,r){r=r.runningMode??"";var a=s.h.Sa();s.o=new rR(s.D(),r,a)})(t,i),await t.A(i),t}async function zu(t,e,n,i){return cR(t,e,n,i)}function im(t,e,n){try{t.h.j.FS_unlink(`/${n}`)}catch{}t.h.j.FS_createDataFile("/",n,e,!0,!1,!0),Rm(t,`/${n}`)}function Rm(t,e){var n=mt(t.baseOptions,sd,1)||new sd;typeof e=="string"?(Ke(n,2,$s(e)),Ke(n,1)):e instanceof Uint8Array&&(Ke(n,1,ld(e,!1)),Ke(n,2)),Ne(t.baseOptions,0,1,n)}function P1(t){try{let e=t.L.length;if(e===1)throw Error(t.L[0].message);if(e>1)throw Error("Encountered multiple errors: "+t.L.map(n=>n.message).join(", "))}finally{t.L=[]}}function be(t,e){t.J=Math.max(t.J,e)}function wd(t,e){t.F=new ai,pi(t.F,2,"PassThroughCalculator"),Ft(t.F,"free_memory"),ht(t.F,"free_memory_unused_out"),zt(e,"free_memory"),Ni(e,t.F)}function Ho(t,e){Ft(t.F,e),ht(t.F,e+"_unused_out")}function Rd(t){t.h.addBoolToStream(!0,"free_memory",t.J)}function qn(t,e){if(!t)throw Error(`Unable to obtain required WebGL resource: ${e}`);return t}function L1(t,e,n){var i=t.h;if(n=qn(i.createShader(n),"Failed to create WebGL shader"),i.shaderSource(n,e),i.compileShader(n),!i.getShaderParameter(n,i.COMPILE_STATUS))throw Error(`Could not compile WebGL shader: ${i.getShaderInfoLog(n)}`);return i.attachShader(t.i,n),n}function N1(t,e){var n=t.h,i=qn(n.createVertexArray(),"Failed to create vertex array");n.bindVertexArray(i);var s=qn(n.createBuffer(),"Failed to create buffer");n.bindBuffer(n.ARRAY_BUFFER,s),n.enableVertexAttribArray(t.G),n.vertexAttribPointer(t.G,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array([-1,-1,-1,1,1,1,1,-1]),n.STATIC_DRAW);var r=qn(n.createBuffer(),"Failed to create buffer");return n.bindBuffer(n.ARRAY_BUFFER,r),n.enableVertexAttribArray(t.L),n.vertexAttribPointer(t.L,2,n.FLOAT,!1,0,0),n.bufferData(n.ARRAY_BUFFER,new Float32Array(e?[0,1,0,0,1,0,1,1]:[0,0,0,1,1,1,1,0]),n.STATIC_DRAW),n.bindBuffer(n.ARRAY_BUFFER,null),n.bindVertexArray(null),new Cm(n,i,s,r)}function Tg(t,e){if(t.h){if(e!==t.h)throw Error("Cannot change GL context once initialized")}else t.h=e}function wl(t,e,n,i){return Tg(t,e),t.i||(t.o(),t.J()),n?(t.m||(t.m=N1(t,!0)),n=t.m):(t.F||(t.F=N1(t,!1)),n=t.F),e.useProgram(t.i),n.bind(),t.l(),t=i(),n.h.bindVertexArray(null),t}function Cr(t,e,n){return Tg(t,e),t=qn(e.createTexture(),"Failed to create texture"),e.bindTexture(e.TEXTURE_2D,t),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_S,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_WRAP_T,e.CLAMP_TO_EDGE),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MIN_FILTER,n??e.LINEAR),e.texParameteri(e.TEXTURE_2D,e.TEXTURE_MAG_FILTER,n??e.LINEAR),e.bindTexture(e.TEXTURE_2D,null),t}function Cd(t,e,n){Tg(t,e),t.D||(t.D=qn(e.createFramebuffer(),"Failed to create framebuffe.")),e.bindFramebuffer(e.FRAMEBUFFER,t.D),e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,n,0)}function Eg(t){t.h?.bindFramebuffer(t.h.FRAMEBUFFER,null)}function qs(t,e){switch(e){case 0:return t.h.find(n=>n instanceof Uint8Array);case 1:return t.h.find(n=>n instanceof Float32Array);case 2:return t.h.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function Im(t){var e=qs(t,1);if(!e){if(e=qs(t,0))e=new Float32Array(e).map(i=>i/255);else{e=new Float32Array(t.width*t.height);let i=Vo(t);var n=Ag(t);if(Cd(n,i,nS(t)),"iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform)||navigator.userAgent.includes("Mac")&&"document"in self&&"ontouchend"in self.document){n=new Float32Array(t.width*t.height*4),i.readPixels(0,0,t.width,t.height,i.RGBA,i.FLOAT,n);for(let s=0,r=0;s<e.length;++s,r+=4)e[s]=n[r]}else i.readPixels(0,0,t.width,t.height,i.RED,i.FLOAT,e)}t.h.push(e)}return e}function nS(t){var e=qs(t,2);if(!e){let n=Vo(t);e=sS(t);let i=Im(t),s=iS(t);n.texImage2D(n.TEXTURE_2D,0,s,t.width,t.height,0,n.RED,n.FLOAT,i),Pm(t)}return e}function Vo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.i||(t.i=qn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.i}function iS(t){if(t=Vo(t),!Nu)if(t.getExtension("EXT_color_buffer_float")&&t.getExtension("OES_texture_float_linear")&&t.getExtension("EXT_float_blend"))Nu=t.R32F;else{if(!t.getExtension("EXT_color_buffer_half_float"))throw Error("GPU does not fully support 4-channel float32 or float16 formats");Nu=t.R16F}return Nu}function Ag(t){return t.l||(t.l=new Ra),t.l}function sS(t){var e=Vo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=qs(t,2);return n||(n=Cr(Ag(t),e,t.o?e.LINEAR:e.NEAREST),t.h.push(n),t.u=!0),e.bindTexture(e.TEXTURE_2D,n),n}function Pm(t){t.i.bindTexture(t.i.TEXTURE_2D,null)}function sm(t){return{...uR,fillColor:(t=t||{}).color,...t}}function Vs(t,e){return t instanceof Function?t(e):t}function U1(t,e,n){return Math.max(Math.min(e,n),Math.min(Math.max(e,n),t))}function rl(t){if(!t.l)throw Error("CPU rendering requested but CanvasRenderingContext2D not provided.");return t.l}function ml(t){if(!t.u)throw Error("GPU rendering requested but WebGL2RenderingContext not provided.");return t.u}function F1(t,e,n){if(e.X())n(e.T());else{let i=e.ua()?e.sa():e.ta();t.o=t.o??new Ra;let s=ml(t);n((t=new Qt([i],e.o,!1,s.canvas,t.o,e.width,e.height)).T()),t.close()}}function O1(t,e,n,i){var s=(function(o){return o.h||(o.h=new lR),o.h})(t),r=ml(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n;wl(s,r,!0,()=>{(function(c,l,h,u){var d=c.h;if(d.activeTexture(d.TEXTURE0),d.bindTexture(d.TEXTURE_2D,l),d.activeTexture(d.TEXTURE1),d.bindTexture(d.TEXTURE_2D,c.v),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,d.RGBA,d.UNSIGNED_BYTE,h),c.K&&(function(f,g){if(f!==g)return!1;f=f.entries(),g=g.entries();for(let[v,m]of f){f=v;let p=m,M=g.next();if(M.done)return!1;let[A,b]=M.value;if(f!==A||p[0]!==b[0]||p[1]!==b[1]||p[2]!==b[2]||p[3]!==b[3])return!1}return!!g.next().done})(c.K,u))d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.u);else{c.K=u;let f=Array(1024).fill(0);u.forEach((g,v)=>{if(g.length!==4)throw Error(`Color at index ${v} is not a four-channel value.`);f[4*v]=g[0],f[4*v+1]=g[1],f[4*v+2]=g[2],f[4*v+3]=g[3]}),d.activeTexture(d.TEXTURE2),d.bindTexture(d.TEXTURE_2D,c.u),d.texImage2D(d.TEXTURE_2D,0,d.RGBA,256,1,0,d.RGBA,d.UNSIGNED_BYTE,new Uint8Array(f))}})(s,e,a,i),r.clearColor(0,0,0,0),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.TRIANGLE_FAN,0,4);var o=s.h;o.activeTexture(o.TEXTURE0),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE1),o.bindTexture(o.TEXTURE_2D,null),o.activeTexture(o.TEXTURE2),o.bindTexture(o.TEXTURE_2D,null)})}function B1(t,e,n,i){var s=ml(t),r=(function(c){return c.i||(c.i=new hR),c.i})(t),a=Array.isArray(n)?new ImageData(new Uint8ClampedArray(n),1,1):n,o=Array.isArray(i)?new ImageData(new Uint8ClampedArray(i),1,1):i;wl(r,s,!0,()=>{var c=r.h;c.activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,e),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,r.u),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,a),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,r.v),c.texImage2D(c.TEXTURE_2D,0,c.RGBA,c.RGBA,c.UNSIGNED_BYTE,o),s.clearColor(0,0,0,0),s.clear(s.COLOR_BUFFER_BIT),s.drawArrays(s.TRIANGLE_FAN,0,4),s.bindTexture(s.TEXTURE_2D,null),(c=r.h).activeTexture(c.TEXTURE0),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE1),c.bindTexture(c.TEXTURE_2D,null),c.activeTexture(c.TEXTURE2),c.bindTexture(c.TEXTURE_2D,null)})}function ds(t,e){switch(e){case 0:return t.h.find(n=>n instanceof ImageData);case 1:return t.h.find(n=>typeof ImageBitmap<"u"&&n instanceof ImageBitmap);case 2:return t.h.find(n=>typeof WebGLTexture<"u"&&n instanceof WebGLTexture);default:throw Error(`Type is not supported: ${e}`)}}function rS(t){var e=ds(t,0);if(!e){e=Wo(t);let n=Id(t),i=new Uint8Array(t.width*t.height*4);Cd(n,e,Gu(t)),e.readPixels(0,0,t.width,t.height,e.RGBA,e.UNSIGNED_BYTE,i),Eg(n),e=new ImageData(new Uint8ClampedArray(i.buffer),t.width,t.height),t.h.push(e)}return e}function Gu(t){var e=ds(t,2);if(!e){let n=Wo(t);e=Hu(t);let i=ds(t,1)||rS(t);n.texImage2D(n.TEXTURE_2D,0,n.RGBA,n.RGBA,n.UNSIGNED_BYTE,i),ol(t)}return e}function Wo(t){if(!t.canvas)throw Error("Conversion to different image formats require that a canvas is passed when initializing the image.");return t.i||(t.i=qn(t.canvas.getContext("webgl2"),"You cannot use a canvas that is already bound to a different type of rendering context.")),t.i}function Id(t){return t.l||(t.l=new Ra),t.l}function Hu(t){var e=Wo(t);e.viewport(0,0,t.width,t.height),e.activeTexture(e.TEXTURE0);var n=ds(t,2);return n||(n=Cr(Id(t),e),t.h.push(n),t.o=!0),e.bindTexture(e.TEXTURE_2D,n),n}function ol(t){t.i.bindTexture(t.i.TEXTURE_2D,null)}function k1(t){var e=Wo(t);return wl(Id(t),e,!0,()=>(function(n,i){var s=n.canvas;if(s.width===n.width&&s.height===n.height)return i();var r=s.width,a=s.height;return s.width=n.width,s.height=n.height,n=i(),s.width=r,s.height=a,n})(t,()=>{if(e.bindFramebuffer(e.FRAMEBUFFER,null),e.clearColor(0,0,0,0),e.clear(e.COLOR_BUFFER_BIT),e.drawArrays(e.TRIANGLE_FAN,0,4),!(t.canvas instanceof OffscreenCanvas))throw Error("Conversion to ImageBitmap requires that the MediaPipe Tasks is initialized with an OffscreenCanvas");return t.canvas.transferToImageBitmap()}))}function qi(...t){return t.map(([e,n])=>({start:e,end:n}))}async function ft(t,e,n){return zu(t,n.canvas??(Mg()?void 0:document.createElement("canvas")),e,n)}function aS(t,e,n,i){if(t.o&&i!==void 0){var s=mt(t.baseOptions,id,3);s?.h()||s?.l()?.h()?(++(s=t.o).h.U,s.i.set(i,performance.now())):(++(s=t.o).h.R,s.i.set(i,performance.now()))}if(t.qa){if(s=new wy,n?.regionOfInterest){if(!t.Ca)throw Error("This task doesn't support region-of-interest.");let r=n.regionOfInterest;if(r.left>=r.right||r.top>=r.bottom)throw Error("Expected RectF with left < right and top < bottom.");if(r.left<0||r.top<0||r.right>1||r.bottom>1)throw Error("Expected RectF values to be in [0,1].");Ue(s,1,(r.left+r.right)/2),Ue(s,2,(r.top+r.bottom)/2),Ue(s,4,r.right-r.left),Ue(s,3,r.bottom-r.top)}else Ue(s,1,.5),Ue(s,2,.5),Ue(s,4,1),Ue(s,3,1);if(n?.rotationDegrees){if(n?.rotationDegrees%90!=0)throw Error("Expected rotation to be a multiple of 90\xB0.");if(Ue(s,5,-Math.PI*n.rotationDegrees/180),n?.rotationDegrees%180!=0){let[r,a]=bg(e);n=Wn(s,4)*r/a,Ue(s,4,Wn(s,3)*a/r),Ue(s,3,n)}}t.h.addProtoToStream(s.h(),"mediapipe.NormalizedRect",t.qa,i)}t.h.Da(e,t.Ba,i??performance.now()),t.finishProcessing(i)}function Yi(t,e,n){if(t.K)throw Error("Task is not initialized with image mode. 'runningMode' must be set to 'IMAGE'.");aS(t,e,n,t.J+1)}function ys(t,e,n,i){if(!t.K)throw Error("Task is not initialized with video mode. 'runningMode' must be set to 'VIDEO'.");aS(t,e,n,i)}function Xo(t,e,n,i){var s=e.data,r=e.width,a=r*(e=e.height);if((s instanceof Uint8Array||s instanceof Float32Array)&&s.length!==a)throw Error("Unsupported channel count: "+s.length/a);return t=new Qt([s],n,!1,t.h.j.canvas,t.ea,r,e),i?t.clone():t}function H1(t){t.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]}}function V1(t){t.gestures=[],t.landmarks=[],t.worldLandmarks=[],t.handedness=[]}function W1(t){return t.gestures.length===0?{gestures:[],landmarks:[],worldLandmarks:[],handedness:[],handednesses:[]}:{gestures:t.gestures,landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handedness:t.handedness,handednesses:t.handedness}}function X1(t,e=!0){var n=[];for(let s of t){var i=Ed(s);t=[];for(let r of i.h())i=e&&Pi(r,1)!=null?Pi(r,1)??0:-1,t.push({score:Wn(r,2)??0,index:i,categoryName:Rn(Ut(r,3))??""??"",displayName:Rn(Ut(r,4))??""??""});n.push(t)}return n}function q1(t){return{landmarks:t.landmarks,worldLandmarks:t.worldLandmarks,handednesses:t.handedness,handedness:t.handedness}}function $1(t){t.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]}}function Y1(t){try{if(!t.G)return t.i;t.G(t.i)}finally{Rd(t)}}function Du(t,e){t=El(t),e.push(Al(t))}function fR(t){var e=(function(n){return Aa(n,ai,1)})(t.ka()).filter(n=>(Rn(Ut(n,1))??"").includes("mediapipe.tasks.TensorsToSegmentationCalculator"));if(t.v=[],e.length>1)throw Error("The graph has more than one mediapipe.tasks.TensorsToSegmentationCalculator.");e.length===1&&(mt(e[0],gi,7)?.u()?.h()??new Map).forEach((n,i)=>{t.v[Number(i)]=Rn(Ut(n,1))??""})}function K1(t){t.categoryMask=void 0,t.confidenceMasks=void 0,t.qualityScores=void 0}function j1(t){try{let e=new Lm(t.confidenceMasks,t.categoryMask,t.qualityScores);if(!t.m)return e;t.m(e)}finally{Rd(t)}}function rm(){return Mg()?void 0:document.createElement("canvas")}function Z1(t){t.landmarks=[],t.worldLandmarks=[],t.segmentationMasks=void 0}function J1(t){try{let e=new Dm(t.landmarks,t.worldLandmarks,t.segmentationMasks);if(!t.v)return e;t.v(e)}finally{Rd(t)}}var Do,Kp,eA,am,Vu,Cu,tA,nA,jp,Iu,Pu,Ox,ev,al,sA,nv,kx,rA,Uo,oA,fs,cA,qo,Ir,lA,zx,nl,ps,hA,uA,om,dA,av,ov,cv,Re,Gx,lv,Sa,Wu,uv,fA,Hx,pA,ud,cm,mA,gA,_A,xA,dv,vA,dt,Mt,ga,hm,Xi,xl,Rr,SA,MA,AA,wA,cl,RA,CA,Zs,LA,NA,DA,dm,Ev,Er,Ro,zA,Kx,zo,GA,Ju,VA,Qu,XA,Zx,Jx,Qx,Qp,e1,il,Lu,ed,$A,YA,ig,Xv,sg,gd,rg,_d,KA,jA,xd,ZA,vd,ag,_e,Qo,$v,Yv,JA,QA,Sd,Md,_m,t1,n1,nw,Qv,iw,i1,Wt,sw,dg,uy,sl,Pt,rw,Ou,nd,nt,s1,ec,ma,Ge,wr,ln,Xs,re,Rt,lt,Po,dy,fy,aw,ow,we,Bu,cw,xm,lw,hw,em,r1,a1,uw,o1,dw,py,my,gy,_y,fw,pw,xy,vy,yy,l1,Sy,mw,My,gi,un,h1,ai,ll,u1,d1,_i,by,gw,_w,Ty,Ey,Ed,xw,vw,tm,Ay,yw,Lo,Sw,El,Mw,bw,wy,Tw,Ew,Aw,ww,Rw,ku,Cw,pg,Ry,f1,Iw,id,Ys,sd,Gt,Cy,Yt,Pw,Ad,mg,Lw,Nw,Iy,Py,vm,Dw,Co,Ly,Uw,Ny,gg,_g,Dy,p1,Uy,xg,Fy,Fw,Ow,Bw,Oy,By,ky,vg,ym,zy,kw,Gy,zw,Hy,m1,Vy,Gw,yg,Wy,Hw,Vw,Ww,Xw,nm,g1,qw,Xy,Sm,qy,$w,$y,Yw,Ws,bm,jw,y1,Zw,Jw,Am,rd,Qw,jy,eR,tR,S1,M1,b1,T1,E1,A1,w1,nR,iR,sR,ad,rR,Qy,aR,oR,od,Cm,Ra,lR,hR,Nu,Qt,D1,uR,ti,An,z1,G1,dR,$i,mi,Ri,wg,Rg,Cg,oS,Ig,Pg,cS,Lg,lS,hS,pt,Ng,ni,wn,uS,ot,Ci,di,Lm,ii,pR,si,Nm,hs,Ii,Dm,ri,dS=or(()=>{Do=typeof self<"u"?self:{};Cu=void 0,tA=typeof TextDecoder<"u",nA=typeof TextEncoder<"u";e:{for(jp=["CLOSURE_FLAGS"],Iu=Do,Pu=0;Pu<jp.length;Pu++)if((Iu=Iu[jp[Pu]])==null){Vu=null;break e}Vu=Iu}Ox=Vu&&Vu[748402147];am=Ox==null||Ox,cd[" "]=function(){};ev={},al=null;sA=typeof Uint8Array<"u",nv=!(Bx().indexOf("Trident")!=-1||Bx().indexOf("MSIE")!=-1)&&typeof btoa=="function",kx=/[-_.]/g,rA={"-":"+",_:"/",".":"="};Uo={};fs=class{i(){return new Uint8Array(Fm(this)||0)}constructor(t,e){if(sv(e),this.h=t,t!=null&&t.length===0)throw Error("ByteString should be constructed with non-empty values")}};cA=void 0;qo=typeof Symbol=="function"&&typeof Symbol()=="symbol";lA=Qs("jas",void 0,!0),zx=Qs(void 0,"0di"),nl=Qs(void 0,"1oa"),ps=Qs(void 0,Symbol()),hA=Qs(void 0,"0ub"),uA=Qs(void 0,"0ubs"),om=Qs(void 0,"0ubsb"),dA=Qs(void 0,"0actk"),av=Qs("m_m","jb",!0),ov={Va:{value:0,configurable:!0,writable:!0,enumerable:!1}},cv=Object.defineProperties,Re=qo?lA:"Va",Gx=[];tn(Gx,7),Ir=Object.freeze(Gx);lv={};Sa={};Wu=class{constructor(e,n,i){this.h=e,this.i=n,this.l=i}next(){var e=this.h.next();return e.done||(e.value=this.i.call(this.l,e.value)),e}[Symbol.iterator](){return this}};Object.freeze({});uv={};fA=hd(t=>typeof t=="number"),Hx=hd(t=>typeof t=="string"),pA=hd(t=>typeof t=="boolean"),ud=typeof Do.BigInt=="function"&&typeof Do.BigInt(0)=="bigint";cm=hd(t=>ud?t>=gA&&t<=xA:t[0]==="-"?Vx(t,mA):Vx(t,_A)),mA=Number.MIN_SAFE_INTEGER.toString(),gA=ud?BigInt(Number.MIN_SAFE_INTEGER):void 0,_A=Number.MAX_SAFE_INTEGER.toString(),xA=ud?BigInt(Number.MAX_SAFE_INTEGER):void 0;vA=typeof Uint8Array.prototype.slice=="function",dt=0,Mt=0;ga=typeof BigInt=="function"?BigInt.asIntN:void 0,hm=typeof BigInt=="function"?BigInt.asUintN:void 0,Xi=Number.isSafeInteger,xl=Number.isFinite,Rr=Math.trunc,SA=hn(0);MA=/^-?([1-9][0-9]*|0)(\.[0-9]+)?$/;AA={},wA=(function(){try{return cd(new class extends Map{constructor(){super()}}),!1}catch{return!0}})(),cl=class{constructor(){this.h=new Map}get(e){return this.h.get(e)}set(e,n){return this.h.set(e,n),this.size=this.h.size,this}delete(e){return e=this.h.delete(e),this.size=this.h.size,e}clear(){this.h.clear(),this.size=this.h.size}has(e){return this.h.has(e)}entries(){return this.h.entries()}keys(){return this.h.keys()}values(){return this.h.values()}forEach(e,n){return this.h.forEach(e,n)}[Symbol.iterator](){return this.entries()}},RA=wA?(Object.setPrototypeOf(cl.prototype,Map.prototype),Object.defineProperties(cl.prototype,{size:{value:0,configurable:!0,enumerable:!0,writable:!0}}),cl):class extends Map{constructor(){super()}};Zs=class extends RA{constructor(t,e,n=Xx,i=Xx){super(),this.N=0|t[Re],this.O=e,this.ca=n,this.na=this.O?IA:i;for(let s=0;s<t.length;s++){let r=t[s],a=n(r[0],!1,!0),o=r[1];e?o===void 0&&(o=null):o=i(r[1],!1,!0,void 0,void 0,this.N),super.set(a,o)}}fa(t){return ul(Array.from(super.entries(),t))}clear(){Zp(this),super.clear()}delete(t){return Zp(this),super.delete(this.ca(t,!0,!1))}entries(){if(this.O){var t=super.keys();t=new Wu(t,PA,this)}else t=super.entries();return t}values(){if(this.O){var t=super.keys();t=new Wu(t,Zs.prototype.get,this)}else t=super.values();return t}forEach(t,e){this.O?super.forEach((n,i,s)=>{t.call(e,s.get(i),i,s)}):super.forEach(t,e)}set(t,e){return Zp(this),(t=this.ca(t,!0,!1))==null?this:e==null?(super.delete(t),this):super.set(t,this.na(e,!0,!0,this.O,!1,this.N))}fb(t){var e=this.ca(t[0],!1,!0);t=t[1],t=this.O?t===void 0?null:t:this.na(t,!1,!0,void 0,!1,this.N),super.set(e,t)}has(t){return super.has(this.ca(t,!1,!1))}get(t){t=this.ca(t,!1,!1);var e=super.get(t);if(e!==void 0){var n=this.O;return n?((n=this.na(e,!1,!0,n,this.Fa,this.N))!==e&&super.set(t,n),n):e}}[Symbol.iterator](){return this.entries()}};Zs.prototype.toJSON=void 0;dm=class{};Ev=hn(0),Er={};Ro=class{constructor(t,e,n){if(this.buffer=t,n&&!e)throw Error();this.h=e}};zA=class{constructor(t,e,n,i){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.init(t,e,n,i)}init(t,e,n,{ga:i=!1,ma:s=!1}={}){this.ga=i,this.ma=s,t&&(t=md(t,this.ma),this.i=t.buffer,this.u=t.h,this.o=e||0,this.l=n!==void 0?this.o+n:this.i.length,this.h=this.o)}clear(){this.i=null,this.u=!1,this.h=this.l=this.o=0,this.ga=!1}},Kx=[],zo=0;GA=class{constructor(t,e,n,i){if(Kx.length){let s=Kx.pop();s.init(t,e,n,i),t=s}else t=new zA(t,e,n,i);this.h=t,this.o=this.h.h,this.i=this.l=-1,this.A(i)}A({ra:t=!1}={}){this.ra=t}},Ju=[];Qu=class{constructor(t,e){this.i=t>>>0,this.h=e>>>0}};ed=class{constructor(t,e){this.i=t>>>0,this.h=e>>>0}};$A=class{constructor(){this.h=[]}length(){return this.h.length}end(){var t=this.h;return this.h=[],t}};YA=class{constructor(){this.l=[],this.i=0,this.h=new $A}};ig=Li(),Xv=Li(),sg=Li(),gd=Li(),rg=Li(),_d=Li(),KA=Li(),jA=Li(),xd=Li(),ZA=Li(),vd=Li(),ag=Li();_e=class{constructor(t,e){this.B=Tv(t,e,void 0,2048)}toJSON(){return bv(this)}u(){var t=Gw,e=this.B,n=t.h,i=ps;return qo&&i&&e[i]?.[n]!=null&&Fo(hA,3),t.i?t.o(this,t.i,t.h,t.l):t.o(this,t.h,t.defaultValue,t.l)}clone(){var t=this.B,e=0|t[Re];return qm(this,t,e)?Wm(this,t,!0):new this.constructor(jo(t,e,!1))}};_e.prototype[av]=lv,_e.prototype.toString=function(){return this.B.toString()};Qo=class{constructor(t,e,n){this.h=t,this.i=e,t=ig,this.l=!!t&&n===t||!1}};JA=yd(function(t,e,n,i,s){return t.i===2&&(yl(t,jm(e,i,n),s),!0)},qv),QA=yd(function(t,e,n,i,s){return t.i===2&&(yl(t,jm(e,i,n),s),!0)},qv),Sd=Symbol(),Md=Symbol(),_m=Symbol(),t1=Symbol(),n1=Symbol();nw=hn(0);Qv=(t,e)=>{var n=new YA;Jv(t.B,n,wa(Sd,bd,Td,e)),Go(n,n.h.end()),t=new Uint8Array(n.i);var i=(e=n.l).length,s=0;for(let r=0;r<i;r++){let a=e[r];t.set(a,s),s+=a.length}return n.l=[t],t};iw=yd(function(t,e,n,i,s){if(t.i!==2)return!1;if(t=Wi(t=yl(t,_a([void 0,void 0],i),s)),s=Yo(i=0|e[Re]),2&i)throw Error();var r=ms(e,n,s);if(r instanceof Zs)2&r.N?((r=r.fa()).push(t),en(e,i,n,r,s)):r.fb(t);else if(Array.isArray(r)){var a=0|r[Re];8192&a||tn(r,a|=8192),2&a&&en(e,i,n,r=Iv(r),s),r.push(t)}else en(e,i,n,ul([t]),s);return!0},function(t,e,n,i,s){if(e instanceof Zs)e.forEach((r,a)=>{td(t,n,_a([a,r],i),s)});else if(Array.isArray(e)){for(let r=0;r<e.length;r++){let a=e[r];Array.isArray(a)&&td(t,n,_a(a,i),s)}ul(e)}});i1=Kt(function(t,e,n){if(t.i!==1)return!1;var i=t.h;t=gm(i);var s=gm(i);i=2*(s>>31)+1;var r=s>>>20&2047;return t=4294967296*(1048575&s)+t,dn(e,n,r==2047?t?NaN:i*(1/0):r==0?5e-324*i*t:i*Math.pow(2,r-1075)*(t+4503599627370496)),!0},function(t,e,n){(e=fi(e))!=null&&($n(t,n,1),t=t.h,(n=dv||=new DataView(new ArrayBuffer(8))).setFloat64(0,+e,!0),dt=n.getUint32(0,!0),Mt=n.getUint32(4,!0),pl(t,dt),pl(t,Mt))},ZA),Wt=Kt(function(t,e,n){return t.i===5&&(dn(e,n,Zu(t.h)),!0)},ey,xd),sw=tr(oy,function(t,e,n){if((e=er(fi,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&($n(i,s,5),i=i.h,Bm(r),pl(i,dt))}},xd),dg=tr(oy,function(t,e,n){if((e=er(fi,e,!0))!=null&&e.length){$n(t,n,2),Jo(t.h,4*e.length);for(let i=0;i<e.length;i++)n=t.h,Bm(e[i]),pl(n,dt)}},xd),uy=Kt(function(t,e,n){return t.i===5&&(dn(e,n,(t=Zu(t.h))===0?void 0:t),!0)},ey,xd),sl=Kt(function(t,e,n){return cy(t,e,n)},hg,_d),Pt=Kt(function(t,e,n){return cy(t,e,n)},hg,_d),rw=tr(function(t,e,n){return t.i!==0&&t.i!==2?t=!1:(e=Lr(e,0|e[Re],n),t.i==2?Sl(t,ju,e):e.push(ju(t.h)),t=!0),t},function(t,e,n){if((e=er(Hm,e,!1))!=null)for(let i=0;i<e.length;i++)Vv(t,n,e[i])},_d),Ou=Kt(function(t,e,n){return t.i!==0?e=!1:(dn(e,n,(t=ju(t.h))===nw?void 0:t),e=!0),e},hg,_d),nd=Kt(function(t,e,n){return t.i!==0?t=!1:(dn(e,n,Zm(t.h,yA)),t=!0),t},function(t,e,n){if((e=bA(e))!=null&&(typeof e=="string"&&jx(e),e!=null))switch($n(t,n,0),typeof e){case"number":t=t.h,ba(e),js(t,dt,Mt);break;case"bigint":n=Hv(e,Qu,HA),js(t.h,n.i,n.h);break;default:n=jx(e),js(t.h,n.i,n.h)}},KA),nt=Kt(function(t,e,n){return t.i===0&&(dn(e,n,Js(t.h)),!0)},ty,gd),s1=tr(ly,function(t,e,n){if((e=er(Ta,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&($n(i,s,0),Ml(i.h,r))}},gd),ec=tr(ly,function(t,e,n){if((e=er(Ta,e,!0))!=null&&e.length){n=tg(t,n);for(let i=0;i<e.length;i++)Ml(t.h,e[i]);ng(t,n)}},gd),ma=Kt(function(t,e,n){return t.i===0&&(dn(e,n,(t=Js(t.h))===0?void 0:t),!0)},ty,gd),Ge=Kt(function(t,e,n){return t.i===0&&(dn(e,n,Jm(t.h)),!0)},ny,Xv),wr=Kt(function(t,e,n){return t.i===0&&(dn(e,n,(t=Jm(t.h))===!1?void 0:t),!0)},ny,Xv),ln=tr(function(t,e,n){return t.i===2&&(t=Qm(t),Lr(e,0|e[Re],n).push(t),!0)},function(t,e,n){if((e=er(Rn,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&bl(i,s,Q1(r))}},sg),Xs=Kt(function(t,e,n){return t.i===2&&(dn(e,n,(t=Qm(t))===""?void 0:t),!0)},iy,sg),re=Kt(function(t,e,n){return t.i===2&&(dn(e,n,Qm(t)),!0)},iy,sg),Rt=(function(t,e,n=ig){return new Qo(t,e,n)})(function(t,e,n,i,s){return t.i===2&&(i=_a(void 0,i),Lr(e,0|e[Re],n).push(i),yl(t,i,s),!0)},function(t,e,n,i,s){if(Array.isArray(e)){for(let r=0;r<e.length;r++)sy(t,e[r],n,i,s);1&(t=0|e[Re])||tn(e,1|t)}}),lt=yd(function(t,e,n,i,s,r){if(t.i!==2)return!1;var a=0|e[Re];return Lv(e,a,r,n,Yo(a)),yl(t,e=jm(e,i,n),s),!0},sy),Po=Kt(function(t,e,n){return t.i===2&&(dn(e,n,eg(t)),!0)},ug,vd),dy=tr(function(t,e,n){return t.i===2&&(t=eg(t),Lr(e,0|e[Re],n).push(t),!0)},function(t,e,n){if((e=er(Sv,e,!1))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&bl(i,s,md(r,!0).buffer)}},vd),fy=Kt(function(t,e,n){return t.i===0&&(dn(e,n,_s(t.h)),!0)},ry,rg),aw=tr(function(t,e,n){return(t.i===0||t.i===2)&&(e=Lr(e,0|e[Re],n),t.i==2?Sl(t,_s,e):e.push(_s(t.h)),!0)},function(t,e,n){if((e=er(gv,e,!0))!=null)for(let a=0;a<e.length;a++){var i=t,s=n,r=e[a];r!=null&&($n(i,s,0),Jo(i.h,r))}},rg),ow=Kt(function(t,e,n){return t.i===0&&(dn(e,n,(t=_s(t.h))===0?void 0:t),!0)},ry,rg),we=Kt(function(t,e,n){return t.i===0&&(dn(e,n,Js(t.h)),!0)},ay,ag),Bu=Kt(function(t,e,n){return t.i===0&&(dn(e,n,(t=Js(t.h))===0?void 0:t),!0)},ay,ag),cw=Kt(function(t,e,n){return t.i!==0?t=!1:(dn(e,n,(function(i){return Zm(i,(s,r)=>{var a=-(1&s);return pv(s=(s>>>1|r<<31)^a,r>>>1^a)})})(t.h)),t=!0),t},function(t,e,n){if((e=Hm(e))!=null&&(Wv(e),e!=null))switch($n(t,n,0),typeof e){case"number":t=t.h,e=(n=e)<0,lm(n=2*Math.abs(n)),n=dt;let i=Mt;e&&(n==0?i==0?i=n=4294967295:(i--,n=4294967295):n--),js(t,dt=n,Mt=i);break;case"bigint":t=t.h,e=e<<BigInt(1)^e>>BigInt(63),dt=Number(BigInt.asUintN(32,e)),Mt=Number(BigInt.asUintN(32,e>>BigInt(32))),js(t,dt,Mt);break;default:qA(t.h,e)}},jA),xm=class{constructor(e,n){var i=gi;this.h=e,this.i=n,this.o=mt,this.u=Ne,this.defaultValue=void 0,this.l=i.ib!=null?uv:void 0}register(){cd(this)}};lw=[0,Po,dy,Ge,re],hw=[0,Xs,[0,Bu,[0,Ou,ma],Bu,-1,[0,we],Bu,-1],Kt(hy,ug,vd)],r1=class extends _e{constructor(t){super(t)}},a1=[0,Xs,Kt(hy,function(t,e,n){if(e!=null){if(e instanceof _e){let i=e.mb;return void(i?(e=i(e),e!=null&&bl(t,n,md(e,!0).buffer)):Fo(om,3))}if(Array.isArray(e))return void Fo(om,3)}ug(t,e,n)},vd)],uw=[0,1,[0,12,nt,10,Ge],[0,7,[0,nt,-1]]],o1=globalThis.trustedTypes,dw=class{constructor(t){this.h=t}toString(){return this.h+""}};py=[0,nt,we,Ge,-1,ec,we,-1,Ge,-1],my=[0,we,-1,Ge],gy=class extends _e{constructor(t){super(t)}},_y=[0,Ge,re,Ge,we,-1,tr(function(t,e,n){return(t.i===0||t.i===2)&&(e=Lr(e,0|e[Re],n),t.i==2?Sl(t,kA,e):e.push(Js(t.h)),!0)},function(t,e,n){if((e=er(Ta,e,!0))!=null&&e.length){n=tg(t,n);for(let i=0;i<e.length;i++)Ml(t.h,e[i]);ng(t,n)}},ag),re,-1,[0,Ge,-1],we,Ge,-1,my],fw=class extends _e{constructor(t){super(t)}},pw=class extends _e{constructor(t){super(t)}},xy=class extends _e{constructor(t){super(t)}h(){return Av(this,9)}},vy=[0,3,Ge,-1,2,[0,[2],nt,lt,[0,fy]],[0,we,Ge,we,Ge,we,4,[0,Ge,re,-1,Ge,nt,-1,Ge],we,Ge,-4,we,ln,Ge,ln,Ge,-1,nt,Ge,-3,[0,Ge,nt],[0,re,nt,-1],[0,Ge],[0,Ge,-1],[0,Ge,nt,-1]],[0,[3,4],re,-1,lt,[0,nt],lt,[0,we,-2]],[0],re,Ge],yy=[0,re,-2],l1=class extends _e{constructor(t){super(t)}},Sy=[0],mw=class extends _e{constructor(t){super(t)}},My=[0,nt,Ge,1,Ge,-4],gi=class extends _e{constructor(t){super(t,2)}},un={};un[336783863]=[0,re,Ge,-1,nt,[0,[1,2,3,4,5,6,7,8,9],lt,Sy,lt,_y,lt,yy,lt,My,lt,py,lt,[0,re,-2],lt,[0,re,we],lt,vy,lt,my],[0,re],Ge,[0,[1,3],[2,4],lt,[0,ec],-1,lt,[0,ln],-1,Rt,[0,re,-1]],re];h1=[0,Ou,-1,wr,-3,Ou,ec,Xs,ma,Ou,-1,wr,ma,wr,-2,Xs];ai=class extends _e{constructor(t){super(t,500)}A(t){return Ne(this,0,7,t)}},ll=[-1,{}],u1=[0,re,1,ll],d1=[0,re,ln,ll];_i=class extends _e{constructor(t){super(t,500)}A(t){return Ne(this,0,1001,t)}},by=[-500,Rt,[-500,Xs,-1,ln,-3,[-2,un,Ge],Rt,a1,ma,-1,u1,d1,Rt,[0,Xs,wr],Xs,h1,ma,ln,987,ln],4,Rt,[-500,re,-1,[-1,{}],998,re],Rt,[-500,re,ln,-1,[-2,{},Ge],997,ln,-1],ma,Rt,[-500,re,ln,ll,998,ln],ln,ma,u1,d1,Rt,[0,Xs,-1,ll],ln,-2,h1,Xs,-1,wr,[0,wr,ow],978,ll,Rt,a1];_i.prototype.h=Tl(by);gw=Nr(_i,by),_w=class extends _e{constructor(t){super(t)}},Ty=class extends _e{constructor(t){super(t)}h(){return Aa(this,_w,1)}},Ey=[0,Rt,[0,nt,Wt,re,-1]],Ed=Nr(Ty,Ey),xw=class extends _e{constructor(t){super(t)}},vw=class extends _e{constructor(t){super(t)}},tm=class extends _e{constructor(t){super(t)}l(){return mt(this,xw,2)}h(){return Aa(this,vw,5)}},Ay=Nr(class extends _e{constructor(t){super(t)}},[0,ln,ec,dg,[0,we,[0,nt,-3],[0,Wt,-3],[0,nt,-1,[0,Rt,[0,nt,-2]]],Rt,[0,Wt,-1,re,Wt]],re,-1,Pt,Rt,[0,nt,Wt],ln,Pt]),yw=class extends _e{constructor(t){super(t)}},Lo=Nr(class extends _e{constructor(t){super(t)}},[0,Rt,[0,Wt,-4]]),Sw=class extends _e{constructor(t){super(t)}},El=Nr(class extends _e{constructor(t){super(t)}},[0,Rt,[0,Wt,-4]]),Mw=class extends _e{constructor(t){super(t)}},bw=[0,nt,-1,dg,we],wy=class extends _e{constructor(t){super(t)}};wy.prototype.h=Tl([0,Wt,-4,Pt]);Tw=class extends _e{constructor(t){super(t)}},Ew=Nr(class extends _e{constructor(t){super(t)}},[0,Rt,[0,1,nt,re,Ey],Pt]),Aw=class extends _e{constructor(t){super(t)}},ww=class extends _e{constructor(t){super(t)}h(){var t=Ut(this,1,void 0,Cv);return t??ya()}},Rw=class extends _e{constructor(t){super(t)}},ku=[1,2],Cw=Nr(class extends _e{constructor(t){super(t)}},[0,Rt,[0,ku,lt,[0,dg],lt,[0,Po],nt,re],Pt]),pg=class extends _e{constructor(t){super(t)}},Ry=[0,re,nt,Wt,ln,-1],f1=class extends _e{constructor(t){super(t)}},Iw=[0,Ge,-1],id=class extends _e{constructor(t){super(t)}h(){return wv(this,2,Ys)}l(){return pm(this,xy,6,Ys)}},Ys=[1,2,3,4,5,6],sd=class extends _e{constructor(t){super(t)}h(){return Ut(this,1,void 0,Cv)!=null}l(){return Rn(Ut(this,2))!=null}},Gt=class extends _e{constructor(t){super(t)}},Cy=[0,Po,re,[0,nt,Pt,-1],[0,nd,Pt]],Yt=[0,Cy,Ge,[0,Ys,lt,My,lt,_y,lt,py,lt,Sy,lt,yy,lt,vy],we],Pw=fg(Yt),Ad=class extends _e{constructor(t){super(t)}},mg=[0,Yt,Wt,-1,nt],Lw=vs(502141897,Ad);un[502141897]=mg;Nw=Nr(class extends _e{constructor(t){super(t)}},[0,[0,we,-1,sw,aw],bw]),Iy=class extends _e{constructor(t){super(t)}},Py=class extends _e{constructor(t){super(t)}},vm=[0,Yt,Wt,[0,Yt],Ge],Dw=vs(508968150,Py);un[508968150]=[0,Yt,mg,vm,Wt,[0,[0,Cy]]],un[508968149]=vm;Co=class extends _e{constructor(t){super(t)}l(){return mt(this,pg,2)}h(){Ke(this,2)}},Ly=[0,Yt,Ry];un[478825465]=Ly;Uw=class extends _e{constructor(t){super(t)}},Ny=class extends _e{constructor(t){super(t)}},gg=class extends _e{constructor(t){super(t)}},_g=class extends _e{constructor(t){super(t)}},Dy=class extends _e{constructor(t){super(t)}},p1=[0,Yt,[0,Yt],Ly,-1],Uy=[0,Yt,Wt,nt],xg=[0,Yt,Wt],Fy=[0,Yt,Uy,xg,Wt],Fw=vs(479097054,Dy);un[479097054]=[0,Yt,Fy,p1],un[463370452]=p1,un[464864288]=Uy;Ow=vs(462713202,_g);un[462713202]=Fy,un[474472470]=xg;Bw=class extends _e{constructor(t){super(t)}},Oy=class extends _e{constructor(t){super(t)}},By=class extends _e{constructor(t){super(t)}},ky=class extends _e{constructor(t){super(t)}},vg=[0,Yt,Wt,-1,nt],ym=[0,Yt,Wt,Ge];ky.prototype.h=Tl([0,Yt,xg,[0,Yt],mg,vm,vg,ym]);zy=class extends _e{constructor(t){super(t)}},kw=vs(456383383,zy);un[456383383]=[0,Yt,Ry];Gy=class extends _e{constructor(t){super(t)}},zw=vs(476348187,Gy);un[476348187]=[0,Yt,Iw];Hy=class extends _e{constructor(t){super(t)}},m1=class extends _e{constructor(t){super(t)}},Vy=[0,we,-1],Gw=vs(458105876,class extends _e{constructor(t){super(t)}h(){var t=this.B,e=0|t[Re],n=Xn(this,e);return t=(function(i,s,r,a){var o=m1;!a&&Zo(i)&&(r=0|(s=i.B)[Re]);var c=ms(s,2);if(i=!1,c==null){if(a)return qx();c=[]}else if(c.constructor===Zs){if(!(2&c.N)||a)return c;c=c.fa()}else Array.isArray(c)?i=!!(2&c[Re]):c=[];if(a){if(!c.length)return qx();i||(i=!0,$o(c))}else i&&(i=!1,ul(c),c=Iv(c));return!i&&32&r&&gl(c,32),r=en(s,r,2,a=new Zs(c,o,TA,void 0)),i||Pr(s,r),a})(this,t,e,n),!n&&m1&&(t.Fa=!0),t}});un[458105876]=[0,Vy,iw,[!0,Pt,[0,re,-1,ln]],[0,ec,Ge,we],Ge];yg=class extends _e{constructor(t){super(t)}},Wy=vs(458105758,yg);un[458105758]=[0,Yt,re,Vy];Hw=class extends _e{constructor(t){super(t)}},Vw=class extends _e{constructor(t){super(t)}},Ww=class extends _e{constructor(t){super(t)}},Xw=fg([0,Rt,[0,Bu,Rt,[0,uy,-1],wr]]),nm=class extends _e{constructor(t){super(t)}},g1=[0,uy,-1,wr],qw=class extends _e{constructor(t){super(t)}},Xy=class extends _e{constructor(t){super(t)}},Sm=[1,2];Xy.prototype.h=Tl([0,Sm,lt,g1,lt,[0,Rt,g1]]);qy=class extends _e{constructor(t){super(t)}},$w=vs(443442058,qy);un[443442058]=[0,Yt,re,nt,Wt,ln,-1,Ge,Wt],un[514774813]=vg;$y=class extends _e{constructor(t){super(t)}},Yw=vs(516587230,$y);un[516587230]=[0,Yt,vg,ym,Wt],un[518928384]=ym;Ws=class{};Ws.forVisionTasks=function(t,e=!1){return fa("vision",t??da``,e)},Ws.forLiteRtLmTextTasks=function(t,e=!1){return fa("litertlm_text",t??da``,e)},Ws.forTextTasks=function(t,e=!1){return fa("text",t??da``,e)},Ws.forRetrievalTasks=function(t,e=!1){return fa("retrieval",t??da``,e)},Ws.forGenAiTasks=function(t,e=!1){return fa("genai",t??da``,e)},Ws.forDecisionTasks=function(t,e=!1){return fa("decision",t??da``,e)},Ws.forAudioTasks=function(t,e=!1){return fa("audio",t??da``,e)};bm=class extends _e{constructor(t){super(t)}},jw=class extends _e{constructor(t){super(t)}},y1=[0,we,2,nd,-2,Pt,Rt,[0,we,Pt]],Zw=class extends _e{constructor(t){super(t)}},Jw=class extends _e{constructor(t){super(t)}};Am=class extends _e{constructor(t){super(t)}},rd=[3,4,5,6,7],Qw=class extends _e{constructor(t){super(t)}},jy=class extends _e{constructor(t){super(t)}};jy.prototype.h=Tl([0,[0,we,re,-3,we],[0,rd,we,-1,lt,[0,we,re,nd],lt,y1,lt,[0,1,y1],lt,[0,we],lt,[0,we,re,nd]]]);eR=class{constructor(){this.h=typeof AbortController<"u"}async send(t,e,n){var i=this.h?new AbortController:void 0,s=i&&t.la>0?setTimeout(()=>{i.abort()},t.la):void 0;try{let r=await fetch(t.url,{method:t.bb,headers:{...t.ab},...t.body&&{body:t.body},...t.withCredentials&&{credentials:"include"},signal:t.la&&i?i.signal:null});r.ok?e?.(await r.text()):n?.(r.status)}catch(r){r?.name==="AbortError"?n?.(408):n?.(0)}finally{clearTimeout(s)}}},tR=class extends _e{constructor(t){super(t,37)}},S1=[-4,{},uw,we,hw],M1=[0,re,we,1,re,-1,we,1,we,1,Pt],b1=[0,we,re,-2],T1=[0,re,we],E1=[0,re,we],A1=[0,Ge,-3],w1=[0,we,re,-1,Pt,nt,-1,re,-5,Rt,[0,re,-4],-1,Ge,[0,Ge,-3],we],nR=class extends _e{constructor(t){super(t,19)}},iR=fg([-19,{},[0,we,1,[0,re,-6,Pt,nt,re,-1,Pt],1,[0,re,1,re,-5],re,-1,[0,we,re,-8],[0,re,-3],[0,re,we,re,-2],[0,re,-1,we,re,-1,we,re,-1,[0,Rt,[0,re,-1],Ge,re,-5],[0,we,Ge,nt,-2]],Pt,[0,re,-3,Pt,nt,re,-1],[0,we,re,-1],[0,re,-9],[0,re,-6,we,re,1,re,Ge,we,-1,Ge,re,-2,we,re,we,re,nt,-1],1,[0,we],1,[0,re,-4],1,M1,[0,[1,2,3,4,5,6],lt,M1,lt,T1,lt,E1,lt,[0,we],lt,w1,lt,b1],T1,E1,w1,[0,[0,we,re,-1,Pt,nt,-1,re,-4,Rt,[0,re,-4],-1,1,A1],[0,we,re,-1,Pt,nt,-1,re,-4,A1]],b1,[0,re,[0,nt,-3,we],we,-2,[0,nt,-1],Ge],4,[0,re,we,re,-1,Pt,we,re,-1,we,nt,-1]],we,Rt,[-37,{},sl,re,Rt,[0,re,-1],Po,1,Po,[0,ln,-1,s1,rw,-1],re,[0,nt,re,-1],Ge,nt,Pt,re,-1,cw,lw,sl,Po,we,s1,Pt,-1,[0,we,-1],re,Ge,re,ec,re,-1,i1,1,i1,S1,Ge,[0,we,[0,Wt,nt,-2],[0,Wt]],[0,we,Pt]],sl,dy,re,-1,sl,we,-1,[0,Ge,-1,we,Ge],[0,Pt,-1,re],[0,sl,Ge,Pt],Pt,1,fy,1,S1]),sR=class{constructor(t){this.i=[],this.o=new eR,this.l=t??"",this.h=setInterval(()=>{this.flush()},6e4)}close(){this.h!==void 0&&(clearInterval(this.h),this.h=void 0),this.flush()}flush(t,e){if(this.error)e?.("net-send-failed");else if(this.i.length===0)t?.();else{var n=this.i;this.i=[],n=(function(i){var s=new nR;return fm(s=Ke(s,2,Ks(1786)),3,i)})(n),n=iR(n),this.o.send({url:"https://odml.pa.googleapis.com/v1/log",bb:"POST",la:1e4,body:n,gb:2,ab:{"Content-Type":"application/x-protobuf","x-goog-api-key":this.l},withCredentials:!1},()=>{t?.()},i=>{this.error=Error(`Logging failed with HTTP error: ${i}`),this.i=[],this.h!==void 0&&(clearInterval(this.h),this.h=void 0),e?.("net-send-failed",i)})}}},ad=class{constructor(){this.ba=this.V=this.Y=this.S=this.W=this.U=this.R=0}};rR=class{constructor(t,e,n){this.v=performance.now(),this.o=performance.now(),this.i=new Map,this.u=0,this.h=new ad,this.l=new ad,this.m=new sR(n),this.D=(function(i){switch(i){case"AudioClassifier":return 4;case"AudioEmbedder":return 5;case"TextClassifier":return 6;case"TextEmbedder":return 7;case"GestureRecognizer":return 8;case"HandDetector":return 9;case"HandLandmarker":return 10;case"ImageClassifier":return 11;case"ImageEmbedder":return 12;case"ImageSegmenter":return 13;case"ObjectDetector":return 14;case"FaceDetector":return 15;case"FaceLandmarker":return 16;case"InteractiveSegmenter":case"InteractiveSegmenterLegacy":return 18;case"HolisticLandmarker":return 20;case"LlmInference":return 21;case"LanguageDetector":return 22;case"PoseLandmarker":return 23;case"UniversalEmbedder":return 28;case"SemanticRetriever":return 29;case"DecisionMaker":return 30;case"TextSummarizer":return 26;case"TextProofreader":return 27;case"AudioTranscriber":return 31;case"TextToSpeech":return 32;default:return 0}})(t),this.F=(function(i){switch(i){case"IMAGE":return 11;case"VIDEO":return 12;case"LIVE_STREAM":return 13;case"AUDIO_CLIPS":return 14;case"AUDIO_STREAM":return 15;default:return 10}})(e),t=new Qw,typeof navigator>"u"?e=0:(e=navigator.userAgent,e=/Android/i.test(e)?1:/iPhone|iPad|iPod/i.test(e)?2:/Windows/i.test(e)?5:/Macintosh/i.test(e)?4:/Linux/i.test(e)?3:0),t=Ke(t,1,Ks(e)),t=Ke(t,2,$s("")),t=Ke(t,3,$s("")),t=Ke(t,4,$s("1.2.3")),t=Ke(t,5,$s("")),this.C=Ke(t,6,Ks((function(){var i=globalThis.__HOST_ENVIRONMENT__;if(typeof i=="string")switch(i){case"ANDROID":return 1;case"IOS":return 2;case"PYTHON":return 3;case"WEB":break;case"FLUTTER":return 5;case"FLUTTER_WEB":return 6;default:return 0}return 4})()))}ya(){var t=new Jw;t=Uu(t=Ke(t,1,Ks(this.F)),3,performance.now()-this.v),wm(this,t=Vi(Em(Tm(new Am,this.D),0),3,rd,t)),this.o=performance.now()}za(t){var e=this.i.get(t);if(e!==void 0&&(this.i.delete(t),t=performance.now()-e,++this.h.W,this.h.Y+=t,this.h.V=Math.max(this.h.V,t),this.u=Math.max(this.u,t),performance.now()>this.o+3e4)){for(let[n,i]of this.i.entries())t=n,i<e&&(this.h.S++,this.i.delete(t));e={...this.h,ba:performance.now()-this.o},this.h.V=0,this.o=performance.now(),R1(this,e)}}xa(){var t={...this.h,S:this.h.S+this.i.size,V:this.u,ba:performance.now()-this.v};R1(this,t);var e=new Zw;e=Ne(e,0,2,t=Zy(this,t)),wm(this,e=Vi(t=Em(Tm(new Am,this.D),2),5,rd,e))}close(){var t=this.m;typeof t.close=="function"?t.close():t.flush()}};Qy=class{constructor(t,e){this.l=!0,this.j=t,this.h=null,this.i=0,this.o=typeof this.j._addIntToInputStream=="function",e!==void 0?this.j.canvas=e:Mg()?this.j.canvas=new OffscreenCanvas(1,1):(console.warn("OffscreenCanvas not supported and GraphRunner constructor glCanvas parameter is undefined. Creating backup canvas."),this.j.canvas=document.createElement("canvas"))}async initializeGraph(t){var e=await(await fetch(t)).arrayBuffer();t=!(t.endsWith(".pbtxt")||t.endsWith(".textproto")),this.setGraph(new Uint8Array(e),t)}setGraphFromString(t){this.setGraph(new TextEncoder().encode(t),!1)}setGraph(t,e){var n=t.length,i=this.j._malloc(n);this.j.HEAPU8.set(t,i),e?this.j._changeBinaryGraph(n,i):this.j._changeTextGraph(n,i),this.j._free(i)}configureAudio(t,e,n,i,s){this.j._configureAudio||console.warn('Attempting to use configureAudio without support for input audio. Is build dep ":gl_graph_runner_audio" missing?'),Le(this,i||"input_audio",r=>{Le(this,s=s||"audio_header",a=>{this.j._configureAudio(r,a,t,e??0,n)})})}setAutoResizeCanvas(t){this.l=t}setAutoRenderToScreen(t){this.j._setAutoRenderToScreen(t)}setGpuBufferVerticalFlip(t){this.j.gpuOriginForWebTexturesIsBottomLeft=t}ka(t){us(this,"__graph_config__",e=>{t(e)}),Le(this,"__graph_config__",e=>{this.j._getGraphConfig(e,void 0)}),delete this.j.simpleListeners.__graph_config__}attachErrorListener(t){this.j.errorListener=t}attachEmptyPacketListener(t,e){this.j.emptyPacketListeners=this.j.emptyPacketListeners||{},this.j.emptyPacketListeners[t]=e}addAudioToStream(t,e,n){this.addAudioToStreamWithShape(t,0,0,e,n)}addAudioToStreamWithShape(t,e,n,i,s){var r=4*t.length;this.i!==r&&(this.h&&this.j._free(this.h),this.h=this.j._malloc(r),this.i=r),this.j.HEAPF32.set(t,this.h/4),Le(this,i,a=>{this.j._addAudioToInputStream(this.h,e,n,a,s)})}addGpuBufferToStream(t,e,n){Le(this,e,i=>{var[s,r]=Jy(this,t,i);this.j._addBoundTextureToStream(i,s,r,n)})}addBoolToStream(t,e,n){Le(this,e,i=>{this.j._addBoolToInputStream(t,i,n)})}addDoubleToStream(t,e,n){Le(this,e,i=>{this.j._addDoubleToInputStream(t,i,n)})}addFloatToStream(t,e,n){Le(this,e,i=>{this.j._addFloatToInputStream(t,i,n)})}addIntToStream(t,e,n){Le(this,e,i=>{this.j._addIntToInputStream(t,i,n)})}addUintToStream(t,e,n){Le(this,e,i=>{this.j._addUintToInputStream(t,i,n)})}addStringToStream(t,e,n){Le(this,e,i=>{Le(this,t,s=>{this.j._addStringToInputStream(s,i,n)})})}addStringRecordToStream(t,e,n){Le(this,e,i=>{I1(this,Object.keys(t),s=>{I1(this,Object.values(t),r=>{this.j._addFlatHashMapToInputStream(s,r,Object.keys(t).length,i,n)})})})}addProtoToStream(t,e,n,i){Le(this,n,s=>{Le(this,e,r=>{var a=this.j._malloc(t.length);this.j.HEAPU8.set(t,a),this.j._addProtoToInputStream(a,t.length,r,s,i),this.j._free(a)})})}addEmptyPacketToStream(t,e){Le(this,t,n=>{this.j._addEmptyPacketToInputStream(n,e)})}addBoolVectorToStream(t,e,n){Le(this,e,i=>{var s=this.j._allocateBoolVector(t.length);if(!s)throw Error("Unable to allocate new bool vector on heap.");for(let r of t)this.j._addBoolVectorEntry(s,r);this.j._addBoolVectorToInputStream(s,i,n)})}addDoubleVectorToStream(t,e,n){Le(this,e,i=>{var s=this.j._allocateDoubleVector(t.length);if(!s)throw Error("Unable to allocate new double vector on heap.");for(let r of t)this.j._addDoubleVectorEntry(s,r);this.j._addDoubleVectorToInputStream(s,i,n)})}addFloatVectorToStream(t,e,n){Le(this,e,i=>{var s=this.j._allocateFloatVector(t.length);if(!s)throw Error("Unable to allocate new float vector on heap.");for(let r of t)this.j._addFloatVectorEntry(s,r);this.j._addFloatVectorToInputStream(s,i,n)})}addIntVectorToStream(t,e,n){Le(this,e,i=>{var s=this.j._allocateIntVector(t.length);if(!s)throw Error("Unable to allocate new int vector on heap.");for(let r of t)this.j._addIntVectorEntry(s,r);this.j._addIntVectorToInputStream(s,i,n)})}addUintVectorToStream(t,e,n){Le(this,e,i=>{var s=this.j._allocateUintVector(t.length);if(!s)throw Error("Unable to allocate new unsigned int vector on heap.");for(let r of t)this.j._addUintVectorEntry(s,r);this.j._addUintVectorToInputStream(s,i,n)})}addStringVectorToStream(t,e,n){Le(this,e,i=>{var s=this.j._allocateStringVector(t.length);if(!s)throw Error("Unable to allocate new string vector on heap.");for(let r of t)Le(this,r,a=>{this.j._addStringVectorEntry(s,a)});this.j._addStringVectorToInputStream(s,i,n)})}addBoolToInputSidePacket(t,e){Le(this,e,n=>{this.j._addBoolToInputSidePacket(t,n)})}addDoubleToInputSidePacket(t,e){Le(this,e,n=>{this.j._addDoubleToInputSidePacket(t,n)})}addFloatToInputSidePacket(t,e){Le(this,e,n=>{this.j._addFloatToInputSidePacket(t,n)})}addIntToInputSidePacket(t,e){Le(this,e,n=>{this.j._addIntToInputSidePacket(t,n)})}addUintToInputSidePacket(t,e){Le(this,e,n=>{this.j._addUintToInputSidePacket(t,n)})}addStringToInputSidePacket(t,e){Le(this,e,n=>{Le(this,t,i=>{this.j._addStringToInputSidePacket(i,n)})})}addProtoToInputSidePacket(t,e,n){Le(this,n,i=>{Le(this,e,s=>{var r=this.j._malloc(t.length);this.j.HEAPU8.set(t,r),this.j._addProtoToInputSidePacket(r,t.length,s,i),this.j._free(r)})})}addBoolVectorToInputSidePacket(t,e){Le(this,e,n=>{var i=this.j._allocateBoolVector(t.length);if(!i)throw Error("Unable to allocate new bool vector on heap.");for(let s of t)this.j._addBoolVectorEntry(i,s);this.j._addBoolVectorToInputSidePacket(i,n)})}addDoubleVectorToInputSidePacket(t,e){Le(this,e,n=>{var i=this.j._allocateDoubleVector(t.length);if(!i)throw Error("Unable to allocate new double vector on heap.");for(let s of t)this.j._addDoubleVectorEntry(i,s);this.j._addDoubleVectorToInputSidePacket(i,n)})}addFloatVectorToInputSidePacket(t,e){Le(this,e,n=>{var i=this.j._allocateFloatVector(t.length);if(!i)throw Error("Unable to allocate new float vector on heap.");for(let s of t)this.j._addFloatVectorEntry(i,s);this.j._addFloatVectorToInputSidePacket(i,n)})}addIntVectorToInputSidePacket(t,e){Le(this,e,n=>{var i=this.j._allocateIntVector(t.length);if(!i)throw Error("Unable to allocate new int vector on heap.");for(let s of t)this.j._addIntVectorEntry(i,s);this.j._addIntVectorToInputSidePacket(i,n)})}addUintVectorToInputSidePacket(t,e){Le(this,e,n=>{var i=this.j._allocateUintVector(t.length);if(!i)throw Error("Unable to allocate new unsigned int vector on heap.");for(let s of t)this.j._addUintVectorEntry(i,s);this.j._addUintVectorToInputSidePacket(i,n)})}addStringVectorToInputSidePacket(t,e){Le(this,e,n=>{var i=this.j._allocateStringVector(t.length);if(!i)throw Error("Unable to allocate new string vector on heap.");for(let s of t)Le(this,s,r=>{this.j._addStringVectorEntry(i,r)});this.j._addStringVectorToInputSidePacket(i,n)})}attachBoolListener(t,e){us(this,t,e),Le(this,t,n=>{this.j._attachBoolListener(n)})}attachBoolVectorListener(t,e){Ar(this,t,e),Le(this,t,n=>{this.j._attachBoolVectorListener(n)})}attachIntListener(t,e){us(this,t,e),Le(this,t,n=>{this.j._attachIntListener(n)})}attachIntVectorListener(t,e){Ar(this,t,e),Le(this,t,n=>{this.j._attachIntVectorListener(n)})}attachUintListener(t,e){us(this,t,e),Le(this,t,n=>{this.j._attachUintListener(n)})}attachUintVectorListener(t,e){Ar(this,t,e),Le(this,t,n=>{this.j._attachUintVectorListener(n)})}attachDoubleListener(t,e){us(this,t,e),Le(this,t,n=>{this.j._attachDoubleListener(n)})}attachDoubleVectorListener(t,e){Ar(this,t,e),Le(this,t,n=>{this.j._attachDoubleVectorListener(n)})}attachFloatListener(t,e){us(this,t,e),Le(this,t,n=>{this.j._attachFloatListener(n)})}attachFloatVectorListener(t,e){Ar(this,t,e),Le(this,t,n=>{this.j._attachFloatVectorListener(n)})}attachStringListener(t,e){us(this,t,e),Le(this,t,n=>{this.j._attachStringListener(n)})}attachStringVectorListener(t,e){Ar(this,t,e),Le(this,t,n=>{this.j._attachStringVectorListener(n)})}attachProtoListener(t,e,n){us(this,t,e),Le(this,t,i=>{this.j._attachProtoListener(i,n||!1)})}attachProtoVectorListener(t,e,n){Ar(this,t,e),Le(this,t,i=>{this.j._attachProtoVectorListener(i,n||!1)})}attachAudioListener(t,e,n){this.j._attachAudioListener||console.warn('Attempting to use attachAudioListener without support for output audio. Is build dep ":gl_graph_runner_audio_out" missing?'),us(this,t,(i,s)=>{i=new Float32Array(i.buffer,i.byteOffset,i.length/4),e(i,s)}),Le(this,t,i=>{this.j._attachAudioListener(i,n||!1)})}finishProcessing(){this.j._waitUntilIdle()}closeGraph(){this.j._closeGraph(),this.j.simpleListeners=void 0,this.j.emptyPacketListeners=void 0}};aR=eS(tS(Qy)),oR=class extends aR{};od=class{constructor(t){this.h=t,this.L=[],this.J=0,this.h.setAutoRenderToScreen(!1)}l(t,e=!0,n=!1,i=!1){if(e){let s=t.baseOptions||{};if(t.baseOptions?.modelAssetBuffer&&t.baseOptions?.modelAssetPath)throw Error("Cannot set both baseOptions.modelAssetPath and baseOptions.modelAssetBuffer");if(!(mt(this.baseOptions,sd,1)?.h()||mt(this.baseOptions,sd,1)?.l()||t.baseOptions?.modelAssetBuffer||t.baseOptions?.modelAssetPath))throw Error("Either baseOptions.modelAssetPath or baseOptions.modelAssetBuffer must be set");(function(a,o,c=!1){var l=mt(a.baseOptions,id,3);if(!l){var h=l=new id,u=new l1;Vi(h,4,Ys,u)}"delegate"in o&&(o.delegate==="GPU"?(o=l,h=new gy,Vi(o,2,Ys,h)):(o=l,h=new l1,Vi(o,4,Ys,h))),c&&(c=l.l(),o=l.h()||c?.h()===!0,c=new xy,o?Ne(c,0,9,o=new pw):Ne(c,0,8,o=new fw),Vi(l,6,Ys,c)),Ne(a.baseOptions,0,3,l)})(this,s,i);let r=n?"model.litertlm":"model.dat";if(s.modelAssetPath)return fetch(s.modelAssetPath.toString()).then(a=>{if(a.ok)return a.arrayBuffer();throw Error(`Failed to fetch model: ${s.modelAssetPath} (${a.status})`)}).then(a=>{im(this,new Uint8Array(a),r),this.u(),this.M()});if(s.modelAssetBuffer instanceof Uint8Array)n?im(this,s.modelAssetBuffer,r):Rm(this,s.modelAssetBuffer);else if(s.modelAssetBuffer)return(async function(a){for(var o=[],c=0;;){let{done:l,value:h}=await a.read();if(l)break;o.push(h),c+=h.length}if(o.length===0)return new Uint8Array(0);if(o.length===1)return o[0];a=new Uint8Array(c),c=0;for(let l of o)a.set(l,c),c+=l.length;return a})(s.modelAssetBuffer).then(a=>{n?im(this,a,r):Rm(this,a),this.u(),this.M()})}return this.u(),this.M(),Promise.resolve()}M(){}ka(){var t;if(this.h.ka(e=>{t=gw(e)}),!t)throw Error("Failed to retrieve CalculatorGraphConfig");return t}setGraph(t,e){this.h.attachErrorListener((n,i)=>{this.L.push(Error(i))}),this.h.Za(),this.h.setGraph(t,e),this.o?.ya(),this.F=void 0,P1(this)}finishProcessing(t){this.h.finishProcessing(),P1(this),this.o&&t!==void 0&&this.o.za(t)}close(){this.F=void 0,this.o?.xa(),this.o?.close(),this.h.closeGraph()}};od.prototype.close=od.prototype.close;Cm=class{constructor(e,n,i,s){this.h=e,this.i=n,this.o=i,this.l=s}bind(){this.h.bindVertexArray(this.i)}close(){this.h.deleteVertexArray(this.i),this.h.deleteBuffer(this.o),this.h.deleteBuffer(this.l)}};Ra=class{C(){return`
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D inputTexture;
  void main() {
    gl_FragColor = texture2D(inputTexture, vTex);
  }
 `}o(){var t=this.h;if(this.i=qn(t.createProgram(),"Failed to create WebGL program"),this.ea=L1(this,`
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`,t.VERTEX_SHADER),this.aa=L1(this,this.C(),t.FRAGMENT_SHADER),t.linkProgram(this.i),!t.getProgramParameter(this.i,t.LINK_STATUS))throw Error(`Error during program linking: ${t.getProgramInfoLog(this.i)}`);this.G=t.getAttribLocation(this.i,"aVertex"),this.L=t.getAttribLocation(this.i,"aTex")}J(){}l(){}close(){if(this.i){let t=this.h;t.deleteProgram(this.i),t.deleteShader(this.ea),t.deleteShader(this.aa)}this.D&&this.h.deleteFramebuffer(this.D),this.F&&this.F.close(),this.m&&this.m.close()}},lR=class extends Ra{C(){return`
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
 `}J(){var t=this.h;t.activeTexture(t.TEXTURE1),this.v=Cr(this,t,t.LINEAR),t.activeTexture(t.TEXTURE2),this.u=Cr(this,t,t.NEAREST)}o(){super.o();var t=this.h;this.P=qn(t.getUniformLocation(this.i,"backgroundTexture"),"Uniform location"),this.Z=qn(t.getUniformLocation(this.i,"colorMappingTexture"),"Uniform location"),this.M=qn(t.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var t=this.h;t.uniform1i(this.M,0),t.uniform1i(this.P,1),t.uniform1i(this.Z,2)}close(){this.v&&this.h.deleteTexture(this.v),this.u&&this.h.deleteTexture(this.u),super.close()}},hR=class extends Ra{C(){return`
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
 `}J(){var t=this.h;t.activeTexture(t.TEXTURE1),this.u=Cr(this,t),t.activeTexture(t.TEXTURE2),this.v=Cr(this,t)}o(){super.o();var t=this.h;this.M=qn(t.getUniformLocation(this.i,"defaultTexture"),"Uniform location"),this.P=qn(t.getUniformLocation(this.i,"overlayTexture"),"Uniform location"),this.K=qn(t.getUniformLocation(this.i,"maskTexture"),"Uniform location")}l(){super.l();var t=this.h;t.uniform1i(this.K,0),t.uniform1i(this.M,1),t.uniform1i(this.P,2)}close(){this.u&&this.h.deleteTexture(this.u),this.v&&this.h.deleteTexture(this.v),super.close()}};Qt=class{constructor(t,e,n,i,s,r,a){this.h=t,this.o=e,this.u=n,this.canvas=i,this.l=s,this.width=r,this.height=a,this.u&&--D1===0&&console.error("You seem to be creating MPMask instances without invoking .close(). This leaks resources.")}Ua(){return!!qs(this,0)}ua(){return!!qs(this,1)}X(){return!!qs(this,2)}ta(){return(e=qs(t=this,0))||(e=Im(t),e=new Uint8Array(e.map(n=>Math.round(255*n))),t.h.push(e)),e;var t,e}sa(){return Im(this)}T(){return nS(this)}clone(){var t=[];for(let e of this.h){let n;if(e instanceof Uint8Array)n=new Uint8Array(e);else if(e instanceof Float32Array)n=new Float32Array(e);else{if(!(e instanceof WebGLTexture))throw Error(`Type is not supported: ${e}`);{let i=Vo(this),s=Ag(this);i.activeTexture(i.TEXTURE1),n=Cr(s,i,this.o?i.LINEAR:i.NEAREST),i.bindTexture(i.TEXTURE_2D,n);let r=iS(this);i.texImage2D(i.TEXTURE_2D,0,r,this.width,this.height,0,i.RED,i.FLOAT,null),i.bindTexture(i.TEXTURE_2D,null),Cd(s,i,n),wl(s,i,!1,()=>{sS(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),Pm(this)}),Eg(s),Pm(this)}}t.push(n)}return new Qt(t,this.o,this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&Vo(this).deleteTexture(qs(this,2)),D1=-1}};Qt.prototype.close=Qt.prototype.close,Qt.prototype.clone=Qt.prototype.clone,Qt.prototype.getAsWebGLTexture=Qt.prototype.T,Qt.prototype.getAsFloat32Array=Qt.prototype.sa,Qt.prototype.getAsUint8Array=Qt.prototype.ta,Qt.prototype.hasWebGLTexture=Qt.prototype.X,Qt.prototype.hasFloat32Array=Qt.prototype.ua,Qt.prototype.hasUint8Array=Qt.prototype.Ua;D1=250,uR={color:"white",lineWidth:4,radius:6};ti=class{constructor(t,e){typeof CanvasRenderingContext2D<"u"&&t instanceof CanvasRenderingContext2D||t instanceof OffscreenCanvasRenderingContext2D?(this.l=t,this.u=e):this.u=t}Ma(t,e){if(t){var n=rl(this);e=sm(e),n.save();var i=n.canvas,s=0;for(let r of t)n.fillStyle=Vs(e.fillColor,{index:s,from:r}),n.strokeStyle=Vs(e.color,{index:s,from:r}),n.lineWidth=Vs(e.lineWidth,{index:s,from:r}),(t=new Path2D).arc(r.x*i.width,r.y*i.height,Vs(e.radius,{index:s,from:r}),0,2*Math.PI),n.fill(t),n.stroke(t),++s;n.restore()}}La(t,e,n){if(t&&e){var i=rl(this);n=sm(n),i.save();var s=i.canvas,r=0;for(let a of e){i.beginPath(),e=t[a.start];let o=t[a.end];e&&o&&(i.strokeStyle=Vs(n.color,{index:r,from:e,to:o}),i.lineWidth=Vs(n.lineWidth,{index:r,from:e,to:o}),i.moveTo(e.x*s.width,e.y*s.height),i.lineTo(o.x*s.width,o.y*s.height)),++r,i.stroke()}i.restore()}}Ia(t,e){var n=rl(this);e=sm(e),n.save(),n.beginPath(),n.lineWidth=Vs(e.lineWidth,{}),n.strokeStyle=Vs(e.color,{}),n.fillStyle=Vs(e.fillColor,{}),n.moveTo(t.originX,t.originY),n.lineTo(t.originX+t.width,t.originY),n.lineTo(t.originX+t.width,t.originY+t.height),n.lineTo(t.originX,t.originY+t.height),n.lineTo(t.originX,t.originY),n.stroke(),n.fill(),n.restore()}Ja(t,e,n=[0,0,0,255]){this.l?(function(i,s,r,a){var o=ml(i);F1(i,s,c=>{O1(i,c,r,a),(c=rl(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,t,n,e):O1(this,t.T(),n,e)}Ka(t,e,n){this.l?(function(i,s,r,a){var o=ml(i);F1(i,s,c=>{B1(i,c,r,a),(c=rl(i)).drawImage(o.canvas,0,0,c.canvas.width,c.canvas.height)})})(this,t,e,n):B1(this,t.T(),e,n)}close(){this.h?.close(),this.h=void 0,this.i?.close(),this.i=void 0,this.o?.close(),this.o=void 0}};ti.prototype.close=ti.prototype.close,ti.prototype.drawConfidenceMask=ti.prototype.Ka,ti.prototype.drawCategoryMask=ti.prototype.Ja,ti.prototype.drawBoundingBox=ti.prototype.Ia,ti.prototype.drawConnectors=ti.prototype.La,ti.prototype.drawLandmarks=ti.prototype.Ma,ti.lerp=function(t,e,n,i,s){return U1(i*(1-(t-e)/(n-e))+s*(1-(n-t)/(n-e)),i,s)},ti.clamp=U1;An=class{constructor(t,e,n,i,s,r,a){this.h=t,this.u=e,this.o=n,this.canvas=i,this.l=s,this.width=r,this.height=a,(this.u||this.o)&&--z1===0&&console.error("You seem to be creating MPImage instances without invoking .close(). This leaks resources.")}Ta(){return!!ds(this,0)}va(){return!!ds(this,1)}X(){return!!ds(this,2)}Qa(){return rS(this)}Pa(){var t=ds(this,1);return t||(Gu(this),Hu(this),t=k1(this),ol(this),this.h.push(t),this.u=!0),t}T(){return Gu(this)}clone(){var t=[];for(let e of this.h){let n;if(e instanceof ImageData)n=new ImageData(e.data,this.width,this.height);else if(e instanceof WebGLTexture){let i=Wo(this),s=Id(this);i.activeTexture(i.TEXTURE1),n=Cr(s,i),i.bindTexture(i.TEXTURE_2D,n),i.texImage2D(i.TEXTURE_2D,0,i.RGBA,this.width,this.height,0,i.RGBA,i.UNSIGNED_BYTE,null),i.bindTexture(i.TEXTURE_2D,null),Cd(s,i,n),wl(s,i,!1,()=>{Hu(this),i.clearColor(0,0,0,0),i.clear(i.COLOR_BUFFER_BIT),i.drawArrays(i.TRIANGLE_FAN,0,4),ol(this)}),Eg(s),ol(this)}else{if(!(e instanceof ImageBitmap))throw Error(`Type is not supported: ${e}`);Gu(this),Hu(this),n=k1(this),ol(this)}t.push(n)}return new An(t,this.va(),this.X(),this.canvas,this.l,this.width,this.height)}close(){this.u&&ds(this,1).close(),this.o&&Wo(this).deleteTexture(ds(this,2)),z1=-1}};An.prototype.close=An.prototype.close,An.prototype.clone=An.prototype.clone,An.prototype.getAsWebGLTexture=An.prototype.T,An.prototype.getAsImageBitmap=An.prototype.Pa,An.prototype.getAsImageData=An.prototype.Qa,An.prototype.hasWebGLTexture=An.prototype.X,An.prototype.hasImageBitmap=An.prototype.va,An.prototype.hasImageData=An.prototype.Ta;z1=250;dR=tS((G1=eS(Qy),class extends G1{get oa(){return this.j}Da(t,e,n){Le(this,e,i=>{var[s,r]=Jy(this,t,i);this.oa._addBoundTextureAsImageToStream(i,s,r,n)})}ha(t,e){us(this,t,e),Le(this,t,n=>{this.oa._attachImageListener(n)})}ia(t,e){Ar(this,t,e),Le(this,t,n=>{this.oa._attachImageVectorListener(n)})}})),$i=class extends dR{};mi=class extends od{constructor(t,e,n,i){super(t),this.h=t,this.Ba=e,this.qa=n,this.Ca=i,this.ea=new Ra,this.K=!1}l(t,e=!0,n=!1,i=!1){if("runningMode"in t){var s=this.K=!!t.runningMode&&t.runningMode!=="IMAGE";Ke(this.baseOptions,2,s==null?s:Xu(s))}if(t.canvas!==void 0&&this.h.j.canvas!==t.canvas)throw Error("You must create a new task to reset the canvas.");return super.l(t,e,n,i)}close(){this.ea.close(),super.close()}};mi.prototype.close=mi.prototype.close;Ri=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect_in",!1),this.m={detections:[]},Ne(t=this.i=new Ad,0,1,e=new Gt),Ue(this.i,2,.5),Ue(this.i,3,.3)}D(){return"FaceDetector"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return"minDetectionConfidence"in t&&Ue(this.i,2,t.minDetectionConfidence??.5),"minSuppressionThreshold"in t&&Ue(this.i,3,t.minSuppressionThreshold??.3),this.l(t)}H(t,e){return this.m={detections:[]},Yi(this,t,e),this.m}I(t,e,n){return this.m={detections:[]},ys(this,t,n,e),this.m}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect_in"),_t(t,"detections");var e=new gi;xs(e,Lw,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.face_detector.FaceDetectorGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect_in"),ht(n,"DETECTIONS:detections"),n.A(e),Ni(t,n),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Ay(r),this.m.detections.push(Ky(i));be(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Ri.prototype.detectForVideo=Ri.prototype.I,Ri.prototype.detect=Ri.prototype.H,Ri.prototype.setOptions=Ri.prototype.A,Ri.createFromModelPath=async function(t,e){return ft(Ri,t,{baseOptions:{modelAssetPath:e}})},Ri.createFromModelBuffer=function(t,e){return ft(Ri,t,{baseOptions:{modelAssetBuffer:e}})},Ri.createFromOptions=function(t,e){return ft(Ri,t,e)};wg=qi([61,146],[146,91],[91,181],[181,84],[84,17],[17,314],[314,405],[405,321],[321,375],[375,291],[61,185],[185,40],[40,39],[39,37],[37,0],[0,267],[267,269],[269,270],[270,409],[409,291],[78,95],[95,88],[88,178],[178,87],[87,14],[14,317],[317,402],[402,318],[318,324],[324,308],[78,191],[191,80],[80,81],[81,82],[82,13],[13,312],[312,311],[311,310],[310,415],[415,308]),Rg=qi([263,249],[249,390],[390,373],[373,374],[374,380],[380,381],[381,382],[382,362],[263,466],[466,388],[388,387],[387,386],[386,385],[385,384],[384,398],[398,362]),Cg=qi([276,283],[283,282],[282,295],[295,285],[300,293],[293,334],[334,296],[296,336]),oS=qi([474,475],[475,476],[476,477],[477,474]),Ig=qi([33,7],[7,163],[163,144],[144,145],[145,153],[153,154],[154,155],[155,133],[33,246],[246,161],[161,160],[160,159],[159,158],[158,157],[157,173],[173,133]),Pg=qi([46,53],[53,52],[52,65],[65,55],[70,63],[63,105],[105,66],[66,107]),cS=qi([469,470],[470,471],[471,472],[472,469]),Lg=qi([10,338],[338,297],[297,332],[332,284],[284,251],[251,389],[389,356],[356,454],[454,323],[323,361],[361,288],[288,397],[397,365],[365,379],[379,378],[378,400],[400,377],[377,152],[152,148],[148,176],[176,149],[149,150],[150,136],[136,172],[172,58],[58,132],[132,93],[93,234],[234,127],[127,162],[162,21],[21,54],[54,103],[103,67],[67,109],[109,10]),lS=[...wg,...Rg,...Cg,...Ig,...Pg,...Lg],hS=qi([127,34],[34,139],[139,127],[11,0],[0,37],[37,11],[232,231],[231,120],[120,232],[72,37],[37,39],[39,72],[128,121],[121,47],[47,128],[232,121],[121,128],[128,232],[104,69],[69,67],[67,104],[175,171],[171,148],[148,175],[118,50],[50,101],[101,118],[73,39],[39,40],[40,73],[9,151],[151,108],[108,9],[48,115],[115,131],[131,48],[194,204],[204,211],[211,194],[74,40],[40,185],[185,74],[80,42],[42,183],[183,80],[40,92],[92,186],[186,40],[230,229],[229,118],[118,230],[202,212],[212,214],[214,202],[83,18],[18,17],[17,83],[76,61],[61,146],[146,76],[160,29],[29,30],[30,160],[56,157],[157,173],[173,56],[106,204],[204,194],[194,106],[135,214],[214,192],[192,135],[203,165],[165,98],[98,203],[21,71],[71,68],[68,21],[51,45],[45,4],[4,51],[144,24],[24,23],[23,144],[77,146],[146,91],[91,77],[205,50],[50,187],[187,205],[201,200],[200,18],[18,201],[91,106],[106,182],[182,91],[90,91],[91,181],[181,90],[85,84],[84,17],[17,85],[206,203],[203,36],[36,206],[148,171],[171,140],[140,148],[92,40],[40,39],[39,92],[193,189],[189,244],[244,193],[159,158],[158,28],[28,159],[247,246],[246,161],[161,247],[236,3],[3,196],[196,236],[54,68],[68,104],[104,54],[193,168],[168,8],[8,193],[117,228],[228,31],[31,117],[189,193],[193,55],[55,189],[98,97],[97,99],[99,98],[126,47],[47,100],[100,126],[166,79],[79,218],[218,166],[155,154],[154,26],[26,155],[209,49],[49,131],[131,209],[135,136],[136,150],[150,135],[47,126],[126,217],[217,47],[223,52],[52,53],[53,223],[45,51],[51,134],[134,45],[211,170],[170,140],[140,211],[67,69],[69,108],[108,67],[43,106],[106,91],[91,43],[230,119],[119,120],[120,230],[226,130],[130,247],[247,226],[63,53],[53,52],[52,63],[238,20],[20,242],[242,238],[46,70],[70,156],[156,46],[78,62],[62,96],[96,78],[46,53],[53,63],[63,46],[143,34],[34,227],[227,143],[123,117],[117,111],[111,123],[44,125],[125,19],[19,44],[236,134],[134,51],[51,236],[216,206],[206,205],[205,216],[154,153],[153,22],[22,154],[39,37],[37,167],[167,39],[200,201],[201,208],[208,200],[36,142],[142,100],[100,36],[57,212],[212,202],[202,57],[20,60],[60,99],[99,20],[28,158],[158,157],[157,28],[35,226],[226,113],[113,35],[160,159],[159,27],[27,160],[204,202],[202,210],[210,204],[113,225],[225,46],[46,113],[43,202],[202,204],[204,43],[62,76],[76,77],[77,62],[137,123],[123,116],[116,137],[41,38],[38,72],[72,41],[203,129],[129,142],[142,203],[64,98],[98,240],[240,64],[49,102],[102,64],[64,49],[41,73],[73,74],[74,41],[212,216],[216,207],[207,212],[42,74],[74,184],[184,42],[169,170],[170,211],[211,169],[170,149],[149,176],[176,170],[105,66],[66,69],[69,105],[122,6],[6,168],[168,122],[123,147],[147,187],[187,123],[96,77],[77,90],[90,96],[65,55],[55,107],[107,65],[89,90],[90,180],[180,89],[101,100],[100,120],[120,101],[63,105],[105,104],[104,63],[93,137],[137,227],[227,93],[15,86],[86,85],[85,15],[129,102],[102,49],[49,129],[14,87],[87,86],[86,14],[55,8],[8,9],[9,55],[100,47],[47,121],[121,100],[145,23],[23,22],[22,145],[88,89],[89,179],[179,88],[6,122],[122,196],[196,6],[88,95],[95,96],[96,88],[138,172],[172,136],[136,138],[215,58],[58,172],[172,215],[115,48],[48,219],[219,115],[42,80],[80,81],[81,42],[195,3],[3,51],[51,195],[43,146],[146,61],[61,43],[171,175],[175,199],[199,171],[81,82],[82,38],[38,81],[53,46],[46,225],[225,53],[144,163],[163,110],[110,144],[52,65],[65,66],[66,52],[229,228],[228,117],[117,229],[34,127],[127,234],[234,34],[107,108],[108,69],[69,107],[109,108],[108,151],[151,109],[48,64],[64,235],[235,48],[62,78],[78,191],[191,62],[129,209],[209,126],[126,129],[111,35],[35,143],[143,111],[117,123],[123,50],[50,117],[222,65],[65,52],[52,222],[19,125],[125,141],[141,19],[221,55],[55,65],[65,221],[3,195],[195,197],[197,3],[25,7],[7,33],[33,25],[220,237],[237,44],[44,220],[70,71],[71,139],[139,70],[122,193],[193,245],[245,122],[247,130],[130,33],[33,247],[71,21],[21,162],[162,71],[170,169],[169,150],[150,170],[188,174],[174,196],[196,188],[216,186],[186,92],[92,216],[2,97],[97,167],[167,2],[141,125],[125,241],[241,141],[164,167],[167,37],[37,164],[72,38],[38,12],[12,72],[38,82],[82,13],[13,38],[63,68],[68,71],[71,63],[226,35],[35,111],[111,226],[101,50],[50,205],[205,101],[206,92],[92,165],[165,206],[209,198],[198,217],[217,209],[165,167],[167,97],[97,165],[220,115],[115,218],[218,220],[133,112],[112,243],[243,133],[239,238],[238,241],[241,239],[214,135],[135,169],[169,214],[190,173],[173,133],[133,190],[171,208],[208,32],[32,171],[125,44],[44,237],[237,125],[86,87],[87,178],[178,86],[85,86],[86,179],[179,85],[84,85],[85,180],[180,84],[83,84],[84,181],[181,83],[201,83],[83,182],[182,201],[137,93],[93,132],[132,137],[76,62],[62,183],[183,76],[61,76],[76,184],[184,61],[57,61],[61,185],[185,57],[212,57],[57,186],[186,212],[214,207],[207,187],[187,214],[34,143],[143,156],[156,34],[79,239],[239,237],[237,79],[123,137],[137,177],[177,123],[44,1],[1,4],[4,44],[201,194],[194,32],[32,201],[64,102],[102,129],[129,64],[213,215],[215,138],[138,213],[59,166],[166,219],[219,59],[242,99],[99,97],[97,242],[2,94],[94,141],[141,2],[75,59],[59,235],[235,75],[24,110],[110,228],[228,24],[25,130],[130,226],[226,25],[23,24],[24,229],[229,23],[22,23],[23,230],[230,22],[26,22],[22,231],[231,26],[112,26],[26,232],[232,112],[189,190],[190,243],[243,189],[221,56],[56,190],[190,221],[28,56],[56,221],[221,28],[27,28],[28,222],[222,27],[29,27],[27,223],[223,29],[30,29],[29,224],[224,30],[247,30],[30,225],[225,247],[238,79],[79,20],[20,238],[166,59],[59,75],[75,166],[60,75],[75,240],[240,60],[147,177],[177,215],[215,147],[20,79],[79,166],[166,20],[187,147],[147,213],[213,187],[112,233],[233,244],[244,112],[233,128],[128,245],[245,233],[128,114],[114,188],[188,128],[114,217],[217,174],[174,114],[131,115],[115,220],[220,131],[217,198],[198,236],[236,217],[198,131],[131,134],[134,198],[177,132],[132,58],[58,177],[143,35],[35,124],[124,143],[110,163],[163,7],[7,110],[228,110],[110,25],[25,228],[356,389],[389,368],[368,356],[11,302],[302,267],[267,11],[452,350],[350,349],[349,452],[302,303],[303,269],[269,302],[357,343],[343,277],[277,357],[452,453],[453,357],[357,452],[333,332],[332,297],[297,333],[175,152],[152,377],[377,175],[347,348],[348,330],[330,347],[303,304],[304,270],[270,303],[9,336],[336,337],[337,9],[278,279],[279,360],[360,278],[418,262],[262,431],[431,418],[304,408],[408,409],[409,304],[310,415],[415,407],[407,310],[270,409],[409,410],[410,270],[450,348],[348,347],[347,450],[422,430],[430,434],[434,422],[313,314],[314,17],[17,313],[306,307],[307,375],[375,306],[387,388],[388,260],[260,387],[286,414],[414,398],[398,286],[335,406],[406,418],[418,335],[364,367],[367,416],[416,364],[423,358],[358,327],[327,423],[251,284],[284,298],[298,251],[281,5],[5,4],[4,281],[373,374],[374,253],[253,373],[307,320],[320,321],[321,307],[425,427],[427,411],[411,425],[421,313],[313,18],[18,421],[321,405],[405,406],[406,321],[320,404],[404,405],[405,320],[315,16],[16,17],[17,315],[426,425],[425,266],[266,426],[377,400],[400,369],[369,377],[322,391],[391,269],[269,322],[417,465],[465,464],[464,417],[386,257],[257,258],[258,386],[466,260],[260,388],[388,466],[456,399],[399,419],[419,456],[284,332],[332,333],[333,284],[417,285],[285,8],[8,417],[346,340],[340,261],[261,346],[413,441],[441,285],[285,413],[327,460],[460,328],[328,327],[355,371],[371,329],[329,355],[392,439],[439,438],[438,392],[382,341],[341,256],[256,382],[429,420],[420,360],[360,429],[364,394],[394,379],[379,364],[277,343],[343,437],[437,277],[443,444],[444,283],[283,443],[275,440],[440,363],[363,275],[431,262],[262,369],[369,431],[297,338],[338,337],[337,297],[273,375],[375,321],[321,273],[450,451],[451,349],[349,450],[446,342],[342,467],[467,446],[293,334],[334,282],[282,293],[458,461],[461,462],[462,458],[276,353],[353,383],[383,276],[308,324],[324,325],[325,308],[276,300],[300,293],[293,276],[372,345],[345,447],[447,372],[352,345],[345,340],[340,352],[274,1],[1,19],[19,274],[456,248],[248,281],[281,456],[436,427],[427,425],[425,436],[381,256],[256,252],[252,381],[269,391],[391,393],[393,269],[200,199],[199,428],[428,200],[266,330],[330,329],[329,266],[287,273],[273,422],[422,287],[250,462],[462,328],[328,250],[258,286],[286,384],[384,258],[265,353],[353,342],[342,265],[387,259],[259,257],[257,387],[424,431],[431,430],[430,424],[342,353],[353,276],[276,342],[273,335],[335,424],[424,273],[292,325],[325,307],[307,292],[366,447],[447,345],[345,366],[271,303],[303,302],[302,271],[423,266],[266,371],[371,423],[294,455],[455,460],[460,294],[279,278],[278,294],[294,279],[271,272],[272,304],[304,271],[432,434],[434,427],[427,432],[272,407],[407,408],[408,272],[394,430],[430,431],[431,394],[395,369],[369,400],[400,395],[334,333],[333,299],[299,334],[351,417],[417,168],[168,351],[352,280],[280,411],[411,352],[325,319],[319,320],[320,325],[295,296],[296,336],[336,295],[319,403],[403,404],[404,319],[330,348],[348,349],[349,330],[293,298],[298,333],[333,293],[323,454],[454,447],[447,323],[15,16],[16,315],[315,15],[358,429],[429,279],[279,358],[14,15],[15,316],[316,14],[285,336],[336,9],[9,285],[329,349],[349,350],[350,329],[374,380],[380,252],[252,374],[318,402],[402,403],[403,318],[6,197],[197,419],[419,6],[318,319],[319,325],[325,318],[367,364],[364,365],[365,367],[435,367],[367,397],[397,435],[344,438],[438,439],[439,344],[272,271],[271,311],[311,272],[195,5],[5,281],[281,195],[273,287],[287,291],[291,273],[396,428],[428,199],[199,396],[311,271],[271,268],[268,311],[283,444],[444,445],[445,283],[373,254],[254,339],[339,373],[282,334],[334,296],[296,282],[449,347],[347,346],[346,449],[264,447],[447,454],[454,264],[336,296],[296,299],[299,336],[338,10],[10,151],[151,338],[278,439],[439,455],[455,278],[292,407],[407,415],[415,292],[358,371],[371,355],[355,358],[340,345],[345,372],[372,340],[346,347],[347,280],[280,346],[442,443],[443,282],[282,442],[19,94],[94,370],[370,19],[441,442],[442,295],[295,441],[248,419],[419,197],[197,248],[263,255],[255,359],[359,263],[440,275],[275,274],[274,440],[300,383],[383,368],[368,300],[351,412],[412,465],[465,351],[263,467],[467,466],[466,263],[301,368],[368,389],[389,301],[395,378],[378,379],[379,395],[412,351],[351,419],[419,412],[436,426],[426,322],[322,436],[2,164],[164,393],[393,2],[370,462],[462,461],[461,370],[164,0],[0,267],[267,164],[302,11],[11,12],[12,302],[268,12],[12,13],[13,268],[293,300],[300,301],[301,293],[446,261],[261,340],[340,446],[330,266],[266,425],[425,330],[426,423],[423,391],[391,426],[429,355],[355,437],[437,429],[391,327],[327,326],[326,391],[440,457],[457,438],[438,440],[341,382],[382,362],[362,341],[459,457],[457,461],[461,459],[434,430],[430,394],[394,434],[414,463],[463,362],[362,414],[396,369],[369,262],[262,396],[354,461],[461,457],[457,354],[316,403],[403,402],[402,316],[315,404],[404,403],[403,315],[314,405],[405,404],[404,314],[313,406],[406,405],[405,313],[421,418],[418,406],[406,421],[366,401],[401,361],[361,366],[306,408],[408,407],[407,306],[291,409],[409,408],[408,291],[287,410],[410,409],[409,287],[432,436],[436,410],[410,432],[434,416],[416,411],[411,434],[264,368],[368,383],[383,264],[309,438],[438,457],[457,309],[352,376],[376,401],[401,352],[274,275],[275,4],[4,274],[421,428],[428,262],[262,421],[294,327],[327,358],[358,294],[433,416],[416,367],[367,433],[289,455],[455,439],[439,289],[462,370],[370,326],[326,462],[2,326],[326,370],[370,2],[305,460],[460,455],[455,305],[254,449],[449,448],[448,254],[255,261],[261,446],[446,255],[253,450],[450,449],[449,253],[252,451],[451,450],[450,252],[256,452],[452,451],[451,256],[341,453],[453,452],[452,341],[413,464],[464,463],[463,413],[441,413],[413,414],[414,441],[258,442],[442,441],[441,258],[257,443],[443,442],[442,257],[259,444],[444,443],[443,259],[260,445],[445,444],[444,260],[467,342],[342,445],[445,467],[459,458],[458,250],[250,459],[289,392],[392,290],[290,289],[290,328],[328,460],[460,290],[376,433],[433,435],[435,376],[250,290],[290,392],[392,250],[411,416],[416,433],[433,411],[341,463],[463,464],[464,341],[453,464],[464,465],[465,453],[357,465],[465,412],[412,357],[343,412],[412,399],[399,343],[360,363],[363,440],[440,360],[437,399],[399,456],[456,437],[420,456],[456,363],[363,420],[401,435],[435,288],[288,401],[372,383],[383,353],[353,372],[339,255],[255,249],[249,339],[448,261],[261,255],[255,448],[133,243],[243,190],[190,133],[133,155],[155,112],[112,133],[33,246],[246,247],[247,33],[33,130],[130,25],[25,33],[398,384],[384,286],[286,398],[362,398],[398,414],[414,362],[362,463],[463,341],[341,362],[263,359],[359,467],[467,263],[263,249],[249,255],[255,263],[466,467],[467,260],[260,466],[75,60],[60,166],[166,75],[238,239],[239,79],[79,238],[162,127],[127,139],[139,162],[72,11],[11,37],[37,72],[121,232],[232,120],[120,121],[73,72],[72,39],[39,73],[114,128],[128,47],[47,114],[233,232],[232,128],[128,233],[103,104],[104,67],[67,103],[152,175],[175,148],[148,152],[119,118],[118,101],[101,119],[74,73],[73,40],[40,74],[107,9],[9,108],[108,107],[49,48],[48,131],[131,49],[32,194],[194,211],[211,32],[184,74],[74,185],[185,184],[191,80],[80,183],[183,191],[185,40],[40,186],[186,185],[119,230],[230,118],[118,119],[210,202],[202,214],[214,210],[84,83],[83,17],[17,84],[77,76],[76,146],[146,77],[161,160],[160,30],[30,161],[190,56],[56,173],[173,190],[182,106],[106,194],[194,182],[138,135],[135,192],[192,138],[129,203],[203,98],[98,129],[54,21],[21,68],[68,54],[5,51],[51,4],[4,5],[145,144],[144,23],[23,145],[90,77],[77,91],[91,90],[207,205],[205,187],[187,207],[83,201],[201,18],[18,83],[181,91],[91,182],[182,181],[180,90],[90,181],[181,180],[16,85],[85,17],[17,16],[205,206],[206,36],[36,205],[176,148],[148,140],[140,176],[165,92],[92,39],[39,165],[245,193],[193,244],[244,245],[27,159],[159,28],[28,27],[30,247],[247,161],[161,30],[174,236],[236,196],[196,174],[103,54],[54,104],[104,103],[55,193],[193,8],[8,55],[111,117],[117,31],[31,111],[221,189],[189,55],[55,221],[240,98],[98,99],[99,240],[142,126],[126,100],[100,142],[219,166],[166,218],[218,219],[112,155],[155,26],[26,112],[198,209],[209,131],[131,198],[169,135],[135,150],[150,169],[114,47],[47,217],[217,114],[224,223],[223,53],[53,224],[220,45],[45,134],[134,220],[32,211],[211,140],[140,32],[109,67],[67,108],[108,109],[146,43],[43,91],[91,146],[231,230],[230,120],[120,231],[113,226],[226,247],[247,113],[105,63],[63,52],[52,105],[241,238],[238,242],[242,241],[124,46],[46,156],[156,124],[95,78],[78,96],[96,95],[70,46],[46,63],[63,70],[116,143],[143,227],[227,116],[116,123],[123,111],[111,116],[1,44],[44,19],[19,1],[3,236],[236,51],[51,3],[207,216],[216,205],[205,207],[26,154],[154,22],[22,26],[165,39],[39,167],[167,165],[199,200],[200,208],[208,199],[101,36],[36,100],[100,101],[43,57],[57,202],[202,43],[242,20],[20,99],[99,242],[56,28],[28,157],[157,56],[124,35],[35,113],[113,124],[29,160],[160,27],[27,29],[211,204],[204,210],[210,211],[124,113],[113,46],[46,124],[106,43],[43,204],[204,106],[96,62],[62,77],[77,96],[227,137],[137,116],[116,227],[73,41],[41,72],[72,73],[36,203],[203,142],[142,36],[235,64],[64,240],[240,235],[48,49],[49,64],[64,48],[42,41],[41,74],[74,42],[214,212],[212,207],[207,214],[183,42],[42,184],[184,183],[210,169],[169,211],[211,210],[140,170],[170,176],[176,140],[104,105],[105,69],[69,104],[193,122],[122,168],[168,193],[50,123],[123,187],[187,50],[89,96],[96,90],[90,89],[66,65],[65,107],[107,66],[179,89],[89,180],[180,179],[119,101],[101,120],[120,119],[68,63],[63,104],[104,68],[234,93],[93,227],[227,234],[16,15],[15,85],[85,16],[209,129],[129,49],[49,209],[15,14],[14,86],[86,15],[107,55],[55,9],[9,107],[120,100],[100,121],[121,120],[153,145],[145,22],[22,153],[178,88],[88,179],[179,178],[197,6],[6,196],[196,197],[89,88],[88,96],[96,89],[135,138],[138,136],[136,135],[138,215],[215,172],[172,138],[218,115],[115,219],[219,218],[41,42],[42,81],[81,41],[5,195],[195,51],[51,5],[57,43],[43,61],[61,57],[208,171],[171,199],[199,208],[41,81],[81,38],[38,41],[224,53],[53,225],[225,224],[24,144],[144,110],[110,24],[105,52],[52,66],[66,105],[118,229],[229,117],[117,118],[227,34],[34,234],[234,227],[66,107],[107,69],[69,66],[10,109],[109,151],[151,10],[219,48],[48,235],[235,219],[183,62],[62,191],[191,183],[142,129],[129,126],[126,142],[116,111],[111,143],[143,116],[118,117],[117,50],[50,118],[223,222],[222,52],[52,223],[94,19],[19,141],[141,94],[222,221],[221,65],[65,222],[196,3],[3,197],[197,196],[45,220],[220,44],[44,45],[156,70],[70,139],[139,156],[188,122],[122,245],[245,188],[139,71],[71,162],[162,139],[149,170],[170,150],[150,149],[122,188],[188,196],[196,122],[206,216],[216,92],[92,206],[164,2],[2,167],[167,164],[242,141],[141,241],[241,242],[0,164],[164,37],[37,0],[11,72],[72,12],[12,11],[12,38],[38,13],[13,12],[70,63],[63,71],[71,70],[31,226],[226,111],[111,31],[36,101],[101,205],[205,36],[203,206],[206,165],[165,203],[126,209],[209,217],[217,126],[98,165],[165,97],[97,98],[237,220],[220,218],[218,237],[237,239],[239,241],[241,237],[210,214],[214,169],[169,210],[140,171],[171,32],[32,140],[241,125],[125,237],[237,241],[179,86],[86,178],[178,179],[180,85],[85,179],[179,180],[181,84],[84,180],[180,181],[182,83],[83,181],[181,182],[194,201],[201,182],[182,194],[177,137],[137,132],[132,177],[184,76],[76,183],[183,184],[185,61],[61,184],[184,185],[186,57],[57,185],[185,186],[216,212],[212,186],[186,216],[192,214],[214,187],[187,192],[139,34],[34,156],[156,139],[218,79],[79,237],[237,218],[147,123],[123,177],[177,147],[45,44],[44,4],[4,45],[208,201],[201,32],[32,208],[98,64],[64,129],[129,98],[192,213],[213,138],[138,192],[235,59],[59,219],[219,235],[141,242],[242,97],[97,141],[97,2],[2,141],[141,97],[240,75],[75,235],[235,240],[229,24],[24,228],[228,229],[31,25],[25,226],[226,31],[230,23],[23,229],[229,230],[231,22],[22,230],[230,231],[232,26],[26,231],[231,232],[233,112],[112,232],[232,233],[244,189],[189,243],[243,244],[189,221],[221,190],[190,189],[222,28],[28,221],[221,222],[223,27],[27,222],[222,223],[224,29],[29,223],[223,224],[225,30],[30,224],[224,225],[113,247],[247,225],[225,113],[99,60],[60,240],[240,99],[213,147],[147,215],[215,213],[60,20],[20,166],[166,60],[192,187],[187,213],[213,192],[243,112],[112,244],[244,243],[244,233],[233,245],[245,244],[245,128],[128,188],[188,245],[188,114],[114,174],[174,188],[134,131],[131,220],[220,134],[174,217],[217,236],[236,174],[236,198],[198,134],[134,236],[215,177],[177,58],[58,215],[156,143],[143,124],[124,156],[25,110],[110,7],[7,25],[31,228],[228,25],[25,31],[264,356],[356,368],[368,264],[0,11],[11,267],[267,0],[451,452],[452,349],[349,451],[267,302],[302,269],[269,267],[350,357],[357,277],[277,350],[350,452],[452,357],[357,350],[299,333],[333,297],[297,299],[396,175],[175,377],[377,396],[280,347],[347,330],[330,280],[269,303],[303,270],[270,269],[151,9],[9,337],[337,151],[344,278],[278,360],[360,344],[424,418],[418,431],[431,424],[270,304],[304,409],[409,270],[272,310],[310,407],[407,272],[322,270],[270,410],[410,322],[449,450],[450,347],[347,449],[432,422],[422,434],[434,432],[18,313],[313,17],[17,18],[291,306],[306,375],[375,291],[259,387],[387,260],[260,259],[424,335],[335,418],[418,424],[434,364],[364,416],[416,434],[391,423],[423,327],[327,391],[301,251],[251,298],[298,301],[275,281],[281,4],[4,275],[254,373],[373,253],[253,254],[375,307],[307,321],[321,375],[280,425],[425,411],[411,280],[200,421],[421,18],[18,200],[335,321],[321,406],[406,335],[321,320],[320,405],[405,321],[314,315],[315,17],[17,314],[423,426],[426,266],[266,423],[396,377],[377,369],[369,396],[270,322],[322,269],[269,270],[413,417],[417,464],[464,413],[385,386],[386,258],[258,385],[248,456],[456,419],[419,248],[298,284],[284,333],[333,298],[168,417],[417,8],[8,168],[448,346],[346,261],[261,448],[417,413],[413,285],[285,417],[326,327],[327,328],[328,326],[277,355],[355,329],[329,277],[309,392],[392,438],[438,309],[381,382],[382,256],[256,381],[279,429],[429,360],[360,279],[365,364],[364,379],[379,365],[355,277],[277,437],[437,355],[282,443],[443,283],[283,282],[281,275],[275,363],[363,281],[395,431],[431,369],[369,395],[299,297],[297,337],[337,299],[335,273],[273,321],[321,335],[348,450],[450,349],[349,348],[359,446],[446,467],[467,359],[283,293],[293,282],[282,283],[250,458],[458,462],[462,250],[300,276],[276,383],[383,300],[292,308],[308,325],[325,292],[283,276],[276,293],[293,283],[264,372],[372,447],[447,264],[346,352],[352,340],[340,346],[354,274],[274,19],[19,354],[363,456],[456,281],[281,363],[426,436],[436,425],[425,426],[380,381],[381,252],[252,380],[267,269],[269,393],[393,267],[421,200],[200,428],[428,421],[371,266],[266,329],[329,371],[432,287],[287,422],[422,432],[290,250],[250,328],[328,290],[385,258],[258,384],[384,385],[446,265],[265,342],[342,446],[386,387],[387,257],[257,386],[422,424],[424,430],[430,422],[445,342],[342,276],[276,445],[422,273],[273,424],[424,422],[306,292],[292,307],[307,306],[352,366],[366,345],[345,352],[268,271],[271,302],[302,268],[358,423],[423,371],[371,358],[327,294],[294,460],[460,327],[331,279],[279,294],[294,331],[303,271],[271,304],[304,303],[436,432],[432,427],[427,436],[304,272],[272,408],[408,304],[395,394],[394,431],[431,395],[378,395],[395,400],[400,378],[296,334],[334,299],[299,296],[6,351],[351,168],[168,6],[376,352],[352,411],[411,376],[307,325],[325,320],[320,307],[285,295],[295,336],[336,285],[320,319],[319,404],[404,320],[329,330],[330,349],[349,329],[334,293],[293,333],[333,334],[366,323],[323,447],[447,366],[316,15],[15,315],[315,316],[331,358],[358,279],[279,331],[317,14],[14,316],[316,317],[8,285],[285,9],[9,8],[277,329],[329,350],[350,277],[253,374],[374,252],[252,253],[319,318],[318,403],[403,319],[351,6],[6,419],[419,351],[324,318],[318,325],[325,324],[397,367],[367,365],[365,397],[288,435],[435,397],[397,288],[278,344],[344,439],[439,278],[310,272],[272,311],[311,310],[248,195],[195,281],[281,248],[375,273],[273,291],[291,375],[175,396],[396,199],[199,175],[312,311],[311,268],[268,312],[276,283],[283,445],[445,276],[390,373],[373,339],[339,390],[295,282],[282,296],[296,295],[448,449],[449,346],[346,448],[356,264],[264,454],[454,356],[337,336],[336,299],[299,337],[337,338],[338,151],[151,337],[294,278],[278,455],[455,294],[308,292],[292,415],[415,308],[429,358],[358,355],[355,429],[265,340],[340,372],[372,265],[352,346],[346,280],[280,352],[295,442],[442,282],[282,295],[354,19],[19,370],[370,354],[285,441],[441,295],[295,285],[195,248],[248,197],[197,195],[457,440],[440,274],[274,457],[301,300],[300,368],[368,301],[417,351],[351,465],[465,417],[251,301],[301,389],[389,251],[394,395],[395,379],[379,394],[399,412],[412,419],[419,399],[410,436],[436,322],[322,410],[326,2],[2,393],[393,326],[354,370],[370,461],[461,354],[393,164],[164,267],[267,393],[268,302],[302,12],[12,268],[312,268],[268,13],[13,312],[298,293],[293,301],[301,298],[265,446],[446,340],[340,265],[280,330],[330,425],[425,280],[322,426],[426,391],[391,322],[420,429],[429,437],[437,420],[393,391],[391,326],[326,393],[344,440],[440,438],[438,344],[458,459],[459,461],[461,458],[364,434],[434,394],[394,364],[428,396],[396,262],[262,428],[274,354],[354,457],[457,274],[317,316],[316,402],[402,317],[316,315],[315,403],[403,316],[315,314],[314,404],[404,315],[314,313],[313,405],[405,314],[313,421],[421,406],[406,313],[323,366],[366,361],[361,323],[292,306],[306,407],[407,292],[306,291],[291,408],[408,306],[291,287],[287,409],[409,291],[287,432],[432,410],[410,287],[427,434],[434,411],[411,427],[372,264],[264,383],[383,372],[459,309],[309,457],[457,459],[366,352],[352,401],[401,366],[1,274],[274,4],[4,1],[418,421],[421,262],[262,418],[331,294],[294,358],[358,331],[435,433],[433,367],[367,435],[392,289],[289,439],[439,392],[328,462],[462,326],[326,328],[94,2],[2,370],[370,94],[289,305],[305,455],[455,289],[339,254],[254,448],[448,339],[359,255],[255,446],[446,359],[254,253],[253,449],[449,254],[253,252],[252,450],[450,253],[252,256],[256,451],[451,252],[256,341],[341,452],[452,256],[414,413],[413,463],[463,414],[286,441],[441,414],[414,286],[286,258],[258,441],[441,286],[258,257],[257,442],[442,258],[257,259],[259,443],[443,257],[259,260],[260,444],[444,259],[260,467],[467,445],[445,260],[309,459],[459,250],[250,309],[305,289],[289,290],[290,305],[305,290],[290,460],[460,305],[401,376],[376,435],[435,401],[309,250],[250,392],[392,309],[376,411],[411,433],[433,376],[453,341],[341,464],[464,453],[357,453],[453,465],[465,357],[343,357],[357,412],[412,343],[437,343],[343,399],[399,437],[344,360],[360,440],[440,344],[420,437],[437,456],[456,420],[360,420],[420,363],[363,360],[361,401],[401,288],[288,361],[265,372],[372,353],[353,265],[390,339],[339,249],[249,390],[339,448],[448,255],[255,339]);pt=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect",!1),this.m={faceLandmarks:[],faceBlendshapes:[],facialTransformationMatrixes:[]},this.outputFacialTransformationMatrixes=this.outputFaceBlendshapes=!1,Ne(t=this.i=new Py,0,1,e=new Gt),this.C=new Iy,Ne(this.i,0,3,this.C),this.v=new Ad,Ne(this.i,0,2,this.v),gs(this.v,4,1),Ue(this.v,2,.5),Ue(this.C,2,.5),Ue(this.i,4,.5)}D(){return"FaceLandmarker"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return"numFaces"in t&&gs(this.v,4,t.numFaces??1),"minFaceDetectionConfidence"in t&&Ue(this.v,2,t.minFaceDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.i,4,t.minTrackingConfidence??.5),"minFacePresenceConfidence"in t&&Ue(this.C,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"outputFacialTransformationMatrixes"in t&&(this.outputFacialTransformationMatrixes=!!t.outputFacialTransformationMatrixes),this.l(t)}H(t,e){return H1(this),Yi(this,t,e),this.m}I(t,e,n){return H1(this),ys(this,t,n,e),this.m}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect"),_t(t,"face_landmarks");var e=new gi;xs(e,Dw,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.face_landmarker.FaceLandmarkerGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"NORM_LANDMARKS:face_landmarks"),n.A(e),Ni(t,n),this.h.attachProtoVectorListener("face_landmarks",(i,s)=>{for(let r of i)i=El(r),this.m.faceLandmarks.push(Al(i));be(this,s)}),this.h.attachEmptyPacketListener("face_landmarks",i=>{be(this,i)}),this.outputFaceBlendshapes&&(_t(t,"blendshapes"),ht(n,"BLENDSHAPES:blendshapes"),this.h.attachProtoVectorListener("blendshapes",(i,s)=>{if(this.outputFaceBlendshapes)for(let r of i)i=Ed(r),this.m.faceBlendshapes.push(Sg(i.h()??[]));be(this,s)}),this.h.attachEmptyPacketListener("blendshapes",i=>{be(this,i)})),this.outputFacialTransformationMatrixes&&(_t(t,"face_geometry"),ht(n,"FACE_GEOMETRY:face_geometry"),this.h.attachProtoVectorListener("face_geometry",(i,s)=>{if(this.outputFacialTransformationMatrixes)for(let r of i)(i=mt(i=Nw(r),Mw,2))&&this.m.facialTransformationMatrixes.push({rows:Pi(i,1)??0??0,columns:Pi(i,2)??0??0,data:pa(i,3,fi).slice()??[]});be(this,s)}),this.h.attachEmptyPacketListener("face_geometry",i=>{be(this,i)})),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};pt.prototype.detectForVideo=pt.prototype.I,pt.prototype.detect=pt.prototype.H,pt.prototype.setOptions=pt.prototype.A,pt.createFromModelPath=function(t,e){return ft(pt,t,{baseOptions:{modelAssetPath:e}})},pt.createFromModelBuffer=function(t,e){return ft(pt,t,{baseOptions:{modelAssetBuffer:e}})},pt.createFromOptions=function(t,e){return ft(pt,t,e)},pt.FACE_LANDMARKS_LIPS=wg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LIPS",pt.FACE_LANDMARKS_LIPS),pt.FACE_LANDMARKS_LEFT_EYE=Rg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYE",pt.FACE_LANDMARKS_LEFT_EYE),pt.FACE_LANDMARKS_LEFT_EYEBROW=Cg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",pt.FACE_LANDMARKS_LEFT_EYEBROW),pt.FACE_LANDMARKS_LEFT_IRIS=oS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_LEFT_IRIS",pt.FACE_LANDMARKS_LEFT_IRIS),pt.FACE_LANDMARKS_RIGHT_EYE=Ig,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYE",pt.FACE_LANDMARKS_RIGHT_EYE),pt.FACE_LANDMARKS_RIGHT_EYEBROW=Pg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",pt.FACE_LANDMARKS_RIGHT_EYEBROW),pt.FACE_LANDMARKS_RIGHT_IRIS=cS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_RIGHT_IRIS",pt.FACE_LANDMARKS_RIGHT_IRIS),pt.FACE_LANDMARKS_FACE_OVAL=Lg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_FACE_OVAL",pt.FACE_LANDMARKS_FACE_OVAL),pt.FACE_LANDMARKS_CONTOURS=lS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_CONTOURS",pt.FACE_LANDMARKS_CONTOURS),pt.FACE_LANDMARKS_TESSELATION=hS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$face_landmarker$face_landmarker.FaceLandmarker.FACE_LANDMARKS_TESSELATION",pt.FACE_LANDMARKS_TESSELATION);Ng=qi([0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[0,17],[17,18],[18,19],[19,20]);ni=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect",!1),this.gestures=[],this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ne(t=this.m=new Dy,0,1,e=new Gt),this.v=new _g,Ne(this.m,0,2,this.v),this.G=new gg,Ne(this.v,0,3,this.G),this.C=new Ny,Ne(this.v,0,2,this.C),this.i=new Uw,Ne(this.m,0,3,this.i),Ue(this.C,2,.5),Ue(this.v,4,.5),Ue(this.G,2,.5)}D(){return"GestureRecognizer"}get baseOptions(){return mt(this.m,Gt,1)}set baseOptions(t){Ne(this.m,0,1,t)}A(t){if(gs(this.C,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ue(this.C,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.v,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ue(this.G,2,t.minHandPresenceConfidence??.5),t.cannedGesturesClassifierOptions){var e=new Co,n=e,i=Mm(t.cannedGesturesClassifierOptions,mt(this.i,Co,3)?.l());Ne(n,0,2,i),Ne(this.i,0,3,e)}else t.cannedGesturesClassifierOptions===void 0&&mt(this.i,Co,3)?.h();return t.customGesturesClassifierOptions?(Ne(n=e=new Co,0,2,i=Mm(t.customGesturesClassifierOptions,mt(this.i,Co,4)?.l())),Ne(this.i,0,4,e)):t.customGesturesClassifierOptions===void 0&&mt(this.i,Co,4)?.h(),this.l(t)}Xa(t,e){return V1(this),Yi(this,t,e),W1(this)}Ya(t,e,n){return V1(this),ys(this,t,n,e),W1(this)}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect"),_t(t,"hand_gestures"),_t(t,"hand_landmarks"),_t(t,"world_hand_landmarks"),_t(t,"handedness");var e=new gi;xs(e,Fw,this.m);var n=new ai;pi(n,2,"mediapipe.tasks.vision.gesture_recognizer.GestureRecognizerGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"HAND_GESTURES:hand_gestures"),ht(n,"LANDMARKS:hand_landmarks"),ht(n,"WORLD_LANDMARKS:world_hand_landmarks"),ht(n,"HANDEDNESS:handedness"),n.A(e),Ni(t,n),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=El(r),this.landmarks.push(Al(i));be(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{be(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=Lo(r),this.worldLandmarks.push(No(i));be(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{be(this,i)}),this.h.attachProtoVectorListener("hand_gestures",(i,s)=>{this.gestures.push(...X1(i,!1)),be(this,s)}),this.h.attachEmptyPacketListener("hand_gestures",i=>{be(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{this.handedness.push(...X1(i)),be(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ni.prototype.recognizeForVideo=ni.prototype.Ya,ni.prototype.recognize=ni.prototype.Xa,ni.prototype.setOptions=ni.prototype.A,ni.createFromModelPath=function(t,e){return ft(ni,t,{baseOptions:{modelAssetPath:e}})},ni.createFromModelBuffer=function(t,e){return ft(ni,t,{baseOptions:{modelAssetBuffer:e}})},ni.createFromOptions=function(t,e){return ft(ni,t,e)},ni.HAND_CONNECTIONS=Ng,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$gesture_recognizer$gesture_recognizer.GestureRecognizer.HAND_CONNECTIONS",ni.HAND_CONNECTIONS);wn=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Ne(t=this.i=new _g,0,1,e=new Gt),this.v=new gg,Ne(this.i,0,3,this.v),this.m=new Ny,Ne(this.i,0,2,this.m),gs(this.m,3,1),Ue(this.m,2,.5),Ue(this.v,2,.5),Ue(this.i,4,.5)}D(){return"HandLandmarker"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return"numHands"in t&&gs(this.m,3,t.numHands??1),"minHandDetectionConfidence"in t&&Ue(this.m,2,t.minHandDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.i,4,t.minTrackingConfidence??.5),"minHandPresenceConfidence"in t&&Ue(this.v,2,t.minHandPresenceConfidence??.5),this.l(t)}H(t,e){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],Yi(this,t,e),q1(this)}I(t,e,n){return this.landmarks=[],this.worldLandmarks=[],this.handedness=[],ys(this,t,n,e),q1(this)}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect"),_t(t,"hand_landmarks"),_t(t,"world_hand_landmarks"),_t(t,"handedness");var e=new gi;xs(e,Ow,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.hand_landmarker.HandLandmarkerGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"LANDMARKS:hand_landmarks"),ht(n,"WORLD_LANDMARKS:world_hand_landmarks"),ht(n,"HANDEDNESS:handedness"),n.A(e),Ni(t,n),this.h.attachProtoVectorListener("hand_landmarks",(i,s)=>{for(let r of i)i=El(r),this.landmarks.push(Al(i));be(this,s)}),this.h.attachEmptyPacketListener("hand_landmarks",i=>{be(this,i)}),this.h.attachProtoVectorListener("world_hand_landmarks",(i,s)=>{for(let r of i)i=Lo(r),this.worldLandmarks.push(No(i));be(this,s)}),this.h.attachEmptyPacketListener("world_hand_landmarks",i=>{be(this,i)}),this.h.attachProtoVectorListener("handedness",(i,s)=>{var r=this.handedness,a=r.push,o=[];for(let c of i){i=Ed(c);let l=[];for(let h of i.h())l.push({score:Wn(h,2)??0,index:Pi(h,1)??0??-1,categoryName:Rn(Ut(h,3))??""??"",displayName:Rn(Ut(h,4))??""??""});o.push(l)}a.call(r,...o),be(this,s)}),this.h.attachEmptyPacketListener("handedness",i=>{be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};wn.prototype.detectForVideo=wn.prototype.I,wn.prototype.detect=wn.prototype.H,wn.prototype.setOptions=wn.prototype.A,wn.createFromModelPath=function(t,e){return ft(wn,t,{baseOptions:{modelAssetPath:e}})},wn.createFromModelBuffer=function(t,e){return ft(wn,t,{baseOptions:{modelAssetBuffer:e}})},wn.createFromOptions=function(t,e){return ft(wn,t,e)},wn.HAND_CONNECTIONS=Ng,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$hand_landmarker$hand_landmarker.HandLandmarker.HAND_CONNECTIONS",wn.HAND_CONNECTIONS);uS=qi([0,1],[1,2],[2,3],[3,7],[0,4],[4,5],[5,6],[6,8],[9,10],[11,12],[11,13],[13,15],[15,17],[15,19],[15,21],[17,19],[12,14],[14,16],[16,18],[16,20],[16,22],[18,20],[11,23],[12,24],[23,24],[23,25],[24,26],[25,27],[26,28],[27,29],[28,30],[29,31],[30,32],[27,31],[28,32]);ot=class extends mi{constructor(t,e){super(new $i(t,e),"input_frames_image",null,!1),this.i={faceLandmarks:[],faceBlendshapes:[],poseLandmarks:[],poseWorldLandmarks:[],poseSegmentationMasks:[],leftHandLandmarks:[],leftHandWorldLandmarks:[],rightHandLandmarks:[],rightHandWorldLandmarks:[]},this.outputPoseSegmentationMasks=this.outputFaceBlendshapes=!1,Ne(t=this.m=new ky,0,1,e=new Gt),this.Z=new gg,Ne(this.m,0,2,this.Z),this.Aa=new Bw,Ne(this.m,0,3,this.Aa),this.v=new Ad,Ne(this.m,0,4,this.v),this.P=new Iy,Ne(this.m,0,5,this.P),this.C=new Oy,Ne(this.m,0,6,this.C),this.aa=new By,Ne(this.m,0,7,this.aa),Ue(this.v,2,.5),Ue(this.v,3,.3),Ue(this.P,2,.5),Ue(this.C,2,.5),Ue(this.C,3,.3),Ue(this.aa,2,.5),Ue(this.Z,2,.5)}D(){return"HolisticLandmarker"}get baseOptions(){return mt(this.m,Gt,1)}set baseOptions(t){Ne(this.m,0,1,t)}A(t){return"minFaceDetectionConfidence"in t&&Ue(this.v,2,t.minFaceDetectionConfidence??.5),"minFaceSuppressionThreshold"in t&&Ue(this.v,3,t.minFaceSuppressionThreshold??.3),"minFacePresenceConfidence"in t&&Ue(this.P,2,t.minFacePresenceConfidence??.5),"outputFaceBlendshapes"in t&&(this.outputFaceBlendshapes=!!t.outputFaceBlendshapes),"minPoseDetectionConfidence"in t&&Ue(this.C,2,t.minPoseDetectionConfidence??.5),"minPoseSuppressionThreshold"in t&&Ue(this.C,3,t.minPoseSuppressionThreshold??.3),"minPosePresenceConfidence"in t&&Ue(this.aa,2,t.minPosePresenceConfidence??.5),"outputPoseSegmentationMasks"in t&&(this.outputPoseSegmentationMasks=!!t.outputPoseSegmentationMasks),"minHandLandmarksConfidence"in t&&Ue(this.Z,2,t.minHandLandmarksConfidence??.5),this.l(t)}H(t,e,n){var i=typeof e!="function"?e:{};return this.G=typeof e=="function"?e:n,$1(this),Yi(this,t,i),Y1(this)}I(t,e,n,i){var s=typeof n!="function"?n:{};return this.G=typeof n=="function"?n:i,$1(this),ys(this,t,s,e),Y1(this)}u(){var t=new _i;zt(t,"input_frames_image"),_t(t,"pose_landmarks"),_t(t,"pose_world_landmarks"),_t(t,"face_landmarks"),_t(t,"left_hand_landmarks"),_t(t,"left_hand_world_landmarks"),_t(t,"right_hand_landmarks"),_t(t,"right_hand_world_landmarks");var e=new gi,n=new r1;pi(n,1,"type.googleapis.com/mediapipe.tasks.vision.holistic_landmarker.proto.HolisticLandmarkerGraphOptions"),(function(s,r){if(r!=null)if(Array.isArray(r))Ke(s,2,fd(r,0,dl));else{if(!(typeof r=="string"||r instanceof fs||Um(r)))throw Error("invalid value in Any.value field: "+r+" expected a ByteString, a base64 encoded string, a Uint8Array or a jspb array");vl(s,2,ld(r,!1),ya())}})(n,this.m.h());var i=new ai;pi(i,2,"mediapipe.tasks.vision.holistic_landmarker.HolisticLandmarkerGraph"),fl(i,8,r1,n),Ft(i,"IMAGE:input_frames_image"),ht(i,"POSE_LANDMARKS:pose_landmarks"),ht(i,"POSE_WORLD_LANDMARKS:pose_world_landmarks"),ht(i,"FACE_LANDMARKS:face_landmarks"),ht(i,"LEFT_HAND_LANDMARKS:left_hand_landmarks"),ht(i,"LEFT_HAND_WORLD_LANDMARKS:left_hand_world_landmarks"),ht(i,"RIGHT_HAND_LANDMARKS:right_hand_landmarks"),ht(i,"RIGHT_HAND_WORLD_LANDMARKS:right_hand_world_landmarks"),i.A(e),Ni(t,i),wd(this,t),this.h.attachProtoListener("pose_landmarks",(s,r)=>{Du(s,this.i.poseLandmarks),be(this,r)}),this.h.attachEmptyPacketListener("pose_landmarks",s=>{be(this,s)}),this.h.attachProtoListener("pose_world_landmarks",(s,r)=>{var a=this.i.poseWorldLandmarks;s=Lo(s),a.push(No(s)),be(this,r)}),this.h.attachEmptyPacketListener("pose_world_landmarks",s=>{be(this,s)}),this.outputPoseSegmentationMasks&&(ht(i,"POSE_SEGMENTATION_MASK:pose_segmentation_mask"),Ho(this,"pose_segmentation_mask"),this.h.ha("pose_segmentation_mask",(s,r)=>{this.i.poseSegmentationMasks=[Xo(this,s,!0,!this.G)],be(this,r)}),this.h.attachEmptyPacketListener("pose_segmentation_mask",s=>{this.i.poseSegmentationMasks=[],be(this,s)})),this.h.attachProtoListener("face_landmarks",(s,r)=>{Du(s,this.i.faceLandmarks),be(this,r)}),this.h.attachEmptyPacketListener("face_landmarks",s=>{be(this,s)}),this.outputFaceBlendshapes&&(_t(t,"extra_blendshapes"),ht(i,"FACE_BLENDSHAPES:extra_blendshapes"),this.h.attachProtoListener("extra_blendshapes",(s,r)=>{var a=this.i.faceBlendshapes;this.outputFaceBlendshapes&&(s=Ed(s),a.push(Sg(s.h()??[]))),be(this,r)}),this.h.attachEmptyPacketListener("extra_blendshapes",s=>{be(this,s)})),this.h.attachProtoListener("left_hand_landmarks",(s,r)=>{Du(s,this.i.leftHandLandmarks),be(this,r)}),this.h.attachEmptyPacketListener("left_hand_landmarks",s=>{be(this,s)}),this.h.attachProtoListener("left_hand_world_landmarks",(s,r)=>{var a=this.i.leftHandWorldLandmarks;s=Lo(s),a.push(No(s)),be(this,r)}),this.h.attachEmptyPacketListener("left_hand_world_landmarks",s=>{be(this,s)}),this.h.attachProtoListener("right_hand_landmarks",(s,r)=>{Du(s,this.i.rightHandLandmarks),be(this,r)}),this.h.attachEmptyPacketListener("right_hand_landmarks",s=>{be(this,s)}),this.h.attachProtoListener("right_hand_world_landmarks",(s,r)=>{var a=this.i.rightHandWorldLandmarks;s=Lo(s),a.push(No(s)),be(this,r)}),this.h.attachEmptyPacketListener("right_hand_world_landmarks",s=>{be(this,s)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ot.prototype.detectForVideo=ot.prototype.I,ot.prototype.detect=ot.prototype.H,ot.prototype.setOptions=ot.prototype.A,ot.createFromModelPath=function(t,e){return ft(ot,t,{baseOptions:{modelAssetPath:e}})},ot.createFromModelBuffer=function(t,e){return ft(ot,t,{baseOptions:{modelAssetBuffer:e}})},ot.createFromOptions=function(t,e){return ft(ot,t,e)},ot.HAND_CONNECTIONS=Ng,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.HAND_CONNECTIONS",ot.HAND_CONNECTIONS),ot.POSE_CONNECTIONS=uS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.POSE_CONNECTIONS",ot.POSE_CONNECTIONS),ot.FACE_LANDMARKS_LIPS=wg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LIPS",ot.FACE_LANDMARKS_LIPS),ot.FACE_LANDMARKS_LEFT_EYE=Rg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYE",ot.FACE_LANDMARKS_LEFT_EYE),ot.FACE_LANDMARKS_LEFT_EYEBROW=Cg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_EYEBROW",ot.FACE_LANDMARKS_LEFT_EYEBROW),ot.FACE_LANDMARKS_LEFT_IRIS=oS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_LEFT_IRIS",ot.FACE_LANDMARKS_LEFT_IRIS),ot.FACE_LANDMARKS_RIGHT_EYE=Ig,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYE",ot.FACE_LANDMARKS_RIGHT_EYE),ot.FACE_LANDMARKS_RIGHT_EYEBROW=Pg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_EYEBROW",ot.FACE_LANDMARKS_RIGHT_EYEBROW),ot.FACE_LANDMARKS_RIGHT_IRIS=cS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_RIGHT_IRIS",ot.FACE_LANDMARKS_RIGHT_IRIS),ot.FACE_LANDMARKS_FACE_OVAL=Lg,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_FACE_OVAL",ot.FACE_LANDMARKS_FACE_OVAL),ot.FACE_LANDMARKS_CONTOURS=lS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_CONTOURS",ot.FACE_LANDMARKS_CONTOURS),ot.FACE_LANDMARKS_TESSELATION=hS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$holistic_landmarker$holistic_landmarker.HolisticLandmarker.FACE_LANDMARKS_TESSELATION",ot.FACE_LANDMARKS_TESSELATION);Ci=class extends mi{constructor(t,e){super(new $i(t,e),"input_image","norm_rect",!0),this.m={classifications:[]},Ne(t=this.i=new zy,0,1,e=new Gt)}D(){return"ImageClassifier"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return Ne(this.i,0,2,Mm(t,mt(this.i,pg,2))),this.l(t)}Ga(t,e){return this.m={classifications:[]},Yi(this,t,e),this.m}Ha(t,e,n){return this.m={classifications:[]},ys(this,t,n,e),this.m}u(){var t=new _i;zt(t,"input_image"),zt(t,"norm_rect"),_t(t,"classifications");var e=new gi;xs(e,kw,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.image_classifier.ImageClassifierGraph"),Ft(n,"IMAGE:input_image"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"CLASSIFICATIONS:classifications"),n.A(e),Ni(t,n),this.h.attachProtoListener("classifications",(i,s)=>{this.m=Kw(Ew(i)),be(this,s)}),this.h.attachEmptyPacketListener("classifications",i=>{be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Ci.prototype.classifyForVideo=Ci.prototype.Ha,Ci.prototype.classify=Ci.prototype.Ga,Ci.prototype.setOptions=Ci.prototype.A,Ci.createFromModelPath=function(t,e){return ft(Ci,t,{baseOptions:{modelAssetPath:e}})},Ci.createFromModelBuffer=function(t,e){return ft(Ci,t,{baseOptions:{modelAssetBuffer:e}})},Ci.createFromOptions=function(t,e){return ft(Ci,t,e)};di=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect",!0),this.i=new Gy,this.embeddings={embeddings:[]},Ne(t=this.i,0,1,e=new Gt)}D(){return"ImageEmbedder"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){var e=this.i,n=mt(this.i,f1,2);if(n=n?n.clone():new f1,t.l2Normalize!==void 0){var i=t.l2Normalize;Ke(n,1,i==null?i:Xu(i))}else"l2Normalize"in t&&Ke(n,1);return t.quantize!==void 0?Ke(n,2,(i=t.quantize)==null?i:Xu(i)):"quantize"in t&&Ke(n,2),Ne(e,0,2,n),this.l(t)}Na(t,e){return Yi(this,t,e),this.embeddings}Oa(t,e,n){return ys(this,t,n,e),this.embeddings}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect"),_t(t,"embeddings_out");var e=new gi;xs(e,zw,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.image_embedder.ImageEmbedderGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"EMBEDDINGS:embeddings_out"),n.A(e),Ni(t,n),this.h.attachProtoListener("embeddings_out",(i,s)=>{i=Cw(i),this.embeddings=(function(r){return{embeddings:Aa(r,Rw,1).map(a=>{var o={headIndex:Pi(a,3)??0??-1,headName:Rn(Ut(a,4))??""??""};if(wv(a,1,ku))a=pa(a=pm(a,Aw,1,ku),1,fi),o.floatEmbedding=a.slice();else{let c=new Uint8Array(0);o.quantizedEmbedding=pm(a,ww,2,ku)?.h()?.i()??c}return o}),timestampMs:Yy(Ut(r,2,void 0,$u)??Ev)}})(i),be(this,s)}),this.h.attachEmptyPacketListener("embeddings_out",i=>{be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};di.cosineSimilarity=function(t,e){if(t.floatEmbedding&&e.floatEmbedding)t=x1(t.floatEmbedding,e.floatEmbedding);else{if(!t.quantizedEmbedding||!e.quantizedEmbedding)throw Error("Cannot compute cosine similarity between quantized and float embeddings.");t=x1(_1(t.quantizedEmbedding),_1(e.quantizedEmbedding))}return t},di.prototype.embedForVideo=di.prototype.Oa,di.prototype.embed=di.prototype.Na,di.prototype.setOptions=di.prototype.A,di.createFromModelPath=function(t,e){return ft(di,t,{baseOptions:{modelAssetPath:e}})},di.createFromModelBuffer=function(t,e){return ft(di,t,{baseOptions:{modelAssetBuffer:e}})},di.createFromOptions=function(t,e){return ft(di,t,e)};Lm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};Lm.prototype.close=Lm.prototype.close;ii=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect",!1),this.v=[],this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new yg,this.C=new Hy,Ne(this.i,0,3,this.C),Ne(t=this.i,0,1,e=new Gt)}D(){return"ImageSegmenter"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return t.displayNamesLocale!==void 0?Ke(this.i,2,$s(t.displayNamesLocale)):"displayNamesLocale"in t&&Ke(this.i,2),"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}M(){fR(this)}segment(t,e,n){var i=typeof e!="function"?e:{};return this.m=typeof e=="function"?e:n,K1(this),Yi(this,t,i),j1(this)}cb(t,e,n,i){var s=typeof n!="function"?n:{};return this.m=typeof n=="function"?n:i,K1(this),ys(this,t,s,e),j1(this)}Ra(){return this.v}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect");var e=new gi;xs(e,Wy,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.image_segmenter.ImageSegmenterGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect"),n.A(e),Ni(t,n),wd(this,t),this.outputConfidenceMasks&&(_t(t,"confidence_masks"),ht(n,"CONFIDENCE_MASKS:confidence_masks"),Ho(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Xo(this,r,!0,!this.m)),be(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],be(this,i)})),this.outputCategoryMask&&(_t(t,"category_mask"),ht(n,"CATEGORY_MASK:category_mask"),Ho(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=Xo(this,i,!1,!this.m),be(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,be(this,i)})),_t(t,"quality_scores"),ht(n,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,be(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ii.prototype.getLabels=ii.prototype.Ra,ii.prototype.segmentForVideo=ii.prototype.cb,ii.prototype.segment=ii.prototype.segment,ii.prototype.setOptions=ii.prototype.A,ii.createFromModelPath=function(t,e){return ft(ii,t,{baseOptions:{modelAssetPath:e}})},ii.createFromModelBuffer=function(t,e){return ft(ii,t,{baseOptions:{modelAssetBuffer:e}})},ii.createFromOptions=function(t,e){return ft(ii,t,e)};pR={0:0,1:1,2:2,3:3};si=class extends od{constructor(t,e){super(new oR(t,e)),this.v=new Ra,this.delegate="CPU",this.i=0,this.baseOptions=new Gt,this.C=this.m=0}D(){return"InteractiveSegmenter"}get j(){return this.h.j}A(t){return this.delegate=t.baseOptions?.delegate??"CPU",super.l(t)}eb(t){if(this.i===0)throw Error("Segmenter is not initialized.");var e;if(this.m!==0&&(this.j._free(this.m),this.m=0),!(e=typeof ImageData<"u"&&t instanceof ImageData))if(typeof t!="object"||t===null)e=!1;else{e=t.data;var n=t.width,i=t.height;e=Number.isInteger(n)&&n>0&&Number.isInteger(i)&&i>0&&(e instanceof Uint8ClampedArray||e instanceof Uint8Array)}if(e)e=t.width,n=t.height,t=t.data;else{if([e,n]=bg(t),typeof OffscreenCanvas<"u")i=new OffscreenCanvas(e,n);else{if(typeof document>"u")throw Error("Canvas is not supported in this environment.");i=document.createElement("canvas")}if(i.width=e,i.height=n,!(i=i.getContext("2d")))throw Error("Canvas 2D context is not supported in this environment.");i.drawImage(t,0,0),t=i.getImageData(0,0,e,n).data}if(!t)throw Error("Unsupported image source or failed to extract image pixels.");i=(function({Wa:r,width:a,height:o}){if(a<=0||o<=0)throw Error(`Invalid image dimensions: ${a}x${o}. Dimensions must be positive.`);if(r%(a*o)!==0)throw Error(`Invalid image dimensions or pixel data length. Pixel data length ${r} is not a multiple of the number of pixels (${a*o}).`);if((r/=a*o)!==4&&r!==3&&r!==1)throw Error(`Invalid image dimensions or pixel data length. Calculated channels: ${r}. Expected 1, 3, or 4.`);return r})({Wa:t.length,width:e,height:n});var s=this.j._malloc(t.length);if(this.j.HEAPU8.set(t,s),this.m=s,!this.j._interactive_segmenter_set_image(this.i,s,e,n,i))throw Error("Failed to set image on native engine.")}segment(t){if(this.i===0)throw Error("Segmenter is not initialized.");var e=(function(l){l=l.map(({isCompleted:u,brushMode:d,point:f})=>{d=pR[d]??0,f=f.map(({x:v,y:m})=>{var p=new Hw;return Io(p,1,v),Io(p,2,m),p});var g=new Vw;return mm(g,u),vl(g,1,Ks(d),0),fm(g,2,f),g});var h=new Ww;return fm(h,1,l),Xw(h)})(t);t=this.j._malloc(e.length),this.j.HEAPU8.set(e,t);var n=this.j._malloc(12),i=n+4,s=n+8,r=0,a=this.C++;try{if(this.o)if(this.delegate==="GPU"){var o=this.o;++o.h.U,o.i.set(a,performance.now())}else{var c=this.o;++c.h.R,c.i.set(a,performance.now())}if((r=this.j._interactive_segmenter_segment(this.i,t,e.length,n,i,s))===0)throw Error("Segmentation failed.");this.o?.za(a);let l=this.j.HEAPU32[n/4],h=this.j.HEAPU32[i/4],u=new Float32Array(this.j.HEAPU8.buffer,r,this.j.HEAPU32[s/4]/4),d=new Float32Array(u);if(o=l*h,(d instanceof Uint8Array||d instanceof Float32Array)&&d.length!==o)throw Error("Unsupported channel count: "+d.length/o);return new Qt([d],!0,!1,this.h.j.canvas??void 0,this.v,l,h)}finally{t!==0&&this.j._free(t),n!==0&&this.j._free(n),r!==0&&this.j._free(r)}}u(){this.i!==0&&(this.o?.xa(),this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0);var t=new id;if(this.delegate==="GPU"){var e=new gy;Vi(t,2,Ys,e)}else gs(e=new mw,1,4),Vi(t,1,Ys,e);if(Ne(this.baseOptions,0,3,t),t=Pw(this.baseOptions),e=this.j._malloc(t.length),this.j.HEAPU8.set(t,e),this.i=this.j._interactive_segmenter_create(e,t.length),this.j._free(e),this.i===0)throw Error("Failed to create native InteractiveSegmenter engine.");this.o?.ya()}close(){this.i!==0&&(this.j._interactive_segmenter_close(this.i),this.i=0),this.m!==0&&(this.j._free(this.m),this.m=0),this.v.close(),super.close()}};si.prototype.close=si.prototype.close,si.prototype.segment=si.prototype.segment,si.prototype.setImage=si.prototype.eb,si.prototype.setOptions=si.prototype.A,si.createFromModelPath=function(t,e){return zu(si,rm(),t,{baseOptions:{modelAssetPath:e}})},si.createFromModelBuffer=function(t,e){return zu(si,rm(),t,{baseOptions:{modelAssetBuffer:e}})},si.createFromOptions=function(t,e){var n=e.canvas??rm();return zu(si,n,t,e)};Nm=class{constructor(t,e,n){this.confidenceMasks=t,this.categoryMask=e,this.qualityScores=n}close(){this.confidenceMasks?.forEach(t=>{t.close()}),this.categoryMask?.close()}};Nm.prototype.close=Nm.prototype.close;hs=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect_in",!1),this.outputCategoryMask=!1,this.outputConfidenceMasks=!0,this.i=new yg,this.v=new Hy,Ne(this.i,0,3,this.v),Ne(t=this.i,0,1,e=new Gt)}D(){return"InteractiveSegmenterLegacy"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return"outputCategoryMask"in t&&(this.outputCategoryMask=t.outputCategoryMask??!1),"outputConfidenceMasks"in t&&(this.outputConfidenceMasks=t.outputConfidenceMasks??!0),super.l(t)}segment(t,e,n,i){var s=typeof n!="function"?n:{};if(this.m=typeof n=="function"?n:i,this.qualityScores=this.categoryMask=this.confidenceMasks=void 0,n=this.J+1,i=new Xy,e.keypoint&&e.scribble)throw Error("Cannot provide both keypoint and scribble.");if(e.keypoint){var r=new nm;mm(r,!0),Io(r,1,e.keypoint.x),Io(r,2,e.keypoint.y),Vi(i,1,Sm,r)}else{if(!e.scribble)throw Error("Must provide either a keypoint or a scribble.");{let o=new qw;for(r of e.scribble)mm(e=new nm,!0),Io(e,1,r.x),Io(e,2,r.y),fl(o,1,nm,e);Vi(i,2,Sm,o)}}this.h.addProtoToStream(i.h(),"mediapipe.tasks.vision.interactive_segmenter_legacy.proto.RegionOfInterest","roi_in",n),Yi(this,t,s);e:{try{let o=new Nm(this.confidenceMasks,this.categoryMask,this.qualityScores);if(!this.m){var a=o;break e}this.m(o)}finally{Rd(this)}a=void 0}return a}u(){var t=new _i;zt(t,"image_in"),zt(t,"roi_in"),zt(t,"norm_rect_in");var e=new gi;xs(e,Wy,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.interactive_segmenter_legacy.InteractiveSegmenterLegacyGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"ROI:roi_in"),Ft(n,"NORM_RECT:norm_rect_in"),n.A(e),Ni(t,n),wd(this,t),this.outputConfidenceMasks&&(_t(t,"confidence_masks"),ht(n,"CONFIDENCE_MASKS:confidence_masks"),Ho(this,"confidence_masks"),this.h.ia("confidence_masks",(i,s)=>{this.confidenceMasks=i.map(r=>Xo(this,r,!0,!this.m)),be(this,s)}),this.h.attachEmptyPacketListener("confidence_masks",i=>{this.confidenceMasks=[],be(this,i)})),this.outputCategoryMask&&(_t(t,"category_mask"),ht(n,"CATEGORY_MASK:category_mask"),Ho(this,"category_mask"),this.h.ha("category_mask",(i,s)=>{this.categoryMask=Xo(this,i,!1,!this.m),be(this,s)}),this.h.attachEmptyPacketListener("category_mask",i=>{this.categoryMask=void 0,be(this,i)})),_t(t,"quality_scores"),ht(n,"QUALITY_SCORES:quality_scores"),this.h.attachFloatVectorListener("quality_scores",(i,s)=>{this.qualityScores=i,be(this,s)}),this.h.attachEmptyPacketListener("quality_scores",i=>{this.categoryMask=void 0,be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};hs.prototype.segment=hs.prototype.segment,hs.prototype.setOptions=hs.prototype.A,hs.createFromModelPath=function(t,e){return ft(hs,t,{baseOptions:{modelAssetPath:e}})},hs.createFromModelBuffer=function(t,e){return ft(hs,t,{baseOptions:{modelAssetBuffer:e}})},hs.createFromOptions=function(t,e){return ft(hs,t,e)};Ii=class extends mi{constructor(t,e){super(new $i(t,e),"input_frame_gpu","norm_rect",!1),this.m={detections:[]},Ne(t=this.i=new qy,0,1,e=new Gt)}D(){return"ObjectDetector"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return t.displayNamesLocale!==void 0?Ke(this.i,2,$s(t.displayNamesLocale)):"displayNamesLocale"in t&&Ke(this.i,2),t.maxResults!==void 0?gs(this.i,3,t.maxResults):"maxResults"in t&&Ke(this.i,3),t.scoreThreshold!==void 0?Ue(this.i,4,t.scoreThreshold):"scoreThreshold"in t&&Ke(this.i,4),t.categoryAllowlist!==void 0?Ku(this.i,5,t.categoryAllowlist):"categoryAllowlist"in t&&Ke(this.i,5),t.categoryDenylist!==void 0?Ku(this.i,6,t.categoryDenylist):"categoryDenylist"in t&&Ke(this.i,6),this.l(t)}H(t,e){return this.m={detections:[]},Yi(this,t,e),this.m}I(t,e,n){return this.m={detections:[]},ys(this,t,n,e),this.m}u(){var t=new _i;zt(t,"input_frame_gpu"),zt(t,"norm_rect"),_t(t,"detections");var e=new gi;xs(e,$w,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.ObjectDetectorGraph"),Ft(n,"IMAGE:input_frame_gpu"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"DETECTIONS:detections"),n.A(e),Ni(t,n),this.h.attachProtoVectorListener("detections",(i,s)=>{for(let r of i)i=Ay(r),this.m.detections.push(Ky(i));be(this,s)}),this.h.attachEmptyPacketListener("detections",i=>{be(this,i)}),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};Ii.prototype.detectForVideo=Ii.prototype.I,Ii.prototype.detect=Ii.prototype.H,Ii.prototype.setOptions=Ii.prototype.A,Ii.createFromModelPath=async function(t,e){return ft(Ii,t,{baseOptions:{modelAssetPath:e}})},Ii.createFromModelBuffer=function(t,e){return ft(Ii,t,{baseOptions:{modelAssetBuffer:e}})},Ii.createFromOptions=function(t,e){return ft(Ii,t,e)};Dm=class{constructor(t,e,n){this.landmarks=t,this.worldLandmarks=e,this.segmentationMasks=n}close(){this.segmentationMasks?.forEach(t=>{t.close()})}};Dm.prototype.close=Dm.prototype.close;ri=class extends mi{constructor(t,e){super(new $i(t,e),"image_in","norm_rect",!1),this.landmarks=[],this.worldLandmarks=[],this.outputSegmentationMasks=!1,Ne(t=this.i=new $y,0,1,e=new Gt),this.C=new By,Ne(this.i,0,3,this.C),this.m=new Oy,Ne(this.i,0,2,this.m),gs(this.m,4,1),Ue(this.m,2,.5),Ue(this.C,2,.5),Ue(this.i,4,.5)}D(){return"PoseLandmarker"}get baseOptions(){return mt(this.i,Gt,1)}set baseOptions(t){Ne(this.i,0,1,t)}A(t){return"numPoses"in t&&gs(this.m,4,t.numPoses??1),"minPoseDetectionConfidence"in t&&Ue(this.m,2,t.minPoseDetectionConfidence??.5),"minTrackingConfidence"in t&&Ue(this.i,4,t.minTrackingConfidence??.5),"minPosePresenceConfidence"in t&&Ue(this.C,2,t.minPosePresenceConfidence??.5),"outputSegmentationMasks"in t&&(this.outputSegmentationMasks=t.outputSegmentationMasks??!1),this.l(t)}H(t,e,n){var i=typeof e!="function"?e:{};return this.v=typeof e=="function"?e:n,Z1(this),Yi(this,t,i),J1(this)}I(t,e,n,i){var s=typeof n!="function"?n:{};return this.v=typeof n=="function"?n:i,Z1(this),ys(this,t,s,e),J1(this)}u(){var t=new _i;zt(t,"image_in"),zt(t,"norm_rect"),_t(t,"normalized_landmarks"),_t(t,"world_landmarks"),_t(t,"segmentation_masks");var e=new gi;xs(e,Yw,this.i);var n=new ai;pi(n,2,"mediapipe.tasks.vision.pose_landmarker.PoseLandmarkerGraph"),Ft(n,"IMAGE:image_in"),Ft(n,"NORM_RECT:norm_rect"),ht(n,"NORM_LANDMARKS:normalized_landmarks"),ht(n,"WORLD_LANDMARKS:world_landmarks"),n.A(e),Ni(t,n),wd(this,t),this.h.attachProtoVectorListener("normalized_landmarks",(i,s)=>{this.landmarks=[];for(let r of i)i=El(r),this.landmarks.push(Al(i));be(this,s)}),this.h.attachEmptyPacketListener("normalized_landmarks",i=>{this.landmarks=[],be(this,i)}),this.h.attachProtoVectorListener("world_landmarks",(i,s)=>{this.worldLandmarks=[];for(let r of i)i=Lo(r),this.worldLandmarks.push(No(i));be(this,s)}),this.h.attachEmptyPacketListener("world_landmarks",i=>{this.worldLandmarks=[],be(this,i)}),this.outputSegmentationMasks&&(ht(n,"SEGMENTATION_MASK:segmentation_masks"),Ho(this,"segmentation_masks"),this.h.ia("segmentation_masks",(i,s)=>{this.segmentationMasks=i.map(r=>Xo(this,r,!0,!this.v)),be(this,s)}),this.h.attachEmptyPacketListener("segmentation_masks",i=>{this.segmentationMasks=[],be(this,i)})),t=t.h(),this.setGraph(new Uint8Array(t),!0)}};ri.prototype.detectForVideo=ri.prototype.I,ri.prototype.detect=ri.prototype.H,ri.prototype.setOptions=ri.prototype.A,ri.createFromModelPath=function(t,e){return ft(ri,t,{baseOptions:{modelAssetPath:e}})},ri.createFromModelBuffer=function(t,e){return ft(ri,t,{baseOptions:{modelAssetBuffer:e}})},ri.createFromOptions=function(t,e){return ft(ri,t,e)},ri.POSE_CONNECTIONS=uS,Lt("module$exports$google3$third_party$mediapipe$tasks$web$vision$pose_landmarker$pose_landmarker.PoseLandmarker.POSE_CONNECTIONS",ri.POSE_CONNECTIONS)});var hC=ZS(()=>{Eo();Nx();Dx();Ux();dS();var De=t=>document.querySelector(t),Fr=t=>new URL(t,document.baseURI).href,mR=matchMedia("(pointer: coarse)").matches,MS=innerHeight>innerWidth,Og=MS?-.42:-.66,Bg=MS?.5:.36,L={explode:0,target:0,yaw:Og,pitch:Bg,zoom:1,tYaw:Og,tPitch:Bg,tZoom:1,facing:"user",stream:null,hand:null,gesture:"",camOn:!1};window.__demo=L;var Ua=De("#gl"),Vt=new Su({canvas:Ua,antialias:!0,alpha:!0,powerPreference:"high-performance"});Vt.setPixelRatio(Math.min(devicePixelRatio,mR?1.5:1.75));Vt.toneMapping=Hc;Vt.toneMappingExposure=1.05;Vt.outputColorSpace=Xt;Vt.xr.enabled=!0;Vt.xr.setReferenceSpaceType("local-floor");var bs=new Zr,bS=new bo(Vt);bs.environment=bS.fromScene(new wu,.04).texture;bs.environmentIntensity=.75;new Ru().load(Fr("env/studio_small_09_1k.hdr"),t=>{t.mapping=_o,bs.environment=bS.fromEquirectangular(t).texture,bs.environmentIntensity=1,t.dispose()});var jg=new Mr(16777215,1.6);jg.position.set(2,4,3);bs.add(jg);var Zg=new Mr(10470655,1.2);Zg.position.set(-3,2,-3);bs.add(Zg);var Ki=new rn(32,1,.01,100),Ht=new Zn;bs.add(Ht);var Nd=document.createElement("canvas");Nd.width=Nd.height=128;var Jg=Nd.getContext("2d"),Qg=Jg.createRadialGradient(64,64,4,64,64,64);Qg.addColorStop(0,"rgba(0,0,0,0.55)");Qg.addColorStop(1,"rgba(0,0,0,0)");Jg.fillStyle=Qg;Jg.fillRect(0,0,128,128);var Or=new At(new ea(1,1),new Jn({map:new wc(Nd),transparent:!0,depthWrite:!1}));Or.rotation.x=-Math.PI/2;Ht.add(Or);var TS=[],kg={},Dr={r0:1,r1:1,c0:.3,c1:.5},gR={cover:0,pcie:.06,cpu:.12,fan:.1,ram:.18,psu:.08,bezel:.04,drive:.1,board:.22,chassis:.22},zg=4,_R=.44,ir=null,Gg=.434;async function xR(){let[t,e]=await Promise.all([fetch(Fr("models/parts.json")).then(a=>a.json()),new Tu().loadAsync(Fr("models/server.glb"),a=>{a.total&&(De("#loadtxt").textContent=`\u8F09\u5165\u4F3A\u670D\u5668\u6A21\u578B\u2026 ${Math.round(a.loaded/a.total*100)}%`)})]),n=e.scene;ir=n,n.scale.setScalar(zg);let i=new vn().setFromObject(n),s=i.getCenter(new F);n.position.set(-s.x,-i.min.y,-s.z),Ht.add(n),Gg=(i.max.x-i.min.x)/zg,Or.scale.set((i.max.x-i.min.x)*1.5,(i.max.z-i.min.z)*1.3,1),Or.position.y=.002,n.traverse(a=>{let o=t.objects[a.name];if(!o)return;let c={obj:a,base:a.position.clone(),off:new F(...o.offset),group:o.group,delay:gR[o.group]??0};if(TS.push(c),(kg[o.group]||={parts:[],...t.groups[o.group]}).parts.push(c),a.material)for(let l of[].concat(a.material))l.envMapIntensity=1});let r=De("#labels");for(let[a,o]of Object.entries(kg)){let c=document.createElement("div");c.className="lbl",c.innerHTML=`<b>${o.zh}</b><small>${o.en}</small>`,r.appendChild(c),o.el=c}for(let a of[0,1]){Hg(a),n.updateMatrixWorld(!0);let o=new vn().setFromObject(n);Dr["r"+a]=o.getBoundingSphere(new Nn).radius,Dr["c"+a]=o.getCenter(new F).y}Hg(0)}function ES(t){if(!ir)return;ir.scale.setScalar(t),ir.position.set(0,0,0),ir.updateMatrixWorld(!0);let e=new vn().setFromObject(ir),n=e.getCenter(new F);ir.position.set(-n.x,-e.min.y,-n.z),Or.scale.set((e.max.x-e.min.x)*1.5,(e.max.z-e.min.z)*1.3,1),Or.position.y=.002}var AS=t=>t<=0?0:t>=1?1:t*t*(3-2*t);function Hg(t){for(let e of TS){let n=AS(t*1.45-e.delay*1.45*(1-t)-e.delay*.45*t);e.obj.position.copy(e.base).addScaledVector(e.off,n)}}function e0(){if(Vt.xr.isPresenting)return;let t=innerWidth,e=innerHeight;Vt.setSize(t,e,!1),Ki.aspect=t/e,Ki.updateProjectionMatrix()}addEventListener("resize",e0);e0();var Pd=new F,Dg=new vn;function vR(){let t=L.explode>.6,e=Math.max(0,(L.explode-.6)/.4),n=[];for(let i of Object.values(kg))if(i.el){if(!t){i.el.style.opacity=0;continue}Dg.makeEmpty();for(let s of i.parts)Dg.expandByObject(s.obj);Dg.getCenter(Pd),Pd.project(Ki),i.w||(i.w=i.el.offsetWidth,i.h=i.el.offsetHeight),n.push({gr:i,ax:(Pd.x*.5+.5)*innerWidth,ay:(-Pd.y*.5+.5)*innerHeight})}for(let i of n)i.x=i.ax,i.y=i.ay;for(let i=0;i<40;i++)for(let s=0;s<n.length;s++)for(let r=s+1;r<n.length;r++){let a=n[s],o=n[r],c=(a.gr.w+o.gr.w)/2+4-Math.abs(a.x-o.x),l=(a.gr.h+o.gr.h)/2+3-Math.abs(a.y-o.y);if(c>0&&l>0){let h=(a.y<=o.y?-1:1)*l/2;a.y+=h,o.y-=h}}for(let i of n){let s=Math.max(i.gr.w/2+4,Math.min(innerWidth-i.gr.w/2-4,i.x));i.gr.el.style.opacity=e,i.gr.el.style.transform=`translate(${s}px, ${i.y}px) translate(-50%, -50%)`}}var fS=performance.now();function yR(t,e){t==null&&(t=performance.now());let n=Math.min(.05,(t-fS)/1e3);fS=t;let i=1-Math.exp(-n*3.2),s=L.target?3.6:7.5;if(L.explode+=(L.target-L.explode)*(1-Math.exp(-n*s)),Math.abs(L.target-L.explode)<.001&&(L.explode=L.target),L.yaw+=(L.tYaw-L.yaw)*i*2,L.pitch+=(L.tPitch-L.pitch)*i*2,L.zoom+=(L.tZoom-L.zoom)*i*2,Hg(L.explode),Vt.xr.isPresenting)XR(e);else{Ht.rotation.y=L.yaw;let r=So.degToRad(Ki.fov/2),a=Math.atan(Math.tan(r)*Ki.aspect),o=AS(L.explode),c=Ki.aspect<1,l=Dr.r0+(Dr.r1-Dr.r0)*o,h=Dr.c0+(Dr.c1-Dr.c0)*o,u=l/Math.sin(Math.min(r,a))*(c?1-.2*o:.88)/L.zoom;Ki.position.set(0,h+Math.sin(L.pitch)*u,Math.cos(L.pitch)*u),Ki.lookAt(0,h-l*(c?.06:.04),0),vR(),L.camOn&&aC(t)}Se.thudWhen&&Se.ctx&&Se.ctx.currentTime>=Se.thudWhen&&(Se.thudWhen=0,nr=1,L.punch=1,Se.sfx.impactAt=performance.now()),nr>0&&(nr=Math.max(0,nr-n*5.5),nr<.03&&(nr=0),L.punch=nr),DR(t),Vt.render(bs,Ki)}var Vg="gesture-demo-sound",t0=.11,n0=.6,SR=1.2,MR=.08,bR=.15,TR=.4,ER=.18,AR=.6,wR=1.6,RR=1.2,pn=new Audio(Fr("audio/explode.mp3"));pn.preload="auto";pn.playsInline=!0;pn.crossOrigin="anonymous";pn.setAttribute("playsinline","");pn.loop=!0;var Se={ctx:null,gain:null,noise:null,unlocked:!1,pauseT:0,thudWhen:0,whooshBuf:null,thudBuf:null,sfx:{whooshAt:0,impactAt:0}},wS=!1,nr=0,Bd=0;L.soundOn=localStorage.getItem(Vg)!=="0";L.music=pn;L.sound=Se;L.punch=0;L.QUIET_GAIN=t0;L.FULL_GAIN=n0;function CR(){if(Se.ctx)return;let t=window.AudioContext||window.webkitAudioContext;if(!t)return;let e=Se.ctx=new t;Se.gain=e.createGain(),Se.gain.gain.value=0,e.createMediaElementSource(pn).connect(Se.gain).connect(e.destination),CS()}function RS(t){if(!t)return 0;try{let e=t.gain.value;return Number.isFinite(e)?e:0}catch{return 0}}function IR(t,e,n){if(!t||!Se.ctx)return;let i=Se.ctx.currentTime,s=RS(t);t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(s,i),t.gain.linearRampToValueAtTime(e,i+Math.max(.02,n))}function kd(t,e,n){if(!t||!Se.ctx)return IR(t,e,n);let i=Se.ctx.currentTime,s=RS(t),r=48,a=new Float32Array(r);for(let o=0;o<r;o++){let c=o/(r-1);a[o]=e>=s?s+(e-s)*Math.sin(c*Math.PI/2):e+(s-e)*Math.cos(c*Math.PI/2)}t.gain.cancelScheduledValues(i),t.gain.setValueAtTime(a[0],i);try{t.gain.setValueCurveAtTime(a,i,Math.max(.05,n))}catch{t.gain.linearRampToValueAtTime(e,i+n)}}function PR(){if(!Se.ctx)return 0;let t=Se.ctx.outputLatency,e=Se.ctx.baseLatency;return(typeof t=="number"&&t>0?t:0)||(typeof e=="number"&&e>0?e:0)||0}function CS(){if(!Se.ctx||Se.thudBuf)return;let t=Se.ctx.sampleRate,e=(n,i)=>{let s=Math.max(1,Math.floor(t*n)),r=Se.ctx.createBuffer(1,s,t);return i(r.getChannelData(0),t),r};Se.whooshBuf=e(.45,(n,i)=>{let s=0;for(let r=0;r<n.length;r++){let a=r/i,o=a/.45,c=Math.min(1,a/.05)*Math.exp(-o*3.8)*.55,l=1800*Math.pow(260/1800,o),h=Math.exp(-2*Math.PI*l/i);s=(Math.random()*2-1)*(1-h)+s*h,n[r]=s*c}}),Se.thudBuf=e(.36,(n,i)=>{for(let s=0;s<n.length;s++){let r=s/i,a=150*Math.pow(38/150,Math.min(1,r/.2)),o=Math.sin(2*Math.PI*a*r)*Math.exp(-r*9)*1.15,c=480*Math.pow(160/480,Math.min(1,r/.06)),l=Math.sin(2*Math.PI*c*r)*Math.exp(-r*40)*.35,h=(Math.random()*2-1)*Math.exp(-r*18)*.55;n[s]=o+l+h}})}function pS(t,e,n){if(!Se.ctx||!t)return;let i=Se.ctx.createBufferSource();i.buffer=t;let s=Se.ctx.createGain();s.gain.value=n??1,i.connect(s).connect(Se.ctx.destination),i.start(Math.max(Se.ctx.currentTime,e))}function IS(t){if(!L.soundOn||!Se.unlocked||!Se.ctx)return;Se.thudBuf||CS();let e=Se.ctx,n=e.currentTime,i=PR(),s=t?bR:TR;pS(Se.whooshBuf,n,ER),Se.sfx.whooshAt=performance.now(),Se.sfx.impactAt=0,pS(Se.thudBuf,Math.max(n,n+s-i),AR),Se.thudWhen=n+s}function PS(t){!L.soundOn||!Se.unlocked||(Se.ctx&&Se.ctx.state!=="running"&&Se.ctx.resume(),pn.paused&&pn.play().catch(()=>{}),kd(Se.gain,t?n0:t0,SR))}function LR(){wS=!1,PS(!0),IS(!0)}function NR(){wS=L.explode>MR,PS(!1),IS(!1)}function DR(t){let e=nr*nr;Zg.intensity=RR+e*3.4,jg.intensity=wR+e*1.2,e>0&&!Vt.xr.isPresenting&&(Ki.position.x+=Math.sin(t*.058)*.05*e,Ki.position.y+=Math.sin(t*.081)*.028*e)}function Dd(){let t=Se.unlocked?L.soundOn?"\u{1F50A} \u97F3\u6548\u958B":"\u{1F507} \u97F3\u6548\u95DC":"\u{1F50A} \u958B\u555F\u97F3\u6548";for(let e of["#btnSound","#btnARSound"]){let n=De(e);n&&(n.textContent=t,n.title=t,n.setAttribute("aria-pressed",L.soundOn&&Se.unlocked?"true":"false"),n.classList.toggle("off",!!(Se.unlocked&&!L.soundOn)))}}function LS(){Se.ctx&&Se.ctx.state!=="running"&&Se.ctx.resume(),pn.loop=!0;let t=L.target?n0:t0;kd(Se.gain,t,.35),pn.play().catch(()=>{})}async function ic(){try{CR(),Se.ctx&&Se.ctx.state!=="running"&&await Se.ctx.resume(),Se.gain&&(Se.gain.gain.cancelScheduledValues(Se.ctx.currentTime),Se.gain.gain.value=0),pn.loop=!0,pn.muted=!0;try{await pn.play()}catch{}if(pn.muted=!1,pn.paused&&L.soundOn)try{await pn.play()}catch{}Se.unlocked=!0,L.audioUnlocked=!0,Dd(),L.soundOn?LS():(pn.pause(),kd(Se.gain,0,.01))}catch(t){console.warn("\u97F3\u6548\u5C1A\u672A\u89E3\u9396",t)}}function NS(t){if(t?.preventDefault(),t?.stopPropagation(),!Se.unlocked){L.soundOn=!0,localStorage.setItem(Vg,"1"),Dd(),ic();return}L.soundOn=!L.soundOn,localStorage.setItem(Vg,L.soundOn?"1":"0"),Dd(),L.soundOn?LS():(kd(Se.gain,0,.2),clearTimeout(Se.pauseT),Se.pauseT=setTimeout(()=>{L.soundOn||pn.pause()},250))}Dd();document.addEventListener("pointerdown",t=>{t.target?.closest?.("#btnSound, #btnARSound")||Se.unlocked||ic()},{capture:!0});De("#btnSound")?.addEventListener("click",NS);De("#btnARSound")?.addEventListener("click",NS);function Ms(t){t=t?1:0;let e=L.target!==t;L.target=t;let n=t?"\u6536\u5408":"\u5C55\u958B";De("#btnToggle").textContent=n,De("#btnToggle").classList.toggle("on",!!t);let i=De("#btnARToggle");i&&(i.textContent=n,i.classList.toggle("on",!!t)),e&&(t?LR():NR())}De("#btnToggle").onclick=()=>Ms(L.target?0:1);De("#btnReset").onclick=()=>{L.tYaw=Og,L.tPitch=Bg,L.tZoom=1,Ms(0)};De("#btnHelp").onclick=()=>De("#help").classList.toggle("show");De("#help").onclick=()=>De("#help").classList.remove("show");var Ud=t=>Math.max(-.15,Math.min(1.35,t)),Rl=t=>Math.max(.55,Math.min(2.6,t)),Ss=new Map,DS=0,US=1,mS=-1e9,Fd=!1;Ua.addEventListener("pointerdown",t=>{if(Ua.setPointerCapture(t.pointerId),Ss.set(t.pointerId,[t.clientX,t.clientY]),Fd=!1,Ss.size===2){let[e,n]=[...Ss.values()];DS=Math.hypot(e[0]-n[0],e[1]-n[1]),US=L.tZoom}});Ua.addEventListener("pointermove",t=>{let e=Ss.get(t.pointerId);if(e){if(Ss.size===1){let n=t.clientX-e[0],i=t.clientY-e[1];Math.abs(n)+Math.abs(i)>3&&(Fd=!0),L.tYaw+=n*.008,L.tPitch=Ud(L.tPitch+i*.006)}if(Ss.set(t.pointerId,[t.clientX,t.clientY]),Ss.size===2){Fd=!0;let[n,i]=[...Ss.values()];L.tZoom=Rl(US*Math.hypot(n[0]-i[0],n[1]-i[1])/DS)}}});var FS=t=>{if(Ss.size===1&&!Fd){let e=performance.now();e-mS<320&&Ms(L.target?0:1),mS=e}Ss.delete(t.pointerId)};Ua.addEventListener("pointerup",FS);Ua.addEventListener("pointercancel",FS);Ua.addEventListener("wheel",t=>{t.preventDefault(),L.tZoom=Rl(L.tZoom*Math.exp(-t.deltaY*.0012))},{passive:!1});addEventListener("keydown",t=>{let e=t.key.toLowerCase();e==="e"||e===" "?Ms(L.target?0:1):e==="c"?Ms(0):e==="o"?Ms(1):e==="arrowleft"?L.tYaw-=.25:e==="arrowright"?L.tYaw+=.25:e==="arrowup"?L.tPitch=Ud(L.tPitch-.15):e==="arrowdown"?L.tPitch=Ud(L.tPitch+.15):e==="+"||e==="="?L.tZoom=Rl(L.tZoom*1.15):e==="-"&&(L.tZoom=Rl(L.tZoom/1.15))});var Wg=navigator.userAgent,UR=/iP(hone|ad|od)/.test(Wg)||Wg.includes("Mac")&&navigator.maxTouchPoints>1,FR=/Android/.test(Wg),fn=De("#btnAR"),ct={session:null,hitSource:null,placed:!1,placing:!0,resumeCam:!1,refType:"local-floor"};L.xrAR=!1;var Ia=new F,gS=new F,_S=new kn,OR=new F,Ug=new zc,Yn=new Zn;Yn.add(new At(new Pc(.045,.062,48).rotateX(-Math.PI/2),new Jn({color:3842303,transparent:!0,opacity:.95,side:Hn})));Yn.add(new At(new Ic(.045,48).rotateX(-Math.PI/2),new Jn({color:3842303,transparent:!0,opacity:.18,side:Hn,depthWrite:!1})));Yn.matrixAutoUpdate=!1;Yn.visible=!1;bs.add(Yn);function i0(t){let e=De("#arHint");e&&(e.textContent=t)}function BR(){let t=Fr("models/server.glb"),e=location.href;return`intent://arvr.google.com/scene-viewer/1.0?file=${encodeURIComponent(t)}&mode=ar_preferred&title=${encodeURIComponent("2U \u4F3A\u670D\u5668")}#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;S.browser_fallback_url=${encodeURIComponent(e)};end;`}function kR(){for(let t=0;t<2;t++){let e=Vt.xr.getController(t);e.addEventListener("select",zR),bs.add(e)}}kR();function zR(t){if(!Vt.xr.isPresenting)return;if(ct.placing){Yn.visible?GR(Yn.matrix):HR();return}let e=t.target;Ug.ray.origin.setFromMatrixPosition(e.matrixWorld),Ug.ray.direction.set(0,0,-1).transformDirection(e.matrixWorld),(ir?Ug.intersectObject(ir,!0):[]).length&&Ms(L.target?0:1)}function GR(t){t.decompose(Ia,_S,OR),Ht.position.copy(Ia),Ht.quaternion.copy(_S),Ht.scale.set(1,1,1),Ht.visible=!0,ct.placed=!0,ct.placing=!1,Yn.visible=!1,i0("\u9EDE\u6A21\u578B\u6216\u6309\u300C\u5C55\u958B\u300D\u53EF\u5206\u5C64\u67E5\u770B\uFF0C\u6309\u300C\u79FB\u52D5\u300D\u53EF\u91CD\u65B0\u653E\u7F6E")}function HR(){let t=Vt.xr.getCamera();t.getWorldPosition(Ia),t.getWorldDirection(gS);let e=Ia.clone().addScaledVector(gS,1);ct.refType==="local-floor"?e.y=0:e.y=Ia.y-1.15,Ht.position.copy(e),Ht.quaternion.identity();let n=Math.atan2(Ia.x-e.x,Ia.z-e.z);Ht.rotation.set(0,n,0),Ht.scale.set(1,1,1),Ht.visible=!0,ct.placed=!0,ct.placing=!1,Yn.visible=!1,i0("\u9EDE\u6A21\u578B\u6216\u6309\u300C\u5C55\u958B\u300D\u53EF\u5206\u5C64\u67E5\u770B\uFF0C\u6309\u300C\u79FB\u52D5\u300D\u53EF\u91CD\u65B0\u653E\u7F6E")}function OS(){ct.placing=!0,ct.placed=!1,Ht.visible=!1,Yn.visible=!1,i0("\u5C0D\u6E96\u684C\u9762\u6216\u5730\u9762\uFF0C\u9EDE\u4E00\u4E0B\u6216\u634F\u5408\u5373\u53EF\u653E\u7F6E")}function VR(){let t=Gg>0?_R/Gg:1;ES(t),Ht.position.set(0,0,0),Ht.quaternion.identity(),Ht.rotation.set(0,0,0),Ht.scale.set(1,1,1),Or.visible=!1,OS()}function WR(){ES(zg),Ht.position.set(0,0,0),Ht.quaternion.identity(),Ht.rotation.set(0,L.yaw,0),Ht.scale.set(1,1,1),Ht.visible=!0,Or.visible=!0,Yn.visible=!1}function XR(t){if(!t||!ct.hitSource||!ct.placing)return;let e=Vt.xr.getReferenceSpace();if(!e)return;let n=t.getHitTestResults(ct.hitSource);if(n.length){let i=n[0].getPose(e);i?(Yn.visible=!0,Yn.matrix.fromArray(i.transform.matrix)):Yn.visible=!1}else Yn.visible=!1}async function qR(t){ct.hitSource=null;try{if(!t.requestHitTestSource)return;let e=await t.requestReferenceSpace("viewer");ct.hitSource=await t.requestHitTestSource({space:e})}catch(e){console.warn("hit-test \u7121\u6CD5\u4F7F\u7528",e)}}async function $R(){if(!navigator.xr?.requestSession){vi("\u6B64\u700F\u89BD\u5668\u4E0D\u652F\u63F4 WebXR AR");return}if(!L.modelReady){vi("\u6A21\u578B\u9084\u5728\u8F09\u5165\uFF0C\u8ACB\u7A0D\u5019\u518D\u8A66");return}if(ct.session)return;ct.resumeCam=L.camOn,L.camOn&&r0(),ic(),De("#intro").classList.add("hide");let t=De("#arOverlay");t.style.display="block";let e={optionalFeatures:["hit-test","dom-overlay","local-floor","hand-tracking"],domOverlay:{root:t}},n;try{n=await navigator.xr.requestSession("immersive-ar",e)}catch(r){t.style.display="none",ct.resumeCam&&Ll(),ct.resumeCam=!1,vi("\u7121\u6CD5\u958B\u555F AR\uFF1A"+(r.message||r.name)+"\u3002\u8ACB\u5141\u8A31\u76F8\u6A5F\u8207\u7A7A\u9593\u6B0A\u9650\u5F8C\u518D\u8A66");return}let i=n.enabledFeatures,s=i&&(typeof i.has=="function"?i.has("local-floor"):Array.from(i).includes("local-floor"));ct.refType=s||!i?"local-floor":"local";try{Vt.xr.setReferenceSpaceType(ct.refType),await Vt.xr.setSession(n)}catch{try{ct.refType="local",Vt.xr.setReferenceSpaceType("local"),await Vt.xr.setSession(n)}catch(a){t.style.display="none";try{n.end()}catch{}ct.resumeCam&&Ll(),ct.resumeCam=!1,vi("\u7121\u6CD5\u555F\u52D5 AR \u5DE5\u4F5C\u968E\u6BB5\uFF1A"+(a.message||a.name));return}}ct.session=n,n.addEventListener("end",YR),document.body.classList.add("ar"),VR(),await qR(n)}function YR(){if(ct.hitSource?.cancel)try{ct.hitSource.cancel()}catch{}ct.hitSource=null,ct.session=null,ct.placing=!1,ct.placed=!1,document.body.classList.remove("ar");let t=De("#arOverlay");t&&(t.style.display="none"),WR(),e0(),ct.resumeCam&&Ll(),ct.resumeCam=!1}async function KR(t){if(t?.preventDefault(),ct.session){try{await ct.session.end()}catch{}return}await $R()}De("#btnARExit")?.addEventListener("click",t=>{t.preventDefault(),ct.session&&ct.session.end()});De("#btnARPlace")?.addEventListener("click",t=>{t.preventDefault(),Vt.xr.isPresenting&&OS()});De("#btnARToggle")?.addEventListener("click",t=>{t.preventDefault(),Ms(L.target?0:1)});async function jR(){let t=!1;if(navigator.xr?.isSessionSupported)try{t=await navigator.xr.isSessionSupported("immersive-ar")}catch{}if(L.xrAR=!!t,fn.classList.remove("disabled"),t){fn.removeAttribute("rel"),fn.href="#",fn.setAttribute("role","button"),fn.onclick=KR,fn.title="\u9032\u5165 AR\uFF0C\u628A\u4F3A\u670D\u5668\u653E\u5230\u771F\u5BE6\u684C\u4E0A";return}if(UR){fn.href=Fr("models/server_anim.usdz"),fn.rel="ar",fn.innerHTML='<img alt="" src="data:image/gif;base64,R0lGODlhAQABAAAAACw=">AR',fn.onclick=null,fn.title="\u7528 iPhone Quick Look \u958B\u555F AR";return}if(FR){fn.href=BR(),fn.removeAttribute("rel"),fn.onclick=null,fn.title="\u7528 Google Scene Viewer \u958B\u555F AR";return}fn.href="#",fn.classList.add("disabled"),fn.title="\u6B64\u88DD\u7F6E\u4E0D\u652F\u63F4 AR",fn.onclick=e=>{e.preventDefault(),vi("\u8ACB\u7528\u652F\u63F4 AR \u7684\u5B89\u5353\u624B\u6A5F\u3001iPhone \u6216 Meta Quest \u958B\u555F\u6B64\u9801")}}jR();var Pa=null,yn=De("#video"),xi=De("#videoFront"),Ld=De("#bgStill"),BS=yn,Xg=-1,qg=0,$g=De("#hand"),Di=$g.getContext("2d"),Yg=De("#camHint"),La=De("#modeSheet");async function ZR(){if(Pa)return Pa;De("#loadtxt").textContent="\u8F09\u5165\u624B\u52E2\u8FA8\u8B58\u6A21\u578B\u2026",De("#loading").classList.remove("hide");let t=await Ws.forVisionTasks(Fr("libs/mediapipe/wasm")),e=n=>({baseOptions:{modelAssetPath:Fr("models/hand_landmarker.task"),delegate:n},runningMode:"VIDEO",numHands:1,minHandDetectionConfidence:.5,minHandPresenceConfidence:.5,minTrackingConfidence:.5});try{Pa=await wn.createFromOptions(t,e("GPU")),L.delegate="GPU"}catch(n){console.warn("GPU delegate failed, using CPU",n),Pa=await wn.createFromOptions(t,e("CPU")),L.delegate="CPU"}return L.mpReady=!0,De("#loading").classList.add("hide"),Pa}var kS="gesture-demo-camera",zS="gesture-demo-cam-mode";try{localStorage.getItem(kS)==="environment"&&(L.facing="environment")}catch{}try{localStorage.getItem(zS)==="dual"&&(L.camMode="dual")}catch{}L.camMode||(L.camMode="single");L.deviceId=null;L.rearStream=null;L.dualKind=null;var Ui=[];function zd(t){let e=(t||"").toLowerCase();return/back|rear|environment|後置|後鏡頭/.test(e)?"environment":/front|user|face|前置|前鏡頭|facetime/.test(e)?"user":null}function Gd(t){return t?.getVideoTracks?.()[0]||null}function Br(t){return Gd(t)?.getSettings?.()||{}}function xS(t){let e=Br(t);if(e.facingMode==="user"||e.facingMode==="environment")return e.facingMode;let n=Ui.find(i=>i.deviceId===e.deviceId);return zd(n?.label)||null}function Na(t){let e=Gd(t);return!!(e&&e.readyState==="live"&&e.enabled)}function oi(t){t?.getTracks?.().forEach(e=>{try{e.stop()}catch{}})}function JR(t,e){if(!t||!e)return!1;let n=Br(t).deviceId,i=Br(e).deviceId;if(n&&i&&n===i)return!0;let s=xS(t),r=xS(e);return!!(s&&r&&s===r)}function QR(){L.camMode==="dual"?(yn.classList.remove("mirror"),xi.classList.add("mirror")):(yn.classList.toggle("mirror",L.facing==="user"),xi.classList.remove("mirror"))}function Cl(){try{localStorage.setItem(kS,L.facing)}catch{}try{localStorage.setItem(zS,L.camMode)}catch{}}function eC(){return L.camOn?L.camMode==="dual"&&L.dualKind==="live"?"\u76EE\u524D\uFF1A\u96D9\u93E1\u982D\uFF08\u524D\u7F6E\u63A7\u5236\u624B\u52E2\uFF0C\u5F8C\u7F6E\u5373\u6642\u80CC\u666F\uFF09":L.camMode==="dual"&&L.dualKind==="still"?"\u76EE\u524D\uFF1A\u96D9\u93E1\u982D\uFF08\u524D\u7F6E\u63A7\u5236\u624B\u52E2\uFF0C\u5F8C\u7F6E\u975C\u614B\u80CC\u666F\uFF09\u3002\u6B64\u88DD\u7F6E\u7121\u6CD5\u540C\u6642\u958B\u555F\u5169\u9846\u93E1\u982D\u3002":L.facing==="environment"?"\u76EE\u524D\uFF1A\u5F8C\u93E1\u982D\u624B\u52E2":"\u76EE\u524D\uFF1A\u524D\u93E1\u982D\u624B\u52E2":""}function kr(){let t=!!L.camOn,e=t&&L.camMode==="dual",n=e&&L.dualKind==="still";document.body.classList.toggle("cam",t),document.body.classList.toggle("dual",e),document.body.classList.toggle("dual-still",n);let i=De("#btnFlip");i&&(i.textContent="\u{1F504} \u5207\u63DB\u93E1\u982D",i.title="\u5207\u63DB\u93E1\u982D",i.hidden=!t||e||Ui.length<2);let s=De("#btnMode");s&&(s.hidden=!t,s.textContent=e?"\u{1F3A5} \u96D9\u93E1\u982D":"\u{1F3A5} \u93E1\u982D\u6A21\u5F0F",s.setAttribute("aria-expanded",La?.classList.contains("show")?"true":"false"));let r=De("#btnReshoot");if(r&&(r.hidden=!n),Yg&&(Yg.textContent=eC()),La)for(let a of La.querySelectorAll("[data-mode]"))a.setAttribute("aria-current",a.dataset.mode===L.camMode?"true":"false");QR(),L.trackSrc=L.camMode==="dual"?"front":"main"}function Hd(){La?.classList.remove("show")}async function Il(){try{Ui=(await navigator.mediaDevices.enumerateDevices()).filter(e=>e.kind==="videoinput")}catch{Ui=[]}L.cameraCount=Ui.length,kr()}function tC(t){return Ui.find(e=>zd(e.label)===t)||null}async function Od(t,e={}){if(!navigator.mediaDevices?.getUserMedia)throw new Error("\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u76F8\u6A5F\uFF08\u9700\u8981 HTTPS \u6216 localhost\uFF09");let n=r=>navigator.mediaDevices.getUserMedia({audio:!1,video:r}),i={width:{ideal:e.width||640},height:{ideal:e.height||480}},s=tC(t);if(s?.deviceId)try{return await n({...i,deviceId:{exact:s.deviceId}})}catch{}try{return await n({...i,facingMode:{exact:t}})}catch{}return n({...i,facingMode:{ideal:t}})}function GS(t,e,n){return new Promise((i,s)=>{let r=setTimeout(()=>s(new Error("\u7B49\u5019\u756B\u9762\u903E\u6642")),n),a=()=>{clearTimeout(r),t.removeEventListener(e,a),i()};t.addEventListener(e,a)})}async function Pl(t,e){t.srcObject=e,t.muted=!0,t.playsInline=!0;try{await t.play()}catch{}if(!(t.readyState>=2))try{await GS(t,"loadeddata",2500)}catch{}}async function vS(t,e=1200){let n=Gd(t);return!n||n.readyState!=="live"?!1:n.muted?await new Promise(i=>{let s=o=>{clearTimeout(a),n.removeEventListener("unmute",r),i(o)},r=()=>s(!0),a=setTimeout(()=>s(n.readyState==="live"),e);n.addEventListener("unmute",r,{once:!0})}):!0}function nC(t){let e=t.videoWidth,n=t.videoHeight;if(!e||!n)return!1;let i=document.createElement("canvas");i.width=32,i.height=24;let s=i.getContext("2d",{willReadFrequently:!0});try{s.drawImage(t,0,0,32,24)}catch{return!1}let r=s.getImageData(0,0,32,24).data,a=0,o=0;for(let c=0;c<r.length;c+=4){let l=r[c]+r[c+1]+r[c+2];l>a&&(a=l),o+=l}return a<12&&o<768*3*.02}async function yS(t,e=3){if(t.readyState<2)try{await GS(t,"loadeddata",1500)}catch{return!1}await new Promise(s=>setTimeout(s,80));let n=0,i=0;for(let s=0;s<e;s++)t.videoWidth&&(i++,nC(t)&&n++),s<e-1&&await new Promise(r=>setTimeout(r,50));return i?n<e:Na(t.srcObject)}function iC(t){let e=t.videoWidth||1280,n=t.videoHeight||720;Ld.width=e,Ld.height=n,Ld.getContext("2d").drawImage(t,0,0,e,n),L.stillSize={w:e,h:n}}function s0(t){BS=t,Xg=-1,qg=0}async function sC(){let t={width:{ideal:640},height:{ideal:480}},e=n=>navigator.mediaDevices.getUserMedia({audio:!1,video:n});if(L.deviceId)try{return await e({...t,deviceId:{exact:L.deviceId}})}catch{L.deviceId=null}return e({...t,facingMode:{ideal:L.facing}})}async function Da(){if(r0(),L.camMode="single",L.dualKind=null,!navigator.mediaDevices?.getUserMedia)throw new Error("\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u76F8\u6A5F\uFF08\u9700\u8981 HTTPS \u6216 localhost\uFF09");L.stream=await sC();let e=Gd(L.stream)?.getSettings?.()||{};if((e.facingMode==="user"||e.facingMode==="environment")&&(L.facing=e.facingMode),e.deviceId&&(L.deviceId=e.deviceId),await Pl(yn,L.stream),s0(yn),L.camOn=!0,Bd=performance.now()+800,sr={g:"none",n:0},Cl(),await Il(),!e.facingMode&&L.deviceId){let n=Ui.find(s=>s.deviceId===L.deviceId),i=zd(n?.label);i&&(L.facing=i,Cl())}kr()}async function Kg(t){L.camMode="dual",L.dualKind="still",L.facing="user";let e=t&&Na(t)?t:null;try{if(e||(e=await Od("environment",{width:1280,height:720})),await Pl(yn,e),await new Promise(s=>setTimeout(s,180)),yn.videoWidth)iC(yn);else throw new Error("\u7121\u6CD5\u64F7\u53D6\u5F8C\u7F6E\u756B\u9762")}finally{oi(e),yn.srcObject===e&&(yn.srcObject=null)}let n=await Od("user");await Pl(xi,n),L.stream=n,L.rearStream=null;let i=Br(n);i.deviceId&&(L.deviceId=i.deviceId),s0(xi),L.camOn=!0,Bd=performance.now()+800,sr={g:"none",n:0},Cl(),await Il(),kr()}async function HS(){if(r0(),L.camMode="dual",L.dualKind=null,L.facing="user",!navigator.mediaDevices?.getUserMedia)throw new Error("\u9019\u500B\u700F\u89BD\u5668\u4E0D\u652F\u63F4\u76F8\u6A5F\uFF08\u9700\u8981 HTTPS \u6216 localhost\uFF09");try{await Il()}catch{}let t=null,e=null;try{t=await Od("environment",{width:1280,height:720}),e=await Od("user")}catch(s){if(t&&!e)try{await Kg(t);return}catch(r){throw oi(t),r}throw oi(t),oi(e),s}if(JR(t,e)){oi(t),oi(e),vi("\u627E\u4E0D\u5230\u7368\u7ACB\u7684\u5F8C\u93E1\u982D\uFF0C\u5DF2\u6539\u7528\u55AE\u93E1\u982D\u624B\u52E2"),L.facing="user",await Da();return}await Pl(yn,t),await Pl(xi,e),await vS(t),await vS(e);let n=Na(t)&&await yS(yn),i=Na(e)&&await yS(xi);if(n&&i){L.rearStream=t,L.stream=e,L.dualKind="live";let s=Br(e);s.deviceId&&(L.deviceId=s.deviceId),s0(xi),L.camOn=!0,Bd=performance.now()+800,sr={g:"none",n:0},Cl(),await Il(),kr();return}oi(e),xi.srcObject=null,(!Na(t)||!n)&&(oi(t),yn.srcObject===t&&(yn.srcObject=null),t=null);try{await Kg(t)}catch(s){throw oi(t),oi(e),s}}function r0(){oi(L.stream),oi(L.rearStream),L.stream=null,L.rearStream=null,L.camOn=!1,L.dualKind=null,yn.srcObject&&(yn.srcObject=null),xi?.srcObject&&(xi.srcObject=null),document.body.classList.remove("cam","dual","dual-still"),Hd(),kr()}async function rC(){if(!L.camOn||L.camMode==="dual")return;if(await Il(),Ui.length<2){kr(),vi("\u9019\u500B\u88DD\u7F6E\u53EA\u6709\u4E00\u500B\u93E1\u982D");return}let t=L.deviceId||Br(L.stream).deviceId||"",e=L.facing==="user"?"environment":"user",n=i=>{let s=Math.max(0,Ui.findIndex(o=>o.deviceId===i)),r=Ui[(s+1)%Ui.length];L.deviceId=r.deviceId;let a=zd(r.label);a&&(L.facing=a)};L.facing=e,L.deviceId=null;try{await Da(),t&&L.deviceId===t&&Ui.length>1&&(n(t),await Da())}catch{try{n(t),await Da()}catch(s){console.warn(s),vi("\u5207\u63DB\u93E1\u982D\u5931\u6557")}}}async function VS(t){if(Hd(),!(t!=="single"&&t!=="dual")&&!(L.camOn&&L.camMode===t&&(t!=="dual"||L.dualKind))){if(L.camMode=t,Cl(),!L.camOn){kr();return}try{t==="dual"?await HS():(L.facing="user",L.deviceId=null,await Da()),Ur("none")}catch(e){console.warn(e),vi((t==="dual"?"\u7121\u6CD5\u958B\u555F\u96D9\u93E1\u982D\uFF1A":"\u7121\u6CD5\u958B\u555F\u76F8\u6A5F\uFF1A")+(e.message||e.name))}}}async function WS(){if(!L.camOn||L.camMode!=="dual")return;let t=De("#btnReshoot");t&&(t.disabled=!0),vi("\u6B63\u5728\u91CD\u62CD\u5F8C\u7F6E\u80CC\u666F\u2026");let e=L.stream;oi(e),L.stream=null,xi.srcObject===e&&(xi.srcObject=null),oi(L.rearStream),L.rearStream=null;try{await Kg(null),vi("\u80CC\u666F\u5DF2\u66F4\u65B0"),Ur("none")}catch(n){console.warn(n),vi("\u91CD\u62CD\u5931\u6557\uFF1A"+(n.message||n.name)+"\u3002\u6539\u56DE\u524D\u93E1\u982D\u624B\u52E2");try{L.facing="user",await Da()}catch{}}finally{t&&(t.disabled=!1)}}async function Ll(t){(t==="dual"||t==="single")&&(L.camMode=t);try{await ZR(),L.camMode==="dual"?await HS():await Da(),Ur("none")}catch(e){console.warn(e),De("#loading").classList.add("hide"),vi("\u7121\u6CD5\u958B\u555F\u76F8\u6A5F\uFF1A"+(e.message||e.name)+"\u3002\u5DF2\u5207\u63DB\u6210\u89F8\u63A7\u6A21\u5F0F"),Ur("nocam")}}De("#btnFlip").onclick=()=>{rC()};De("#btnMode").onclick=t=>{t.stopPropagation(),La.classList.contains("show")?Hd():(La.classList.add("show"),kr())};La?.querySelectorAll("[data-mode]").forEach(t=>{t.onclick=e=>{e.stopPropagation(),VS(t.dataset.mode)}});document.addEventListener("click",()=>Hd());De("#btnReshoot").onclick=()=>{WS()};De("#startCam").onclick=()=>{De("#intro").classList.add("hide"),ic(),Ll("single")};De("#startDual").onclick=()=>{De("#intro").classList.add("hide"),ic(),Ll("dual")};De("#startTouch").onclick=()=>{De("#intro").classList.add("hide"),ic(),Ur("nocam")};L.setCamMode=VS;L.reshootBackground=WS;L.debugCam=()=>({mode:L.camMode,kind:L.dualKind,facing:L.facing,camOn:L.camOn,frontLive:Na(L.stream),rearLive:Na(L.rearStream),frontId:Br(L.stream).deviceId||null,rearId:Br(L.rearStream).deviceId||null,videoMirror:yn.classList.contains("mirror"),frontMirror:xi.classList.contains("mirror"),reshootHidden:!!De("#btnReshoot")?.hidden,flipHidden:!!De("#btnFlip")?.hidden,modeHidden:!!De("#btnMode")?.hidden,hint:Yg?.textContent||"",still:!!(L.stillSize&&Ld?.width),stillSize:L.stillSize||null,trackSrc:L.trackSrc,bodyDual:document.body.classList.contains("dual"),bodyStill:document.body.classList.contains("dual-still")});var Ca=(t,e)=>Math.hypot(t.x-e.x,t.y-e.y);function XS(t){let e=Ca(t[0],t[9])||.001,n=[[8,6],[12,10],[16,14],[20,18]].map(([c,l])=>Ca(t[c],t[0])>Ca(t[l],t[0])*1.12),i=n.filter(Boolean).length,s=Ca(t[4],t[8])/e,r=Ca(t[4],t[17])/e>.9;if(i>=4&&r&&s>.5)return{g:"open",pinchD:s};let a=Ca(t[8],t[0])>Ca(t[5],t[0])*1.1,o=!n[1]&&!n[2]&&!n[3];return o&&a?{g:"pinch",pinchD:s}:o?{g:"fist",pinchD:s}:{g:"move",pinchD:s}}L.classify=t=>XS(t).g;var sr={g:"none",n:0},tc=null,nc=null;function aC(t){if(ct.session||Vt.xr.isPresenting)return;let e=BS||yn;if(!Pa||!e||e.readyState<2||t-qg<33||e.currentTime===Xg)return;Xg=e.currentTime,qg=t;let n;try{n=Pa.detectForVideo(e,t)}catch(c){console.warn(c);return}let i=n.landmarks?.[0];if(lC(i),!i){sr={g:"none",n:0},tc=null,nc=null,Ur("none");return}let s=L.camMode==="dual"||L.facing==="user",r={x:(i[0].x+i[5].x+i[17].x)/3,y:(i[0].y+i[5].y+i[17].y)/3};s&&(r.x=1-r.x);let a=XS(i);sr=a.g===sr.g?{g:a.g,n:sr.n+1}:{g:a.g,n:1};let o=sr.n>=3?sr.g:L.gesture;if(t<Bd){tc=r,Ur(a.g);return}if(o==="open"?Ms(1):o==="fist"&&Ms(0),o==="pinch"?(nc||(nc={d:Math.max(.15,a.pinchD),z:L.tZoom}),L.tZoom=Rl(nc.z*Math.pow(Math.max(.05,a.pinchD)/nc.d,.9))):nc=null,tc&&o!=="pinch"){let c=r.x-tc.x,l=r.y-tc.y;Math.abs(c)>.004&&(L.tYaw+=c*5.5),Math.abs(l)>.004&&(L.tPitch=Ud(L.tPitch+l*3.5))}tc=r,Ur(o)}var oC={none:["\u270B","\u8ACB\u628A\u624B\u653E\u9032\u756B\u9762"],open:["\u{1F590}\uFE0F","\u5F35\u958B\u624B\uFF1A\u5C55\u958B"],fist:["\u270A","\u63E1\u62F3\uFF1A\u6536\u5408"],pinch:["\u{1F90F}","\u634F\u5408\uFF1A\u7E2E\u653E"],move:["\u{1F44B}","\u79FB\u52D5\u624B\uFF1A\u65CB\u8F49"],nocam:["\u{1F446}","\u89F8\u63A7\u6A21\u5F0F\uFF1A\u62D6\u66F3\u65CB\u8F49\u30FB\u96D9\u6307\u7E2E\u653E\u30FB\u9EDE\u5169\u4E0B\u5C55\u958B"]};function Ur(t){if(L.gesture===t&&t!=="nocam")return;L.gesture=t;let[e,n]=oC[t];De("#gico").textContent=e,De("#gtxt").textContent=n}var cC=[[0,1],[1,2],[2,3],[3,4],[0,5],[5,6],[6,7],[7,8],[5,9],[9,10],[10,11],[11,12],[9,13],[13,14],[14,15],[15,16],[13,17],[17,18],[18,19],[19,20],[0,17]];function lC(t){let e=$g.width,n=$g.height;if(Di.clearRect(0,0,e,n),!t)return;let i=L.camMode==="dual"||L.facing==="user",s=r=>[(i?1-r.x:r.x)*e,r.y*n];Di.lineWidth=3,Di.strokeStyle="rgba(120,200,255,0.95)",Di.lineCap="round";for(let[r,a]of cC){let[o,c]=s(t[r]),[l,h]=s(t[a]);Di.beginPath(),Di.moveTo(o,c),Di.lineTo(l,h),Di.stroke()}Di.fillStyle="#fff";for(let r of t){let[a,o]=s(r);Di.beginPath(),Di.arc(a,o,3,0,7),Di.fill()}}var SS;function vi(t){let e=De("#toast");e.textContent=t,e.classList.add("show"),clearTimeout(SS),SS=setTimeout(()=>e.classList.remove("show"),4500)}xR().then(()=>{De("#loading").classList.add("hide"),L.modelReady=!0,Vt.setAnimationLoop(yR)}).catch(t=>{console.error(t),De("#loadtxt").textContent="\u6A21\u578B\u8F09\u5165\u5931\u6557\uFF1A"+t.message});var Fg=new URLSearchParams(location.search).get("auto");Fg==="cam"?De("#startCam").click():Fg==="dual"?De("#startDual").click():Fg==="touch"&&De("#startTouch").click()});export default hC();
/*! Bundled license information:

three/build/three.core.js:
three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2026 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
