// ============================================
//   SCRAMBLET STORE — Main JS
// ============================================

// ---- Book Data ----
const books = [
  { id: 1, title: "The Midnight Library", author: "Matt Haig", genre: "Fiction", price: 42.90, oldPrice: 55.00, rating: 4.8, emoji: "📘", badge: "Bestseller", description: "A dazzling novel about all the choices that go into a life well lived. Nora Seed finds herself in a mysterious library between life and death, where each book holds the story of a life she could have lived. With evocative storytelling and deep insight, this novel explores regret, hope, and the beauty of second chances.", pages: 304, publisher: "Canongate Books", year: 2020, language: "English", isbn: "978-1786892737" },
  { id: 2, title: "Atomic Habits", author: "James Clear", genre: "Self-Help", price: 48.50, oldPrice: 62.00, rating: 4.9, emoji: "🌱", badge: "Top Pick", description: "An easy and proven way to build good habits and break bad ones. This transformative book reveals practical strategies that will teach you exactly how to form good habits, break bad ones, and master the tiny behaviors that lead to remarkable results.", pages: 320, publisher: "Avery Publishing", year: 2018, language: "English", isbn: "978-0735211292" },
  { id: 3, title: "Dune", author: "Frank Herbert", genre: "Sci-Fi", price: 39.90, oldPrice: null, rating: 4.7, emoji: "🏜️", badge: null, description: "Set in the distant future amidst a feudal interstellar society, Dune tells the story of young Paul Atreides as he navigates political intrigue, religion, and ecology on the desert planet Arrakis — home to the universe's most valuable resource.", pages: 688, publisher: "Chilton Books", year: 1965, language: "English", isbn: "978-0441013593" },
  { id: 4, title: "Totto-chan", author: "Tetsuko Kuroyanagi", genre: "Biography", price: 28.90, oldPrice: 38.00, rating: 4.6, emoji: "🌻", badge: "Heartwarming", description: "The beloved story of a little girl whose free spirit was nurtured by an extraordinary school and its caring headmaster. A celebration of unconventional education and childhood freedom that has touched millions of readers worldwide.", pages: 231, publisher: "Kodansha International", year: 1981, language: "English", isbn: "978-4770016751" },
  { id: 5, title: "Ikigai", author: "Héctor García", genre: "Self-Help", price: 35.00, oldPrice: 45.00, rating: 4.5, emoji: "🌸", badge: "Popular", description: "The Japanese secret to a long and happy life. This book explores the concept of ikigai — your reason for being — and offers insights from the people of Okinawa, one of the world's longest-living communities, on how to find your purpose.", pages: 208, publisher: "Penguin Life", year: 2017, language: "English", isbn: "978-0143130727" },
  { id: 6, title: "Harry Potter & the Philosopher's Stone", author: "J.K. Rowling", genre: "Fantasy", price: 44.00, oldPrice: null, rating: 4.9, emoji: "⚡", badge: "Classic", description: "The book that started it all. Young Harry Potter discovers on his eleventh birthday that he is a wizard, and is whisked away to the magical world of Hogwarts School of Witchcraft and Wizardry, where an extraordinary adventure begins.", pages: 352, publisher: "Bloomsbury", year: 1997, language: "English", isbn: "978-0439362139" },
  { id: 7, title: "Sapiens", author: "Yuval Noah Harari", genre: "Non-Fiction", price: 52.90, oldPrice: 68.00, rating: 4.7, emoji: "🦴", badge: "Award Winner", description: "A brief history of humankind. From the Stone Age to the present day, Harari explores how Homo sapiens came to dominate the earth through the power of imagination, cooperation, and shared myths — a sweeping vision of human history.", pages: 443, publisher: "Harper", year: 2011, language: "English", isbn: "978-0062316097" },
  { id: 8, title: "The Alchemist", author: "Paulo Coelho", genre: "Fiction", price: 32.00, oldPrice: 42.00, rating: 4.6, emoji: "✨", badge: null, description: "A magical story about following your dream. This timeless tale of a young shepherd boy named Santiago who travels from Spain to Egypt in search of treasure teaches us to listen to our hearts and to pursue our personal legend.", pages: 163, publisher: "HarperOne", year: 1988, language: "English", isbn: "978-0062315007" },
  { id: 9, title: "Thinking, Fast and Slow", author: "Daniel Kahneman", genre: "Non-Fiction", price: 49.90, oldPrice: 64.00, rating: 4.8, emoji: "🧠", badge: "Mind-Bending", description: "Nobel Prize winner Daniel Kahneman reveals the two systems that drive the way we think. A groundbreaking tour of the mind that explains the two systems that shape our judgments and decisions, blending psychology and economics.", pages: 499, publisher: "Farrar, Straus and Giroux", year: 2011, language: "English", isbn: "978-0374533557" },
  { id: 10, title: "1984", author: "George Orwell", genre: "Fiction", price: 29.90, oldPrice: null, rating: 4.7, emoji: "👁️", badge: "Must Read", description: "Among the most terrifying novels ever written, this classic dystopian tale follows Winston Smith as he navigates a totalitarian society ruled by the all-seeing Big Brother, where independent thought is a dangerous act of rebellion.", pages: 328, publisher: "Secker & Warburg", year: 1949, language: "English", isbn: "978-0451524935" },
  { id: 11, title: "Rich Dad Poor Dad", author: "Robert Kiyosaki", genre: "Self-Help", price: 37.90, oldPrice: 48.00, rating: 4.4, emoji: "💰", badge: null, description: "What the rich teach their kids about money — that the poor and middle class do not. This personal finance classic challenges conventional beliefs about money and advocates financial independence through investing, real estate, and entrepreneurship.", pages: 336, publisher: "Plata Publishing", year: 1997, language: "English", isbn: "978-1612680194" },
  { id: 12, title: "The Little Prince", author: "Antoine de Saint-Exupéry", genre: "Children", price: 24.90, oldPrice: 32.00, rating: 4.8, emoji: "🌹", badge: "Timeless", description: "A touching and beautiful tale about a young prince who visits various planets and learns profound lessons about life, love, and human nature. This philosophical treasure has enchanted readers of all ages since 1943.", pages: 96, publisher: "Reynal & Hitchcock", year: 1943, language: "English", isbn: "978-0156012195" }
];

