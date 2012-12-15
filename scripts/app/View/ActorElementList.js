define([
	'jquery',
	'underscore',
	'backbone',
	'text!templates/ActorList.html'
], function ($, _, Backbone, ActorListTemplate) {
	var ActorListView = Backbone.View.extend({
		template: _.template(ActorListTemplate),
		render: function(){
			this.$el.html( this.template( this.actorModel.toJSON() ) );
		}
	});
	
	return ActorListView;
});
