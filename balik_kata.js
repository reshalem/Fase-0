// Logic Challenge - Balik Kata

function balikKata(kata) {
	var balik = '';
	for (var i = kata.length-1; i >= 0; i--) {
		balik = balik + kata[i];
	}
	return balik;
}

console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'));
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));
