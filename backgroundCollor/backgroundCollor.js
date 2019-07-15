let a = document.querySelectorAll("li>a")
console.log(a)
let arr = Array.from(a)
    // console.log(arr[1].href)
for (let i = 0; i < arr.length; i++) {
    let href = arr[i].href
    if (href.startsWith('http://internal.com/test')) {} else if ((href.startsWith('http://') || (href.startsWith('ftp://')))) {
        console.log(i)
        document.querySelector("ul").children[i].setAttribute('class', 'external')
    }
}
// let b = document.querySelector('ul')
// console.log(b.childNodes[1])
// let elem = b.children[0]
// elem.setAttribute('class', 'external')