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
  const overlayBlur = document.querySelector(".overlay-blur");
  const overlayMenu = document.querySelector(".overlay-menu");
  const hamburgerIcon = document.querySelector(".hamburger-icon");

  if (window.innerWidth >= 1100) {
    // Remove 'open' class from all elements if viewport width is 1100px or more
    if (overlayBlur) overlayBlur.classList.remove("open");
    if (overlayMenu) overlayMenu.classList.remove("open");
    if (hamburgerIcon) hamburgerIcon.classList.remove("open");
  }
}

window.addEventListener("resize", handleResize);

// navi toggle menu
function toggleMenu() {
  const overlayblur = document.querySelector(".overlay-blur");
  const overlayMenu = document.querySelector(".overlay-menu");
  const icon = document.querySelector(".hamburger-icon");
  overlayblur.classList.toggle("open");
  overlayMenu.classList.toggle("open");
  icon.classList.toggle("open");
}


// tabbed menu skills
const allIndicator = document.querySelectorAll('.indicator li');
const allContent = document.querySelectorAll('.content li');

allIndicator.forEach(item=> {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i=> {
      i.classList.remove('active');
    })

    allContent.forEach(i=> {
      i.classList.remove('active');
    })

    content.classList.add('active');
    this.classList.add('active');
  })
})