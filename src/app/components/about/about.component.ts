import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras　} from '@angular/router'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit() {
  }
  //js跳转， 适合普通路由和动态路由
  //动态路由
  jump(){
    this.router.navigate(['/product']);
  }
  //普通路由
  gohome(){
    this.router.navigate(['/home']);
  }
  //get请求
  getproductDetail(){
    let queryParams:NavigationExtras={
      queryParams:{'pid':2}
    };
    this.router.navigate(['/product'],queryParams);
  }
}
