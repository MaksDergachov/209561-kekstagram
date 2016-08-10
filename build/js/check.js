function getMessage(a, b) { //создаю функцию getMessage принимающую два параметра
  var sMessage;
  if (typeof a == 'boolean') {
    if(a) {
      sMessage = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
    } else {
      sMessage = 'Переданное GIF-изображение не анимировано';
    }
  }
  return sMessage; //возвращаю строку
}
