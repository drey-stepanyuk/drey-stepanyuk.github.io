document.addEventListener("DOMContentLoaded", function() {
    let lazyJumbotron = [].slice.call(document.querySelectorAll(".lazy"));
  
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