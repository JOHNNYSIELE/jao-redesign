(function(){

    "use strict";

    var absModule = angular.module("absModule", []);

    absModule.controller("ABSController", function($scope, $http){
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                // console.log(response.data.photography.antigua);
                $scope.abstractsImages = response.data.photography.abstracts.images;

            });
    });

})();