const IMGS={
  1: "assets/images/product-01.jpg",
  2: "assets/images/product-02.jpg",
  3: "assets/images/product-03.jpg",
  4: "assets/images/product-04.jpg",
  5: "assets/images/product-05.jpg",
  6: "assets/images/product-06.jpg",
  7: "assets/images/product-07.jpg",
  8: "assets/images/product-08.jpg",
  9: "assets/images/product-09.jpg",
  10: "assets/images/product-10.jpg",
  11: "assets/images/product-11.jpg",
  12: "assets/images/product-12.jpg",
  13: "assets/images/product-13.jpg",
  14: "assets/images/product-14.jpg",
  15: "assets/images/product-15.jpg",
  16: "assets/images/product-16.jpg",
  17: "assets/images/product-17.jpg",
  18: "assets/images/product-18.jpg",
  19: "assets/images/product-19.jpg",
};


// ======= PRODUCTS =======
const P=[
  {id:1,code:"AAZ-001",name:"Classic Amethyst",desc:"8mm genuine stones with silver accents for everyday elegance",price:60,orig:100,img:IMGS[2],badge:"Bestseller",bc:"",tags:["Calming","Protection"],r:4.5,rv:"1.2k",f:"bestseller"},
  {id:2,code:"AAZ-002",name:"Amethyst & Clear Quartz",desc:"Powerful combination for amplified energy and clarity",price:60,orig:98,img:IMGS[3],badge:"New",bc:"nb",tags:["Energy","Clarity"],r:5,rv:"894",f:"new"},
  {id:3,code:"AAZ-003",name:"Chakra Healing Set",desc:"7 chakra stones with amethyst center for complete balance",price:65,orig:120,img:IMGS[4],badge:"Limited",bc:"lb",tags:["Balance","Harmony"],r:4,rv:"567",f:"all"},
  {id:4,code:"AAZ-004",name:"Premium Amethyst",desc:"10mm high-quality beads with gold-plated accents",price:100,orig:140,img:IMGS[5],badge:"Premium",bc:"prb",tags:["Luxury","Elegance"],r:4.5,rv:"452",f:"premium"},
  {id:5,code:"AAZ-005",name:"Lavender Amethyst",desc:"Soft lavender stones for gentle, soothing energy",price:90,orig:125,img:IMGS[6],badge:"Popular",bc:"pb2",tags:["Soothing","Peace"],r:4,rv:"321",f:"bestseller"},
  {id:6,code:"AAZ-006",name:"Deep Purple Amethyst",desc:"Rich dark stones for enhanced intuition and protection",price:100,orig:150,img:IMGS[7],badge:"",bc:"",tags:["Intuition","Deep"],r:5,rv:"678",f:"premium"},
  {id:7,code:"AAZ-007",name:"Mini Amethyst Beads",desc:"Delicate 6mm beads perfect for layering with any style",price:80,orig:100,img:IMGS[8],badge:"",bc:"",tags:["Delicate","Layering"],r:4.5,rv:"412",f:"new"},
  {id:8,code:"AAZ-008",name:"Love & Healing Duo",desc:"Amethyst paired with rose quartz for love and healing",price:60,orig:100,img:IMGS[9],badge:"Bestseller",bc:"",tags:["Love","Healing"],r:5,rv:"845",f:"bestseller"},
  {id:9,code:"AAZ-009",name:"Amethyst Stack Set",desc:"Three bracelets designed to be worn beautifully together",price:60,orig:100,img:IMGS[10],badge:"",bc:"",tags:["Set","Stackable"],r:4,rv:"398",f:"all"},
  {id:10,code:"AAZ-010",name:"Amethyst Stack Trio",desc:"Premium three-piece set with varied bead sizes",price:60,orig:100,img:IMGS[11],badge:"",bc:"",tags:["Set","Stackable"],r:4,rv:"398",f:"all"},
  {id:11,code:"AAZ-011",name:"Custom Name Amethyst",desc:"Personalized bracelet with your name in sterling silver",price:60,orig:100,img:IMGS[12],badge:"Exclusive",bc:"ex",tags:["Personalized","Custom"],r:4.5,rv:"756",f:"premium"},
  {id:12,code:"AAZ-012",name:"Rose Quartz & Onyx",desc:"Soft pink rose quartz paired with powerful black onyx beads",price:70,orig:110,img:IMGS[13],badge:"New",bc:"nb",tags:["Love","Balance"],r:4.5,rv:"210",f:"new"},
  {id:13,code:"AAZ-013",name:"Lavender Dream",desc:"Soft lavender beads with a single black onyx centre stone",price:65,orig:100,img:IMGS[14],badge:"",bc:"",tags:["Calm","Clarity"],r:4,rv:"189",f:"all"},
  {id:14,code:"AAZ-014",name:"Purple Mix Duo",desc:"Lavender & deep purple crackle beads — layered energy",price:75,orig:115,img:IMGS[15],badge:"Popular",bc:"pb2",tags:["Energy","Style"],r:5,rv:"302",f:"bestseller"},
  {id:15,code:"AAZ-015",name:"Black Eagle",desc:"Matte black onyx with silver eagle charm — bold & powerful",price:90,orig:140,img:IMGS[16],badge:"Premium",bc:"prb",tags:["Power","Bold"],r:4.5,rv:"175",f:"premium"},
  {id:16,code:"AAZ-016",name:"White Marble Anchor",desc:"White howlite marble beads with gold anchor charm",price:85,orig:130,img:IMGS[17],badge:"",bc:"",tags:["Strength","Calm"],r:4,rv:"143",f:"all"},
  {id:17,code:"AAZ-017",name:"Dark Bear",desc:"Dark crackle glass beads with a cute gold teddy bear charm",price:65,orig:100,img:IMGS[18],badge:"New",bc:"nb",tags:["Cute","Dark"],r:4,rv:"167",f:"new"},
  {id:18,code:"AAZ-018",name:"Pastel Panda",desc:"Multi-colour pastel crackle beads with panda face charm",price:60,orig:95,img:IMGS[19],badge:"Bestseller",bc:"",tags:["Fun","Pastel"],r:5,rv:"289",f:"bestseller"},
];

