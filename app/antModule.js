(function(){

    "use strict";

    var antModule = angular.module("antModule", []);

    antModule.controller("ANTController", function($scope, $http){
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                // console.log(response.data.photography.antigua);
                $scope.antiguaImages = response.data.photography.antigua.images;

            });
    });

})();