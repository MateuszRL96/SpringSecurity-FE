/* eslint-disable prettier/prettier */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'produkty',
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule,
      ),
  },
  {
    path: 'administracja',
    loadChildren: () =>
      import('./modules/administration/administration.module').then(
        (m) => m.AdministrationModule,
      ),
  },
  { path: 'questions',
    loadChildren: () =>
    import('./modules/core/questions/questions.module').then(
      (m) => m.QuestionsModule,
    ),
    //component: QuestionsComponent 
  } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
