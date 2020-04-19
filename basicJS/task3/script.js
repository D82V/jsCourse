// Дописать нашу программу по видео.

// 1) Переписать наш цикл for еще двумя способами и закомментировать их 
//(еще 2 вида циклов, тренируемся)

// 2) Проверить, чтобы все работало и не было ошибок в консоли

// 3) Добавить папку со вторым уроком в свой репозиторий на GitHub

// Вопросы к этому заданию
// Сколько видов циклов существует в JS?
  // 3: for; while; do while.

"use strict";

let flag = false,
    money,
    time,
    a,
    b,
    i = 0;

do {
  if(flag) {
    alert("Не корректно введены данные, повторите попытку!");
  }
  money = prompt("Ваш бюджет в месяц?", "30000");
  time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-17"); 
  flag = true;
} while (    
  typeof (money) != "string" ||
  typeof (time) != "string" ||
  money == "" ||
  time == "" ||
  money.length > 10 ||
  time.length > 10 ||
  isNaN(+money));

let appData = {
    budget: +money,
    timeData: time,
    expenses: {},
    optionalExpenses: "",
    income: [],
    savings: false,
};

for (; i < 2; i++) {
  a = prompt("Введите обязательную статью расходов в этом месяце", "");
  b = prompt("Во сколько обойдется?", "");

  if (
    typeof (a) != "string" ||
    typeof (b) != "string" ||
    a == "" ||
    b == "" ||
    a.length > 50 ||
    b.length > 10 ||
    isNaN(+b)
  ) {
    alert("Не корректно введены данные, повторите попытку!");
    i--;
  } else {
    appData.expenses[a] = b;
  }
}

// 1

// do {
//   a = prompt("Введите обязательную статью расходов в этом месяце", "");
//   b = prompt("Во сколько обойдется?", "");
//   i++;

//   if (
//     typeof (a) != "string" ||
//     typeof (b) != "string" ||
//     a == "" ||
//     b == "" ||
//     a.length > 50 ||
//     b.length > 10 ||
//     isNaN(+b)
//   ) {
//     alert("Не корректно введены данные, повторите попытку!");
//     i--;
//   } else {
//     appData.expenses[a] = b;
//     console.log(i);
//   }
// } while (i < 2 );

// while (i < 2 ) {
//   a = prompt("Введите обязательную статью расходов в этом месяце", "");
//   b = prompt("Во сколько обойдется?", "");
//   i++;

//   if (
//     typeof (a) != "string" ||
//     typeof (b) != "string" ||
//     a == "" ||
//     b == "" ||
//     a.length > 50 ||
//     b.length > 10 ||
//     isNaN(+b)
//   ) {
//     alert("Не корректно введены данные, повторите попытку!");
//     i--;
//   } else {
//     appData.expenses[a] = b;
//     console.log(i);
//   }
// }

appData.moneyPerDay = appData.budget / 30;
alert("Ваш бюджет на один день: " + appData.moneyPerDay);

if (appData.moneyPerDay <= 100) {
  console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
  console.log("Средний уровень достатка");
} else if (appData.moneyPerDay >= 2000) {
  console.log("Высокий уровень достатка");
} else {
  alert("Что-то пошло не так!");
}
