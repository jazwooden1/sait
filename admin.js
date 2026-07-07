// ADMIN CONTROL MODULE

// Login verification
function handleAdminLogin(event) {
  event.preventDefault();
  const password = document.getElementById('admin-pass').value.trim();
  
  // Passcodes for different roles
  const SAVED_ADMIN_PASS = localStorage.getItem('jaz_admin_password') || 'jazadmin2026';
  const ASSISTANT_PASSCODE = localStorage.getItem('jaz_assistant_password') || 'jazassistant2026';

  if (password === SAVED_ADMIN_PASS) {
    sessionStorage.setItem('jaz_admin_logged', 'true');
    sessionStorage.setItem('jaz_admin_role', 'admin');
    showToast('تم تسجيل دخول المدير بنجاح / Admin Login Success', 'success');
    document.getElementById('admin-login-form').reset();
    window.location.hash = '#admin';
    applyRolePermissions();
  } else if (password === ASSISTANT_PASSCODE) {
    sessionStorage.setItem('jaz_admin_logged', 'true');
    sessionStorage.setItem('jaz_admin_role', 'assistant');
    showToast('تم تسجيل دخول المساعد بنجاح / Assistant Login Success', 'success');
    document.getElementById('admin-login-form').reset();
    window.location.hash = '#admin';
    applyRolePermissions();
  } else {
    showToast('رمز المرور خاطئ! الرجاء المحاولة مرة أخرى / Wrong password token!', 'error');
  }
}

function handleAdminLogout() {
  sessionStorage.removeItem('jaz_admin_logged');
  sessionStorage.removeItem('jaz_admin_role');
  showToast('تم تسجيل الخروج / Logged out', 'success');
  window.location.hash = '#home';
}

// Apply role-based UI restrictions
function applyRolePermissions() {
  const role = sessionStorage.getItem('jaz_admin_role');
  const isAdmin = role === 'admin';
  
  // Tabs that are restricted for assistant
  const restrictedTabs = [
    'categories-tab-btn', 
    'content-tab-btn', 
    'theme-tab-btn', 
    'coupons-tab-btn', 
    'social-tab-btn', 
    'sections-tab-btn', 
    'logo-tab-btn'
  ];

  restrictedTabs.forEach(tabId => {
    const btn = document.getElementById(tabId);
    if (btn) {
      btn.style.display = isAdmin ? 'flex' : 'none';
    }
  });

  // If assistant is on a restricted tab, move to orders
  const currentTab = document.querySelector('.admin-tab-content.active')?.id;
  if (!isAdmin && currentTab && ['categories-tab', 'content-tab', 'theme-tab', 'coupons-tab', 'social-tab', 'sections-tab', 'logo-tab'].includes(currentTab)) {
    switchAdminTab('orders-tab');
  }
}

