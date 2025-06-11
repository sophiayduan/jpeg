document.addEventListener("scroll", function () {
  let maxHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let userScrollPos = window.scrollY;
  let widthBasedOnScrollPercentage = ((userScrollPos / maxHeight) * 100); // calculating what fraction of the webpage the user has scrolled thorugh
  document.getElementById(
    "progress-bar"
  ).style.width = `${widthBasedOnScrollPercentage}vw`;

  let pastLandingPagePos = document.getElementById('blurb').scrollHeight
  if (userScrollPos >= pastLandingPagePos) {
    document.getElementById('h-nav').style.setProperty("opacity", 100)
    console.log(document.getElementById('h-nav').style.opacity)
  }
  
  if (userScrollPos <= pastLandingPagePos) {
    document.getElementById('h-nav').style.setProperty("opacity", 0)
    console.log(document.getElementById('h-nav').style.opacity)

  }

})

