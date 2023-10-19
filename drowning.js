javascript:(()=>{
var drw = document.createElement('img');
drw.src = 'https://static.vecteezy.com/system/resources/thumbnails/027/292/448/small/water-splashes-and-drops-isolated-on-transparent-background-abstract-background-with-blue-water-wave-png.png';
drw.style.cssText = 'position: fixed; z-index: 9999; width: 100vw; height: 100vh';
drw.style.left = '0px';
drw.style.top = '0px';
document.body.appendChild(drw);
function shut() {
window.location.replace('https://owenwestman.neocities.org/drown');
}
setTimeout(shut, 5000);
})()
