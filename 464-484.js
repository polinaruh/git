// // 464
// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 	p.addEventListener('click', function () {
//         p.textContent = +p.textContent + 1;
//     })
// 	parent.appendChild(p);
// }

// //465
// let parent = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	let li = document.createElement('li');
// 	li.textContent = elem;
// 	// li.addEventListener('click', function () {
//     //     alert(li.textContent);
//     // })
    
//     li.addEventListener('click', function () {
//         // li.textContent += '!';
//         if (!li.textContent.includes('!')) {
//             li.textContent += '!';
//         }
//     })

// 	parent.appendChild(li);
// }

// //466
// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         // td.textContent = 'jdij';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// for (let i = 0; i < 10; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         // td.textContent = 'jdij';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent = 'x';
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// let tr = document.querySelector('#tr');
// let td = document.querySelector('#td');
// let button = document.querySelector('#button')
// button.addEventListener('click', ()=> {
// 	for (let i = 0; i < +tr.value; i++) {
// 		let trr = document.createElement('tr');		
// 		for (let i = 0; i < +td.value; i++) {
// 			let tdd = document.createElement('td');
// 			tdd.textContent = 'x';
// 			trr.appendChild(tdd);
// 		}
// 		table.appendChild(trr);
// 	}
// })

// //467
// let table = document.querySelector('#table');
// let k = 1;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
//         td.textContent = k; 
// 		k++;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// let k = 2;
// for (let i = 0; i < 5; i++) {
// 	let tr = document.createElement('tr');
// 	for (let i = 0; i < 5; i++) {
// 		let td = document.createElement('td');
// 		td.textContent = k;
// 		k+=2;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// //468
// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');
// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// for (let subArr of arr) {
// 	let tr = document.createElement('tr');
	
// 	for (let elem of subArr) {
// 		let td = document.createElement('td');
// 		td.textContent = elem **2;
// 		tr.appendChild(td);
// 	}
	
// 	table.appendChild(tr);
// }

// //469
// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');

// for (let employe of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');

// for (let employe of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
//     td2.addEventListener('click', function () {
//         td2.textContent = + td2.textContent + 1;
//     })
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

// let employees = [
// 	{name: 'employee1', age: 30, salary: 400},
// 	{name: 'employee2', age: 31, salary: 500},
// 	{name: 'employee3', age: 32, salary: 600},
// ];
// let table = document.getElementById('table');

// for (let employe of employees) {
// 	let tr = document.createElement('tr');
	
// 	let td1 = document.createElement('td');
// 	td1.textContent = employe.name;
// 	tr.appendChild(td1);
	
// 	let td2 = document.createElement('td');
// 	td2.textContent = employe.age;
// 	tr.appendChild(td2);
	
// 	let td3 = document.createElement('td');
// 	td3.textContent = employe.salary;
//     td3.addEventListener('click', function () {
//         td3.textContent = +td3.textContent + +td3.textContent * 0.1;
//     })
// 	tr.appendChild(td3);
	
// 	table.appendChild(tr);
// }

// //470
// let table = document.querySelector('#table');
// let button = document.querySelector('#button')
// button.addEventListener('click', () =>  {
//     let firstTr = table.querySelector('tr')
//     let tdsLength = firstTr.querySelectorAll('td').length
    
//     let tr = document.createElement('tr')
//     table.appendChild(tr)
    
//     for (let i = 0; i < tdsLength; i++) {
//         let td = document.createElement('td')
//         tr.appendChild(td)
//     }
    
//     let trs = table.querySelectorAll('tr')
    
//     for (let line of trs) {
//         let td = document.createElement('td')
//         line.appendChild(td)
//     }
// })

// //471
// let tds = document.querySelectorAll('#table td')
// let button = document.querySelector('#button')
// button.addEventListener('click', () => {
//     for (let td of tds) {
//         td.textContent = +td.textContent * 2
//     }
// })

