// 1
const btn1 = document.querySelector('.btn__1')
if (btn1) {
	btn1.onclick = function() {
		document.querySelector('.text__1').style.cssText = 
			`color: red;
			font-size: 50px;
			background: black;
			border: solid 1px red;`
	}
}

// 2
const btn2 = document.getElementById('btn__2')
if (btn2) {
	btn2.onclick = function() {
		let fn = document.getElementById('firstn').value
		let ln = document.getElementById('lastn').value
		let newElem = document.createElement('p')
		document.body.appendChild(newElem)
		newElem.innerHTML = fn + ' '+ ln
	}
}

// 3

const btn3 = document.querySelector('.btn__3')
if (btn3) {
	btn3.onclick = function() {
		const elem = document.getElementById('text__3')
		let l = elem.getAttributeNames()
		for (let i = 0; i<l.length; i++) {
			let tag = document.createElement('p')
			document.getElementsByClassName('ps')[0].appendChild(tag)
			tag.innerHTML = '<span>' + l[i] + '</span>' + ' - ' + tag.innerHTML + elem.getAttribute(l[i]) +' '
			tag.setAttribute('class' , 'p__3')
		}
	}
}

// 4
const btn4 = document.querySelector('.btn__4')
if (btn4) {
	let str = 2
	btn4.onclick = function() {
		let tag = document.createElement('tr')
		document.getElementById('sampleTable').appendChild(tag)
		tag.innerHTML = '<td>Row'+ (str+1) + ' cell1</td><td>Row'+ (str+1) + ' cell2</td>'
		str += 1
	}
}

// 5
const btn5 = document.querySelector('.btn__5')
if (btn5) {
	btn5.onclick = function() {
		let str = prompt('Введите строку!')
		let stolb = prompt('Введите столбец!')
		let l = document.getElementById('myTable').getElementsByTagName('tr')
		if (l[str-1].getElementsByTagName('td')[stolb-1]) {
			let b = l[str-1].getElementsByTagName('td')[stolb-1]
			let newstr = prompt('Введите новую строку!')
			b.innerHTML = newstr
		} else {
			alert('Такой ячейки нет!')
		}
	}
}

// 6
const btn6 = document.querySelector('.btn__6')
if (btn6) {
	btn6.onclick = function() {
		let str = prompt('Введите кол-во строк!')
		let stolb = prompt('Введите кол-во столбцов!')
		let table = document.getElementById('myTable')
		for (let i = 0; i<str; i++) {
			let newstr = document.createElement('tr')
			table.appendChild(newstr)
			for (let j = 0; j<stolb; j++) {
				let newstolb = document.createElement('td')
				newstr.appendChild(newstolb)
				newstolb.innerHTML = j+1
			}
		}
	}
}

// 7
const btn7 = document.querySelector(".btn__7")
if (btn7) {
	btn7.onclick = function() {
		let elem = document.getElementById('colorSelect')
		let elemvalue = elem.value
		if (elemvalue) {
			elem.remove(elemvalue)
			let delelem = document.createElement('p')
			document.body.appendChild(delelem)
			delelem.setAttribute('class', 'fdsg')
			delelem.innerHTML = 'Элемент <span>'+ elemvalue +'</span> был удален'
		}
	}
}

// 8
const btn8 = document.querySelector('.btn__8')
if (btn8) {
	btn8.onclick = function() {
		let elems = document.getElementById('mySelect').getElementsByTagName('option')
		let l = []
		for (let i =0; i<elems.length; i++) {
			l+=" "+elems[i].innerHTML
		}
		alert('Колл-во элементов - '+elems.length+ ', Элементы -'+l)
	}
}

// 10
document.body.addEventListener('click', (event) => {
	if (event.target.classList.contains('btn__10')) {
		let name = document.getElementById('input__1').value
		let surname = document.getElementById('input__2t').value
		if (name && surname) {
			const elem = document.getElementById('myTable')
			let newtab = document.createElement('tr')
			elem.appendChild(newtab)
			newtab.innerHTML = '<td>'+name+'</td>'+'<td>'+surname+'</td>'
			for (let i =0; i<newtab.getElementsByTagName('td').length; i++) {
				newtab.getElementsByTagName('td')[i].setAttribute('class', 'table__10')
			}
		} else {
			alert('Введите Имя и Фамилию!')
		}
	} else if (event.target.classList.contains('table__10')) {
		let a = prompt('Текст ячейки!', event.target.innerHTML)
		event.target.innerHTML = a 
	}
})

// 11
const logIn = document.querySelector('.log__in')
if (logIn) {
	let reg = document.querySelector('.registration')
	logIn.onclick = function() {
		reg.style.cssText = 
		`display: block;`
	}

	document.querySelector('.registration-close').onclick = function() {
		reg.style.cssText = 
		`display: none;`
	}

	window.onclick = function(event) {
		if (event.target == reg) {
			reg.style.cssText = 
			`display: none;`
		}
	}
}