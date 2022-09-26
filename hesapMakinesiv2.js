function sendValue(tiklananElement)
{
    var ekran = document.getElementById("txtScreen");
    if(tiklananElement.id=="btnC")
      ekran.value="";

   

    if(tiklananElement.id!="btnC" && tiklananElement.id!="btnEsittir")
    ekran.value+=tiklananElement.innerText;

    if(tiklananElement.id=="btnEsittir")
    {
        if(ekran.value.includes("+"))
        {
            console.log(typeof(ekran.value));
         topla(ekran.value.split("+")[0],   ekran.value.split("+")[1]);

        }
         if(ekran.value.includes("-"))
        {
            console.log(typeof(ekran.value));
         cikart(ekran.value.split("-")[0],   ekran.value.split("-")[1]);

        }
         if(ekran.value.includes("*"))
        {
            console.log(typeof(ekran.value));
         carpma(ekran.value.split("*")[0],   ekran.value.split("*")[1]);

        }
          if(ekran.value.includes("/"))
        {
            console.log(typeof(ekran.value));
         bolme(ekran.value.split("/")[0],   ekran.value.split("/")[1]);

        }
    }

   
}

function topla(a,b)
{
    var sayi1=parseInt(a);
    var sayi2=parseInt(b);

    document.getElementById("txtScreen").value=sayi1+sayi2;

}

function cikart(a,b)
{
    var sayi1=parseInt(a);
    var sayi2=parseInt(b);

    document.getElementById("txtScreen").value=sayi1-sayi2;

}

function carpma(a,b)
{
    var sayi1=parseInt(a);
    var sayi2=parseInt(b);

    document.getElementById("txtScreen").value=sayi1*sayi2;

}

function bolme(a,b)
{
    var sayi1=parseInt(a);
    var sayi2=parseInt(b);

    document.getElementById("txtScreen").value=sayi1/sayi2;

}