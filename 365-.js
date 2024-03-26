// //365
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('class');
// console.log(value);

// //366
// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');

// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');

// //367
// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

// //368
// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// //369
// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('data-text');
// elem.addEventListener('click', function() {
//     elem.innerHTML = elem.textContent + value;
// });

// let elem = document.querySelectorAll('#data-num');
// for (let elems of elem){
//     elems.addEventListener('click', function () {
//         elem.textContent += elem.dataset.num;
//     });
// }
    
// let button = document.querySelector('#elem1');
// let button1 = document.querySelector('#elem2');  
// let res = 0;
// button.addEventListener('click', function () {
//     res ++; 
// })
// button1.addEventListener('click', function () {
//     button1.value = res;
// })

// let elem = document.querySelector('#elem');
// let length = +elem.dataset.length;
// elem.addEventListener('blur', function () {
//     if (elem.value.length > length) {
//         elem.value = 'false';
//     } else {
//         elem.value; 
//     }
// })

// let elem = document.querySelector('#elem');
// let min = +elem.dataset.min;
// let max = +elem.dataset.max;
// elem.addEventListener('blur', function () {
//     if (elem.value.length < min || elem.value.length > max) {
//         elem.value = 'false';
//     } else {
//         elem.value; 
//     }
// })

// //370
// let elem = document.querySelector('#elem');
// let price = +elem.dataset.productPrice;
// let amount = +elem.dataset.productAmount;
// elem.addEventListener('click', function() {
//     elem.textContent += price * amount;
// });

// //371
// let elem = document.querySelectorAll('p');
// elem.forEach (function (el, ind) {
//     el.setAttribute('data-num', ind + 1); 
// })

// //372
// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

// let elem = document.querySelector('#elem');
// let classNames = elem.classList;
// for (let className of classNames) {
// 	console.log(className);
// }

// //373
// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');

// //374
// let elem = document.querySelector('#elem');
// elem.classList.remove('zzz');

// //375
// let elem = document.querySelector('#elem');
// let contains = elem.classList.contains('ggg');
// console.log(contains);

// //376
// let elem = document.querySelector('#elem');
// elem.classList.toggle('www');

// //377
// let button = document.querySelector('#butn');
// let elem = document.querySelector('#elem');  
// button.addEventListener('click', function () {
//     elem.style.width = '200px';
//     elem.style.height = '400px';
//     elem.style.border = 'solid 2px';
// });

// //378
// let button = document.querySelector('#butn');
// let elem = document.querySelector('#elem');  
// button.addEventListener('click', function () {
//     elem.style.fontSize = '20px';
//     elem.style.backgroundColor = 'blue';
//     elem.style.borderTop = 'solid 2px';
// });

// //379
// let button = document.querySelector('#butn');
// let elem = document.querySelector('ul');  
// button.addEventListener('click', function () {
//     elem.style.cssFloat = 'left';
// });

// //380
// let elem = document.querySelector('p');
// let button1 = document.querySelector('#butn1');
// let button2 = document.querySelector('#butn2');
// let button3 = document.querySelector('#butn3');
// button1.addEventListener('click', function () {
//     elem.classList.add('decoration');
// });
// button2.addEventListener('click', function () {
//     elem.classList.add('weight');
// });
// button3.addEventListener('click', function () {
//     elem.classList.add('colored');
// });

// //381
// let elem = document.querySelector('p');
// let button1 = document.querySelector('#butn1');
// let button2 = document.querySelector('#butn2');
// let button3 = document.querySelector('#butn3');
// button1.addEventListener('click', function () {
//     elem.classList.toggle('decoration');
// });
// button2.addEventListener('click', function () {
//     elem.classList.toggle('weight');
// });
// button3.addEventListener('click', function () {
//     elem.classList.toggle('colored');
// });

// //383
// let elem = document.querySelector('#elem');
// let text = elem.firstElementChild;
// text.style.color = 'red';

// let elem = document.querySelector('#elem');
// let text = elem.lastElementChild;
// text.style.color = 'red';

// let elm = document.querySelector('#elem');
// let elems = elm.children;
// for (let elem of elems) {
// 	elem.innerHTML = elem.textContent + '!';
// }

// //384
// let elem = document.querySelector('#elem');
// let text = elem.parentElement;
// text.style.border = '2px solid red';

// //385
// let elem = document.querySelector('#elem');
// let parent = elem.closest('div');
// console.log(parent);

// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent);

// //386
// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibling;
// text.innerHTML = text.textContent + '!';

// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling;
// text.innerHTML = text.textContent + '!';

