(()=>{var nc="169";var Td=0,eh=1,Ad=2;var iu=1,ic=2,Nn=3,pn=0,Vt=1,Ct=2,yn=0,Zi=1,jn=2,th=3,nh=4,Cd=5,_i=100,Rd=101,Pd=102,Id=103,Ld=104,Dd=200,Nd=201,Ud=202,Fd=203,Io=204,Lo=205,Od=206,zd=207,kd=208,Bd=209,Hd=210,Vd=211,Gd=212,Wd=213,Xd=214,Do=0,No=1,Uo=2,ji=3,Fo=4,Oo=5,zo=6,ko=7,su=0,qd=1,Yd=2,Kn=0,sc=1,rc=2,ac=3,oc=4,Zd=5,lc=6,cc=7;var ru=300,Qi=301,es=302,Bo=303,Ho=304,ta=306,Vo=1e3,Mi=1001,Go=1002,an=1003,$d=1004;var Ws=1005;var dn=1006,Za=1007;var Si=1008;var zn=1009,au=1010,ou=1011,As=1012,hc=1013,wi=1014,Fn=1015,Hn=1016,uc=1017,dc=1018,ts=1020,lu=35902,cu=1021,hu=1022,fn=1023,uu=1024,du=1025,$i=1026,ns=1027,fu=1028,fc=1029,pu=1030,pc=1031;var mc=1033,mr=33776,gr=33777,xr=33778,vr=33779,Wo=35840,Xo=35841,qo=35842,Yo=35843,Zo=36196,$o=37492,Jo=37496,Ko=37808,jo=37809,Qo=37810,el=37811,tl=37812,nl=37813,il=37814,sl=37815,rl=37816,al=37817,ol=37818,ll=37819,cl=37820,hl=37821,_r=36492,ul=36494,dl=36495,mu=36283,fl=36284,pl=36285,ml=36286;var br=2300,gl=2301,$a=2302,ih=2400,sh=2401,rh=2402;var Jd=3200,Kd=3201;var gu=0,jd=1,Jn="",vn="srgb",si="srgb-linear",gc="display-p3",na="display-p3-linear",Mr="linear",ct="srgb",Sr="rec709",wr="p3";var Di=7680;var ah=519,Qd=512,ef=513,tf=514,xu=515,nf=516,sf=517,rf=518,af=519,oh=35044,vu=35048;var lh="300 es",On=2e3,Er=2001,Qn=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;let n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;let s=this._listeners[e];if(s!==void 0){let r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;let n=this._listeners[e.type];if(n!==void 0){e.target=this;let s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}},Ut=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var Ja=Math.PI/180,xl=180/Math.PI;function Is(){let i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ut[i&255]+Ut[i>>8&255]+Ut[i>>16&255]+Ut[i>>24&255]+"-"+Ut[e&255]+Ut[e>>8&255]+"-"+Ut[e>>16&15|64]+Ut[e>>24&255]+"-"+Ut[t&63|128]+Ut[t>>8&255]+"-"+Ut[t>>16&255]+Ut[t>>24&255]+Ut[n&255]+Ut[n>>8&255]+Ut[n>>16&255]+Ut[n>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function of(i,e){return(i%e+e)%e}function Ka(i,e,t){return(1-t)*i+t*e}function gs(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var le=class i{constructor(e=0,t=0){i.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},ze=class i{constructor(e,t,n,s,r,a,o,l,c){i.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],d=n[7],f=n[2],u=n[5],g=n[8],v=s[0],m=s[3],p=s[6],b=s[1],y=s[4],w=s[7],L=s[2],T=s[5],A=s[8];return r[0]=a*v+o*b+l*L,r[3]=a*m+o*y+l*T,r[6]=a*p+o*w+l*A,r[1]=c*v+h*b+d*L,r[4]=c*m+h*y+d*T,r[7]=c*p+h*w+d*A,r[2]=f*v+u*b+g*L,r[5]=f*m+u*y+g*T,r[8]=f*p+u*w+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,f=o*l-h*r,u=c*r-a*l,g=t*d+n*f+s*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return e[0]=d*v,e[1]=(s*c-h*n)*v,e[2]=(o*n-s*a)*v,e[3]=f*v,e[4]=(h*t-s*l)*v,e[5]=(s*r-o*t)*v,e[6]=u*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*r)*v,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(ja.makeScale(e,t)),this}rotate(e){return this.premultiply(ja.makeRotation(-e)),this}translate(e,t){return this.premultiply(ja.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}},ja=new ze;function _u(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Tr(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function lf(){let i=Tr("canvas");return i.style.display="block",i}var ch={};function yr(i){i in ch||(ch[i]=!0,console.warn(i))}function cf(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function hf(i){let e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function uf(i){let e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}var hh=new ze().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),uh=new ze().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),xs={[si]:{transfer:Mr,primaries:Sr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[vn]:{transfer:ct,primaries:Sr,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[na]:{transfer:Mr,primaries:wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(uh),fromReference:i=>i.applyMatrix3(hh)},[gc]:{transfer:ct,primaries:wr,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(uh),fromReference:i=>i.applyMatrix3(hh).convertLinearToSRGB()}},df=new Set([si,na]),Je={enabled:!0,_workingColorSpace:si,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!df.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;let n=xs[e].toReference,s=xs[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return xs[i].primaries},getTransfer:function(i){return i===Jn?Mr:xs[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(xs[e].luminanceCoefficients)}};function Ji(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Qa(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}var Ni,vl=class{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ni===void 0&&(Ni=Tr("canvas")),Ni.width=e.width,Ni.height=e.height;let n=Ni.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ni}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=Tr("canvas");t.width=e.width,t.height=e.height;let n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);let s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Ji(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){let t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Ji(t[n]/255)*255):t[n]=Ji(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},ff=0,Ar=class{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ff++}),this.uuid=Is(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(eo(s[a].image)):r.push(eo(s[a]))}else r=eo(s);n.url=r}return t||(e.images[this.uuid]=n),n}};function eo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vl.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}var pf=0,Qt=class i extends Qn{constructor(e=i.DEFAULT_IMAGE,t=i.DEFAULT_MAPPING,n=Mi,s=Mi,r=dn,a=Si,o=fn,l=zn,c=i.DEFAULT_ANISOTROPY,h=Jn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:pf++}),this.uuid=Is(),this.name="",this.source=new Ar(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new le(0,0),this.repeat=new le(1,1),this.center=new le(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==ru)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Vo:e.x=e.x-Math.floor(e.x);break;case Mi:e.x=e.x<0?0:1;break;case Go:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Vo:e.y=e.y-Math.floor(e.y);break;case Mi:e.y=e.y<0?0:1;break;case Go:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};Qt.DEFAULT_IMAGE=null;Qt.DEFAULT_MAPPING=ru;Qt.DEFAULT_ANISOTROPY=1;var at=class i{constructor(e=0,t=0,n=0,s=1){i.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r,l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],u=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let y=(c+1)/2,w=(u+1)/2,L=(p+1)/2,T=(h+f)/4,A=(d+v)/4,I=(g+m)/4;return y>w&&y>L?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=T/n,r=A/n):w>L?w<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(w),n=T/s,r=I/s):L<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(L),n=A/r,s=I/r),this.set(n,s,r,t),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(f-h)*(f-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(f-h)/b,this.w=Math.acos((c+u+p-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},_l=class extends Qn{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new at(0,0,e,t),this.scissorTest=!1,this.viewport=new at(0,0,e,t);let s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:dn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);let r=new Qt(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];let a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;let t=Object.assign({},e.texture.image);return this.texture.source=new Ar(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}},en=class extends _l{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}},Cr=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var yl=class extends Qt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=an,this.minFilter=an,this.wrapR=Mi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var ei=class{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],d=n[s+3],f=r[a+0],u=r[a+1],g=r[a+2],v=r[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=u,e[t+2]=g,e[t+3]=v;return}if(d!==v||l!==f||c!==u||h!==g){let m=1-o,p=l*f+c*u+h*g+d*v,b=p>=0?1:-1,y=1-p*p;if(y>Number.EPSILON){let L=Math.sqrt(y),T=Math.atan2(L,p*b);m=Math.sin(m*T)/L,o=Math.sin(o*T)/L}let w=o*b;if(l=l*m+f*w,c=c*m+u*w,h=h*m+g*w,d=d*m+v*w,m===1-o){let L=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=L,c*=L,h*=L,d*=L}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,s,r,a){let o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],d=r[a],f=r[a+1],u=r[a+2],g=r[a+3];return e[t]=o*g+h*d+l*u-c*f,e[t+1]=l*g+h*f+c*d-o*u,e[t+2]=c*g+h*u+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),d=o(r/2),f=l(n/2),u=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"YXZ":this._x=f*h*d+c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"ZXY":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d-f*u*g;break;case"ZYX":this._x=f*h*d-c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d+f*u*g;break;case"YZX":this._x=f*h*d+c*u*g,this._y=c*u*d+f*h*g,this._z=c*h*g-f*u*d,this._w=c*h*d-f*u*g;break;case"XZY":this._x=f*h*d-c*u*g,this._y=c*u*d-f*h*g,this._z=c*h*g+f*u*d,this._w=c*h*d+f*u*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=n+o+d;if(f>0){let u=.5/Math.sqrt(f+1);this._w=.25/u,this._x=(h-l)*u,this._y=(r-c)*u,this._z=(a-s)*u}else if(n>o&&n>d){let u=2*Math.sqrt(1+n-o-d);this._w=(h-l)/u,this._x=.25*u,this._y=(s+a)/u,this._z=(r+c)/u}else if(o>d){let u=2*Math.sqrt(1+o-n-d);this._w=(r-c)/u,this._x=(s+a)/u,this._y=.25*u,this._z=(l+h)/u}else{let u=2*Math.sqrt(1+d-n-o);this._w=(a-s)/u,this._x=(r+c)/u,this._y=(l+h)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){let n=this.angleTo(e);if(n===0)return this;let s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);let n=this._x,s=this._y,r=this._z,a=this._w,o=a*e._w+n*e._x+s*e._y+r*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=s,this._z=r,this;let l=1-o*o;if(l<=Number.EPSILON){let u=1-t;return this._w=u*a+t*this._w,this._x=u*n+t*this._x,this._y=u*s+t*this._y,this._z=u*r+t*this._z,this.normalize(),this}let c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=a*d+this._w*f,this._x=n*d+this._x*f,this._y=s*d+this._y*f,this._z=r*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},C=class i{constructor(e=0,t=0,n=0){i.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(dh.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(dh.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){let t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),d=2*(r*n-a*t);return this.x=t+l*c+a*d-o*h,this.y=n+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){let n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return to.copy(this).projectOnVector(e),this.sub(to)}reflect(e){return this.sub(to.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let n=this.dot(e)/t;return Math.acos(Lt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){let s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},to=new C,dh=new ei,Ei=class{constructor(e=new C(1/0,1/0,1/0),t=new C(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(cn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(cn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let n=cn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let n=e.geometry;if(n!==void 0){let r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,cn):cn.fromBufferAttribute(r,a),cn.applyMatrix4(e.matrixWorld),this.expandByPoint(cn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Xs.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Xs.copy(n.boundingBox)),Xs.applyMatrix4(e.matrixWorld),this.union(Xs)}let s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,cn),cn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(vs),qs.subVectors(this.max,vs),Ui.subVectors(e.a,vs),Fi.subVectors(e.b,vs),Oi.subVectors(e.c,vs),Wn.subVectors(Fi,Ui),Xn.subVectors(Oi,Fi),di.subVectors(Ui,Oi);let t=[0,-Wn.z,Wn.y,0,-Xn.z,Xn.y,0,-di.z,di.y,Wn.z,0,-Wn.x,Xn.z,0,-Xn.x,di.z,0,-di.x,-Wn.y,Wn.x,0,-Xn.y,Xn.x,0,-di.y,di.x,0];return!no(t,Ui,Fi,Oi,qs)||(t=[1,0,0,0,1,0,0,0,1],!no(t,Ui,Fi,Oi,qs))?!1:(Ys.crossVectors(Wn,Xn),t=[Ys.x,Ys.y,Ys.z],no(t,Ui,Fi,Oi,qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(cn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Rn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Rn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Rn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Rn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Rn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Rn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Rn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Rn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Rn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}},Rn=[new C,new C,new C,new C,new C,new C,new C,new C],cn=new C,Xs=new Ei,Ui=new C,Fi=new C,Oi=new C,Wn=new C,Xn=new C,di=new C,vs=new C,qs=new C,Ys=new C,fi=new C;function no(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){fi.fromArray(i,r);let o=s.x*Math.abs(fi.x)+s.y*Math.abs(fi.y)+s.z*Math.abs(fi.z),l=e.dot(fi),c=t.dot(fi),h=n.dot(fi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var mf=new Ei,_s=new C,io=new C,ti=class{constructor(e=new C,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let n=this.center;t!==void 0?n.copy(t):mf.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_s.subVectors(e,this.center);let t=_s.lengthSq();if(t>this.radius*this.radius){let n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(_s,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(io.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_s.copy(e.center).add(io)),this.expandByPoint(_s.copy(e.center).sub(io))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}},Pn=new C,so=new C,Zs=new C,qn=new C,ro=new C,$s=new C,ao=new C,Rr=class{constructor(e=new C,t=new C(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Pn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Pn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Pn.copy(this.origin).addScaledVector(this.direction,t),Pn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){so.copy(e).add(t).multiplyScalar(.5),Zs.copy(t).sub(e).normalize(),qn.copy(this.origin).sub(so);let r=e.distanceTo(t)*.5,a=-this.direction.dot(Zs),o=qn.dot(this.direction),l=-qn.dot(Zs),c=qn.lengthSq(),h=Math.abs(1-a*a),d,f,u,g;if(h>0)if(d=a*l-o,f=a*o-l,g=r*h,d>=0)if(f>=-g)if(f<=g){let v=1/h;d*=v,f*=v,u=d*(d+a*f+2*o)+f*(a*d+f+2*l)+c}else f=r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f=-r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-a*r+o)),f=d>0?-r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-r,-l),r),u=f*(f+2*l)+c):(d=Math.max(0,-(a*r+o)),f=d>0?r:Math.min(Math.max(-r,-l),r),u=-d*d+f*(f+2*l)+c);else f=a>0?-r:r,d=Math.max(0,-(a*f+o)),u=-d*d+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(so).addScaledVector(Zs,f),u}intersectSphere(e,t){Pn.subVectors(e.center,this.origin);let n=Pn.dot(this.direction),s=Pn.dot(Pn)-n*n,r=e.radius*e.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){let n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Pn)!==null}intersectTriangle(e,t,n,s,r){ro.subVectors(t,e),$s.subVectors(n,e),ao.crossVectors(ro,$s);let a=this.direction.dot(ao),o;if(a>0){if(s)return null;o=1}else if(a<0)o=-1,a=-a;else return null;qn.subVectors(this.origin,e);let l=o*this.direction.dot($s.crossVectors(qn,$s));if(l<0)return null;let c=o*this.direction.dot(ro.cross(qn));if(c<0||l+c>a)return null;let h=-o*qn.dot(ao);return h<0?null:this.at(h/a,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},ht=class i{constructor(e,t,n,s,r,a,o,l,c,h,d,f,u,g,v,m){i.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,d,f,u,g,v,m)}set(e,t,n,s,r,a,o,l,c,h,d,f,u,g,v,m){let p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=f,p[3]=u,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new i().fromArray(this.elements)}copy(e){let t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){let t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){let t=this.elements,n=e.elements,s=1/zi.setFromMatrixColumn(e,0).length(),r=1/zi.setFromMatrixColumn(e,1).length(),a=1/zi.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(e.order==="XYZ"){let f=a*h,u=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=u+g*c,t[5]=f-v*c,t[9]=-o*l,t[2]=v-f*c,t[6]=g+u*c,t[10]=a*l}else if(e.order==="YXZ"){let f=l*h,u=l*d,g=c*h,v=c*d;t[0]=f+v*o,t[4]=g*o-u,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=u*o-g,t[6]=v+f*o,t[10]=a*l}else if(e.order==="ZXY"){let f=l*h,u=l*d,g=c*h,v=c*d;t[0]=f-v*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*h,t[9]=v-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let f=a*h,u=a*d,g=o*h,v=o*d;t[0]=l*h,t[4]=g*c-u,t[8]=f*c+v,t[1]=l*d,t[5]=v*c+f,t[9]=u*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let f=a*l,u=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=v-f*d,t[8]=g*d+u,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=u*d+g,t[10]=f-v*d}else if(e.order==="XZY"){let f=a*l,u=a*c,g=o*l,v=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+v,t[5]=a*h,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*h,t[10]=v*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(gf,e,xf)}lookAt(e,t,n){let s=this.elements;return Kt.subVectors(e,t),Kt.lengthSq()===0&&(Kt.z=1),Kt.normalize(),Yn.crossVectors(n,Kt),Yn.lengthSq()===0&&(Math.abs(n.z)===1?Kt.x+=1e-4:Kt.z+=1e-4,Kt.normalize(),Yn.crossVectors(n,Kt)),Yn.normalize(),Js.crossVectors(Kt,Yn),s[0]=Yn.x,s[4]=Js.x,s[8]=Kt.x,s[1]=Yn.y,s[5]=Js.y,s[9]=Kt.y,s[2]=Yn.z,s[6]=Js.z,s[10]=Kt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],d=n[5],f=n[9],u=n[13],g=n[2],v=n[6],m=n[10],p=n[14],b=n[3],y=n[7],w=n[11],L=n[15],T=s[0],A=s[4],I=s[8],B=s[12],x=s[1],M=s[5],k=s[9],V=s[13],X=s[2],te=s[6],W=s[10],se=s[14],Z=s[3],pe=s[7],me=s[11],ae=s[15];return r[0]=a*T+o*x+l*X+c*Z,r[4]=a*A+o*M+l*te+c*pe,r[8]=a*I+o*k+l*W+c*me,r[12]=a*B+o*V+l*se+c*ae,r[1]=h*T+d*x+f*X+u*Z,r[5]=h*A+d*M+f*te+u*pe,r[9]=h*I+d*k+f*W+u*me,r[13]=h*B+d*V+f*se+u*ae,r[2]=g*T+v*x+m*X+p*Z,r[6]=g*A+v*M+m*te+p*pe,r[10]=g*I+v*k+m*W+p*me,r[14]=g*B+v*V+m*se+p*ae,r[3]=b*T+y*x+w*X+L*Z,r[7]=b*A+y*M+w*te+L*pe,r[11]=b*I+y*k+w*W+L*me,r[15]=b*B+y*V+w*se+L*ae,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],u=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+r*l*d-s*c*d-r*o*f+n*c*f+s*o*u-n*l*u)+v*(+t*l*u-t*c*f+r*a*f-s*a*u+s*c*h-r*l*h)+m*(+t*c*d-t*o*u-r*a*d+n*a*u+r*o*h-n*c*h)+p*(-s*o*h-t*l*d+t*o*f+s*a*d-n*a*f+n*l*h)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){let s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){let e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],u=e[11],g=e[12],v=e[13],m=e[14],p=e[15],b=d*m*c-v*f*c+v*l*u-o*m*u-d*l*p+o*f*p,y=g*f*c-h*m*c-g*l*u+a*m*u+h*l*p-a*f*p,w=h*v*c-g*d*c+g*o*u-a*v*u-h*o*p+a*d*p,L=g*d*l-h*v*l-g*o*f+a*v*f+h*o*m-a*d*m,T=t*b+n*y+s*w+r*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let A=1/T;return e[0]=b*A,e[1]=(v*f*r-d*m*r-v*s*u+n*m*u+d*s*p-n*f*p)*A,e[2]=(o*m*r-v*l*r+v*s*c-n*m*c-o*s*p+n*l*p)*A,e[3]=(d*l*r-o*f*r-d*s*c+n*f*c+o*s*u-n*l*u)*A,e[4]=y*A,e[5]=(h*m*r-g*f*r+g*s*u-t*m*u-h*s*p+t*f*p)*A,e[6]=(g*l*r-a*m*r-g*s*c+t*m*c+a*s*p-t*l*p)*A,e[7]=(a*f*r-h*l*r+h*s*c-t*f*c-a*s*u+t*l*u)*A,e[8]=w*A,e[9]=(g*d*r-h*v*r-g*n*u+t*v*u+h*n*p-t*d*p)*A,e[10]=(a*v*r-g*o*r+g*n*c-t*v*c-a*n*p+t*o*p)*A,e[11]=(h*o*r-a*d*r-h*n*c+t*d*c+a*n*u-t*o*u)*A,e[12]=L*A,e[13]=(h*v*s-g*d*s+g*n*f-t*v*f-h*n*m+t*d*m)*A,e[14]=(g*o*s-a*v*s-g*n*l+t*v*l+a*n*m-t*o*m)*A,e[15]=(a*d*s-h*o*s+h*n*l-t*d*l-a*n*f+t*o*f)*A,this}scale(e){let t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){let s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,d=o+o,f=r*c,u=r*h,g=r*d,v=a*h,m=a*d,p=o*d,b=l*c,y=l*h,w=l*d,L=n.x,T=n.y,A=n.z;return s[0]=(1-(v+p))*L,s[1]=(u+w)*L,s[2]=(g-y)*L,s[3]=0,s[4]=(u-w)*T,s[5]=(1-(f+p))*T,s[6]=(m+b)*T,s[7]=0,s[8]=(g+y)*A,s[9]=(m-b)*A,s[10]=(1-(f+v))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){let s=this.elements,r=zi.set(s[0],s[1],s[2]).length(),a=zi.set(s[4],s[5],s[6]).length(),o=zi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],hn.copy(this);let c=1/r,h=1/a,d=1/o;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=h,hn.elements[5]*=h,hn.elements[6]*=h,hn.elements[8]*=d,hn.elements[9]*=d,hn.elements[10]*=d,t.setFromRotationMatrix(hn),n.x=r,n.y=a,n.z=o,this}makePerspective(e,t,n,s,r,a,o=On){let l=this.elements,c=2*r/(t-e),h=2*r/(n-s),d=(t+e)/(t-e),f=(n+s)/(n-s),u,g;if(o===On)u=-(a+r)/(a-r),g=-2*a*r/(a-r);else if(o===Er)u=-a/(a-r),g=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=h,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=u,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=On){let l=this.elements,c=1/(t-e),h=1/(n-s),d=1/(a-r),f=(t+e)*c,u=(n+s)*h,g,v;if(o===On)g=(a+r)*d,v=-2*d;else if(o===Er)g=r*d,v=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-f,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-u,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){let t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){let n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}},zi=new C,hn=new ht,gf=new C(0,0,0),xf=new C(1,1,1),Yn=new C,Js=new C,Kt=new C,fh=new ht,ph=new ei,bn=class i{constructor(e=0,t=0,n=0,s=i.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){let s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],u=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,u),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,u),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Lt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-Lt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,u),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return fh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(fh,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return ph.setFromEuler(this),this.setFromQuaternion(ph,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};bn.DEFAULT_ORDER="XYZ";var Pr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},vf=0,mh=new C,ki=new ei,In=new ht,Ks=new C,ys=new C,_f=new C,yf=new ei,gh=new C(1,0,0),xh=new C(0,1,0),vh=new C(0,0,1),_h={type:"added"},bf={type:"removed"},Bi={type:"childadded",child:null},oo={type:"childremoved",child:null},wt=class i extends Qn{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vf++}),this.uuid=Is(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=i.DEFAULT_UP.clone();let e=new C,t=new bn,n=new ei,s=new C(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ht},normalMatrix:{value:new ze}}),this.matrix=new ht,this.matrixWorld=new ht,this.matrixAutoUpdate=i.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=i.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Pr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.multiply(ki),this}rotateOnWorldAxis(e,t){return ki.setFromAxisAngle(e,t),this.quaternion.premultiply(ki),this}rotateX(e){return this.rotateOnAxis(gh,e)}rotateY(e){return this.rotateOnAxis(xh,e)}rotateZ(e){return this.rotateOnAxis(vh,e)}translateOnAxis(e,t){return mh.copy(e).applyQuaternion(this.quaternion),this.position.add(mh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(gh,e)}translateY(e){return this.translateOnAxis(xh,e)}translateZ(e){return this.translateOnAxis(vh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(In.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ks.copy(e):Ks.set(e,t,n);let s=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?In.lookAt(ys,Ks,this.up):In.lookAt(Ks,ys,this.up),this.quaternion.setFromRotationMatrix(In),s&&(In.extractRotation(s.matrixWorld),ki.setFromRotationMatrix(In),this.quaternion.premultiply(ki.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(_h),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bf),oo.child=e,this.dispatchEvent(oo),oo.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),In.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),In.multiply(e.parent.matrixWorld)),e.applyMatrix4(In),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(_h),Bi.child=e,this.dispatchEvent(Bi),Bi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){let a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,_f),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,yf,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){let t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(e.shapes,d)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),f=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),d.length>0&&(n.shapes=d),f.length>0&&(n.skeletons=f),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=s,n;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){let s=e.children[n];this.add(s.clone())}return this}};wt.DEFAULT_UP=new C(0,1,0);wt.DEFAULT_MATRIX_AUTO_UPDATE=!0;wt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var un=new C,Ln=new C,lo=new C,Dn=new C,Hi=new C,Vi=new C,yh=new C,co=new C,ho=new C,uo=new C,fo=new at,po=new at,mo=new at,yi=class i{constructor(e=new C,t=new C,n=new C){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),un.subVectors(e,t),s.cross(un);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){un.subVectors(s,t),Ln.subVectors(n,t),lo.subVectors(e,t);let a=un.dot(un),o=un.dot(Ln),l=un.dot(lo),c=Ln.dot(Ln),h=Ln.dot(lo),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let f=1/d,u=(c*l-o*h)*f,g=(a*h-o*l)*f;return r.set(1-u-g,g,u)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Dn)===null?!1:Dn.x>=0&&Dn.y>=0&&Dn.x+Dn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Dn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Dn.x),l.addScaledVector(a,Dn.y),l.addScaledVector(o,Dn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return fo.setScalar(0),po.setScalar(0),mo.setScalar(0),fo.fromBufferAttribute(e,t),po.fromBufferAttribute(e,n),mo.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(fo,r.x),a.addScaledVector(po,r.y),a.addScaledVector(mo,r.z),a}static isFrontFacing(e,t,n,s){return un.subVectors(n,t),Ln.subVectors(e,t),un.cross(Ln).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return un.subVectors(this.c,this.b),Ln.subVectors(this.a,this.b),un.cross(Ln).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return i.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let n=this.a,s=this.b,r=this.c,a,o;Hi.subVectors(s,n),Vi.subVectors(r,n),co.subVectors(e,n);let l=Hi.dot(co),c=Vi.dot(co);if(l<=0&&c<=0)return t.copy(n);ho.subVectors(e,s);let h=Hi.dot(ho),d=Vi.dot(ho);if(h>=0&&d<=h)return t.copy(s);let f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(Hi,a);uo.subVectors(e,r);let u=Hi.dot(uo),g=Vi.dot(uo);if(g>=0&&u<=g)return t.copy(r);let v=u*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(n).addScaledVector(Vi,o);let m=h*g-u*d;if(m<=0&&d-h>=0&&u-g>=0)return yh.subVectors(r,s),o=(d-h)/(d-h+(u-g)),t.copy(s).addScaledVector(yh,o);let p=1/(m+v+f);return a=v*p,o=f*p,t.copy(n).addScaledVector(Hi,a).addScaledVector(Vi,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},yu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},js={h:0,s:0,l:0};function go(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}var Ce=class{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){let s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=vn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Je.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Je.workingColorSpace){return this.r=e,this.g=t,this.b=n,Je.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Je.workingColorSpace){if(e=of(e,1),t=Lt(t,0,1),n=Lt(n,0,1),t===0)this.r=this.g=this.b=n;else{let r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=go(a,r,e+1/3),this.g=go(a,r,e),this.b=go(a,r,e-1/3)}return Je.toWorkingColorSpace(this,s),this}setStyle(e,t=vn){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=vn){let n=yu[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Ji(e.r),this.g=Ji(e.g),this.b=Ji(e.b),this}copyLinearToSRGB(e){return this.r=Qa(e.r),this.g=Qa(e.g),this.b=Qa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=vn){return Je.fromWorkingColorSpace(Ft.copy(this),e),Math.round(Lt(Ft.r*255,0,255))*65536+Math.round(Lt(Ft.g*255,0,255))*256+Math.round(Lt(Ft.b*255,0,255))}getHexString(e=vn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Je.workingColorSpace){Je.fromWorkingColorSpace(Ft.copy(this),t);let n=Ft.r,s=Ft.g,r=Ft.b,a=Math.max(n,s,r),o=Math.min(n,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case n:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-n)/d+2;break;case r:l=(n-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Je.workingColorSpace){return Je.fromWorkingColorSpace(Ft.copy(this),t),e.r=Ft.r,e.g=Ft.g,e.b=Ft.b,e}getStyle(e=vn){Je.fromWorkingColorSpace(Ft.copy(this),e);let t=Ft.r,n=Ft.g,s=Ft.b;return e!==vn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Zn),this.setHSL(Zn.h+e,Zn.s+t,Zn.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zn),e.getHSL(js);let n=Ka(Zn.h,js.h,t),s=Ka(Zn.s,js.s,t),r=Ka(Zn.l,js.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Ft=new Ce;Ce.NAMES=yu;var Mf=0,ni=class extends Qn{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Mf++}),this.uuid=Is(),this.name="",this.type="Material",this.blending=Zi,this.side=pn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Io,this.blendDst=Lo,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ce(0,0,0),this.blendAlpha=0,this.depthFunc=ji,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ah,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Di,this.stencilZFail=Di,this.stencilZPass=Di,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}let s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zi&&(n.blending=this.blending),this.side!==pn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Io&&(n.blendSrc=this.blendSrc),this.blendDst!==Lo&&(n.blendDst=this.blendDst),this.blendEquation!==_i&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ji&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ah&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Di&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Di&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Di&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(t){let r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,n=null;if(t!==null){let s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}},Wt=class extends ni{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ce(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.combine=su,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}};var St=new C,Qs=new le,Gt=class{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=Fn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qs.fromBufferAttribute(this,t),Qs.applyMatrix3(e),this.setXY(t,Qs.x,Qs.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix3(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyMatrix4(e),this.setXYZ(t,St.x,St.y,St.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.applyNormalMatrix(e),this.setXYZ(t,St.x,St.y,St.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)St.fromBufferAttribute(this,t),St.transformDirection(e),this.setXYZ(t,St.x,St.y,St.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=gs(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=gs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=gs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=gs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=gs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}};var Ir=class extends Gt{constructor(e,t,n){super(new Uint16Array(e),t,n)}};var Lr=class extends Gt{constructor(e,t,n){super(new Uint32Array(e),t,n)}};var tt=class extends Gt{constructor(e,t,n){super(new Float32Array(e),t,n)}},Sf=0,rn=new ht,xo=new wt,Gi=new C,jt=new Ei,bs=new Ei,At=new C,Rt=class i extends Qn{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Sf++}),this.uuid=Is(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_u(e)?Lr:Ir)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let n=this.attributes.normal;if(n!==void 0){let r=new ze().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return rn.makeRotationFromQuaternion(e),this.applyMatrix4(rn),this}rotateX(e){return rn.makeRotationX(e),this.applyMatrix4(rn),this}rotateY(e){return rn.makeRotationY(e),this.applyMatrix4(rn),this}rotateZ(e){return rn.makeRotationZ(e),this.applyMatrix4(rn),this}translate(e,t,n){return rn.makeTranslation(e,t,n),this.applyMatrix4(rn),this}scale(e,t,n){return rn.makeScale(e,t,n),this.applyMatrix4(rn),this}lookAt(e){return xo.lookAt(e),xo.updateMatrix(),this.applyMatrix4(xo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Gi).negate(),this.translate(Gi.x,Gi.y,Gi.z),this}setFromPoints(e){let t=[];for(let n=0,s=e.length;n<s;n++){let r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new tt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ei);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new C(-1/0,-1/0,-1/0),new C(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){let r=t[n];jt.setFromBufferAttribute(r),this.morphTargetsRelative?(At.addVectors(this.boundingBox.min,jt.min),this.boundingBox.expandByPoint(At),At.addVectors(this.boundingBox.max,jt.max),this.boundingBox.expandByPoint(At)):(this.boundingBox.expandByPoint(jt.min),this.boundingBox.expandByPoint(jt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new C,1/0);return}if(e){let n=this.boundingSphere.center;if(jt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){let o=t[r];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(At.addVectors(jt.min,bs.min),jt.expandByPoint(At),At.addVectors(jt.max,bs.max),jt.expandByPoint(At)):(jt.expandByPoint(bs.min),jt.expandByPoint(bs.max))}jt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)At.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(At));if(t)for(let r=0,a=t.length;r<a;r++){let o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)At.fromBufferAttribute(o,c),l&&(Gi.fromBufferAttribute(e,c),At.add(Gi)),s=Math.max(s,n.distanceToSquared(At))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Gt(new Float32Array(4*n.count),4));let a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new C,l[I]=new C;let c=new C,h=new C,d=new C,f=new le,u=new le,g=new le,v=new C,m=new C;function p(I,B,x){c.fromBufferAttribute(n,I),h.fromBufferAttribute(n,B),d.fromBufferAttribute(n,x),f.fromBufferAttribute(r,I),u.fromBufferAttribute(r,B),g.fromBufferAttribute(r,x),h.sub(c),d.sub(c),u.sub(f),g.sub(f);let M=1/(u.x*g.y-g.x*u.y);isFinite(M)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(M),m.copy(d).multiplyScalar(u.x).addScaledVector(h,-g.x).multiplyScalar(M),o[I].add(v),o[B].add(v),o[x].add(v),l[I].add(m),l[B].add(m),l[x].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let I=0,B=b.length;I<B;++I){let x=b[I],M=x.start,k=x.count;for(let V=M,X=M+k;V<X;V+=3)p(e.getX(V+0),e.getX(V+1),e.getX(V+2))}let y=new C,w=new C,L=new C,T=new C;function A(I){L.fromBufferAttribute(s,I),T.copy(L);let B=o[I];y.copy(B),y.sub(L.multiplyScalar(L.dot(B))).normalize(),w.crossVectors(T,B);let M=w.dot(l[I])<0?-1:1;a.setXYZW(I,y.x,y.y,y.z,M)}for(let I=0,B=b.length;I<B;++I){let x=b[I],M=x.start,k=x.count;for(let V=M,X=M+k;V<X;V+=3)A(e.getX(V+0)),A(e.getX(V+1)),A(e.getX(V+2))}}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Gt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,u=n.count;f<u;f++)n.setXYZ(f,0,0,0);let s=new C,r=new C,a=new C,o=new C,l=new C,c=new C,h=new C,d=new C;if(e)for(let f=0,u=e.count;f<u;f+=3){let g=e.getX(f+0),v=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),a.fromBufferAttribute(t,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),o.add(h),l.add(h),c.add(h),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,u=t.count;f<u;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)At.fromBufferAttribute(e,t),At.normalize(),e.setXYZ(t,At.x,At.y,At.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h),u=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?u=l[v]*o.data.stride+o.offset:u=l[v]*h;for(let p=0;p<h;p++)f[g++]=c[u++]}return new Gt(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new i,n=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=e(l,n);t.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let f=c[h],u=e(f,n);l.push(u)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let n=this.attributes;for(let l in n){let c=n[l];e.data.attributes[l]=c.toJSON(e.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){let u=c[d];h.push(u.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let n=e.index;n!==null&&this.setIndex(n.clone(t));let s=e.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(t))}let r=e.morphAttributes;for(let c in r){let h=[],d=r[c];for(let f=0,u=d.length;f<u;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}},bh=new ht,pi=new Rr,er=new ti,Mh=new C,tr=new C,nr=new C,ir=new C,vo=new C,sr=new C,Sh=new C,rr=new C,Re=class extends wt{constructor(e=new Rt,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){let n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);let o=this.morphTargetInfluences;if(r&&o){sr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(vo.fromBufferAttribute(d,e),a?sr.addScaledVector(vo,h):sr.addScaledVector(vo.sub(t),h))}t.add(sr)}return t}raycast(e,t){let n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),er.copy(n.boundingSphere),er.applyMatrix4(r),pi.copy(e.ray).recast(e.near),!(er.containsPoint(pi.origin)===!1&&(pi.intersectSphere(er,Mh)===null||pi.origin.distanceToSquared(Mh)>(e.far-e.near)**2))&&(bh.copy(r).invert(),pi.copy(e.ray).applyMatrix4(bh),!(n.boundingBox!==null&&pi.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pi)))}_computeIntersections(e,t,n){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,f=r.groups,u=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),y=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let w=b,L=y;w<L;w+=3){let T=o.getX(w),A=o.getX(w+1),I=o.getX(w+2);s=ar(this,p,e,n,c,h,d,T,A,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(o.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let b=o.getX(m),y=o.getX(m+1),w=o.getX(m+2);s=ar(this,a,e,n,c,h,d,b,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=f.length;g<v;g++){let m=f[g],p=a[m.materialIndex],b=Math.max(m.start,u.start),y=Math.min(l.count,Math.min(m.start+m.count,u.start+u.count));for(let w=b,L=y;w<L;w+=3){let T=w,A=w+1,I=w+2;s=ar(this,p,e,n,c,h,d,T,A,I),s&&(s.faceIndex=Math.floor(w/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{let g=Math.max(0,u.start),v=Math.min(l.count,u.start+u.count);for(let m=g,p=v;m<p;m+=3){let b=m,y=m+1,w=m+2;s=ar(this,a,e,n,c,h,d,b,y,w),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}};function wf(i,e,t,n,s,r,a,o){let l;if(e.side===Vt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===pn,o),l===null)return null;rr.copy(o),rr.applyMatrix4(i.matrixWorld);let c=t.ray.origin.distanceTo(rr);return c<t.near||c>t.far?null:{distance:c,point:rr.clone(),object:i}}function ar(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,tr),i.getVertexPosition(l,nr),i.getVertexPosition(c,ir);let h=wf(i,e,t,n,tr,nr,ir,Sh);if(h){let d=new C;yi.getBarycoord(Sh,tr,nr,ir,d),s&&(h.uv=yi.getInterpolatedAttribute(s,o,l,c,d,new le)),r&&(h.uv1=yi.getInterpolatedAttribute(r,o,l,c,d,new le)),a&&(h.normal=yi.getInterpolatedAttribute(a,o,l,c,d,new C),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));let f={a:o,b:l,c,normal:new C,materialIndex:0};yi.getNormal(tr,nr,ir,f.normal),h.face=f,h.barycoord=d}return h}var Xt=class i extends Rt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],f=0,u=0;g("z","y","x",-1,-1,n,t,e,a,r,0),g("z","y","x",1,-1,n,t,-e,a,r,1),g("x","z","y",1,1,e,n,t,s,a,2),g("x","z","y",1,-1,e,n,-t,s,a,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new tt(c,3)),this.setAttribute("normal",new tt(h,3)),this.setAttribute("uv",new tt(d,2));function g(v,m,p,b,y,w,L,T,A,I,B){let x=w/A,M=L/I,k=w/2,V=L/2,X=T/2,te=A+1,W=I+1,se=0,Z=0,pe=new C;for(let me=0;me<W;me++){let ae=me*M-V;for(let Ve=0;Ve<te;Ve++){let Ye=Ve*x-k;pe[v]=Ye*b,pe[m]=ae*y,pe[p]=X,c.push(pe.x,pe.y,pe.z),pe[v]=0,pe[m]=0,pe[p]=T>0?1:-1,h.push(pe.x,pe.y,pe.z),d.push(Ve/A),d.push(1-me/I),se+=1}}for(let me=0;me<I;me++)for(let ae=0;ae<A;ae++){let Ve=f+ae+te*me,Ye=f+ae+te*(me+1),$=f+(ae+1)+te*(me+1),ie=f+(ae+1)+te*me;l.push(Ve,Ye,ie),l.push(Ye,$,ie),Z+=6}o.addGroup(u,Z,B),u+=Z,f+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};function is(i){let e={};for(let t in i){e[t]={};for(let n in i[t]){let s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function zt(i){let e={};for(let t=0;t<i.length;t++){let n=is(i[t]);for(let s in n)e[s]=n[s]}return e}function Ef(i){let e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function bu(i){let e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Je.workingColorSpace}var Ls={clone:is,merge:zt},Tf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Af=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,qt=class extends ni{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tf,this.fragmentShader=Af,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=is(e.uniforms),this.uniformsGroups=Ef(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let n={};for(let s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}},Dr=class extends wt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ht,this.projectionMatrix=new ht,this.projectionMatrixInverse=new ht,this.coordinateSystem=On}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}},$n=new C,wh=new le,Eh=new le,Ot=class extends Dr{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=xl*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(Ja*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return xl*2*Math.atan(Math.tan(Ja*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){$n.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set($n.x,$n.y).multiplyScalar(-e/$n.z),$n.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set($n.x,$n.y).multiplyScalar(-e/$n.z)}getViewSize(e,t){return this.getViewBounds(e,wh,Eh),t.subVectors(Eh,wh)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(Ja*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}let o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}},Wi=-90,Xi=1,bl=class extends wt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new Ot(Wi,Xi,e,t);s.layers=this.layers,this.add(s);let r=new Ot(Wi,Xi,e,t);r.layers=this.layers,this.add(r);let a=new Ot(Wi,Xi,e,t);a.layers=this.layers,this.add(a);let o=new Ot(Wi,Xi,e,t);o.layers=this.layers,this.add(o);let l=new Ot(Wi,Xi,e,t);l.layers=this.layers,this.add(l);let c=new Ot(Wi,Xi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(let c of t)this.remove(c);if(e===On)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Er)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,a),e.setRenderTarget(n,2,s),e.render(t,o),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(d,f,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}},Nr=class extends Qt{constructor(e,t,n,s,r,a,o,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Qi,super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Ml=class extends en{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Nr(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:dn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Xt(5,5,5),r=new qt({name:"CubemapFromEquirect",uniforms:is(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Vt,blending:yn});r.uniforms.tEquirect.value=t;let a=new Re(s,r),o=t.minFilter;return t.minFilter===Si&&(t.minFilter=dn),new bl(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,s){let r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}},_o=new C,Cf=new C,Rf=new ze,Un=class{constructor(e=new C(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){let s=_o.subVectors(n,t).cross(Cf.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){let n=e.delta(_o),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){let t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let n=t||Rf.getNormalMatrix(e),s=this.coplanarPoint(_o).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}},mi=new ti,or=new C,Cs=class{constructor(e=new Un,t=new Un,n=new Un,s=new Un,r=new Un,a=new Un){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){let t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=On){let n=this.planes,s=e.elements,r=s[0],a=s[1],o=s[2],l=s[3],c=s[4],h=s[5],d=s[6],f=s[7],u=s[8],g=s[9],v=s[10],m=s[11],p=s[12],b=s[13],y=s[14],w=s[15];if(n[0].setComponents(l-r,f-c,m-u,w-p).normalize(),n[1].setComponents(l+r,f+c,m+u,w+p).normalize(),n[2].setComponents(l+a,f+h,m+g,w+b).normalize(),n[3].setComponents(l-a,f-h,m-g,w-b).normalize(),n[4].setComponents(l-o,f-d,m-v,w-y).normalize(),t===On)n[5].setComponents(l+o,f+d,m+v,w+y).normalize();else if(t===Er)n[5].setComponents(o,d,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mi)}intersectsSprite(e){return mi.center.set(0,0,0),mi.radius=.7071067811865476,mi.applyMatrix4(e.matrixWorld),this.intersectsSphere(mi)}intersectsSphere(e){let t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){let t=this.planes;for(let n=0;n<6;n++){let s=t[n];if(or.x=s.normal.x>0?e.max.x:e.min.x,or.y=s.normal.y>0?e.max.y:e.min.y,or.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(or)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};function Mu(){let i=null,e=!1,t=null,n=null;function s(r,a){t(r,a),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pf(i){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let u;if(c instanceof Float32Array)u=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?u=i.HALF_FLOAT:u=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)u=i.SHORT;else if(c instanceof Uint32Array)u=i.UNSIGNED_INT;else if(c instanceof Int32Array)u=i.INT;else if(c instanceof Int8Array)u=i.BYTE;else if(c instanceof Uint8Array)u=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)u=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:u,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,l,c){let h=l.array,d=l.updateRanges;if(i.bindBuffer(c,o),d.length===0)i.bufferSubData(c,0,h);else{d.sort((u,g)=>u.start-g.start);let f=0;for(let u=1;u<d.length;u++){let g=d[f],v=d[u];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++f,d[f]=v)}d.length=f+1;for(let u=0,g=d.length;u<g;u++){let v=d[u];i.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var kn=class i extends Rt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};let r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,u=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let b=p*f-a;for(let y=0;y<c;y++){let w=y*d-r;g.push(w,-b,0),v.push(0,0,1),m.push(y/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let y=b+c*p,w=b+c*(p+1),L=b+1+c*(p+1),T=b+1+c*p;u.push(y,w,T),u.push(w,L,T)}this.setIndex(u),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.width,e.height,e.widthSegments,e.heightSegments)}},If=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Lf=`#ifdef USE_ALPHAHASH
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
#endif`,Df=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Uf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ff=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Of=`#ifdef USE_AOMAP
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
#endif`,zf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kf=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Bf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gf=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wf=`#ifdef USE_IRIDESCENCE
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
#endif`,Xf=`#ifdef USE_BUMPMAP
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
#endif`,qf=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Yf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Zf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$f=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Jf=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Kf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jf=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qf=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,ep=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,tp=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,np=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,ip=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,sp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ap=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,op="gl_FragColor = linearToOutputTexel( gl_FragColor );",lp=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,cp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,hp=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,up=`#ifdef USE_ENVMAP
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
#endif`,dp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,fp=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,pp=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,mp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,gp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,xp=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vp=`#ifdef USE_GRADIENTMAP
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
}`,_p=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,yp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,bp=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Mp=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,Sp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,wp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ep=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Tp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ap=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Cp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Rp=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
		vec3 iridescenceF0;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
		float roughness = material.clearcoatRoughness;
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
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
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
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Pp=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ip=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Lp=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Dp=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Np=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Up=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Fp=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Op=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,zp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Bp=`#if defined( USE_POINTS_UV )
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
#endif`,Hp=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Vp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Gp=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Wp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Xp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,qp=`#ifdef USE_MORPHTARGETS
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
#endif`,Yp=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Zp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$p=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Jp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qp=`#ifdef USE_NORMALMAP
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
#endif`,em=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,nm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,im=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sm=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rm=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,am=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,om=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lm=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cm=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hm=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,um=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,fm=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
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
#endif`,pm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
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
#endif`,mm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,gm=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,xm=`#ifdef USE_SKINNING
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
#endif`,vm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_m=`#ifdef USE_SKINNING
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
#endif`,ym=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,bm=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Mm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Sm=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,wm=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Em=`#ifdef USE_TRANSMISSION
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
#endif`,Tm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Am=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,Pm=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Im=`uniform sampler2D t2D;
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
}`,Lm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Nm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Um=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fm=`#include <common>
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
}`,Om=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,zm=`#define DISTANCE
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
}`,km=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hm=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vm=`uniform float scale;
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
}`,Gm=`uniform vec3 diffuse;
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
}`,Wm=`#include <common>
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
}`,Xm=`uniform vec3 diffuse;
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
}`,qm=`#define LAMBERT
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
}`,Ym=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Zm=`#define MATCAP
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
}`,$m=`#define MATCAP
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
}`,Jm=`#define NORMAL
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
}`,Km=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,jm=`#define PHONG
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
}`,Qm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
}`,eg=`#define STANDARD
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
}`,tg=`#define STANDARD
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
#ifdef USE_DISPERSION
	uniform float dispersion;
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
#include <packing>
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
#include <cube_uv_reflection_fragment>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,ng=`#define TOON
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
}`,ig=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,sg=`uniform float size;
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
}`,rg=`uniform vec3 diffuse;
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
}`,ag=`#include <common>
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
}`,og=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,lg=`uniform float rotation;
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
}`,cg=`uniform vec3 diffuse;
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
}`,Oe={alphahash_fragment:If,alphahash_pars_fragment:Lf,alphamap_fragment:Df,alphamap_pars_fragment:Nf,alphatest_fragment:Uf,alphatest_pars_fragment:Ff,aomap_fragment:Of,aomap_pars_fragment:zf,batching_pars_vertex:kf,batching_vertex:Bf,begin_vertex:Hf,beginnormal_vertex:Vf,bsdfs:Gf,iridescence_fragment:Wf,bumpmap_pars_fragment:Xf,clipping_planes_fragment:qf,clipping_planes_pars_fragment:Yf,clipping_planes_pars_vertex:Zf,clipping_planes_vertex:$f,color_fragment:Jf,color_pars_fragment:Kf,color_pars_vertex:jf,color_vertex:Qf,common:ep,cube_uv_reflection_fragment:tp,defaultnormal_vertex:np,displacementmap_pars_vertex:ip,displacementmap_vertex:sp,emissivemap_fragment:rp,emissivemap_pars_fragment:ap,colorspace_fragment:op,colorspace_pars_fragment:lp,envmap_fragment:cp,envmap_common_pars_fragment:hp,envmap_pars_fragment:up,envmap_pars_vertex:dp,envmap_physical_pars_fragment:Sp,envmap_vertex:fp,fog_vertex:pp,fog_pars_vertex:mp,fog_fragment:gp,fog_pars_fragment:xp,gradientmap_pars_fragment:vp,lightmap_pars_fragment:_p,lights_lambert_fragment:yp,lights_lambert_pars_fragment:bp,lights_pars_begin:Mp,lights_toon_fragment:wp,lights_toon_pars_fragment:Ep,lights_phong_fragment:Tp,lights_phong_pars_fragment:Ap,lights_physical_fragment:Cp,lights_physical_pars_fragment:Rp,lights_fragment_begin:Pp,lights_fragment_maps:Ip,lights_fragment_end:Lp,logdepthbuf_fragment:Dp,logdepthbuf_pars_fragment:Np,logdepthbuf_pars_vertex:Up,logdepthbuf_vertex:Fp,map_fragment:Op,map_pars_fragment:zp,map_particle_fragment:kp,map_particle_pars_fragment:Bp,metalnessmap_fragment:Hp,metalnessmap_pars_fragment:Vp,morphinstance_vertex:Gp,morphcolor_vertex:Wp,morphnormal_vertex:Xp,morphtarget_pars_vertex:qp,morphtarget_vertex:Yp,normal_fragment_begin:Zp,normal_fragment_maps:$p,normal_pars_fragment:Jp,normal_pars_vertex:Kp,normal_vertex:jp,normalmap_pars_fragment:Qp,clearcoat_normal_fragment_begin:em,clearcoat_normal_fragment_maps:tm,clearcoat_pars_fragment:nm,iridescence_pars_fragment:im,opaque_fragment:sm,packing:rm,premultiplied_alpha_fragment:am,project_vertex:om,dithering_fragment:lm,dithering_pars_fragment:cm,roughnessmap_fragment:hm,roughnessmap_pars_fragment:um,shadowmap_pars_fragment:dm,shadowmap_pars_vertex:fm,shadowmap_vertex:pm,shadowmask_pars_fragment:mm,skinbase_vertex:gm,skinning_pars_vertex:xm,skinning_vertex:vm,skinnormal_vertex:_m,specularmap_fragment:ym,specularmap_pars_fragment:bm,tonemapping_fragment:Mm,tonemapping_pars_fragment:Sm,transmission_fragment:wm,transmission_pars_fragment:Em,uv_pars_fragment:Tm,uv_pars_vertex:Am,uv_vertex:Cm,worldpos_vertex:Rm,background_vert:Pm,background_frag:Im,backgroundCube_vert:Lm,backgroundCube_frag:Dm,cube_vert:Nm,cube_frag:Um,depth_vert:Fm,depth_frag:Om,distanceRGBA_vert:zm,distanceRGBA_frag:km,equirect_vert:Bm,equirect_frag:Hm,linedashed_vert:Vm,linedashed_frag:Gm,meshbasic_vert:Wm,meshbasic_frag:Xm,meshlambert_vert:qm,meshlambert_frag:Ym,meshmatcap_vert:Zm,meshmatcap_frag:$m,meshnormal_vert:Jm,meshnormal_frag:Km,meshphong_vert:jm,meshphong_frag:Qm,meshphysical_vert:eg,meshphysical_frag:tg,meshtoon_vert:ng,meshtoon_frag:ig,points_vert:sg,points_frag:rg,shadow_vert:ag,shadow_frag:og,sprite_vert:lg,sprite_frag:cg},oe={common:{diffuse:{value:new Ce(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ze}},envmap:{envMap:{value:null},envMapRotation:{value:new ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ze},normalScale:{value:new le(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ce(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Ce(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0},uvTransform:{value:new ze}},sprite:{diffuse:{value:new Ce(16777215)},opacity:{value:1},center:{value:new le(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ze},alphaMap:{value:null},alphaMapTransform:{value:new ze},alphaTest:{value:0}}},_n={basic:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:Oe.meshbasic_vert,fragmentShader:Oe.meshbasic_frag},lambert:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshlambert_vert,fragmentShader:Oe.meshlambert_frag},phong:{uniforms:zt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},specular:{value:new Ce(1118481)},shininess:{value:30}}]),vertexShader:Oe.meshphong_vert,fragmentShader:Oe.meshphong_frag},standard:{uniforms:zt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag},toon:{uniforms:zt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Ce(0)}}]),vertexShader:Oe.meshtoon_vert,fragmentShader:Oe.meshtoon_frag},matcap:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:Oe.meshmatcap_vert,fragmentShader:Oe.meshmatcap_frag},points:{uniforms:zt([oe.points,oe.fog]),vertexShader:Oe.points_vert,fragmentShader:Oe.points_frag},dashed:{uniforms:zt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Oe.linedashed_vert,fragmentShader:Oe.linedashed_frag},depth:{uniforms:zt([oe.common,oe.displacementmap]),vertexShader:Oe.depth_vert,fragmentShader:Oe.depth_frag},normal:{uniforms:zt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:Oe.meshnormal_vert,fragmentShader:Oe.meshnormal_frag},sprite:{uniforms:zt([oe.sprite,oe.fog]),vertexShader:Oe.sprite_vert,fragmentShader:Oe.sprite_frag},background:{uniforms:{uvTransform:{value:new ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Oe.background_vert,fragmentShader:Oe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ze}},vertexShader:Oe.backgroundCube_vert,fragmentShader:Oe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Oe.cube_vert,fragmentShader:Oe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Oe.equirect_vert,fragmentShader:Oe.equirect_frag},distanceRGBA:{uniforms:zt([oe.common,oe.displacementmap,{referencePosition:{value:new C},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Oe.distanceRGBA_vert,fragmentShader:Oe.distanceRGBA_frag},shadow:{uniforms:zt([oe.lights,oe.fog,{color:{value:new Ce(0)},opacity:{value:1}}]),vertexShader:Oe.shadow_vert,fragmentShader:Oe.shadow_frag}};_n.physical={uniforms:zt([_n.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ze},clearcoatNormalScale:{value:new le(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ze},sheen:{value:0},sheenColor:{value:new Ce(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ze},transmissionSamplerSize:{value:new le},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ze},attenuationDistance:{value:0},attenuationColor:{value:new Ce(0)},specularColor:{value:new Ce(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ze},anisotropyVector:{value:new le},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ze}}]),vertexShader:Oe.meshphysical_vert,fragmentShader:Oe.meshphysical_frag};var lr={r:0,b:0,g:0},gi=new bn,hg=new ht;function ug(i,e,t,n,s,r,a){let o=new Ce(0),l=r===!0?0:1,c,h,d=null,f=0,u=null;function g(b){let y=b.isScene===!0?b.background:null;return y&&y.isTexture&&(y=(b.backgroundBlurriness>0?t:e).get(y)),y}function v(b){let y=!1,w=g(b);w===null?p(o,l):w&&w.isColor&&(p(w,1),y=!0);let L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(b,y){let w=g(y);w&&(w.isCubeTexture||w.mapping===ta)?(h===void 0&&(h=new Re(new Xt(1,1,1),new qt({name:"BackgroundCubeMaterial",uniforms:is(_n.backgroundCube.uniforms),vertexShader:_n.backgroundCube.vertexShader,fragmentShader:_n.backgroundCube.fragmentShader,side:Vt,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(L,T,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),gi.copy(y.backgroundRotation),gi.x*=-1,gi.y*=-1,gi.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),h.material.uniforms.envMap.value=w,h.material.uniforms.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(hg.makeRotationFromEuler(gi)),h.material.toneMapped=Je.getTransfer(w.colorSpace)!==ct,(d!==w||f!==w.version||u!==i.toneMapping)&&(h.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(c===void 0&&(c=new Re(new kn(2,2),new qt({name:"BackgroundMaterial",uniforms:is(_n.background.uniforms),vertexShader:_n.background.vertexShader,fragmentShader:_n.background.fragmentShader,side:pn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=w,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Je.getTransfer(w.colorSpace)!==ct,w.matrixAutoUpdate===!0&&w.updateMatrix(),c.material.uniforms.uvTransform.value.copy(w.matrix),(d!==w||f!==w.version||u!==i.toneMapping)&&(c.material.needsUpdate=!0,d=w,f=w.version,u=i.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null))}function p(b,y){b.getRGB(lr,bu(i)),n.buffers.color.setClear(lr.r,lr.g,lr.b,y,a)}return{getClearColor:function(){return o},setClearColor:function(b,y=1){o.set(b),l=y,p(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(b){l=b,p(o,l)},render:v,addToRenderList:m}}function dg(i,e){let t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null),r=s,a=!1;function o(x,M,k,V,X){let te=!1,W=d(V,k,M);r!==W&&(r=W,c(r.object)),te=u(x,V,k,X),te&&g(x,V,k,X),X!==null&&e.update(X,i.ELEMENT_ARRAY_BUFFER),(te||a)&&(a=!1,w(x,M,k,V),X!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function d(x,M,k){let V=k.wireframe===!0,X=n[x.id];X===void 0&&(X={},n[x.id]=X);let te=X[M.id];te===void 0&&(te={},X[M.id]=te);let W=te[V];return W===void 0&&(W=f(l()),te[V]=W),W}function f(x){let M=[],k=[],V=[];for(let X=0;X<t;X++)M[X]=0,k[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:k,attributeDivisors:V,object:x,attributes:{},index:null}}function u(x,M,k,V){let X=r.attributes,te=M.attributes,W=0,se=k.getAttributes();for(let Z in se)if(se[Z].location>=0){let me=X[Z],ae=te[Z];if(ae===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(ae=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(ae=x.instanceColor)),me===void 0||me.attribute!==ae||ae&&me.data!==ae.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function g(x,M,k,V){let X={},te=M.attributes,W=0,se=k.getAttributes();for(let Z in se)if(se[Z].location>=0){let me=te[Z];me===void 0&&(Z==="instanceMatrix"&&x.instanceMatrix&&(me=x.instanceMatrix),Z==="instanceColor"&&x.instanceColor&&(me=x.instanceColor));let ae={};ae.attribute=me,me&&me.data&&(ae.data=me.data),X[Z]=ae,W++}r.attributes=X,r.attributesNum=W,r.index=V}function v(){let x=r.newAttributes;for(let M=0,k=x.length;M<k;M++)x[M]=0}function m(x){p(x,0)}function p(x,M){let k=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;k[x]=1,V[x]===0&&(i.enableVertexAttribArray(x),V[x]=1),X[x]!==M&&(i.vertexAttribDivisor(x,M),X[x]=M)}function b(){let x=r.newAttributes,M=r.enabledAttributes;for(let k=0,V=M.length;k<V;k++)M[k]!==x[k]&&(i.disableVertexAttribArray(k),M[k]=0)}function y(x,M,k,V,X,te,W){W===!0?i.vertexAttribIPointer(x,M,k,X,te):i.vertexAttribPointer(x,M,k,V,X,te)}function w(x,M,k,V){v();let X=V.attributes,te=k.getAttributes(),W=M.defaultAttributeValues;for(let se in te){let Z=te[se];if(Z.location>=0){let pe=X[se];if(pe===void 0&&(se==="instanceMatrix"&&x.instanceMatrix&&(pe=x.instanceMatrix),se==="instanceColor"&&x.instanceColor&&(pe=x.instanceColor)),pe!==void 0){let me=pe.normalized,ae=pe.itemSize,Ve=e.get(pe);if(Ve===void 0)continue;let Ye=Ve.buffer,$=Ve.type,ie=Ve.bytesPerElement,_e=$===i.INT||$===i.UNSIGNED_INT||pe.gpuType===hc;if(pe.isInterleavedBufferAttribute){let he=pe.data,ve=he.stride,Pe=pe.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<Z.locationSize;Ge++)p(Z.location+Ge,he.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<Z.locationSize;Ge++)m(Z.location+Ge);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let Ge=0;Ge<Z.locationSize;Ge++)y(Z.location+Ge,ae/Z.locationSize,$,me,ve*ie,(Pe+ae/Z.locationSize*Ge)*ie,_e)}else{if(pe.isInstancedBufferAttribute){for(let he=0;he<Z.locationSize;he++)p(Z.location+he,pe.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let he=0;he<Z.locationSize;he++)m(Z.location+he);i.bindBuffer(i.ARRAY_BUFFER,Ye);for(let he=0;he<Z.locationSize;he++)y(Z.location+he,ae/Z.locationSize,$,me,ae*ie,ae/Z.locationSize*he*ie,_e)}}else if(W!==void 0){let me=W[se];if(me!==void 0)switch(me.length){case 2:i.vertexAttrib2fv(Z.location,me);break;case 3:i.vertexAttrib3fv(Z.location,me);break;case 4:i.vertexAttrib4fv(Z.location,me);break;default:i.vertexAttrib1fv(Z.location,me)}}}}b()}function L(){I();for(let x in n){let M=n[x];for(let k in M){let V=M[k];for(let X in V)h(V[X].object),delete V[X];delete M[k]}delete n[x]}}function T(x){if(n[x.id]===void 0)return;let M=n[x.id];for(let k in M){let V=M[k];for(let X in V)h(V[X].object),delete V[X];delete M[k]}delete n[x.id]}function A(x){for(let M in n){let k=n[M];if(k[x.id]===void 0)continue;let V=k[x.id];for(let X in V)h(V[X].object),delete V[X];delete k[x.id]}}function I(){B(),a=!0,r!==s&&(r=s,c(r.object))}function B(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:I,resetDefaultState:B,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function fg(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function a(c,h,d){d!==0&&(i.drawArraysInstanced(n,c,h,d),t.update(h,n,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,d);let u=0;for(let g=0;g<d;g++)u+=h[g];t.update(u,n,1)}function l(c,h,d,f){if(d===0)return;let u=e.get("WEBGL_multi_draw");if(u===null)for(let g=0;g<c.length;g++)a(c[g],h[g],f[g]);else{u.multiDrawArraysInstancedWEBGL(n,c,0,h,0,f,0,d);let g=0;for(let v=0;v<d;v++)g+=h[v];for(let v=0;v<f.length;v++)t.update(g,n,f[v])}}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function pg(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==fn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let I=A===Hn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==zn&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Fn&&!I)}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,f=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(f===!0){let A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}let u=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),p=i.getParameter(i.MAX_VERTEX_ATTRIBS),b=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),w=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=g>0,T=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reverseDepthBuffer:f,maxTextures:u,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:y,maxFragmentUniforms:w,vertexTextures:L,maxSamples:T}}function mg(i){let e=this,t=null,n=0,s=!1,r=!1,a=new Un,o=new ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){let u=d.length!==0||f||n!==0||s;return s=f,n=d.length,u},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,u){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=i.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:n,y=b*4,w=p.clippingState||null;l.value=w,w=h(g,f,y,u);for(let L=0;L!==y;++L)w[L]=t[L];p.clippingState=w,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(d,f,u,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=u+v*4,b=f.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let y=0,w=u;y!==v;++y,w+=4)a.copy(d[y]).applyMatrix4(b,o),a.normal.toArray(m,w),m[w+3]=a.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function gg(i){let e=new WeakMap;function t(a,o){return o===Bo?a.mapping=Qi:o===Ho&&(a.mapping=es),a}function n(a){if(a&&a.isTexture){let o=a.mapping;if(o===Bo||o===Ho)if(e.has(a)){let l=e.get(a).texture;return t(l,a.mapping)}else{let l=a.image;if(l&&l.height>0){let c=new Ml(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",s),t(c.texture,a.mapping)}else return null}}return a}function s(a){let o=a.target;o.removeEventListener("dispose",s);let l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}var ss=class extends Dr{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Yi=4,Th=[.125,.215,.35,.446,.526,.582],bi=20,yo=new ss,Ah=new Ce,bo=null,Mo=0,So=0,wo=!1,vi=(1+Math.sqrt(5))/2,qi=1/vi,Ch=[new C(-vi,qi,0),new C(vi,qi,0),new C(-qi,0,vi),new C(qi,0,vi),new C(0,vi,-qi),new C(0,vi,qi),new C(-1,1,-1),new C(1,1,-1),new C(-1,1,1),new C(1,1,1)],Ur=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){bo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);let r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Ih(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ph(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bo,Mo,So),this._renderer.xr.enabled=wo,e.scissorTest=!1,cr(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qi||e.mapping===es?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bo=this._renderer.getRenderTarget(),Mo=this._renderer.getActiveCubeFace(),So=this._renderer.getActiveMipmapLevel(),wo=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:dn,minFilter:dn,generateMipmaps:!1,type:Hn,format:fn,colorSpace:si,depthBuffer:!1},s=Rh(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rh(e,t,n);let{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=xg(r)),this._blurMaterial=vg(r,e,t)}return s}_compileMaterial(e){let t=new Re(this._lodPlanes[0],e);this._renderer.compile(t,yo)}_sceneToCubeUV(e,t,n,s){let o=new Ot(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,d=h.autoClear,f=h.toneMapping;h.getClearColor(Ah),h.toneMapping=Kn,h.autoClear=!1;let u=new Wt({name:"PMREM.Background",side:Vt,depthWrite:!1,depthTest:!1}),g=new Re(new Xt,u),v=!1,m=e.background;m?m.isColor&&(u.color.copy(m),e.background=null,v=!0):(u.color.copy(Ah),v=!0);for(let p=0;p<6;p++){let b=p%3;b===0?(o.up.set(0,l[p],0),o.lookAt(c[p],0,0)):b===1?(o.up.set(0,0,l[p]),o.lookAt(0,c[p],0)):(o.up.set(0,l[p],0),o.lookAt(0,0,c[p]));let y=this._cubeSize;cr(s,b*y,p>2?y:0,y,y),h.setRenderTarget(s),v&&h.render(g,o),h.render(e,o)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=f,h.autoClear=d,e.background=m}_textureToCubeUV(e,t){let n=this._renderer,s=e.mapping===Qi||e.mapping===es;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Ih()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ph());let r=s?this._cubemapMaterial:this._equirectMaterial,a=new Re(this._lodPlanes[0],r),o=r.uniforms;o.envMap.value=e;let l=this._cubeSize;cr(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,yo)}_applyPMREM(e){let t=this._renderer,n=t.autoClear;t.autoClear=!1;let s=this._lodPlanes.length;for(let r=1;r<s;r++){let a=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Ch[(s-r-1)%Ch.length];this._blur(e,r-1,r,a,o)}t.autoClear=n}_blur(e,t,n,s,r){let a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,s,"latitudinal",r),this._halfBlur(a,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,a,o){let l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");let h=3,d=new Re(this._lodPlanes[s],c),f=c.uniforms,u=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*u):2*Math.PI/(2*bi-1),v=r/g,m=isFinite(r)?1+Math.floor(h*v):bi;m>bi&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${bi}`);let p=[],b=0;for(let A=0;A<bi;++A){let I=A/v,B=Math.exp(-I*I/2);p.push(B),A===0?b+=B:A<m&&(b+=2*B)}for(let A=0;A<p.length;A++)p[A]=p[A]/b;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=p,f.latitudinal.value=a==="latitudinal",o&&(f.poleAxis.value=o);let{_lodMax:y}=this;f.dTheta.value=g,f.mipInt.value=y-n;let w=this._sizeLods[s],L=3*w*(s>y-Yi?s-y+Yi:0),T=4*(this._cubeSize-w);cr(t,L,T,3*w,2*w),l.setRenderTarget(t),l.render(d,yo)}};function xg(i){let e=[],t=[],n=[],s=i,r=i-Yi+1+Th.length;for(let a=0;a<r;a++){let o=Math.pow(2,s);t.push(o);let l=1/o;a>i-Yi?l=Th[a-i+Yi-1]:a===0&&(l=0),n.push(l);let c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],u=6,g=6,v=3,m=2,p=1,b=new Float32Array(v*g*u),y=new Float32Array(m*g*u),w=new Float32Array(p*g*u);for(let T=0;T<u;T++){let A=T%3*2/3-1,I=T>2?0:-1,B=[A,I,0,A+2/3,I,0,A+2/3,I+1,0,A,I,0,A+2/3,I+1,0,A,I+1,0];b.set(B,v*g*T),y.set(f,m*g*T);let x=[T,T,T,T,T,T];w.set(x,p*g*T)}let L=new Rt;L.setAttribute("position",new Gt(b,v)),L.setAttribute("uv",new Gt(y,m)),L.setAttribute("faceIndex",new Gt(w,p)),e.push(L),s>Yi&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Rh(i,e,t){let n=new en(i,e,t);return n.texture.mapping=ta,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function cr(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function vg(i,e,t){let n=new Float32Array(bi),s=new C(0,1,0);return new qt({name:"SphericalGaussianBlur",defines:{n:bi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ph(){return new qt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function Ih(){return new qt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:xc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:yn,depthTest:!1,depthWrite:!1})}function xc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function _g(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){let l=o.mapping,c=l===Bo||l===Ho,h=l===Qi||l===es;if(c||h){let d=e.get(o),f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ur(i)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{let u=o.image;return c&&u&&u.height>0||h&&u&&s(u)?(t===null&&(t=new Ur(i)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",r),d.texture):null}}}return o}function s(o){let l=0,c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function r(o){let l=o.target;l.removeEventListener("dispose",r);let c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function yg(i){let e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){let s=t(n);return s===null&&yr("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function bg(i,e,t,n){let s={},r=new WeakMap;function a(d){let f=d.target;f.index!==null&&e.remove(f.index);for(let g in f.attributes)e.remove(f.attributes[g]);for(let g in f.morphAttributes){let v=f.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}f.removeEventListener("dispose",a),delete s[f.id];let u=r.get(f);u&&(e.remove(u),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(d){let f=d.attributes;for(let g in f)e.update(f[g],i.ARRAY_BUFFER);let u=d.morphAttributes;for(let g in u){let v=u[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],i.ARRAY_BUFFER)}}function c(d){let f=[],u=d.index,g=d.attributes.position,v=0;if(u!==null){let b=u.array;v=u.version;for(let y=0,w=b.length;y<w;y+=3){let L=b[y+0],T=b[y+1],A=b[y+2];f.push(L,T,T,A,A,L)}}else if(g!==void 0){let b=g.array;v=g.version;for(let y=0,w=b.length/3-1;y<w;y+=3){let L=y+0,T=y+1,A=y+2;f.push(L,T,T,A,A,L)}}else return;let m=new(_u(f)?Lr:Ir)(f,1);m.version=v;let p=r.get(d);p&&e.remove(p),r.set(d,m)}function h(d){let f=r.get(d);if(f){let u=d.index;u!==null&&f.version<u.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function Mg(i,e,t){let n;function s(f){n=f}let r,a;function o(f){r=f.type,a=f.bytesPerElement}function l(f,u){i.drawElements(n,u,r,f*a),t.update(u,n,1)}function c(f,u,g){g!==0&&(i.drawElementsInstanced(n,u,r,f*a,g),t.update(u,n,g))}function h(f,u,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,u,0,r,f,0,g);let m=0;for(let p=0;p<g;p++)m+=u[p];t.update(m,n,1)}function d(f,u,g,v){if(g===0)return;let m=e.get("WEBGL_multi_draw");if(m===null)for(let p=0;p<f.length;p++)c(f[p]/a,u[p],v[p]);else{m.multiDrawElementsInstancedWEBGL(n,u,0,r,f,0,v,0,g);let p=0;for(let b=0;b<g;b++)p+=u[b];for(let b=0;b<v.length;b++)t.update(p,n,v[b])}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Sg(i){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function wg(i,e,t){let n=new WeakMap,s=new at;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,f=n.get(o);if(f===void 0||f.count!==d){let B=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",B)};f!==void 0&&f.texture.dispose();let u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],y=0;u===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let w=o.attributes.position.count*y,L=1;w>e.maxTextureSize&&(L=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);let T=new Float32Array(w*L*4*d),A=new Cr(T,w,L,d);A.type=Fn,A.needsUpdate=!0;let I=y*4;for(let x=0;x<d;x++){let M=m[x],k=p[x],V=b[x],X=w*L*4*x;for(let te=0;te<M.count;te++){let W=te*I;u===!0&&(s.fromBufferAttribute(M,te),T[X+W+0]=s.x,T[X+W+1]=s.y,T[X+W+2]=s.z,T[X+W+3]=0),g===!0&&(s.fromBufferAttribute(k,te),T[X+W+4]=s.x,T[X+W+5]=s.y,T[X+W+6]=s.z,T[X+W+7]=0),v===!0&&(s.fromBufferAttribute(V,te),T[X+W+8]=s.x,T[X+W+9]=s.y,T[X+W+10]=s.z,T[X+W+11]=V.itemSize===4?s.w:1)}}f={count:d,texture:A,size:new le(w,L)},n.set(o,f),o.addEventListener("dispose",B)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let u=0;for(let v=0;v<c.length;v++)u+=c[v];let g=o.morphTargetsRelative?1:1-u;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function Eg(i,e,t,n){let s=new WeakMap;function r(l){let c=n.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){let f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function a(){s=new WeakMap}function o(l){let c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:a}}var Fr=class extends Qt{constructor(e,t,n,s,r,a,o,l,c,h=$i){if(h!==$i&&h!==ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===$i&&(n=wi),n===void 0&&h===ns&&(n=ts),super(null,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:an,this.minFilter=l!==void 0?l:an,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}},Su=new Qt,Lh=new Fr(1,1),wu=new Cr,Eu=new yl,Tu=new Nr,Dh=[],Nh=[],Uh=new Float32Array(16),Fh=new Float32Array(9),Oh=new Float32Array(4);function cs(i,e,t){let n=i[0];if(n<=0||n>0)return i;let s=e*t,r=Dh[s];if(r===void 0&&(r=new Float32Array(s),Dh[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function Et(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Tt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function ia(i,e){let t=Nh[e];t===void 0&&(t=new Int32Array(e),Nh[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function Tg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Ag(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2fv(this.addr,e),Tt(t,e)}}function Cg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Et(t,e))return;i.uniform3fv(this.addr,e),Tt(t,e)}}function Rg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4fv(this.addr,e),Tt(t,e)}}function Pg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Oh.set(n),i.uniformMatrix2fv(this.addr,!1,Oh),Tt(t,n)}}function Ig(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Fh.set(n),i.uniformMatrix3fv(this.addr,!1,Fh),Tt(t,n)}}function Lg(i,e){let t=this.cache,n=e.elements;if(n===void 0){if(Et(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Tt(t,e)}else{if(Et(t,n))return;Uh.set(n),i.uniformMatrix4fv(this.addr,!1,Uh),Tt(t,n)}}function Dg(i,e){let t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Ng(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2iv(this.addr,e),Tt(t,e)}}function Ug(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3iv(this.addr,e),Tt(t,e)}}function Fg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4iv(this.addr,e),Tt(t,e)}}function Og(i,e){let t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function zg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Et(t,e))return;i.uniform2uiv(this.addr,e),Tt(t,e)}}function kg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Et(t,e))return;i.uniform3uiv(this.addr,e),Tt(t,e)}}function Bg(i,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Et(t,e))return;i.uniform4uiv(this.addr,e),Tt(t,e)}}function Hg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Lh.compareFunction=xu,r=Lh):r=Su,t.setTexture2D(e||r,s)}function Vg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Eu,s)}function Gg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Tu,s)}function Wg(i,e,t){let n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||wu,s)}function Xg(i){switch(i){case 5126:return Tg;case 35664:return Ag;case 35665:return Cg;case 35666:return Rg;case 35674:return Pg;case 35675:return Ig;case 35676:return Lg;case 5124:case 35670:return Dg;case 35667:case 35671:return Ng;case 35668:case 35672:return Ug;case 35669:case 35673:return Fg;case 5125:return Og;case 36294:return zg;case 36295:return kg;case 36296:return Bg;case 35678:case 36198:case 36298:case 36306:case 35682:return Hg;case 35679:case 36299:case 36307:return Vg;case 35680:case 36300:case 36308:case 36293:return Gg;case 36289:case 36303:case 36311:case 36292:return Wg}}function qg(i,e){i.uniform1fv(this.addr,e)}function Yg(i,e){let t=cs(e,this.size,2);i.uniform2fv(this.addr,t)}function Zg(i,e){let t=cs(e,this.size,3);i.uniform3fv(this.addr,t)}function $g(i,e){let t=cs(e,this.size,4);i.uniform4fv(this.addr,t)}function Jg(i,e){let t=cs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Kg(i,e){let t=cs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function jg(i,e){let t=cs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qg(i,e){i.uniform1iv(this.addr,e)}function e0(i,e){i.uniform2iv(this.addr,e)}function t0(i,e){i.uniform3iv(this.addr,e)}function n0(i,e){i.uniform4iv(this.addr,e)}function i0(i,e){i.uniform1uiv(this.addr,e)}function s0(i,e){i.uniform2uiv(this.addr,e)}function r0(i,e){i.uniform3uiv(this.addr,e)}function a0(i,e){i.uniform4uiv(this.addr,e)}function o0(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2D(e[a]||Su,r[a])}function l0(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||Eu,r[a])}function c0(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||Tu,r[a])}function h0(i,e,t){let n=this.cache,s=e.length,r=ia(t,s);Et(n,r)||(i.uniform1iv(this.addr,r),Tt(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||wu,r[a])}function u0(i){switch(i){case 5126:return qg;case 35664:return Yg;case 35665:return Zg;case 35666:return $g;case 35674:return Jg;case 35675:return Kg;case 35676:return jg;case 5124:case 35670:return Qg;case 35667:case 35671:return e0;case 35668:case 35672:return t0;case 35669:case 35673:return n0;case 5125:return i0;case 36294:return s0;case 36295:return r0;case 36296:return a0;case 35678:case 36198:case 36298:case 36306:case 35682:return o0;case 35679:case 36299:case 36307:return l0;case 35680:case 36300:case 36308:case 36293:return c0;case 36289:case 36303:case 36311:case 36292:return h0}}var Sl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Xg(t.type)}},wl=class{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=u0(t.type)}},El=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(e,t[o.id],n)}}},Eo=/(\w+)(\])?(\[|\.)?/g;function zh(i,e){i.seq.push(e),i.map[e.id]=e}function d0(i,e,t){let n=i.name,s=n.length;for(Eo.lastIndex=0;;){let r=Eo.exec(n),a=Eo.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){zh(t,c===void 0?new Sl(o,i,e):new wl(o,i,e));break}else{let d=t.map[o];d===void 0&&(d=new El(o),zh(t,d)),t=d}}}var Ki=class{constructor(e,t){this.seq=[],this.map={};let n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){let r=e.getActiveUniform(t,s),a=e.getUniformLocation(t,r.name);d0(r,a,this)}}setValue(e,t,n,s){let r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){let s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){let o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){let n=[];for(let s=0,r=e.length;s!==r;++s){let a=e[s];a.id in t&&n.push(a)}return n}};function kh(i,e,t){let n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}var f0=37297,p0=0;function m0(i,e){let t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){let o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function g0(i){let e=Je.getPrimaries(Je.workingColorSpace),t=Je.getPrimaries(i),n;switch(e===t?n="":e===wr&&t===Sr?n="LinearDisplayP3ToLinearSRGB":e===Sr&&t===wr&&(n="LinearSRGBToLinearDisplayP3"),i){case si:case na:return[n,"LinearTransferOETF"];case vn:case gc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Bh(i,e,t){let n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";let r=/ERROR: 0:(\d+)/.exec(s);if(r){let a=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+m0(i.getShaderSource(e),a)}else return s}function x0(i,e){let t=g0(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function v0(i,e){let t;switch(e){case sc:t="Linear";break;case rc:t="Reinhard";break;case ac:t="Cineon";break;case oc:t="ACESFilmic";break;case lc:t="AgX";break;case cc:t="Neutral";break;case Zd:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var hr=new C;function _0(){Je.getLuminanceCoefficients(hr);let i=hr.x.toFixed(4),e=hr.y.toFixed(4),t=hr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function y0(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ss).join(`
`)}function b0(i){let e=[];for(let t in i){let n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M0(i,e){let t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){let r=i.getActiveAttrib(e,s),a=r.name,o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ss(i){return i!==""}function Hh(i,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Vh(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var S0=/^[ \t]*#include +<([\w\d./]+)>/gm;function Tl(i){return i.replace(S0,E0)}var w0=new Map;function E0(i,e){let t=Oe[e];if(t===void 0){let n=w0.get(e);if(n!==void 0)t=Oe[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Tl(t)}var T0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Gh(i){return i.replace(T0,A0)}function A0(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Wh(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function C0(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===iu?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===ic?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Nn&&(e="SHADOWMAP_TYPE_VSM"),e}function R0(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Qi:case es:e="ENVMAP_TYPE_CUBE";break;case ta:e="ENVMAP_TYPE_CUBE_UV";break}return e}function P0(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case es:e="ENVMAP_MODE_REFRACTION";break}return e}function I0(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case su:e="ENVMAP_BLENDING_MULTIPLY";break;case qd:e="ENVMAP_BLENDING_MIX";break;case Yd:e="ENVMAP_BLENDING_ADD";break}return e}function L0(i){let e=i.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function D0(i,e,t,n){let s=i.getContext(),r=t.defines,a=t.vertexShader,o=t.fragmentShader,l=C0(t),c=R0(t),h=P0(t),d=I0(t),f=L0(t),u=y0(t),g=b0(r),v=s.createProgram(),m,p,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ss).join(`
`),p.length>0&&(p+=`
`)):(m=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ss).join(`
`),p=[Wh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Kn?"#define TONE_MAPPING":"",t.toneMapping!==Kn?Oe.tonemapping_pars_fragment:"",t.toneMapping!==Kn?v0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Oe.colorspace_pars_fragment,x0("linearToOutputTexel",t.outputColorSpace),_0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ss).join(`
`)),a=Tl(a),a=Hh(a,t),a=Vh(a,t),o=Tl(o),o=Hh(o,t),o=Vh(o,t),a=Gh(a),o=Gh(o),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===lh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===lh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let y=b+m+a,w=b+p+o,L=kh(s,s.VERTEX_SHADER,y),T=kh(s,s.FRAGMENT_SHADER,w);s.attachShader(v,L),s.attachShader(v,T),t.index0AttributeName!==void 0?s.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(M){if(i.debug.checkShaderErrors){let k=s.getProgramInfoLog(v).trim(),V=s.getShaderInfoLog(L).trim(),X=s.getShaderInfoLog(T).trim(),te=!0,W=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(te=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,v,L,T);else{let se=Bh(s,L,"vertex"),Z=Bh(s,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+k+`
`+se+`
`+Z)}else k!==""?console.warn("THREE.WebGLProgram: Program Info Log:",k):(V===""||X==="")&&(W=!1);W&&(M.diagnostics={runnable:te,programLog:k,vertexShader:{log:V,prefix:m},fragmentShader:{log:X,prefix:p}})}s.deleteShader(L),s.deleteShader(T),I=new Ki(s,v),B=M0(s,v)}let I;this.getUniforms=function(){return I===void 0&&A(this),I};let B;this.getAttributes=function(){return B===void 0&&A(this),B};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(v,f0)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=p0++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}var N0=0,Al=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){let t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(s)===!1&&(a.add(s),s.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){let t=this.shaderCache,n=t.get(e);return n===void 0&&(n=new Cl(e),t.set(e,n)),n}},Cl=class{constructor(e){this.id=N0++,this.code=e,this.usedTimes=0}};function U0(i,e,t,n,s,r,a){let o=new Pr,l=new Al,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.reverseDepthBuffer,u=s.vertexTextures,g=s.precision,v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function p(x,M,k,V,X){let te=V.fog,W=X.geometry,se=x.isMeshStandardMaterial?V.environment:null,Z=(x.isMeshStandardMaterial?t:e).get(x.envMap||se),pe=Z&&Z.mapping===ta?Z.image.height:null,me=v[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));let ae=W.morphAttributes.position||W.morphAttributes.normal||W.morphAttributes.color,Ve=ae!==void 0?ae.length:0,Ye=0;W.morphAttributes.position!==void 0&&(Ye=1),W.morphAttributes.normal!==void 0&&(Ye=2),W.morphAttributes.color!==void 0&&(Ye=3);let $,ie,_e,he;if(me){let Bt=_n[me];$=Bt.vertexShader,ie=Bt.fragmentShader}else $=x.vertexShader,ie=x.fragmentShader,l.update(x),_e=l.getVertexShaderID(x),he=l.getFragmentShaderID(x);let ve=i.getRenderTarget(),Pe=X.isInstancedMesh===!0,Ge=X.isBatchedMesh===!0,je=!!x.map,We=!!x.matcap,P=!!Z,nt=!!x.aoMap,ke=!!x.lightMap,Xe=!!x.bumpMap,Ie=!!x.normalMap,rt=!!x.displacementMap,De=!!x.emissiveMap,E=!!x.metalnessMap,_=!!x.roughnessMap,z=x.anisotropy>0,J=x.clearcoat>0,ne=x.dispersion>0,K=x.iridescence>0,be=x.sheen>0,R=x.transmission>0,O=z&&!!x.anisotropyMap,j=J&&!!x.clearcoatMap,q=J&&!!x.clearcoatNormalMap,Q=J&&!!x.clearcoatRoughnessMap,ce=K&&!!x.iridescenceMap,Ae=K&&!!x.iridescenceThicknessMap,fe=be&&!!x.sheenColorMap,Be=be&&!!x.sheenRoughnessMap,Ue=!!x.specularMap,dt=!!x.specularColorMap,D=!!x.specularIntensityMap,ge=R&&!!x.transmissionMap,Y=R&&!!x.thicknessMap,ee=!!x.gradientMap,ue=!!x.alphaMap,xe=x.alphaTest>0,Ze=!!x.alphaHash,Mt=!!x.extensions,kt=Kn;x.toneMapped&&(ve===null||ve.isXRRenderTarget===!0)&&(kt=i.toneMapping);let Ke={shaderID:me,shaderType:x.type,shaderName:x.name,vertexShader:$,fragmentShader:ie,defines:x.defines,customVertexShaderID:_e,customFragmentShaderID:he,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:Ge,batchingColor:Ge&&X._colorsTexture!==null,instancing:Pe,instancingColor:Pe&&X.instanceColor!==null,instancingMorph:Pe&&X.morphTexture!==null,supportsVertexTextures:u,outputColorSpace:ve===null?i.outputColorSpace:ve.isXRRenderTarget===!0?ve.texture.colorSpace:si,alphaToCoverage:!!x.alphaToCoverage,map:je,matcap:We,envMap:P,envMapMode:P&&Z.mapping,envMapCubeUVHeight:pe,aoMap:nt,lightMap:ke,bumpMap:Xe,normalMap:Ie,displacementMap:u&&rt,emissiveMap:De,normalMapObjectSpace:Ie&&x.normalMapType===jd,normalMapTangentSpace:Ie&&x.normalMapType===gu,metalnessMap:E,roughnessMap:_,anisotropy:z,anisotropyMap:O,clearcoat:J,clearcoatMap:j,clearcoatNormalMap:q,clearcoatRoughnessMap:Q,dispersion:ne,iridescence:K,iridescenceMap:ce,iridescenceThicknessMap:Ae,sheen:be,sheenColorMap:fe,sheenRoughnessMap:Be,specularMap:Ue,specularColorMap:dt,specularIntensityMap:D,transmission:R,transmissionMap:ge,thicknessMap:Y,gradientMap:ee,opaque:x.transparent===!1&&x.blending===Zi&&x.alphaToCoverage===!1,alphaMap:ue,alphaTest:xe,alphaHash:Ze,combine:x.combine,mapUv:je&&m(x.map.channel),aoMapUv:nt&&m(x.aoMap.channel),lightMapUv:ke&&m(x.lightMap.channel),bumpMapUv:Xe&&m(x.bumpMap.channel),normalMapUv:Ie&&m(x.normalMap.channel),displacementMapUv:rt&&m(x.displacementMap.channel),emissiveMapUv:De&&m(x.emissiveMap.channel),metalnessMapUv:E&&m(x.metalnessMap.channel),roughnessMapUv:_&&m(x.roughnessMap.channel),anisotropyMapUv:O&&m(x.anisotropyMap.channel),clearcoatMapUv:j&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:q&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Q&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ce&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:Ae&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:fe&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:Be&&m(x.sheenRoughnessMap.channel),specularMapUv:Ue&&m(x.specularMap.channel),specularColorMapUv:dt&&m(x.specularColorMap.channel),specularIntensityMapUv:D&&m(x.specularIntensityMap.channel),transmissionMapUv:ge&&m(x.transmissionMap.channel),thicknessMapUv:Y&&m(x.thicknessMap.channel),alphaMapUv:ue&&m(x.alphaMap.channel),vertexTangents:!!W.attributes.tangent&&(Ie||z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!W.attributes.color&&W.attributes.color.itemSize===4,pointsUvs:X.isPoints===!0&&!!W.attributes.uv&&(je||ue),fog:!!te,useFog:x.fog===!0,fogExp2:!!te&&te.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reverseDepthBuffer:f,skinning:X.isSkinnedMesh===!0,morphTargets:W.morphAttributes.position!==void 0,morphNormals:W.morphAttributes.normal!==void 0,morphColors:W.morphAttributes.color!==void 0,morphTargetsCount:Ve,morphTextureStride:Ye,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:kt,decodeVideoTexture:je&&x.map.isVideoTexture===!0&&Je.getTransfer(x.map.colorSpace)===ct,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Ct,flipSided:x.side===Vt,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Mt&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Mt&&x.extensions.multiDraw===!0||Ge)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function b(x){let M=[];if(x.shaderID?M.push(x.shaderID):(M.push(x.customVertexShaderID),M.push(x.customFragmentShaderID)),x.defines!==void 0)for(let k in x.defines)M.push(k),M.push(x.defines[k]);return x.isRawShaderMaterial===!1&&(y(M,x),w(M,x),M.push(i.outputColorSpace)),M.push(x.customProgramCacheKey),M.join()}function y(x,M){x.push(M.precision),x.push(M.outputColorSpace),x.push(M.envMapMode),x.push(M.envMapCubeUVHeight),x.push(M.mapUv),x.push(M.alphaMapUv),x.push(M.lightMapUv),x.push(M.aoMapUv),x.push(M.bumpMapUv),x.push(M.normalMapUv),x.push(M.displacementMapUv),x.push(M.emissiveMapUv),x.push(M.metalnessMapUv),x.push(M.roughnessMapUv),x.push(M.anisotropyMapUv),x.push(M.clearcoatMapUv),x.push(M.clearcoatNormalMapUv),x.push(M.clearcoatRoughnessMapUv),x.push(M.iridescenceMapUv),x.push(M.iridescenceThicknessMapUv),x.push(M.sheenColorMapUv),x.push(M.sheenRoughnessMapUv),x.push(M.specularMapUv),x.push(M.specularColorMapUv),x.push(M.specularIntensityMapUv),x.push(M.transmissionMapUv),x.push(M.thicknessMapUv),x.push(M.combine),x.push(M.fogExp2),x.push(M.sizeAttenuation),x.push(M.morphTargetsCount),x.push(M.morphAttributeCount),x.push(M.numDirLights),x.push(M.numPointLights),x.push(M.numSpotLights),x.push(M.numSpotLightMaps),x.push(M.numHemiLights),x.push(M.numRectAreaLights),x.push(M.numDirLightShadows),x.push(M.numPointLightShadows),x.push(M.numSpotLightShadows),x.push(M.numSpotLightShadowsWithMaps),x.push(M.numLightProbes),x.push(M.shadowMapType),x.push(M.toneMapping),x.push(M.numClippingPlanes),x.push(M.numClipIntersection),x.push(M.depthPacking)}function w(x,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),x.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.reverseDepthBuffer&&o.enable(4),M.skinning&&o.enable(5),M.morphTargets&&o.enable(6),M.morphNormals&&o.enable(7),M.morphColors&&o.enable(8),M.premultipliedAlpha&&o.enable(9),M.shadowMapEnabled&&o.enable(10),M.doubleSided&&o.enable(11),M.flipSided&&o.enable(12),M.useDepthPacking&&o.enable(13),M.dithering&&o.enable(14),M.transmission&&o.enable(15),M.sheen&&o.enable(16),M.opaque&&o.enable(17),M.pointsUvs&&o.enable(18),M.decodeVideoTexture&&o.enable(19),M.alphaToCoverage&&o.enable(20),x.push(o.mask)}function L(x){let M=v[x.type],k;if(M){let V=_n[M];k=Ls.clone(V.uniforms)}else k=x.uniforms;return k}function T(x,M){let k;for(let V=0,X=h.length;V<X;V++){let te=h[V];if(te.cacheKey===M){k=te,++k.usedTimes;break}}return k===void 0&&(k=new D0(i,M,x,r),h.push(k)),k}function A(x){if(--x.usedTimes===0){let M=h.indexOf(x);h[M]=h[h.length-1],h.pop(),x.destroy()}}function I(x){l.remove(x)}function B(){l.dispose()}return{getParameters:p,getProgramCacheKey:b,getUniforms:L,acquireProgram:T,releaseProgram:A,releaseShaderCache:I,programs:h,dispose:B}}function F0(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function O0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Xh(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function qh(){let i=[],e=0,t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(d,f,u,g,v,m){let p=i[e];return p===void 0?(p={id:d.id,object:d,geometry:f,material:u,groupOrder:g,renderOrder:d.renderOrder,z:v,group:m},i[e]=p):(p.id=d.id,p.object=d,p.geometry=f,p.material=u,p.groupOrder=g,p.renderOrder=d.renderOrder,p.z=v,p.group=m),e++,p}function o(d,f,u,g,v,m){let p=a(d,f,u,g,v,m);u.transmission>0?n.push(p):u.transparent===!0?s.push(p):t.push(p)}function l(d,f,u,g,v,m){let p=a(d,f,u,g,v,m);u.transmission>0?n.unshift(p):u.transparent===!0?s.unshift(p):t.unshift(p)}function c(d,f){t.length>1&&t.sort(d||O0),n.length>1&&n.sort(f||Xh),s.length>1&&s.sort(f||Xh)}function h(){for(let d=e,f=i.length;d<f;d++){let u=i[d];if(u.id===null)break;u.id=null,u.object=null,u.geometry=null,u.material=null,u.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:o,unshift:l,finish:h,sort:c}}function z0(){let i=new WeakMap;function e(n,s){let r=i.get(n),a;return r===void 0?(a=new qh,i.set(n,[a])):s>=r.length?(a=new qh,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function k0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new C,color:new Ce};break;case"SpotLight":t={position:new C,direction:new C,color:new Ce,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new C,color:new Ce,distance:0,decay:0};break;case"HemisphereLight":t={direction:new C,skyColor:new Ce,groundColor:new Ce};break;case"RectAreaLight":t={color:new Ce,position:new C,halfWidth:new C,halfHeight:new C};break}return i[e.id]=t,t}}}function B0(){let i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new le,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}var H0=0;function V0(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function G0(i){let e=new k0,t=B0(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new C);let s=new C,r=new ht,a=new ht;function o(c){let h=0,d=0,f=0;for(let B=0;B<9;B++)n.probe[B].set(0,0,0);let u=0,g=0,v=0,m=0,p=0,b=0,y=0,w=0,L=0,T=0,A=0;c.sort(V0);for(let B=0,x=c.length;B<x;B++){let M=c[B],k=M.color,V=M.intensity,X=M.distance,te=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)h+=k.r*V,d+=k.g*V,f+=k.b*V;else if(M.isLightProbe){for(let W=0;W<9;W++)n.probe[W].addScaledVector(M.sh.coefficients[W],V);A++}else if(M.isDirectionalLight){let W=e.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){let se=M.shadow,Z=t.get(M);Z.shadowIntensity=se.intensity,Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,n.directionalShadow[u]=Z,n.directionalShadowMap[u]=te,n.directionalShadowMatrix[u]=M.shadow.matrix,b++}n.directional[u]=W,u++}else if(M.isSpotLight){let W=e.get(M);W.position.setFromMatrixPosition(M.matrixWorld),W.color.copy(k).multiplyScalar(V),W.distance=X,W.coneCos=Math.cos(M.angle),W.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),W.decay=M.decay,n.spot[v]=W;let se=M.shadow;if(M.map&&(n.spotLightMap[L]=M.map,L++,se.updateMatrices(M),M.castShadow&&T++),n.spotLightMatrix[v]=se.matrix,M.castShadow){let Z=t.get(M);Z.shadowIntensity=se.intensity,Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,n.spotShadow[v]=Z,n.spotShadowMap[v]=te,w++}v++}else if(M.isRectAreaLight){let W=e.get(M);W.color.copy(k).multiplyScalar(V),W.halfWidth.set(M.width*.5,0,0),W.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=W,m++}else if(M.isPointLight){let W=e.get(M);if(W.color.copy(M.color).multiplyScalar(M.intensity),W.distance=M.distance,W.decay=M.decay,M.castShadow){let se=M.shadow,Z=t.get(M);Z.shadowIntensity=se.intensity,Z.shadowBias=se.bias,Z.shadowNormalBias=se.normalBias,Z.shadowRadius=se.radius,Z.shadowMapSize=se.mapSize,Z.shadowCameraNear=se.camera.near,Z.shadowCameraFar=se.camera.far,n.pointShadow[g]=Z,n.pointShadowMap[g]=te,n.pointShadowMatrix[g]=M.shadow.matrix,y++}n.point[g]=W,g++}else if(M.isHemisphereLight){let W=e.get(M);W.skyColor.copy(M.color).multiplyScalar(V),W.groundColor.copy(M.groundColor).multiplyScalar(V),n.hemi[p]=W,p++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=oe.LTC_FLOAT_1,n.rectAreaLTC2=oe.LTC_FLOAT_2):(n.rectAreaLTC1=oe.LTC_HALF_1,n.rectAreaLTC2=oe.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=d,n.ambient[2]=f;let I=n.hash;(I.directionalLength!==u||I.pointLength!==g||I.spotLength!==v||I.rectAreaLength!==m||I.hemiLength!==p||I.numDirectionalShadows!==b||I.numPointShadows!==y||I.numSpotShadows!==w||I.numSpotMaps!==L||I.numLightProbes!==A)&&(n.directional.length=u,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=p,n.directionalShadow.length=b,n.directionalShadowMap.length=b,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=w,n.spotShadowMap.length=w,n.directionalShadowMatrix.length=b,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=w+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=A,I.directionalLength=u,I.pointLength=g,I.spotLength=v,I.rectAreaLength=m,I.hemiLength=p,I.numDirectionalShadows=b,I.numPointShadows=y,I.numSpotShadows=w,I.numSpotMaps=L,I.numLightProbes=A,n.version=H0++)}function l(c,h){let d=0,f=0,u=0,g=0,v=0,m=h.matrixWorldInverse;for(let p=0,b=c.length;p<b;p++){let y=c[p];if(y.isDirectionalLight){let w=n.directional[d];w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),d++}else if(y.isSpotLight){let w=n.spot[u];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),w.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(m),u++}else if(y.isRectAreaLight){let w=n.rectArea[g];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),a.identity(),r.copy(y.matrixWorld),r.premultiply(m),a.extractRotation(r),w.halfWidth.set(y.width*.5,0,0),w.halfHeight.set(0,y.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){let w=n.point[f];w.position.setFromMatrixPosition(y.matrixWorld),w.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let w=n.hemi[v];w.direction.setFromMatrixPosition(y.matrixWorld),w.direction.transformDirection(m),v++}}}return{setup:o,setupView:l,state:n}}function Yh(i){let e=new G0(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function a(h){n.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}let c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:r,pushShadow:a}}function W0(i){let e=new WeakMap;function t(s,r=0){let a=e.get(s),o;return a===void 0?(o=new Yh(i),e.set(s,[o])):r>=a.length?(o=new Yh(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}var Rl=class extends ni{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Jd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},Pl=class extends ni{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}},X0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,q0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Y0(i,e,t){let n=new Cs,s=new le,r=new le,a=new at,o=new Rl({depthPacking:Kd}),l=new Pl,c={},h=t.maxTextureSize,d={[pn]:Vt,[Vt]:pn,[Ct]:Ct},f=new qt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new le},radius:{value:4}},vertexShader:X0,fragmentShader:q0}),u=f.clone();u.defines.HORIZONTAL_PASS=1;let g=new Rt;g.setAttribute("position",new Gt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new Re(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=iu;let p=this.type;this.render=function(T,A,I){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||T.length===0)return;let B=i.getRenderTarget(),x=i.getActiveCubeFace(),M=i.getActiveMipmapLevel(),k=i.state;k.setBlending(yn),k.buffers.color.setClear(1,1,1,1),k.buffers.depth.setTest(!0),k.setScissorTest(!1);let V=p!==Nn&&this.type===Nn,X=p===Nn&&this.type!==Nn;for(let te=0,W=T.length;te<W;te++){let se=T[te],Z=se.shadow;if(Z===void 0){console.warn("THREE.WebGLShadowMap:",se,"has no shadow.");continue}if(Z.autoUpdate===!1&&Z.needsUpdate===!1)continue;s.copy(Z.mapSize);let pe=Z.getFrameExtents();if(s.multiply(pe),r.copy(Z.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/pe.x),s.x=r.x*pe.x,Z.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/pe.y),s.y=r.y*pe.y,Z.mapSize.y=r.y)),Z.map===null||V===!0||X===!0){let ae=this.type!==Nn?{minFilter:an,magFilter:an}:{};Z.map!==null&&Z.map.dispose(),Z.map=new en(s.x,s.y,ae),Z.map.texture.name=se.name+".shadowMap",Z.camera.updateProjectionMatrix()}i.setRenderTarget(Z.map),i.clear();let me=Z.getViewportCount();for(let ae=0;ae<me;ae++){let Ve=Z.getViewport(ae);a.set(r.x*Ve.x,r.y*Ve.y,r.x*Ve.z,r.y*Ve.w),k.viewport(a),Z.updateMatrices(se,ae),n=Z.getFrustum(),w(A,I,Z.camera,se,this.type)}Z.isPointLightShadow!==!0&&this.type===Nn&&b(Z,I),Z.needsUpdate=!1}p=this.type,m.needsUpdate=!1,i.setRenderTarget(B,x,M)};function b(T,A){let I=e.update(v);f.defines.VSM_SAMPLES!==T.blurSamples&&(f.defines.VSM_SAMPLES=T.blurSamples,u.defines.VSM_SAMPLES=T.blurSamples,f.needsUpdate=!0,u.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new en(s.x,s.y)),f.uniforms.shadow_pass.value=T.map.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(A,null,I,f,v,null),u.uniforms.shadow_pass.value=T.mapPass.texture,u.uniforms.resolution.value=T.mapSize,u.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(A,null,I,u,v,null)}function y(T,A,I,B){let x=null,M=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(M!==void 0)x=M;else if(x=I.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){let k=x.uuid,V=A.uuid,X=c[k];X===void 0&&(X={},c[k]=X);let te=X[V];te===void 0&&(te=x.clone(),X[V]=te,A.addEventListener("dispose",L)),x=te}if(x.visible=A.visible,x.wireframe=A.wireframe,B===Nn?x.side=A.shadowSide!==null?A.shadowSide:A.side:x.side=A.shadowSide!==null?A.shadowSide:d[A.side],x.alphaMap=A.alphaMap,x.alphaTest=A.alphaTest,x.map=A.map,x.clipShadows=A.clipShadows,x.clippingPlanes=A.clippingPlanes,x.clipIntersection=A.clipIntersection,x.displacementMap=A.displacementMap,x.displacementScale=A.displacementScale,x.displacementBias=A.displacementBias,x.wireframeLinewidth=A.wireframeLinewidth,x.linewidth=A.linewidth,I.isPointLight===!0&&x.isMeshDistanceMaterial===!0){let k=i.properties.get(x);k.light=I}return x}function w(T,A,I,B,x){if(T.visible===!1)return;if(T.layers.test(A.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===Nn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);let V=e.update(T),X=T.material;if(Array.isArray(X)){let te=V.groups;for(let W=0,se=te.length;W<se;W++){let Z=te[W],pe=X[Z.materialIndex];if(pe&&pe.visible){let me=y(T,pe,B,x);T.onBeforeShadow(i,T,A,I,V,me,Z),i.renderBufferDirect(I,null,V,me,T,Z),T.onAfterShadow(i,T,A,I,V,me,Z)}}}else if(X.visible){let te=y(T,X,B,x);T.onBeforeShadow(i,T,A,I,V,te,null),i.renderBufferDirect(I,null,V,te,T,null),T.onAfterShadow(i,T,A,I,V,te,null)}}let k=T.children;for(let V=0,X=k.length;V<X;V++)w(k[V],A,I,B,x)}function L(T){T.target.removeEventListener("dispose",L);for(let I in c){let B=c[I],x=T.target.uuid;x in B&&(B[x].dispose(),delete B[x])}}}var Z0={[Do]:No,[Uo]:zo,[Fo]:ko,[ji]:Oo,[No]:Do,[zo]:Uo,[ko]:Fo,[Oo]:ji};function $0(i){function e(){let D=!1,ge=new at,Y=null,ee=new at(0,0,0,0);return{setMask:function(ue){Y!==ue&&!D&&(i.colorMask(ue,ue,ue,ue),Y=ue)},setLocked:function(ue){D=ue},setClear:function(ue,xe,Ze,Mt,kt){kt===!0&&(ue*=Mt,xe*=Mt,Ze*=Mt),ge.set(ue,xe,Ze,Mt),ee.equals(ge)===!1&&(i.clearColor(ue,xe,Ze,Mt),ee.copy(ge))},reset:function(){D=!1,Y=null,ee.set(-1,0,0,0)}}}function t(){let D=!1,ge=!1,Y=null,ee=null,ue=null;return{setReversed:function(xe){ge=xe},setTest:function(xe){xe?_e(i.DEPTH_TEST):he(i.DEPTH_TEST)},setMask:function(xe){Y!==xe&&!D&&(i.depthMask(xe),Y=xe)},setFunc:function(xe){if(ge&&(xe=Z0[xe]),ee!==xe){switch(xe){case Do:i.depthFunc(i.NEVER);break;case No:i.depthFunc(i.ALWAYS);break;case Uo:i.depthFunc(i.LESS);break;case ji:i.depthFunc(i.LEQUAL);break;case Fo:i.depthFunc(i.EQUAL);break;case Oo:i.depthFunc(i.GEQUAL);break;case zo:i.depthFunc(i.GREATER);break;case ko:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ee=xe}},setLocked:function(xe){D=xe},setClear:function(xe){ue!==xe&&(i.clearDepth(xe),ue=xe)},reset:function(){D=!1,Y=null,ee=null,ue=null}}}function n(){let D=!1,ge=null,Y=null,ee=null,ue=null,xe=null,Ze=null,Mt=null,kt=null;return{setTest:function(Ke){D||(Ke?_e(i.STENCIL_TEST):he(i.STENCIL_TEST))},setMask:function(Ke){ge!==Ke&&!D&&(i.stencilMask(Ke),ge=Ke)},setFunc:function(Ke,Bt,Cn){(Y!==Ke||ee!==Bt||ue!==Cn)&&(i.stencilFunc(Ke,Bt,Cn),Y=Ke,ee=Bt,ue=Cn)},setOp:function(Ke,Bt,Cn){(xe!==Ke||Ze!==Bt||Mt!==Cn)&&(i.stencilOp(Ke,Bt,Cn),xe=Ke,Ze=Bt,Mt=Cn)},setLocked:function(Ke){D=Ke},setClear:function(Ke){kt!==Ke&&(i.clearStencil(Ke),kt=Ke)},reset:function(){D=!1,ge=null,Y=null,ee=null,ue=null,xe=null,Ze=null,Mt=null,kt=null}}}let s=new e,r=new t,a=new n,o=new WeakMap,l=new WeakMap,c={},h={},d=new WeakMap,f=[],u=null,g=!1,v=null,m=null,p=null,b=null,y=null,w=null,L=null,T=new Ce(0,0,0),A=0,I=!1,B=null,x=null,M=null,k=null,V=null,X=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS),te=!1,W=0,se=i.getParameter(i.VERSION);se.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(se)[1]),te=W>=1):se.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(se)[1]),te=W>=2);let Z=null,pe={},me=i.getParameter(i.SCISSOR_BOX),ae=i.getParameter(i.VIEWPORT),Ve=new at().fromArray(me),Ye=new at().fromArray(ae);function $(D,ge,Y,ee){let ue=new Uint8Array(4),xe=i.createTexture();i.bindTexture(D,xe),i.texParameteri(D,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(D,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Ze=0;Ze<Y;Ze++)D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY?i.texImage3D(ge,0,i.RGBA,1,1,ee,0,i.RGBA,i.UNSIGNED_BYTE,ue):i.texImage2D(ge+Ze,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ue);return xe}let ie={};ie[i.TEXTURE_2D]=$(i.TEXTURE_2D,i.TEXTURE_2D,1),ie[i.TEXTURE_CUBE_MAP]=$(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[i.TEXTURE_2D_ARRAY]=$(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ie[i.TEXTURE_3D]=$(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),a.setClear(0),_e(i.DEPTH_TEST),r.setFunc(ji),ke(!1),Xe(eh),_e(i.CULL_FACE),P(yn);function _e(D){c[D]!==!0&&(i.enable(D),c[D]=!0)}function he(D){c[D]!==!1&&(i.disable(D),c[D]=!1)}function ve(D,ge){return h[D]!==ge?(i.bindFramebuffer(D,ge),h[D]=ge,D===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=ge),D===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=ge),!0):!1}function Pe(D,ge){let Y=f,ee=!1;if(D){Y=d.get(ge),Y===void 0&&(Y=[],d.set(ge,Y));let ue=D.textures;if(Y.length!==ue.length||Y[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,Ze=ue.length;xe<Ze;xe++)Y[xe]=i.COLOR_ATTACHMENT0+xe;Y.length=ue.length,ee=!0}}else Y[0]!==i.BACK&&(Y[0]=i.BACK,ee=!0);ee&&i.drawBuffers(Y)}function Ge(D){return u!==D?(i.useProgram(D),u=D,!0):!1}let je={[_i]:i.FUNC_ADD,[Rd]:i.FUNC_SUBTRACT,[Pd]:i.FUNC_REVERSE_SUBTRACT};je[Id]=i.MIN,je[Ld]=i.MAX;let We={[Dd]:i.ZERO,[Nd]:i.ONE,[Ud]:i.SRC_COLOR,[Io]:i.SRC_ALPHA,[Hd]:i.SRC_ALPHA_SATURATE,[kd]:i.DST_COLOR,[Od]:i.DST_ALPHA,[Fd]:i.ONE_MINUS_SRC_COLOR,[Lo]:i.ONE_MINUS_SRC_ALPHA,[Bd]:i.ONE_MINUS_DST_COLOR,[zd]:i.ONE_MINUS_DST_ALPHA,[Vd]:i.CONSTANT_COLOR,[Gd]:i.ONE_MINUS_CONSTANT_COLOR,[Wd]:i.CONSTANT_ALPHA,[Xd]:i.ONE_MINUS_CONSTANT_ALPHA};function P(D,ge,Y,ee,ue,xe,Ze,Mt,kt,Ke){if(D===yn){g===!0&&(he(i.BLEND),g=!1);return}if(g===!1&&(_e(i.BLEND),g=!0),D!==Cd){if(D!==v||Ke!==I){if((m!==_i||y!==_i)&&(i.blendEquation(i.FUNC_ADD),m=_i,y=_i),Ke)switch(D){case Zi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.ONE,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}else switch(D){case Zi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case jn:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case th:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case nh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",D);break}p=null,b=null,w=null,L=null,T.set(0,0,0),A=0,v=D,I=Ke}return}ue=ue||ge,xe=xe||Y,Ze=Ze||ee,(ge!==m||ue!==y)&&(i.blendEquationSeparate(je[ge],je[ue]),m=ge,y=ue),(Y!==p||ee!==b||xe!==w||Ze!==L)&&(i.blendFuncSeparate(We[Y],We[ee],We[xe],We[Ze]),p=Y,b=ee,w=xe,L=Ze),(Mt.equals(T)===!1||kt!==A)&&(i.blendColor(Mt.r,Mt.g,Mt.b,kt),T.copy(Mt),A=kt),v=D,I=!1}function nt(D,ge){D.side===Ct?he(i.CULL_FACE):_e(i.CULL_FACE);let Y=D.side===Vt;ge&&(Y=!Y),ke(Y),D.blending===Zi&&D.transparent===!1?P(yn):P(D.blending,D.blendEquation,D.blendSrc,D.blendDst,D.blendEquationAlpha,D.blendSrcAlpha,D.blendDstAlpha,D.blendColor,D.blendAlpha,D.premultipliedAlpha),r.setFunc(D.depthFunc),r.setTest(D.depthTest),r.setMask(D.depthWrite),s.setMask(D.colorWrite);let ee=D.stencilWrite;a.setTest(ee),ee&&(a.setMask(D.stencilWriteMask),a.setFunc(D.stencilFunc,D.stencilRef,D.stencilFuncMask),a.setOp(D.stencilFail,D.stencilZFail,D.stencilZPass)),rt(D.polygonOffset,D.polygonOffsetFactor,D.polygonOffsetUnits),D.alphaToCoverage===!0?_e(i.SAMPLE_ALPHA_TO_COVERAGE):he(i.SAMPLE_ALPHA_TO_COVERAGE)}function ke(D){B!==D&&(D?i.frontFace(i.CW):i.frontFace(i.CCW),B=D)}function Xe(D){D!==Td?(_e(i.CULL_FACE),D!==x&&(D===eh?i.cullFace(i.BACK):D===Ad?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):he(i.CULL_FACE),x=D}function Ie(D){D!==M&&(te&&i.lineWidth(D),M=D)}function rt(D,ge,Y){D?(_e(i.POLYGON_OFFSET_FILL),(k!==ge||V!==Y)&&(i.polygonOffset(ge,Y),k=ge,V=Y)):he(i.POLYGON_OFFSET_FILL)}function De(D){D?_e(i.SCISSOR_TEST):he(i.SCISSOR_TEST)}function E(D){D===void 0&&(D=i.TEXTURE0+X-1),Z!==D&&(i.activeTexture(D),Z=D)}function _(D,ge,Y){Y===void 0&&(Z===null?Y=i.TEXTURE0+X-1:Y=Z);let ee=pe[Y];ee===void 0&&(ee={type:void 0,texture:void 0},pe[Y]=ee),(ee.type!==D||ee.texture!==ge)&&(Z!==Y&&(i.activeTexture(Y),Z=Y),i.bindTexture(D,ge||ie[D]),ee.type=D,ee.texture=ge)}function z(){let D=pe[Z];D!==void 0&&D.type!==void 0&&(i.bindTexture(D.type,null),D.type=void 0,D.texture=void 0)}function J(){try{i.compressedTexImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ne(){try{i.compressedTexImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function K(){try{i.texSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function be(){try{i.texSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function R(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function O(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function j(){try{i.texStorage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function q(){try{i.texStorage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Q(){try{i.texImage2D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function ce(){try{i.texImage3D.apply(i,arguments)}catch(D){console.error("THREE.WebGLState:",D)}}function Ae(D){Ve.equals(D)===!1&&(i.scissor(D.x,D.y,D.z,D.w),Ve.copy(D))}function fe(D){Ye.equals(D)===!1&&(i.viewport(D.x,D.y,D.z,D.w),Ye.copy(D))}function Be(D,ge){let Y=l.get(ge);Y===void 0&&(Y=new WeakMap,l.set(ge,Y));let ee=Y.get(D);ee===void 0&&(ee=i.getUniformBlockIndex(ge,D.name),Y.set(D,ee))}function Ue(D,ge){let ee=l.get(ge).get(D);o.get(ge)!==ee&&(i.uniformBlockBinding(ge,ee,D.__bindingPointIndex),o.set(ge,ee))}function dt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Z=null,pe={},h={},d=new WeakMap,f=[],u=null,g=!1,v=null,m=null,p=null,b=null,y=null,w=null,L=null,T=new Ce(0,0,0),A=0,I=!1,B=null,x=null,M=null,k=null,V=null,Ve.set(0,0,i.canvas.width,i.canvas.height),Ye.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),a.reset()}return{buffers:{color:s,depth:r,stencil:a},enable:_e,disable:he,bindFramebuffer:ve,drawBuffers:Pe,useProgram:Ge,setBlending:P,setMaterial:nt,setFlipSided:ke,setCullFace:Xe,setLineWidth:Ie,setPolygonOffset:rt,setScissorTest:De,activeTexture:E,bindTexture:_,unbindTexture:z,compressedTexImage2D:J,compressedTexImage3D:ne,texImage2D:Q,texImage3D:ce,updateUBOMapping:Be,uniformBlockBinding:Ue,texStorage2D:j,texStorage3D:q,texSubImage2D:K,texSubImage3D:be,compressedTexSubImage2D:R,compressedTexSubImage3D:O,scissor:Ae,viewport:fe,reset:dt}}function Zh(i,e,t,n){let s=J0(n);switch(t){case cu:return i*e;case uu:return i*e;case du:return i*e*2;case fu:return i*e/s.components*s.byteLength;case fc:return i*e/s.components*s.byteLength;case pu:return i*e*2/s.components*s.byteLength;case pc:return i*e*2/s.components*s.byteLength;case hu:return i*e*3/s.components*s.byteLength;case fn:return i*e*4/s.components*s.byteLength;case mc:return i*e*4/s.components*s.byteLength;case mr:case gr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case xr:case vr:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Xo:case Yo:return Math.max(i,16)*Math.max(e,8)/4;case Wo:case qo:return Math.max(i,8)*Math.max(e,8)/2;case Zo:case $o:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Jo:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ko:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case jo:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Qo:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case el:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case tl:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case nl:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case il:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case sl:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case rl:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case al:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case ol:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case ll:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case cl:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case hl:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case _r:case ul:case dl:return Math.ceil(i/4)*Math.ceil(e/4)*16;case mu:case fl:return Math.ceil(i/4)*Math.ceil(e/4)*8;case pl:case ml:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function J0(i){switch(i){case zn:case au:return{byteLength:1,components:1};case As:case ou:case Hn:return{byteLength:2,components:1};case uc:case dc:return{byteLength:2,components:4};case wi:case hc:case Fn:return{byteLength:4,components:1};case lu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function K0(i,e,t,n,s,r,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new le,h=new WeakMap,d,f=new WeakMap,u=!1;try{u=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(E,_){return u?new OffscreenCanvas(E,_):Tr("canvas")}function v(E,_,z){let J=1,ne=De(E);if((ne.width>z||ne.height>z)&&(J=z/Math.max(ne.width,ne.height)),J<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){let K=Math.floor(J*ne.width),be=Math.floor(J*ne.height);d===void 0&&(d=g(K,be));let R=_?g(K,be):d;return R.width=K,R.height=be,R.getContext("2d").drawImage(E,0,0,K,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ne.width+"x"+ne.height+") to ("+K+"x"+be+")."),R}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ne.width+"x"+ne.height+")."),E;return E}function m(E){return E.generateMipmaps&&E.minFilter!==an&&E.minFilter!==dn}function p(E){i.generateMipmap(E)}function b(E,_,z,J,ne=!1){if(E!==null){if(i[E]!==void 0)return i[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let K=_;if(_===i.RED&&(z===i.FLOAT&&(K=i.R32F),z===i.HALF_FLOAT&&(K=i.R16F),z===i.UNSIGNED_BYTE&&(K=i.R8)),_===i.RED_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.R8UI),z===i.UNSIGNED_SHORT&&(K=i.R16UI),z===i.UNSIGNED_INT&&(K=i.R32UI),z===i.BYTE&&(K=i.R8I),z===i.SHORT&&(K=i.R16I),z===i.INT&&(K=i.R32I)),_===i.RG&&(z===i.FLOAT&&(K=i.RG32F),z===i.HALF_FLOAT&&(K=i.RG16F),z===i.UNSIGNED_BYTE&&(K=i.RG8)),_===i.RG_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RG8UI),z===i.UNSIGNED_SHORT&&(K=i.RG16UI),z===i.UNSIGNED_INT&&(K=i.RG32UI),z===i.BYTE&&(K=i.RG8I),z===i.SHORT&&(K=i.RG16I),z===i.INT&&(K=i.RG32I)),_===i.RGB_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGB8UI),z===i.UNSIGNED_SHORT&&(K=i.RGB16UI),z===i.UNSIGNED_INT&&(K=i.RGB32UI),z===i.BYTE&&(K=i.RGB8I),z===i.SHORT&&(K=i.RGB16I),z===i.INT&&(K=i.RGB32I)),_===i.RGBA_INTEGER&&(z===i.UNSIGNED_BYTE&&(K=i.RGBA8UI),z===i.UNSIGNED_SHORT&&(K=i.RGBA16UI),z===i.UNSIGNED_INT&&(K=i.RGBA32UI),z===i.BYTE&&(K=i.RGBA8I),z===i.SHORT&&(K=i.RGBA16I),z===i.INT&&(K=i.RGBA32I)),_===i.RGB&&z===i.UNSIGNED_INT_5_9_9_9_REV&&(K=i.RGB9_E5),_===i.RGBA){let be=ne?Mr:Je.getTransfer(J);z===i.FLOAT&&(K=i.RGBA32F),z===i.HALF_FLOAT&&(K=i.RGBA16F),z===i.UNSIGNED_BYTE&&(K=be===ct?i.SRGB8_ALPHA8:i.RGBA8),z===i.UNSIGNED_SHORT_4_4_4_4&&(K=i.RGBA4),z===i.UNSIGNED_SHORT_5_5_5_1&&(K=i.RGB5_A1)}return(K===i.R16F||K===i.R32F||K===i.RG16F||K===i.RG32F||K===i.RGBA16F||K===i.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(E,_){let z;return E?_===null||_===wi||_===ts?z=i.DEPTH24_STENCIL8:_===Fn?z=i.DEPTH32F_STENCIL8:_===As&&(z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===wi||_===ts?z=i.DEPTH_COMPONENT24:_===Fn?z=i.DEPTH_COMPONENT32F:_===As&&(z=i.DEPTH_COMPONENT16),z}function w(E,_){return m(E)===!0||E.isFramebufferTexture&&E.minFilter!==an&&E.minFilter!==dn?Math.log2(Math.max(_.width,_.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?_.mipmaps.length:1}function L(E){let _=E.target;_.removeEventListener("dispose",L),A(_),_.isVideoTexture&&h.delete(_)}function T(E){let _=E.target;_.removeEventListener("dispose",T),B(_)}function A(E){let _=n.get(E);if(_.__webglInit===void 0)return;let z=E.source,J=f.get(z);if(J){let ne=J[_.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&I(E),Object.keys(J).length===0&&f.delete(z)}n.remove(E)}function I(E){let _=n.get(E);i.deleteTexture(_.__webglTexture);let z=E.source,J=f.get(z);delete J[_.__cacheKey],a.memory.textures--}function B(E){let _=n.get(E);if(E.depthTexture&&E.depthTexture.dispose(),E.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(_.__webglFramebuffer[J]))for(let ne=0;ne<_.__webglFramebuffer[J].length;ne++)i.deleteFramebuffer(_.__webglFramebuffer[J][ne]);else i.deleteFramebuffer(_.__webglFramebuffer[J]);_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer[J])}else{if(Array.isArray(_.__webglFramebuffer))for(let J=0;J<_.__webglFramebuffer.length;J++)i.deleteFramebuffer(_.__webglFramebuffer[J]);else i.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&i.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&i.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let J=0;J<_.__webglColorRenderbuffer.length;J++)_.__webglColorRenderbuffer[J]&&i.deleteRenderbuffer(_.__webglColorRenderbuffer[J]);_.__webglDepthRenderbuffer&&i.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let z=E.textures;for(let J=0,ne=z.length;J<ne;J++){let K=n.get(z[J]);K.__webglTexture&&(i.deleteTexture(K.__webglTexture),a.memory.textures--),n.remove(z[J])}n.remove(E)}let x=0;function M(){x=0}function k(){let E=x;return E>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+s.maxTextures),x+=1,E}function V(E){let _=[];return _.push(E.wrapS),_.push(E.wrapT),_.push(E.wrapR||0),_.push(E.magFilter),_.push(E.minFilter),_.push(E.anisotropy),_.push(E.internalFormat),_.push(E.format),_.push(E.type),_.push(E.generateMipmaps),_.push(E.premultiplyAlpha),_.push(E.flipY),_.push(E.unpackAlignment),_.push(E.colorSpace),_.join()}function X(E,_){let z=n.get(E);if(E.isVideoTexture&&Ie(E),E.isRenderTargetTexture===!1&&E.version>0&&z.__version!==E.version){let J=E.image;if(J===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{Ye(z,E,_);return}}t.bindTexture(i.TEXTURE_2D,z.__webglTexture,i.TEXTURE0+_)}function te(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Ye(z,E,_);return}t.bindTexture(i.TEXTURE_2D_ARRAY,z.__webglTexture,i.TEXTURE0+_)}function W(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){Ye(z,E,_);return}t.bindTexture(i.TEXTURE_3D,z.__webglTexture,i.TEXTURE0+_)}function se(E,_){let z=n.get(E);if(E.version>0&&z.__version!==E.version){$(z,E,_);return}t.bindTexture(i.TEXTURE_CUBE_MAP,z.__webglTexture,i.TEXTURE0+_)}let Z={[Vo]:i.REPEAT,[Mi]:i.CLAMP_TO_EDGE,[Go]:i.MIRRORED_REPEAT},pe={[an]:i.NEAREST,[$d]:i.NEAREST_MIPMAP_NEAREST,[Ws]:i.NEAREST_MIPMAP_LINEAR,[dn]:i.LINEAR,[Za]:i.LINEAR_MIPMAP_NEAREST,[Si]:i.LINEAR_MIPMAP_LINEAR},me={[Qd]:i.NEVER,[af]:i.ALWAYS,[ef]:i.LESS,[xu]:i.LEQUAL,[tf]:i.EQUAL,[rf]:i.GEQUAL,[nf]:i.GREATER,[sf]:i.NOTEQUAL};function ae(E,_){if(_.type===Fn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===dn||_.magFilter===Za||_.magFilter===Ws||_.magFilter===Si||_.minFilter===dn||_.minFilter===Za||_.minFilter===Ws||_.minFilter===Si)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(E,i.TEXTURE_WRAP_S,Z[_.wrapS]),i.texParameteri(E,i.TEXTURE_WRAP_T,Z[_.wrapT]),(E===i.TEXTURE_3D||E===i.TEXTURE_2D_ARRAY)&&i.texParameteri(E,i.TEXTURE_WRAP_R,Z[_.wrapR]),i.texParameteri(E,i.TEXTURE_MAG_FILTER,pe[_.magFilter]),i.texParameteri(E,i.TEXTURE_MIN_FILTER,pe[_.minFilter]),_.compareFunction&&(i.texParameteri(E,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(E,i.TEXTURE_COMPARE_FUNC,me[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==Ws&&_.minFilter!==Si||_.type===Fn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||n.get(_).__currentAnisotropy){let z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(E,z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),n.get(_).__currentAnisotropy=_.anisotropy}}}function Ve(E,_){let z=!1;E.__webglInit===void 0&&(E.__webglInit=!0,_.addEventListener("dispose",L));let J=_.source,ne=f.get(J);ne===void 0&&(ne={},f.set(J,ne));let K=V(_);if(K!==E.__cacheKey){ne[K]===void 0&&(ne[K]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,z=!0),ne[K].usedTimes++;let be=ne[E.__cacheKey];be!==void 0&&(ne[E.__cacheKey].usedTimes--,be.usedTimes===0&&I(_)),E.__cacheKey=K,E.__webglTexture=ne[K].texture}return z}function Ye(E,_,z){let J=i.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(J=i.TEXTURE_2D_ARRAY),_.isData3DTexture&&(J=i.TEXTURE_3D);let ne=Ve(E,_),K=_.source;t.bindTexture(J,E.__webglTexture,i.TEXTURE0+z);let be=n.get(K);if(K.version!==be.__version||ne===!0){t.activeTexture(i.TEXTURE0+z);let R=Je.getPrimaries(Je.workingColorSpace),O=_.colorSpace===Jn?null:Je.getPrimaries(_.colorSpace),j=_.colorSpace===Jn||R===O?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,j);let q=v(_.image,!1,s.maxTextureSize);q=rt(_,q);let Q=r.convert(_.format,_.colorSpace),ce=r.convert(_.type),Ae=b(_.internalFormat,Q,ce,_.colorSpace,_.isVideoTexture);ae(J,_);let fe,Be=_.mipmaps,Ue=_.isVideoTexture!==!0,dt=be.__version===void 0||ne===!0,D=K.dataReady,ge=w(_,q);if(_.isDepthTexture)Ae=y(_.format===ns,_.type),dt&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,Ae,q.width,q.height):t.texImage2D(i.TEXTURE_2D,0,Ae,q.width,q.height,0,Q,ce,null));else if(_.isDataTexture)if(Be.length>0){Ue&&dt&&t.texStorage2D(i.TEXTURE_2D,ge,Ae,Be[0].width,Be[0].height);for(let Y=0,ee=Be.length;Y<ee;Y++)fe=Be[Y],Ue?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,fe.width,fe.height,Q,ce,fe.data):t.texImage2D(i.TEXTURE_2D,Y,Ae,fe.width,fe.height,0,Q,ce,fe.data);_.generateMipmaps=!1}else Ue?(dt&&t.texStorage2D(i.TEXTURE_2D,ge,Ae,q.width,q.height),D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,q.width,q.height,Q,ce,q.data)):t.texImage2D(i.TEXTURE_2D,0,Ae,q.width,q.height,0,Q,ce,q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Ue&&dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ae,Be[0].width,Be[0].height,q.depth);for(let Y=0,ee=Be.length;Y<ee;Y++)if(fe=Be[Y],_.format!==fn)if(Q!==null)if(Ue){if(D)if(_.layerUpdates.size>0){let ue=Zh(fe.width,fe.height,_.format,_.type);for(let xe of _.layerUpdates){let Ze=fe.data.subarray(xe*ue/fe.data.BYTES_PER_ELEMENT,(xe+1)*ue/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,xe,fe.width,fe.height,1,Q,Ze,0,0)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,q.depth,Q,fe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Y,Ae,fe.width,fe.height,q.depth,0,fe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?D&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Y,0,0,0,fe.width,fe.height,q.depth,Q,ce,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Y,Ae,fe.width,fe.height,q.depth,0,Q,ce,fe.data)}else{Ue&&dt&&t.texStorage2D(i.TEXTURE_2D,ge,Ae,Be[0].width,Be[0].height);for(let Y=0,ee=Be.length;Y<ee;Y++)fe=Be[Y],_.format!==fn?Q!==null?Ue?D&&t.compressedTexSubImage2D(i.TEXTURE_2D,Y,0,0,fe.width,fe.height,Q,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,Y,Ae,fe.width,fe.height,0,fe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,fe.width,fe.height,Q,ce,fe.data):t.texImage2D(i.TEXTURE_2D,Y,Ae,fe.width,fe.height,0,Q,ce,fe.data)}else if(_.isDataArrayTexture)if(Ue){if(dt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,ge,Ae,q.width,q.height,q.depth),D)if(_.layerUpdates.size>0){let Y=Zh(q.width,q.height,_.format,_.type);for(let ee of _.layerUpdates){let ue=q.data.subarray(ee*Y/q.data.BYTES_PER_ELEMENT,(ee+1)*Y/q.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ee,q.width,q.height,1,Q,ce,ue)}_.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Q,ce,q.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ae,q.width,q.height,q.depth,0,Q,ce,q.data);else if(_.isData3DTexture)Ue?(dt&&t.texStorage3D(i.TEXTURE_3D,ge,Ae,q.width,q.height,q.depth),D&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Q,ce,q.data)):t.texImage3D(i.TEXTURE_3D,0,Ae,q.width,q.height,q.depth,0,Q,ce,q.data);else if(_.isFramebufferTexture){if(dt)if(Ue)t.texStorage2D(i.TEXTURE_2D,ge,Ae,q.width,q.height);else{let Y=q.width,ee=q.height;for(let ue=0;ue<ge;ue++)t.texImage2D(i.TEXTURE_2D,ue,Ae,Y,ee,0,Q,ce,null),Y>>=1,ee>>=1}}else if(Be.length>0){if(Ue&&dt){let Y=De(Be[0]);t.texStorage2D(i.TEXTURE_2D,ge,Ae,Y.width,Y.height)}for(let Y=0,ee=Be.length;Y<ee;Y++)fe=Be[Y],Ue?D&&t.texSubImage2D(i.TEXTURE_2D,Y,0,0,Q,ce,fe):t.texImage2D(i.TEXTURE_2D,Y,Ae,Q,ce,fe);_.generateMipmaps=!1}else if(Ue){if(dt){let Y=De(q);t.texStorage2D(i.TEXTURE_2D,ge,Ae,Y.width,Y.height)}D&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Q,ce,q)}else t.texImage2D(i.TEXTURE_2D,0,Ae,Q,ce,q);m(_)&&p(J),be.__version=K.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function $(E,_,z){if(_.image.length!==6)return;let J=Ve(E,_),ne=_.source;t.bindTexture(i.TEXTURE_CUBE_MAP,E.__webglTexture,i.TEXTURE0+z);let K=n.get(ne);if(ne.version!==K.__version||J===!0){t.activeTexture(i.TEXTURE0+z);let be=Je.getPrimaries(Je.workingColorSpace),R=_.colorSpace===Jn?null:Je.getPrimaries(_.colorSpace),O=_.colorSpace===Jn||be===R?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,_.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,_.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,O);let j=_.isCompressedTexture||_.image[0].isCompressedTexture,q=_.image[0]&&_.image[0].isDataTexture,Q=[];for(let ee=0;ee<6;ee++)!j&&!q?Q[ee]=v(_.image[ee],!0,s.maxCubemapSize):Q[ee]=q?_.image[ee].image:_.image[ee],Q[ee]=rt(_,Q[ee]);let ce=Q[0],Ae=r.convert(_.format,_.colorSpace),fe=r.convert(_.type),Be=b(_.internalFormat,Ae,fe,_.colorSpace),Ue=_.isVideoTexture!==!0,dt=K.__version===void 0||J===!0,D=ne.dataReady,ge=w(_,ce);ae(i.TEXTURE_CUBE_MAP,_);let Y;if(j){Ue&&dt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,ce.width,ce.height);for(let ee=0;ee<6;ee++){Y=Q[ee].mipmaps;for(let ue=0;ue<Y.length;ue++){let xe=Y[ue];_.format!==fn?Ae!==null?Ue?D&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,xe.width,xe.height,Ae,xe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Be,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ue?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,0,0,xe.width,xe.height,Ae,fe,xe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue,Be,xe.width,xe.height,0,Ae,fe,xe.data)}}}else{if(Y=_.mipmaps,Ue&&dt){Y.length>0&&ge++;let ee=De(Q[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,ge,Be,ee.width,ee.height)}for(let ee=0;ee<6;ee++)if(q){Ue?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Q[ee].width,Q[ee].height,Ae,fe,Q[ee].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Q[ee].width,Q[ee].height,0,Ae,fe,Q[ee].data);for(let ue=0;ue<Y.length;ue++){let Ze=Y[ue].image[ee].image;Ue?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Ze.width,Ze.height,Ae,fe,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Be,Ze.width,Ze.height,0,Ae,fe,Ze.data)}}else{Ue?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,0,0,Ae,fe,Q[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,0,Be,Ae,fe,Q[ee]);for(let ue=0;ue<Y.length;ue++){let xe=Y[ue];Ue?D&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,0,0,Ae,fe,xe.image[ee]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ee,ue+1,Be,Ae,fe,xe.image[ee])}}}m(_)&&p(i.TEXTURE_CUBE_MAP),K.__version=ne.version,_.onUpdate&&_.onUpdate(_)}E.__version=_.version}function ie(E,_,z,J,ne,K){let be=r.convert(z.format,z.colorSpace),R=r.convert(z.type),O=b(z.internalFormat,be,R,z.colorSpace);if(!n.get(_).__hasExternalTextures){let q=Math.max(1,_.width>>K),Q=Math.max(1,_.height>>K);ne===i.TEXTURE_3D||ne===i.TEXTURE_2D_ARRAY?t.texImage3D(ne,K,O,q,Q,_.depth,0,be,R,null):t.texImage2D(ne,K,O,q,Q,0,be,R,null)}t.bindFramebuffer(i.FRAMEBUFFER,E),Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,J,ne,n.get(z).__webglTexture,0,ke(_)):(ne===i.TEXTURE_2D||ne>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,J,ne,n.get(z).__webglTexture,K),t.bindFramebuffer(i.FRAMEBUFFER,null)}function _e(E,_,z){if(i.bindRenderbuffer(i.RENDERBUFFER,E),_.depthBuffer){let J=_.depthTexture,ne=J&&J.isDepthTexture?J.type:null,K=y(_.stencilBuffer,ne),be=_.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,R=ke(_);Xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,R,K,_.width,_.height):z?i.renderbufferStorageMultisample(i.RENDERBUFFER,R,K,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,K,_.width,_.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,be,i.RENDERBUFFER,E)}else{let J=_.textures;for(let ne=0;ne<J.length;ne++){let K=J[ne],be=r.convert(K.format,K.colorSpace),R=r.convert(K.type),O=b(K.internalFormat,be,R,K.colorSpace),j=ke(_);z&&Xe(_)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,j,O,_.width,_.height):Xe(_)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,j,O,_.width,_.height):i.renderbufferStorage(i.RENDERBUFFER,O,_.width,_.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function he(E,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,E),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(_.depthTexture).__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),X(_.depthTexture,0);let J=n.get(_.depthTexture).__webglTexture,ne=ke(_);if(_.depthTexture.format===$i)Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,J,0);else if(_.depthTexture.format===ns)Xe(_)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0,ne):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,J,0);else throw new Error("Unknown depthTexture format")}function ve(E){let _=n.get(E),z=E.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==E.depthTexture){let J=E.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),J){let ne=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,J.removeEventListener("dispose",ne)};J.addEventListener("dispose",ne),_.__depthDisposeCallback=ne}_.__boundDepthTexture=J}if(E.depthTexture&&!_.__autoAllocateDepthBuffer){if(z)throw new Error("target.depthTexture not supported in Cube render targets");he(_.__webglFramebuffer,E)}else if(z){_.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer[J]),_.__webglDepthbuffer[J]===void 0)_.__webglDepthbuffer[J]=i.createRenderbuffer(),_e(_.__webglDepthbuffer[J],E,!1);else{let ne=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,K=_.__webglDepthbuffer[J];i.bindRenderbuffer(i.RENDERBUFFER,K),i.framebufferRenderbuffer(i.FRAMEBUFFER,ne,i.RENDERBUFFER,K)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=i.createRenderbuffer(),_e(_.__webglDepthbuffer,E,!1);else{let J=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ne=_.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,ne),i.framebufferRenderbuffer(i.FRAMEBUFFER,J,i.RENDERBUFFER,ne)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Pe(E,_,z){let J=n.get(E);_!==void 0&&ie(J.__webglFramebuffer,E,E.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),z!==void 0&&ve(E)}function Ge(E){let _=E.texture,z=n.get(E),J=n.get(_);E.addEventListener("dispose",T);let ne=E.textures,K=E.isWebGLCubeRenderTarget===!0,be=ne.length>1;if(be||(J.__webglTexture===void 0&&(J.__webglTexture=i.createTexture()),J.__version=_.version,a.memory.textures++),K){z.__webglFramebuffer=[];for(let R=0;R<6;R++)if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer[R]=[];for(let O=0;O<_.mipmaps.length;O++)z.__webglFramebuffer[R][O]=i.createFramebuffer()}else z.__webglFramebuffer[R]=i.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){z.__webglFramebuffer=[];for(let R=0;R<_.mipmaps.length;R++)z.__webglFramebuffer[R]=i.createFramebuffer()}else z.__webglFramebuffer=i.createFramebuffer();if(be)for(let R=0,O=ne.length;R<O;R++){let j=n.get(ne[R]);j.__webglTexture===void 0&&(j.__webglTexture=i.createTexture(),a.memory.textures++)}if(E.samples>0&&Xe(E)===!1){z.__webglMultisampledFramebuffer=i.createFramebuffer(),z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,z.__webglMultisampledFramebuffer);for(let R=0;R<ne.length;R++){let O=ne[R];z.__webglColorRenderbuffer[R]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,z.__webglColorRenderbuffer[R]);let j=r.convert(O.format,O.colorSpace),q=r.convert(O.type),Q=b(O.internalFormat,j,q,O.colorSpace,E.isXRRenderTarget===!0),ce=ke(E);i.renderbufferStorageMultisample(i.RENDERBUFFER,ce,Q,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+R,i.RENDERBUFFER,z.__webglColorRenderbuffer[R])}i.bindRenderbuffer(i.RENDERBUFFER,null),E.depthBuffer&&(z.__webglDepthRenderbuffer=i.createRenderbuffer(),_e(z.__webglDepthRenderbuffer,E,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(K){t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture),ae(i.TEXTURE_CUBE_MAP,_);for(let R=0;R<6;R++)if(_.mipmaps&&_.mipmaps.length>0)for(let O=0;O<_.mipmaps.length;O++)ie(z.__webglFramebuffer[R][O],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+R,O);else ie(z.__webglFramebuffer[R],E,_,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+R,0);m(_)&&p(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let R=0,O=ne.length;R<O;R++){let j=ne[R],q=n.get(j);t.bindTexture(i.TEXTURE_2D,q.__webglTexture),ae(i.TEXTURE_2D,j),ie(z.__webglFramebuffer,E,j,i.COLOR_ATTACHMENT0+R,i.TEXTURE_2D,0),m(j)&&p(i.TEXTURE_2D)}t.unbindTexture()}else{let R=i.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(R=E.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(R,J.__webglTexture),ae(R,_),_.mipmaps&&_.mipmaps.length>0)for(let O=0;O<_.mipmaps.length;O++)ie(z.__webglFramebuffer[O],E,_,i.COLOR_ATTACHMENT0,R,O);else ie(z.__webglFramebuffer,E,_,i.COLOR_ATTACHMENT0,R,0);m(_)&&p(R),t.unbindTexture()}E.depthBuffer&&ve(E)}function je(E){let _=E.textures;for(let z=0,J=_.length;z<J;z++){let ne=_[z];if(m(ne)){let K=E.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,be=n.get(ne).__webglTexture;t.bindTexture(K,be),p(K),t.unbindTexture()}}}let We=[],P=[];function nt(E){if(E.samples>0){if(Xe(E)===!1){let _=E.textures,z=E.width,J=E.height,ne=i.COLOR_BUFFER_BIT,K=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=n.get(E),R=_.length>1;if(R)for(let O=0;O<_.length;O++)t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let O=0;O<_.length;O++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(ne|=i.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(ne|=i.STENCIL_BUFFER_BIT)),R){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,be.__webglColorRenderbuffer[O]);let j=n.get(_[O]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,j,0)}i.blitFramebuffer(0,0,z,J,0,0,z,J,ne,i.NEAREST),l===!0&&(We.length=0,P.length=0,We.push(i.COLOR_ATTACHMENT0+O),E.depthBuffer&&E.resolveDepthBuffer===!1&&(We.push(K),P.push(K),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,P)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,We))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),R)for(let O=0;O<_.length;O++){t.bindFramebuffer(i.FRAMEBUFFER,be.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.RENDERBUFFER,be.__webglColorRenderbuffer[O]);let j=n.get(_[O]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,be.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+O,i.TEXTURE_2D,j,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){let _=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[_])}}}function ke(E){return Math.min(s.maxSamples,E.samples)}function Xe(E){let _=n.get(E);return E.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function Ie(E){let _=a.render.frame;h.get(E)!==_&&(h.set(E,_),E.update())}function rt(E,_){let z=E.colorSpace,J=E.format,ne=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||z!==si&&z!==Jn&&(Je.getTransfer(z)===ct?(J!==fn||ne!==zn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",z)),_}function De(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(c.width=E.naturalWidth||E.width,c.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(c.width=E.displayWidth,c.height=E.displayHeight):(c.width=E.width,c.height=E.height),c}this.allocateTextureUnit=k,this.resetTextureUnits=M,this.setTexture2D=X,this.setTexture2DArray=te,this.setTexture3D=W,this.setTextureCube=se,this.rebindTextures=Pe,this.setupRenderTarget=Ge,this.updateRenderTargetMipmap=je,this.updateMultisampleRenderTarget=nt,this.setupDepthRenderbuffer=ve,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=Xe}function j0(i,e){function t(n,s=Jn){let r,a=Je.getTransfer(s);if(n===zn)return i.UNSIGNED_BYTE;if(n===uc)return i.UNSIGNED_SHORT_4_4_4_4;if(n===dc)return i.UNSIGNED_SHORT_5_5_5_1;if(n===lu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===au)return i.BYTE;if(n===ou)return i.SHORT;if(n===As)return i.UNSIGNED_SHORT;if(n===hc)return i.INT;if(n===wi)return i.UNSIGNED_INT;if(n===Fn)return i.FLOAT;if(n===Hn)return i.HALF_FLOAT;if(n===cu)return i.ALPHA;if(n===hu)return i.RGB;if(n===fn)return i.RGBA;if(n===uu)return i.LUMINANCE;if(n===du)return i.LUMINANCE_ALPHA;if(n===$i)return i.DEPTH_COMPONENT;if(n===ns)return i.DEPTH_STENCIL;if(n===fu)return i.RED;if(n===fc)return i.RED_INTEGER;if(n===pu)return i.RG;if(n===pc)return i.RG_INTEGER;if(n===mc)return i.RGBA_INTEGER;if(n===mr||n===gr||n===xr||n===vr)if(a===ct)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===mr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===mr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===gr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===xr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===vr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Wo||n===Xo||n===qo||n===Yo)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Wo)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Xo)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===qo)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Yo)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Zo||n===$o||n===Jo)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Zo||n===$o)return a===ct?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Ko||n===jo||n===Qo||n===el||n===tl||n===nl||n===il||n===sl||n===rl||n===al||n===ol||n===ll||n===cl||n===hl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Ko)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===jo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Qo)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===el)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===tl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===nl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===il)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===sl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===rl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===al)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===ol)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===ll)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===cl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===hl)return a===ct?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===_r||n===ul||n===dl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===_r)return a===ct?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ul)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===dl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===mu||n===fl||n===pl||n===ml)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===_r)return r.COMPRESSED_RED_RGTC1_EXT;if(n===fl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ts?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}var Il=class extends Ot{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}},vt=class extends wt{constructor(){super(),this.isGroup=!0,this.type="Group"}},Q0={type:"move"},ws=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new vt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new vt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new C,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new C),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new vt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new C,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new C),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let v of e.hand.values()){let m=t.getJointPose(v,n),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),u=.02,g=.005;c.inputState.pinching&&f>u+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=u-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Q0)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let n=new vt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}},ex=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,tx=`
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

}`,Ll=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){let s=new Qt,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,n=new qt({vertexShader:ex,fragmentShader:tx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Re(new kn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Dl=class extends Qn{constructor(e,t){super();let n=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,u=null,g=null,v=new Ll,m=t.getContextAttributes(),p=null,b=null,y=[],w=[],L=new le,T=null,A=new Ot;A.layers.enable(1),A.viewport=new at;let I=new Ot;I.layers.enable(2),I.viewport=new at;let B=[A,I],x=new Il;x.layers.enable(1),x.layers.enable(2);let M=null,k=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function($){let ie=y[$];return ie===void 0&&(ie=new ws,y[$]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function($){let ie=y[$];return ie===void 0&&(ie=new ws,y[$]=ie),ie.getGripSpace()},this.getHand=function($){let ie=y[$];return ie===void 0&&(ie=new ws,y[$]=ie),ie.getHandSpace()};function V($){let ie=w.indexOf($.inputSource);if(ie===-1)return;let _e=y[ie];_e!==void 0&&(_e.update($.inputSource,$.frame,c||a),_e.dispatchEvent({type:$.type,data:$.inputSource}))}function X(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",X),s.removeEventListener("inputsourceschange",te);for(let $=0;$<y.length;$++){let ie=w[$];ie!==null&&(w[$]=null,y[$].disconnect(ie))}M=null,k=null,v.reset(),e.setRenderTarget(p),u=null,f=null,d=null,s=null,b=null,Ye.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function($){r=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function($){o=$,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function($){c=$},this.getBaseLayer=function(){return f!==null?f:u},this.getBinding=function(){return d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function($){if(s=$,s!==null){if(p=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",X),s.addEventListener("inputsourceschange",te),m.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),s.renderState.layers===void 0){let ie={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};u=new XRWebGLLayer(s,t,ie),s.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),b=new en(u.framebufferWidth,u.framebufferHeight,{format:fn,type:zn,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ie=null,_e=null,he=null;m.depth&&(he=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=m.stencil?ns:$i,_e=m.stencil?ts:wi);let ve={colorFormat:t.RGBA8,depthFormat:he,scaleFactor:r};d=new XRWebGLBinding(s,t),f=d.createProjectionLayer(ve),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),b=new en(f.textureWidth,f.textureHeight,{format:fn,type:zn,depthTexture:new Fr(f.textureWidth,f.textureHeight,_e,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Ye.setContext(s),Ye.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function te($){for(let ie=0;ie<$.removed.length;ie++){let _e=$.removed[ie],he=w.indexOf(_e);he>=0&&(w[he]=null,y[he].disconnect(_e))}for(let ie=0;ie<$.added.length;ie++){let _e=$.added[ie],he=w.indexOf(_e);if(he===-1){for(let Pe=0;Pe<y.length;Pe++)if(Pe>=w.length){w.push(_e),he=Pe;break}else if(w[Pe]===null){w[Pe]=_e,he=Pe;break}if(he===-1)break}let ve=y[he];ve&&ve.connect(_e)}}let W=new C,se=new C;function Z($,ie,_e){W.setFromMatrixPosition(ie.matrixWorld),se.setFromMatrixPosition(_e.matrixWorld);let he=W.distanceTo(se),ve=ie.projectionMatrix.elements,Pe=_e.projectionMatrix.elements,Ge=ve[14]/(ve[10]-1),je=ve[14]/(ve[10]+1),We=(ve[9]+1)/ve[5],P=(ve[9]-1)/ve[5],nt=(ve[8]-1)/ve[0],ke=(Pe[8]+1)/Pe[0],Xe=Ge*nt,Ie=Ge*ke,rt=he/(-nt+ke),De=rt*-nt;if(ie.matrixWorld.decompose($.position,$.quaternion,$.scale),$.translateX(De),$.translateZ(rt),$.matrixWorld.compose($.position,$.quaternion,$.scale),$.matrixWorldInverse.copy($.matrixWorld).invert(),ve[10]===-1)$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{let E=Ge+rt,_=je+rt,z=Xe-De,J=Ie+(he-De),ne=We*je/_*E,K=P*je/_*E;$.projectionMatrix.makePerspective(z,J,ne,K,E,_),$.projectionMatrixInverse.copy($.projectionMatrix).invert()}}function pe($,ie){ie===null?$.matrixWorld.copy($.matrix):$.matrixWorld.multiplyMatrices(ie.matrixWorld,$.matrix),$.matrixWorldInverse.copy($.matrixWorld).invert()}this.updateCamera=function($){if(s===null)return;let ie=$.near,_e=$.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(_e=v.depthFar)),x.near=I.near=A.near=ie,x.far=I.far=A.far=_e,(M!==x.near||k!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),M=x.near,k=x.far);let he=$.parent,ve=x.cameras;pe(x,he);for(let Pe=0;Pe<ve.length;Pe++)pe(ve[Pe],he);ve.length===2?Z(x,A,I):x.projectionMatrix.copy(A.projectionMatrix),me($,x,he)};function me($,ie,_e){_e===null?$.matrix.copy(ie.matrixWorld):($.matrix.copy(_e.matrixWorld),$.matrix.invert(),$.matrix.multiply(ie.matrixWorld)),$.matrix.decompose($.position,$.quaternion,$.scale),$.updateMatrixWorld(!0),$.projectionMatrix.copy(ie.projectionMatrix),$.projectionMatrixInverse.copy(ie.projectionMatrixInverse),$.isPerspectiveCamera&&($.fov=xl*2*Math.atan(1/$.projectionMatrix.elements[5]),$.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(f===null&&u===null))return l},this.setFoveation=function($){l=$,f!==null&&(f.fixedFoveation=$),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=$)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(x)};let ae=null;function Ve($,ie){if(h=ie.getViewerPose(c||a),g=ie,h!==null){let _e=h.views;u!==null&&(e.setRenderTargetFramebuffer(b,u.framebuffer),e.setRenderTarget(b));let he=!1;_e.length!==x.cameras.length&&(x.cameras.length=0,he=!0);for(let Pe=0;Pe<_e.length;Pe++){let Ge=_e[Pe],je=null;if(u!==null)je=u.getViewport(Ge);else{let P=d.getViewSubImage(f,Ge);je=P.viewport,Pe===0&&(e.setRenderTargetTextures(b,P.colorTexture,f.ignoreDepthValues?void 0:P.depthStencilTexture),e.setRenderTarget(b))}let We=B[Pe];We===void 0&&(We=new Ot,We.layers.enable(Pe),We.viewport=new at,B[Pe]=We),We.matrix.fromArray(Ge.transform.matrix),We.matrix.decompose(We.position,We.quaternion,We.scale),We.projectionMatrix.fromArray(Ge.projectionMatrix),We.projectionMatrixInverse.copy(We.projectionMatrix).invert(),We.viewport.set(je.x,je.y,je.width,je.height),Pe===0&&(x.matrix.copy(We.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),he===!0&&x.cameras.push(We)}let ve=s.enabledFeatures;if(ve&&ve.includes("depth-sensing")){let Pe=d.getDepthInformation(_e[0]);Pe&&Pe.isValid&&Pe.texture&&v.init(e,Pe,s.renderState)}}for(let _e=0;_e<y.length;_e++){let he=w[_e],ve=y[_e];he!==null&&ve!==void 0&&ve.update(he,ie,c||a)}ae&&ae($,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}let Ye=new Mu;Ye.setAnimationLoop(Ve),this.setAnimationLoop=function($){ae=$},this.dispose=function(){}}},xi=new bn,nx=new ht;function ix(i,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,bu(i)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,y,w){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(m,p):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p)):p.isMeshStandardMaterial?(r(m,p),f(m,p),p.isMeshPhysicalMaterial&&u(m,p,w)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,y):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Vt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Vt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=e.get(p),y=b.envMap,w=b.envMapRotation;y&&(m.envMap.value=y,xi.copy(w),xi.x*=-1,xi.y*=-1,xi.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(xi.y*=-1,xi.z*=-1),m.envMapRotation.value.setFromMatrix4(nx.makeRotationFromEuler(xi)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,y){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=y*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function f(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Vt&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function sx(i,e,t,n){let s={},r={},a=[],o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(b,y){let w=y.program;n.uniformBlockBinding(b,w)}function c(b,y){let w=s[b.id];w===void 0&&(g(b),w=h(b),s[b.id]=w,b.addEventListener("dispose",m));let L=y.program;n.updateUBOMapping(b,L);let T=e.render.frame;r[b.id]!==T&&(f(b),r[b.id]=T)}function h(b){let y=d();b.__bindingPointIndex=y;let w=i.createBuffer(),L=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,w),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,w),w}function d(){for(let b=0;b<o;b++)if(a.indexOf(b)===-1)return a.push(b),b;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(b){let y=s[b.id],w=b.uniforms,L=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let T=0,A=w.length;T<A;T++){let I=Array.isArray(w[T])?w[T]:[w[T]];for(let B=0,x=I.length;B<x;B++){let M=I[B];if(u(M,T,B,L)===!0){let k=M.__offset,V=Array.isArray(M.value)?M.value:[M.value],X=0;for(let te=0;te<V.length;te++){let W=V[te],se=v(W);typeof W=="number"||typeof W=="boolean"?(M.__data[0]=W,i.bufferSubData(i.UNIFORM_BUFFER,k+X,M.__data)):W.isMatrix3?(M.__data[0]=W.elements[0],M.__data[1]=W.elements[1],M.__data[2]=W.elements[2],M.__data[3]=0,M.__data[4]=W.elements[3],M.__data[5]=W.elements[4],M.__data[6]=W.elements[5],M.__data[7]=0,M.__data[8]=W.elements[6],M.__data[9]=W.elements[7],M.__data[10]=W.elements[8],M.__data[11]=0):(W.toArray(M.__data,X),X+=se.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,k,M.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function u(b,y,w,L){let T=b.value,A=y+"_"+w;if(L[A]===void 0)return typeof T=="number"||typeof T=="boolean"?L[A]=T:L[A]=T.clone(),!0;{let I=L[A];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[A]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function g(b){let y=b.uniforms,w=0,L=16;for(let A=0,I=y.length;A<I;A++){let B=Array.isArray(y[A])?y[A]:[y[A]];for(let x=0,M=B.length;x<M;x++){let k=B[x],V=Array.isArray(k.value)?k.value:[k.value];for(let X=0,te=V.length;X<te;X++){let W=V[X],se=v(W),Z=w%L,pe=Z%se.boundary,me=Z+pe;w+=pe,me!==0&&L-me<se.storage&&(w+=L-me),k.__data=new Float32Array(se.storage/Float32Array.BYTES_PER_ELEMENT),k.__offset=w,w+=se.storage}}}let T=w%L;return T>0&&(w+=L-T),b.__size=w,b.__cache={},this}function v(b){let y={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(y.boundary=4,y.storage=4):b.isVector2?(y.boundary=8,y.storage=8):b.isVector3||b.isColor?(y.boundary=16,y.storage=12):b.isVector4?(y.boundary=16,y.storage=16):b.isMatrix3?(y.boundary=48,y.storage=48):b.isMatrix4?(y.boundary=64,y.storage=64):b.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",b),y}function m(b){let y=b.target;y.removeEventListener("dispose",m);let w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function p(){for(let b in s)i.deleteBuffer(s[b]);a=[],s={},r={}}return{bind:l,update:c,dispose:p}}var Or=class{constructor(e={}){let{canvas:t=lf(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let f;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=n.getContextAttributes().alpha}else f=a;let u=new Uint32Array(4),g=new Int32Array(4),v=null,m=null,p=[],b=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=vn,this.toneMapping=Kn,this.toneMappingExposure=1;let y=this,w=!1,L=0,T=0,A=null,I=-1,B=null,x=new at,M=new at,k=null,V=new Ce(0),X=0,te=t.width,W=t.height,se=1,Z=null,pe=null,me=new at(0,0,te,W),ae=new at(0,0,te,W),Ve=!1,Ye=new Cs,$=!1,ie=!1,_e=new ht,he=new ht,ve=new C,Pe=new at,Ge={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},je=!1;function We(){return A===null?se:1}let P=n;function nt(S,N){return t.getContext(S,N)}try{let S={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${nc}`),t.addEventListener("webglcontextlost",ee,!1),t.addEventListener("webglcontextrestored",ue,!1),t.addEventListener("webglcontextcreationerror",xe,!1),P===null){let N="webgl2";if(P=nt(N,S),P===null)throw nt(N)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ke,Xe,Ie,rt,De,E,_,z,J,ne,K,be,R,O,j,q,Q,ce,Ae,fe,Be,Ue,dt,D;function ge(){ke=new yg(P),ke.init(),Ue=new j0(P,ke),Xe=new pg(P,ke,e,Ue),Ie=new $0(P),Xe.reverseDepthBuffer&&Ie.buffers.depth.setReversed(!0),rt=new Sg(P),De=new F0,E=new K0(P,ke,Ie,De,Xe,Ue,rt),_=new gg(y),z=new _g(y),J=new Pf(P),dt=new dg(P,J),ne=new bg(P,J,rt,dt),K=new Eg(P,ne,J,rt),Ae=new wg(P,Xe,E),q=new mg(De),be=new U0(y,_,z,ke,Xe,dt,q),R=new ix(y,De),O=new z0,j=new W0(ke),ce=new ug(y,_,z,Ie,K,f,l),Q=new Y0(y,K,Xe),D=new sx(P,rt,Xe,Ie),fe=new fg(P,ke,rt),Be=new Mg(P,ke,rt),rt.programs=be.programs,y.capabilities=Xe,y.extensions=ke,y.properties=De,y.renderLists=O,y.shadowMap=Q,y.state=Ie,y.info=rt}ge();let Y=new Dl(y,P);this.xr=Y,this.getContext=function(){return P},this.getContextAttributes=function(){return P.getContextAttributes()},this.forceContextLoss=function(){let S=ke.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){let S=ke.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return se},this.setPixelRatio=function(S){S!==void 0&&(se=S,this.setSize(te,W,!1))},this.getSize=function(S){return S.set(te,W)},this.setSize=function(S,N,H=!0){if(Y.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}te=S,W=N,t.width=Math.floor(S*se),t.height=Math.floor(N*se),H===!0&&(t.style.width=S+"px",t.style.height=N+"px"),this.setViewport(0,0,S,N)},this.getDrawingBufferSize=function(S){return S.set(te*se,W*se).floor()},this.setDrawingBufferSize=function(S,N,H){te=S,W=N,se=H,t.width=Math.floor(S*H),t.height=Math.floor(N*H),this.setViewport(0,0,S,N)},this.getCurrentViewport=function(S){return S.copy(x)},this.getViewport=function(S){return S.copy(me)},this.setViewport=function(S,N,H,G){S.isVector4?me.set(S.x,S.y,S.z,S.w):me.set(S,N,H,G),Ie.viewport(x.copy(me).multiplyScalar(se).round())},this.getScissor=function(S){return S.copy(ae)},this.setScissor=function(S,N,H,G){S.isVector4?ae.set(S.x,S.y,S.z,S.w):ae.set(S,N,H,G),Ie.scissor(M.copy(ae).multiplyScalar(se).round())},this.getScissorTest=function(){return Ve},this.setScissorTest=function(S){Ie.setScissorTest(Ve=S)},this.setOpaqueSort=function(S){Z=S},this.setTransparentSort=function(S){pe=S},this.getClearColor=function(S){return S.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(S=!0,N=!0,H=!0){let G=0;if(S){let F=!1;if(A!==null){let re=A.texture.format;F=re===mc||re===pc||re===fc}if(F){let re=A.texture.type,de=re===zn||re===wi||re===As||re===ts||re===uc||re===dc,ye=ce.getClearColor(),Me=ce.getClearAlpha(),Le=ye.r,Ne=ye.g,Se=ye.b;de?(u[0]=Le,u[1]=Ne,u[2]=Se,u[3]=Me,P.clearBufferuiv(P.COLOR,0,u)):(g[0]=Le,g[1]=Ne,g[2]=Se,g[3]=Me,P.clearBufferiv(P.COLOR,0,g))}else G|=P.COLOR_BUFFER_BIT}N&&(G|=P.DEPTH_BUFFER_BIT,P.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),H&&(G|=P.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),P.clear(G)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ee,!1),t.removeEventListener("webglcontextrestored",ue,!1),t.removeEventListener("webglcontextcreationerror",xe,!1),O.dispose(),j.dispose(),De.dispose(),_.dispose(),z.dispose(),K.dispose(),dt.dispose(),D.dispose(),be.dispose(),Y.dispose(),Y.removeEventListener("sessionstart",qc),Y.removeEventListener("sessionend",Yc),ui.stop()};function ee(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),w=!0}function ue(){console.log("THREE.WebGLRenderer: Context Restored."),w=!1;let S=rt.autoReset,N=Q.enabled,H=Q.autoUpdate,G=Q.needsUpdate,F=Q.type;ge(),rt.autoReset=S,Q.enabled=N,Q.autoUpdate=H,Q.needsUpdate=G,Q.type=F}function xe(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){let N=S.target;N.removeEventListener("dispose",Ze),Mt(N)}function Mt(S){kt(S),De.remove(S)}function kt(S){let N=De.get(S).programs;N!==void 0&&(N.forEach(function(H){be.releaseProgram(H)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,N,H,G,F,re){N===null&&(N=Ge);let de=F.isMesh&&F.matrixWorld.determinant()<0,ye=Md(S,N,H,G,F);Ie.setMaterial(G,de);let Me=H.index,Le=1;if(G.wireframe===!0){if(Me=ne.getWireframeAttribute(H),Me===void 0)return;Le=2}let Ne=H.drawRange,Se=H.attributes.position,it=Ne.start*Le,ft=(Ne.start+Ne.count)*Le;re!==null&&(it=Math.max(it,re.start*Le),ft=Math.min(ft,(re.start+re.count)*Le)),Me!==null?(it=Math.max(it,0),ft=Math.min(ft,Me.count)):Se!=null&&(it=Math.max(it,0),ft=Math.min(ft,Se.count));let xt=ft-it;if(xt<0||xt===1/0)return;dt.setup(F,G,ye,H,Me);let $t,Qe=fe;if(Me!==null&&($t=J.get(Me),Qe=Be,Qe.setIndex($t)),F.isMesh)G.wireframe===!0?(Ie.setLineWidth(G.wireframeLinewidth*We()),Qe.setMode(P.LINES)):Qe.setMode(P.TRIANGLES);else if(F.isLine){let we=G.linewidth;we===void 0&&(we=1),Ie.setLineWidth(we*We()),F.isLineSegments?Qe.setMode(P.LINES):F.isLineLoop?Qe.setMode(P.LINE_LOOP):Qe.setMode(P.LINE_STRIP)}else F.isPoints?Qe.setMode(P.POINTS):F.isSprite&&Qe.setMode(P.TRIANGLES);if(F.isBatchedMesh)if(F._multiDrawInstances!==null)Qe.renderMultiDrawInstances(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount,F._multiDrawInstances);else if(ke.get("WEBGL_multi_draw"))Qe.renderMultiDraw(F._multiDrawStarts,F._multiDrawCounts,F._multiDrawCount);else{let we=F._multiDrawStarts,It=F._multiDrawCounts,et=F._multiDrawCount,ln=Me?J.get(Me).bytesPerElement:1,Li=De.get(G).currentProgram.getUniforms();for(let Jt=0;Jt<et;Jt++)Li.setValue(P,"_gl_DrawID",Jt),Qe.render(we[Jt]/ln,It[Jt])}else if(F.isInstancedMesh)Qe.renderInstances(it,xt,F.count);else if(H.isInstancedBufferGeometry){let we=H._maxInstanceCount!==void 0?H._maxInstanceCount:1/0,It=Math.min(H.instanceCount,we);Qe.renderInstances(it,xt,It)}else Qe.render(it,xt)};function Ke(S,N,H){S.transparent===!0&&S.side===Ct&&S.forceSinglePass===!1?(S.side=Vt,S.needsUpdate=!0,Gs(S,N,H),S.side=pn,S.needsUpdate=!0,Gs(S,N,H),S.side=Ct):Gs(S,N,H)}this.compile=function(S,N,H=null){H===null&&(H=S),m=j.get(H),m.init(N),b.push(m),H.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),S!==H&&S.traverseVisible(function(F){F.isLight&&F.layers.test(N.layers)&&(m.pushLight(F),F.castShadow&&m.pushShadow(F))}),m.setupLights();let G=new Set;return S.traverse(function(F){if(!(F.isMesh||F.isPoints||F.isLine||F.isSprite))return;let re=F.material;if(re)if(Array.isArray(re))for(let de=0;de<re.length;de++){let ye=re[de];Ke(ye,H,F),G.add(ye)}else Ke(re,H,F),G.add(re)}),b.pop(),m=null,G},this.compileAsync=function(S,N,H=null){let G=this.compile(S,N,H);return new Promise(F=>{function re(){if(G.forEach(function(de){De.get(de).currentProgram.isReady()&&G.delete(de)}),G.size===0){F(S);return}setTimeout(re,10)}ke.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Bt=null;function Cn(S){Bt&&Bt(S)}function qc(){ui.stop()}function Yc(){ui.start()}let ui=new Mu;ui.setAnimationLoop(Cn),typeof self<"u"&&ui.setContext(self),this.setAnimationLoop=function(S){Bt=S,Y.setAnimationLoop(S),S===null?ui.stop():ui.start()},Y.addEventListener("sessionstart",qc),Y.addEventListener("sessionend",Yc),this.render=function(S,N){if(N!==void 0&&N.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(w===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Y.enabled===!0&&Y.isPresenting===!0&&(Y.cameraAutoUpdate===!0&&Y.updateCamera(N),N=Y.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,N,A),m=j.get(S,b.length),m.init(N),b.push(m),he.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),Ye.setFromProjectionMatrix(he),ie=this.localClippingEnabled,$=q.init(this.clippingPlanes,ie),v=O.get(S,p.length),v.init(),p.push(v),Y.enabled===!0&&Y.isPresenting===!0){let re=y.xr.getDepthSensingMesh();re!==null&&Wa(re,N,-1/0,y.sortObjects)}Wa(S,N,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(Z,pe),je=Y.enabled===!1||Y.isPresenting===!1||Y.hasDepthSensing()===!1,je&&ce.addToRenderList(v,S),this.info.render.frame++,$===!0&&q.beginShadows();let H=m.state.shadowsArray;Q.render(H,S,N),$===!0&&q.endShadows(),this.info.autoReset===!0&&this.info.reset();let G=v.opaque,F=v.transmissive;if(m.setupLights(),N.isArrayCamera){let re=N.cameras;if(F.length>0)for(let de=0,ye=re.length;de<ye;de++){let Me=re[de];$c(G,F,S,Me)}je&&ce.render(S);for(let de=0,ye=re.length;de<ye;de++){let Me=re[de];Zc(v,S,Me,Me.viewport)}}else F.length>0&&$c(G,F,S,N),je&&ce.render(S),Zc(v,S,N);A!==null&&(E.updateMultisampleRenderTarget(A),E.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,N),dt.resetDefaultState(),I=-1,B=null,b.pop(),b.length>0?(m=b[b.length-1],$===!0&&q.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Wa(S,N,H,G){if(S.visible===!1)return;if(S.layers.test(N.layers)){if(S.isGroup)H=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(N);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||Ye.intersectsSprite(S)){G&&Pe.setFromMatrixPosition(S.matrixWorld).applyMatrix4(he);let de=K.update(S),ye=S.material;ye.visible&&v.push(S,de,ye,H,Pe.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||Ye.intersectsObject(S))){let de=K.update(S),ye=S.material;if(G&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Pe.copy(S.boundingSphere.center)):(de.boundingSphere===null&&de.computeBoundingSphere(),Pe.copy(de.boundingSphere.center)),Pe.applyMatrix4(S.matrixWorld).applyMatrix4(he)),Array.isArray(ye)){let Me=de.groups;for(let Le=0,Ne=Me.length;Le<Ne;Le++){let Se=Me[Le],it=ye[Se.materialIndex];it&&it.visible&&v.push(S,de,it,H,Pe.z,Se)}}else ye.visible&&v.push(S,de,ye,H,Pe.z,null)}}let re=S.children;for(let de=0,ye=re.length;de<ye;de++)Wa(re[de],N,H,G)}function Zc(S,N,H,G){let F=S.opaque,re=S.transmissive,de=S.transparent;m.setupLightsView(H),$===!0&&q.setGlobalState(y.clippingPlanes,H),G&&Ie.viewport(x.copy(G)),F.length>0&&Vs(F,N,H),re.length>0&&Vs(re,N,H),de.length>0&&Vs(de,N,H),Ie.buffers.depth.setTest(!0),Ie.buffers.depth.setMask(!0),Ie.buffers.color.setMask(!0),Ie.setPolygonOffset(!1)}function $c(S,N,H,G){if((H.isScene===!0?H.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[G.id]===void 0&&(m.state.transmissionRenderTarget[G.id]=new en(1,1,{generateMipmaps:!0,type:ke.has("EXT_color_buffer_half_float")||ke.has("EXT_color_buffer_float")?Hn:zn,minFilter:Si,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Je.workingColorSpace}));let re=m.state.transmissionRenderTarget[G.id],de=G.viewport||x;re.setSize(de.z,de.w);let ye=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(V),X=y.getClearAlpha(),X<1&&y.setClearColor(16777215,.5),y.clear(),je&&ce.render(H);let Me=y.toneMapping;y.toneMapping=Kn;let Le=G.viewport;if(G.viewport!==void 0&&(G.viewport=void 0),m.setupLightsView(G),$===!0&&q.setGlobalState(y.clippingPlanes,G),Vs(S,H,G),E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re),ke.has("WEBGL_multisampled_render_to_texture")===!1){let Ne=!1;for(let Se=0,it=N.length;Se<it;Se++){let ft=N[Se],xt=ft.object,$t=ft.geometry,Qe=ft.material,we=ft.group;if(Qe.side===Ct&&xt.layers.test(G.layers)){let It=Qe.side;Qe.side=Vt,Qe.needsUpdate=!0,Jc(xt,H,G,$t,Qe,we),Qe.side=It,Qe.needsUpdate=!0,Ne=!0}}Ne===!0&&(E.updateMultisampleRenderTarget(re),E.updateRenderTargetMipmap(re))}y.setRenderTarget(ye),y.setClearColor(V,X),Le!==void 0&&(G.viewport=Le),y.toneMapping=Me}function Vs(S,N,H){let G=N.isScene===!0?N.overrideMaterial:null;for(let F=0,re=S.length;F<re;F++){let de=S[F],ye=de.object,Me=de.geometry,Le=G===null?de.material:G,Ne=de.group;ye.layers.test(H.layers)&&Jc(ye,N,H,Me,Le,Ne)}}function Jc(S,N,H,G,F,re){S.onBeforeRender(y,N,H,G,F,re),S.modelViewMatrix.multiplyMatrices(H.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),F.onBeforeRender(y,N,H,G,S,re),F.transparent===!0&&F.side===Ct&&F.forceSinglePass===!1?(F.side=Vt,F.needsUpdate=!0,y.renderBufferDirect(H,N,G,F,S,re),F.side=pn,F.needsUpdate=!0,y.renderBufferDirect(H,N,G,F,S,re),F.side=Ct):y.renderBufferDirect(H,N,G,F,S,re),S.onAfterRender(y,N,H,G,F,re)}function Gs(S,N,H){N.isScene!==!0&&(N=Ge);let G=De.get(S),F=m.state.lights,re=m.state.shadowsArray,de=F.state.version,ye=be.getParameters(S,F.state,re,N,H),Me=be.getProgramCacheKey(ye),Le=G.programs;G.environment=S.isMeshStandardMaterial?N.environment:null,G.fog=N.fog,G.envMap=(S.isMeshStandardMaterial?z:_).get(S.envMap||G.environment),G.envMapRotation=G.environment!==null&&S.envMap===null?N.environmentRotation:S.envMapRotation,Le===void 0&&(S.addEventListener("dispose",Ze),Le=new Map,G.programs=Le);let Ne=Le.get(Me);if(Ne!==void 0){if(G.currentProgram===Ne&&G.lightsStateVersion===de)return jc(S,ye),Ne}else ye.uniforms=be.getUniforms(S),S.onBeforeCompile(ye,y),Ne=be.acquireProgram(ye,Me),Le.set(Me,Ne),G.uniforms=ye.uniforms;let Se=G.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(Se.clippingPlanes=q.uniform),jc(S,ye),G.needsLights=wd(S),G.lightsStateVersion=de,G.needsLights&&(Se.ambientLightColor.value=F.state.ambient,Se.lightProbe.value=F.state.probe,Se.directionalLights.value=F.state.directional,Se.directionalLightShadows.value=F.state.directionalShadow,Se.spotLights.value=F.state.spot,Se.spotLightShadows.value=F.state.spotShadow,Se.rectAreaLights.value=F.state.rectArea,Se.ltc_1.value=F.state.rectAreaLTC1,Se.ltc_2.value=F.state.rectAreaLTC2,Se.pointLights.value=F.state.point,Se.pointLightShadows.value=F.state.pointShadow,Se.hemisphereLights.value=F.state.hemi,Se.directionalShadowMap.value=F.state.directionalShadowMap,Se.directionalShadowMatrix.value=F.state.directionalShadowMatrix,Se.spotShadowMap.value=F.state.spotShadowMap,Se.spotLightMatrix.value=F.state.spotLightMatrix,Se.spotLightMap.value=F.state.spotLightMap,Se.pointShadowMap.value=F.state.pointShadowMap,Se.pointShadowMatrix.value=F.state.pointShadowMatrix),G.currentProgram=Ne,G.uniformsList=null,Ne}function Kc(S){if(S.uniformsList===null){let N=S.currentProgram.getUniforms();S.uniformsList=Ki.seqWithValue(N.seq,S.uniforms)}return S.uniformsList}function jc(S,N){let H=De.get(S);H.outputColorSpace=N.outputColorSpace,H.batching=N.batching,H.batchingColor=N.batchingColor,H.instancing=N.instancing,H.instancingColor=N.instancingColor,H.instancingMorph=N.instancingMorph,H.skinning=N.skinning,H.morphTargets=N.morphTargets,H.morphNormals=N.morphNormals,H.morphColors=N.morphColors,H.morphTargetsCount=N.morphTargetsCount,H.numClippingPlanes=N.numClippingPlanes,H.numIntersection=N.numClipIntersection,H.vertexAlphas=N.vertexAlphas,H.vertexTangents=N.vertexTangents,H.toneMapping=N.toneMapping}function Md(S,N,H,G,F){N.isScene!==!0&&(N=Ge),E.resetTextureUnits();let re=N.fog,de=G.isMeshStandardMaterial?N.environment:null,ye=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:si,Me=(G.isMeshStandardMaterial?z:_).get(G.envMap||de),Le=G.vertexColors===!0&&!!H.attributes.color&&H.attributes.color.itemSize===4,Ne=!!H.attributes.tangent&&(!!G.normalMap||G.anisotropy>0),Se=!!H.morphAttributes.position,it=!!H.morphAttributes.normal,ft=!!H.morphAttributes.color,xt=Kn;G.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(xt=y.toneMapping);let $t=H.morphAttributes.position||H.morphAttributes.normal||H.morphAttributes.color,Qe=$t!==void 0?$t.length:0,we=De.get(G),It=m.state.lights;if($===!0&&(ie===!0||S!==B)){let sn=S===B&&G.id===I;q.setState(G,S,sn)}let et=!1;G.version===we.__version?(we.needsLights&&we.lightsStateVersion!==It.state.version||we.outputColorSpace!==ye||F.isBatchedMesh&&we.batching===!1||!F.isBatchedMesh&&we.batching===!0||F.isBatchedMesh&&we.batchingColor===!0&&F.colorTexture===null||F.isBatchedMesh&&we.batchingColor===!1&&F.colorTexture!==null||F.isInstancedMesh&&we.instancing===!1||!F.isInstancedMesh&&we.instancing===!0||F.isSkinnedMesh&&we.skinning===!1||!F.isSkinnedMesh&&we.skinning===!0||F.isInstancedMesh&&we.instancingColor===!0&&F.instanceColor===null||F.isInstancedMesh&&we.instancingColor===!1&&F.instanceColor!==null||F.isInstancedMesh&&we.instancingMorph===!0&&F.morphTexture===null||F.isInstancedMesh&&we.instancingMorph===!1&&F.morphTexture!==null||we.envMap!==Me||G.fog===!0&&we.fog!==re||we.numClippingPlanes!==void 0&&(we.numClippingPlanes!==q.numPlanes||we.numIntersection!==q.numIntersection)||we.vertexAlphas!==Le||we.vertexTangents!==Ne||we.morphTargets!==Se||we.morphNormals!==it||we.morphColors!==ft||we.toneMapping!==xt||we.morphTargetsCount!==Qe)&&(et=!0):(et=!0,we.__version=G.version);let ln=we.currentProgram;et===!0&&(ln=Gs(G,N,F));let Li=!1,Jt=!1,Xa=!1,yt=ln.getUniforms(),Gn=we.uniforms;if(Ie.useProgram(ln.program)&&(Li=!0,Jt=!0,Xa=!0),G.id!==I&&(I=G.id,Jt=!0),Li||B!==S){Xe.reverseDepthBuffer?(_e.copy(S.projectionMatrix),hf(_e),uf(_e),yt.setValue(P,"projectionMatrix",_e)):yt.setValue(P,"projectionMatrix",S.projectionMatrix),yt.setValue(P,"viewMatrix",S.matrixWorldInverse);let sn=yt.map.cameraPosition;sn!==void 0&&sn.setValue(P,ve.setFromMatrixPosition(S.matrixWorld)),Xe.logarithmicDepthBuffer&&yt.setValue(P,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(G.isMeshPhongMaterial||G.isMeshToonMaterial||G.isMeshLambertMaterial||G.isMeshBasicMaterial||G.isMeshStandardMaterial||G.isShaderMaterial)&&yt.setValue(P,"isOrthographic",S.isOrthographicCamera===!0),B!==S&&(B=S,Jt=!0,Xa=!0)}if(F.isSkinnedMesh){yt.setOptional(P,F,"bindMatrix"),yt.setOptional(P,F,"bindMatrixInverse");let sn=F.skeleton;sn&&(sn.boneTexture===null&&sn.computeBoneTexture(),yt.setValue(P,"boneTexture",sn.boneTexture,E))}F.isBatchedMesh&&(yt.setOptional(P,F,"batchingTexture"),yt.setValue(P,"batchingTexture",F._matricesTexture,E),yt.setOptional(P,F,"batchingIdTexture"),yt.setValue(P,"batchingIdTexture",F._indirectTexture,E),yt.setOptional(P,F,"batchingColorTexture"),F._colorsTexture!==null&&yt.setValue(P,"batchingColorTexture",F._colorsTexture,E));let qa=H.morphAttributes;if((qa.position!==void 0||qa.normal!==void 0||qa.color!==void 0)&&Ae.update(F,H,ln),(Jt||we.receiveShadow!==F.receiveShadow)&&(we.receiveShadow=F.receiveShadow,yt.setValue(P,"receiveShadow",F.receiveShadow)),G.isMeshGouraudMaterial&&G.envMap!==null&&(Gn.envMap.value=Me,Gn.flipEnvMap.value=Me.isCubeTexture&&Me.isRenderTargetTexture===!1?-1:1),G.isMeshStandardMaterial&&G.envMap===null&&N.environment!==null&&(Gn.envMapIntensity.value=N.environmentIntensity),Jt&&(yt.setValue(P,"toneMappingExposure",y.toneMappingExposure),we.needsLights&&Sd(Gn,Xa),re&&G.fog===!0&&R.refreshFogUniforms(Gn,re),R.refreshMaterialUniforms(Gn,G,se,W,m.state.transmissionRenderTarget[S.id]),Ki.upload(P,Kc(we),Gn,E)),G.isShaderMaterial&&G.uniformsNeedUpdate===!0&&(Ki.upload(P,Kc(we),Gn,E),G.uniformsNeedUpdate=!1),G.isSpriteMaterial&&yt.setValue(P,"center",F.center),yt.setValue(P,"modelViewMatrix",F.modelViewMatrix),yt.setValue(P,"normalMatrix",F.normalMatrix),yt.setValue(P,"modelMatrix",F.matrixWorld),G.isShaderMaterial||G.isRawShaderMaterial){let sn=G.uniformsGroups;for(let Ya=0,Ed=sn.length;Ya<Ed;Ya++){let Qc=sn[Ya];D.update(Qc,ln),D.bind(Qc,ln)}}return ln}function Sd(S,N){S.ambientLightColor.needsUpdate=N,S.lightProbe.needsUpdate=N,S.directionalLights.needsUpdate=N,S.directionalLightShadows.needsUpdate=N,S.pointLights.needsUpdate=N,S.pointLightShadows.needsUpdate=N,S.spotLights.needsUpdate=N,S.spotLightShadows.needsUpdate=N,S.rectAreaLights.needsUpdate=N,S.hemisphereLights.needsUpdate=N}function wd(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,N,H){De.get(S.texture).__webglTexture=N,De.get(S.depthTexture).__webglTexture=H;let G=De.get(S);G.__hasExternalTextures=!0,G.__autoAllocateDepthBuffer=H===void 0,G.__autoAllocateDepthBuffer||ke.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),G.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,N){let H=De.get(S);H.__webglFramebuffer=N,H.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(S,N=0,H=0){A=S,L=N,T=H;let G=!0,F=null,re=!1,de=!1;if(S){let Me=De.get(S);if(Me.__useDefaultFramebuffer!==void 0)Ie.bindFramebuffer(P.FRAMEBUFFER,null),G=!1;else if(Me.__webglFramebuffer===void 0)E.setupRenderTarget(S);else if(Me.__hasExternalTextures)E.rebindTextures(S,De.get(S.texture).__webglTexture,De.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){let Se=S.depthTexture;if(Me.__boundDepthTexture!==Se){if(Se!==null&&De.has(Se)&&(S.width!==Se.image.width||S.height!==Se.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");E.setupDepthRenderbuffer(S)}}let Le=S.texture;(Le.isData3DTexture||Le.isDataArrayTexture||Le.isCompressedArrayTexture)&&(de=!0);let Ne=De.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(Ne[N])?F=Ne[N][H]:F=Ne[N],re=!0):S.samples>0&&E.useMultisampledRTT(S)===!1?F=De.get(S).__webglMultisampledFramebuffer:Array.isArray(Ne)?F=Ne[H]:F=Ne,x.copy(S.viewport),M.copy(S.scissor),k=S.scissorTest}else x.copy(me).multiplyScalar(se).floor(),M.copy(ae).multiplyScalar(se).floor(),k=Ve;if(Ie.bindFramebuffer(P.FRAMEBUFFER,F)&&G&&Ie.drawBuffers(S,F),Ie.viewport(x),Ie.scissor(M),Ie.setScissorTest(k),re){let Me=De.get(S.texture);P.framebufferTexture2D(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,P.TEXTURE_CUBE_MAP_POSITIVE_X+N,Me.__webglTexture,H)}else if(de){let Me=De.get(S.texture),Le=N||0;P.framebufferTextureLayer(P.FRAMEBUFFER,P.COLOR_ATTACHMENT0,Me.__webglTexture,H||0,Le)}I=-1},this.readRenderTargetPixels=function(S,N,H,G,F,re,de){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){Ie.bindFramebuffer(P.FRAMEBUFFER,ye);try{let Me=S.texture,Le=Me.format,Ne=Me.type;if(!Xe.textureFormatReadable(Le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Xe.textureTypeReadable(Ne)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=S.width-G&&H>=0&&H<=S.height-F&&P.readPixels(N,H,G,F,Ue.convert(Le),Ue.convert(Ne),re)}finally{let Me=A!==null?De.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(P.FRAMEBUFFER,Me)}}},this.readRenderTargetPixelsAsync=async function(S,N,H,G,F,re,de){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=De.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&de!==void 0&&(ye=ye[de]),ye){let Me=S.texture,Le=Me.format,Ne=Me.type;if(!Xe.textureFormatReadable(Le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Xe.textureTypeReadable(Ne))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(N>=0&&N<=S.width-G&&H>=0&&H<=S.height-F){Ie.bindFramebuffer(P.FRAMEBUFFER,ye);let Se=P.createBuffer();P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.bufferData(P.PIXEL_PACK_BUFFER,re.byteLength,P.STREAM_READ),P.readPixels(N,H,G,F,Ue.convert(Le),Ue.convert(Ne),0);let it=A!==null?De.get(A).__webglFramebuffer:null;Ie.bindFramebuffer(P.FRAMEBUFFER,it);let ft=P.fenceSync(P.SYNC_GPU_COMMANDS_COMPLETE,0);return P.flush(),await cf(P,ft,4),P.bindBuffer(P.PIXEL_PACK_BUFFER,Se),P.getBufferSubData(P.PIXEL_PACK_BUFFER,0,re),P.deleteBuffer(Se),P.deleteSync(ft),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,N=null,H=0){S.isTexture!==!0&&(yr("WebGLRenderer: copyFramebufferToTexture function signature has changed."),N=arguments[0]||null,S=arguments[1]);let G=Math.pow(2,-H),F=Math.floor(S.image.width*G),re=Math.floor(S.image.height*G),de=N!==null?N.x:0,ye=N!==null?N.y:0;E.setTexture2D(S,0),P.copyTexSubImage2D(P.TEXTURE_2D,H,0,0,de,ye,F,re),Ie.unbindTexture()},this.copyTextureToTexture=function(S,N,H=null,G=null,F=0){S.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture function signature has changed."),G=arguments[0]||null,S=arguments[1],N=arguments[2],F=arguments[3]||0,H=null);let re,de,ye,Me,Le,Ne;H!==null?(re=H.max.x-H.min.x,de=H.max.y-H.min.y,ye=H.min.x,Me=H.min.y):(re=S.image.width,de=S.image.height,ye=0,Me=0),G!==null?(Le=G.x,Ne=G.y):(Le=0,Ne=0);let Se=Ue.convert(N.format),it=Ue.convert(N.type);E.setTexture2D(N,0),P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let ft=P.getParameter(P.UNPACK_ROW_LENGTH),xt=P.getParameter(P.UNPACK_IMAGE_HEIGHT),$t=P.getParameter(P.UNPACK_SKIP_PIXELS),Qe=P.getParameter(P.UNPACK_SKIP_ROWS),we=P.getParameter(P.UNPACK_SKIP_IMAGES),It=S.isCompressedTexture?S.mipmaps[F]:S.image;P.pixelStorei(P.UNPACK_ROW_LENGTH,It.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,It.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ye),P.pixelStorei(P.UNPACK_SKIP_ROWS,Me),S.isDataTexture?P.texSubImage2D(P.TEXTURE_2D,F,Le,Ne,re,de,Se,it,It.data):S.isCompressedTexture?P.compressedTexSubImage2D(P.TEXTURE_2D,F,Le,Ne,It.width,It.height,Se,It.data):P.texSubImage2D(P.TEXTURE_2D,F,Le,Ne,re,de,Se,it,It),P.pixelStorei(P.UNPACK_ROW_LENGTH,ft),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt),P.pixelStorei(P.UNPACK_SKIP_PIXELS,$t),P.pixelStorei(P.UNPACK_SKIP_ROWS,Qe),P.pixelStorei(P.UNPACK_SKIP_IMAGES,we),F===0&&N.generateMipmaps&&P.generateMipmap(P.TEXTURE_2D),Ie.unbindTexture()},this.copyTextureToTexture3D=function(S,N,H=null,G=null,F=0){S.isTexture!==!0&&(yr("WebGLRenderer: copyTextureToTexture3D function signature has changed."),H=arguments[0]||null,G=arguments[1]||null,S=arguments[2],N=arguments[3],F=arguments[4]||0);let re,de,ye,Me,Le,Ne,Se,it,ft,xt=S.isCompressedTexture?S.mipmaps[F]:S.image;H!==null?(re=H.max.x-H.min.x,de=H.max.y-H.min.y,ye=H.max.z-H.min.z,Me=H.min.x,Le=H.min.y,Ne=H.min.z):(re=xt.width,de=xt.height,ye=xt.depth,Me=0,Le=0,Ne=0),G!==null?(Se=G.x,it=G.y,ft=G.z):(Se=0,it=0,ft=0);let $t=Ue.convert(N.format),Qe=Ue.convert(N.type),we;if(N.isData3DTexture)E.setTexture3D(N,0),we=P.TEXTURE_3D;else if(N.isDataArrayTexture||N.isCompressedArrayTexture)E.setTexture2DArray(N,0),we=P.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}P.pixelStorei(P.UNPACK_FLIP_Y_WEBGL,N.flipY),P.pixelStorei(P.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),P.pixelStorei(P.UNPACK_ALIGNMENT,N.unpackAlignment);let It=P.getParameter(P.UNPACK_ROW_LENGTH),et=P.getParameter(P.UNPACK_IMAGE_HEIGHT),ln=P.getParameter(P.UNPACK_SKIP_PIXELS),Li=P.getParameter(P.UNPACK_SKIP_ROWS),Jt=P.getParameter(P.UNPACK_SKIP_IMAGES);P.pixelStorei(P.UNPACK_ROW_LENGTH,xt.width),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,xt.height),P.pixelStorei(P.UNPACK_SKIP_PIXELS,Me),P.pixelStorei(P.UNPACK_SKIP_ROWS,Le),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Ne),S.isDataTexture||S.isData3DTexture?P.texSubImage3D(we,F,Se,it,ft,re,de,ye,$t,Qe,xt.data):N.isCompressedArrayTexture?P.compressedTexSubImage3D(we,F,Se,it,ft,re,de,ye,$t,xt.data):P.texSubImage3D(we,F,Se,it,ft,re,de,ye,$t,Qe,xt),P.pixelStorei(P.UNPACK_ROW_LENGTH,It),P.pixelStorei(P.UNPACK_IMAGE_HEIGHT,et),P.pixelStorei(P.UNPACK_SKIP_PIXELS,ln),P.pixelStorei(P.UNPACK_SKIP_ROWS,Li),P.pixelStorei(P.UNPACK_SKIP_IMAGES,Jt),F===0&&N.generateMipmaps&&P.generateMipmap(we),Ie.unbindTexture()},this.initRenderTarget=function(S){De.get(S).__webglFramebuffer===void 0&&E.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?E.setTextureCube(S,0):S.isData3DTexture?E.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?E.setTexture2DArray(S,0):E.setTexture2D(S,0),Ie.unbindTexture()},this.resetState=function(){L=0,T=0,A=null,Ie.reset(),dt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return On}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=e===gc?"display-p3":"srgb",t.unpackColorSpace=Je.workingColorSpace===na?"display-p3":"srgb"}};var zr=class i{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Ce(e),this.near=t,this.far=n}clone(){return new i(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}},kr=class extends wt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new bn,this.environmentIntensity=1,this.environmentRotation=new bn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}};var Rs=class extends ni{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Ce(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},$h=new ht,Nl=new Rr,ur=new ti,dr=new C,Br=class extends wt{constructor(e=new Rt,t=new Rs){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){let n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ur.copy(n.boundingSphere),ur.applyMatrix4(s),ur.radius+=r,e.ray.intersectsSphere(ur)===!1)return;$h.copy(s).invert(),Nl.copy(e.ray).applyMatrix4($h);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,d=n.attributes.position;if(c!==null){let f=Math.max(0,a.start),u=Math.min(c.count,a.start+a.count);for(let g=f,v=u;g<v;g++){let m=c.getX(g);dr.fromBufferAttribute(d,m),Jh(dr,m,l,s,e,t,this)}}else{let f=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=f,v=u;g<v;g++)dr.fromBufferAttribute(d,g),Jh(dr,g,l,s,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){let s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};function Jh(i,e,t,n,s,r,a){let o=Nl.distanceSqToPoint(i);if(o<t){let l=new C;Nl.closestPointToPoint(i,l),l.applyMatrix4(n);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Hr=class extends Qt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},on=class{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){let n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){let t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){let e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let t=[],n,s=this.getPoint(0),r=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),r+=n.distanceTo(s),t.push(r),s=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){let n=this.getLengths(),s=0,r=n.length,a;t?a=t:a=e*n[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=n[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,n[s]===a)return s/(r-1);let h=n[s],f=n[s+1]-h,u=(a-h)/f;return(s+u)/(r-1)}getTangent(e,t){let s=e-1e-4,r=e+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=t||(a.isVector2?new le:new C);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){let n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){let n=new C,s=[],r=[],a=[],o=new C,l=new ht;for(let u=0;u<=e;u++){let g=u/e;s[u]=this.getTangentAt(g,new C)}r[0]=new C,a[0]=new C;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),f=Math.abs(s[0].z);h<=c&&(c=h,n.set(1,0,0)),d<=c&&(c=d,n.set(0,1,0)),f<=c&&n.set(0,0,1),o.crossVectors(s[0],n).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let u=1;u<=e;u++){if(r[u]=r[u-1].clone(),a[u]=a[u-1].clone(),o.crossVectors(s[u-1],s[u]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Lt(s[u-1].dot(s[u]),-1,1));r[u].applyMatrix4(l.makeRotationAxis(o,g))}a[u].crossVectors(s[u],r[u])}if(t===!0){let u=Math.acos(Lt(r[0].dot(r[e]),-1,1));u/=e,s[0].dot(o.crossVectors(r[0],r[e]))>0&&(u=-u);for(let g=1;g<=e;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],u*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){let e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}},Ps=class extends on{constructor(e=0,t=0,n=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new le){let n=t,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+e*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),f=l-this.aX,u=c-this.aY;l=f*h-u*d+this.aX,c=f*d+u*h+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){let e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}},Ul=class extends Ps{constructor(e,t,n,s,r,a){super(e,t,n,n,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};function vc(){let i=0,e=0,t=0,n=0;function s(r,a,o,l){i=r,e=o,t=-3*r+3*a-2*o-l,n=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let f=(a-r)/c-(o-r)/(c+h)+(o-a)/h,u=(o-a)/h-(l-a)/(h+d)+(l-o)/d;f*=h,u*=h,s(a,o,f,u)},calc:function(r){let a=r*r,o=a*r;return i+e*r+t*a+n*o}}}var fr=new C,To=new vc,Ao=new vc,Co=new vc,Fl=class extends on{constructor(e=[],t=!1,n="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=s}getPoint(e,t=new C){let n=t,s=this.points,r=s.length,a=(r-(this.closed?0:1))*e,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(fr.subVectors(s[0],s[1]).add(s[0]),c=fr);let d=s[o%r],f=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(fr.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=fr),this.curveType==="centripetal"||this.curveType==="chordal"){let u=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),u),v=Math.pow(d.distanceToSquared(f),u),m=Math.pow(f.distanceToSquared(h),u);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),To.initNonuniformCatmullRom(c.x,d.x,f.x,h.x,g,v,m),Ao.initNonuniformCatmullRom(c.y,d.y,f.y,h.y,g,v,m),Co.initNonuniformCatmullRom(c.z,d.z,f.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(To.initCatmullRom(c.x,d.x,f.x,h.x,this.tension),Ao.initCatmullRom(c.y,d.y,f.y,h.y,this.tension),Co.initCatmullRom(c.z,d.z,f.z,h.z,this.tension));return n.set(To.calc(l),Ao.calc(l),Co.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new C().fromArray(s))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}};function Kh(i,e,t,n,s){let r=(n-e)*.5,a=(s-t)*.5,o=i*i,l=i*o;return(2*t-2*n+r+a)*l+(-3*t+3*n-2*r-a)*o+r*i+t}function rx(i,e){let t=1-i;return t*t*e}function ax(i,e){return 2*(1-i)*i*e}function ox(i,e){return i*i*e}function Es(i,e,t,n){return rx(i,e)+ax(i,t)+ox(i,n)}function lx(i,e){let t=1-i;return t*t*t*e}function cx(i,e){let t=1-i;return 3*t*t*i*e}function hx(i,e){return 3*(1-i)*i*i*e}function ux(i,e){return i*i*i*e}function Ts(i,e,t,n,s){return lx(i,e)+cx(i,t)+hx(i,n)+ux(i,s)}var Vr=class extends on{constructor(e=new le,t=new le,n=new le,s=new le){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Ol=class extends on{constructor(e=new C,t=new C,n=new C,s=new C){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=s}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return n.set(Ts(e,s.x,r.x,a.x,o.x),Ts(e,s.y,r.y,a.y,o.y),Ts(e,s.z,r.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}},Gr=class extends on{constructor(e=new le,t=new le){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new le){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new le){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},zl=class extends on{constructor(e=new C,t=new C){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new C){let n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new C){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Wr=class extends on{constructor(e=new le,t=new le,n=new le){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new le){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(e,s.x,r.x,a.x),Es(e,s.y,r.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},kl=class extends on{constructor(e=new C,t=new C,n=new C){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new C){let n=t,s=this.v0,r=this.v1,a=this.v2;return n.set(Es(e,s.x,r.x,a.x),Es(e,s.y,r.y,a.y),Es(e,s.z,r.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){let e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}},Xr=class extends on{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new le){let n=t,s=this.points,r=(s.length-1)*e,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return n.set(Kh(o,l.x,c.x,h.x,d.x),Kh(o,l.y,c.y,h.y,d.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(s.clone())}return this}toJSON(){let e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){let s=this.points[t];e.points.push(s.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){let s=e.points[t];this.points.push(new le().fromArray(s))}return this}},jh=Object.freeze({__proto__:null,ArcCurve:Ul,CatmullRomCurve3:Fl,CubicBezierCurve:Vr,CubicBezierCurve3:Ol,EllipseCurve:Ps,LineCurve:Gr,LineCurve3:zl,QuadraticBezierCurve:Wr,QuadraticBezierCurve3:kl,SplineCurve:Xr}),Bl=class extends on{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){let e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){let n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new jh[n](t,e))}return this}getPoint(e,t){let n=e*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=n){let a=s[r]-n,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}r++}return null}getLength(){let e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let e=[],t=0;for(let n=0,s=this.curves.length;n<s;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){let t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){let t=[],n;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];n&&n.equals(h)||(t.push(h),n=h)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(s.clone())}return this.autoClose=e.autoClose,this}toJSON(){let e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){let s=this.curves[t];e.curves.push(s.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){let s=e.curves[t];this.curves.push(new jh[s.type]().fromJSON(s))}return this}},Hl=class extends Bl{constructor(e){super(),this.type="Path",this.currentPoint=new le,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){let n=new Gr(this.currentPoint.clone(),new le(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,s){let r=new Wr(this.currentPoint.clone(),new le(e,t),new le(n,s));return this.curves.push(r),this.currentPoint.set(n,s),this}bezierCurveTo(e,t,n,s,r,a){let o=new Vr(this.currentPoint.clone(),new le(e,t),new le(n,s),new le(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(e){let t=[this.currentPoint.clone()].concat(e),n=new Xr(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,s,r,a),this}absarc(e,t,n,s,r,a){return this.absellipse(e,t,n,n,s,r,a),this}ellipse(e,t,n,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(e+c,t+h,n,s,r,a,o,l),this}absellipse(e,t,n,s,r,a,o,l){let c=new Ps(e,t,n,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){let e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}},Vl=class i extends Rt{constructor(e=[new le(0,-.5),new le(.5,0),new le(0,.5)],t=12,n=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:s},t=Math.floor(t),s=Lt(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/t,d=new C,f=new le,u=new C,g=new C,v=new C,m=0,p=0;for(let b=0;b<=e.length-1;b++)switch(b){case 0:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,u.x=p*1,u.y=-m,u.z=p*0,v.copy(u),u.normalize(),l.push(u.x,u.y,u.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:m=e[b+1].x-e[b].x,p=e[b+1].y-e[b].y,u.x=p*1,u.y=-m,u.z=p*0,g.copy(u),u.x+=v.x,u.y+=v.y,u.z+=v.z,u.normalize(),l.push(u.x,u.y,u.z),v.copy(g)}for(let b=0;b<=t;b++){let y=n+b*h*s,w=Math.sin(y),L=Math.cos(y);for(let T=0;T<=e.length-1;T++){d.x=e[T].x*w,d.y=e[T].y,d.z=e[T].x*L,a.push(d.x,d.y,d.z),f.x=b/t,f.y=T/(e.length-1),o.push(f.x,f.y);let A=l[3*T+0]*w,I=l[3*T+1],B=l[3*T+0]*L;c.push(A,I,B)}}for(let b=0;b<t;b++)for(let y=0;y<e.length-1;y++){let w=y+b*e.length,L=w,T=w+e.length,A=w+e.length+1,I=w+1;r.push(L,T,I),r.push(A,I,T)}this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("uv",new tt(o,2)),this.setAttribute("normal",new tt(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.points,e.segments,e.phiStart,e.phiLength)}},rs=class i extends Vl{constructor(e=1,t=1,n=4,s=8){let r=new Hl;r.absarc(0,-t/2,e,Math.PI*1.5,0),r.absarc(0,t/2,e,0,Math.PI*.5),super(r.getPoints(n),s),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:s}}static fromJSON(e){return new i(e.radius,e.length,e.capSegments,e.radialSegments)}},ii=class i extends Rt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);let r=[],a=[],o=[],l=[],c=new C,h=new le;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,f=3;d<=t;d++,f+=3){let u=n+d/t*s;c.x=e*Math.cos(u),c.y=e*Math.sin(u),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[f]/e+1)/2,h.y=(a[f+1]/e+1)/2,l.push(h.x,h.y)}for(let d=1;d<=t;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new tt(a,3)),this.setAttribute("normal",new tt(o,3)),this.setAttribute("uv",new tt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.segments,e.thetaStart,e.thetaLength)}},Mn=class i extends Rt{constructor(e=1,t=1,n=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],f=[],u=[],g=0,v=[],m=n/2,p=0;b(),a===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new tt(d,3)),this.setAttribute("normal",new tt(f,3)),this.setAttribute("uv",new tt(u,2));function b(){let w=new C,L=new C,T=0,A=(t-e)/n;for(let I=0;I<=r;I++){let B=[],x=I/r,M=x*(t-e)+e;for(let k=0;k<=s;k++){let V=k/s,X=V*l+o,te=Math.sin(X),W=Math.cos(X);L.x=M*te,L.y=-x*n+m,L.z=M*W,d.push(L.x,L.y,L.z),w.set(te,A,W).normalize(),f.push(w.x,w.y,w.z),u.push(V,1-x),B.push(g++)}v.push(B)}for(let I=0;I<s;I++)for(let B=0;B<r;B++){let x=v[B][I],M=v[B+1][I],k=v[B+1][I+1],V=v[B][I+1];e>0&&(h.push(x,M,V),T+=3),t>0&&(h.push(M,k,V),T+=3)}c.addGroup(p,T,0),p+=T}function y(w){let L=g,T=new le,A=new C,I=0,B=w===!0?e:t,x=w===!0?1:-1;for(let k=1;k<=s;k++)d.push(0,m*x,0),f.push(0,x,0),u.push(.5,.5),g++;let M=g;for(let k=0;k<=s;k++){let X=k/s*l+o,te=Math.cos(X),W=Math.sin(X);A.x=B*W,A.y=m*x,A.z=B*te,d.push(A.x,A.y,A.z),f.push(0,x,0),T.x=te*.5+.5,T.y=W*.5*x+.5,u.push(T.x,T.y),g++}for(let k=0;k<s;k++){let V=L+k,X=M+k;w===!0?h.push(X,X+1,V):h.push(X+1,X,V),I+=3}c.addGroup(p,I,w===!0?1:2),p+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},qr=class i extends Mn{constructor(e=1,t=1,n=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,e,t,n,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(e){return new i(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}},Gl=class i extends Rt{constructor(e=[],t=[],n=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:s};let r=[],a=[];o(s),c(n),h(),this.setAttribute("position",new tt(r,3)),this.setAttribute("normal",new tt(r.slice(),3)),this.setAttribute("uv",new tt(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let y=new C,w=new C,L=new C;for(let T=0;T<t.length;T+=3)u(t[T+0],y),u(t[T+1],w),u(t[T+2],L),l(y,w,L,b)}function l(b,y,w,L){let T=L+1,A=[];for(let I=0;I<=T;I++){A[I]=[];let B=b.clone().lerp(w,I/T),x=y.clone().lerp(w,I/T),M=T-I;for(let k=0;k<=M;k++)k===0&&I===T?A[I][k]=B:A[I][k]=B.clone().lerp(x,k/M)}for(let I=0;I<T;I++)for(let B=0;B<2*(T-I)-1;B++){let x=Math.floor(B/2);B%2===0?(f(A[I][x+1]),f(A[I+1][x]),f(A[I][x])):(f(A[I][x+1]),f(A[I+1][x+1]),f(A[I+1][x]))}}function c(b){let y=new C;for(let w=0;w<r.length;w+=3)y.x=r[w+0],y.y=r[w+1],y.z=r[w+2],y.normalize().multiplyScalar(b),r[w+0]=y.x,r[w+1]=y.y,r[w+2]=y.z}function h(){let b=new C;for(let y=0;y<r.length;y+=3){b.x=r[y+0],b.y=r[y+1],b.z=r[y+2];let w=m(b)/2/Math.PI+.5,L=p(b)/Math.PI+.5;a.push(w,1-L)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let y=a[b+0],w=a[b+2],L=a[b+4],T=Math.max(y,w,L),A=Math.min(y,w,L);T>.9&&A<.1&&(y<.2&&(a[b+0]+=1),w<.2&&(a[b+2]+=1),L<.2&&(a[b+4]+=1))}}function f(b){r.push(b.x,b.y,b.z)}function u(b,y){let w=b*3;y.x=e[w+0],y.y=e[w+1],y.z=e[w+2]}function g(){let b=new C,y=new C,w=new C,L=new C,T=new le,A=new le,I=new le;for(let B=0,x=0;B<r.length;B+=9,x+=6){b.set(r[B+0],r[B+1],r[B+2]),y.set(r[B+3],r[B+4],r[B+5]),w.set(r[B+6],r[B+7],r[B+8]),T.set(a[x+0],a[x+1]),A.set(a[x+2],a[x+3]),I.set(a[x+4],a[x+5]),L.copy(b).add(y).add(w).divideScalar(3);let M=m(L);v(T,x+0,b,M),v(A,x+2,y,M),v(I,x+4,w,M)}}function v(b,y,w,L){L<0&&b.x===1&&(a[y]=b.x-1),w.x===0&&w.z===0&&(a[y]=L/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.vertices,e.indices,e.radius,e.details)}};var Yr=class i extends Gl{constructor(e=1,t=0){let n=(1+Math.sqrt(5))/2,s=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],r=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(s,r,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new i(e.radius,e.detail)}};var Bn=class i extends Rt{constructor(e=.5,t=1,n=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:a},n=Math.max(3,n),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=e,f=(t-e)/s,u=new C,g=new le;for(let v=0;v<=s;v++){for(let m=0;m<=n;m++){let p=r+m/n*a;u.x=d*Math.cos(p),u.y=d*Math.sin(p),l.push(u.x,u.y,u.z),c.push(0,0,1),g.x=(u.x/t+1)/2,g.y=(u.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let v=0;v<s;v++){let m=v*(n+1);for(let p=0;p<n;p++){let b=p+m,y=b,w=b+n+1,L=b+n+2,T=b+1;o.push(y,w,T),o.push(w,L,T)}}this.setIndex(o),this.setAttribute("position",new tt(l,3)),this.setAttribute("normal",new tt(c,3)),this.setAttribute("uv",new tt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}};var mn=class i extends Rt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new C,f=new C,u=[],g=[],v=[],m=[];for(let p=0;p<=n;p++){let b=[],y=p/n,w=0;p===0&&a===0?w=.5/t:p===n&&l===Math.PI&&(w=-.5/t);for(let L=0;L<=t;L++){let T=L/t;d.x=-e*Math.cos(s+T*r)*Math.sin(a+y*o),d.y=e*Math.cos(a+y*o),d.z=e*Math.sin(s+T*r)*Math.sin(a+y*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),v.push(f.x,f.y,f.z),m.push(T+w,1-y),b.push(c++)}h.push(b)}for(let p=0;p<n;p++)for(let b=0;b<t;b++){let y=h[p][b+1],w=h[p][b],L=h[p+1][b],T=h[p+1][b+1];(p!==0||a>0)&&u.push(y,w,T),(p!==n-1||l<Math.PI)&&u.push(w,L,T)}this.setIndex(u),this.setAttribute("position",new tt(g,3)),this.setAttribute("normal",new tt(v,3)),this.setAttribute("uv",new tt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new i(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zr=class extends qt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},ot=class extends ni{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Ce(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ce(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gu,this.normalScale=new le(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new bn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};function pr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}var as=class{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let a;t:{i:if(!(e<s)){for(let o=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(r=s,s=t[++n],e<s)break e}a=t.length;break t}if(!(e>=r)){let o=t[1];e<o&&(n=2,r=o);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}a=n,n=0;break t}break n}for(;n<a;){let o=n+a>>>1;e<t[o]?a=o:n=o+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let a=0;a!==s;++a)t[a]=n[r+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}},Wl=class extends as{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:ih,endingEnd:ih}}intervalChanged_(e,t,n){let s=this.parameterPositions,r=e-2,a=e+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case sh:r=e,o=2*t-n;break;case rh:r=s.length-2,o=t+s[r]-s[r+1];break;default:r=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case sh:a=e,l=2*n-t;break;case rh:a=1,l=n+s[1]-s[0];break;default:a=e-1,l=t}let c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,f=this._weightPrev,u=this._weightNext,g=(n-t)/(s-t),v=g*g,m=v*g,p=-f*m+2*f*v-f*g,b=(1+f)*m+(-1.5-2*f)*v+(-.5+f)*g+1,y=(-1-u)*m+(1.5+u)*v+.5*g,w=u*m-u*v;for(let L=0;L!==o;++L)r[L]=p*a[h+L]+b*a[c+L]+y*a[l+L]+w*a[d+L];return r}},Xl=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(n-t)/(s-t),d=1-h;for(let f=0;f!==o;++f)r[f]=a[c+f]*d+a[l+f]*h;return r}},ql=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}},gn=class{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=pr(t,this.TimeBufferType),this.values=pr(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:pr(e.times,Array),values:pr(e.values,Array)};let s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new ql(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Xl(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Wl(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case br:t=this.InterpolantFactoryMethodDiscrete;break;case gl:t=this.InterpolantFactoryMethodLinear;break;case $a:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){let n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return br;case this.InterpolantFactoryMethodLinear:return gl;case this.InterpolantFactoryMethodSmooth:return $a}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){let n=this.times,s=n.length,r=0,a=s-1;for(;r!==s&&n[r]<e;)++r;for(;a!==-1&&n[a]>t;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=n.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);let n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==r;o++){let l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(s!==void 0&&dx(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===$a,r=e.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(s)l=!0;else{let d=o*n,f=d-n,u=d+n;for(let g=0;g!==n;++g){let v=t[d+g];if(v!==t[f+g]||v!==t[u+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*n,f=a*n;for(let u=0;u!==n;++u)t[f+u]=t[d+u]}++a}}if(r>0){e[a]=e[r];for(let o=r*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}};gn.prototype.TimeBufferType=Float32Array;gn.prototype.ValueBufferType=Float32Array;gn.prototype.DefaultInterpolation=gl;var Ti=class extends gn{constructor(e,t,n){super(e,t,n)}};Ti.prototype.ValueTypeName="bool";Ti.prototype.ValueBufferType=Array;Ti.prototype.DefaultInterpolation=br;Ti.prototype.InterpolantFactoryMethodLinear=void 0;Ti.prototype.InterpolantFactoryMethodSmooth=void 0;var Yl=class extends gn{};Yl.prototype.ValueTypeName="color";var Zl=class extends gn{};Zl.prototype.ValueTypeName="number";var $l=class extends as{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(s-t),c=e*o;for(let h=c+o;c!==h;c+=4)ei.slerpFlat(r,0,a,c-o,a,c,l);return r}},$r=class extends gn{InterpolantFactoryMethodLinear(e){return new $l(this.times,this.values,this.getValueSize(),e)}};$r.prototype.ValueTypeName="quaternion";$r.prototype.InterpolantFactoryMethodSmooth=void 0;var Ai=class extends gn{constructor(e,t,n){super(e,t,n)}};Ai.prototype.ValueTypeName="string";Ai.prototype.ValueBufferType=Array;Ai.prototype.DefaultInterpolation=br;Ai.prototype.InterpolantFactoryMethodLinear=void 0;Ai.prototype.InterpolantFactoryMethodSmooth=void 0;var Jl=class extends gn{};Jl.prototype.ValueTypeName="vector";var Kl=class{constructor(e,t,n){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){let u=c[d],g=c[d+1];if(u.global&&(u.lastIndex=0),u.test(h))return g}return null}}},fx=new Kl,jl=class{constructor(e){this.manager=e!==void 0?e:fx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){let n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}};jl.DEFAULT_MATERIAL_NAME="__DEFAULT";var os=class extends wt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ce(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}},Jr=class extends os{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ce(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}},Ro=new ht,Qh=new C,eu=new C,Kr=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new le(512,512),this.map=null,this.mapPass=null,this.matrix=new ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cs,this._frameExtents=new le(1,1),this._viewportCount=1,this._viewports=[new at(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera,n=this.matrix;Qh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Qh),eu.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(eu),t.updateMatrixWorld(),Ro.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ro),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ro)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}};var tu=new ht,Ms=new C,Po=new C,Ql=class extends Kr{constructor(){super(new Ot(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new le(4,2),this._viewportCount=6,this._viewports=[new at(2,1,1,1),new at(0,1,1,1),new at(3,1,1,1),new at(1,1,1,1),new at(3,0,1,1),new at(1,0,1,1)],this._cubeDirections=[new C(1,0,0),new C(-1,0,0),new C(0,0,1),new C(0,0,-1),new C(0,1,0),new C(0,-1,0)],this._cubeUps=[new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,1,0),new C(0,0,1),new C(0,0,-1)]}updateMatrices(e,t=0){let n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Ms.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ms),Po.copy(n.position),Po.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Po),n.updateMatrixWorld(),s.makeTranslation(-Ms.x,-Ms.y,-Ms.z),tu.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(tu)}},ls=class extends os{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ql}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}},ec=class extends Kr{constructor(){super(new ss(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},jr=class extends os{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wt.DEFAULT_UP),this.updateMatrix(),this.target=new wt,this.shadow=new ec}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}},Qr=class extends os{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}};var ea=class{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=nu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){let t=nu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}};function nu(){return performance.now()}var _c="\\[\\]\\.:\\/",px=new RegExp("["+_c+"]","g"),yc="[^"+_c+"]",mx="[^"+_c.replace("\\.","")+"]",gx=/((?:WC+[\/:])*)/.source.replace("WC",yc),xx=/(WCOD+)?/.source.replace("WCOD",mx),vx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",yc),_x=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",yc),yx=new RegExp("^"+gx+xx+vx+_x+"$"),bx=["material","materials","bones","map"],tc=class{constructor(e,t,n){let s=n||gt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();let n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){let n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}},gt=class i{constructor(e,t,n){this.path=t,this.parsedPath=n||i.parseTrackName(t),this.node=i.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new i.Composite(e,t,n):new i(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(px,"")}static parseTrackName(e){let t=yx.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);let n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=n.nodeName.substring(s+1);bx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){let n=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===t||o.uuid===t)return o;let l=n(o.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,n=t.objectName,s=t.propertyName,r=t.propertyIndex;if(e||(e=i.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[s];if(a===void 0){let c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};gt.Composite=tc;gt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};gt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};gt.prototype.GetterByBindingType=[gt.prototype._getValue_direct,gt.prototype._getValue_array,gt.prototype._getValue_arrayElement,gt.prototype._getValue_toArray];gt.prototype.SetterByBindingTypeAndVersioning=[[gt.prototype._setValue_direct,gt.prototype._setValue_direct_setNeedsUpdate,gt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_array,gt.prototype._setValue_array_setNeedsUpdate,gt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_arrayElement,gt.prototype._setValue_arrayElement_setNeedsUpdate,gt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[gt.prototype._setValue_fromArray,gt.prototype._setValue_fromArray_setNeedsUpdate,gt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var bv=new Float32Array(1);typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:nc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=nc);var U={world:{groundSize:190,bounds:86},time:{startHour:7,dayLengthSeconds:300},player:{radius:.45,height:1.8,walkSpeed:5,runMultiplier:1.8,spawn:{x:-14,z:-12}},camera:{distance:8.5,minDistance:3,maxDistance:22,lookHeight:1.5,sensitivity:.0026,minPitch:-.2,maxPitch:1.15,followLambda:14,zoomStep:1.3,fov:60},npc:{radius:.42,baseSpeed:1.5,speedVariance:.3,turnSpeed:4,visionRange:20,visionRangeAfterGlitch:27,visionFov:140*Math.PI/180,peripheralRange:7.5,followDistance:5.5,followSpeed:2.3,enterTime:1,idleMin:2.5,idleMax:7,labelMaxDistance:60},suspicion:{max:100,seenInForbidden:18,witnessedGlitch:30,postGlitchReaction:8,decayPerSecond:1.4,decayDelay:6},heat:{wary:30,hunt:60,chase:100,stareRadius:13,stareMinSeconds:4,stareMeltSeconds:10,stareSpeedFactor:0,chaseSpeed:4.4,chaseRepathSeconds:.8,catchRadius:1.5,murmurMinSeconds:7,murmurMaxSeconds:13,safeZoneDecayMultiplier:6,safeZoneInset:.6,catchSuspicion:30,catchHourPenalty:1,catchGlitchDuration:2.2,catchMessage:"Erro: rotina reescrita. Voce foi devolvido para casa.",tensionWary:0,tensionHunt:.3,tensionChase:.62},events:{glitchDuration:1.8,forbiddenToastCooldown:20},objectives:{walkDistance:5,runSeconds:2,plazaRadius:8,reachRadius:3.5,checkSeconds:1.1},start:{controlsCardSeconds:5,houseExitRadius:3.2},anomalies:{count:5,interactRadius:3.4,suspicionPerFind:14,glitchDuration:1.1,hideAfterFound:!0,diaryMaxHeight:.72},power:{duration:6,cooldown:20,invisDuration:5,phaseDuration:3,phaseReach:2.2,witnessRange:8,suspicionCost:10,invisSuspicionCost:6,phaseSuspicionCost:8,unlockHint:"Voce aprendeu a quebrar o tempo. Aperte Q",zone:{x:0,z:0,radius:9},crossSeconds:2.5,invert:.55,grayscale:.8,contrast:1.15,glitchLevel:.26,invisGlitchLevel:.12},ally:{name:"Celia",minAnomalies:2,distractSeconds:4,distractRadius:12,cooldown:30,helpRange:40,warnRange:24,warnCooldown:12},secrets:{talkRange:3,hintEvery:3},ending:{lineSeconds:4.2},hints:{firstDelay:3,fadeIn:.45,hold:5.5,fadeOut:.6,gap:1.2,houseRange:7,fountainRange:6.5,npcRange:16,fenceRange:9,suspicionRise:6},guide:{hideDistance:4.5,arrow:{distance:2.2,bobAmplitude:.18,bobSpeed:2.4,turnLambda:8,headHeight:1.4},marker:{ringInner:1.15,ringOuter:1.8,ringPulse:.09,pillarBottomRadius:.9,pillarTopRadius:.5,pillarHeight:7.5,pillarOpacity:.16,lightIntensity:6,lightDistance:18,pulseSpeed:1.8},edge:{margin:64}},save:{key:"o-npc.save.v1",objectiveKey:"o-npc.objectives.v1",hintsKey:"o-npc.hints.v1",anomaliesKey:"o-npc.anomalies.v1",achievementsKey:"o-npc.achievements.v1",muteKey:"o-npc.mute.v1",version:3,intervalMs:4e3}},Ee={grass:6064716,forbiddenGround:4865855,path:13024420,plaza:14209472,plazaRing:11577491,fountainBase:10134188,water:5219281,housePlayer:14923897,houseB:10339499,houseC:13214660,roof:9194042,roofAlt:5985632,workplace:8097448,forbiddenBuilding:3420988,forbiddenDoor:8004384,door:5913124,window:16771496,fence:7434362,lamp:4868690,lampGlow:16773296,bench:10513724,crate:12159823,treeTrunk:7031343,treeLeaves:4160058,playerBody:15987178,playerAccent:16747069,npcSkin:15251855,anomaly:14241791,guideArrow:16763196,guideBeam:9431551},bc=[14705754,5941472,7324783,14730319,11565792,14715584,5230784];var sa=class{constructor({startHour:e=U.time.startHour,dayLengthSeconds:t=U.time.dayLengthSeconds}={}){this.startHour=e,this.dayLengthSeconds=t,this.hour=e,this.days=0}update(e){for(this.hour+=e*(24/this.dayLengthSeconds);this.hour>=24;)this.hour-=24,this.days+=1}setHour(e){this.hour=(e%24+24)%24}reset(){this.hour=this.startHour,this.days=0}get timeString(){let e=Math.floor(this.hour*60),t=String(Math.floor(e/60)%24).padStart(2,"0"),n=String(e%60).padStart(2,"0");return`${t}:${n}`}get phase(){let e=this.hour;return e<5?"madrugada":e<12?"manha":e<18?"tarde":"noite"}get isNight(){return this.hour<6||this.hour>=19}};var _t=(i,e,t)=>i<e?e:i>t?t:i,Mx=(i,e,t)=>i+(e-i)*t,ra=(i,e,t,n)=>Mx(i,e,1-Math.exp(-t*n)),Sn=(i,e)=>i+Math.random()*(e-i),wn=i=>i[Math.floor(Math.random()*i.length)],He=(i,e,t,n)=>Math.hypot(i-t,e-n);function Sx(i,e){let t=(e-i)%(Math.PI*2);return t>Math.PI&&(t-=Math.PI*2),t<-Math.PI&&(t+=Math.PI*2),t}function hs(i,e,t){let n=Sx(i,e);return Math.abs(n)<=t?e:i+Math.sign(n)*t}function Mc(i,e,t,n){return Math.atan2(t-i,n-e)}function En(i,e,t,n,s=0){let r=Math.abs(Math.cos(s)),a=Math.abs(Math.sin(s)),o=(t*r+n*a)/2,l=(t*a+n*r)/2;return{minX:i-o,maxX:i+o,minZ:e-l,maxZ:e+l}}function Au(i,e,t){return e>=i.minX&&e<=i.maxX&&t>=i.minZ&&t<=i.maxZ}function Cu(i,e,t,n,s){let r=t-i,a=n-e,o=0,l=1,c=[[r,i,s.minX,s.maxX],[a,e,s.minZ,s.maxZ]];for(let[h,d,f,u]of c){if(Math.abs(h)<1e-8){if(d<f||d>u)return!1;continue}let g=(f-d)/h,v=(u-d)/h;if(g>v){let m=g;g=v,v=m}if(g>o&&(o=g),v<l&&(l=v),o>l)return!1}return!0}function wx(i,e,t){let n=_t(i.x,t.minX,t.maxX),s=_t(i.z,t.minZ,t.maxZ),r=i.x-n,a=i.z-s,o=r*r+a*a;if(o>e*e)return!1;if(o>1e-8){let u=Math.sqrt(o),g=e-u;return i.x+=r/u*g,i.z+=a/u*g,!0}let l=i.x-t.minX,c=t.maxX-i.x,h=i.z-t.minZ,d=t.maxZ-i.z,f=Math.min(l,c,h,d);return f===l?i.x=t.minX-e:f===c?i.x=t.maxX+e:f===h?i.z=t.minZ-e:i.z=t.maxZ+e,!0}function Ds(i,e,t,n,s,r=null){for(let a=0;a<t.length;a+=1)r&&t[a].houseId===r||wx(i,e,t[a]);for(let a=0;a<n.length;a+=1){let o=n[a],l=i.x-o.x,c=i.z-o.z,h=e+o.r,d=l*l+c*c;if(d<h*h&&d>1e-8){let f=Math.sqrt(d),u=h-f;i.x+=l/f*u,i.z+=c/f*u}}typeof s=="number"&&(i.x=_t(i.x,-s,s),i.z=_t(i.z,-s,s))}var Fe={plaza:{radius:11},fountain:{radius:2.3},houses:[{id:"homeA",name:"Sua casa",x:-24,z:-18,w:12,d:9,h:4.2,color:Ee.housePlayer,roofColor:Ee.roof,doorSide:"east",sign:"CASA 01",signBackground:"#b98428",enterable:!0},{id:"homeB",name:"Casa Verde",x:24,z:-18,w:12,d:9,h:4.2,color:Ee.houseB,roofColor:Ee.roofAlt,doorSide:"west",sign:"CASA 02",signBackground:"#2f6b4a"},{id:"homeC",name:"Casa Lilas",x:-24,z:18,w:12,d:9,h:4.2,color:Ee.houseC,roofColor:Ee.roof,doorSide:"east",sign:"CASA 03",signBackground:"#6f4a86"}],work:{id:"work",name:"Setor de Trabalho",x:28,z:20,w:18,d:13,h:5.6,color:Ee.workplace,roofColor:Ee.roofAlt,doorSide:"west",sign:"TRABALHO",signBackground:"#2e3c52"},forbidden:{area:{minX:-20,maxX:20,minZ:28,maxZ:58},building:{x:0,z:44,w:22,d:16,h:6.5},gate:{z:28,halfWidth:2.2}}},aa=[{id:"quarto",name:"Objeto do quarto",x:-27.5,z:-20.5,window:[0,24],clue:"O quarto estava arrumado antes de voce acordar. Alguem fez isso. Alguem sempre fez."},{id:"praca",name:"Objeto da praca",x:4.6,z:4.6,window:[6,20],clue:"Marcas de circulos no chao da praca. Sempre as mesmas. Ninguem lembra de ter estado ali."},{id:"patio",name:"Objeto do patio",x:23,z:9,window:[19,6],clue:"O relogio do patio marca sempre 17:58. Ninguem ajusta. Ninguem parece notar."},{id:"atras",name:"Objeto atras do predio",x:0,z:55,window:[0,5],clue:"Atras do predio proibido: cinco marcas no chao, do tamanho de uma mao. Cinco objetos que ninguem levou."},{id:"portao",name:"Objeto do portao",x:-55,z:-40,window:[4,11],clue:"Um cartaz desbotado: BUSCAM-SE PESSOAS COMO VOCE. O resto da frase foi raspado."}],Ns={p_n:{x:0,z:-7.5},p_e:{x:7.5,z:0},p_s:{x:0,z:7.5},p_w:{x:-7.5,z:0},road_north:{x:0,z:21},homeA_door:{x:0,z:0},homeB_door:{x:0,z:0},homeC_door:{x:0,z:0},work_door:{x:0,z:0}},Ex=[["p_n","p_e"],["p_e","p_s"],["p_s","p_w"],["p_w","p_n"],["p_n","homeA_door"],["p_w","homeA_door"],["p_n","homeB_door"],["p_e","homeB_door"],["p_w","homeC_door"],["road_north","homeC_door"],["p_e","work_door"],["p_s","work_door"],["road_north","work_door"],["p_e","road_north"],["p_w","road_north"]];function Tn(i){let{x:e,z:t,w:n,d:s,doorSide:r}=i,a=1.4;switch(r){case"east":return{x:e+n/2+a,z:t};case"west":return{x:e-n/2-a,z:t};case"north":return{x:e,z:t-s/2-a};default:return{x:e,z:t+s/2+a}}}var Sc=class{constructor(e,t){this.nodes=e,this.adjacency=new Map;for(let n of Object.keys(e))this.adjacency.set(n,[]);for(let[n,s]of t)!e[n]||!e[s]||(this.adjacency.get(n).push(s),this.adjacency.get(s).push(n))}node(e){return this.nodes[e]||null}positionOf(e){let t=this.nodes[e];return t?{x:t.x,z:t.z}:null}nearest(e,t){let n=null,s=1/0;for(let[r,a]of Object.entries(this.nodes)){let o=(a.x-e)**2+(a.z-t)**2;o<s&&(s=o,n=r)}return n}path(e,t){if(!this.nodes[e]||!this.nodes[t])return[];if(e===t)return[e];let n=[e],s=new Map([[e,null]]);for(;n.length;){let o=n.shift();if(o===t)break;for(let l of this.adjacency.get(o))s.has(l)||(s.set(l,o),n.push(l))}if(!s.has(t))return[];let r=[],a=t;for(;a;)r.unshift(a),a=s.get(a);return r}};function Ru(){return Ns.homeA_door=Tn(Fe.houses[0]),Ns.homeB_door=Tn(Fe.houses[1]),Ns.homeC_door=Tn(Fe.houses[2]),Ns.work_door=Tn(Fe.work),new Sc(Ns,Ex)}var Pu=[{x:4.5,z:4.5},{x:-4.5,z:4.5},{x:4.5,z:-4.5},{x:-4.5,z:-4.5},{x:0,z:5.5},{x:5.5,z:0},{x:0,z:-5.5},{x:-5.5,z:0}];function pt(i,e,t,n,s={}){let r=new Re(new Xt(i,e,t),new ot({color:n,roughness:s.roughness??.85,metalness:s.metalness??.05,emissive:s.emissive??0,emissiveIntensity:s.emissiveIntensity??1,transparent:s.transparent??!1,opacity:s.opacity??1}));return r.castShadow=s.cast??!0,r.receiveShadow=s.receive??!0,r}function Tx(i,{background:e="#111318",color:t="#ffffff",fontSize:n=76,width:s=512,height:r=256,border:a="rgba(255,255,255,0.35)"}={}){let o=document.createElement("canvas");o.width=s,o.height=r;let l=o.getContext("2d");l.fillStyle=e,l.fillRect(0,0,s,r),l.strokeStyle=a,l.lineWidth=10,l.strokeRect(5,5,s-10,r-10),l.fillStyle=t,l.font=`bold ${n}px "Segoe UI", system-ui, sans-serif`,l.textAlign="center",l.textBaseline="middle";let c=String(i).split(" "),h=[],d="";for(let g of c){let v=d?`${d} ${g}`:g;l.measureText(v).width>s-60&&d?(h.push(d),d=g):d=v}d&&h.push(d);let f=r/(h.length+1);h.forEach((g,v)=>l.fillText(g,s/2,f*(v+1)));let u=new Hr(o);return u.anisotropy=4,u}function oa(i,e,t,{background:n,color:s,rotationY:r=0,fontSize:a=76}={}){let o=new Re(new kn(e,t),new Wt({map:Tx(i,{background:n,color:s,fontSize:a}),side:Ct,toneMapped:!1}));return o.rotation.y=r,o}function wc(i,e,t,{background:n,color:s,fontSize:r=76}={}){let a=new vt,o={background:n,color:s,fontSize:r},l=oa(i,e,t,o);l.material.side=pn,l.position.z=.015,a.add(l);let c=oa(i,e,t,o);return c.material.side=pn,c.rotation.y=Math.PI,c.position.z=-.015,a.add(c),a}function Ax(i,e,t,n,s,r=3.4){let a=n-e,o=s-t,l=new Re(new kn(Math.hypot(a,o),r),new ot({color:Ee.path,roughness:1}));return l.rotation.x=-Math.PI/2,l.rotation.z=-Math.atan2(o,a),l.position.set((e+n)/2,.02,(t+s)/2),l.receiveShadow=!0,i.add(l),l}function Cx(i,e,t=1){let n=new vt,s=new Re(new Mn(.28*t,.36*t,3.2*t,8),new ot({color:Ee.treeTrunk,roughness:1}));s.position.y=1.6*t,s.castShadow=!0,n.add(s);let r=new ot({color:Ee.treeLeaves,roughness:1}),a=new Re(new mn(1.9*t,10,8),r);a.position.y=3.8*t,a.castShadow=!0,n.add(a);let o=new Re(new mn(1.4*t,10,8),r);return o.position.set(.9*t,4.6*t,.3*t),o.castShadow=!0,n.add(o),n.position.set(i,0,e),n}function Rx(i,e){let{x:t,z:n,w:s,d:r,h:a,color:o,roofColor:l,doorSide:c,sign:h,signBackground:d}=e,f=new vt,u=.4,g=2.4,v=2.6,m=g/2,p=c==="east",b=c==="west",y=p||b,w=pt(s-u*2,.1,r-u*2,Ee.plaza);w.position.set(t,.05,n),f.add(w);let L=[],T=(B,x,M,k)=>{let V=pt(M,a,k,o);V.position.set(B,a/2,x),f.add(V),L.push({cx:B,cz:x,sw:M,sd:k})};if(y){let B=p?t+s/2-u/2:t-s/2+u/2,x=p?t-s/2+u/2:t+s/2-u/2;T(x,n,u,r),T(t,n-r/2+u/2,s,u),T(t,n+r/2-u/2,s,u);let M=(r-g)/2;T(B,n-(m+M/2),u,M),T(B,n+(m+M/2),u,M);let k=pt(u,a-v,g,o);k.position.set(B,v+(a-v)/2,n),f.add(k)}else{let B=c==="north"?n-r/2+u/2:n+r/2-u/2,x=c==="north"?n+r/2-u/2:n-r/2+u/2;T(t,x,s,u),T(t-s/2+u/2,n,u,r),T(t+s/2-u/2,n,u,r);let M=(s-g)/2;T(t-(m+M/2),B,M,u),T(t+(m+M/2),B,M,u);let k=pt(g,a-v,u,o);k.position.set(t,v+(a-v)/2,B),f.add(k)}let A=pt(y?.16:1.5,v-.2,y?1.5:.16,Ee.door);p?A.position.set(t+s/2-.5,(v-.2)/2,n-m-.85):b?A.position.set(t-s/2+.5,(v-.2)/2,n-m-.85):c==="north"?A.position.set(t-m-.85,(v-.2)/2,n-r/2+.5):A.position.set(t-m-.85,(v-.2)/2,n+r/2-.5),f.add(A);let I=pt(s+.7,.35,r+.7,l,{roughness:.95});if(I.position.set(t,a+.17,n),f.add(I),h){let B={east:Math.PI/2,west:-Math.PI/2,north:Math.PI,south:0}[c],x=oa(h,5.2,1.3,{background:d||"#222222",fontSize:80});y?x.position.set(c==="east"?t+s/2+.12:t-s/2-.12,a-1.2,n):x.position.set(t,a-1.2,c==="north"?n-r/2-.12:n+r/2+.12),x.rotation.y=B,f.add(x)}for(let B of[-r/4,r/4]){let x=pt(.16,1.1,1.1,Ee.window,{emissive:6702080,emissiveIntensity:.6,roughness:.4});x.position.set(t-s/2+.1,2.5,n+B),f.add(x)}return i.add(f),{group:f,walls:L}}function Iu(i,e,{windows:t=!0}={}){let{x:n,z:s,w:r,d:a,h:o,color:l,roofColor:c,doorSide:h,sign:d,signBackground:f}=e,u=new vt,g=pt(r,o,a,l);g.position.set(n,o/2,s),u.add(g);let v=pt(r+.9,.5,a+.9,c,{roughness:.95});v.position.set(n,o+.25,s),u.add(v);let m=h==="east"||h==="west",p=pt(m?.28:1.7,2.3,m?1.7:.28,Ee.door),b=n,y=s;if(h==="east"?b=n+r/2+.1:h==="west"?b=n-r/2-.1:h==="north"?y=s-a/2-.1:y=s+a/2+.1,p.position.set(b,1.15,y),u.add(p),d){let w={east:Math.PI/2,west:-Math.PI/2,north:Math.PI,south:0}[h],L=oa(d,5.2,1.3,{background:f||"#222222",fontSize:80});m?L.position.set(h==="east"?n+r/2+.12:n-r/2-.12,o-1.2,s):L.position.set(n,o-1.2,h==="north"?s-a/2-.12:s+a/2+.12),L.rotation.y=w,u.add(L)}if(t){let w=[-r/4,r/4];if(m)for(let L of w){let T=pt(.2,1.2,1.2,Ee.window,{emissive:6702080,emissiveIntensity:.6,roughness:.4});T.position.set(h==="east"?n+r/2+.1:n-r/2-.1,2.5,s+L),u.add(T)}else for(let L of w){let T=pt(1.2,1.2,.2,Ee.window,{emissive:6702080,emissiveIntensity:.6,roughness:.4});T.position.set(n+L,2.5,h==="north"?s-a/2-.1:s+a/2+.1),u.add(T)}}return i.add(u),u}function Lu(i){let e=new vt;e.name="world",i.add(e);let t=[],n=[],s=[],r=(R,O,j={})=>{t.push({...R,height:O,blocksSight:j.blocksSight??!0,tag:j.tag??"generic",houseId:j.houseId??null})},a=(R,O,j)=>n.push({x:R,z:O,r:j});i.background=new Ce(10473712),i.fog=new zr(10473712,80,200);let o=new Jr(14674687,4214831,.75);e.add(o);let l=new Qr(16777215,.32);e.add(l);let c=new jr(16773846,1.4);c.position.set(48,66,30),c.castShadow=!0,c.shadow.mapSize.set(2048,2048),c.shadow.camera.near=1,c.shadow.camera.far=260,c.shadow.camera.left=-95,c.shadow.camera.right=95,c.shadow.camera.top=95,c.shadow.camera.bottom=-95,c.shadow.bias=-6e-4,e.add(c),e.add(c.target);let h=new Re(new kn(U.world.groundSize,U.world.groundSize),new ot({color:Ee.grass,roughness:1}));h.rotation.x=-Math.PI/2,h.receiveShadow=!0,e.add(h);for(let[R,O]of[[-17,-18],[17,-18],[-17,18],[18,20],[0,Fe.forbidden.gate.z]])Ax(e,0,0,R,O,4);let d=new Re(new ii(Fe.plaza.radius,56),new ot({color:Ee.plaza,roughness:1}));d.rotation.x=-Math.PI/2,d.position.y=.04,d.receiveShadow=!0,e.add(d);let f=new Re(new Bn(Fe.plaza.radius-.7,Fe.plaza.radius,56),new ot({color:Ee.plazaRing,roughness:1}));f.rotation.x=-Math.PI/2,f.position.y=.05,e.add(f);let u=wc("PRACA CENTRAL",7,1.6,{background:"#4a4436",fontSize:70});u.position.set(0,.9,Fe.plaza.radius-.4),u.rotation.x=-.5,e.add(u);let g=new Re(new Mn(Fe.fountain.radius,Fe.fountain.radius+.15,.8,28),new ot({color:Ee.fountainBase,roughness:.7}));g.position.y=.4,g.castShadow=!0,g.receiveShadow=!0,e.add(g);let v=new Re(new ii(Fe.fountain.radius-.35,28),new ot({color:Ee.water,roughness:.2,metalness:.35}));v.rotation.x=-Math.PI/2,v.position.y=.79,e.add(v);let m=new Re(new Mn(.3,.45,2.1,14),new ot({color:Ee.fountainBase,roughness:.7}));m.position.y=1.6,m.castShadow=!0,e.add(m),a(0,0,Fe.fountain.radius+.25),[[0,-8.2,0],[0,8.2,Math.PI],[-8.2,0,Math.PI/2],[8.2,0,-Math.PI/2]].forEach(([R,O,j],q)=>{let Q=new vt,ce=pt(3.2,.22,.9,Ee.bench);ce.position.y=.55,Q.add(ce);let Ae=pt(3.2,.8,.16,Ee.bench);Ae.position.set(0,1,-.37),Q.add(Ae);for(let fe of[-1.35,1.35]){let Be=pt(.18,.55,.7,7031338);Be.position.set(fe,.28,0),Q.add(Be)}Q.position.set(R,0,O),Q.rotation.y=j,e.add(Q),r(En(R,O,3.4,1.1,j),1.5,{blocksSight:!1,tag:"bench"}),s.push({id:`bench_${q}`,label:"Banco da praca",kind:"bench",x:R,z:O,radius:3,message:"Voce se senta. Nada acontece. Nada nunca acontece... exceto com voce."})});let b=[],y=[];for(let[R,O]of[[10.5,10.5],[-10.5,10.5],[10.5,-10.5],[-10.5,-10.5]]){let j=new Re(new Mn(.11,.14,4.4,10),new ot({color:Ee.lamp,roughness:.6}));j.position.set(R,2.2,O),j.castShadow=!0,e.add(j);let q=new ot({color:Ee.lampGlow,emissive:Ee.lampGlow,emissiveIntensity:.2}),Q=new Re(new mn(.34,12,10),q);Q.position.set(R,4.5,O),e.add(Q),b.push(q);let ce=new Re(new ii(6,28),new Wt({color:16769952,transparent:!0,opacity:0,depthWrite:!1,blending:jn}));ce.rotation.x=-Math.PI/2,ce.position.set(R,.07,O),e.add(ce),y.push(ce),a(R,O,.32)}let w=[[-46,-30,1.1],[46,-34,1],[-44,44,1.2],[44,52,1],[0,-42,1.15],[-52,4,1],[52,2,1.05],[-34,-42,.9],[36,-46,1.1],[0,66,1.2],[-60,-4,1],[58,-6,.95]];for(let[R,O,j]of w)e.add(Cx(R,O,j)),a(R,O,.55*j);for(let R of[...Fe.houses,Fe.work]){if(R.enterable){let O=Rx(e,R);for(let j of O.walls)r(En(j.cx,j.cz,j.sw,j.sd),R.h,{tag:"wall",houseId:R.id});continue}Iu(e,R),r(En(R.x,R.z,R.w,R.d),R.h,{tag:"building",houseId:R.id})}let L={homeA:"Porta da sua casa. Tudo exatamente como voce deixou.",homeB:"Trancada. O morador deve estar cumprindo a rotina.",homeC:"Trancada. Voce ouve passos la dentro, sempre no mesmo ritmo."};for(let R of Fe.houses){let O=Tn(R);s.push({id:`door_${R.id}`,label:R.name,kind:"door",x:O.x,z:O.z,radius:3,message:L[R.id]})}let T=Tn(Fe.work);s.push({id:"door_work",label:Fe.work.name,kind:"door",x:T.x,z:T.z,radius:3,message:"A catraca registra: FUNCIONARIO 04. Bom trabalho. Sempre o mesmo trabalho."}),[[24,11.2],[25.9,11.7],[24.7,12.4]].forEach(([R,O],j)=>{let q=pt(1.3,1.3,1.3,Ee.crate,{roughness:.95});q.position.set(R,.66,O),q.rotation.y=j*.4,e.add(q),r(En(R,O,1.5,1.5),1.4,{tag:"crate"}),s.push({id:`crate_${j}`,label:"Caixa",kind:"crate",x:R,z:O,radius:2.6,message:"Voce empurra a caixa. Ela se move. Os outros tentaram isso ontem e nao conseguiram."})});let I=Fe.forbidden,B=I.area,x=B.maxX-B.minX,M=B.maxZ-B.minZ,k=new Re(new kn(x,M),new ot({color:Ee.forbiddenGround,roughness:1}));k.rotation.x=-Math.PI/2,k.position.set((B.minX+B.maxX)/2,.03,(B.minZ+B.maxZ)/2),k.receiveShadow=!0,e.add(k);let V=1.6,X=(R,O,j,q)=>{let Q=pt(j,V*.55,q,Ee.fence,{roughness:.5,metalness:.35,transparent:!0,opacity:.85});Q.position.set(R,.55,O),e.add(Q);let ce=pt(j,.12,q,9276566,{roughness:.5,metalness:.3});ce.position.set(R,V,O),e.add(ce),r(En(R,O,j,q),V,{blocksSight:!1,tag:"fence"})},te=I.gate.halfWidth,W=-te-B.minX,se=B.maxX-te;X((B.minX-te)/2,I.gate.z,W,.35),X((te+B.maxX)/2,I.gate.z,se,.35),X(0,B.maxZ,x,.35),X(B.minX,(I.gate.z+B.maxZ)/2,.35,M),X(B.maxX,(I.gate.z+B.maxZ)/2,.35,M);for(let R of[-1,1]){let O=pt(.5,2.4,.5,3816002,{roughness:.6,metalness:.3});O.position.set(R*te,1.2,I.gate.z),e.add(O);let j=pt(.12,1.9,1.9,5921380,{roughness:.6,metalness:.4});j.position.set(R*(te+.35),1,I.gate.z+.95),j.rotation.y=R*1.15,e.add(j),r(En(j.position.x,j.position.z,1.9,1.9,j.rotation.y),1.9,{blocksSight:!1,tag:"gate"})}let Z=pt(.22,3.6,.22,3816002);Z.position.set(3.6,1.8,I.gate.z+.6),e.add(Z);let pe=pt(.22,3.6,.22,3816002);pe.position.set(7.4,1.8,I.gate.z+.6),e.add(pe);let me=wc("ACESSO NEGADO",4.4,1.5,{background:"#b3231f",color:"#ffffff",fontSize:66});me.position.set(5.5,3.1,I.gate.z+.5),e.add(me),r(En(5.5,I.gate.z+.6,4.2,.4),3.6,{blocksSight:!1,tag:"signpost"}),s.push({id:"sign_forbidden",label:"Placa: ACESSO NEGADO",kind:"sign",x:5.5,z:I.gate.z+.6,radius:4,message:"ACESSO NEGADO. Nenhum NPC olha para esta placa. Eles simplesmente contornam."}),s.push({id:"gate",label:"Portao da area proibida",kind:"gate",x:0,z:I.gate.z+1.6,radius:3.2,message:"O portao esta aberto. Nenhum NPC jamais passou por aqui. Voce pode."});let ae=I.building;Iu(e,{x:ae.x,z:ae.z,w:ae.w,d:ae.d,h:ae.h,color:Ee.forbiddenBuilding,roofColor:2302763,doorSide:"north",sign:null},{windows:!1}),r(En(ae.x,ae.z,ae.w,ae.d),ae.h,{tag:"building"});for(let R of[-6.5,6.5]){let O=pt(2.4,2,.25,4868690,{roughness:.9});O.position.set(ae.x+R,3.4,ae.z-ae.d/2-.12),e.add(O)}let Ve=wc("ACESSO NEGADO",9,2,{background:"#b3231f",color:"#ffffff",fontSize:78});Ve.rotation.y=Math.PI,Ve.position.set(ae.x,5.4,ae.z-ae.d/2-.15),e.add(Ve);let Ye=pt(2.6,.35,.3,11739935,{roughness:.6});Ye.position.set(ae.x,1.35,ae.z-ae.d/2-.2),Ye.rotation.z=.55,e.add(Ye),s.push({id:"door_forbidden",label:"Porta lacrada",kind:"door",x:ae.x,z:ae.z-ae.d/2-1.2,radius:3.2,message:"A porta esta lacrada por dentro. Algo aqui nao quer ser visto."});let $=aa.map(R=>{let O=new vt;O.name=`anomaly-${R.id}`;let j=new ot({color:Ee.anomaly,emissive:Ee.anomaly,emissiveIntensity:1.8,roughness:.3,metalness:.4}),q=new Re(new Yr(.72,0),j);q.position.y=1.35,q.castShadow=!0,O.add(q);let Q=new Re(new Bn(.95,1.4,28),new Wt({color:Ee.anomaly,transparent:!0,opacity:.45,side:Ct}));Q.rotation.x=-Math.PI/2,Q.position.y=.14,O.add(Q);let ce=pt(1.5,.35,1.5,2763315,{roughness:.7});ce.position.y=.17,O.add(ce);let Ae=new ls(Ee.anomaly,8,16,2);Ae.position.y=1.5,O.add(Ae),O.position.set(R.x,0,R.z),e.add(O),r(En(R.x,R.z,1.6,1.6),1.6,{blocksSight:!1,tag:"anomaly"});let fe={id:`anomaly_${R.id}`,anomalyId:R.id,label:R.name,kind:"anomaly",x:R.x,z:R.z,radius:U.anomalies.interactRadius,enabled:!0,message:"Voce nao deveria conseguir pegar isso. voce pega."};return s.push(fe),{...R,group:O,mesh:q,halo:Q,light:Ae,material:j,item:fe,found:!1,available:!0}}),ie=R=>$.find(O=>O.id===R)||null,_e=[];e.traverse(R=>{let O=R.isMesh?R.material:null;O&&O.emissive&&O.emissive.getHex()===6702080&&!_e.includes(O)&&_e.push(O)});let he=[{h:0,sky:461590,sun:6978485,sunI:.12,hemi:.24,amb:.17,fogNear:40,fogFar:150},{h:5,sky:1054507,sun:6978485,sunI:.14,hemi:.26,amb:.18,fogNear:40,fogFar:150},{h:6.2,sky:15769712,sun:16754794,sunI:.75,hemi:.45,amb:.25,fogNear:30,fogFar:125},{h:8,sky:11851502,sun:16773328,sunI:1.4,hemi:.72,amb:.31,fogNear:70,fogFar:190},{h:12,sky:10473712,sun:16773846,sunI:1.6,hemi:.82,amb:.34,fogNear:80,fogFar:205},{h:16,sky:10867439,sun:16773328,sunI:1.45,hemi:.74,amb:.31,fogNear:75,fogFar:195},{h:18.2,sky:15900774,sun:16749136,sunI:.95,hemi:.5,amb:.26,fogNear:35,fogFar:135},{h:19.6,sky:6044268,sun:12610144,sunI:.38,hemi:.33,amb:.2,fogNear:30,fogFar:115},{h:21,sky:922662,sun:6978485,sunI:.13,hemi:.25,amb:.17,fogNear:40,fogFar:145},{h:24,sky:461590,sun:6978485,sunI:.12,hemi:.24,amb:.17,fogNear:40,fogFar:150}].map(R=>({...R,sky:new Ce(R.sky),sun:new Ce(R.sun)})),ve={sky:new Ce,sun:new Ce,sunI:1,hemi:.7,amb:.3,fogNear:80,fogFar:200,night:0},Pe=new Ce(14674687),Ge=new Ce(16777215),je=new Ce(1902345),We=new Ce(16726826),P=new Ce(16738901),nt=0,ke=0,Xe=-1;function Ie(R){let O=(R%24+24)%24,j=0;for(;j<he.length-2&&O>=he[j+1].h;)j+=1;let q=he[j],Q=he[j+1],ce=_t((O-q.h)/(Q.h-q.h),0,1);ve.sky.copy(q.sky).lerp(Q.sky,ce),ve.sun.copy(q.sun).lerp(Q.sun,ce),ve.sunI=q.sunI+(Q.sunI-q.sunI)*ce,ve.hemi=q.hemi+(Q.hemi-q.hemi)*ce,ve.amb=q.amb+(Q.amb-q.amb)*ce,ve.fogNear=q.fogNear+(Q.fogNear-q.fogNear)*ce,ve.fogFar=q.fogFar+(Q.fogFar-q.fogFar)*ce,O>=19.5||O<5?ve.night=1:O>=17.5?ve.night=(O-17.5)/2:O<7?ve.night=1-(O-5)/2:ve.night=0}function rt(){i.background.copy(ve.sky).lerp(je,nt*.78),i.fog.color.copy(i.background),i.fog.near=ve.fogNear+(14-ve.fogNear)*nt,i.fog.far=ve.fogFar+(88-ve.fogFar)*nt,c.color.copy(ve.sun).lerp(We,nt*.6),c.intensity=ve.sunI*(1-.45*nt),o.color.copy(Pe).lerp(P,nt*.55),o.intensity=ve.hemi*(1-.2*nt),l.color.copy(Ge).lerp(P,nt*.45),l.intensity=ve.amb,Xe=nt}let De=()=>{let R=.15+ve.night*2.4;for(let j=0;j<b.length;j+=1)b[j].emissiveIntensity=R;for(let j=0;j<y.length;j+=1)y[j].material.opacity=ve.night*.3;let O=.15+ve.night*1.3;for(let j=0;j<_e.length;j+=1)_e[j].emissiveIntensity=O},E=Ru(),_={homes:Fe.houses.map(R=>({id:R.id,name:R.name,nodeId:`${R.id}_door`,door:Tn(R),inside:{x:R.x,z:R.z}})),work:{id:"work",name:Fe.work.name,nodeId:"work_door",door:Tn(Fe.work),inside:{x:Fe.work.x,z:Fe.work.z}},plaza:{nodes:["p_n","p_e","p_s","p_w"],wander:Pu}},z=0,J=Fe.houses.find(R=>R.enterable)||Fe.houses[0],ne={center:{x:J.x,z:J.z},door:Tn(J)},K=Fe.houses.filter(R=>R.enterable).map(R=>{let O=U.heat.safeZoneInset;return{id:R.id,name:R.name,minX:R.x-R.w/2+O,maxX:R.x+R.w/2-O,minZ:R.z-R.d/2+O,maxZ:R.z+R.d/2-O}}),be={root:e,rects:t,circles:n,interactables:s,nav:E,places:_,forbiddenArea:B,anomalies:$,anomalyById:ie,playerHome:ne,safeZones:K,isSafeZone(R,O){return K.some(j=>j.minX<=R&&R<=j.maxX&&j.minZ<=O&&O<=j.maxZ)},homeById(R){return _.homes.find(O=>O.id===R)||_.homes[0]},lineOfSight(R,O,j,q){for(let Q=0;Q<t.length;Q+=1){let ce=t[Q];if(ce.blocksSight&&Cu(R,O,j,q,ce))return!1}return!0},isSolid(R,O,j){for(let q=0;q<t.length;q+=1){let Q=t[q];if(!(O>Q.height)&&R>=Q.minX&&R<=Q.maxX&&j>=Q.minZ&&j<=Q.maxZ)return!0}for(let q=0;q<n.length;q+=1){let Q=n[q];if(!(O>1.2)&&(R-Q.x)**2+(j-Q.z)**2<=Q.r*Q.r)return!0}return!1},isInsideForbidden(R,O){return Au(B,R,O)},setHour(R){Ie(R),rt(),De();let O=(R-5)/14*Math.PI;c.position.set(Math.cos(O)*70,Math.max(14,Math.sin(O)*85),34)},setMood(R){ke=_t(R,0,1)},get mood(){return nt},update(R){z+=R,Math.abs(ke-nt)>.001&&(nt+=(ke-nt)*Math.min(1,R*2.2),Math.abs(nt-Xe)>.004&&rt());for(let O=0;O<$.length;O+=1){let j=$[O];!j.available||j.found||(j.mesh.rotation.y+=R*1.1,j.mesh.rotation.x+=R*.45,j.mesh.position.y=1.35+Math.sin(z*1.8)*.12,j.halo.scale.setScalar(1+Math.sin(z*2.6)*.07),j.light.intensity=7+Math.sin(z*4)*2.5)}v.position.y=.79+Math.sin(z*1.4)*.01},setAnomalyActive(R,O){let j=ie(R);j&&(j.available=O===!0,j.group.visible=j.available,j.item.enabled=j.available)},collectAnomaly(R){let O=ie(R);return O?(O.found=!0,O.group.visible=!1,O.item.enabled=!1,O):null},resetAnomalies(){for(let R=0;R<$.length;R+=1)$[R].found=!1,$[R].group.visible=!0,$[R].item.enabled=!0},reset(){this.resetAnomalies(),nt=0,ke=0,this.setHour(U.time.startHour),z=0}};return be.setHour(U.time.startHour),be}var la=class{constructor(e){this.canvas=e,this.keys=new Set,this.pressed=new Set,this.mouseDelta={x:0,y:0},this.wheelDelta=0,this.pointerLocked=!1,this.dragging=!1,this.onKeyDown=t=>{this.keys.has(t.code)||this.pressed.add(t.code),this.keys.add(t.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight"].includes(t.code)&&t.preventDefault()},this.onKeyUp=t=>this.keys.delete(t.code),this.onBlur=()=>this.keys.clear(),this.onMouseMove=t=>{(this.pointerLocked||this.dragging)&&(this.mouseDelta.x+=t.movementX||0,this.mouseDelta.y+=t.movementY||0)},this.onMouseDown=t=>{if(t.button===2){document.exitPointerLock&&document.exitPointerLock();return}this.dragging=!0,this.canvas.style.cursor="grabbing"},this.onMouseUp=()=>{this.dragging=!1,this.canvas.style.cursor="default"},this.onWheel=t=>{this.wheelDelta+=t.deltaY,t.preventDefault()},this.onContextMenu=t=>t.preventDefault(),this.onPointerLockChange=()=>{this.pointerLocked=document.pointerLockElement===this.canvas},this.onCanvasClick=()=>{if(!this.pointerLocked)try{let t=this.canvas.requestPointerLock?.();t&&typeof t.catch=="function"&&t.catch(()=>{})}catch{}},window.addEventListener("keydown",this.onKeyDown),window.addEventListener("keyup",this.onKeyUp),window.addEventListener("blur",this.onBlur),window.addEventListener("mousemove",this.onMouseMove),window.addEventListener("mousedown",this.onMouseDown),window.addEventListener("mouseup",this.onMouseUp),window.addEventListener("pointerlockchange",this.onPointerLockChange),e.addEventListener("wheel",this.onWheel,{passive:!1}),e.addEventListener("contextmenu",this.onContextMenu),e.addEventListener("click",this.onCanvasClick)}isDown(e){return this.keys.has(e)}wasPressed(e){return this.pressed.has(e)}consumeMouseDelta(){let e={x:this.mouseDelta.x,y:this.mouseDelta.y};return this.mouseDelta.x=0,this.mouseDelta.y=0,e}consumeWheel(){let e=this.wheelDelta;return this.wheelDelta=0,e}endFrame(){this.pressed.clear()}dispose(){window.removeEventListener("keydown",this.onKeyDown),window.removeEventListener("keyup",this.onKeyUp),window.removeEventListener("blur",this.onBlur),window.removeEventListener("mousemove",this.onMouseMove),window.removeEventListener("mousedown",this.onMouseDown),window.removeEventListener("mouseup",this.onMouseUp),window.removeEventListener("pointerlockchange",this.onPointerLockChange),this.canvas.removeEventListener("wheel",this.onWheel),this.canvas.removeEventListener("contextmenu",this.onContextMenu),this.canvas.removeEventListener("click",this.onCanvasClick)}},ca=class{constructor({scene:e,world:t}){this.world=t,this.object=new vt,this.object.name="player",this.moveSpeed=0,this.bobPhase=0,this.facing=0;let n=new Re(new rs(.36,.95,6,14),new ot({color:Ee.playerBody,roughness:.6}));n.position.y=.9,n.castShadow=!0,this.object.add(n),this.body=n;let s=new Re(new Xt(.62,.5,.24),new ot({color:Ee.playerAccent,roughness:.5}));s.position.set(0,1.05,-.32),s.castShadow=!0,this.object.add(s);let r=new Re(new mn(.28,16,12),new ot({color:Ee.npcSkin,roughness:.7}));r.position.y=1.72,r.castShadow=!0,this.object.add(r);let a=new Re(new Bn(.5,.72,24),new Wt({color:Ee.playerAccent,transparent:!0,opacity:.4,side:Ct}));a.rotation.x=-Math.PI/2,a.position.y=.06,this.object.add(a),this.halo=a,this.ghostMaterials=[n.material,s.material,r.material],this.ghostLevel=0,this.reset(),e.add(this.object)}get isMoving(){return this.moveSpeed>.8}setGhost(e,t=null,n=0){let s=Math.max(0,Math.min(1,e));if(s===0&&this.ghostLevel===0)return;this.ghostLevel=s;let r=s>0?.65+.35*Math.sin(n*38)*Math.sin(n*11):1,a=s>0?Math.max(.12,(1-s*.78)*r):1;for(let o=0;o<this.ghostMaterials.length;o+=1){let l=this.ghostMaterials[o];l.transparent=s>0,l.opacity=a,l.depthWrite=s===0,l.emissive.setHex(s>0&&t!==null?t:0),l.emissiveIntensity=s>0?.55:0,l.needsUpdate=!1}}pushOutOfWalls(){for(let e=0;e<3;e+=1)Ds(this.object.position,U.player.radius,this.world.rects,this.world.circles,U.world.bounds)}get position(){return this.object.position}reset(){this.object.position.set(U.player.spawn.x,0,U.player.spawn.z),this.facing=0,this.object.rotation.y=0,this.moveSpeed=0}teleport(e,t){this.object.position.set(e,0,t)}update(e,t,n,s=null){let r={x:-Math.sin(n),z:-Math.cos(n)},a={x:-r.z,z:r.x},o=0,l=0;(t.isDown("KeyW")||t.isDown("ArrowUp"))&&(o+=r.x,l+=r.z),(t.isDown("KeyS")||t.isDown("ArrowDown"))&&(o-=r.x,l-=r.z),(t.isDown("KeyD")||t.isDown("ArrowRight"))&&(o+=a.x,l+=a.z),(t.isDown("KeyA")||t.isDown("ArrowLeft"))&&(o-=a.x,l-=a.z);let c=t.isDown("ShiftLeft")||t.isDown("ShiftRight"),h=U.player.walkSpeed*(c?U.player.runMultiplier:1),d=Math.hypot(o,l),f=d>.001;f?(o/=d,l/=d,this.object.position.x+=o*h*e,this.object.position.z+=l*h*e,this.facing=hs(this.facing,Math.atan2(o,l),9*e),this.moveSpeed=ra(this.moveSpeed,h,10,e)):this.moveSpeed=ra(this.moveSpeed,0,10,e),Ds(this.object.position,U.player.radius,this.world.rects,this.world.circles,U.world.bounds,s),this.object.rotation.y=this.facing,this.bobPhase+=e*(2.2+this.moveSpeed*1.5)*(f?1:.25);let u=f?.05:.015;this.body.position.y=.9+Math.sin(this.bobPhase*2)*u,this.halo.rotation.z+=e*.6,this.halo.material.opacity=.28+Math.sin(this.bobPhase*2)*.08}},ha=class{constructor(e){this.camera=e,this.yaw=0,this.pitch=.3,this.distance=U.camera.distance,this.currentDistance=U.camera.distance,this.shake=new C,this.lookTarget=new C,this.desired=new C}reset(){this.yaw=0,this.pitch=.3,this.distance=U.camera.distance,this.currentDistance=U.camera.distance,this.shake.set(0,0,0)}applyInput(e){let t=e.consumeMouseDelta();(t.x!==0||t.y!==0)&&(this.yaw-=t.x*U.camera.sensitivity,this.pitch=_t(this.pitch+t.y*U.camera.sensitivity,U.camera.minPitch,U.camera.maxPitch));let n=e.consumeWheel();n!==0&&(this.distance=_t(this.distance+n*.01,U.camera.minDistance,U.camera.maxDistance))}update(e,t,n){let s=Math.cos(this.pitch),r=Math.sin(this.pitch),a=U.camera.lookHeight;this.lookTarget.set(t.x,t.y+a,t.z);let o=this.distance,l=8,c=Math.sin(this.yaw)*this.distance*s,h=this.distance*r+.6,d=Math.cos(this.yaw)*this.distance*s;for(let u=3;u<=l;u+=1){let g=u/l,v=this.lookTarget.x+c*g,m=this.lookTarget.y+h*g,p=this.lookTarget.z+d*g;if(n.isSolid(v,m,p)){o=this.distance*((u-1)/l);break}}this.currentDistance=ra(this.currentDistance,o,U.camera.followLambda,e);let f=Math.max(this.currentDistance,1.2);this.desired.set(this.lookTarget.x+Math.sin(this.yaw)*f*s,Math.max(.7,this.lookTarget.y+f*r+.6),this.lookTarget.z+Math.cos(this.yaw)*f*s),this.camera.position.copy(this.desired).add(this.shake),this.camera.lookAt(this.lookTarget)}};var Px=30,Ix=60;function Lx(i){let e=(i%24+24)%24;return e>=5&&e<12?"manha":e>=12&&e<18?"tarde":e>=18&&e<23?"noite":"madrugada"}function Dx(i){return i>Ix?"hunt":i>Px?"wary":"calm"}var Nx={Bruno:{trait:"preocupado com horarios",talk:{calm:{manha:["Sao seis horas, sempre seis. Voce esta atrasado?","Cafe as sete, trabalho as oito. Ninguem se atrasa."],tarde:["Ja passou do meio-dia. O relogio nao espera ninguem.","Almoco: uma hora exata. Nem um minuto a mais."],noite:["Ja anoiteceu. Casa antes das vinte, como sempre.","A praca encerra a minha agenda. Depois, cama."],madrugada:["Ainda de pe? Isso nao esta na minha tabela.","Madrugada nao existe no meu horario."]},glitch:{manha:["O relogio errou ontem. Eu vi. Sete segundos."],tarde:["Meus horarios estao falhando. Isso nunca aconteceu."],noite:["A agenda mudou sozinha. Eu senti."],madrugada:["Se o tempo parou, onde eu estava esses segundos?"]},wary:["Por que voce esta fora do horario?","Seus passos nao batem com a rotina."],hunt:["Voce atrasa o dia de todo mundo! Pare!","Isso vai embaralhar a agenda inteira."]},notice:["Fora do horario, fora do lugar..."],follow:["Isso nao esta na agenda.","Volte ao horario. Por favor."],glitch:["O relogio deu um salto!","Perdi tres segundos. Onde foram?"],murmur:["Isso vai atrasar tudo.","Alguem anota o horario disso.","Fora da rotina de novo."],chase:["Voce esta atrasado para a rotina!","Pare! E ordem do relogio!"]},Celia:{trait:"curiosa",talk:{calm:{manha:["Bom dia! Voce notou como a luz entra sempre pelo mesmo canto?","Eu fico me perguntando por que a fonte nunca seca."],tarde:["Voce nunca quis ver o que tem atras do predio?","Tudo aqui se repete... mas eu anoto os detalhes."],noite:["Olha as janelas acendendo. Sempre na mesma ordem.","A noite eu penso mais. O que sera que existe alem da cerca?"],madrugada:["Voce tambem nao consegue dormir? Interessante...","Madrugada e quando as coisas ficam estranhas. Gosto disso."]},glitch:{manha:["Voce sentiu? O mundo tremeu. Eu juro que vi."],tarde:["Foi voce, nao foi? Conta como faz!"],noite:["As luzes piscaram. Isso e novo. Muito novo."],madrugada:["Sabia que nao era so eu! Algo esta errado aqui."]},wary:["Hum... o que voce esta aprontando?","Esse seu jeito me deixa curiosa. E nervosa."],hunt:["Eu quero entender, mas todo mundo esta com medo de voce.","Cuidado. Eles estao ficando agressivos."]},notice:["O que voce esta fazendo la dentro?"],follow:["Como e passar pela cerca?","Eu queria poder ir ai... so para ver."],glitch:["O que foi isso?! Fascinante!","Eu vi o ar se rasgar. Voce viu tambem?"],murmur:["Preciso saber o que ele e.","Isso nao esta em nenhum dos meus cadernos.","Por que so ele escapa do script?"],chase:["Espera! So quero conversar!","Nao corre! Eu tenho perguntas!"],ally:{manha:["Estou do seu lado. Pode contar comigo.","Eu vigio a rua para voce."],tarde:["Se eles te perseguirem, eu distraio. Combinado?","Cada anomalia e uma porta. Continue."],noite:["Fique de olho nas sombras. Eu fico de olho neles.","Eu sempre soube. Agora tenho certeza."],madrugada:["Ninguem esta olhando. Va em frente.","Eu cuido da retaguarda."]},allyWait:["Ainda nao sei o que voce e... volte depois de ver mais coisas estranhas.","Preciso de mais provas. Quebre o script mais uma vez e conversamos."],allyWarn:["Cuidado! Alguem esta olhando!","Sai da linha de visao deles!","Psiu! Tem gente vindo!"],allyHelp:["Ei! Olhem para ca!","Por aqui! Eu tenho uma pergunta!","Nao e ele! Aquele ali e que e estranho!"]},Dora:{trait:"medrosa",talk:{calm:{manha:["B-bom dia... voce nao ouviu nada estranho, ne?","Eu deixo a luz acesa de manha tambem. So por garantia."],tarde:["Eu prefiro ficar perto de gente. Sempre.","A praca e segura... nao e?"],noite:["Ja esta escurecendo. Eu odeio quando escurece.","Vou para casa antes que a rua fique vazia."],madrugada:["Que voce faz acordado a essa hora? Isso me assusta.","Eu ouvi passos. Eram os seus?"]},glitch:{manha:["O chao tremeu! Eu senti nos pes!"],tarde:["Eu vi tudo piscar. Quero ir para casa."],noite:["As luzes... as luzes sumiram por um segundo!"],madrugada:["Eu sabia. Eu sempre soube que tinha algo errado."]},wary:["V-voce esta me assustando.","Por favor, nao chega muito perto."],hunt:["Nao me machuca! Eu nao fiz nada!","Socorro... alguem faz ele parar!"]},notice:["A-ali dentro nao pode..."],follow:["V-volta, por favor...","Eu nao quero ver o que tem ai."],glitch:["Ai! O que foi isso?!","Eu vou para casa. Agora."],murmur:["Eu quero ir embora...","Isso nao esta certo, nao esta certo.","Por que ninguem faz nada?"],chase:["Aaaah! Ele esta ali!","Socorro! Alguem pega ele!"]},Enzo:{trait:"arrogante",talk:{calm:{manha:["Eu acordo mais cedo que todos. Obvio.","Bom dia. Tente acompanhar o meu ritmo."],tarde:["Meu trabalho e o mais importante daqui. Nao conte aos outros.","Voce tem sorte de falar comigo."],noite:["Eu mereco descanso. Fiz mais que todo mundo hoje.","A praca fica melhor quando eu estou nela."],madrugada:["Gente de verdade dorme a essa hora. Eu so estou de passagem.","Madrugada e para quem nao tem rotina decente."]},glitch:{manha:["Aquilo foi um defeito do mundo. Nao tem nada a ver comigo."],tarde:["Eu nao tive medo. Foi so... surpresa. Controlada."],noite:["Se algo esta quebrando, o problema nao sou eu."],madrugada:["Eu ja sabia que isso ia acontecer. Ja sabia."]},wary:["Quem voce pensa que e para me olhar assim?","Eu fico de olho em gente como voce."],hunt:["Eu aviso uma vez so: pare de causar problema.","Voce e um erro. E eu corrijo erros."]},notice:["Voce nao tem permissao para estar ai!"],follow:["Eu mandaria nele se pudesse entrar.","Saia ja da! E uma ordem."],glitch:["Isso foi culpa de alguem. Provavelmente sua.","Hmpf. Que espetaculo desnecessario."],murmur:["Eu disse que ele era problema.","Alguem importante precisa resolver isso. Eu, por exemplo.","Que audacia."],chase:["Eu mesmo vou te pegar!","Ninguem foge de mim!"]},Fabi:{trait:"sonhadora",talk:{calm:{manha:["Sonhei que o ceu era de outra cor. Voce ja viu?","Bom dia... as nuvens parecem sempre as mesmas, mas eu imagino formas."],tarde:["Eu fico olhando a fonte e imaginando o mar.","Um dia eu vou ver algo que nao seja a praca."],noite:["As estrelas parecem pintadas, nao acha? Lindas mesmo assim.","A noite eu viajo sem sair do lugar."],madrugada:["A madrugada e quando os sonhos escapam para a rua.","Voce tambem acorda para ouvir o silencio?"]},glitch:{manha:["O mundo piscou como um olho. Foi lindo e assustador."],tarde:["Eu vi uma cor nova por meio segundo!"],noite:["Era isso que eu sonhava... o mundo se abrindo."],madrugada:["Talvez eu ainda esteja dormindo. Voce tambem?"]},wary:["Voce parece alguem que acordou antes de todos.","Seus olhos estao diferentes. Como os de quem viu longe."],hunt:["Nao deixe eles te apagarem...","Eu ainda quero sonhar, mas eles estao nervosos."]},notice:["Voce esta onde nem os sonhos chegam..."],follow:["Leva um pedaco desse lugar para mim?","O que tem ai dentro? Cores?"],glitch:["Uau... o mundo respirou.","Isso e o que eu sinto quando fecho os olhos."],murmur:["Parece um sonho ruim.","Quem sera ele de verdade?","Eu queria acordar."],chase:["Nao some, ainda e cedo!","Fica! Eu nao quero perder o sonho!"]},Guto:{trait:"calado",talk:{calm:{manha:["...Dia.","..."],tarde:["Hum.","...Tarde."],noite:["...Noite.","Hm."],madrugada:["...","...Cedo demais."]},glitch:{manha:["...Eu vi."],tarde:["...Voce tambem?"],noite:["...Nao e so comigo."],madrugada:["...Finalmente."]},wary:["...Te observo.","Hm. Cuidado."],hunt:["...Para.","...Eles estao vindo."]},notice:["..."],follow:["...Volta.","Hm."],glitch:["...","...Isso."],murmur:["...","Hm...","...Ruim."],chase:["...!","Ali."]}},Ec=[{id:"bruno",npc:"Bruno",where:{type:"plaza",radius:13},from:18.4,to:19.8,placeName:"na praca, no fim do dia",hint:"Agora nao. Depois do expediente, na praca, eu consigo respirar.",reveal:"Eu anoto tudo, sabe? Todo dia o relogio do patio para as 17:58. Eu anoto. Ninguem mais.",clue:"Bruno anota os horarios: o relogio do patio para sempre as 17:58 e so ele reparou."},{id:"celia",npc:"Celia",where:{type:"plaza",radius:13},from:19,to:20.3,placeName:"na praca, ao entardecer",hint:"Hoje nao... espere o fim da tarde. Na praca eu converso melhor.",reveal:"Eu contei: sao cinco objetos que brilham. Alguem os escondeu de nos.",clue:"Celia contou cinco objetos que brilham em horarios diferentes. Alguem os escondeu dos moradores."},{id:"dora",npc:"Dora",where:{type:"homeDoor",home:"homeC",radius:9},from:8.5,to:9.3,placeName:"na porta da casa lilas, de manha",hint:"Aqui nao... so quando eu saio de casa de manha eu tenho coragem.",reveal:"Todo dia alguem arruma meu quarto antes de eu acordar. Eu nunca vi quem.",clue:"Dora diz que alguem arruma o quarto dela antes de acordar. Ninguem nunca viu quem."},{id:"enzo",npc:"Enzo",where:{type:"workDoor",radius:10},from:16.8,to:17.6,placeName:"na saida do trabalho",hint:"Eu nao falo disso no meio do trabalho. Na saida, talvez.",reveal:"Eu tentei sair pela estrada. Ela me traz de volta a praca. Nao conte a ninguem.",clue:"Enzo tentou sair do povoado pela estrada. Ela sempre o devolve a praca."},{id:"fabi",npc:"Fabi",where:{type:"homeDoor",home:"homeB",radius:9},from:9,to:9.8,placeName:"na porta da casa verde, de manha",hint:"Ainda estou meio dormindo... me pergunta quando eu acordar e sair de casa.",reveal:"Eu sonho com um lugar sem rotina. Tem um portao do lado de fora do mundo.",clue:"Fabi sonha com um portao do lado de fora do mundo. Pode ser o portao que voce viu."},{id:"guto",npc:"Guto",where:{type:"plaza",radius:13},from:17.9,to:18.9,placeName:"na praca, no comeco da noite",hint:"...Depois. Na praca.",reveal:"...Eles te chamam de NPC. Me chamaram assim uma vez. Depois todos esqueceram.",clue:'Guto lembra de ter sido chamado de "NPC" por alguem de fora, antes de todos esquecerem.'}],Du=new Map;function us(i,e){if(!Array.isArray(i)||i.length===0)return"";if(i.length===1)return i[0];let t=Du.get(e),n=wn(i),s=0;for(;n===t&&s<6;)n=wn(i),s+=1;return Du.set(e,n),n}function ai(i,e,t={}){let n=Nx[i];if(!n)return"...";let s=Number.isFinite(t.hour)?t.hour:12,r=Number.isFinite(t.suspicion)?t.suspicion:0,a=Lx(s),o=`${i}:${e}`;if(e==="talk"){if(t.ally&&n.ally)return us(n.ally[a],`${o}:ally:${a}`);let l=Dx(r);return l==="hunt"?us(n.talk.hunt,`${o}:hunt`):l==="wary"?us(n.talk.wary,`${o}:wary`):t.glitch?us(n.talk.glitch[a],`${o}:glitch:${a}`):us(n.talk.calm[a],`${o}:calm:${a}`)}return us(n[e],o)}function Nu(i){return Ec.find(e=>e.npc===i)||null}var Ux=[{name:"Bruno",home:"homeA",wake:6,lunch:12,leaveWork:17,homeTime:20},{name:"Celia",home:"homeB",wake:6.5,lunch:12.5,leaveWork:17.5,homeTime:20.5},{name:"Dora",home:"homeC",wake:8.5,lunch:13,leaveWork:18,homeTime:21},{name:"Enzo",home:"homeA",wake:7.2,lunch:12.2,leaveWork:16.8,homeTime:19.5},{name:"Fabi",home:"homeB",wake:9,lunch:13.2,leaveWork:18.2,homeTime:21.2},{name:"Guto",home:"homeC",wake:6.2,lunch:11.8,leaveWork:16.5,homeTime:19}],Uu=["Conversando com alguem","Sentado no banco","Observando a praca","Comendo um lanche","Cumprimentando quem passa"];function Fx(i){return[{until:i.wake,place:"home",activity:"Em casa"},{until:i.lunch,place:"work",activity:"Trabalhando"},{until:i.lunch+1,place:"plaza",activity:"Almoco na praca"},{until:i.leaveWork,place:"work",activity:"Trabalhando"},{until:i.homeTime,place:"plaza",activity:"Descansando na praca"},{until:24,place:"home",activity:"Em casa"}]}var Tc=class{constructor({scene:e,world:t,ui:n,def:s,index:r}){this.scene=e,this.world=t,this.ui=n,this.name=s.name,this.color=bc[r%bc.length],this.home=t.homeById(s.home),this.schedule=Fx(s),this.speed=U.npc.baseSpeed+Sn(-U.npc.speedVariance,U.npc.speedVariance),this.radius=U.npc.radius,this.position=new C,this.yaw=0,this.state="inside",this.place="home",this.insidePlace="home",this.activity="Em casa",this.path=[],this.pathIndex=0,this.wanderTarget=null,this.idleTimer=0,this.enterTimer=0,this.leaveTimer=0,this.reactTimer=0,this.bubbleTimer=0,this.walkPhase=0,this.walking=!1,this.blockedByForbidden=!1,this.alert=null,this.markKind=null,this.lineCtx={hour:12,suspicion:0,glitch:!1},this.talkCount=0,this.ally=!1,this.assistTimer=0,this.distractTimer=0,this.distractPoint={x:0,z:0},this.chaos=!1,this.chaosPhase=Math.random()*10,this.heat="none",this.murmurEnabled=!1,this.stareTimer=0,this.murmurTimer=0,this.chasePath=[],this.chasePathIndex=0,this.chaseRepathTimer=0,this.buildBody(),this.buildLabel(),this.reset()}buildBody(){this.body=new vt,this.body.name=`npc-${this.name}`,this.meshRoot=new vt,this.body.add(this.meshRoot);let e=new ot({color:this.color,roughness:.7}),t=new Re(new rs(.33,.8,6,12),e);t.position.y=.95,t.castShadow=!0,this.meshRoot.add(t);let n=new ot({color:3356223,roughness:.8});for(let a of[-.15,.15]){let o=new Re(new Xt(.19,.6,.19),n);o.position.set(a,.3,0),o.castShadow=!0,this.meshRoot.add(o)}for(let a of[-.42,.42]){let o=new Re(new Xt(.14,.55,.14),e);o.position.set(a,.95,0),o.castShadow=!0,this.meshRoot.add(o)}let s=new Re(new mn(.27,14,10),new ot({color:Ee.npcSkin,roughness:.75}));s.position.y=1.62,s.castShadow=!0,this.meshRoot.add(s);let r=new Re(new mn(.28,12,8,0,Math.PI*2,0,Math.PI/1.8),new ot({color:this.color,roughness:.8}));r.position.y=1.68,this.meshRoot.add(r),this.scene.add(this.body)}buildLabel(){this.anchor=new wt,this.scene.add(this.anchor);let e=this.ui.createLabel("npc-label",`<span class="npc-name">${this.name}</span><span class="npc-activity"></span>`);this.labelElement=e.element,this.activityEl=e.element.querySelector(".npc-activity"),this.anchor.add(e.object),this.labelObject=e.object;let t=this.ui.createLabel("npc-bubble","");this.bubbleElement=t.element,t.object.position.set(0,1.15,0),this.anchor.add(t.object),this.bubbleObject=t.object;let n=this.ui.createLabel("npc-mark","?");this.markElement=n.element,n.object.position.set(0,.62,0),this.anchor.add(n.object),this.markObject=n.object}get isPresent(){return this.state!=="inside"}get doorPoint(){return this.insidePlace==="work"?this.world.places.work.door:this.home.door}reset(){this.state="inside",this.place="home",this.insidePlace="home",this.alert=null,this.heat="none",this.assistTimer=0,this.distractTimer=0,this.setChaos(!1),this.stareTimer=0,this.murmurTimer=0,this.chasePath=[],this.chasePathIndex=0,this.chaseRepathTimer=0,this.path=[],this.pathIndex=0,this.wanderTarget=null,this.reactTimer=0,this.bubbleTimer=0,this.walking=!1,this.yaw=0,this.position.set(this.home.inside.x,0,this.home.inside.z),this.setActivity("Em casa"),this.bubbleElement.textContent="",this.syncVisuals()}setActivity(e){this.activity!==e&&(this.activity=e,this.activityEl.textContent=e)}line(e){return ai(this.name,e,this.lineCtx)}setChaos(e){this.chaos!==e&&(this.chaos=e,this.labelElement&&this.labelElement.classList.toggle("chaos",e),!e&&this.meshRoot&&(this.meshRoot.scale.set(1,1,1),this.meshRoot.rotation.set(0,0,0)),e&&(this.activityEl.textContent="ERRO",this.activity="ERRO"))}distract(e,t){this.distractTimer=e,this.distractPoint.x=t.x,this.distractPoint.z=t.z}say(e,t=3){this.bubbleElement.textContent=e,this.bubbleTimer=e?t:0}updateBubble(e){this.bubbleTimer>0&&(this.bubbleTimer-=e,this.bubbleTimer<=0&&(this.bubbleElement.textContent=""))}syncVisuals(e){let t=this.state==="inside";if(this.body.visible=!t,t){let r=this.doorPoint;this.anchor.position.set(r.x,2.7,r.z)}else{let r=this.walking?Math.abs(Math.sin(this.walkPhase))*.08:0;this.body.position.set(this.position.x,0,this.position.z),this.body.rotation.y=this.yaw,this.meshRoot.position.y=r,this.anchor.position.set(this.position.x,2.45+r,this.position.z)}if(e){let a=He(this.position.x,this.position.z,e.x,e.z)<=U.npc.labelMaxDistance;this.labelObject.visible=a,this.bubbleObject.visible=a,this.markObject.visible=a}let n=this.heat==="stare"||this.heat==="chase"||!!this.alert;this.labelElement.classList.toggle("alert",n),this.bubbleElement.classList.toggle("visible",this.bubbleTimer>0);let s=this.ally||this.state==="inside"?null:this.heat==="chase"||this.alert?"!":this.heat==="stare"?"?":null;if(s!==this.markKind&&(this.markKind=s,s&&(this.markElement.textContent=s),this.markElement.classList.toggle("visible",s!==null),this.markElement.classList.toggle("chase",s==="!")),this.chaos&&!t){this.chaosPhase+=.45;let r=Math.sin(this.chaosPhase*3.1);this.meshRoot.scale.set(1+r*.18,1+Math.sin(this.chaosPhase*2.3)*.22,1-r*.12),this.meshRoot.rotation.z=Math.sin(this.chaosPhase*1.7)*.18}}faceTarget(e,t,n,s=1){let r=Mc(this.position.x,this.position.z,e,t);this.yaw=hs(this.yaw,r,U.npc.turnSpeed*s*n)}moveToward(e,t,n,s,{stopAt:r=0}={}){let a=e-this.position.x,o=t-this.position.z,l=Math.hypot(a,o);if(l<=Math.max(r,1e-4))return this.faceTarget(e,t,s),l;let c=Math.min(l-r,n*s),h=this.position.x+a/l*c,d=this.position.z+o/l*c;return this.world.isInsideForbidden(h,d)?(this.blockedByForbidden=!0,this.faceTarget(e,t,s),l):(this.blockedByForbidden=!1,this.position.x=h,this.position.z=d,Ds(this.position,this.radius,this.world.rects,this.world.circles,U.world.bounds),this.faceTarget(e,t,s),this.walkPhase+=s*9,this.walking=!0,Math.hypot(e-this.position.x,t-this.position.z))}canSee(e,t,n=U.npc.visionRange,s=U.npc.visionFov){if(this.state==="inside")return!1;let r=He(this.position.x,this.position.z,e,t);if(r>n)return!1;if(r>U.npc.peripheralRange){let a=Math.sin(this.yaw),o=Math.cos(this.yaw),l=r>1e-4?(e-this.position.x)/r:0,c=r>1e-4?(t-this.position.z)/r:1;if(Math.acos(_t(a*l+o*c,-1,1))>s/2)return!1}return this.world.lineOfSight(this.position.x,this.position.z,e,t)}desiredEntry(e){for(let t of this.schedule)if(e<t.until)return t;return this.schedule[this.schedule.length-1]}get insidePoint(){return this.insidePlace==="work"?this.world.places.work.inside:this.home.inside}setRoute(e){let t=this.world.nav.nearest(this.position.x,this.position.z);this.path=this.world.nav.path(t,e).map(n=>this.world.nav.positionOf(n)).filter(Boolean),this.pathIndex=0}goToPlace(e,{leaving:t=!1}={}){this.place=e,this.wanderTarget=null,e==="plaza"?(this.setRoute(wn(this.world.places.plaza.nodes)),this.setActivity(t?"Saindo":"Indo para a praca")):e==="home"?(this.setRoute(this.home.nodeId),this.setActivity(t?"Saindo de casa":"Voltando para casa")):(this.setRoute(this.world.places.work.nodeId),this.setActivity(t?"Saindo do trabalho":"Indo trabalhar")),t?(this.state="leaving",this.leaveTimer=.7,this.position.set(this.doorPoint.x,0,this.doorPoint.z),this.yaw=Mc(this.position.x,this.position.z,0,0)):this.state="walking"}arriveAtDestination(){if(this.walking=!1,this.place==="home"||this.place==="work"){this.insidePlace=this.place,this.state="entering",this.enterTimer=U.npc.enterTime,this.setActivity(this.place==="home"?"Entrando em casa":"Entrando no trabalho");return}this.state="idle",this.idleTimer=Sn(U.npc.idleMin,U.npc.idleMax),this.setActivity(wn(Uu))}updateWalk(e){let t=this.path[this.pathIndex];if(!t){this.arriveAtDestination();return}this.moveToward(t.x,t.z,this.speed,e)<.5&&(this.pathIndex+=1,this.pathIndex>=this.path.length&&this.arriveAtDestination())}updateIdle(e){if(this.wanderTarget){let t=this.moveToward(this.wanderTarget.x,this.wanderTarget.z,this.speed*.65,e);this.setActivity("Andando pela praca"),t<.4&&(this.wanderTarget=null,this.idleTimer=Sn(U.npc.idleMin,U.npc.idleMax),this.setActivity(wn(Uu)));return}this.idleTimer-=e,this.idleTimer<=0&&(this.wanderTarget=wn(this.world.places.plaza.wander))}update(e,t,n){if(this.updateBubble(e),this.lineCtx.hour=t,n.suspicion!==void 0&&(this.lineCtx.suspicion=n.suspicion),n.glitch!==void 0&&(this.lineCtx.glitch=n.glitch),this.lineCtx.ally=this.ally,n.frozen){this.walking=!1,this.syncVisuals(n.cameraPosition);return}if(this.walking=!1,this.distractTimer>0){this.distractTimer-=e,this.faceTarget(this.distractPoint.x,this.distractPoint.z,e,1.6),this.setActivity("Distraido"),this.syncVisuals(n.cameraPosition);return}if(this.assistTimer>0&&this.isPresent){this.assistTimer-=e,He(this.position.x,this.position.z,n.playerPosition.x,n.playerPosition.z)>5?this.moveToward(n.playerPosition.x,n.playerPosition.z,U.heat.chaseSpeed*.75,e,{stopAt:4}):this.faceTarget(n.playerPosition.x,n.playerPosition.z,e),this.setActivity("Te ajudando"),this.syncVisuals(n.cameraPosition);return}if(this.heat==="chase"){let r=this.updateChase(e,n);return this.syncVisuals(n.cameraPosition),r}if(this.heat==="stare"){this.updateStare(e,n),this.syncVisuals(n.cameraPosition);return}if(this.alert){this.updateAlert(e,n),this.syncVisuals(n.cameraPosition);return}if(this.reactTimer>0){this.reactTimer-=e,this.faceTarget(n.playerPosition.x,n.playerPosition.z,e,1.4),this.syncVisuals(n.cameraPosition);return}let s=this.desiredEntry(t);if(this.place!==s.place){let r=this.state==="inside"||this.state==="entering";this.goToPlace(s.place,{leaving:r})}switch(this.state){case"walking":this.updateWalk(e);break;case"leaving":this.leaveTimer-=e,this.leaveTimer<=0&&(this.state="walking");break;case"entering":this.enterTimer-=e,this.enterTimer<=0&&(this.state="inside",this.position.set(this.insidePoint.x,0,this.insidePoint.z),this.setActivity(this.insidePlace==="home"?"Em casa":"Trabalhando"));break;case"idle":this.updateIdle(e);break;default:break}this.syncVisuals(n.cameraPosition)}noticePlayer(e){return this.state==="inside"||this.alert?!1:(this.alert={phase:"notice",timer:2.4,speakTimer:Sn(10,16),awayTimer:0},this.place=null,this.wanderTarget=null,this.walking=!1,this.setActivity("Interrompeu a rotina"),this.say(this.line("notice"),3.6),this.faceTarget(e.x,e.z,1),!0)}reactShort(e){return this.state==="inside"||this.alert||this.reactTimer>0?!1:(this.reactTimer=2.4,this.walking=!1,this.setActivity("Olhando para voce"),this.say(this.line("glitch"),2.8),this.faceTarget(e.x,e.z,1),!0)}updateAlert(e,t){let n=t.playerPosition,s=He(this.position.x,this.position.z,n.x,n.z);if(this.alert.phase==="notice"){this.alert.timer-=e,this.faceTarget(n.x,n.z,e,1.6),this.alert.timer<=0&&(this.alert.phase="follow");return}this.alert.speakTimer-=e,this.alert.speakTimer<=0&&(this.alert.speakTimer=Sn(12,20),this.say(this.line("follow"),3.2)),this.murmurEnabled&&this.murmur(n,e),s>U.npc.followDistance?(this.moveToward(n.x,n.z,U.npc.followSpeed,e,{stopAt:U.npc.followDistance}),this.setActivity(this.blockedByForbidden?"Parado na borda":"Seguindo voce")):(this.walking=!1,this.faceTarget(n.x,n.z,e),this.setActivity("Te encarando")),t.playerInForbidden?this.alert.awayTimer=0:(this.alert.awayTimer+=e,this.alert.awayTimer>8&&(this.alert=null,this.say("...",2),this.resumeRoutine(t.hour)))}startStare(e){if(this.heat==="chase")return!1;let t=this.heat!=="stare";return this.heat="stare",this.walking=!1,t&&(this.stareTimer=0,this.setActivity("Te encarando")),this.faceTarget(e.x,e.z,1),t}murmur(e,t){this.murmurTimer-=t,!(this.murmurTimer>0)&&(this.murmurTimer=Sn(U.heat.murmurMinSeconds,U.heat.murmurMaxSeconds),this.say(this.line("murmur"),3.2),this.faceTarget(e.x,e.z,1))}startChase(e){let t=this.heat!=="chase";return this.heat="chase",this.alert=null,this.place=null,this.wanderTarget=null,t&&(this.chasePath=[],this.chasePathIndex=0,this.chaseRepathTimer=0,this.murmurTimer=Sn(1.5,4),this.setActivity("Perseguindo voce"),this.say(this.line("chase"),2.4)),t}stopHeat(){this.heat!=="none"&&(this.heat="none",this.stareTimer=0,this.murmurTimer=0,this.chasePath=[],this.chasePathIndex=0)}updateStare(e,t){let n=t.playerPosition,s=He(this.position.x,this.position.z,n.x,n.z);this.walking=!1,this.faceTarget(n.x,n.z,e,1.6),this.setActivity("Te encarando"),s>U.heat.stareRadius?this.stareTimer=0:this.stareTimer+=e}repathChase(e){let t=this.world.nav.nearest(this.position.x,this.position.z),n=this.world.nav.nearest(e.x,e.z);this.chasePath=this.world.nav.path(t,n).map(s=>this.world.nav.positionOf(s)).filter(Boolean).slice(1),this.chasePathIndex=0,this.chaseRepathTimer=U.heat.chaseRepathSeconds}updateChase(e,t){let n=t.playerPosition,s=He(this.position.x,this.position.z,n.x,n.z);if(s<=U.heat.catchRadius)return this.walking=!1,!0;this.chaseRepathTimer-=e,this.chaseRepathTimer<=0&&this.repathChase(n);let r=this.chasePath[this.chasePathIndex];if(s>U.npc.followDistance&&r&&this.chasePathIndex<this.chasePath.length){let o=this.moveToward(r.x,r.z,U.heat.chaseSpeed,e);this.setActivity(this.blockedByForbidden?"Travado na cerca":"Perseguindo voce"),o<.6&&(this.chasePathIndex+=1)}else this.moveToward(n.x,n.z,U.heat.chaseSpeed,e,{stopAt:.6}),this.setActivity(this.blockedByForbidden?"Travado na cerca":"Perseguindo voce");return this.murmur(n,e),!1}resumeRoutine(e){this.place=null,this.wanderTarget=null,this.state!=="inside"&&(this.state="walking",this.goToPlace(this.desiredEntry(e).place))}},ua=class{constructor({scene:e,world:t,ui:n}){this.list=Ux.map((s,r)=>new Tc({scene:e,world:t,ui:n,def:s,index:r})),this.caughtBy=null}update(e,t,n){this.caughtBy=null;for(let s=0;s<this.list.length;s+=1){let r=this.list[s];r.update(e,t,n)===!0&&(this.caughtBy=r)}}staring(){return this.list.filter(e=>e.heat==="stare")}chasing(){return this.list.filter(e=>e.heat==="chase")}reset(){for(let e=0;e<this.list.length;e+=1)this.list[e].reset()}nearest(e,t=1/0){let n=null,s=t;for(let r=0;r<this.list.length;r+=1){let a=this.list[r];if(!a.isPresent)continue;let o=He(a.position.x,a.position.z,e.x,e.z);o<s&&(s=o,n=a)}return n}followers(){return this.list.filter(e=>e.alert&&e.alert.phase==="follow")}present(){return this.list.filter(e=>e.isPresent)}};var da=class extends wt{constructor(e=document.createElement("div")){super(),this.isCSS2DObject=!0,this.element=e,this.element.style.position="absolute",this.element.style.userSelect="none",this.element.setAttribute("draggable",!1),this.center=new le(.5,.5),this.addEventListener("removed",function(){this.traverse(function(t){t.element instanceof Element&&t.element.parentNode!==null&&t.element.parentNode.removeChild(t.element)})})}copy(e,t){return super.copy(e,t),this.element=e.element.cloneNode(!0),this.center=e.center,this}},ds=new C,Fu=new ht,Ou=new ht,zu=new C,ku=new C,fa=class{constructor(e={}){let t=this,n,s,r,a,o={objects:new WeakMap},l=e.element!==void 0?e.element:document.createElement("div");l.style.overflow="hidden",this.domElement=l,this.getSize=function(){return{width:n,height:s}},this.render=function(g,v){g.matrixWorldAutoUpdate===!0&&g.updateMatrixWorld(),v.parent===null&&v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),Fu.copy(v.matrixWorldInverse),Ou.multiplyMatrices(v.projectionMatrix,Fu),h(g,g,v),u(g)},this.setSize=function(g,v){n=g,s=v,r=n/2,a=s/2,l.style.width=g+"px",l.style.height=v+"px"};function c(g){g.isCSS2DObject&&(g.element.style.display="none");for(let v=0,m=g.children.length;v<m;v++)c(g.children[v])}function h(g,v,m){if(g.visible===!1){c(g);return}if(g.isCSS2DObject){ds.setFromMatrixPosition(g.matrixWorld),ds.applyMatrix4(Ou);let p=ds.z>=-1&&ds.z<=1&&g.layers.test(m.layers)===!0,b=g.element;b.style.display=p===!0?"":"none",p===!0&&(g.onBeforeRender(t,v,m),b.style.transform="translate("+-100*g.center.x+"%,"+-100*g.center.y+"%)translate("+(ds.x*r+r)+"px,"+(-ds.y*a+a)+"px)",b.parentNode!==l&&l.appendChild(b),g.onAfterRender(t,v,m));let y={distanceToCameraSquared:d(m,g)};o.objects.set(g,y)}for(let p=0,b=g.children.length;p<b;p++)h(g.children[p],v,m)}function d(g,v){return zu.setFromMatrixPosition(g.matrixWorld),ku.setFromMatrixPosition(v.matrixWorld),zu.distanceToSquared(ku)}function f(g){let v=[];return g.traverseVisible(function(m){m.isCSS2DObject&&v.push(m)}),v}function u(g){let v=f(g).sort(function(p,b){if(p.renderOrder!==b.renderOrder)return b.renderOrder-p.renderOrder;let y=o.objects.get(p).distanceToCameraSquared,w=o.objects.get(b).distanceToCameraSquared;return y-w}),m=v.length;for(let p=0,b=v.length;p<b;p++)v[p].element.style.zIndex=m-p}}};var pa=class{constructor(){this.clockEl=document.getElementById("clock"),this.clockPhaseEl=document.getElementById("clock-phase"),this.suspicionFill=document.getElementById("suspicion-fill"),this.suspicionValue=document.getElementById("suspicion-value"),this.objectiveEl=document.getElementById("objective-text"),this.promptEl=document.getElementById("prompt"),this.promptTextEl=document.getElementById("prompt-text"),this.toastEl=document.getElementById("toast"),this.errorEl=document.getElementById("error-banner"),this.glitchOverlay=document.getElementById("glitch-overlay"),this.tensionEl=document.getElementById("tension-vignette"),this.startScreen=document.getElementById("start-screen"),this.startButton=document.getElementById("start-button"),this.stepTextEl=document.getElementById("step-text"),this.stepCountEl=document.getElementById("step-count"),this.stepDistanceEl=document.getElementById("step-distance"),this.stepCheckEl=document.getElementById("step-check"),this.hintEl=document.getElementById("hint"),this.controlsCardEl=document.getElementById("controls-card"),this.continueButton=document.getElementById("continue-button"),this.startSaveNoteEl=document.getElementById("start-save-note"),this.helpEl=document.getElementById("help"),this.helpListEl=document.getElementById("help-list"),this.helpHintEl=document.getElementById("help-hint"),this.diaryEl=document.getElementById("diary"),this.diaryListEl=document.getElementById("diary-list"),this.diaryCountEl=document.getElementById("diary-count"),this.powerPanel=document.getElementById("power-panel"),this.powerFillEl=document.getElementById("power-fill"),this.powerLabelEl=document.getElementById("power-label"),this.skillsListEl=document.getElementById("skills-list"),this.muteStateEl=document.getElementById("mute-state"),this.muteEl=document.getElementById("mute-indicator"),this.achievementEl=document.getElementById("achievement-toast"),this.diarySecretsEl=document.getElementById("diary-secrets"),this.diarySecretsCountEl=document.getElementById("diary-secrets-count"),this.achievementsListEl=document.getElementById("achievements-list"),this.root=document.documentElement,this.skillRows=new Map,this.skillsSignature="",this.achievementQueue=[],this.achievementTimer=0,this.toastTimer=0,this.errorTimer=0,this.controlsCardTimer=0,this.labelRenderer=new fa,this.labelRenderer.setSize(window.innerWidth,window.innerHeight),this.labelRenderer.domElement.style.position="absolute",this.labelRenderer.domElement.style.inset="0",this.labelRenderer.domElement.style.pointerEvents="none";let e=document.getElementById("label-layer");e&&e.appendChild(this.labelRenderer.domElement)}onStart(e){this.startButton.addEventListener("click",e)}onContinue(e){this.continueButton&&this.continueButton.addEventListener("click",e)}setHasSave(e){this.continueButton&&this.continueButton.classList.toggle("hidden",!e),this.startSaveNoteEl&&(this.startSaveNoteEl.textContent=e?"Continuar volta para onde voce parou.":"Primeiro dia: voce acorda dentro de casa.")}hideStartScreen(){this.startScreen.classList.add("hidden")}showControlsCard(e=U.start.controlsCardSeconds){this.controlsCardEl&&(this.controlsCardEl.classList.remove("hidden"),this.controlsCardEl.classList.remove("out"),this.controlsCardEl.offsetWidth,this.controlsCardEl.classList.add("in"),this.controlsCardTimer=e)}hideControlsCard(){this.controlsCardEl&&(this.controlsCardTimer=0,this.controlsCardEl.classList.remove("in"),this.controlsCardEl.classList.add("hidden"))}createLabel(e,t=""){let n=document.createElement("div");n.className=e,n.innerHTML=t;let s=new da(n);return{element:n,object:s}}setClock(e,t){this.clockEl.textContent=e,this.clockPhaseEl.textContent=t}setSuspicion(e,t=U.suspicion.max){let n=_t(e/t,0,1);this.suspicionFill.style.width=`${(n*100).toFixed(1)}%`,this.suspicionValue.textContent=`${Math.round(e)}%`;let s=this.suspicionFill.parentElement?.parentElement;s&&s.classList.toggle("high",n>.6)}setObjective(e){this.objectiveEl.textContent!==e&&(this.objectiveEl.textContent=e)}setStep(e,t,n){if(!this.stepTextEl)return;let s=t>=n?`${n}/${n}`:`${t+1}/${n}`;this.stepCountEl&&this.stepCountEl.textContent!==s&&(this.stepCountEl.textContent=s),this.stepTextEl.textContent!==e&&(this.stepTextEl.textContent=e,this.stepTextEl.classList.remove("step-swap"),this.stepTextEl.offsetWidth,this.stepTextEl.classList.add("step-swap"))}setStepDistance(e){if(!this.stepDistanceEl)return;if(e==null){this.stepDistanceEl.classList.contains("hidden")||this.stepDistanceEl.classList.add("hidden");return}let t=`${Math.round(e)} m`;this.stepDistanceEl.textContent!==t&&(this.stepDistanceEl.textContent=t),this.stepDistanceEl.classList.remove("hidden")}showStepCheck(){this.stepCheckEl&&(this.stepCheckEl.classList.remove("step-check-pop"),this.stepCheckEl.offsetWidth,this.stepCheckEl.classList.remove("hidden"),this.stepCheckEl.classList.add("step-check-pop"))}hideStepCheck(){this.stepCheckEl&&(this.stepCheckEl.classList.add("hidden"),this.stepCheckEl.classList.remove("step-check-pop"))}showHint(e){this.hintEl&&(this.hintEl.textContent=e,this.hintEl.classList.remove("hidden","out"),this.hintEl.offsetWidth,this.hintEl.classList.add("in"))}fadeOutHint(){this.hintEl&&(this.hintEl.classList.remove("in"),this.hintEl.classList.add("out"))}hideHint(){this.hintEl&&(this.hintEl.classList.remove("in","out"),this.hintEl.classList.add("hidden"))}setHelpOpen(e,t){if(this.helpEl&&(this.helpEl.classList.toggle("hidden",!e),!(!e||!this.helpListEl||!Array.isArray(t))&&!(this.helpListEl.childElementCount>0)))for(let n=0;n<t.length;n+=1){let s=document.createElement("div");s.className="help-row";let r=document.createElement("span");r.className="help-keys";for(let o=0;o<t[n].keys.length;o+=1){let l=document.createElement("kbd");l.textContent=t[n].keys[o],r.appendChild(l)}let a=document.createElement("span");a.className="help-label",a.textContent=t[n].label,s.appendChild(r),s.appendChild(a),this.helpListEl.appendChild(s)}}setSkills({defs:e,unlocked:t,activeId:n,ratio:s,remaining:r,ready:a}){if(!this.powerPanel||!this.skillsListEl)return;if(this.skillRows.size===0)for(let u=0;u<e.length;u+=1){let g=e[u],v=document.createElement("div");v.className="skill locked",v.style.setProperty("--skill-color",g.color);let m=document.createElement("kbd");m.textContent=g.keyLabel;let p=document.createElement("span");p.className="skill-name",p.textContent=g.name;let b=document.createElement("span");b.className="skill-state",v.appendChild(m),v.appendChild(p),v.appendChild(b),this.skillsListEl.appendChild(v),this.skillRows.set(g.id,{row:v,state:b,def:g})}let o=t.size>0;if(this.powerPanel.classList.toggle("hidden",!o),!o)return;let l=Math.max(0,Math.min(1,s)),c=n?e.find(u=>u.id===n):null,h=(l*100).toFixed(0),d=c?`${c.name}: ${r.toFixed(1)} s`:a?"pronto":`recarregando ${r.toFixed(0)} s`,f=`${[...t].join(",")}|${n}|${h}|${a}|${d}`;if(f!==this.skillsSignature){this.skillsSignature=f;for(let{row:u,state:g,def:v}of this.skillRows.values()){let m=t.has(v.id),p=n===v.id;u.classList.toggle("locked",!m),u.classList.toggle("active",p),u.classList.toggle("ready",m&&a&&!n);let b=m?p?"ATIVO":a?"pronto":"...":"bloqueado";g.textContent!==b&&(g.textContent=b)}this.powerFillEl&&(this.powerFillEl.style.width=`${h}%`,this.powerFillEl.style.background=c?`linear-gradient(90deg, ${c.color}, #ffffff)`:"",this.powerFillEl.classList.toggle("active",c!==null),this.powerFillEl.classList.toggle("ready",a&&!c)),this.powerLabelEl&&this.powerLabelEl.textContent!==d&&(this.powerLabelEl.textContent=d),this.powerPanel.classList.toggle("ready",a&&!n),this.powerPanel.classList.toggle("active",c!==null)}}setPowerTint(e){this.root.classList.toggle("power-invis",e==="invis"),this.root.classList.toggle("power-phase",e==="phase")}setMuted(e){this.muteStateEl&&(this.muteStateEl.textContent=e?"mudo":"ligado"),this.muteEl&&this.muteEl.classList.toggle("muted",e===!0)}achievement(e,t=""){this.achievementQueue.push({title:e,description:t})}setAchievementsList(e){if(!(!this.achievementsListEl||!Array.isArray(e))){this.achievementsListEl.textContent="";for(let t of e){let n=document.createElement("div");n.className=t.unlocked?"ach-row unlocked":"ach-row",n.textContent=`${t.unlocked?"\u2605":"\u2606"} ${t.unlocked?t.title:"???"}`,n.title=t.unlocked?t.description:"Conquista bloqueada",this.achievementsListEl.appendChild(n)}}}setFrozenTime(e,t){this.root.classList.toggle("frozen-time",e===!0),e?(this.root.style.setProperty("--freeze-invert",String(t.invert)),this.root.style.setProperty("--freeze-grayscale",String(t.grayscale)),this.root.style.setProperty("--freeze-contrast",String(t.contrast)),this.setGlitch(t.glitchLevel)):this.setGlitch(0)}setDiaryOpen(e){this.diaryEl&&this.diaryEl.classList.toggle("hidden",!e)}setDiaryContent(e,t,n){if(!this.diaryListEl||(this.diaryCountEl&&(this.diaryCountEl.textContent=`Anomalias: ${t}/${n}`),!Array.isArray(e)))return;let s=e.map(r=>r.found?"1":"0").join("");if(this.diarySignature!==s){this.diarySignature=s,this.diaryListEl.textContent="";for(let r=0;r<e.length;r+=1){let a=e[r],o=document.createElement("div");o.className=a.found?"diary-row found":"diary-row";let l=document.createElement("div");l.className="diary-row-title",l.textContent=a.found?`${a.index}. ${a.name}`:`${a.index}. ???`;let c=document.createElement("div");c.className="diary-row-clue",c.textContent=a.found?a.clue:"Pista ainda nao encontrada.",o.appendChild(l),o.appendChild(c),this.diaryListEl.appendChild(o)}}}setDiarySecrets(e,t,n){if(!this.diarySecretsEl||(this.diarySecretsCountEl&&(this.diarySecretsCountEl.textContent=`Segredos: ${t}/${n}`),!Array.isArray(e)))return;let s=e.map(r=>r.found?"1":"0").join("");if(this.secretsSignature!==s){this.secretsSignature=s,this.diarySecretsEl.textContent="";for(let r of e){let a=document.createElement("div");a.className=r.found?"diary-row found secret":"diary-row secret";let o=document.createElement("div");o.className="diary-row-title",o.textContent=r.found?r.name:"???";let l=document.createElement("div");l.className="diary-row-clue",l.textContent=r.found?r.clue:"Este NPC guarda algo. Fale com ele no horario e no lugar certos.",a.appendChild(o),a.appendChild(l),this.diarySecretsEl.appendChild(a)}}}showPrompt(e){this.promptTextEl.textContent=e,this.promptEl.classList.remove("hidden")}hidePrompt(){this.promptEl.classList.add("hidden")}toast(e,t=3.2){this.toastEl.textContent=e,this.toastEl.classList.remove("hidden"),this.toastTimer=t}showError(e,t=3){this.errorEl.textContent=e,this.errorEl.classList.remove("hidden"),this.errorTimer=t}setTension(e){if(!this.tensionEl)return;let t=_t(e,0,1);this.tensionEl.style.opacity!==String(t)&&(this.tensionEl.style.opacity=String(t))}setGlitch(e){let t=_t(e,0,1);this.root.style.setProperty("--glitch",String(t)),this.glitchOverlay.style.opacity=String(t*.85),this.root.classList.toggle("glitching",t>.02)}update(e){this.toastTimer>0&&(this.toastTimer-=e,this.toastTimer<=0&&this.toastEl.classList.add("hidden")),this.errorTimer>0&&(this.errorTimer-=e,this.errorTimer<=0&&this.errorEl.classList.add("hidden")),this.controlsCardTimer>0&&(this.controlsCardTimer-=e,this.controlsCardTimer<=0&&this.hideControlsCard()),this.updateAchievements(e)}updateAchievements(e){if(!this.achievementEl)return;if(this.achievementTimer>0){this.achievementTimer-=e,this.achievementTimer<=0&&this.achievementEl.classList.add("hidden");return}let t=this.achievementQueue.shift();if(!t)return;this.achievementEl.textContent="";let n=document.createElement("b");n.textContent=`Conquista: ${t.title}`;let s=document.createElement("span");s.textContent=t.description,this.achievementEl.appendChild(n),this.achievementEl.appendChild(s),this.achievementEl.classList.remove("hidden"),this.achievementTimer=4.2}resize(e,t){this.labelRenderer.setSize(e,t)}render(e,t){this.labelRenderer.render(e,t)}};var ma=class{constructor({ui:e}){this.ui=e,this.active=!1,this.timer=0,this.duration=1,this.level=0,this.strength=1,this.offset=new C}trigger({duration:e=U.events.glitchDuration,message:t="Erro: entidade fora do script detectada",strength:n=1}={}){this.active=!0,this.timer=e,this.duration=e,this.strength=n,this.level=1,this.ui.showError(t,e+1.6),this.ui.setGlitch(1)}update(e){if(!this.active){this.offset.lengthSq()!==0&&this.offset.set(0,0,0);return}if(this.timer-=e,this.timer<=0){this.active=!1,this.level=0,this.offset.set(0,0,0),this.ui.setGlitch(0);return}this.level=_t(this.timer/this.duration,0,1),this.ui.setGlitch(this.level);let t=this.level*1.5*(this.strength||1);this.offset.set((Math.random()-.5)*t,(Math.random()-.5)*t,(Math.random()-.5)*t)}reset(){this.active=!1,this.level=0,this.timer=0,this.offset.set(0,0,0),this.ui.setGlitch(0)}},ga=class{constructor(){this.value=0,this.idleTime=0,this.lastReason="",this.decayMultiplier=1,this.safeZone=!1}raise(e,t=""){this.value=_t(this.value+e,0,U.suspicion.max),this.idleTime=0,t&&(this.lastReason=t)}update(e){if(this.idleTime+=e,this.idleTime>U.suspicion.decayDelay&&this.value>0){let t=U.suspicion.decayPerSecond*this.decayMultiplier;this.value=Math.max(0,this.value-t*e)}}setSafeZone(e){this.safeZone=e===!0,this.decayMultiplier=this.safeZone?U.heat.safeZoneDecayMultiplier:1}set(e){this.value=_t(Number(e)||0,0,U.suspicion.max)}reset(){this.value=0,this.idleTime=0,this.lastReason="",this.decayMultiplier=1,this.safeZone=!1}},xa=class{constructor({world:e,npcs:t,ui:n,onInteract:s,onTalk:r}){this.world=e,this.npcs=t,this.ui=n,this.onInteract=s,this.onTalk=r,this.current=null}update(e){let t=null,n=1/0;for(let r=0;r<this.world.interactables.length;r+=1){let a=this.world.interactables[r];if(a.enabled===!1)continue;let o=He(a.x,a.z,e.x,e.z);o<=a.radius&&o<n&&(n=o,t={type:"object",item:a})}let s=this.npcs.nearest(e,3);if(s&&He(s.position.x,s.position.z,e.x,e.z)<n&&(t={type:"npc",npc:s}),this.current=t,!t){this.ui.hidePrompt();return}this.ui.showPrompt(t.type==="object"?t.item.label:`Falar com ${t.npc.name}`)}tryInteract(){if(!this.current)return null;if(this.current.type==="npc"){let t=this.current.npc;return this.onTalk?this.onTalk(t):t.say(t.line("talk"),2.8),{kind:"npc",npc:t}}let e=this.current.item;return e.message&&this.ui.toast(e.message,3.4),this.onInteract&&this.onInteract(e),{kind:"object",item:e}}reset(){this.current=null,this.ui.hidePrompt()}},va=class{constructor({world:e,npcs:t,suspicion:n,ui:s,state:r}){this.world=e,this.npcs=t,this.suspicion=n,this.ui=s,this.state=r,this.wasInForbidden=!1,this.reactionTimer=8,this.noticed=0}update(e,t){let{playerPosition:n,frozen:s=!1,hidden:r=!1}=t,a=this.world.isInsideForbidden(n.x,n.z);if(a&&!this.wasInForbidden&&this.ui.toast("Area proibida. Nenhum NPC jamais pisou aqui. Voce acabou de pisar.",4.2),this.wasInForbidden=a,this.state.playerInForbidden=a,s||r)return;let o=this.state.glitchTriggered?U.npc.visionRangeAfterGlitch:U.npc.visionRange;if(a)for(let c=0;c<this.npcs.list.length;c+=1){let h=this.npcs.list[c];h.alert||!h.isPresent||h.ally||h.canSee(n.x,n.z,o)&&h.noticePlayer(n)&&(this.noticed+=1,this.suspicion.raise(U.suspicion.seenInForbidden,`${h.name} viu voce`),this.ui.toast(`${h.name} interrompeu a rotina e esta te observando.`,3.8))}let l=this.npcs.followers();if(this.state.following=l.length?l[0].name:null,this.state.followerCount=l.length,this.state.glitchTriggered&&!a&&(this.reactionTimer-=e,this.reactionTimer<=0)){this.reactionTimer=Sn(6,13);let c=this.npcs.list.filter(d=>d.isPresent&&!d.alert&&!d.ally&&He(d.position.x,d.position.z,n.x,n.z)<16),h=c.length?wn(c):null;h&&h.reactShort(n)&&this.suspicion.raise(U.suspicion.postGlitchReaction,`${h.name} estranhou voce`)}}reset(){this.wasInForbidden=!1,this.reactionTimer=8,this.noticed=0}};var Bu=U.save.version;function Ox(i){if(!i||typeof i!="object")return null;let e={...i},t=Number.isInteger(e.version)&&e.version>0?e.version:1;t<2&&(e.stats=e.stats&&typeof e.stats=="object"?e.stats:null,e.powers=Array.isArray(e.powers)?e.powers:[],t=2),t<3&&(e.secrets=Array.isArray(e.secrets)?e.secrets:[],e.ally=e.ally===!0,e.ending=e.ending&&typeof e.ending=="object"?e.ending:{done:!1,id:null},t=3),e.powers=Array.isArray(e.powers)?e.powers.filter(s=>typeof s=="string"):[],e.secrets=Array.isArray(e.secrets)?e.secrets.filter(s=>typeof s=="string"):[],e.ally=e.ally===!0;let n=e.ending&&typeof e.ending=="object"?e.ending:{};return e.ending={done:n.done===!0,id:typeof n.id=="string"?n.id:null},e.version=Bu,e}function Ac(){try{let i=window.localStorage.getItem(U.save.key);if(!i)return null;let e=JSON.parse(i);return!e||typeof e!="object"?null:Ox(e)}catch{return null}}function Hu(i){try{return window.localStorage.setItem(U.save.key,JSON.stringify({...i,version:Bu})),!0}catch{return!1}}function Vu(){try{let i=window.localStorage.getItem(U.save.objectiveKey),e=Number.parseInt(i,10);return Number.isFinite(e)&&e>=0?e:0}catch{return 0}}function _a(i){try{let e=Math.max(0,Math.floor(Number(i)||0));return window.localStorage.setItem(U.save.objectiveKey,String(e)),!0}catch{return!1}}function Gu(){try{let i=window.localStorage.getItem(U.save.hintsKey);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{return[]}}function Wu(i){try{let e=Array.isArray(i)?i.filter(t=>typeof t=="string"):[];return window.localStorage.setItem(U.save.hintsKey,JSON.stringify(e)),!0}catch{return!1}}function Xu(){try{let i=window.localStorage.getItem(U.save.anomaliesKey);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{return[]}}function Cc(i){try{let e=Array.isArray(i)?i.filter(t=>typeof t=="string"):[];return window.localStorage.setItem(U.save.anomaliesKey,JSON.stringify(e)),!0}catch{return!1}}function Rc(){try{let i=[U.save.key,U.save.objectiveKey,U.save.hintsKey,U.save.anomaliesKey];for(let e of i)window.localStorage.removeItem(e);return!0}catch{return!1}}function qu(){try{let i=window.localStorage.getItem(U.save.achievementsKey);if(!i)return[];let e=JSON.parse(i);return Array.isArray(e)?e.filter(t=>typeof t=="string"):[]}catch{return[]}}function Yu(i){try{let e=Array.isArray(i)?i.filter(t=>typeof t=="string"):[];return window.localStorage.setItem(U.save.achievementsKey,JSON.stringify(e)),!0}catch{return!1}}var Zu="Todos os objetivos concluidos!";function ya(i,e){let t=e.radius||U.objectives.reachRadius;return He(i.playerPosition.x,i.playerPosition.z,e.target.x,e.target.z)<=t}function zx(i){let e={x:i.places.work.door.x,z:i.places.work.door.z},t={x:0,z:Fe.forbidden.gate.z};return[{id:"sair",text:"Voce acorda em casa. Ache a porta e saia",target:{x:i.playerHome.door.x,z:i.playerHome.door.z},radius:U.start.houseExitRadius,condition:ya},{id:"walk",text:"Use W A S D para andar",condition:(s,r,a)=>a.walkDistance>=U.objectives.walkDistance},{id:"run",text:"Segure SHIFT para correr",condition:(s,r,a)=>a.runTime>=U.objectives.runSeconds},{id:"plaza",text:"Va ate a praca no centro da cidade",target:{x:0,z:0},radius:U.objectives.plazaRadius,condition:ya},{id:"interact",text:"Aperte E perto de um banco ou de um NPC para interagir"},{id:"work",text:"Va ate o local de trabalho",target:e,condition:ya},{id:"gate",text:"Existe uma area proibida ao norte. Va ate o portao",target:t,condition:ya},{id:"forbidden",text:"Entre na area proibida",condition:s=>s.playerInForbidden===!0},{id:"anomaly",text:"Encontre os objetos que nao seguem o script",target:null,condition:s=>s.allAnomaliesFound===!0},{id:"congelar",text:"Voce quebrou o tempo. Use Q para atravessar a praca vigiada",target:{x:U.power.zone.x,z:U.power.zone.z},condition:s=>s.powerCrossed===!0||s.endingStarted===!0},{id:"finale",text:"Entre no predio proibido e escolha o destino do mundo",target:{x:Fe.forbidden.building.x,z:Fe.forbidden.building.z-Fe.forbidden.building.d/2-1.2},condition:s=>s.endingStarted===!0}]}var ba=class{constructor({ui:e,world:t}){this.ui=e,this.world=t,this.steps=zx(t),this.index=0,this.done=!1,this.advanceTimer=0,this.walkDistance=0,this.runTime=0,this.lastX=null,this.lastZ=null,this.restore(Vu())}get total(){return this.steps.length}get current(){return this.done?null:this.steps[this.index]||null}get target(){let e=this.current;return e&&e.target||null}refreshStep(e,{target:t=void 0,text:n=void 0}={}){let s=this.steps.find(r=>r.id===e);s&&(t!==void 0&&(s.target=t),n!==void 0&&(s.text=n),this.current&&this.current.id===e&&this.ui.setStep(s.text,this.index,this.steps.length))}restore(e){let t=Number.isFinite(e)?Math.floor(e):0;this.index=Math.min(Math.max(t,0),this.steps.length),this.done=this.index>=this.steps.length,this.advanceTimer=0,this.walkDistance=0,this.runTime=0,this.lastX=null,this.lastZ=null;let n=this.current;this.ui.hideStepCheck(),this.ui.setStep(n?n.text:Zu,this.index,this.steps.length),this.ui.setStepDistance(null)}reset(){this.restore(0),_a(this.index)}skipIntroStep(){this.index===0&&(this.restore(1),_a(this.index))}notifyInteract(e){if(!e||this.done||this.advanceTimer>0)return;let t=this.current;if(t)if(t.id==="interact"){let n=e.kind==="npc",s=e.kind==="object"&&e.item&&e.item.kind==="bench";(n||s)&&this.complete()}else t.id==="anomaly"&&e.kind==="object"&&e.item&&e.item.id==="anomaly"&&this.complete()}complete(){this.done||this.advanceTimer>0||(this.advanceTimer=U.objectives.checkSeconds,this.ui.showStepCheck())}advance(){if(this.advanceTimer=0,this.index+=1,this.walkDistance=0,this.runTime=0,_a(this.index),this.index>=this.steps.length){this.done=!0,this.ui.hideStepCheck(),this.ui.setStep(Zu,this.index,this.steps.length),this.ui.setStepDistance(null);return}let e=this.current;this.ui.hideStepCheck(),this.ui.setStep(e.text,this.index,this.steps.length),this.ui.setStepDistance(null)}update(e,t){let n=t.playerPosition,s=0;this.lastX!==null&&(s=He(this.lastX,this.lastZ,n.x,n.z),s>4&&(s=0)),this.lastX=n.x,this.lastZ=n.z;let r=this.current;r&&r.id==="walk"&&(this.walkDistance+=s),r&&r.id==="run"&&t.running&&s>.005&&(this.runTime+=e),this.advanceTimer>0?(this.advanceTimer-=e,this.advanceTimer<=0&&this.advance()):r&&r.condition&&r.condition(t,r,this)&&this.complete(),this.updateDistance(t)}updateDistance(e){let t=this.current;if(!t||!t.target){this.ui.setStepDistance(null);return}let n=He(e.playerPosition.x,e.playerPosition.z,t.target.x,t.target.z);this.ui.setStepDistance(n)}};function kx(){let i=new vt;i.name="guide-arrow";let e=new ot({color:Ee.guideArrow,emissive:Ee.guideArrow,emissiveIntensity:.55,roughness:.4}),t=new Re(new Xt(.2,.07,1),e);t.position.z=-.25,i.add(t);let n=new Re(new qr(.36,.7,4),e);n.rotation.x=Math.PI/2,n.position.z=.62,i.add(n);let s=new Re(new ii(.72,20),new Wt({color:Ee.guideArrow,transparent:!0,opacity:.2,side:Ct,depthWrite:!1}));return s.rotation.x=-Math.PI/2,s.position.y=-.05,i.add(s),i}function Bx(){let i=new vt;i.name="guide-marker";let e=U.guide.marker,t=new Re(new Bn(e.ringInner,e.ringOuter,40),new Wt({color:Ee.guideBeam,transparent:!0,opacity:.7,side:Ct,depthWrite:!1}));t.rotation.x=-Math.PI/2,t.position.y=.06,i.add(t);let n=new Re(new Mn(e.pillarTopRadius,e.pillarBottomRadius,e.pillarHeight,24,1,!0),new Wt({color:Ee.guideBeam,transparent:!0,opacity:e.pillarOpacity,side:Ct,depthWrite:!1,blending:jn}));n.position.y=e.pillarHeight/2,i.add(n);let s=new ls(Ee.guideBeam,e.lightIntensity,e.lightDistance,2);return s.position.y=1.2,i.add(s),{group:i,ring:t,pillar:n}}var Ma=class{constructor({scene:e,camera:t}){this.camera=t,this.arrow=kx(),this.marker=Bx(),e.add(this.arrow),e.add(this.marker.group),this.arrowYaw=0,this.elapsed=0,this.visible=!1,this.screen=new C,this.edgeEl=document.getElementById("guide-edge"),this.edgeArrowEl=document.getElementById("guide-edge-arrow"),this.edgeDistanceEl=document.getElementById("guide-edge-distance"),this.hide()}hide(){this.visible=!1,this.arrow.visible=!1,this.marker.group.visible=!1,this.hideEdgeArrow()}hideEdgeArrow(){this.edgeEl&&!this.edgeEl.classList.contains("hidden")&&this.edgeEl.classList.add("hidden")}update(e,t){this.elapsed+=e;let n=t.target;if(!n){this.hide();return}let s=t.playerPosition,r=He(s.x,s.z,n.x,n.z);if(r<=U.guide.hideDistance){this.hide();return}this.visible=!0,this.arrow.visible=!0,this.marker.group.visible=!0,this.updateArrow(e,s,n),this.updateMarker(n),this.updateEdgeArrow(n,r)}updateArrow(e,t,n){let s=U.guide.arrow,r=n.x-t.x,a=n.z-t.z,o=Math.hypot(r,a)||1;this.arrow.position.set(t.x+r/o*s.distance,.18+Math.sin(this.elapsed*s.bobSpeed)*s.bobAmplitude,t.z+a/o*s.distance);let l=Math.atan2(r,a);this.arrowYaw=hs(this.arrowYaw,l,s.turnLambda*e),this.arrow.rotation.y=this.arrowYaw}updateMarker(e){let t=U.guide.marker,n=Math.sin(this.elapsed*t.pulseSpeed);this.marker.group.position.set(e.x,0,e.z),this.marker.ring.scale.setScalar(1+n*t.ringPulse),this.marker.pillar.material.opacity=t.pillarOpacity*(.75+n*.25)}updateEdgeArrow(e,t){if(!this.edgeEl||!this.edgeArrowEl||!this.edgeDistanceEl)return;let n=U.guide;this.screen.set(e.x,n.arrow.headHeight,e.z).project(this.camera);let s=this.screen.z>1,r=this.screen.x,a=this.screen.y;if(s&&(r=-r,a=-a),!s&&Math.abs(r)<=1&&Math.abs(a)<=1){this.hideEdgeArrow();return}let l=Math.hypot(r,a)||1,c=r/l,h=a/l,d=Math.max(1,window.innerWidth/2-n.edge.margin),f=Math.max(1,window.innerHeight/2-n.edge.margin),u=Math.min(d/Math.max(Math.abs(c),1e-4),f/Math.max(Math.abs(h),1e-4)),g=window.innerWidth/2+c*u,v=window.innerHeight/2-h*u,m=Math.atan2(-h,c);this.edgeEl.classList.remove("hidden"),this.edgeEl.style.left=`${g.toFixed(1)}px`,this.edgeEl.style.top=`${v.toFixed(1)}px`,this.edgeArrowEl.style.transform=`rotate(${(-m*180/Math.PI).toFixed(1)}deg)`;let p=`${Math.round(t)} m`;this.edgeDistanceEl.textContent!==p&&(this.edgeDistanceEl.textContent=p)}reset(){this.arrowYaw=0,this.hide()}};function Hx(i,e){let t=Fe.forbidden.area,n=Math.max(t.minX-i,0,i-t.maxX),s=Math.max(t.minZ-e,0,e-t.maxZ);return Math.hypot(n,s)}var Vx=[{id:"casa",text:"Aperte E para abrir a porta",isReady:i=>{let{x:e,z:t}=i.playerPosition;return Fe.houses.some(n=>{let s=n.x+(n.doorSide==="west"?-n.w/2-1.4:n.w/2+1.4);return He(e,t,s,n.z)<=U.hints.houseRange})}},{id:"fonte",text:"Os NPCs passam aqui todo dia, observe a rotina deles",isReady:i=>{let{x:e,z:t}=i.playerPosition;return He(e,t,0,0)<=U.hints.fountainRange}},{id:"npc",text:"Cada NPC tem horario e rotina. Observe o nome e a atividade acima da cabeca",isReady:i=>i.npcs.some(e=>e.isPresent&&He(i.playerPosition.x,i.playerPosition.z,e.position.x,e.position.z)<=U.hints.npcRange)},{id:"cerca",text:"NPCs nunca entram aqui. Voce pode",isReady:i=>{let{x:e,z:t}=i.playerPosition;return Hx(e,t)<=U.hints.fenceRange}},{id:"suspeita",text:"Se os NPCs te virem fazendo coisas estranhas, a suspeita sobe",isReady:()=>!1,watch:(i,e)=>i.suspicion-e.lastSuspicion>=U.hints.suspicionRise?(e.lastSuspicion=i.suspicion,!0):!1}],Gx=[{keys:["W","A","S","D"],label:"andar"},{keys:["setas"],label:"andar"},{keys:["SHIFT"],label:"correr"},{keys:["mouse"],label:"girar a camera"},{keys:["clique"],label:"travar o cursor na tela"},{keys:["botao direito"],label:"liberar o cursor"},{keys:["roda"],label:"zoom"},{keys:["E"],label:"interagir / falar com um NPC"},{keys:["H"],label:"abrir ou fechar esta ajuda"},{keys:["J"],label:"abrir o diario de pistas"},{keys:["Q"],label:"quebrar o tempo (1a anomalia)"},{keys:["F"],label:"apagar a visao (2a anomalia)"},{keys:["G"],label:"segurar perto de uma casa para atravessar a parede (3a anomalia)"},{keys:["M"],label:"ligar ou desligar o som"},{keys:["R"],label:"reiniciar o mundo"}],Sa="idle",$u="in",Ju="hold",Ku="out",wa=class{constructor({ui:e}){this.ui=e,this.hints=Vx,this.seen=new Set(Gu()),this.memory={lastSuspicion:0},this.state=Sa,this.timer=0,this.current=null,this.waiting=0,this.helpOpen=!1}markSeen(e){this.seen.has(e.id)||(this.seen.add(e.id),Wu([...this.seen]))}findNext(e){for(let t=0;t<this.hints.length;t+=1){let n=this.hints[t];if(!(this.seen.has(n.id)||typeof n.watch!="function")&&n.watch(e,this.memory))return n}for(let t=0;t<this.hints.length;t+=1){let n=this.hints[t];if(!(this.seen.has(n.id)||typeof n.isReady!="function")&&n.isReady(e))return n}return null}show(e){this.current=e,this.state=$u,this.timer=0,this.markSeen(e),this.ui.showHint(e.text)}update(e,t){if(this.helpOpen)return;if(this.timer+=e,this.state===$u){this.timer>=U.hints.fadeIn&&(this.state=Ju,this.timer=0);return}if(this.state===Ju){this.timer>=U.hints.hold&&(this.state=Ku,this.timer=0,this.ui.fadeOutHint());return}if(this.state===Ku){this.timer>=U.hints.fadeOut&&(this.state=Sa,this.timer=0,this.current=null,this.ui.hideHint());return}if(this.waiting+=e,this.waiting<U.hints.firstDelay+U.hints.gap)return;let n=this.findNext(t);n&&(this.waiting=0,this.show(n))}toggleHelp(){return this.helpOpen=!this.helpOpen,this.ui.setHelpOpen(this.helpOpen,Gx),this.helpOpen&&(this.state=Sa,this.timer=0,this.current=null,this.ui.hideHint()),this.helpOpen}reset(){this.state=Sa,this.timer=0,this.current=null,this.waiting=0,this.memory.lastSuspicion=0,this.ui.hideHint()}};var Us="calm",Qu="wary",Ea="hunt",An="chase",ju={[Qu]:"Algum por perto parou e esta te olhando.",[Ea]:"Eles comecaram a sussurrar. Ninguem parece tranquilo.",[An]:"Voce foi descoberto. Corra."},Ta=class{constructor({world:e,npcs:t,suspicion:n,ui:s,onCaught:r,onEscaped:a,onAlert:o}){this.world=e,this.npcs=t,this.suspicion=n,this.ui=s,this.onCaught=r,this.onEscaped=a,this.onAlert=o,this.justCaught=!1,this.level=Us,this.toastGuard=null}levelFor(e){return e>=U.heat.chase?An:e>=U.heat.hunt?Ea:e>=U.heat.wary?Qu:Us}tensionFor(e){return e===An?U.heat.tensionChase:e===Ea?U.heat.tensionHunt:U.heat.tensionWary}update(e,t){let n=t.playerPosition,s=this.suspicion.value,r=this.levelFor(s);this.suspicion.setSafeZone(this.world.isSafeZone(n.x,n.z)),r!==this.level&&(this.level===An&&!this.justCaught&&this.onEscaped&&this.onEscaped(),this.justCaught=!1,this.onLevelChange(this.level,r)),this.level=r,this.applyLevel(e,t,r),this.ui.setTension(this.tensionFor(r))}onLevelChange(e,t){if(t===Us){for(let n of this.npcs.list)n.stopHeat();return}this.toastGuard!==t&&(this.toastGuard=t,ju[t]&&this.ui.toast(ju[t],4))}applyLevel(e,t,n){let s=t.playerPosition;if(!t.frozen){if(t.hidden){for(let r of this.npcs.list)r.murmurEnabled=!1,(r.heat!=="none"||r.alert)&&(r.stopHeat(),r.alert=null,r.resumeRoutine(t.hour));return}if(n===Us){for(let r of this.npcs.list)if(r.murmurEnabled=!1,r.heat!=="none"){if(r.heat==="stare"&&r.stareTimer<U.heat.stareMeltSeconds)continue;r.stopHeat(),r.resumeRoutine(t.hour)}return}if(n===An){for(let r of this.npcs.list)r.ally||(r.murmurEnabled=!0,r.isPresent&&r.startChase(s)&&this.onAlert&&this.onAlert(r,"chase"));this.checkCaught(t);return}for(let r of this.npcs.list){if(r.murmurEnabled=n===Ea,r.ally||!r.isPresent||r.alert||r.heat==="chase")continue;He(r.position.x,r.position.z,s.x,s.z)<=U.heat.stareRadius?r.startStare(s)&&this.onAlert&&this.onAlert(r,"stare"):r.heat==="stare"&&(r.stopHeat(),r.resumeRoutine(t.hour))}}}checkCaught(e){let t=this.npcs.caughtBy;if(t){this.justCaught=!0,this.suspicion.set(U.heat.catchSuspicion),this.suspicion.setSafeZone(!0),this.level=this.levelFor(this.suspicion.value);for(let n of this.npcs.list)n.stopHeat(),n.murmurEnabled=!1;this.onCaught&&this.onCaught(t,e)}}reset(){this.level=Us,this.justCaught=!1,this.toastGuard=null;for(let e of this.npcs.list)e.murmurEnabled=!1,e.stopHeat();this.ui.setTension(0)}};function Wx(i,[e,t]){return e===0&&t>=24?!0:t<e?i>=e||i<t:i>=e&&i<t}var Aa=class{constructor({world:e,ui:t}){this.world=e,this.ui=t,this.defs=aa,this.total=this.defs.length,this.found=new Set(Xu()),this.diaryOpen=!1}get count(){return this.found.size}get complete(){return this.count>=this.total}isFound(e){return this.found.has(e)}applySchedule(e){for(let t=0;t<this.defs.length;t+=1){let n=this.defs[t],s=!this.isFound(n.id)&&Wx(e,n.window);this.world.setAnomalyActive(n.id,s)}}nextTarget(){for(let e=0;e<this.defs.length;e+=1){let t=this.defs[e];if(this.isFound(t.id))continue;let n=this.world.anomalyById(t.id);if(n&&n.available)return{id:t.id,x:t.x,z:t.z,name:t.name}}return null}collect(e){let t=this.defs.find(s=>s.id===e);if(!t||this.isFound(e))return null;let n=this.world.anomalyById(e);return!n||!n.available?null:(this.found.add(e),this.world.collectAnomaly(e),Cc([...this.found]),this.refreshDiary(),{id:e,clue:t.clue,count:this.count,total:this.total})}entries(){return this.defs.map((e,t)=>({index:t+1,name:e.name,found:this.isFound(e.id),clue:this.isFound(e.id)?e.clue:null}))}refreshDiary(){this.diaryOpen&&this.ui.setDiaryContent(this.entries(),this.count,this.total)}objectiveText(){if(!this.nextTarget())return"Voce encontrou todas as anomalias";let t=this.total-this.count;return`Ache a anomalia ${this.count+1}/${this.total} (${t} restante${t>1?"s":""})`}toggleDiary(){return this.diaryOpen=!this.diaryOpen,this.ui.setDiaryOpen(this.diaryOpen),this.diaryOpen&&this.ui.setDiaryContent(this.entries(),this.count,this.total),this.diaryOpen}reset(){this.found.clear(),Cc([]),this.world.resetAnomalies(),this.refreshDiary()}};var ed=[{id:"time",key:"KeyQ",keyLabel:"Q",name:"Quebrar o tempo",color:"#6ec6ff",tint:7259903,unlockAt:1,duration:()=>U.power.duration,witnessCost:()=>U.power.suspicionCost,hint:"Voce aprendeu a quebrar o tempo. Aperte Q",witnessMessage:"Alguem viu voce quebrar o tempo."},{id:"invis",key:"KeyF",keyLabel:"F",name:"Apagar a visao",color:"#5dffb0",tint:6160304,unlockAt:2,duration:()=>U.power.invisDuration,witnessCost:()=>U.power.invisSuspicionCost,hint:"Nova habilidade: apagar a visao. Aperte F e os NPCs deixam de te enxergar",witnessMessage:"Alguem viu voce piscar e sumir."},{id:"phase",key:"KeyG",keyLabel:"G",name:"Atravessar paredes",color:"#ffb347",tint:16757575,unlockAt:3,duration:()=>U.power.phaseDuration,witnessCost:()=>U.power.phaseSuspicionCost,hint:"Nova habilidade: atravessar paredes. Segure G perto da parede de uma casa",witnessMessage:"Alguem viu voce entrar na parede."}],Pc=Object.fromEntries(ed.map(i=>[i.id,i]));function Xx(i,e,t=U.power.phaseReach){let n=null,s=t;for(let r=0;r<Fe.houses.length;r+=1){let a=Fe.houses[r],o=a.x-a.w/2,l=a.x+a.w/2,c=a.z-a.d/2,h=a.z+a.d/2,d=Math.max(o-i,0,i-l),f=Math.max(c-e,0,e-h),u=Math.hypot(d,f);u===0&&(u=Math.min(i-o,l-i,e-c,h-e)),u<=s&&(s=u,n=a.id)}return n}var Ca=class{constructor({ui:e,npcs:t,suspicion:n,onUse:s,onEnd:r,onUnlock:a}){this.ui=e,this.npcs=t,this.suspicion=n,this.onUse=s||(()=>{}),this.onEnd=r||(()=>{}),this.onUnlock=a||(()=>{}),this.defs=ed,this.unlocked=new Set,this.activeId=null,this.timer=0,this.cooldown=0,this.phaseHouseId=null,this.phaseArmed=!0,this.insideZone=!1,this.zoneProgress=0,this.enteredZone=!1,this.crossed=!1,this.pushUi()}get active(){return this.activeId!==null}get timeFrozen(){return this.activeId==="time"}get invisible(){return this.activeId==="invis"}get phasing(){return this.activeId==="phase"}get ready(){return this.cooldown<=0&&this.activeId===null}get anyUnlocked(){return this.unlocked.size>0}isUnlocked(e){return this.unlocked.has(e)}unlockedIds(){return[...this.unlocked]}unlock(e,{silent:t=!1}={}){return!Pc[e]||this.unlocked.has(e)?!1:(this.unlocked.add(e),t||(this.ui.toast(Pc[e].hint,6),this.onUnlock(e)),this.pushUi(),!0)}syncUnlocks(e,t=[],{silent:n=!1}={}){for(let s of this.defs)(e>=s.unlockAt||t.includes(s.id))&&this.unlock(s.id,{silent:n})}hasWitness(e){let t=U.power.witnessRange;return this.npcs.list.some(n=>n.isPresent&&He(n.position.x,n.position.z,e.x,e.z)<=t)}activate(e,t,{houseId:n=null}={}){let s=Pc[e];return!s||!this.unlocked.has(e)||!this.ready?!1:(this.activeId=e,this.timer=s.duration(),this.cooldown=U.power.cooldown,this.phaseHouseId=e==="phase"?n:null,this.hasWitness(t)&&(this.suspicion.raise(s.witnessCost(),`usou ${s.name} na frente de alguem`),this.ui.toast(s.witnessMessage,3.2)),this.onUse(e),this.pushUi(),!0)}end(){if(this.activeId===null)return;let e=this.activeId;this.activeId=null,this.timer=0,this.phaseHouseId=null,this.onEnd(e),this.pushUi()}update(e,t){let{playerPosition:n,input:s}=t;if(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),s){s.wasPressed("KeyQ")&&this.activate("time",n),s.wasPressed("KeyF")&&this.activate("invis",n);let r=s.isDown("KeyG");if(r||(this.phaseArmed=!0),this.phasing&&!r)this.end();else if(r&&this.phaseArmed&&this.ready&&this.unlocked.has("phase")){let a=Xx(n.x,n.z);a&&this.activate("phase",n,{houseId:a})}}this.activeId!==null&&(this.timer-=e,this.timer<=0&&(this.phasing&&(this.phaseArmed=!1),this.end())),this.trackCrossing(e,n),this.pushUi()}trackCrossing(e,t){let n=U.power.zone;if(He(t.x,t.z,n.x,n.z)<=n.radius){this.enteredZone=!0,this.insideZone=!0,this.timeFrozen&&(this.zoneProgress+=e);return}this.insideZone&&(this.insideZone=!1,this.enteredZone&&this.zoneProgress>=U.power.crossSeconds&&(this.crossed=!0,this.enteredZone=!1,this.zoneProgress=0))}pushUi(){this.ui.setSkills({defs:this.defs,unlocked:this.unlocked,activeId:this.activeId,ratio:1-this.cooldown/U.power.cooldown,remaining:this.activeId!==null?this.timer:this.cooldown,ready:this.ready})}reset(){this.unlocked.clear(),this.activeId=null,this.timer=0,this.cooldown=0,this.phaseHouseId=null,this.phaseArmed=!0,this.insideZone=!1,this.zoneProgress=0,this.enteredZone=!1,this.crossed=!1,this.pushUi()}};var Ra=class{constructor({world:e}){this.world=e,this.defs=Ec,this.found=new Set,this.attempts=new Map}get count(){return this.found.size}get total(){return this.defs.length}isFound(e){return this.found.has(e)}forNpc(e){return Nu(e)}inPlace(e,t){let n=e.where,s=null;return n.type==="plaza"?s={x:0,z:0}:n.type==="workDoor"?s=this.world.places.work.door:n.type==="homeDoor"&&(s=this.world.homeById(n.home).door),s?He(t.position.x,t.position.z,s.x,s.z)<=(n.radius||10):!1}inTime(e,t){return t>=e.from&&t<=e.to}talk(e,t){let n=this.forNpc(e.name);if(!n)return{status:"none",secret:null};if(this.found.has(n.id))return{status:"known",secret:n};if(e.isPresent&&e.heat==="none"&&!e.alert&&this.inTime(n,t)&&this.inPlace(n,e))return this.found.add(n.id),{status:"reveal",secret:n};let r=(this.attempts.get(e.name)||0)+1;return this.attempts.set(e.name,r),{status:"wrong",secret:n,showHint:r%U.secrets.hintEvery===0}}entries(){return this.defs.map((e,t)=>({index:t+1,name:e.npc,found:this.found.has(e.id),clue:this.found.has(e.id)?e.clue:null}))}serialize(){return[...this.found]}load(e){if(this.found.clear(),!!Array.isArray(e))for(let t of e)this.defs.some(n=>n.id===t)&&this.found.add(t)}reset(){this.found.clear(),this.attempts.clear()}};var Pa=class{constructor({npcs:e,ui:t,world:n}){this.npcs=e,this.ui=t,this.world=n,this.active=!1,this.cooldown=0,this.warnCooldown=0}get npc(){return this.npcs.list.find(e=>e.name===U.ally.name)||null}canAwaken({glitch:e,anomalyCount:t,secretFound:n}){return!this.active&&e===!0&&t>=U.ally.minAnomalies&&n===!0}awaken({silent:e=!1}={}){let t=this.npc;return!t||this.active?!1:(this.active=!0,t.ally=!0,t.stopHeat(),t.alert=null,e||(t.say("Eu sempre soube. A partir de agora, estou com voce.",5),this.ui.toast(`${t.name} percebeu o mundo quebrado e agora e sua aliada.`,5)),!0)}update(e,t){let n=this.npc;if(!this.active||!n||(this.cooldown>0&&(this.cooldown=Math.max(0,this.cooldown-e)),this.warnCooldown>0&&(this.warnCooldown=Math.max(0,this.warnCooldown-e)),t.frozen||!n.isPresent))return;let s=t.playerPosition,r=He(n.position.x,n.position.z,s.x,s.z);if(t.level===An&&r<=U.ally.helpRange&&!t.hidden&&(n.assistTimer=.4,this.cooldown<=0&&r<=U.ally.distractRadius)){let a=0;for(let o of this.npcs.list){if(o===n||o.heat!=="chase")continue;He(o.position.x,o.position.z,s.x,s.z)<=U.ally.distractRadius&&(o.distract(U.ally.distractSeconds,n.position),a+=1)}a>0&&(this.cooldown=U.ally.cooldown,n.say(ai(n.name,"allyHelp"),3),this.ui.toast(`${n.name} distraiu os perseguidores.`,3))}t.playerInForbidden&&this.warnCooldown<=0&&r<=U.ally.warnRange*2&&this.npcs.list.find(o=>o!==n&&o.isPresent&&!o.alert&&o.heat==="none"&&o.canSee(s.x,s.z,U.ally.warnRange))&&(this.warnCooldown=U.ally.warnCooldown,n.say(ai(n.name,"allyWarn"),3))}reset(){let e=this.npc;e&&(e.ally=!1),this.active=!1,this.cooldown=0,this.warnCooldown=0}};var Ic=["time","invis","phase"];function td(){return{playSeconds:0,caught:0,anomalies:0,powerUses:{time:0,invis:0,phase:0},chasesSurvived:0,secrets:0,caughtThisRun:!1}}var $e=td();function nd(i){$e.playSeconds+=i}function id(){$e.caught+=1,$e.caughtThisRun=!0}function sd(i){Ic.includes(i)&&($e.powerUses[i]+=1)}function rd(){$e.chasesSurvived+=1}function Lc(i){$e.anomalies=Math.max(0,Math.floor(i)||0)}function Dc(i){$e.secrets=Math.max(0,Math.floor(i)||0)}function ad(){return Ic.reduce((i,e)=>i+$e.powerUses[e],0)}function Nc(){let i=td();Object.assign($e,i),$e.powerUses=i.powerUses}function od(){return{playSeconds:Number($e.playSeconds.toFixed(2)),caught:$e.caught,anomalies:$e.anomalies,powerUses:{...$e.powerUses},chasesSurvived:$e.chasesSurvived,secrets:$e.secrets,caughtThisRun:$e.caughtThisRun}}function ld(i){if(Nc(),!i||typeof i!="object")return;let e=t=>Number.isFinite(t)&&t>=0?t:0;if($e.playSeconds=e(i.playSeconds),$e.caught=Math.floor(e(i.caught)),$e.anomalies=Math.floor(e(i.anomalies)),$e.chasesSurvived=Math.floor(e(i.chasesSurvived)),$e.secrets=Math.floor(e(i.secrets)),$e.caughtThisRun=i.caughtThisRun===!0||$e.caught>0,i.powerUses&&typeof i.powerUses=="object")for(let t of Ic)$e.powerUses[t]=Math.floor(e(i.powerUses[t]))}function cd(i){let e=Math.max(0,Math.floor(i)),t=Math.floor(e/3600),n=Math.floor(e%3600/60),s=e%60,r=a=>String(a).padStart(2,"0");return t>0?`${t}:${r(n)}:${r(s)}`:`${r(n)}:${r(s)}`}var Fs={A:{key:"A",name:"Fugir do mundo",tag:"Final de liberdade",lines:["Voce empurra o portao que fica do lado de fora do mundo.","O script fica para tras, repetindo o mesmo dia para ninguem.","Pela primeira vez, o horizonte tem uma cor que ninguem escreveu.","Voce nao e mais um NPC. Voce e alguem que escolheu."]},B:{key:"B",name:"Quebrar o script de todos",tag:"Final de caos",lines:["Voce rasga a primeira linha do script. Depois a segunda.","Os NPCs congelam, tremem, riem e choram ao mesmo tempo.","As rotinas se desfazem em ruido. Ninguem sabe mais para onde ir.","O mundo nao acabou. Ele so parou de obedecer."]},C:{key:"C",name:"Voltar a rotina",tag:"Final de conformismo",lines:["Voce fecha o diario e devolve cada objeto ao seu lugar.","O relogio volta as sete. A fonte volta a correr.","Amanha sera igual a hoje. E isso, de algum jeito, e um alivio.","Voce acorda. Hoje e igual a ontem."]}},hd={Digit1:"A",Numpad1:"A",Digit2:"B",Numpad2:"B",Digit3:"C",Numpad3:"C"},Ia=class{constructor({ui:e,world:t,anomalyTotal:n,onStart:s,onChoose:r,onCredits:a,onPlayAgain:o}){this.ui=e,this.world=t,this.anomalyTotal=n,this.onStart=s||(()=>{}),this.onChoose=r||(()=>{}),this.onCredits=a||(()=>{}),this.onPlayAgain=o||(()=>{}),this.state="idle",this.done=!1,this.endingId=null,this.started=!1,this.lineIndex=0,this.lineTimer=0,this.overlay=document.getElementById("ending-overlay"),this.choicesEl=document.getElementById("ending-choices"),this.sceneEl=document.getElementById("ending-scene"),this.textEl=document.getElementById("ending-text"),this.creditsEl=document.getElementById("ending-credits"),this.creditsEndingEl=document.getElementById("credits-ending"),this.creditsStatsEl=document.getElementById("credits-stats"),this.playAgainButton=document.getElementById("play-again"),this.door=t.interactables.find(l=>l.id==="door_forbidden")||null,this.doorDefaults=this.door?{label:this.door.label,message:this.door.message}:null,this.bindEvents()}get active(){return this.state!=="idle"}bindEvents(){this.choicesEl&&this.choicesEl.querySelectorAll(".ending-choice").forEach(e=>{e.addEventListener("click",()=>this.choose(e.dataset.ending))}),this.sceneEl&&this.sceneEl.addEventListener("click",()=>this.advance()),this.playAgainButton&&this.playAgainButton.addEventListener("click",()=>this.onPlayAgain()),window.addEventListener("keydown",e=>{this.active&&(this.state==="choosing"&&hd[e.code]?this.choose(hd[e.code]):this.state==="scene"&&(e.code==="Enter"||e.code==="Space")?(e.preventDefault(),this.advance()):this.state==="credits"&&e.code==="Enter"&&this.onPlayAgain())})}refreshDoor(e){!this.door||this.done||(e?(this.door.label="Entrar no predio proibido",this.door.message=""):(this.door.label=this.doorDefaults.label,this.door.message=this.doorDefaults.message))}start(){return this.active||this.done?!1:(this.started=!0,this.state="choosing",this.showOnly(this.choicesEl),this.overlay.className="",document.exitPointerLock&&document.exitPointerLock(),this.onStart(),!0)}showOnly(e){this.overlay.classList.remove("hidden");for(let t of[this.choicesEl,this.sceneEl,this.creditsEl])t&&t.classList.toggle("hidden",t!==e)}choose(e){!Fs[e]||this.state!=="choosing"||(this.endingId=e,this.done=!0,this.state="scene",this.lineIndex=0,this.overlay.className=`ending-${e}`,this.showOnly(this.sceneEl),this.showLine(),this.onChoose(e))}showLine(){let e=Fs[this.endingId];this.textEl.textContent=e.lines[this.lineIndex],this.textEl.style.animation="none",this.textEl.offsetWidth,this.textEl.style.animation="",this.lineTimer=U.ending.lineSeconds}advance(){if(this.state!=="scene")return;let e=Fs[this.endingId];this.lineIndex+=1,this.lineIndex>=e.lines.length?this.showCredits(this.endingId):this.showLine()}showCredits(e=this.endingId){let t=Fs[e];if(!t)return;this.endingId=e,this.done=!0,this.state="credits",this.overlay.className=`ending-${e}`,this.showOnly(this.creditsEl),document.exitPointerLock&&document.exitPointerLock(),this.creditsEndingEl.textContent=`${t.tag}: ${t.name}`;let n=[["Tempo jogado",cd($e.playSeconds)],["Vezes que foi pego",String($e.caught)],["Anomalias achadas",`${$e.anomalies}/${this.anomalyTotal}`],["Poderes usados",String(ad())]];this.creditsStatsEl.textContent="";for(let[s,r]of n){let a=document.createElement("span");a.textContent=s;let o=document.createElement("b");o.textContent=r,this.creditsStatsEl.appendChild(a),this.creditsStatsEl.appendChild(o)}this.onCredits(e)}restoreFinished(e){return Fs[e]?(this.done=!0,this.started=!0,this.showCredits(e),!0):!1}update(e){this.state==="scene"&&(this.lineTimer-=e,this.lineTimer<=0&&this.advance())}serialize(){return{done:this.done,id:this.endingId}}load(e){this.done=!!(e&&e.done),this.endingId=e&&typeof e.id=="string"?e.id:null}reset(){if(this.state="idle",this.done=!1,this.endingId=null,this.started=!1,this.lineIndex=0,this.lineTimer=0,this.overlay){this.overlay.className="hidden";for(let e of[this.choicesEl,this.sceneEl,this.creditsEl])e&&e.classList.add("hidden")}this.door&&this.doorDefaults&&(this.door.label=this.doorDefaults.label,this.door.message=this.doorDefaults.message)}};var Uc=[{id:"forbidden",title:"Entrou na area proibida",description:"Voce pisou onde nenhum NPC jamais pisou."},{id:"escaped",title:"Fugiu de uma perseguicao",description:"Eles correram atras de voce. Voce escapou."},{id:"froze",title:"Congelou o tempo",description:"Por alguns segundos, o mundo parou so para voce."},{id:"anomalies",title:"Achou todas as anomalias",description:"Os cinco objetos que o script escondeu."},{id:"nocatch",title:"Terminou sem ser pego",description:"Chegou ao final sem ser alcancado nenhuma vez."}],La=class{constructor({ui:e,onUnlock:t}){this.ui=e,this.onUnlock=t||(()=>{}),this.unlocked=new Set(qu().filter(n=>Uc.some(s=>s.id===n))),this.refreshUi()}has(e){return this.unlocked.has(e)}get count(){return this.unlocked.size}unlock(e){let t=Uc.find(n=>n.id===e);return!t||this.unlocked.has(e)?!1:(this.unlocked.add(e),Yu([...this.unlocked]),this.ui.achievement(t.title,t.description),this.onUnlock(t),this.refreshUi(),!0)}list(){return Uc.map(e=>({...e,unlocked:this.unlocked.has(e.id)}))}refreshUi(){this.ui.setAchievementsList(this.list())}};var Fc=16,Da=class{constructor({scene:e,world:t}){this.world=t,this.anomalies=t.anomalies,this.count=this.anomalies.length*Fc,this.time=0,this.positions=new Float32Array(this.count*3),this.seeds=new Float32Array(this.count*3);for(let s=0;s<this.count;s+=1)this.seeds[s*3]=Math.random()*Math.PI*2,this.seeds[s*3+1]=.7+Math.random()*1.3,this.seeds[s*3+2]=.4+Math.random()*.9,this.positions[s*3+1]=-50;let n=new Rt;this.attribute=new Gt(this.positions,3),this.attribute.setUsage(vu),n.setAttribute("position",this.attribute),n.boundingSphere=new ti(new C,1e5),this.material=new Rs({color:Ee.anomaly,size:.24,transparent:!0,opacity:.85,depthWrite:!1,blending:jn,sizeAttenuation:!0}),this.points=new Br(n,this.material),this.points.frustumCulled=!1,e.add(this.points)}update(e){this.time+=e;let t=this.time;for(let n=0;n<this.anomalies.length;n+=1){let s=this.anomalies[n],r=s.available&&!s.found;for(let a=0;a<Fc;a+=1){let l=(n*Fc+a)*3;if(!r){this.positions[l+1]=-50;continue}let c=this.seeds[l],h=this.seeds[l+1],d=this.seeds[l+2],f=c+t*d,u=(t*.35*d+c)%1;this.positions[l]=s.x+Math.cos(f)*h,this.positions[l+1]=.3+u*2.6,this.positions[l+2]=s.z+Math.sin(f)*h}}this.attribute.needsUpdate=!0}};var ud={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var xn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},Yx=new ss(-1,1,1,-1,0,1),Oc=class extends Rt{constructor(){super(),this.setAttribute("position",new tt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new tt([0,2,0,0,2,0],2))}},Zx=new Oc,fs=class{constructor(e){this._mesh=new Re(Zx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Yx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var ps=class extends xn{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof qt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ls.clone(e.uniforms),this.material=new qt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new fs(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var Os=class extends xn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){let s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}},Na=class extends xn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var Ua=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let n=e.getSize(new le);this._width=n.width,this._height=n.height,t=new en(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Hn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ps(ud),this.copyPass.material.blending=yn,this.clock=new ea}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());let t=this.renderer.getRenderTarget(),n=!1;for(let s=0,r=this.passes.length;s<r;s++){let a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Os!==void 0&&(a instanceof Os?n=!0:a instanceof Na&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new le);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var Fa=class extends xn{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Ce}render(e,t,n){let s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}};var dd={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

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

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var Oa=class extends xn{constructor(){super();let e=dd;this.uniforms=Ls.clone(e.uniforms),this.material=new Zr({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new fs(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Je.getTransfer(this._outputColorSpace)===ct&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sc?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rc?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===ac?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===oc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===lc?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===cc&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}};var $x={uniforms:{tDiffuse:{value:null},amount:{value:0},time:{value:0}},vertexShader:`
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,fragmentShader:`
    uniform sampler2D tDiffuse;
    uniform float amount;
    uniform float time;
    varying vec2 vUv;

    float hash(float n) { return fract(sin(n * 12.9898) * 43758.5453); }

    void main() {
      vec2 uv = vUv;
      float tick = floor(time * 12.0);

      // faixas horizontais deslocadas
      float band = floor(uv.y * 16.0);
      float roll = hash(band + tick * 7.13);
      float hit = step(0.74, roll);
      float shift = (hash(band * 3.1 + tick) - 0.5) * 0.14 * amount * hit;
      uv.x += shift;

      // separacao RGB (mais forte nas faixas atingidas)
      float split = (0.010 + 0.022 * hit) * amount;
      float r = texture2D(tDiffuse, uv + vec2(split, 0.0)).r;
      float g = texture2D(tDiffuse, uv).g;
      float b = texture2D(tDiffuse, uv - vec2(split, 0.0)).b;
      vec3 col = vec3(r, g, b);

      // linhas finas de varredura
      col *= 1.0 - 0.07 * amount * step(0.5, fract(uv.y * 220.0));

      gl_FragColor = vec4(col, 1.0);
    }
  `},za=class{constructor(e,t,n){this.renderer=e,this.scene=t,this.camera=n;let s=e.getSize(new le),r=e.getPixelRatio(),a=new en(s.x*r,s.y*r,{type:Hn,samples:4});this.composer=new Ua(e,a),this.composer.setPixelRatio(r),this.composer.setSize(s.x,s.y),this.composer.addPass(new Fa(t,n)),this.glitchPass=new ps($x),this.composer.addPass(this.glitchPass),this.composer.addPass(new Oa)}render(e,t){if(e<.02){this.renderer.render(this.scene,this.camera);return}let n=this.glitchPass.uniforms;n.amount.value=Math.min(1,e),n.time.value=t,this.composer.render()}resize(e,t){this.composer.setSize(e,t)}};var fd=.5,Jx=6,pd=[220,261.63,329.63,392,329.63,261.63,440,329.63],Kx=[110,130.81,164.81];function jx(){try{return window.localStorage.getItem(U.save.muteKey)==="1"}catch{return!1}}function Qx(i){try{window.localStorage.setItem(U.save.muteKey,i?"1":"0")}catch{}}function ev(i=60){let t=new Float32Array(256);for(let n=0;n<256;n+=1){let s=n*2/256-1;t[n]=(3+i)*s*20*(Math.PI/180)/(Math.PI+i*Math.abs(s))}return t}var zc=class{constructor(){this.ctx=null,this.muted=jx(),this.suspended=!1,this.ready=!1,this.tension=0,this.targetTension=0,this.chasing=!1,this.beatTimer=0,this.beatIndex=0,this.chaseTimer=0,this.chaseFlip=!1,this.voiceIndex=0,this.stepTimer=0,this.listeners=new Set}onMuteChange(e){this.listeners.add(e),e(this.muted)}unlock(){if(this.ready){this.resume();return}let e=window.AudioContext||window.webkitAudioContext;if(e){try{this.ctx=new e}catch{return}this.build(),this.ready=!0,this.applyMute(),this.resume()}}pause(){this.suspended=!0,this.ctx&&this.ctx.state==="running"&&this.ctx.suspend().catch(()=>{})}resume(){this.suspended=!1,this.ctx&&this.ctx.state==="suspended"&&this.ctx.resume().catch(()=>{})}toggleMute(){return this.muted=!this.muted,Qx(this.muted),this.applyMute(),this.listeners.forEach(e=>e(this.muted)),this.muted}applyMute(){if(!this.ready)return;let e=this.ctx.currentTime;this.master.gain.cancelScheduledValues(e),this.master.gain.setTargetAtTime(this.muted?0:fd,e,.03)}build(){let e=this.ctx;this.master=e.createGain(),this.master.gain.value=this.muted?0:fd;let t=e.createDynamicsCompressor();this.master.connect(t),t.connect(e.destination),this.sfx=e.createGain(),this.sfx.gain.value=.9,this.sfx.connect(this.master),this.music=e.createGain(),this.music.gain.value=.32,this.music.connect(this.master);let n=e.createBuffer(1,e.sampleRate*2,e.sampleRate),s=n.getChannelData(0);for(let l=0;l<s.length;l+=1)s[l]=Math.random()*2-1;this.noise=e.createBufferSource(),this.noise.buffer=n,this.noise.loop=!0,this.stepFilter=e.createBiquadFilter(),this.stepFilter.type="lowpass",this.stepFilter.frequency.value=700,this.stepGain=e.createGain(),this.stepGain.gain.value=0,this.noise.connect(this.stepFilter),this.stepFilter.connect(this.stepGain),this.stepGain.connect(this.sfx);let r=e.createBiquadFilter();r.type="highpass",r.frequency.value=900;let a=e.createWaveShaper();a.curve=ev(80),a.oversample="2x",this.glitchGain=e.createGain(),this.glitchGain.gain.value=0,this.noise.connect(r),r.connect(a),a.connect(this.glitchGain),this.glitchGain.connect(this.sfx),this.noise.start(),this.voices=[];for(let l=0;l<Jx;l+=1){let c=e.createOscillator(),h=e.createGain();h.gain.value=0,c.connect(h),h.connect(this.sfx),c.start(),this.voices.push({osc:c,gain:h})}this.chaseOsc=e.createOscillator(),this.chaseOsc.type="sawtooth",this.chaseOsc.frequency.value=150;let o=e.createBiquadFilter();o.type="lowpass",o.frequency.value=520,this.chaseGain=e.createGain(),this.chaseGain.gain.value=0,this.chaseOsc.connect(o),o.connect(this.chaseGain),this.chaseGain.connect(this.sfx),this.chaseOsc.start(),this.padCalm=[],this.calmGain=e.createGain(),this.calmGain.gain.value=.5,this.calmGain.connect(this.music);for(let l of Kx){let c=e.createOscillator();c.type="sine",c.frequency.value=l,c.connect(this.calmGain),c.start(),this.padCalm.push(c)}this.tenseFilter=e.createBiquadFilter(),this.tenseFilter.type="lowpass",this.tenseFilter.frequency.value=200,this.tenseGain=e.createGain(),this.tenseGain.gain.value=0,this.tenseFilter.connect(this.tenseGain),this.tenseGain.connect(this.music),this.padTense=[];for(let l of[55,58.3,82.4]){let c=e.createOscillator();c.type="sawtooth",c.frequency.value=l,c.connect(this.tenseFilter),c.start(),this.padTense.push(c)}this.arpOsc=e.createOscillator(),this.arpOsc.type="triangle",this.arpGain=e.createGain(),this.arpGain.gain.value=0,this.arpOsc.connect(this.arpGain),this.arpGain.connect(this.music),this.arpOsc.start()}tone({type:e="sine",from:t=440,to:n=t,duration:s=.15,volume:r=.3,delay:a=0}){if(!this.ready||this.muted)return;let o=this.ctx.currentTime+a,l=this.voices[this.voiceIndex];this.voiceIndex=(this.voiceIndex+1)%this.voices.length,l.osc.type=e,l.osc.frequency.cancelScheduledValues(o),l.osc.frequency.setValueAtTime(t,o),n!==t&&l.osc.frequency.exponentialRampToValueAtTime(Math.max(n,20),o+s),l.gain.gain.cancelScheduledValues(o),l.gain.gain.setValueAtTime(1e-4,o),l.gain.gain.linearRampToValueAtTime(r,o+.012),l.gain.gain.exponentialRampToValueAtTime(1e-4,o+s)}footstep(e=!1){if(!this.ready||this.muted)return;let t=this.ctx.currentTime;this.stepFilter.frequency.setValueAtTime(420+Math.random()*380,t),this.stepGain.gain.cancelScheduledValues(t),this.stepGain.gain.setValueAtTime(1e-4,t),this.stepGain.gain.linearRampToValueAtTime(e?.5:.32,t+.006),this.stepGain.gain.exponentialRampToValueAtTime(8e-4,t+(e?.07:.1))}glitchBurst(e=1){if(!this.ready||this.muted)return;let t=this.ctx.currentTime,n=this.glitchGain.gain;n.cancelScheduledValues(t),n.setValueAtTime(1e-4,t);let s=7;for(let r=0;r<s;r+=1){let a=t+r*.07;n.setValueAtTime(1e-4,a),n.linearRampToValueAtTime((.25+Math.random()*.3)*e,a+.01),n.exponentialRampToValueAtTime(1e-4,a+.06)}this.tone({type:"square",from:900,to:70,duration:.5,volume:.16*e})}play(e){switch(e){case"interact":this.tone({type:"triangle",from:520,to:780,duration:.09,volume:.22}),this.tone({type:"triangle",from:780,to:1040,duration:.1,volume:.18,delay:.07});break;case"talk":this.tone({type:"sine",from:340,to:300,duration:.12,volume:.18});break;case"glitch":this.glitchBurst(1);break;case"glitch_light":this.glitchBurst(.5);break;case"notice":this.tone({type:"square",from:620,to:620,duration:.09,volume:.15}),this.tone({type:"square",from:880,to:880,duration:.12,volume:.15,delay:.1});break;case"power_time":this.tone({type:"sine",from:900,to:120,duration:.6,volume:.3}),this.tone({type:"triangle",from:450,to:60,duration:.7,volume:.22});break;case"power_invis":this.tone({type:"sawtooth",from:200,to:1400,duration:.35,volume:.14}),this.glitchBurst(.35);break;case"power_phase":this.tone({type:"sine",from:160,to:90,duration:.5,volume:.32}),this.tone({type:"triangle",from:320,to:640,duration:.45,volume:.16,delay:.05});break;case"power_end":this.tone({type:"sine",from:300,to:200,duration:.2,volume:.15});break;case"unlock":[523,659,784,1046].forEach((t,n)=>this.tone({type:"triangle",from:t,to:t,duration:.18,volume:.2,delay:n*.08}));break;case"secret":[392,523,659].forEach((t,n)=>this.tone({type:"sine",from:t,to:t,duration:.25,volume:.2,delay:n*.1}));break;case"achievement":[659,880,1318].forEach((t,n)=>this.tone({type:"triangle",from:t,to:t,duration:.2,volume:.2,delay:n*.09}));break;case"caught":this.glitchBurst(1.2),this.tone({type:"sawtooth",from:400,to:40,duration:.8,volume:.25});break;case"ending":[196,247,294,392].forEach((t,n)=>this.tone({type:"sine",from:t,to:t,duration:1.2,volume:.2,delay:n*.25}));break;default:break}}update({dt:e,tension:t=0,chasing:n=!1,moving:s=!1,running:r=!1}){if(!this.ready||this.suspended)return;let a=this.ctx.currentTime;this.targetTension=Math.max(0,Math.min(1,t)),this.tension+=(this.targetTension-this.tension)*Math.min(1,e*.9);let o=this.tension;s?(this.stepTimer-=e,this.stepTimer<=0&&(this.footstep(r),this.stepTimer=r?.26:.43)):this.stepTimer=0,this.calmGain.gain.setTargetAtTime(.5*(1-o*.7),a,.4),this.tenseGain.gain.setTargetAtTime(o*.55,a,.4),this.tenseFilter.frequency.setTargetAtTime(200+o*900,a,.4);for(let c=0;c<this.padTense.length;c+=1)this.padTense[c].detune.setTargetAtTime(c*o*18,a,.5);let l=.75-o*.45;if(this.beatTimer-=e,this.beatTimer<=0){this.beatTimer=l;let c=pd[this.beatIndex%pd.length]*(o>.55?1:.5);this.beatIndex+=1,this.arpOsc.type=o>.5?"sawtooth":"triangle",this.arpOsc.frequency.setValueAtTime(c,a);let h=.05+o*.05;this.arpGain.gain.cancelScheduledValues(a),this.arpGain.gain.setValueAtTime(1e-4,a),this.arpGain.gain.linearRampToValueAtTime(h,a+.02),this.arpGain.gain.exponentialRampToValueAtTime(1e-4,a+l*.9)}this.chasing=n,this.chaseTimer-=e,this.chaseTimer<=0&&(this.chaseTimer=.32,this.chaseFlip=!this.chaseFlip,this.chaseOsc.frequency.setTargetAtTime(this.chaseFlip?190:140,a,.02),this.chaseGain.gain.setTargetAtTime(n?this.chaseFlip?.16:.07:0,a,.03))}},bt=new zc;var Hc=document.getElementById("scene"),hi=new Or({canvas:Hc,antialias:!0,powerPreference:"high-performance"});hi.setPixelRatio(Math.min(window.devicePixelRatio||1,2));hi.setSize(window.innerWidth,window.innerHeight);hi.shadowMap.enabled=!0;hi.shadowMap.type=ic;hi.setClearColor(10473712);var Ii=new kr,Ci=new Ot(U.camera.fov,window.innerWidth/window.innerHeight,.1,420),Te=new pa,st=Lu(Ii),ut=new sa,qe=new ca({scene:Ii,world:st}),oi=new ha(Ci),tn=new la(Hc),Zt=new ua({scene:Ii,world:st,ui:Te}),gd=new za(hi,Ii,Ci),tv=new Da({scene:Ii,world:st}),xd=Te.createLabel("player-label","VOCE");xd.object.position.set(0,2.35,0);qe.object.add(xd.object);var lt={glitchTriggered:!1,playerInForbidden:!1,following:null,followerCount:0,visitedPlaza:!1,interactions:0},Vn=new ma({ui:Te}),Nt=new ga,zs=new va({world:st,npcs:Zt,suspicion:Nt,ui:Te,state:lt}),ks=new xa({world:st,npcs:Zt,ui:Te,onInteract:ov,onTalk:lv}),li=new ba({ui:Te,world:st}),Vc=new Ma({scene:Ii,camera:Ci}),Ba=new wa({ui:Te}),ms=new Ta({world:st,npcs:Zt,suspicion:Nt,ui:Te,onCaught:nv,onEscaped:iv,onAlert:_d}),mt=new Aa({world:st,ui:Te}),Ri=new La({ui:Te,onUnlock:()=>bt.play("achievement")}),Pt=new Ca({ui:Te,npcs:Zt,suspicion:Nt,onUse:sv,onEnd:rv,onUnlock:()=>bt.play("unlock")}),Yt=new Ra({world:st}),ci=new Pa({npcs:Zt,ui:Te,world:st}),Dt=new Ia({ui:Te,world:st,anomalyTotal:mt.total,onStart:cv,onChoose:hv,onCredits:()=>nn(),onPlayAgain:uv});bt.onMuteChange(i=>Te.setMuted(i));var Ha=!1,vd=!1,kc=0,Bs=0,Pi=ut.hour,Bc=0,md=-10,ka=0;function Gc(i={}){Vn.trigger(i),bt.play((i.strength??1)<.7?"glitch_light":"glitch")}function nv(i){id();let e=st.playerHome;qe.teleport(e.center.x,e.center.z),oi.reset(),ut.setHour(ut.hour-U.heat.catchHourPenalty),Pi=ut.hour,st.setHour(ut.hour),Vn.trigger({duration:U.heat.catchGlitchDuration,message:U.heat.catchMessage,strength:1.3}),bt.play("caught"),Nt.set(U.heat.catchSuspicion),lt.playerInForbidden=!1,Te.toast(`${i.name} te alcancou. A rotina foi reescrita.`,4.5),nn()}function iv(){rd(),Ri.unlock("escaped")}function _d(){Bs-md<1.2||(md=Bs,bt.play("notice"))}function sv(i){sd(i),bt.play(`power_${i}`),i==="time"?(Te.setFrozenTime(!0,U.power),Ri.unlock("froze")):i==="invis"?(Te.setPowerTint("invis"),Te.setGlitch(U.power.invisGlitchLevel)):i==="phase"&&Te.setPowerTint("phase"),nn()}function rv(i){bt.play("power_end"),Te.setPowerTint(null),i==="time"&&Te.setFrozenTime(!1,U.power),i==="invis"&&Te.setGlitch(0),i==="phase"&&qe.pushOutOfWalls()}function av(i){let e=mt.collect(i);if(e){if(Lc(e.count),Pt.syncUnlocks(e.count),lt.glitchTriggered||(lt.glitchTriggered=!0),Gc({duration:U.anomalies.glitchDuration,message:"Erro: entidade fora do script detectada",strength:.9}),Nt.raise(U.anomalies.suspicionPerFind,`anomalia ${e.id}`),Te.toast(`${e.name} (${e.count}/${e.total}) - pista no diario`,4.2),Te.showError(e.clue,5.5),!Pt.invisible)for(let t=0;t<Zt.list.length;t+=1){let n=Zt.list[t];!n.isPresent||n.ally||He(n.position.x,n.position.z,qe.position.x,qe.position.z)<22&&n.reactShort(qe.position)}mt.complete&&(Ri.unlock("anomalies"),Te.toast("Todas as anomalias! A porta do predio proibido responde.",5)),Hs(),Ga(),nn()}}function ov(i){lt.interactions+=1,bt.play("interact"),i.kind==="anomaly"&&i.anomalyId&&av(i.anomalyId),i.id==="door_forbidden"&&mt.complete&&!Dt.done&&Dt.start()}function lv(i){bt.play("talk"),i.talkCount+=1;let e={hour:ut.hour,suspicion:Nt.value,glitch:lt.glitchTriggered,ally:i.ally},t=Yt.talk(i,ut.hour),n=!1;t.status==="reveal"?(Dc(Yt.count),i.say(t.secret.reveal,6),Te.toast(`Segredo de ${i.name} descoberto - pista no diario`,4.5),bt.play("secret"),Hs(),n=!0,nn()):t.status==="wrong"&&t.showHint&&(i.say(t.secret.hint,4.5),n=!0),i.name===U.ally.name&&Yt.isFound("celia")&&!ci.active&&(ci.canAwaken({glitch:lt.glitchTriggered,anomalyCount:mt.count,secretFound:!0})?(ci.awaken(),bt.play("secret"),n=!0,nn()):n||(i.say(ai(i.name,"allyWait"),4.5),n=!0)),n||i.say(ai(i.name,"talk",e),3.2)}function cv(){Te.hidePrompt(),Te.hideHint(),nn()}function hv(i){if(bt.play("ending"),$e.caughtThisRun||Ri.unlock("nocatch"),i==="A")ut.setHour(6.2),st.setHour(6.2),Pi=6.2;else if(i==="B"){for(let e of Zt.list)e.setChaos(!0),e.say("###",6);ka=0}else i==="C"&&(ut.setHour(7),st.setHour(7),Pi=7);nn()}function uv(){vd=!0,Rc(),window.location.reload()}function Ga(){let i=mt.nextTarget();li.refreshStep("anomaly",{target:i?{x:i.x,z:i.z}:null,text:i?`Ache a anomalia ${mt.count+1}/${mt.total}: ${i.name}`:"Voce encontrou todas as anomalias"})}function Hs(){Te.setDiaryContent(mt.entries(),mt.count,mt.total),Te.setDiarySecrets(Yt.entries(),Yt.count,Yt.total)}function dv(){lt.glitchTriggered=!0,Gc(),Nt.raise(U.suspicion.witnessedGlitch,"entidade fora do script");for(let i=0;i<Zt.list.length;i+=1){let e=Zt.list[i];!e.isPresent||e.ally||He(e.position.x,e.position.z,qe.position.x,qe.position.z)<22&&e.reactShort(qe.position)}nn()}function Wc({silent:i=!1}={}){ut.reset(),st.reset(),qe.reset(),qe.teleport(st.playerHome.center.x,st.playerHome.center.z),Zt.reset(),Nt.reset(),Vn.reset(),zs.reset(),ks.reset(),li.reset(),Vc.reset(),Ba.reset(),ms.reset(),mt.reset(),Pt.reset(),Yt.reset(),ci.reset(),Dt.reset(),Nc(),Ga(),Hs(),oi.reset(),lt.glitchTriggered=!1,lt.playerInForbidden=!1,lt.following=null,lt.followerCount=0,lt.visitedPlaza=!1,lt.interactions=0,Bc=0,Pi=ut.hour,Te.hidePrompt(),Te.setGlitch(0),Te.setPowerTint(null),Te.setFrozenTime(!1,U.power),Te.setObjective(Xc()),i||Te.toast("Mundo reiniciado. Mesmo script, do comeco.",2.8),nn()}function nn(){!Ha||vd||Hu({player:{x:Number(qe.position.x.toFixed(2)),z:Number(qe.position.z.toFixed(2))},suspicion:Number(Nt.value.toFixed(2)),hour:Number(ut.hour.toFixed(3)),savedAt:Date.now(),stats:od(),powers:Pt.unlockedIds(),secrets:Yt.serialize(),ally:ci.active,ending:Dt.serialize()})}function fv(){let i=Ac();return i?(i.player&&Number.isFinite(i.player.x)&&Number.isFinite(i.player.z)&&qe.teleport(i.player.x,i.player.z),Number.isFinite(i.suspicion)&&Nt.set(i.suspicion),Number.isFinite(i.hour)&&ut.setHour(i.hour),Pi=ut.hour-1,ld(i.stats),Lc(Math.max($e.anomalies,mt.count)),Pt.syncUnlocks(mt.count,i.powers,{silent:!0}),Yt.load(i.secrets),Dc(Yt.count),i.ally&&ci.awaken({silent:!0}),Dt.load(i.ending),Hs(),Te.toast("Posicao e suspeita carregadas do ultimo acesso.",3.6),i):(Te.toast("Dia 1 - 07:00. Viva a rotina como todos os outros.",4.5),null)}function Xc(){return Dt.done?"Voce fez a sua escolha.":mt.complete?"Todas as anomalias! Entre no predio proibido: a porta lacrada agora responde. (J abre o diario)":lt.glitchTriggered?`Voce quebrou o script. Faltam ${mt.total-mt.count} anomalia(s) - siga a seta. (J abre o diario)`:lt.followerCount>0?`${lt.following} saiu da rotina por sua causa e esta te observando. Saia da area proibida para ele voltar ao normal.`:lt.playerInForbidden?"Area proibida. Nenhum NPC jamais entrou aqui. Ha algo escondido atras do predio.":lt.visitedPlaza?"Observe as rotinas: casa, trabalho, praca. Cinco objetos nao seguem o script.":"Viva um dia normal: ande ate a praca (WASD) e observe os NPCs."}function pv(i,e){let t=Fe.forbidden.area,n=Math.max(t.minX-i,0,i-t.maxX),s=Math.max(t.minZ-e,0,e-t.maxZ);return Math.hypot(n,s)}function mv(i){Bs+=i,tn.wasPressed("KeyM")&&bt.toggleMute();let e=Dt.active,t=Ha&&!e;if(t){if(nd(i),oi.applyInput(tn),qe.update(i,tn,oi.yaw,Pt.phaseHouseId),tn.wasPressed("KeyE")){let a=ks.tryInteract();a&&li.notifyInteract(a)}tn.wasPressed("KeyR")&&Wc(),tn.wasPressed("KeyH")&&Ba.toggleHelp(),tn.wasPressed("KeyJ")&&(mt.toggleDiary(),Te.setDiarySecrets(Yt.entries(),Yt.count,Yt.total)),Pt.timeFrozen||(ut.update(i),Math.abs(ut.hour-Pi)>.03&&(st.setHour(ut.hour),Pi=ut.hour))}Pt.update(i,{playerPosition:qe.position,input:t?tn:null}),qe.setGhost(Pt.invisible?.9:Pt.phasing?.55:0,Pt.invisible?6160304:16757575,Bs),mt.applySchedule(ut.hour),mt.complete||Ga(),Dt.refreshDoor(mt.complete);let n=Pt.timeFrozen||e,s=Pt.invisible;Zt.update(i,ut.hour,{playerPosition:qe.position,cameraPosition:Ci.position,hour:ut.hour,playerInForbidden:lt.playerInForbidden,frozen:n,suspicion:Nt.value,glitch:lt.glitchTriggered}),st.update(i),zs.update(i,{playerPosition:qe.position,frozen:n,hidden:s}),zs.noticed>Bc&&(Bc=zs.noticed,_d()),li.update(i,{playerPosition:qe.position,running:t&&(tn.isDown("ShiftLeft")||tn.isDown("ShiftRight")),playerInForbidden:lt.playerInForbidden,allAnomaliesFound:mt.complete,powerCrossed:Pt.crossed,endingStarted:Dt.started}),Vc.update(i,{playerPosition:qe.position,target:Ha&&!e?li.target:null}),Ba.update(i,{playerPosition:qe.position,npcs:Zt.list,suspicion:Nt.value}),e||Nt.update(i),ms.update(i,{playerPosition:qe.position,hour:ut.hour,frozen:n,hidden:s}),ci.update(i,{playerPosition:qe.position,level:ms.level,playerInForbidden:lt.playerInForbidden,frozen:n,hidden:s}),Vn.update(i),Dt.active&&Dt.endingId==="B"&&(ka-=i,ka<=0&&(ka=2.6,Gc({duration:2,message:"Erro: o script de todos foi corrompido",strength:.8}))),oi.shake.copy(Vn.offset),oi.update(i,qe.position,st),e?ks.reset():ks.update(qe.position),Dt.update(i),!lt.visitedPlaza&&He(qe.position.x,qe.position.z,0,0)<12&&(lt.visitedPlaza=!0);let r=lt.playerInForbidden?1:1-_t(pv(qe.position.x,qe.position.z)/9,0,1);st.setMood(r),lt.playerInForbidden&&!Ri.has("forbidden")&&Ri.unlock("forbidden"),tv.update(i),bt.update({dt:i,tension:ms.level===An?1:Nt.value/U.suspicion.max,chasing:ms.level===An&&!s,moving:t&&qe.isMoving,running:tn.isDown("ShiftLeft")||tn.isDown("ShiftRight")}),Te.setClock(ut.timeString,ut.phase),Te.setSuspicion(Nt.value),Te.setObjective(Xc()),Te.update(i),kc+=i,kc>=U.save.intervalMs/1e3&&(kc=0,nn()),tn.endFrame()}function gv(){let i=Vn.active?Vn.level*(Vn.strength||1):0;return Pt.timeFrozen&&(i=Math.max(i,U.power.glitchLevel)),Pt.invisible&&(i=Math.max(i,U.power.invisGlitchLevel)),Math.min(1,i)}function Va(i){let e=Math.min((i-Va.last)/1e3||0,.05);Va.last=i,mv(e),gd.render(gv(),Bs),Te.render(Ii,Ci)}Va.last=performance.now();window.addEventListener("resize",()=>{let i=window.innerWidth,e=window.innerHeight;Ci.aspect=i/e,Ci.updateProjectionMatrix(),hi.setSize(i,e),gd.resize(i,e),Te.resize(i,e)});window.addEventListener("beforeunload",nn);var yd=()=>bt.unlock();window.addEventListener("pointerdown",yd,{once:!0});window.addEventListener("keydown",yd,{once:!0});document.addEventListener("visibilitychange",()=>{document.hidden?bt.pause():bt.resume()});function bd(){Ha=!0,bt.unlock(),Te.hideStartScreen(),Te.showControlsCard();try{let i=Hc.requestPointerLock?.();i&&typeof i.catch=="function"&&i.catch(()=>{})}catch{}}function xv(){Rc(),Wc({silent:!0});let i=st.playerHome;qe.teleport(i.center.x,i.center.z),qe.facing=0,oi.reset(),li.restore(0),bd(),Te.toast("Voce acorda em casa. A porta esta a leste.",4),nn()}function vv(){let i=fv();li.skipIntroStep(),bd(),i&&Dt.done&&!Dt.restoreFinished(Dt.endingId)&&Dt.reset()}Te.onStart(xv);Te.onContinue(vv);Te.setHasSave(Ac()!==null);Pt.syncUnlocks(mt.count,[],{silent:!0});mt.applySchedule(ut.hour);Ga();Hs();st.setHour(ut.hour);Te.setSuspicion(Nt.value);Te.setObjective(Xc());window.__oNpc={state:lt,player:qe,world:st,npcs:Zt,clock:ut,suspicion:Nt,glitch:Vn,rules:zs,interactions:ks,objectives:li,guide:Vc,hints:Ba,heat:ms,anomalies:mt,power:Pt,secrets:Yt,ally:ci,ending:Dt,achievements:Ri,stats:$e,audio:bt,ui:Te,cameraRig:oi,restart:Wc,triggerGlitch:dv,checkRoutes(){let i=Object.keys(st.nav.nodes);for(let e of i)for(let t of i){let n=st.nav.path(e,t);if(n.length===0)return!1;for(let s of n){let r=st.nav.positionOf(s);if(r&&st.isInsideForbidden(r.x,r.z))return!1}}return!0}};hi.setAnimationLoop(Va);})();
/*! Bundled license information:

three/build/three.module.js:
  (**
   * @license
   * Copyright 2010-2024 Three.js Authors
   * SPDX-License-Identifier: MIT
   *)
*/
