const skillsSection = document.querySelector("#skills-sec");
const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-100px"
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    // console.log(entry.target);
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});
