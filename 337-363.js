////339
// let elm1 = document.querySelector('#elem1');
// let elm2 = document.querySelector('#elem2');
// let elm3 = document.querySelector('#elem3');
// console.log(elm1, elm2, elm3);

////340
// let elem = document.querySelector('#block p');
// console.log(elem);

// let elem1 = document.querySelector('.www');
// console.log(elem1);

////341
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', ()=>{
// 	alert('1');
// });
// button2.addEventListener('click', ()=>{
// 	alert('2');
// });
// button3.addEventListener('click', ()=>{
// 	alert('3');
// });

////342
// let button4 = document.querySelector('#button1');
// button4.addEventListener('click', func1);
// let button5 = document.querySelector('#button2');
// button5.addEventListener('click', func2);
// function func1() {
// 	console.log(1);
// }

// function func2() {
// 	console.log(2);
// }

// //343
// let el1 = document.querySelector('#elem1');
// let el2 = document.querySelector('#elem2');
// let el3 = document.querySelector('#elem3');
// let el4 = document.querySelector('#elem4');
// let el5 = document.querySelector('#elem5');
// el1.addEventListener('click', func);
// el2.addEventListener('click', func);
// el3.addEventListener('click', func);
// el4.addEventListener('click', func);
// el5.addEventListener('click', func);

// function func() {
// 	console.log('message');
// }

////344
// function func1() {
// 	console.log('1');
// }

// function func2() {
// 	console.log('2');
// }

// function func3() {
// 	console.log('3');
// }
// let el = document.querySelector('#elem');
// el.addEventListener('click', func1);
// el.addEventListener('click', func2);
// el.addEventListener('click', func3);

// //345
// let btn = document.querySelector('#btn');
// btn.addEventListener('dblclick', function() {
// 	console.log('!!!!');
// });
// btn.addEventListener('mouseover', function() {
// 	console.log('1212');
// });
// btn.addEventListener('mouseout', function() {
// 	console.log('3434');
// });

// //346
// let btm = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     console.log(elem.textContent);
// });

// let btm = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     console.log(elem.textContent= '!!!');
// });

// let btm = document.querySelector('#btn');
// btn.addEventListener('click', () => {
//     console.log(Number(elem1.textContent) + Number(elem2.textContent));
// });

// let btm = document.querySelector('#btn');
// let d = document.querySelector('.wow');
// btn.addEventListener('click', () => {
//     d.textContent = Number(elem1.textContent) + Number(elem2.textContent);
// });

// let btm = document.querySelector('#btn');
// let elm = document.querySelector('#elem1');
// btn.addEventListener('click', () => {
//     elm.textContent = Number(elem1.textContent) + 1;
// });

// let btm = document.querySelector('#btn');
// let elm = document.querySelector('#elem');
// btn.addEventListener('click', () => {
//     elm.textContent = elm.textContent + '!';
// });

// //347
// let btm = document.querySelector('#btn');
// let elm = document.querySelector('#elem');
// btn.addEventListener('click', () => {
//     console.log(elm.innerHTML);;
// });

// let btm = document.querySelector('#btn');
// let elm = document.querySelector('#elem');
// btn.addEventListener('click', () => {
//     console.log(elm.innerHTML = '<b>!!!</b>');
// });

// //348
// let btm = document.querySelector('#btn');
// let elm = document.querySelector('#elem');
// btn.addEventListener('click', () => {
//     elm.type = 'submit';
// });

// let btn = document.querySelector('#btn');
// let link = document.querySelector('a');
// let di = document.querySelector('.di');
// btn.addEventListener('click', function() {
//     di.innerHTML = link.href;
// });

// let link = document.querySelector('a');
// let button = document.querySelector('#btn');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
//     link.textContent +=  '(' + link.href + ')';
// });

// let link = document.querySelector('img');
// let button = document.querySelector('#btn');
// let p = document.querySelector('.di');
// button.addEventListener('click', function() {
//     p.innerHTML = link.src;
// });

// let link = document.querySelector('img');
// let button = document.querySelector('#btn');
// let p = document.querySelector('.di');
// button.addEventListener('click', function() {
//     link.width = 300;
// });

