// TRANSLATION DICTIONARIES (ARABIC / ENGLISH)
const translations = {
  ar: {
    nav_home: 'الرئيسية',
    nav_products: 'منتجاتنا',
    nav_cart: 'السلة',
    nav_about: 'من نحن',
    nav_contact: 'اتصل بنا',
    nav_custom_cta: 'اطلب تصميماً خاصاً',
    hero_title: 'منتجات خشبية يدوية فاخرة تضيء مساحتك',
    hero_subtitle: 'نصنع بكل حب ديكورات ومصباح طاولات ورفوف خشبية دافئة تلبي شغفك',
    cta_custom_design: 'اطلب تصميماً خاصاً',
    cta_view_products: 'تصفح المنتجات',
    tag_workshop: 'ورشة العمل',
    title_videos: 'شاهد كيف نصنع الجمال',
    title_purpose: 'رسالتنا',
    desc_purpose: 'إعادة تعريف الديكور الداخلي من خلال تقديم قطع خشبية طبيعية فريدة تجمع بين دفء الطبيعة وإبداع اليد البشرية.',
    title_goal: 'هدفنا',
    desc_goal: 'أن نكون الخيار الأول في الأردن والوطن العربي للمنتجات الخشبية اليدوية المضيئة والمصممة خصيصاً لتناسب أذواق عملائنا.',
    title_story: 'قصتنا',
    desc_story: 'بدأنا بشغف في ورشة عمل صغيرة لنحت الخشب وتشكيله. ندمج الإنارة الدافئة مع الخشب السويدي والزان الطبيعي لنصنع تحفاً فنية مميزة.',
    tag_best_sellers: 'الأكثر طلباً',
    title_best_sellers: 'المنتجات الأكثر مبيعاً لدينا',
    tag_transformation: 'التحول',
    title_before_after: 'قبل وبعد - حلول ديكور عملية',
    badge_before: 'قبل (جدار فارغ / عيب إنشائي)',
    badge_after: 'بعد (تصميم جازوودن المضيء)',
    ba_title_1: 'تغطية العيوب الجدارية والكهربائية',
    ba_desc_1: 'قمنا بتحويل لوحة مفاتيح كهربائية بارزة في ممر المنزل إلى رف خشبي مضيء مذهل ومرتب، يضيف قيمة جمالية ومساحة تخزين عملية.',
    tag_reviews: 'آراء العملاء',
    title_reviews: 'ماذا يقولون عنا؟',
    title_whatsapp_cta: 'تريد تفاصيل فورية؟ تحدث معنا مباشرة',
    desc_whatsapp_cta: 'يمكنك مشاركة أفكارك أو قياسات مساحتك معنا عبر الواتساب مباشرة لنبدأ بالتخطيط فوراً',
    btn_whatsapp: 'تواصل عبر الواتس اب',
    title_catalog: 'كتالوج المنتجات الخشبية',
    desc_catalog: 'استكشف تشكيلتنا الفاخرة من الرفوف، والمصابيح، والهدايا المحفورة يدوياً',
    no_products_found: 'عذراً، لم نجد أي منتجات تطابق بحثك.',
    back_to_products: 'العودة إلى المنتجات',
    jod: 'د.أ',
    delivery_time: 'وقت التوصيل:',
    order_form_title: 'طلب شراء مباشر',
    label_name: 'الاسم الكامل *',
    label_country_code: 'رمز الدولة',
    label_phone: 'رقم الهاتف *',
    label_phrase: 'العبارة المطلوبة للحفر / التخصيص *',
    label_image_upload: 'تحميل صورة التصميم المطلوبة *',
    btn_choose_image: 'اختر صورة أو ملف...',
    upload_hint: 'نقبل جميع صيغ الصور والملفات الفنية حتى 50 ميغابايت',
    label_notes: 'ملاحظات إضافية (اختياري)',
    btn_confirm_order: 'تأكيد الطلب المباشر',
    btn_add_to_cart: 'إضافة إلى السلة',
    tag_custom_design: 'ابتكر قطعتك',
    desc_custom_design: 'أرسل لنا صورة لمكتبك، جدارك، أو عيب إنشائي تريد تغطيته برَف أو ديكور خشبي مضيء',
    title_examples: 'أفكار وتطبيقات شائعة:',
    ex_title_1: 'تحويل النوافذ الداخلية إلى رفوف',
    ex_desc_1: 'نصمم رفوف خشبية متداخلة تناسب إطارات النوافذ تماماً للاستخدام كمكتبة صغيرة.',
    ex_title_2: 'تغطية العيوب الإنشائية',
    ex_desc_2: 'إخفاء التشققات أو الأعمدة البارزة بتصاميم خشبية متناسقة مزودة بإنارة مخفية.',
    ex_title_3: 'إخفاء لوحات الكهرباء والعدادات',
    ex_desc_3: 'صناديق خشبية محفورة يدوياً ومزخرفة تفتح كالباب لإخفاء لوحات الكهرباء بشكل جمالي.',
    ex_title_4: 'أفكار ديكور مخصصة ومضيئة',
    ex_desc_4: 'لوحات جدارية مضيئة لغرف النوم أو المجالس بشعار عملك أو اسم عائلتك.',
    label_idea: 'وصف فكرتك أو المساحة الخاصة بك *',
    label_space_image: 'ارفع صورة للمساحة أو الفكرة المكتوبة (اختياري)',
    btn_send_request: 'إرسال طلب التصميم المخصص',
    summary_title: 'ملخص الحساب',
    subtotal: 'المجموع الفرعي',
    discount: 'الخصم والعروض',
    total: 'المجموع النهائي',
    confirm_order_details: 'بيانات تأكيد الطلب',
    label_address: 'العنوان الكامل للتوصيل *',
    btn_confirm_checkout: 'إرسال وتأكيد الطلب',
    cart_empty_title: 'سلتك فارغة حالياً',
    cart_empty_desc: 'تصفح منتجاتنا المميزة وأضف لمسات دافئة لمساحتك!',
    contact_info: 'معلومات التواصل',
    contact_write_us: 'راسلنا مباشرة',
    admin_login_title: 'تسجيل دخول المشرف',
    label_password: 'رمز المرور الخاص بلوحة الإدارة',
    btn_login: 'دخول',
    admin_link: 'لوحة الإدارة (Jazwooden Admin)',
    subscribe_title: 'اشترك لتصلك أحدث العروض والمسابقات والخصومات',
    subscribe_desc: 'كن أول من يعلم بخصوماتنا وجوائزنا للمصممين',
    btn_subscribe: 'اشترك',
    text_or: 'أو'
  },
  en: {
    nav_home: 'Home',
    nav_products: 'Products',
    nav_cart: 'Cart',
    nav_about: 'About Us',
    nav_contact: 'Contact',
    nav_custom_cta: 'Request Custom Design',
    hero_title: 'Premium Handmade Wooden Creations to Glow Your Space',
    hero_subtitle: 'We craft floating shelves, table lamps, and custom wall arts with absolute love',
    cta_custom_design: 'Request a Custom Design',
    cta_view_products: 'Browse Catalog',
    tag_workshop: 'The Workshop',
    title_videos: 'Watch How We Create Art',
    title_purpose: 'Our Purpose',
    desc_purpose: 'Redefining interior spaces by providing unique handmade wooden pieces that combine nature\'s warmth with human creativity.',
    title_goal: 'Our Goal',
    desc_goal: 'To be the premier choice in Jordan and the Middle East for handmade illuminated wooden items tailored to our clients\' exact spaces.',
    title_story: 'Our Story',
    desc_story: 'We started with passion in a tiny wood carving workshop. We merge ambient light with natural Swedish pine and Beechwood to form art that lasts generations.',
    tag_best_sellers: 'Best Sellers',
    title_best_sellers: 'Our Most Popular Products',
    tag_transformation: 'Transformation',
    title_before_after: 'Before & After - Practical Decor Solutions',
    badge_before: 'Before (Empty Wall / Structural Defect)',
    badge_after: 'After (Jazwooden Illuminated Shelf)',
    ba_title_1: 'Covering Structural & Electrical Defects',
    ba_desc_1: 'We transformed an outstanding electric circuit breaker box in a corridor into a beautiful illuminated shelf, adding storage and visual charm.',
    tag_reviews: 'Customer Reviews',
    title_reviews: 'What Our Clients Say',
    title_whatsapp_cta: 'Need Instant Details? Chat With Us',
    desc_whatsapp_cta: 'Share your sketch or custom dimensions on WhatsApp to get started immediately.',
    btn_whatsapp: 'Chat on WhatsApp',
    title_catalog: 'Wooden Product Catalog',
    desc_catalog: 'Explore our premium selection of shelves, lamps, and custom hand-carved gifts.',
    no_products_found: 'Sorry, no products match your search.',
    back_to_products: 'Back to Products',
    jod: 'JOD',
    delivery_time: 'Delivery Time:',
    order_form_title: 'Direct Order Form',
    label_name: 'Full Name *',
    label_country_code: 'Country Code',
    label_phone: 'Phone Number *',
    label_phrase: 'Custom Engraving Phrase *',
    label_image_upload: 'Upload Design Drawing/Image *',
    btn_choose_image: 'Choose Image or File...',
    upload_hint: 'We accept all safe image and document formats up to 50MB',
    label_notes: 'Additional Notes (Optional)',
    btn_confirm_order: 'Confirm Direct Order',
    btn_add_to_cart: 'Add to Cart',
    tag_custom_design: 'Build Your Custom Piece',
    desc_custom_design: 'Upload an image of your wall, drawing, or structural defect you want to hide with a custom illuminated shelf.',
    title_examples: 'Common Practical Examples:',
    ex_title_1: 'Transforming Internal Windows',
    ex_desc_1: 'We craft matching interlocking shelves to turn interior window frames into libraries.',
    ex_title_2: 'Covering Column Defects',
    ex_desc_2: 'Hiding wall cracks or awkward pillars behind customized wood casing with LED ambient lights.',
    ex_title_3: 'Hiding Fuse Boxes & Electric Panels',
    ex_desc_3: 'Hand-carved wooden cabinet doors that open smoothly to hide electrical panels elegantly.',
    ex_title_4: 'Custom Glow Signboards',
    ex_desc_4: 'Illuminated custom wooden signs for bedroom headboards or office desks.',
    label_idea: 'Describe your idea or workspace *',
    label_space_image: 'Upload space image or sketch (Optional)',
    btn_send_request: 'Submit Custom Request',
    summary_title: 'Order Summary',
    subtotal: 'Subtotal',
    discount: 'Discounts',
    total: 'Grand Total',
    confirm_order_details: 'Confirm Shipping Details',
    label_address: 'Full Delivery Address *',
    btn_confirm_checkout: 'Place Order Now',
    cart_empty_title: 'Your Cart is Currently Empty',
    cart_empty_desc: 'Browse our beautiful items and add warm glow to your home!',
    contact_info: 'Contact Information',
    contact_write_us: 'Write Us Directly',
    admin_login_title: 'Admin Gate Login',
    label_password: 'Admin Password Token',
    btn_login: 'Login',
    admin_link: 'Jazwooden Admin Dashboard',
    subscribe_title: 'Subscribe for latest updates, competitions, and discounts',
    subscribe_desc: 'Be the first to hear about custom design competitions and coupons.',
    btn_subscribe: 'Subscribe',
    text_or: 'OR'
  }
};

