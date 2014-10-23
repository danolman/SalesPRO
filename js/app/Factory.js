angular.module("AppServices", [])

.factory("ProductosService", function() {
	var productos = [
		
		{
			nombre: "PETTO", 
			codigo: "92356",
			precio: 23000, 
			altura: 1100,
			potencia: "1X50W",
			tipo: "colgante",
			imagen: "productos/petto.jpg",
			stock: 6
		},
		{
			nombre: "ALEA", 
			codigo: "91872",
			precio: 35000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/alea.jpg",
			stock: 6
		},
		{
			nombre: "CRAZONI", 
			codigo: "92251",
			precio: 25000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/razoni.jpg",
			stock: 5
		},
		{
			nombre: "DEBED", 
			codigo: "92134",
			precio: 25000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/debed.jpg",
			stock: 2
		},
		{
			nombre: "ALEA", 
			codigo: "91872",
			precio: 35000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/alea.jpg",
			stock: 6
		},
		{
			nombre: "FARGO", 
			codigo: "7422",
			precio: 18000, 
			altura: 1100,
			potencia: "1X100W",
			tipo: "colgante",
			imagen: "productos/fargo.jpg",
			stock: 8
		},
		{
			nombre: "VETRO", 
			codigo: "3041",
			precio: 31000, 
			altura: 1100,
			potencia: "1X100W",
			tipo: "colgante",
			imagen: "productos/vetro.jpg",
			stock: 2
		}
		
	];

	return{
          productos: productos, 
          
          getProducto: function() {
              return productos;
          },
          getProd: function(index){
          	return productos[index]
          }
      }
})

.factory("PromocionesService", function() {
	var promociones = [
		{
			nombre: "CRAZONI", 
			codigo: "92251",
			precio: 25000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/razoni.jpg",
			stock: 5
		},
		{
			nombre: "PETTO", 
			codigo: "92356",
			precio: 23000, 
			altura: 1100,
			potencia: "1X50W",
			tipo: "colgante",
			imagen: "productos/petto.jpg",
			stock: 6
		},
		{
			nombre: "ALEA", 
			codigo: "91872",
			precio: 35000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/alea.jpg",
			stock: 6
		},
		{
			nombre: "VETRO", 
			codigo: "3041",
			precio: 31000, 
			altura: 1100,
			potencia: "1X100W",
			tipo: "colgante",
			imagen: "productos/vetro.jpg",
			stock: 2
		},
		{
			nombre: "DEBED", 
			codigo: "92134",
			precio: 25000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/debed.jpg",
			stock: 2
		},
		{
			nombre: "UPPSALA", 
			codigo: "7422",
			precio: 25000, 
			altura: 1100,
			potencia: "1X100W",
			tipo: "colgante",
			imagen: "productos/uppsala.jpg",
			stock: 2
		},
		{
			nombre: "FARGO", 
			codigo: "7422",
			precio: 18000, 
			altura: 1100,
			potencia: "1X100W",
			tipo: "colgante",
			imagen: "productos/fargo.jpg",
			stock: 8
		},
		{
			nombre: "FORTUNA", 
			codigo: "7422",
			precio: 15000, 
			altura: 1100,
			potencia: "1X60W",
			tipo: "colgante",
			imagen: "productos/fortuna.jpg",
			stock: 8
		}
	];

	return{
          promociones: promociones, 
          
          getDestacado: function() {
              return promociones;
          },
          getPDest: function(index){
          	return promociones[index]
          }
      }
});