// let elem = document.querySelector('#elem');
// let text = elem.nextElementSibling;
// let text2 = text.nextElementSibling;
// text2.innerHTML = text2.textContent + '!';

// let elem = document.querySelector('#elem');
// let text1 = elem.previousElementSibling.textContent;
// let text2 = elem.nextElementSibling.textContent;
// text2 = elem.previousElementSibling.textContent;
// text1 = elem.nextElementSibling.textContent;

// //387
// let elem = document.getElementById('elem');
// elem.textContent = 'sdi';

// //388
// let elems = document.getElementsByTagName('li');
// for (let elem of elems) {
// 	elem.style.color = 'red';
// }

// //389
// let elems = document.getElementsByClassName('www');
// for (let elem of elems) {
// 	elem.style.color = 'red';
// }

// //390
// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');

// //391
// let elem = document.querySelector('#elem');
// console.log(elem.lastChild);        
// console.log(elem.lastElementChild);
// console.log(elem.nextSibling);        
// console.log(elem.nextElementSibling);
// console.log(elem.previousSibling);        
// console.log(elem.previousElementSibling);

// //392
// for (let node of elem.childNodes) {
// 	console.log(node);
// }

// //393
// for (let node of elem.tagName) {
// 	console.log(node);
// }

// //394
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// for (let i = 0; i < nodes.length; i++) {
//   if (nodes[i].nodeType === 1 || nodes[i].nodeType === 3) {
//     console.log(nodes[i]);
//   }
// }

// //395
// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// for ( i = 0; i < nodes.length; i++) {
//   if (nodes[i].nodeType === 3 ) {
//    console.log(nodes[i].nodeValue);
//   }
// }

// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// for ( i = 0; i < nodes.length; i++) {
//   if (nodes[i].nodeType === 3 || nodes[i].nodeType === 8) {
//    console.log(nodes[i].nodeValue);
//   }
// }

// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// for ( i = 0; i < nodes.length; i++) {
//   if (nodes[i].nodeType === 1 || nodes[i].nodeType === 3) {
//    console.log(nodes[i].nodeValue);
//   }
// }

// let elem = document.querySelector('#elem');
// let nodes = elem.childNodes;
// for (let i = 0; i < nodes.length; i++) {
//     console.log(nodes[i].nodeType);
// }

// //396
// let textarea = document.querySelector('#elem');
// let paragraph = document.querySelector('#paragraph');
// textarea.addEventListener('blur', function() {
//     paragraph.textContent = textarea.value;
// });

// //397
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//   elem.disabled = true;
// });

// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function() {
//   elem.disabled = true;
// });
// button2.addEventListener('click', function() {
//   elem.disabled = false;
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//   if (elem.disabled) {
//     console.log('Инпут заблокирован');
//   } else {
//     console.log('Инпут не заблокирован');
//   }
// });

// //398
// let elem = document.querySelector('#elem');
// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// button1.addEventListener('click', function() {
//   elem.checked = true;
// });
// button2.addEventListener('click', function() {
//   elem.checked = false;
// });

// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// let text = document.querySelector('#text');
// button.addEventListener('click', function() {
//   if (elem.checked) {
//    text.innerHTML = 'привет';
//   } else {
//     text.innerHTML = 'пока';
//   }
// });

// //399
// let elem = document.querySelector('#elem');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//   elem.checked = !elem.checked;
// });

// //400
// let radios = document.querySelectorAll('input[type="radio"]');
// let button = document.querySelector('button');
// let text = document.querySelector('#text');
// button.addEventListener('click', function() {
//     radios.forEach(radio => {
//       if (radio.checked) {
//         text.textContent = radio.value;
//       }
//     });
// });

