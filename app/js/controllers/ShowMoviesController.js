myApp.controller('ShowMoviesController', function ($scope,$http) {

    $http.get("movies.json").success(function(data) {
        $scope.movies=data.movies;

    }).error(function(data, statusText) {
        alert(statusText);
    })
});