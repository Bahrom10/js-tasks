str1 = +prompt('Введите 1 число')
str2 = +prompt('Введите 2 число')
str3 = +prompt('Введите 3 число')

if(str1 < str2 < str3 || str3 < str2 < str1) alert(str2)
else if(str1 < str3 < str2 || str2 < str3 < str1) alert(str3)
else if(str3 < str1 < str2 || str2 < str1 < str3) alert(str2)