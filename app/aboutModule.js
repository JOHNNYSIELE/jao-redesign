(function() {

    "use strict";

    var aboutModule = angular.module("aboutModule", []);

    aboutModule.controller("AboutController", function($scope, $http) {

        $http
            .get("assets/json/site.json")
            .then(function(response) {

                $scope.aboutTitle = response.data.about.aboutTitle;
                $scope.aboutImage = response.data.about.aboutImage;
                var aboutText = response.data.about.aboutText[0];
                $scope.aboutText = aboutText;

            });

    });

})();
