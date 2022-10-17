import { Component } from "@angular/core";

@Component({
    selector: "app-calculator",
    templateUrl: "./calculator.component.html",
})
class CalculatorComponent {
    public valueA: number = 0
    public valueB: number = 0
    public result: number = 0

    add(): void {
        this.result = this.valueA + this.valueB
    }
}

export default CalculatorComponent
