'use strict';

function calculateTotalMortgage(percent,contribution,amount,date) {

  let monthlyPercent = percent / 12 / 100;

  if (isNaN(percent)) {
    percent = parseInt(percent);
    if (isNaN(percent)) {
      console.log(`Параметр "percent" содержит неправильное значение ${percent}`);
    }
  }

  if (isNaN(contribution)) {
    contribution = parseInt(contribution);
    if (isNaN(contribution)) {
      console.log(`Параметр "contribution" содержит неправильное значение ${contribution}`);
    }
  }
    
  if (isNaN(amount)) {
    amount = parseInt(amount);
    if (isNaN(amount)) {
      console.log(`Параметр "amount" содержит неправильное значение ${amount}`);
    }
  }

  if (isNaN(date)) {
    date = parseInt(date);
    if (isNaN(date)) {
      console.log(`Параметр "date" содержит неправильное значение ${date}`);
    }
  }

// Посчитайте тело кредита: сумма, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос)

  let bodyLoan = amount - contribution;

// Ежемесячная оплата

  let monthlyPayment = amount * (monthlyPercent + monthlyPercent / (Math.pow((1 + monthlyPercent), date) - 1));

// Общая сумма, которую придется заплатить клиенту

  let totalAmount = (monthlyPayment * date).toFixed(2);

  console.log(totalAmount);
  return Number(totalAmount);
}

calculateTotalMortgage(10,0,20000,24)

function getGreeting(name) {
  if (name) {
    return `Привет, мир! Меня зовут ${name}`
  } else {
    return 'Привет, мир! Меня зовут Аноним'
  }
}

getGreeting(undefined)