// //274
// func([1, 2, 3, 4, 5]);
// function func(arr) {
// 	console.log(arr.shift(), arr);
	
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }

// //275
// function getSum(arr) {
// 	let sum = arr.shift();
	
// 	if (arr.length !== 0) {
//         let sqrt = 
// 		sum += getSum(arr);
// 	}
	
// 	return sum;
// }

// console.log(getSum([1, 2, 3, 4, 5]));
// function sumOfSquares(arr, index = 0) {
//     if (index === arr.length) {
//       return 0; // базовый случай: если достигнут конец массива, возвращаем 0
//     } else {
//       const square = arr[index] * arr[index];
//       return square + sumOfSquares(arr, index + 1); // рекурсивно вызываем функцию для следующего элемента массива
//     }
// }
// const arr = [1, 2, 3, 4, 5];
// const result = sumOfSquares(arr);
// console.log(result); // выводит 55, так как 1^2 + 2^2 + 3^2 + 4^2 + 5^2 = 55

// //276
// function func(obj) {
// 	for (let key in obj) {
// 		if (typeof obj[key] === 'object') {
// 			func(obj[key]);
// 		} else {
// 			console.log(obj[key]);
// 		}
// 	}
// }

// func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}});

// function func(arr) {
// 	let result = [];
// 	for(let i = 0; i < arr.length; i++) {
// 		let elem = arr[i];
// 		if (typeof elem == 'object') {
// 			result.push(elem);
// 		} else if(Array.isArray(elem)){
// 			result.push(...func(elem));
// 		}
// 	}
// 	return result;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));

// //277
// function func(obj) {
// 	let sum = 0;
	
// 	for (let key in obj) {
// 		if (typeof obj[key] == 'object') {
// 			sum += func(obj[key]);
// 		} else {
// 			sum += obj[key];
// 		}
// 	}
// 	return sum;
// }

// console.log(func({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}}));

// //278
// function func(arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i] ** 2;
// 		}
// 	}
	
// 	return arr;
// }

// console.log(func([1, [2, 7, 8], [3, 4], [5, [6, 7]]]));

// //279
// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function(elem) {
// 	return Math.sqrt(elem);
// });
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// let res = arr.map(function(elem) {
// 	return elem + '!';
// });
// console.log(res);

// let string = [ "world", "Hellow"];
// let res = string.map(function(str) {
// 	return str.split('').reverse().join('');
// });
// console.log(res);

// let arr = ['123', '456', '789'];
// let res = arr.map (function (elem) {
//     let str = elem.split('');
//     return str;
// });
// console.log(res);

// let arr = [1, 2, 3, 4, 5];

// let res = arr.map(function(elem, index) {
// 	return elem * index;
// });

// console.log(res);

// //280
// let arr = [1, 2, 3, 4, 5];
// let sum = 0;

// arr.forEach(function(elem) {
// 	sum += elem ** 2;
// });

// console.log(sum);

// //281
// let arr = [5, 1, -5, -1, -9, 3, 4, -1];

// let res = arr.filter(function(elem) {
// 	if (elem >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);

// let arr = [5, 1, -5, -1, -9, 3, 4, -1];

// let res = arr.filter(function(elem) {
// 	if (elem <= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);

// let arr = [5, 1, 45, -1, -9, 3, 9, -1];

// let res = arr.filter(function(elem) {
// 	if (elem > 0 && elem < 10) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);

// let arr = [ "world", "Hellow"];
// let res = arr.filter(function(elem) {
// 	if (elem.length > 5) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);

// let arr = [5, 1, 45, -1, -9, 3, 9, -1];

// let res = arr.filter(function(elem, index) {
// 	let num = elem * index;
// 	if (num > 30) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let res = arr.filter(function(elem) {
	
// 	if (!Array.isArray(elem)) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(res);

// //282
// let arr = [1, 2, 3, 4, 5];

// let check = arr.every(function(elem) {
// 	if (elem >= 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(check);

// let arr = [1, 2, 3, 4, 5];

// let check = arr.every(function(elem, index) {
// 	if (elem * index < 30) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// console.log(check);

////283
// let arr = [2, 4, -5, 8];

// let result = arr.some(function(elem) {
// 	return elem > 0;
// });

// console.log(result);

// let arr = [2, 4, 25, 8];

// let result = arr.some(function(elem) {
// 	for (let i = 0; i < arr.length; i++){
// 		let num = elem * arr[i];
// 		return num > 30;
// 	}
// });

// console.log(result);

// //286
// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));

// //288
// let arr = [1, 2, 3, 4, 5]
// console.log(Math.min(...arr));

// //293
// function func(...nums) {
// 	let sum = 0;
// 	let res = 0;
// 	for (let num of nums) {
// 		sum += num;
// 		for (let i = 0; i < nums.length; i++){
// 			res = sum / i;
// 		}
// 	}
	
// 	return sum;
// }

// let result = func(1, 2, 3, 8);
// console.log(result);