// ======= STARS =======
function stars(r){let s='';for(let i=1;i<=5;i++){if(i<=Math.floor(r))s+='★';else if(i===Math.ceil(r)&&r%1)s+='⯨';else s+='☆'}return s}

// ======= RENDER PRODUCTS =======
function render(f='all'){
  const list=f==='all'?P:P.filter(p=>p.f===f);
  const off=p=>Math.round((1-p.price/p.orig)*100);
  document.getElementById('pg').innerHTML=list.map(p=>`
<div class="pc">
  ${p.badge?`<div class="pbg ${p.bc}">${p.badge}</div>`:''}
  <div class="pim">
    <img src="${p.img}" alt="${p.name}" loading="lazy" onerror="this.outerHTML='<div class=ph>💎</div>'">
    <button class="pw" data-id="${p.id}" onclick="toggleW(this)">♡</button>
  </div>
  <div class="pbd">
    <div class="pts">${p.tags.map(t=>`<span class="ptg">${t}</span>`).join('')}</div>
    <div style="font-size:.63rem;font-weight:700;color:var(--t3);letter-spacing:.06em;margin-bottom:2px">${p.code}</div>
    <div class="pn">${p.name}</div>
    <div class="pds">${p.desc}</div>
    <div class="psr"><span class="st3">${stars(p.r)}</span><span class="rc">(${p.rv})</span></div>
    <div class="ppr"><span class="cp">₹${p.price}</span><span class="op">₹${p.orig}</span><span class="of">${off(p)}% off</span></div>
    <div class="pbs">
      <button class="bca" onclick="addCart(${p.id})">+ Add to Cart</button>
      <button class="bbu" onclick="buyNow(${p.id})">⚡ Buy Now</button>
    </div>
  </div>
</div>`).join('');
}

// ======= CART =======
const cart={};

