myApp.controller('MovieFormController', function ($scope,$http) {
    $scope.submitMovie = function (movie) {
        $http.post("http://localhost:3000/movies",movie).success(function() {
            $scope.movies.push(movie);
            $scope.movie = {};
        });
    }
});