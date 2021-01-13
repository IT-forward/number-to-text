let ones = ['', 'bir', 'ikki', 'uch', 'to‘rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to‘qqiz'];
let tens = ['', 'o‘n', 'yigirma', 'o‘ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to‘qson'];


function hundredsToText(num) {
    let res = '';
    if(num === 100) {
        return 'yuz';
    } 
    if(num > 99 & num < 1000){
        res = ones[Math.floor(num / 100)] + ' yuz';
    } 
    return res;
}

function tensToText(num) {
    let res = '';
    if(num > 99){
        num = num % 100;
    }

    if(num > 10 & num < 99){
        res += tens[Math.floor(num / 10)];
    } 
    return res;
}

function onesToText(num){
    return ones[num % 10];
}

function convert(num) {
    let textForm = hundredsToText(num);
    let tens = tensToText(num);
    if(tens !== ''){
        textForm += ' ' + tens;
    }
    let ones = onesToText(num);
    if(ones !== ''){
        textForm += ' ' + ones;
    }
    
    return textForm.trim(); 
}

export default convert;