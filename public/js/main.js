
// Full AR / EN switcher. It translates static text and any product/category text rendered with data-ar/data-en.
const JORERO_I18N = {
  ar: {
    home:'الرئيسية', products:'كل المنتجات', newArrivals:'وصل حديثًا', contact:'تواصل معنا', cart:'السلة', search:'بحث', shopNow:'تسوق الآن',
    homeTitle:'أقوى و أجدد تشكيلة ملابس<br>من Jorero', homeText:'Jorero جايبلك أحدث الإطلالات في القمصان، السويت شيرت، الجواكيت والبناطيل في مكان واحد.',
    categoriesTitle:'اكتشف تشكيلتنا على<br>حسب اللي يناسبك', categoriesText:'سواء بتدور على جاكيت، سويت شيرت، قميص، أو بنطلون عملي... جمعنالك كل الفئات في مكان واحد عشان توصل للي يعجبك بسهولة.', shopMore:'تسوق المزيد', newText:'تشكيلة جديدة وصلت دلوقتي، موديلات عصرية وخامات مريحة تناسب ذوقك.',
    reviewsTitle:'آراء عملائنا في Jorero', review1:'"الخامة ناعمة والمقاس مضبوط."', reviewName1:'أحمد - المنتج: قميص', review2:'"الطلب وصل بسرعة والتغليف محترم."', reviewName2:'شريف - المنتج: سويت شيرت', review3:'"الشكل أحسن من الصور والمقاس مظبوط."', reviewName3:'كريم - المنتج: جاكيت',
    allProductsTitle:'كل منتجات Jorero', allProductsText:'اختار المنتج المناسب ليك وضيفه للسلة وكمل الطلب بسهولة.', filterProducts:'فلترة المنتجات', allCategories:'كل الفئات', applyFilter:'تطبيق الفلتر', clearFilter:'إلغاء الفلتر', filtersBtn:'☰ الفلاتر', noProducts:'لا توجد منتجات مطابقة للبحث حاليًا.',
    deliveryLine:'🚚 التاريخ المتوقع للاستلام: خلال 2 - 4 أيام', new:'جديد', size:'المقاس', color:'اللون', quantity:'الكمية', addToCart:'إضافة للسلة', continueShopping:'كمل تسوق', openCart:'افتح السلة',
    yourOrders:'طلباتك', reviewBeforeCheckout:'راجع المنتجات قبل إتمام الطلب.', emptyCart:'السلة فاضية', total:'الإجمالي', productsTotal:'المنتجات', delivery:'التوصيل', finalTotal:'الإجمالي النهائي', checkout:'إتمام الطلب', delete:'حذف',
    checkoutText:'اكتب بياناتك وسيظهر الطلب للأدمن.', fullName:'الاسم بالكامل', phoneNumber:'رقم التليفون', fullAddress:'العنوان بالتفصيل', extraNotes:'ملاحظات إضافية', confirmOrder:'تأكيد الطلب', orderSummary:'ملخص الطلب',
    orderSent:'تم إرسال طلبك بنجاح ✅', orderNumber:'رقم الطلب', willContact:'هنراجع الطلب ونتواصل معاك على رقم التليفون.', shopOther:'تسوق منتجات أخرى',
    footerText:'صُمم بواسطة Jorero لتجربة تسوق إلكتروني حديثة ومميزة. للمزيد من المعلومات.', address:'العنوان', whatsapp:'واتساب', phone:'تليفون',
    adding:'جاري الإضافة...',
    favsTitle:'❤️ المفضلة', favsSubtitle:'المنتجات اللي حفظتها هنا', favsEmpty:'مفيش منتجات في المفضلة لسه', favsEmptySub:'ادوس على القلب على أي منتج عشان تحفظه هنا', favsBrowse:'تصفح المنتجات', favsBuy:'اشتري دلوقتي ←', favsRemove:'إزالة', added:'تمت إضافة المنتج للسلة بنجاح', chooseOptions:'اختار اللون والمقاس الأول', errorTry:'حصلت مشكلة، جرب تاني'
  },
  en: {
    home:'Home', products:'Products', newArrivals:'New Arrivals', contact:'Contact Us', cart:'Cart', search:'Search', shopNow:'Shop Now',
    homeTitle:'The newest Jorero<br>fashion collection', homeText:'Discover shirts, sweatshirts, jackets and pants with modern fits in one place.',
    categoriesTitle:'Shop by category<br>and find your style', categoriesText:'Whether you need a jacket, sweatshirt, shirt or practical pants, we collected everything for an easy shopping experience.', shopMore:'Shop More', newText:'Fresh arrivals with modern designs and comfortable fabrics made for your style.',
    reviewsTitle:'What our customers say', review1:'"Soft fabric and perfect fit."', reviewName1:'Ahmed - Product: Shirt', review2:'"Fast delivery and great packaging."', reviewName2:'Sherif - Product: Sweatshirt', review3:'"Looks better than the photos and the size is accurate."', reviewName3:'Karim - Product: Jacket',
    allProductsTitle:'All Jorero Products', allProductsText:'Choose your product, add it to cart and complete your order easily.', filterProducts:'Product Filter', allCategories:'All Categories', applyFilter:'Apply Filter', clearFilter:'Clear Filter', filtersBtn:'☰ Filters', noProducts:'No matching products right now.',
    deliveryLine:'🚚 Expected delivery: within 2 - 4 days', new:'New', size:'Size', color:'Color', quantity:'Quantity', addToCart:'Add to Cart', continueShopping:'Continue Shopping', openCart:'Open Cart',
    yourOrders:'Your Orders', reviewBeforeCheckout:'Review your products before checkout.', emptyCart:'Your cart is empty', total:'Total', productsTotal:'Products', delivery:'Delivery', finalTotal:'Final Total', checkout:'Checkout', delete:'Delete',
    checkoutText:'Enter your information and the order will appear for the admin.', fullName:'Full Name', phoneNumber:'Phone Number', fullAddress:'Full Address', extraNotes:'Extra Notes', confirmOrder:'Confirm Order', orderSummary:'Order Summary',
    orderSent:'Your order was sent successfully ✅', orderNumber:'Order Number', willContact:'We will review your order and contact you by phone.', shopOther:'Shop More Products',
    footerText:'Built by Jorero for a modern and unique online shopping experience.', address:'Address', whatsapp:'WhatsApp', phone:'Phone',
    adding:'Adding...',
    favsTitle:'❤️ Favorites', favsSubtitle:'Products you saved', favsEmpty:'No favorites yet', favsEmptySub:'Tap the heart on any product to save it here', favsBrowse:'Browse Products', favsBuy:'Buy Now →', favsRemove:'Remove', added:'Product added to cart successfully', chooseOptions:'Please choose color and size first', errorTry:'Something went wrong, try again'
  }
};


