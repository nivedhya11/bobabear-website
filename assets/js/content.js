/**
 * Boba Bear — Chapter 01 Content Config
 *
 * Single source of truth for:
 *   - Featured product showcase (SHOWCASE)
 *   - Delivery platform routing (PLATFORMS)
 *
 * To update products or platform links, edit this file only.
 * Do not edit product cards or platform buttons directly in index.html.
 *
 * After updating products, also sync:
 *   - The JSON-LD <script type="application/ld+json"> in <head>
 */

/* ─── Product Showcase ─────────────────────────────────────────────────────── */

const SHOWCASE = [
  {
    name: 'Purple Rain Taro Boba',
    category: 'Signature Sip',
    description: 'Creamy taro boba with a rich purple blend and chewy tapioca pearls.',
    image: 'assets/images/products/purple-rain-matcha.png',
    auroraHex: '#D4BEF5', // aurora-lavender
  },
  {
    name: 'Gangnam Iced Coffee Boba',
    category: 'Coffee Drop',
    description: 'Creamy iced coffee with chewy boba and chocolate-lined cup walls.',
    image: null,
    auroraHex: '#FAC9A8', // aurora-peach
  },
  {
    name: 'Zen Master Matcha Boba',
    category: 'Matcha Drop',
    description: 'Premium matcha blended with milk, dark chocolate, and chewy boba.',
    image: null,
    auroraHex: '#B8F0C4', // aurora-mint
  },
  {
    name: 'Spicy Carbonara Ramyun',
    category: 'K-Street Bites',
    description: 'Creamy, spicy dry-stir ramyun finished with sesame and spring onion.',
    image: null,
    auroraHex: '#F9C4CC', // aurora-rose
  },
];

/* ─── Platform Routing ──────────────────────────────────────────────────────── */

const PLATFORMS = [
  {
    id: 'swiggy',
    url: 'https://www.swiggy.com/direct/brand/741763?source=swiggy-direct&subSource=instagram',
    label: 'Access Swiggy Drop',
    shortLabel: 'Swiggy Drop',
    colorHex: '#FC8019',
  },
  {
    id: 'zomato',
    url: 'https://link.zomato.com/xqzv/rshare?id=12538351530563d18',
    label: 'Access via Zomato',
    shortLabel: 'Via Zomato',
    colorHex: '#E23744',
  },
  {
    id: 'whatsapp',
    url: 'https://wa.me/919259894495?text=I%20want%20to%20Catch%20the%20Drop.%20Send%20the%20menu%21',
    label: 'Ping on WhatsApp',
    shortLabel: 'WhatsApp',
    colorHex: '#25D366',
  },
];

/* ─── Renderers ─────────────────────────────────────────────────────────────── */

/**
 * Renders curated product cards into #showcase-grid.
 * Card structure matches the design system:
 *   - bg/surface: night-600
 *   - border: 1px night-600, hover shifts to firefly/30
 *   - radius/lg: 12px cards, radius/md: 8px image area
 *   - card-lift: 2px translateY on hover + shadow/md
 */
function renderShowcaseGrid() {
  const el = document.getElementById('showcase-grid');
  if (!el) return;

  el.innerHTML = SHOWCASE.map(function (item) {
    const imageArea = item.image
      ? '<div class="overflow-hidden rounded-[8px]" style="background-color:' + item.auroraHex + '33">' +
          '<img src="' + item.image + '" alt="' + item.name + '" class="h-52 w-full object-cover" width="800" height="600" loading="lazy" decoding="async" />' +
        '</div>'
      : '<div class="h-52 overflow-hidden rounded-[8px]" style="background-color:' + item.auroraHex + '40"></div>';

    return (
      '<a href="#delivery-links" class="card-lift block overflow-hidden rounded-[12px] border border-night-600 bg-night-600 p-4 shadow-section hover:border-firefly/30 hover:shadow-card-hover">' +
        imageArea +
        '<div class="mt-4">' +
          '<p class="text-[11px] font-bold uppercase tracking-[0.16em] text-firefly">' + item.category + '</p>' +
          '<h3 class="mt-2 font-heading text-xl leading-tight text-cream-200 sm:text-2xl">' + item.name + '</h3>' +
          '<p class="mt-2 text-sm font-semibold leading-5 text-cream-400">' + item.description + '</p>' +
        '</div>' +
      '</a>'
    );
  }).join('');
}

/**
 * Renders platform CTA buttons into #platform-buttons (delivery section).
 * Button colors are applied via inline style to avoid Tailwind CDN scan dependency.
 * CTA copy follows access/discovery framing per design system voice guide.
 */
function renderPlatformButtons() {
  const el = document.getElementById('platform-buttons');
  if (!el) return;

  el.innerHTML = PLATFORMS.map(function (p) {
    return (
      '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer"' +
        ' class="btn-transition rounded-[8px] px-5 py-4 text-center text-sm font-bold uppercase tracking-[0.12em] text-white hover:brightness-110"' +
        ' style="background-color:' + p.colorHex + ';box-shadow:0 4px 6px -1px ' + p.colorHex + '40">' +
        p.label +
      '</a>'
    );
  }).join('');
}

/**
 * Renders platform buttons into #mobile-platform-bar (sticky mobile footer).
 * Uses shortLabel for compact display on small screens.
 */
function renderMobileBar() {
  const el = document.getElementById('mobile-platform-bar');
  if (!el) return;

  el.innerHTML = PLATFORMS.map(function (p) {
    return (
      '<a href="' + p.url + '" target="_blank" rel="noopener noreferrer"' +
        ' class="rounded-[8px] px-2 py-3 text-center text-[10px] font-bold uppercase leading-tight tracking-[0.08em] text-white sm:px-3 sm:text-[11px]"' +
        ' style="background-color:' + p.colorHex + '">' +
        p.shortLabel +
      '</a>'
    );
  }).join('');
}

/* ─── Init ──────────────────────────────────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', function () {
  renderShowcaseGrid();
  renderPlatformButtons();
  renderMobileBar();
});
