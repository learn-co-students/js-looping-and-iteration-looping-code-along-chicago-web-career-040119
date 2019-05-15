// Code your solutions in this file
function countdown(start) {
  let counter = start
  while (counter > -1) {
    console.log(counter);
    counter--;
  }
}


function writeCards(names) {
  // for (name of names) {
  //   let letter = `Thank you, ${name}, for the wonderful surprise gift!`;
  //   console.log(letter);
  // }

  let letters = names.map(name => {
    let letter = `Thank you, ${name}, for the wonderful surprise gift!`
    return letter
  })

  console.log(letters);
  return letters;
}
