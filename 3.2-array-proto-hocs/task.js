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
  if (arr1.length === arr2.length) {
    let checkArr = arr1.every(function(element, index) {
      return element === arr2[index];
    });
    return checkArr;
  }
}

// compareArrays([8,9], [6]);

function memorize(fn, limit) {
  const memory = [];

  return function (...args) {
    let find = memory.find(element => compareArrays(element.args, args));

  if (find) {
    console.log('Вызов из памяти');
    return find.result;
  }
  
  let result = fn(...args);

  // memory.push({args, result});

   if (memory.length > limit) {
     memory.shift();
     memory.push({args, result});
    } else {      
      memory.push({args, result})            
    }
    return result;
  }
}

const sumArr = memorize(sum, 5);
console.log(sumArr(6, 5));

const newArr = [[1,2,3], [1,2], [1,2,3], [1,2], [9,5,2,4]];

function testCase(testFunction) {
  console.time('testFunction');
  for (let i = 0; i < 10 * newArr.lenght; i++) {
    newArr.forEach(item => testFunction(...item));    
  }
  console.timeEnd('testFunction');
}

testCase(sum);