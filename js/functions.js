const checkStringLength = function (checkString, i) {
  if (checkString.length <= i) {
    return true;
  } else {
    return false;
  }
}


function checkWord(word) {
  let splitString = word.split("");
  let reverseArray = splitString.reverse();
  let joinArray = reverseArray.join("");
  if (word.toLowerCase == joinArray.toLowerCase) {
    return true;
  } else {
    return false;
  }
}

const extractNumber = (string) => {
  let result = '';
  for (let i = 0; i < string.length; i++) {
    if (!Number.isNaN(parseInt(string.at(i), 10))) {
      result += string.at(i);
    }
  }
  return parseInt(result, 10);
}

const padStart = (string, minLength, pad) => {
  const actualPad = minLength - string.length;
  if (actualPad <= 0) {
    return string;
  }
  return pad.slice(0,actualPad % pad.length) + pad.repeat(actualPad / pad.length) + string;
}
