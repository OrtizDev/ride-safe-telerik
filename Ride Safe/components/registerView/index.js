'use strict';

app.registerView = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('registerView');

// START_CUSTOM_CODE_registerView
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registerView
(function(parent) {
    var
    /// start global model properties
    /// end global model properties
        registerViewModel = kendo.observable({
        submit: function() {},
        /// start add model functions
        /// end add model functions

    });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            contrasenaValidation: '',
            contrasena: '',
            correo: '',
            otherUse: '',
            sporadicUse: '',
            stuntUse: '',
            enduroUse: '',
            circuitsUse: '',
            workUse: '',
            touringUse: '',
            atvUse: '',
            cityUse: '',
            motoUsage: '¿Qué uso le das a tu motocicleta?',
            placas: '',
            motoModel: '',
            motoYear: '',
            motoBrand: '',
            numEmer: '',
            celular: '',
            sexo: '',
            fechaNac: '',
            nombre: '',
            registerTitle: 'REGISTRO',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('registerViewModel', registerViewModel);
})(app.registerView);

// START_CUSTOM_CODE_registerViewModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_registerViewModel