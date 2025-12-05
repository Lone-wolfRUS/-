// Задача 1
const containsChar = (str, char) => {
  return str.includes(char);
};

console.log(containsChar('hello', 'e')); // true
console.log(containsChar('world', 'z')); // false
console.log(containsChar('Hello', 'h')); // false


// Задача 2
const reverse = (str) => {
  return str.split('').reverse().join('');
};

console.log(reverse('listen')); // 'netsil'
console.log(reverse('hello')); // 'olleh'


// Задача 3
const wordsToRegister = (str) => {
  return str
    .split('')
    .map((char, index) => (index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()))
    .join('');
};

console.log(wordsToRegister('hello')); // 'hElLo'
console.log(wordsToRegister('test test')); // 'tEsT tEsT'


// Задача 4
const sumOfDigitsInString = (str) => {
  let sum = 0;
  for (let char of str) {
    if (!isNaN(char) && char !== ' ') {
      sum += parseInt(char, 10);
    }
  }
  return sum;
};

console.log(sumOfDigitsInString('abc123')); // 6
console.log(sumOfDigitsInString('5 apples and 3 oranges')); // 8


// Задача 5
const checkChars = (str, oldChar, newChar) => {
  if (!str.includes(oldChar)) {
    return 'Error';
  }
  return str.split(oldChar).join(newChar);
};

console.log(checkChars('Test!', '!', '?')); // 'Test?'
console.log(checkChars('Hello world', 'a', 'b')); // 'Error'
console.log(checkChars('hexlet', 'e', 'o')); // 'hoxlot'
