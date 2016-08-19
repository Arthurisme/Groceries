import {Component,NgZone} from "@angular/core";
var platform = require("platform");
var screen = platform.screen;

import application = require("application");

 

@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    //for test:
    public screenWidth: number = 399;
    public screenHeight: number = 399;
    public orientationIsPort: boolean;
    public counter: number = 399;
    public mymessage: number = 999;

 




//inside your component
constructor(private _ngZone:NgZone) {
	application.on(application.orientationChangedEvent, () =>  this._ngZone.run(() => this.screenHeight = 99999));
 
}

 

    public get message(): string {
        if (this.counter > 0) {
            // console.log("log: "+ this.counter + " taps left");
            return this.counter + " taps left ";
        } else {
            return "Hoorraaay! \nYou are ready to start building!";
        }




    }

    public onTap() {
        this.counter--;
        // console.log(screen.mainScreen.widthPixels);

    this.screenWidth = screen.mainScreen.widthPixels;
    this.screenHeight = screen.mainScreen.heightPixels;
    console.log("Screen width: " + this.screenWidth);
    console.log("Screen height: " + this.screenHeight);
 
    // console.log("change in the orientation");
   
    }


}
