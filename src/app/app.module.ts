import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import NavComponent from './components/navigation/nav.component';
import HomeLayout from './layouts/home/home.component';
import PeopleComponent from './people/people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    HomeLayout,
    AppComponent,
    PeopleComponent,
    PersonComponent,
    NavComponent
  ],
  imports: [
    BrowserModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
