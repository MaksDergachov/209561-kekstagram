'use strict';

var picturesContainer = document.querySelector('.pictures');
var templateElement = document.querySelector('#picture-template');
var elementToClone;

var pictures = [];

var IMAGE_LOAD_TIMEOUT = 10000;

var createCallback = function(url, callback) {
  var scriptEl = document.createElement('script');
  scriptEl.src = url;
  document.body.appendChild(scriptEl);

  window.JSONPCallback = function(data) {
    callback(data);
  };
};

if ('content' in templateElement) {
  elementToClone = templateElement.content.querySelector('.picture');
} else {
  elementToClone = templateElement.querySelector('.picture');
}

createCallback('http://localhost:1506/api/pictures?callback=JSONPCallback', function(data) {
  var filtersBlock = document.querySelector('.filters');
  filtersBlock.classList.add('hidden');
  pictures = data;

  pictures.forEach(function(pic) {
    var picture = getPictureElement(pic);
    picturesContainer.appendChild(picture);
  });

  filtersBlock.classList.remove('hidden');
});

var getPictureElement = function(jsonpData) {
  var element = elementToClone.cloneNode(true);
  element.querySelector('.picture-likes').textContent = jsonpData.likes;
  element.querySelector('.picture-comments').textContent = jsonpData.comments;


  var backgroundImage = new Image();

  backgroundImage.onload = function(evt) {
    clearTimeout(backgroundLoadTimeout);
    element.style.backgroundImage = 'url(\'' + evt.target.src + '\')';
    element.style.width = '182px';
    element.style.height = '182px';
  };

  backgroundImage.onerror = function() {
    element.classList.add('picture-load-failure');
  };

  backgroundImage.src = jsonpData.url;

  var backgroundLoadTimeout = setTimeout(function() {
    backgroundImage.src = '';
    element.classList.add('picture-load-failure');
  }, IMAGE_LOAD_TIMEOUT);

  return element;
};
