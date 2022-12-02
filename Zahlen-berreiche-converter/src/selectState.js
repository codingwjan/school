function selectState() {
    var endState = document.getElementById('targetUnitID').value
    var selState = document.getElementById('sourceUnitID').value
    var inputID = document.getElementById("inputID").value

    if (selState == "bin" && endState == "dec") {
        document.getElementById("resultID").innerHTML = binToDec(inputID)
    }else if (selState == "bin" && endState == "hex") {
        document.getElementById("resultID").innerHTML = binToHex(inputID)
    }else if (selState == "dec" && endState == "bin") {
        document.getElementById("resultID").innerHTML = decToBin(inputID)
    }else if (selState == "dec" && endState == "hex") {
        document.getElementById("resultID").innerHTML = decToHex(inputID)
    }else if (selState == "hex" && endState == "bin") {
        document.getElementById("resultID").innerHTML = hexToBin(inputID)
    }else if (selState == "hex" && endState == "dec") {
        document.getElementById("resultID").innerHTML = hexToDec(inputID)
    }else if (selState == "hex" && endState == "oct") {
        document.getElementById("resultID").innerHTML = hexToOct(inputID)
    }else if (selState == "oct" && endState == "hex") {
        document.getElementById("resultID").innerHTML = octToHex(inputID)
    }else if (selState == "oct" && endState == "dec") {
        document.getElementById("resultID").innerHTML = octToDec(inputID)
    }else if (selState == "dec" && endState == "oct") {
        document.getElementById("resultID").innerHTML = decToOct(inputID)
    }else if (selState == "bin" && endState == "oct") {
        document.getElementById("resultID").innerHTML = binToOct(inputID)
    }else if (selState == "oct" && endState == "bin") {
        document.getElementById("resultID").innerHTML = octToBin(inputID)
    }else{
        alert("Please select a different unit")
    }
}

function binToDec(bin) {
    //check if the input is a binary number
    if (bin.match(/^[0-1]+$/)) {
        var dec = 0
        for (var i = 0; i < bin.length; i++) {
            dec += bin[i] * Math.pow(2, bin.length - i - 1)
        }
        return dec
    } else {
        alert("Please enter a valid binary number")
    }
}

function decToBin(dec) {
    var bin = ""
    while (dec > 0) {
        bin = dec % 2 + bin
        dec = Math.floor(dec / 2)
    }
    return bin
}

function decToHex(dec) {
    //if dec is between 16 and 21 dont replace with letters
    if (dec >= 16 && dec <= 21) {
        var hex = ""
        while (dec > 0) {
            hex = dec % 16 + hex
            dec = Math.floor(dec / 16)
        }
        return hex
    }else {
        var hex = ""
        while (dec > 0) {
            hex = dec % 16 + hex
            dec = Math.floor(dec / 16)
            hex = hex.replace(/10/g, "A")
            hex = hex.replace(/11/g, "B")
            hex = hex.replace(/12/g, "C")
            hex = hex.replace(/13/g, "D")
            hex = hex.replace(/14/g, "E")
            hex = hex.replace(/15/g, "F")
        }
        return hex
    }

}

function hexToDec(hex) {
    var dec = 0
    for (var i = 0; i < hex.length; i++) {
        dec += hex[i] * Math.pow(16, hex.length - i - 1)
    }
    return dec
}

function binToHex(bin) {
    //check if the input is a binary number
    if (bin.match(/^[0-1]+$/)) {
        var dec = binToDec(bin)
        //if dec is between 16 and 21 dont replace with letters
        if (dec >= 16 && dec <= 21) {
            var hex = decToHex(dec)
            return hex
        }else {
            var hex = ""
            while (dec > 0) {
                hex = dec % 16 + hex
                dec = Math.floor(dec / 16)
                hex = hex.replace(/10/g, "A")
                hex = hex.replace(/11/g, "B")
                hex = hex.replace(/12/g, "C")
                hex = hex.replace(/13/g, "D")
                hex = hex.replace(/14/g, "E")
                hex = hex.replace(/15/g, "F")
            }
            return hex
        }
    }else {
        alert("Please enter a valid binary number")
    }
}

function hexToBin(hex) {
    var dec = hexToDec(hex)
    var bin = decToBin(dec)
    return bin
}

function decToOct(dec) {
    var oct = ""
    while (dec > 0) {
        oct = dec % 8 + oct
        dec = Math.floor(dec / 8)
    }
    return oct
}

function octToDec(oct) {
    var dec = 0
    for (var i = 0; i < oct.length; i++) {
        dec += oct[i] * Math.pow(8, oct.length - i - 1)
    }
    return dec
}

function binToOct(bin) {
    //check if the input is a binary number
    if (bin.match(/^[0-1]+$/)) {
        var dec = binToDec(bin)
        var oct = decToOct(dec)
        return oct
    }else {
        alert("Please enter a valid binary number")
    }
}

function octToBin(oct) {
    var dec = octToDec(oct)
    var bin = decToBin(dec)
    return bin
}

function hexToOct(hex) {
    var dec = hexToDec(hex)
    var oct = decToOct(dec)
    return oct
}

function octToHex(oct) {
    var dec = octToDec(oct)
    console.log(dec)
    //if dec is between 16 and 21 dont replace with letters
    if (dec >= 16 && dec <= 21) {
        var hex = decToHex(dec)
        return hex
    }else {
        var hex = ""
        while (dec > 0) {
            hex = dec % 16 + hex
            dec = Math.floor(dec / 16)
            hex = hex.replace(/10/g, "A")
            hex = hex.replace(/11/g, "B")
            hex = hex.replace(/12/g, "C")
            hex = hex.replace(/13/g, "D")
            hex = hex.replace(/14/g, "E")
            hex = hex.replace(/15/g, "F")
        }
        return hex
    }
}