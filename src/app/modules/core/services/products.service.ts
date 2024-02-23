/* eslint-disable prettier/prettier */
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetProductsResponse, PrimitiveProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  apiUrl = `${environment.apiUrl}/product`;

  constructor(private http: HttpClient) {}

  getProducts(
    pageIndex = 1,
    itemsPerPage = 5,
    name: string | null = null,
    sortElement: string | null = null,
    order: string | null = null,
  ): Observable<GetProductsResponse> {
    let params = new HttpParams()
      .append('_page', pageIndex)
      .append('_limit', itemsPerPage);

    if (name) {
      // const newName = encodeURIComponent(name);
      params = params.append('name_like', name);
    }

    if (sortElement) {
      // const newName = encodeURIComponent(name);
      params = params.append('_sort', sortElement);
    }

    if (order) {
      // const newName = encodeURIComponent(name);
      params = params.append('_order', order);
    }

    return this.http
      .get<PrimitiveProduct[]>(`${this.apiUrl}`, {
        observe: 'response',
        params,
      })
      .pipe(
        map((response) => {
          if (!response.body) return { products: [], totalCount: 0 };

          const totalCount = Number(response.headers.get('X-Total-Count'));

          return { products: [...response.body], totalCount };
        }),
      );
  }
}
