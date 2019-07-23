const field = document.querySelector('div')
// console.log(field)

// const marginBody = 8
// console.log(marginBody)
// const borderImg =  field.style.border
// console.log(borderImg)

// const button1 = document.querySelectorAll('button')[0];
// console.log(field)
field.addEventListener('click',handler);

function handler(event) {
    // console.log(event.clientX)
    // console.log(event.clientY)
    ball.style.top = (event.clientY - 56) + 'px'
    ball.style.left = (event.clientX - 18) + 'px'

    if (event.clientX > 200) {
        ball.style.left = 200 - 20 + 'px'
    }

    if (event.clientX < 36) {
        ball.style.left = 20 + 'px'
    }


    if (event.clientY > 186) {
        ball.style.top = 206 - 76 + 'px'
    }

    if (event.clientY < 70) {
        ball.style.top = 20 + 'px'
    }
}