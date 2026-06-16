// =========================================
// ZYNA v2 — Main JS
// =========================================

// --- STATE ---
let cart = [];
let wishlist = [];
let currentProduct = null;
let currentQty = 1;
let selectedSize = null;
let selectedColor = null;
let heroIndex = 0;
let currentCat = 'all';
let catSideCat = 'all';

// --- INIT ---
document.addEventListener('DOMContentLoaded', () => {
  renderForYou();
  renderCatGrid('all');
  renderTrends();
  startHeroAuto();
});

// =========================================
// HERO SLIDER
// =========================================
function heroSlide(dir) {
  const slides = document.querySelectorAll('.hero-slide');
  heroIndex = (heroIndex + dir + slides.length) % slides.length;
  document.getElementById('heroSlider').style.transform = `translateX(-${heroIndex * 100}%)`;
  document.querySelectorAll('.hdot').forEach((d, i) => d.classList.toggle('active', i === heroIndex));
}
function startHeroAuto() {
  setInterval(() => heroSlide(1), 3500);
}

// =========================================
// PAGES
// =========================================
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  const pg = document.getElementById('page-' + name);
  if (pg) pg.classList.add('active');

  document.querySelectorAll('.bnav').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const match = document.querySelector(`.bnav[data-page="${name}"]`);
    if (match) match.classList.add('active');
  }

  if (name === 'cart') renderCart();
  if (name === 'wishlist') renderWishlist();
  window.scrollTo(0, 0);
}

// =========================================
// TABS / FILTER
// =========================================
function switchTab(btn) {
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  btn.classList.add('active');
  currentCat = btn.dataset.cat;
  renderForYou(currentCat);
  showPage('shop');
}

function switchTabByName(cat) {
  currentCat = cat;
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.cat === cat);
  });
  renderForYou(cat);
  showPage('shop');
  window.scrollTo(0, 0);
}

// =========================================
// RENDER PRODUCTS
// =========================================
function renderForYou(cat = 'all') {
  const grid = document.getElementById('forYouGrid');
  if (!grid) return;
  const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  grid.innerHTML = list.map(p => productCard(p)).join('');
}

function renderCatGrid(cat) {
  const grid = document.getElementById('catGrid');
  if (!grid) return;
  const list = cat === 'all' ? PRODUCTS : PRODUCTS.filter(p => p.cat === cat);
  grid.innerHTML = list.map(p => productCard(p)).join('');
}

function renderTrends() {
  const grid = document.getElementById('trendsGrid');
  if (!grid) return;
  const trending = PRODUCTS.filter((_, i) => [4, 5, 1, 3, 7, 16].includes(i));
  grid.innerHTML = trending.map(p => productCard(p)).join('');
}

function productCard(p) {
  const inWl = wishlist.some(w => w.id === p.id);
  return `
    <div class="pcard" onclick="openProduct(${p.id})">
      <div class="pcard__img">
        <img src="${p.img}" alt="${p.name}" loading="lazy"/>
        ${p.disc ? `<span class="pcard__disc">${p.disc}</span>` : '<span class="pcard__new">NEW</span>'}
        <button class="pcard__wl ${inWl ? 'active' : ''}" onclick="event.stopPropagation(); toggleWishlistItem(${p.id}, this)">
          ${inWl ? '♥' : '♡'}
        </button>
      </div>
      <div class="pcard__info">
        <div class="pcard__name">${p.name}</div>
        <div class="pcard__rating">★★★★★ <span>${p.rating}</span></div>
        <div class="pcard__prices">
          <span class="new-p">EGP ${p.price.toLocaleString()}</span>
          ${p.oldPrice ? `<s>EGP ${p.oldPrice.toLocaleString()}</s>` : ''}
        </div>
      </div>
    </div>`;
}

// =========================================
// CATEGORY SIDEBAR
// =========================================
function setCatSide(el, cat) {
  document.querySelectorAll('.cat-side-item').forEach(i => i.classList.remove('active'));
  el.classList.add('active');
  catSideCat = cat;
  renderCatGrid(cat);
}

