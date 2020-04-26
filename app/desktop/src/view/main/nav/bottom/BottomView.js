Ext.define("CreateExtJsApp.view.main.nav.bottom.BottomView", {
  extend: 'Ext.Toolbar',
  xtype: 'bottomview',
  cls: 'bottomview',
  defaults: {
    ui: 'toolbutton-toolbar',
    handler: 'onToolButtonClicked'
  },
  items: [
    { name: 'calendar', iconCls: 'fad fa-calendar', tooltip: 'calendar' },
    { name: 'bolt', iconCls: 'fad fa-bolt', tooltip: 'bolt' },
    { name: 'search', iconCls: 'fad fa-search', tooltip: 'search' },
  ]
});