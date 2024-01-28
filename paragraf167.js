// let i = 1;

// while (i <= 100) {
// 	console.log(i);
// 	i++;
// }


// let i = 100;

// while (i >= 1) {
// 	console.log(i);
// 	i--;
// }


// let res=1;
// for (let i=0; i<=100; i++){
//     if (i % 2 === 0) {
//         console.log(i);
//     }
// }


// let res=1;
// for (let i=0; i<=100; i++){
//     if (i % 2 != 0) {
//         console.log(i);
//     }
// }


// let str='';
// for (let i=0; i<=10; i++ ){
//     str +='x';
// }
// console.log(str);


// let str='';
// for (let i=1; i<=10; i++ ){
//     str +=i;
// }
// console.log(str);


// let arr = [2, 25, 9, 15, 10, 4];
// for (let elem of arr) {
// 	if (elem >0 && elem<10) {
// 		console.log(elem);
// 	}
// }


// let arr = [2, 5, 9, 15, 10, 4];
// for (let elem of arr) {
// 	if (elem == 5) {
// 		console.log(elem);
// 	}
// }


// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let elem of arr) {
// 	res += elem * elem;
// }
// console.log(res)


// let arr = [1, 2, 3, 4, 5];
// let sum =0;
// let len = arr.length;
// for(let i = 0; i < len; i++){
//     sum += i;
// }
// let average = sum / len;
// console.log(average);


// function factorial(n) {
//     if (n === 0) {
//       return 1;
//     } else {
//       return n * factorial(n - 1);
//     }
// }
// const num = 0;
// console.log(`Факториал числа ${num} равен ${factorial(num)}`);


// let arr = [];
// for (let i = 10; i >= 1; i--) {
// 	arr.push(i);
// }
// console.log(arr);


// const arr = [2, -3, 5, -6, 7, -8];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//       sum += arr[i]; 
//     }
// }
// console.log(arr);


// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let str = String(arr[i])[0];
  
//   if (str === '1' || str === '2' || str === '5') {
//     console.log(arr[i]);
//   }
// }


// !!!!!!!!!!!!!!!
// let arr=[2, 5 , 6, 57, 21]
// for (let i = arr.length - 1; i >= 0; i--) {
// 	arr.push(arr[i]);
// }
// console.log(arr);


// let arr = [7, 1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//     if (i === arr[i]) {
//         console.log(arr[i]);
//     }
// }


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length - 1; i++) {
// 	document.write(arr[i]+ '<br>');
// }


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i <= arr.length - 1; i++) {
// 	document.write('<p>' + arr[i]+ '<p>');
// }


// let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// for (let day of days) {

//     if (day === 'суббота' || day === 'воскресенье') {
//         document.write('<p>' +'<b>' + day + '<b>'+ '<p>');
//     } else {
//         document.write('<p>' + day + '<p>');
//     }
// }


// let days = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
// let day = 2; // предположим, что 2 - это текущий день

// for (let i = 0; i < days.length; i++) {
//   if (i === day) {
//     document.write('<i>' + days[i] + '</i><br>');
//   } else {
//     document.write(days[i] + '<br>');
//   }
// }


// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
//     obj[key] *= 1.1; 
// }
// console.log(obj);


// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let key in obj) {
// 	if (obj[key] <= 400) {
// 		obj[key] += obj[key] * 0.1;
// 	}
// }

// console.log(obj);


// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];

// let newObj = {};

// for (let i = 0; i < arr1.length; i++) {
//   newObj[arr1[i]] = arr2[i];
// }

// console.log(newObj);


// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// let keysSum = 0;
// let valuesSum = 0;
// for (let key in obj) {
//   keysSum += parseInt(key);
//   valuesSum += obj[key];
// }
// let result = keysSum / valuesSum;
// console.log(result);


// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let keysArray = Object.keys(obj);
// let valuesArray = Object.values(obj);
// console.log(keysArray);
// console.log(valuesArray);


// let obj = {
//     1: 125,
//     2: 225,
//     3: 128,
//     4: 356,
//     5: 145,
//     6: 281,
//     7: 452,
// };
// let newArray = { };
// for (let key in obj) { 
//     if (objkey.toString().startsWith('1') || objkey.toString().startsWith('2')) {
//       newArray.push(objkey);
//     }
// }
// console.log(newArray);


// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[i + 1] = arr[i];
// }
// console.log(obj); 


let arr = ['a', 'b', 'c', 'd', 'e'];
let obj = {};
for (let i = 0; i < arr.length; i++) {
  obj[arr[i]] = i + 1;
}
console.log(obj); 
