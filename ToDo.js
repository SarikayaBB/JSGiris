
/*
//  localStorage.setItem("userID","5"); // locale ekleme
// localStorage.setItem("userInfo",["test","test2"]); // locale array ekleme
// localStorage.removeItem("UserID"); // localden silme


// localStorage.clear;  // locali temizleme 



// var x = "b";
// var _x = {
//     "ad": "bilal"
// }

// var _ogr1 = ["yigit bilgi",2010,[60,70,70]];



// var ogr1 = {
//     "ad":"yigit",
//     "dogum":"2010",
//     "notlari":{  // ic ice object olusturmak mumkun 
//         "birinciVize":60, 
//         "ikinciVize":70,
//         "final": { // notlari icinde bir baska object
//             "ilkSinav":50,
//             "But":40
//         }
//     }
// }


// var ogr2 = {
//     "ad":"bilal",
//     "dogum":"1998",
//     "notlari":{  // ic ice object olusturmak mumkun
//         "birinciVize":10, 
//         "ikinciVize":20,
//         "final": { // notlari icinde bir baska object
//             "ilkSinav":10,
//             "But":20
//         }
//     }
// }

// var ogrenciler = [];
// ogrenciler.push(ogr1);
// ogrenciler.push(ogr2);

// localStorage.setItem("ogrenciler",JSON.stringify(ogrenciler));

// var ogrenciDeneme = JSON.parse(localStorage.getItem("ogrenciler"));

// console.log(ogrenciDeneme[0].ad);

// var ogrenciGrubu = JSON.parse(localStorage.getItem("ogrenciler"));



// for(var i = 0; i<length.ogrenciGrubu;i++){
//     console.log(ogrenciGrubu[i]);
// }

// console.log(ogrenciGrubu[0]);

// console.log(ogrenciGrubu.length);


*/

/* 
    1- Sipariş bilgilerini object içerisinde saklayınız.
    2- Her siparişin ayrı ayrı kdv dahil toplam ödenen ücretini hesaplayınız. (kdv: %18)
    3- Tüm siparişlerin kdv dahil toplam ödenen ücretini hesaplayınız.

    sipariş id: 101
    sipariş tarihi: 31.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 
        ürün id: 5
        ürün başlığı: IPhone 13 Pro
        ürün url: http://abc.com/iphone-13-pro
        ürün fiyatı: 22000

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

    sipariş id: 102
    sipariş tarihi: 30.12.2022
    ödeme şekli: kredi kartı
    kargo adresi: Yahya kaptan mah. Kocaeli İzmit
    satın alınan ürünler: 

        ürün id: 6
        ürün başlığı: IPhone 13 Pro Max
        ürün url: http://abc.com/iphone-13-pro-max
        ürün fiyatı: 25000

    müşteri:
        müşteri id: 12
        
    satıcı:
        firma id: 34
        firma adı: Apple Türkiye

*/

// var siparis1 = {

//     "sipariş id": 101,
//     "sipariş tarihi": "31.12.2022",
//     "ödeme şekli": "kredi kartı",
//     "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
//     "satın alınan ürünler":[
//         {
//         "ürün id": 5,
//         "ürün başlığı": "IPhone 13 Pro",
//         "ürün url": "http://abc.com/iphone-13-pro",
//         "ürün fiyatı": 22000
//         },
//        { 
//         "ürün id": 6,
//         "ürün başlığı": "IPhone 13 Pro Max",
//         "ürün url": "http://abc.com/iphone-13-pro-max",
//         "ürün fiyatı": 25000
//         }
//     ],
//     "müşteri" : {
//         "müşteri id": 12
//     },
//     "satıcı" : {
//         "firma id": 34,
//         "firma adı": "Apple Türkiye"
//     }
// }

// var siparis2 = {

//     "sipariş id": 102,
//     "sipariş tarihi": "30.12.2022",
//     "ödeme şekli": "kredi kartı",
//     "kargo adresi": "Yahya kaptan mah. Kocaeli İzmit",
//     "satın alınan ürünler":[
//         {
//         "ürün id": 6,
//         "ürün başlığı": "IPhone 13 Pro Max",
//         "ürün url": "http://abc.com/iphone-13-pro-max",
//         "ürün fiyatı": 25000,
//         }
//     ],
//     "müşteri":{
//         "müşteri id": 12,
//     },
//     "satıcı":{
//         "firma id": 34,
//         "firma adı": "Apple Türkiye",
//     }
// }
var siparis1={
    "siparisId":101,
    "siparisTarihi":"31.12.2022",
    "odemeSekli":"kredi kartı",
    "kargoAdresi":"Yahya kaptan mah. Kocaeli İzmit",
    "satinAlinanUrunler":[
        {
            "urunId":5,
            "urunBasligi":"Ipohone 13 Pro",
            "urunUrl":"http://asdlkakjsd",
            "urunFiyati":22000},
        
           { "urunId":6,
            "urunBasligi":"Ipohone 13 Pro MAX",
            "urunUrl":"http://asdlkakjsd",
            "urunFiyati":25000
        }]
    ,
    "musteri":{"musteriId":12},
    "satici":{
        "firmaId":34,
        "firmaAdi":"Apple Türkiye"}

};

var siparis2={
    "siparisId":102,
    "siparisTarihi":"30.12.2022",
    "odemeSekli":"kredi kartı",
    "kargoAdresi":"Yahya kaptan mah. Kocaeli İzmit",
    "satinAlinanUrunler":
    [{
        "urunId":6,
        "urunBasligi":"IPhone 13 Pro Max",
        "urunUrl":"http:/sadadasd",
        "urunFiyati":25000
    }],
    "musteri":{
        "musteriId":12
    },
    "saticiFirma":{
        "firmaId":34,
        "firmaAdi":"Apple Türkiye"
    }

};
var tumSiparis = [siparis1,siparis2];

localStorage.setItem("SIPARISLER",JSON.stringify(tumSiparis));


// var toplamSiparisSatisi1 = toplamSiparisSatisi1 = (parseInt(siparis1["satın alınan ürünler"][0]["ürün fiyatı"])+ parseInt(siparis1["satın alınan ürünler"][1]["ürün fiyatı"]))*1.18;
// console.log("1. Siparişteki toplam satış tutarı KDV dahil : " + toplamSiparisSatisi1);


// var toplamSiparisSatisi2 = parseInt(siparis2["satın alınan ürünler"][0]["ürün fiyatı"])*1.18;
// console.log("2. Siparişteki toplam satış tutarı KDV dahil : " + toplamSiparisSatisi2);


// console.log("Tüm siparişlerdeki toplam satış tutarı KDV dahil : " + parseInt(toplamSiparisSatisi1+toplamSiparisSatisi2));


// toplamSiparis1 = (siparis1.satinAlinanUrunler[0].urunFiyati  + siparis1.satinAlinanUrunler[1].urunFiyati)*1.18;
//  console.log("1. Siparişteki toplam satış tutarı KDV dahil : " + toplamSiparis1);

//  toplamSiparis2 = (siparis2.satinAlinanUrunler.urunFiyati)*1.18;
// console.log("2. Siparişteki toplam satış tutarı KDV dahil : " + toplamSiparis2);


//  console.log("Tüm siparişlerdeki toplam satış tutarı KDV dahil : " + parseInt(toplamSiparis1+toplamSiparis2));


var toplam = 0;
for(var siparis of tumSiparis){
    for (satinAlinanUrun of siparis.satinAlinanUrunler){
        toplam+=satinAlinanUrun.urunFiyati;
    }
}
document.write(toplam);


