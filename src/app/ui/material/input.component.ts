import { Component } from "@angular/core";
import { FormControl } from "@angular/forms"

@Component({
    selector: "app-input-component",
    templateUrl: "./input.component.html",
    styleUrls: ["./input.component.css"]
})
class InputComponent{
    myControl = new FormControl();
    options: string[] = ['One', 'Two', "Three"]
}

export default InputComponent