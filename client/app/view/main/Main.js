Ext.define('Client.view.main.Main', {
    extend: 'Ext.grid.Grid',
    controller: 'maincontroller',

    title: 'Products',

    store: {
        type: 'product',
        autoLoad: true
    },

    listeners: {
        itemtap: 'onPopupForm'
    },

    columns: [
        { text: 'Name', dataIndex: 'name', flex: 1 },
        { text: 'Cost', dataIndex: 'cost', flex: 1 },
        { text: 'Description', dataIndex: 'desc', flex: 1 },
        { text: 'Rating', dataIndex: 'rating', flex: 1 },
        { text: 'Count', dataIndex: 'count', flex: 1 },
    ],

    elType: 'rowmodel',

    titleBar: {
        shadow: false,
        items: [{
            align: 'right',
            xtype: 'button',
            text: 'Add',
            handler: 'addHand'
        }]
    },
});


