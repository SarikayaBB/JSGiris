//1- "Elma, Armut, Muz, Çilek" elemanlarına sahip bir dizi oluşturun
// var dizi = ["Elma", "Armut", "Muz", "Cilek"];
//2- Dizi kaç elemanlıdır ekrana yazdıralım.
// console.log(dizi.length);
//3- Dizin ilk ve son elemanını ekrana yazdıralım
// console.log(dizi[0]);
// console.log(dizi[3]);
//4- Elma, dizinin bir elemanı mıdır ?
// if (dizi.includes("Elma")){
//     console.log("Elemanidir.")
// } else {
//     console.log("Elemani degildir.")
// }
//5- Kiraz meyvesini listenin sonuna ekleyiniz.
// dizi.push("Kiraz");
// console.log(dizi.length);
// console.log(dizi);
//6- Dizinin son 2 elemanını siliniz.
// dizi.pop();
// dizi.pop();
// console.log(dizi);
//7 - Aşağıdaki bilgileri dizi içerisinde saklayınız ve her öğrencinin yaşını ve not ortalamasını hesaplayınız
//her bir öğrenci "1" obje olacak.

                //Ad Soyad DogumYılı Notları
//Ogrenci 1 = Yigit Bilgi   2010    (70,60,80)
//Ogrenci 2 = Ada Bilgi     2012    (80,80,90)
//Ogrenci 3 = Ahmet Turgut   2009    (60,60,70)

var gun = new Date();


 var Ogrenci1 = ["Yigit Bilgi", "2010",["70","60","80"]];
 var Ogrenci2 = ["Ada Bilgi", "2012",["80","80","90"]];
 var Ogrenci3 = ["Yigit Bilgi", "2009",["60","60","70"]];


 var ort1 = ( parseInt(Ogrenci1[2][0]) + parseInt(Ogrenci1[2][1]) + parseInt(Ogrenci1[2][2] )) / 3 ;
console.log(" 1. Ogrencinin Not ortalamasi " + ort1);
var yas1 = gun.getFullYear() - parseInt(Ogrenci1[1]); 
console.log("Ogrencinin yasi " + yas1);


 var ort2 = ( parseInt(Ogrenci2[2][0]) + parseInt(Ogrenci2[2][1]) + parseInt(Ogrenci2[2][2] )) / 3 ;
console.log(" 2. Ogrencinin Not ortalamasi " + ort2);
var yas2 = gun.getFullYear() - parseInt(Ogrenci2[1]); 
console.log("Ogrencinin yasi " + yas2);

 var ort3 = ( parseInt(Ogrenci3[2][0]) + parseInt(Ogrenci3[2][1]) + parseInt(Ogrenci3[2][2] )) / 3 ;
console.log(" 3. Ogrencinin Not ortalamasi " + ort3);
var yas3 = gun.getFullYear() - parseInt(Ogrenci3[1]); 
console.log("Ogrencinin yasi " + yas3);
