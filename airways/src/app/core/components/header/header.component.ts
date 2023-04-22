import { Component, OnDestroy } from '@angular/core';
import { BreakpointObserverService } from '../../services/breakpoint-observer.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnDestroy {
  currencies = ['EUR', 'USA', 'RUB', 'PLS'];
  dateFormats = ['MM/dd/yyyy', 'dd/MM/yyyy', 'yyyy/dd/MM', 'yyyy/MM/dd'];
  //these variables probably will be moved to the store
  currency = this.currencies[2];
  dateFormat = this.dateFormats[1];

  currentScreen!: string;
  currentScreenSubscription!: Subscription;

  constructor(private breakpointObserver: BreakpointObserverService) {
    this.currentScreenSubscription = this.breakpointObserver.currentScreenSize$.subscribe(
      (size) => (this.currentScreen = size),
    );
  }

  ngOnDestroy(): void {
    this.currentScreenSubscription.unsubscribe();
  }
}
