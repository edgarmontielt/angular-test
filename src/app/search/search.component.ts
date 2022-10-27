import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
class SearchComponent implements OnInit {
  title: string = 'Preguntas frecuentes';
  searchQuestions$ = new Subject<string>();

  private listQuestions: string[] = [
    'Question1',
    'Test',
    'Pregunta',
    'Ejemplo',
    'Uso de la herramienta',
    'Consejos',
    'Diferencias',
    'Como crear',
    'Diseñar',
    'Especificar',
    'Usuarios',
    'Mejoras',
    'Actualización',
    'Escalabilidad',
    'Pruebas'
  ];
  public listFiltered: string[] = [];

  ngOnInit(): void {
    this.listFiltered = this.listQuestions;
    // this.filterList();
  }

  filterList(event: any): void {
    const term: string = event.target.value;
    console.log(event.target.value);
    this.listFiltered = this.listQuestions.filter(
      (item) => item.toLowerCase().indexOf(term.toLowerCase()) >= 0
    );
    // this.searchQuestions$
    //   .subscribe((term) => {
    //     console.log(term)
    //     this.listFiltered = this.listQuestions.filter(
    //       (item) => item.toLowerCase().indexOf(term.toLowerCase()) >= 0
    //     );
    //   });
  }
}

export default SearchComponent;
