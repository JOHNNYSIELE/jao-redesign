(function(){

    "use strict";

    var ausModule = angular.module("ausModule", []);

    ausModule.controller("AUSController", function($scope, $http){
        $http
            .get("assets/json/site.json")
            .then(function (response) {

                // console.log(response.data.photography.australia);
                $scope.australiaImages = response.data.photography.australia.images;

            });
    });

})();