'use strict';


let table = document.querySelector('.js-teachers')
let tbody = table.querySelector('tbody')
let trs = tbody.getElementsByTagName('tr');


function handler(event) {
    for (let i = 0; i < trs.length; i++) {
        if (!trs[i].querySelector('td[data-available]')) {
            trs[i].setAttribute('class','hidden')
        } else {
        let a = (trs[i].querySelector('td[data-available]').getAttribute('data-available'))
        // console.log(a)
        if (a === "true"){
            trs[i].setAttribute('class','available')
        }else trs[i].setAttribute('class','unavailable')
        }
    }
}

function handler2(event) {
    for (let i = 0; i < trs.length; i++) {
    let gender = trs[i].querySelector('td:nth-child(3)').innerText
    console.log(gender)
    if (gender === 'm') {
        trs[i].setAttribute('class','male')
    } else trs[i].setAttribute('class','female') 
}
}

function handler3(event) {
    for (let i = 0; i < trs.length; i++) {
        let age = trs[i].querySelector('td:nth-child(2)').innerText
        if (age < 18) {
            trs[i].setAttribute('class','junior')
        }
    }
}

function handler4(event) {
    for (let i = 0; i < trs.length; i++) {

            trs[i].setAttribute('class','null')
        
    }
}

const button1 = document.querySelectorAll('button')[0];
console.log(button1)
button1.addEventListener('click',handler);

const button2 = document.querySelectorAll('button')[1];
console.log(button2)
button2.addEventListener('click',handler2);

const button3 = document.querySelectorAll('button')[2];
console.log(button3)
button3.addEventListener('click',handler3);

const button4 = document.querySelectorAll('button')[3];
console.log(button4)
button4.addEventListener('click',handler4);