'use strict';
let money="Ваш бюджет на месяц?";
let time= "Введите дату в формате YYYY-MM-DD";
let appData={
   expenses:{} ,
   optionalExpenses: "",
   income:[],
   savings:false,
};
appData.budget=money;
appData.timeData=time;

let question1=prompt("Введите обязательную статью расходов в этом месяце","bills");
let question2=prompt("Во сколько обойдется?","100");
appData.expenses[question1]=question2;
console.log(appData.expenses);
alert(`Ваш бюджет на один день составляет ${Math.floor(appData.expenses[question1]/30)}`);
//Сколько типов данных существует в JS?-7
//Как вывести информацию в консоль?-console.log()
//Какая функция операторов || и &&?-логическое or и and
