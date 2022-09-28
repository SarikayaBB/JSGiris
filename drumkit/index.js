// var tiklananDrumW = document.getElementById("w");
// tiklananDrumW.addEventListener("click", sesVerW);
// var tiklananDrumA = document.getElementById("a");
// tiklananDrumA.addEventListener("click", sesVerA);
// var tiklananDrumS = document.getElementById("s");
// tiklananDrumS.addEventListener("click", sesVerS);

// function sesVerW() {
//   var audioW = new Audio("sounds/crash.mp3");
//   audioW.play();
// }

// function sesVerA() {
//   var audioA = new Audio("sounds/kick-bass.mp3");
//   audioA.play();
// }
// function sesVerS() {
//   var audioS = new Audio("sounds/snare.mp3");
//   audioS.play();
// }

$(document).keydown(function (event) {
  sesKlavye(event.key);
  console.log(event.key);
});
// document.addEventListener("keydown", (event) => {
//   sesKlavye(event.key);
//   console.log(event.key);
// });

// for(let i=1;i<5;i++){
//   console.log(i);
// }
// i++;
// console.log(i);

$("button").click(function (e) {
  console.log(e.target.id);
  sesKlavye(e.target.id);
});

$("button").on("mouseover", function (e) {
  sesKlavye(e.target.id);
});

// var buttons = document.getElementsByTagName("button");

// for (let button of buttons) {
//   button.addEventListener("click", function () {
//     console.log(button.id);
//     sesTiklama(button.id);
//   });
// }
// for (let button of buttons) {
//   button.addEventListener("mouseover", function (event) {
//     sesTiklama(button.id);
//   });
// }

// for (let i = 0; i < buttons.length; i++) {
//   buttons[i].addEventListener("click", function () {
//     sesTiklama(buttons[i].id);
//     console.log(buttons[i].id);
//   });
// }

// function sesTiklama(id) {
//   if (id == "w") {
//     var audioW = new Audio("sounds/crash.mp3");
//     audioW.play();
//   } else if (id == "a") {
//     var audioA = new Audio("sounds/kick-bass.mp3");
//     audioA.play();
//   } else if (id == "s") {
//     var audioS = new Audio("sounds/snare.mp3");
//     audioS.play();
//   } else if (id == "d") {
//     var audioD = new Audio("sounds/tom-1.mp3");
//     audioD.play();
//   } else if (id == "j") {
//     var audioJ = new Audio("sounds/tom-2.mp3");
//     audioJ.play();
//   } else if (id == "k") {
//     var audioK = new Audio("sounds/tom-3.mp3");
//     audioK.play();
//   } else if (id == "l") {
//     var audioL = new Audio("sounds/tom-4.mp3");
//     audioL.play();
//   }
// }
function sesKlavye(tus) {
  if (tus == "w") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioW = new Audio("sounds/crash.mp3");
    audioW.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
    }, 1000);
  }
  if (tus == "a") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioA = new Audio("sounds/kick-bass.mp3");
    audioA.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
      // document.getElementById(tus).classList.remove("pressed");
    }, 1000);
  }
  if (tus == "s") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioS = new Audio("sounds/snare.mp3");
    audioS.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
      // document.getElementById(tus).classList.remove("pressed");
    }, 1000);
  }
  if (tus == "d") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioD = new Audio("sounds/tom-1.mp3");
    audioD.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
      // document.getElementById(tus).classList.remove("pressed");
    }, 1000);
  }
  if (tus == "j") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioJ = new Audio("sounds/tom-2.mp3");
    audioJ.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
      // document.getElementById(tus).classList.remove("pressed");
    }, 1000);
  }
  if (tus == "k") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioK = new Audio("sounds/tom-3.mp3");
    audioK.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
      // document.getElementById(tus).classList.remove("pressed");
    }, 1500);
  }
  if (tus == "l") {
    $("#" + tus).addClass("pressed");
    // document.getElementById(tus).classList.add("pressed");
    var audioL = new Audio("sounds/tom-4.mp3");
    audioL.play();
    setTimeout(function () {
      $("#" + tus).removeClass("pressed");
      // document.getElementById(tus).classList.remove("pressed");
    }, 1000);
  }
}
