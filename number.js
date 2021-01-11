let birlik = ['', 'bir', 'ikki', 'uch', 'to\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\'qqiz'];
let onlik = ['', 'o\'n', 'yigirma', 'o\'ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to\'qson'];

let res;

function toTextHundreds(num) {
    if(num === 100) {
        return 'yuz';
    } 
    if(num > 99 & num < 1000){
        return birlik[Math.floor(num / 100)] + ' yuz ' + toTextTens(num % 100);
    } else {
        return toTextTens(num);
    }
}

function toTextTens(num) {
    res = onlik[Math.floor(num / 10)];
    if(res !== ''){
        res += ' ';
    }
    
    res += birlik[num % 10];
    return res;
}

function toTextNumber(num) {
    return toTextHundreds(num);
}

console.log(toTextNumber(999));