// move through sections navi
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const navLi = document.querySelectorAll(".glass-cont-navi ul li");

  const options = {
    threshold: 0.7 
  };

  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLi.forEach(li => {
          li.classList.remove("active");
          if (li.querySelector("a").getAttribute("href").substring(1) === entry.target.id) {
            li.classList.add("active");
          }
        });
      }
    });
  }, options);

  sections.forEach(section => {
    observer.observe(section);
  });
});

// Close the menu if viewport is resized to smallest size
function handleResize() {
  const overlayMenu = document.querySelector(".overlay-menu");
  const hamburgerIcon = document.querySelector(".hamburger-icon");
  if (window.innerWidth >= 1100) {
    overlayMenu.classList.remove("open");
    hamburgerIcon.classList.remove("open");
  }
}

// Add event listener for resize
window.addEventListener("resize", handleResize);



function toggleMenu() {
  const overlayMenu = document.querySelector(".overlay-menu");
  const icon = document.querySelector(".hamburger-icon");
  overlayMenu.classList.toggle("open");
  icon.classList.toggle("open");
}
