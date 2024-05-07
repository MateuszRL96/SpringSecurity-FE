/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { QuestionsModule } from './questions.module';
import { QuestionsDetailsComponent } from './questions-details/questions-details.component';

const routes: Routes = [
  { path: '/questions', component: QuestionsModule },
  { path: '/questions:id', component: QuestionsDetailsComponent },
];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class QuestionsRoutingModule {}
