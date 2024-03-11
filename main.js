// Grab the Input value

document.querySelector("button").addEventListener("click", function () {
  var inputText = document.querySelector("input").value;
    getName(inputText);
    document.querySelector(".preview").innerHTML = "";

});

document.querySelector(".input").addEventListener("keyup", function (e) {
  var inputText = document.querySelector("input").value;
  if (e.which === 13) {
    getName(inputText);
    document.querySelector(".preview").innerHTML = "";
  }
  
});

let getName = (item) => {
    let query = item.split(' ').join('+')

var url =
  "https://api.giphy.com/v1/gifs/search?q=" + query + "&api_key=ZZvgfdi4cOKxEu6jIapo44P94iVPpAj6";

// AJAX Request
var GiphyAJAXCall = new XMLHttpRequest();
GiphyAJAXCall.open("GET", url);
GiphyAJAXCall.send();

GiphyAJAXCall.addEventListener("load", function (e) {
  var data = e.target.response;
  pushToDOM(data);
});
};


function pushToDOM(input) {
    var response = JSON.parse(input);
    var imageURLs = response.data;
    // console.log(imageURL);
    imageURLs.forEach(function(image){
        var src = image.images.fixed_height.url;
        var container = document.querySelector(".preview");
        container.innerHTML += "<img src=\"" + src + "\">";
    });
   
  };

