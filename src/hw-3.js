/**
 * Проверить строку str на уникальные символы, если все символы в строке встречаются один раз, то
 * функция должна возвращать true, в противном случаи false
 * Например:
 *  "avbhye3" => true
 *  "afsbvra" => false
 *  "Aaret64ip" => true
 */
function task1(str) {
  for(let i = 0; i < str.length; i++) {
    if (str.split(str[i]).length - 1 > 1) {
      return false;
    } else {
      return true;
    }
  }
}

/**
 * Проверить строку str на буквы, если в строке есть буквы, то их нужно вынести в переменную result и вернуть эту
 * переменную
 */
function task2(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    if (str[i].toLowerCase() !== str[i].toUpperCase()) {
      result += str[i]
    }
  }
  return result;
}

/**
 * arr массив чисел. Нужно найти в массиве найбольшое число и вернуть его
 */
function task3(arr) {
  return Math.max.apply(null, arr);
}

/**
 * В функцию приходит объект obj. Нужно скопировать все его свойства в объект result и вернуть его
 */
function task4(obj) {
  const result = {};
  // ваш код должен быть ниже этой строки
  for (let i in obj) {
    result[i] = obj[i];
  }
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Приходит строка str такого вида "Ivan Ivanov", вы должны сохранить первые символы в переменную result. Должен
 * иметь такой вид "I.I."
 * Еще пример: str => "Vitalik Skopets". result => "V.S."
 */
function task5 (str) {
  let newArr = str.split(' ');
  let firstLetter = newArr[0].slice(0, 1);
  let secondLetter = newArr[1].slice(0, 1);
  return firstLetter + '.' + secondLetter + '.';
}

/**
 * Написать логику, которая будет возвращать название планеты. По ее номеру начиная от ближайшей к солнцу.
 * Примечание: написать эту логику без if и switch!!!!!!!
 */
function task6(num) {
  let solar = {
    1: 'Mercuriy',
    2: 'Venera',
    3: 'Earth',
    4: 'Mars',
    5: 'Jupiter',
    6: 'Saturn',
    7: 'Uran',
    8: 'Neptun',
    9: 'Pluton',
  };
  for (let key in solar) {
    while (Number(key) === num) {
      return solar[key];
    }
  } return undefined;

}

/**
 * Функция должна удалять первый и последний символы из строки str и вернуть получившеюся строку.
 */
function task7(str) {
  let arrayOfStrings = str.split('');
  let last = arrayOfStrings.pop();
  let first = arrayOfStrings.shift();
  return arrayOfStrings.join('');
}