// //472
// let ul = document.querySelector('#parent')
// let button = document.querySelector('#button')
// let liList = ul.querySelectorAll('li')
// let count = 4
// for (let li of liList) {
//     li.addEventListener('click', () => {
//         li.remove()
//     })
// }
// button.addEventListener('click', () => {
//     let li = document.createElement('li')
//     li.addEventListener('click', () => {
//         li.remove()
//     })
//     li.textContent = count
//     count++
//     ul.appendChild(li)
// })

// // 473
// let elem   = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(event) {
// 	elem.remove();
// 	event.preventDefault(); 
// });

// //474
// let elems = document.querySelectorAll('#parent li');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});
// }

// let elems = document.querySelectorAll('#table tr');
// for (let elem of elems) {
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);
	
// 	remove.addEventListener('click', function(event) {
// 		elem.remove();
// 		event.preventDefault();
// 	});

//     let td = document.createElement('td')
//     td.appendChild(remove)
//     elem.appendChild(td)
// }

// //475
// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent; 
// input.addEventListener('input', function() {
// 	elem.textContent = this.value;
// });

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		this.remove(); 
// 	});
	
// 	elem.parentElement.appendChild(input);
// });

// //476
// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func() {
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;
	
// 	elem.textContent = '';
// 	elem.appendChild(input);
	
// 	input.addEventListener('blur', function() {
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func); // повесим событие обратно
// 	});
	
// 	elem.removeEventListener('click', func);
// });

// //477
// let ul = document.querySelector('#parent')
// let button = document.querySelector('#button')
// let liList = ul.querySelectorAll('li')
// for (let li of liList) {
// 	li.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = li.textContent;
		
// 		li.textContent = '';
// 		li.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			li.textContent = this.value;
// 			li.addEventListener('click', func);
// 		});
		
// 		li.removeEventListener('click', func);
// 	});
// }

// let elems = document.querySelectorAll('#table tr td');
// for (let elem of elems) {
//     elem.addEventListener('click', function func() {
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
		
// 		elem.textContent = '';
// 		elem.appendChild(input);
		
// 		input.addEventListener('blur', function() {
// 			elem.textContent = input.value;
// 			elem.addEventListener('click', func);
// 		});
		
// 		elem.removeEventListener('click', func);
// 	});
// }

// //478
// let elems = document.querySelectorAll('#parent span');
// for (let elem of elems) {
//   elem.addEventListener('click', function func() {
//     let input = document.createElement('input');
//     input.value = elem.textContent;
//     elem.textContent = '';
//     elem.appendChild(input);

//     input.addEventListener('blur', function() {
//       elem.textContent = input.value;
//       elem.addEventListener('click', func);
//     });
//     elem.removeEventListener('click', func);
//   });
//     let remove = document.createElement('a');
//     remove.href = '';
//     remove.textContent = 'remove';
//     remove.addEventListener('click', function(event) {
//     elem.remove();
//     event.preventDefault();
//   });
//   elem.appendChild(remove);
// }

// let elems = document.querySelectorAll('#parent p')
// for (let elem of elems) {
//     let span = document.createElement('span')
//     span.textContent = elem.textContent
//     elem.textContent = ''
//     elem.appendChild(span)
// }
// for (let elem of elems) {
//     let span = elem.querySelector('span')
//     span.addEventListener('click', function func() {
//         let input = document.createElement('input')
//         input.value = span.textContent
//         span.textContent = ''
//         span.appendChild(input)
//         input.addEventListener('blur', () => {
//             span.textContent = input.value
//             span.addEventListener('click', func)
//         })
//         span.removeEventListener('click', func)
//     })
//     let remove = document.createElement('a')
//     remove.href = ''
//     remove.textContent = 'remove'
//     remove.addEventListener('click', (e) => {
//         e.preventDefault()
//         elem.remove()
//     })
//     elem.appendChild(remove)
// }

// //479
// let elems = document.querySelectorAll('p')
// for (let elem of elems) {
//     let span = document.createElement('span')
//     span.textContent = elem.textContent
//     elem.textContent = ''
//     elem.appendChild(span)
// }
// for (let elem of elems) {
//     let span = elem.querySelector('span')

