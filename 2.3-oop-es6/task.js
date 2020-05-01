//Задание 1

class Weapon {
  constructor(name, attack, durability, range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.durabilityFirst = durability;
  }
}

takeDamage(damage) {
  this.durability -= damage;
  if (this.durability < 0) {
    this.durability = 0;
  }
}

getDamage() {
  if (this.durability == 0) {
    return this.attack = 0;
  } else if (this.durability < this.durabilityFirst * 0.3) {
    return this.attack = this.attack / 2;
  } else {
    return this.attack;
  }
}

isBroken() {
  if (this.durability > 0) {
    return true;
  } else {
    return false;
  }
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const axe = new Weapon('Секира', 27, 800, sword.range);
const StormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);

console.log(arm);
console.log(bow);
console.log(sword);
console.log(knife);
console.log(staff);
console.log(longBow);
console.log(axe);
console.log(StormStaff);

//Задание 2

class Arm extends Weapon {
  constructor() {
  super()
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
    this.durabilityFirst = durability;
  }
}

class Bow extends Weapon {
  constructor() {
  super()
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
    this.durabilityFirst = durability;
  }
}

class Sword extends Weapon {
  constructor() {
  super()
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
    this.durabilityFirst = durability;
  }
}

class Knife extends Weapon {
  constructor() {
  super()
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
    this.durabilityFirst = durability;
  }
}

class Staff extends Weapon {
  constructor() {
  super()
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
    this.durabilityFirst = durability;
  }
}

class LongBow extends Bow {
  constructor() {
  super()
    this.name = 'Длинный Лук';
    this.attack = 15;
    this.range = 4;
  }
}

class Axe extends Sword {
  constructor() {
  super()
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaff extends Staff {
  constructor() {
  super()
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const arm = new Arm();
console.log(arm.name);
console.log(arm.attack);
console.log(arm.durability);
console.log(arm.range);
arm.takeDamage(100);
arm.getDamage();
console.log(arm.isBroken);

const bow = new Bow();
console.log(bow.name);
console.log(bow.attack);
console.log(bow.durability);
console.log(bow.range);
bow.takeDamage(100);
bow.getDamage();
console.log(bow.isBroken);

const sword = new Sword();
console.log(sword.name);
console.log(sword.attack);
console.log(sword.durability);
console.log(sword.range);
sword.takeDamage(100);
sword.getDamage();
console.log(sword.isBroken);

const knife = new Knife();
console.log(knife.name);
console.log(knife.attack);
console.log(knife.durability);
console.log(knife.range);
knife.takeDamage(100);
knife.getDamage();
console.log(knife.isBroken);

const staff = new Staff();
console.log(staff.name);
console.log(staff.attack);
console.log(staff.durability);
console.log(staff.range);
staff.takeDamage(100);
staff.getDamage();
console.log(staff.isBroken);

const longBow = new LongBow();
console.log(longBow.name);
console.log(longBow.attack);
console.log(longBow.durability);
console.log(longBow.range);
longBow.takeDamage(100);
longBow.getDamage();
console.log(longBow.isBroken);

const axe = new Axe();
console.log(axe.name);
console.log(axe.attack);
console.log(axe.durability);
console.log(axe.range);
axe.takeDamage(100);
axe.getDamage();
console.log(axe.isBroken);

//Задание 3

class StudentLog {
    constructor(name) {
        this.name = name;
        this.subject = {};
    }

    getName() {
        return this.name;
    }

 addGrade(grade, subject) {
  if (grade > 5 || grade <= 0 || typeof grade != 'number') {
    console.log(`Вы пытались поставить оценку \"${grade}\" по предмету \"${subject}\". Допускаются только числа от 1 до 5.`);
    return this.subject[subject] ? this.subject[subject].length: 'Оценок нет'
    } else {
      if (!this.subject[subject]) {
        this.subject[subject] = [];
        this.subject[subject].push(grade)
      } else {
        this.subject[subject].push(grade)
      }
      return this.subject[subject].length;
    }
  }

  getAverageBySubject(subject) {
    let sumGrade = 0;
      if (this.subject[subject]) {
        for (let i = 0; i < this.subject[subject].length; i++) {
          sumGrade += this.subject[subject][i];
        }
      let average = sumGrade / this.subject[subject].length;
      }
      return average;
  }

  getTotalAverage() {
    let totalAverage = 0;
    for (let subject in this.subject) {
      totalAverage += this.getAverageBySubject([subject]);
    }
    return totalAverage / Object.keys(this.subject).length;
  }

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

log.addGrade(3, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('geometry'));
console.log(log.getAverageBySubject('algebra'));

console.log(log.getTotalAverage());