define([
	'backbone',
	'app/Model/Pelicula'
], function (Pelicula) {
  var PeliculaCollection = Backbone.Collection.extend({
    model: Pelicula
  });
  
  return PeliculaCollection;
});
