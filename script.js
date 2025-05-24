document.addEventListener("scroll", function () {
  let maxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let userScrollPos = window.scrollY;
  let batteryWidth = parseInt(window.getComputedStyle(document.getElementById("battery"), null).getPropertyValue("width"))
  let maxWidth = ((batteryWidth/document.documentElement.clientWidth) * 100) - 4.5
  let widthBasedOnScrollPercentage = maxWidth - ((userScrollPos / maxHeight) * maxWidth); // calulcating what fraction of the webpage the user has scrolled thorugh
  document.getElementById(
    "progress-bar"
  ).style.width = `${widthBasedOnScrollPercentage}vw`;
})

