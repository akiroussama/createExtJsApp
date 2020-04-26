Ext.define('neverWalkAlone.view.login.LoginViewController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.loginviewcontroller',

	onLogin: function () {
		var form = this.getView().lookup('form');
		if (form.isValid()) {
			var me = this;
			var user = form.down('#username').getValue()
			var pass = form.down('#password').getValue()
			me.getLoginData(user, pass)
				.then(function (response) {
					if (response.valid == true) {
						Ext.Msg.alert('Login Success', 'You have been logged in!')
						localStorage.setItem("LoggedIn", true)
						me.getView().destroy()
						window.location.reload();
					}
					else {
						Ext.Msg.alert('Server Login Failure', 'You have NOT been logged in!');
					}
				}, function (e) {
					// should be error here, but just for the example it will pass
					Ext.Msg.alert('Login Success', 'You have been logged in!')
					localStorage.setItem("LoggedIn", true)
					me.getView().destroy()
					window.location.reload();
				})
		} else {
			Ext.Msg.alert('Login Failure', 'The username/password provided is invalid.');
		}
	},

	getLoginData: function (user, pass) {
		return new Ext.Promise(function (resolve, reject) {
			try {
				var v = 'false'; if (user != '') { v = 'true' };
				Ext.Ajax.request({
					url: 'resources/shared/data/login' + v + '.json',
					success: function (response, opts) {
						var o = Ext.decode(response.responseText);
						resolve(o);
					},
					failure: function (response, opts) {
						return reject('server-side failure with status code ' + response.status);
					}
				});
			}
			catch (err) {
				return reject(err);
			}
		});
	}

});
