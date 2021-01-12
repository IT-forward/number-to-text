let birlik = ['', 'bir', 'ikki', 'uch', 'to\'rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to\'qqiz'];
let onlik = ['', 'o\'n', 'yigirma', 'o\'ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to\'qson'];

let res;

export function toTextHundreds(num) {
    res = '';
    if(num === 100) {
        return 'yuz';
    } 
    if(num > 99 & num < 1000){
        res = birlik[Math.floor(num / 100)] + ' yuz';
    } 
    return res;
}

export function toTextTens(num) {
    res = '';
    if(num > 99){
        num = num % 100;
    }

    if(num > 10 & num < 99){
        res += onlik[Math.floor(num / 10)];
    } 
    return res;
}

export function toTextOnes(num){
    res = '';
    if(typeof num === 'number'){
        res += birlik[num % 10];
    }
    return res;
}

function toTextNumber(num) {
    let yuzlar = toTextHundreds(num);
    if(yuzlar !== ''){
        yuzlar += ' ';
    }

    let onlar = toTextTens(num);
    if(onlar !== ''){
        onlar += ' ';
    }

    let birlar = toTextOnes(num);
    
    res = yuzlar + onlar + birlar;
    return res.trim(); 
}

export default toTextNumber;