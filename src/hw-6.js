/**
 * Напсиать функцию перебора значений в дереве, каждое значение нужно отобразитьв консоль
 * Пример простого дерева:
 */

const tree = {
  value: 10,
  children: [
    {
      children: [
        {
          value: 2,
          children: [
            { value: 7 },
            {
              value: 10,
              children: [{ value: 9 }]
            }
          ]
        }
      ]
    },
    { children: [{ value: 100 }] },
    { value: 5 }
  ],
};

function task1(tree) {
   getProp(tree);

  function getProp(obj) {
    for (let key in obj) {
      if (typeof(obj[key]) === 'object') {
        getProp(obj[key]);
      } else {
        console.log(obj[key]);
      }
    }
  }
}