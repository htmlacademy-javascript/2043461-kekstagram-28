const checkStringLength = function (checkString, i) {
  if (checkString.length <= i) {
    return true;
  } else {
    return false;
  }
};
checkStringLength('проверяемая строка', 20);
checkStringLength('проверяемая строка', 18);
checkStringLength('проверяемая строка', 10);

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
checkWord('топот');
checkWord('ДовОд');
checkWord('Кекс');

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
};
extractNumber('2023 год');
extractNumber('ECMAScript 2022');
extractNumber('1 кефир, 0.5 батона');
extractNumber('агент 007');
extractNumber('а я томат');

const padStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0,actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
};
padStart('1', 2, '0');
padStart('1', 4, '0');
padStart('q', 4, 'werty');
padStart('q', 4, 'we');
padStart('qwerty', 4, '0');