// Sidebar panel tabs switching
function switchAdminTab(tabId) {
  const role = sessionStorage.getItem('jaz_admin_role');
  const isAdmin = role === 'admin';
  const restrictedTabs = ['categories-tab', 'content-tab', 'theme-tab', 'coupons-tab', 'social-tab', 'sections-tab', 'logo-tab'];

  if (!isAdmin && restrictedTabs.includes(tabId)) {
    showToast('عذراً، لا تملك صلاحية الوصول لهذا القسم / Restricted Access', 'error');
    return;
  }

  // Toggle tab buttons active
  document.querySelectorAll('.admin-tab-btn').forEach(btn => {
    btn.classList.remove('active');
    if (btn.getAttribute('onclick').includes(tabId)) {
      btn.classList.add('active');
    }
  });

  // Toggle content displays active
  document.querySelectorAll('.admin-tab-content').forEach(content => {
    content.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');

  // Trigger tab rendering hooks
  if (tabId === 'products-tab') renderAdminProductsTable();
  if (tabId === 'categories-tab') renderAdminCategoriesTable();
  if (tabId === 'orders-tab') renderAdminOrdersTable();
  if (tabId === 'subscriptions-tab') renderAdminSubscriptionsTable();
  if (tabId === 'content-tab') loadAdminContentFields();
  if (tabId === 'theme-tab') loadAdminThemeSettings();
  if (tabId === 'coupons-tab') renderAdminCouponsTable();
  if (tabId === 'before-after-tab') renderAdminBeforeAfterTable();
  if (tabId === 'social-tab') loadSocialLinksSettings();
  if (tabId === 'sections-tab') renderSectionsOrderList();
  if (tabId === 'contact-info-tab') loadContactInfoSettings();
  if (tabId === 'stats-tab') renderStatsTab();
  if (tabId === 'popup-tab') loadPopupSettings();
  if (tabId === 'logo-tab') loadLogoSettings();
}

// Make sure dashboard renders properly when route changes
window.renderAdminDashboard = function() {
  applyRolePermissions();
  const role = sessionStorage.getItem('jaz_admin_role');
  if (role === 'assistant') {
    switchAdminTab('orders-tab');
  } else {
    switchAdminTab('products-tab');
  }
};

// A. PRODUCTS CRUD
function renderAdminProductsTable() {
  const products = db.getProducts();
  const tbody = document.getElementById('admin-products-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  products.forEach(p => {
    const tr = document.createElement('tr');
    
    // Build options string
    let opts = [];
    if (p.customizable) opts.push('تخصيص عبارة');
    if (p.require_image) opts.push('تحميل صورة');
    if (p.best_seller) opts.push('الأكثر مبيعاً');
    const optsStr = opts.join(', ') || 'لا يوجد';

    tr.innerHTML = `
      <td><img src="${p.img_main}" alt="${p.name_en}"></td>
      <td>
        <strong>${p.name_ar}</strong><br>
        <span class="text-muted text-xs">${p.name_en}</span>
      </td>
      <td>${p.category.toUpperCase()}</td>
      <td>${p.price_jod} JOD / $${p.price_usd}</td>
      <td><span class="text-xs">${optsStr}</span></td>
      <td>${p.delivery_ar || p.delivery}</td>
      <td>
        <button class="btn btn-secondary btn-card-icon" onclick="openProductModal('${p.id}')" title="Edit"><i class="fa-solid fa-pen-to-square"></i></button>
        <button class="btn btn-outline btn-card-icon" style="color:var(--danger-color); border-color:var(--danger-color);" onclick="deleteAdminProduct('${p.id}')" title="Delete"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteAdminProduct(id) {
  if (confirm('هل أنت متأكد من حذف هذا المنتج؟ / Delete this product?')) {
    db.deleteProduct(id);
    renderAdminProductsTable();
    showToast('تم حذف المنتج بنجاح', 'success');
  }
}

// Modals CRUD handlers
let activeProductModalId = null;
function openProductModal(productId = null) {
  activeProductModalId = productId;
  const modal = document.getElementById('product-modal');
  const form = document.getElementById('admin-product-form');
  const title = document.getElementById('product-modal-title');
  
  // Set category selects options
  const catSelect = document.getElementById('prod-category');
  const cats = db.getCategories();
  catSelect.innerHTML = '';
  cats.forEach(c => {
    if (c.id === 'all') return;
    const opt = document.createElement('option');
    opt.value = c.id;
    opt.innerText = c.name_ar;
    catSelect.appendChild(opt);
  });

  form.reset();

  if (productId) {
    title.innerText = 'تعديل بيانات المنتج / Edit Product';
    const p = db.getProductById(productId);
    if (p) {
      document.getElementById('edit-product-id').value = p.id;
      document.getElementById('prod-name-ar').value = p.name_ar;
      document.getElementById('prod-name-en').value = p.name_en;
      document.getElementById('prod-price-jod').value = p.price_jod;
      document.getElementById('prod-price-usd').value = p.price_usd;
      document.getElementById('prod-category').value = p.category;
      document.getElementById('prod-delivery').value = p.delivery_ar || p.delivery;
      document.getElementById('prod-img-main').value = p.img_main;
      document.getElementById('prod-img-gallery').value = (p.img_gallery || []).join(', ');
      document.getElementById('prod-desc-ar').value = p.desc_ar;
      document.getElementById('prod-desc-en').value = p.desc_en;
      
      document.getElementById('prod-customizable').checked = !!p.customizable;
      document.getElementById('prod-require-image').checked = !!p.require_image;
      document.getElementById('prod-best-seller').checked = !!p.best_seller;
    }
  } else {
    title.innerText = 'إضافة منتج جديد / Add Product';
    document.getElementById('edit-product-id').value = '';
  }

  modal.classList.add('open');
}

function closeProductModal() {
  document.getElementById('product-modal').classList.remove('open');
}

function handleProductFormSubmit(event) {
  event.preventDefault();
  
  const id = document.getElementById('edit-product-id').value;
  const galleryStr = document.getElementById('prod-img-gallery').value.trim();
  const galleryArr = galleryStr ? galleryStr.split(',').map(s => s.trim()) : [];

  const product = {
    id: id || undefined,
    name_ar: document.getElementById('prod-name-ar').value.trim(),
    name_en: document.getElementById('prod-name-en').value.trim(),
    price_jod: parseFloat(document.getElementById('prod-price-jod').value),
    price_usd: parseFloat(document.getElementById('prod-price-usd').value),
    category: document.getElementById('prod-category').value,
    delivery: document.getElementById('prod-delivery').value.trim(),
    delivery_ar: document.getElementById('prod-delivery').value.trim(),
    img_main: document.getElementById('prod-img-main').value.trim(),
    img_gallery: galleryArr,
    desc_ar: document.getElementById('prod-desc-ar').value.trim(),
    desc_en: document.getElementById('prod-desc-en').value.trim(),
    customizable: document.getElementById('prod-customizable').checked,
    require_image: document.getElementById('prod-require-image').checked,
    best_seller: document.getElementById('prod-best-seller').checked
  };

  db.saveProduct(product);
  closeProductModal();
  renderAdminProductsTable();
  showToast(id ? 'تم تعديل المنتج بنجاح' : 'تم إضافة المنتج الجديد بنجاح', 'success');
}

// B. CATEGORIES CRUD
function renderAdminCategoriesTable() {
  const cats = db.getCategories();
  const tbody = document.getElementById('admin-categories-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  cats.forEach(c => {
    if (c.id === 'all') return;
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${c.name_ar}</td>
      <td>${c.name_en}</td>
      <td>
        <button class="btn btn-outline btn-card-icon" style="color:var(--danger-color); border-color:var(--danger-color);" onclick="deleteAdminCategory('${c.id}')"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function handleAddCategory(event) {
  event.preventDefault();
  const ar = document.getElementById('new-cat-ar').value.trim();
  const en = document.getElementById('new-cat-en').value.trim();
  const id = en.toLowerCase().replace(/[^a-z0-9]/g, '-');

  const newCat = { id, name_ar: ar, name_en: en };
  db.addCategory(newCat);
  document.getElementById('admin-category-form').reset();
  renderAdminCategoriesTable();
  showToast('تم إضافة الفئة بنجاح', 'success');
}

function deleteAdminCategory(id) {
  if (confirm('هل أنت متأكد من حذف هذه الفئة؟ / Delete this category?')) {
    db.deleteCategory(id);
    renderAdminCategoriesTable();
    showToast('تم حذف الفئة بنجاح', 'success');
  }
}

// C. ORDERS PANEL
function renderAdminOrdersTable() {
  const orders = db.getOrders();
  const tbody = document.getElementById('admin-orders-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  orders.forEach(o => {
    const tr = document.createElement('tr');
    
    // format date
    const d = new Date(o.date);
    const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    // formatted status
    let statusClass = 'badge-warning';
    if (o.status === 'Completed') statusClass = 'badge-success';
    if (o.status === 'Cancelled') statusClass = 'badge-danger';
    
    // image upload link
    let imgLinkHtml = 'لا يوجد';
    if (o.image_link) {
      imgLinkHtml = `<a href="${o.image_link}" target="_blank" class="text-gold"><i class="fa-solid fa-image"></i> عرض الملف</a>`;
    }

    tr.innerHTML = `
      <td>
        <span class="text-xs text-muted">${dateStr}</span><br>
        <span class="badge ${o.order_type.includes('Custom')?'badge-warning':'badge-success'}">${o.order_type}</span>
      </td>
      <td>
        <strong>${o.name}</strong><br>
        <span class="text-xs text-muted">${o.country_code} ${o.phone}</span>
      </td>
      <td>
        <strong>${o.product_name}</strong><br>
        <span class="text-xs text-muted">ID: ${o.product_id} | ${o.category}</span>
      </td>
      <td>
        <strong>${o.price} JOD</strong><br>
        <span class="text-xs text-muted">أصلي: ${o.original_price}</span>
      </td>
      <td>
        <span class="text-xs block">${o.custom_phrase || 'بدون عبارة'}</span>
        ${imgLinkHtml}
        ${o.notes ? `<br><small class="text-muted block max-w-xs" style="white-space:normal">${o.notes}</small>` : ''}
      </td>
      <td>
        <span class="badge ${statusClass}">${o.status}</span>
        ${o.synced ? '<i class="fa-solid fa-cloud-arrow-up text-success ml-1" title="Synced to Sheets"></i>' : ''}
      </td>
      <td>
        <select onchange="updateOrderStatus('${o.id}', this.value)">
          <option value="New" ${o.status==='New'?'selected':''}>جديد (New)</option>
          <option value="Contacting" ${o.status==='Contacting'?'selected':''}>جارِ التواصل (Contacting)</option>
          <option value="In Progress" ${o.status==='In Progress'?'selected':''}>قيد التنفيذ (In Progress)</option>
          <option value="Completed" ${o.status==='Completed'?'selected':''}>مكتمل (Completed)</option>
          <option value="Cancelled" ${o.status==='Cancelled'?'selected':''}>ملغى (Cancelled)</option>
        </select>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function updateOrderStatus(orderId, newStatus) {
  db.updateOrderStatus(orderId, newStatus);
  renderAdminOrdersTable();
  showToast('تم تحديث حالة الطلب', 'success');
}

async function syncOrdersToGoogle() {
  const orders = db.getOrders();
  const sheetsUrl = db.getSettings().sheets_url;
  
  if (!sheetsUrl) {
    showToast('الرجاء إدخال رابط Webhook الخاص بـ Google Sheets في قسم المظهر أولاً!', 'error');
    switchAdminTab('theme-tab');
    return;
  }

  showToast('جاري بدء مزامنة الطلبات بالكامل...', 'warning');
  
  let successCount = 0;
  for (let o of orders) {
    try {
      await fetch(sheetsUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'order', data: o })
      });
      o.synced = true;
      successCount++;
    } catch (e) {
      console.error(e);
    }
  }

  localStorage.setItem('jaz_orders', JSON.stringify(orders));
  renderAdminOrdersTable();
  showToast(`تمت المزامنة بنجاح لـ ${successCount} طلبات!`, 'success');
}

// D. SUBSCRIPTIONS PANEL
function renderAdminSubscriptionsTable() {
  const subs = db.getSubscriptions();
  const tbody = document.getElementById('admin-subscriptions-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  subs.forEach((s, index) => {
    const tr = document.createElement('tr');
    const dateStr = new Date(s.date).toLocaleString();
    tr.innerHTML = `
      <td>${dateStr}</td>
      <td><strong>${s.contact}</strong></td>
      <td>${s.source}</td>
      <td>${s.lang.toUpperCase()}</td>
      <td>
        <button class="btn btn-outline btn-card-icon" style="color:var(--danger-color); border-color:var(--danger-color);" onclick="deleteAdminSubscription(${index})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function deleteAdminSubscription(index) {
  if (confirm('حذف هذا المشترك؟ / Remove subscriber?')) {
    db.deleteSubscription(index);
    renderAdminSubscriptionsTable();
    showToast('تم حذف المشترك بنجاح', 'success');
  }
}

// E. PAGE TEXT CONTENT & REVIEWS
function loadAdminContentFields() {
  const c = db.getContent();
  document.getElementById('admin-youtube-urls').value = c.youtube_urls || '';
  document.getElementById('admin-purpose-ar').value = c.purpose_ar;
  document.getElementById('admin-purpose-en').value = c.purpose_en;
  document.getElementById('admin-goal-ar').value = c.goal_ar;
  document.getElementById('admin-goal-en').value = c.goal_en;
  document.getElementById('admin-story-ar').value = c.story_ar;
  document.getElementById('admin-story-en').value = c.story_en;

  renderAdminReviewsTable();
}

function handleSavePageContent(event) {
  event.preventDefault();
  
  const content = {
    youtube_urls: document.getElementById('admin-youtube-urls').value.trim(),
    purpose_ar: document.getElementById('admin-purpose-ar').value.trim(),
    purpose_en: document.getElementById('admin-purpose-en').value.trim(),
    goal_ar: document.getElementById('admin-goal-ar').value.trim(),
    goal_en: document.getElementById('admin-goal-en').value.trim(),
    story_ar: document.getElementById('admin-story-ar').value.trim(),
    story_en: document.getElementById('admin-story-en').value.trim()
  };

  db.saveContent(content);
  showToast('تم حفظ نصوص وتكوينات الصفحات بنجاح', 'success');
  
  // Refresh YouTube video frame in background if player exists
  if (ytPlayer && typeof ytPlayer.loadPlaylist === 'function') {
    const urls = content.youtube_urls.split(',').map(s => s.trim()).filter(s => s.length > 0);
    if (urls.length > 0) {
      const rand = urls[Math.floor(Math.random() * urls.length)];
      ytPlayer.loadVideoById(rand);
    }
  }
}

// Customer Reviews List inside Admin Content
function renderAdminReviewsTable() {
  const reviews = db.getReviews();
  const tbody = document.getElementById('admin-reviews-table-body');
  if (!tbody) return;

  tbody.innerHTML = '';
  reviews.forEach((r, idx) => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${r.name}</td>
      <td>${r.stars} ⭐</td>
      <td class="text-xs">${r.text_ar}</td>
      <td class="text-xs">${r.text_en}</td>
      <td>
        <button class="btn btn-outline btn-card-icon" style="color:var(--danger-color); border-color:var(--danger-color);" onclick="deleteAdminReview(${idx})"><i class="fa-solid fa-trash"></i></button>
      </td>
    `;
    tbody.appendChild(tr);
  });
}

