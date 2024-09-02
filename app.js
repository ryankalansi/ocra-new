document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(".img-fluid");

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add("active");
      element.classList.add(
        index % 2 === 0 ? "slide-in-left" : "slide-in-right"
      );
    }, index * 200); // Delay for staggered effect
  });

  window.addEventListener("scroll", function () {
    elements.forEach((element, index) => {
      const rect = element.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        element.classList.add("active");
        element.classList.add(
          index % 2 === 0 ? "slide-in-right" : "slide-in-left"
        );
      } else {
        element.classList.remove("active");
        element.classList.remove(
          index % 2 === 0 ? "slide-in-right" : "slide-in-left"
        );
      }
    });
  });
});
