import { Injectable } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NavigateService {
  isMainPageCurrent$ = new BehaviorSubject<boolean>(true);

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.isMainPageCurrent$.next(event.url === '/');
      }
    });
  }
}
