Ext.define("CreateExtJsApp.view.grid.ColumnLockingView", {
  extend: "Ext.grid.Panel",
  xtype: 'ColumnLockingView',
  store: { data: Data.getData(50), flex: 1 },
  columns: [
    { text: 'employeeNo', dataIndex: 'employeeNo', locked: true, width: 80 },
    { text: 'forename', dataIndex: 'forename', locked: true, width: 80 },
    { text: 'surname', dataIndex: 'surname', locked: true, width: 80 },
    { text: 'rating', dataIndex: 'rating', width: 60 },
    { text: 'salary', dataIndex: 'salary', width: 60 },
    //{ text: 'name', dataIndex: 'name', flex: 1 },
    { text: 'email', dataIndex: 'email', flex: 2 },
    { text: 'department', dataIndex: 'department', flex: 1.2 },
    { text: 'dob', dataIndex: 'dob', flex: 1.3 },
    { text: 'joinDate', dataIndex: 'joinDate', flex: 1.3 },
    { text: 'noticePeriod', dataIndex: 'noticePeriod', flex: 1 },
    { text: 'sickDays', dataIndex: 'sickDays', width: 60 },
    { text: 'holidayDays', dataIndex: 'holidayDays', width: 60 },
    { text: 'holidayAllowance', dataIndex: 'holidayAllowance', width: 60 },
  ]
});
