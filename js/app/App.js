var App = angular.module("App", ["ionic"])

App.controller("AppCtrl", function($scope, $ionicSideMenuDelegate, $ionicPopover) {
	
	$scope.todo = [
		{"name": "Limpiar la cocina"},
		{"name": "Lavar la ropa"},
		{"name": "Limpiar el patio"},
		{"name": "algo que hacer"}
	]

	$scope.addTodo = function(){
		$scope.todo.push({name: "Dinamico"});
	}

	$scope.data = {showDelete: false};

	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleRight();
 	};

 	$ionicPopover.fromTemplateUrl('my-popover.html', {
    scope: $scope,
	  }).then(function(popover) {
	    $scope.popover = popover;
	  });
 	$scope.openPopover = function($event) {
 		alert("holi");
    	$scope.popover.show($event);
  	};
});



