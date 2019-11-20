


// TASK 1
let btn = document.getElementById('button');

 function someFunc() {
    const val = document.getElementById('firstName').value
    if(val == '') {
            alert('Вы забыли ввести Имя.');
                return false;
        }   
    
    let name = val
    
    document.getElementById('resultName').innerHTML = name
    document.getElementById('firstName').value = ''
}

// TASK 2
function Foo() {
    let x = parseInt(prompt('Введите первое число'))
    let y = parseInt(prompt('Введите второе число'))
    if (!parseInt(x)){
        alert('Вы ввели не число');
    }
    else if (!parseInt(y)) {
        alert('Вы ввели не число');
    }
    if (x > y) {
        alert( x );
    }
    if (x == y){
        alert( x );
    }
    if (x < y) {
        alert( y );
    }
}

//  TASK 3

function someFoo() {
    let x = parseInt(prompt('Введите первое число'))
    let y = parseInt(prompt('Введите второе число'))
    if (!parseInt(x)){
        alert('Вы ввели не число');
    }
    else if (!parseInt(y)) {
        alert('Вы ввели не число');
    }
    if (x > y) {
        alert( x );
    }
    if (Math.abs(x) == Math.abs(y)){
        alert( x );
    }
    if (x < y) {
        alert( y );
    }
}

// TASK 4

function randFoo (min, max) {

   return Math.floor(Math.random() * (max - min) + min);

}
console.log(someFoo (1, 100));