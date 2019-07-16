let obj = {
    "Рыбы": {
        "Форель": {},
        "Щука": {}
    },

    "Деревья": {
        "Хвойные": {
            "Лиственница": {},
            "Ель": {}
        },
        "Цветковые": {
            "Берёза": {},
            "Тополь": {}
        }
    }
};

let container = document.getElementById('container');

function createTree(container, obj) {
    let keyObj = Object.keyObj(obj)
    for (let key of keyObj) {
        console.log(key)
        return key

    }
}
console.log(createTree(container, obj))