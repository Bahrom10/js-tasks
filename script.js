year = +prompt('Введите возраст')
if(year > 0 && year <= 18) alert('Вы еще молоды, Вам нужно учиться')
else if(year > 18 && year <= 50) alert('Вам нужно работать')
else if(year > 50 && year <= 59) alert('Вам скоро на пенсию')
else if(year > 59 && year <= 100) alert('Вы пенсионер')
else alert('Что то пошло не так')