// Code your solutions in this file
// const writeCards(["Ada", "Brendan", "Ali"], "birthday");

function writeCards(names, event) {
  let array = []
  for (let i = 0; i < names.length; i++) {
   array.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
 }

 return array;
}


function countdown(num) {
  let countdown = num;
  while (countdown >= 0) {
    console.log(countdown--);
}
}
