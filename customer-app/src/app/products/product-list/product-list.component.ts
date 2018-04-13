import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
imageurl:String='';
fileToUpload;
  constructor() { }

  ngOnInit() {
      }
      handfileinput(file:FileList){
        this.fileToUpload=file.item(0);
        var reader=new FileReader();
        reader.onload=(event: any)=>{
          this.imageurl= event.target.result;
        }
        reader.readAsDataURL(this.fileToUpload);
      }
}
