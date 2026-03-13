// Dark/light mode toggle & mobile nav
(function () {
  var html = document.documentElement;
  var stored = localStorage.getItem('theme');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  var theme = stored || (prefersDark ? 'dark' : 'light');

  html.setAttribute('data-theme', theme);

  // Theme toggle — works for both sidebar and mobile toggle buttons
  function toggleTheme() {
    var current = html.getAttribute('data-theme');
    var next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  }

  var toggle = document.getElementById('theme-toggle');
  var toggleMobile = document.getElementById('theme-toggle-mobile');
  if (toggle) toggle.addEventListener('click', toggleTheme);
  if (toggleMobile) toggleMobile.addEventListener('click', toggleTheme);

  // Mobile hamburger menu
  var menuBtn = document.getElementById('mobile-menu-btn');
  var mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', function () {
      mobileNav.classList.toggle('open');
      menuBtn.classList.toggle('open');
    });
  }
  // Expandable experience toggle
  var phdToggle = document.getElementById('phd-toggle');
  var phdDetails = document.getElementById('phd-details');
  if (phdToggle && phdDetails) {
    phdToggle.addEventListener('click', function () {
      var expanded = phdToggle.getAttribute('aria-expanded') === 'true';
      phdToggle.setAttribute('aria-expanded', !expanded);
      phdDetails.classList.toggle('open');
      phdToggle.innerHTML = expanded
        ? '<span class="exp-toggle-icon">&#9656;</span> See details (5 selected experiences)'
        : '<span class="exp-toggle-icon">&#9656;</span> Hide details';
    });
  }

  // Open all external links and PDFs in new tabs
  var links = document.querySelectorAll('a[href]');
  var host = window.location.host;
  links.forEach(function (link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var isExternal = href.indexOf('http') === 0 && href.indexOf(host) === -1;
    var isPdf = href.toLowerCase().indexOf('.pdf') !== -1;
    var isMailto = href.indexOf('mailto:') === 0;
    if ((isExternal || isPdf) && !isMailto) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener');
    }
  });
})();
