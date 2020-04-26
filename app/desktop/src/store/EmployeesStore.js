Ext.define("CreateExtJsApp.store.EmployeesStore", {
    extend: "Ext.data.Store",
    storeId: "EmployeesStore",
    model: "CreateExtJsApp.model.EmployeeModel",
    data: Data.data,
    proxy: {
        type: "memory",
        reader: {
            type: "json",
        },
    },
    autoLoad: true
});
