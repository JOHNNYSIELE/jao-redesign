(function () {

    "use strict";

    var natgModule = angular.module("natgModule", []);

    natgModule.controller("NatGController", function ($scope, $http) {
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                console.log(response.data.collage.nationalGeographic);
                $scope.natGeoTitle = response.data.collage.nationalGeographic.nationalGeographicTitle;
                $scope.natGeoText = response.data.collage.nationalGeographic.nationalGeographicText[0];
                $scope.natGeoImages = response.data.collage.nationalGeographic.images;

            });
    });

})();