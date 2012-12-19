define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/PeliculaList.html'
], function ($, _, Backbone, peliculaListTemplate) {
	var PeliculaListView = Backbone.View.extend({
		template: _.template(peliculaListTemplate),
		render: function(){
			var template = this.template( this.model.toJSON() );
			this.setElement( $(template) );
			return this;
		}
	});
	
	return PeliculaListView;
});
