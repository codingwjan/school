function convert(input, sourceUnit, targetUnit) {
    let result = "";
    let decimal = 0;
    let power = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        let char = input.charAt(i);
        let digit = char.charCodeAt(0) <= 57 ? char - '0' : char.toUpperCase().charCodeAt(0) - 55;
        decimal += digit * Math.pow(sourceUnit, power);
        power++;
    }
    while (decimal > 0) {
        let remainder = decimal % targetUnit;
        result = (remainder > 9 ? String.fromCharCode(remainder + 55) : remainder) + result;
        decimal = Math.floor(decimal / targetUnit);
    }
    return result;
}



function buttonCheck(){
    var sourceUnit = document.getElementById("selectID").value;
    var targetUnit = document.getElementById("selectID2").value;
    console.log(sourceUnit)
    console.log(targetUnit)
    if (sourceUnit !== '0') {
        document.getElementById("selectID").style.color = 'black';
    } else if (sourceUnit === '0') {
        document.getElementById("selectID").style.color = 'gray';
    }

    if (targetUnit !== '0') {
        document.getElementById("selectID2").style.color = 'black';
    } else if (targetUnit === '0') {
        document.getElementById("selectID2").style.color = 'gray';
    }

    if (sourceUnit == '0' || targetUnit == '0') {
        document.getElementById("convertButton").disabled = true;
        document.getElementById("convertButton").style.backgroundColor = "gray";
        document.getElementById("convertButton").style.cursor = "not-allowed";
        document.getElementById("resultID").innerHTML = "Please select a value";
    } else if (sourceUnit == targetUnit) {
        document.getElementById("convertButton").disabled = true;
        document.getElementById("convertButton").style.backgroundColor = "gray";
        document.getElementById("convertButton").style.cursor = "not-allowed";
        document.getElementById("resultID").innerHTML = "Please select different values";
    } else {
        document.getElementById("convertButton").disabled = false;
        document.getElementById("convertButton").style.backgroundColor = "#f9f871";
        document.getElementById("convertButton").style.cursor = "pointer";
        document.getElementById("resultID").innerHTML = "ready to convert ...";
    }
}

function validateInput(input) {
    if (isNaN(input)) {
        document.getElementById("resultID").innerHTML = "Please enter a value";
        return false;
    } else if (isNaN(input)) {
        document.getElementById("resultID").innerHTML = "Please enter a number";
        return false;
    } else {
        return true;
    }
}

function selectState() {
    console.log("something")
    let input = document.getElementById("inputID").value;
    console.log(input);
    if(!validateInput(input)){
        document.getElementById("resultID").innerHTML = "Invalid input";
        return;
    }
    let sourceUnit = document.getElementById("selectID").value;
    console.log(sourceUnit);
    let targetUnit = document.getElementById("selectID2").value;
    console.log(targetUnit);
    document.getElementById("resultID").innerHTML = convert(input, sourceUnit, targetUnit);
}