// let link1 = document.querySelector('img');
// let link2 = document.querySelector('img');
// let button1 = document.querySelector('#btn1');
// let button2 = document.querySelector('#btn2');


// button1.addEventListener('click', function() {
//     link1.src = "лого2.png";
// });
// button2.addEventListener('click', function() {
//     link2.src = "msg1166521481-134734.jpg";
// });

// //349
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#btn');
// button.addEventListener('click', function() {
//     elem.value = 'new text';
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#btn');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
//     p.innerHTML = elem.value;
// });

// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//     elem2.value = Number(elem.value) ** 2;
// });

// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// let button = document.querySelector('#btn');

// button.addEventListener('click', function() {
//     let p = elem.value;
//     elem.value = elem2.value;
//     elem2.value = p;
// });

// let elem = document.querySelector('#elem');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');
// let button = document.querySelector('#btn');
// let p = document.querySelector('p')

// button.addEventListener('click', function() {
//     p.innerHTML = (Number(elem.value) + Number(elem2.value) + Number(elem3.value) + Number(elem4.value) + Number(elem5.value)) / 5;
// });


// //350
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = 1;
// });
// elem.addEventListener('blur', function() {
// 	elem.value = 2;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
// 	elem.value **= 2;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = " ";
// });

// //351
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#btn');
// button.addEventListener('click', function() {
//     console.log(elem.className);
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#btn');
// button.addEventListener('click', function() {
//     elem.className = 'new class';
//     document.write(elem.className);
// })

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#btn');
// button.addEventListener('click', function() {
//     let classes = elem.className.split(' ');
//     console.log(classes);
// });

// //352
// console.log(document.querySelector('#image').src);

// //353
// console.log(document.querySelector('#image').src);
// console.log(document.querySelector('#image').width);
// console.log(document.querySelector('#image').height);

// //354
// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	this.value = 1;
// });
// elem.addEventListener('blur', function() {
// 	this.value = 2;
// });

// let button = document.querySelector('#btn');
// button.addEventListener('click', function() {
//     this.value = Number(button.value) + 1;
// });

// //355
// let p = document.querySelectorAll("p");
// for (let elem of p) {
//     elem.addEventListener('click', function() {
//         this.textContent += '!';
//     });
// }

// let elem = document.querySelectorAll(".elem");
// for (let elem1 of elem) {
//     elem1.addEventListener('blur', function() {
//         this.value = Number(this.value) ** 2;
//     });
// }

//356
// let elems = document.querySelectorAll('p');
// let button = document.querySelector('#button');
// for (let elem of elems) {
//     button.addEventListener('click', function() {
//         elem.textContent = 'text';
//     });
// }

// let elems = document.querySelectorAll('p');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     for (let i=0;i<elems.length; i++) {
//         elems[i].textContent = elems[i].textContent + (i+1);
//     }
// })

// let elem = document.querySelectorAll('.elem');
// let button = document.querySelector('#button');
// let p = document.querySelector('p');
// let sum = 0;
// for (let el of elem) {
//     button.addEventListener('click', function() {
//         sum += Number(el.value);
//         p.textContent = sum;
//     });
// }

//357
// let elem = document.querySelectorAll('.elem');
// for (let el of elem) {
//     el.addEventListener('blur', func);
// }
// function func() {
//   this.value = Number(this.value) + 1;
// }

// let p = document.querySelectorAll("p");
// for (let elem of p) {
//     elem.addEventListener('click', function() {
//         this.textContent = Number(this.textContent) ** 2;
//     });
// }

//358
// let divs = document.querySelectorAll('div');
// for (let div of divs) {
//   div.addEventListener('click', function() {
//         this.textContent++;
//     });
// }

//359
// let link = document.querySelector('a');
// let button = document.querySelector('#button')
// button.addEventListener('click', func);
// function func() {
//   link.innerHTML = link.innerHTML + '(' + link.href + ')';
//   this.removeEventListener('click', func);
// }

// let button = document.querySelector('#button')
// button.addEventListener('click', func);
// function func() {
//     if (button.value < 10) {
//         button.value = Number(button.value) + 1;
//     } else {
//         this.removeEventListener('click', func);
//     }
// }

