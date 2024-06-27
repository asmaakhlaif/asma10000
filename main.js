document.querySelector('.exchangeform').addEventListener('submit' , function(event)) {
    Event.preventdefault();

    const amount = parseFloat(document.querySelector('input[name="exchange"]').value);
    const exchangetype = document.querySelector('section[name="exchange"]').value;
    const resultelement = document.querySelector('.result');
    const nistodinarrate = 0.19

    if (isNaN(amount)) {
        resultelement.textContent = "please enter a v valid amount.";
        return;
    }
}


let conversionrate;
switch (exchange){
    case 'dollar':
        conversionrate = 3.5;
        break
    case 'dinar':
        conversionrate = 5;
        break
    case 'nis' :
        conversionrate = 5;
        break;

        default:
            conversionrate = 1;
        
}

const convertedamount = amount * conversionrate;
resultelement.textContent = 'convertedamount: ${convertedamount.toFixed(2)} ${exchange}';
