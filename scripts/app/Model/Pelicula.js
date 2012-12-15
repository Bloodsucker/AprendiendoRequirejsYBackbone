define([
	'backbone',
	'app/Collection/Actores'
],
function (Backbone, ActorCollection) {
	var Pelicula = Backbone.Model.extend({
		defaults: {
			actores: []
		},
		initialize: function(){
			this.actores = new ActorCollection( this.get(actores) );
		}
	});
	
	return Pelicula;
});
