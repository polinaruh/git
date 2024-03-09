//296
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, department, position, salary] = arr;

//297
// function func() {
// 	console.log( ) ['John', 'Smit', 'development', 'programmer', 2000];
// }
// let [name, surname, department, position, salary] = func();

//298
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [, , department, position,] = arr;

//300
// let arr = ['John', 'Smit', 'development', 'programmer', 2000];
// let [name, surname, ...info] = arr;

//301
// let arr = ['John', 'Smit', 'development', 'programmer'];
// let [name, surname, department, position = 'trainee'] = arr;

//302
// let arr = [ , , ];
// function funcy() {
// 	console.log( ) (new Date).getFullYear();
// }
// function funcm() {
// 	console.log( ) (new Date).getMonth();
// }
// function func() {
// 	console.log( ) (new Date).getDate();
// }
// let [year = funcy(), month = funcm(), day = func()] = arr;

// console.log(year, month, day);

//304
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };

// let {color, width, height} = options;

//305
// let options = {
// 	color: 'red',
// 	width:  400,
// 	height: 500,
// };
// let {color: c, width: w, height: h} = obj;

//306
// let options = {
// 	width:  400,
// 	height: 500,
// };

// let {color = 'black', width, height} = options;

//307
// let options = {
// 	width:  400,
// 	height: 500,
// };
// let {color:c = 'black', width, height} = options;

//309
//1
// func( ['John', 'Smit', 'development', 'programmer', 2000] );
// function func([name, surname, department, position, salary]) {
// console.log(department);
// console.log(position);
// console.log(name);
// console.log(surname);
// console.log(salary);
// }

//2
// func( ['John', 'Smit', 'development', 'programmer', 2000] );
// function func([name, surname, ...info]) {
// console.log(name);
// console.log(surname);
// console.log(info);
// }

//3
// func( ['John', 'Smit', 'development'] );
// function func([name, surname, department, position = 'джуниор']) {
// console.log(name);
// console.log(surname);
// console.log(department);
// console.log(position);
// }

//4
// func('development', ['John', 'Smit'], [2018, 12, 31] );
// function func(department, [name, surname], [year, month, day]) {
// console.log(department);

// console.log(name);
// console.log(surname);

// console.log(year);
// console.log(month);
// console.log(day);
// }

//310
//1
// function func({color, width, height}) {
// console.log(color);
// console.log(width);
// console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );

//2
// function func({color = 'black', width, height}) {
//     console.log(color);
//     console.log(width);
//     console.log(height);
// }

// func( {color: 'red', width: 400, height: 500} );

//311
// let date = new Date();

// console.log(date.getFullYear()); 
// console.log(date.getMonth());    
// console.log(date.getDate());     

//312
// function addZero(num) {
//     if (num >= 0 && num <= 9) {
//         console.log( ) '0' + num;
//     } else {
//         console.log( ) num;
//     }
//     }
//     let date = new Date();
    
//     console.log(
//     addZero(date.getHours()) + ':' +
//     addZero(date.getMinutes()) + ':' +
//     addZero(date.getSeconds()) + ' ' +
//     addZero(date.getDate()) + '.' +
//     addZero(date.getMonth() + 1) + '.' +
//     addZero(date.getFullYear()) 
    
// );
    
//313
// let str = '2025-12-31';
// let res = str.split('-').reverse().join('.');

// console.log(res); 

//314
// let date = new Date();
// console.log(date.getDay());

// let date = new Date(); 
// if (date.getDate() == 0 || date.getDate() == 0) {
//     console.log('выходной');
// } else {
//     console.log('будний');
// }

// let date = new Date();
// let today = date.getDay();
// console.log(6 - today);

//315
// let date = new Date();
// let day  = date.getDay();
// let months = [
// 	'янв', 'фев', 'мар', 'апр', 'май', 'июн',
// 	'июл', 'авг', 'сен', 'окт', 'ноя', 'дек'
// ];
// console.log(months[day]);

//316
// let date = new Date(2023, 7, 24);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];

