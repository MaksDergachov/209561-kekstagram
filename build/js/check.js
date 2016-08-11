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

if (typeof a == "number") {
		return "Переданное SVG-изображение содержит " + a + " объектов и " + (b * 4) + " атрибутов";

	}
	if ( Array.isArray(a) && !Array.isArray(b) ) {
		var amountOfRedPoints = 0;

		for (var i = 0; i < a.length; i++) {
			amountOfRedPoints += a[i];
		}

		return "Количество красных точек во всех строчках изображения: " + amountOfRedPoints;
	}
	if ( Array.isArray(a) && Array.isArray(b) ) {
		var artifactsSquare = 0;

		for (var i = 0; i < a.length; i++) {
			var result = a[i] * b[i];
			artifactsSquare += result;
		};

		return "Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей";

  }
}
