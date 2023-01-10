import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import CollapseComponent from './collapse.component';
import QuestionComponent from './components/question/question.component';

@NgModule({
  declarations: [CollapseComponent, QuestionComponent],
  imports: [CommonModule],
  exports: [CollapseComponent],
})
export class CollapseModule {}
