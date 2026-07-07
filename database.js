class DatabaseService {
  constructor() {
    this.initDatabase();
  }

  // Initialize DB in LocalStorage if not exists (Mocking Database for client-side SPA)
  initDatabase() {
    // 1. Categories Seed
    if (!localStorage.getItem('jaz_categories')) {
      const defaultCategories = [
        { id: 'all', name_ar: 'الكل', name_en: 'All' },
        { id: 'shelves', name_ar: 'رفوف معلقة', name_en: 'Shelves' },
        { id: 'table-lamps', name_ar: 'مصابيح طاولة مريحة', name_en: 'Table Lamps' },
        { id: 'gifts', name_ar: 'هدايا تذكارية', name_en: 'Gifts' },
        { id: 'personalized', name_ar: 'هدايا بالاسم وتفصيل خاص', name_en: 'Personalized Gifts' },
        { id: 'frames', name_ar: 'إطارات جدارية ومخططات', name_en: 'Frames' },
        { id: 'decor', name_ar: 'إكسسوارات وديكورات', name_en: 'Wooden Décor' },
        { id: 'illuminated', name_ar: 'منتجات مضيئة فاخرة', name_en: 'Illuminated Products' }
      ];
      localStorage.setItem('jaz_categories', JSON.stringify(defaultCategories));
    }

    // 2. Products Seed
    if (!localStorage.getItem('jaz_products')) {
      const defaultProducts = [
        {
          id: 'prod-1',
          name_ar: 'رف معلق مضيء من خشب السويد',
          name_en: 'Illuminated Floating Pine Shelf',
          category: 'shelves',
          price_jod: 45.00,
          price_usd: 63.50,
          delivery: '3 - 5 days',
          delivery_ar: '3 - 5 أيام عمل',
          img_main: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop',
          img_gallery: ['https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?q=80&w=600&auto=format&fit=crop'],
          desc_ar: 'رف خشبي أنيق مصنوع يدوياً من خشب السويد الطبيعي، مجهز بإضاءة ليد مخفية دافئة تمنح المكان جواً شاعرياً وهادئاً. يعمل بواسطة مخرج USB وسلك مخفي. مثالي لعرض الكتب والصور.',
          desc_en: 'Handcrafted floating shelf made of premium natural Swedish pine wood, equipped with hidden warm LED lighting to create a cozy atmosphere. Powered via USB. Perfect for books and family frames.',
          customizable: true,
          require_image: false,
          best_seller: true
        },
        {
          id: 'prod-2',
          name_ar: 'مصباح طاولة خشبي محفور مخصص',
          name_en: 'Custom Engraved Wooden Table Lamp',
          category: 'table-lamps',
          price_jod: 30.00,
          price_usd: 42.30,
          delivery: '2 - 4 days',
          delivery_ar: '2 - 4 أيام عمل',
          img_main: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?q=80&w=600&auto=format&fit=crop',
          img_gallery: [],
          desc_ar: 'مصباح طاولة مصنع من كتلة خشبية واحدة، يمكنك حفر اسم عائلتك أو شعار شركتك عليه بدقة متناهية. الإنارة مخفية في ثنايا الخشب لتظهر التموجات الرائعة.',
          desc_en: 'Handcrafted from a single block of wood, this table lamp features precise custom engraving of names or quotes. The light diffuses through the wood grain to create a warm golden glow.',
          customizable: true,
          require_image: false,
          best_seller: true
        },
        {
          id: 'prod-3',
          name_ar: 'إطار ذكريات جداري مضيء',
          name_en: 'Illuminated Wall Photo Frame',
          category: 'frames',
          price_jod: 28.00,
          price_usd: 39.50,
          delivery: '4 - 6 days',
          delivery_ar: '4 - 6 أيام عمل',
          img_main: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=600&auto=format&fit=crop',
          img_gallery: [],
          desc_ar: 'إطار جداري خشبي مضيء مخصص لعرض صورك الشخصية والخاصة. يتطلب رفع صورة نقوم بطباعتها بدقة وحرارة خلف الإضاءة للحصول على عمق فني مذهل.',
          desc_en: 'Illuminated wooden frame built to display your personal photos. Upload your favorite photo; we will print and install it inside with backlighting for an amazing glow effect.',
          customizable: false,
          require_image: true,
          best_seller: false
        },
        {
          id: 'prod-4',
          name_ar: 'طقم كوستر عائلي محفور (6 قطع)',
          name_en: 'Family Monogram Coaster Set (6 Pcs)',
          category: 'gifts',
          price_jod: 15.00,
          price_usd: 21.15,
          delivery: '1 - 2 days',
          delivery_ar: '1 - 2 أيام عمل',
          img_main: 'https://images.unsplash.com/photo-1610701596007-11502861dcfa?q=80&w=600&auto=format&fit=crop',
          img_gallery: [],
          desc_ar: 'قواعد أكواب فاخرة دائرية أو مربعة مصنوعة من خشب الزان الطبيعي، محفورة بالاسم أو الحرف الأول للعائلة. هدية قيمة جداً للمباركة بمنزل جديد.',
          desc_en: 'Luxury cup coasters made of natural Beechwood, custom engraved with family monograms or initials. A highly practical and warm housewarming gift.',
          customizable: true,
          require_image: false,
          best_seller: false
        },
        {
          id: 'prod-5',
          name_ar: 'خلية نحل خشبية جدارية (طقم رفوف)',
          name_en: 'Hexagon Honeycomb Wall Shelves',
          category: 'decor',
          price_jod: 55.00,
          price_usd: 77.50,
          delivery: '5 - 7 days',
          delivery_ar: '5 - 7 أيام عمل',
          img_main: 'https://images.unsplash.com/photo-1594026112284-02bb6f3352fe?q=80&w=600&auto=format&fit=crop',
          img_gallery: ['https://images.unsplash.com/photo-1532372320978-9b4d7a92b24d?q=80&w=600&auto=format&fit=crop'],
          desc_ar: 'مجموعة من 3 رفوف سداسية متناسقة تمنح جدارك مظهراً طبيعياً هندسياً فائق الجمال. مصنوعة من خشب السويد السميك المتين ومثبتة بمسامير مخفية.',
          desc_en: 'Set of 3 hexagonal shelves that give your wall a modern geometric natural look. Handcrafted from thick solid pine wood with invisible heavy-duty wall mounts.',
          customizable: false,
          require_image: false,
          best_seller: true
        }
      ];
      localStorage.setItem('jaz_products', JSON.stringify(defaultProducts));
    }

    // 3. Reviews Seed
    if (!localStorage.getItem('jaz_reviews')) {
      const defaultReviews = [
        {
          name: 'ريما صالح',
          name_en: 'Rema Saleh',
          stars: 5,
          text_ar: 'طلبت الرف المضيء المعلق، القطعة مذهلة والإنارة دافئة جداً وتناسب غرفتي، التغليف كان ممتازاً والتوصيل سريع.',
          text_en: 'I ordered the illuminated floating shelf, it is absolutely stunning! The warm lighting fits my bedroom perfectly. Delivery was fast too.'
        },
        {
          name: 'طارق العلي',
          name_en: 'Tareq Al-Ali',
          stars: 5,
          text_ar: 'عمل متقن وتفاصيل دقيقة، طلبت مصباح الطاولة كهدية لأخي وأعجبته جداً. الجودة تستحق كل قرش.',
          text_en: 'Excellent craftsmanship and precise details. The table lamp made an amazing gift for my brother. Worth every penny!'
        },
        {
          name: 'ليلى منصور',
          name_en: 'Layla Mansour',
          stars: 5,
          text_ar: 'الخشب رائحته طبيعية والإنارة الذهبية تمنح الصالون دفئاً غير عادي في الليل. سأطلب قطعاً أخرى قريباً بالتأكيد.',
          text_en: 'Beautiful natural wood scent. The golden light gives my living room an amazing warm vibe at night. Highly recommend.'
        }
      ];
      localStorage.setItem('jaz_reviews', JSON.stringify(defaultReviews));
    }

    // 4. Page Text Seed
    if (!localStorage.getItem('jaz_content')) {
      const defaultContent = {
        youtube_urls: 'F2hR-rO6GHY, dQw4w9WgXcQ, O3t6VzQ2vQY',
        purpose_ar: 'إعادة تعريف الديكور الداخلي من خلال تقديم قطع خشبية طبيعية فريدة تجمع بين دفء الطبيعة وإبداع اليد البشرية.',
        purpose_en: 'Redefining interior spaces by providing unique handmade wooden pieces that combine nature\'s warmth with human creativity.',
        goal_ar: 'أن نكون الخيار الأول في الأردن والوطن العربي للمنتجات الخشبية اليدوية المضيئة والمصممة خصيصاً لتناسب أذواق عملائنا.',
        goal_en: 'To be the premier choice in Jordan and the Middle East for handmade illuminated wooden items tailored to our clients\' exact spaces.',
        story_ar: 'بدأنا بشغف في ورشة عمل صغيرة لنحت الخشب وتشكيله. ندمج الإنارة الدافئة مع الخشب السويدي والزان الطبيعي لنصنع تحفاً فنية مميزة تعيش لسنوات.',
        story_en: 'We started with passion in a tiny wood carving workshop. We merge ambient light with natural Swedish pine and Beechwood to form art that lasts generations.'
      };
      localStorage.setItem('jaz_content', JSON.stringify(defaultContent));
    }

    // 5. Orders Storage
    if (!localStorage.getItem('jaz_orders')) {
      localStorage.setItem('jaz_orders', JSON.stringify([]));
    }

    // 6. Subscriptions Storage
    if (!localStorage.getItem('jaz_subscriptions')) {
      localStorage.setItem('jaz_subscriptions', JSON.stringify([]));
    }

    // 7. Theme / Configuration Settings
    if (!localStorage.getItem('jaz_settings')) {
      const defaultSettings = {
        primary_color: '#8B5A2B',
        secondary_color: '#D4AF37',
        bg_color: '#FCFBF7',
        text_color: '#2B1B17',
        bg_image_url: '',
        sheets_url: '',
        imgbb_key: '',
        auto_sync_interval: 60 // seconds
      };
      localStorage.setItem('jaz_settings', JSON.stringify(defaultSettings));
    }

    // 7b. Section Visibility
    if (!localStorage.getItem('jaz_section_visibility')) {
      const defaultVisibility = {
        'hero-cta-section': true,
        'brand-values-section': true,
        'video-gallery-section': true,
        'products-showcase-section': true,
        'before-after-section': true,
        'reviews-section': true,
        'whatsapp-cta-section': true
      };
      localStorage.setItem('jaz_section_visibility', JSON.stringify(defaultVisibility));
    }

    // 7c. Assistant Password
    if (!localStorage.getItem('jaz_assistant_password')) {
      localStorage.setItem('jaz_assistant_password', 'jazassistant2026');
    }

    // 7d. Homepage Section Images
    if (!localStorage.getItem('jaz_section_images')) {
      localStorage.setItem('jaz_section_images', JSON.stringify({}));
    }

    // 7e. Client Reviews Images
    if (!localStorage.getItem('jaz_reviews_images')) {
      localStorage.setItem('jaz_reviews_images', JSON.stringify({}));
    }

    // 7f. Editable Site Texts (header, nav, etc.)
    if (!localStorage.getItem('jaz_site_texts')) {
      const defaultSiteTexts = {
        site_title: 'Jazwooden | جازوودن - أثاث وديكورات خشبية مضيئة ومخصصة',
        hero_title: 'منتجات خشبية يدوية فاخرة تضيء مساحتك',
        hero_subtitle: 'نصنع بكل حب ديكورات ومصباح طاولات ورفوف خشبية دافئة تلبي شغفك',
        nav_home: 'الرئيسية',
        nav_products: 'منتجاتنا',
        nav_cart: 'السلة',
        nav_custom_cta: 'اطلب تصميماً خاصاً',
        nav_about: 'من نحن',
        nav_contact: 'اتصل بنا',
        footer_copyright: '© 2026 Jazwooden. All rights reserved. صنع بكل حب بالخشب والإنارة.',
        tag_workshop: 'ورشة العمل',
        title_videos: 'شاهد كيف نصنع الجمال',
        title_purpose: 'رسالتنا',
        title_goal: 'هدفنا',
        title_story: 'قصتنا',
        tag_best_sellers: 'الأكثر طلباً',
        title_best_sellers: 'المنتجات الأكثر مبيعاً لدينا',
        tag_transformation: 'التحول',
        title_before_after: 'قبل وبعد - حلول ديكور عملية',
        tag_reviews: 'آراء العملاء',
        title_reviews: 'ماذا يقولون عنا؟',
        title_whatsapp_cta: 'تريد تفاصيل فورية؟ تحدث معنا مباشرة',
        desc_whatsapp_cta: 'يمكنك مشاركة أفكارك أو قياسات مساحتك معنا عبر الواتساب مباشرة لنبدأ بالتخطيط فوراً',
        btn_whatsapp: 'تواصل عبر الواتس اب'
      };
      localStorage.setItem('jaz_site_texts', JSON.stringify(defaultSiteTexts));
    }
  }

  // --- SETTINGS & THEME ---
  getSettings() {
    return JSON.parse(localStorage.getItem('jaz_settings'));
  }

  saveSettings(settings) {
    localStorage.setItem('jaz_settings', JSON.stringify(settings));
    this.applyThemeColors();
  }

  applyThemeColors() {
    const settings = this.getSettings();
    const root = document.documentElement;
    if (settings.primary_color) {
      root.style.setProperty('--primary-color', settings.primary_color);
      root.style.setProperty('--primary-hover', this.adjustColorBrightness(settings.primary_color, -20));
    }
    if (settings.secondary_color) {
      root.style.setProperty('--secondary-color', settings.secondary_color);
      root.style.setProperty('--secondary-hover', this.adjustColorBrightness(settings.secondary_color, -20));
    }
    if (settings.bg_color) {
      root.style.setProperty('--bg-color', settings.bg_color);
    }
    if (settings.text_color) {
      root.style.setProperty('--text-main', settings.text_color);
    }
    // Apply background image if set
    const body = document.body;
    if (settings.bg_image_url) {
      body.style.backgroundImage = `url('${settings.bg_image_url}')`;
      body.style.backgroundSize = 'cover';
      body.style.backgroundPosition = 'center';
      body.style.backgroundRepeat = 'no-repeat';
      body.style.backgroundAttachment = 'fixed';
    } else {
      body.style.backgroundImage = '';
    }
  }

  // Helper to adjust color shade dynamically for hover effects
  adjustColorBrightness(hex, percent) {
    let R = parseInt(hex.substring(1, 3), 16);
    let G = parseInt(hex.substring(3, 5), 16);
    let B = parseInt(hex.substring(5, 7), 16);

    R = parseInt(R * (100 + percent) / 100);
    G = parseInt(G * (100 + percent) / 100);
    B = parseInt(B * (100 + percent) / 100);

    R = (R < 255) ? R : 255;
    G = (G < 255) ? G : 255;
    B = (B < 255) ? B : 255;

    R = (R > 0) ? R : 0;
    G = (G > 0) ? G : 0;
    B = (B > 0) ? B : 0;

    const rHex = R.toString(16).padStart(2, '0');
    const gHex = G.toString(16).padStart(2, '0');
    const bHex = B.toString(16).padStart(2, '0');

    return `#${rHex}${gHex}${bHex}`;
  }

  // --- PRODUCTS ---
  getProducts() {
    return JSON.parse(localStorage.getItem('jaz_products'));
  }

  getProductById(id) {
    const products = this.getProducts();
    return products.find(p => p.id === id);
  }

  saveProduct(product) {
    let products = this.getProducts();
    if (product.id) {
      // Edit
      const index = products.findIndex(p => p.id === product.id);
      if (index !== -1) {
        products[index] = product;
      }
    } else {
      // Add
      product.id = 'prod-' + Date.now();
      products.push(product);
    }
    localStorage.setItem('jaz_products', JSON.stringify(products));
    return product;
  }

  deleteProduct(id) {
    let products = this.getProducts();
    products = products.filter(p => p.id !== id);
    localStorage.setItem('jaz_products', JSON.stringify(products));
  }

  // --- CATEGORIES ---
  getCategories() {
    return JSON.parse(localStorage.getItem('jaz_categories'));
  }

  addCategory(category) {
    const categories = this.getCategories();
    categories.push(category);
    localStorage.setItem('jaz_categories', JSON.stringify(categories));
  }

  deleteCategory(id) {
    let categories = this.getCategories();
    categories = categories.filter(c => c.id !== id);
    localStorage.setItem('jaz_categories', JSON.stringify(categories));
  }

  // --- REVIEWS ---
  getReviews() {
    return JSON.parse(localStorage.getItem('jaz_reviews'));
  }

  addReview(review) {
    const reviews = this.getReviews();
    reviews.push(review);
    localStorage.setItem('jaz_reviews', JSON.stringify(reviews));
  }

  deleteReview(index) {
    const reviews = this.getReviews();
    reviews.splice(index, 1);
    localStorage.setItem('jaz_reviews', JSON.stringify(reviews));
  }

  // --- CONTENT TEXTS ---
  getContent() {
    return JSON.parse(localStorage.getItem('jaz_content'));
  }

  saveContent(content) {
    localStorage.setItem('jaz_content', JSON.stringify(content));
  }

  // --- SITE TEXTS (editable header/nav/footer texts) ---
  getSiteTexts() {
    return JSON.parse(localStorage.getItem('jaz_site_texts') || '{}');
  }

  saveSiteTexts(texts) {
    localStorage.setItem('jaz_site_texts', JSON.stringify(texts));
  }

  // --- SECTION VISIBILITY ---
  getSectionVisibility() {
    return JSON.parse(localStorage.getItem('jaz_section_visibility') || '{}');
  }

  saveSectionVisibility(visibility) {
    localStorage.setItem('jaz_section_visibility', JSON.stringify(visibility));
  }

  // --- SECTION IMAGES ---
  getSectionImages() {
    return JSON.parse(localStorage.getItem('jaz_section_images') || '{}');
  }

  saveSectionImages(images) {
    localStorage.setItem('jaz_section_images', JSON.stringify(images));
  }

  // --- REVIEWS IMAGES ---
  getReviewsImages() {
    return JSON.parse(localStorage.getItem('jaz_reviews_images') || '{}');
  }

  saveReviewsImages(images) {
    localStorage.setItem('jaz_reviews_images', JSON.stringify(images));
  }

  // --- SOCIAL LINKS ---
  getSocialLinks() {
    return JSON.parse(localStorage.getItem('jaz_social_links') || '{}');
  }

  saveSocialLinks(links) {
    localStorage.setItem('jaz_social_links', JSON.stringify(links));
  }

  // --- APPLY ALL DYNAMIC SETTINGS TO PAGE ---
  applyAllDynamicSettings() {
    this.applyThemeColors();
    this.applySiteTexts();
    this.applySectionVisibility();
    this.applySocialLinks();
    this.applyLogoSettings();
    this.applyContactInfo();
  }

  applySiteTexts() {
    const texts = this.getSiteTexts();
    if (!texts || Object.keys(texts).length === 0) return;
    // Apply texts to data-key elements
    Object.keys(texts).forEach(key => {
      const els = document.querySelectorAll(`[data-key="${key}"]`);
      els.forEach(el => {
        if (texts[key]) el.innerText = texts[key];
      });
    });
    // Apply hero section specifically
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle && texts.hero_title) heroTitle.innerText = texts.hero_title;
    const heroSub = document.querySelector('.hero-subtitle');
    if (heroSub && texts.hero_subtitle) heroSub.innerText = texts.hero_subtitle;
    // Update page title
    if (texts.site_title) {
      document.title = texts.site_title;
      const meta = document.querySelector('meta[name="description"]');
      if (meta) meta.content = texts.site_title;
    }
  }

  applySectionVisibility() {
    const visibility = this.getSectionVisibility();
    if (!visibility || Object.keys(visibility).length === 0) return;
    // Only apply on home view
    const homeView = document.getElementById('home-view');
    if (!homeView) return;
    Object.keys(visibility).forEach(sectionId => {
      const section = homeView.querySelector(`.${sectionId}`) || homeView.querySelector(`#section-${sectionId}`);
      if (section) {
        if (visibility[sectionId] === false) {
          section.style.display = 'none';
        } else {
          section.style.display = '';
        }
      }
    });
  }

  applySocialLinks() {
    const social = this.getSocialLinks();
    if (!social || Object.keys(social).length === 0) return;
    // Update WhatsApp links
    if (social.whatsapp) {
      document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
        a.href = `https://wa.me/${social.whatsapp}`;
      });
    }
    // Apply all social links to footer icons
    const platforms = ['instagram', 'tiktok', 'youtube', 'facebook'];
    platforms.forEach(platform => {
      const links = document.querySelectorAll(`a[href*="${platform}"]`);
      if (social[platform] && links.length > 0) {
        links.forEach(link => link.href = social[platform]);
      }
      // Also update any elements with data-social attribute
      document.querySelectorAll(`[data-social="${platform}"]`).forEach(el => {
        if (social[platform]) {
          el.href = social[platform];
          el.style.display = '';
        } else {
          el.style.display = 'none';
        }
      });
    });
  }

  applyLogoSettings() {
    try {
      const s = JSON.parse(localStorage.getItem('jaz_logo_settings') || '{}');
      if (s.brandName) {
        document.querySelectorAll('.brand-name').forEach(el => el.textContent = s.brandName);
        document.title = s.brandName;
      }
      if (s.metaDesc) {
        let meta = document.querySelector('meta[name="description"]');
        if (!meta) { meta = document.createElement('meta'); meta.name = 'description'; document.head.appendChild(meta); }
        meta.content = s.metaDesc;
      }
      if (s.logoUrl) {
        document.querySelectorAll('.logo-img').forEach(img => { img.src = s.logoUrl; img.style.display = 'block'; });
        document.querySelectorAll('.logo-text').forEach(el => el.style.display = 'none');
      }
      if (s.footerAr) {
        document.querySelectorAll('.copyright').forEach(el => el.textContent = s.footerAr);
      }
    } catch (e) {}
  }

  applyContactInfo() {
    try {
      const info = JSON.parse(localStorage.getItem('jaz_contact_info') || '{}');
      if (info.phone) {
        document.querySelectorAll('.contact-phone-display').forEach(el => el.textContent = info.phone);
      }
      if (info.email) {
        document.querySelectorAll('.contact-email-display').forEach(el => el.textContent = info.email);
      }
      const lang = document.documentElement.lang || 'ar';
      if (info.addressar || info.addressen) {
        document.querySelectorAll('.contact-address-display').forEach(el => {
          el.textContent = lang === 'en' ? (info.addressen || info.addressar) : (info.addressar || info.addressen);
        });
      }
    } catch (e) {}
  }

  // --- AUTO-SYNC MONITOR ---
  startAutoSync() {
    const settings = this.getSettings();
    const interval = (settings.auto_sync_interval || 60) * 1000;
    if (window._autoSyncInterval) clearInterval(window._autoSyncInterval);
    window._autoSyncInterval = setInterval(() => {
      this.checkForNewData();
    }, interval);
  }

  async checkForNewData() {
    const sheetsUrl = this.getSettings().sheets_url;
    if (!sheetsUrl) return;
    try {
      const response = await fetch(`${sheetsUrl}?action=check&orders=${this.getOrders().length}&subs=${this.getSubscriptions().length}`, {
        method: 'GET',
        mode: 'no-cors'
      });
      // Even with no-cors, we mark as checked
      console.log('Auto-sync check completed at', new Date().toISOString());
    } catch (e) {
      console.warn('Auto-sync check failed:', e);
    }
  }

  // --- ORDERS ---
  getOrders() {
    return JSON.parse(localStorage.getItem('jaz_orders'));
  }

  async addOrder(order) {
    const orders = this.getOrders();
    order.id = 'ord-' + Date.now();
    order.date = new Date().toISOString();
    order.status = 'New';
    orders.unshift(order);
    localStorage.setItem('jaz_orders', JSON.stringify(orders));

    // Send order to API / Google Sheets Webhook
    try {
      const response = await fetch('/api/submit-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ order, sheets_url: this.getSettings().sheets_url })
      });
      const data = await response.json();
      if (data.success) {
        order.synced = true;
        localStorage.setItem('jaz_orders', JSON.stringify(orders));
      }
    } catch (e) {
      console.warn('API submit-order endpoint offline, saved locally:', e);
      // Attempt direct submit to webhook if client has sheets_url set
      this.syncOrderDirectly(order);
    }
    return order;
  }

  async syncOrderDirectly(order) {
    const sheetsUrl = this.getSettings().sheets_url;
    if (!sheetsUrl) return;
    try {
      await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'order', data: order })
      });
      const orders = this.getOrders();
      const idx = orders.findIndex(o => o.id === order.id);
      if (idx !== -1) {
        orders[idx].synced = true;
        localStorage.setItem('jaz_orders', JSON.stringify(orders));
      }
    } catch (err) {
      console.error('Direct sync failed:', err);
    }
  }

  updateOrderStatus(orderId, status) {
    const orders = this.getOrders();
    const index = orders.findIndex(o => o.id === orderId);
    if (index !== -1) {
      orders[index].status = status;
      localStorage.setItem('jaz_orders', JSON.stringify(orders));
      // Re-sync with Sheets direct call if needed
      this.syncOrderDirectly(orders[index]);
    }
  }

  // --- SUBSCRIPTIONS ---
  getSubscriptions() {
    return JSON.parse(localStorage.getItem('jaz_subscriptions'));
  }

  async addSubscription(sub) {
    const subs = this.getSubscriptions();
    sub.date = new Date().toISOString();
    subs.unshift(sub);
    localStorage.setItem('jaz_subscriptions', JSON.stringify(subs));

    try {
      const response = await fetch('/api/submit-subscription', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sub, sheets_url: this.getSettings().sheets_url })
      });
      const data = await response.json();
      if (data.success) {
        sub.synced = true;
        localStorage.setItem('jaz_subscriptions', JSON.stringify(subs));
      }
    } catch (e) {
      console.warn('API submit-subscription offline, saved locally:', e);
      const sheetsUrl = this.getSettings().sheets_url;
      if (sheetsUrl) {
        fetch(sheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ type: 'subscription', data: sub })
        }).then(() => {
          sub.synced = true;
          localStorage.setItem('jaz_subscriptions', JSON.stringify(subs));
        }).catch(err => console.error(err));
      }
    }
  }

  deleteSubscription(index) {
    const subs = this.getSubscriptions();
    subs.splice(index, 1);
    localStorage.setItem('jaz_subscriptions', JSON.stringify(subs));
  }

  // --- IMAGE UPLOADING ---
  async uploadImage(file) {
    const settings = this.getSettings();
    if (!settings.imgbb_key) {
      // Mock upload for local development - convert to base64
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    }

    const formData = new FormData();
    formData.append('image', file);

    try {
      const response = await fetch(`https://api.imgbb.com/1/upload?key=${settings.imgbb_key}`, {
        method: 'POST',
        body: formData
      });
      const resData = await response.json();
      if (resData.success) {
        return resData.data.url; // Returns direct URL link
      } else {
        throw new Error(resData.error.message);
      }
    } catch (e) {
      console.error('Imgbb upload error:', e);
      // Fallback base64
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    }
  }
}

// Global DB instance
const db = new DatabaseService();
window.db = db;
// Apply all dynamic settings immediately on script load
document.addEventListener('DOMContentLoaded', () => {
  db.applyAllDynamicSettings();
  // Start auto-sync interval
  db.startAutoSync();
});
