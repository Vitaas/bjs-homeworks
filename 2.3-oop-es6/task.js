//Задание 1

class Weapon {
  constructor (name,attack,durability,range) {
    this.name = name;
    this.attack = attack;
    this.durability = durability;
    this.range = range;
    this.durabilityFirst = durability;
  }

  takeDamage(damage) {
    this.durability -= damage;
    if (this.durability < 0) {
      this.durability = 0;
    }
  }

  getDamage() {
    if (this.durability === 0) {
      return 0;
    } else if (this.durability < this.durabilityFirst * 0.3) {
      return this.attack = this.attack / 2;
    } else {
      return this.attack;
    }
  }

  isBroken() {
    if (this.durability > 0) {
      return false;
    } else {
      return true;
    }
  }
}

const sword = new Weapon({
    name: 'Старый меч',
    attack: 20,
    durability: 10,
    range: 1
});

const arm = new Weapon({
    name: 'Рука',
    attack: 1,
    durability: Infinity,
    range: 1,
});

const bow = new Weapon({
    name: 'Лук',
    attack: 10,
    durability: 200,
    range: 3,
});

sword.takeDamage(5);
console.log(sword.durability); // 5

sword.takeDamage(50);
console.log(sword.durability); // 0

// //Задание 2

class Arm extends Weapon {
  constructor() {
  super()
    this.name = 'Рука';
    this.attack = 1;
    this.durability = Infinity;
    this.range = 1;
  }
}

class Bow extends Weapon {
  constructor() {
  super()
    this.name = 'Лук';
    this.attack = 10;
    this.durability = 200;
    this.range = 3;
  }
}

class Sword extends Weapon {
  constructor() {
  super()
    this.name = 'Меч';
    this.attack = 25;
    this.durability = 500;
    this.range = 1;
  }
}

class Knife extends Weapon {
  constructor() {
  super()
    this.name = 'Нож';
    this.attack = 5;
    this.durability = 300;
    this.range = 1;
  }
}

class Staff extends Weapon {
  constructor() {
  super()
    this.name = 'Посох';
    this.attack = 8;
    this.durability = 300;
    this.range = 2;
  }
}

class LongBow extends Bow {
  constructor() {
  super()
    this.name = 'Длинный лук';
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

// const newarm = new Arm();

// console.log(newarm.name);
// console.log(newarm.attack);
// console.log(newarm.durability);
// console.log(newarm.range);
// newarm.takeDamage(100);
// console.log(newarm.getDamage());
// console.log(newarm.isBroken());

const newbow = new Bow();

console.log(newbow.name);
console.log(newbow.attack);
console.log(newbow.durability);
console.log(newbow.range);
newbow.takeDamage(100);
console.log(newbow.getDamage());
console.log(newbow.isBroken());

// const sword = new Sword();

// console.log(sword.name);
// console.log(sword.attack);
// console.log(sword.durability);
// console.log(sword.range);
// sword.takeDamage(100);
// console.log(sword.getDamage());
// console.log(sword.isBroken());

// const knife = new Knife();

// console.log(knife.name);
// console.log(knife.attack);
// console.log(knife.durability);
// console.log(knife.range);
// knife.takeDamage(100);
// console.log(knife.getDamage());
// console.log(knife.isBroken());

// const staff = new Staff();

// console.log(staff.name);
// console.log(staff.attack);
// console.log(staff.durability);
// console.log(staff.range);
// staff.takeDamage(100);
// console.log(staff.getDamage());
// console.log(staff.isBroken());

// const longBow = new LongBow();

// console.log(longBow.name);
// console.log(longBow.attack);
// console.log(longBow.durability);
// console.log(longBow.range);
// longBow.takeDamage(100);
// console.log(longBow.getDamage());
// console.log(longBow.isBroken());

// const axe = new Axe();

// console.log(axe.name);
// console.log(axe.attack);
// console.log(axe.durability);
// console.log(axe.range);
// axe.takeDamage(100);
// console.log(axe.getDamage());
// console.log(axe.isBroken());

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