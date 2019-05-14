// Code your solutions in this file

function countdown() {

let countdown = 10

while (countdown >= 0) {
  console.log(countdown)
  countdown--
}
};



function writeCards(namesArray, event) {
  let thankYouCards = []
  for (let i = 0; i < namesArray.length; i++) {
    thankYouCards.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
  }
  return thankYouCards
}

// writeCards(strName);