function handleAddReview(event) {
  event.preventDefault();
  const review = {
    name: document.getElementById('new-rev-name').value.trim(),
    name_en: document.getElementById('new-rev-name').value.trim(),
    stars: parseInt(document.getElementById('new-rev-stars').value),
    text_ar: document.getElementById('new-rev-text-ar').value.trim(),
    text_en: document.getElementById('new-rev-text-en').value.trim()
  };

  db.addReview(review);
  document.getElementById('admin-review-form').reset();
  renderAdminReviewsTable();
  showToast('تم إضافة التقييم بنجاح', 'success');
}

function deleteAdminReview(idx) {
  if (confirm('حذف هذا التقييم؟ / Delete review?')) {
    db.deleteReview(idx);
    renderAdminReviewsTable();
    showToast('تم حذف التقييم بنجاح', 'success');
  }
}

// F. THEME CUSTOMIZATION
function loadAdminThemeSettings() {
  const s = db.getSettings();
  document.getElementById('theme-primary').value = s.primary_color || '#8B5A2B';
  document.getElementById('theme-primary-hex').value = s.primary_color || '#8B5A2B';
  document.getElementById('theme-secondary').value = s.secondary_color || '#D4AF37';
  document.getElementById('theme-secondary-hex').value = s.secondary_color || '#D4AF37';
  document.getElementById('theme-bg').value = s.bg_color || '#FCFBF7';
  document.getElementById('theme-bg-hex').value = s.bg_color || '#FCFBF7';
  document.getElementById('theme-text').value = s.text_color || '#2B1B17';
  document.getElementById('theme-text-hex').value = s.text_color || '#2B1B17';

  document.getElementById('admin-sheets-url').value = s.sheets_url || '';
  document.getElementById('admin-imgbb-key').value = s.imgbb_key || '';
  // Background image URL
  const bgImgEl = document.getElementById('theme-bg-image');
  if (bgImgEl) bgImgEl.value = s.bg_image_url || '';
}

