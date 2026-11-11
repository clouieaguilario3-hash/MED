function getCart() {
  try { return JSON.parse(localStorage.getItem("davao_cart") || "[]"); } catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem("davao_cart", JSON.stringify(cart));
  updateCartBadge();
}
function updateCartBadge() {
  const count = getCart().reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll(".cart-count").forEach(el => el.textContent = count);
}
function addToCart(id) {
  const product = PRODUCTS.find(p => p.id === id);
  if (!product) return;
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (item) item.qty += 1; else cart.push({ id: product.id, name: product.name, price: product.price, qty: 1, rx: product.prescriptionRequired, image: product.image });
  saveCart(cart);
  alert(`${product.name} added to cart.`);
}
function removeFromCart(id) {
  saveCart(getCart().filter(i => i.id !== id));
  renderCartPage();
}
function changeQty(id, delta) {
  const cart = getCart();
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    saveCart(cart.filter(i => i.id !== id));
  } else {
    saveCart(cart);
  }
  renderCartPage();
}
function cartTotals() {
  const cart = getCart();
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = cart.length ? 49 : 0;
  return { subtotal, delivery, total: subtotal + delivery };
}

function peso(n) { return `₱${n.toFixed(2)}`; }

function renderProducts(targetId, opts = {}) {
  const el = document.getElementById(targetId);
  if (!el) return;
  const q = (opts.query || "").toLowerCase();
  const cat = opts.category || "All";
  let items = PRODUCTS.filter(p =>
    (cat === "All" || p.category === cat) &&
    (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.description.toLowerCase().includes(q))
  );
  if (opts.limit) items = items.slice(0, opts.limit);
  el.innerHTML = items.map(p => `
    <div class="card product-card">
      <img src="${p.image}" alt="${p.name}">
      <h3>${p.name}</h3>
      <div class="muted">${p.category}</div>
      <div class="price">${peso(p.price)}</div>
      <span class="pill ${p.prescriptionRequired ? 'pill-rx' : 'pill-otc'}">${p.prescriptionRequired ? 'Prescription Required' : 'Over-the-Counter'}</span>
      <p class="muted" style="margin-top:.4rem;font-size:.92rem;">${p.description}</p>
      <div class="card-actions">
        <button class="btn btn-primary" onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    </div>
  `).join("") || `<div class="card">No products found.</div>`;
}

function initCatalogPage() {
  const search = document.getElementById("searchInput");
  const category = document.getElementById("categoryFilter");
  if (!search || !category) return;
  const cats = ["All", ...Array.from(new Set(PRODUCTS.map(p => p.category)))];
  category.innerHTML = cats.map(c => `<option value="${c}">${c}</option>`).join("");
  const run = () => renderProducts("catalogGrid", { query: search.value, category: category.value });
  search.addEventListener("input", run);
  category.addEventListener("change", run);
  const params = new URLSearchParams(location.search);
  if (params.get("q")) search.value = params.get("q");
  run();
}

function initHomeSearch() {
  const form = document.getElementById("homeSearchForm");
  if (!form) return;
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const q = document.getElementById("homeSearch").value.trim();
    location.href = `catalog.html?q=${encodeURIComponent(q)}`;
  });
}

