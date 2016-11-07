"use strict";
var LoginService = (function () {
    function LoginService() {
        this.loggedIn = false;
    }
    LoginService.prototype.login = function (user, password) {
        if (user && password) {
            this.loggedIn = true;
        }
        return this.loggedIn;
    };
    return LoginService;
}());
exports.LoginService = LoginService;
//# sourceMappingURL=login.service.js.map