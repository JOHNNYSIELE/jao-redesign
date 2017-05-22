(function(){

    "use strict";

    var btsModule = angular.module("btsModule", []);

    btsModule.controller("BTSController", function($scope, $http){

        $http
            .get("assets/json/site.json")
            .then(function(response) {

               // console.log(response.data.collage.besideTheSea.images);
               $scope.btsTitle = response.data.collage.besideTheSea.besideTheSeaTitle;
               $scope.btsText = response.data.collage.besideTheSea.besideTheSeaText[0];
               $scope.btsImages = response.data.collage.besideTheSea.images;

            });

    });

})();