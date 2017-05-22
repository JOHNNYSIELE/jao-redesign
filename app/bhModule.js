(function(){

    "use strict";

    var bhModule = angular.module("bhModule", []);

    bhModule.controller("BHController", function($scope, $http){
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                // console.log(response.data.photography.antigua);
                $scope.beachHutsImages = response.data.photography.beachHuts.images;

            });
    });

})();