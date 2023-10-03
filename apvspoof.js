javascript:(()=>{
let gval = prompt("Give grades seperated by commas. Set as nan for none.");
var gar = gval.split(",");
var gnum = document.getElementsByClassName('v-label v-widget InFakeBar v-label-InFakeBar v-label-undef-w');
var gw = document.getElementsByClassName('v-horizontallayout v-layout v-horizontal v-widget FakeBarGraph v-horizontallayout-FakeBarGraph v-has-width v-has-height');
/* function rnum(min, max) {
  let funcans = Math.floor(Math.random() * (min + max));
  console.log(funcans + ' ' + min + ' ' + max);
  return funcans;
}
*/
for (var i = 0; i < gar.length; i++) {
if (gar[i] === 'nan') {
gar[i] = '';
}
}
for (var i = 0; i < gnum.length; i++) {
gnum[i].innerHTML = gar[i];
  console.log(gar[i]);
}
for(var i=0; i < gw.length; i++) {
gw[i].style.width = '100%';
} 
})()
