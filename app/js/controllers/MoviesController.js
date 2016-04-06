myApp.controller('MoviesController', function ($scope, moviesFactory, $location) {
    $scope.get = function () {
        moviesFactory.query().$promise
            .then(function (movies) {
                $scope.movies = movies;
                console.log('fait');
            })
    };
    $scope.submitMovie = function (movie) {
        moviesFactory.save({movie: movie.id}, movie)
    };
    $scope.deleteMovie = function (movie) {
        console.log(movie);
        moviesFactory.delete({movie: movie.id}, function () {
            $scope.get();
        });

    };

    $scope.gotoEdit = function (path) {
        $location.path(path);
    };
    $scope.get();

    //$scope.order=function(predicate){
    //$scope.predicate=predicate;
//};
});