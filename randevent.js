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

function translate(lang1, lang2) {
var url = document.location.href;
url = url.substring(8);
var fei = url.indexOf('/', 1);
var f1 = url.substring(0, fei);var f2 = url.substring(fei);
f1 = f1.replace(/\./g, "-");
var newurl = 'https://' + f1 + '.translate.goog' + f2 + '?_x_tr_sl=' + lang1 '&_x_tr_tl=' + lang2 + '&_x_tr_hl=en&_x_tr_pto=wapp';
document.location.href = newurl;
}
