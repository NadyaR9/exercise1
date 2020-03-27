'use strict';
let money=prompt("Ваш бюджет на месяц?", "");
let time= prompt("Введите дату в формате YYYY-MM-DD","");
let appData={
   budget:money,
   timeData:time,
   expenses:{} ,
   optionalExpenses: {},
   income:[],
   savings:false,
};

let question1=prompt("Введите обязательную статью расходов в этом месяце","bills");
let question2=prompt("Во сколько обойдется?","100");
appData.expenses[question1]=question2;
console.log(appData.expenses);
alert(`Ваш бюджет на один день составляет ${Math.floor(appData.budget/30)}`);
//Сколько типов данных существует в JS?-7
//Как вывести информацию в консоль?-console.log()
//Какая функция операторов || и &&?-логическое or и and
