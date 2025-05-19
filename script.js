document.addEventListener("scroll", function () {
  let maxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let userScrollPos = window.scrollY;
  let maxIMGWidth = ((document.getElementById('battery').clientWidth/document.documentElement.clientWidth)*100)/1.65
  let widthBasedOnScrollPercentage = maxIMGWidth - ((userScrollPos / maxHeight) * maxIMGWidth); // calulcating what fraction of the webpage the user has scrolled thorugh
  console.log(widthBasedOnScrollPercentage)
  document.getElementById(
    "progress-bar"
  ).style.width = `${widthBasedOnScrollPercentage}vw`;
})