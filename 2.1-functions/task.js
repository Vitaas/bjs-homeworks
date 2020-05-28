function getSolutions( a, b, c ) {
  
    let d = Math.pow(b, 2) - 4 * a * c;
    
    if (d < 0) {
      return { D: d, roots: [] };
    } else if (d === 0) {
      let x = (-b / 2 * a);
      return { D: d, roots: [x] };
    } else {
      let x1 = (-b + Math.sqrt(d)) / 2 * a;
      let x2 = (-b - Math.sqrt(d)) / 2 * a;
      return { D: d, roots: [x1, x2] };
    }
  }
  
  function showSolutionsMessage( a, b, c ) {
    let result = getSolutions( a, b, c );
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}`);
    console.log('Значение дискриминанта: ' + result.D);
  
    if (result.D < 0) {
      console.log('Уравнение не имеет вещественных корней');
    } else if (result.D === 0) {
      console.log('Уравнение имеет один корень X₁ = ' + result.roots[0]);
    } else {
      console.log('Уравнение имеет два корня. X₁ = ' + result.roots[0] + ', X₂ = ' + result.roots[1]);
    }
  }
  
  showSolutionsMessage ( 7, 20, -3 );
  
  function getAverageScore(data) {
    let newData = {};
    for (let subject in data) {
      newData[subject] = getAverageMark(data[subject]);
    }
    newData.average = getAverageMark(objectValues(newData));
    return newData;
  }
  
  function getAverageMark(marks) {
    let sumMarks = 0;
    for (let i = 0; i < marks.length; i++) {
      sumMarks += marks[i] / marks.length;
    }
    return sumMarks;
  }
  
  function objectValues(object) {
    let values = [];
    for (let i in object) {
      values.push(object[i]);
    }
    return values;
  }
  
  console.log( getAverageScore({
    algebra:[2,2,5,4,5], 
    geometry:[2,3,4,5], 
    music:[2,2,6],
    russian:[5,5,4,3,5,5,2],
    english:[4,4]
    }));
  
  function getPersonData(secretData) {
  
  }
  
  function getPersonData(secretData) {
    let secretCode = {};
    secretCode.firstName = getDecodedValue(secretData.aaa);
    secretCode.lastName = getDecodedValue(secretData.bbb);
    
    return secretCode;
  }
  
  
  function getDecodedValue(code) {
    if (code === 0) {
      return 'Родриго';
    } else {
      return 'Эмильо';
    }
  }
  
  console.log(getPersonData({
      aaa: 0,
      bbb: 0
    }));
  
    console.log(getPersonData({
      aaa: 1,
      bbb: 0
    }));
  
    console.log(getPersonData({
      aaa: 0,
      bbb: 1
    }));
  
    console.log(getPersonData({
      aaa: 1,
      bbb: 1
    }));