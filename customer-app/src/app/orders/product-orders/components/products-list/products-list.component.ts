import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product, ProductFilter} from '../../../classes/product';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsListComponent implements OnInit {

  @Input() public items: Product[] = [];

  public readonly filters: ProductFilter[] = [
    <ProductFilter>{color: 'blue'},
    <ProductFilter>{color: 'green'},
    <ProductFilter>{color: 'gray'},
  ];

  public activeFilters: ProductFilter[] = [];

  constructor() {
  }

  ngOnInit() {
  }

  public itemsAfterFilter(): Product[] {
    return this.items.filter((item: Product) => {
      const matchesActiveFilter: boolean = this.activeFilters.reduce((prev, curr) => {
        if (item.colors.includes(curr.color)) {
          return prev && true;
        } else {
          return false;
        }
      }, true);

      return matchesActiveFilter;
    });
  }

  public updateActivatedFilters(filters: ProductFilter[]) {
    this.activeFilters = filters;
  }

}
