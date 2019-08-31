Ext.define('Client.view.main.PopupForm', {
    extend: 'Ext.form.Panel',
    xtype: 'popupform',
    controller: 'popupform',

    title: 'Edit_record',

    floating: true,
    centered: true,
    modal: true,

    items: [{
        xtype: 'textfield',
        name: 'name',
        label: 'Last Name',
        bind: '{employee.name}'

    }, {
        xtype: 'textfield',
        name: 'desc',
        label: 'Description',
        bind: '{employee.desc}'
    }, {
        xtype: 'numberfield',
        name: 'cost',
        label: 'Cost',
        maxValue: 10000,
        decimals: 2,
        minValue: 0,
        bind: '{employee.cost}'
    }, {
        xtype: 'numberfield',
        name: 'rating',
        label: 'Rating',
        maxValue: 99,
        decimals: 0,
        minValue: 0,
        bind: '{employee.rating}'
    }, {
        xtype: 'numberfield',
        name: 'count',
        label: 'Count',
        maxValue: 2000,
        decimals: 0,
        minValue: 0,
        bind: '{employee.count}'
    }, {
        xtype: 'toolbar',
        docked: 'bottom',
        items: ['->', {
            xtype: 'button',
            text: 'Submit',
            iconCls: 'x-fa fa-check',
            handler: 'submitUpdate'
        }, {
            xtype: 'button',
            text: 'Cancel',
            iconCls: 'x-fa fa-close',
            handler: 'cancelUpdate'
        }, {
            xtype: 'button',
            text: 'Delete',
            iconCls: 'x-fa fa-close',
            handler: 'deleteRow'

        }]
    }]
});
