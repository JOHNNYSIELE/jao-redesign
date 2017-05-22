(function(){

    "use strict";

    var icwModule = angular.module("icwModule", []);

    icwModule.controller("ICWController", function($scope, $http){
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                console.log(response.data.collage.iCanWrite);
                $scope.iCanWriteTitle = response.data.collage.iCanWrite.iCanWriteTitle;
                $scope.iCanWriteText = response.data.collage.iCanWrite.iCanWriteText[0];
                $scope.iCanWriteImages = response.data.collage.iCanWrite.images;

            });
    });

})();