// =========================================
// PRODUCT PAGE
// =========================================
function openProduct(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  currentProduct = p;
  currentQty = 1;
  selectedSize = p.sizes[0];
  selectedColor = p.colors[0];

  document.getElementById('prodImg').src = p.img;
  document.getElementById('prodName').textContent = p.name;
  document.getElementById('prodRating').textContent = p.rating;
  document.getElementById('prodPrice').textContent = `EGP ${p.price.toLocaleString()}`;
  document.getElementById('prodOldPrice').textContent = p.oldPrice ? `EGP ${p.oldPrice.toLocaleString()}` : '';
  document.getElementById('prodDisc').textContent = p.disc || '';
  document.getElementById('prodDetails').textContent = p.details;
  document.getElementById('qtyVal').textContent = 1;

  // sizes
  document.getElementById('prodSizes').innerHTML = p.sizes.map(s =>
    `<button class="size-btn ${s === selectedSize ? 'active' : ''}" onclick="selectSize(this,'${s}')">${s}</button>`
  ).join('');

  // colors
  document.getElementById('prodColors').innerHTML = p.colors.map((c, i) =>
    `<button class="color-btn ${i === 0 ? 'active' : ''}" style="background:${c};border-color:${c === '#fff' || c === '#ffffff' ? '#ddd' : c}" onclick="selectColor(this,'${c}')"></button>`
  ).join('');

  // wishlist btn
  const inWl = wishlist.some(w => w.id === p.id);
  const wlBtn = document.getElementById('prodWlBtn');
  wlBtn.textContent = inWl ? '♥ Wishlisted' : '♡ Wishlist';
  wlBtn.classList.toggle('active', inWl);

  document.getElementById('productPage').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeProduct() {
  document.getElementById('productPage').classList.remove('open');
  document.body.style.overflow = '';
}

function selectSize(btn, size) {
  document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedSize = size;
}

function selectColor(btn, color) {
  document.querySelectorAll('.color-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedColor = color;
}

function changeQty(dir) {
  currentQty = Math.max(1, Math.min(10, currentQty + dir));
  document.getElementById('qtyVal').textContent = currentQty;
}

function addCurrentToCart() {
  if (!currentProduct) return;
  if (!selectedSize) { showToast('Please select a size'); return; }
  const key = `${currentProduct.id}-${selectedSize}-${selectedColor}`;
  const ex = cart.find(i => i.key === key);
  if (ex) { ex.qty += currentQty; }
  else {
    cart.push({
      key, id: currentProduct.id, name: currentProduct.name,
      img: currentProduct.img, price: currentProduct.price,
      size: selectedSize, color: selectedColor, qty: currentQty
    });
  }
  updateCartBadge();
  showToast(`✅ Added to cart!`);
  closeProduct();
}

function buyNow() {
  addCurrentToCart();
  setTimeout(() => showPage('cart'), 300);
}

function toggleProductWishlist() {
  if (!currentProduct) return;
  toggleWishlistItem(currentProduct.id);
  const inWl = wishlist.some(w => w.id === currentProduct.id);
  const btn = document.getElementById('prodWlBtn');
  btn.textContent = inWl ? '♥ Wishlisted' : '♡ Wishlist';
  btn.classList.toggle('active', inWl);
}

// =========================================
// CART
// =========================================
function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  ['cartBadge', 'cartBadge2'].forEach(id => {
    const el = document.getElementById(id);
    if (el) { el.textContent = total; el.style.display = total > 0 ? 'flex' : 'none'; }
  });
  const bb = document.getElementById('bnavBadge');
  if (bb) { bb.textContent = total; bb.style.display = total > 0 ? 'flex' : 'none'; }
}

function renderCart() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');
  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `<div class="empty-msg"><div>🛒</div><p>Your cart is empty</p></div>`;
    if (footer) footer.style.display = 'none';
    return;
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);
  container.innerHTML = cart.map((item, idx) => `
    <div class="cart-item-row">
      <div class="cart-item-row__img"><img src="${item.img}" alt="${item.name}"/></div>
      <div class="cart-item-row__info">
        <div class="cart-item-row__name">${item.name}</div>
        <div class="cart-item-row__meta">Size: ${item.size}</div>
        <div class="cart-item-row__price">EGP ${(item.price * item.qty).toLocaleString()}</div>
        <div class="cart-item-row__qty">
          <button onclick="changeCartQty(${idx}, -1)">−</button>
          <span>${item.qty}</span>
          <button onclick="changeCartQty(${idx}, 1)">+</button>
        </div>
      </div>
      <button class="cart-item-row__del" onclick="removeFromCart(${idx})">×</button>
    </div>`).join('');

  if (footer) {
    footer.style.display = 'block';
    document.getElementById('cartTotal').textContent = `EGP ${total.toLocaleString()}`;
  }
}