//     let a = document.createElement('a')
//     a.href = ''
//     a.textContent = 'line-through'
//     a.addEventListener('click', (e) => {
//         e.preventDefault()
//         span.style.textDecoration = 'line-through'
//         a.remove()
//     })
//     elem.appendChild(a)
// }

// let rows = document.querySelectorAll('#table tr')
// for (let elem of rows) {
//     let td = document.createElement('td')
//     let a = document.createElement('a')
//     a.href = ''
//     a.textContent = 'change color'
//     a.addEventListener('click', (e) => {
//         e.preventDefault()
//         let tds = elem.querySelectorAll('td')
//         for (let tdElem of tds) {
//             tdElem.classList.toggle('colored')
//         }
//     })
//     td.appendChild(a)
//     elem.appendChild(td)
// }

// //480
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
//     elem.classList.toggle('hidden');
// });

// //481
// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		let elem = document.querySelector('#' + this.dataset.elem);
// 		elem.classList.toggle('hidden');
// 	});
// }

// let buttons = document.querySelectorAll('button');
// let elems   = document.querySelectorAll('p');
// for (let i = 0; i < buttons.length; i++) {
// 	buttons[i].addEventListener('click', function() {
// 		elems[i].classList.toggle('hidden');
// 	});
// }

// let buttons = document.querySelectorAll('button');
// for (let button of buttons) {
// 	button.addEventListener('click', function() {
// 		this.previousElementSibling.classList.toggle('hidden');
// 	});
// }

// //482
// let elems = document.querySelectorAll('#parent li')
// for (let elem of elems) {
//     elem.addEventListener('click', function() {
//         this.classList.add('active')
//     })
// }

// let elems = document.querySelectorAll('#parent li')
// for (let elem of elems) {
//     elem.addEventListener('click', function() {
//         elem.classList.toggle('active')
//     })
// }

// //483
// let tds = document.querySelectorAll('#table td');
// let color = 'color1';
// for (let td of tds) {
// 	td.addEventListener('click', function() {
// 		if (color == 'color1') {
// 			color = 'color2'
// 		} else {
// 			color = 'color1'
// 		}
		
// 		this.classList.add(color);
// 	});
// }

// //484.1-5
// let body = document.querySelector('body')
// let ul = document.createElement('ul')
// let arr = [1, 2, 3, 4, 5]
// for (let elem of arr) {
//     let li = document.createElement('li')
//     let span = document.createElement('span')
//     span.textContent = elem
//     li.appendChild(span)
//     span.addEventListener('click', func )
//     addLineDecorationA(li)
//     addRemoveForLiA(li)
//     ul.appendChild(li)
// }
// body.appendChild(ul)
// createInput()

// function createInput() {
//     let input = document.createElement('input')
//     body.appendChild(input)
//     input.addEventListener('blur', () => {
//         let li = document.createElement('li')
//         let span = document.createElement('span')
//         span.textContent = input.value
//         input.value = ''
//         li.appendChild(span)
//         span.addEventListener('click', func)
//         addLineDecorationA(li)
//         addRemoveForLiA(li)
//         body.querySelector('ul').appendChild(li)
//     })
// }

// function addLineDecorationA(li) {
//     let span = li.querySelector('span')
//     let a = document.createElement('a')
//     a.href = ''
//     a.textContent = 'line-through'
//     a.addEventListener('click', (e) => {
//         e.preventDefault()
//         span.classList.toggle('text-decoration')
//     })
//     li.appendChild(a)
// }

// function addRemoveForLiA(li) {
//     let a = document.createElement('a')
//     a.href = ''
//     a.textContent = 'remove'

//     a.addEventListener('click', (e) => {
//         e.preventDefault()
//         li.remove()
//     })
//     li.appendChild(a)
// }

// function func() {
//     let input = document.createElement('input')
//     input.value = this.textContent

//     this.textContent = ''
//     this.appendChild(input)

//     input.addEventListener('blur', () => {
//         this.textContent = input.value
//         this.addEventListener('click', func)
//     })
//     this.removeEventListener('click', func)
// }

