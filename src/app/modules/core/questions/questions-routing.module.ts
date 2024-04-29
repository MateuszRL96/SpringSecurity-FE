/* eslint-disable @typescript-eslint/no-unused-vars */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes } from '@angular/router';
import { QuestionsModule } from './questions.module';

const routes: Routes = [{ path: '/questions', component: QuestionsModule }];

@NgModule({
  declarations: [],
  imports: [CommonModule],
})
export class QuestionsRoutingModule {}
