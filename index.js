// Code your solutions in this file
function writeCards(array, string) {
  let messageArray = [];
  for (let i = 0; i < array.length; i++) {
  messageArray.push(`Thank you, ${array[i]}, for the wonderful ${string} gift!`)
}
return messageArray
}

function countdown(n) {
    while (n >= 0) {
      console.log(n);
      n--;
    }
}
