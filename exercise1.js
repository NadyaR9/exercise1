'use strict';
let money=+prompt("Ваш бюджет на месяц?", "1200");
let time= prompt("Введите дату в формате YYYY-MM-DD","");
let appData={
   budget:money,
   timeData:time,
   expenses:{} ,
   optionalExpenses: {},
   income:[],
   savings:false,
};

for (let i=0; i<2; i++){
   let question1=prompt("Введите обязательную статью расходов в этом месяце","bills");
   let question2=prompt("Во сколько обойдется?","100");   
if (typeof(question1)==='string' && typeof(question2)==='string' && typeof(question1)!=null && typeof(question2)!=null &&
 question1!='' && question2!='' && question1.length<50)
 {
   appData.expenses[question1]=question2;
 } else {
   i--;
 }
}
/*
let i=0;
while (i<2)
{
   let question1=prompt("Введите обязательную статью расходов в этом месяце","bills");
   let question2=prompt("Во сколько обойдется?","100");   
if (typeof(question1)==='string' && typeof(question2)==='string' && typeof(question1)!=null && typeof(question2)!=null &&
 question1!='' && question2!='' && question1.length<50)
 {
   appData.expenses[question1]=question2;
   i++;
 }
}
do {
   let question1=prompt("Введите обязательную статью расходов в этом месяце","bills");
   let question2=prompt("Во сколько обойдется?","100");   
if (typeof(question1)==='string' && typeof(question2)==='string' && typeof(question1)!=null && typeof(question2)!=null &&
 question1!='' && question2!='' && question1.length<50)
 {
   appData.expenses[question1]=question2;
   i++;
 }
} while ( i<2 );
*/
console.log(appData.expenses);
alert(`Ваш бюджет на один день составляет ${Math.floor(appData.budget/30)}`);

if ( appData.budget <= 1000 ) 
{
   alert('Достаток ниже среднего');
}
else if ( appData.budget <= 2500 && appData.budget > 1000 )  
{
   alert("Достаток средний");
}
else if (appData.budget>2500) 
{
   alert("Достаток выше среднего");
}
else 
{ 
   alert("Наша статистика не располагает такими данными"); 
}
//Сколько типов данных существует в JS?-7
//Как вывести информацию в консоль?-console.log()
//Какая функция операторов || и &&?-логическое or и and

