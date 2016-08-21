import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from "@angular/core";
// import {User} from "../../shared/user/user";
// import {UserService} from "../../shared/user/user.service"
import {Grocery} from "../../shared/grocery/grocery";
import {GroceryListService} from "../../shared/grocery/grocery-list.service";
import {TextField} from "ui/text-field";

@Component({
  selector: "list",
  templateUrl: "pages/list/list.html",
  styleUrls: ["pages/list/list-common.css", "pages/list/list.css"],
  providers:[GroceryListService]
})



export class ListPage implements OnInit  {

  groceryList: Array<Grocery> = [];
  grocery: string = "";
  isLoading = false;
  listLoaded = false;
  @ViewChild("groceryTextField") groceryTextField: ElementRef;


  constructor(private _groceryListService:GroceryListService){}

  ngOnInit() {
    this.isLoading = true;
    this._groceryListService.load()
    .subscribe(loadedGroceries =>{
      loadedGroceries.forEach(groceryObject =>{
        this.groceryList.unshift(groceryObject);
      });
    this.isLoading = false;
    this.listLoaded = true;
    });

    // this.groceryList.push({ name: "Apples" });
    // this.groceryList.push({ name: "Bananas" });
    // this.groceryList.push({ name: "Oranges", name2: "good fruit" });
  }



  add(){

    if(this.grocery.trim() === ""){
      alert("Enter a grocery item");
      return;
    }

    //Dismiss the key board
    let textField = <TextField>this.groceryTextField.nativeElement;
    textField.dismissSoftInput();


    this._groceryListService.add(this.grocery)
    .subscribe(groceryObject =>{ 
      this.groceryList.unshift(groceryObject);
      this.grocery ="";
    },
    () =>{
      alert({
        message: "An error occurred whild adding an item to your list.",
        okButtonText: "OK"
      });
      this.grocery = "";
    }
    
    );    

  }

  

  onLoaded() {
    console.log("onloaded work in html.")
  }
}