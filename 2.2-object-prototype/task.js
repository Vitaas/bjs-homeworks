function getAnimalSound(animal) {

    if (animal === undefined) {
      return null;
  
    } else {
      let sound = animal.sound;
      return sound;
    }
  }

function getAverageMark(marks){
  let sumMarks = 0;
    
  if (marks.lenght == 0) {
    return 0;
  }
    
  for(let i = 0; i < marks.length; i++) {
    sumMarks += marks[i];
  }
    
  const averageMark = sumMarks / marks.length;
  const roundedAverage = Math.round(averageMark);
    
  return roundedAverage;
}
    
function checkBirthday(birthday) {

  const now = Date.now();
  const birth = +new Date(1998, 2, 26);
  const diff = now - birth;
  const age = diff / (365.25 * 24 * 60 * 60 * 1000);
        
  if(age >= 18) {
    return verdict = console.log('Совершеннолетний');
  } else {
    return verdict = console.log('Несовершеннолетний');
  }
}