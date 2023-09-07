// this is not meant to be one long script, it is a collection of smaller ones
//set these as the url in a bookmark to run easily on any page

// javascript:(()=>{   })()

let images = document.getElementsByTagName("img");
console.log(images);
for (var i = 0; i < images.length; i++) {
  images[i].src=" put link here ";
}
