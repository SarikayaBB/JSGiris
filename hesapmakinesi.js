


function returnValue(theElement){
 var screen = document.getElementById("OutputOfOperation");

  if (theElement.id == "clearBTN"){
       screen.value = "";
    }
 
if (theElement.id != "clearBTN" && theElement.id != "equalBTN"){
    ekran.value += theElement.innerText;
}

   if (theElement.id != "equalBTN"){
 screen.value += theElement.innerText;
   }
   


}
