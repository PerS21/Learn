var data = {
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
  var container = document.createElement('div');  //Создали эл-нт
//   container.setAttribute('id', 'container')  //Добавили id
  document.body.insertBefore(container, document.body.firstChild);  //Вставили на страницу перед первым эл-ом в body

  function createTree(container, obj) {  //Функция создания дерева
    container.innerHTML = createTreeText(obj);  //Расписываем дерево из строки
  }

  function createTreeText(obj) { // отдельная рекурсивная функция, создаем строку с деревом
    var li = '';
    for (var key in obj) {
      li += '<li>' + key + createTreeText(obj[key]) + '</li>';
    }
    if (li) {
      var ul = '<ul>' + li + '</ul>'
    }
    return ul || '';
  }

  createTree(container, data);

