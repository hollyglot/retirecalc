document.write('<p>If you can see this, your quiz script is set up!</p>');
console.log("Hello, welcome to Quizzical");

name, email, budget_in_dollars, timeline_in_months = '','','',''

var name = prompt("What is your name?");
var email = prompt("What is your email?");
var budget_in_dollars = Number(prompt("What is your budget in dollars?"));
var timeline_in_months = Number(prompt("What is your timeline in months?"));

var monthly_budget = budget_in_dollars / timeline_in_months;

alert("Your monthly budget is: " + monthly_budget);

incomes = []
while (income = prompt('How much is your first source of monthly income? [Leave blank to continue')){
  incomes.push(income);
}

for(i = 0; i < incomes.length; i++){
  console.log(incomes[i]);
}

resulting_income_description = '';

for(i = 0; i < incomes.length; i++) {
  resulting_income_description = resulting_income_description + ', ' + incomes[i];
}

alert(resulting_income_description);

document.write("<h1>" + resulting_income_description + "</h1>")