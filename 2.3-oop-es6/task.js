//Задание 1

class Weapon {
  constructor() {
    this.name;
    this.attack;
    this.durability;
    this.range;
    this.durabilityFirst;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability == 0) {
      return 0;
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
}

const arm = new Weapon('Рука', 1, Infinity, 1);
const bow = new Weapon('Лук', 10, 200, 3);
const sword = new Weapon('Меч', 25, 500, 1);
const knife = new Weapon('Нож', 5, 300, 1);
const staff = new Weapon('Посох', 8, 300, 2);

const longBow = new Weapon('Длинный лук', 15, bow.durability, 4);
const axe = new Weapon('Секира', 27, 800, sword.range);
const stormStaff = new Weapon('Посох Бури', 10, staff.durability, 3);

sword.takeDamage(50);
console.log(sword.durability);
knife.takeDamage(200);
console.log(knife.firstDurability); 
console.log(bow.getDamage())
console.log(staff.isBroken())
console.log(arm);
console.log(bow);
console.log(sword);
console.log(knife);
console.log(staff);
console.log(longBow);
console.log(axe);
console.log(stormStaff);

// //Задание 2

class ArmNew extends Weapon {
  constructor() {
  super()
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  }
}

class BowNew extends Weapon {
  constructor() {
  super()
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class SwordNew extends Weapon {
  constructor() {
  super()
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
  }
}

class KnifeNew extends Weapon {
  constructor() {
  super()
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
  }
}

class StaffNew extends Weapon {
  constructor() {
  super()
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
  }
}

class LongBowNew extends BowNew {
  constructor() {
  super()
    this.name = 'Длинный Лук';
    this.attack = 15;
    this.range = 4;
  }
}

class AxeNew extends SwordNew {
  constructor() {
  super()
    this.name = 'Секира';
    this.attack = 27;
    this.durability = 800;
  }
}

class StormStaffNew extends StaffNew {
  constructor() {
  super()
    this.name = 'Посох Бури';
    this.attack = 10;
    this.range = 3;
  }
}

const armNew = new ArmNew();

console.log(armNew.name);
console.log(armNew.attack);
console.log(armNew.durability);
console.log(armNew.range);
armNew.takeDamage(100);
console.log(armNew.getDamage());
console.log(armNew.isBroken());

const bowNew = new BowNew();

console.log(bowNew.name);
console.log(bowNew.attack);
console.log(bowNew.durability);
console.log(bowNew.range);
bowNew.takeDamage(100);
console.log(bowNew.getDamage());
console.log(bowNew.isBroken());

const swordNew = new SwordNew();

console.log(swordNew.name);
console.log(swordNew.attack);
console.log(swordNew.durability);
console.log(swordNew.range);
swordNew.takeDamage(100);
console.log(swordNew.getDamage());
console.log(swordNew.isBroken());

const knifeNew = new KnifeNew();

console.log(knifeNew.name);
console.log(knifeNew.attack);
console.log(knifeNew.durability);
console.log(knifeNew.range);
knifeNew.takeDamage(100);
console.log(knifeNew.getDamage());
console.log(knifeNew.isBroken());

const staffNew = new StaffNew();

console.log(staffNew.name);
console.log(staffNew.attack);
console.log(staffNew.durability);
console.log(staffNew.range);
staffNew.takeDamage(100);
console.log(staffNew.getDamage());
console.log(staffNew.isBroken());

const longBowNew = new LongBowNew();

console.log(longBowNew.name);
console.log(longBowNew.attack);
console.log(longBowNew.durability);
console.log(longBowNew.range);
longBowNew.takeDamage(100);
console.log(longBowNew.getDamage());
console.log(longBowNew.isBroken());

const axeNew = new AxeNew();

console.log(axeNew.name);
console.log(axeNew.attack);
console.log(axeNew.durability);
console.log(axeNew.range);
axeNew.takeDamage(100);
console.log(axeNew.getDamage());
console.log(axeNew.isBroken());

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
    let average = 0;
      if (this.subject[subject]) {
        for (let grade of this.subject[subject]) {
          sumGrade += grade;
        }
        average = sumGrade / this.subject[subject].length;
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
}

const log = new StudentLog('Олег Никифоров');
console.log(log.getName());

log.addGrade(3, 'algebra');
log.addGrade(4, 'algebra');
log.addGrade(5, 'geometry');
log.addGrade(4, 'geometry');

console.log(log.getAverageBySubject('algebra'));
console.log(log.getAverageBySubject('geometry'));

console.log(log.getTotalAverage());