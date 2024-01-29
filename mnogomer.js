//№168
// let arr = [
// 	['a', 'b', 'c'],
// 	['d', 'e', 'f'],
// 	['g', 'h', 'i'],
// 	['j', 'k', 'l'],
// ];
// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);


// let arr = [[1, 2], [3, 4], [5, 6]];
// let sum =0;
// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		sum += elem;
// 	}
// }
// console.log(sum);


//№169
// !!!!!!!!!!!!let arr = [
// 	[
// 		[1, 2],
// 		[3, 4],
// 	],
// 	[
// 		[5, 6],
// 		[7, 8],
// 	],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//  for (let j = 0; j < arr[i].length; j++) {
//   for (let k = 0; k < arri[j].length; k++) {
//    sum += arr[i][j][k];
//   }
//  }
// }
// console.log(sum); 


//#170
// let arr = [
//     [1, 2, 3, 
//         [
//             4, 
//             5,
//             [6, 7]
//         ]
//     ],
    
//     [
//         8, 
//         [9, 10]
//     ]
// ];

// let sum = arr [0][0] + arr [0][1] + arr [0][2] + arr [0][3][0] + arr [0][3][1] + arr [0][3][2][0] + arr [0][3][2][1] + arr[1][0] + arr [1][1][0] + arr [1][1][1];
// console.log(sum);

//#171
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum =0;
// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		sum += elem;
// 	}
// }
// console.log(sum);


// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum =0;
// for (let subArr of arr) {
//     for (let subarr of subArr) {
//         for (let elem of subarr) {
// 		    sum += elem;
// 	    }
//     }	
// }
// console.log(sum);


//№172
// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum =0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		sum += arr[i][j];
// 	}
// }
// console.log(sum);

// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// let sum =0;
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
//         for (let k = 0; k < arr[j].length; k++) {
//             sum += arr[i][j][k];
//         }	
//     }
// }
// console.log(sum);


//№173
// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
	
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j + 1);
// 	}
// }
// console.log(arr);


// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = []; 
// 	for (let j = 0; j < 4; j++) {
// 		arr[i].push('x');
// 	}
// }
// console.log(arr);


let arr = [];
for (let i = 0; i < 3; i++) {
	arr[i] = []; 
	for (let j = 0; j < 6; j++) {
        arr[j] = []; 
        for (let k = 0; k < 5; k++) {
            arr[j].push(k + 1);
        }	
    }
}
console.log(arr);