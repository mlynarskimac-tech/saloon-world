/**
 * SALOON.WORLD — Shared Navigation & Footer
 * Wstrzyknij ten plik na każdej stronie:
 * <script src="saloon_nav.js"></script>
 * Ustaw data-page na <body> żeby podświetlić aktywny link:
 * <body data-page="browse"> | "sell" | "about" | "stories" | "listing"
 */

(function() {

  // ─── Detect active page ───
  const page = document.body.dataset.page || '';

  const pages = [
    { id: 'browse',  label: 'Browse',  href: 'saloon_browse.html' },
    { id: 'sell',    label: 'Sell',    href: 'saloon_sell.html'   },
    { id: 'stories', label: 'Stories', href: 'saloon_stories.html'},
    { id: 'about',   label: 'About',   href: 'saloon_about.html'  },
  ];

  // ─── Inject CSS ───
  const style = document.createElement('style');
  style.textContent = `
    /* Reset nav conflicts */
    body { padding-top: 0; }

    /* ── SALOON NAV ── */
    .sw-nav {
      position: sticky;
      top: 0;
      z-index: 500;
      background: rgba(245,242,236,0.96);
      backdrop-filter: blur(14px);
      -webkit-backdrop-filter: blur(14px);
      border-bottom: 0.5px solid rgba(26,24,20,0.12);
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 3rem;
      height: 64px;
      font-family: "Instrument Sans", sans-serif;
    }
    .sw-nav-logo {
      font-family: "Cormorant Garamond", serif;
      font-size: 1.05rem;
      font-weight: 300;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: #1A1814;
      text-decoration: none;
      flex-shrink: 0;
    }
    .sw-nav-logo span { color: #B8A06A; }
    .sw-nav-links {
      display: flex;
      list-style: none;
      margin: 0; padding: 0;
    }
    .sw-nav-links a {
      display: block;
      padding: 0 1.4rem;
      height: 64px;
      line-height: 64px;
      font-size: 0.7rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #5C5850;
      text-decoration: none;
      border-bottom: 2px solid transparent;
      transition: color 0.2s, border-color 0.2s;
      white-space: nowrap;
    }
    .sw-nav-links a:hover { color: #1A1814; }
    .sw-nav-links a.sw-active {
      color: #1A1814;
      border-bottom-color: #B8A06A;
    }
    .sw-nav-btn {
      background: #1A1814;
      color: #F5F2EC;
      border: none;
      padding: 0.55rem 1.4rem;
      font-family: "Instrument Sans", sans-serif;
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      cursor: pointer;
      text-decoration: none;
      display: inline-block;
      transition: background 0.2s;
      white-space: nowrap;
      flex-shrink: 0;
    }
    .sw-nav-btn:hover { background: #2D2A24; }

    /* Hamburger (mobile) */
    .sw-nav-hamburger {
      display: none;
      flex-direction: column;
      gap: 5px;
      cursor: pointer;
      background: none;
      border: none;
      padding: 4px;
    }
    .sw-nav-hamburger span {
      display: block;
      width: 22px;
      height: 1px;
      background: #1A1814;
      transition: transform 0.2s, opacity 0.2s;
    }
    .sw-nav-hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
    .sw-nav-hamburger.open span:nth-child(2) { opacity: 0; }
    .sw-nav-hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

    .sw-nav-mobile {
      display: none;
      position: fixed;
      top: 64px;
      left: 0; right: 0;
      background: rgba(245,242,236,0.98);
      backdrop-filter: blur(14px);
      border-bottom: 0.5px solid rgba(26,24,20,0.12);
      z-index: 499;
      padding: 1rem 0 1.5rem;
    }
    .sw-nav-mobile.open { display: block; }
    .sw-nav-mobile a {
      display: block;
      padding: 0.8rem 3rem;
      font-size: 0.75rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      color: #5C5850;
      text-decoration: none;
    }
    .sw-nav-mobile a.sw-active { color: #1A1814; }
    .sw-nav-mobile .sw-nav-btn {
      margin: 1rem 3rem 0;
      display: block;
      text-align: center;
    }

    /* ── SALOON FOOTER ── */
    .sw-footer {
      background: #1A1814;
      padding: 4rem 3rem 3rem;
      font-family: "Instrument Sans", sans-serif;
    }
    .sw-footer-top {
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 4rem;
      align-items: start;
      padding-bottom: 3rem;
      border-bottom: 0.5px solid rgba(245,242,236,0.08);
      margin-bottom: 2rem;
    }
    .sw-footer-logo {
      font-family: "Cormorant Garamond", serif;
      font-size: 1.1rem;
      font-weight: 300;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: #F5F2EC;
      text-decoration: none;
      display: block;
      margin-bottom: 1rem;
    }
    .sw-footer-logo span { color: #B8A06A; }
    .sw-footer-tagline {
      font-family: "Cormorant Garamond", serif;
      font-style: italic;
      font-size: 0.95rem;
      color: rgba(245,242,236,0.3);
      font-weight: 300;
    }
    .sw-footer-links {
      display: flex;
      gap: 3rem;
    }
    .sw-footer-col h4 {
      font-size: 0.6rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: #B8A06A;
      margin-bottom: 1rem;
    }
    .sw-footer-col ul {
      list-style: none;
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
    }
    .sw-footer-col a {
      font-size: 0.78rem;
      color: rgba(245,242,236,0.4);
      text-decoration: none;
      transition: color 0.2s;
    }
    .sw-footer-col a:hover { color: rgba(245,242,236,0.8); }
    .sw-footer-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .sw-footer-copy {
      font-size: 0.68rem;
      color: rgba(245,242,236,0.2);
      letter-spacing: 0.06em;
    }
    .sw-footer-social {
      display: flex;
      gap: 1rem;
    }
    .sw-footer-social a {
      font-size: 0.65rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: rgba(245,242,236,0.3);
      text-decoration: none;
      transition: color 0.2s;
    }
    .sw-footer-social a:hover { color: rgba(245,242,236,0.7); }

    @media (max-width: 900px) {
      .sw-nav { padding: 0 1.5rem; }
      .sw-nav-links { display: none; }
      .sw-nav-btn.sw-nav-btn-desktop { display: none; }
      .sw-nav-hamburger { display: flex; }
      .sw-footer { padding: 3rem 1.5rem 2rem; }
      .sw-footer-top { grid-template-columns: 1fr; gap: 2rem; }
      .sw-footer-links { flex-direction: column; gap: 2rem; }
      .sw-footer-bottom { flex-direction: column; gap: 1rem; text-align: center; }
    }
  `;
  document.head.appendChild(style);

  // ─── Build Nav HTML ───
  const navLinks = pages.map(p =>
    `<li><a href="${p.href}"${p.id === page ? ' class="sw-active"' : ''}>${p.label}</a></li>`
  ).join('');

  const mobileLinks = pages.map(p =>
    `<a href="${p.href}"${p.id === page ? ' class="sw-active"' : ''}>${p.label}</a>`
  ).join('');

  const nav = document.createElement('nav');
  nav.className = 'sw-nav';
  nav.setAttribute('role', 'navigation');
  nav.innerHTML = `
    <a href="saloon_browse.html" class="sw-nav-logo">SALOON<span>.</span>WORLD</a>
    <ul class="sw-nav-links">${navLinks}</ul>
    <a href="saloon_sell.html" class="sw-nav-btn sw-nav-btn-desktop">List a vehicle</a>
    <button class="sw-nav-hamburger" id="swHamburger" aria-label="Menu">
      <span></span><span></span><span></span>
    </button>
  `;

  const mobileMenu = document.createElement('div');
  mobileMenu.className = 'sw-nav-mobile';
  mobileMenu.id = 'swMobileMenu';
  mobileMenu.innerHTML = `
    ${mobileLinks}
    <a href="saloon_sell.html" class="sw-nav-btn">List a vehicle</a>
  `;

  // ─── Build Footer HTML ───
  const footer = document.createElement('footer');
  footer.className = 'sw-footer';
  footer.innerHTML = `
    <div class="sw-footer-top">
      <div>
        <a href="saloon_browse.html" class="sw-footer-logo">SALOON<span>.</span>WORLD</a>
        <p class="sw-footer-tagline">Where the world's finest saloons find their next custodian.</p>
      </div>
      <div class="sw-footer-links">
        <div class="sw-footer-col">
          <h4>Marketplace</h4>
          <ul>
            <li><a href="saloon_browse.html">Browse vehicles</a></li>
            <li><a href="saloon_sell.html">Sell with us</a></li>
            <li><a href="saloon_sell.html#inquiry">Submit a vehicle</a></li>
          </ul>
        </div>
        <div class="sw-footer-col">
          <h4>Editorial</h4>
          <ul>
            <li><a href="saloon_stories.html">Stories</a></li>
            <li><a href="saloon_about.html">About the curator</a></li>
          </ul>
        </div>
        <div class="sw-footer-col">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:hello@saloon.world">hello@saloon.world</a></li>
            <li><a href="https://instagram.com/saloonworld" target="_blank">@saloonworld</a></li>
          </ul>
        </div>
      </div>
    </div>
    <div class="sw-footer-bottom">
      <span class="sw-footer-copy">© 2026 Saloon.world — All rights reserved</span>
      <div class="sw-footer-social">
        <a href="https://instagram.com/saloonworld" target="_blank">Instagram</a>
        <a href="mailto:hello@saloon.world">Email</a>
      </div>
    </div>
  `;

  // ─── Inject into DOM ───
  // Remove any existing nav/footer from the page
  document.querySelectorAll('nav, footer').forEach(el => el.remove());

  document.body.insertBefore(mobileMenu, document.body.firstChild);
  document.body.insertBefore(nav, document.body.firstChild);
  document.body.appendChild(footer);

  // ─── Hamburger toggle ───
  document.getElementById('swHamburger').addEventListener('click', function() {
    this.classList.toggle('open');
    document.getElementById('swMobileMenu').classList.toggle('open');
  });

  // Close mobile menu on link click
  document.querySelectorAll('#swMobileMenu a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('swHamburger').classList.remove('open');
      document.getElementById('swMobileMenu').classList.remove('open');
    });
  });

})();
