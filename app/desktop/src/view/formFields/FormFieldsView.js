Ext.define("CreateExtJsApp.view.formFields.FormFields", {
	extend: 'Ext.Container',
	xtype: 'formFieldsview',
	height: '100%',
	items: [{
		xtype: 'form',
		frame: true,
		layout: 'form',
		items: [{
			xtype: 'textfield',
			name: 'textfield1',
			inputAttrTpl: 'data-cy=extjsVersion',
			fieldLabel: 'ExtJs Version',
			value: 'Text field value'
		}, {
			xtype: 'hiddenfield',
			name: 'hidden1',
			value: 'Hidden field value'
		}, {
			xtype: 'textfield',
			name: 'password1',
			inputType: 'password',
			itemId: 'pwd',
			fieldLabel: 'Password field'
		}, {
			xtype: 'filefield',
			name: 'file1',
			fieldLabel: 'File upload'
		}, {
			xtype: 'textareafield',
			name: 'textarea1',
			fieldLabel: 'TextArea',
			value: 'Textarea value'
		}, {
			xtype: 'displayfield',
			name: 'displayfield1',
			fieldLabel: 'Display field',
			value: 'Display field <span style="color: "green";">value</span>'
		}, {
			xtype: 'numberfield',
			name: 'numberfield1',
			fieldLabel: 'Number field',
			value: 5,
			minValue: 0,
			maxValue: 50
		}, {
			xtype: 'checkboxfield',
			name: 'checkbox1',
			fieldLabel: 'Checkbox',
			boxLabel: 'box label'
		}, {
			xtype: 'radiofield',
			name: 'radio1',
			value: 'radiovalue1',
			fieldLabel: 'Radio buttons',
			boxLabel: 'radio 1'
		}, {
			xtype: 'radiofield',
			name: 'radio1',
			value: 'radiovalue2',
			fieldLabel: '',
			labelSeparator: '',
			hideEmptyLabel: false,
			boxLabel: 'radio 2'
		}, {
			xtype: 'timefield',
			name: 'time1',
			fieldLabel: 'Time Field',
			minValue: '1:30 AM',
			maxValue: '9:15 PM'
		}, {
			xtype: 'textfield',
			name: 'email',
			fieldLabel: 'Email Address',
			vtype: 'email',
			msgTarget: 'side',
			allowBlank: false
		}, {
			xtype: 'fieldcontainer',
			fieldLabel: 'Availability',
			combineErrors: true,
			msgTarget: 'side',
			layout: 'hbox',
			defaults: {
				flex: 1,
				hideLabel: true
			},
			items: [{
				xtype: 'datefield',
				name: 'startDate',
				fieldLabel: 'Start',
				allowBlank: false
			}, {
				xtype: 'datefield',
				name: 'endDate',
				fieldLabel: 'End',
				padding: '0 0 0 10',
				allowBlank: false
			}]
		},
			/* {
				xtype: 'fieldset',
				title: 'Details',
				collapsible: true,
				defaults: {
					labelWidth: 90,
					anchor: '100%',
					layout: 'hbox'
				},
				items: [{
					xtype: 'fieldcontainer',
					fieldLabel: 'Phone',
					combineErrors: true,
					msgTarget: 'under',
					defaults: {
						hideLabel: true,
						enforceMaxLength: true,
						maskRe: /[0-9.]/
					},
					items: [
						{ xtype: 'displayfield', value: '(', margin: '0 2 0 0' },
						{ xtype: 'textfield', fieldLabel: 'Phone 1', name: 'phone-1', width: 45, allowBlank: false, maxLength: 3 },
						{ xtype: 'displayfield', value: ')', margin: '0 5 0 2' },
						{ xtype: 'textfield', fieldLabel: 'Phone 2', name: 'phone-2', width: 45, allowBlank: false, margin: '0 5 0 0', maxLength: 3 },
						{ xtype: 'displayfield', value: '-' },
						{ xtype: 'textfield', fieldLabel: 'Phone 3', name: 'phone-3', width: 60, allowBlank: false, margin: '0 0 0 5', maxLength: 4 }
					]
				}, {
					xtype: 'fieldcontainer',
					fieldLabel: 'Time worked',
					combineErrors: false,
					defaults: {
						hideLabel: true,
						margin: '0 5 0 0'
					},
					items: [{
						name: 'hours',
						xtype: 'numberfield',
						minValue: 0,
						width: 95,
						allowBlank: false
					}, {
						xtype: 'displayfield',
						value: 'hours'
					}, {
						name: 'minutes',
						xtype: 'numberfield',
						minValue: 0,
						width: 95,
						allowBlank: false
					}, {
						xtype: 'displayfield',
						value: 'mins'
					}]
				}, {
					xtype: 'fieldcontainer',
					combineErrors: true,
					msgTarget: 'side',
					fieldLabel: 'Full Name',
					defaults: {
						hideLabel: true,
						margin: '0 5 0 0'
					},
					items: [{
						// the width of this field in the HBox layout is set directly
						// the other 2 items are given flex: 1, so will share the rest of the space
						width: 75,
						xtype: 'combo',
						queryMode: 'local',
						value: 'mrs',
						triggerAction: 'all',
						forceSelection: true,
						editable: false,
						fieldLabel: 'Title',
						name: 'title',
						displayField: 'name',
						valueField: 'value',
						store: {
							fields: ['name', 'value'],
							data: [
								{ name: 'Mr', value: 'mr' },
								{ name: 'Mrs', value: 'mrs' },
								{ name: 'Miss', value: 'miss' }
							]
						}
					}, {
						xtype: 'textfield',
						flex: 1,
						name: 'firstName',
						fieldLabel: 'First',
						allowBlank: false
					}, {
						xtype: 'textfield',
						flex: 1,
						name: 'lastName',
						fieldLabel: 'Last',
						allowBlank: false
					}]
				}]
			}*/
		]
	}]
});
