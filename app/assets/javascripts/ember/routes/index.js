App.ApplicationRoute = Em.Route.extend({
	currentUser: {
		isAuthed: false,
		email: null
	},

	setupController: function(controller, model) {
		var metaData = window.MetaData;
		if (metaData && metaData.isAuthed) {
			var currentUser = {
				isAuthed: true,
				email: metaData.email
			};

			controller.set('currentUser', currentUser);
		} else {
			this.transitionTo('login');
		}
	},

	actions: {
		error: function(err) {
			if (401 === err.status) {
				this.transitionTo('login');
			}
		}
	}
});