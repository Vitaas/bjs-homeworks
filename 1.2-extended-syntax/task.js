'use strict';

function getResult(a,b,c){
  
  let d = Math.pow(b, 2) - 4 * a * c;
  let x = (-b / 2 * a);
  let x1 = (-b + Math.sqrt(d)) / 2 * a;
  let x2 = (-b - Math.sqrt(d)) / 2 * a;
  let result = [];
  

  if (d === 0) {
    result[0] = x;
  } else if (d > 0) {
    result[0] = x1;
    result[1] = x2;
  }
  return result;
}

let marks = [4, 5, 5, 3, 4, 3, 5];

function getAverageMark(marks){

if (marks.lenght == 0) {
  return 0;
} else if (marks.length > 5) {
  console.log('Оценок больше 5, средняя будет считаться по первым пяти оценкам');
  marks = marks.splice(0, 5);
}

let sumMarks = 0;

for(let i = 0; i < marks.length; i++) {
  sumMarks += marks[i];
}

let averageMark = sumMarks / marks.length;

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