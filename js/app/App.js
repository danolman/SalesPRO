var App = angular.module("App", ["ionic", "AppControllers"])


App.config( function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    	.state('login', 
    	{
    		url: '/',
    		templateUrl: 'templates/login.html'
    	})
    	.state('SalesPRO', 
    	{
    		url: '/SalesPRO',
    		templateUrl: 'templates/home.html'
    	})
    	.state('main', 
    	{
    		url: '/main',
    		templateUrl: 'templates/main.html'
    	})
    	.state('registroVisita', 
    	{
    		url: '/registroVisita',
    		templateUrl: 'templates/registro-visita.html'
    	})
    	.state('Pedidos', 
    	{
    		url: '/pedidos',
    		templateUrl: 'templates/pedido.html'
    
    	})
    	.state('Producto', 
    	{
    		url: '/producto',
    		templateUrl: 'templates/producto.html'
    	});
			
});

App.factory("ProductosService", function() {
	var productos = [
		{
			nombre: "Comia pal perro shico", 
			precio: 2000, 
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Comia rica pero poca", 
			precio: 25800,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Caca de gato", 
			precio: 2500,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Poca comía", 
			precio: 2000,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Comia pal perro shico", 
			precio: 5000,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Comia pal perro shico", 
			precio: 4000,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Comia pal perro shico", 
			precio: 3000,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
		{
			nombre: "Comia pal perro shico", 
			precio: 7000,
			detalle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer",
			imagen: "images/"
		},
	];

	return{
          productos: productos, 
          /*getProducto: function(index) {
              return productos[index];
          }*/
           getProducto: function() {
              return productos;
          },
          getProd: function(index){
          	return productos[index]
          }
      }
});




