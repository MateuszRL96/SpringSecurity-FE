/* eslint-disable @typescript-eslint/no-explicit-any */
import { Component } from '@angular/core';
import { ImageService } from 'src/app/modules/core/services/image.service';
import { Image } from 'src/app/modules/core/models/image.model';
@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss'],
})
export class AddProductFormComponent {
  selectedFile: File | null = null;
  fileName = '';

  imageUrls: Image[] = [];
  errorImageUploadMsg: string | null = null;

  constructor(private imageService: ImageService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0] as File;

    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;
    }
  }

  uploadFile() {
    this.errorImageUploadMsg = null;
    if (this.selectedFile) {
      const formData = new FormData();
      formData.append('multipartFile', this.selectedFile);

      this.imageService.addImage(formData).subscribe({
        next: (response) => {
          //http://localhost:8888/api/v1/image?uuid=d2c190cc-8946-474e-9967-419380e8c697
          this.imageUrls = [...this.imageUrls, { ...response }];
        },
        error: (err) => {
          this.errorImageUploadMsg = err;
        },
      });
    }
  }

  setActiveImageUrls(imageArr: Image[]) {
    this.imageUrls = [...imageArr];
  }
}
