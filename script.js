document.addEventListener("scroll", function () {
  let maxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let userScrollPos = window.scrollY;
  let widthBasedOnScrollPercentage = 7.5 - ((userScrollPos / maxHeight) * 7.5); // calulcating what fraction of the webpage the user has scrolled thorugh
  document.getElementById(
    "progress-bar"
  ).style.width = `${widthBasedOnScrollPercentage}vw`;
})