// Dynamic preview updating during slide/pick
function updateThemePreview() {
  const primary = document.getElementById('theme-primary').value;
  const secondary = document.getElementById('theme-secondary').value;
  const bg = document.getElementById('theme-bg').value;
  const text = document.getElementById('theme-text').value;

  document.getElementById('theme-primary-hex').value = primary;
  document.getElementById('theme-secondary-hex').value = secondary;
  document.getElementById('theme-bg-hex').value = bg;
  document.getElementById('theme-text-hex').value = text;

  // Apply preview to document styling variables temporarily
  const root = document.documentElement;
  root.style.setProperty('--primary-color', primary);
  root.style.setProperty('--secondary-color', secondary);
  root.style.setProperty('--bg-color', bg);
  root.style.setProperty('--text-main', text);
}

function updateThemePreviewHex(val, target) {
  if (val.length !== 7 || !val.startsWith('#')) return;
  document.getElementById(`theme-${target}`).value = val;
  updateThemePreview();
}

function saveThemeConfiguration() {
  const settings = {
    primary_color: document.getElementById('theme-primary').value,
    secondary_color: document.getElementById('theme-secondary').value,
    bg_color: document.getElementById('theme-bg').value,
    text_color: document.getElementById('theme-text').value,
    bg_image_url: document.getElementById('theme-bg-image').value.trim(),
    sheets_url: document.getElementById('admin-sheets-url').value.trim(),
    imgbb_key: document.getElementById('admin-imgbb-key').value.trim()
  };

  db.saveSettings(settings);
  showToast('تم حفظ إعدادات الهوية البصرية بنجاح', 'success');
}

function resetThemeConfiguration() {
  if (confirm('هل أنت متأكد من إعادة ضبط الألوان الافتراضية؟ / Reset to default colors?')) {
    const defaults = {
      primary_color: '#8B5A2B',
      secondary_color: '#D4AF37',
      bg_color: '#FCFBF7',
      text_color: '#2B1B17',
      bg_image_url: '',
      sheets_url: document.getElementById('admin-sheets-url').value.trim(),
      imgbb_key: document.getElementById('admin-imgbb-key').value.trim()
    };
    db.saveSettings(defaults);
    loadAdminThemeSettings();
    showToast('تمت إعادة تعيين الألوان الافتراضية بنجاح', 'success');
  }
}
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.deleteAdminProduct = deleteAdminProduct;
window.deleteAdminCategory = deleteAdminCategory;
window.deleteAdminSubscription = deleteAdminSubscription;
window.deleteAdminReview = deleteAdminReview;
window.updateOrderStatus = updateOrderStatus;
window.switchAdminTab = switchAdminTab;
window.updateThemePreview = updateThemePreview;
window.updateThemePreviewHex = updateThemePreviewHex;
window.saveThemeConfiguration = saveThemeConfiguration;
window.resetThemeConfiguration = resetThemeConfiguration;


// ==========================================
// G. COUPONS & DISCOUNTS
// ==========================================
function getCoupons() {
  return JSON.parse(localStorage.getItem('jaz_coupons') || '[]');
}
function saveCoupons(arr) {
  localStorage.setItem('jaz_coupons', JSON.stringify(arr));
}

function handleAddCoupon(event) {
  event.preventDefault();
  const code = document.getElementById('coupon-code').value.trim().toUpperCase();
  const type = document.getElementById('coupon-type').value;
  const value = parseFloat(document.getElementById('coupon-value').value);
  const minOrder = parseFloat(document.getElementById('coupon-min-order').value) || 0;
  const expiry = document.getElementById('coupon-expiry').value || null;
  const active = document.getElementById('coupon-active').checked;
  const coupons = getCoupons();
  if (coupons.find(c => c.code === code)) {
    showToast('هذا الكود موجود بالفعل!', 'error'); return;
  }
  coupons.push({ id: Date.now(), code, type, value, minOrder, expiry, active, status: active ? 'active' : 'inactive' });
  saveCoupons(coupons);
  document.getElementById('admin-coupon-form').reset();
  document.getElementById('coupon-active').checked = true;
  renderAdminCouponsTable();
  showToast('تم حفظ الكوبون بنجاح ✅', 'success');
}

function renderAdminCouponsTable() {
  const tbody = document.getElementById('admin-coupons-table-body');
  const coupons = getCoupons();
  if (!tbody) return;
  if (!coupons.length) { tbody.innerHTML = '<tr><td colspan="7" class="text-center text-muted">لا توجد كوبونات بعد.</td></tr>'; return; }
  tbody.innerHTML = coupons.map(c => `
    <tr>
      <td><strong style="font-family:monospace;font-size:1.1em">${c.code}</strong></td>
      <td>${c.type === 'percent' ? 'نسبة %' : 'مبلغ ثابت'}</td>
      <td>${c.value}${c.type === 'percent' ? '%' : ' JOD'}</td>
      <td>${c.minOrder > 0 ? c.minOrder + ' JOD' : 'بدون حد'}</td>
      <td>${c.expiry || 'غير محدد'}</td>
      <td><span class="badge ${c.active ? 'badge-success' : 'badge-error'}">${c.active ? 'نشط' : 'معطل'}</span></td>
      <td><button class="btn btn-sm btn-outline" style="color:var(--danger-color)" onclick="deleteCoupon(${c.id})"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`).join('');
}

