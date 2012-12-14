require.config({
	paths: {
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min'
	},
	
	shim: {
		'underscore' : {
			exports: "_"
		},
		'backbone' : {
			deps: ['underscore'],
			exports: "Backbone"
		}
	}
});

require([
	'router'
], function(router){
	router.initialize();
});