// STATE MANAGEMENT
let currentLanguage = localStorage.getItem('jaz_lang') || 'ar';
let cart = JSON.parse(sessionStorage.getItem('jaz_cart')) || [];

// YOUTUBE VIDEO MANAGER
let ytPlayer;
async function onYouTubeIframeAPIReady() {
  const content = db.getContent();
  const input = content.youtube_urls || 'F2hR-rO6GHY';
  
  let videoId = '';
  let listId = '';

  // Check if input is a channel link or ID
  if (input.includes('youtube.com/channel/') || input.includes('youtube.com/@') || input.includes('UC')) {
    // For channels, we can use the "uploads" playlist trick
    // Most channel IDs start with UC, and their uploads playlist ID starts with UU
    let channelId = '';
    if (input.includes('UC')) {
      const match = input.match(/UC[a-zA-Z0-9_-]{22}/);
      if (match) channelId = match[0];
    }
    
    if (channelId) {
      listId = channelId.replace(/^UC/, 'UU');
    } else {
      // If it's a handle like @username, we'd ideally need an API call. 
      // Fallback: treat as a comma-separated list of IDs for now.
      const videoIds = input.split(',').map(s => s.trim()).filter(s => s.length > 0);
      videoId = videoIds[Math.floor(Math.random() * videoIds.length)];
    }
  } else if (input.includes('list=')) {
    const match = input.match(/list=([a-zA-Z0-9_-]+)/);
    if (match) listId = match[1];
  } else {
    const videoIds = input.split(',').map(s => s.trim()).filter(s => s.length > 0);
    videoId = videoIds[Math.floor(Math.random() * videoIds.length)];
  }

  const playerConfig = {
    playerVars: {
      autoplay: 1,
      mute: 1,
      controls: 0,
      rel: 0,
      modestbranding: 1
    },
    events: {
      onReady: (event) => {
        event.target.mute();
        event.target.playVideo();
      },
      onStateChange: (event) => {
        // If it's a list, we want to shuffle or pick random on end
        if (event.data === YT.PlayerState.ENDED && listId) {
          ytPlayer.loadPlaylist({
            listType: 'playlist',
            list: listId,
            index: Math.floor(Math.random() * 10) // Try a random start index
          });
        }
      }
    }
  };

  if (listId) {
    playerConfig.playerVars.listType = 'playlist';
    playerConfig.playerVars.list = listId;
    playerConfig.playerVars.index = Math.floor(Math.random() * 20); // Pick a random video from the first 20
  } else {
    playerConfig.videoId = videoId;
    playerConfig.playerVars.loop = 1;
    playerConfig.playerVars.playlist = videoId;
  }

  ytPlayer = new YT.Player('youtube-player', playerConfig);
}
window.onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;

