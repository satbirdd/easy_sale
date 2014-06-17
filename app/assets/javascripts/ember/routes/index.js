App.ApplicationRoute = Em.Route.extend({
	model: function() {
		console.log('======-----------======');
	},
	actions: {
		error: function(err) {
			if (401 === err.status) {
				this.transitionTo('login');
			}
		}
	}
});

App.IndexRoute = Em.Route.extend({
	model: function() {
		return this.store.find('currentUser');
	},
});