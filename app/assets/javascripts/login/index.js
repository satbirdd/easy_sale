//= require lib/index

window.Login = Em.Application.create();

Login.ApplicationController = Em.Controller.extend({
	email: null,
	emailErr: false,
	password: null,
	passwordErr: false,
	enterAllRight: false,

	enterFinish: function(argument) {
		if (this.get('enterAllRight')) {
			$('form').submit();
		}
		return this.get('enterAllRight');
	}.observes('enterAllRight'),

	actions: {
		checkEnter: function() {
			var email = this.get('email')
			  , password = this.get('password')
			  , emailErr = !validateEmail(email)
			  , passwordErr = !validatePassword(password);

			this.set('emailErr', emailErr);
			this.set('passwordErr', passwordErr);
			this.set('enterAllRight', !emailErr && !passwordErr);
		}
	}
})

function validateEmail(email) {
  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};

function validatePassword(password) {
	return ((null != password) && ('' != password));
};