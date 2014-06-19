App.LoginController = Em.Controller.extend({
	needs: ['application'],
	email: null,
	emailErr: false,
	password: null,
	passwordErr: false,
	enterAllRight: false,

	enterFinish: function(argument) {
		console.log(this.get('enterAllRight'));
		if(this.get('enterAllRight')) {
			var request = $.post('/users/sign_in', {
				user: {				
					email: this.get('email'),
					password: this.get('password')
				}
			});
			request.then(this.success.bind(this), this.error.bind(this));
		}
	}.observes('enterAllRight'),

	actions: {
		checkEnter: function() {
			var email = this.get('email')
			  , password = this.get('password')
			  , emailErr = validateEmail(email)
			  , passwordErr = validatePassword(password);

			this.set('emailErr', emailErr);
			this.set('passwordErr', passwordErr);
			this.set('enterAllRight', !emailErr || !passwordErr);
		}
	},

	success: function(data) {
		var currentUser = {
			isAuthed: data.isAuthed,
			email: data.email
		};

		this.get('controllers.application').set('currentUser', currentUser);
		this.transitionToRoute('index');
	},

	error: function(data) {
		this.set('enterAllRight', false);
	}
})

function validateEmail(email) {
	return (null != email && email.length < 6) || (null == email);
}

function validatePassword(password) {
	return (null != password && password.length < 6) || (null == password);
}