var myApp = angular.module("myApp", []);
myApp.controller("AppCtrl", ["$scope", function($scope, $http) {
  console.log("Hello from controller");

var refresh = function() {
  $http.get("/phonelist").then(function(response) {
    $scope.phonelist = response.data;
    $scope.contact = "";
  });
};


$scope.addNumber = function() {
  console.log($scope.contact);
  $http.post("/phonelist", $scope.contact).success(function(response) {
    console.log(response);
    refresh();
  })
};

$scope.remove = function(id) {
  console.log(id)
  $http.delete("/phonelist/" + id).success(function(response) {
    refresh();
  });
};

$scope.edit = function(id) {
  $http.get("/phonelist/" + id).success(function(response) {
    $scope.contact = response;
  });
};

$scope.update = function() {
  $http.put('/phonelist/' + $scope.contact._id, $scope.contact).success(function(response) {
    refresh();
  });
};

$scope.deselect = function() {
  $scope.contact = "";
}

}]);