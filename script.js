const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('.nav');

toggle.addEventListener('click',()=>{
  const open=nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded',open);
});

document.querySelectorAll('.nav a').forEach(a=>{
  a.addEventListener('click',()=>nav.classList.remove('open'));
});

const lang=document.getElementById('langToggle');
let chinese=false;

const en={
nav:['Home','About','Practice Areas','Qualifications','Testimonials','Contact'],
heroEyebrow:'INTEGRITY | PROFESSIONALISM | YOUR TRUST',
heroTitle:'Trusted Legal Solutions<br>for a Brighter Tomorrow',
heroText:'Practical, reliable and effective legal advice for individuals, businesses and international clients.',
heroButtons:['Contact Us →','Our Services'],
services:[
['Commercial Law','Supporting businesses for sustainable growth'],
['Dispute Resolution','Effective representation in complex matters'],
['Cross-Border Matters','Bridging legal solutions across jurisdictions'],
['Property Law','Practical advice for individuals and investors'],
['Private Client Services','Wills, succession and wealth planning']
],
aboutEyebrow:'ABOUT US',
aboutTitle:'A Modern Approach<br>to Legal Services',
aboutText:'Lin Zhiyuan Law Office provides clear, practical and effective legal advice. We work closely with clients to understand their needs and deliver solutions with integrity, professionalism and a client-focused approach.',
aboutLink:'Learn More →',
practiceEyebrow:'OUR PRACTICE',
practiceTitle:'Legal Services',
practiceLead:'Focused advice, careful preparation and practical solutions.',
practice:[
['Commercial & Corporate Law','Commercial agreements, corporate matters and business-focused legal advice.'],
['Dispute Resolution','Strategic advice and representation for civil and commercial disputes.'],
['Cross-Border Matters','Legal support for matters involving Hong Kong and international jurisdictions.'],
['Property Law','Practical guidance on property transactions, leases and related matters.'],
['Private Client Services','Personal legal advice covering succession, wills and private affairs.'],
['General Legal Advice','Confidential, clear advice tailored to the circumstances of each client.']
],
qualEyebrow:'QUALIFICATIONS',
qualTitle:'Education & Professional Background',
qualText:'A commitment to high professional standards, supported by legal education and progressive experience.',
qual:[
['Bachelor of Laws (LLB)','Hong Kong Metropolitan University'],
['Postgraduate Certificate in Laws (PCLL)','Hong Kong Metropolitan University'],
['Short Professional Course in Commercial Law','The University of Hong Kong'],
['Trainee Solicitor',''],
['Admitted as a Solicitor of the High Court of Hong Kong',''],
['Associate Solicitor',''],
['Senior Associate','']
],
testEyebrow:'TESTIMONIALS',
testTitle:'What Our Clients Say',
testLead:'Client feedback — placeholder testimonials for the current website version.',
courtEyebrow:'HONG KONG',
courtTitle:'Connected to Hong Kong’s Legal Community',
courtText:'The office is presented as being conveniently located in Admiralty, near Hong Kong’s High Court.',
courtNote:'The court image is illustrative and is not the office address.',
contactEyebrow:'CONTACT US',
contactTitle:"Let's Discuss What Matters.",
contactText:'Contact us for a confidential discussion about your legal needs.',
contactLabels:['WhatsApp','Email','Office Address'],
footerLinks:'Home | About | Practice Areas | Contact'
};

