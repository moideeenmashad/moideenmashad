// DOM creating


let pwd = document.getElementById("pwd");
let email = document.getElementById("email");
let error = document.getElementById("error");



// password validation

function passvalidate(){
    if (pwd.value.trim() == ""){
        alert("incorect password");
        pwd.style.color = "red";
        return false;
    }
    else if (pwd.value <= 8){
        alert("password is too short");
        pwd.style.color = "red";
        return false;
    }
    else{
        return true;
    }



    // let regexp2 = /^([+\0-9{10,12}]+)$/
    //   if (regexp2.test(pwd)){

    //   }
    
}

// email validation

function emailvalidate(){
    let regexp = /^([A-Za-z0-9\.-]+)@([a-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/
    if(error.test(email)){
        error.innerHTML = "valid email";
        error.style.color ="red";
        return true;
    }
    else{
        error.innerHTML = "invalid email";
        error.style.color = "green";
        return false;
    }

}