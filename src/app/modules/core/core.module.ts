/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NotifierModule } from 'angular-notifier';
import { ErrorHandlingInterceptor } from './interceptors/error-handling.interceptor';
import { MatPaginatorIntl } from '@angular/material/paginator';
import { MatPaginatorCustomIntl } from './material/mat-paginator-custom-intl';
import { QuestionFormComponent } from './components/question-form/question-form.component';

@NgModule({
  declarations: [HeaderComponent, QuestionFormComponent],
  imports: [
    SharedModule,
    HttpClientModule,
    RouterLink,
    RouterLinkActive,
    FormsModule,
  ],
  exports: [HeaderComponent, NotifierModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHandlingInterceptor,
      multi: true,
    },
    {
      provide: MatPaginatorIntl,
      useClass: MatPaginatorCustomIntl,
    },
  ],
})
export class CoreModule {}
