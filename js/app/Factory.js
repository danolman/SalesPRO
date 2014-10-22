angular.module("AppServices", [])

.factory("ProductosService", function() {
	var productos = [
		{nombre: "Comia pal perro shico", precio: 2000},
		{nombre: "Comia rica pero poca", precio: 25800},
		{nombre: "Caca de gato", precio: 2500},
		{nombre: "Poca comía", precio: 2000},
		{nombre: "Comia pal perro shico", precio: 5000},
		{nombre: "Comia pal perro shico", precio: 4000},
		{nombre: "Comia pal perro shico", precio: 3000},
		{nombre: "Comia pal perro shico", precio: 7000},
	];

	return{
          productos: productos, 
          /*getProducto: function(index) {
              return productos[index];
          }*/
           getProducto: function(index) {
              return productos;
          }
      }
});




