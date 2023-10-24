// Randomly chooses a function to execute after a random amount of time between 10 and 100 seconds
// Compress with smth like jscompress.com and set as bookmark
// Function ideas:
/*
M: Translate the page to another language
M: Replace all images with images of whatever
M: Put a DVD logo on the screen
M: Drowning
Change all the text to the Bible or smth else funny
Quicktime event where you have to press button
Redirect to "funny site"
*/
javascript:(()=>{
function translate() {
var url = document.location.href;
url = url.substring(8);
var fei = url.indexOf('/', 1);
var f1 = url.substring(0, fei);var f2 = url.substring(fei);
f1 = f1.replace(/\./g, "-");
var newurl = 'https://' + f1 + '.translate.goog' + f2 + '?_x_tr_sl=' + 'en' + '&_x_tr_tl=' + 'ar' + '&_x_tr_hl=en&_x_tr_pto=wapp';
document.location.href = newurl;
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
function imgchange() {
let images = document.getElementsByTagName("img");
console.log(images);
for (var i = 0; i < images.length; i++) {
  images[i].src="https://media.npr.org/assets/img/2017/09/12/macaca_nigra_self-portrait-3e0070aa19a7fe36e802253048411a38f14a79f8-s1100-c50.jpg";
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
const functions = [translate(), drown(), imgchange(), dvdmove()];
let rnb = Math.floor(Math.random() * functions.length)
functions[rnb];
})()
