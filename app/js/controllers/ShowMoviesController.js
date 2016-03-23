/**
 * Created by Emmanuelle on 22/03/2016.
 */
myApp.controller('ShowMoviesController', function ($scope,movies) {
    $scope.movies=movies;
    console.log(movies);
});