const categories = [
  { name: "Fiction", icon: "📚", count: 4 },
  { name: "Self-Help", icon: "🌟", count: 3 },
  { name: "Non-Fiction", icon: "🔬", count: 2 },
  { name: "Fantasy", icon: "🧙", count: 1 },
  { name: "Sci-Fi", icon: "🚀", count: 1 },
  { name: "Biography", icon: "📖", count: 1 },
  { name: "Children", icon: "🧸", count: 1 },
];

// ---- Cart State (localStorage-free, sessionStorage) ----
let cart = JSON.parse(sessionStorage.getItem('scramblet_cart') || '[]');

function saveCart() {
  sessionStorage.setItem('scramblet_cart', JSON.stringify(cart));
  updateCartBadge();
}

function addToCart(bookId) {
  const book = books.find(b => b.id === bookId);
  if (!book) return;
  const existing = cart.find(i => i.id === bookId);
  if (existing) {
    existing.qty++;
  } else {
    cart.push({ id: book.id, qty: 1 });
  }
  saveCart();
  showToast(`📚 "${book.title}" added to cart!`);
}

function removeFromCart(bookId) {
  cart = cart.filter(i => i.id !== bookId);
  saveCart();
}

function updateQty(bookId, delta) {
  const item = cart.find(i => i.id === bookId);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(bookId);
  else saveCart();
}

function getCartTotal() {
  return cart.reduce((sum, item) => {
    const book = books.find(b => b.id === item.id);
    return sum + (book ? book.price * item.qty : 0);
  }, 0);
}

function getCartCount() {
  return cart.reduce((sum, item) => sum + item.qty, 0);
}

function updateCartBadge() {
  const badges = document.querySelectorAll('.cart-count');
  const count = getCartCount();
  badges.forEach(b => { b.textContent = count; b.style.display = count > 0 ? 'inline-flex' : 'none'; });
}

// ---- Toast ----
function showToast(msg) {
  let t = document.getElementById('toast');
  if (!t) {
    t = document.createElement('div');
    t.id = 'toast';
    t.className = 'toast';
    document.body.appendChild(t);
  }
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}

// ---- Navigation Highlight ----
function setActiveNav() {
  const path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    const href = a.getAttribute('href').split('/').pop();
    a.classList.toggle('active', href === path);
  });
}

// ---- Hamburger Menu ----
function initHamburger() {
  const btn = document.querySelector('.hamburger');
  const links = document.querySelector('.nav-links');
  if (btn && links) {
    btn.addEventListener('click', () => links.classList.toggle('open'));
  }
}

// ---- Stars ----
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  return '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - (half ? 1 : 0));
}

// ---- Book Card HTML ----
const BOOK_COLORS = { Fiction:'#1A3A6B', 'Self-Help':'#2D5016', 'Non-Fiction':'#3D1A6B', Fantasy:'#5C2D00', 'Sci-Fi':'#002B45', Biography:'#4A1C1C', Children:'#1A4A3A' };

function coverUrl(book, size) {
  const isbn = (book.isbn || '').replace(/-/g, '');
  return `https://covers.openlibrary.org/b/isbn/${isbn}-${size}.jpg`;
}

function shortDescription(text, maxLen) {
  if (!text) return '';
  if (text.length <= maxLen) return text;
  return text.slice(0, maxLen).trim().replace(/[,.;:]?\s*\S*$/, '') + '…';
}

// link is used to know which page is calling this (pages/ vs root)
function bookCardHTML(book, opts = {}) {
  const bg = BOOK_COLORS[book.genre] || '#1A2E47';
  const inPages = opts.inPages !== undefined ? opts.inPages : window.location.pathname.includes('/pages/');
  const detailHref = inPages ? `book-detail.html?id=${book.id}` : `pages/book-detail.html?id=${book.id}`;
  const desc = shortDescription(book.description, 110);
  return `
    <a href="${detailHref}" class="book-card">
      <div class="book-cover" style="background:${bg}">
        <img src="${coverUrl(book, 'M')}" alt="${book.title} cover" class="book-cover-img"
             onerror="this.style.display='none'; this.nextElementSibling.style.display='flex';">
        <div class="book-cover-fallback" style="display:none;">${book.emoji}</div>
        ${book.badge ? `<span class="book-badge">${book.badge}</span>` : ''}
      </div>
      <div class="book-info">
        <div class="book-genre">${book.genre}</div>
        <div class="stars">${renderStars(book.rating)} <small style="color:#718096">(${book.rating})</small></div>
        <div class="book-title">${book.title}</div>
        <div class="book-author">by ${book.author}</div>
        <p class="book-card-desc">${desc}</p>
        <div>
          <span class="book-price">RM ${book.price.toFixed(2)}</span>
          ${book.oldPrice ? `<span class="book-price-old">RM ${book.oldPrice.toFixed(2)}</span>` : ''}
        </div>
      </div>
    </a>`;
}

// ---- Init on load ----
document.addEventListener('DOMContentLoaded', () => {
  setActiveNav();
  initHamburger();
  updateCartBadge();
});
