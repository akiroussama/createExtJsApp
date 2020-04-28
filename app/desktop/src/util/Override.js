Ext.define('CreateExtJsApp.util.Component', {
    override: 'Ext.Component',

    onBoxReady: function (view, width, height) {
        var me = this,
            el = me.getEl();
        me.callParent(arguments);

        const cyId = this.haveCypressId();
        if (el && el.dom && !Ext.isEmpty(cyId) && Ext.isEmpty(this.inputAttrTpl)) {
            const attId = me.cyAtt || 'data-cy';
            console.log(' data-cy set for id=' + cyId);
            el.dom.setAttribute(attId, cyId)
        }
    },
    haveCypressId: function () {
        return !Ext.isEmpty(this.cyId) || !Ext.isEmpty(this.itemId) ? (this.cyId || this.itemId) : "";
    },

});

Ext.define('Override.list.AbstractTreeItem', {
    override: 'Ext.list.AbstractTreeItem',
    updateNode: function (node) {
        if (node) {
            // eslint-disable-next-line vars-on-top
            var me = this,
                map = me.itemMap,
                childNodes, owner, len, i, item, child;
            me.element.dom.setAttribute('data-recordId', node.internalId);
            me.element.dom.setAttribute('data-cy', node.get('xtype') || node.get('id') || node.internalId);
            if (!map) {
                childNodes = node.childNodes;
                owner = me.getOwner();
                me.itemMap = map = {};
                for (i = 0, len = childNodes.length; i < len; ++i) {
                    child = childNodes[i];
                    if (child.data.visible) {
                        item = owner.createItem(child, me);
                        map[child.internalId] = item;
                        me.insertItem(item, null);
                    }
                }
            }
            me.setExpanded(node.isExpanded());
            me.doNodeUpdate(node);
        }
    }
});