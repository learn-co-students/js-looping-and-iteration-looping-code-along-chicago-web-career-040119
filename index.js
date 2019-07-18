// Code your solutions in this file
function writeCards(arrOfNames, eventName) {
  let retArr = []
  for (let i = 0; i < arrOfNames.length; i++) {
    let thankYou = `Thank you, ${arrOfNames[i]}, for the wonderful ${eventName} gift!`;
    retArr.push(thankYou);
  }
  return retArr;
}

function countdown(num) {
  while (num >= 0) {
    console.log(num)
    num -= 1;
  }
}
