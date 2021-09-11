const mobilemenu = {
  init: function () {
    this.clickToggle(".mobile-bars", ".mobile-menu", "mb-menu");
    this.clickRemove(".close-btn", ".mobile-menu", "mb-menu");
    this.clickToggle(".mobile-bars", ".mobile-backdrop", "mb-backgroud");
    this.clickRemove(".close-btn", ".mobile-backdrop", "mb-backgroud");
    this.headerMenu(".header");
  },
  clickToggle: function (button, classMain, classA) {
    const btn = document.querySelector(button);
    const main = document.querySelector(classMain);
    btn.addEventListener("click", function () {
      main.classList.toggle(classA);
    });
  },
  clickRemove: function (button, classMain, classA) {
    const btn = document.querySelector(button);
    const main = document.querySelector(classMain);
    btn.addEventListener("click", function () {
      main.classList.remove(classA);
    });
  },
  headerMenu: function (header) {
    let seft = document.querySelector(header);
    let hightH = seft.offsetHeight;
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > hightH) {
        seft.classList.add("transpanrent-sticky");
      } else seft.classList.remove("transpanrent-sticky");
    });
  },
};
mobilemenu.init();

const alllinks = document.querySelectorAll("a.item");
alllinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
  });
  const href = link.getAttribute("href");

  // scroll back to top
  if (href === "#")
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  //
  if (href !== "#" && href.startsWith("#")) {
    const sectionEl = document.querySelector(herf);
    sectionEl.scrollIntoView({ behavior: "smooth" });
  }
});