// Automatic fallback translator for old data that was saved Arabic-only.
// Admin can still add the correct English text, but this prevents Arabic category/color labels
// from staying Arabic when the visitor switches to EN.
const JORERO_AUTO_EN = {
  'رجالي':'Men','حريمي':'Women','نسائي':'Women','أطفالي':'Kids','اطفالي':'Kids','تيشيرتات':'T-Shirts','تي شيرت':'T-Shirt','قمصان':'Shirts','قميص':'Shirt','بناطيل':'Pants','بنطلون':'Pants','جينز':'Jeans','أطقم':'Sets','اطقم':'Sets','جاكيت':'Jackets','جواكيت':'Jackets','سويت شيرت':'Sweatshirts','هودي':'Hoodies','منتجات أخرى':'Other Products',
  'أسود':'Black','اسود':'Black','أبيض':'White','ابيض':'White','أحمر':'Red','احمر':'Red','أزرق':'Blue','ازرق':'Blue','سماوي':'Sky Blue','كحلي':'Navy','أخضر':'Green','اخضر':'Green','زيتي':'Olive','رمادي':'Grey','رصاصي':'Grey','بيج':'Beige','بني':'Brown','نبيتي':'Burgundy','موف':'Mauve','بنفسجي':'Purple','وردي':'Pink','روز':'Pink','أصفر':'Yellow','اصفر':'Yellow','برتقالي':'Orange','لبني':'Light Blue','جملي':'Camel','كشمير':'Cashmere','سكري':'Off White','أوف وايت':'Off White'
};
function hasArabicText(value){ return /[\u0600-\u06FF]/.test(String(value || '')); }
function autoEn(value){
  const raw = String(value || '').trim();
  if (!raw) return raw;
  if (JORERO_AUTO_EN[raw]) return JORERO_AUTO_EN[raw];
  let out = raw;
  Object.keys(JORERO_AUTO_EN).sort((a,b)=>b.length-a.length).forEach(function(ar){
    out = out.replace(new RegExp(ar.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), JORERO_AUTO_EN[ar]);
  });
  return out;
}
function pickLangValue(ar, en, lang){
  if (lang !== 'en') return ar || en || '';
  const chosen = en || ar || '';
  return hasArabicText(chosen) ? autoEn(chosen) : chosen;
}

function formatMoneyValue(value, lang){
  const number = Number(value || 0);
  if (lang === 'en') return number.toLocaleString('en-US') + ' EGP';
  return number.toLocaleString('ar-EG') + ' ج';
}
function translatePrices(lang){
  document.querySelectorAll('[data-price]').forEach(function(el){
    el.textContent = formatMoneyValue(el.dataset.price, lang);
  });
}
function currentLang(){ return localStorage.getItem('joreroLang') || 'ar'; }
function setLang(lang){ localStorage.setItem('joreroLang', lang === 'en' ? 'en' : 'ar'); applyLang(); window.dispatchEvent(new Event('jorero-lang-change')); }
function applyLang(){
  const lang = currentLang();
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'en' ? 'ltr' : 'rtl';
  document.body && document.body.classList.toggle('lang-en', lang === 'en');
  document.querySelectorAll('[data-i18n]').forEach(function(el){
    const key = el.dataset.i18n;
    const value = JORERO_I18N[lang][key];
    if (typeof value !== 'undefined') el.innerHTML = value;
  });
  document.querySelectorAll('[data-ar][data-en]').forEach(function(el){
    el.innerHTML = pickLangValue(el.dataset.ar, el.dataset.en, lang);
  });
  document.querySelectorAll('[data-placeholder-ar][data-placeholder-en]').forEach(function(el){
    el.placeholder = lang === 'en' ? el.dataset.placeholderEn : el.dataset.placeholderAr;
  });
  document.querySelectorAll('[data-lang-link]').forEach(function(link){ link.classList.toggle('active', link.dataset.langLink === lang); });
  translatePrices(lang);
}

