Ext.define("TopTenExtJsGridFeaturesClassic.Application", {
  extend: 'Ext.app.Application',
  name: 'TopTenExtJsGridFeaturesClassic',
  requires: ['TopTenExtJsGridFeaturesClassic.*'],
  defaultToken: 'homeview',

  launch: function () {
    Data.makeData(10)
    Ext.ariaWarn = Ext.emptyFn
    Ext.getBody().removeCls('launching')
    var elem = document.getElementById("splash")
    elem.parentNode.removeChild(elem)
    var whichView = 'mainview';
    var loggedIn = localStorage.getItem("LoggedIn");
    if (loggedIn != 'true') { whichView = 'loginview' }
    Ext.create({ xtype: whichView, plugins: 'viewport' })
  },

  onAppUpdate: function () {
    Ext.Msg.confirm('Application Update', 'This application has an update, reload?',
      function (choice) {
        if (choice === 'yes') {
          window.location.reload();
        }
      }
    );
  }
});
