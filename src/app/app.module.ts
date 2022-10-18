import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import CalculatorComponent from './calculator/calculator.component';
import NavComponent from './components/navigation/nav.component';
import HomeLayout from './layouts/home/home.component';
import PeopleComponent from './people/people.component';
import { PersonComponent } from './person/person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { MaterialExampleModule } from './material/material.module';
import InputComponent  from '../app/ui/material/input.component'

@NgModule({
  declarations: [
    HomeLayout,
    AppComponent,
    PeopleComponent,
    PersonComponent,
    CalculatorComponent,
    NavComponent,
    InputComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
