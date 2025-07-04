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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

let title = document.getElementById('jpeg-title')

document.addEventListener('DOMContentLoaded', function(){
  console.log(`title loaded`)
  sleep(3000)
  title.style.transition = "mask-position 2s ease,-webkit-mask-position 2s ease"
  title.style.maskPosition = 0
  title.style.opacity = 1
  title.style.webkitMaskPosition = '120%'
  console.log(`shine done`)
})
