'use strict';
let money,time;
start();
function start(){   
   time= prompt("Введите дату в формате YYYY-MM-DD","");
   money=+prompt("Ваш бюджет на месяц?", "12000");
   while (isNaN(money) || money == "" || money == null) {
      money=+prompt("Ваш бюджет на месяц?", "12000");
   } 
}
let appData={
   budget:money,
   timeData:time,
   expenses:{} ,
   optionalExpenses: {},
   income:[],
   savings:true,
   chooseExpenes : function() 
   {
      let i=0;
      do {
         let question1=prompt("Введите обязательную статью расходов в этом месяце","bills");
         let question2=prompt("Во сколько обойдется?","100");   
      if (typeof(question1)==='string' && typeof(question2)==='string' && typeof(question1)!=null && 
      typeof(question2)!=null &&   question1!='' && question2!='' && question1.length<50)
       {
         appData.expenses[question1]=question2;
         i++;
       }
      } while ( i<2 );
   },
   detectDayBudget: function(){
      alert(`Ваш бюджет на один день составляет ${(appData.budget/30).toFixed(1)}`);   
   },
   detectLevel: function(){

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
   },
   chooseOptExpensens:function(){
      let i=0;
      do{
         let answer=prompt("Статья необязательных расходов?","sweet");
         if (answer != '' || answer != null )
         {
            appData.optionalExpenses[i]=answer;
            i++;
         }         
      }while (i<3);   
   },
   countSavings: function(){
      if (appData.savings){   
         let sum=+prompt("Какова сумма на вашем счете?","1000"),
         percent=prompt("Под какой процент?","12%");
         alert(`Ежемесячный доход с вашего вклада составляет ${sum/100/12*parseInt(percent)}`);   
      }
   },
chooseIncome: function(){
   let answer;
   do{
      answer=prompt("Введите дополнительные способы дохода (через запятую)"," esdf, adc, a123, 2sdc");
   }while (answer==null || answer == '');
   let arrIncome=answer.split(', ');
   arrIncome.forEach(function(item,i){
   alert(` Способ заработка ${(i+1)} : ${item}`);
   });

},   

};
appData.detectDayBudget();
appData.detectLevel();
appData.countSavings();
appData.chooseOptExpensens();
appData.chooseExpenes();
appData.chooseIncome();
function toConsoleObject(){
   for (let i in appData)
   {
console.log("Наша программа включает в себя свойство " + i + " значение " + appData[i]);
   }
}




