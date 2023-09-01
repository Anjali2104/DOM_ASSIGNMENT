let inputBox = document.getElementById('inputBox');
let greetUser = document.getElementById('greetUser');
inputBox.addEventListener("keypress" , function(e){
    greetUser.innerText = `You Pressed `+ e.key
})