Ext.define("CreateExtJsApp.view.grid.ColumnWidgetsView", {
    extend: "Ext.grid.Panel",
    xtype: 'ColumnWidgetsView',
    requires: [
        "Ext.grid.column.Action",
        "Ext.ProgressBarWidget",
        "Ext.slider.Widget",
        "Ext.sparkline.*",
    ],
    xtype: "widget-grid",
    cyId: 'widget-grid',
    id: 'widgetGrid',
    //store: "WidgetsStore",
    store: Ext.create("CreateExtJsApp.store.WidgetsStore", {}),
    //collapsible: true,
    viewConfig: {
        stripeRows: true,
        enableTextSelection: false,
        markDirty: false,
    },
    trackMouseOver: false,
    disableSelection: true,

    initComponent: function () {
        var me = this;

        me.columns = [
            {
                text: "Slider",
                xtype: "widgetcolumn",
                width: 120,
                dataIndex: "progress",
                widget: {
                    xtype: "sliderwidget",
                    inputAttrTpl: 'data-cy=sliderwidget',
                    minValue: 0,
                    maxValue: 1,
                    decimalPrecision: 2,
                    listeners: {
                        change: function (slider, value) {
                            // If the widget has been decorated by the WidgetColumn with context-returning methods
                            // then extract data and update its context record.
                            if (slider.getWidgetRecord) {
                                var rec = slider.getWidgetRecord();
                                if (rec) {
                                    rec.set("progress", value);
                                }
                            }
                        },
                    },
                },
            },
            {
                text: "Button",
                width: 105,
                xtype: "widgetcolumn",
                dataIndex: "progress",
                widget: {
                    width: 90,
                    textAlign: "left",
                    xtype: "button",
                    inputAttrTpl: 'data-cy=buttonWidget',
                    shadow: true,
                    iconCls: "widget-grid-user",
                    handler: function (btn) {
                        var rec = btn.getWidgetRecord();
                        Ext.Msg.alert(
                            "Button clicked",
                            "Hey! " + rec.get("name") + '  ' + rec.get("progress")
                        );
                    },
                },
            },
            {
                text: "Progress",
                xtype: "widgetcolumn",
                flex: 1,
                dataIndex: "progress",
                widget: {
                    xtype: "progressbarwidget",
                    inputAttrTpl: 'data-cy=progressbarwidget',

                    textTpl: ['{percent:number("15")}% done'],
                },
            },
            {
                text: "Run Mode",
                flex: 1.2,
                xtype: "widgetcolumn",
                widget: {
                    xtype: "combo",
                    store: ["Local", "Remote"],
                },
            },
            //{
            //    text: 'Line',
            //    width: 100,
            //    dataIndex: 'sequence1',
            //    xtype: 'widgetcolumn',
            //    widget: {
            //        xtype: 'sparklineline',
            //        tipTpl: 'Value: {y:number("0.00")}'
            //    }
            //},
            {
                text: "Bar",
                flex: 1,
                dataIndex: "sequence2",
                xtype: "widgetcolumn",
                widget: {
                    xtype: "sparklinebar",
                },
            },
            // {
            //     text: "Discrete",
            //     width: 100,
            //     dataIndex: "sequence3",
            //     xtype: "widgetcolumn",
            //     widget: {
            //         xtype: "sparklinediscrete",
            //     },
            // },
            {
                text: "Bullet",
                flex: 1,
                dataIndex: "sequence4",
                xtype: "widgetcolumn",
                widget: {
                    xtype: "sparklinebullet",
                },
            },
            {
                text: "Pie",
                flex: 0.5,
                dataIndex: "sequence5",
                xtype: "widgetcolumn",
                widget: {
                    xtype: "sparklinepie",
                },
            },
            {
                text: "Box",
                flex: 1,
                dataIndex: "sequence6",
                xtype: "widgetcolumn",
                widget: {
                    xtype: "sparklinebox",
                },
            },
            {
                text: "TriState",
                flex: 1,
                dataIndex: "sequence7",
                xtype: "widgetcolumn",
                widget: {
                    xtype: "sparklinetristate",
                },
            },
        ];

        //me.tbar = [];
        //for (var i = 0; i < me.columns.length; i++) {
        //    me.tbar.push({
        //        text: me.columns[i].text,
        //        enableToggle: true,
        //        pressed: true,
        //        scope: me,
        //        toggleHandler: me.onButtonToggle
        //    });
        //}

        me.callParent();
        me.on({
            columnshow: me.onColumnToggle,
            columnhide: me.onColumnToggle,
        });
    },

    onButtonToggle: function (btn, pressed) {
        if (this.processing) {
            return;
        }

        this.processing = true;
        var header = this.headerCt.child("[text=" + btn.text + "]");
        header.setVisible(pressed);
        this.processing = false;
    },

    onColumnToggle: function (headerCt, header) {
        if (this.processing) {
            return;
        }
        this.processing = true;
        var btn = this.down("toolbar").child("[text=" + header.text + "]");
        btn.setPressed(header.isVisible());
        this.processing = false;
    },
});
