// Задача 1
export const containsChar = (str, char) => {
  return str.includes(char);
};

// Задача 2
export const reverse = (str) => {
  return str.split('').reverse().join('');
};

// Задача 3
export const wordsToRegister = (str) => {
  return str
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join('');
};

// Задача 4
export const sumOfDigitsInString = (str) => {
  let sum = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== ' ') {
      sum += parseInt(char, 10);
    }
  }
  return sum;
};

// Задача 5
export const checkChars = (str, oldChar, newChar) => {
  if (!str.includes(oldChar)) {
    return 'Error';
  }
  return str.split(oldChar).join(newChar);
};
