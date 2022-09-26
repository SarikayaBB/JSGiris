//var maksimumUzunluk = 160;
//var metin = prompt("Bir metin giriniz");
//var metinUzunlugu = metin.length;
//var kalanKarakter = maksimumUzunluk - metinUzunlugu;

//alert("Kalan hakkınız : " + kalanKarakter);


//Kullanıcının girdiği kelimenin son harfini ekrana yazdıralım.

//var kelime=prompt("Bir kelime giriniz");
//kelime[kelime.length-1]
//alert(kelime.slice(kelime.length-1,kelime.length));

/*var mesaj="emre";
mesaj = mesaj.toUpperCase();
mesaj=mesaj.toLowerCase();

alert(mesaj);*/

//Kullanıcıya ad ve soyadını ayrı ayrı girdirelim.
//Kullanıcı veriyi nasıl girerse girsin, ad ve soyadın baş harfleri sadece büyük olacak şekilde, ekrana "Hoşgeldiniz Emre Özçelikel" tarzında alert ile yazdırsın.

var adLower=prompt("Adınızı giriniz").toLowerCase();
var soyadLower=prompt("Soyadınızı giriniz").toLowerCase();

var adBasHarf=adLower.slice(0,1).toUpperCase();//ad'ın başharfini UpperCase aldık
var soyadBasHarf=soyadLower.slice(0,1).toUpperCase();//Soyad'ın başharfini UpperCase olarak aldık.

adLower=adLower.slice(1,adLower.length);
soyadLower=soyadLower.slice(1,soyadLower.length);

var ad = adBasHarf+adLower;
var soyad = soyadBasHarf+soyadLower;



alert("hoşgeldiniz "+ad + " " + soyad);


