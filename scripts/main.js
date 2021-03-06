//initialize app
var app = angular.module('AJPCodes', ['ngRoute', 'ngMaterial']);

app.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('grey')
    .accentPalette('light-blue');
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

//patch to make angular play nice with Jekyll
app.config([
  '$interpolateProvider', function($interpolateProvider) {
    return $interpolateProvider.startSymbol('{(').endSymbol(')}');
  }
]);

app.directive('scrollToItem', function($anchorScroll, $location) {
    return {
        restrict: 'A',
        scope: {
            scrollTo: "@"
        },
        link: function(scope, $elm,attr) {
            $elm.on('click', function() {
            console.log(window.location.pathname);
            	//scroll to sections with 100px offset for the toolbar
                if (window.location.pathname === "/") {
                    $('html,body').animate({scrollTop: ($(scope.scrollTo).offset().top) }, "slow");
                } else {
                    // window.location.pathname = "/" + scope.scrollTo;
                    // $location.hash(scope.scrollTo);
                }

            });

        }
    }});
