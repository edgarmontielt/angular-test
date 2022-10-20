import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import data from '../../../data/products.json'

@Component({
  selector: 'app-input-component',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
class InputComponent implements OnInit {
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]> | undefined;
  products: object = data

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map((value) => this._filter(value || ''))
    );
    console.log(data)
  }

  private _filter(value: string): string[] {
    const filteredValue = value.toUpperCase();

    return this.options.filter((option) =>
      option.toUpperCase().includes(filteredValue)
    );
  }

  log(): void{
    console.log("Hello");
  }
}

export default InputComponent;
