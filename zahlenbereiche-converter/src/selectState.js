function convert(input, sourceUnit, targetUnit) {
    let result = "";
    let decimal = 0;
    let power = 0;
    for (let i = input.length - 1; i >= 0; i--) {
        let char = input.charAt(i);
        let digit;
        if (char >= '0' && char <= '9') {
            digit = char - '0';
        } else if (char >= 'A' && char <= 'F') {
            digit = char.charCodeAt(0) - 55;
        } else {
            return "Invalid input: Please use only numbers and letters A-F for base 16 input.";
        }
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
    var input = document.getElementById("inputID").value.toUpperCase();
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

    //if the sourceunit is not 16, and the input is a letter, then it is invalid
    if (sourceUnit !== '16' && input.toLowerCase().match(/[a-f]/i)) {
        document.getElementById("inputID").style.color = 'red';
        document.getElementById("convertButton").disabled = true;
        document.getElementById("convertButton").style.backgroundColor = "gray";
        document.getElementById("convertButton").style.cursor = "not-allowed";
        document.getElementById("resultID").innerHTML = "Please select a value";

    }

    else if (sourceUnit == '0' || targetUnit == '0') {
        document.getElementById("convertButton").disabled = true;
        document.getElementById("convertButton").style.backgroundColor = "gray";
        document.getElementById("convertButton").style.cursor = "not-allowed";
        document.getElementById("resultID").innerHTML = "Please select a value";
    } else if (sourceUnit == targetUnit) {
        document.getElementById("convertButton").disabled = true;
        document.getElementById("convertButton").style.backgroundColor = "gray";
        document.getElementById("convertButton").style.cursor = "not-allowed";
        document.getElementById("resultID").innerHTML = "Please select different values";
    } else if(!validateInput(input, sourceUnit)) {
        document.getElementById("convertButton").disabled = true;
        document.getElementById("convertButton").style.backgroundColor = "gray";
        document.getElementById("convertButton").style.cursor = "not-allowed";
    } else {
        document.getElementById("convertButton").disabled = false;
        document.getElementById("convertButton").style.backgroundColor = "#f9f871";
        document.getElementById("convertButton").style.cursor = "pointer";
        document.getElementById("resultID").innerHTML = "ready to convert ...";
        document.getElementById("inputID").style.color = 'black';
    }
}



function validateInput(input) {
    let valid = true;
    for (let i = 0; i < input.length; i++) {
        let char = input.charAt(i);
        if (!(char >= '0' && char <= '9') && !(char >= 'A' && char <= 'F')) {
            valid = false;
            break;
        }
    }
    if (!valid) {
        document.getElementById("resultID").innerHTML = "Invalid input: Please use only numbers and letters A-F for base 16 input.";
        return false;
    } else {
        return true;
    }
}


function selectState() {
    let input = document.getElementById("inputID").value.toUpperCase();
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