const checkStringLength = function (checkString, i) {
  if (checkString.length <= i) {
    return true;
  } else {
    return false;
  }
}
console.log(checkStringLength('проверяемая строка', 20));
console.log(checkStringLength('проверяемая строка', 18));
console.log(checkStringLength('проверяемая строка', 10));

function checkWord(word) {
  const splitString = word.split('');
  const reverseArray = splitString.reverse();
  const joinArray = reverseArray.join('');
  if (word.toLowerCase === joinArray.toLowerCase) {
    return true;
  } else {
    return false;
  }
}
console.log(checkWord('топот'));
console.log(checkWord('ДовОд'));
console.log(checkWord('Кекс'));

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
console.log(extractNumber('2023 год'));
console.log(extractNumber('ECMAScript 2022'));
console.log(extractNumber('1 кефир, 0.5 батона'));
console.log(extractNumber('агент 007'));
console.log(extractNumber('а я томат'));

const padStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0,actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
console.log(padStart('1', 2, '0'));
console.log(padStart('1', 4, '0'));
console.log(padStart('q', 4, 'werty'));
console.log(padStart('q', 4, 'we'));
console.log(padStart('qwerty', 4, '0'));