// GLOBAL LANGUAGE ENGINE
function toggleLanguage() {
  currentLanguage = currentLanguage === 'ar' ? 'en' : 'ar';
  localStorage.setItem('jaz_lang', currentLanguage);
  applyTranslations();
  // Rerender active views to align language variables
  handleRouting();
}

function applyTranslations() {
  const lang = currentLanguage;
  const dir = lang === 'ar' ? 'rtl' : 'ltr';
  
  // Set html properties
  document.documentElement.lang = lang;
  document.documentElement.dir = dir;
  
  // Update button language texts
  const langBtn = document.getElementById('lang-switch-btn');
  if (langBtn) {
    langBtn.querySelector('.lang-text').innerText = lang === 'ar' ? 'EN' : 'العربية';
  }

  // Find all DOM elements with data-key and set translating strings
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (translations[lang] && translations[lang][key]) {
      el.innerText = translations[lang][key];
    }
  });

  // Handle placeholders translate
  const searchInput = document.getElementById('search-input');
  if (searchInput) searchInput.placeholder = lang === 'ar' ? 'ابحث عن منتج...' : 'Search products...';
  
  const newsInput = document.getElementById('newsletter-input');
  if (newsInput) newsInput.placeholder = lang === 'ar' ? 'أدخل رقم هاتفك أو بريدك الإلكتروني...' : 'Enter phone or email...';
}

// ROUTER CONTROLS
function handleRouting() {
  const hash = window.location.hash || '#home';
  
  // Hide all views
  document.querySelectorAll('.app-page').forEach(view => view.classList.remove('active'));
  
  // Remove nav item active classes
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));

  // Split hash to support dynamic parameters like #product/prod-1
  const parts = hash.split('/');
  const route = parts[0];
  const parameterId = parts[1];

  // Route mapping and rendering triggers
  if (route === '#home') {
    document.getElementById('home-view').classList.add('active');
    document.querySelector('.nav-item[href="#home"]').classList.add('active');
    renderHome();
  } else if (route === '#products') {
    document.getElementById('products-view').classList.add('active');
    document.querySelector('.nav-item[href="#products"]').classList.add('active');
    renderProducts();
  } else if (route === '#product' && parameterId) {
    document.getElementById('product-detail-view').classList.add('active');
    renderProductDetail(parameterId);
  } else if (route === '#custom-design') {
    document.getElementById('custom-design-view').classList.add('active');
    // Clear custom design form error messages
    clearFormErrors('custom-design-form');
  } else if (route === '#cart') {
    document.getElementById('cart-view').classList.add('active');
    document.querySelector('.nav-item[href="#cart"]').classList.add('active');
    renderCart();
  } else if (route === '#about') {
    document.getElementById('about-view').classList.add('active');
    renderAbout();
  } else if (route === '#contact') {
    document.getElementById('contact-view').classList.add('active');
  } else if (route === '#admin-login') {
    document.getElementById('admin-login-view').classList.add('active');
  } else if (route === '#admin') {
    // Session token check
    if (sessionStorage.getItem('jaz_admin_logged') === 'true') {
      document.getElementById('admin-view').classList.add('active');
      if (window.renderAdminDashboard) window.renderAdminDashboard();
    } else {
      window.location.hash = '#admin-login';
    }
  }

  // Scroll to top on route change
  window.scrollTo(0, 0);
}
window.addEventListener('hashchange', handleRouting);

// MOBILE TOGGLE PANEL
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const overlay = document.getElementById('mobile-menu-overlay');
  menu.classList.toggle('open');
  overlay.classList.toggle('open');
}

// TOAST NOTIFICATIONS HELPER
function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  const toast = document.createElement('div');
  toast.className = `toast toast-${type}`;
  
  let icon = '<i class="fa-solid fa-circle-check"></i>';
  if (type === 'error') icon = '<i class="fa-solid fa-triangle-exclamation"></i>';
  
  toast.innerHTML = `${icon} <span>${message}</span>`;
  container.appendChild(toast);
  
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// YOUTUBE MUTE/UNMUTE TOGGLE
// ==========================================
let youtubeMuted = true;

function toggleYouTubeMute() {
  if (!ytPlayer) return;
  if (youtubeMuted) {
    ytPlayer.unMute();
    youtubeMuted = false;
    document.getElementById('mute-icon').className = 'fa-solid fa-volume-high';
  } else {
    ytPlayer.mute();
    youtubeMuted = true;
    document.getElementById('mute-icon').className = 'fa-solid fa-volume-xmark';
  }
}
window.toggleYouTubeMute = toggleYouTubeMute;


// ==========================================
// COUPON SYSTEM
// ==========================================
function getCoupons() {
  return JSON.parse(localStorage.getItem('jaz_coupons') || '[]');
}

function validateCoupon(code, totalPrice) {
  code = code.trim().toUpperCase();
  if (!code) return { valid: false, message: 'الرجاء إدخال كود كوبون' };
  
  const coupons = getCoupons();
  const coupon = coupons.find(c => c.code.toUpperCase() === code && c.active);
  
  if (!coupon) return { valid: false, message: 'كود الكوبون غير صحيح' };
  
  // Check expiry
  if (coupon.expiry) {
    const expiryDate = new Date(coupon.expiry);
    if (expiryDate < new Date()) return { valid: false, message: 'هذا الكوبون منتهي الصلاحية' };
  }
  
  // Check min order
  if (coupon.minOrder > 0 && totalPrice && totalPrice < coupon.minOrder) {
    return { valid: false, message: `الحد الأدنى للطلب ${coupon.minOrder} ج.أ` };
  }
  
  return { valid: true, coupon };
}

function applyCouponDetail() {
  const input = document.getElementById('detail-coupon-input');
  const result = document.getElementById('detail-coupon-result');
  const hidden = document.getElementById('detail-coupon-code');
  const code = input.value.trim().toUpperCase();
  
  if (!code) {
    result.style.display = 'none';
    return;
  }
  
  const validation = validateCoupon(code);
  
  if (validation.valid) {
    result.style.display = 'block';
    result.className = 'coupon-result coupon-success';
    result.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${validation.coupon.type === 'percent' ? `خصم ${validation.coupon.value}%` : `خصم ${validation.coupon.value} ج.أ`} مُفعَّل ${validation.coupon.expiry ? `<br><small>صالح حتى ${new Date(validation.coupon.expiry).toLocaleDateString('ar-EG')}</small>` : ''}`;
    input.classList.add('coupon-success-input');
    hidden.value = validation.coupon.code;
    
    // Show applied coupon on detail page
    const p = activeDetailProduct;
    if (p) {
      const basePrice = p.price_jod;
      let discountAmount = 0;
      if (validation.coupon.type === 'percent') {
        discountAmount = basePrice * (validation.coupon.value / 100);
      } else {
        discountAmount = validation.coupon.value;
      }
      const discountedPrice = Math.max(0, basePrice - discountAmount);
      
      // Update displayed price
      document.getElementById('detail-price-jod').innerHTML = `<span style="text-decoration:line-through;opacity:0.6;font-size:0.8em">${basePrice.toFixed(2)}</span> <br>${discountedPrice.toFixed(2)}`;
      document.getElementById('detail-price-usd').innerText = (discountedPrice * 1.41).toFixed(2);
    }
  } else {
    result.style.display = 'block';
    result.className = 'coupon-result coupon-error';
    result.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${validation.message}`;
    input.classList.remove('coupon-success-input');
    hidden.value = '';
  }
}
window.applyCouponDetail = applyCouponDetail;

