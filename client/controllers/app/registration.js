angular.module('app').controller('app_registration', app_registration);
function app_registration($scope, app) {
    'use strict';
    app.init($scope);
    
    //Send base64 string to server
    $scope.speakingChange = function () {
        alert("Hi speakear");
        
        
    }
}