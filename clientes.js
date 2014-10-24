{
	nombre : "Juan Pérez",
	direccion: "Los Leones N° 382, Providencia",
	historial : {
		{
			vendedor : "Ronald",
			monto: 150000,
			fecha: "21/03/2014"
		},
		{
			vendedor : "Paulina",
			monto: 150000,
			fecha: "21/04/2014"
		},
		{
			vendedor : "Christian",
			monto: 150000,
			fecha: "21/05/2014"
		},
		{
			vendedor : "Alan",
			monto: 150000,
			fecha: "21/06/2014"
		}
	},
	comentarios : {
		{
			vendedor : "Ronald",
			comentario: "No atiende los fines de semana",
			fecha: "21/03/2014"
		},
		{
			vendedor : "Christian",
			comentario: "Siempre compra las promociones",
			fecha: "21/03/2014"
		}
	}
}


$scope.clientes =  ClientesService.clientes;

	$scope.pestanhaActiva = true;
	$scope.pestanhas = function(estado){
		$scope.pestanhaActiva = estado;
		$rootScope.isProductoGlobal = estado;
	}

	$scope.verCliente = function(index){
		$rootScope.clienteGlobal = $scope.clientes[index].nombre;
		$scope.numeroCliente = index;
		$rootScope.direccion = $scope.clientes[index].direccion;
		$state.go('DetalleCliente');
	}
