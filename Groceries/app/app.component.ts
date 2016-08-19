import {Component,NgZone} from "@angular/core";
import platform = require("platform");
import screen = platform.screen;

import application = require("application");


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




@Component({
    selector: "my-app",
    templateUrl: "app.component.html",
})
export class AppComponent {
    public screenWidth: number = 399;
    public screenHeight: number = 399;
    public orientationIsPort: boolean;
    public counter: number = 399;

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
constructor(public _ngZone:NgZone) {
	// application.on(application.orientationChangedEvent, () =>  this._ngZone.run(() => this.screenHeight = 99999));
	
    application.on(application.orientationChangedEvent, () =>  this._ngZone.run(() => {


  setTimeout(() => {
                    
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
    console.log("CCCccccccccdddffggcccc");


                },1000  );


    
}));

 
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


    ngAfterViewChecked(){


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
        console.log("orientation: " + this.orientationIsPort);


 

    // console.log("orientation when click: " + this.orientationIsPort);


    // console.log("change in the orientation");
    console.log("Cdcccddcddfgfdcc");


    }


    //    pageLoaded (args) {
    //   application.on(application.orientationChangedEvent, this.setOrientation( ));
    // };

    //  pageUnloaded  (args) {
    //   application.off(application.orientationChangedEvent, this.setOrientation( ));
    // }

    setOrientation() {
        // Will console out the new Orientation

     }

 onResize( ){
    console.log("CCCccccfsdssdfsffggfdgcccccddccc");

 }

}
