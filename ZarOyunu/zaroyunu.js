var container = document.getElementById("container1");
// container.innerHTML += "<p><button id='btnZarAt' type='button' class='btn btn-primary'>ZARLA</button><p>";
// var btnZarAt = document.getElementById("btnZarAt");
// btnZarAt.addEventListener("click", zarla);

document.addEventListener("keydown", (event) => {
  if (event.key == "x") {
    zarla();
  }
});
//btnZarAt.addEventListener("click",function(){

//zarla("asdsa"")       parametleri fonksiyon cagirma

//});

function zarla() {
  var gelenZar1 = rastgele(1, 6);
  var gelenZar2 = rastgele(1, 6);
  var zarIhtimal = [1, 2, 3, 4, 5, 6];
  var resim1 = document.getElementById("zar1");
  // resim1.setAttribute("src", "images/zar" + gelenZar1 + ".png");

  var resim2 = document.getElementById("zar2");
  // resim2.setAttribute("src", "images/zar" + gelenZar2 + ".png");

  var baslik = document.getElementById("baslik");

  console.log(gelenZar1);
  console.log(gelenZar2);

  for (var zar of zarIhtimal) {
    if (zar == gelenZar1) resim1.setAttribute("src", "images/zar" + zar + ".png");

    if (zar == gelenZar2) resim2.setAttribute("src", "images/zar" + zar + ".png");
  }

  if (gelenZar1 < gelenZar2) {
    baslik.innerHTML = "OYUNCU 2 KAZANDI.";
    baslik.style.fontSize = "3rem";
    document.getElementById("p1").style.color = "red";
    document.getElementById("p1").style.fontSize = "40px";

    document.getElementById("p2").style.color = "green";
    document.getElementById("p2").style.fontSize = "70px";
  } else if (gelenZar2 < gelenZar1) {
    baslik.innerHTML = "OYUNCU 1 KAZANDI.";
    baslik.style.fontSize = "3rem";
    document.getElementById("p1").style.color = "green";
    document.getElementById("p1").style.fontSize = "70px";

    document.getElementById("p2").style.color = "red";
    document.getElementById("p2").style.fontSize = "40px";
  } else if ((gelenZar2 = gelenZar1)) {
    baslik.innerHTML = "BERABERE.";
    baslik.style.fontSize = "3rem";
    document.getElementById("p1").style.fontSize = "40px";
    document.getElementById("p2").style.fontSize = "40px";
  }
}
// if (gelenZar1 == 1 || gelenZar2 == 1) {
//   resim1.setAttribute("src", "images/zar1.png");
//   resim2.setAttribute("src", "images/zar1.png");
// }
// if (gelenZar1 == 2 || gelenZar2 == 2) {
//   resim1.setAttribute("src", "images/zar2.png");
//   resim2.setAttribute("src", "images/zar2.png");
// }
// if (gelenZar1 == 3 || gelenZar2 == 3) {
//   resim1.setAttribute("src", "images/zar3.png");
//   resim2.setAttribute("src", "images/zar3.png");
// }
// if (gelenZar1 == 4 || gelenZar2 == 4) {
//   resim1.setAttribute("src", "images/zar4.png");
//   resim2.setAttribute("src", "images/zar4.png");
// }
// if (gelenZar1 == 5 || gelenZar2 == 5) {
//   resim1.setAttribute("src", "images/zar5.png");
//   resim2.setAttribute("src", "images/zar5.png");
// }
// if (gelenZar1 == 6 || gelenZar2 == 6) {
//   resim1.setAttribute("src", "images/zar6.png");
//   resim2.setAttribute("src", "images/zar6.png");
// }

function rastgele(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
