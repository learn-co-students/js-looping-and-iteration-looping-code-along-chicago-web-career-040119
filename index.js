// Code your solutions in this file
const gifts = ['teddy bear', 'drone', 'doll'];

function wrapGifts(gifts) {
	for (let i = 0; i < gifts.length; i++) {
		console.log(`Wrapped ${gifts[i]} and added a bow!`);
	}

	return gifts;
}

function writeCards(names, eventName) {

	let output = names.map(function(name){
		return `Thank you, ${name}, for the wonderful ${eventName} gift!`;
	});

	return output;
}

function countdown(num) {
	if (num > 0) {
		while (num >= 0) {
			console.log(num);
			num--;
		}
	}
}
