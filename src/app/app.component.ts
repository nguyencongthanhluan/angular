import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from './core/services/authenication.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private auth: AuthenicationService) {}
  ngOnInit() {
    this.auth.initCurrentUser();
  }
  title = 'fe47-angular';
}
