(function(){
var d=document,H=d.documentElement,$=function(i){return d.getElementById(i)},q=function(s){return Array.prototype.slice.call(d.querySelectorAll(s))};
q("[data-fill]").forEach(function(el){var a=el.getAttribute("data-fill").split("|"),s="";for(var i=0;i<+a[0];i++)s+='<div class="g soon"><div class="i">'+a[1]+'</div><span class="pill s">'+a[2]+'</span></div>';el.innerHTML=s});
function th(l){H.setAttribute("data-theme",l?"light":"dark");$("th").textContent=l?"\ud83c\udf19":"\u2600\ufe0f";if(window.t3)window.t3(l);try{localStorage.setItem("asbg-theme",l?"light":"dark")}catch(e){}}
var sv=null;try{sv=localStorage.getItem("asbg-theme")}catch(e){}th(sv=="light");
$("th").addEventListener("click",function(){th(H.getAttribute("data-theme")!="light")});
var nv=d.querySelector(".nav");
$("mb").addEventListener("click",function(e){e.stopPropagation();var o=nv.classList.toggle("open");this.setAttribute("aria-expanded",o)});
d.addEventListener("click",function(e){if(!e.target.closest(".nav"))nv.classList.remove("open")});
d.addEventListener("keydown",function(e){if(e.key=="Escape")nv.classList.remove("open")});
d.addEventListener("pointermove",function(e){if(e.pointerType=="touch")return;var c=e.target.closest&&e.target.closest(".g");if(!c)return;var b=c.getBoundingClientRect(),x=(e.clientX-b.left)/b.width-.5,y=(e.clientY-b.top)/b.height-.5;c.style.transform="perspective(900px) rotateY("+x*9+"deg) rotateX("+(-y*9)+"deg) translateZ(8px)"});
d.addEventListener("pointerout",function(e){var c=e.target.closest&&e.target.closest(".g");if(c&&!c.contains(e.relatedTarget))c.style.transform=""},true);
var el=$("cd");if(el){var t=new Date(2026,10,18,0,0,0).getTime();var u=function(){var df=t-Date.now();if(df<=0){el.innerHTML='<div><b>Live</b><small>Session day</small></div>';return}var D=Math.floor(df/864e5),h=Math.floor(df/36e5)%24,m=Math.floor(df/6e4)%60;el.innerHTML=[[D,"Days"],[h,"Hours"],[m,"Min"]].map(function(x){return "<div><b>"+x[0]+"</b><small>"+x[1]+"</small></div>"}).join("")};u();setInterval(u,30000)}
var cf=$("cf");if(cf){var FORM_URL="https://script.google.com/macros/s/AKfycbywCAtUDI3-BHe_XZmiTUMGDV3pTWw0Uxj0rniRDlzZPkjQzAA1K4EZQfnJTT12j159/exec";
cf.addEventListener("submit",function(e){e.preventDefault();var m=$("cm"),f=function(i){return $(i).value.trim()};function say(t,k){m.className="cm "+k;m.textContent=t}
if(f("cw"))return;if(!f("cn")||!f("ce")||!f("cg"))return say("Please fill in your name, email and message.","er");
if(!/^\S+@\S+\.\S+$/.test(f("ce")))return say("Please enter a valid email address.","er");
var b=$("cs");b.disabled=true;var p=new URLSearchParams();p.append("name",f("cn"));p.append("email",f("ce"));p.append("phone",f("cp"));p.append("subject",$("cj").value);p.append("message",f("cg"));p.append("website",f("cw"));
fetch(FORM_URL,{method:"POST",mode:"no-cors",body:p}).then(function(){say("Thank you! Your message was sent. We will get back to you soon.","ok");cf.reset();b.disabled=false}).catch(function(){say("Could not send. Please try again.","er");b.disabled=false})})}
var sp=$("sp");if(sp){var fast=H.className.indexOf("nosp")>-1;try{sessionStorage.setItem("sp","1")}catch(e){}setTimeout(function(){sp.classList.add("out");setTimeout(function(){sp.remove()},800)},fast?0:1900)}
if("IntersectionObserver" in window&&!matchMedia("(prefers-reduced-motion: reduce)").matches){var n=0,io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){var x=e.target;x.classList.add("in");io.unobserve(x);setTimeout(function(){x.classList.remove("rv","in");x.style.transitionDelay=""},1100)}})},{threshold:.1});
q(".g,.top,main h2,.hero,.ab p").forEach(function(x){x.classList.add("rv");x.style.transitionDelay=(n++%4*90)+"ms";io.observe(x)})}
(function(){try{if(!window.THREE||matchMedia("(prefers-reduced-motion: reduce)").matches)return;
var cv=$("bg"),r=new THREE.WebGLRenderer({canvas:cv,alpha:true,antialias:innerWidth>700}),s=new THREE.Scene(),cam=new THREE.PerspectiveCamera(55,1,.1,100),g=new THREE.Group(),mx=0,my=0,rot=0,B=0x4db5ff;
cam.position.z=10;s.add(g);
var lm=new THREE.LineBasicMaterial({color:B});
function bx(w,h,d,x,y){var q=new THREE.BoxGeometry(w,h,d),l=new THREE.LineSegments(new THREE.EdgesGeometry(q),lm),m=new THREE.Mesh(q,new THREE.MeshBasicMaterial({color:B,transparent:true,opacity:.1}));l.position.set(x,y,0);m.position.set(x,y,0);g.add(l);g.add(m)}
bx(3.2,3.2,.7,0,0);bx(1.8,1.8,.9,0,0);
[-1,0,1].forEach(function(i){bx(.4,.8,.4,i*.9,2);bx(.4,.8,.4,i*.9,-2);bx(.8,.4,.4,2,i*.9);bx(.8,.4,.4,-2,i*.9)});
var fl=[];for(var i=0;i<9;i++){var o=new THREE.LineSegments(new THREE.EdgesGeometry(i%2?new THREE.OctahedronGeometry(.45):new THREE.BoxGeometry(.6,.6,.6)),new THREE.LineBasicMaterial({color:i%3?0x9fd6ff:0xff9900}));
o.position.set((Math.random()-.5)*20,(Math.random()-.5)*12,(Math.random()-.5)*8-2);o.userData.v=.005+Math.random()*.01;o.userData.p=Math.random()*6;s.add(o);fl.push(o)}
var pa=new Float32Array(900);for(i=0;i<900;i++)pa[i]=(Math.random()-.5)*34;var pg=new THREE.BufferGeometry();pg.setAttribute("position",new THREE.BufferAttribute(pa,3));
var pt=new THREE.Points(pg,new THREE.PointsMaterial({color:0x9fd6ff,size:.06,transparent:true,opacity:.7}));s.add(pt);if(innerWidth<700)pg.setDrawRange(0,140);
window.t3=function(l){lm.color.set(l?0x0a73c9:0x4db5ff);pt.material.color.set(l?0x0a73c9:0x9fd6ff);pt.material.opacity=l?.55:.7};if(document.documentElement.getAttribute("data-theme")=="light")t3(true);
function rs(){var w=innerWidth,h=innerHeight;r.setPixelRatio(Math.min(devicePixelRatio||1,innerWidth<700?1.25:2));r.setSize(w,h,false);cam.aspect=w/h;cam.updateProjectionMatrix();var m=w<700;g.position.x=m?0:4.2;g.position.y=m?3.2:0;g.scale.setScalar(m?.7:1)}
rs();addEventListener("resize",rs);addEventListener("pointermove",function(e){mx=e.clientX/innerWidth-.5;my=e.clientY/innerHeight-.5});
var t0=0;(function a(t){requestAnimationFrame(a);if(document.hidden)return;t*=.001;var tg=(window.scrollY||0)/Math.max(innerHeight,1)*.9;rot+=(tg-rot)*.06;g.rotation.y=rot+t*.35;g.rotation.x=Math.sin(t*.5)*.25+my*.6;g.rotation.z=Math.sin(t*.3)*.1;
fl.forEach(function(o){o.rotation.x+=o.userData.v;o.rotation.y+=o.userData.v*1.3;o.position.y+=Math.sin(t+o.userData.p)*.003});pt.rotation.y=t*.02+mx*.2;cam.position.x+=(mx*1.5-cam.position.x)*.05;cam.lookAt(0,0,0);r.render(s,cam)})(0)}catch(e){}})();
})();