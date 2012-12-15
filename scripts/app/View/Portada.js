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
			
			_.each(this.peliculas, function(pelicula){
				self.peliculaViews.push( new PeliculaElementList({
					peliculaModel: pelicula
				}));
			});
			
			_.each(this.actores, function(actor){
				self.actorViews.push(new ActorElementList({
					actorModel: actor
				}));
			});
		},
		render: function(){
			var self = this;
			this.$el.html( this.template() );
			
			_.each(this.peliculaViews, function(peliculaView){
				self.$el.append( peliculaView.render().$el );
			});
			
			
			_.each(this.actorViews, function(actorView){
				self.$el.append( actorView.render().$el );
			});
		}
	});
	
	return PortadaView;
});
