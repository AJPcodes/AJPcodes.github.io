app.controller('MainCtrl', function($scope, $mdSidenav) {

  this.openLeftMenu = function() {
    angular.element('#sideNav').toggleClass('active');
  }

  this.hoverIn = function(elementId) {
  	angular.element('#' + elementId).toggleClass('md-whiteframe-z0');
  	angular.element('#' + elementId).toggleClass('md-whiteframe-z1');
  }

  this.hoverOut = function(elementId) {
  	angular.element('#' + elementId).toggleClass('md-whiteframe-z0');
  	angular.element('#' + elementId).toggleClass('md-whiteframe-z1');
  }


});