'use strict';

let a = {
    name: 'Misha',
    order: {
        price: 20
    },
};

let b = {
    name: 'Misha',
    order: {
        price: 20,
    }
};


console.log(a === b);
let res;


function deepEqual(a, b) {
    res = (a.name !== b.name) ? false : (a.order.price === b.order.price) ? true : false
    console.log(res)
}

console.log(res)

deepEqual(a, b);
console.log(res)