// for (var i = 1;i<200;i++){
//     if (i % 2 == 0){
//     document.write(i);
//     document.write(" ");
//     }
// }

// var dizi =[1,6,23,25,23,7,6,50,40,342,342342];

// for (var i = 0;i < dizi.length; i++){
//     document.write(dizi[i]);
//     document.write(" ");
//  }

// document.write("<br>");
// for (var i = 0;i < dizi.length; i++){
//    if (dizi[i] % 2 == 0 )
//    document.write(dizi[i]);
//    document.write(" ");
// }

// for (var i of dizi){
//     document.write(i + " ")
// }

var sayilar = [1, 5, 7, 15, 3, 25, 12, 24];

// 1- sayilar listesindeki her bir elemanın karesini yazdırınız.
for (sayi of sayilar) {
  console.log(sayi * sayi);
}
// 2- sayilar listesindeki hangi sayılar 5' in katıdır?

for (isOrderOf5 of sayilar) {
  if (isOrderOf5 % 5 == 0) {
    console.log(isOrderOf5 + " sayısı 5'in katıdır.");
  }
}
// 3- sayilar listesindeki çift sayıların toplamını bulunuz.

var sumOfEven = 0;
for (isEven of sayilar) {
  if (isEven % 2 == 0) {
    sumOfEven += isEven;
  }
}
console.log("Dizideki çift sayıların toplamı " + sumOfEven + "'dır.");

var urunler = [
  "iphone 12",
  "samsung s22",
  "iphone 13",
  "samsung s23",
  "samsung s20",
];

// 4- urunler listesindeki tüm ürünleri büyük harf ile yazdırınız.

var urunlerString = urunler.toString();
var urunlerStringUpper = urunlerString.toUpperCase();
var upper = urunlerStringUpper.split(",");
console.log(upper);

// 5- urunler listesinde samsung geçen kaç ürün vardır?

/*

var sayac =0;
urunler.forEach(urun => {
    if(urun.includes("samsung")){
        sayac++;
    }
});

*/
var counterSamsung = 0;
for (urun of urunler) {
  if (urun.includes("samsung")) {
    counterSamsung++;
  }
}
console.log("Ürünler listesinde " + counterSamsung + " adet ürün samsungtur.");

let ogrenciler = [
  { ad: "yiğit", soyad: "bilgi", notlar: [60, 70, 60] },
  { ad: "ada", soyad: "bilgi", notlar: [80, 70, 80] },
  { ad: "çınar", soyad: "turan", notlar: [10, 20, 60] },
];
// ogrenciler listesindeki her öğrencinin not ortalaması ve başarı durumlarını yazdırınız.(ort 50den kucukse başarısız)
for (var ogrenci of ogrenciler) {
  var toplam = 0,
    ortalama = 0;

  for (var not of ogrenci.notlar) {
    toplam += not;
  }
  ortalama = toplam / ogrenci.notlar.length;
  if (ortalama < 50) {
    console.log(
      ogrenci.ad + "nin ortalaması :  " + ortalama + ", başarısızdır."
    );
  } else {
    console.log(
      ogrenci.ad + "nin ortalaması :  " + ortalama + ", başarılıdır."
    );
  }
}
// tüm öğrencilerin not ortalaması kaçtır?

var toplam2 = 0;
var evaluatedGrade = 0;
for (ogrenci of ogrenciler) {
  for (not of ogrenci.notlar) {
    toplam2 += not;
    evaluatedGrade++;
  }
}

console.log("Tüm öğrencilerin not ortalaması : " + toplam2 / evaluatedGrade);
