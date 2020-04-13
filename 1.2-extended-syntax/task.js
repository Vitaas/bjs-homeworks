'use strict';

function getResult(a,b,c){
  
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = (-b / 2 * a);
  let x1 = (-b + Math.sqrt(d)) / 2 * a;
  let x2 = (-b - Math.sqrt(d)) / 2 * a;
  let result = [];
  

  if (d < 0) {
    return result.push[''];
  } else if (d === 0) {
    return result.push(x);
  } else {
    return result.push(x1, x2);
  }
}

let marks = [4, 5, 5, 3, 4, 3, 5];

function getAverageMark(marks){

  let sumMarks = 0;
  let averageMark = 0;

  if (marks.length > 5) {
    console.log('Оценок больше 5, средняя будет считаться по первым пяти оценкам');
    let marks = marks.splice(0, 5);
  } else if (marks.lenght == 0) {
    return 0;
  } else {
    for (let i = 0; 5 >= marks.length; i++) {
      sum += marks[i];
      averageMark = sumMarks / marks.length;
    }
    return averageMark;
}

function askDrink(name, dateOfBirthday) {
  let now = new Date();
  let age = now.getFullYear() - dateOfBirthday.getFullYear();
  
  if (age > 18) {
    return `Не желаете ли олд-фэшн, ${name}?`;
  } else {
    return `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`;
  }
}