function applyCouponCart() {
  const input = document.getElementById('cart-coupon-input');
  const result = document.getElementById('cart-coupon-result');
  const hidden = document.getElementById('cart-coupon-code');
  const code = input.value.trim().toUpperCase();
  
  if (!code) {
    result.style.display = 'none';
    // Remove coupon from cart if emptying
    sessionStorage.removeItem('jaz_active_coupon');
    calculateCartTotals();
    return;
  }
  
  // Check if coupon is already applied
  const existingCoupon = sessionStorage.getItem('jaz_active_coupon');
  if (existingCoupon && existingCoupon.toUpperCase() === code) {
    result.style.display = 'block';
    result.className = 'coupon-result coupon-warning';
    result.innerHTML = '<i class="fa-solid fa-info-circle"></i> هذا الكوبون مُفعَّل بالفعل';
    return;
  }
  
  const validation = validateCoupon(code);
  
  if (validation.valid) {
    // Check minimum order value
    if (validation.coupon.min_order > 0) {
      let subtotal = 0;
      cart.forEach(item => {
        const p = db.getProductById(item.productId);
        if (p) subtotal += p.price_jod * item.qty;
      });
      if (subtotal < validation.coupon.min_order) {
        result.style.display = 'block';
        result.className = 'coupon-result coupon-error';
        result.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> الحد الأدنى للطلب: ${validation.coupon.min_order} ج.أ. المجموع الحالي: ${subtotal.toFixed(2)} ج.أ`;
        return;
      }
    }
    
    // Apply coupon
    sessionStorage.setItem('jaz_active_coupon', validation.coupon.code);
    hidden.value = validation.coupon.code;
    result.style.display = 'block';
    result.className = 'coupon-result coupon-success';
    const discountLabel = validation.coupon.type === 'percent' ? `خصم ${validation.coupon.value}%` : `خصم ${validation.coupon.value} ج.أ`;
    result.innerHTML = `<i class="fa-solid fa-circle-check"></i> ${discountLabel} مُفعَّل بنجاح ${validation.coupon.expiry ? `<br><small>صالح حتى ${new Date(validation.coupon.expiry).toLocaleDateString('ar-EG')}</small>` : ''}`;
    input.classList.add('coupon-success-input');
    
    // Recalculate totals
    calculateCartTotals();
  } else {
    result.style.display = 'block';
    result.className = 'coupon-result coupon-error';
    result.innerHTML = `<i class="fa-solid fa-circle-xmark"></i> ${validation.message}`;
    input.classList.remove('coupon-success-input');
    hidden.value = '';
  }
}
window.applyCouponCart = applyCouponCart;


// --- RENDER HOME PAGE ---
function renderHome() {
  // 1. Load Content texts from database
  const content = db.getContent();
  const pAr = document.getElementById('content-purpose');
  const gAr = document.getElementById('content-goal');
  const sAr = document.getElementById('content-story');
  
  if (currentLanguage === 'ar') {
    if (pAr) pAr.innerText = content.purpose_ar;
    if (gAr) gAr.innerText = content.goal_ar;
    if (sAr) sAr.innerText = content.story_ar;
  } else {
    if (pAr) pAr.innerText = content.purpose_en;
    if (gAr) gAr.innerText = content.goal_en;
    if (sAr) sAr.innerText = content.story_en;
  }

  // 2. Populate best sellers grid
  const products = db.getProducts();
  const bestSellers = products.filter(p => p.best_seller);
  const grid = document.getElementById('best-sellers-grid');
  
  if (grid) {
    grid.innerHTML = '';
    bestSellers.slice(0, 3).forEach(p => {
      grid.appendChild(createProductCardElement(p));
    });
  }

  // 3. Populate reviews list
  const reviews = db.getReviews();
  const revContainer = document.getElementById('reviews-carousel');
  if (revContainer) {
    revContainer.innerHTML = '';
    reviews.forEach(r => {
      const card = document.createElement('div');
      card.className = 'card review-card';
      
      let starsHtml = '';
      for (let i = 0; i < r.stars; i++) starsHtml += '<i class="fa-solid fa-star"></i>';
      
      const author = currentLanguage === 'ar' ? r.name : (r.name_en || r.name);
      const text = currentLanguage === 'ar' ? r.text_ar : r.text_en;
      
      card.innerHTML = `
        <div class="review-stars">${starsHtml}</div>
        <p class="review-text">"${text}"</p>
        <span class="review-author">${author}</span>
      `;
      revContainer.appendChild(card);
    });
  }
}

// --- RENDER PRODUCTS CATALOG ---
function renderProducts() {
  // Add Category filter options
  const select = document.getElementById('category-select');
  if (select && select.children.length === 0) {
    const cats = db.getCategories();
    select.innerHTML = '';
    cats.forEach(c => {
      const opt = document.createElement('option');
      opt.value = c.id;
      opt.innerText = currentLanguage === 'ar' ? c.name_ar : c.name_en;
      select.appendChild(opt);
    });
  }
  filterProducts();
}

function filterProducts() {
  const query = document.getElementById('search-input').value.toLowerCase().trim();
  const cat = document.getElementById('category-select').value;
  const products = db.getProducts();
  
  let filtered = products;

  // Filter Category
  if (cat !== 'all') {
    filtered = filtered.filter(p => p.category === cat);
  }

  // Filter Search Query - Priority: Name first, then Description
  if (query) {
    // Score and sort results by relevance
    const scoredResults = filtered.filter(p => {
      const nameAr = p.name_ar.toLowerCase();
      const nameEn = p.name_en.toLowerCase();
      const descAr = p.desc_ar.toLowerCase();
      const descEn = p.desc_en.toLowerCase();
      
      // First priority: exact name match
      if (nameAr.includes(query) || nameEn.includes(query)) return true;
      // Second priority: description match
      if (descAr.includes(query) || descEn.includes(query)) return true;
      
      return false;
    });
    
    // Sort by relevance: exact match > starts with > name contains > desc contains
    scoredResults.sort((a, b) => {
      const aNameAr = a.name_ar.toLowerCase();
      const aNameEn = a.name_en.toLowerCase();
      const aDescAr = a.desc_ar.toLowerCase();
      const aDescEn = a.desc_en.toLowerCase();
      const bNameAr = b.name_ar.toLowerCase();
      const bNameEn = b.name_en.toLowerCase();
      const bDescAr = b.desc_ar.toLowerCase();
      const bDescEn = b.desc_en.toLowerCase();
      
      // Scoring: higher is more relevant
      const getScore = (nameAr, nameEn, descAr, descEn) => {
        let score = 0;
        // Exact match in name = highest priority
        if (nameAr === query || nameEn === query) score += 100;
        // Starts with query = very high priority
        else if (nameAr.startsWith(query) || nameEn.startsWith(query)) score += 80;
        // Name contains query = high priority
        else if (nameAr.includes(query) || nameEn.includes(query)) score += 50;
        // Description exact match = medium
        if (descAr === query || descEn === query) score += 30;
        // Description starts with = medium
        else if (descAr.startsWith(query) || descEn.startsWith(query)) score += 20;
        // Description contains = lower priority
        else if (descAr.includes(query) || descEn.includes(query)) score += 10;
        return score;
      };
      
      const scoreA = getScore(aNameAr, aNameEn, aDescAr, aDescEn);
      const scoreB = getScore(bNameAr, bNameEn, bDescAr, bDescEn);
      
      return scoreB - scoreA; // Descending order
    });
    
    filtered = scoredResults;
  }

  const grid = document.getElementById('products-grid');
  const noProductsMsg = document.getElementById('no-products-message');
  
  if (grid) {
    grid.innerHTML = '';
    if (filtered.length === 0) {
      noProductsMsg.classList.remove('hidden');
    } else {
      noProductsMsg.classList.add('hidden');
      filtered.forEach(p => {
        grid.appendChild(createProductCardElement(p));
      });
    }
  }
}

// HELPER PRODUCT CARD RENDERER
function createProductCardElement(p) {
  const card = document.createElement('div');
  card.className = 'product-card';
  card.style.cursor = 'pointer';
  
  // Make entire card clickable to navigate to product details
  card.onclick = (e) => {
    // If user clicked the cart button, don't navigate
    if (e.target.closest('.btn-card-icon')) return;
    window.location.hash = `#product/${p.id}`;
  };
  
  const title = currentLanguage === 'ar' ? p.name_ar : p.name_en;
  const desc = currentLanguage === 'ar' ? p.desc_ar : p.desc_en;
  let badgeHtml = '';
  if (p.customizable && p.require_image) {
    const tag = currentLanguage === 'ar' ? 'تصميم مخصص بالكامل' : 'Fully Customizable';
    badgeHtml = `<span class="product-custom-badge" style="background:var(--secondary-color)">${tag}</span>`;
  } else if (p.customizable) {
    const tag = currentLanguage === 'ar' ? 'حفر مخصص' : 'Custom Engrave';
    badgeHtml = `<span class="product-custom-badge">${tag}</span>`;
  } else if (p.require_image) {
    const tag = currentLanguage === 'ar' ? 'يتطلب صورة' : 'Photo Required';
    badgeHtml = `<span class="product-custom-badge" style="background:var(--primary-color)">${tag}</span>`;
  }

  card.innerHTML = `
    ${badgeHtml}
    <div class="product-img-wrapper">
      <img src="${p.img_main || 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=400&auto=format&fit=crop'}" alt="${title}">
    </div>
    <div class="product-card-body">
      <span class="product-card-category">${p.category.toUpperCase()}</span>
      <h3 class="product-card-title">${title}</h3>
      <p class="product-card-desc">${desc}</p>
      <div class="product-card-footer">
        <div class="product-card-prices">
          <span class="card-price-jod">${p.price_jod.toFixed(2)} <span style="font-size:0.8rem">${currentLanguage==='ar'?'د.أ':'JOD'}</span></span>
          <span class="card-price-usd">$${p.price_usd.toFixed(2)}</span>
        </div>
        <div class="product-card-actions">
          <button onclick="addProductToCart('${p.id}')" class="btn btn-secondary btn-card-icon" title="${currentLanguage === 'ar' ? 'أضف للسلة' : 'Add to Cart'}">
            <i class="fa-solid fa-cart-plus"></i>
          </button>
        </div>
      </div>
    </div>
  `;
  return card;
}

// --- RENDER PRODUCT DETAILS PAGE ---
let activeDetailProduct = null;
function renderProductDetail(id) {
  const p = db.getProductById(id);
  if (!p) {
    showToast('المنتج غير موجود / Product not found', 'error');
    window.location.hash = '#products';
    return;
  }

  activeDetailProduct = p;
  clearFormErrors('direct-order-form');

  // Load basic elements
  document.getElementById('order-product-id').value = p.id;
  document.getElementById('detail-category').innerText = p.category.toUpperCase();
  document.getElementById('detail-title').innerText = currentLanguage === 'ar' ? p.name_ar : p.name_en;
  document.getElementById('detail-description').innerText = currentLanguage === 'ar' ? p.desc_ar : p.desc_en;
  
  document.getElementById('detail-price-jod').innerText = p.price_jod.toFixed(2);
  document.getElementById('detail-price-usd').innerText = p.price_usd.toFixed(2);
  document.getElementById('detail-delivery').innerText = currentLanguage === 'ar' ? (p.delivery_ar || p.delivery) : p.delivery;

  // Render Image Gallery
  const mainImg = document.getElementById('detail-main-img');
  mainImg.src = p.img_main;
  
  const thumbs = document.getElementById('detail-thumbnails');
  thumbs.innerHTML = '';

  // Add main image to thumbnails
  const mainThumb = document.createElement('div');
  mainThumb.className = 'thumbnail-item active';
  mainThumb.innerHTML = `<img src="${p.img_main}" alt="Thumb">`;
  mainThumb.onclick = () => {
    document.querySelectorAll('.thumbnail-item').forEach(t => t.classList.remove('active'));
    mainThumb.classList.add('active');
    mainImg.src = p.img_main;
  };
  thumbs.appendChild(mainThumb);

  // Add additional images to gallery
  if (p.img_gallery && p.img_gallery.length > 0) {
    p.img_gallery.forEach(imgUrl => {
      if (!imgUrl) return;
      const t = document.createElement('div');
      t.className = 'thumbnail-item';
      t.innerHTML = `<img src="${imgUrl}" alt="Thumb">`;
      t.onclick = () => {
        document.querySelectorAll('.thumbnail-item').forEach(ti => ti.classList.remove('active'));
        t.classList.add('active');
        mainImg.src = imgUrl;
      };
      thumbs.appendChild(t);
    });
  }

  // Handle customizable fields condition
  const phraseContainer = document.getElementById('custom-phrase-container');
  const phraseInput = document.getElementById('order-phrase');
  if (p.customizable) {
    phraseContainer.classList.remove('hidden');
    phraseInput.required = true;
  } else {
    phraseContainer.classList.add('hidden');
    phraseInput.required = false;
    phraseInput.value = '';
  }

  // Handle image upload requirement conditional
  const uploadContainer = document.getElementById('image-upload-container');
  const uploadInput = document.getElementById('order-image');
  if (p.require_image) {
    uploadContainer.classList.remove('hidden');
    uploadInput.required = true;
  } else {
    uploadContainer.classList.add('hidden');
    uploadInput.required = false;
    uploadInput.value = '';
    document.getElementById('order-image-name').innerText = '';
  }

  // Reset file name display listener
  document.getElementById('order-image').addEventListener('change', (e) => {
    const filename = e.target.files[0] ? e.target.files[0].name : '';
    document.getElementById('order-image-name').innerText = filename;
  });
}

// --- RENDER CART PAGE ---
function renderCart() {
  const wrapper = document.getElementById('cart-content-wrapper');
  const emptyMsg = document.getElementById('cart-empty-message');
  const list = document.getElementById('cart-items-list');

  clearFormErrors('cart-checkout-form');

  if (cart.length === 0) {
    wrapper.classList.add('hidden');
    emptyMsg.classList.remove('hidden');
    return;
  }

  wrapper.classList.remove('hidden');
  emptyMsg.classList.add('hidden');
  list.innerHTML = '';

  cart.forEach((item, index) => {
    const p = db.getProductById(item.productId);
    if (!p) return;

    const title = currentLanguage === 'ar' ? p.name_ar : p.name_en;
    const itemCard = document.createElement('div');
    itemCard.className = 'cart-item';

    let customDetailsHtml = '';
    if (item.customPhrase) {
      customDetailsHtml += `
        <div class="cart-item-custom-notes">
          <i class="fa-solid fa-pen-nib"></i> ${currentLanguage === 'ar'?'العبارة':'Phrase'}: ${item.customPhrase}
        </div>
      `;
    }
    if (item.uploadedImageName) {
      customDetailsHtml += `
        <div class="cart-item-custom-notes">
          <i class="fa-solid fa-image"></i> ${currentLanguage === 'ar'?'الملف':'File'}: ${item.uploadedImageName}
        </div>
      `;
    }

    itemCard.innerHTML = `
      <img src="${p.img_main}" class="cart-item-img" alt="${title}">
      <div class="cart-item-details">
        <h3 class="cart-item-title">${title}</h3>
        ${customDetailsHtml}
        <div class="cart-item-meta">
          <span>${currentLanguage === 'ar' ? 'سعر المفرد:' : 'Unit price:'} ${p.price_jod.toFixed(2)} ${currentLanguage==='ar'?'د.أ':'JOD'}</span>
          <span>$${p.price_usd.toFixed(2)}</span>
        </div>
      </div>
      <div class="cart-item-actions">
        <div class="qty-control">
          <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
          <span class="qty-val">${item.qty}</span>
          <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
        </div>
        <button class="btn-remove-cart" onclick="removeFromCart(${index})" title="Remove item">
          <i class="fa-solid fa-trash-can"></i>
        </button>
      </div>
    `;
    list.appendChild(itemCard);
  });

  calculateCartTotals();
}

// CART MATH & PROCESSORS
function addProductToCart(productId) {
  const p = db.getProductById(productId);
  if (!p) return;

  // If product is customizable or requires image, we redirect them to detail page to enter requirements
  if (p.customizable || p.require_image) {
    showToast(currentLanguage === 'ar' ? 'يتطلب هذا المنتج تخصيصاً، يرجى كتابة التفاصيل هنا.' : 'This product is customizable, please enter specifications first.', 'warning');
    window.location.hash = `#product/${productId}`;
    return;
  }

  // Else direct add
  const cartIdx = cart.findIndex(item => item.productId === productId && !item.customPhrase && !item.uploadedImageUrl);
  if (cartIdx !== -1) {
    cart[cartIdx].qty++;
  } else {
    cart.push({ productId, qty: 1, customPhrase: '', uploadedImageUrl: '', uploadedImageName: '' });
  }

  saveCartSession();
  showToast(currentLanguage === 'ar' ? 'تم إضافة المنتج إلى السلة' : 'Product added to cart', 'success');
}

function addProductToCartFromDetails() {
  if (!activeDetailProduct) return;
  const p = activeDetailProduct;

  // Validation if customizable
  if (p.customizable) {
    const phrase = document.getElementById('order-phrase').value.trim();
    if (!phrase) {
      setFieldError('order-phrase', currentLanguage === 'ar' ? 'الرجاء إدخال العبارة المطلوبة للتخصيص' : 'Required customization phrase missing');
      return;
    }
  }

  if (p.require_image) {
    const imgFile = document.getElementById('order-image').files[0];
    if (!imgFile) {
      setFieldError('order-image', currentLanguage === 'ar' ? 'الرجاء اختيار صورة أو ملف للتصميم' : 'Please select custom drawing file');
      return;
    }
  }

  // Handle async file upload if exists
  const imgFile = document.getElementById('order-image').files[0];
  const phrase = document.getElementById('order-phrase').value.trim();
  
  if (imgFile) {
    showToast(currentLanguage === 'ar' ? 'جاري معالجة ورفع الملف...' : 'Processing and uploading file...', 'warning');
    db.uploadImage(imgFile).then(uploadedUrl => {
      cart.push({
        productId: p.id,
        qty: 1,
        customPhrase: phrase,
        uploadedImageUrl: uploadedUrl,
        uploadedImageName: imgFile.name
      });
      saveCartSession();
      showToast(currentLanguage === 'ar' ? 'تمت الإضافة إلى السلة' : 'Added to cart successfully', 'success');
      window.location.hash = '#cart';
    });
  } else {
    cart.push({
      productId: p.id,
      qty: 1,
      customPhrase: phrase,
      uploadedImageUrl: '',
      uploadedImageName: ''
    });
    saveCartSession();
    showToast(currentLanguage === 'ar' ? 'تمت الإضافة إلى السلة' : 'Added to cart successfully', 'success');
    window.location.hash = '#cart';
  }
}

function updateCartQty(index, change) {
  cart[index].qty += change;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCartSession();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  saveCartSession();
  renderCart();
  showToast(currentLanguage === 'ar' ? 'تم إزالة المنتج من السلة' : 'Item removed', 'success');
}

function saveCartSession() {
  sessionStorage.setItem('jaz_cart', JSON.stringify(cart));
  updateCartBadges();
}

function updateCartBadges() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const badgeDesktop = document.getElementById('cart-badge');
  const badgeMobile = document.getElementById('cart-badge-mobile');
  
  if (badgeDesktop) badgeDesktop.innerText = totalQty;
  if (badgeMobile) badgeMobile.innerText = totalQty;
}

// Calculate totals before and after discounts
function calculateCartTotals() {
  let subtotalJOD = 0;
  let subtotalUSD = 0;

  cart.forEach(item => {
    const p = db.getProductById(item.productId);
    if (p) {
      subtotalJOD += p.price_jod * item.qty;
      subtotalUSD += p.price_usd * item.qty;
    }
  });

  // Calculate discount: apply active coupon FIRST (one coupon per order)
  let discountJOD = 0;
  let discountUSD = 0;
  let appliedCoupon = null;
  
  const activeCouponCode = sessionStorage.getItem('jaz_active_coupon');
  if (activeCouponCode) {
    const validation = validateCoupon(activeCouponCode);
    if (validation.valid) {
      appliedCoupon = validation.coupon;
      if (appliedCoupon.type === 'percent') {
        discountJOD = subtotalJOD * (appliedCoupon.value / 100);
        discountUSD = subtotalUSD * (appliedCoupon.value / 100);
      } else {
        discountJOD = Math.min(appliedCoupon.value, subtotalJOD);
        discountUSD = discountJOD * 1.41;
      }
    }
  }

  // Also apply bulk discount if subtotal >= 100 JOD (only if no coupon applied, or stack them)
  if (!appliedCoupon && subtotalJOD >= 100) {
    discountJOD = subtotalJOD * 0.10;
    discountUSD = subtotalUSD * 0.10;
  }

  const grandTotalJOD = Math.max(0, subtotalJOD - discountJOD);
  const grandTotalUSD = Math.max(0, subtotalUSD - discountUSD);

  // Set DOM
  document.getElementById('cart-subtotal-jod').innerText = subtotalJOD.toFixed(2);
  document.getElementById('cart-subtotal-usd').innerText = `($${subtotalUSD.toFixed(2)})`;

  const discountRow = document.getElementById('cart-discount-row');
  if (discountJOD > 0) {
    discountRow.classList.remove('hidden');
    document.getElementById('cart-discount-jod').innerText = `-${discountJOD.toFixed(2)}`;
    document.getElementById('cart-discount-usd').innerText = `(-$${discountUSD.toFixed(2)})`;
  } else {
    discountRow.classList.add('hidden');
  }

  document.getElementById('cart-total-jod').innerText = grandTotalJOD.toFixed(2);
  document.getElementById('cart-total-usd').innerText = `($${grandTotalUSD.toFixed(2)})`;
}

// --- FORM VALIDATION PLUGINS ---
function validateName(name) {
  // Allow only Arabic letters, English letters, and spaces
  const regex = /^[a-zA-Z\s\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\uFB50-\uFDFF\uFE70-\uFEFF]+$/;
  return regex.test(name);
}

function validatePhone(phone) {
  // Allow 9 digits or 10 digits if starts with 0
  const cleaned = phone.replace(/[\s-]/g, '');
  if (cleaned.startsWith('0')) {
    return /^0[0-9]{9}$/.test(cleaned);
  }
  return /^[0-9]{9}$/.test(cleaned);
}

function setFieldError(id, message) {
  const el = document.getElementById(id);
  if (el) {
    el.classList.add('border-danger');
  }
  // Error span is named err-{id}
  const errSpan = document.getElementById(`err-${id}`);
  if (errSpan) {
    errSpan.innerText = message;
  }
}

function clearFormErrors(formId) {
  const form = document.getElementById(formId);
  if (!form) return;
  form.querySelectorAll('.error-msg').forEach(el => el.innerText = '');
  form.querySelectorAll('input, select, textarea').forEach(el => el.classList.remove('border-danger'));
}

// --- FORM SUBMISSIONS HANDLERS ---

// A. Newsletter Subscription
function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById('newsletter-input').value.trim();
  if (!input) return;

  const isPhone = /^[+0-9\s-]{7,15}$/.test(input); // basic format
  
  const subData = {
    contact: input,
    source: window.location.hash || '#home',
    lang: currentLanguage,
    type: isPhone ? 'phone' : 'email'
  };

  db.addSubscription(subData).then(() => {
    showToast(currentLanguage === 'ar' ? 'تم الاشتراك بنجاح، شكراً لك!' : 'Successfully subscribed!', 'success');
    document.getElementById('newsletter-input').value = '';
  });
}

