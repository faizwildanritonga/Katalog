// ---------- Toggle navbar hamburger (Requirement #5) ----------
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileMenu = document.getElementById('mobileMenu');
const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

hamburgerBtn.addEventListener('click', () => {
  const isOpen = mobileMenu.classList.toggle('hidden') === false;
  hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
  // ubah ikon hamburger jadi silang sederhana saat terbuka
  bar1.style.transform = isOpen ? 'translateY(6px) rotate(45deg)' : '';
  bar2.style.opacity = isOpen ? '0' : '1';
  bar3.style.transform = isOpen ? 'translateY(-6px) rotate(-45deg)' : '';
});

// tutup menu mobile otomatis kalau salah satu link diklik
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    bar1.style.transform = ''; bar2.style.opacity = '1'; bar3.style.transform = '';
  });
});

// ---------- Tombol "+ Keranjang" (opsional, sekadar UI feedback) ----------
const toast = document.getElementById('toast');
let toastTimer;
document.querySelectorAll('.btn-keranjang').forEach(btn => {
  btn.addEventListener('click', () => {
    toast.style.opacity = '1';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => { toast.style.opacity = '0'; }, 1500);
  });
});
