angular.module("AppControllers", [])

.controller("AppCtrl", function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal, $ionicNavBarDelegate, $location, $state, ProductosService, $rootScope) {
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

})

//LOGIN CONTROLLER
.controller("LoginCtrl", function($scope, $location, $state, $rootScope){
	$scope.user = "";
	$scope.christian = "Christian";
	$scope.ronald = "Ronald";
	$scope.paulina = "Paulina";
	$scope.otro = "Alan";
	$scope.pass = "cursor123";

	$scope.login = function(){
		var usuario = document.getElementById("usuario");
		var pass = document.getElementById("pass");
		if(usuario.value == $scope.christian || usuario.value == $scope.ronald  || usuario.value == $scope.paulina || usuario.value == $scope.otro && pass.value == $scope.pass){
			$scope.user = usuario.value;
			$rootScope.usuarioGlobal = $scope.user;
			$state.go("SalesPRO");
		}
		else{
			alert("Usuaio no válido");
		}
	}
})


//HOME CONTROLLER
.controller("HomeCtrl", function($scope, $location, $state, $rootScope){
	$scope.usuario = $rootScope.usuarioGlobal;
})


//LOGIN VENTAS
.controller("VentasCtrl", function($scope, $location, $state, $rootScope){
	$scope.usuario = $rootScope.usuarioGlobal;
});


