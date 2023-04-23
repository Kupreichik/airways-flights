import { Component, OnDestroy, OnInit } from '@angular/core';
import { BreakpointObserverService } from '../../services/breakpoint-observer.service';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { expandHeader } from '../../animations/animations';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [expandHeader],
})
export class HeaderComponent implements OnInit, OnDestroy {
  currencies = ['EUR', 'USA', 'RUB', 'PLS'];
  dateFormats = ['MM/dd/yyyy', 'dd/MM/yyyy', 'yyyy/dd/MM', 'yyyy/MM/dd'];
  //these variables probably will be moved to the store
  currency = this.currencies[2];
  dateFormat = this.dateFormats[1];
  currentScreen!: string;
  currentScreenSubscription!: Subscription;
  isHeaderExpanded = false;
  headerHeight = 'initial';
  settingsVisibility!: boolean;

  constructor(
    private breakpointObserver: BreakpointObserverService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
  ) {
    iconRegistry.addSvgIcon(
      'basket',
      sanitizer.bypassSecurityTrustResourceUrl('assets/basket-icon.svg'),
    );
  }

  ngOnInit(): void {
    this.currentScreenSubscription = this.breakpointObserver.currentScreenSize$.subscribe(
      (size) => {
        this.currentScreen = size;
        if (!this.isSmallScreen()) {
          this.headerHeight = 'initial';
          this.isHeaderExpanded = false;
        }
        if (!this.isHeaderExpanded) this.settingsVisibility = !this.isSmallScreen();
      },
    );
  }

  ngOnDestroy(): void {
    this.currentScreenSubscription.unsubscribe();
  }

  isSmallScreen(): boolean {
    return this.currentScreen === 'S' || this.currentScreen === 'XS';
  }

  toggleSettingsVisibility(): void {
    this.isHeaderExpanded = !this.isHeaderExpanded;
    this.headerHeight = this.isHeaderExpanded ? 'expanded' : 'initial';
  }

  onAnimationEnd(toState: string): void {
    if (toState === 'expanded' && this.isSmallScreen()) this.settingsVisibility = true;
  }

  onAnimationStart(toState: string): void {
    if (toState === 'initial' && this.isSmallScreen()) this.settingsVisibility = false;
  }
}
