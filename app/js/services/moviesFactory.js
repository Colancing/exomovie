/**
 * Created by Emmanuelle on 05/04/2016.
 */
myApp.factory('moviesFactory', function ($resource) {
    return $resource("http://localhost:3000/movies/:movie", {movie: "@id"},
        {
            'update': {method: 'PUT'}
        });
});