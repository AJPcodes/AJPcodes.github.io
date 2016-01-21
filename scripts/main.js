//initialize app
var app = angular.module('AJPCodes', ['ngRoute']);


//Setting Up routes
app.config(['$routeProvider', function($routeProvider){

	//route for main song view
	$routeProvider
		.when('/', {
			templateUrl: 'templates/homePage.html',
			controller: 'MainCtrl as mainCtrl'
		})
    .otherwise({ redirectTo: '/' });

}]);

