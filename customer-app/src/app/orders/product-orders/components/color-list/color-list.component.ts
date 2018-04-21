import { Component, OnInit, Input } from '@angular/core';
import {ProductColor} from '../../../classes/product';

@Component({
  selector: 'app-color-list',
  templateUrl: './color-list.component.html',
  styleUrls: ['./color-list.component.css']
})
export class ColorListComponent implements OnInit {

  @Input() colors: ProductColor[] = [];

  constructor() { }

  ngOnInit() {
  }

}
