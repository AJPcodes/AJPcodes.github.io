app.controller('MainCtrl', function($scope, $location, $anchorScroll) {

  this.toggleClass = function(elementId, className){
    angular.element('#' + elementId).toggleClass(className);
  };

});