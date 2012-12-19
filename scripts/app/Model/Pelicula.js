define([
	'backbone',
	'app/Model/Actor',
	'app/Collection/Actores',
	'relationalModel'
],
function (Backbone, Actor, ActorCollection) {
	/*var Pelicula = Backbone.Model.extend({
		defaults: {
			actores: []
		},
		initialize: function(){
			this.actores = new ActorCollection( this.get('actores') );
		}
	});*/
	
	//var ActoresPelicula = Backbone.RelationalModel.extend();
	
	var Pelicula = Backbone.RelationalModel.extend({
		relations: [
			{
				type: Backbone.HasMany,
				key: 'actores',
				relatedModel: Actor,
				collectionType: ActorCollection
			}
		]
	});
	
	return Pelicula;
});
