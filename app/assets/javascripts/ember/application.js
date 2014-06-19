window.App = Em.Application.create();

App.ApplicationAdapter = DS.ActiveModelAdapter.extend();

App.Router.map(function() {
	this.resource('login');
})

//= require 'ember/views/click'
//= require 'ember/models/index'
//= require 'ember/controllers/index'
//= require 'ember/routes/index'