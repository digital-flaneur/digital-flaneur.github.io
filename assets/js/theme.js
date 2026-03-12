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
})();
