Ext.define('Client.store.Product', {

    extend: 'Ext.data.Store',
    alias: 'store.product',
    model: 'Client.model.Product',

    autoLoad: true,
    pageSize: 0,
    proxy: {
        type: 'ajax',
        url: '/api/product'
    }
});
