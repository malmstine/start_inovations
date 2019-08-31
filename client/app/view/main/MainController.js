Ext.define('Client.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.maincontroller',

    onPopupForm: function (view, index, item, record) {
        var popupWindow = new Client.view.main.PopupForm({
            id: 'rec_update',
            width:  400,
            height: 400,
            centered: true,
            modal: true,
            record: record,
            index: index,
            viewModel : {
                data: {
                    employee: record
                }
            }
        });
        Ext.Viewport.add(popupWindow);
        popupWindow.show();
    },

    addHand: function(btn) {
        var grid = btn.up('grid')
        var newCar = Ext.create('Client.model.Product', {name: 'ANo Name', cost: 0.0, desc: 'No Description', rating: 0, count: 0});
        store = grid.getStore();
        store.insert(0, newCar);
        store.sync();
    }

});
