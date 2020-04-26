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
      iconCls: 'fa fa-bars'
    },
    {
      xtype: 'component',
      bind: { html: '{heading}' },
    },
    '->',
    '->',
    // {name:'calendar', iconCls:'x-fa fa-calendar', tooltip:'calendar'},
    // {name:'bolt',     iconCls:'x-fa fa-bolt',     tooltip:'bolt'},
    {
      name: 'disconnect', iconCls: 'fa fa-calendar', tooltip: 'Disconnect',
      handler: function () {
        localStorage.setItem('LoggedIn', false);
        location.reload();
      }
    },
    // {
    //   reference: 'detailtoggle',
    //   iconCls: 'fa fa-arrow-left',
    //   tooltip: 'show and hide detail view',
    //   ui: 'headerviewbutton-toolbar',
    //   handler: 'onHeaderViewDetailToggle'
    // }
  ]
});
