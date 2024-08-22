document.addEventListener("DOMContentLoaded", (event) => {
  const images = document.querySelectorAll("main .img-fluid");

  images.forEach((img) => {
    img.style.cursor = "pointer";
    img.addEventListener("mousedown", (e) => {
      img.style.cursor = "grabbing";
      const shiftX = e.clientX - img.getBoundingClientRect().left;
      const shiftY = e.clientY - img.getBoundingClientRect().top;

      const moveAt = (pageX, pageY) => {
        img.style.left = pageX - shiftX + "px";
        img.style.top = pageY - shiftY + "px";
      };

      const onMouseMove = (e) => {
        moveAt(e.pageX, e.pageY);
      };

      document.addEventListener("mousemove", onMouseMove);

      img.onmouseup = () => {
        document.removeEventListener("mousemove", onMouseMove);
        img.style.cursor = "grab";
        img.onmouseup = null;
      };
    });

    img.ondragstart = () => {
      return false;
    };
  });
});
