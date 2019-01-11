import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { routerNgProbeToken } from '@angular/router/src/router_module';

@Component({
  selector: 'app-page-user-logout',
  templateUrl: './page-user-logout.component.html',
  styleUrls: ['./page-user-logout.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageUserLogoutComponent implements OnInit {

  constructor(
    private auth: AuthService,
    private route: Router
  ) { }

  ngOnInit() {
    this.auth.destroySession();
    this.backToHome();
  }

  backToHome() {
    this.route.navigate(['/']);
  }

}
