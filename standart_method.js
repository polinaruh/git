//№184
console.log(Math.pow(2,10));
console.log(Math.sqrt(245));
let arr = [4, 2, 5, 19, 13, 0, 10];
let sum = 0;
for (let elem of arr) {
    sum += Math.pow(elem, 3);
}
console.log(Math.sqrt(sum));

//№185
let num=Math.sqrt(379);
console.log(num);
console.log(Math.round(num));
console.log(num.toFixed(1));
console.log(num.toFixed(2));

let num1=Math.sqrt(587);
let cnum=Math.ceil(num1);
let fnum=Math.floor(num1);
let obj = {'ceil': cnum, 'floor': fnum};
console.log(obj);

//№186
console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

//№187
function getRandomInt(min, max) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log(getRandomInt(1, 100));

let array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 100) + 1);
}
console.log(array);

//№188
let a=27;
let b=-9;
console.log(Math.abs(a-b));

// №189
let str = 'js';
console.log(str.toUpperCase());

let str1 = 'JS';
console.log(str1.toLowerCase());

//№190
let str2='я учу javascript!';
let sub = str2.substr(2);
let sub1 = str2.substring(2);
let sub2 = str2.slice(2);
console.log(sub);
console.log(sub1);
console.log(sub2);

//№191
let str8 = 'я учу javascript!';
let res = str8.startsWith('http://');
console.log(res);

let str3 = 'index.html';
let res1 = str3.endsWith('.html');
console.log(res1);

//№192
let elem = '-';
let str4 =  '1-2-3-4-5';
while (str4.includes(elem)) {
	str4 = str4.replace(elem, '.');
}
console.log(str4);

//№193
let str5 = '1-2-3-4-5';
let arr2 = str5.split('-');
console.log(arr2);

let str6 = '12345';
let arr3 = str6.split('');
console.log(arr3);

let arr4 = [1, 2, 3, 4, 5];
let str7 = arr4.join('-');
console.log(str7);

//№194
let arr5  = [1, 2, 3];
let elem2 = arr5.shift();
console.log(elem2);

let arr6  = [1, 2, 3];
let elem3 = arr6.pop();
console.log(elem3);

let arr7  = [1, 2, 3];
arr7.push(4, 5, 6);
console.log(arr7);

let arr8  = [1, 2, 3];
arr8.unshift(4, 5, 6);
console.log(arr8);

//№195
let arr9 = [1, 2, 3, 4, 5];
let sub3 = arr9.slice(0, 3);
console.log(sub3);

let arr10 = [1, 2, 3, 4, 5];
let sub4 = arr10.slice(3);
console.log(sub4);

//№196
let arr11 = [1, 2, 3, 4, 5];
let del = arr11.splice(1, 2);
console.log(arr11);

let arr12 = [1, 2, 3, 4, 5];
arr12.splice(2, 0, 'a', 'b', 'c');
console.log(arr12);

let arr13 = [1, 2, 3, 4, 5];
arr13.splice(1, 0, 'a', 'b');
arr13.splice(6, 0, 'c');
arr13.splice(8, 0, 'e');
console.log(arr13);

//№197
let arr14 = [1, 2, 3, 4, 5];
let res2 = arr14.includes(3);
console.log(res2);

//№198
let obj1 = {a: 1, b: 2, c: 3};
console.log(Object.keys(obj1));

//№199
let num2 = 12345;
let arr15 = String(num2).split('');
let sum2 = 0;
for (let digit of arr15) {
	sum2 += Number(digit);
}
console.log(sum2);

let num3 = 12345;
let arr16 = String(num3).split('');
let sum3 = 0;
for (let digit of arr16) {
	sum3 +=Number(digit);
}
console.log(sum3);

let num4 = 12345;
let arr17 = String(num4).split('');
let sum4 = 0;
for (let digit of arr17) {
	sum4 += Number(digit);
}
console.log(sum4);

let num5 = 12345;
let arr18 = String(num5).split('');
let sum5 = 0;
for (let digit of arr18) {
	sum5 += Number(digit);
}
console.log(sum5);

let num6 = 12345;
let arr19 = String(num6).split('');
let prod = 1;
for (let digit of arr19) {
	prod *= Number(digit);
}
console.log(prod);

