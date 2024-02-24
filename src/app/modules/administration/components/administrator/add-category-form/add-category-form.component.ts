import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AddCategoryForm } from 'src/app/modules/core/models/forms.model';
import { CategoriesService } from 'src/app/modules/core/services/categories.service';
import { FormService } from 'src/app/modules/core/services/form.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss'],
})
export class AddCategoryFormComponent {
  addCategoryForm: FormGroup<AddCategoryForm> =
    this.formService.initAddCategoryForm();

  successMsg: string | null = null;
  errorMsg: string | null = null;

  constructor(
    private formService: FormService,
    private categoriesService: CategoriesService,
  ) {}

  onAddCategory() {
    this.categoriesService
      .addCategory(this.addCategoryForm.getRawValue())
      .subscribe({
        next: () => {
          this.successMsg = 'Poprawnie dodano kategorię.';
        },
        error: (err) => {
          this.errorMsg = err;
        },
      });
  }

  getErrorMessage(control: FormControl) {
    return this.formService.getErrorMessage(control);
  }
}
