'use strict';

let a = 2;
let b = 4;
let c = -3;

function getResult(a,b,c){
  let x = (-b / 2 * a);
  let x1 = (-4 + Math.sqrt(d)) / 2 * 2;
  let x2 = (-4 - Math.sqrt(d)) / 2 * 2;
  let result = [];
  let d = Math.pow(b, 2) - 4 * a * c;

  if (d < 0) {
    return {d: d, result: result};
  } else if (d === 0) {
    result.push(x);
    return {d: d, result: result};
  } else {
    result.push(x1);
    result.push(x2);
    return {d: d, result: result};
  }
}

let marks = [4, 5, 5, 3, 4, 3, 5];

function getAverageMark(marks){
    let sumMarks = 0;
  let averageMark = 0;
  if (marks.lenght == 0) {
    averageMark = 0;
  } else if (marks.lenght <= 5) {
    for (let i = 0; 1 <= marks.lenght; i++) {
      sum += marks[i];
      averageMark = sumMarks / marks.lenght;
    }
  } else {
    console.log('Оценок больше 5, средняя будет считаться по первым пяти оценкам');
    let marksFive = marks.splice(0, 5);
    for (let i = 0; 1 <= marksFive.lenght; i++) {
      sum += marksFive[i];
      averageMark = sumMarks / marksFive.lenght;
    }
  }
  return averageMark;
}

name = "Иван";
dateOfBirthday = 20;

function askDrink(name,dateOfBirthday){
    let now = new Date();
  let age = now.getFullYear() - dateOfBirthday.getFullYear();
  
  if (age > 18) {
    return console.log(`Не желаете ли олд-фэшн, ${name}?`);
  } else {
    return console.log(`Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`);
  }  
}