'use strict';

var app = angular.module('hotelsApp', ['ngRoute', 'xeditable']);

//This configures the routes and associates each route with a view and a controller
app.config(function ($routeProvider) {
    $routeProvider
        .when('/hotels',
            {
                controller: 'HotelsController',
                templateUrl: '/app/views/hotels.html'
            })
        //Define a route that has a route parameter in it (:hotelID)
        .when('/hotels/:hotelID',
            {
                controller: 'HotelViewController',
                templateUrl: '/app/views/hotelView.html'
            })
        .otherwise({ redirectTo: '/hotels' });
});