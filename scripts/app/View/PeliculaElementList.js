define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/PeliculaList.html'
], function ($, _, Backbone, peliculaListTemplate) {
	var PeliculaListView = Backbone.View.extend({
		template: _.template(peliculaListTemplate),
		render: function(){
			this.$el.html( this.template( this.peliculaModel.toJSON() ) );
		}
	});
	
	return PeliculaListView;
});
