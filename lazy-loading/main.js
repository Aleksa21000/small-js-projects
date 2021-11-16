const images = document.querySelectorAll('img');

const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (!entry.isIntersecting) return;
    intersectionObserver.unobserve(entry.target);

    const { src } = entry.target.dataset;
    entry.target.src = src;
    entry.target.classList.add('in-view');
  });
});

images.forEach(function (image) {
  intersectionObserver.observe(image);
});