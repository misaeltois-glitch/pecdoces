// ===== TABS DO CARDÁPIO =====
function showTab(id, btn) {
  document.querySelectorAll('.tab-content').forEach(t => t.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById('tab-' + id).classList.add('active');
  if (btn) {
    btn.classList.add('active');
  } else {
    document.querySelectorAll('.tab').forEach(t => {
      if (t.textContent.toLowerCase().includes(id)) t.classList.add('active');
    });
  }
}

// ===== NAV ATIVO NO SCROLL =====
window.addEventListener('scroll', () => {
  const sections = ['missao', 'cardapio', 'momentos', 'orcamento'];
  const links = document.querySelectorAll('.nav-links a');
  sections.forEach((id, i) => {
    const el = document.getElementById(id);
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top <= 100 && rect.bottom >= 100) {
      links.forEach(l => l.classList.remove('active'));
      if (links[i]) links[i].classList.add('active');
    }
  });
});

// ===== FORMULÁRIO → WHATSAPP =====
function enviarOrcamento() {
  const nome = document.getElementById('nome').value;
  if (!nome) {
    alert('Por favor, preencha seu nome.');
    return;
  }
  const msg = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para meu evento. Meu nome é ' + nome + '.');
  window.open('https://wa.me/5511961739148?text=' + msg, '_blank');
}

// ===== FADE IN NO SCROLL =====
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.mvv-card, .kit-card, .depo-card, .evento-card, .stat-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
