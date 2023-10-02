javascript:(()=>{
var gnum = document.getElementsByClassName('v-label v-widget InFakeBar v-label-InFakeBar v-label-undef-w');
var gw = document.getElementsByClassName('v-horizontallayout v-layout v-horizontal v-widget FakeBarGraph v-horizontallayout-FakeBarGraph v-has-width v-has-height');
/* for (var i = 0; i < gnum.length; i++) {
gnum[i].innerHTML = '100';
console.log(gnum[i] + " replaced with 100");
} */
for(var i=0; i < gw.length; i++) {
gw[i].style.width = '100%';
console.log(gw[i] + " replaced with 100%");
} 
})()
