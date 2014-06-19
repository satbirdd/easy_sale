App.ApplicationRoute = Em.Route.extend({
	currentUser: {
		isAuthed: false,
		email: null
	},

	model: function(controller, model) {
		var metaData = window.MetaData;
		console.log(metaData);
		if (metaData && metaData.isAuthed) {
			var currentUser = {
				isAuthed: true,
				email: metaData.email
			};

			controller.set('currentUser', currentUser);
		} else {
			window.location.replace("/users/sign_in");
		}
	},

	actions: {
		error: function(err) {
			if (401 === err.status) {
				window.location.replace("/users/sign_in");
			}
		}
	}
});