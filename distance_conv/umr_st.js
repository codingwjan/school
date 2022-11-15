function selectState() {
    var endState = document.getElementById('targetUnitID').value
    var selState = document.getElementById('sourceUnitID').value
    var inputID = document.getElementById("inputID").value

    
    if (selState == endState) {
        alert("you cant convert the same unit")
        return
    }

    else if (selState == "b" && endState == "kb") {
        var result = inputID * 1024
        document.getElementById("outputID").value = result
    }
    else if (selState == "b" && endState == "mb") {
        var result = inputID * 1048576
        document.getElementById("outputID").value = result
    }
    else if (selState == "b" && endState == "gb") {
        var result = inputID * 1073741824
        document.getElementById("outputID").value = result
    }

    else if (selState == "kb" && endState == "b") {
        var result = inputID / 1024
        document.getElementById("outputID").value = result
    }   
    else if (selState == "kb" && endState == "mb") {
        var result = inputID * 1024
        document.getElementById("outputID").value = result
    }
    else if (selState == "kb" && endState == "gb") {
        var result = inputID * 1048576
        document.getElementById("outputID").value = result
    }



    

    
}
    

        outputID = ("result: " + outputID + " " + endState)
        document.getElementById('resultID').innerHTML = outputID;