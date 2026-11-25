/* Local Group of Company Pvt. Ltd. — site behaviour
   - English / Nepali language toggle
   - Mobile navigation
   - Header shadow on scroll
   - Reveal-on-scroll animations
*/
(function () {
  'use strict';

  /* ---------- Nepali translations (English lives in the HTML) ---------- */
  var NE = {
    skip: 'मुख्य सामग्रीमा जानुहोस्',
    brandName: 'लोकल ग्रुप',
    brandSub: 'अफ कम्पनी प्रा. लि.',
    navAbout: 'हाम्रोबारे',
    navServices: 'हाम्रो काम',
    navElb: 'ई लोकल बजार',
    navLeader: 'नेतृत्व',
    navBazar: 'लोकल बजार',
    navContact: 'सम्पर्क',

    heroEyebrow: 'स्थापना वि.सं. २०८१ वैशाख ३० · नेपालभर कारोबार',
    heroTitle: 'स्थानीय खेतबारीदेखि <em>तपाईंको बजारसम्म।</em>',
    mottoEn: '',
    heroLead: 'लोकल ग्रुप अफ कम्पनी प्राइभेट लिमिटेडले पशुपालन, पन्छीपालन, बाली उत्पादन र उत्पादनको व्यापारलाई एउटै छानामुनि ल्याएको छ — ई लोकल बजार अनलाइन प्लेटफर्मसहित नेपालभर नेपाली उत्पादन बिक्री गर्दै। हाम्रो नेतृत्व नेपालको पोल्ट्री क्षेत्रमा वर्षौंको व्यावहारिक अनुभव भएका पशु चिकित्सकले गर्छन्।',
    heroCta1: 'हाम्रो काम हेर्नुहोस्',
    heroCta2: 'TikTok मा हेर्नुहोस्',
    estLabel: 'स्थापना',
    estValue: '२०८१ वैशाख ३०',
    locShort: 'फेवा मार्ग, पोखरा-७',

    stat1n: '२०८१',
    stat1: 'सालमा पोखरामा स्थापना (वि.सं.)',
    stat2n: '७',
    stat2: 'दर्ता भएका व्यावसायिक क्रियाकलाप',
    stat3n: '६+',
    stat3: 'वर्ष — नेतृत्वको पोल्ट्री क्षेत्रमा अनुभव',
    stat4n: '२',
    stat4: 'पशु चिकित्सा र पशु विज्ञानमा डिग्री',

    aboutLabel: 'हाम्रोबारे',
    aboutTitle: 'नेपाली किसान र परिवारका लागि बनेको नेपाली कम्पनी।',
    aboutP1: 'वि.सं. २०८१ वैशाख ३० (१२ मे २०२४) मा प्राइभेट लिमिटेड कम्पनीका रूपमा दर्ता भएको लोकल ग्रुप अफ कम्पनी प्रा. लि. पोखरा महानगरपालिका वडा नं. ७, फेवा मार्ग, कास्कीमा मुख्य कार्यालय रहेको छ र यसले नेपालभर उत्पादनको व्यापार तथा बिक्री गर्छ। हामी कृषिका विभिन्न चरणमा काम गर्छौं — गाईवस्तु र पन्छीपालन, खाद्यान्न, कोसेबाली तथा तेलबाली उत्पादन, किसानलाई बाली र पशु उत्पादनमा सहयोग, अनि उत्पादनलाई बजारयोग्य बनाउने काम।',
    aboutP2: 'हाम्रो खुद्रा तथा सामुदायिक पहिचान <strong>लोकल बजार</strong> र अनलाइन बजार <strong>ई लोकल बजार</strong> मार्फत हामी यही उत्पादन र ज्ञान मानिसहरूको नजिक पुर्‍याउँछौं — जसले गर्दा नेपालको जुनसुकै ठाउँका परिवारले नेपाली उत्पादन किन्न पाउँछन्, अनि किसान र स्थानीय व्यवसायले आफ्नो सहरभन्दा टाढासम्मका खरिदकर्तासम्म पुग्न पाउँछन्।',

    mottoQuote: 'यो हाम्रो मूल नारा हो। नेपालका किसानले नै नेपाली परिवारलाई खुवाउन सक्छन् भन्ने हाम्रो विश्वास छ — स्थानीय उत्पादकबाट गरिएको हरेक खरिदले हाम्रै समुदायमा मूल्य थप्छ।',

    regTitle: 'कम्पनी एक नजरमा',
    regNameL: 'दर्ता नाम',
    regName: 'लोकल ग्रुप अफ कम्पनी प्राइभेट लिमिटेड',
    regMottoL: 'मूल नारा',
    regTypeL: 'कम्पनीको प्रकार',
    regType: 'प्राइभेट लिमिटेड',
    regEstL: 'स्थापना मिति',
    regEst: 'वि.सं. २०८१ वैशाख ३० (१२ मे २०२४)',
    regAddrL: 'रजिस्टर्ड कार्यालय',
    regAddr: 'वडा नं. ७, फेवा मार्ग, पोखरा महानगरपालिका, कास्की, गण्डकी प्रदेश, नेपाल',
    regReachL: 'कारोबार क्षेत्र',
    regReach: 'नेपालभर',
    regOnlineL: 'अनलाइन बजार',
    regMdL: 'प्रबन्ध निर्देशक',
    regMd: 'अजय राज ओझा',

    mvMissionT: 'हाम्रो ध्येय',
    mvMission: 'गुणस्तरीय र स्थानीय रूपमा उत्पादित खाद्य तथा पशुजन्य उत्पादन उचित मूल्यमा उपलब्ध गराउँदै नेपालभरका किसान, उत्पादक र परिवारलाई जोड्नु।',
    mvVisionT: 'हाम्रो सोच',
    mvVision: 'नेपालको ग्रामीण अर्थतन्त्र बलियो बनाउन सहयोग गर्ने, विज्ञानमा आधारित भरपर्दो नेपाली कृषि व्यवसाय र बजार बन्नु।',
    mvValuesT: 'हाम्रा मूल्य',
    mvValues: 'पशु स्वास्थ्यलाई पहिलो प्राथमिकता, इमानदार कारोबार, र आफ्नै माटो तथा किसानको उत्पादनप्रति गर्व।',

    svcLabel: 'हाम्रो काम',
    svcTitle: 'खेत, फार्म र बजार — एउटै छानामुनि।',
    svcIntro: 'हाम्रा दर्ता भएका व्यावसायिक क्रियाकलापहरू खेत र फार्मदेखि नेपालभरका बजारसम्मको पूरा यात्रा समेट्छन्।',
    s1t: 'व्यापार तथा खुद्रा बिक्री',
    s1d: 'नेपालभरका ग्राहकसम्म छानिएका सामानको व्यापार र खुद्रा बिक्री — विशिष्टीकृत पसल र ई लोकल बजार अनलाइनमार्फत।',
    s2t: 'खाद्यान्न, कोसेबाली र तेलबाली',
    s2d: 'खाद्यान्न (धानबाहेक), कोसेबाली तथा तेलबालीको उत्पादन।',
    s3t: 'गाईवस्तु तथा भैंसी पालन',
    s3d: 'पशु चिकित्सकको रेखदेखमा स्वस्थ गाईवस्तु र भैंसी पालन।',
    s4t: 'पन्छी पालन',
    s4d: 'हाँस, कुखुरा, परेवा र टर्की पालन — हाम्रा प्रबन्ध निर्देशकको मुख्य विशेषज्ञता।',
    s5t: 'बाली उत्पादन सहयोग',
    s5d: 'खेत तयारीदेखि उन्नत खेती अभ्याससम्म, किसानलाई राम्रो बाली उत्पादन गर्न सहयोगी क्रियाकलाप।',
    s6t: 'पशुजन्य उत्पादन सहयोग',
    s6d: 'पशु चिकित्सा विज्ञान र पशुधन व्यवस्थापनको औपचारिक ज्ञानमा आधारित पशुजन्य उत्पादन सहयोग सेवा।',
    s7t: 'बाली बजारीकरणको तयारी',
    s7d: 'उत्पादित बालीलाई बजारमा लैजान तयार पार्ने काम: सफाइ, काँटछाँट र ग्रेडिङ।',
    svcCtaT: 'हाम्रो कामबारे केही सोध्नु छ?',
    svcCtaD: 'हामीलाई सम्पर्क गर्नुहोस्',

    elbLabel: 'हाम्रो उत्पादन',
    elbTitle: 'ई लोकल बजार — नेपाली उत्पादन, नेपालभर कारोबार।',
    elbIntro: 'ई लोकल बजार लोकल ग्रुप अफ कम्पनीको अनलाइन बजार हो। यसले प्रमाणित नेपाली व्यवसायलाई देशभरका खरिदकर्तासँग जोड्छ, जसले गर्दा स्थानीय उत्पादन स्थानीय बजारमा मात्र सीमित रहँदैन।',
    elbBtn: 'ई लोकल बजार हेर्नुहोस्',
    elbFlow1: 'नेपाली उत्पादक र व्यवसायी',
    elbFlow3: 'नेपालभरका खरिदकर्ता',
    elb1t: 'प्रमाणित बिक्रेता',
    elb1d: 'व्यवसायहरूले कम्पनी विवरण, प्यान र जुनसुकै प्रदेश, जिल्ला वा पालिकाको ठेगानासहित दर्ता गर्छन्, अनि कारोबार गर्नुअघि हाम्रो टोलीले प्रमाणित गर्छ।',
    elb2t: 'व्यवस्थित सूची',
    elb2d: 'उत्पादनहरू कोटि र मानक एकाइअनुसार सूचीकृत हुन्छन्, जसले गर्दा खरिदकर्ताले सजिलै तुलना गर्न सक्छन्।',
    elb3t: 'अर्डर र डेलिभरी ट्र्याकिङ',
    elb3d: 'हरेक अर्डरमा डेलिभरी ठेगाना, अपेक्षित डेलिभरी मिति, भुक्तानी विधि र स्थितिको पूरा इतिहास रहन्छ।',
    elb4t: 'पारदर्शी कमिसन र हिसाब मिलान',
    elb4d: 'कोटिअनुसारको कमिसन, भुक्तानी प्रमाणसहितको दाबी र अभिलेख गरिएको सेटलमेन्टले हरेक कारोबार पारदर्शी राख्छ।',

    leaderBadgeN: '६+',
    leaderBadge: 'वर्ष पोल्ट्री क्षेत्रमा',
    ldLabel: 'नेतृत्व',
    ldName: 'अजय राज ओझा',
    ldRole: 'प्रबन्ध निर्देशक, लोकल ग्रुप अफ कम्पनी प्रा. लि.',
    ldBio: 'अजय राज ओझा पशु चिकित्सक तथा पशु विज्ञानविद् हुन्, जसलाई नेपालको पोल्ट्री क्षेत्रमा ६ वर्षको अनुभव छ। सन् २०२४ मा कम्पनी स्थापना भएदेखि नै उनले लोकल ग्रुप अफ कम्पनीको नेतृत्व गर्दै वैज्ञानिक पशुधन व्यवस्थापनलाई दैनिक खेती र व्यापारसम्म पुर्‍याउँदै आएका छन्। सन् २०२६ देखि उनी कान्ति भेट फार्माको प्रबन्ध निर्देशकको जिम्मेवारी पनि सम्हालिरहेका छन्।',
    ldLiveL: 'बसोबास',
    ldLive: 'पोखरा-७, कास्की',
    ldHomeL: 'स्थायी ठेगाना',
    ldHome: 'गैँडाकोट-१२, नवलपरासी (पूर्व)',

    eduTitle: 'शिक्षा',
    edu1y: '२०२५',
    edu1t: 'पशु विज्ञानमा स्नातकोत्तर (LPM)',
    edu1d: 'पशुधन उत्पादन तथा व्यवस्थापन · कृषि तथा वन विज्ञान विश्वविद्यालय (AFU)',
    edu2y: '२०२०',
    edu2d: 'पशु चिकित्सा विज्ञान तथा पशुपालनमा स्नातक · AFU, रामपुर, चितवन',

    expTitle: 'अनुभव',
    exp1y: '२०२६ –',
    exp1t: 'प्रबन्ध निर्देशक',
    exp1d: 'कान्ति भेट फार्मा',
    exp2y: '२०२४ –',
    exp2t: 'प्रबन्ध निर्देशक',
    exp2d: 'लोकल ग्रुप अफ कम्पनी प्रा. लि. — स्थापनाकालदेखि',
    exp3y: '६ वर्ष',
    exp3t: 'पोल्ट्री क्षेत्र',
    exp3d: 'पोल्ट्री स्वास्थ्य, उत्पादन र फार्म सञ्चालनमा प्रत्यक्ष काम',

    chip1: 'पोल्ट्री स्वास्थ्य तथा उत्पादन',
    chip2: 'पशुधन उत्पादन व्यवस्थापन',
    chip3: 'पशु औषधि',
    chip4: 'खेतदेखि बजारसम्मको सञ्चालन',
    chip5: 'कृषि व्यवसाय नेतृत्व',

    whyLabel: 'किन हामीसँग',
    whyTitle: 'विज्ञानमा आधारित, समुदायमा जरा गाडेको।',
    w1t: 'पशु चिकित्सकको नेतृत्व',
    w1d: 'योग्य पशु चिकित्सक तथा पशु विज्ञानविद्को मार्गदर्शनमा पशु स्वास्थ्य र खेती अभ्यास।',
    w2t: 'नेपालभर पहुँच',
    w2d: 'मुख्य कार्यालय पोखरामा, नेपालभरका किसान, व्यवसायी र खरिदकर्तासँग कारोबार।',
    w3t: 'खेतदेखि पसलसम्म',
    w3d: 'हामी आफैं उब्जाउँछौं, पाल्छौं, ग्रेडिङ गर्छौं र बेच्छौं — कम बिचौलिया, ताजा उत्पादन।',
    w4t: 'दर्ता भएको, जिम्मेवार कम्पनी',
    w4d: 'ढुक्कसँग कारोबार गर्न सकिने दर्ता भएको प्राइभेट लिमिटेड कम्पनी।',

    bzLabel: 'TikTok मा लोकल बजार',
    bzTitle: 'लोकल बजारमा के ताजा छ, हेर्नुहोस्।',
    bzText: 'फार्मका अपडेट, नयाँ सामान, मूल्य र नेपालभरको हाम्रो कामका झलक हेर्न हामीलाई फलो गर्नुहोस्।',
    bzBtn: 'TikTok मा फलो गर्नुहोस्',
    bzNote: 'भिडियो TikTok बाट लोड हुन्छन्। नदेखिएमा सिधै प्रोफाइल खोल्नुहोस्।',

    ctLabel: 'सम्पर्क',
    ctTitle: 'नेपालको जहाँसुकैबाट हामीसँग कुरा गर्नुहोस्।',
    ctIntro: 'नेपालको जुनसुकै ठाउँबाट अर्डर, साझेदारी वा फार्मसम्बन्धी जिज्ञासाका लागि हामीलाई फोन वा इमेल गर्नुहोस्, ई लोकल बजारमा किनमेल गर्नुहोस्, पोखराको फेवा मार्गस्थित मुख्य कार्यालयमा आउनुहोस् वा TikTok मा सन्देश पठाउनुहोस्।',
    ctOfficeL: 'मुख्य कार्यालय',
    ctOffice: 'वडा नं. ७, फेवा मार्ग, पोखरा महानगरपालिका, कास्की, गण्डकी प्रदेश, नेपाल',
    ctPhoneL: 'फोन',
    ctEmailL: 'इमेल',
    ctShopL: 'अनलाइन बजार',
    ctSocialL: 'TikTok',
    ctMdL: 'प्रबन्ध निर्देशक',
    ctMd: 'अजय राज ओझा',
    ctDirections: 'बाटो हेर्नुहोस्',

    ftDesc: 'पशुपालन, पन्छीपालन, बाली, खुद्रा व्यापार र ई लोकल बजार अनलाइनमार्फत नेपालभर नेपाली उत्पादनको कारोबार गर्ने, पोखरामा मुख्य कार्यालय रहेको दर्ता भएको प्राइभेट लिमिटेड कम्पनी।',
    ftLinks: 'हेर्नुहोस्',
    ftConnect: 'जोडिनुहोस्',
    ftAddr: 'फेवा मार्ग, पोखरा-७, कास्की',
    ftRights: 'सर्वाधिकार सुरक्षित।',
    ftEst: 'प्राइभेट लिमिटेड · स्थापना वि.सं. २०८१ वैशाख ३०'
  };

  var STORAGE_KEY = 'lgc-lang';
  var root = document.documentElement;
  var nodes = Array.prototype.slice.call(document.querySelectorAll('[data-i18n]'));
  var langBtn = document.getElementById('langToggle');

  nodes.forEach(function (el) { el.setAttribute('data-en', el.innerHTML); });

  function setLang(lang) {
    var ne = lang === 'ne';
    nodes.forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      el.innerHTML = ne && Object.prototype.hasOwnProperty.call(NE, key) ? NE[key] : el.getAttribute('data-en');
    });
    root.lang = ne ? 'ne' : 'en';
    if (langBtn) {
      langBtn.textContent = ne ? 'English' : 'नेपाली';
      langBtn.setAttribute('aria-label', ne ? 'Switch to English' : 'नेपालीमा हेर्नुहोस्');
    }
    try { localStorage.setItem(STORAGE_KEY, ne ? 'ne' : 'en'); } catch (e) { /* storage unavailable */ }
  }

  // ?lang=ne or ?lang=en in the URL wins; otherwise use the visitor's last choice.
  var saved = null;
  var param = new URLSearchParams(window.location.search).get('lang');
  if (param === 'ne' || param === 'en') saved = param;
  else { try { saved = localStorage.getItem(STORAGE_KEY); } catch (e) { /* storage unavailable */ } }
  if (saved === 'ne') setLang('ne');

  if (langBtn) {
    langBtn.addEventListener('click', function () {
      setLang(root.lang === 'ne' ? 'en' : 'ne');
    });
  }

  /* ---------- Mobile nav ---------- */
  var header = document.querySelector('.site-header');
  var navToggle = document.getElementById('navToggle');
  var nav = document.getElementById('nav');

  function closeNav() {
    header.classList.remove('nav-open');
    navToggle.setAttribute('aria-expanded', 'false');
    navToggle.setAttribute('aria-label', 'Open menu');
  }

  if (navToggle && nav) {
    navToggle.addEventListener('click', function () {
      var open = header.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', String(open));
      navToggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    nav.addEventListener('click', function (e) {
      if (e.target.closest('a')) closeNav();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ---------- Header shadow ---------- */
  function onScroll() { header.classList.toggle('scrolled', window.scrollY > 8); }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ---------- Reveal on scroll ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          io.unobserve(entry.target);
        }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    reveals.forEach(function (el) { io.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add('is-visible'); });
  }

  /* ---------- Footer year ---------- */
  var year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
})();
