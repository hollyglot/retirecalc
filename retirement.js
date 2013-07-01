document.write('<h1>Retirement Calculator!</h1>');

name, savings, retirment_age, monthly_savings, interest, current_age = '','','','',''

var name = prompt("What is your name?");
var savings = prompt("How much do you have in your retirement account?");
var monthly_savings = prompt("How much do you put in your retirment account per month?");
var interest = Number(prompt("How much is the yearly interest for your retirement account?"));
var retirment_age = Number(prompt("At what age will you retire?"));
var current_age = Number(prompt("What is your current age?"));

var months_to_retirement = (12 * (retirment_age - current_age));

var monthly_interest = ((interest/100) / 12);
var monthly_compound_interest = (1 + monthly_interest);
var total_compound_interest = Math.pow(monthly_compound_interest, months_to_retirement);
var savings_compounded = (total_compound_interest * savings);

var future_compound_interest = ((total_compound_interest - 1) / monthly_interest);
var monthly_savings_compounded = (monthly_savings * future_compound_interest);

var total_retirement_balance = (savings_compounded + monthly_savings_compounded);

var total_rounded = parseFloat(Math.round(total_retirement_balance * 100) / 100).toFixed(2);


document.write("<h1>" + name + ", your total retirement balance at age " + retirment_age + " will be: $" + total_rounded + "</h1>");