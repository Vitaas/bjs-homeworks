//Задание 1

function parseCount(amount) {
  if(Number.parseInt(amount, 10)) {
   return Number.parseInt(amount, 10)
   } else {
     throw new Error("Невалидное значение");
  }
}

function validateCount(amount) {
  try {
    return parseCount();
  }catch(e){
    return e;
  }
}

//Задание 2

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    if ((this.a + this.b) < this.c || (this.a + this.c) < this.b) || (this.b + this.c) < this.a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }
}

getPerimeter() {
  return this.a + this.b + this.c;
}

getArea() {
  let p = (this.a + this.b + this.c) / 2
  return Math.sqrt((p(p - this.a)(p - this.b)(p - this.c))
}

function getTriangle(a, b, c) {
  const triangle = new Triangle;
  try  {
    return triangle;
  } catch(e) {
    return console.log("Ошибка! Неправильный треугольник");
    // return e; - второй вариант возврата ошибки
  }
}