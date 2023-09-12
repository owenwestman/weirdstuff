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

//made by a robot lmao
(function () {
  var e = document.createElement("img");
  e.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/DVD_logo.svg/2560px-DVD_logo.svg.png";
  e.style.cssText = "position: fixed; z-index: 9999; width: 140px; height: 140px";
  
  // Generate random initial positions within the screen boundaries
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
})();
