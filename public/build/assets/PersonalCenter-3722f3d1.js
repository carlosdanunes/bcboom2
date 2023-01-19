import{r as y,j as o,F as z,a as e,H as T,B as f,g as b,v as S,O as k,P as v}from"./app-1361d58c.js";import{u as A,c as P,b as g,G as F,F as s,T as i,aj as $,Q as R,ak as j,al as D,a as C}from"./GuestLayout-7366e33e.js";import{P as M,a as E}from"./PageTemplate-cc598a99.js";import{l as H,T as I}from"./level1-98a4865f.js";import{l as G}from"./link-712e60d6.js";import{c as L}from"./userIcon-a16e75ce.js";import{o as c}from"./dropdown-a6d7c69d.js";const N="/build/assets/settings-5defa9c5.svg",O="/build/assets/walletmini-27de28c2.svg",V=c("div")(({isMobile:n})=>({margin:"0 auto",paddingTop:"2.125rem",width:"100%",height:"100%",position:"relative",zIndex:100})),l=c("div")(({padding:n,isMobile:p})=>({zIndex:1e3,background:"linear-gradient(119.77deg, #272C56 2.99%, #444AC7 100%)",borderRadius:"10px",width:p?"100%":"30%",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",padding:n||"20px"})),w=c("div")(({value:n})=>({width:"100%","input[type='range']":{background:`linear-gradient(to right, #3586FF 0%, #3586FF ${n}%, #62679E ${n}%, #62679E 100%)`,borderRadius:"10px",height:"18px",outline:"none",transition:"background 450ms ease-in",WebkitAppearance:"none"},"input[type='range']::-webkit-slider-thumb":{width:"10px",WebkitAppearance:"none",background:"red"}})),Q=c("div")(({size:n,background:p})=>({display:"flex",alignItems:"center",justifyContent:"center",background:p,borderRadius:"50%",width:n||"45px",height:n||"45px",cursor:"pointer","& img":{borderRadius:"50%"}})),h=({icon:n,text:p,width:r,height:t,onClick:a})=>e("div",{style:{background:"#191C51",borderRadius:"10px",padding:"5px 10px",display:"flex",alignItems:"center",cursor:"pointer",justifyContent:"center",width:r||"100%",height:t||"auto"},onClick:a,children:o(s,{alignItems:"center",gap:"7px",children:[e("img",{src:n,alt:"",style:{height:"15px"}}),e(i,{type:"p",text:p,fontSize:"14px",color:"#A0ABDB",fontWeight:"500"})]})}),_=()=>{const{isMobile:n}=A(),p=P(),{profile:r}=g(d=>d.profile),{wallet:t,level:a}=g(d=>d.wallet);y.exports.useEffect(()=>{r||(async()=>{var u;const x=await p(k());p(v((u=x==null?void 0:x.payload)==null?void 0:u.data))})()},[r]);const[B,m]=y.exports.useState(!1),{profileColor:W}=g(d=>d.profile);return o(z,{children:[e(T,{title:"Personal Center"}),e(F,{children:e(M,{innerHeader:!0,children:e(V,{children:e(E,{item:{title:"Personal Center",icon:L,margin:"10px"},index:0,page:"personal-center",children:o(s,{alignItems:"stretch",gap:"20px",direction:n?"column":"row",margin:n?"60px 0 0":"60px 0",justifyContent:"center",children:[o(l,{isMobile:n,children:[e(i,{type:"p",text:"Personal Information",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),o(s,{gap:"30px",alignItems:"center",margin:"0 0 20px 0",children:[e(Q,{background:W,size:"80px",children:e("img",{src:(r==null?void 0:r.image)||$,alt:"",style:{height:"100%"}})}),o("div",{style:{textAlign:"center"},children:[e(i,{type:"p",text:r==null?void 0:r.username,fontSize:"15px",color:"white",fontWeight:"700",paddingBottom:"10px"}),e(h,{icon:G,text:B?"Copied":"Copy",onClick:()=>{navigator.clipboard.writeText(r==null?void 0:r.username),m(!0),R.info("Your username is copied"),setTimeout(()=>{m(!1)},5e3)}}),e("div",{onClick:()=>p(f({open:!0})),children:e(i,{type:"p",text:"Change Avatar",fontSize:"14px",color:"#A0ABDB",cursor:"pointer"})})]})]}),e(h,{icon:N,text:"Change Nickname",width:"80%",height:"40px",onClick:()=>p(f({open:!0}))}),e("br",{}),e(h,{icon:j,height:"40px",text:"Game History",width:"80%",onClick:()=>b.Inertia.visit("/history")})]}),o(l,{padding:"20px 20px 0 20px",isMobile:n,children:[e(i,{type:"p",text:"My VIP Level",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),e("div",{style:{textAlign:"center"},children:e("img",{src:H,alt:""})}),o(s,{justifyContent:"space-between",width:"80%",children:[e(i,{type:"p",text:"Deposit Amount",fontSize:"15px",fontWeight:"bold"}),o(s,{alignItems:"center",gap:"3px",children:[e(i,{type:"p",text:`R$ ${t==null?void 0:t.deposit}`,fontSize:"15px",fontWeight:"bold"}),e("small",{children:"/"}),e(i,{type:"p",text:`R$${a==null?void 0:a.maxDeposit}`,fontSize:"15px",fontWeight:"bold",color:"#64A2FF"})]})]}),e(w,{style:{width:"80%",marginTop:"10px"},value:a.depositProgress,children:o(s,{alignItems:"center",gap:"6px",children:[e("input",{type:"range",max:100,min:0,value:10,style:{width:"100%"}}),e(i,{text:`${a.depositProgress}%`,type:"p",fontWeight:"bold"})]})}),e("br",{}),o(s,{justifyContent:"space-between",width:"80%",children:[e(i,{type:"p",text:"Bet amount",fontSize:"15px",fontWeight:"bold"}),o(s,{alignItems:"center",gap:"3px",children:[e(i,{type:"p",text:`R$ ${(t==null?void 0:t.bet)||0}`,fontSize:"15px",fontWeight:"bold"}),e("small",{children:"/"}),e(i,{type:"p",text:`R$${a==null?void 0:a.maxBet}`,fontSize:"15px",fontWeight:"bold",color:"#64A2FF"})]})]}),e(w,{style:{width:"80%",marginTop:"10px"},value:a.betProgress,children:o(s,{alignItems:"center",gap:"6px",children:[e("input",{type:"range",max:100,min:0,value:10,style:{width:"100%"}}),e(i,{text:`${a.betProgress}%`,type:"p",fontWeight:"bold"})]})}),e(i,{type:"p",text:"View Rank System",color:"#A0ABDB",fontSize:"13px",paddingTop:"20px",cursor:"pointer"})]}),o(l,{padding:"20px 40px 0 40px",isMobile:n,children:[e(i,{type:"p",text:"Wallets",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),e(i,{type:"p",text:"R$",fontSize:"18px",color:"white",fontWeight:"700",paddingBottom:"20px"}),e(i,{type:"p",text:+(t==null?void 0:t.bet)+ +(t==null?void 0:t.deposit)+ +(t==null?void 0:t.bonus),fontSize:"28px",color:"#64A2FF",fontWeight:"700",paddingBottom:"20px"}),o(s,{justifyContent:"space-between",alignItems:"center",width:"100%",gap:"20px",children:[e(I,{bg:"#191C51",primaryText:"BET",secondaryText:`R$ ${(t==null?void 0:t.bet)||0}`,secondaryTextSize:"14px",primaryTextSize:"12px",whiteSpace:"nowrap",padding:n?"10px 20px":"10px 45px"}),e(I,{secondaryTextSize:"14px",primaryTextSize:"12px",padding:"10px 45px",bg:"#191C51",primaryText:"DEPOSIT",secondaryText:`R$ ${(t==null?void 0:t.deposit)||0}`})]}),e(D,{bg:"#A0ABDB",margin:"20px",style:{width:"100%"}}),o(s,{width:"100%",gap:"20px",alignItems:"center",justifyContent:"center",children:[e(C,{text:"Deposit",background:"#5484FF",width:"100%",padding:"15px 20px",addon:O,onSubmit:()=>{p(S({open:!0,tab:0}))}}),e(C,{text:"Withdraw",background:"#F93967",width:"100%",padding:"15px 20px",onSubmit:()=>{p(S({open:!0,tab:1}))}})]}),e("div",{onClick:()=>{b.Inertia.get("/history")},children:e(i,{type:"p",text:"History",color:"#A0ABDB",fontSize:"13px",padding:"10px",cursor:"pointer"})})]})]})})})})})]})};export{_ as default};
