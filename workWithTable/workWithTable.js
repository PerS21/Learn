'use strict';

function highlight(table) {
//   console.log(table);
  
let tbody = table.querySelector('tbody')
// console.log(tbody)
let trs = tbody.getElementsByTagName('tr');
// console.log(trs[1].querySelector('td[data-available]'))


let available =  document.querySelector('.js-teachers').querySelector('tbody').querySelector('tr:nth-child(1)').querySelector('td[data-available]').getAttribute('data-available')
// console.log(available)

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
//  document.querySelector('.js-teachers').querySelector('tbody').querySelector('tr:nth-child(1)').querySelector('td:nth-child(2)').innerText
// for (let i = 0; i < trs.length; i++) {
//     let gender = trs[i].querySelector('td:nth-child(3)').innerText
//     // console.log(gender)
//     if (gender === 'm') {
//         trs[i].setAttribute('class','male')
//     } else trs[i].setAttribute('class','female')
    
// }

// for (let i = 0; i < trs.length; i++) {
//     let age = trs[i].querySelector('td:nth-child(2)').innerText
//     if (age < 18) {
//         trs[i].setAttribute('class','junior')
//     }
// }

//   console.log(trs);
}

highlight(document.querySelector('.js-teachers')); 