function renderCartPage() {
  const body = document.getElementById("cartBody");
  if (!body) return;
  const cart = getCart();
  const { subtotal, delivery, total } = cartTotals();
  body.innerHTML = cart.map(i => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:.7rem;">
          <img src="${i.image}" alt="${i.name}" style="width:54px;height:54px;border-radius:8px;border:1px solid #d4e8dc;">
          <div><strong>${i.name}</strong><br><span class="muted">${i.rx ? 'Prescription required' : 'OTC'}</span></div>
        </div>
      </td>
      <td>${peso(i.price)}</td>
      <td>
        <div class="qty">
          <button onclick="changeQty(${i.id}, -1)">-</button>
          <span>${i.qty}</span>
          <button onclick="changeQty(${i.id}, 1)">+</button>
        </div>
      </td>
      <td>${peso(i.price * i.qty)}</td>
      <td><button class="btn btn-outline" onclick="removeFromCart(${i.id})">Remove</button></td>
    </tr>
  `).join("") || `<tr><td colspan="5" class="muted">Your cart is empty.</td></tr>`;
  document.getElementById("subtotal").textContent = peso(subtotal);
  document.getElementById("delivery").textContent = peso(delivery);
  document.getElementById("total").textContent = peso(total);
  const rxNotice = document.getElementById("rxNotice");
  if (rxNotice) rxNotice.style.display = cart.some(i => i.rx) ? "block" : "none";
}

function initCheckoutPage() {
  const summary = document.getElementById("checkoutSummary");
  if (!summary) return;
  const cart = getCart();
  const { subtotal, delivery, total } = cartTotals();
  summary.innerHTML = cart.length ? cart.map(i => `<div style="display:flex;justify-content:space-between;margin:.35rem 0;"><span>${i.name} x${i.qty}</span><strong>${peso(i.price*i.qty)}</strong></div>`).join("") + `<hr style="margin:.7rem 0;border:none;border-top:1px solid #d4e8dc;"><div style="display:flex;justify-content:space-between"><span>Subtotal</span><span>${peso(subtotal)}</span></div><div style="display:flex;justify-content:space-between"><span>Delivery</span><span>${peso(delivery)}</span></div><div style="display:flex;justify-content:space-between;font-weight:700;margin-top:.3rem"><span>Total</span><span>${peso(total)}</span></div>` : '<p class="muted">No items in cart.</p>';
  const rx = document.getElementById("checkoutRx");
  if (rx) rx.style.display = cart.some(i => i.rx) ? "block" : "none";
  const form = document.getElementById("checkoutForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!cart.length) return alert("Your cart is empty.");
    localStorage.setItem("davao_last_order", JSON.stringify({ items: cart, total, date: new Date().toLocaleString() }));
    localStorage.removeItem("davao_cart");
    updateCartBadge();
    document.getElementById("checkoutSuccess").style.display = "block";
    form.reset();
    summary.innerHTML = '<p class="muted">Order placed.</p>';
  });
}

function initLoginPage() {
  const loginForm = document.getElementById("loginForm");
  const registerForm = document.getElementById("registerForm");
  if (loginForm) loginForm.addEventListener("submit", e => {
    e.preventDefault();
    const email = document.getElementById("loginEmail").value;
    localStorage.setItem("davao_user", JSON.stringify({ email }));
    document.getElementById("loginMsg").style.display = "block";
  });
  if (registerForm) registerForm.addEventListener("submit", e => {
    e.preventDefault();
    document.getElementById("registerMsg").style.display = "block";
  });
}

function initAdminPage() {
  const grid = document.getElementById("adminProducts");
  if (!grid) return;
  const cart = getCart();
  const last = JSON.parse(localStorage.getItem("davao_last_order") || "null");
  document.getElementById("statProducts").textContent = PRODUCTS.length;
  document.getElementById("statRx").textContent = PRODUCTS.filter(p => p.prescriptionRequired).length;
  document.getElementById("statCart").textContent = cart.reduce((s,i)=>s+i.qty,0);
  document.getElementById("statOrders").textContent = last ? 1 : 0;
  grid.innerHTML = PRODUCTS.map(p => `
    <tr>
      <td>${p.name}</td>
      <td>${p.category}</td>
      <td>${peso(p.price)}</td>
      <td>${p.stock}</td>
      <td>${p.prescriptionRequired ? 'Yes' : 'No'}</td>
    </tr>
  `).join("");
  const recent = document.getElementById("recentOrder");
  recent.innerHTML = last ? `<div class="success"><strong>Last Order:</strong> ${last.date}<br>Total: ${peso(last.total)}<br>Items: ${last.items.map(i=>`${i.name} x${i.qty}`).join(', ')}</div>` : '<div class="card muted">No recent orders yet.</div>';
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartBadge();
  renderProducts("featuredGrid", { limit: 4 });
  initHomeSearch();
  initCatalogPage();
  renderCartPage();
  initCheckoutPage();
  initLoginPage();
  initAdminPage();
});
