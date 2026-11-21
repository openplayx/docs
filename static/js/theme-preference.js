// Run before Docusaurus's theme bootstrap so first paint uses the website choice.
(function () {
  try {
    var preference = localStorage.getItem('opx-theme');
    if (preference === 'light' || preference === 'dark') localStorage.setItem('theme', preference);
    else localStorage.removeItem('theme');
  } catch (_) { /* Storage restrictions leave the system preference in effect. */ }
})();
