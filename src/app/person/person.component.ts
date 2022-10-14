import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  private name = "Edgar";
  lastName = "Montiel";
  age = 20;

  ngOnInit(): void {
  }

  getName(): string {
    return this.name
  }

  setName(name: string): void {
    this.name = name
  }

}
