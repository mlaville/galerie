var adminGalerie = (function () {

  var loadData = function () {
	$.get("./php/galerie.json", { login: f['login'].value, pwd: f['pwd'].value },
    // private
  };

  var someMethod = function () {
    // public
  };

  var anotherMethod = function () {
    // public
  };
  
  return {
    someMethod: someMethod,
    anotherMethod: anotherMethod
  };

})();