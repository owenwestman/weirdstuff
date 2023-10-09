function translate(lang1, lang2) {

//find url and remove unnessecary characters
var url = document.location.href;
url = url.substring(8);

//split url into two distinct sections for better formatting with google translate
var fei = url.indexOf('/', 1);
var f1 = url.substring(0, fei);var f2 = url.substring(fei);
f1 = f1.replace(/\./g, "-");

//set google translate url and navigate
var newurl = 'https://' + f1 + '.translate.goog' + f2 + '?_x_tr_sl=' + lang1 '&_x_tr_tl=' + lang2 + '&_x_tr_hl=en&_x_tr_pto=wapp';
document.location.href = newurl;
}
