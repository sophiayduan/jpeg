document.addEventListener("scroll", function () {
  let maxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let userScrollPos = window.scrollY;
  let widthBasedOnScrollPercentage = ((userScrollPos / maxHeight) * 100); // calulcating what fraction of the webpage the user has scrolled thorugh
  document.getElementById(
    "progress-bar"
  ).style.width = `${widthBasedOnScrollPercentage}vw`;
})