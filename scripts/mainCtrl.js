app.controller('MainCtrl', function($scope, $location, $anchorScroll) {

  // this.openLeftMenu = function() {
  //   angular.element('#sideNav').toggleClass('active');
  // }

  this.toggleClass = function(elementId, className){
    angular.element('#' + elementId).toggleClass(className);
  };

  this.scrollTo = function(id) {
      $location.hash(id);
      $anchorScroll();
      $anchorScroll.yOffset = 100;
   }

});