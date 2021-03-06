'use strict';
  function getMessage(a, b) { //создаю функцию getMessage принимающую два параметра
    var sMessage;

    if (typeof a === 'boolean') {
      if (a) {
        sMessage = 'Переданное GIF-изображение анимировано и содержит ' + b + ' кадров';
      } else {
        sMessage = 'Переданное GIF-изображение не анимировано';
      }
    }

    if (typeof a === 'number') {
      sMessage = 'Переданное SVG-изображение содержит  + a + " объектов и " + (b * 4) + " атрибутов';
    }

    if ( Array.isArray(a) && !Array.isArray(b) ) {
      var amountOfRedPoints = 0;

      for (var i = 0; i < a.length; i++) {
        amountOfRedPoints += a[i];
      }

      sMessage = 'Количество красных точек во всех строчках изображения: ' + amountOfRedPoints;
    } // оттащил закрывающую вперёд
    if ( Array.isArray(a) && Array.isArray(b) ) {
      var artifactsSquare = 0;

      for (i = 0; i < a.length; i++) {
        artifactsSquare += a[i] * b[i];
      }//опять оттащил закрывающую

      sMessage = 'Общая площадь артефактов сжатия: " + artifactsSquare + " пикселей';
    }//поднял на 1 строчку вперёд для лучшей читабельности

    return sMessage;
  } // подвинул вперёд
