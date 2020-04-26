Ext.define("CreateExtJsApp.view.grid.DragAndDropView", {
  extend: "Ext.container.Container",
  xtype: 'DragAndDropView',
  controller: 'DragAndDropViewController',
  requires: [
    'Ext.grid.Panel',
    'Ext.layout.container.VBox',
    'Ext.dd.DropTarget',
    'Ext.selection.RowModel'
  ],
  items: [
    {
      xtype: 'grid',
      reference: 'grid',
      title: 'Grid',
      height: 400,
      enableDragDrop: true,
      viewConfig: {
        plugins: {
          gridviewdragdrop: {
            ddGroup: 'grid-to-form',
            enableDrop: false
          }
        }
      },
      flex: 1,
      store: { data: Data.getData() },
      columns: [
        { text: 'employeeNo', dataIndex: 'employeeNo', flex: 1 },
        { text: 'forename', dataIndex: 'forename', flex: 1 },
        { text: 'surname', dataIndex: 'surname', flex: 1 }
      ]
    },
    {
      xtype: 'form',
      reference: 'form',
      title: 'Form',
      bodyPadding: 10,
      labelWidth: 100,
      defaultType: 'textfield',
      items: [
        { fieldLabel: 'employeeNo', name: 'employeeNo', width: 250 },
        { fieldLabel: 'forename', name: 'forename', width: 250 },
        { fieldLabel: 'surname', name: 'surname', width: 250 }
      ]
    }
  ]
});
