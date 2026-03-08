/* =========================================
   KIKI CERAMICS - Landing Page Scripts
   ========================================= */

// --- Translations ---
const translations = {
  en: {
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.contact': 'Contact',
    'hero.tagline': 'Handcrafted with soul',
    'about.label': 'Our Story',
    'about.title': 'Where Clay Meets Heart',
    'about.p1': 'Kiki Ceramics was born from a deep love for the art of pottery and a desire to bring warmth into everyday life. Each piece is handcrafted with care, shaped on the wheel or by hand, and fired with intention.',
    'about.p2': 'We believe that handmade objects carry the energy of their maker. Our ceramics are not just functional items — they are pieces of art that transform ordinary moments into something beautiful.',
    'about.p3': 'From mugs that cradle your morning coffee to plates that elevate your dinner table, every creation is unique, bearing the gentle marks of human touch that make handmade ceramics so special.',
    'services.label': 'What We Offer',
    'services.title': 'Our Craft',
    'services.handmade.title': 'Handmade Pottery',
    'services.handmade.text': 'Each piece is individually shaped on the potter\'s wheel or sculpted by hand, making every item one of a kind.',
    'services.custom.title': 'Custom Orders',
    'services.custom.text': 'Have a special vision? We create bespoke ceramic pieces tailored to your ideas, from dinnerware sets to decorative objects.',
    'services.workshops.title': 'Workshops',
    'services.workshops.text': 'Join our hands-on pottery workshops and discover the joy of creating with clay. Perfect for beginners and experienced potters alike.',
    'services.gifts.title': 'Gift Collections',
    'services.gifts.text': 'Discover our curated gift sets — perfect for weddings, birthdays, housewarmings, and every occasion worth celebrating.',
    'gallery.label': 'Our Work',
    'gallery.title': 'Gallery',
    'gallery.cta': 'See More on Instagram',
    'quote.text': '"Every piece of clay holds a memory waiting to be shaped."',
    'contact.label': 'Get in Touch',
    'contact.title': 'Let\'s Create Together',
    'contact.text': 'Whether you\'re looking for a special piece, want to place a custom order, or are interested in our workshops — we\'d love to hear from you.',
    'contact.location': 'Tbilisi, Georgia',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send Message',
    'contact.dm': 'Message us on Instagram',
    'contact.dm.active': 'Active now',
    'contact.dm.msg1': 'Hey! Welcome to Kiki Ceramics',
    'contact.dm.msg2': 'How can we help you today?',
    'contact.dm.placeholder': 'Message...',
    'footer.rights': 'All rights reserved.'
  },
  ka: {
    'nav.about': 'ჩვენს შესახებ',
    'nav.services': 'სერვისები',
    'nav.gallery': 'გალერეა',
    'nav.contact': 'კონტაქტი',
    'hero.tagline': 'შექმნილი სულით და სიყვარულით',
    'about.label': 'ჩვენი ისტორია',
    'about.title': 'სადაც თიხა გულს ხვდება',
    'about.p1': 'კიკი კერამიკა დაიბადა კერამიკის ხელოვნებისადმი ღრმა სიყვარულიდან და ყოველდღიურ ცხოვრებაში სითბოს შეტანის სურვილიდან. ყოველი ნაწარმი ზრუნვით არის ხელნაკეთი, მორგებული ბორბალზე ან ხელით ნაძერწი, და გამომწვარი განზრახვით.',
    'about.p2': 'ჩვენ გვჯერა, რომ ხელნაკეთი ნივთები ატარებენ შემქმნელის ენერგიას. ჩვენი კერამიკა არ არის მხოლოდ ფუნქციური საგნები — ესენი ხელოვნების ნიმუშებია, რომლებიც ჩვეულებრივ მომენტებს განსაკუთრებულად აქცევენ.',
    'about.p3': 'დილის ყავის ჭიქიდან დაწყებული, სადილის მაგიდის თეფშებამდე — ყოველი ქმნილება უნიკალურია, ადამიანის ხელის ნაზი კვალით, რაც ხელნაკეთ კერამიკას ასე განსაკუთრებულს ხდის.',
    'services.label': 'რას ვთავაზობთ',
    'services.title': 'ჩვენი ხელობა',
    'services.handmade.title': 'ხელნაკეთი კერამიკა',
    'services.handmade.text': 'ყოველი ნაწარმი ინდივიდუალურად არის შექმნილი მეთუნის ბორბალზე ან ხელით ნაძერწი, რაც ყოველ ნივთს უნიკალურს ხდის.',
    'services.custom.title': 'ინდივიდუალური შეკვეთები',
    'services.custom.text': 'გაქვთ განსაკუთრებული ხედვა? ჩვენ ვქმნით თქვენს იდეებზე მორგებულ კერამიკულ ნაწარმს — სადილის სერვიზებიდან დეკორატიულ ნივთებამდე.',
    'services.workshops.title': 'სახელოსნო',
    'services.workshops.text': 'შემოუერთდით ჩვენს კერამიკის სახელოსნოს და აღმოაჩინეთ თიხით შექმნის სიხარული. შესაფერისია როგორც დამწყებებისთვის, ასევე გამოცდილი ოსტატებისთვის.',
    'services.gifts.title': 'საჩუქრები',
    'services.gifts.text': 'აღმოაჩინეთ ჩვენი საჩუქრების კოლექციები — იდეალურია ქორწილების, დაბადების დღეების, ახალ სახლში გადასვლისა და ყოველი განსაკუთრებული შემთხვევისთვის.',
    'gallery.label': 'ჩვენი ნამუშევრები',
    'gallery.title': 'გალერეა',
    'gallery.cta': 'მეტი ინსტაგრამზე',
    'quote.text': '„ყოველ თიხის ნაჭერს ახსოვს მოგონება, რომელიც ფორმას ელოდება."',
    'contact.label': 'დაგვიკავშირდით',
    'contact.title': 'შევქმნათ ერთად',
    'contact.text': 'ეძებთ განსაკუთრებულ ნაწარმს, გსურთ ინდივიდუალური შეკვეთის განთავსება, თუ გაინტერესებთ ჩვენი სახელოსნო — სიამოვნებით მოგისმენთ.',
    'contact.location': 'თბილისი, საქართველო',
    'contact.form.name': 'სახელი',
    'contact.form.email': 'ელ. ფოსტა',
    'contact.form.message': 'შეტყობინება',
    'contact.form.send': 'გაგზავნა',
    'contact.dm': 'მოგვწერეთ ინსტაგრამზე',
    'contact.dm.active': 'ხაზზეა',
    'contact.dm.msg1': 'გამარჯობა! კეთილი იყოს თქვენი მობრძანება',
    'contact.dm.msg2': 'რით შეგვიძლია დაგეხმაროთ?',
    'contact.dm.placeholder': 'შეტყობინება...',
    'footer.rights': 'ყველა უფლება დაცულია.'
  }
};

