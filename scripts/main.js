//initialize app
var app = angular.module('AJPCodes', ['ngRoute', 'ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('cyan');
});

//Setting Up routes
app.config(['$routeProvider', function($routeProvider){

	// //route for main song view
	// $routeProvider
	// 	.when('/', {
	// 		templateUrl: 'templates/homePage.html'
	// 		// controller: 'MainCtrl as mainCtrl'
	// 	})

	// 	// .when('/resume', {
	// 	// 	templateUrl: 'templates/resume.html'
	// 	// 	// controller: 'MainCtrl as mainCtrl'
	// 	// })
	// 	// .when('/underConstruction', {
	// 	// 	templateUrl: 'templates/underConstruction.html'
	// 	// 	// controller: 'MainCtrl as mainCtrl'
	// 	// })

 //    .otherwise({ redirectTo: '/' });

}]);

