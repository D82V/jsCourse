"use strict";

// 2
let money = +prompt("Ваш бюджет в месяц?", "20000");
let time = prompt("Введите дату в формате YYYY-MM-DD", "2020-04-17");

// 4

let question1 = prompt(
  "Введите обязательную статью расходов в этом месяце",
  "Еда"
);
let question2 = +prompt("Во сколько обойдется?", "10000");

// 3

let appData = {
  budget: money,
  timeData: time,
  expenses: { question1, question2 },
  optionalExpenses: "",
  income: [],
  savings: false,
};

// 5
alert("Ваш бюджет на один день: " + (appData.budget/30) + " рублей!");