// //484.6-9
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let body = document.querySelector('body')
// let table = document.createElement('table')
// body.appendChild(table)
// addInputs()
// for (let emp of employees) {
//     let tr = document.createElement('tr')
//     for (let elem in emp) {
//         let td = document.createElement('td')
//         td.textContent = emp[elem]
//         tr.appendChild(td)
//         td.addEventListener('click', func);
//     }
//     addRemoveAForTr(tr)
//     table.appendChild(tr)
// }
// function addInputs() {
//     for (let i = 0; i < 3; i++) {
//         let input = document.createElement('input')
//         input.style.width = '60px'
//         body.appendChild(input)
//     }
//     let button = document.createElement('button')
//     button.textContent = 'Create'
//     body.appendChild(button)
//     button.addEventListener('click', buttonOnClick)
// }
// function buttonOnClick() {
//     let elems = document.querySelectorAll('input')
//     let tr = document.createElement('tr')
//     for (let elem of elems) {
//         let td = document.createElement('td')
//         td.textContent = elem.value
//         elem.value = ''
//         tr.appendChild(td)
//         td.addEventListener('click', func);
//     }
//     addRemoveAForTr(tr)
//     table.appendChild(tr)
// }
// function addRemoveAForTr(tr) {
//     let td = document.createElement('td')
//     let remove = document.createElement('a')
//     remove.href = ''
//     remove.textContent = 'remove'
//     td.appendChild(remove)
//     remove.addEventListener('click', (e) => {
//         e.preventDefault()
//         tr.remove()
//     })
//     tr.appendChild(td)
// }
// function func() {
//     let input = document.createElement('input');
//     input.value = this.textContent;
//     this.textContent = '';
//     this.appendChild(input);
//     input.addEventListener('blur', () => {
//         this.textContent = input.value;
//         this.addEventListener('click', func);
//     });
//     this.removeEventListener('click', func);
// }

// //484.10-13
// let employees = [
//     {name: 'employee1', age: 30, salary: 400},
//     {name: 'employee2', age: 31, salary: 500},
//     {name: 'employee3', age: 32, salary: 600},
// ];
// let body = document.querySelector('body')
// let ul = document.createElement('ul')
// body.appendChild(ul)
// addInputs()
// for (let emp of employees) {
//     let li = document.createElement('li')
//     for (let elem in emp) {
//         let span = document.createElement('span')
//         span.textContent = emp[elem]
//         li.appendChild(span)
//         span.addEventListener('click', func);
//     }
//     addRemoveAForTr(li)
//     ul.appendChild(li)
// }
// function addInputs() {
//     for (let i = 0; i < 3; i++) {
//         let input = document.createElement('input')
//         input.style.width = '60px'
//         body.appendChild(input)
//     }
//     let button = document.createElement('button')
//     button.textContent = 'Create'
//     body.appendChild(button)
//     button.addEventListener('click', buttonOnClick)
// }
// function buttonOnClick() {
//     let elems = document.querySelectorAll('input')
//     let li = document.createElement('li')
//     for (let elem of elems) {
//         let span = document.createElement('span')
//         span.textContent = elem.value
//         elem.value = ''
//         li.appendChild(span)
//         span.addEventListener('click', func);
//     }
//     addRemoveAForTr(li)
//     ul.appendChild(li)
// }
// function addRemoveAForTr(li) {
//     let span = document.createElement('span')
//     let remove = document.createElement('a')
//     remove.href = ''
//     remove.textContent = 'remove'
//     span.appendChild(remove)
//     remove.addEventListener('click', (e) => {
//         e.preventDefault()
//         li.remove()
//     })
//     li.appendChild(span)
// }
// function func() {
//     let input = document.createElement('input');
//     input.value = this.textContent;
//     this.textContent = '';
//     this.appendChild(input);
//     input.addEventListener('blur', () => {
//         this.textContent = input.value;

//         this.addEventListener('click', func);
//     });
//     this.removeEventListener('click', func);
// }