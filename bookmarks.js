// this is not meant to be one long script, it is a collection of smaller ones
//set these as the url in a bookmark to run easily on any page

// javascript:(()=>{   })()

// image replacer
let images = document.getElementsByTagName("img");
console.log(images);
for (var i = 0; i < images.length; i++) {
  images[i].src=" put link here ";
}

// background color changer
const accColors = ["black","white","gray","red","blue","green","yellow","orange","purple","pink","brown","cyan"];
var userColor = prompt("Which color would you like to change the background to?");
if(accColors.includes(userColor)) {
    console.log("bccSuccess " + userColor);
    document.body.style.background = userColor;
} else if(!accColors.includes(userColor)) {
    console.log("bccFailure " + userColor);
    alert("Please use one of the allowed colors in lowercase. Valid colors include: " + accColors);
}
