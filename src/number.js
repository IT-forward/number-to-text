let ones = ['', 'bir', 'ikki', 'uch', 'to‘rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to‘qqiz'];
let tens = ['', 'o‘n', 'yigirma', 'o‘ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to‘qson'];
let nameOfGroup = ['', 'ming', 'million', 'milliard', 'trilion', 'kvadrilon', 'kvintilon', 'sekstilon',
                   'septilon', 'oktalon', 'nonalon', 'dekalon', 'endekalon', 'dodekalon']; 

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
    num = num % 100;

    return tens[Math.floor(num / 10)];
}

function onesToText(num){
    return ones[num % 10];
}

function threeDigitsGroupToText(num) {
    let textForm = '';

    if(typeof num !== 'number'){
        return textForm;
    }

    textForm = hundredsToText(num);

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

function numberOfDigits(num){
    let res = 0;
    
    while (num > 0){
      num = Math.floor(num / 10); 
      res++;
    }

    return res;
}

function groupingDigits(num){   
    let groupsOfDigits = [];
    let amountOfThreeDigitsGroups = Math.ceil(numberOfDigits(num) / 3); 
    while (amountOfThreeDigitsGroups > 0){
        let group = Math.floor(num / Math.pow(1000, amountOfThreeDigitsGroups - 1)); 
        groupsOfDigits.push(group); 
        num %= Math.pow(1000, amountOfThreeDigitsGroups - 1);  
        amountOfThreeDigitsGroups--; 
    }

    return groupsOfDigits.reverse();
}

function convert(num){
    let numberToText = '';
    let groups = groupingDigits(num);
    let length = groups.length;  
  
    function allIsZero(groups){
        for (let i = 0; i < length - 1; i++){
            if (groups[i] !== 0){
                return false;
            }
        }
      
        return true;
    }  

    if (groups[length - 1] === 1 && allIsZero(groups) && length !== 1){
        numberToText += nameOfGroup[length - 1]; 
    }
    else {
        for (let i = length - 1; i >= 0; i--){
          if (groups[i] !== 0){
            numberToText += " " + threeDigitsGroupToText(groups[i]) + " " + nameOfGroup[i]; 
          } 
        }
    }

    return numberToText.trim();
}

export default convert;