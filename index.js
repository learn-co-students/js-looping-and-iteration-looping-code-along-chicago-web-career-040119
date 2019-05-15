// Code your solutions in this file

function writeCards(names_arr, event) {
  let cards = []
  for (let i=0; i < names_arr.length; i++) {
   cards.push(`Thank you, ${names_arr[i]}, for the wonderful ${event} gift!`)
  }
  return cards;
}


function countdown(num) {
  let i = num;
  while(i >= 0 ) {
    console.log(i--);
  }
}

// or it could be writed like this:
// function countdown(num) {
//   let i= num;
//   while ( i >= 0 ) {
//     console.log(i);
//     i--;
//   }
// }
