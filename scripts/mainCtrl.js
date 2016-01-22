app.controller('MainCtrl', function($scope, $mdSidenav) {
  this.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
});