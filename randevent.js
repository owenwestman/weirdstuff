// Randomly chooses a function to execute after a random amount of time between 10 and 100 seconds
// Compress with smth like jscompress.com and set as bookmark
// Function ideas:
/*
Quicktime event where you have to press button
*/
javascript:(()=>{
function beemovie(){
const script = "(Black screen with text; The sound of buzzing bees can be heard) According to all known laws of aviation, : there is no way a bee should be able to fly. : Its wings are too small to get its fat little body off the ground. : The bee, of course, flies anyway : because bees don't care what humans think is impossible."
let text = document.querySelectorAll('a, p, li, label, button, h1, h2, h3, h4, h5, h6');
for(let i = 0; i < text.length - 1; i++) {
    text[i].innerHTML = script;
  }
}

function drown() {
let drw = document.createElement('img');
drw.src = 'https://static.vecteezy.com/system/resources/thumbnails/027/292/448/small/water-splashes-and-drops-isolated-on-transparent-background-abstract-background-with-blue-water-wave-png.png';
drw.style.cssText = 'position: fixed; z-index: 9999; width: 100vw; height: 100vh';
drw.style.left = '0px';
drw.style.top = '0px';
document.body.appendChild(drw);
function rdir() { window.location.replace('https://owenwestman.neocities.org/drown'); }
setTimeout(rdir, 5000);
}
function belial() {
window.location.replace('https://www.churchofsatan.com/');
}
function imgchange() {
let images = document.getElementsByTagName("img");
console.log(images);
for (var i = 0; i < images.length; i++) {
  images[i].src="https://media.gettyimages.com/id/1213641943/photo/portrait-of-monkey-close-up-monkey-have-a-rest-fooling-around-eating-bananas-thailand.jpg?s=612x612&w=gi&k=20&c=bBGLZyV6sej35G_AOSO49t9VhiSVJn2c6LN9lZ68v3I=";
}
}

function dvdmove() {
  var e = document.createElement("img");
  e.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/2560px-DVD_logo.svg.png";
  e.style.cssText = "position: fixed; z-index: 9999; width: 140px; height: 140px";
  var t = Math.random() * (innerWidth - 140);
  var n = Math.random() * (innerHeight - 140);
  var a = 1, r = 1;
  document.body.appendChild(e);
  setInterval(function () {
    e.style.left = (t += a) + "px";
    e.style.top = (n += r) + "px";
    if (t <= 0 || t + e.width >= innerWidth) {
      a = -a;
    }
    if (n <= 0 || n + e.height >= innerHeight) {
      r = -r;
    }
  }, 5);
}
const functions = [drown, imgchange, dvdmove, belial, beemovie];
let rnb = Math.floor(Math.random() * functions.length);
functions[rnb]();
})()
