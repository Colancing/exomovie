myApp.controller('MoviesController', function ($scope, $http, $routeParams) {

    $http.get("movies.json").success(function (data) {
        $scope.movies = data.movies;

    }).error(function (data, statusText) {
        alert(statusText);
    })

    $scope.deleteMovie = function (index) {
        $scope.movies.splice(index, 1);
        console.log($scope.movies);
    };

    $scope.gotoEdit =function(index){
        console.log(index);
    };
});

