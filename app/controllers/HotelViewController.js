'use strict';


app.controller('HotelViewController', ['$scope', '$rootScope', '$routeParams', 'hotelService', function ($scope, $rootScope, $routeParams, hotelService) {
    $scope.hotel = {};

    init();

    function init() {
        //Grab hotelID off of the route        
        var hotelID = ($routeParams.hotelID) ? parseInt($routeParams.hotelID) : 0;
        if (hotelID > 0) {
            $scope.hotel = $rootScope.getHotel(hotelID);
        }

        $scope.getStars = function (rating) {
            return hotelService.getStars(rating);
        }

        updateRecentItems();
    }

    function updateRecentItems() {
        var recentItems = localStorage.getItem("recentItems");
        if (typeof recentItems !== 'undefined' && recentItems !== null) {
            recentItems = JSON.parse(recentItems);
            for (var i = recentItems.length - 1; i >= 0; i--) {
                if (recentItems[i]._id == $scope.hotel._id) {
                    recentItems.splice(i, 1);
                }
            }
        }
        else
            recentItems = [];

        var currentItem = { _id: $scope.hotel._id, name: $scope.hotel.name, datetime: new Date() };
        recentItems.push(currentItem);
        localStorage.setItem("recentItems", JSON.stringify(recentItems));
    }

}]);
