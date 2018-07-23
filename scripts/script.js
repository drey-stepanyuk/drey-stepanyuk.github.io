document.addEventListener("DOMContentLoaded", function() {
    var lazyJumbotron = [].slice.call(document.querySelectorAll(".lazy-jumbotron"));
  
    if ("IntersectionObserver" in window) {
      let lazyJumbotronObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            lazyJumbotronObserver.unobserve(entry.target);
          }
        });
      });
  
      lazyJumbotron.forEach(function(lazyJumbotron) {
        lazyJumbotronObserver.observe(lazyJumbotron);
      });
    }
  });