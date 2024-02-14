//223
// function func() {
// 	return '!';
// }

// console.log(func);

// //224
// function func() {
//     return 'control';
// }
// console.log(func());
// console.log(func);
// func = 123;
// console.log(func);

// //225
// function func1() {
//     return '3';
// }
// let func2 = func1;
// console.log(func1());
// console.log(func2());

// //226
// let func1 = function(){
//     return 1;
// };
// let func2 = function() {
//     return 2;
// };
// let res = func1() + func2();
// console.log(res);
// alert (res);

// //229
// func1(); 
// function func1() {
// 	console.log('*-*');
// }

// func2(); 
// let func2 = function() {
// 	console.log('*^*');
// };

// //230
// let func1 = function() {console.log('!')};
// let func2 = function() {
// 	console.log('!')
// };
// function func3() {
// 	console.log('!')
// }

// //237
// let arr = [
// 	function() {return 1},
// 	function() {return 2},
// 	function() {return 3},
// ];
// console.log(arr[2]());
// console.log(arr[0]()+ arr[1]() + arr[2]());
// for (let func of arr) {
// 	func();
//     console.log(func()); 
// }

// //238
// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// };
// console.log(obj.func1() + obj.func2() + obj.func3());
// for (let key of obj) {
//     func(key);
//     console.log(objkey); 
// }

// //239
// let obj  = {
// 	sum: function(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i];
//         }
//         return sum;
//     },
// 	sqrt: function(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//           sum += arr[i] ** 2;
//         }
//         return sum;
//     },
//     cubes: function(arr) {
//         let sum = 0;
//         for (let i = 0; i < arr.length; i++) {
//             sum += arr[i] ** 3;
//         }
//         return sum;
//     }
// };
// let numbers = [1, 2, 3, 4, 5];
// console.log(obj.sum(numbers)); 
// console.log(obj.sqrt(numbers)); 
// console.log(obj.cubes(numbers));

// // //240
// // test(
// // 	function() {return 1;},
// // 	function() {return 2;},
// //     function() {return 3;}
// // );

// // function test(func1, func2, func3) {
// // 	console.log( func1() + func2() + func3()); 
// // }

// //241
// //240
// function test(func1, func2, func3) {
// 	return func1() + func2() + func3(); 
// }
// // function func1() {
// //     return 1;
// // }
// // function func2() {
// //     return 2;
// // }
// // function func3() {
// //     return 3;
// // }
// // console.log(test(func1, func2, func3));

// // Function Expression
// let func1 = function() {
//     return 1;
// };

// let func2 = function() {
//     return 2;
// };

// let func3 = function() {
//     return 3;
// };
// console.log(test(func1, func2, func3));

//242
// function test(func) {
// 	console.log(func(3));
// }
// function cube(num) {
//     return num * num * num;
// }
// test(cube);

// let test = function(func) {
// 	console.log(func(3));
// }
// function cube(num) {
//     return num * num * num;
// }
// test(cube);

// let test = function(func) {
// 	alert(func(2, 3));
// }
// function sum(num1, num2) {
//     return num1 + num2;
// }
// test(sum);

// //243
// function test(num, func1, func2) {
//     return func1(num) + func2(num);
// }
  
// function square(num) {
//     return num * num;
// }
  
// function cube(num) {
//     return num * num * num;
// }
// console.log(test(3, square, cube)); 

// //244
// function test(arr, func) {
// 	for (let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
	
// 	return arr;
// }

// let result = test([8, 2, 5], function(num) {
// 	return num * num * num;
// });

// console.log(result);

// //245
// function func(num1, num2) {
//     function cube(num2) {
//         return num2 * num2 * num2;
//     }
// 	function square(num1) {
// 		return num1 * num1;
// 	}
	
// 	return square(num1) + cube(num2);
// }

// console.log(func(2, 3));

// //250
// function func1() {
//     return function() {
//       return 1;
//     };
// }
  
// function func2() {
//     return function() {
//       return 2;
//     };
// }
  
// let sum = func1()() + func2()();
// console.log(sum); 

// //251
// function func() {
//     return function(){
//         return function(){
//             return function() {
//                 return function() {
//                     return '!';
//                 };
//             };
//         };
//     };
// }

// console.log( func()()()()() );

// //252
// function func(num1) {
//     return function (num2){
//         return function(num3) {
//             return num1 + num2 + num3;
//         };
//     };
// }

// console.log( func(2)(3)(4) );

// 
// function func(x) {
//     return function(y) {
//         return function(z) {
//             return function(w) {
//                 return [x, y, z, w];
//             };
//         };
//     };
// }
// const result = func(2)(3)(4)(5);
// console.log(result); 

// //253
// function each(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i]));
//     }
//     return result;
// }
// let array = [1, 2, 3, 4, 5];
// let resultarr = each(array, function(num) {
// 	return num * 2;
// });

// console.log(resultarr);

// function each(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i]));
//     }
//     return result;
// }
// let string = [ "world", "Hellow"];
// let resultstr = each(string, function(str) {
// 	return str.split('').reverse().join('');
// });
// console.log(resultstr);

// function each(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//       result.push(callback(arr[i]));
//     }
//     return result;
// }
// let string = [ "world", "hellow"];
// let resultstr = each(string, function(str) {
// 	return str.slice(0, 1).toUpperCase() + str.slice(1);
// });
// console.log(resultstr);

// //254
// function each(arr, callback) {
//     let result = [];
//     for (let i = 0; i < arr.length; i++) {
//         result.push(callback(arr[i]));
//     }
//     return result;
// }
// function cube(num) {
// 	return num ** 3;
// }
// let resultarr = each([1, 2, 3, 4, 5], cube);
// console.log(resultarr);

//256
let result = filter([1, 2, 3, 4, 5], elem => elem > 0);