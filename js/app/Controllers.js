angular.module("AppControllers", [])

.controller("AppCtrl", function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal, $ionicNavBarDelegate, $location, $state, ProductosService) {
	
	$scope.prods =  ProductosService.productos;
	$scope.data = {showDelete: false};

	$scope.navegar = function(pagina){
	 	$state.go(pagina);
	 }

	 $scope.verProducto = function(index){
	 	$scope.elemento = $scope.prods[index];
	 	$state.go("Producto");
	 }

	$scope.toggleLeft = function() {
    	$ionicSideMenuDelegate.toggleRight();
 	}


});
	




