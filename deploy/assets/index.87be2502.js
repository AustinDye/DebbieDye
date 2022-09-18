import{r as P,c as O,a as w,o as _,b as N,d as C,e as v,f as e,w as h,p as $,g as S,h as l,i as M,j as E,k as f,l as L,S as R,m as D,P as B,n as b,q as k,s as g,T as H,t as y,u as z,v as W,x as F,y as V}from"./vendor.472b0a94.js";const G=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&s(i)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerpolicy&&(r.referrerPolicy=a.referrerpolicy),a.crossorigin==="use-credentials"?r.credentials="include":a.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}};G();const K=P({user:{},account:{}});var p=(o,t)=>{for(const[n,s]of t)o[n]=s;return o};const U={name:"App",setup(){return{appState:O(()=>K)}}};function Y(o,t,n,s,a,r){const i=w("router-view");return _(),N(i)}var J=p(U,[["render",Y]]),Q="/assets/debbie-removebg-preview-2.d3bb06d2.png";const X={setup(){return{}}},T=o=>($("data-v-6a7bccb0"),o=o(),S(),o),Z={class:"container-fluid no-parallax bg-light"},ee={class:"row main-row"},te=T(()=>e("div",{class:"back-square"},null,-1)),se={class:"col-12 d-flex justify-content-center align-items-center section-header"},oe={class:"text-center"},ae={class:""},ne=l(" Over 14 yrs experience as a Real Estate Transaction Coordinator "),ie=[ne],re={class:"fs-4 text-secondary"},ce=l(" I enjoy assisting agents with the details of their transactions, so they can be out doing what they love. "),le=[ce],de={class:"col-12 image-holder"},_e=T(()=>e("img",{src:Q,alt:"debbie headshot image",class:"head-img"},null,-1)),ve={class:"card card-1"},he={class:"p-4 fs-4"},ue=l(" I believe my background in mortgage lending has given me an advantage to understand the full process of what takes place from contract to closing on all levels. "),pe=[ue],me=T(()=>e("div",{class:"col-12 bio-holder"},[e("div",{class:"container"},[e("p",{class:""},[l(" I was a realtor when I realized that my gifts lay in taking care of all the details of the transaction. I was working with an agency when an opportunity arose for me to become an underwriting assistant for a wholesale lender, and I leaned in. I asked a lot of questions and learned what an underwriters and agents needed behind the scenes. After about 6 months, I transitioned into a loan processor and within a couple of years my manager asked me to pick up more and more transaction responsibilities, such as "),e("strong",null,"underwriting, proccesses, and closing"),l(". One of my specialties was in FHA 203k rehab loans, an ugly process that most of my colleagues avoided \u2014 but I took them on. "),e("strong",null,"I always enjoy a challenge."),e("br"),e("br"),l(" In my free time, I like to golf, play cards with my friends and family, and I even just recently started doing watercolor painting with my grandchildren! ")])])],-1));function ge(o,t,n,s,a,r){const i=C("scrollanimation");return _(),v("div",Z,[e("div",ee,[te,e("div",se,[e("div",oe,[h(e("h2",ae,ie,512),[[i]]),h(e("p",re,le,512),[[i]])])]),e("div",de,[_e,e("div",ve,[h(e("p",he,pe,512),[[i]])])]),me])])}var fe=p(X,[["render",ge],["__scopeId","data-v-6a7bccb0"]]),be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:fe});const ye={setup(){return{}}},we={class:"no-parallax"},$e=M('<div class="container bg-light" data-v-c199f1a6><div class="row justify-content-center align-items-center pt-5" data-v-c199f1a6><div class="col-6" data-v-c199f1a6><p class="text-center text-muted" data-v-c199f1a6> Debbie Dye <br data-v-c199f1a6> Transaction Coordination <br data-v-c199f1a6> \xA92022 </p></div><div class="col-6" data-v-c199f1a6><p class="text-center text-muted" data-v-c199f1a6> Website Developed by <br data-v-c199f1a6> Pleiades ProjectWorks <br data-v-c199f1a6> \xA92022 </p></div></div></div>',1),Se=[$e];function ke(o,t,n,s,a,r){return _(),v("div",we,Se)}var xe=p(ye,[["render",ke],["__scopeId","data-v-c199f1a6"]]),Ce=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:xe});const Me={setup(){return E(()=>{const o=document.querySelectorAll(".section");let t=[];for(let n=0;n<o.length;n++){const s=o[n],a=s.getBoundingClientRect();let r;switch(n){case 0:r=0;break;case 1:r=a.height*.25;break;case 2:r=a.height*.15;break;case 3:r=a.height*.35;break}s.style.top=r+"px";const i={x:0,y:0};s.className.includes("section-2")||s.className.includes("section-4")?i.x=a.left:i.x=a.left+a.width-3,i.y=s.offsetTop+a.height/2,t.push(i)}for(let n=0;n<t.length-1;n++){const s=t[n];console.log(t[n]);let a=document.getElementById("svg-"+n);console.log(a);let r=Math.abs(t[n+1].y-s.y),i=Math.abs(t[n+1].x-s.x),c=Math.sqrt(Math.pow(r,2)+Math.pow(i,2)),d=Math.acos(r/c)*(180/Math.PI);a.style.position="absolute",a.style.top=50+"%",n==1||n==3?(a.style.left=0,a.style.transform=`rotate(${d}deg)`):(a.style.right=0,a.style.transform=`rotate(-${d}deg)`),a.style.transformOrigin="top",a.setAttribute("height",c),a.setAttribute("className","svgCanvas"),a.setAttribute("width","4px"),a.setAttribute("id",`svg-${n}`);let u=document.createElementNS("http://www.w3.org/2000/svg","line");u.setAttribute("stroke","#d66e00"),u.setAttribute("id","svgLine-"+n),u.setAttribute("stroke-width","4"),u.setAttribute("x1","0"),u.setAttribute("y1","0"),u.setAttribute("x2","100%"),u.setAttribute("y2","100%"),a.appendChild(u),setTimeout(()=>{u.classList.add("dashAnimation")},1e3*n)}}),{}}},Te={class:"container"},Ie=M('<div class="row backsplash" data-v-91bd8e20><div class="hold-2 mb-5" data-v-91bd8e20><h2 class="p-2" data-v-91bd8e20>CONTRACT TO CLOSE CHECKLIST</h2></div><div class="col-md-5" data-v-91bd8e20><div class="section section-1" data-v-91bd8e20><p data-v-91bd8e20><span data-v-91bd8e20>1.</span>First, all documents and MLS information for the property are verified. </p><p data-v-91bd8e20><span data-v-91bd8e20>2.</span>A digital folder is created in Google Drive to easily share files. </p><p data-v-91bd8e20><span data-v-91bd8e20>3.</span>Introductions emails go out to all parties.</p><div class="svgCanvas svg-0" data-v-91bd8e20><svg id="svg-0" xmlns="http://www.w3.org/2000/svg" data-v-91bd8e20></svg></div></div></div><div class="col-md-5" data-v-91bd8e20><div class="section section-2" data-v-91bd8e20><p data-v-91bd8e20><span data-v-91bd8e20>4.</span>All requisite documents are uploaded to the transaction management system. </p><p data-v-91bd8e20><span data-v-91bd8e20>5.</span>Earnest money and receipts are requested from the relevant parties. This is uploaded and sent to all parties. </p><p data-v-91bd8e20><span data-v-91bd8e20>6.</span> Title Commitment is reviewed and sent to the buyer for review. </p><div class="svgCanvas svg-1" data-v-91bd8e20><svg id="svg-1" xmlns="http://www.w3.org/2000/svg" data-v-91bd8e20></svg></div></div></div><div class="col-md-5" data-v-91bd8e20><div class="section section-3" data-v-91bd8e20><p data-v-91bd8e20><span data-v-91bd8e20>8.</span> The agent is reminded the day before the due date of the RE-10 Inspection Report. </p><p data-v-91bd8e20><span data-v-91bd8e20>9.</span>Repairs and credits are noted and the RE10 is sent to lender and title if the sale price changes. </p><p data-v-91bd8e20><span data-v-91bd8e20>10.</span> Information about utilites are sent to the buyer. </p><div class="svgCanvas svg-2" data-v-91bd8e20><svg id="svg-2" xmlns="http://www.w3.org/2000/svg" data-v-91bd8e20></svg></div></div></div><div class="col-md-5" data-v-91bd8e20><div class="section section-4" data-v-91bd8e20><p data-v-91bd8e20><span data-v-91bd8e20>10.</span>The settlement statement is reviewed for accuracy by two sets of eyes, and is signed and uploaded to the transaction management system. </p><p data-v-91bd8e20><span data-v-91bd8e20>12.</span>Commission checks are uploaded, the property folder in Drive is considered closed and is archived for 1 year. </p><div class="svgCanvas svg-3" data-v-91bd8e20><svg id="svg-3" xmlns="http://www.w3.org/2000/svg" data-v-91bd8e20></svg></div></div></div><div class="spacer-20" data-v-91bd8e20></div></div>',1),Ae=[Ie];function je(o,t,n,s,a,r){return _(),v("div",Te,Ae)}var Oe=p(Me,[["render",je],["__scopeId","data-v-91bd8e20"]]),Ee=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Oe});const Le={setup(){return{}}},qe={class:"component"};function Pe(o,t,n,s,a,r){return _(),v("div",qe)}var Ne=p(Le,[["render",Pe]]),Re=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Ne});const De={setup(){const o=f(null),t=f(!1),n=f(!1),s=f("");function a(){t.value=!t.value;let r=document.querySelectorAll(".nav-link");if(r[r.length-1].classList.contains("opaque"))for(let i=0;i<r.length;i++)r[i].classList.remove("opaque");else for(let i=0;i<r.length;i++){const c=r[i];setTimeout(()=>{c.classList.add("opaque")},75*i)}}return L(()=>{let r=document.querySelector(".navbar");n.value,t.value,r&&(n.value&&!t.value&&(s.value=setTimeout(()=>{r.classList.remove("opaque")},4e3)),n.value&&t.value&&clearTimeout(s.value))}),E(()=>{let r=document.querySelector("main"),i=r.scrollTop,c=document.querySelector(".navbar");r.onscroll=function(){let d=r.scrollTop;i>d?(c.classList.add("navbar_show"),c.classList.add("opaque"),n.value=!0):(c.classList.remove("navbar_show"),c.classList.remove("opaque"),n.value=!1),i=d}}),{collapse:o,toggleStyle:a}}},I=o=>($("data-v-943f5a04"),o=o(),S(),o),Be={class:"navbar sticky-top navbar-expand-lg navbar-dark"},He={class:"container-fluid nav-container"},ze=I(()=>e("span",{class:"navbar-toggler-icon"},null,-1)),We=[ze],Fe={class:"float"},Ve=I(()=>e("h2",{class:"mb-0"},"Debbie Dye",-1)),Ge=[Ve],Ke={ref:"collapse",class:"collapse navbar-collapse justify-content-md-around",id:"myNavbar"},Ue={class:"navbar-nav"},Ye={class:"nav-item mx-md-5"},Je={class:"nav-item mx-md-5"},Qe={class:"navbar-nav"},Xe={class:"nav-item mx-md-5"},Ze=I(()=>e("li",{class:"nav-item mx-md-5"},[e("a",{class:"nav-link",href:"#"},"Contact")],-1));function et(o,t,n,s,a,r){return _(),v("nav",Be,[e("div",He,[e("button",{onClick:t[0]||(t[0]=(...i)=>s.toggleStyle&&s.toggleStyle(...i)),class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#myNavbar","aria-controls":"myNavbar","aria-expanded":"false","aria-label":"Toggle navigation"},We),e("div",Fe,[e("a",{class:"debbie",onClick:t[1]||(t[1]=i=>o.$emit("scroll","Landing"))},Ge)]),e("div",Ke,[e("ul",Ue,[e("li",Ye,[e("a",{class:"nav-link",onClick:t[2]||(t[2]=i=>o.$emit("scroll","Bio"))},"About Me")]),e("li",Je,[e("a",{class:"nav-link",onClick:t[3]||(t[3]=i=>o.$emit("scroll","Services"))},"Services")])]),e("ul",Qe,[e("li",Xe,[e("a",{class:"nav-link",onClick:t[4]||(t[4]=i=>o.$emit("scroll","Reviews"))},"Reviews")]),Ze])],512)])])}var tt=p(De,[["render",et],["__scopeId","data-v-943f5a04"]]),st=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:tt});const ot={components:{Swiper:R,SwiperSlide:D},setup(){return{onSwiper:n=>{console.log(n)},onSlideChange:()=>{console.log("slide change")},modules:[B]}}},x=o=>($("data-v-4994b784"),o=o(),S(),o),at={class:"no-parallax container-fluid bg-light"},nt={class:"row d-flex justify-content-center"},it=x(()=>e("h1",{class:"text-center mb-md-4"},"Reviews",-1)),rt={class:"col-md-10 col-sm-12 swiper-container"},ct={class:"swiper-box"},lt=l(" Debbie Dye is a seasoned veteran when it comes to managing real estate transactions. When I see her name involved, I rest assured knowing she is paying attention to all the fine details. "),dt=[lt],_t=x(()=>e("b",null,"- Melissa Bates, Senior Escrow Officer, Empire Title & Escrow",-1)),vt=x(()=>e("div",{class:"swiper-box"},[e("p",null," Have you worked with me before? Writing me a review would mean the world! "),e("b",null,"Send your reviews to debbie@debdyetcservices.com")],-1)),ht=x(()=>e("div",{class:"spacer-10 bg-light"},null,-1));function ut(o,t,n,s,a,r){const i=w("swiper-slide"),c=w("swiper"),d=C("scrollanimation");return _(),v("div",at,[e("div",nt,[it,e("div",rt,[b(c,{modules:s.modules,pagination:!0,"slides-per-view":1,onSwiper:s.onSwiper,onSlideChange:s.onSlideChange,class:"mySwiper"},{default:k(()=>[b(i,null,{default:k(()=>[e("div",ct,[h(e("p",null,dt,512),[[d]]),_t])]),_:1}),b(i,null,{default:k(()=>[vt]),_:1})]),_:1},8,["modules","onSwiper","onSlideChange"])])]),ht])}var pt=p(ot,[["render",ut],["__scopeId","data-v-4994b784"]]),mt=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:pt});const gt={setup(){const o=f(),t=f(!1);L(()=>{o.value&&(o.value.scrollIntoView(),console.log(o.value))});function n(){t.value=!t.value}return{scrollMark:o,showModal:t,toggleModal:n,mobile:O(()=>window.screen.width<=578)}}},m=o=>($("data-v-fb1f2358"),o=o(),S(),o),ft={class:"parallax bg container-fluid"},bt=m(()=>e("div",{class:"spacer-10"},null,-1)),yt={class:"row d-flex bg-light justify-content-center"},wt={class:"col-md-10 col-sm-12"},$t={class:"title-item"},St={class:"text-center mt-5"},kt=l(" Transaction Coordination "),xt=[kt],Ct={class:""},Mt=l(" The job of a real estate agent is a lot like the two sides of a coin. There is the customer service aspect of the career, and then there is the transaction side. Both are as different as night and day but are both necessary to be a successful real estate agent. They are integral and must work together to close a successful deal and ensure everyone is satisfied with the ultimate outcome. The transaction coordinator works hard with the paperwork (both paper and electronic), coordination, phone calls, and other tasks. The agent handles the face-to-face customer service part of the job with the sellers, buyers, and others. A successful agent depends on their transaction coordinator and vice versa. The agent will show properties and focus on all aspects of real estate marketing while the transaction coordinator handles the behind-the-scenes tasks. "),Tt=[Mt],It={class:"col-md-10 col-sm-12"},At={class:"row selling-point-container"},jt={class:"col-md-6"},Ot={class:"selling-point"},Et={class:"text-secondary text-center fs-1 fw-bolder"},Lt=l(" Grow Your Buisness "),qt=[Lt],Pt={class:""},Nt=l(" Most agents hire a transaction coordinator in order to help them get more contracts signed. Agents view a transaction coordinator as an investment to grow their business "),Rt=[Nt],Dt=m(()=>e("div",null,null,-1)),Bt={class:"col-md-6"},Ht={class:"selling-point"},zt={class:"text-secondary text-center fs-1 fw-bolder"},Wt=l(" More Time Closing Deals "),Ft=[Wt],Vt={class:""},Gt=l(" If you dislike the paperwork and attention to detail necessary for the closing process you will love having a TC. However, agents also want to use TC\u2019s in order to \u201Csave themselves\u201D from paperwork or administrative tasks and to ensure they can deliver fantastic service to clients. "),Kt=[Gt],Ut=m(()=>e("div",null,null,-1)),Yt={key:0,class:"spacer-10"},Jt={key:0,class:"modalContainer"},Qt={class:"modalContent"},Xt={id:"modalTop",ref:"scrollMark"},Zt={key:0,class:"spacer-20"},es=m(()=>e("div",{class:"spacer-10 d-xl-block"},null,-1)),ts={key:1,class:"spacer-10"},ss={class:"contracts position-relative row h-sm-50"},os={class:"col-lg-6"},as={class:"card-container-left"},ns={class:"card card-1"},is={class:"fs-1"},rs=l("Contract to Close"),cs=[rs],ls={class:"text-body-mobile mt-3"},ds=l(" Contract to Close is all about what happens once your contract has been accepted until the day of closing. Our goal is to ensure that you and your clients have a smooth transaction from executed contract to the closing table. We achieve this by assisting you with all of the daily details of your contracts once they have been executed. We ensure that all parties involved are updated with what is going on during the transactions, in addition to making sure deadline are being met and that we close on time. "),_s=[ds],vs={class:"d-flex justify-content-between"},hs={class:"fs-2"},us=l(" Price per file : "),ps={class:"bubble"},ms=l("$350"),gs=[ms],fs={key:0,class:"d-flex align-items-end mb-3"},bs={key:0,class:"d-flex justify-content-end align-items-center"},ys=m(()=>e("em",null,"details",-1)),ws=m(()=>e("i",{class:"ms-2 mdi mdi-plus"},null,-1)),$s=[ys,ws],Ss=m(()=>e("div",{class:"spacer-20 d-lg-none"},null,-1)),ks={class:"col-lg-6"},xs={class:"card-container-right"},Cs={class:"card card-2"},Ms={class:"fs-1"},Ts=l("Pre-listing to Close"),Is=[Ts],As={class:"text-body-mobile mt-3"},js=l(" Instead of simply working through the closing and escrow services, we can help work from the very beginning of the pre-listing process and all the way until the home is sold. While the agent handles the face-to-face customer service part of the job with the sellers, buyers, and others, the transaction coordinator keeps an eye on the seller\u2019s transactions, initial contract to the "),Os=[js],Es={class:"d-flex justify-content-between"},Ls={class:"fs-2"},qs=l(" Price per file : "),Ps={class:"bubble"},Ns=l("$350"),Rs=[Ns],Ds={key:0,class:"d-flex align-items-end mb-3"},Bs={key:0,class:"d-flex justify-content-end align-items-center"},Hs=m(()=>e("em",null,"details",-1)),zs=m(()=>e("i",{class:"ms-2 mdi mdi-plus"},null,-1)),Ws=[Hs,zs];function Fs(o,t,n,s,a,r){const i=w("ModalContent1"),c=C("scrollanimation");return _(),v("div",ft,[bt,e("div",yt,[e("div",wt,[e("div",$t,[h(e("h1",St,xt,512),[[c]]),h(e("p",Ct,Tt,512),[[c]])])]),e("div",It,[e("div",At,[e("div",jt,[e("div",Ot,[h(e("h2",Et,qt,512),[[c]]),h(e("p",Pt,Rt,512),[[c]]),Dt])]),e("div",Bt,[e("div",Ht,[h(e("h2",zt,Ft,512),[[c]]),h(e("p",Vt,Kt,512),[[c]]),Ut])])])]),s.mobile?g("",!0):(_(),v("div",Yt))]),b(H,{name:"modalFade"},{default:k(()=>[s.showModal?(_(),v("div",Jt,[e("div",Qt,[e("div",Xt,null,512),b(i)]),e("div",{onClick:t[0]||(t[0]=y((...d)=>s.toggleModal&&s.toggleModal(...d),["stop"])),id:"modal-1",class:"modalDialog"})])):g("",!0)]),_:1}),s.mobile?g("",!0):(_(),v("div",Zt)),es,s.mobile?(_(),v("div",ts)):g("",!0),e("div",ss,[e("div",os,[e("div",as,[e("div",ns,[e("div",null,[h(e("h5",is,cs,512),[[c]]),h(e("p",ls,_s,512),[[c]])]),e("div",vs,[e("h6",hs,[us,h(e("span",ps,gs,512),[[c]])]),s.mobile?g("",!0):(_(),v("div",fs,[e("button",{onClick:t[1]||(t[1]=y((...d)=>s.toggleModal&&s.toggleModal(...d),["stop"]))},"See More")]))]),s.mobile?(_(),v("div",bs,[e("p",{class:"mb-0",onClick:t[2]||(t[2]=y((...d)=>s.toggleModal&&s.toggleModal(...d),["stop"]))},$s)])):g("",!0)])])]),Ss,e("div",ks,[e("div",xs,[e("div",Cs,[e("div",null,[h(e("h5",Ms,Is,512),[[c]]),h(e("p",As,Os,512),[[c]])]),e("div",Es,[e("h6",Ls,[qs,h(e("span",Ps,Rs,512),[[c]])]),s.mobile?g("",!0):(_(),v("div",Ds,[e("button",{onClick:t[3]||(t[3]=y((...d)=>s.toggleModal&&s.toggleModal(...d),["stop"]))},"See More")]))]),s.mobile?(_(),v("div",Bs,[e("p",{class:"mb-0",onClick:t[4]||(t[4]=y((...d)=>s.toggleModal&&s.toggleModal(...d),["stop"]))},Ws)])):g("",!0)])])])])])}var Vs=p(gt,[["render",Fs],["__scopeId","data-v-fb1f2358"]]),Gs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Vs});const Ks={setup(){return{}}},Us={class:"parallax bg"},Ys=M('<div class="word-wrapper text-info" data-v-0f018773><h1 data-v-0f018773>Debbie Dye</h1><h2 class="fw-bold" data-v-0f018773>Real Estate Transaction Coordinating Services</h2><span class="d-flex" data-v-0f018773><div class="mdi mdi-format-quote-open" data-v-0f018773></div><h5 data-v-0f018773>Be a ray of sunshine in someones life to make it a brighter day</h5><div class="mdi mdi-format-quote-close pt-1" data-v-0f018773></div></span></div>',1),Js=[Ys];function Qs(o,t,n,s,a,r){return _(),v("div",Us,Js)}var Xs=p(Ks,[["render",Qs],["__scopeId","data-v-0f018773"]]),Zs=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Xs});function eo(o){Object.entries({"./components/BioSection.vue":be,"./components/Footer.vue":Ce,"./components/ModalContent1.vue":Ee,"./components/ModalContent2.vue":Re,"./components/Navbar.vue":st,"./components/ReviewsSwiper.vue":mt,"./components/ServicesSection.vue":Gs,"./components/TopSection.vue":Zs}).forEach(([n,s])=>{const a=s.name||n.substr(n.lastIndexOf("/")+1).replace(/\.\w+$/,"");o.component(a,s.default)})}const to=new IntersectionObserver((o,t)=>{o.forEach(n=>{n.isIntersecting&&(n.target.classList.add("enter"),t.unobserve(n.target))})}),so=(o,t)=>{t.value||(t.value={before:"before-enter",after:"upon-exit"}),console.log(t),o.classList.add("before-enter"),to.observe(o)},oo="modulepreload",q={},ao="/",no=function(t,n){return!n||n.length===0?t():Promise.all(n.map(s=>{if(s=`${ao}${s}`,s in q)return;q[s]=!0;const a=s.endsWith(".css"),r=a?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${r}`))return;const i=document.createElement("link");if(i.rel=a?"stylesheet":oo,a||(i.as="script",i.crossOrigin=""),i.href=s,document.head.appendChild(i),a)return new Promise((c,d)=>{i.addEventListener("load",c),i.addEventListener("error",d)})})).then(()=>t())};function io(o){switch(o){case"./pages/HomePage.vue":return no(()=>import("./HomePage.4d06ce73.js"),["assets/HomePage.4d06ce73.js","assets/vendor.472b0a94.js"]);default:return new Promise(function(t,n){(typeof queueMicrotask=="function"?queueMicrotask:setTimeout)(n.bind(null,new Error("Unknown variable dynamic import: "+o)))})}}function A(o){return()=>io(`./pages/${o}.vue`)}const ro=[{path:"/",name:"Home",component:A("HomePage")},{path:"/about",name:"About",component:A("AboutPage")},{path:"/account",name:"Account",component:A("AccountPage"),beforeEnter:F}],co=z({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:W(),routes:ro}),j=V(J);eo(j);j.directive("scrollanimation",so);j.use(co).mount("#app");export{p as _};