// B. Direct Order Submit
function handleDirectOrderSubmit(event) {
  event.preventDefault();
  clearFormErrors('direct-order-form');

  const pId = document.getElementById('order-product-id').value;
  const name = document.getElementById('order-name').value.trim();
  const phone = document.getElementById('order-phone').value.trim();
  const country = document.getElementById('order-country').value;
  const phrase = document.getElementById('order-phrase').value.trim();
  const fileInput = document.getElementById('order-image');
  const notes = document.getElementById('order-notes').value.trim();

  let hasError = false;

  if (!validateName(name)) {
    setFieldError('order-name', currentLanguage === 'ar' ? 'يسمح فقط بالأحرف العربية والإنجليزية والمسافات' : 'Only letters and spaces allowed');
    hasError = true;
  }

  if (!validatePhone(phone)) {
    setFieldError('order-phone', currentLanguage === 'ar' ? 'الرجاء إدخال رقم هاتف صحيح (9 أرقام، أو 10 أرقام تبدأ بالصفر)' : 'Invalid phone number (must be 9 digits, or 10 digits starting with 0)');
    hasError = true;
  }

  if (activeDetailProduct.customizable && !phrase) {
    setFieldError('order-phrase', currentLanguage === 'ar' ? 'الرجاء إدخال العبارة المطلوبة للتخصيص' : 'Custom phrase is required');
    hasError = true;
  }

  if (activeDetailProduct.require_image && !fileInput.files[0]) {
    setFieldError('order-image', currentLanguage === 'ar' ? 'الرجاء اختيار ملف أو صورة التصميم المطلوبة' : 'Design file is required');
    hasError = true;
  }

  if (hasError) return;

  const proceedOrder = (imageUrl = '') => {
    // Check for applied coupon on detail page
    const couponCode = document.getElementById('detail-coupon-code').value.trim();
    let finalPrice = activeDetailProduct.price_jod;
    let originalPrice = activeDetailProduct.price_jod;
    let couponNotes = '';
    
    if (couponCode) {
      const validation = validateCoupon(couponCode);
      if (validation.valid) {
        originalPrice = activeDetailProduct.price_jod;
        let discountAmount = 0;
        if (validation.coupon.type === 'percent') {
          discountAmount = originalPrice * (validation.coupon.value / 100);
        } else {
          discountAmount = validation.coupon.value;
        }
        finalPrice = Math.max(0, originalPrice - discountAmount);
        couponNotes = `Coupon: ${couponCode} (${validation.coupon.type === 'percent' ? validation.coupon.value + '%' : validation.coupon.value + 'JOD'} off)`;
      }
    }

    const orderData = {
      order_type: 'Direct Purchase',
      name: name,
      country_code: country,
      phone: phone,
      product_id: pId,
      product_name: activeDetailProduct.name_en,
      category: activeDetailProduct.category,
      price: finalPrice,
      original_price: originalPrice,
      custom_phrase: phrase,
      image_link: imageUrl,
      notes: couponNotes ? `${notes} | ${couponNotes}` : notes
    };

    showToast(currentLanguage === 'ar' ? 'جاري إرسال طلبك...' : 'Sending your order details...', 'warning');
    db.addOrder(orderData).then(() => {
      showToast(currentLanguage === 'ar' ? 'تم تأكيد طلبك بنجاح! سنتواصل معك قريباً.' : 'Order placed successfully! We will contact you soon.', 'success');
      document.getElementById('direct-order-form').reset();
      document.getElementById('order-image-name').innerText = '';
      window.location.hash = '#home';
    });
  };

  // Upload image first if chosen
  const imgFile = fileInput.files[0];
  if (imgFile) {
    showToast(currentLanguage === 'ar' ? 'جاري رفع صورة الطلب...' : 'Uploading order image...', 'warning');
    db.uploadImage(imgFile).then(url => proceedOrder(url));
  } else {
    proceedOrder();
  }
}

