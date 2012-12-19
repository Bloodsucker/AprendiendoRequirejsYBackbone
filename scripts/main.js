require.config({
	paths: {
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min',
		
		text: 'libs/rjsPlugins/text',
		
		relationalModel: 'libs/BackbonePlugins/backbone-relational',
		
		templates: '../templates'
	},
	
	baseUrl: '/AprendiendoRequirejsYBackbone/scripts/',
	
	shim: {
		'underscore' : {
			exports: "_"
		},
		'backbone' : {
			deps: ['underscore'],
			exports: "Backbone"
		},
		'relationalModel' : ['backbone']
	}
});

require([
	'router'
], function(router){
	router.initialize();
});
