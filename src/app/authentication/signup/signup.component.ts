import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthenicationService } from 'src/app/core/services/authenication.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent implements OnInit {
  @ViewChild('signupForm') signupForm: NgForm;

  constructor(private auth: AuthenicationService) {}

  ngOnInit(): void {}

  checkDirtyForm() {
    return this.signupForm.dirty;
  }

  xuLyDangKy(signupForm: NgForm) {
    // kiểm tra form có hợp lệ hay không
    if (signupForm.invalid) return;
    // call Api đăng ký
    console.log(signupForm.value);
    this.auth.dangKy(signupForm.value).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => console.log(err.error),
      complete: () => console.log('Đăng ký thành công'),
    });
  }
}
