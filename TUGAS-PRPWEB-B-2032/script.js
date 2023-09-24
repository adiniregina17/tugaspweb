

function login() {
    var inputEmail = document.getElementById("inputemail").value;
    var inputPass = document.getElementById("inputpass").value;

    if (inputEmail=="" && inputPass=="") {
        alert("email dan password kosong");
    } else if(inputEmail=="") {
        alert("email kosong")
    }else if(inputPass=="") {
        alert("password kosong")
    }else{
        alert("Selamat datang!")
    }
}

