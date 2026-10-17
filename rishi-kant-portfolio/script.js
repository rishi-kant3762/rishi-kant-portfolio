document.addEventListener('DOMContentLoaded', () => {
  // Close the mobile menu after selecting a section.
  document.querySelectorAll('#mainNav .nav-link, #mainNav .btn-nav').forEach(link => {
    link.addEventListener('click', () => {
      const nav = document.getElementById('mainNav');
      if (nav && nav.classList.contains('show') && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(nav).hide();
      }
    });
  });

  // Project category filters.
  const filterButtons = document.querySelectorAll('.filter-btn');
  const projectCards = document.querySelectorAll('.project-wrap');
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.dataset.filter;
      filterButtons.forEach(item => item.classList.toggle('active', item === button));
      projectCards.forEach(card => {
        const matches = filter === 'all' || card.dataset.category === filter;
        card.classList.toggle('hidden', !matches);
      });
    });
  });
});