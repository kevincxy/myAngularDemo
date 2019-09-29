import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  list:any[]=[];
  constructor() { 
   
  }

  ngOnInit() {
    for(let i=0;i<10;i++){
      this.list.push("这是第"+i+"个商品");
      console.log("这是第"+i+"个商品");
    }
  }

}
