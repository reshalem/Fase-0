// Logic Challenge - Konversi Menit

function konversiMenit(menit) {
	var hour = 0;
	var min = 0;
	if (menit > 60) {
		hour = Math.floor(menit/60);
		min = menit % 60;
		if (min < 10) {
			min = '0' + min;
		}
	} else {
		hour = 0;
		min = menit;
	}
	var time = hour + ':' + min;
	return time;
}

console.log(konversiMenit(63));
console.log(konversiMenit(124));
console.log(konversiMenit(53));
console.log(konversiMenit(88));
console.log(konversiMenit(120));