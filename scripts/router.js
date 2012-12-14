define([
	'underscore',
	'backbone'
] , function (_, Backbone) {

	var AppRouter = Backbone.Router.extend({
		routes: {
			"*ruta" : "default"
		},
		initialize : function(){
			this.route(/(|!\/?)/, 'raiz', this.aPortada);
			
			this.route( /^!\/portada\/?$/ , 'portada', this.portada);
			
			this.route( /^!\/pelicula\/(\d+)\/?$/, "pelicula", this.pelicula);
			
			this.route( /^!\/actor\/(\d+)\/?$/, "actor", this.actor);
		},
		
		portada: function(){
			console.log("Portada");
		},
		pelicula: function(peliID){
			console.log('Película: '+peliID);
		},
		actor: function(actorID){
			console.log('Actor: '+actorID);
		},
		
		raiz: function(){
			this.navigate('!/portada/', {trigger: true, replace: true});
		},
		default: function(ruta){
			console.log("404 - Default: "+ruta);
		}
	});
	
	return {
		initialize: function(){
			var appRouter = new AppRouter();
			
			Backbone.history.start();
		}
	};
});
