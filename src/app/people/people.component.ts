import { Component, Input } from "@angular/core";

@Component({
    selector: "app-people",
    templateUrl: "./people.component.html",
})
class PeopleComponent {
    disabled = false

    disabledBtn(): void {
        this.disabled = true
        console.log(this.disabled)
    }
}

export default PeopleComponent