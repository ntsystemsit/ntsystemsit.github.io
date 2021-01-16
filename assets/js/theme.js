const html = document.documentElement
const themeButtons = document.querySelectorAll('[data-set-theme]');

const getActiveButton = () => {
  return document.getElementById('themeswitcher').querySelector('[aria-pressed="true"]');
}

const saveTheme = (theme) => {
  if (window.localStorage) {
    localStorage['theme'] = theme;
  }
}

const loadSavedTheme = () => {
  if (window.localStorage) {
    const maybeTheme = localStorage['theme']
    if (maybeTheme) return maybeTheme
  }
  return null
}

const checkForSavedTheme = () => {
  const theme = loadSavedTheme()
  if (theme) {
    html.dataset.theme = theme;
    b = document.querySelector('[data-set-theme='+ theme + ']');
    b.setAttribute("aria-pressed","true");
  } else {
    b = document.querySelector('[data-set-theme="auto"]');
    b.setAttribute("aria-pressed","true");
  }
}

themeButtons.forEach((button) => {
  const theme = button.dataset.setTheme;
  
  button.addEventListener('click', () => {
    html.dataset.theme = theme;
    saveTheme(theme);
    currentThemeButton = getActiveButton();
    button.setAttribute("aria-pressed","true");
    if (currentThemeButton) {
      currentThemeButton.setAttribute("aria-pressed","false");
    }
  })

})

checkForSavedTheme();
