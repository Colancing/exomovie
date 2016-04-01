myApp.controller('MovieEditController', function ($scope, $http, $routeParams, $location) {

    $http.get("http://localhost:3000/movies")
        .success(function (data) {
            $scope.movies = data;
            $scope.movie = $scope.movies[$routeParams.id];

        })
        .error(function (data, statusText) {
            alert(statusText);
        });

    $scope.gotoHome = function (path) {
        $location.path(path);
    };

    $scope.editMovie = function (movie) {
        console.log("movie", movie);
        console.log("movies", $scope.movies)
        $http.put("http://localhost:3000/movies/" + movie.id, movie)
            .success(function () {
                $location.path('/movies');
            })
    };

});