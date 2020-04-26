Ext.define("TopTenExtJsGridFeaturesClassic.view.login.LoginView", {
	extend: 'Ext.Container',
	xtype: 'loginview',
	cls: 'loginview',
	controller: 'loginviewcontroller',
	viewModel: {
		type: 'loginviewmodel'
	},
	layout: {
		type: 'vbox',
		align: 'center',
		pack: 'center'
	},
	items: [
		{
			xtype: 'window',
			//title: 'Virtual SenchaCon 2020',
			//cls: 'loginTitle',
			header: {
				xtype: 'header',
				items: [{
					xtype: 'image',
					src: 'https://cdn.freebiesupply.com/logos/large/2x/sencha-logo-png-transparent.png',
					cls: 'loginIconCls',
					width: 33,
					height: 50
				}, {
					xtype: 'component',
					html: '<h2 class="loginTitle">Virtual SenchaCon 2020<h2>'
				}]
			},
			width: 550,
			height: 450,
			bodyPadding: 10,
			closable: false,
			autoShow: true,
			defaultFocus: 'username',
			items: [{
				xtype: 'form',
				id: 'loginForm',
				layout: {
					type: 'vbox',
					align: 'middle'
				},

				reference: 'form',
				autoEl: {
					tag: 'form',
					action: 'login.php',
					method: 'post'
				},
				items: [
					{
						xtype: 'label',
						margin: '15 0 25 0',
						text: 'Welcome, please sign in below.',
						style: 'font: normal 19px Arial !important;color:gray'
					}, {
						xtype: 'textfield',
						allowBlank: false,
						width: 220,
						height: 35,
						name: 'username',
						emptyText: 'Username',
						inputAttrTpl: 'data-cy=username',
						listeners: {
							afterrender: function () {
								this.inputEl.set({
									'autocomplete': 'on'
								});
							}
						}
					}, {
						xtype: 'textfield',
						allowBlank: false,
						margin: '20 0 20 0',
						width: 220,
						height: 35,
						name: 'password',
						itemId: 'password',
						inputType: 'password',
						emptyText: 'Password',
						inputAttrTpl: 'data-cy=password',
						listeners: {
							afterrender: function () {
								this.inputEl.set({
									'autocomplete': 'on'
								});
							}
						}
					}, {
						xtype: 'container',
						margin: '0 0 25 0',
						layout: {
							type: 'hbox',
							align: 'middle'
						},
						items: [{
							name: 'rememberme',
							xtype: 'checkbox',
							boxLabel: 'Remember Me'
						}, {
							xtype: 'tbspacer',
							width: 20
						}, {
							xtype: 'displayfield',
							value: 'Forgot password',
							style: 'text-decoration: underline;',
							fieldStyle: 'color: #551A8B;'
						}
						]
					}, {
						xtype: 'displayfield',
						reference: 'message',
						hidden: true,
						fieldStyle: 'color: red;',
						value: 'Username and/or Password invalid'
					}, {
						xtype: 'component',
						html: '<iframe id="submitTarget" name="submitTarget" style="display:none"></iframe>'
					}, {
						xtype: 'component',
						html: '<input type="submit" id="submitButton" style="display:none">'
					}, {
						xtype: 'button',
						itemId: 'loginButton',
						text: 'LOGIN',
						height: 40,
						width: 120,
						cyId: 'loginBtn',
						reference: 'loginButton',
						handler: 'onLogin',
						listeners: {
							afterrender: function () {
								this.el.createChild({
									tag: 'input',
									type: 'submit',
									value: 'LOG IN',
									style: 'width: 100px; height: 35px; position: relative; top: -31px; left: -4px; opacity: 0;'
								});
							}
						}
					}]
			}]
		}
	]

});
