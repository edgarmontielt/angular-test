import { Component, OnInit, Input } from '@angular/core';
import Questions from '../../types';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['../../collapse.component.css'],
})
class QuestionComponent implements OnInit {
  @Input() item: Questions | any = {};

  public view: boolean = false;
  ngOnInit(): void {}

  viewAnswer(): void {
    if (this.view) {
      this.view = false;
    } else {
      this.view = true;
    }
  }
}

export default QuestionComponent;
