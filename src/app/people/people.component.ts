import { Component } from "@angular/core";

@Component({
    selector: "app-people",
    // templateUrl: "./people.component.html",
    template:`<div>
        <h4>Name: {{ name }}</h4>
        <app-person></app-person>
        <app-person></app-person>
    </div>`
})
class PeopleComponent {
    name =  "Edgar"
}

export default PeopleComponent