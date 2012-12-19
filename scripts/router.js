define([
	'underscore',
	'backbone',
	'app/View/Portada',
	'app/Model/PortadaModel',
	'app/Model/Pelicula',
	'app/Model/Actor'
] , function (_, Backbone, PortadaView, PortadaModel, Pelicula, Actor) {

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
			console.log("En portada.");
			
			/*var actor1 = new Actor({id:1, name: "Ignacio José"});
			var actor2 = new Actor({id:2, name: "Ignacio cabo"});
			var actor3 = new Actor({id:3, name: "Luis"});
			var actor4 = new Actor({id:4, name: "Cabo"});
			var actor5 = new Actor({id:5, name: "Pepe"});
			
			var peli1 = new Pelicula({id: 1, name: "Piratas caribe", actores: [1, 2]});
			var peli2 = new Pelicula({id:2, name: "StarWars", actores: [3, 2]});
			var peli3 = new Pelicula({id:3, name: "Pokemon", actores: [3, 2, 4]});*/
			
			var portadaModel = new PortadaModel();
			portadaModel.fetch({
				success: function(){
					var portadaView = new PortadaView({
						model: portadaModel
					});
					portadaView.render();
				}
			});
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
