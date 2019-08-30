/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'Client.Application',

    name: 'Client',

    requires: [
        // This will automatically load all classes in the Client namespace
        // so that application classes do not need to require each other.
        'Client.*'
    ],

    // The name of the initial view to create.
    mainView: 'Client.view.main.Main'
});