document.addEventListener('DOMContentLoaded', applyLang);

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
    if (btn) { btn.disabled = true; btn.textContent = JORERO_I18N[currentLang()].adding; }
    try {
      const formData = new FormData(form);
      const checkedColor = form.querySelector('input[name="color"]:checked');
      if (checkedColor && checkedColor.dataset.colorEn) formData.set('colorEn', checkedColor.dataset.colorEn);
      const res = await fetch(form.action, {
        method: 'POST',
        body: new URLSearchParams(formData),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        }
      });
      const data = await res.json();
      showToast((currentLang()==='en' ? data.messageEn : data.messageAr) || data.message || (res.ok ? JORERO_I18N[currentLang()].added : JORERO_I18N[currentLang()].chooseOptions));
      if (data && typeof data.cartCount !== 'undefined') {
        const cartLink = document.querySelector('.cart-link');
        if (cartLink) cartLink.setAttribute('data-count', data.cartCount);
      }
    } catch (err) {
      showToast(JORERO_I18N[currentLang()].errorTry);
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


/* ============================================================
   FAVORITES SYSTEM — localStorage based
   ============================================================ */
function getFavs(){
  try{ return JSON.parse(localStorage.getItem('jorero_favs')||'[]'); }
  catch(e){ return []; }
}
function saveFavs(favs){ localStorage.setItem('jorero_favs', JSON.stringify(favs)); }
function isFaved(id){ return getFavs().some(function(f){ return f.id===id; }); }

function updateFavBadge(){
  var count = getFavs().length;
  var badge = document.getElementById('headerFavBadge');
  if(badge){
    badge.textContent = count > 0 ? String(count) : '';
    if(count > 0){
      badge.classList.add('visible');
    } else {
      badge.classList.remove('visible');
    }
  }
}

function applyFavState(){
  document.querySelectorAll('.fav-btn').forEach(function(btn){
    var id = btn.dataset.favId;
    if(!id) return;
    var faved = isFaved(id);
    btn.classList.toggle('saved', faved);
    btn.textContent = faved ? '\u2665' : '\u2661';
  });
  var detailBtn = document.getElementById('detailFavBtn');
  if(detailBtn){
    var id = detailBtn.dataset.favId;
    var faved = isFaved(id);
    detailBtn.classList.toggle('saved', faved);
    var heart = detailBtn.querySelector('.fav-heart');
    var label = detailBtn.querySelector('.fav-label');
    if(heart) heart.textContent = faved ? '\u2665' : '\u2661';
    if(label) label.textContent = faved ? '\u0641\u064a \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u2713' : '\u0623\u0636\u0641 \u0644\u0644\u0645\u0641\u0636\u0644\u0629';
  }
}

function toggleFav(btn){
  var id = btn.dataset.favId;
  if(!id) return;
  var favs = getFavs();
  var idx = favs.findIndex(function(f){ return f.id===id; });
  var adding = idx === -1;
  if(!adding){
    favs.splice(idx,1);
  } else {
    favs.push({
      id: id,
      name: btn.dataset.favName || '',
      nameEn: btn.dataset.favNameEn || btn.dataset.favName || '',
      price: btn.dataset.favPrice || 0,
      oldPrice: btn.dataset.favOldPrice || '',
      image: btn.dataset.favImage || '/public/images/logo.png',
      url: btn.dataset.favUrl || '#'
    });
  }
  saveFavs(favs);
  applyFavState();
  updateFavBadge();

  // Toast
  var msg = adding ? '\u062a\u0645 \u0627\u0644\u062d\u0641\u0638 \u0641\u064a \u0627\u0644\u0645\u0641\u0636\u0644\u0629 \u2764\uFE0F' : '\u062a\u0645 \u0627\u0644\u0625\u0632\u0627\u0644\u0629 \u0645\u0646 \u0627\u0644\u0645\u0641\u0636\u0644\u0629';
  var toast = document.querySelector('.cart-toast');
  if(!toast){ toast = document.createElement('div'); toast.className='cart-toast'; document.body.appendChild(toast); }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(function(){ toast.classList.remove('show'); }, 2200);
}

document.addEventListener('DOMContentLoaded', function(){
  applyFavState();
  updateFavBadge();
});
