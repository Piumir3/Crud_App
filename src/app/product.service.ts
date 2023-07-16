import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Product {
  productId: number;
  name: string;
  price: number;
}

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private baseUrl = 'https://localhost:44346/api/product';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.baseUrl}/GetProduct`);
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `${this.baseUrl}/GetProductById/${productId}`
    );
  }

  addProduct(product: Product): Observable<any> {
    return this.http.post(`${this.baseUrl}/AddProduct`, product);
  }

  updateProduct(product: Product): Observable<any> {
    return this.http.put(`${this.baseUrl}/UpdateProduct`, product);
  }

  deleteProduct(productId: number): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/DeleteProduct?productId=${productId}`
    );
  }
}
