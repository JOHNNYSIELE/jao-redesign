(function(){

    "use strict";

    var robotsModule = angular.module("robotsModule", []);

    robotsModule.controller("RobotsController", function($scope, $http){

        $http
            .get("assets/json/site.json")
            .then(function (response) {

                console.log(response.data.collage.robots);
                $scope.robotsTitle = response.data.collage.robots.robotsTitle;
                $scope.robotsText = response.data.collage.robots.robotsText[0];
                $scope.robotsImages = response.data.collage.robots.images;

            });
    });

})();