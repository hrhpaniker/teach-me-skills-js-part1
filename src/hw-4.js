/**
 * Написать функцию, которая будет считать ряд Фибоначчи. Функция должна возвращать массив из чисел
 * Фибоначчи, длина массива будет приходить, как аргумент функции
 */
function fibonacci(length) {
  let a = 1;
  let b = 1;
  const arrayFib = [];
  for (let i = 3; i <= length; i++) {
    let c = a + b;
    a = b;
    b = c;
    arrayFib.push(b)
  }
  return arrayFib;
}

/**
 * Написать свою функцию map
 */
const array2 = [];

function map(array, callback) {
  for (let key = 0; key < array.length; key++) {
    array2.push(array[key] * 2);
  } callback()
}

function callback() {
  console.log(array2)
}

/**
 * Написать свою функцию filter
 */
const array2 = [];

function filter(array, callback) {
  for (let key = 0; key < array.length; key++) {
    if (array[key] > 1) {
      array2.push(array[key]);
    }
  } callback()
}

function callback() {
  console.log(array2);
}

/**
 * Написать свою функцию indexOf
 */
function indexOf(array, value, fromIndex) {
  for (let key = fromIndex; key < array.length; key++) {
    if (array[key] === value) {
      return key;
    }
  }
}

/**
 * Написать свою функцию reduce
 */
function reduce(array, callback, acc) {

}

/**
 * Написать свою функцию find
 */
function find(array, callback) {
  for (let key = 0; key < array.length; key++) {
    if (array[key].id === 1) {
      return array[key].name;
    }
  } return callback ();
}

function notFind () {
  console.log('Не найдено')
}

/**
 * Написать свою функцию sort
 */
function sort(array, callback) {

}

/**
 * Написать свою функцию Object.keys
 */
function objectKeys(obj) {
  for (let key in obj) {
    console.log(key);
  }
}

/**
 * Написать свою функцию Object.values
 */
function objectKeys(obj) {
  for (let key in obj) {
    console.log(obj[key]);
  }
}