//This handles the rating stars and is used by the controllers.
app.service('hotelService', function () {    
    this.getStars = function (rating) {
        // Get the value
        var val = parseFloat(rating);
        // Turn value into number/100
        var size = val / 5 * 100;
        return size + '%';
    };
});