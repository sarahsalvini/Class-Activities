// Create your HTML Page via DOM Methods here!
var h = document.createElement("H1"); 
var t = document.createTextNode("Your H1 text");


function createH1Element() {
    tag.textContent = "H1 tag " + h;
  document.body.appendChild(h);
  console.log('hello')
} 
 
createH1Element("First H1");