let elForm = document.querySelector('.form');
let elInput = document.querySelector('.input');
let elSelect = document.querySelector('.select');
let elResult = document.querySelector('.result');


elForm.addEventListener ('submit', function(evt){
    evt.preventDefault();

    let InputValue = +elInput.value;
    let SelectValue = +elSelect.value;
    let ConvertCash = (InputValue/SelectValue);
    

    if(SelectValue == 12300){
        elResult.textContent = '$' + ConvertCash.toFixed(3)
    } else if(SelectValue == 13000){
        elResult.textContent = '€' + ConvertCash.toFixed(3)
       
    } else if (SelectValue == 128){
        elResult.textContent =  '₽' + ConvertCash.toFixed(3)
    } else if (SelectValue == 1680){
        elResult.textContent =  '¥' + ConvertCash.toFixed(3)
    } else if (SelectValue == 451){
        elResult.textContent =  ConvertCash.toFixed(3) + 'tl'
    }
})
