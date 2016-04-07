/**
 * Created by Emmanuelle on 07/04/2016.
 */
myApp.filter("stars", function () {
    return function (number) {
        var stars = "";
        for (var i = 0; i < number; i++) {
            stars += "\u2605";
        }
        return stars;
    }
});