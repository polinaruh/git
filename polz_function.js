// // //200
// // function func() {
// // 	console.log('Полина');
// // }
// // func();

// // function sumNumbers() {
// //     let sum = 0;
// //     for (let i = 1; i <= 100; i++) {
// //       sum += i;
// //     }
// //     console.log(sum);
// // }
// // sumNumbers();

// ////201
// // function func1(num) {
// // 	console.log(num ** 3);
// // }
// // func1(5);

// // function func2(num0) {
// //     if (num0>0) {
// //         console.log('+++');  
// //     }
// // 	else {
// //         console.log('---');
// //     }
// // }
// // func2(-5);

// //// 202
// // function func3(num1, num2, num3) {
// // 	let sum=0;
// //     sum=Number(num1 + num2 + num3);
// //     console.log(sum);
// // }
// // func3(5, 7, 81);

// // //203
// // function func4(num1, num2, num3) {
// // 	let sum=0;
// //     sum=Number(num1 + num2 + num3);
// //     console.log(sum);
// // }
// // let param1 = 1;
// // let param2 = 2;
// // let param3 = 3;
// // func4(param1, param2, param3);

// // //205
// // function func5(num) {
// // 	return Math.pow(num, 3);
// // }
// // let step = func5(3);
// // console.log(step);

// // function func6(num) {
// // 	return Math.sqrt(num);
// // }
// // let count2 = Math.sqrt(3);
// // let count3 = Math.sqrt(4);
// // let summa = count2 + count3;
// // console.log(summa);


// //206
// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// let count = round(sqrt(2));
// console.log(count);


// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function summa2(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// let count2 = summa2(sqrt(2), sqrt(3), sqrt(4));
// console.log(count2);


// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function summa3(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// let count3 = round(summa3(sqrt(2), sqrt(3), sqrt(4)));
// console.log(count3);

// //209
// function func(num) {
// 	let i = 0;
// 	while (num >= 10) { 
// 		num = num / 2;
// 		i++;	
// 	}
// 	return i;
// }
// let result = func(250);
// console.log( result );

// //210
// function func(num1, num2) {
// 	let result2;
	
// 	  if (num1 > 0 && num2 > 0) {
// 	    return num1 * num2;
// 	  } else {
// 	    return num1 - num2;
// 	  }
	
// }
// console.log(func(3, 4));

// //211
// function func10(arrray) {
// 	for (let elem of arrray) {
// 		if (elem % 2 !== 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// let arrray = [2, 4, 7, 8];
// console.log(func10(arrray));

// function func11(num) {
// 	let elements = String(num);
// 	for (let elm of elements) {
// 		if (elm % 2 === 0) {
// 		  return false; 
// 		}
// 	  }
// 	  return true; 
// }
// console.log(func11(578));

// function func12(arrray2) {
// 	for (let i = 0; i < arr.length - 1; i++) {
// 		if (arrray2[i] == arrray2[i+1]) {
// 			return true;
// 		}
// 	}
// 	return false;
// }
// let arrray2 = [2, 4, 4, 7, 8];
// console.log(func12(arrray2));

// //212
// function func(a, b) {
// 	return a == b;
// }

// function func(a, b) {
// 	return a != b;
// }

// function func(a, b) {
// 	return a + b >= 10;
// }

// function func(num) {
// 	return num >= 0;
// }

// //213
// // function average(arr) {
// // 	if (arr.length === 0) {
// // 	  return 0;
// // 	}
	
// // 	let sum = 0;
	
// // 	for (let elem of arr) {
// // 	  sum += elem;
// // 	}
	
// // 	return sum / arr.length;
// // }

// // function func(arr1, arr2) {
// // 	let res1 = 0;
// // 	for (let elem of arr1) {
// // 		res1 += elem;
// // 	}
	
// // 	let res2 = 0;
// // 	for (let elem of arr2) {
// // 		res2 += elem;
// // 	}

// // 	return res1 / res2;
// // }

// // function getProduct(arr) {
// // 	let res = 1;
	
// // 	for (let elem of arr) {
// // 	  res *= elem;
// // 	}
	
// // 	return res;
// // }

// //214
// function func1() {
// 	return 3;
// }
  
// function func2() {
// 	return 5;
// }  
// console.log(func1() + func2()); 

// function summa4(arr) {
// 	let res = 0;
	
// 	for (let elem of arr) {
// 		res += elem;	
// 	}