function addCart(id){
  const p=P.find(x=>x.id===id);if(!p)return;
  cart[id]?cart[id].qty++:(cart[id]={...p,qty:1});
  updCart();toast(p.name+' added! 🛍');
}
function remCart(id){delete cart[id];updCart();renderDrw()}
function chQty(id,d){
  if(!cart[id])return;
  cart[id].qty=Math.max(1,cart[id].qty+d);
  updCart();renderDrw();
}
function updCart(){
  const tot=Object.values(cart).reduce((s,i)=>s+i.qty,0);
  const b=document.getElementById('cbdg');
  b.textContent=tot;b.classList.toggle('on',tot>0);
  const c=document.getElementById('dcnt');
  if(c)c.textContent=tot?`(${tot})`:'';
  const sub=Object.values(cart).reduce((s,i)=>s+i.price*i.qty,0);
  document.getElementById('dtot').textContent='₹'+sub;
  const shipEl=document.getElementById('dship');
  if(shipEl)shipEl.textContent=Object.values(cart).length?'₹100':'₹0';
}
function renderDrw(){
  const el=document.getElementById('dit');
  const items=Object.values(cart);
  if(!items.length){el.innerHTML='<div class="dem">🛍<p>Your cart is empty</p><p style="font-size:.76rem;color:var(--t3)">Add some crystal magic ✨</p></div>';return}
  el.innerHTML=items.map(item=>`
<div class="dim">
  <img src="${item.img}" alt="${item.name}" class="dim-img" loading="lazy" onerror="this.outerHTML='<div class=diph>💎</div>'" style="width:62px;height:62px;border-radius:9px;object-fit:cover;flex-shrink:0">
  <div class="din2">
    <div class="din3">${item.name}</div>
    <div style="font-size:.67rem;color:var(--t3);margin-bottom:2px">${item.code}</div>
    <div class="dip">₹${item.price*item.qty}</div>
    <div class="dq">
      <button class="qb" onclick="chQty(${item.id},-1)">−</button>
      <span class="qv">${item.qty}</span>
      <button class="qb" onclick="chQty(${item.id},1)">+</button>
      <button class="drm" onclick="remCart(${item.id})">🗑</button>
    </div>
  </div>
</div>`).join('');
}
function openCart(){renderDrw();document.getElementById('drw').classList.add('on');document.getElementById('ov').classList.add('on');document.body.style.overflow='hidden'}
function closeCart(){document.getElementById('drw').classList.remove('on');document.getElementById('ov').classList.remove('on');document.body.style.overflow=''}
function buyNow(id){addCart(id);openCart()}

// ======= PAYMENT =======
function openPay(){
  if(!Object.keys(cart).length){toast('Your cart is empty!');return}
  const items=Object.values(cart);
  const sub=items.reduce((s,i)=>s+i.price*i.qty,0);
  const ship=sub>=299?0:100;
  const total=sub+ship;
  const oid='AAZ'+Math.floor(1000+Math.random()*9000);
  let msg='🛍 *New Order - Aazhini Accessories*\n';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='*Order ID:* #'+oid+'\n';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='*Items Ordered:*\n';
  items.forEach(i=>{
    msg+='• '+i.name+' ('+i.code+') × '+i.qty+' = ₹'+(i.price*i.qty)+'\n';
  });
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='*Shipping:* '+(ship===0?'FREE ✓':'₹'+ship)+'\n';
  msg+='*Total Payable:* ₹'+total+'\n';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='Please confirm this order ✨';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='Thank You for Being Part of the Aazhini Family';
  closeCart();
  window.open('https://wa.me/919791399897?text='+encodeURIComponent(msg),'_blank');
}
function closePay(){document.getElementById('pmov').classList.remove('on');document.body.style.overflow=''}

// Payment tabs
document.querySelectorAll('.pmt').forEach(t=>t.addEventListener('click',function(){
  document.querySelectorAll('.pmt').forEach(x=>x.classList.remove('act'));
  this.classList.add('act');
  document.querySelectorAll('.pmpan').forEach(p=>p.classList.remove('on'));
  document.getElementById('pan-'+this.dataset.tab).classList.add('on');
}));

function verifyUPI(){
  const v=document.getElementById('upiId').value.trim();
  if(!v){toast('Enter your UPI ID first');return}
  toast('UPI ID verified ✓');
}
let selApp='';
function selUPI(el,app){
  document.querySelectorAll('.upia').forEach(e=>e.classList.remove('sel'));
  el.classList.add('sel');selApp=app;
}
function fmtCard(el){
  let v=el.value.replace(/\D/g,'').substring(0,16);
  el.value=v.replace(/(.{4})/g,'$1 ').trim();
  document.getElementById('ccPrev').textContent=v.padEnd(16,'•').replace(/(.{4})/g,'$1 ').trim().replace(/[0-9]/g,'•');
}
function fmtExp(el){
  let v=el.value.replace(/\D/g,'');
  if(v.length>=2)v=v.substring(0,2)+'/'+v.substring(2,4);
  el.value=v;
  document.getElementById('ccExp').textContent=v||'MM/YY';
}

