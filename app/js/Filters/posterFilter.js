/**
 * Created by Emmanuelle on 07/04/2016.
 */
myApp.filter('poster', function () {
    return function (posterUrl) {
        if (posterUrl) {
            return posterUrl;
        }
        else {
            return "img/no-poster.jpg";
        }
    }
});