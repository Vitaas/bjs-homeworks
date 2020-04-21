"use strict";

function calculateTotalMortgage(percent, contribution, amount, date) {
  if (isNaN(percent)) {
    return `Параметр <Процентная ставка> содержит неправильное значение <${percent}>`;
  }

  if (isNaN(contribution)) {
    return `Параметр <Первоначальный взнос> содержит неправильное значение <${contribution}>`;
  }

  if (isNaN(amount)) {
    return `Параметр <Сумма кредита> содержит неправильное значение <${amount}>`;
  }

  if (isNaN(date)) {
    return `Параметр <Срок кредита> содержит неправильное значение <${date}>`;
  }

  const parsedPercent = parseInt(percent, 10);
  const parsedContribution = parseInt(contribution, 10);
  const parsedAmount = parseInt(amount, 10);
  const parsedDate = parseInt(date, 10);

  let monthlyPercent = parsedPercent / 12 / 100;

  // Посчитайте тело кредита: сумма, которую необходимо вернуть банку. (сумма кредита минус первоначальный взнос)

  let bodyLoan = amount - parsedContribution;

  // Ежемесячная оплата

  let monthlyPayment =
    parsedAmount *
    (monthlyPercent +
      monthlyPercent / (Math.pow(1 + monthlyPercent, parsedDate) - 1));

  // Общая сумма, которую придется заплатить клиенту

  let totalAmount = (monthlyPayment * parsedDate).toFixed(2);

  return Number(totalAmount);
}

const result = calculateTotalMortgage("10", 0, 20000, 24);
console.log("result", result);

function getGreeting(name) {
  return `Привет, мир! Меня зовут ${name || "Аноним"}`;
}

getGreeting(undefined);
