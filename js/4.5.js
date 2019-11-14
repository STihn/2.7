
//TASK 1

let task1 = [
    'book',
    '1245',
    true,
]
console.log(task1)

//TASK 2

var a3 = {  3 : 'hello', 'one' : 'hi', 'testt' : 'vodoley', 'ivan' : 'ivanov'}

//длина объекта
console.log('Длина объекта а3:'+ Object.keys(a3).length)

for (var key in a3){
    if (key.length >= 4){
        document.write( key + ' ')
    }
}

//TASK 3

let a7 = []
let btn = document.getElementById('button');

btn.onclick = function () {
// добавить чистку полей после совершения клика
	const key = document.getElementById('u7-key__input').value
	const value = document.getElementById('u7-value__input').value
	a7[key] = value
	let a7ToString = ''
	for (item of Object.keys(a7)){
        a7ToString += item + ': ' + a7[item] + '<br>'
    }

    document.getElementById('result').innerHTML = a7ToString  
}

 
//TASK 4

const a = ['Tor', 'Lokki', 'Odin', 34, 'privet','poka']
console.log(a.length)

//TASK 5

let d = [0, 2, 5, -4, 6, 22, -9, -12 ,13, 78]

let a1 = []
let a2 = []

for(i of d){
    if(i >= 0){
        a1 += i + ', '; 
    }     
    else if (i < 0){
        a2 += i + ', ' ;
    }
}

const element_a1 = document.getElementById('task 5 positive')
element_a1.innerHTML = 'Положительные числа: '+ a1

const element_a2 = document.getElementById('task 5 negative')
element_a2.innerHTML = 'Отрицательные числа: '+ a2


//TASK 6

let d1 = [0, 2, 5, -4, 6, 22, -9, -12, 13, 78];

let maxValue = d1[0]

for (item of d1){
    if(maxValue < item)
    maxValue = item
}
console.log(maxValue)

// var array = [1,2,5,4,3,0,-1,10,22,17,12,9];
// function compare (x,y) {
//     if (x > y) return 1
//     if (x == y) return 0
//     if (x < y) return -1
// }
// array.sort(compare)
//  console.log(array)
// let last = array.pop()
// let str = last
// console.log(str)