let currentLang = 'en';

// --- Detect language from URL path or localStorage ---
function detectLanguage() {
  // Check URL path first (e.g. /ge or /ge/)
  if (window.location.pathname.replace(/\/$/, '') === '/ge') {
    return 'ka';
  }
  // Check if redirected from /ge (localStorage set by ge/index.html)
  const stored = localStorage.getItem('kiki-lang');
  if (stored === 'ge') {
    localStorage.removeItem('kiki-lang');
    return 'ka';
  }
  return 'en';
}

// --- Initialize ---
document.addEventListener('DOMContentLoaded', () => {
  initNavScroll();
  initHamburger();
  initLanguageToggle();
  initScrollAnimations();
  initSmoothScroll();

  const lang = detectLanguage();
  setLanguage(lang);

  // Handle browser back/forward buttons
  window.addEventListener('popstate', () => {
    setLanguage(detectLanguage());
  });
});

// --- Navigation Scroll Effect ---
function initNavScroll() {
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const scroll = window.scrollY;
    if (scroll > 80) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    lastScroll = scroll;
  }, { passive: true });
}

// --- Hamburger Menu ---
function initHamburger() {
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobileMenu');
  const mobileLinks = mobileMenu.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
    document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
  });

  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      mobileMenu.classList.remove('active');
      document.body.style.overflow = '';
    });
  });
}

// --- Language Toggle ---
function initLanguageToggle() {
  const langToggle = document.getElementById('langToggle');
  const options = langToggle.querySelectorAll('.lang-option');

  options.forEach(option => {
    option.addEventListener('click', () => {
      const lang = option.dataset.lang;
      setLanguage(lang);
    });
  });
}

function setLanguage(lang) {
  currentLang = lang;
  const elements = document.querySelectorAll('[data-i18n]');

  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (translations[lang] && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Update active state on toggle
  document.querySelectorAll('.lang-option').forEach(option => {
    option.classList.toggle('active', option.dataset.lang === lang);
  });

  // Update html lang attribute
  document.documentElement.lang = lang;

  // Update page title
  document.title = lang === 'ka'
    ? 'კიკი კერამიკა | ხელნაკეთი კერამიკა'
    : 'Kiki Ceramics | Handmade Ceramics';

  // Update URL path without page reload
  const targetPath = lang === 'ka' ? '/ge' : '/';
  const currentPath = window.location.pathname.replace(/\/$/, '') || '/';
  if (currentPath !== targetPath) {
    history.pushState({ lang: lang }, '', targetPath + window.location.hash);
  }
}

// --- Scroll Animations ---
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll(
    '.section-label, .section-title, .about-description, .about-visual, ' +
    '.service-card, .gallery-embed, .quote, .contact-info, .contact-dm-wrapper, .map-wrapper'
  );

  animatedElements.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(el => observer.observe(el));
}

// --- Smooth Scroll ---
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        const offset = 80;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: 'smooth' });
      }
    });
  });
}

