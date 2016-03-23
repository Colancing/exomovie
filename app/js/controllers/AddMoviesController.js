/**
 * Created by Emmanuelle on 22/03/2016.
 */

myApp.controller('AddMovieController', function ($scope, $http) {
    $scope.submitMovie = function (movie) {
        $http.get('movies.json', movie)
            .success(function(data){
                $scope.movies=data;
                $scope.movies.push(movie);
                $scope.movie = {};
            })
            .error(function(resp){
                alert(resp);
            });
    };
});