function deleteCoupon(id) {
  if (!confirm('حذف هذا الكوبون؟')) return;
  saveCoupons(getCoupons().filter(c => c.id !== id));
  renderAdminCouponsTable();
  showToast('تم حذف الكوبون', 'success');
}

// Expose coupon validator globally (used by order form)
window.validateCoupon = function(code, totalPrice) {
  const coupons = getCoupons();
  const coupon = coupons.find(c => c.code === code.toUpperCase() && c.active);
  if (!coupon) return { valid: false, msg: 'كود الخصم غير صحيح أو منتهي' };
  if (coupon.expiry && new Date(coupon.expiry) < new Date()) return { valid: false, msg: 'انتهت صلاحية الكوبون' };
  if (coupon.minOrder > 0 && totalPrice < coupon.minOrder) return { valid: false, msg: `الحد الأدنى للطلب ${coupon.minOrder} JOD` };
  const discount = coupon.type === 'percent' ? (totalPrice * coupon.value / 100) : coupon.value;
  return { valid: true, discount: Math.min(discount, totalPrice), code: coupon.code };
};
window.deleteCoupon = deleteCoupon;


// ==========================================
// H. BEFORE & AFTER IMAGES
// ==========================================
function getBeforeAfterItems() {
  return JSON.parse(localStorage.getItem('jaz_before_after') || '[]');
}
function saveBeforeAfterItems(arr) {
  localStorage.setItem('jaz_before_after', JSON.stringify(arr));
}

function handleSaveBeforeAfter(event) {
  event.preventDefault();
  const items = getBeforeAfterItems();
  items.push({
    id: Date.now(),
    before: { url: document.getElementById('ba-before-url').value.trim(), label: { ar: document.getElementById('ba-before-label-ar').value.trim() } },
    after: { url: document.getElementById('ba-after-url').value.trim(), label: { ar: document.getElementById('ba-after-label-ar').value.trim() } },
    title: { ar: document.getElementById('ba-title-ar').value.trim(), en: document.getElementById('ba-title-en').value.trim() },
    desc: { ar: document.getElementById('ba-desc-ar').value.trim() }
  });
  saveBeforeAfterItems(items);
  document.getElementById('admin-ba-form').reset();
  renderAdminBeforeAfterTable();
  showToast('تم حفظ القصة بنجاح ✅', 'success');
}

function handleAddBeforeAfter() {
  document.getElementById('admin-ba-form').reset();
  document.getElementById('ba-before-url').focus();
}

function renderAdminBeforeAfterTable() {
  const tbody = document.getElementById('admin-ba-table-body');
  const items = getBeforeAfterItems();
  if (!tbody) return;
  if (!items.length) { tbody.innerHTML = '<tr><td colspan="4" class="text-center text-muted">لا توجد صور بعد.</td></tr>'; return; }
  tbody.innerHTML = items.map(item => `
    <tr>
      <td><img src="${item.before.url}" style="width:60px;height:45px;object-fit:cover;border-radius:6px" onerror="this.style.display='none'"></td>
      <td><img src="${item.after.url}" style="width:60px;height:45px;object-fit:cover;border-radius:6px" onerror="this.style.display='none'"></td>
      <td>${item.title.ar}</td>
      <td><button class="btn btn-sm btn-outline" style="color:var(--danger-color)" onclick="deleteBeforeAfterItem(${item.id})"><i class="fa-solid fa-trash"></i></button></td>
    </tr>`).join('');
}

function deleteBeforeAfterItem(id) {
  if (!confirm('حذف هذه المجموعة؟')) return;
  saveBeforeAfterItems(getBeforeAfterItems().filter(i => i.id !== id));
  renderAdminBeforeAfterTable();
  showToast('تم الحذف', 'success');
}
window.deleteBeforeAfterItem = deleteBeforeAfterItem;
window.handleAddBeforeAfter = handleAddBeforeAfter;
window.handleSaveBeforeAfter = handleSaveBeforeAfter;


// ==========================================
// I. SOCIAL MEDIA LINKS
// ==========================================
function loadSocialLinksSettings() {
  const s = JSON.parse(localStorage.getItem('jaz_social_links') || '{}');
  ['whatsapp','instagram','tiktok','youtube','facebook'].forEach(k => {
    const el = document.getElementById('social-' + k);
    if (el) el.value = s[k] || '';
  });
}

function handleSaveSocialLinks(event) {
  event.preventDefault();
  const social = {};
  ['whatsapp','instagram','tiktok','youtube','facebook'].forEach(k => {
    const el = document.getElementById('social-' + k);
    if (el) social[k] = el.value.trim();
  });
  localStorage.setItem('jaz_social_links', JSON.stringify(social));
  applySocialLinks(social);
  showToast('تم حفظ روابط التواصل ✅', 'success');
}

function applySocialLinks(social) {
  if (!social) return;
  // Update all WhatsApp links on page
  if (social.whatsapp) {
    document.querySelectorAll('a[href*="wa.me"]').forEach(a => {
      a.href = `https://wa.me/${social.whatsapp}`;
    });
  }
  // Apply all social links to footer icons with data-social attribute
  const platforms = ['instagram', 'tiktok', 'youtube', 'facebook'];
  platforms.forEach(platform => {
    const links = document.querySelectorAll(`[data-social="${platform}"]`);
    links.forEach(el => {
      if (social[platform]) {
        el.href = social[platform];
        el.style.display = '';
      } else {
        el.style.display = 'none';
      }
    });
  });
}
window.handleSaveSocialLinks = handleSaveSocialLinks;


// ==========================================
// K. CONTACT INFO
// ==========================================
function loadContactInfoSettings() {
  const info = JSON.parse(localStorage.getItem('jaz_contact_info') || '{}');
  const fields = ['phone','email','address-ar','address-en','hours'];
  fields.forEach(f => {
    const el = document.getElementById('contact-' + f);
    if (el) el.value = info[f.replace('-','')] || info[f] || '';
  });
}

