var asterisk;

for (var rows = 1; rows <=5; rows++) {
	asterisk = '*';
	console.log(asterisk);
}
asterisk = ''; // nilai asterisk dikosongkan agar pada looping kedua nilai asterisk mulai dari satu lagi.
console.log('');


for (var rows = 1; rows <= 5; rows++) {
	for(var rows2 = 1; rows2 <= 5; rows2++) {
		asterisk = asterisk + '*';
	}

	console.log(asterisk);
	asterisk = '';
}
console.log('');


var loop = 0;

for (var rows = 1; rows <= 5; rows++) {
	loop++;
	console.log('loop 1');
	for(var rows3 = 1; rows3 <= rows; rows3++) {
		loop++;
		asterisk = asterisk + '*';
		console.log('loop 2');
	}

	console.log(asterisk);
	asterisk = '';
}
console.log(loop);