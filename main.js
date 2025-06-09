// 부드러운 스크롤 내비게이션 및 active 처리
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const targetId = this.getAttribute('href');
    if (targetId.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(targetId);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      document.querySelectorAll('nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// fade-in-up 애니메이션: 섹션이 뷰포트에 들어올 때마다 등장
const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up-animate');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.fade-in-up').forEach(el => {
  observer.observe(el);
});

// fade-in-up-animate 클래스: 실제로 opacity/transform 적용
// style.css에 이미 .fade-in-up에 애니메이션이 있으므로, JS로도 보강

// 연락처 폼 전송(프론트엔드 데모)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  const result = document.getElementById('contact-result');
  result.textContent = '메시지가 성공적으로 전송되었습니다. (데모)';
  result.classList.add('show');
  setTimeout(() => result.classList.remove('show'), 2800);
  this.reset();
});
