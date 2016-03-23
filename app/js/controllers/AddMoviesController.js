/**
 * Created by Emmanuelle on 22/03/2016.
 */

myApp.controller('AddMovieController', function ($scope, movies) {
    $scope.submitMovie = function (movie) {
        $scope.movies=movies;
        $scope.movies.push(movie);
        $scope.movie = {};
    };
});


