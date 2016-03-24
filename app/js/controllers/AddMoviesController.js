myApp.controller('AddMovieController', function ($scope) {
    $scope.submitMovie = function (movie) {

        $scope.movies.push(movie);
        $scope.movie = {};
    }
});