'use strict';

(function() {
  var getPicture = require('./picture');
  var load = require('./load');

  var picturesContainer = document.querySelector('.pictures');

  load('http://localhost:1506/api/pictures?callback=JSONPCallback', function(data) {
    var filtersBlock = document.querySelector('.filters');
    filtersBlock.classList.add('hidden');
    var pictures = data;
    pictures.forEach(function(pic) {
      var picture = getPicture(pic);
      picturesContainer.appendChild(getPicture(picture));
    });

    filtersBlock.classList.remove('hidden');
  });
})();
