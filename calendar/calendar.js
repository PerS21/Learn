function createCalendar(id, year, month) {
    let elem = document.getElementById(id);

    let mon = month - 1; // месяцы в JS идут от 0 до 11, а не от 1 до 12
    let d = new Date(year, mon);
    let numberFirstDay = getDay(d)
    // console.log(d)

    let table = '<table><tr><th>пн</th><th>вт</th><th>ср</th><th>чт</th><th>пт</th><th>сб</th><th>вс</th></tr><tr>';

    // заполнить первый ряд от понедельника
    // и до дня, с которого начинается месяц
    // * * * | 1  2  3  4
    for (let i = 0; i < numberFirstDay; i++) {
      table += '<td></td>';
    }

    // ячейки календаря с датами
    while (d.getMonth() == mon) {
      table += '<td>' + d.getDate() + '</td>';

      if (getDay(d) % 7 == 6) { // вс, последний день - перевод строки
        table += '</tr><tr>';
      }

      d.setDate(d.getDate() + 1); // переходим к след дню
    }

    let numberFirstDayNewMonth = getDay(d)
    // console.log(d)


    // добить таблицу пустыми ячейками, если нужно
    if (numberFirstDayNewMonth != 0) {
      for (let i = numberFirstDayNewMonth; i < 7; i++) {
        table += '<td></td>';
      }
    }

    // закрыть таблицу
    table += '</tr></table>';

    // только одно присваивание innerHTML
    elem.innerHTML = table;
  }

  function getDay(date) { // получить номер дня недели, от 0(пн) до 6(вс)
    let day = date.getDay();
    // console.log(day)
    if (day == 0) day = 7;
    return day - 1;
    
  }



  createCalendar("calendar", 2019, 8)