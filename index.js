var password = document.getElementById("pas");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

password.onfocus = function(){
    document.getElementById("message").style.display = "block";
}
password.onblur = function(){
    document.getElementById("message").style.display = "none";
}
password.onkeyup = function(){
    let lowercaseLetter = /[a-z]/g;
    if(password.value.match(lowercaseLetter)){
        letter.classList.replace("invalid","valid");
    }else{
        letter.classList.replace("valid","invalid");
    }

    let uppercaseLetter = /[A-Z]/g;
    if(password.value.match(uppercaseLetter)){
        capital.classList.replace("invalid","valid");
    }else{
        capital.classList.replace("valid","invalid");
    }

    let num = /[0-9]/g;
    if(password.value.match(num)){
        number.classList.replace("invalid","valid");
    }else{
        number.classList.replace("valid","invalid");
    }

    if(password.value.length >= 8){
        length.classList.replace("invalid","valid");
    }else{
        length.classList.replace("valid","invalid");
    }
}