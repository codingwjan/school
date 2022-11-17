function selectState(state) {
    var endState = document.getElementById('targetUnitID').value
    var selState = document.getElementById('sourceUnitID').value
    var inputID = document.getElementById("inputID").value

    //if state source and target are the same print cant convert
    if (selState == "b" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "b" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "b" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "b" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "b" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1125899906842624
    }
    else if (selState == "b" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1152921504606846976
    }
    else if (selState == "b" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "b" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "b" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "b" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "b" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1125899906842624
    }
    else if (selState == "b" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1152921504606846976
    }

    else if (selState == "kb" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "kb" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "kb" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "kb" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "kb" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "kb" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1125899906842624
    }
    else if (selState == "kb" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "kb" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "kb" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "kb" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "kb" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "kb" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1125899906842624
    }

    else if (selState == "mb" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "mb" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "mb" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "mb" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "mb" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "mb" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "mb" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "mb" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 976
    }
    else if (selState == "mb" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "mb" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "mb" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "mb" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }

    else if (selState == "gb" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "gb" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "gb" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "gb" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "gb" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "gb" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "gb" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 976
    }
    else if (selState == "gb" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 953
    }
    else if (selState == "gb" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "gb" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "gb" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "gb" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }

    else if (selState == "tb" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "tb" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "tb" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "tb" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "tb" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "tb" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "tb" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 953
    }
    else if (selState == "tb" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 931
    }
    else if (selState == "tb" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 976
    }
    else if (selState == "tb" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "tb" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "tb" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }

    else if (selState == "pb" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1125899906842624
    }
    else if (selState == "pb" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "pb" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "pb" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "pb" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "pb" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "pb" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 931
    }
    else if (selState == "pb" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 909
    }
    else if (selState == "pb" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 953
    }
    else if (selState == "pb" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 976
    }
    else if (selState == "pb" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }
    else if (selState == "pb" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }

    else if (selState == "eb" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1152921504606846976
    }
    else if (selState == "eb" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1125899906842624
    }
    else if (selState == "eb" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "eb" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "eb" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "eb" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "eb" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 909
    }
    else if (selState == "eb" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 887
    }
    else if (selState == "eb" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 931
    }
    else if (selState == "eb" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 953
    }
    else if (selState == "eb" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 976
    }
    else if (selState == "eb" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1000
    }

    else if (selState == "mib" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "mib" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "mib" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID
    }
    else if (selState == "mib" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "mib" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "mib" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "mib" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "mib" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1.024
    }
    else if (selState == "mib" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "mib" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "mib" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "mib" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1125899906842624
    }

    else if (selState == "kib" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "kib" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID
    }
    else if (selState == "kib" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "kib" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "kib" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "kib" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    else if (selState == "kib" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1125899906842624
    }
    else if (selState == "kib" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1.024
    }
    else if (selState == "kib" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "kib" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "kib" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "kib" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1099511627776
    }
    
    else if (selState == "gib" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "gib" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "gib" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "gib" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID
    }
    else if (selState == "gib" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "gib" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "gib" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    else if (selState == "gib" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "gib" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "gib" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "gib" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "gib" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1073741824
    }
    
    else if (selState == "tib" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "tib" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "tib" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "tib" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "tib" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID
    }
    else if (selState == "tib" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "tib" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    else if (selState == "tib" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "tib" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "tib" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "tib" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "tib" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1048576
    }
    
    else if (selState == "pib" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1125899906842624
    }
    else if (selState == "pib" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "pib" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "pib" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "pib" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "pib" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID
    }
    else if (selState == "pib" && endState == "eb") {   
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }
    else if (selState == "pib" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "pib" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "pib" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "pib" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "pib" && endState == "eib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID / 1024
    }

    else if (selState == "eib" && endState == "b") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1152921504606846976
    }
    else if (selState == "eib" && endState == "kb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1125899906842624
    }
    else if (selState == "eib" && endState == "mb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "eib" && endState == "gb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "eib" && endState == "tb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "eib" && endState == "pb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else if (selState == "eib" && endState == "eb") {
        var outputID = document.getElementById('resultID').innerHTML = inputID
    }
    else if (selState == "eib" && endState == "mib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1125899906842624
    }
    else if (selState == "eib" && endState == "kib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1099511627776
    }
    else if (selState == "eib" && endState == "gib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1073741824
    }
    else if (selState == "eib" && endState == "tib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1048576
    }
    else if (selState == "eib" && endState == "pib") {
        var outputID = document.getElementById('resultID').innerHTML = inputID * 1024
    }
    else {
        alert("you cant convert into the same unit")
    }


}