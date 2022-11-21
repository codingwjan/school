function convert(){
    let input=document.getElementById('inputID').value;
    let sourceUnit=document.getElementById('sourceUnitID').value;
    let targetUnit=document.getElementById('targetUnitID').value;
    let converted;

    //Byte umrechnen
    if(sourceUnit === "Byte" && targetUnit === "Bit"){
        converted = input * 8;
    }
    if(sourceUnit === "Bit" && targetUnit === "Byte"){
        converted = input / 8;
    }
    if(sourceUnit === "Byte" && targetUnit === "KB"){
        converted = input / 1000;
    }
    if(sourceUnit === "KB" && targetUnit === "Byte"){
        converted = input * 1000;
    }
    if(sourceUnit === "Byte" && targetUnit === "KiB"){
        converted = input / 1024;
    }
    if(sourceUnit === "KiB" && targetUnit === "Byte"){
        converted = input * 1024;
    }
    if(sourceUnit === "Byte" && targetUnit === "MB"){
        converted = input / 1e+6;
    }
    if(sourceUnit === "MB" && targetUnit === "Byte"){
        converted = input * 1e+6;
    }
    if(sourceUnit === "Byte" && targetUnit === "MiB"){
        converted = input / 1.049e+6;
    }
    if(sourceUnit === "MiB" && targetUnit === "Byte"){
        converted = input * 1.049e+6;
    }
    if(sourceUnit === "Byte" && targetUnit === "GB"){
        converted = input / 1e+9;
    }
    if(sourceUnit === "GB" && targetUnit === "Byte"){
        converted = input * 1e+9;
    }
    if(sourceUnit === "Byte" && targetUnit === "GiB"){
        converted = input / 1.074e+9;
    }
    if(sourceUnit === "GiB" && targetUnit === "Byte"){
        converted = input * 1.074e+9;
    }
    if(sourceUnit === "Byte" && targetUnit === "TB"){
        converted = input / 1e+12;
    }
    if(sourceUnit === "TB" && targetUnit === "Byte"){
        converted = input * 1e+12;
    }
    if(sourceUnit === "Byte" && targetUnit === "TiB"){
        converted = input / 1.1e+12;
    }
    if(sourceUnit === "TiB" && targetUnit === "Byte"){
        converted = input * 1.1e+12;
    }

    //more added
    if(sourceUnit === "Byte" && targetUnit === "Kbit"){
        converted = input / 125;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Byte"){
        converted = input * 125;
    }
    if(sourceUnit === "Byte" && targetUnit === "Kibit"){
        converted = input / 128;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Byte"){
        converted = input * 128;
    }
    if(sourceUnit === "Byte" && targetUnit === "Mbit"){
        converted = input / 125000;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Byte"){
        converted = input * 125000;
    }
    if(sourceUnit === "Byte" && targetUnit === "Mibit"){
        converted = input / 131100;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Byte"){
        converted = input * 131100;
    }
    if(sourceUnit === "Byte" && targetUnit === "Gbit"){
        converted = input / 1.25e+8;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Byte"){
        converted = input * 1.25e+8;
    }
    if(sourceUnit === "Byte" && targetUnit === "Gibit"){
        converted = input / 1.342e+8;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Byte"){
        converted = input * 1.342e+8;
    }
    if(sourceUnit === "Byte" && targetUnit === "Tbit"){
        converted = input / 1.25e+11;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Byte"){
        converted = input * 1.25e+11;
    }
    if(sourceUnit === "Byte" && targetUnit === "Tibit"){
        converted = input / 1.374e+11;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Byte"){
        converted = input * 1.374e+11;
    }

    //Bit umrechnen
    if(sourceUnit === "Bit" && targetUnit === "KB"){
        converted = input / 8000;
    }
    if(sourceUnit === "KB" && targetUnit === "Bit"){
        converted = input * 8000;
    }
    if(sourceUnit === "Bit" && targetUnit === "KiB"){
        converted = input / 8192;
    }
    if(sourceUnit === "KiB" && targetUnit === "Bit"){
        converted = input * 8192;
    }
    if(sourceUnit === "Bit" && targetUnit === "MB"){
        converted = input / 8e+6;
    }
    if(sourceUnit === "MB" && targetUnit === "Bit"){
        converted = input * 8e+6;
    }
    if(sourceUnit === "Bit" && targetUnit === "MiB"){
        converted = input / 8.389e+6;
    }
    if(sourceUnit === "MiB" && targetUnit === "Bit"){
        converted = input * 8.389e+6;
    }
    if(sourceUnit === "Bit" && targetUnit === "GB"){
        converted = input / 8e+9;
    }
    if(sourceUnit === "GB" && targetUnit === "Bit"){
        converted = input * 8e+9;
    }
    if(sourceUnit === "Bit" && targetUnit === "GiB"){
        converted = input / 8.59e+9;
    }
    if(sourceUnit === "GiB" && targetUnit === "Bit"){
        converted = input * 8.59e+9;
    }
    if(sourceUnit === "Bit" && targetUnit === "TB"){
        converted = input / 8e+12;
    }
    if(sourceUnit === "TB" && targetUnit === "Bit"){
        converted = input * 8e+12;
    }
    if(sourceUnit === "Bit" && targetUnit === "TiB"){
        converted = input / 8.796e+12;
    }
    if(sourceUnit === "TiB" && targetUnit === "Bit"){
        converted = input * 8.796e+12;
    }

    //more added
    if(sourceUnit === "Bit" && targetUnit === "Kbit"){
        converted = input / 1000;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Bit"){
        converted = input * 1000;
    }
    if(sourceUnit === "Bit" && targetUnit === "Kibit"){
        converted = input / 1024;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Bit"){
        converted = input * 1024;
    }
    if(sourceUnit === "Bit" && targetUnit === "Mbit"){
        converted = input / 1e+6;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Bit"){
        converted = input * 1e+6;
    }
    if(sourceUnit === "Bit" && targetUnit === "Mibit"){
        converted = input / 1.049e+6;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Bit"){
        converted = input * 1.049e+6;
    }
    if(sourceUnit === "Bit" && targetUnit === "Gbit"){
        converted = input / 1e+9;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Bit"){
        converted = input * 1e+9;
    }
    if(sourceUnit === "Bit" && targetUnit === "Gibit"){
        converted = input / 1.074e+9;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Bit"){
        converted = input * 1.074e+9;
    }
    if(sourceUnit === "Bit" && targetUnit === "Tbit"){
        converted = input / 1e+12;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Bit"){
        converted = input * 1e+12;
    }
    if(sourceUnit === "Bit" && targetUnit === "Tibit"){
        converted = input / 1.1e+12;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Bit"){
        converted = input * 1.1e+12;
    }

    //KB umrechnen
    if(sourceUnit === "KB" && targetUnit === "KiB"){
        converted = input / 1,024;
    }
    if(sourceUnit === "KiB" && targetUnit === "KB"){
        converted = input * 1,024;
    }
    if(sourceUnit === "KB" && targetUnit === "MB"){
        converted = input / 1000;
    }
    if(sourceUnit === "MB" && targetUnit === "KB"){
        converted = input * 1000;
    }
    if(sourceUnit === "KB" && targetUnit === "MiB"){
        converted = input / 1049;
    }
    if(sourceUnit === "MiB" && targetUnit === "KB"){
        converted = input * 1049;
    }
    if(sourceUnit === "KB" && targetUnit === "GB"){
        converted = input / 1e+6;
    }
    if(sourceUnit === "GB" && targetUnit === "KB"){
        converted = input * 1e+6;
    }
    if(sourceUnit === "KB" && targetUnit === "GiB"){
        converted = input / 1.074e+6;
    }
    if(sourceUnit === "GiB" && targetUnit === "KB"){
        converted = input * 1.074e+6;
    }
    if(sourceUnit === "KB" && targetUnit === "TB"){
        converted = input / 1e+9;
    }
    if(sourceUnit === "TB" && targetUnit === "KB"){
        converted = input * 1e+9;
    }
    if(sourceUnit === "KB" && targetUnit === "TiB"){
        converted = input / 1.1e+9;
    }
    if(sourceUnit === "TiB" && targetUnit === "KB"){
        converted = input * 1.1e+9;
    }

    //more added
    if(sourceUnit === "KB" && targetUnit === "Kbit"){
        converted = input * 8;
    }
    if(sourceUnit === "Kbit" && targetUnit === "KB"){
        converted = input / 8;
    }
    if(sourceUnit === "KB" && targetUnit === "Kibit"){
        converted = input * 7.812;
    }
    if(sourceUnit === "Kibit" && targetUnit === "KB"){
        converted = input / 7.812;
    }
    if(sourceUnit === "KB" && targetUnit === "Mbit"){
        converted = input / 125;
    }
    if(sourceUnit === "Mbit" && targetUnit === "KB"){
        converted = input * 125;
    }
    if(sourceUnit === "KB" && targetUnit === "Mibit"){
        converted = input / 131.1;
    }
    if(sourceUnit === "Mibit" && targetUnit === "KB"){
        converted = input * 131.1;
    }
    if(sourceUnit === "KB" && targetUnit === "Gbit"){
        converted = input / 125000;
    }
    if(sourceUnit === "Gbit" && targetUnit === "KB"){
        converted = input * 125000;
    }
    if(sourceUnit === "KB" && targetUnit === "Gibit"){
        converted = input / 134200;
    }
    if(sourceUnit === "Gibit" && targetUnit === "KB"){
        converted = input * 134200;
    }
    if(sourceUnit === "KB" && targetUnit === "Tbit"){
        converted = input / 1.25e+8;
    }
    if(sourceUnit === "Tbit" && targetUnit === "KB"){
        converted = input * 1.25e+8;
    }
    if(sourceUnit === "KB" && targetUnit === "Tibit"){
        converted = input / 1.374e+8;
    }
    if(sourceUnit === "Tibit" && targetUnit === "KB"){
        converted = input * 1.374e+8;
    }


    //KiB umrechnen
    if(sourceUnit === "KiB" && targetUnit === "MB"){
        converted = input /  976,6;
    }
    if(sourceUnit === "MB" && targetUnit === "KiB"){
        converted = input *  976,6;
    }
    if(sourceUnit === "KiB" && targetUnit === "MiB"){
        converted = input / 1024;
    }
    if(sourceUnit === "MiB" && targetUnit === "KiB"){
        converted = input * 1024;
    }
    if(sourceUnit === "KiB" && targetUnit === "GB"){
        converted = input / 976600;
    }
    if(sourceUnit === "GB" && targetUnit === "KiB"){
        converted = input * 976600;
    }
    if(sourceUnit === "KiB" && targetUnit === "GiB"){
        converted = input / 1.049e+6;
    }
    if(sourceUnit === "GiB" && targetUnit === "KiB"){
        converted = input * 1.049e+6;
    }
    if(sourceUnit === "KiB" && targetUnit === "TB"){
        converted = input / 9.766e+8;
    }
    if(sourceUnit === "TB" && targetUnit === "KiB"){
        converted = input * 9.766e+8;
    }
    if(sourceUnit === "KiB" && targetUnit === "TiB"){
        converted = input / 1.074e+9;
    }
    if(sourceUnit === "TiB" && targetUnit === "KiB"){
        converted = input * 1.074e+9;
    }

    //more added
    if(sourceUnit === "KiB" && targetUnit === "Kbit"){
        converted = input * 8.192;
    }
    if(sourceUnit === "Kbit" && targetUnit === "KiB"){
        converted = input / 8.192;
    }
    if(sourceUnit === "KiB" && targetUnit === "Kibit"){
        converted = input * 8;
    }
    if(sourceUnit === "Kibit" && targetUnit === "KiB"){
        converted = input / 8;
    }
    if(sourceUnit === "KiB" && targetUnit === "Mbit"){
        converted = input / 122.1;
    }
    if(sourceUnit === "Mbit" && targetUnit === "KiB"){
        converted = input * 122.1;
    }
    if(sourceUnit === "KiB" && targetUnit === "Mibit"){
        converted = input / 128;
    }
    if(sourceUnit === "Mibit" && targetUnit === "KiB"){
        converted = input * 128;
    }
    if(sourceUnit === "KiB" && targetUnit === "Gbit"){
        converted = input / 122100;
    }
    if(sourceUnit === "Gbit" && targetUnit === "KiB"){
        converted = input * 122100;
    }
    if(sourceUnit === "KiB" && targetUnit === "Gibit"){
        converted = input / 131100;
    }
    if(sourceUnit === "Gibit" && targetUnit === "KiB"){
        converted = input * 131100;
    }
    if(sourceUnit === "KiB" && targetUnit === "Tbit"){
        converted = input / 1.221e+8;
    }
    if(sourceUnit === "Tbit" && targetUnit === "KiB"){
        converted = input * 1.221e+8;
    }
    if(sourceUnit === "KiB" && targetUnit === "Tibit"){
        converted = input / 1.342e+8;
    }
    if(sourceUnit === "Tibit" && targetUnit === "KiB"){
        converted = input * 1.342e+8;
    }

    //MB umrechnen
    if(sourceUnit === "MB" && targetUnit === "MiB"){
        converted = input / 1.049;
    }
    if(sourceUnit === "MiB" && targetUnit === "MB"){
        converted = input * 1.049;
    }
    if(sourceUnit === "MB" && targetUnit === "GB"){
        converted = input / 1000;
    }
    if(sourceUnit === "GB" && targetUnit === "MB"){
        converted = input * 1000;
    }
    if(sourceUnit === "MB" && targetUnit === "GiB"){
        converted = input / 1074;
    }
    if(sourceUnit === "GiB" && targetUnit === "MB"){
        converted = input * 1074;
    }
    if(sourceUnit === "MB" && targetUnit === "TB"){
        converted = input / 1e+6;
    }
    if(sourceUnit === "TB" && targetUnit === "MB"){
        converted = input * 1e+6;
    }
    if(sourceUnit === "MB" && targetUnit === "TiB"){
        converted = input / 1.1e+6;
    }
    if(sourceUnit === "TiB" && targetUnit === "MB"){
        converted = input * 1.1e+6;
    }

    //more added
    if(sourceUnit === "MB" && targetUnit === "Kbit"){
        converted = input * 8000;
    }
    if(sourceUnit === "Kbit" && targetUnit === "MB"){
        converted = input / 8000;
    }
    if(sourceUnit === "MB" && targetUnit === "Kibit"){
        converted = input * 7813;
    }
    if(sourceUnit === "Kibit" && targetUnit === "MB"){
        converted = input / 7813;
    }
    if(sourceUnit === "MB" && targetUnit === "Mbit"){
        converted = input * 8;
    }
    if(sourceUnit === "Mbit" && targetUnit === "MB"){
        converted = input / 8;
    }
    if(sourceUnit === "MB" && targetUnit === "Mibit"){
        converted = input * 7.629;
    }
    if(sourceUnit === "Mibit" && targetUnit === "MB"){
        converted = input / 7.629;
    }
    if(sourceUnit === "MB" && targetUnit === "Gbit"){
        converted = input / 125;
    }
    if(sourceUnit === "Gbit" && targetUnit === "MB"){
        converted = input * 125;
    }
    if(sourceUnit === "MB" && targetUnit === "Gibit"){
        converted = input / 134.2;
    }
    if(sourceUnit === "Gibit" && targetUnit === "MB"){
        converted = input * 134.2;
    }
    if(sourceUnit === "MB" && targetUnit === "Tbit"){
        converted = input / 125000;
    }
    if(sourceUnit === "Tbit" && targetUnit === "MB"){
        converted = input * 125000;
    }
    if(sourceUnit === "MB" && targetUnit === "Tibit"){
        converted = input / 137400;
    }
    if(sourceUnit === "Tibit" && targetUnit === "MB"){
        converted = input * 137400;
    }

    //MiB umrechnen
    if(sourceUnit === "MiB" && targetUnit === "GB"){
        converted = input / 953,7;
    }
    if(sourceUnit === "GB" && targetUnit === "MiB"){
        converted = input * 953,7;
    }
    if(sourceUnit === "MiB" && targetUnit === "GiB"){
        converted = input / 1024;
    }
    if(sourceUnit === "GiB" && targetUnit === "MiB"){
        converted = input * 1024;
    }
    if(sourceUnit === "MiB" && targetUnit === "TB"){
        converted = input / 953700;
    }
    if(sourceUnit === "TB" && targetUnit === "MiB"){
        converted = input * 953700;
    }
    if(sourceUnit === "MiB" && targetUnit === "TiB"){
        converted = input / 1.049e+6;
    }
    if(sourceUnit === "TiB" && targetUnit === "MiB"){
        converted = input * 1.049e+6;
    }

    //more added
    if(sourceUnit === "MiB" && targetUnit === "Kbit"){
        converted = input * 8389;
    }
    if(sourceUnit === "Kbit" && targetUnit === "MiB"){
        converted = input / 8389;
    }
    if(sourceUnit === "MiB" && targetUnit === "Kibit"){
        converted = input * 8192;
    }
    if(sourceUnit === "Kibit" && targetUnit === "MiB"){
        converted = input / 8192;
    }
    if(sourceUnit === "MiB" && targetUnit === "Mbit"){
        converted = input * 8.389;
    }
    if(sourceUnit === "Mbit" && targetUnit === "MiB"){
        converted = input / 8.389;
    }
    if(sourceUnit === "MiB" && targetUnit === "Mibit"){
        converted = input * 8;
    }
    if(sourceUnit === "Mibit" && targetUnit === "MiB"){
        converted = input / 8;
    }
    if(sourceUnit === "MiB" && targetUnit === "Gbit"){
        converted = input / 119.2;
    }
    if(sourceUnit === "Gbit" && targetUnit === "MiB"){
        converted = input * 119.2;
    }
    if(sourceUnit === "MiB" && targetUnit === "Gibit"){
        converted = input / 128;
    }
    if(sourceUnit === "Gibit" && targetUnit === "MiB"){
        converted = input * 128;
    }
    if(sourceUnit === "MiB" && targetUnit === "Tbit"){
        converted = input / 119200;
    }
    if(sourceUnit === "Tbit" && targetUnit === "MiB"){
        converted = input * 119200;
    }
    if(sourceUnit === "MiB" && targetUnit === "Tibit"){
        converted = input / 131100;
    }
    if(sourceUnit === "Tibit" && targetUnit === "MiB"){
        converted = input * 131100;
    }

    //GB umrechnen
    if(sourceUnit === "GB" && targetUnit === "GiB"){
        converted = input / 1,074;
    }
    if(sourceUnit === "GiB" && targetUnit === "GB"){
        converted = input * 1,074;
    }
    if(sourceUnit === "GB" && targetUnit === "TB"){
        converted = input / 1000;
    }
    if(sourceUnit === "TB" && targetUnit === "GB"){
        converted = input * 1000;
    }
    if(sourceUnit === "GB" && targetUnit === "TiB"){
        converted = input / 1100;
    }
    if(sourceUnit === "TiB" && targetUnit === "GB"){
        converted = input * 1100;
    }

    //more added
    if(sourceUnit === "GB" && targetUnit === "Kbit"){
        converted = input * 8e+6;
    }
    if(sourceUnit === "Kbit" && targetUnit === "GB"){
        converted = input / 8e+6;
    }
    if(sourceUnit === "GB" && targetUnit === "Kibit"){
        converted = input * 7.813e+6;
    }
    if(sourceUnit === "Kibit" && targetUnit === "GB"){
        converted = input / 7.813e+6;
    }
    if(sourceUnit === "GB" && targetUnit === "Mbit"){
        converted = input * 8000;
    }
    if(sourceUnit === "Mbit" && targetUnit === "GB"){
        converted = input / 8000;
    }
    if(sourceUnit === "GB" && targetUnit === "Mibit"){
        converted = input * 7629;
    }
    if(sourceUnit === "Mibit" && targetUnit === "GB"){
        converted = input / 7629;
    }
    if(sourceUnit === "GB" && targetUnit === "Gbit"){
        converted = input * 8;
    }
    if(sourceUnit === "Gbit" && targetUnit === "GB"){
        converted = input / 8;
    }
    if(sourceUnit === "GB" && targetUnit === "Gibit"){
        converted = input * 7.451;
    }
    if(sourceUnit === "Gibit" && targetUnit === "GB"){
        converted = input / 7.451;
    }
    if(sourceUnit === "GB" && targetUnit === "Tbit"){
        converted = input / 125;
    }
    if(sourceUnit === "Tbit" && targetUnit === "GB"){
        converted = input * 125;
    }
    if(sourceUnit === "GB" && targetUnit === "Tibit"){
        converted = input / 137.4;
    }
    if(sourceUnit === "Tibit" && targetUnit === "GB"){
        converted = input * 137.4;
    }

    //GiB umrechnen
    if(sourceUnit === "GiB" && targetUnit === "TB"){
        converted = input / 931,3;
    }
    if(sourceUnit === "TB" && targetUnit === "GiB"){
        converted = input * 931,3;
    }
    if(sourceUnit === "GiB" && targetUnit === "TiB"){
        converted = input / 1024;
    }
    if(sourceUnit === "TiB" && targetUnit === "GiB"){
        converted = input * 1024;
    }

    //more added
    if(sourceUnit === "GiB" && targetUnit === "Kbit"){
        converted = input * 8.59e+6;
    }
    if(sourceUnit === "Kbit" && targetUnit === "GiB"){
        converted = input / 8.59e+6;
    }
    if(sourceUnit === "GiB" && targetUnit === "Kibit"){
        converted = input * 8.389e+6;
    }
    if(sourceUnit === "Kibit" && targetUnit === "GiB"){
        converted = input / 8.389e+6;
    }
    if(sourceUnit === "GiB" && targetUnit === "Mbit"){
        converted = input * 8590;
    }
    if(sourceUnit === "Mbit" && targetUnit === "GiB"){
        converted = input / 8590;
    }
    if(sourceUnit === "GiB" && targetUnit === "Mibit"){
        converted = input * 8192;
    }
    if(sourceUnit === "Mibit" && targetUnit === "GiB"){
        converted = input / 8192;
    }
    if(sourceUnit === "GiB" && targetUnit === "Gbit"){
        converted = input * 8.59;
    }
    if(sourceUnit === "Gbit" && targetUnit === "GiB"){
        converted = input / 8.59;
    }
    if(sourceUnit === "GiB" && targetUnit === "Gibit"){
        converted = input * 8;
    }
    if(sourceUnit === "Gibit" && targetUnit === "GiB"){
        converted = input / 8;
    }
    if(sourceUnit === "GiB" && targetUnit === "Tbit"){
        converted = input / 116.4;
    }
    if(sourceUnit === "Tbit" && targetUnit === "GiB"){
        converted = input * 116.4;
    }
    if(sourceUnit === "GiB" && targetUnit === "Tibit"){
        converted = input / 128;
    }
    if(sourceUnit === "Tibit" && targetUnit === "GiB"){
        converted = input * 128;
    }

    //TB umrechnen
    if(sourceUnit === "TB" && targetUnit === "TiB"){
        converted = input / 1.1;
    }
    if(sourceUnit === "TiB" && targetUnit === "TB"){
        converted = input * 1.1;
    }

    //more added
    if(sourceUnit === "TB" && targetUnit === "Kbit"){
        converted = input * 8e+9;
    }
    if(sourceUnit === "Kbit" && targetUnit === "TB"){
        converted = input / 8e+9;
    }
    if(sourceUnit === "TB" && targetUnit === "Kibit"){
        converted = input * 7.813e+9;
    }
    if(sourceUnit === "Kibit" && targetUnit === "TB"){
        converted = input / 7.813e+9;
    }
    if(sourceUnit === "TB" && targetUnit === "Mbit"){
        converted = input * 8e+6;
    }
    if(sourceUnit === "Mbit" && targetUnit === "TB"){
        converted = input / 8e+6;
    }
    if(sourceUnit === "TB" && targetUnit === "Mibit"){
        converted = input * 7.629e+6;
    }
    if(sourceUnit === "Mibit" && targetUnit === "TB"){
        converted = input / 7.629e+6;
    }
    if(sourceUnit === "TB" && targetUnit === "Gbit"){
        converted = input * 8000;
    }
    if(sourceUnit === "Gbit" && targetUnit === "TB"){
        converted = input / 8000;
    }
    if(sourceUnit === "TB" && targetUnit === "Gibit"){
        converted = input * 7451;
    }
    if(sourceUnit === "Gibit" && targetUnit === "TB"){
        converted = input / 7451;
    }
    if(sourceUnit === "TB" && targetUnit === "Tbit"){
        converted = input * 8;
    }
    if(sourceUnit === "Tbit" && targetUnit === "TB"){
        converted = input / 8;
    }
    if(sourceUnit === "TB" && targetUnit === "Tibit"){
        converted = input * 7.276;
    }
    if(sourceUnit === "Tibit" && targetUnit === "TB"){
        converted = input / 7.276;
    }

    //TiB umrechnen
    //more added
    if(sourceUnit === "TiB" && targetUnit === "Kbit"){
        converted = input * 8.796e+9;
    }
    if(sourceUnit === "Kbit" && targetUnit === "TiB"){
        converted = input / 8.796e+9;
    }
    if(sourceUnit === "TiB" && targetUnit === "Kibit"){
        converted = input * 8.59e+9;
    }
    if(sourceUnit === "Kibit" && targetUnit === "TiB"){
        converted = input / 8.59e+9;
    }
    if(sourceUnit === "TiB" && targetUnit === "Mbit"){
        converted = input * 8.796e+6;
    }
    if(sourceUnit === "Mbit" && targetUnit === "TiB"){
        converted = input / 8.796e+6;
    }
    if(sourceUnit === "TiB" && targetUnit === "Mibit"){
        converted = input * 8.389e+6;
    }
    if(sourceUnit === "Mibit" && targetUnit === "TiB"){
        converted = input / 8.389e+6;
    }
    if(sourceUnit === "TiB" && targetUnit === "Gbit"){
        converted = input * 8796;
    }
    if(sourceUnit === "Gbit" && targetUnit === "TiB"){
        converted = input / 8796;
    }
    if(sourceUnit === "TiB" && targetUnit === "Gibit"){
        converted = input * 8192;
    }
    if(sourceUnit === "Gibit" && targetUnit === "TiB"){
        converted = input / 8192;
    }
    if(sourceUnit === "TiB" && targetUnit === "Tbit"){
        converted = input * 8.796;
    }
    if(sourceUnit === "Tbit" && targetUnit === "TiB"){
        converted = input / 8.796;
    }
    if(sourceUnit === "TiB" && targetUnit === "Tibit"){
        converted = input * 8;
    }
    if(sourceUnit === "Tibit" && targetUnit === "TiB"){
        converted = input / 8;
    }

    //Kbit umrechnen
    //more added
    if(sourceUnit === "Kbit" && targetUnit === "Kibit"){
        converted = input / 1.024;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Kbit"){
        converted = input * 1.024;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Mbit"){
        converted = input / 1000;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Kbit"){
        converted = input * 1000;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Mibit"){
        converted = input / 1049;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Kbit"){
        converted = input * 1049;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Gbit"){
        converted = input / 1e+6;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Kbit"){
        converted = input * 1e+6;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Gibit"){
        converted = input / 1.074e+6;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Kbit"){
        converted = input * 1.074e+6;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Tbit"){
        converted = input / 1e+9;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Kbit"){
        converted = input * 1e+9;
    }
    if(sourceUnit === "Kbit" && targetUnit === "Tibit"){
        converted = input / 1.1e+9;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Kbit"){
        converted = input * 1.1e+9;
    }

    //Kibit umrechnen
    //more added
    if(sourceUnit === "Kibit" && targetUnit === "Mbit"){
        converted = input / 976.6;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Kibit"){
        converted = input * 976.6;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Mibit"){
        converted = input / 1024;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Kibit"){
        converted = input * 1024;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Gbit"){
        converted = input / 976600;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Kibit"){
        converted = input * 976600;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Gibit"){
        converted = input / 1.049e+6;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Kibit"){
        converted = input * 1.049e+6;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Tbit"){
        converted = input / 9.766e+8;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Kibit"){
        converted = input * 9.766e+8;
    }
    if(sourceUnit === "Kibit" && targetUnit === "Tibit"){
        converted = input / 1.074e+9;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Kibit"){
        converted = input * 1.074e+9;
    }

    //Mbit umrechnen
    //more added
    if(sourceUnit === "Mbit" && targetUnit === "Mibit"){
        converted = input / 1.049;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Mbit"){
        converted = input * 1.049;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Gbit"){
        converted = input / 1000;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Mbit"){
        converted = input * 1000;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Gibit"){
        converted = input / 1074;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Mbit"){
        converted = input * 1074;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Tbit"){
        converted = input / 1e+6;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Mbit"){
        converted = input * 1e+6;
    }
    if(sourceUnit === "Mbit" && targetUnit === "Tibit"){
        converted = input / 1.1e+6;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Mbit"){
        converted = input * 1.1e+6;
    }

    //Mibit umrechnen
    //more added
    if(sourceUnit === "Mibit" && targetUnit === "Gbit"){
        converted = input / 953.7;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Mibit"){
        converted = input * 953.7;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Gibit"){
        converted = input / 1024;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Mibit"){
        converted = input * 1024;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Tbit"){
        converted = input / 953700;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Mibit"){
        converted = input * 953700;
    }
    if(sourceUnit === "Mibit" && targetUnit === "Tibit"){
        converted = input / 1.049e+6;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Mibit"){
        converted = input * 1.049e+6;
    }

    //Gbit umrechnen
    //more added
    if(sourceUnit === "Gbit" && targetUnit === "Gibit"){
        converted = input / 1.074;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Gbit"){
        converted = input * 1.074;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Tbit"){
        converted = input / 1000;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Gbit"){
        converted = input * 1000;
    }
    if(sourceUnit === "Gbit" && targetUnit === "Tibit"){
        converted = input / 1100;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Gbit"){
        converted = input * 1100;
    }

    //Gibit umrechnen
    //more added
    if(sourceUnit === "Gibit" && targetUnit === "Tbit"){
        converted = input / 1000;
    }
    if(sourceUnit === "Tbit" && targetUnit === "Gibit"){
        converted = input * 1000;
    }
    if(sourceUnit === "Gibit" && targetUnit === "Tibit"){
        converted = input / 1100;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Gibit"){
        converted = input * 1100;
    }

    //Tbit umrechnen
    //more added
    if(sourceUnit === "Tbit" && targetUnit === "Tibit"){
        converted = input / 1.1;
    }
    if(sourceUnit === "Tibit" && targetUnit === "Tbit"){
        converted = input * 1.1;
    }

    //alles andere umrechnen
    else if(sourceUnit === targetUnit){
        alert('you cant convert into the same unit');
    }

    document.getElementById('resultID').innerHTML= "Ergebnis: " + converted+targetUnit;
}