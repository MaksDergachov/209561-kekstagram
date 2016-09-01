'use strict';

module.exports = function(url, callback) {
  window.jsonpCallback = callback;
  var ScriptEl = document.createElement('script');
  ScriptEl.src = url + '?callback=jsonpCallback';
  document.body.appendChild(ScriptEl);
};