function payNow(method){
  // Validation
  if(method==='Card'){
    const n=document.getElementById('ccNum').value.replace(/\s/g,'');
    const nm=document.getElementById('ccNm').value.trim();
    const ex=document.getElementById('ccEx').value;
    const cv=document.getElementById('ccCvv').value;
    if(n.length<16){toast('Enter a valid 16-digit card number');return}
    if(!nm){toast('Enter cardholder name');return}
    if(ex.length<5){toast('Enter valid expiry date');return}
    if(cv.length<3){toast('Enter valid CVV');return}
  }
  if(method==='UPI'){
    const upi=document.getElementById('upiId').value.trim();
    if(!upi&&!selApp){toast('Enter UPI ID or select an app');return}
  }
  // Build WhatsApp message with order details
  const items=Object.values(cart);
  const sub=items.reduce((s,i)=>s+i.price*i.qty,0);
  const ship=sub>=299?0:100;
  const total=sub+ship;
  const oid='AAZ'+Math.floor(1000+Math.random()*9000);
  let msg='🛍 *New Order - Aazhini Accessories*\n';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='*Order ID:* #'+oid+'\n';
  msg+='*Payment:* '+method+'\n';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='*Items Ordered:*\n';
  items.forEach(i=>{
    msg+='• '+i.name+' ('+i.code+') × '+i.qty+' = ₹'+(i.price*i.qty)+'\n';
  });
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='*Shipping:* '+(ship===0?'FREE ✓':'₹'+ship)+'\n';
  msg+='*Total Payable:* ₹'+total+'\n';
  msg+='━━━━━━━━━━━━━━━━\n';
  msg+='Please confirm this order 🙏';
  const waUrl='https://wa.me/919791399897?text='+encodeURIComponent(msg);
  // Show success screen
  document.getElementById('oidEl').textContent='Order ID: #'+oid;
  document.querySelectorAll('.pmpan').forEach(p=>p.classList.remove('on'));
  document.getElementById('psuc').classList.add('on');
  // Open WhatsApp
  window.open(waUrl,'_blank');
  // Clear cart
  Object.keys(cart).forEach(k=>delete cart[k]);
  updCart();
}

// ======= WISHLIST =======
const wishlist={};

function toggleW(btn){
  const id=parseInt(btn.dataset.id);
  const p=P.find(x=>x.id===id);
  if(!p)return;
  if(wishlist[id]){
    delete wishlist[id];
    btn.classList.remove('on');
    btn.textContent='♡';
    toast('Removed from wishlist');
  } else {
    wishlist[id]={...p};
    btn.classList.add('on');
    btn.textContent='♥';
    toast(p.name+' added to wishlist ❤');
  }
  updWishlist();
}

function updWishlist(){
  const tot=Object.keys(wishlist).length;
  const b=document.getElementById('wbdg');
  b.textContent=tot;
  b.classList.toggle('on',tot>0);
  document.getElementById('wHeart').textContent=tot>0?'♥':'♡';
  document.getElementById('wBtn').style.color=tot>0?'#E74C3C':'';
}

function renderWdrw(){
  const el=document.getElementById('wdit');
  const items=Object.values(wishlist);
  if(!items.length){
    el.innerHTML='<div class="wdem">♡<p>Your wishlist is empty</p><p style="font-size:.76rem;color:var(--t3)">Save items you love ✨</p></div>';
    return;
  }
  el.innerHTML=items.map(item=>`
<div class="wdim" id="witem-${item.id}">
  <img src="${item.img}" alt="${item.name}" loading="lazy" onerror="this.outerHTML='<div class=wdiph>💎</div>'" style="width:62px;height:62px;border-radius:9px;object-fit:cover;flex-shrink:0">
  <div class="wdin">
    <div class="wdname">${item.name}</div>
    <div class="wdprice">₹${item.price}</div>
    <div class="wdbtns">
      <button class="wdadd" onclick="moveToCart(${item.id})">+ Add to Cart</button>
      <button class="wdrm" onclick="removeWish(${item.id})">🗑 Remove</button>
    </div>
  </div>
</div>`).join('');
}

function removeWish(id){
  delete wishlist[id];
  // reset product card button
  const btn=document.querySelector('.pw[data-id="'+id+'"]');
  if(btn){btn.classList.remove('on');btn.textContent='♡';}
  updWishlist();
  renderWdrw();
  toast('Removed from wishlist');
}