// console.log(days[day]);

//317
// let date = new Date(2025, 1, 1, 23, 59, 59);
// console.log(date.getTime());

//318
//1
// let now = new Date(1988, 3, 1, 23, 59, 59);
// let date = new Date(2000, 1, 10, 23, 59, 59);
// let diff = date.getTime() - now.getTime();
// console.log(diff / (1000 * 60 * 60 * 24));

//2
// let now = new Date();
// let date = new Date(2005, 7, 24, 23, 59, 59);
// let diff = now.getTime() - date.getTime();
// console.log(diff / (1000 * 60 * 60 * 24 * 30));

//319
//1
// let date1  = new Date(2000, 9, 1, 23, 59, 59);
// let date2 = new Date(2010, 2, 15, 23, 59, 59);
// let diff = date2 - date1; 
// console.log(diff); 

//2
// let date1  = new Date(2000, 9, 1, 23, 59, 59);
// let date2 = new Date(2010, 2, 15, 23, 59, 59);
// let diff = date2 - date1; 
// console.log(diff * 1.1574 * 10**(-8)); 

//3
// let date1  = new Date(2000, 9, 1, 23, 59, 59);
// let date2 = new Date(2010, 2, 15, 23, 59, 59);
// let diff = date2 - date1; 
// console.log(diff * 3.8 * 10**(-10)); 

//4
// let date1  = new Date(2000, 9, 1, 23, 59, 59);
// let date2 = new Date(2010, 2, 15, 23, 59, 59);
// let diff = date2 - date1; 
// console.log(diff * 3.8 * 10**(-10) / 12); 

//321
// function func(year, month) {
//     let date = new Date(year, month, 0);
//     console.log( ) date.getDate();
// }
// console.log(func(2020, 3));

//2
// let date = new Date(2025, 5, 0);
// let day  = date.getDay();
// let days = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб'];
// console.log(days[day]);

//322
// function isLeap(year) {
//     let date = new Date(year, 2, 0);

//     if (date.getDate() == 29) {
// 	    console.log( ) true;
//     } else {
// 	    console.log( ) false;
//     }
// }
// console.log(isLeap(2024));

//323
// function checkDate(year, month, day) {

//     let date = new Date(year, month, day);

//     if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
//         console.log( ) true;
//     } else {
//         console.log( ) false;
//     }
// }
// console.log(checkDate(2025, 0, 31));

//324
// let now  = new Date(); 
// let date = new Date(now.getFullYear(), 11, 31); 
// console.log(date.getDay());

//325
// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 1, 24);
// console.log(date.getDay());

//326
// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 11, 31);
// console.log(date.getDay());

//2
// let now = new Date();
// let date = new Date(now.getFullYear() + 1, now.getMonth(), now.getDate());
// console.log(date.getDay());

//3
// let now = new Date();
// let date = new Date(now.getFullYear() - 1, now.getMonth(), now.getDate());
// console.log(date.getDay());

//327
// let now = new Date();
// let date1 = new Date(now.getFullYear(), 0, 1, 12, 59, 59);
// let date2 = new Date(now.getFullYear(), 8, 10, 12, 59, 59);
// console.log((date2 - date1) * 1.1574 * 10**(-8)); 

//2
// let now = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), 20, 12, 59, 59);
// let date2 = new Date(now.getFullYear(), now.getMonth() + 1, 10, 12, 59, 59);
// console.log((date2 - date1) * 1.1574 * 10**(-8)); 

//328
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12);
// console.log((now - date) * 2.778 * 10**(-7));

//329
// let now  = new Date();
// let date1 = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// console.log((now - date1) / (1000 * 60 * 60));

//330
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
// console.log((date - now) / (1000 * 60 * 60));

//331
// let res = 0;

// for (let year = 2000; year <= new Date().getFullYear(); year++) {
// 	let date = new Date(year, 0, 1);
	
// 	if (date.getDay() == 0 || date.getDay() == 6) {
// 		res++;
// 	}
// }

// console.log(res);

