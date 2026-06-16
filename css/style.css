// =========================================
// ZYNA — Mobile Store JS
// =========================================

// --- HERO SLIDER ---
let slide = 0;
const heroSlider = document.getElementById('heroSlider');
const heroDots = document.querySelectorAll('.hdot');
const totalHeroSlides = 3;

function goHero(n) {
  slide = (n + totalHeroSlides) % totalHeroSlides;
  heroSlider.style.transform = `translateX(-${slide * 100}%)`;
  heroDots.forEach((d, i) => d.classList.toggle('active', i === slide));
}
setInterval(() => goHero(slide + 1), 3500);

// --- TABS ---
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
    showToast(`Showing: ${tab.textContent}`);
  });
});

function filterByTab(name) {
  document.querySelectorAll('.tab').forEach(t => {
    t.classList.toggle('active', t.dataset.tab === name);
  });
  showPage('shop');
  showToast(`Showing: ${name.charAt(0).toUpperCase() + name.slice(1)}`);
}

// --- PAGES ---
function showPage(name, btn) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById('page-' + name).classList.add('active');

  document.querySelectorAll('.bnav-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  else {
    const match = document.querySelector(`.bnav-btn[data-page="${name}"]`);
    if (match) match.classList.add('active');
  }

  if (name === 'cart') renderCartPage();
  window.scrollTo(0, 0);
}

// --- SIDEBAR ---
function toggleSidebar() {
  document.getElementById('sidebar').classList.toggle('open');
  document.getElementById('sidebarOverlay').classList.toggle('show');
}

// --- CART ---
let cart = [];

function addToCart(name, price) {
  const ex = cart.find(i => i.name === name);
  if (ex) ex.qty++;
  else cart.push({ name, price, qty: 1, emoji: getEmoji(name) });
  updateCartBadge();
  showToast(`🛒 Added: ${name}`);
}

function getEmoji(name) {
  if (name.toLowerCase().includes('dress')) return '👗';
  if (name.toLowerCase().includes('bag')) return '👜';
  if (name.toLowerCase().includes('hat')) return '🧢';
  if (name.toLowerCase().includes('shoe') || name.toLowerCase().includes('flat')) return '👟';
  if (name.toLowerCase().includes('beauty') || name.toLowerCase().includes('lip') || name.toLowerCase().includes('palette')) return '💄';
  if (name.toLowerCase().includes('skirt')) return '👗';
  if (name.toLowerCase().includes('hoodie') || name.toLowerCase().includes('tee') || name.toLowerCase().includes('top')) return '👕';
  return '🛍️';
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartBadge');
  const bBadge = document.getElementById('bnavBadge');
  if (total > 0) {
    badge.textContent = total;
    badge.style.display = 'flex';
    bBadge.textContent = total;
    bBadge.style.display = 'flex';
  } else {
    badge.style.display = 'none';
    bBadge.style.display = 'none';
  }
}

function removeFromCart(idx) {
  cart.splice(idx, 1);
  updateCartBadge();
  renderCartPage();
}

function renderCartPage() {
  const container = document.getElementById('cartPageItems');
  const totalBar = document.getElementById('cartTotalBar');
  const totalAmt = document.getElementById('cartTotalAmt');

  if (cart.length === 0) {
    container.innerHTML = `<div class="cart-empty-msg"><div>🛒</div><p>Your cart is empty</p></div>`;
    totalBar.style.display = 'none';
    return;
  }

  const total = cart.reduce((s, i) => s + i.price * i.qty, 0);

  container.innerHTML = cart.map((item, i) => `
    <div class="cart-item-row">
      <div class="cart-item-row__img">${item.emoji}</div>
      <div class="cart-item-row__info">
        <div class="cart-item-row__name">${item.name}${item.qty > 1 ? ` × ${item.qty}` : ''}</div>
        <div class="cart-item-row__price">EGP ${(item.price * item.qty).toLocaleString()}</div>
      </div>
      <button class="cart-item-row__del" onclick="removeFromCart(${i})">×</button>
    </div>
  `).join('');

  totalAmt.textContent = `EGP ${total.toLocaleString()}`;
  totalBar.style.display = 'block';
}

// --- TOAST ---
let toastTimer;
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove('show'), 2500);
}

// --- WISHLIST TOGGLE (header) ---
function toggleWishlistPage() {
  showToast('❤️ Wishlist coming soon!');
}
