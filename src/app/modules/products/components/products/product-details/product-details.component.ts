/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Product } from 'src/app/modules/core/models/product.model';
import { ProductsService } from 'src/app/modules/core/services/products.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product: Product | null = null;
  parameters: { [key: string]: string } | null = null;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ) {}
  ngOnInit(): void {
    this.route.paramMap
      .pipe(
        switchMap((paramMap) => {
          const [name, date] = (paramMap.get('id') as string).split('-');
          return this.productsService.getProduct(name, date);
        }),
      )

      .subscribe({
        next: (product) => {
          this.product = { ...product };
          try {
            this.parameters = JSON.parse(product.parameters);
          } catch (e) {
            this.parameters = null;
          }
        },
      });
  }

  getProcessedImageUrl(imageUrl: string): string {
    const url = new URL(imageUrl);
    return url.searchParams.get('uuid') || '';
  }
}
