time = +prompt('Введите время')
switch (time) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
        alert(time + ' часа ночи')
        break;
    case 7:
    case 8:
    case 9:
    case 10:
        alert(time + ' часов утра')
        break;
    case 11:
    case 12:
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
        alert((time - 12) + ' часа дня')
        break;
    case 18:
    case 19:
    case 20:
    case 21:    
    case 22:
    case 23:
        alert((time - 12) + ' часов вечера')
        break;
    case 0:
    case 24:
        alert('12 часов ночи')
    default:
        break;
}
