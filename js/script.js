    // set year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Lightbox logic
    const cards = document.querySelectorAll('.card');
    const lightbox = document.getElementById('lightbox');
    const lbImage = document.getElementById('lbImage');
    const lbCaption = document.getElementById('lbCaption');
    const lbClose = document.getElementById('lbClose');

    cards.forEach(card=>{
      const img = card.querySelector('img');
      card.addEventListener('click', ()=>{
        const full = img.getAttribute('data-full') || img.src;
        lbImage.src = full;
        lbCaption.textContent = card.getAttribute('data-caption') || img.alt || '';
        lightbox.classList.add('open');
        lightbox.setAttribute('aria-hidden','false');
        // lock scroll
        document.body.style.overflow = 'hidden';
      });
    });

    lbClose.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', (e)=>{
      if(e.target === lightbox) closeLightbox();
    });
    document.addEventListener('keydown', (e)=>{ if(e.key === 'Escape') closeLightbox(); });

    function closeLightbox(){
      lightbox.classList.remove('open');
      lightbox.setAttribute('aria-hidden','true');
      lbImage.src = '';
      document.body.style.overflow = '';
    }

    // Smooth anchor scroll
    document.querySelectorAll('a[href^="#"]').forEach(a=>{
      a.addEventListener('click', function(e){
        const target = document.querySelector(this.getAttribute('href'));
        if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth',block:'start'}); }
      });
    });