const zh={
nav:['首頁','關於我們','法律服務','專業資格','客戶評價','聯絡我們'],
heroEyebrow:'誠信｜專業｜值得信賴',
heroTitle:'值得信賴的法律服務<br>為更美好的明天',
heroText:'為個人、企業及國際客戶提供務實、可靠及高效的法律意見與法律方案。',
heroButtons:['聯絡我們 →','法律服務'],
services:[
['商業法律','為企業持續發展提供法律支援'],
['爭議解決','在複雜法律事務中提供有效代理'],
['跨境法律事務','連接香港及其他司法管轄區的法律方案'],
['物業法律','為個人及投資者提供務實的法律意見'],
['私人客戶服務','遺囑、繼承及財富規劃法律服務']
],
aboutEyebrow:'關於我們',
aboutTitle:'現代化的<br>法律服務理念',
aboutText:'林志遠律師事務所提供清晰、務實及有效的法律意見。我們與客戶緊密合作，了解客戶需要，以誠信、專業及以客戶為本的方式提供法律方案。',
aboutLink:'了解更多 →',
practiceEyebrow:'法律服務',
practiceTitle:'專業法律服務',
practiceLead:'專注的法律意見、周全的準備及務實的解決方案。',
practice:[
['商業及公司法','商業協議、公司事務及以企業需要為本的法律意見。'],
['爭議解決','為民事及商業爭議提供策略性法律意見及代理服務。'],
['跨境法律事務','處理涉及香港及國際司法管轄區的法律事務。'],
['物業法律','就物業交易、租賃及相關事務提供務實的法律指導。'],
['私人客戶服務','涵蓋繼承、遺囑及私人事務的法律意見。'],
['一般法律諮詢','根據每位客戶的具體情況提供保密、清晰及合適的法律意見。']
],
qualEyebrow:'專業資格',
qualTitle:'教育及專業背景',
qualText:'秉持高水平的專業標準，並以法律教育及累積的專業經驗為基礎。',
qual:[
['法學士（LLB）','香港都會大學'],
['法律深造證書（PCLL）','香港都會大學'],
['商業法律專業短期課程','香港大學'],
['實習律師',''],
['獲香港高等法院認許為律師',''],
['律師',''],
['高級律師','']
],
testEyebrow:'客戶評價',
testTitle:'客戶對我們的評價',
testLead:'客戶意見 — 目前網站版本所使用的示例評價。',
courtEyebrow:'香港',
courtTitle:'融入香港法律社群',
courtText:'事務所位於香港金鐘，鄰近香港高等法院。',
courtNote:'法院圖片僅作示意用途，並非事務所地址。',
contactEyebrow:'聯絡我們',
contactTitle:'讓我們一起討論您的法律需要。',
contactText:'歡迎聯絡我們，進行保密的法律諮詢。',
contactLabels:['WhatsApp','電子郵件','辦公室地址'],
footerLinks:'首頁｜關於我們｜法律服務｜聯絡我們'
};

function setLanguage(){
  const t=chinese?zh:en;

  document.documentElement.lang=chinese?'zh-HK':'en';
  lang.textContent=chinese?'EN | 中文':'中文 | EN';

  document.querySelectorAll('.nav a').forEach((a,i)=>a.textContent=t.nav[i]);

  document.querySelector('.hero-content .eyebrow').textContent=t.heroEyebrow;
  document.querySelector('.hero-content h1').innerHTML=t.heroTitle;
  document.querySelector('.hero-content p:not(.eyebrow)').textContent=t.heroText;

  document.querySelectorAll('.hero-content .actions a').forEach((a,i)=>a.textContent=t.heroButtons[i]);

  document.querySelectorAll('.service-strip article').forEach((a,i)=>{
    a.querySelector('h3').textContent=t.services[i][0];
    a.querySelector('p').textContent=t.services[i][1];
  });

  document.querySelector('.about-grid .eyebrow').textContent=t.aboutEyebrow;
  document.querySelector('.about-grid h2').innerHTML=t.aboutTitle;
  document.querySelector('.about-grid div p:not(.eyebrow)').textContent=t.aboutText;
  document.querySelector('.about-grid .text-link').textContent=t.aboutLink;

  document.querySelector('.practice .eyebrow').textContent=t.practiceEyebrow;
  document.querySelector('.practice h2').textContent=t.practiceTitle;
  document.querySelector('.practice .lead').textContent=t.practiceLead;

  document.querySelectorAll('.practice .cards article').forEach((a,i)=>{
    a.querySelector('h3').textContent=t.practice[i][0];
    a.querySelector('p').textContent=t.practice[i][1];
  });

  document.querySelector('.qualifications .eyebrow').textContent=t.qualEyebrow;
  document.querySelector('.qualifications h2').textContent=t.qualTitle;
  document.querySelector('.qual-intro > p:not(.eyebrow)').textContent=t.qualText;

  document.querySelectorAll('.timeline > div').forEach((a,i)=>{
    a.querySelector('h3').textContent=t.qual[i][0];
    const p=a.querySelector('p');
    if(p && t.qual[i][1]) p.textContent=t.qual[i][1];
  });

  document.querySelector('.testimonials .eyebrow').textContent=t.testEyebrow;
  document.querySelector('.testimonials h2').textContent=t.testTitle;
  document.querySelector('.testimonials .lead').textContent=t.testLead;

  document.querySelector('.court-feature .eyebrow').textContent=t.courtEyebrow;
  document.querySelector('.court-feature h2').textContent=t.courtTitle;
  document.querySelector('.court-feature div p:not(.eyebrow):not(.small-note)').textContent=t.courtText;
  document.querySelector('.court-feature .small-note').textContent=t.courtNote;

  document.querySelector('.contact .eyebrow').textContent=t.contactEyebrow;
  document.querySelector('.contact h2').textContent=t.contactTitle;
  document.querySelector('.contact > div > p:not(.eyebrow):not(.small-note)').textContent=t.contactText;

  document.querySelectorAll('.contact-list strong').forEach((a,i)=>{
    a.textContent=t.contactLabels[i];
  });

  const footer=document.querySelector('.footer');
  footer.querySelector('div:nth-child(2)').textContent=t.footerLinks;
}

lang.addEventListener('click',()=>{
  chinese=!chinese;
  setLanguage();
});
