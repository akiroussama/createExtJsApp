Ext.define("TopTenExtJsGridFeaturesClassic.store.NavigationTree", {
    extend: "Ext.data.TreeStore",

    storeId: "NavigationTree",
    root: {
        expanded: true,
        children: [
            {
                text: "PowerPoint Slides",
                view: "slides.SlidesView",
                leaf: true,
                iconCls: "fad fa-desktop",
                routeId: "slides",
            },
            {
                text: "Basic Grid",
                view: "grid.BasicGridView",
                leaf: true,
                iconCls: "fad fa-table",
                routeId: "basicGrid",
            },
            {
                text: "Buffered Store",
                view: "grid.ForumThreadView",
                leaf: true,
                iconCls: "fad fa-table",
                routeId: "gridForumThreadView",
            },
            {
                text: "Buffered Rendering",
                view: "grid.BufferedRenderingView",
                leaf: true,
                iconCls: "fad fa-fast-forward",
                routeId: "bufferedRendering",
            },
            {
                text: "New Grid Features",
                view: "grid.GridFeaturesView",
                leaf: true,
                iconCls: "fad fa-table",
                routeId: "gridFeatures",
            },
            {
                text: "Widget Grid",
                view: "grid.WidgetGridView",
                leaf: true,
                iconCls: "fad fa-table",
                routeId: "widgetGrid",
            },
            {
                text: "Salesperson Sales Grid",
                view: "grid.SalespersonSalesView",
                leaf: true,
                iconCls: "fad fa-dollar",
                routeId: "salespersonSales",
            },
            {
                text: "Pivot Salesperson Sales",
                view: "pivot.PivotView",
                leaf: true,
                iconCls: "fad fa-calculator",
                routeId: "pivot",
            },
            {
                text: "Remote Pivot",
                view: "pivot.RemotePivotView",
                leaf: true,
                iconCls: "fad fa-calculator",
                routeId: "remotepivot",
            },
            {
                text: "Chart Integration",
                view: "pivot.ChartIntegrationView",
                leaf: true,
                iconCls: "fad fa-bar-chart",
                routeId: "chartIntegration",
            },
            {
                text: "Country Sales Grid",
                view: "grid.CountrySalesGridView",
                leaf: true,
                iconCls: "fad fa-dollar",
                routeId: "countrySalesGrid",
            },
            {
                text: "Country Sales Pivot",
                view: "pivot.CountrySalesPivotView",
                leaf: true,
                iconCls: "fad fa-calculator",
                routeId: "countrySalesPivot",
            },
            {
                text: "Pivot Appearance",
                view: "pivot.PivotAppearanceView",
                leaf: true,
                iconCls: "fad fa-video-camera",
                routeId: "pivotAppearance",
            },
            {
                text: "Configurator/Exporter",
                view: "pivot.PivotConfiguratorView",
                leaf: true,
                iconCls: "fad fa-pencil-square-o",
                routeId: "pivotConfiguratorView",
            },
        ],
    },
    // fields: [
    //     {
    //         name: 'text'
    //     }
    // ]
});
