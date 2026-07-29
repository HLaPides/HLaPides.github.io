document.addEventListener('DOMContentLoaded', function () {
  console.log('site.js loaded');
  var overlay = document.createElement('div');
  overlay.id = 'lightbox-overlay';
  overlay.innerHTML = '<img id="lightbox-img" src="" alt="">';
  document.body.appendChild(overlay);

  var lightboxImg = document.getElementById('lightbox-img');

  var shots = document.querySelectorAll('.shot-full img');
  console.log('found', shots.length, 'zoomable images');

  shots.forEach(function (img) {
    img.addEventListener('click', function (e) {
      console.log('image clicked', img.src);
      e.preventDefault();
      lightboxImg.src = img.src;
      lightboxImg.alt = img.alt;
      overlay.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  overlay.addEventListener('click', function () {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      overlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
});