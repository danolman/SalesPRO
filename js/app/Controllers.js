angular.module("AppControllers", [])

.controller("AppCtrl", function($scope, $ionicSideMenuDelegate, $ionicPopup, $ionicModal, $ionicNavBarDelegate, $location, $state, ProductosService, $rootScope) {
	//$rootScope.nombreProductoGlobal;
	console.log("AppCtrl: " + $rootScope.nombreProductoGlobal);
	$scope.data = {showDelete: false};
	$rootScope.ArrayCompra = [];
	$rootScope.totalCarroCompra = 0;
	$rootScope.clienteGlobal = "";
	$rootScope.vendedorGlobal = "";

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

	$scope.eliminarProducto = function(index){
		console.log($rootScope.ArrayCompra[index].total);
		$rootScope.totalCarroCompra  = $rootScope.totalCarroCompra - $rootScope.ArrayCompra[index].total;
		$rootScope.ArrayCompra.splice(index, 1);
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

.controller("ClienteCtrl", function($scope, $location, $state, $rootScope, $ionicPopup ){
	
	$scope.pestanhaActiva = true;
	$scope.pestanhas = function(estado){
		$scope.pestanhaActiva = estado;
		$rootScope.isProductoGlobal = estado;
	}

	$scope.initMapa = function()
	{
		document.getElementById("mapa").innerHTML = "";
		var marker;
		var map;

		var myLatLng = new google.maps.LatLng(-33.42311716048031, -70.60452800000002);
			
		var mapOptions = {
	  		center: myLatLng,
	  		zoom: 16,
	  		mapTypeId: google.maps.MapTypeId.ROADMAP
		};
	    var map = new google.maps.Map(document.getElementById("mapa"),mapOptions);
			
		var image = 'images/marker.png';
			 
		var beachMarker = new google.maps.Marker({
			position: myLatLng,
			animation: google.maps.Animation.DROP,
			map: map,
			icon: image
		});
	}
	$scope.showPopup = function() {
	  $scope.data = {}
	  		// An elaborate, custom popup
		  var myPopup = $ionicPopup.show({
		    template: '<input type="password" ng-model="data.wifi">',
		    title: 'Información adicional',
		    subTitle: 'Esta información será evaluada por un administrador',
		    scope: $scope,
		    buttons: [
		      { text: 'Cancelar' },
		      {
			        text: '<b>Enviar</b>',
			        type: 'button-positive',
			        onTap: function(e) {
			          if (!$scope.data.wifi) {
			            //don't allow the user to close unless he enters wifi password
			            e.preventDefault();
			          } else {
			            return $scope.data.wifi;
			          }
			        }
			      },
			    ]
			  });
			  myPopup.then(function(res) {
			    console.log('Tapped!', res);
			  });
			  
	 };

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


