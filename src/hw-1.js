/**
 * Напишите код, чтобы вызвав эту фукнцию с 2 чсилами и одной строкой вы получили их сумму в переменной sum
 * если строка придет с символами, то результат функции должна быть строка "неверные данные"
 */
function task1(num1, num2, str) {
  let sum = null;
  // ваш код должен быть ниже этой строки

  if (Number(str)) {
    sum = num1 + num2 + str;
  } else {
    console.log('Wrong Data');
  }
  // ваш код должен быть выше этой строки
  return sum;
}

/**
 * Код ниже перепишете с использованием switch

 let result = null;

 if (age > 5) {
    result = 'Он старше 5 лет';
  } else if (age > 8) {
    result = 'Он старше 8 лет';
  } else if (age > 11) {
    result = 'Он старше 11 лет';
  } else {
    result = 'Нет подходящего возраста';
  }

 */
function task2(age) {
  let result = null;
  // ваш код должен быть ниже этой строки
  switch (age) {
    case 1: {
      result = 'Нет подходящего возраста';
      break;
    }
    case 2: {
      result = 'Нет подходящего возраста';
      break;
    }
    case 3: {
      result = 'Нет подходящего возраста';
      break;
    }
    case 4: {
      result = 'Нет подходящего возраста';
      break;
    }
    case 5: {
      result = 'Он старше 5 лет';
      break;
    }
    case 6: {
      result = 'Он старше 5 лет';
      break;
    }
    case 7: {
      result = 'Он старше 5 лет';
      break;
    }
    case 8: {
      result = 'Он старше 8 лет';
      break;
    }
    case 9: {
      result = 'Он старше 8 лет';
      break;
    }
    case 10: {
      result = 'Он старше 8 лет';
      break;
    }
    case 11: {
      result = 'Он старше 11 лет';
      break;
    }
    case 12: {
      result = 'Он старше 11 лет';
      break;
    }
    case 13: {
      result = 'Он старше 11 лет';
      break;
    }
    case 14: {
      result = 'Он старше 11 лет';
      break;
    }
    case 15: {
      result = 'Он старше 11 лет';
      break;
    }
    case 16: {
      result = 'Он старше 11 лет';
      break;
    }
    case 17: {
      result = 'Он старше 11 лет';
      break;
    }
    case 18: {
      result = 'Он старше 11 лет';
      break;
    }
  }
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Используя while напишите цикл от 0 до 21 и каждое нечетное число суммируйте к переменной result
 *
 */
function task3() {
  let result = 0;
  // ваш код должен быть ниже этой строки
  while (result < 21) {
    result++;
    if (result % 2 != 0) {
      result = result + result;
      console.log(result);
    }
  }
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Используя for напишите цикл от 0 до 100. На каждой итерации, что делится на 5 без остатка
 * в консоль нужно отображать цифру 5.
 *
 */
function task4() {
  // ваш код должен быть ниже этой строки
  for (let result = 0; result < 100; result++) {
    if (result % 5 == 0) {
      console.log(5);
    }
  }
  // ваш код должен быть выше этой строки
}

/**
 * В функцию приходят 4 аргумента все разных типов, какие бы не были значения результат всегда должен быть один и тот же, true
 *
 */
function task5(num, str, bool, val) {
  let result = num || str || bool || val; // выражение с || менять нельзя, остальное в ваших руках
  result = Boolean(result);
  if (result === false) {
    result = true;
  }
  return result;
}

/**
 * Вы должны дополнить код так, чтобы переменная result была не больше number
 */
function task6(number) {
  let result = 0;

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      // ваш код должен быть ниже этой строки

      result += i + j;
      if (result > number) {
        result -= i + j;
        break;
      }
      // ваш код должен быть выше этой строки
    }
  }

  return result;
}

/**
 * Написать такой цикл, чтобы заполнить переменную result символами своего имени,
 * таким образом результатом этой функции будет ваше имя.
 *
 */
function task7() {
  let result = null;
  // ваш код должен быть ниже этой строки
  let name = 'nikita';

  for (let letter of name) {
    result = '';
    result += name.substr(0,6);
  }
  // ваш код должен быть выше этой строки
  return result;
}

/**
 * Задание с *.
 * Написать код таким образом, чтобы можно было выполнить любое матемптичиское действие с num и str
 */
function task8(num) {
  let str = '10n';
  let result = null;
  // ваш код должен быть ниже этой строки
  result = parseInt(str,16) + num - num * num / num


  // ваш код должен быть выше этой строки
  return result;
}


