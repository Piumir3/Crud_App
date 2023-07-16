import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProducts().subscribe(
      (products) => {
        this.products = products;
      },
      (error) => {
        console.log('Error:', error);
      }
    );
  }

  deleteProduct(productId: number) {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(productId).subscribe(
        () => {
          this.getProducts();
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }
}