// //401
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('change', function(){
//     p.textContent = elem.value;
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function(){
//     if(elem.checked){
//         console.log('checked');
//     } else {
//         console.log('no');
//     }
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function(){
//     let length = elem.value.length;
//     if (length < 5){
//         elem.style.border = 'solid 3px green';
//     } else {
//         elem.style.border = 'solid 3px red';
//     }
// })

// //402
// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('input', function(){
//     let length = elem.value.length;
//     if (length >= 5){
//         p.textContent = 'длина текста 5';
//     } 
// })

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// elem.addEventListener('input', function(){
//     let length = 5 - elem.value.length;
//     if (length >= 0){
//         p.textContent = 'Mожно ввести ' + length + ' символов';
//     } 
//     else {
//         p.textContent = 'Длина текста превышена на ' + Math.abs(length) + ' символов';
//     }
// })

// //403
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('input', function(){
//     let length1 = elem1.value.length;
//     if (length1 >= 2){
//         elem2.focus();
//     } 
// })
// elem2.addEventListener('input', function(){
//     let length2 = elem2.value.length;
//     if (length2 >= 2){
//         elem2.blur();
//     } 
// })

// //404
// let textarea = document.querySelector('textarea');
// let div = document.querySelector('div');
// textarea.addEventListener('blur', function() {
// 	div.textContent = textarea.value;
// });

// let checkbox = document.querySelector('input');
// let button = document.querySelector('button');
// let div = document.querySelector('div');
// button.addEventListener('click', function() {
// 	if (checkbox.checked) {
// 		div.textContent = '111';
// 	} else {
// 		div.textContent  = '222';
// 	}
// });

// let checkbox = document.querySelector('[type="checkbox"]');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
// 	if (checkbox.checked === true) {
// 		console.log('+++');
// 	} else {
// 		console.log('---');
// 	}
// });

// //405
// let select = document.querySelector('#select');
// let button = document.querySelector('button');
// let p = document.querySelector('p');
// button.addEventListener('click', function() {
// 	p.textContent = select.value;
// });

// let select = document.querySelector('#select');
// let p = document.querySelector('p');
// select.addEventListener('click', function() {
//     let year = select.value;
// 	if (year % 4 == 0 || year % 400 == 0) {
//         p.textContent = 'високосный';
//     }
//     else{
//         p.textContent = 'не високосный';
//     }
// });

// //406
// let select = document.querySelector('#select');
// let p = document.querySelector('p');
// select.addEventListener('click', function() {
//     let day = select.value;
// 	if (day == 6 || day == 7 ) {
//         p.textContent = 'выбран выходной день';
//     }
//     else{
//         p.textContent = 'выбран рабочий день';
//     }
// });

// //407
// let m = new Date().getMonth();
// let elem = document.querySelector('#select');
// elem.addEventListener('click', function(){
//     select.value = m + 1;
// })

// //408
// let elem = document.querySelector('#select');
// let text = document.querySelector('#elem');
// text.addEventListener('blur', function() {
//     let value = Number(text.value);
//     if(value >= 0 && value < elem.options.length) {
//         elem.selectedIndex = value;
//     }
// })

// let d = new Date().getDay();
// let elem = document.querySelector('#select');
// elem.addEventListener('click', function(){
//     select.value = d + 1;
// })

// //410
// let elem = document.querySelector('#select');
// let options = document.getElementsByTagName('option');
// for (let option of elem) {
// 	option.text = option.text + " " + option.value;
// }

// //411
// let elem = document.querySelector('#select');
// let options = document.getElementsByTagName('option');
// for (let i = 0; i < options.length; i++) {
//     let option = options[i];
//     if (option.selected) {
//       option.text = option.text + "!";
//     } else {
//       option.text = option.text + "?";
//     }
// }

// //412
// let elem = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//     let lastIndex = elem.options.length - 1;
//     elem.selectedIndex = lastIndex;
// });

// //413
// let select  = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//     console.log(select[select.selectedIndex].innerHTML);
// });

// let select  = document.querySelector('#select');
// let button = document.querySelector('button');
// button.addEventListener('click', function() {
//     let selectItem = select[select.selectedIndex];
//     let text = selectItem.textContent;
//     selectItem.textContent = text + '!';
// });

// //414
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
//     elem.addEventListener('click', function(event) {
//         console.log(event); // увидим объект с событием
//     });
// });

// //415
// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY;
// });

// //416
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// elem.addEventListener('dblclick', func);
// function func(event) {
// 	if (event.type === 'click') {
//         elem.style.color = 'green';
//     }
//     else if (event.type === 'dblclick') {
//         elem.style.color = 'red';
//     }
// }

// //417
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         event.target.textContent += '!';
//     } else if (event.target.tagName === 'UL') {
//         console.log('Был совершен клик по тегу UL');
//     }
// })

// //418
// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
//     console.log(event.key);
// });

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
// 	console.log(event.code);
// });

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event) {
//     console.log(event.key);
// 	console.log(event.code);
// });

// let elem = document.querySelector('input');
// let text = document.querySelector('p')
// elem.addEventListener('keypress', function(event) {
//     if (event.key === "Enter") {
//       text.textContent = elem.value;
//       elem.value = "";
//     }
// });

// //419
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	if (event.altKey) {
// 		elem.style.color = 'red';
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
//     if (event.target.tagName === 'LI') {
//         if (event.ctrlKey) {
//             event.target.textContent += '1';
//         }
//     } else if (event.target.tagName === 'UL') {
//         if (event.altKey) {
//             event.target.textContent += '2';
//         }
//     }
// })

// //420
// let elem = document.querySelectorAll('a');
// elem.forEach(link => {
//     link.addEventListener('click', function(event) {
//         elem.textContent += ': ' + elem.getAttribute('href');
//         event.preventDefault();
//     });
// })

// let input1 = document.querySelector('#input1');
// let input2 = document.querySelector('#input2');
// let text = document.querySelector('p');
// let elem = document.querySelector('a');
// elem.addEventListener('click', function(event) {
//     text.textContent = +input1.value +  +input2.value;
//     event.preventDefault();
// });

// //422
// let div = document.querySelector('div');
// let elem = document.querySelector('#elem');
// div.addEventListener('click', function(event) {
// 	if (event.target.tagName === 'DIV') {
// 		console.log('клик именно по диву');
// 	}
// 	if (event.target.tagName === 'LI')  {
// 		console.log('клик именно по li');
//         event.target.textContent += '!';
// 	}
//     if (event.target.tagName === 'UL')  {
// 		console.log('клик именно по ul');
//         console.log('Был совершен клик по тегу UL');
// 	}
// });

// //426
// let parent = document.querySelector('#parent');
// let button = document.querySelector('button');
// let block  = document.querySelector('#block');
// button.addEventListener('click', function(event) {
// 	block.classList.add('active');
//     event.stopPropagation();
// });
// parent.addEventListener('click', function() {
// 	block.classList.remove('active');
// });

// //429
// let list   = document.querySelector('ul');
// list.addEventListener('click', function(event) {
// 	event.target.textContent = event.target.textContent + '!';
// });

// //430
// let list   = document.querySelector('ul');
// list.addEventListener('click', function(event) {
// 	let li = event.target.closest('li');
	
// 	if (li) {
// 		li.textContent = li.textContent + '!';
// 	}
// });

// //433
// "use strict";
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);

// function parent() {
// 	console.log(this.value); // выведет value
	
// 	function child() {
// 		console.log(this.value); // выведет undefined
// 	}
// 	child();
// }

// //435
// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	let self = this;
//     alert( square() );
// 	function square() {
// 		return self.value * self.value;
// 	}
// }

// //436
// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	alert( square(this) );
	
// 	function square(parent) {
// 		return parent.value * parent.value;
// 	}
// }

// //437
// "use strict";

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func() {
// 	let square = () =>{
// 		return this.value * this.value;
// 	}
//     alert( square() );
// }

// //438
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// function func() {
// 	console.log(this.value);
// }
// func.call(elem1);
// function func() {
// 	console.log(this.value);
// }
// func.call(elem2);
// function func() {
// 	console.log(this.value);
// }
// func.call(elem3);

// //439
// let elem = document.querySelector('#elem');

// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }

// func.call(elem, 'John', 'Smit');

// //440
// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem, ['John', 'Smit']);

// //441
// let elem = document.getElementById('elem');
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// let newFunc = func.bind(elem);
// func('John', 'Smit'); 
// func('Eric', 'Luis'); 

// //442
// setInterval(function() {
// 	console.log('hello!');
// }, 3000);

// //443
// let i = 100;
// setInterval(function() {
// 	console.log(--i);
// }, 1000);

// //444
// let i = 10;
// let timerId = setInterval(function() {
// 	console.log(--i);
	
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// //445
// let start = document.querySelector('#start');
// start.addEventListener('click', function() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// });

// //446
// let start = document.querySelector('#start');
// start.addEventListener('click', function func() {
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);

// 	this.removeEventListener('click', func);
// });

// //447
// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId; 
// start.addEventListener('click', function() {
// 	let i = 100;
// 	timerId = setInterval(function() {
// 		console.log(--i);
// 		if (i <= 0) {
// 			clearInterval(timerId);
// 		}
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function() {
// 	timerId = setInterval(function() {
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop  = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function func() {
// 	timerId = setInterval(function() {
// 		console.log('!')
// 	}, 1000);
// 	this.removeEventListener('click', func);
// });
// stop.addEventListener('click', function() {
// 	clearInterval(timerId);
// });

// //448
// let elem = document.querySelector('#elem');
// setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// }, 1000);

// let elem = document.querySelector('#elem');
// let timerId; 
// timerId = setInterval(function() {
// 	elem.value = Number(elem.value) - 1;
// 	let i = +elem.value;
// 	if (i <= 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// //449
// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function() {
// 	let self = this;
// 	setInterval(function() {
// 		self.value = Number(self.value) + 1;
// 	}, 1000);
// });

// //450
// let start = document.querySelector('#start');
// let p = document.querySelector('p');
// start.addEventListener('click', function func() {
// 	setInterval(function() {
// 		p.textContent = +p.textContent + 1;
// 	}, 1000);
// })

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// let timerId;
// elem.addEventListener('blur', function() {
// 	let i = +elem.value;
// 	timerId = setInterval(function() {
// 	if (i > 0) {
// 		p.textContent = i;
// 		i--;
// 	}
// 	else{
// 		clearInterval(timerId);
// 		p.textContent = "Отсчет завершен!";
// 	}
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');
// let p = document.querySelector('p');
// let start = document.querySelector('#start');
// let timerId;
// start.addEventListener('click', function() {
// 	let i = +elem.value;
// 	timerId = setInterval(function() {
// 	if (i > 0) {
// 		p.textContent = i;
// 		i--;
// 	}
// 	else{
// 		clearInterval(timerId);
// 		p.textContent = "Отсчет завершен!";
// 	}
// 	}, 1000);
// });

// let p = document.querySelector('p');
// setInterval( function() {
// 	let color = p.style.color;
// 	if (color === 'red' || color === '') {
// 		p.style.color = 'green';
// 	} else {
// 		p.style.color = 'red';
// 	}
// }, 1000);

// let p = document.querySelector('p');
// let timerId;
// timerId = setInterval(function() {
// 	let date = new Date;
// 	p.textContent = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
// }, 1000);

// //451
// let p = document.querySelector('p');
// setTimeout(function() {
// 	p.textContent = '1';
// }, 10000);

// //452
// let i = 0;
// function timer() {
// 	setTimeout(function() {
// 		console.log(++i);
// 		timer();
// 	}, 1000);
// }
// timer();

// //453
// let parent = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent =  'item';
// parent.appendChild(li);

// let button = document.querySelector('#button');
// let parent = document.querySelector('#elem');
// button.addEventListener('click', function(){
// 	let li = document.createElement('li');
// 	li.textContent =  'item';
// 	parent.appendChild(li);
// })

// //454
// let parent = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let li = document.createElement('li');
// 	li.addEventListener('click', function() {
// 		li.textContent = '!';
// 	});
// 	parent.appendChild(li);
// })

// //455
// let parent = document.querySelector('#elem');
// for (let i = 1; i <= 9; i++) {
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	parent.appendChild(li);
// }

// //456
// let parent = document.querySelector('#elem');
// let p =document.querySelector('p');
// for (let i = 1; i <= 5; i++) {
// 	let input = document.createElement('input');
// 	input.value = 'text';
// 	input.addEventListener('blur', function() {
// 		p.textContent = input.value
// 	});
// 	parent.appendChild(input);
// }

// //457
// let li = document.querySelectorAll('li');
// li.forEach(item => {
// 	item.addEventListener('click', () => {
// 	  item.remove();
// 	});
// });

// let button = document.getElementById('button');
// button.addEventListener('click', function() { 
// 	let parent = document.getElementById('parent');
// 	let children = parent.getElementsByTagName('li');
//     if(children.length > 0) {
//         let lastelem = children[children.length - 1];
//         parent.removeChild(lastelem);
//     }
// });

// //458
// let parent = document.querySelector('#elem');
// let lis = document.createElement('li');
// lis.textContent = 'start';
// let lif = document.createElement('li');
// lif.textContent = 'finish';
// parent.append(lis);
// parent.prepend(lif);

// //459
// let parent = document.querySelector('#parent');
// let before = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'new';
// parent.insertBefore(li, before);

// let parent = document.querySelector('#parent');
// let before = document.querySelector('#elem');
// let li = document.createElement('li');
// li.textContent = 'new';
// li.addEventListener('click', function () {
// 	li.textContent += '!';
// })
// parent.insertBefore(li, before);

// //460
// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeBegin', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterEnd', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('afterBegin', p);

// let p = document.createElement('p');
// p.textContent = '!!!';
// let elem = document.querySelector('#elem');
// elem.insertAdjacentElement('beforeEnd', p);

// //461
// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div class="www"><p>text</p><p>text</p><input></div>');

// //462
// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function () {
// 	let clone = elem.cloneNode(true);
// 	elem.parentNode.insertBefore(clone, button);
// })

// //463
// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));

// let elem = document.querySelector('#elem');
// console.log(elem.matches('p'));

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let contains = elem1.contains(elem2);
// console.log(contains);