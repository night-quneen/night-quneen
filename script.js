const menuBtn = document.getElementById('menuBtn');
const mainNav = document.getElementById('mainNav');
const searchBtn = document.getElementById('searchBtn');
const searchPanel = document.getElementById('searchPanel');
const closeSearch = document.getElementById('closeSearch');
const siteSearch = document.getElementById('siteSearch');
const searchHint = document.getElementById('searchHint');

menuBtn?.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', String(open));
});

mainNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mainNav.classList.remove('open');
    menuBtn.setAttribute('aria-expanded', 'false');
  });
});

function openSearch() {
  searchPanel.classList.add('open');
  searchPanel.setAttribute('aria-hidden', 'false');
  setTimeout(() => siteSearch.focus(), 50);
}

function hideSearch() {
  searchPanel.classList.remove('open');
  searchPanel.setAttribute('aria-hidden', 'true');
}

searchBtn?.addEventListener('click', openSearch);
closeSearch?.addEventListener('click', hideSearch);
searchPanel?.addEventListener('click', (e) => {
  if (e.target === searchPanel) hideSearch();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') hideSearch();
});

siteSearch?.addEventListener('input', () => {
  const q = siteSearch.value.trim();
  searchHint.textContent = q ? `Search: “${q}”` : 'Search is ready.';
});

document.getElementById('year').textContent = new Date().getFullYear();
