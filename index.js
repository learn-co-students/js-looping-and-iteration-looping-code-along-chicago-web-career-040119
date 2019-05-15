// Code your solutions in this file
function writeCards( namesArray, event ) {
  let a = []
  for ( let i = 0; i < namesArray.length; i++ ) {
    a.push( `Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`);
  };
  return a;
};

function countdown(integer) {
   do {
    console.log(integer);
    integer--;
  } while (integer >= 0);
};
