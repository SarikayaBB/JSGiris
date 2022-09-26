function calculate() {
    var process = document.getElementById("ddlProcess").value;

    var number1 = parseInt(document.getElementById("txtFirstNumber").value);
    var number2 = parseInt(document.getElementById("txtSecondNumber").value);

    //    console.log(process);
    //    console.log(typeof(process));
    var resultText = document.getElementById("txtResult");



    if (process == "*") {
        resultText.value = number1 * number2;
    }
    else if (process == "/") {
        resultText.value = number1 / number2;
    }
    else if (process == "+") {
        resultText.value = number1 + number2;
    }
    else if (process == "-") {
        resultText.value = number1 - number2;

    }
    else {
        alert("adam gibi bir işlem giriniz :D");
    }

}


