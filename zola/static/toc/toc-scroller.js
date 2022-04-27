// https://www.bram.us/2020/01/10/smooth-scrolling-sticky-scrollspy-navigation/

window.addEventListener('DOMContentLoaded', () => {

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const id = entry.target.getAttribute('id');
      if (entry.intersectionRatio > 0) {
        document.querySelector(`.section-nav li a[href="#${id}"]`).parentElement.classList.add('active');
      } else {
        document.querySelector(`.section-nav li a[href="#${id}"]`).parentElement.classList.remove('active');
      }
    });
  });

  // Track all headers that have an `id` applied
  document.querySelectorAll('h1[id], h2[id], h3[id], h4[id], h5[id], h6[id]').forEach((header) => {
    observer.observe(header);
  });
  
});