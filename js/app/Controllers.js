angular.module("AppControllers", [])

.controller("AppCtrl", function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal, $ionicNavBarDelegate, $location, $state, ProductosService, $rootScope) {
	//$rootScope.nombreProductoGlobal;
	console.log("AppCtrl: " + $rootScope.nombreProductoGlobal);
	$scope.data = {showDelete: false};
	$rootScope.ArrayCompra = [];
	$rootScope.totalCarroCompra = 0;

	$scope.navegar = function(pagina){
	 	$state.go(pagina);
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


//MENU VENTAS
.controller("VentasCtrl", function($scope, $location, $state, $rootScope){
	$scope.usuario = $rootScope.usuarioGlobal;
})

//CATALOGO MENU
.controller("CarroComprasCtrl", function($scope, $location, $state, $rootScope, ProductosService, PromocionesService){
	$scope.usuario = $rootScope.usuarioGlobal;
	$scope.prods =  ProductosService.productos;
	$scope.promos =  PromocionesService.promociones;
	$scope.totalCarro ="";

	//catalogo
	$scope.verProducto = function(index){
	 	$scope.elementoProducto= $scope.prods[index];
	 	$rootScope.nombreProductoGlobal= $scope.prods[index].nombre;
	 	$rootScope.precio = $scope.prods[index].precio;
	 	$rootScope.codigo = $scope.prods[index].precio;
	 	$rootScope.altura = $scope.prods[index].altura;
	 	$rootScope.potencia = $scope.prods[index].potencia;
	 	$rootScope.tipo = $scope.prods[index].tipo;
	 	$rootScope.imagen = $scope.prods[index].imagen;
	 	$rootScope.stock = $scope.prods[index].stock;
	 	$state.go("Producto");
	 }

	 $scope.verPromo= function(index){
	 	$scope.elementoProducto = $scope.promos[index];
	 	$rootScope.nombreProductoGlobal = $scope.promos[index].nombre;
	 	
	 	$rootScope.precio = $scope.promos[index].precio;
	 	$rootScope.codigo = $scope.promos[index].precio;
	 	$rootScope.altura = $scope.promos[index].altura;
	 	$rootScope.potencia = $scope.promos[index].potencia;
	 	$rootScope.tipo = $scope.promos[index].tipo;
	 	$rootScope.imagen = $scope.promos[index].imagen;
	 	$rootScope.stock = $scope.promos[index].stock;

	 	$state.go("Producto");
	 }

	$scope.pestanhaActiva = true;
	$scope.pestanhas = function(estado){
		$scope.pestanhaActiva = estado;
		$rootScope.isProductoGlobal = estado;
	}

	$scope.onSwipeRight = function(index){
		alert(index);
	}

    //CARRO COMPRAS
	$scope.anadirCarroCompras = function(nombre, imagenRuta ,precio){
		var cantidad = document.getElementById('cantidadProducto').value;
		var totalProd = precio * cantidad;
		var productoComprado = 
		{
			'nombreProducto' 	: nombre,
			'imagen'			: imagenRuta,
			'precioUnidad' 		: precio,
			'cant' 				: cantidad,
			'total' 			: totalProd
		}

		$rootScope.totalCarroCompra = $rootScope.totalCarroCompra + totalProd;
		console.log($rootScope.totalCarroCompra);
		$rootScope.ArrayCompra.push(productoComprado);
		console.log($scope.ArrayCompra.length + "antes");
		$state.go('CarroCompras');
		console.log(productoComprado);
	}

	$scope.verCant = function(){
		console.log($scope.ArrayCompra.length + "comprobar");
	}
})

.filter('noFractionCurrency',
		[ '$filter', '$locale', function(filter, locale) {
		  var currencyFilter = filter('currency');
		  var formats = locale.NUMBER_FORMATS;
		  return function(amount, num, currencySymbol) {
		    if (num===0) num = -1;
		    var value = currencyFilter(amount, currencySymbol);
		    var sep = value.indexOf(formats.DECIMAL_SEP)+1;
		    var symbol = '';
		    if (sep<value.indexOf(formats.CURRENCY_SYM)) symbol = ' '+formats.CURRENCY_SYM;
		    return value.substring(0, sep+num)+symbol;
		  };
}]);


