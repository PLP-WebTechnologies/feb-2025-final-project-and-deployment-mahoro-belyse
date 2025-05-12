window.addEventListener("load", () => {
  const logos = document.querySelectorAll(".logo");
  logos.forEach((logo, index) => {
    logo.style.opacity = "0";
    setTimeout(() => {
      logo.style.transition = "opacity 1s ease";
      logo.style.opacity = "1";
    }, index * 300); // shows one after another
  });
});
