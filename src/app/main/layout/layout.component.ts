import { Component, OnInit } from '@angular/core';
import { AuthenicationService } from 'src/app/core/services/authenication.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  currentUser: any = null;
  constructor(private auth: AuthenicationService) {}

  ngOnInit(): void {
    this.auth.currentUser.subscribe({
      next: (result: any) => {
        this.currentUser = result;
      },
    });
  }
}
