let ball = document.querySelector('img[id=ball]')
let field = document.querySelector('div[id=field]')

console.log(ball.offsetWidth)

ball.style.left = ((field.clientWidth/2) - (ball.offsetWidth/2)) + "px"

console.log(ball.style.left)

ball.style.top = (field.clientHeight/2 - 20) + "px"

console.log(ball.style.top)

