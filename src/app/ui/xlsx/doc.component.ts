import { Component, OnInit } from '@angular/core';
import President from 'src/app/models/president';
import { ExcelService } from 'src/app/services/xlsx/excel.service';

@Component({
  selector: 'app-doc-xlsx',
  templateUrl: './doc.component.html',
})
class DocumentComponent {
  public Title: string = 'Documents';
  rows: President[] = [
    { ID: 0, Name: 'Edgar Montiel', Address: "Example2 2345"},
    { ID: 1, Name: 'Juan Perez', Address: "Example 207" },
  ];

  constructor(private excelService: ExcelService) {}

  /* get state data and export to XLSX */
  onSave(): void {
    this.excelService.exportAsExcelFile(this.rows, 'sample');
  }
}

export default DocumentComponent;
