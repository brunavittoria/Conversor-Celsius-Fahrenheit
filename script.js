

function converter(){
    let tUsuario = document.getElementById("tUsuario").value;
    let temp = document.getElementById("temp").value;
    let result = document.getElementById("result");

    if(temp == "CF"){
        result.innerHTML = Math.round(parseFloat(cf(tUsuario)))+ " ° F";

    } else {
        result.innerHTML = Math.round(parseFloat(fc(tUsuario))) + " ° C";

    }
}

function cf(t){
    return (t * 1.8 + 32);
}

function fc(t){
    return  (( t - 32) / 1.8);
}