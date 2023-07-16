import { Component, OnInit, NgZone } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
})
export class ProductFormComponent implements OnInit {
  product: Product = {
    productId: 0,
    name: '',
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private ngZone: NgZone
  ) {}

  ngOnInit() {}

  saveProduct() {
    if (this.product.productId === 0) {
      this.productService.addProduct(this.product).subscribe(
        () => {
          console.log('Product added successfully');
          // Reset the form
          this.product = {
            productId: 0,
            name: '',
            price: 0,
          };
          // Redirect to product list page
          this.ngZone.run(() => {
            this.router.navigate(['/products']);
          });
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    } else {
      this.productService.updateProduct(this.product).subscribe(
        () => {
          console.log('Product updated successfully');
          // Reset the form
          this.product = {
            productId: 0,
            name: '',
            price: 0,
          };
          // Redirect to product list page
          this.ngZone.run(() => {
            this.router.navigate(['/products']);
          });
        },
        (error) => {
          console.log('Error:', error);
        }
      );
    }
  }
}
