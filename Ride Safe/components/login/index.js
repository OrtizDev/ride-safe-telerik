'use strict';

app.login = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});
app.localization.registerView('login');

// START_CUSTOM_CODE_login
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_login
(function(parent) {
    var
    /// start global model properties

        processImage = function(img) {

            if (!img) {
                var empty1x1png = 'iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVQI12NgYAAAAAMAASDVlMcAAAAASUVORK5CYII=';
                img = 'data:image/png;base64,' + empty1x1png;
            }

            return img;
        },
        /// end global model properties

        loginModel = kendo.observable({
            submit: function () {
                var email = $("#email").val();
                var password = $("#password").val();

                if (email == '') {
                    alert("Por favor, ingresa tu correo");
                } else {
                    var valid = /^[_a-z0-9-]+(\.[_a-z0-9-]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,3})$/;
                    var validcor = new RegExp(valid);
                    var matchArray = email.match(validcor);
                    if (matchArray == null) {
                        alert("Por favor, ingresa un correo valido");
                    }
                    else {
                        if (password == '') {
                            alert("Por favor, ingresa tu contraseña");
                        } else {
                            var parametros = {
                                "email": email,
                                "password": password
                            };

                            $.ajax({
                                type: "POST",
                                url: "http://startbluesoft.com/rideSafeApp/v1/index.php/userlogin",
                                data: parametros,
                                dataType: "json",
                                success: function (data) {
                                    if (data.error) {
                                        alert(data.message);
                                    } else if (!data.error) {
                                        alert("Logueado");
                                    }
                                }
                            });
                        }
                    }
                }

            },
            /// start add model functions
            /// end add model functions

            cancel: function() {}
        });

    /// start form functions
    /// end form functions

    parent.set('onShow', function _onShow() {
        var that = parent;
        that.set('addFormData', {
            password: '',
            email: '',
            /// start add form data init
            /// end add form data init
        });
        /// start add form show
        /// end add form show
    });
    parent.set('loginModel', loginModel);
})(app.login);

// START_CUSTOM_CODE_loginModel
// Add custom code here. For more information about custom code, see http://docs.telerik.com/platform/screenbuilder/troubleshooting/how-to-keep-custom-code-changes

// END_CUSTOM_CODE_loginModel