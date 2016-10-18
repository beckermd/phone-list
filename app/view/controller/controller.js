var myApp = angular.module("myApp", []);
myApp.controller("AppCtrl", ["$scope", function($scope) {


$scope.addNumber = function() {
  console.log($scope.contact)
};

}]);