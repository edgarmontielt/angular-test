import { Component } from "@angular/core";

type Result = {
    message: string,
    success: boolean
};

@Component({
    selector: "app-people",
    templateUrl: "./people.component.html",
})
class PeopleComponent {
    disabled: boolean = false;
    private result: Result = {
        message: "No se ha registrado ninguna persona",
        success: false
    };
    title: string = "Ingeniero en software";
    imgURL: string = "https://images.pexels.com/photos/13715795/pexels-photo-13715795.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load";

    disabledBtn(): void {
        this.result.message = "Persona agregada";
        this.result.success = true;
        this.disabled = true;
    }

    getMessage(): string {
        return this.result.message;
    }

    // Event binding
    // titleModify(event: Event): void {
    //     console.log("Modificando title");
    //     this.title = (<HTMLInputElement>event.target).value;
    // }
}

export default PeopleComponent