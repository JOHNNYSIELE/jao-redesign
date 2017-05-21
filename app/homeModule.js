(function(){

    "use strict";

    var homeModule = angular.module("homeModule", []);

    homeModule.controller("HomeController", function($scope, $http){

        $http
            .get("assets/json/site.json")
            .then(function(response){

                $scope.homeImage = response.data.home.homeImage;

            });

    });

})();