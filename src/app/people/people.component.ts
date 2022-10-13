import { Component, Input } from "@angular/core";

@Component({
    selector: "app-people",
    templateUrl: "./people.component.html",
})
class PeopleComponent {
    isLog = false
    value = "Angular"
    name =  "Edgar";

    logIn(): void {
        console.log("value", this.isLog)
        this.isLog = !this.isLog
    }
}

export default PeopleComponent