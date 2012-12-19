define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/ActorList.html'
], function ($, _, Backbone, ActorListTemplate) {
	var ActorListView = Backbone.View.extend({
		template: _.template(ActorListTemplate),
		render: function(){
			var $template = $( this.template( this.model.toJSON() ));
			this.setElement( $template );
			return this;
		}
	});
	
	return ActorListView;
});
