import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcontent',
  templateUrl: './productcontent.component.html',
  styleUrls: ['./productcontent.component.css']
})
export class ProductcontentComponent implements OnInit {

  constructor( public router:ActivatedRoute) { }

  ngOnInit() {
  //  console.log(this.router.queryParams);
   this.router.queryParams.subscribe((data)=>{
      console.log(data);
   });
  }

}
