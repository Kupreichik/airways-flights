import { Component } from '@angular/core';
import { NavigateService } from './core/services/navigate.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isMainPage = true;
  constructor(private urlObserver: NavigateService) {
    this.urlObserver.isMainPageCurrent$.subscribe((val) => {
      this.isMainPage = val;
    });
  }
}
