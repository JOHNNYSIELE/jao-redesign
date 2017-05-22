(function(){

    "use strict";

    var bfbModule = angular.module("bfbModule", []);

    bfbModule.controller("BFBController", function($scope, $http){
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                console.log(response.data.collage.beautifulForBedtime);
                $scope.beautifulForBedtimeTitle = response.data.collage.beautifulForBedtime.beautifulForBedtimeTitle;
                $scope.beautifulForBedtimeText = response.data.collage.beautifulForBedtime.beautifulForBedtimeText[0];
                $scope.beautifulForBedtimeImages = response.data.collage.beautifulForBedtime.images;

            });
    });

})();