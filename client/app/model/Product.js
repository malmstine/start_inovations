Ext.define('Client.model.Product', {

    alias: 'model.product',
    extend: 'Ext.data.Model',
    fields: [{ name: 'id', type: 'int' }, 'name', 'desc', 'cost', 'rating', 'count'],
    proxy: {
        type: 'rest',
        pageSize: 0,
        reader: {
        type: 'json'
        },
        url: '/api/product',
    }
});
