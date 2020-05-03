function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
  // Замедление на половину секунды.
  sleep(500); // Можно использовать другое значение замедления.
  return args.reduce((sum, arg) => {
    return sum += +arg;
  }, 0);
}

function compareArrays( arr1, arr2 ) {
  if (arr1.length !== arr2.length) {
    return false;
  } else {
    return arr1.every((element, index) => element === arr2[index])
  }
}

function memorize(fn, limit) {
  const memory = [];

  return function (...args) {
    let find = memory.find(element => compareArrays(element.args, args));
  
  let result = fn(...args);

  if (find !== undefined) {
    console.log('Вызов из памяти');
    return find.result;
  }

   if (memory.length > limit) {
     memory.shift();
    } else {      
      memory.push({args: args, result: result})            
    }
    return result;
  }
}

const newArr = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];

function testCase(testFunction, timer) {
  console.time(timer);
  for (let i = 0; (i < 10 * arr.length); i++) {
    newArr.forEach(item => testFunction(...item));    
  }
  console.timeEnd(timer);
}

testCase(sum, 'timer');