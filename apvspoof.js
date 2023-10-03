javascript:(()=>{
let mval = prompt("Minimum grade? (1-100)");
let aval = prompt("Maximum grade? (1-100)");
parseInt(mval);
parseInt(aval);
if (aval === 100) {
aval = 101;
}
var gnum = document.getElementsByClassName('v-label v-widget InFakeBar v-label-InFakeBar v-label-undef-w');
var gw = document.getElementsByClassName('v-horizontallayout v-layout v-horizontal v-widget FakeBarGraph v-horizontallayout-FakeBarGraph v-has-width v-has-height');
function rnum(min, max) {
  let funcans = Math.floor(Math.random() * (min + max));
  console.log(funcans + ' ' + min + ' ' + max);
  return funcans;
}
for (var i = 0; i < gnum.length; i++) {
gnum[i].innerHTML = rnum(mval,aval).toString();
}
for(var i=0; i < gw.length; i++) {
gw[i].style.width = '100%';
} 
})()
