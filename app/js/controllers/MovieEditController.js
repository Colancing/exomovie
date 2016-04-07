myApp.controller('MovieEditController', function ($scope, $routeParams, $location, moviesFactory) {

    $scope.movies = moviesFactory.query().$promise
        .then(function (movies) {
            var movieId = movies[$routeParams.id].id;
            $scope.movie = moviesFactory.get({movie: movieId});
            return $scope.movie.$promise;
        })
        .then(function (movie) {
            $scope.editMovie = function () {
                moviesFactory.update({movie: movie.id}, movie).$promise
                    .then(function () {
                        $scope.goto("/movies")
                    });
            };
        });

    $scope.goto = function (path) {
        $location.path(path);
    };
});