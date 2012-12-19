define([
	'backbone',
	'app/Model/Actor',
	'app/Model/Pelicula',
	'app/Collection/Peliculas',
	'app/Collection/Actores',
	'relationalModel'
], function(Backbone, Actor, Pelicula, Peliculas, Actores){
	var PortadaModel = Backbone.RelationalModel.extend({
		url: function(){
			var url = './api/portada.php';
			
			return url;
		},
		initialize: function(){
			console.log('Inicializamos el modelo portada.');
		},
		relations : [
			{
				type: Backbone.HasMany,
				key: 'peliculas',
				relatedModel: Pelicula,
				collectionType: Peliculas
			},
			{
				type: Backbone.HasMany,
				key: 'actores',
				relatedModel: Actor,
				collectionType: Actores
			}
		]
	});
	
	return PortadaModel;
});
