Ext.define('Client.view.main.PopupFormController', {

    extend: 'Ext.app.ViewController',
    alias: 'controller.popupform',


    cancelUpdate: function () {
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        record.reject();
    },


    deleteRow: function () {
        Product = Client.model.Product;
        var view = this.getView(),
            record = view.getRecord();

        view.destroy();
        product = Product.load(record.getId(), {
            success: function(user) {
                user.erase();
            }
        });
        record.drop();
    },

    submitUpdate: function(me) {

        Product = Client.model.Product;
        var view = this.getView(),
            record = view.getRecord();

        product = Product.load(record.getId(), {
            success: function(user) {
                user.set(record.data);
                user.save();
            }
        });

        view.destroy();
        record.commit();
    },

});



