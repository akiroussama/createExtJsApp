Ext.define("TopTenExtJsGridFeaturesClassic.view.home.HomeView", {
	xtype: 'homeview',
	cls: 'homeview',
	controller: { type: 'homeviewcontroller' },
	viewModel: { type: 'homeviewmodel' },
	requires: [],
	extend: 'Ext.Container',
	items: [{
		xtype: 'component',
		html: '<div class="homePageCls">Virtual SenchaCon 2020<div>',
		
	}]

});