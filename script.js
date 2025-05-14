
document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('.menu a');
    const sections = document.querySelectorAll('.section');
  
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = this.getAttribute('data-section');
        if (!target) return;
        sections.forEach(sec => sec.classList.remove('active'));
        document.getElementById(target + 'Section').classList.add('active');
        navLinks.forEach(l => l.classList.remove('active'));
        this.classList.add('active');
        document.body.className = 'theme-' + target;
      });
    });
  
    function rotateText(elementId, phrases, interval = 3000) {
      const element = document.getElementById(elementId);
      if (!element) return;
      let index = 0;
      element.textContent = phrases[index];
      setInterval(() => {
        index = (index + 1) % phrases.length;
        element.style.opacity = '0';
        setTimeout(() => {
          element.textContent = phrases[index];
          element.style.opacity = '1';
        }, 500);
      }, interval);
    }
  
    rotateText('womanPhrase', ['élégants', 'raffinés', 'uniques', 'intemporels'], 3000);
    rotateText('manPhrase', ['modernes', 'audacieux', 'raffinés', 'distinctifs'], 3000);
  
    const creativeModal = document.getElementById('creativeModal');
    const openBtn = document.getElementById('openCreatorBtn');
    const closeBtn = document.getElementById('closeModal');
  
    openBtn.addEventListener('click', function() {
      creativeModal.style.display = 'flex';
    });
    closeBtn.addEventListener('click', function() {
      creativeModal.style.display = 'none';
    });
    creativeModal.addEventListener('click', function(e) {
      if (e.target === creativeModal) creativeModal.style.display = 'none';
    });
  
    const pieces = document.querySelectorAll('.piece');
    const dropZone = document.getElementById('dropZone');
    pieces.forEach(piece => {
      piece.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text/plain', piece.dataset.piece);
      });
    });
  
    dropZone.addEventListener('dragover', function(e) {
      e.preventDefault();
    });
  
    dropZone.addEventListener('drop', function(e) {
      e.preventDefault();
      const data = e.dataTransfer.getData('text/plain');
      const placeholder = dropZone.querySelector('.placeholder');
      if (placeholder) placeholder.remove();
      dropZone.textContent = data;
    });
  });
  
  
