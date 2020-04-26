Ext.define("TopTenExtJsGridFeaturesClassic.view.main.header.HeaderView", {
  extend: 'Ext.toolbar.Toolbar',
  height: 50,
  xtype: 'headerview',
  cls: 'headerview',
  // defaults: {
  //   ui:'toolbutton-toolbar',
  //   handler:'onToolButtonClicked'
  // },
  items: [
    {
      xtype: 'button',
      ui: 'toolbutton-toolbar',
      reference: 'navtoggle',
      //handler: 'onHeaderViewNavToggle',
      iconCls: 'fad fa-bars'
    },
    {
      xtype: 'component',
      bind: { html: '{heading}' },
    },
    '->',
    '->',
    { name: 'calendar', ui: 'toolbutton-toolbar', iconCls: 'fad fa-envelope-open-text', tooltip: 'calendar' },
    { name: 'bolt', ui: 'toolbutton-toolbar', iconCls: 'fad fa-bell', tooltip: 'bolt' },
    {
      name: 'disconnect', iconCls: 'fad fa-power-off', tooltip: 'Disconnect',
      ui: 'toolbutton-toolbar',
      handler: function () {
        localStorage.setItem('LoggedIn', false);
        location.reload();
      }
    },
    // {
    //   reference: 'detailtoggle',
    //   iconCls: 'fad fa-arrow-left',
    //   tooltip: 'show and hide detail view',
    //   ui: 'headerviewbutton-toolbar',
    //   handler: 'onHeaderViewDetailToggle'
    // }
  ]
});
