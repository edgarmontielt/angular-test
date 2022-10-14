import { Component, Input } from "@angular/core";

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
    title: string = "";

    disabledBtn(): void {
        this.result.message = "Persona agregada";
        this.result.success = true;
        this.disabled = true;
        alert(this.result.message);
    }

    getMessage(): string {
        return this.result.message;
    }

    titleModify(event: Event): void {
        console.log("Modificando title");
        this.title = (<HTMLInputElement>event.target).value
    }
}

export default PeopleComponent