myApp.controller('MovieEditController', function ($scope, $http, $routeParams, $location) {

    $http.get("http://localhost:3000/movies")
        .success(function (data) {
            $scope.id = $routeParams.id;
            $scope.movie = data[$scope.id];

    })
        .error(function (data, statusText) {
        alert(statusText);
    });

    $scope.gotoHome = function(path) {
        $location.path(path);
    };

    $scope.editMovie = function (movie){
        console.log("movie", movie);
        console.log("movies" , $scope.movies)
        $scope.movie=movie;
        $scope.movies[$scope.id]=movie;
    };

});