function moveToCart(id){
  addCart(id);
  removeWish(id);
  closeWish();
  openCart();
}

function openWish(){renderWdrw();document.getElementById('wdrw').classList.add('on');document.getElementById('ov').classList.add('on');document.body.style.overflow='hidden'}
function closeWish(){document.getElementById('wdrw').classList.remove('on');document.getElementById('ov').classList.remove('on');document.body.style.overflow=''}

// ======= TOAST =======
let tT;
function toast(msg){
  document.getElementById('tmsg').textContent=msg;
  document.getElementById('toast').classList.add('on');
  clearTimeout(tT);tT=setTimeout(()=>document.getElementById('toast').classList.remove('on'),2600);
}

// ======= CONTACT =======
// Contact form — uses Web3Forms (free, no activation required).
// HOW TO SET UP (one-time, takes 2 minutes):
//   1. Go to https://web3forms.com and enter helpdeskofaazhini@gmail.com
//   2. You'll get an ACCESS KEY — paste it below replacing YOUR_WEB3FORMS_KEY
//   3. Done! Every form submission lands in your Gmail inbox instantly.
const CONTACT_EMAIL='helpdeskofaazhini@gmail.com';
const WEB3_KEY='7bb8260d-93a1-4aa7-b12d-b38460bc5068'; // ← paste your free key from web3forms.com

async function sendMsg(){
  const n=document.getElementById('cN').value.trim();
  const e=document.getElementById('cE').value.trim();
  const s=document.getElementById('cS').value.trim();
  const m=document.getElementById('cM').value.trim();
  if(!n||!e||!m){toast('Please fill all required fields');return}

  const btn=document.getElementById('cBtnSend');
  const original=btn.textContent;
  btn.disabled=true;
  btn.textContent='Sending…';

  // If user hasn't set up Web3Forms yet, open mailto as fallback
  if(WEB3_KEY==='YOUR_WEB3FORMS_KEY'){
    const body=encodeURIComponent('Name: '+n+'\nEmail: '+e+'\n\n'+m);
    const sub=encodeURIComponent('Website enquiry: '+(s||'General enquiry'));
    window.open('mailto:'+CONTACT_EMAIL+'?subject='+sub+'&body='+body);
    toast('Opening your email app to send the message ✨');
    btn.disabled=false;btn.textContent=original;
    return;
  }

  try{
    const res=await fetch('https://api.web3forms.com/submit',{
      method:'POST',
      headers:{'Content-Type':'application/json','Accept':'application/json'},
      body:JSON.stringify({
        access_key:WEB3_KEY,
        name:n,
        email:e,
        subject:'Website enquiry: '+(s||'General enquiry'),
        message:m
      })
    });
    const data=await res.json();
    if(data.success){
      toast('Message sent! We\'ll reply within 24 hours ✨');
      ['cN','cE','cS','cM'].forEach(id=>document.getElementById(id).value='');
    }else{
      throw new Error(data.message||'Failed');
    }
  }catch(err){
    toast('Could not send — please email us at '+CONTACT_EMAIL);
  }finally{
    btn.disabled=false;
    btn.textContent=original;
  }
}

// ======= EVENTS =======
document.getElementById('cBtn').addEventListener('click',openCart);
document.getElementById('wBtn').addEventListener('click',openWish);
document.getElementById('dc').addEventListener('click',closeCart);
document.getElementById('wdc').addEventListener('click',closeWish);
document.getElementById('ov').addEventListener('click',function(){closeCart();closeWish();});
document.getElementById('pmov').addEventListener('click',function(e){if(e.target===this)closePay()});
document.querySelectorAll('.ft').forEach(t=>t.addEventListener('click',function(){
  document.querySelectorAll('.ft').forEach(x=>x.classList.remove('act'));
  this.classList.add('act');render(this.dataset.f);
}));
window.addEventListener('scroll',()=>document.getElementById('hdr').classList.toggle('sc',scrollY>20),{passive:true});


// Set static images
document.addEventListener('DOMContentLoaded', function() {
  if(document.getElementById('heroImg')) document.getElementById('heroImg').src=IMGS[1];
  if(document.getElementById('abtImg1')) document.getElementById('abtImg1').src=IMGS[1];
  if(document.getElementById('abtImg2')) document.getElementById('abtImg2').src=IMGS[2];
  if(document.getElementById('abtImg3')) document.getElementById('abtImg3').src=IMGS[3];
});
// ======= INIT =======
render();
