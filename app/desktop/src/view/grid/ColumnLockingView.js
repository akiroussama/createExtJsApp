Ext.define("CreateExtJsApp.view.grid.ColumnLockingView", {
  extend: "Ext.grid.Panel",
  xtype: 'ColumnLockingView',
  cyId: "ColumnLockingViewId",
  store: { data: Data.getData(50) },
  columns: [
    { text: 'employeeNo', dataIndex: 'employeeNo', locked: true, width: 80 },
    { text: 'forename', dataIndex: 'forename', locked: true, width: 100 },
    { text: 'surname', dataIndex: 'surname', locked: true, width: 120 },
    { text: 'rating', dataIndex: 'rating', width: 60 },
    { text: 'salary', dataIndex: 'salary', width: 100 },
    //{ text: 'name', dataIndex: 'name', flex: 1 },
    { text: 'email', dataIndex: 'email', width: 250 },
    { text: 'department', dataIndex: 'department', width: 150 },
    { text: 'dob', dataIndex: 'dob', width: 120, xtype: 'datecolumn', format: 'd/m/Y' },
    { text: 'joinDate', dataIndex: 'joinDate', width: 120, xtype: 'datecolumn', format: 'd/m/Y' },
    { text: 'noticePeriod', dataIndex: 'noticePeriod', width: 120 },
    { text: 'sickDays', dataIndex: 'sickDays', width: 80 },
    { text: 'holidayDays', dataIndex: 'holidayDays', width: 100 },
    { text: 'holidayAllowance', dataIndex: 'holidayAllowance', width: 120 },
  ]
});
