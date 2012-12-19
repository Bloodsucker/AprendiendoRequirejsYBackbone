define([
	'jquery',
	'underscore',
	'backbone',
	'app/View/PeliculaElementList',
	'app/View/ActorElementList',
	'text!templates/Portada.html'
], function($, _, Backbone, PeliculaElementList, ActorElementList, portadaTemplate){
	var PortadaView = Backbone.View.extend({
		el: $('#container'),
		template: _.template(portadaTemplate),
		initialize: function(){
			var self = this;
			this.peliculaViews = [];
			this.actorViews = [];
			
			this.model.get('peliculas').each(function(pelicula){
				self.peliculaViews.push( new PeliculaElementList({
					model: pelicula
				}));
			});
			
			this.model.get('actores').each( function(actor){
				self.actorViews.push(new ActorElementList({
					model: actor
				}));
			});
		},
		render: function(){
			var self = this;
			var foo = this.template();
			this.$el.html( foo );
			
			_.each(this.peliculaViews, function(peliculaView){
				self.$el.find('#nuevasPeliculas ul').append( peliculaView.render().$el );
			});
			
			
			_.each(this.actorViews, function(actorView){
				self.$el.find('#nuevosActores ul').append( actorView.render().$el );
			});
		}
	});
	
	return PortadaView;
});
