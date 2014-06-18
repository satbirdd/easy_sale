App.ClickableView = Em.View.extend({
	control: null,
	click: function(event) {
		console.log(this.get('control'));
		this.get('control').send('helo');
	}
})