//332
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 1);
// console.log((now - date) / 1000);

//2
// let now  = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24);
// console.log((date - now) / 1000);

//3
// let now  = new Date();
// let date1 = new Date(now.getFullYear() + 1, 1, 1);
// console.log((date1 - now) *  1.1574 * 10**(-8) );

//4
// let res = 0;
// let now = new Date().getFullYear();
// for (let month = 0; month < 12; month++) {
//     let date = new Date(now, month, 13);
//     if (date.getDay() === 5) { 
//         res++;
//     }
// }
// console.log(res);

//5
// let now = new Date();
// let lastYear = now.getFullYear();
// let month3 = now.getMonth() - 3;
// if (month3 < 0) {
//     lastYear--;
//     month3 = 12 + month3;
// }
// console.log(lastYear);

//6
// let now = new Date();
// let lastDaym= new Date(now.getFullYear(), now.getMonth() + 1, 0);
// let lastDay = lastDaym.getDay();
// console.log(lastDay); 

//7
// let now = new Date();
// let year = now.getFullYear();
// let date = new Date(year, 2, 0);

// if (date.getDate() == 29) {
//         console.log('високосный');;
// } else {
//     console.log('не високосный');;
// };

//8
// let now = new Date();

// for (let year = now.getFullYear() - 1; year >= 0; year--) {
//     let date = new Date(year, 2, 0);
//     if (date.getDate() == 29) {
//         console.log(year);
//         break;
//     }
// }

//9
// let now = new Date().getFullYear();
// let nextYear = now + 1;
// while (true) {
//   if ((nextYear % 4 === 0 && nextYear % 100 !== 0) || nextYear % 400 === 0) {
//     console.log(nextYear);
//     break;
//   }
//   nextYear++;
// }

//333
// let date1 = '2020-11-31';
// let date2 = '2020-12-01';
// if (date1 > date2) {
//     console.log('date1 > date2');
// } else {
//     console.log('date1 < date2');
// }

//334
// let date1 = '09-21';
// let date2 = '09-23';

// if (date1 > date2) {
//     console.log('date1 > date2');
// } else {
//     console.log('date1 < date2');
// }

//335
// let date = '08-20';

//     if (date >= '03-21' && date <= '04-19') {
//       console.log("Овен");
//     } 
//     if (date >= '04-20' && date <= '05-20') {
//       console.log("Телец" ) ;
//     } 
//     if (date >= '05-21' && date <= '06-20') {
//       console.log("Близнецы" ) ;
//     } 
//     if (date >= '06-21' && date <= '07-22') {
//       console.log("Рак" ) ;
//     } 
//     if (date >= '07-23' && date <= '08-22') {
//       console.log("Лев" ) ;
//     } 
//     if (date >= '08-23' && date <= '09-22') {
//       console.log("Дева" ) ;
//     } 
//     if (date >= '09-23' && date <= '10-22') {
//       console.log("Весы" ) ;
//     }
//     if (date >= '10-23' && date <= '11-21') {
//       console.log("Скорпион" ) ;
//     } 
//     if (date >= '11-22' && date <= '12-21') {
//       console.log("Стрелец" ) ;
//     } 
//     if (date >= '12-22' && date <= '01-19') {
//       console.log( "Козерог") ;
//     } 
//     if (date >= '01-20' && date <= '02-18') {
//       console.log("Водолей" ) ;
//     } 
//     if (date >= '02-19' && date <= '03-20') {
//       console.log("Рыбы" ) ;
//     } 

//336
// let now = new Date(); 

// let pol = new Date();
// pol.setHours(12, 0, 0, 0);

// if (now >= pol) {
//   console.log("Уже прошел полдень");
// } else {
//   console.log("Еще не наступил полдень");
// }

//2
// let now = new Date();
// let pol = new Date(now.getFullYear(), now.getMonth(), 15);

// if (now > pol) {
//     console.log("Половина месяца уже прошла");
// } else {
//     console.log("Половина месяца еще не прошла");
// }
