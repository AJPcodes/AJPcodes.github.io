app.controller('MainCtrl', function($scope, $location, $anchorScroll, $timeout) {
  var that = this;

  this.toggleClass = function(elementId, className){
    angular.element('#' + elementId).toggleClass(className);
  };

  $timeout(function(){
    that.toggleClass('sideNav', 'active')
  }, 1000);


});