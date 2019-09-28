import { Component, OnInit } from '@angular/core';
import { WelcomeComponent } from '../../components/home/welcome/welcome.component';
import { SettingsComponent } from '../../components/home/settings/settings.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