// C. Custom Design Request Submit
function handleCustomDesignSubmit(event) {
  event.preventDefault();
  clearFormErrors('custom-design-form');

  const name = document.getElementById('custom-name').value.trim();
  const country = document.getElementById('custom-country').value;
  const phone = document.getElementById('custom-phone').value.trim();
  const idea = document.getElementById('custom-idea').value.trim();
  const fileInput = document.getElementById('custom-image');

  let hasError = false;

  if (!validateName(name)) {
    setFieldError('custom-name', currentLanguage === 'ar' ? 'يسمح فقط بالأحرف العربية والإنجليزية والمسافات' : 'Only letters and spaces allowed');
    hasError = true;
  }

  if (!validatePhone(phone)) {
    setFieldError('custom-phone', currentLanguage === 'ar' ? 'الرجاء إدخال رقم هاتف صحيح (9 أرقام، أو 10 أرقام تبدأ بالصفر)' : 'Invalid phone number (must be 9 digits, or 10 digits starting with 0)');
    hasError = true;
  }

  if (!idea) {
    setFieldError('custom-idea', currentLanguage === 'ar' ? 'الرجاء وصف فكرة التصميم الخشبي المطلوب' : 'Please describe your custom design idea');
    hasError = true;
  }

  if (hasError) return;

  const proceedRequest = (imageUrl = '') => {
    const orderData = {
      order_type: 'Custom Design Request',
      name: name,
      country_code: country,
      phone: phone,
      product_id: 'CUSTOM-IDEA',
      product_name: 'Custom Handmade Wood Piece',
      category: 'custom-made',
      price: 0,
      original_price: 0,
      custom_phrase: '',
      image_link: imageUrl,
      notes: idea
    };

    showToast(currentLanguage === 'ar' ? 'جاري إرسال فكرتك للورشة...' : 'Sending request details to workshop...', 'warning');
    db.addOrder(orderData).then(() => {
      // Custom confirmation layout display inside direct page
      showToast(currentLanguage === 'ar' ? 'تم إرسال الفكرة بنجاح! سنتواصل معك خلال 24 ساعة.' : 'Custom design request submitted! We will contact you within 24h.', 'success');
      document.getElementById('custom-design-form').reset();
      document.getElementById('custom-image-name').innerText = '';
      window.location.hash = '#home';
    });
  };

  const imgFile = fileInput.files[0];
  if (imgFile) {
    showToast(currentLanguage === 'ar' ? 'جاري رفع ملف الفكرة...' : 'Uploading sketch file...', 'warning');
    db.uploadImage(imgFile).then(url => proceedRequest(url));
  } else {
    proceedRequest();
  }
}

