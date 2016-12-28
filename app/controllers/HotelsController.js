'use strict';

app.controller('HotelsController', ['$scope', '$rootScope', '$http', 'hotelService', function ($scope, $rootScope, $http, hotelService) {

    init();

    function init() {
        //Initialize items to an empty array, since the page will render before our data returns from the get request.
        $scope.hotels = [];
        $scope.brands = [];
        $scope.getStars = function (rating) {
            return hotelService.getStars(rating);
        }
    }

    $http.get('/content/jsons/hotels.json')
        .success(function (data) {
            $scope.hotels = data;

        }).error(function (data, status, headers, config) {
            console.log(data); // log error
        });


    $http.get('/content/jsons/brands.json')
        .success(function (data) {
            $scope.brands = data;
        }).error(function (data, status, headers, config) {
            console.log(data); // log error
        });


    $rootScope.getHotel = function (id) {
        for (var i = 0; i < $scope.hotels.length; i++) {
            if ($scope.hotels[i]._id === id) {
                return $scope.hotels[i];
            }
        }
        return null;
    };

    $scope.deleteHotel = function (id) {
        for (var i = $scope.hotels.length - 1; i >= 0; i--) {
            if ($scope.hotels[i]._id === id) {
                $scope.hotels.splice(i, 1);
                break;
            }
        }
    };

    $scope.recentItems = localStorage.getItem("recentItems");
    if (typeof $scope.recentItems !== 'undefined' && $scope.recentItems !== null)
        $scope.recentItems = JSON.parse($scope.recentItems);
    else
        $scope.recentItems = [];

}]);

app.run(function (editableOptions) {
    editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
});