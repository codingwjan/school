function selectState() {
    var endState = document.getElementById('targetUnitID').value
    var selState = document.getElementById('sourceUnitID').value
    var inputID = document.getElementById("inputID").value
    
    if (selState == "m" && endState == "cm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 100
    }
    else if (selState == "m" && endState == "mm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000
    }
    else if (selState == "m" && endState == "km") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "m" && endState == "pm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000000
    }
    else if (selState == "m" && endState == "nm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000
    }
    else if (selState == "m" && endState == "um") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000
    }
    else if (selState == "m" && endState == "dm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 10
    }
    else if (selState == "m" && endState == "mi") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1609.344
    }
    else if (selState == "m" && endState == "yd") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1.0936133
    }
    else if (selState == "m" && endState == "ft") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 3.2808399
    }
    else if (selState == "m" && endState == "in") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 39.3700787
    }
    else if (selState == "cm" && endState == "m") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 100
    }
    else if (selState == "cm" && endState == "mm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 10
    }
    else if (selState == "cm" && endState == "km") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 100000
    }
    else if (selState == "cm" && endState == "pm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 10000000000
    }
    else if (selState == "cm" && endState == "nm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 10000000
    }
    else if (selState == "cm" && endState == "um") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 10000
    }
    else if (selState == "cm" && endState == "dm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 10
    }
    else if (selState == "cm" && endState == "mi") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 160934.4
    }
    else if (selState == "cm" && endState == "yd") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 91.44
    }
    else if (selState == "cm" && endState == "ft") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 30.48
    }
    else if (selState == "cm" && endState == "in") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 2.54
    }
    else if (selState == "mm" && endState == "m") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "mm" && endState == "cm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 10
    }
    else if (selState == "mm" && endState == "km") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000
    }
    else if (selState == "mm" && endState == "pm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000
    }
    else if (selState == "mm" && endState == "nm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000
    }
    else if (selState == "mm" && endState == "um") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000
    }
    else if (selState == "mm" && endState == "dm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 100
    }
    else if (selState == "mm" && endState == "mi") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1609000
    }
    else if (selState == "mm" && endState == "yd") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 914.4
    }
    else if (selState == "mm" && endState == "ft") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 304.8
    }
    else if (selState == "mm" && endState == "in") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 25.4
    }
    else if (selState == "km" && endState == "m") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000
    }
    else if (selState == "km" && endState == "cm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 100000
    }
    else if (selState == "km" && endState == "mm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000
    }
    else if (selState == "km" && endState == "pm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000000000
    }
    else if (selState == "km" && endState == "nm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000000
    }
    else if (selState == "km" && endState == "um") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000
    }
    else if (selState == "km" && endState == "dm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 100000
    }
    else if (selState == "km" && endState == "mi") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1.609344
    }
    else if (selState == "km" && endState == "yd") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1093.6133
    }
    else if (selState == "km" && endState == "ft") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 3280.8399
    }
    else if (selState == "km" && endState == "in") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 39370.0787
    }
    else if (selState == "pm" && endState == "m") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000000000
    }
    else if (selState == "pm" && endState == "cm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 10000000000
    }
    else if (selState == "pm" && endState == "mm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000000
    }
    else if (selState == "pm" && endState == "km") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000000000000
    }
    else if (selState == "pm" && endState == "nm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000000
    }
    else if (selState == "pm" && endState == "um") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000
    }
    else if (selState == "pm" && endState == "dm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 100000000000
    }
    else if (selState == "pm" && endState == "mi") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1609000000000000
    }
    else if (selState == "pm" && endState == "yd") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 914400000000
    }
    else if (selState == "pm" && endState == "ft") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 304800000000
    }
    else if (selState == "pm" && endState == "in") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 25400000000
    }
    else if (selState == "nm" && endState == "m") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000000
    }
    else if (selState == "nm" && endState == "cm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 10000000
    }
    else if (selState == "nm" && endState == "mm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000
    }
    else if (selState == "nm" && endState == "km") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000000000000
    }
    else if (selState == "nm" && endState == "pm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1000000000
    }
    else if (selState == "nm" && endState == "um") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "nm" && endState == "dm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 100000000
    }
    else if (selState == "nm" && endState == "mi") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1609000000000
    }
    else if (selState == "nm" && endState == "yd") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 914400000
    }
    else if (selState == "nm" && endState == "ft") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 304800000
    }
    else if (selState == "nm" && endState == "in") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 25400000
    }
        
    else if (selState == "mm" && endState == "cm") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 10
    }
    else {
        alert("you cant convert into the same unit")
    }

        outputID = ("result: " + outputID + " " + endState)
        document.getElementById('resultID').innerHTML = outputID
    }