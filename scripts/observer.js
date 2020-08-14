const nav = document.querySelector("nav");
const main = document.querySelector(".main-container");

const fadeIn = document.querySelectorAll(".image");

const sliders = document.querySelectorAll(".slider");

const navOptions = {
  rootMargin: "0px 0px -600px 0px"
};

const navObserver = new IntersectionObserver(function (entries, aboutObserver) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  });
}, navOptions);

navObserver.observe(main);

const appearOptions = {
  threshold: 0.5
};
const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add("appear");
      appearOnScroll.unobserve(entry.target);
    }
  });
},
appearOptions);

fadeIn.forEach((fader) => {
  appearOnScroll.observe(fader);
});

sliders.forEach((slider) => {
  appearOnScroll.observe(slider);
});