function handleSaveContactInfo(event) {
  event.preventDefault();
  const info = {
    phone: document.getElementById('contact-phone').value.trim(),
    email: document.getElementById('contact-email').value.trim(),
    addressar: document.getElementById('contact-address-ar').value.trim(),
    addressen: document.getElementById('contact-address-en').value.trim(),
    hours: document.getElementById('contact-hours').value.trim()
  };
  localStorage.setItem('jaz_contact_info', JSON.stringify(info));
  applyContactInfo(info);
  showToast('تم حفظ معلومات التواصل ✅', 'success');
}

function applyContactInfo(info) {
  const phoneEls = document.querySelectorAll('.contact-phone-display');
  const emailEls = document.querySelectorAll('.contact-email-display');
  const addrEls = document.querySelectorAll('.contact-address-display');
  phoneEls.forEach(el => el.textContent = info.phone || el.textContent);
  emailEls.forEach(el => el.textContent = info.email || el.textContent);
  addrEls.forEach(el => el.textContent = (document.documentElement.lang === 'en' ? info.addressen : info.addressar) || el.textContent);
}
window.handleSaveContactInfo = handleSaveContactInfo;


// ==========================================
// L. STATISTICS
// ==========================================
function renderStatsTab() {
  const orders = db.getOrders();
  const subs = db.getSubscriptions ? db.getSubscriptions() : JSON.parse(localStorage.getItem('jaz_subscriptions') || '[]');
  const products = db.getProducts();
  const completed = orders.filter(o => o.status === 'completed' || o.status === 'delivered');
  const pending = orders.filter(o => !['completed','delivered','cancelled'].includes(o.status));
  const revenue = orders.filter(o => o.status !== 'cancelled').reduce((sum, o) => sum + (parseFloat(o.price) || 0), 0);

  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set('stat-total-orders', orders.length);
  set('stat-completed-orders', completed.length);
  set('stat-total-subs', subs.length);
  set('stat-total-products', products.length);
  set('stat-total-revenue', revenue.toFixed(2) + ' JOD');
  set('stat-pending-orders', pending.length);

  const tbody = document.getElementById('stats-recent-orders-body');
  if (tbody) {
    const recent = [...orders].reverse().slice(0, 5);
    tbody.innerHTML = recent.length ? recent.map(o => `
      <tr>
        <td>${o.date ? new Date(o.date).toLocaleDateString('ar-EG') : '-'}</td>
        <td>${o.name || o.customer || '-'}</td>
        <td>${o.product_name || o.productName || '-'}</td>
        <td>${o.price || 0} JOD</td>
        <td><span class="badge badge-${o.status === 'completed' ? 'success' : o.status === 'cancelled' ? 'error' : 'warning'}">${o.status || 'جديد'}</span></td>
      </tr>`).join('') : '<tr><td colspan="5" class="text-center text-muted">لا توجد طلبات بعد.</td></tr>';
  }
}


// ==========================================
// M. POPUPS
// ==========================================
function loadPopupSettings() {
  const p = JSON.parse(localStorage.getItem('jaz_popup_settings') || '{}');
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  document.getElementById('popup-enabled').checked = !!p.enabled;
  set('popup-title-ar', p.titleAr);
  set('popup-title-en', p.titleEn);
  set('popup-body-ar', p.bodyAr);
  set('popup-body-en', p.bodyEn);
  set('popup-btn-ar', p.btnAr);
  set('popup-btn-link', p.btnLink);
  document.getElementById('popup-delay').value = p.delay !== undefined ? p.delay : 3;
}

function handleSavePopup(event) {
  event.preventDefault();
  const p = {
    enabled: document.getElementById('popup-enabled').checked,
    titleAr: document.getElementById('popup-title-ar').value.trim(),
    titleEn: document.getElementById('popup-title-en').value.trim(),
    bodyAr: document.getElementById('popup-body-ar').value.trim(),
    bodyEn: document.getElementById('popup-body-en').value.trim(),
    btnAr: document.getElementById('popup-btn-ar').value.trim(),
    btnLink: document.getElementById('popup-btn-link').value.trim(),
    delay: parseInt(document.getElementById('popup-delay').value) || 3
  };
  localStorage.setItem('jaz_popup_settings', JSON.stringify(p));
  showToast('تم حفظ إعدادات النافذة المنبثقة ✅', 'success');
}
window.handleSavePopup = handleSavePopup;

