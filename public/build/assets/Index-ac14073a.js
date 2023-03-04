import{s as p,a as e,j as n,T as i,b as d,e as $,h as a,a3 as m,M as S,r as b,C as T,bd as f,F as R,H as D}from"./app-d16937a9.js";import{m as W,f as k,t as A}from"./target-6ea23aaa.js";import{T as z}from"./Tooltip-ebf9ee32.js";import{g as C}from"./GamesCarouseCard-16a323ec.js";import{T as h,l as y}from"./level1-63e16b3b.js";import{P as B,a as P}from"./PageTemplate-13dca870.js";import"./howler-5aa7ec92.js";import"./Grow-5a047b18.js";const E="/build/assets/level0-adc89a82.png",L="/build/assets/level-b3bfa294.png",V=({color:t,level:o})=>e(O,{level:o===0?E:L,children:n("div",{children:[e(i,{color:t,text:"R$ "+[0,10,20,30,40,100][o],type:"p",fontSize:"14px",fontFamily:"Montserrat",fontWeight:"700"}),e(i,{color:t,text:"LV "+o,type:"p",fontSize:"14px",fontFamily:"Montserrat",fontWeight:"700",paddingTop:"13px"})]})}),O=p("div")(({color:t,level:o})=>({display:"flex",justifyContent:"center",alignItems:"center",position:"relative",backgroundImage:`url(${o})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",width:"80px",height:"145px"})),j="/build/assets/fullbg-17c0f86c.png",G=p("div")(({isMobile:t})=>({background:`url(${j})`,backgroundSize:"cover",backgroundRepeat:"no-repeat, no-repeat",textAlign:"center",width:t?"100%":"75%",padding:!t&&"1.5rem",borderRadius:"10px"})),M=p("div")(({value:t})=>({width:"100%","input[type='range']":{background:`linear-gradient(to right, #3586FF 0%, #3586FF ${t}%, #62679E ${t}%, #62679E 100%)`,borderRadius:"10px",height:"18px",outline:"none",transition:"background 450ms ease-in",WebkitAppearance:"none"},"input[type='range']::-webkit-slider-thumb":{width:"10px",WebkitAppearance:"none",background:"red"}})),_=p("div")(({})=>({width:"100%",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center",marginTop:"40px"})),H=()=>{var l;const{isMobile:t}=d(),{wallet:o}=$(r=>r.wallet);return n(G,{isMobile:t,children:[e(i,{type:"p",text:"FULL VIP BONUS",color:"white",fontSize:"17px",fontWeight:"bold",paddingTop:"20px"}),n(_,{children:[e(a,{alignItems:"center",justifyContent:"space-between",width:"80%",children:Array.from({length:5}).map((r,c)=>{var s;return e(V,{color:+((s=o.level)==null?void 0:s.currentLevel)==c?"#FFD338":'"#ABB5E3"',level:c})})}),e(M,{style:{width:"80%",marginTop:"70px"},value:+((l=o==null?void 0:o.level)==null?void 0:l.currentLevel)*25,children:n("div",{children:[e("input",{type:"range",max:100,min:0,value:2,style:{width:"100%"}}),e(i,{type:"p",text:"The BcBoom VIP level system is created with 10 levels, each with a corresponding cash prize. The more you play, the higher the VIP level and the more you will receive.",color:"white",fontSize:"14px",fontWeight:"medium",textAlign:"left",paddingTop:"20px"}),n(a,{justifyContent:"center",alignItems:"center",gap:t?"10px":"30px",margin:"20px 0 20px 0",children:[n("div",{style:{background:"#121539",padding:t?"10px 30px":"14px 45px",borderRadius:"20px"},children:[e(i,{type:"p",text:"Accumulated",fontSize:t?"12px":"17px",fontWeight:"bold"}),e(i,{type:"p",text:"Bet Amount",fontSize:t?"12px":"17px",fontWeight:"bold",whiteSpace:"nowrap"}),e(i,{type:"p",text:`G$ ${m.format((o==null?void 0:o.bet)||0).replace("$","")}`,fontSize:t?"12px":"17px",fontWeight:"bold",color:"#3586FF"})]}),n("div",{style:{background:"#121539",padding:t?"10px 30px":"14px 45px",borderRadius:"20px"},children:[e(i,{type:"p",text:"Accumulated",fontSize:t?"12px":"17px",fontWeight:"bold"}),e(i,{type:"p",text:"Deposit Amount",fontSize:t?"12px":"17px",fontWeight:"bold",whiteSpace:"nowrap"}),e(i,{type:"p",text:`G$ ${m.format((o==null?void 0:o.deposit)||0).replace("$","")}`,fontSize:t?"12px":"17px",fontWeight:"bold",color:"#3586FF"})]})]})]})})]})]})},N="/build/assets/levelBg-5787e809.png",U="/build/assets/level1-a226e1a5.svg",q=S(({className:t,...o})=>e(z,{...o,componentsProps:{tooltip:{className:t}}}))(`
    color: white;
    background-color: #181E46;
    font-size: 11px;
    font-family: Montserrat;
    padding: 15px;
    line-height: 2;
`),K=W(t=>({arrow:{"&:before":{border:"1px solid white"},color:"#1D2036"},tooltip:{backgroundColor:"#1D2036",border:"1px solid #E6E8ED",color:"white"}})),v=p("div")(({value:t})=>({width:"100%","input[type='range']":{background:`linear-gradient(to right, #3586FF 0%, #3586FF ${t}%, #62679E ${t}%, #62679E 100%)`,borderRadius:"10px",height:"18px",outline:"none",transition:"background 450ms ease-in",WebkitAppearance:"none"},"input[type='range']::-webkit-slider-thumb":{width:"10px",WebkitAppearance:"none",background:"red"}})),Y=p("div")(({isMobile:t})=>({background:`url(${N})`,backgroundSize:"cover",backgroundRepeat:"no-repeat, no-repeat",textAlign:"center",width:t?"100%":"35%",padding:"1.5rem",borderRadius:"10px",display:"flex",flexDirection:"column",justifyContent:"space-between"})),J=p("div")(({color:t,level:o})=>({display:"flex",justifyContent:"center",alignItems:"center",position:"relative",backgroundImage:`url(${o})`,backgroundSize:"contain",backgroundRepeat:"no-repeat",margin:"0 auto","& p":{width:"100%",height:"100%",position:"absolute",top:"8%"}})),Q=()=>{var c,s,x,u,g;let t=K();const{isMobile:o}=d(),{wallet:l,level:r}=$(I=>I.wallet);return n(Y,{isMobile:o,children:[n(a,{alignItems:"center",textAlign:"center",justifyContent:"center",children:[e(i,{type:"p",text:"Your Current VIP Level is",textTransform:"uppercase",fontSize:"15px",fontWeight:"bolder"}),e(q,{title:"Upgrade Levels and Bonuses VIP upgrade needs to reach both the next deposit level and the bet amount upgrade conditions, you will automatically receive the corresponding VIP level bonus.",placement:"bottom-start",arrow:!0,classes:{arrow:t.arrow,tooltip:t.tooltip},children:e("img",{src:k,alt:"tooltip",style:{marginLeft:"10px",cursor:"pointer"}})})]}),e(i,{type:"p",text:`LEVEL ${((c=l.level)==null?void 0:c.currentLevel)||0}`,color:"#3586FF",fontSize:"15px",fontWeight:"bolder"}),n(J,{children:[e("img",{src:U,alt:""}),e(i,{text:((s=l.level)==null?void 0:s.currentLevel)||0,type:"p",fontSize:"44px",fontFamily:"Montserrat",fontWeight:"700"})]}),n("div",{style:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column"},children:[n(a,{justifyContent:"space-between",width:"80%",children:[e(i,{type:"p",text:"Deposit",fontSize:"15px",fontWeight:"bold"}),n(a,{alignItems:"center",gap:"3px",children:[e(i,{type:"p",text:"G$"+(l==null?void 0:l.deposit)||0,fontSize:"15px",fontWeight:"bold"}),e("small",{children:"/"}),e(i,{type:"p",text:`G$${r==null?void 0:r.maxDeposit}`,fontSize:"15px",fontWeight:"bold",color:"#FFCD4D"})]})]}),e(v,{style:{width:"80%",marginTop:"10px"},value:r==null?void 0:r.depositProgress,children:n(a,{alignItems:"center",gap:"6px",children:[e("input",{type:"range",max:100,min:0,value:10,style:{width:"100%"}}),e(i,{text:`${r==null?void 0:r.depositProgress}%`,type:"p",fontWeight:"bold"})]})})]}),n("div",{style:{width:"100%",display:"flex",alignItems:"center",flexDirection:"column",marginTop:"40px"},children:[n(a,{justifyContent:"space-between",width:"80%",children:[e(i,{type:"p",text:"Bet",fontSize:"15px",fontWeight:"bold"}),n(a,{alignItems:"center",gap:"3px",children:[e(i,{type:"p",text:`G$ ${(l==null?void 0:l.bet)||0}`,fontSize:"15px",fontWeight:"bold"}),e("small",{children:"/"}),e(i,{type:"p",text:`G$${r==null?void 0:r.maxBet}`,fontSize:"15px",fontWeight:"bold",color:"#43BB41"})]})]}),e(v,{style:{width:"80%",marginTop:"10px"},value:r==null?void 0:r.betProgress,children:n(a,{alignItems:"center",gap:"6px",children:[e("input",{type:"range",max:100,min:0,value:10,style:{width:"100%"}}),e(i,{text:`${r==null?void 0:r.betProgress}%`,type:"p",fontWeight:"bold"})]})})]}),e("div",{style:{marginTop:"20px"},children:e(i,{type:"p",text:`Upgrading to VIP ${(x=l==null?void 0:l.level)==null?void 0:x.nextLevel} also requires:`,fontSize:o?"12px":"17px",fontWeight:"bold"})}),n(a,{justifyContent:"center",alignItems:"center",gap:"30px",margin:"20px 0 20px 0",children:[n("div",{style:{background:"#121539",padding:o?"10px 30px":"14px 45px",borderRadius:"20px",width:"50%"},children:[e(i,{type:"p",text:"Bet",fontSize:o?"12px":"17px",fontWeight:"bold"}),e(i,{type:"p",text:`G$ ${((u=l.level)==null?void 0:u.minimum_bet_for_next_level)||0}`,fontSize:o?"12px":"17px",fontWeight:"bold",color:"#3586FF",whiteSpace:"nowrap"})]}),n("div",{style:{background:"#121539",padding:o?"10px 30px":"14px 45px",borderRadius:"20px",width:"50%"},children:[e(i,{type:"p",text:"Deposit",fontSize:o?"12px":"17px",fontWeight:"bold"}),e(i,{type:"p",text:`G$ ${((g=l.level)==null?void 0:g.minimum_deposit_for_next_level)||0}`,fontSize:o?"12px":"17px",fontWeight:"bold",whiteSpace:"nowrap",color:"#3586FF"})]})]})]})},X="/build/assets/next-10935704.svg",Z="/build/assets/prev-e4ddac0a.svg",ee="/build/assets/level4-16fa03dd.svg",te="/build/assets/level3-8286044a.svg",oe="/build/assets/level5-0d792f72.svg",ie="/build/assets/level6-c40fe120.svg",ne="/build/assets/level7-fcae2b1a.svg",re="/build/assets/level8-16a5489b.svg",w="/build/assets/level0-47b39bbd.svg",F="/build/assets/level10-878dbf93.svg",le="/build/assets/levelBg-73c7a1c4.svg",ae=p("div")(({color:t,isMobile:o})=>({background:`url(${le})`,backgroundSize:o?"cover":"contain",backgroundPosition:"center",backgroundRepeat:"no-repeat",position:"relative",borderRadius:"10px",width:"fit-content",padding:"32px",margin:o&&"0 auto",textAlign:"center","&::before":{content:'""',position:"absolute",top:"20%",left:"0",width:"100%",height:"50%",background:`${t}`,filter:"blur(45px)",borderRadius:"10px 0px 50px",opacity:"0.3",zIndex:1}})),pe=({item:t})=>{const{isMobile:o}=d();return n(ae,{color:t.color,isMobile:o,children:[e("div",{style:{position:"absolute",top:"0",left:o?"44%":"46%"},children:e("img",{src:t.icon,alt:"level1",style:{height:"60px"}})}),n("div",{style:{zIndex:200},children:[e(i,{type:"p",text:`VIP ${t.level}`,color:"#FFD338",fontSize:"16px",fontWeight:"bold",marginTop:"40px"}),e(i,{type:"p",text:"Update Conditions",fontSize:"16px",fontWeight:"bold"}),n(a,{alignItems:"center",gap:"5px",margin:"20px 0 20px 0",style:{zIndex:2e4},children:[e(h,{bg:"#121539",primaryText:"Total deposits",secondaryText:t.totalDesposit,primaryTextSize:"14px",secondaryTextSize:"11px",secondaryColor:"#3586FF",padding:"10px 25px"}),e(h,{padding:"10px 25px",bg:"#121539",primaryText:"Total bets",primaryTextSize:"14px",secondaryTextSize:"11px",secondaryText:t.totalBet,secondaryColor:"#3586FF"})]}),e(i,{type:"p",text:"LEVEL PROTECTION",color:"#FFD338",fontSize:"16px",fontWeight:"bold",paddingTop:"10px"}),e(i,{type:"p",text:`DEPOSIT R$ ${t.levelProtection}/MONTH`,fontSize:"14px",fontWeight:"bold"}),e(f,{margin:"20px",bg:"#6A72B2"}),e(i,{type:"p",text:"WITHDRAWAL PRIVILEGES",color:"#FFD338",fontSize:"16px",fontWeight:"bold",paddingTop:"10px"}),e(i,{type:"p",text:`Number of withdrawals.: ${t.numOfWithdraw} /day`,fontSize:"14px"}),e(i,{type:"p",text:`Maximum withdrawals: R$${t.maximumWithdraw}.000`,fontSize:"14px"}),e(i,{type:"p",text:`Withdrawal fee: ${t.withFee}%`,fontSize:"14px"}),e(i,{type:"p",text:`Free withdrawal amount: R$${t.withAmount}.000`,fontSize:"14px"}),e(f,{margin:"20px",bg:"#6A72B2"}),e(i,{type:"p",text:"CashBack",color:"#FFD338",fontSize:"16px",fontWeight:"bold",paddingTop:"10px"}),n(a,{alignItems:"center",justifyContent:"space-between",children:[e(i,{type:"p",text:`DICE: ${t.dice}`,fontSize:"12px",color:"white"}),e(i,{type:"p",text:`CRASH: ${t.crash}`,fontSize:"12px",color:"white"})]}),n(a,{alignItems:"center",justifyContent:"space-between",margin:"0 0 0 0",children:[e(i,{type:"p",text:`PLINKO: ${t.plimko}`,fontSize:"12px",color:"white"}),e(i,{type:"p",text:`Limbo: ${t.limbo}`,fontSize:"12px",color:"white"})]})]})]})},se=()=>{const{isMobile:t,width:o}=d();console.log("widthsdf: ",o);const[l,r]=b.exports.useState(4);return b.exports.useEffect(()=>{o<768?r(1):o<1024?r(2):o<1480?r(3):r(4)},[o]),e("div",{children:e(T,{autoplay:!1,rowPerCount:l,paging:!1,prevArrow:e("img",{src:Z,alt:"prev"}),nextArrow:e("img",{src:X,alt:"next"}),children:[{icon:F,level:"10",totalDesposit:"R$ 10000000",totalBet:"R$ 40000000",levelProtection:"1000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3586FF"},{icon:w,level:"0",totalDesposit:"R$ 0",totalBet:"R$ 0",levelProtection:"0",numOfWithdraw:"5",maximumWithdraw:"0",withFee:"2.5%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#F93C56"},{icon:y,level:"1",totalDesposit:"R$ 100",totalBet:"R$ 800",levelProtection:"100",numOfWithdraw:"2",maximumWithdraw:"2500",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3DF689"},{icon:te,level:"2",totalDesposit:"R$ 500",totalBet:"R$ 4000",levelProtection:"200",numOfWithdraw:"3",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#6E3DFA"},{icon:ee,level:"3",totalDesposit:"R$ 2000",totalBet:"R$ 16000",levelProtection:"500",numOfWithdraw:"3",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3DFAFA"},{icon:oe,level:"4",totalDesposit:"R$ 10000",totalBet:"R$ 800000",levelProtection:"2000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"400",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#F93C56"},{icon:ie,level:"5",totalDesposit:"R$ 50000",totalBet:"R$ 400000",levelProtection:"1000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3DF689"},{icon:ne,level:"6",totalDesposit:"R$ 2000000",totalBet:"R$ 12000000",levelProtection:"20000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#6E3DFA"},{icon:re,level:"7",totalDesposit:"R$ 500000",totalBet:"R$ 30000000",levelProtection:"50000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3DFAFA"},{icon:F,level:"10",totalDesposit:"R$ 10000000",totalBet:"R$ 40000000",levelProtection:"150000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3586FF"},{icon:w,level:"0",totalDesposit:"R$ 0",totalBet:"R$ 0",levelProtection:"0",numOfWithdraw:"5",maximumWithdraw:"0",withFee:"2.5%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#F93C56"},{icon:y,level:"1",totalDesposit:"R$ 50000000",totalBet:"R$ 200000000",levelProtection:"50000",numOfWithdraw:"5",maximumWithdraw:"20",withFee:"1%",withAmount:"50",dice:"0.5%",crash:"0.5%",limbo:"0.5%",plimko:"0.5%",color:"#3DF689"}].map((s,x)=>e("div",{style:{margin:"20px!important"},children:e("div",{className:"testimoni--wrapper",children:e(pe,{item:s})},x)}))})})},ce=p("div")(({isMobile:t})=>({background:"linear-gradient(119.77deg, #262C55 2.99%, #454BCC 100%)",borderRadius:"10px",width:"100%",height:t?"fit-content":"100px",marginTop:"50px"})),de=p("div")(({color:t})=>({background:"#2D3058",borderRadius:"10px",padding:"20px",textAlign:"center",width:"fit-content",position:"relative",zIndex:"10","& p":{"&:first-child":{fontSize:"100px",fontWeight:"bold",lineHeight:"100px",fontFamily:'Montserrat, "Helvetica", "Arial", sans-serif',background:`linear-gradient(127.1deg, #58FFEB 17.29%, ${t} 87.58%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",textFillColor:"transparent"},"&:nth-child(2)":{fontSize:"12px",color:"white"}},"&::before":{content:'""',position:"absolute",top:"20%",left:"30%",width:"50%",height:"50%",background:`${t}`,filter:"blur(90px)",borderRadius:"10px 0px 50px",opacity:"0.8",zIndex:1},"& img":{position:"absolute",top:"5%",right:"5%"}})),xe=S(({className:t,...o})=>e(z,{...o,componentsProps:{tooltip:{className:t}}}))(`
    color: white;
    background-color: #181E46;
    font-size: 11px;
    font-family: Montserrat;
    padding: 15px;
    line-height: 2;
`),he=W(t=>({arrow:{"&:before":{border:"1px solid white"},color:"#1D2036"},tooltip:{backgroundColor:"#1D2036",border:"1px solid #E6E8ED",color:"white"}})),Fe=()=>{let t=he();const{isMobile:o}=d();return n(R,{children:[e(D,{title:"VIP Rank System"}),e(B,{innerHeader:!0,children:n(P,{item:{title:"VIP Rank System",icon:C,margin:"10px"},index:0,page:"vip",children:[e("div",{style:{marginTop:"60px",zIndex:500,position:"relative"},children:n(a,{alignItems:"normal",justifyContent:"stretch",direction:o?"column":"row",gap:"40px",children:[e(Q,{}),e(H,{})]})}),e(ce,{isMobile:o,children:n(a,{alignItems:o?"center":"start",justifyContent:"space-between",padding:"10px 5%",children:[e("div",{children:e("img",{src:A,alt:"",style:{marginTop:!o&&"-36px",width:o&&"150px"}})}),n(a,{alignItems:"center",gap:o?"5px":"20px",direction:o?"column":"row",children:[e(h,{bg:"#4F5DFE",primaryText:"Original Games",secondaryText:"G$ 0",primaryTextSize:o&&"12px",padding:o&&"5px 20px",width:o&&"100%"}),e(h,{width:o&&"100%",primaryTextSize:o&&"12px",padding:o&&"5px 20px",bg:"#4F5DFE",primaryText:"Accumulated Deposit Amount",secondaryText:"G$ 100",nowrap:!0})]})]})}),e("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",padding:"0 5%"},children:e(a,{alignItems:"center",gap:"50px",direction:o?"column":"row",margin:"100px 0 50px 0",children:[{count:"01",text:"Place a bet on an original or LIVE game and the MONEY BACK engine will automatically calculate the return value based on your VIP level as you enjoy the game.",color:"#3DFAD8"},{count:"02",text:"The cash back mechanism will be settled on your account balance at 0:00 based on your bets placed throughout the day.",color:"#3D89FA"},{count:"03",text:"The more you play, the higher your money back, for example your [VIP1] cumulative level bet of €10,000 will bring you a €20 back bonus. (The return for vip10 is G$50)",color:"#FA3D5F",tooltip:!0}].map((l,r)=>n(de,{color:l.color,children:[e(i,{type:"p",text:l.count}),e(i,{type:"p",text:l.text}),l.tooltip&&e(xe,{title:"60% of Bcboom users can easily reach a cumulative value of over G$10,000 per day. The cumulative bet amount is calculated regardless of whether the bet is a win or a loss.",placement:"bottom-start",arrow:!0,classes:{arrow:t.arrow,tooltip:t.tooltip},children:e("img",{src:k,alt:"tooltip",style:{marginLeft:"10px",cursor:"pointer"}})})]},r))})}),e(se,{})]})})]})};export{Fe as default};
