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
document.addEventListener("keydown", (event) => {
  sesKlavye(event.key);
});
var buttons = document.getElementsByTagName("button");

for (let i = 0; buttons.length; i++) {
  buttons[i].addEventListener("click", function () {
    sesTiklama(buttons[i].id);
  });
}

function sesTiklama(id) {
  if (id == "w") {
    var audioW = new Audio("sounds/crash.mp3");
    audioW.play();
  }
  if (id == "a") {
    var audioA = new Audio("sounds/kick-bass.mp3");
    audioA.play();
  }
  if (id == "s") {
    var audioS = new Audio("sounds/snare.mp3");
    audioS.play();
  }
  if (id == "d") {
    var audioD = new Audio("sounds/tom-1.mp3");
    audioD.play();
  }
  if (id == "j") {
    var audioJ = new Audio("sounds/tom-2.mp3");
    audioJ.play();
  }
  if (id == "k") {
    var audioK = new Audio("sounds/tom-3.mp3");
    audioK.play();
  }
  if (id == "l") {
    var audioL = new Audio("sounds/tom-4.mp3");
    audioL.play();
  }
}
function sesKlavye(tus) {
  if (tus == "w") {
    var audioW = new Audio("sounds/crash.mp3");
    audioW.play();
  }
  if (tus == "a") {
    var audioA = new Audio("sounds/kick-bass.mp3");
    audioA.play();
  }
  if (tus == "s") {
    var audioS = new Audio("sounds/snare.mp3");
    audioS.play();
  }
  if (tus == "d") {
    var audioD = new Audio("sounds/tom-1.mp3");
    audioD.play();
  }
  if (tus == "j") {
    var audioJ = new Audio("sounds/tom-2.mp3");
    audioJ.play();
  }
  if (tus == "k") {
    var audioK = new Audio("sounds/tom-3.mp3");
    audioK.play();
  }
  if (tus == "l") {
    var audioL = new Audio("sounds/tom-4.mp3");
    audioL.play();
  }
}
