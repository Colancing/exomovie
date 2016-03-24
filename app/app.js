/**
 * Created by Emmanuelle on 17/03/2016.
 */
var myApp = angular.module('myApp', ['ngRoute']);
myApp.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {templateUrl:'partials/index.html'})
        .when('/movies', {templateUrl:"partials/movies.html"})
        .otherwise({redirectTo : '/'});
}]);
