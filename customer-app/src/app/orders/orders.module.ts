import { NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrderListComponent } from './order-list/order-list.component';
import { ProductOrdersComponent } from './product-orders/product-orders.component';
import { ColorListComponent } from './product-orders/components/color-list/color-list.component';
import { ProductComponent } from './product-orders/components/product/product.component';
import { ProductFilterComponent } from './product-orders/components/product-filter/product-filter.component';
import { ProductsListComponent } from './product-orders/components/products-list/products-list.component';
import { ShoppingCartComponent } from './product-orders/components/shopping-cart/shopping-cart.component';
import { ProductsDetailsComponent } from './product-orders/components/product-details/product-details.component';
import {ProductsService} from './services/products.service';
import {CartService} from './services/cart.service';


@NgModule({
  imports: [
    CommonModule,
    OrdersRoutingModule
  ],
  declarations: [OrderListComponent, ProductOrdersComponent, ColorListComponent, ProductComponent, ProductFilterComponent, ProductsListComponent, ShoppingCartComponent, ProductsDetailsComponent],
  providers: [ProductsService, CartService, Location]
})
export class OrdersModule { }

