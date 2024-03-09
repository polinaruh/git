////261
// function test() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// }
// let func = test();
// func(); 
// func(); 

// function test() {
// 	let num = 10;
	
// 	return function() {
// 		console.log(num);
// 		num--;
// 	}
// }
// let func = test();
// func(); 
// func(); 

// function test() {
// 	let num = 10;
	
// 	return function() {
//         if (num > 0) {
//             console.log(num);
//             num--;
//         }
//         else {
//             console.log('Отсчёт окончен');
//         }
// 	}
// }
// let func = test();
// func(); 
// func();
// func(); 
// func();
// func(); 
// func();
// func(); 
// func();
// func(); 
// func();
// func(); 

////269
// (function() {
//     return function(){
//         return function() {
//             console.log('!');
//         };
//     };
// })()()();

// (function(num1) {
//     return function(num2){
//         console.log(num1 + num2);
//     };
// })(1)(2);

// (function(num1) {
//     return function(num2){
//         return function(num3){
//             console.log(num1 + num2 + num3);
//         };
//     };
// })(1)(2)(3);

//272
// let func = (function() {
// 	let num = 1;
	
// 	return function() {
// 		console.log(num);
// 		num++;
// 	}
// })();
// func(); 
// func(); 
// func(); 
// func(); 
// func();

// let func = (function() {
// 	let num = 1;
	
// 	return function() {
//         if (num <= 5) {
//             console.log(num);
//         }
// 		else{
//             num =1;
//             console.log(num);
//         }
//         num++;
// 	}
// })();
// func(); 
// func(); 
// func(); 
// func(); 
// func();
// func(); 
// func(); 
// func();