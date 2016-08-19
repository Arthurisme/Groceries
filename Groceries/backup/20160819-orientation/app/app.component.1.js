"use strict";
var core_1 = require("@angular/core");
var platform = require("platform");
var screen = platform.screen;
var application = require("application");
var AppComponent = (function () {
    //inside your component
    function AppComponent(_ngZone) {
        var _this = this;
        this._ngZone = _ngZone;
        //for test:
        this.screenWidth = 399;
        this.screenHeight = 399;
        this.counter = 399;
        this.mymessage = 999;
        application.on(application.orientationChangedEvent, function () { return _this._ngZone.run(function () { return _this.screenHeight = 99999; }); });
    }
    Object.defineProperty(AppComponent.prototype, "message", {
        get: function () {
            if (this.counter > 0) {
                // console.log("log: "+ this.counter + " taps left");
                return this.counter + " taps left ";
            }
            else {
                return "Hoorraaay! \nYou are ready to start building!";
            }
        },
        enumerable: true,
        configurable: true
    });
    AppComponent.prototype.onTap = function () {
        this.counter--;
        // console.log(screen.mainScreen.widthPixels);
        this.screenWidth = screen.mainScreen.widthPixels;
        this.screenHeight = screen.mainScreen.heightPixels;
        console.log("Screen width: " + this.screenWidth);
        console.log("Screen height: " + this.screenHeight);
        // console.log("change in the orientation");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            templateUrl: "app.component.html",
        }), 
        __metadata('design:paramtypes', [core_1.NgZone])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.1.js.map