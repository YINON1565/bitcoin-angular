import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
} from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../Services/user-service.service';

@Injectable({
  providedIn: 'root',
})
export class UserLoggedinGuard implements CanActivate {
  constructor(private userService: UserService, private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    let isLoggedinUser : boolean;
    this.userService.getUser().subscribe(user=> isLoggedinUser = !!user);
    if (!isLoggedinUser) this.router.navigate(['/signup']);
    return isLoggedinUser
  }
}
