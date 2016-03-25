/**
 * Created by Emmanuelle on 17/03/2016.
 */
//var routeAppControllers = angular.module('routeAppControllers', [
//    'MoviesController',
//    'MovieFormController'
//]);

var myApp = angular.module('myApp', [
    'ngRoute'
    //'routeAppControllers'
]);


myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            templateUrl:'partials/home.html'
        })
        .when('/movies', {
            templateUrl:"partials/movies.html",
            //controller:"MoviesController"
        })
        .when('/movieForm', {
            templateUrl:'partials/moviesForm.html'
        })
        .otherwise({redirectTo : '/'});
}]);
