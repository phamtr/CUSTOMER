import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductsComponent } from './products.component';

@NgModule({
  imports: [
    CommonModule,
    ProductsRoutingModule
  ],
  declarations: [ProductListComponent, ProductsComponent]
})
export class ProductsModule { }
