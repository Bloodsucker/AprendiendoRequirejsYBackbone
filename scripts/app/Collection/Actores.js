define([
	'backbone',
	'app/Model/Actor'
], function (Actor) {
  var ActorCollection = Backbone.Collection.extend({
    model: Actor
  });
  
  return ActorCollection;
});
