"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
let ones = ['', 'bir', 'ikki', 'uch', 'to‘rt', 'besh', 'olti', 'yetti', 'sakkiz', 'to‘qqiz'];
let tens = ['', 'o‘n', 'yigirma', 'o‘ttiz', 'qirq', 'ellik', 'oltmish', 'yetmish', 'sakson', 'to‘qson'];

function hundredsToText(num) {
  let res = '';

  if (num === 100) {
    return 'yuz';
  }

  if (num > 99 & num < 1000) {
    res = ones[Math.floor(num / 100)] + ' yuz';
  }

  return res;
}

function tensToText(num) {
  num = num % 100;
  return tens[Math.floor(num / 10)];
}

function onesToText(num) {
  return ones[num % 10];
}

function convert(num) {
  let textForm = '';

  if (typeof num !== 'number') {
    return textForm;
  }

  textForm = hundredsToText(num);
  let tens = tensToText(num);

  if (tens !== '') {
    textForm += ' ' + tens;
  }

  let ones = onesToText(num);

  if (ones !== '') {
    textForm += ' ' + ones;
  }

  return textForm.trim();
}

var _default = convert;
exports.default = _default;