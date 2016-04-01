myApp.controller('MoviesController', function ($scope, $http, $location) {

    $http.get("http://localhost:3000/movies").success(function (data) {
            $scope.movies = data;
            console.log($scope.movies);
        })
        .error(function (data, statusText) {
            alert(statusText);
        });



    $scope.deleteMovie = function (index) {
        console.log('index', index);
        $http.delete('http://localhost:3000/movies/' + $scope.movies[index].id)
            .success(function () {
                $scope.movies.splice(index, 1);
            });
    };

    $scope.gotoEdit = function (path) {
        $location.path(path);
    };


});

