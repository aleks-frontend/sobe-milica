import { translations, gallery, type Lang, type Dictionary } from '../data/content';

type GallerySet = 'swan' | 'rose' | 'garden';

let lang: Lang = 'sr';
const lb = { open: false, set: null as GallerySet | null, index: 0 };

// ---- scroll reveal ----
const io = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-in');
        io.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12, rootMargin: '0px 0px -8% 0px' },
);
document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
setTimeout(() => {
  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
}, 2600);

// ---- nav scroll state ----
const navwrap = document.getElementById('navwrap');
function onScroll() {
  navwrap?.classList.toggle('is-scrolled', window.scrollY > 40);
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

// ---- mobile drawer ----
const burger = document.getElementById('nav-burger');
burger?.addEventListener('click', () => {
  const isOpen = document.body.getAttribute('data-nav') === 'open';
  document.body.setAttribute('data-nav', isOpen ? 'closed' : 'open');
});
document.querySelectorAll('[data-close-nav]').forEach((el) => {
  el.addEventListener('click', () => document.body.setAttribute('data-nav', 'closed'));
});

// ---- i18n ----
function applyI18n() {
  const t = translations[lang];
  document.documentElement.lang = lang;

  document.querySelectorAll<HTMLElement>('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n') as keyof Dictionary | null;
    if (!key) return;
    const val = t[key];
    if (typeof val === 'string') el.textContent = val;
  });

  document.querySelectorAll<HTMLElement>('[data-i18n-group]').forEach((el) => {
    const group = el.getAttribute('data-i18n-group') as keyof Dictionary | null;
    const field = el.getAttribute('data-i18n-field');
    const index = Number(el.getAttribute('data-i18n-index'));
    if (!group) return;
    const list = t[group];
    if (!Array.isArray(list)) return;
    const item = list[index] as Record<string, string> | undefined;
    if (!item) return;
    el.textContent = field ? item[field] : item.label;
  });

  const gal = gallery(lang);
  document.querySelectorAll<HTMLElement>('[data-gallery-set]').forEach((container) => {
    const set = container.getAttribute('data-gallery-set') as GallerySet | null;
    const index = Number(container.getAttribute('data-gallery-index'));
    if (!set) return;
    const photo = gal[set]?.[index];
    const img = container.querySelector<HTMLImageElement>('[data-gallery-alt]');
    if (photo && img) img.alt = photo.alt;
  });

  const langBtn = document.getElementById('lang-toggle');
  if (langBtn) langBtn.textContent = lang === 'en' ? 'SR' : 'EN';

  if (lb.open) renderLightbox();
}

document.getElementById('lang-toggle')?.addEventListener('click', () => {
  lang = lang === 'sr' ? 'en' : 'sr';
  applyI18n();
});

// ---- lightbox ----
function currentSetPhotos() {
  return lb.set ? gallery(lang)[lb.set] : [];
}

function renderLightbox() {
  const el = document.getElementById('lightbox');
  const img = document.getElementById('lb-image') as HTMLImageElement | null;
  const caption = document.getElementById('lb-caption');
  const counter = document.getElementById('lb-counter');
  if (!el || !img || !caption || !counter) return;
  const photos = currentSetPhotos();
  const photo = photos[lb.index];
  if (!photo) return;

  img.src = photo.src;
  img.alt = photo.alt;
  caption.textContent = photo.alt;
  counter.textContent = `${lb.index + 1} / ${photos.length}`;
  el.style.display = 'flex';

  el.classList.remove('lb-enter');
  void el.offsetWidth;
  el.classList.add('lb-enter');
  img.classList.remove('lb-img');
  void img.offsetWidth;
  img.classList.add('lb-img');
}

function openLightbox(set: GallerySet, index: number) {
  lb.open = true;
  lb.set = set;
  lb.index = index;
  renderLightbox();
}

function closeLightbox() {
  lb.open = false;
  const el = document.getElementById('lightbox');
  if (el) el.style.display = 'none';
}

function nextLightbox() {
  const photos = currentSetPhotos();
  if (!photos.length) return;
  lb.index = (lb.index + 1) % photos.length;
  renderLightbox();
}

function prevLightbox() {
  const photos = currentSetPhotos();
  if (!photos.length) return;
  lb.index = (lb.index - 1 + photos.length) % photos.length;
  renderLightbox();
}

document.querySelectorAll<HTMLElement>('[data-gallery-set]').forEach((container) => {
  container.addEventListener('click', () => {
    const set = container.getAttribute('data-gallery-set') as GallerySet | null;
    const index = Number(container.getAttribute('data-gallery-index'));
    if (set) openLightbox(set, index);
  });
});

document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
document.getElementById('lb-prev')?.addEventListener('click', (e) => {
  e.stopPropagation();
  prevLightbox();
});
document.getElementById('lb-next')?.addEventListener('click', (e) => {
  e.stopPropagation();
  nextLightbox();
});
document.getElementById('lightbox')?.addEventListener('click', (e) => {
  if (e.target === document.getElementById('lightbox')) closeLightbox();
});
document.getElementById('lb-panel')?.addEventListener('click', (e) => e.stopPropagation());

window.addEventListener('keydown', (e) => {
  if (!lb.open) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') nextLightbox();
  if (e.key === 'ArrowLeft') prevLightbox();
});
