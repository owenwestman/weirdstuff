//paste as bookmark

javascript:(()=>{
let gval = prompt("Give grades seperated by commas. Set as blank for none.");
let wval = prompt("Enter all non-blank grades in order, seperated by commas. Used grades: " + gval);
gval = gval.split(",");
wval = wval.split(",");
var gnum = document.getElementsByClassName('v-label v-widget InFakeBar v-label-InFakeBar v-label-undef-w');
var gw = document.getElementsByClassName('v-horizontallayout v-layout v-horizontal v-widget FakeBarGraph v-horizontallayout-FakeBarGraph v-has-width v-has-height');
for (var i = 0; i < gnum.length; i++) {
gnum[i].innerHTML = gval[i];
  console.log(gval[i]);
}
for(var i=0; i < gw.length; i++) {
gw[i].style.width = parseInt(wval[i]) + '%';
console.log(parseInt(wval[i]));
} 
})()
