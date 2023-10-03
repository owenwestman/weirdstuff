//paste as bookmark

javascript:(()=>{
let gval = prompt("Give grades seperated by commas. Set as blank for none.");
var gar = gval.split(",");
var gnum = document.getElementsByClassName('v-label v-widget InFakeBar v-label-InFakeBar v-label-undef-w');
var gw = document.getElementsByClassName('v-horizontallayout v-layout v-horizontal v-widget FakeBarGraph v-horizontallayout-FakeBarGraph v-has-width v-has-height');
for (var i = 0; i < gnum.length; i++) {
gnum[i].innerHTML = gar[i];
  console.log(gar[i]);
}
for(var i=0; i < gw.length; i++) {
gw[i].style.width = '100%';
} 
})()
