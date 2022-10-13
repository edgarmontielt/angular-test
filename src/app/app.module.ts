import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import NavComponent from './components/navigation/nav.component';
import PeopleComponent from './people/people.component';
import { PersonComponent } from './person/person.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    PersonComponent,
    NavComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
