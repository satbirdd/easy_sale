App.LoginController = Em.Controller.extend({
	email: null,
	emailErr: false,
	password: null,
	passwordErr: false,

	enterFinish: function(argument) {
		if(this.get('emailErr') || this.get('passwordErr')) {
			return;
		} else {
			console.log('good!');
		}
	}.observes('emailErr', 'passwordErr'),

	actions: {
		checkEnter: function() {
			var email = this.get('email')
			  , password = this.get('password')
			  , emailErr = (null != email && email.length < 6) || (null == email)
			  , passwordErr = (null != password && password.length < 6) || (null == password);

				this.set('emailErr', emailErr);
				this.set('passwordErr', passwordErr);
		}
	}
})