function changeCartQty(idx, dir) {
  cart[idx].qty = Math.max(1, cart[idx].qty + dir);
  updateCartBadge();
  renderCart();
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartBadge();
  renderCart();
}

// =========================================
// WISHLIST
// =========================================
function toggleWishlistItem(id, btn) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const idx = wishlist.findIndex(w => w.id === id);
  if (idx === -1) {
    wishlist.push(p);
    if (btn) { btn.textContent = '♥'; btn.classList.add('active'); }
    showToast('❤️ Added to wishlist!');
  } else {
    wishlist.splice(idx, 1);
    if (btn) { btn.textContent = '♡'; btn.classList.remove('active'); }
    showToast('Removed from wishlist');
  }
  updateWlBadge();
  if (document.getElementById('page-wishlist').classList.contains('active')) renderWishlist();
}

function updateWlBadge() {
  const el = document.getElementById('wlBadge');
  if (!el) return;
  el.textContent = wishlist.length;
  el.style.display = wishlist.length > 0 ? 'flex' : 'none';
}

function renderWishlist() {
  const grid = document.getElementById('wishlistGrid');
  const empty = document.getElementById('wishlistEmpty');
  if (!grid) return;
  if (wishlist.length === 0) {
    grid.innerHTML = '';
    if (empty) empty.style.display = 'block';
  } else {
    if (empty) empty.style.display = 'none';
    grid.innerHTML = wishlist.map(p => productCard(p)).join('');
  }
}

// =========================================
// SEARCH
// =========================================
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  const results = document.getElementById('searchResults');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) {
    document.getElementById('searchInput').focus();
  } else {
    if (results) results.classList.remove('open');
    document.getElementById('searchInput').value = '';
  }
}

function handleSearch(val) {
  let resultsEl = document.getElementById('searchResults');
  if (!resultsEl) {
    resultsEl = document.createElement('div');
    resultsEl.id = 'searchResults';
    resultsEl.className = 'search-results';
    document.body.appendChild(resultsEl);
  }

  if (!val.trim()) { resultsEl.classList.remove('open'); return; }

  const q = val.toLowerCase();
  const matches = PRODUCTS.filter(p =>
    p.name.toLowerCase().includes(q) || p.cat.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    resultsEl.innerHTML = `<div class="search-no-results">No results for "${val}"</div>`;
  } else {
    resultsEl.innerHTML = matches.map(p => `
      <div class="search-result-item" onclick="toggleSearch(); openProduct(${p.id})">
        <img src="${p.img}" alt="${p.name}"/>
        <div class="search-result-item__info">
          <div class="search-result-item__name">${p.name}</div>
          <div class="search-result-item__price">EGP ${p.price.toLocaleString()}</div>
        </div>
      </div>`).join('');
  }
  resultsEl.classList.add('open');
}

// =========================================
// SIDEBAR
// =========================================
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
}

// =========================================
// TOAST
// =========================================
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
  }