// D. Cart Checkout Confirm
function handleCartCheckoutSubmit(event) {
  event.preventDefault();
  clearFormErrors('cart-checkout-form');

  const name = document.getElementById('cart-name').value.trim();
  const country = document.getElementById('cart-country').value;
  const phone = document.getElementById('cart-phone').value.trim();
  const address = document.getElementById('cart-address').value.trim();

  let hasError = false;

  if (!validateName(name)) {
    setFieldError('cart-name', currentLanguage === 'ar' ? 'يسمح فقط بالأحرف العربية والإنجليزية والمسافات' : 'Only letters and spaces allowed');
    hasError = true;
  }

  if (!validatePhone(phone)) {
    setFieldError('cart-phone', currentLanguage === 'ar' ? 'الرجاء إدخال رقم هاتف صحيح (9 أرقام، أو 10 أرقام تبدأ بالصفر)' : 'Invalid phone number (must be 9 digits, or 10 digits starting with 0)');
    hasError = true;
  }

  if (hasError) return;

  // Build combined descriptions of cart products
  let productNames = cart.map(item => {
    const p = db.getProductById(item.productId);
    let str = `${p ? p.name_en : 'Product'} (x${item.qty})`;
    if (item.customPhrase) str += ` [Phrase: ${item.customPhrase}]`;
    return str;
  }).join(' | ');

  let totalJOD = parseFloat(document.getElementById('cart-total-jod').innerText);
  let subtotalJOD = parseFloat(document.getElementById('cart-subtotal-jod').innerText);

  // Check for applied coupon
  const couponCode = sessionStorage.getItem('jaz_active_coupon');
  let couponNotes = '';
  if (couponCode) {
    const validation = validateCoupon(couponCode);
    if (validation.valid) {
      couponNotes = `Coupon: ${couponCode} (${validation.coupon.type === 'percent' ? validation.coupon.value + '%' : validation.coupon.value + 'JOD'} off)`;
    }
  }

  const orderData = {
    order_type: 'Cart Purchase',
    name: name,
    country_code: country,
    phone: phone,
    product_id: 'CART-MULTIPLES',
    product_name: productNames,
    category: 'cart-checkout',
    price: totalJOD,
    original_price: subtotalJOD,
    custom_phrase: '',
    image_link: cart.map(item => item.uploadedImageUrl).filter(url => url.length > 0).join(' , '),
    notes: couponNotes ? `Delivery address: ${address} | ${couponNotes}` : `Delivery address: ${address}`
  };

  showToast(currentLanguage === 'ar' ? 'جاري تأكيد طلبيات السلة...' : 'Confirming checkout details...', 'warning');
  db.addOrder(orderData).then(() => {
    showToast(currentLanguage === 'ar' ? 'تم تسجيل طلبيات السلة بنجاح! شكراً للتسوق من جازوودن.' : 'Checkout completed! Thank you for purchasing from Jazwooden.', 'success');
    
    // Clear cart and coupon
    cart = [];
    saveCartSession();
    sessionStorage.removeItem('jaz_active_coupon');
    document.getElementById('cart-checkout-form').reset();
    window.location.hash = '#home';
  });
}

// Handle Custom space image change filenames listeners
document.getElementById('custom-image').addEventListener('change', (e) => {
  const filename = e.target.files[0] ? e.target.files[0].name : '';
  document.getElementById('custom-image-name').innerText = filename;
});

// ABOUT PAGE TEXT LOADER
function renderAbout() {
  const content = db.getContent();
  const textDiv = document.getElementById('about-text-content');
  if (textDiv) {
    if (currentLanguage === 'ar') {
      textDiv.innerHTML = `<p>${content.story_ar.replace(/\n/g, '</p><p>')}</p>`;
    } else {
      textDiv.innerHTML = `<p>${content.story_en.replace(/\n/g, '</p><p>')}</p>`;
    }
  }
}

// INITIAL STARTUP CALL
document.addEventListener('DOMContentLoaded', () => {
  applyTranslations();
  updateCartBadges();
  handleRouting();
});
