(function () {

    "use strict";

    var appModule = angular.module("appModule", ["ngRoute",
                                                 "homeModule",
                                                 "aboutModule",
                                                 "btsModule",
                                                 "natgModule",
                                                 "robotsModule",
                                                 "bfbModule",
                                                 "icwModule",
                                                 "ausModule",
                                                 "antModule",
                                                 "absModule",
                                                 "bhModule"
    ]);

    appModule.config(function ($routeProvider) {

        $routeProvider

            .when("/", {
                controller: "HomeController",
                templateUrl: "app/homeView.html"
            })
            .when("/about", {
                controller: "AboutController",
                templateUrl: "app/aboutView.html"
            })
            .when("/besideTheSea", {
                controller: "BTSController",
                templateUrl: "app/btsView.html"
            })
            .when("/nationalGeographic", {
                controller: "NatGController",
                templateUrl: "app/natgView.html"
            })
            .when("/robots", {
                controller: "RobotsController",
                templateUrl: "app/robotsView.html"
            })
            .when("/beautifulForBedtime", {
                controller: "BFBController",
                templateUrl: "app/bfbView.html"
            })
            .when("/ICanWrite", {
                controller: "ICWController",
                templateUrl: "app/icwView.html"
            })
            .when("/australia", {
                controller: "AUSController",
                templateUrl: "app/ausView.html"
            })
            .when("/antigua", {
                controller: "ANTController",
                templateUrl: "app/antView.html"
            })
            .when("/abstracts", {
                controller: "ABSController",
                templateUrl: "app/absView.html"
            })
            .when("/beachHuts", {
                controller: "BHController",
                templateUrl: "app/bhView.html"
            })
            .otherwise({
                redirectTo: "/about"
            });

    });

})();
