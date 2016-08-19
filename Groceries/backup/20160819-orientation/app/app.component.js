"use strict";
var core_1 = require("@angular/core");
var platform = require("platform");
var screen = platform.screen;
var application = require("application");
//  application.on(application.orientationChangedEvent, () =>  this._ngZone.run(() => this.errorMessage = '123'));
// require( "nativescript-orientation" );
// //    application.on(application.orientationChangedEvent, this.setOrientation() );
// application.on(application.orientationChangedEvent, function (args) {
//     this.screenWidth = screen.mainScreen.widthPixels;
//     this.screenHeight = screen.mainScreen.heightPixels;
//     console.log("Screen width: " + this.screenWidth);
//     console.log("Screen height: " + this.screenHeight);
//     if (this.screenWidth > this.screenHeight) {
//         this.orientationIsPort = false;
//     }
//     if (this.screenWidth < this.screenHeight) {
//         this.orientationIsPort = true;
//     }
//     console.log("orientation: " + this.orientationIsPort);
//     console.log("change in the orientation");
//     console.log("CCCcccccjccccccc");
// });
var AppComponent = (function () {
    // application.on(application.orientationChangedEvent, function (args) {
    //     this.screenWidth = screen.mainScreen.widthPixels;
    //     this.screenHeight = screen.mainScreen.heightPixels;
    //     console.log("Screen width: " + this.screenWidth);
    //     console.log("Screen height: " + this.screenHeight);
    //     if (this.screenWidth > this.screenHeight) {
    //         this.orientationIsPort = false;
    //     }
    //     if (this.screenWidth < this.screenHeight) {
    //         this.orientationIsPort = true;
    //     }
    //     console.log("orientation: " + this.orientationIsPort);
    //     console.log("change in the orientation");
    //     console.log("CCCcccccccccccc");
    // });
    //inside your component
    function AppComponent(_ngZone) {
        // application.on(application.orientationChangedEvent, () =>  this._ngZone.run(() => this.screenHeight = 99999));
        var _this = this;
        this._ngZone = _ngZone;
        this.screenWidth = 399;
        this.screenHeight = 399;
        this.counter = 399;
        application.on(application.orientationChangedEvent, function () { return _this._ngZone.run(function () {
            setTimeout(function () {
                _this.screenWidth = screen.mainScreen.widthPixels;
                _this.screenHeight = screen.mainScreen.heightPixels;
                console.log("Screen width: " + _this.screenWidth);
                console.log("Screen height: " + _this.screenHeight);
                if (_this.screenWidth > _this.screenHeight) {
                    _this.orientationIsPort = false;
                }
                if (_this.screenWidth < _this.screenHeight) {
                    _this.orientationIsPort = true;
                }
                console.log("orientation: " + _this.orientationIsPort);
                console.log("change in the orientation");
                console.log("CCCccccccccdddffggcccc");
            }, 1000);
        }); });
        this.screenWidth = screen.mainScreen.widthPixels;
        this.screenHeight = screen.mainScreen.heightPixels;
        console.log("Screen width: " + this.screenWidth);
        console.log("Screen height: " + this.screenHeight);
        if (this.screenWidth > this.screenHeight) {
            this.orientationIsPort = false;
        }
        if (this.screenWidth < this.screenHeight) {
            this.orientationIsPort = true;
        }
        console.log("orientation: " + this.orientationIsPort);
        console.log("change in the orientation");
        console.log("CCCcccccccccccc");
    }
    AppComponent.prototype.ngAfterViewChecked = function () {
    };
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
        console.log("orientation: " + this.orientationIsPort);
        // console.log("orientation when click: " + this.orientationIsPort);
        // console.log("change in the orientation");
        console.log("Cdcccddcddfgfdcc");
    };
    //    pageLoaded (args) {
    //   application.on(application.orientationChangedEvent, this.setOrientation( ));
    // };
    //  pageUnloaded  (args) {
    //   application.off(application.orientationChangedEvent, this.setOrientation( ));
    // }
    AppComponent.prototype.setOrientation = function () {
        // Will console out the new Orientation
    };
    AppComponent.prototype.onResize = function () {
        console.log("CCCccccfsdssdfsffggfdgcccccddccc");
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
//# sourceMappingURL=app.component.js.map