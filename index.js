// DOM creating


let pwd = document.getElementById("pwd");


// password validation

function passvalidate(){
    if (pwd.value.trim() == ""){
        alert("incorect password");
        return false;
    }
    else if (pwd.value <= 8){
        alert("password is too short");
        pwd.style.color = "red"
        return false;
    }
    else{
        return true;
    }
    
}