define([
	'backbone',
	'app/Collection/Actor'
], function (Actor) {
  var ActorCollection = Backbone.Collection.extend({
    model: Actor
  });
  
  return ActorCollection;
});
