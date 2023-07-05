// Create an object that has strings for 
// uppercase , lowercase letters
// symbols and numbers

let symbolEl = document.getElementById("symbols");
let numberEl = document.getElementById("numbers");
let upperEl = document.getElementById("upperCase");
let lowerEl = document.getElementById("lowerCase");
let lengthEl = document.getElementById("length");
let resultEl = document.querySelector('.pw-box-disp');


generate.addEventListener('click', ()=>{
    const length = lengthEl.value;
    const hasLower = lowerEl.checked;
    const hasUpper = upperEl.checked;
    const hasSymbol = symbolEl.checked;
    const hasNumber = numberEl.checked;

    resultEl.innerText = generatePassword(
        hasLower,
        hasUpper,
        hasSymbol,
        hasNumber,
        length
    );
});

const randomFunc = {
    lower : getRandomLower,
    upper : getRandomUpper,
    number : getRandomNumber,
    symbol : getRandomSymbol
}


const types = {
    upperCase : "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lowerCase : "abcdefghijklmnopqrstuvwxyz",
    numbers : "0123456789",
    symbols : "@#$&*+'.?!`~{}[]()"
}


function getRandomLower(){
    return types['lowerCase'][Math.floor(Math.random()*26)];
}

function getRandomUpper(){
    return types['upperCase'][Math.floor(Math.random()*26)];
}

function getRandomSymbol(){
    return types['symbols'][Math.floor(Math.random()*18)];
}

function getRandomNumber(){
    return types['numbers'][Math.floor(Math.random()*10)];
}

function generatePassword(lower,upper,symbol,number,length){
    let generatedPassword = '';

    const typesCount = lower + upper + number + symbol;

    const typesArr = [{lower}, {upper}, {number}, {symbol}].filter(
        item => Object.values(item)[0]
    );
    // console.log('typesArr: ' , typesArr);

    for (let i = 0 ; i < length;i+=typesCount){
        typesArr.forEach(type =>{
            const funcName = Object.keys(type)[0];
            generatedPassword += randomFunc[funcName]();
        });
    }

    // console.log(generatedPassword);
    const finalPassword = generatedPassword.slice(0,length);
    return finalPassword;

}


// copy 

copy.addEventListener('click',()=>{
    var copyText = document.querySelector('.pw-box-disp');


   // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.innerText);
  alert(`copied ${copyText.innerText}`)
})