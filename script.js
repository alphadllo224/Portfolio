// Mode jour/nuit
const toggle = document.getElementById('theme-toggle');

toggle.addEventListener('change', () => {
  if (toggle.checked) {
    document.body.style.backgroundColor = '#f5f5f5';
    document.body.style.color = '#0f0f1a';
    document.querySelectorAll('.sidebar').forEach(s => {
      s.style.backgroundColor = '#ffffff';
      s.style.color = '#0f0f1a';
    });
    document.querySelectorAll('.card, .bloc, .bts-card, .veille-card, section').forEach(el => {
      el.style.backgroundColor = '#e0e0e0';
      el.style.color = '#0f0f1a';
      el.style.borderColor = '#a855f7';
    });
  } else {
    // Retour au thème sombre
    document.body.style.backgroundColor = '#0f0f1a';
    document.body.style.color = '#f5f5f5';
    document.querySelectorAll('.sidebar').forEach(s => {
      s.style.backgroundColor = 'rgba(15, 15, 25, 0.95)';
      s.style.color = '#f5f5f5';
    });
    document.querySelectorAll('.card, .bloc, .bts-card, .veille-card, section').forEach(el => {
      el.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
      el.style.color = '#f5f5f5';
      el.style.borderColor = '#a855f7';
    });
  }
});