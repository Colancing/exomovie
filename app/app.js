/**
 * Created by Emmanuelle on 17/03/2016.
 */
//var routeAppControllers = angular.module('routeAppControllers', [
//    'MoviesController',
//    'MovieFormController'
//]);

var myApp = angular.module('myApp', [
    'ngRoute', 'ngResource',
]);


myApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider
        .when('/', {
            templateUrl: 'partials/home.html'
        })
        .when('/movies', {
            templateUrl: "partials/movies.html",
            controller: "MoviesController"
        })
        .when('/movieForm', {
            templateUrl: 'partials/moviesForm.html'
        })
        .when('/edit/:id', {
            templateUrl: 'partials/edit.html',
            controller: 'MovieEditController'
        })
        .otherwise({redirectTo: '/'});

    myApp.config(['$resourceProvider', function ($resourceProvider) {
        // Don't strip trailing slashes from calculated URLs
        $resourceProvider.defaults.stripTrailingSlashes = false;
    }]);
}]);
