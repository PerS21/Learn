let style = `
position: absolute;
top: -999px;
left: 0px;
right: auto;
bottom: auto;
border: 0px;
box-sizing: content-box;
word-wrap: break-word;
overflow: hidden;
height: 0px !important;
min-height: 0px !important;
font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
font-size: 12px;
font-weight: 400;
font-style: normal;
letter-spacing: 0px;
text-transform: none;
word-spacing: 0px;
text-indent: 0px;
line-height: 20px;
width: 191px;
`;
style = style.trim()
    // style.length = style.length - 1
    // style = style.substring(1)

console.log(style)


function styleToObject(str) {
    var arr = str.split(';\n')
    console.log(arr)
    return arr.reduce((result, value) => {
        let idx = value.indexOf(":")
        let key = value.slice(0, idx)
        let val = value.slice(idx + 2)

        result[key] = val
        return result
    }, {})


}

console.log(styleToObject(style))