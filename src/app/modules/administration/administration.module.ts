import { NgModule } from '@angular/core';

import { AdministrationRoutingModule } from './administration-routing.module';
import { AdministratorComponent } from './components/administrator/administrator.component';
import { AddCategoryFormComponent } from './components/administrator/add-category-form/add-category-form.component';
import { ManageProductsComponent } from './components/administrator/manage-products/manage-products.component';
import { SharedModule } from '../shared/shared.module';
import { DeleteProductFormComponent } from './components/administrator/manage-products/delete-product-form/delete-product-form/delete-product-form.component';
import { UploadedImagesComponent } from './components/administrator/manage-products/add-product-form/uploaded-images/uploaded-images/uploaded-images.component';
import { AddProductFormComponent } from './components/administrator/manage-products/add-product-form/add-product-form.component';

@NgModule({
  declarations: [
    AdministratorComponent,
    AddCategoryFormComponent,
    ManageProductsComponent,
    DeleteProductFormComponent,
    UploadedImagesComponent,
    AddProductFormComponent,
  ],
  imports: [SharedModule, AdministrationRoutingModule],
})
export class AdministrationModule {}
