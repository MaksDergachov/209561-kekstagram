'use strict';

var createCallback = function(url, callback) {
  var scriptEl = document.createElement('script');
  scriptEl.src = url;
  document.body.appendChild(scriptEl);

  window.JSONPCallback = function(data) {
    callback(data);
  };
};

createCallback('http://localhost:1506/api/pictures?callback=JSONPCallback', function(data) {
  window.pictures = data;
  console.log(window.pictures);
});
