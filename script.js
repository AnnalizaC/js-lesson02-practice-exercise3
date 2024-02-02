var hourlyWage = prompt("What is your hourly wage? (ex. 20.00)");

var hoursWorkedWeek = prompt(
  "How many hours did your work this week? (ex. 40)"
);

console.log(
  `Your weekly pay before taxes is $${(hourlyWage * hoursWorkedWeek).toFixed(
    2
  )}`
);
