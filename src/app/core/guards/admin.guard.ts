import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    // dùng để bảo vệ route khi người dùng muốn truy cập vào
    // nếu return về true => cho phép truy cập vào
    const userInfo = localStorage.getItem('userInfo');
    if (userInfo) {
      const { maLoaiNguoiDung } = JSON.parse(userInfo);
      if (maLoaiNguoiDung === 'QuanTri') {
        // là admin
        return true;
      }
      // đã đăng nhập nhưng maLoaiNguoiDung !== QuanTri
      // => Redirect người dùng về Homepage
      this.router.navigate(['/']);
      return false;
    }
    // chưa đăng nhập => Redirect về trang signin
    this.router.navigate(['/signin']);
    return true;
  }
}
