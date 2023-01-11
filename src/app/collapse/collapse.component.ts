import { Component, OnInit, Output } from '@angular/core';
import questions from '../../data/questions.json';
import Questions from './types';

@Component({
  selector: 'app-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.css'],
})
class CollapseComponent implements OnInit {

  public questionsArray: Questions[] = [];
  view: boolean = false;

  ngOnInit(): void {
    this.questionsArray = questions;
    console.log(questions);
  }

  viewAnswer(id: number) {
    console.log(id);
  }

  viewAllAnswers(): void {
    if (this.view) {
      this.view = false;
    } else {
      this.view = true;
    }
  }
}

export default CollapseComponent;
