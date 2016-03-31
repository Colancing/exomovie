myApp.controller('MovieFormController', function ($scope,$http) {
    $scope.submitMovie = function (movie) {
        $http.post("movies.json",movie).success(function() {
            $scope.movies.push(movie);
            $scope.movie = {};
        });
    }
});