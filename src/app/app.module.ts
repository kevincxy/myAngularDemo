import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
    import { WelcomeComponent } from './components/home/welcome/welcome.component';
    import { SettingsComponent } from './components/home/settings/settings.component';
import { NewsComponent } from './components/news/news.component';
    import { ListComponent } from './components/news/list/list.component';
    import { HotspotComponent } from './components/news/hotspot/hotspot.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NewsComponent,
    ProductComponent,
    WelcomeComponent,
    SettingsComponent,
    ListComponent,
    HotspotComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
