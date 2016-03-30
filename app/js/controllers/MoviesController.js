myApp.controller('MoviesController', function ($scope, $http) {

    $http.get("movies.json").success(function (data) {
        $scope.movies = data.movies;

    }).error(function (data, statusText) {
        alert(statusText);
    })

    $scope.deleteMovie = function (index) {
        $scope.movies.splice(index, 1);
        console.log($scope.movies);
    };

    $scope.editMovie =function(index){
        console.log(index);
    };
});

