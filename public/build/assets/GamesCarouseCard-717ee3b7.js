import{aU as tt,j as $,h as I,a,T,s as _,r as et,F as nt}from"./app-728b2081.js";var it={exports:{}};(function(h,x){(function(y,M){h.exports=M()})(tt,function(){var y=1e3,M=6e4,b=36e5,H="millisecond",C="second",W="minute",F="hour",S="day",E="week",m="month",P="quarter",w="year",z="date",V="Invalid Date",B=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,Q=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,K={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(i){var n=["th","st","nd","rd"],t=i%100;return"["+i+(n[(t-20)%10]||n[t]||n[0])+"]"}},N=function(i,n,t){var r=String(i);return!r||r.length>=n?i:""+Array(n+1-r.length).join(t)+i},X={s:N,z:function(i){var n=-i.utcOffset(),t=Math.abs(n),r=Math.floor(t/60),e=t%60;return(n<=0?"+":"-")+N(r,2,"0")+":"+N(e,2,"0")},m:function i(n,t){if(n.date()<t.date())return-i(t,n);var r=12*(t.year()-n.year())+(t.month()-n.month()),e=n.clone().add(r,m),o=t-e<0,s=n.clone().add(r+(o?-1:1),m);return+(-(r+(t-e)/(o?e-s:s-e))||0)},a:function(i){return i<0?Math.ceil(i)||0:Math.floor(i)},p:function(i){return{M:m,y:w,w:E,d:S,D:z,h:F,m:W,s:C,ms:H,Q:P}[i]||String(i||"").toLowerCase().replace(/s$/,"")},u:function(i){return i===void 0}},L="en",A={};A[L]=K;var G=function(i){return i instanceof J},R=function i(n,t,r){var e;if(!n)return L;if(typeof n=="string"){var o=n.toLowerCase();A[o]&&(e=o),t&&(A[o]=t,e=o);var s=n.split("-");if(!e&&s.length>1)return i(s[0])}else{var u=n.name;A[u]=n,e=u}return!r&&e&&(L=e),e||!r&&L},f=function(i,n){if(G(i))return i.clone();var t=typeof n=="object"?n:{};return t.date=i,t.args=arguments,new J(t)},c=X;c.l=R,c.i=G,c.w=function(i,n){return f(i,{locale:n.$L,utc:n.$u,x:n.$x,$offset:n.$offset})};var J=function(){function i(t){this.$L=R(t.locale,null,!0),this.parse(t)}var n=i.prototype;return n.parse=function(t){this.$d=function(r){var e=r.date,o=r.utc;if(e===null)return new Date(NaN);if(c.u(e))return new Date;if(e instanceof Date)return new Date(e);if(typeof e=="string"&&!/Z$/i.test(e)){var s=e.match(B);if(s){var u=s[2]-1||0,l=(s[7]||"0").substring(0,3);return o?new Date(Date.UTC(s[1],u,s[3]||1,s[4]||0,s[5]||0,s[6]||0,l)):new Date(s[1],u,s[3]||1,s[4]||0,s[5]||0,s[6]||0,l)}}return new Date(e)}(t),this.$x=t.x||{},this.init()},n.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},n.$utils=function(){return c},n.isValid=function(){return this.$d.toString()!==V},n.isSame=function(t,r){var e=f(t);return this.startOf(r)<=e&&e<=this.endOf(r)},n.isAfter=function(t,r){return f(t)<this.startOf(r)},n.isBefore=function(t,r){return this.endOf(r)<f(t)},n.$g=function(t,r,e){return c.u(t)?this[r]:this.set(e,t)},n.unix=function(){return Math.floor(this.valueOf()/1e3)},n.valueOf=function(){return this.$d.getTime()},n.startOf=function(t,r){var e=this,o=!!c.u(r)||r,s=c.p(t),u=function(k,g){var O=c.w(e.$u?Date.UTC(e.$y,g,k):new Date(e.$y,g,k),e);return o?O:O.endOf(S)},l=function(k,g){return c.w(e.toDate()[k].apply(e.toDate("s"),(o?[0,0,0,0]:[23,59,59,999]).slice(g)),e)},d=this.$W,p=this.$M,D=this.$D,v="set"+(this.$u?"UTC":"");switch(s){case w:return o?u(1,0):u(31,11);case m:return o?u(1,p):u(0,p+1);case E:var Y=this.$locale().weekStart||0,j=(d<Y?d+7:d)-Y;return u(o?D-j:D+(6-j),p);case S:case z:return l(v+"Hours",0);case F:return l(v+"Minutes",1);case W:return l(v+"Seconds",2);case C:return l(v+"Milliseconds",3);default:return this.clone()}},n.endOf=function(t){return this.startOf(t,!1)},n.$set=function(t,r){var e,o=c.p(t),s="set"+(this.$u?"UTC":""),u=(e={},e[S]=s+"Date",e[z]=s+"Date",e[m]=s+"Month",e[w]=s+"FullYear",e[F]=s+"Hours",e[W]=s+"Minutes",e[C]=s+"Seconds",e[H]=s+"Milliseconds",e)[o],l=o===S?this.$D+(r-this.$W):r;if(o===m||o===w){var d=this.clone().set(z,1);d.$d[u](l),d.init(),this.$d=d.set(z,Math.min(this.$D,d.daysInMonth())).$d}else u&&this.$d[u](l);return this.init(),this},n.set=function(t,r){return this.clone().$set(t,r)},n.get=function(t){return this[c.p(t)]()},n.add=function(t,r){var e,o=this;t=Number(t);var s=c.p(r),u=function(p){var D=f(o);return c.w(D.date(D.date()+Math.round(p*t)),o)};if(s===m)return this.set(m,this.$M+t);if(s===w)return this.set(w,this.$y+t);if(s===S)return u(1);if(s===E)return u(7);var l=(e={},e[W]=M,e[F]=b,e[C]=y,e)[s]||1,d=this.$d.getTime()+t*l;return c.w(d,this)},n.subtract=function(t,r){return this.add(-1*t,r)},n.format=function(t){var r=this,e=this.$locale();if(!this.isValid())return e.invalidDate||V;var o=t||"YYYY-MM-DDTHH:mm:ssZ",s=c.z(this),u=this.$H,l=this.$m,d=this.$M,p=e.weekdays,D=e.months,v=function(g,O,Z,U){return g&&(g[O]||g(r,o))||Z[O].slice(0,U)},Y=function(g){return c.s(u%12||12,g,"0")},j=e.meridiem||function(g,O,Z){var U=g<12?"AM":"PM";return Z?U.toLowerCase():U},k={YY:String(this.$y).slice(-2),YYYY:this.$y,M:d+1,MM:c.s(d+1,2,"0"),MMM:v(e.monthsShort,d,D,3),MMMM:v(D,d),D:this.$D,DD:c.s(this.$D,2,"0"),d:String(this.$W),dd:v(e.weekdaysMin,this.$W,p,2),ddd:v(e.weekdaysShort,this.$W,p,3),dddd:p[this.$W],H:String(u),HH:c.s(u,2,"0"),h:Y(1),hh:Y(2),a:j(u,l,!0),A:j(u,l,!1),m:String(l),mm:c.s(l,2,"0"),s:String(this.$s),ss:c.s(this.$s,2,"0"),SSS:c.s(this.$ms,3,"0"),Z:s};return o.replace(Q,function(g,O){return O||k[g]||s.replace(":","")})},n.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},n.diff=function(t,r,e){var o,s=c.p(r),u=f(t),l=(u.utcOffset()-this.utcOffset())*M,d=this-u,p=c.m(this,u);return p=(o={},o[w]=p/12,o[m]=p,o[P]=p/3,o[E]=(d-l)/6048e5,o[S]=(d-l)/864e5,o[F]=d/b,o[W]=d/M,o[C]=d/y,o)[s]||d,e?p:c.a(p)},n.daysInMonth=function(){return this.endOf(m).$D},n.$locale=function(){return A[this.$L]},n.locale=function(t,r){if(!t)return this.$L;var e=this.clone(),o=R(t,r,!0);return o&&(e.$L=o),e},n.clone=function(){return c.w(this.$d,this)},n.toDate=function(){return new Date(this.valueOf())},n.toJSON=function(){return this.isValid()?this.toISOString():null},n.toISOString=function(){return this.$d.toISOString()},n.toString=function(){return this.$d.toUTCString()},i}(),q=J.prototype;return f.prototype=q,[["$ms",H],["$s",C],["$m",W],["$H",F],["$W",S],["$M",m],["$y",w],["$D",z]].forEach(function(i){q[i[1]]=function(n){return this.$g(n,i[0],i[1])}}),f.extend=function(i,n){return i.$i||(i(n,J,f),i.$i=!0),f},f.locale=R,f.isDayjs=G,f.unix=function(i){return f(1e3*i)},f.en=A[L],f.Ls=A,f.p={},f})})(it);const mt="/build/assets/goldencup-8a9100ab.svg",rt="/build/assets/cup-e6ddecc5.svg",st="/build/assets/batch-86faafbe.svg",ot="/build/assets/users-f61a70b9.svg",at="/build/assets/realsmall-9d19f763.png",ut="/build/assets/asianman-1d6f2297.png",ct=()=>{const h=({text:y})=>a(T,{type:"p",text:y,color:"white",fontSize:"15px",fontWeight:"bold",padding:"0 2px 0 3px"}),x=({text:y})=>a(T,{type:"p",text:y,color:"#A6AFE0",fontSize:"12px",fontWeight:"light"});return $(I,{margin:"0 0 0 20px",gap:"2px",children:[$("div",{children:[a(h,{text:"04"}),a(x,{text:"Day"})]}),a("span",{style:{color:"#A6AFE0"},children:":"}),$("div",{children:[a(h,{text:"20"}),a(x,{text:"Hr"})]}),a("span",{style:{color:"#A6AFE0"},children:":"}),$("div",{children:[a(h,{text:"58"}),a(x,{text:"Min"})]}),a("span",{style:{color:"#A6AFE0"},children:":"}),$("div",{children:[a(h,{text:"21"}),a(x,{text:"Sec"})]})]})},dt=_("div")(({color:h})=>({background:"#2A2F51",backgroundRepeat:"no-repeat",backgroundSize:"cover",height:"516px",width:"292px",margin:"0 auto",borderRadius:"10px",position:"relative",cursor:"move","&::before":{content:'""',position:"absolute",top:"20%",left:"0",width:"100%",height:"50%",background:`${h[1]}`,filter:"blur(90px)",borderRadius:"10px 0px 50px",opacity:"0.2",zIndex:1}})),ht=_("div")(({color:h})=>({background:`linear-gradient(93.77deg, ${h[1]} 2.29%, ${h[0]} 100%)`,borderRadius:"10px 0px 50px",width:"50%",height:"30px",display:"flex",alignItems:"center",padding:"20px","& span":{color:"#fff",fontFamily:"Montserrat",marginLeft:"10px",fontSize:"1.2rem",fontWeight:"bold"}})),lt=_("div")(()=>({textTransform:"uppercase",textAlign:"center",marginTop:"40px",fontWeight:"bold"})),ft=_("div")(()=>({display:"flex",justifyContent:"center",alignItems:"center",gap:"20px"})),pt=_("div")(()=>({padding:"10px 20px","& > *":{margin:"10px 0"}}));_("div")(()=>({}));const gt=({icon:h,text:x,count:y})=>$("div",{style:{background:"#1D2636",marginTop:"20px",borderRadius:"15px",padding:"10px 25px"},children:[$(I,{alignItems:"center",children:[a("img",{src:h,alt:x,style:{height:"30px",marginTop:"8px"}}),a(T,{type:"p",text:y,color:"white",fontSize:"15px",fontWeight:"bold",paddingLeft:"10px"})]}),a(T,{type:"p",text:x,color:"#A6AFE0",fontSize:"12px",fontWeight:"light"})]});_("div")(({visible:h})=>({position:"absolute",top:"0",left:"0",width:"100%",height:"100%",background:"rgba(0,0,0,0.5)",borderRadius:"10px",zIndex:2,display:h?"block":"none"}));const xt=({card:h,index:x})=>{const[y,M]=et.exports.useState(-1);return a(nt,{children:$(dt,{color:h.cardColors,onMouseEnter:()=>M(x),onMouseLeave:()=>M(-1),children:[$(I,{alignItems:"center",children:[$(ht,{color:h.cardColors,children:[a("img",{src:rt,alt:"",style:{width:"25px",marginTop:"5px"}}),a("span",{children:"2000"})]}),a(ct,{})]}),$(lt,{children:[a(T,{type:"p",text:h.title.split(" ")[0],fontSize:"123%"}),a(T,{type:"p",text:h.title.split(" ").slice(1,4).join(" "),fontSize:"190%",whiteSpace:"nowrap"})]}),a(ft,{children:[{icon:ot,text:"Members",count:100},{icon:st,text:"price Places",count:20}].map((b,H)=>a(gt,{icon:b.icon,count:b.count,text:b.text},H))}),a(pt,{children:Array.from({length:5}).map(b=>$(I,{alignItems:"center",justifyContent:"space-between",children:[$(I,{alignItems:"center",children:[a("img",{src:ut,alt:"",style:{height:"40px",width:"40px",padding:"2px",borderRadius:"50%"}}),a(T,{type:"p",text:"execubeweb",color:"#A6AFE0",fontSize:"13px",paddingLeft:"10px"})]}),$(I,{children:[a("img",{src:at,alt:"",style:{height:"30px"}}),a(T,{type:"p",text:"2430.00",color:"#A6AFE0",fontSize:"12px",fontWeight:"bold"})]})]},b))})]})})};export{xt as G,mt as g};
