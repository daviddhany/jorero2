function toggleFilter(){
  document.getElementById('filter')?.classList.toggle('open');
}

(function(){
  const logo = document.getElementById('secretAdminLogo');
  const trigger = logo;
  if (!trigger) return;

  let clicks = 0;
  let timer;
  trigger.style.cursor = 'pointer';
  trigger.title = '';

  trigger.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();

    clicks += 1;
    clearTimeout(timer);

    timer = setTimeout(function(){
      clicks = 0;
    }, 7000);

    if (clicks >= 7) {
      clicks = 0;
      window.location.href = '/marly-dashboard/login';
    }
  }, true);
})();


// Hero carousel: arrows + dots + auto move
(function(){
  const carousel = document.querySelector('[data-carousel]');
  if (!carousel) return;
  const slides = Array.from(carousel.querySelectorAll('.hero-slide'));
  const dots = Array.from(carousel.querySelectorAll('.hero-dots span'));
  if (slides.length <= 1) return;
  let current = 0;
  let timer;
  function showSlide(index){
    slides[current]?.classList.remove('active');
    dots[current]?.classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current]?.classList.add('active');
    dots[current]?.classList.add('active');
  }
  function restart(){
    clearInterval(timer);
    timer = setInterval(() => showSlide(current + 1), 4500);
  }
  carousel.querySelector('[data-carousel-prev]')?.addEventListener('click', function(){ showSlide(current - 1); restart(); });
  carousel.querySelector('[data-carousel-next]')?.addEventListener('click', function(){ showSlide(current + 1); restart(); });
  dots.forEach((dot, index) => dot.addEventListener('click', function(){ showSlide(index); restart(); }));
  restart();
})();

// Product category sliders: same-category products stay beside each other and swipe with arrows/dots
(function(){
  document.querySelectorAll('[data-product-slider]').forEach(function(slider){
    const scroller = slider.querySelector('.product-scroll');
    if (!scroller) return;
    const cards = Array.from(scroller.querySelectorAll('.demos-card'));
    const dots = Array.from(slider.querySelectorAll('.slider-dots span'));
    const prev = slider.querySelector('[data-product-prev]');
    const next = slider.querySelector('[data-product-next]');

    function cardStep(){
      const first = cards[0];
      if (!first) return scroller.clientWidth;
      const gap = parseFloat(getComputedStyle(scroller).gap || '24') || 24;
      return first.getBoundingClientRect().width + gap;
    }
    function currentIndex(){
      return Math.round(scroller.scrollLeft / cardStep());
    }
    function updateDots(){
      const index = Math.max(0, Math.min(dots.length - 1, currentIndex()));
      dots.forEach((dot, i) => dot.classList.toggle('active', i === index));
    }
    function go(direction){
      scroller.scrollBy({ left: direction * cardStep(), behavior: 'smooth' });
      setTimeout(updateDots, 350);
    }

    prev?.addEventListener('click', function(){ go(-1); });
    next?.addEventListener('click', function(){ go(1); });
    dots.forEach((dot, index) => dot.addEventListener('click', function(){ scroller.scrollTo({ left: index * cardStep(), behavior: 'smooth' }); setTimeout(updateDots, 350); }));
    scroller.addEventListener('scroll', function(){ window.requestAnimationFrame(updateDots); });
    if (cards.length <= 3 && window.innerWidth > 900) {
      prev && (prev.style.display = 'none');
      next && (next.style.display = 'none');
    }
    updateDots();
  });
})();

// Product gallery arrows + color photos
let productPhotoIndex = 0;
function productImagesList(){
  const gallery = document.querySelector('.product-gallery');
  if (!gallery) return [];
  try { return JSON.parse(gallery.dataset.images || '[]'); } catch (e) { return []; }
}
function updateThumbActive(src){
  const thumbs = document.querySelectorAll('#productThumbs img');
  thumbs.forEach(t => t.classList.toggle('active', t.getAttribute('data-img') === src || t.src === src));
}
function setProductPhoto(index){
  const images = productImagesList();
  if (!images.length) return;
  productPhotoIndex = (index + images.length) % images.length;
  const main = document.getElementById('mainImg');
  if (main) main.src = images[productPhotoIndex];
  const selectedImage = document.getElementById('selectedImage');
  if (selectedImage) selectedImage.value = images[productPhotoIndex];
  updateThumbActive(images[productPhotoIndex]);
}
function moveProductPhoto(direction){
  const images = productImagesList();
  if (!images.length) return;
  setProductPhoto(productPhotoIndex + direction);
}
function showColorPhoto(image){
  const main = document.getElementById('mainImg');
  if (main && image) main.src = image;
  const selectedImage = document.getElementById('selectedImage');
  if (selectedImage) selectedImage.value = image;
  updateThumbActive(image);
}

// Native product choices: radio inputs submit size/color directly in FormData.
(function(){
  document.querySelectorAll('input[name="color"][data-image]').forEach(function(input){
    input.addEventListener('change', function(){
      if (input.checked && input.dataset.image) showColorPhoto(input.dataset.image);
    });
  });
})();


// Add to cart without leaving product page
(function(){
  const form = document.querySelector('.buy-box');
  if (!form) return;

  function showToast(message){
    let toast = document.querySelector('.cart-toast');
    if (!toast) {
      toast = document.createElement('div');
      toast.className = 'cart-toast';
      document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(window.__cartToastTimer);
    window.__cartToastTimer = setTimeout(() => toast.classList.remove('show'), 2500);
  }

  form.addEventListener('submit', async function(e){
    e.preventDefault();
    const btn = form.querySelector('button');
    const oldText = btn ? btn.textContent : '';
    if (btn) { btn.disabled = true; btn.textContent = 'جاري الإضافة...'; }
    try {
      const formData = new FormData(form);
      const res = await fetch(form.action, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });
      const data = await res.json();
      showToast(data.message || (res.ok ? 'تمت إضافة المنتج للسلة بنجاح' : 'اختار اللون والمقاس الأول'));
      if (data && typeof data.cartCount !== 'undefined') {
        const cartLink = document.querySelector('.cart-link');
        if (cartLink) cartLink.setAttribute('data-count', data.cartCount);
      }
    } catch (err) {
      showToast('حصلت مشكلة، جرب تاني');
    } finally {
      if (btn) { btn.disabled = false; btn.textContent = oldText; }
    }
  });
})();


// Mobile hamburger menu
(function(){
  const header = document.querySelector('.header');
  const btn = document.querySelector('.mobile-menu-btn');
  if (!header || !btn) return;

  btn.addEventListener('click', function(){
    const isOpen = header.classList.toggle('menu-open');
    btn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    btn.textContent = isOpen ? '×' : '☰';
  });

  header.querySelectorAll('.main-nav a, nav a').forEach(function(link){
    link.addEventListener('click', function(){
      header.classList.remove('menu-open');
      btn.setAttribute('aria-expanded', 'false');
      btn.textContent = '☰';
    });
  });
})();
