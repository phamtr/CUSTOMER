import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ProductsService} from '../../../services/products.service';
import {Product} from '../../../classes/product';
import {CartService} from '../../../services/cart.service';

@Component({
  selector: 'app-products-details',
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.css']
})
export class ProductsDetailsComponent implements OnInit {

  public product: Product = {};

  constructor(private route: ActivatedRoute
    , private router: Router
    , private productsService: ProductsService
    , private cartService: CartService) {
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.productsService
        .getProduct(id)
        .subscribe(_ => this.product = _)
    });
  }

  public addToCart(product: Product) {
    this.cartService.addToCart(product);
    this.router.navigateByUrl('/');
  }

}