// 	return res;
// }
// console.log(summa4([1, 2, 3, 4, 5]));

// let arrray3 = [1, 2, 3, 4, 5];
// function func14(arrray3) {
// 	let res = 0;
	
// 	for (let elem of arrray3) {
// 		res += elem;
// 	}
// 	return res;
// }
// console.log(func14(arrray3));

// function func1() {
// 	return 3;
// }
  
// function func2() {
// 	return 5;
// }  
// console.log(func1() + func2()); 

// let arrray4 = [1, 2, 3, 4, 5];
// function summa5(arrray4) {
// 	let summa6 = 0;
	
// 	for (let elem of arrray4) {
// 		summa6 += elem;
// 	}
	
// 	return summa6;
// }
// console.log(summa5(arrray3));

// function add(num) {
// 	if (num <= 9) {
// 	  return '0' + num;
// 	} else {
// 	  return num;
// 	}
// }

// let numm6 = 12345;
// let result3 = getDigitsSum(numm6);
// console.log(result3);

// function getDigitsSum(numm6) {
// 	let str9 = String(numm6);
// 	let summa7 = 0;
	
// 	for (let i = 0; i < str9.length; i++){
// 		summa7 += parseInt(str9[i]);
// 	}
	
// 	return summa7;
// }

// function isPrime(num) {
// 	if (num <= 1) {
// 	  return false;
// 	}
  
// 	for (let i = 2; i <= Math.sqrt(num); i++) {
// 	  if (num % i === 0) {
// 		return false;
// 	  }
// 	}
  
// 	return true;
// }
// console.log(isPrime(13)); 

//215
function summa7(arr) {
	let res = 0;
	
	for (let elem of arr) {
		res += elem;	
	}

	return res;
}
console.log(summa7([1, 2, 3, 4, 5]));

function func15(num) {
	if (num <= 0) {
	  return;
	}
  
	let divisors = [];
	for (let i = 1; i <= Math.floor(num / 2); i++) {
	  if (num % i === 0) {
		divisors.push(i);
	  }
	}
  
	divisors.push(num);
	return divisors;
}
let number = 49;
let result10 = func15(number);
console.log(`Делители числа ${number}: ${result10}`);

function func16(str) {
	return str.split("");
}
let text = "Wildways";
let result11 = func16(text);
console.log(result11);

let text2 = "Wildways";
let text2Rev = ""; 
for (let i = text2.length-1; i >= 0; i--) {
	text2Rev += text2[i];
}
console.log(text2Rev);

function func17(str) {
    return str.slice(0, 1).toUpperCase() + str.slice(1);
}
console.log(func17('wildways')); 

function func18(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i][0].toUpperCase() + str[i].substr(1);
    }
    return str.join(' ');
}
console.log(func18("wildways wildways wildways"));

function func(count4) {
	let arrray5 = [];
	for (let i = 1; i <= count4; i++) {
		arrray5.push(i);
	}
	return arrray5;
}
let count4 = 12;
let resultArray = func(count4);
console.log(resultArray);

let numm7 = 17815;
let result4 = getDigitsSum(numm7);
console.log(result4);

function getDigitsSum(numm7) {
	let str9 = String(numm7);
	let summa7 = 0;
	
	for (let i = 0; i < str9.length; i++){
		summa7 += parseInt(str9[i]);
	}
	return summa7;
}

function func19(year) {
	if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
	  return true;
	} else {
	  return false;
	}
}
let year = 2022;
let result12 = func19(year);
if (result12) {
	console.log(year + " является високосным годом");
} else {
	console.log(year + " не является високосным годом");
}

function func20(seconds) {
	const secday = 86400; 
	return Math.floor(seconds / secday);
}
let seconds = 272800; 
let days = func20(seconds);
console.log(days);

let arrray6 = [1, 2, 3, 4, 5];  
function func21(arr) {
	return arr[Math.floor(Math.random() * arr.length)];
}
let randomElement = func21(arrray6);
console.log(randomElement);  

function isPrime(num7) {
	if (num7 <= 1) {
	  return false;
	}
  
	for (let i = 2; i <= Math.sqrt(num7); i++) {
	  if (num7 % i === 0) {
		return false;
	  }
	}
	return true;
}
let num7 = 13;
let result13 = func19(year);
if (result13) { 
	console.log(num7 + " не является простым числом");
} else {
	console.log(num7 + " является простым числом");
}