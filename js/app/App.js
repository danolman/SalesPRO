var App = angular.module("App", ["ionic"])

App.controller("AppCtrl", function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal, $ionicNavBarDelegate) {
	
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

 	 $scope.showAlert = function() {
	   var alertPopup = $ionicPopup.alert({
	     title: 'Don\'t eat that!',
	     template: 'It might taste good'
	   });
	   alertPopup.then(function(res) {
	     console.log('Thank you for not eating my delicious ice cream cone');
	   });
	 };

	 //MODAL
	 // Create and load the Modal
	  $ionicModal.fromTemplateUrl('modal.html', function(modal) {
	    $scope.taskModal = modal;
	  }, {
	    scope: $scope,
	    animation: 'slide-in-up'
	  });

	  // Open our new task modal
	  $scope.newTask = function() {
	    $scope.taskModal.show();
	  };

	  // Close the new task modal
	  $scope.closeNewTask = function() {
	    $scope.taskModal.hide();
	  };

	   $scope.getPreviousTitle = function() {
	    return $ionicNavBarDelegate.getPreviousTitle();
	  };

	  $scope.goBack = function() {
	    $ionicNavBarDelegate.back();
	  };

});


App.config( function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    	.state('login', 
    	{
    		url: '/',
    		templateUrl: 'templates/login.html'
    	})
    	.state('home', 
    	{
    		url: '/home',
    		templateUrl: 'templates/home.html'
    	});
/*$stateProvider
	.state('home', {
      url: "/home",
      views: {
        'menuContent' :{
          templateUrl: "templates/home.html"
        }
      }
    });*/
});



