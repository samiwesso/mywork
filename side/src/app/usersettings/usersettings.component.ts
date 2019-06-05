import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-usersettings',
  templateUrl: './usersettings.component.html',
  styleUrls: ['./usersettings.component.css']
})
export class UsersettingsComponent implements OnInit {

  constructor(private router: Router, private cookieService: CookieService) { }

  isLoggedIn: boolean = this.cookieService.check('isLoggedIn')

  ngOnInit() {
    if(this.isLoggedIn !== true) {
      this.router.navigateByUrl('/login')
    }
  }

  @Input('parentSignedIn') public SignedIn:boolean;

  logout() {
    this.isLoggedIn = false;
    this.cookieService.deleteAll()
    this.router.navigateByUrl('/')
  }

}