const field = document.querySelector('div')
    // console.log(field)

// const marginBody = 8
// console.log(marginBody)
// const borderImg =  field.style.border
// console.log(borderImg)

// const button1 = document.querySelectorAll('button')[0];
// console.log(field)
field.addEventListener('click', handler);

function handler(event) {
    console.log(event.clientX)
    console.log(event.clientY)
    // ball.style.top = (event.clientY - 56 - (ball.clientHeight / 2)) + 'px'
    // ball.style.left = (event.clientX - 18 - (ball.clientHeight / 2)) + 'px'

    // let a = field.getBoundingClientRect().top - field.clientTop
    // let b = field.getBoundingClientRect().left - field.clientLeft
    // console.log(a,b)

    // if (event.clientX > 200) {
    //     ball.style.left = 200 + 'px'
    // }

    // if (event.clientX < 38) {
    //     ball.style.left = 25 + 'px'
    // }


    // if (event.clientY > 186) {
    //     ball.style.top = 206 - 56 + 'px'
    // }

    // if (event.clientY < 78) {
    //     ball.style.top = 0 + 'px'
    // }

    ball.style.top = (event.clientY - field.getBoundingClientRect().top - field.clientTop - (ball.clientHeight / 2)) + 'px'
    ball.style.left = (event.clientX - field.getBoundingClientRect().left - field.clientLeft - (ball.clientHeight / 2)) + 'px'

    if (event.clientX > field.offsetWidth - field.clientLeft - (ball.clientHeight / 2)) {
        ball.style.left = 160 + 'px'
    }

    if (event.clientX < 38) {
        ball.style.left = 0 + 'px'
    }


    if (event.clientY > 186) {
        ball.style.top = 206 - 56 + 'px'
    }

    if (event.clientY < 78) {
        ball.style.top = 0 + 'px'
    }
}