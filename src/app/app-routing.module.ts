//配置路由模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NewsComponent } from './components/news/news.component';
import { ProductComponent } from './components/product/product.component';
import { WelcomeComponent } from './components/home/welcome/welcome.component';
import { SettingsComponent } from './components/home/settings/settings.component';
import { ListComponent } from './components/news/list/list.component';
import { HotspotComponent } from './components/news/hotspot/hotspot.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';



const routes: Routes = [
  {
    path:"home",component:HomeComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'settings',component:SettingsComponent},
      {path:"**",redirectTo:"welcome"}
    ]
  },
  { 
    path:"news",component:NewsComponent,
    children:[
      {path:'hotspot',component:HotspotComponent},
      {path:'list',component:ListComponent},
      {path:"**",redirectTo:"hotspot"}
    ]
  },
  {path:"product",component:ProductComponent},
  {path:"productcontent",component:ProductcontentComponent},
  //匹配不到的时候直接跳转到home
  {
    path:"**",/*任意路由*/
    //component:HomeComponent
    redirectTo:"home"
  }
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
