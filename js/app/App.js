var App = angular.module("App", ["ionic", "AppControllers", "AppServices"])

App.config( function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
    	.state('login', 
    	{
    		url: '/',
    		templateUrl: 'templates/login.html',
    	})
    	.state('SalesPRO', 
    	{
    		url: '/SalesPRO',
    		templateUrl: 'templates/home.html'
    	})
    	.state('registroVisita', 
    	{
    		url: '/registroVisita',
    		templateUrl: 'templates/registro-visita.html'
    	})
    	.state('CarroCompras', 
    	{
    		url: '/carroCompras',
    		templateUrl: 'templates/carroCompras.html'
    
    	})
    	.state('Catalogo', 
    	{
    		url: '/catalogo',
    		templateUrl: 'templates/catalogo.html'
    
    	})
    	.state('Producto', 
    	{
    		url: '/producto',
    		templateUrl: 'templates/producto.html'
    	})
    	.state('Ventas', 
    	{
    		url: '/misVentas',
    		templateUrl: 'templates/misVentas.html',
    	})
    	.state('DetalleCliente', 
    	{
    		url: '/cliente',
    		templateUrl: 'templates/detalleCliente.html',
    	});

			
});