// Show popup on page load (if enabled)
function initPopup() {
  const p = JSON.parse(localStorage.getItem('jaz_popup_settings') || '{}');
  if (!p.enabled || !p.titleAr) return;
  const lang = document.documentElement.lang || 'ar';
  const title = lang === 'en' ? (p.titleEn || p.titleAr) : p.titleAr;
  const body = lang === 'en' ? (p.bodyEn || p.bodyAr) : p.bodyAr;
  const btn = p.btnAr || 'إغلاق';
  const delay = (p.delay || 3) * 1000;

  setTimeout(() => {
    // Don't show if already dismissed this session
    if (sessionStorage.getItem('jaz_popup_dismissed')) return;
    const overlay = document.createElement('div');
    overlay.id = 'jaz-popup-overlay';
    overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:9999;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)';
    overlay.innerHTML = `
      <div style="background:var(--card-bg);border-radius:16px;padding:2rem;max-width:420px;width:90%;text-align:center;box-shadow:var(--shadow-lg);animation:slideUp 0.4s ease">
        <div style="font-size:2.5rem;margin-bottom:1rem">🎉</div>
        <h2 style="margin-bottom:1rem;color:var(--primary-color)">${title}</h2>
        <p style="margin-bottom:1.5rem;color:var(--text-muted)">${body}</p>
        <div style="display:flex;gap:0.75rem;justify-content:center;flex-wrap:wrap">
          ${p.btnLink ? `<a href="${p.btnLink}" onclick="document.getElementById('jaz-popup-overlay').remove()" class="btn btn-primary">${btn}</a>` : ''}
          <button onclick="sessionStorage.setItem('jaz_popup_dismissed','1');this.closest('#jaz-popup-overlay').remove()" class="btn btn-outline">إغلاق</button>
        </div>
      </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if (e.target === overlay) { sessionStorage.setItem('jaz_popup_dismissed','1'); overlay.remove(); } });
  }, delay);
}


// ==========================================
// N. LOGO & BRAND IDENTITY
// ==========================================
function loadLogoSettings() {
  const s = JSON.parse(localStorage.getItem('jaz_logo_settings') || '{}');
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('logo-brand-name', s.brandName);
  set('logo-image-url', s.logoUrl);
  set('logo-meta-desc', s.metaDesc);
  set('logo-footer-ar', s.footerAr);
}

// ==========================================
// SITE TEXTS EDITING
// ==========================================
function loadSiteTextsSettings() {
  const texts = db.getSiteTexts();
  if (!texts) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('site-text-hero-title', texts.hero_title);
  set('site-text-hero-title-en', texts.hero_title_en);
  set('site-text-hero-subtitle', texts.hero_subtitle);
  set('site-text-hero-subtitle-en', texts.hero_subtitle_en);
  set('site-text-nav-home', texts.nav_home);
  set('site-text-nav-home-en', texts.nav_home_en);
  set('site-text-nav-products', texts.nav_products);
  set('site-text-nav-products-en', texts.nav_products_en);
  set('site-text-nav-cart', texts.nav_cart);
  set('site-text-nav-cart-en', texts.nav_cart_en);
  set('site-text-nav-custom-cta', texts.nav_custom_cta);
  set('site-text-nav-custom-cta-en', texts.nav_custom_cta_en);
  set('site-text-footer-copyright', texts.footer_copyright);
  set('site-text-footer-copyright-en', texts.footer_copyright_en);
}

function saveSiteTexts() {
  const get = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  };
  const texts = db.getSiteTexts();
  texts.hero_title = get('site-text-hero-title');
  texts.hero_title_en = get('site-text-hero-title-en');
  texts.hero_subtitle = get('site-text-hero-subtitle');
  texts.hero_subtitle_en = get('site-text-hero-subtitle-en');
  texts.nav_home = get('site-text-nav-home');
  texts.nav_home_en = get('site-text-nav-home-en');
  texts.nav_products = get('site-text-nav-products');
  texts.nav_products_en = get('site-text-nav-products-en');
  texts.nav_cart = get('site-text-nav-cart');
  texts.nav_cart_en = get('site-text-nav-cart-en');
  texts.nav_custom_cta = get('site-text-nav-custom-cta');
  texts.nav_custom_cta_en = get('site-text-nav-custom-cta-en');
  texts.footer_copyright = get('site-text-footer-copyright');
  texts.footer_copyright_en = get('site-text-footer-copyright-en');
  db.saveSiteTexts(texts);
  // Apply immediately
  db.applySiteTexts();
  showToast('تم حفظ نصوص الموقع بنجاح ✅', 'success');
}
window.saveSiteTexts = saveSiteTexts;

// ==========================================
// SECTION IMAGES
// ==========================================
function loadSectionImagesSettings() {
  const images = db.getSectionImages();
  if (!images) return;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.value = val || ''; };
  set('section-img-products', images.products);
  set('section-img-reviews', images.reviews);
  set('section-img-before-after', images.beforeAfter);
}

function saveSectionImages() {
  const get = (id) => {
    const el = document.getElementById(id);
    return el ? el.value.trim() : '';
  };
  const images = {
    products: get('section-img-products'),
    reviews: get('section-img-reviews'),
    beforeAfter: get('section-img-before-after')
  };
  db.saveSectionImages(images);
  // Apply images to sections
  if (images.products) {
    const sec = document.querySelector('.products-showcase-section');
    if (sec) sec.style.backgroundImage = `url('${images.products}')`;sec.style.backgroundSize = 'cover';sec.style.backgroundPosition = 'center';
  }
  if (images.reviews) {
    const sec = document.querySelector('.reviews-section');
    if (sec) sec.style.backgroundImage = `url('${images.reviews}')`;sec.style.backgroundSize = 'cover';sec.style.backgroundPosition = 'center';
  }
  if (images.beforeAfter) {
    const sec = document.querySelector('.before-after-section');
    if (sec) sec.style.backgroundImage = `url('${images.beforeAfter}')`;sec.style.backgroundSize = 'cover';sec.style.backgroundPosition = 'center';
  }
  showToast('تم حفظ صور الأقسام بنجاح ✅', 'success');
}
window.saveSectionImages = saveSectionImages;

// ==========================================
// SECTION VISIBILITY + ORDER
// ==========================================
const DEFAULT_SECTIONS = [
  { id: 'hero-cta-section', label: 'القسم الرئيسي (Hero)', visible: true },
  { id: 'video-gallery-section', label: 'شاهد ورشتنا (فيديو)', visible: true },
  { id: 'brand-values-section', label: 'مميزاتنا', visible: true },
  { id: 'products-showcase-section', label: 'أحدث منتجاتنا', visible: true },
  { id: 'before-after-section', label: 'قبل وبعد', visible: true },
  { id: 'reviews-section', label: 'آراء العملاء', visible: true },
  { id: 'whatsapp-cta-section', label: 'تواصل عبر الواتساب', visible: true },
];

function getSectionsOrder() {
  const saved = JSON.parse(localStorage.getItem('jaz_sections_order') || null);
  if (!saved) return JSON.parse(JSON.stringify(DEFAULT_SECTIONS));
  // Ensure all default sections exist
  const defaultIds = DEFAULT_SECTIONS.map(s => s.id);
  return saved.map(s => {
    const found = DEFAULT_SECTIONS.find(d => d.id === s.id);
    return { id: s.id, label: s.label || (found ? found.label : s.id), visible: s.visible !== undefined ? s.visible : true };
  });
}

function renderSectionsOrderList() {
  const container = document.getElementById('sections-order-list');
  if (!container) return;
  const sections = getSectionsOrder();
  container.innerHTML = sections.map((sec, idx) => `
    <div class="section-order-item" data-id="${sec.id}">
      <div class="section-order-handle"><i class="fa-solid fa-grip-lines"></i></div>
      <span>${sec.label}</span>
      <div class="section-order-toggle">
        <label class="section-vis-toggle">
          <input type="checkbox" ${sec.visible ? 'checked' : ''} onchange="toggleSectionVisibility('${sec.id}', this.checked)">
          إظهار
        </label>
      </div>
      <div class="section-order-actions">
        ${idx > 0 ? `<button onclick="moveSectionUp(${idx})" class="btn btn-sm btn-outline"><i class="fa-solid fa-arrow-up"></i></button>` : '<span style="width:32px"></span>'}
        ${idx < sections.length - 1 ? `<button onclick="moveSectionDown(${idx})" class="btn btn-sm btn-outline"><i class="fa-solid fa-arrow-down"></i></button>` : '<span style="width:32px"></span>'}
      </div>
    </div>`).join('');
}

function toggleSectionVisibility(sectionId, isVisible) {
  const sections = getSectionsOrder();
  const sec = sections.find(s => s.id === sectionId);
  if (sec) {
    sec.visible = isVisible;
    localStorage.setItem('jaz_sections_order', JSON.stringify(sections));
    // Also update jaz_section_visibility
    const visibility = db.getSectionVisibility();
    visibility[sectionId] = isVisible;
    db.saveSectionVisibility(visibility);
    // Apply immediately
    db.applySectionVisibility();
  }
}

function moveSectionUp(idx) {
  const sections = getSectionsOrder();
  if (idx === 0) return;
  [sections[idx], sections[idx-1]] = [sections[idx-1], sections[idx]];
  localStorage.setItem('jaz_sections_order', JSON.stringify(sections));
  renderSectionsOrderList();
}

function moveSectionDown(idx) {
  const sections = getSectionsOrder();
  if (idx === sections.length - 1) return;
  [sections[idx], sections[idx+1]] = [sections[idx+1], sections[idx]];
  localStorage.setItem('jaz_sections_order', JSON.stringify(sections));
  renderSectionsOrderList();
}

function saveSectionsOrder() {
  // Section order is saved automatically on toggle/move
  showToast('تم حفظ ترتيب الأقسام وإظهارها ✅', 'success');
}
window.moveSectionUp = moveSectionUp;
window.moveSectionDown = moveSectionDown;
window.saveSectionsOrder = saveSectionsOrder;
window.toggleSectionVisibility = toggleSectionVisibility;

function handleSaveLogoSettings(event) {
  event.preventDefault();
  const s = {
    brandName: document.getElementById('logo-brand-name').value.trim(),
    logoUrl: document.getElementById('logo-image-url').value.trim(),
    metaDesc: document.getElementById('logo-meta-desc').value.trim(),
    footerAr: document.getElementById('logo-footer-ar').value.trim()
  };
  localStorage.setItem('jaz_logo_settings', JSON.stringify(s));
  applyLogoSettings(s);
  showToast('تم حفظ إعدادات الشعار ✅', 'success');
}

function applyLogoSettings(s) {
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
  } else {
    document.querySelectorAll('.logo-text').forEach(el => el.style.display = '');
  }
}
window.handleSaveLogoSettings = handleSaveLogoSettings;


// ==========================================
// ASSISTANT PASSWORD CHANGE
// ==========================================
function handleChangeAssistantPassword(event) {
  event.preventDefault();
  const role = sessionStorage.getItem('jaz_admin_role');
  if (role !== 'admin') {
    showToast('عذراً، المدير فقط يمكنه تغيير كلمات المرور / Admin Only', 'error');
    return;
  }

  const storedPass = localStorage.getItem('jaz_assistant_password') || 'jazassistant2026';
  const current = document.getElementById('current-assistant-password').value;
  const newPass = document.getElementById('new-assistant-password').value;
  const confirm = document.getElementById('confirm-assistant-password').value;
  const errEl = document.getElementById('err-confirm-assistant-password');

  if (current && current !== storedPass) {
    showToast('كلمة المرور الحالية للمساعد غير صحيحة!', 'error'); return;
  }
  if (!newPass) {
    showToast('الرجاء إدخال كلمة مرور جديدة', 'error'); return;
  }
  if (newPass.length < 6) {
    showToast('كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل', 'error'); return;
  }
  if (newPass !== confirm) {
    if (errEl) errEl.textContent = 'كلمتا المرور غير متطابقتين';
    return;
  }
  if (errEl) errEl.textContent = '';
  localStorage.setItem('jaz_assistant_password', newPass);
  document.getElementById('assistant-password-form').reset();
  showToast('تم تغيير كلمة مرور المساعد بنجاح ✅', 'success');
}
window.handleChangeAssistantPassword = handleChangeAssistantPassword;


// ==========================================
// ADMIN PASSWORD CHANGE
// ==========================================
function handleChangeAdminPassword(event) {
  event.preventDefault();
  const role = sessionStorage.getItem('jaz_admin_role');
  if (role !== 'admin') {
    showToast('عذراً، المدير فقط يمكنه تغيير كلمة المرور / Admin Only', 'error');
    return;
  }

  const storedPass = localStorage.getItem('jaz_admin_password') || 'jazadmin2026';
  const current = document.getElementById('current-password').value;
  const newPass = document.getElementById('new-password').value;
  const confirm = document.getElementById('confirm-password').value;
  const errEl = document.getElementById('err-confirm-password');

  if (current !== storedPass) {
    showToast('كلمة المرور الحالية غير صحيحة!', 'error'); return;
  }
  if (newPass.length < 6) {
    showToast('كلمة المرور الجديدة يجب أن تكون 6 أحرف على الأقل', 'error'); return;
  }
  if (newPass !== confirm) {
    if (errEl) errEl.textContent = 'كلمتا المرور غير متطابقتين';
    return;
  }
  if (errEl) errEl.textContent = '';
  localStorage.setItem('jaz_admin_password', newPass);
  document.getElementById('admin-password-form').reset();
  showToast('تم تغيير كلمة مرور المدير بنجاح ✅', 'success');
}
window.handleChangeAdminPassword = handleChangeAdminPassword;


// ==========================================
// INIT ALL NEW FEATURES ON LOAD
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  // Load all admin settings into forms
  loadSiteTextsSettings();
  loadSectionImagesSettings();
  renderSectionsOrderList();

  // Apply saved social links to footer icons
  const social = JSON.parse(localStorage.getItem('jaz_social_links') || '{}');
  applySocialLinks(social);

  // Apply saved logo settings
  const logo = JSON.parse(localStorage.getItem('jaz_logo_settings') || '{}');
  if (logo.brandName || logo.logoUrl) applyLogoSettings(logo);

  // Apply saved contact info
  const contactInfo = JSON.parse(localStorage.getItem('jaz_contact_info') || '{}');
  if (contactInfo.phone || contactInfo.email) applyContactInfo(contactInfo);

  // Show popup if configured
  initPopup();

  // Use dynamic password if changed
  const savedAdminPass = localStorage.getItem('jaz_admin_password');
  if (savedAdminPass) {
    window.__adminPass = savedAdminPass;
  }
});
