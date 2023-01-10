import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import CalculatorComponent from './calculator/calculator.component';
import NavComponent from './components/navigation/nav.component';
import HomeLayout from './layouts/home/home.component';
import PeopleComponent from './people/people.component';
import { PersonComponent } from './people/person/person.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MaterialExampleModule } from './material/material.module';
import InputComponent from '../app/ui/material/input.component';
import SearchComponent from '../app/search/search.component';
import FooterComponent from './components/footer/footer.component';
import DocumentComponent from './ui/xlsx/doc.component';
import { ExcelService } from './services/xlsx/excel.service';
import { CollapseModule } from './collapse/collapse.module';

@NgModule({
  declarations: [
    HomeLayout,
    AppComponent,
    PeopleComponent,
    PersonComponent,
    CalculatorComponent,
    NavComponent,
    InputComponent,
    SearchComponent,
    FooterComponent,
    DocumentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    MaterialExampleModule,
    HttpClientModule,
    CollapseModule,
  ],
  providers: [ExcelService],
  bootstrap: [AppComponent],
})
export class AppModule {}
