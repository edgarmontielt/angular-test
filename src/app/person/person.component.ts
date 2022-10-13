import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  @Input() value: string = "";
  @Input() isLog: boolean = false
  name: string = "Edgar"

  constructor() { }

  ngOnInit(): void {
  }

}