//360
// let p = document.querySelectorAll('p');
// for (let elem of p) {
//   elem.addEventListener('click', func);
// }
// function func() {
//   this.textContent = this.textContent + '!';
//   this.removeEventListener('click', func);
// }

//361
// let li = document.querySelectorAll('li');
// for (let elem of li) {
//   elem.addEventListener('click', function(){
//         this.textContent = Number(this.textContent) + 1;
//     });
// }

// let li = document.querySelectorAll('li');
// for (let elem of li) {
//   elem.addEventListener('click', function func(){
//         this.textContent = Number(this.textContent) + 1;
//         this.removeEventListener('click', func);
//     });
// }

// let li = document.querySelectorAll('li');
// for (let elem of li) {
//   elem.addEventListener('click', function func(){
//         if (this.textContent < 10) {
//             this.textContent = Number(this.textContent) + 1;
//         } else {
//             this.removeEventListener('click', func);
//         }
//     });
// }

//362
// let sum = 0;
// let sum2 = 0;
// let elems = document.querySelectorAll('li');
// for (let elem of elems) {
//     let text = elem.textContent;
//     for (let i = 0; i < text.length; i++) {
//         sum += Number(text[i]);
//     }
//     if (sum % 9 == 6) {
//         sum2 += Number(elem.textContent);
//         console.log(elem.textContent); 
//     };
//     sum = 0;
// }
// console.log(sum2);

//363.1 
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
//     elem.textContent += '!';
// };

//363.2
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//   elem.addEventListener('click', function() {
//     this.textContent = Number(this.textContent) + 1;
//   });
// }

//363.3
// let button = document.querySelector('button');
// let elem   = document.querySelector('p');

// button.addEventListener('click', function() {
//   elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// });

//363.4
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
//   let sum = 0;
  
//   for (let elem of elems) {
//     sum += Number(elem.textContent);
//   }
  
//   console.log(sum);
// });

//363.5
// let elems = document.querySelectorAll('p');

// for (let elem of elems) {
//   elem.addEventListener('click', function ()  {
//     this.textContent += '!';
//   });
// }

//363.6
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');

// button.addEventListener('click', function() {
//   for (let elem of elems) {
//     elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
//   }
// });

//363.7
// let button = document.querySelector('button');
// let elems  = document.querySelectorAll('p');
// let sum = 0;

// for (let elem of elems) {
//   sum += Number(elem.textContent);
  
//   button.addEventListener('click', function() {
//     console.log(sum);
//   });
// }

//363.8
// let button = document.querySelector('button');
//     let elems  = document.querySelectorAll('input');
//     let sum = 0;
// button.addEventListener('click', function() {
//         for (let elem of elems) {
//             sum += Number(elem.value);
//         }
//         console.log(sum);
// });

//363.9
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');

// btn.addEventListener('click', function() {
//   inp3.value = Number(inp1.value) + Number(inp2.value);
// });

//363.10
// let btn  = document.querySelector('#btn');
// let res  = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');

// btn.addEventListener('click', function() {
//   res.textContent = Number(inp1.value) + Number(inp2.value);
// });

//363.11
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// button.addEventListener('click',function() {
//   for (let input of inputs) {
//     if (input.value === input.dataset.text) {
//       input.classList.add('right');
//     } else {
//       input.classList.add('wrong');
//     }
//   }
// });

//363.12
// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')

// let texts = [
//   'text1',
//   'text2',
//   'text3',
// ];

// button.addEventListener('click',function() {
//   for (let i = 0; i < inputs.length; i++) {
//         let input = inputs[i];
//         let text = texts[i];
//     if (input.value === text) {
//       input.classList.add('right')
//     } else {
//       input.classList.add('wrong')
//     }
//   }
// });

// 363.13
// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;

// btn.addEventListener('click', function() {
//   for (let input of inputs) {
//     sum += Number(input.value);
//   }
  
//   console.log(sum);
// });

//363.14
// let btn  = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');


// btn.addEventListener('click', function() {
//     let sum  = Number(inp1.value) + Number(inp2.value);
//     inp3.value = sum;
// });

//363.15
// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
//     let number = +inp.value;
//     let digits = number.toString().split('');
//     let sum = 0;
  
//   for (let digit of digits) {
//     sum += Number(digit);
//   }
  
//   console.log(sum);
// });