var app = new Framework7({
  // App root element
  el: '#app',
  routes: [
      {
          path: '/',
          url: 'index.html',
      },
      {
          path: '/page2/',
          url: 'page2.html',
      },
      {
        path: '/page3/',
        url: 'page3.html',
    },
  ],
  // ... other parameters
});

var mainView = app.views.create('.view-main')


var $$ = Dom7;

$$(document).on('page:init', '.page[data-name="page3"]', function () { 
    // Cordova is now initialized. Have fun!
    if (window.DeviceOrientationEvent) {
        window.addEventListener("deviceorientation", handleMotion)
    } else {
        alert("sorry your browser does not support this")
    }

    var moveboxOne = 0;
    var moveboxTwo = 0;
    var moveboxThree = 0;

    function handleMotion(event) {
        // console.log(event)
        var z = event.alpha;
        var x = event.beta;
        var y = event.gamma;

// movement of ball 
        moveboxOne += x / 2
        moveboxTwo += y / 2
        moveboxThree += z /2 

        $(".box").css("transform", "translateZ(" + moveboxThree + "px) translateX(" + moveboxOne + "px) translateY(" + moveboxTwo + "px)")

        Number.prototype.map = function (in_min, in_max, out_min, out_max) {
            return (this - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
        }

        var r = z.map(0, 360, 0, 255)
        var g = x.map(-180, 180, 0, 255)
        var b = y.map(-90, 90, 0, 255)

        $("body").css("background", "rgb(" + r + "," + g + "," + b + ")")


    }


})


$$(document).on('page:init', '.page[data-name="page2"]', function () {

  document.getElementById("StatusInput").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

  document.getElementById("StatusInput1").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

  document.getElementById("StatusInput2").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

  document.getElementById("StatusInput3").addEventListener(
    "click",
    function(event) {
      if (event.target.value === "Alive") {
        event.target.value = "Dead";
      } else {
        event.target.value = "Alive";
      }
    },
    false
  );

    // Cordova is now initialized. Have fun!

    var options = {
      quaility: 80, 
      destinationType: Camera.DestinationType.FILE_URI
  }

  $("#takephoto").on("click", takepic); // for each photo section instead
  $("#takephoto1").on("click", takepic1);
  $("#takephoto2").on("click", takepic2);
  $("#takephoto3").on("click", takepic3);

  function takepic() {
      navigator.camera.getPicture(onSucess, onError, options);
  }

  function takepic1() {
    navigator.camera.getPicture(onSucess1, onError, options);
}

function takepic2() {
  navigator.camera.getPicture(onSucess2, onError, options);
}

function takepic3() {
  navigator.camera.getPicture(onSucess3, onError, options);
}

  function onSucess(imageData){ // may need to duplicate sucess functions for each image 
      console.log(imageData);
      resolveLocalFileSystemURL(imageData, function (fileEntry) {
          var myNewImage = fileEntry.toURL()
          console.log(myNewImage);
          // do something with URL, assign to src or create an html 
          $(".img-space").attr("src", myNewImage) // targeting the css image on all at the momment i think 
      }, onError);
  }

  function onSucess1(imageData){ // may need to duplicate sucess functions for each image 
      console.log(imageData);
      resolveLocalFileSystemURL(imageData, function (fileEntry) {
          var myNewImage = fileEntry.toURL()
          console.log(myNewImage);
          // do something with URL, assign to src or create an html 
          $(".img-space1").attr("src", myNewImage) // targeting the css image on all at the momment i think 
      }, onError);
  }

  function onSucess2(imageData){ // may need to duplicate sucess functions for each image 
      console.log(imageData);
      resolveLocalFileSystemURL(imageData, function (fileEntry) {
          var myNewImage = fileEntry.toURL()
          console.log(myNewImage);
          // do something with URL, assign to src or create an html 
          $(".img-space2").attr("src", myNewImage) // targeting the css image on all at the momment i think 
      }, onError);
  }

  function onSucess3(imageData){ // may need to duplicate sucess functions for each image 
      console.log(imageData);
      resolveLocalFileSystemURL(imageData, function (fileEntry) {
          var myNewImage = fileEntry.toURL()
          console.log(myNewImage);
          // do something with URL, assign to src or create an html 
          $(".img-space3").attr("src", myNewImage) // targeting the css image on all at the momment i think 
      }, onError);
  }

  function onError(message){
      alert("Photo Error Has Occured." + message)
  }




})

