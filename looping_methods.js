// 1. Melakukan Looping Menggunakan While

var count = 1;

console.log('LOOPING PERTAMA');
while (count <= 20) {
	if (count % 2 === 0) {
		console.log(count + ' - I love coding');
	}
	count = count + 1;
}
console.log(count);
console.log('');

console.log('LOOPING KEDUA');
while (count >= 2) {
	if (count % 2 === 0) {
		console.log(count + ' - I will become fullstack developer');
	}
	count = count - 1;
}
console.log('');


// 2. Melakukan Looping Menggunakan For


console.log('LOOPING PERTAMA');
for (var i = 1; i <= 20; i++) {
	console.log(i + ' - I love coding');
}

console.log('LOOPING KEDUA');
for (var i = 20; i > 0; i--) {
	console.log(i + ' - I will become fullstack developer');
}
console.log('');


// 3. Angka Ganjil dan Genap

for (var i = 1; i <= 100; i++) {
	console.log('counter sekarang = ' + i);
	if (i % 2 !== 0) {
		console.log('GANJIL');
	} else {
		console.log('GENAP');
	}
}
console.log('');

for (var i = 1; i <= 100; i+=2) {
	console.log('counter sekarang = ' + i);
	if (i % 3 === 0) {
		console.log(i + ' KELIPATAN 3');
	}
}
console.log('');

for (var i = 1; i <= 100; i+=5) {
	console.log('counter sekarang = ' + i);
	if (i % 6 === 0) {
		console.log(i + ' KELIPATAN 6');
	}
}	
console.log('');

for (var i = 1; i <= 100; i+=9) {
	console.log('counter sekarang = ' + i);
	if (i % 10 === 0) {
		console.log(i + ' KELIPATAN 10');
	}
}






