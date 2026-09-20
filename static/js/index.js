window.HELP_IMPROVE_VIDEOJS = false;

$(document).ready(function() {
  if (typeof bulmaCarousel !== 'undefined') {
    bulmaCarousel.attach('.carousel', {
      slidesToScroll: 1,
      slidesToShow: 3,
      loop: true,
      infinite: true,
      autoplay: false,
      autoplaySpeed: 3000,
      navigation: true,
      pagination: true
    });
  }

  if (typeof bulmaSlider !== 'undefined') {
    bulmaSlider.attach();
  }

  document.querySelectorAll('video').forEach(function(video) {
    video.play().catch(function() {});
  });

  document.querySelectorAll('.placeholder-link').forEach(function(link) {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      var kind = this.dataset.kind || 'link';
      alert('Add the final ' + kind + ' URL in index.html before publishing.');
    });
  });
});
