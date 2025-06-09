// 다크 모드 토글
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

function setTheme(isDark) {
  html.setAttribute('data-theme', isDark ? 'dark' : 'light');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
}

// 초기 테마 설정
const savedTheme = localStorage.getItem('theme');
const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
  setTheme(savedTheme === 'dark');
} else {
  setTheme(systemDark);
}

// 토글 이벤트
themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  setTheme(!isDark);
});

// 시스템 테마 변경 감지
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
  if (!localStorage.getItem('theme')) {
    setTheme(e.matches);
  }
});

// 섹션 애니메이션
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up-animate');
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-up').forEach(el => observer.observe(el));

// 연락처 폼
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const result = document.getElementById('contact-result');
  result.textContent = '메시지가 성공적으로 전송되었습니다. (데모)';
  result.classList.add('show');
  setTimeout(() => result.classList.remove('show'), 2800);
  this.reset();
});

// 네비게이션 액티브 클래스
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});
