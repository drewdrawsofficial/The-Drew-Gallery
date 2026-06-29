(function () {
  const storageKey = 'drewGalleryTheme';
  const root = document.documentElement;

  function applyTheme(theme) {
    const isDark = theme === 'dark';
    root.classList.toggle('dark-mode', isDark);
    return isDark;
  }

  function setButtonLabel(button) {
    const isDark = root.classList.contains('dark-mode');
    button.textContent = isDark ? 'Light' : 'Dark';
    button.setAttribute('aria-label', isDark ? 'Switch to light mode' : 'Switch to dark mode');
    button.setAttribute('aria-pressed', String(isDark));
  }

  applyTheme(localStorage.getItem(storageKey));

  window.addEventListener('DOMContentLoaded', () => {
    const button = document.createElement('button');
    button.className = 'theme-toggle';
    button.type = 'button';
    setButtonLabel(button);

    button.addEventListener('click', () => {
      const nextTheme = root.classList.contains('dark-mode') ? 'light' : 'dark';
      localStorage.setItem(storageKey, nextTheme);
      applyTheme(nextTheme);
      setButtonLabel(button);
    });

    document.body.appendChild(button);
  });
})();
