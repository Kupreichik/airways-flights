import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { expandHeader } from '../../animations/animations';
import { HeaderHeight, ScreenSizes } from '../../models';
import { BreakpointObserverService } from '../../services/breakpoint-observer.service';
import { NavigateService } from '../../services/navigate.service';
import { SearchDataService } from '../../services/search-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  animations: [expandHeader],
})
export class HeaderComponent implements OnInit, OnDestroy {
  isMainPage = true;
  currencies = ['eur', 'usa', 'rub', 'pls'];
  dateFormats = ['MM/dd/yyyy', 'dd/MM/yyyy', 'yyyy/dd/MM', 'yyyy/MM/dd'];
  currency!: string;
  dateFormat!: string;
  currentScreen!: string;
  currentScreenSubscription!: Subscription;
  isHeaderExpanded = false;
  headerHeight = HeaderHeight.initial;
  settingsVisibility!: boolean;
  isMainPageCurrentSubscription!: Subscription;

  constructor(
    private router: Router,
    private breakpointObserver: BreakpointObserverService,
    private urlObserver: NavigateService,
    private searchDataService: SearchDataService,
    iconRegistry: MatIconRegistry,
    sanitizer: DomSanitizer,
    public dialog: MatDialog,
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
          this.headerHeight = HeaderHeight.initial;
          this.isHeaderExpanded = false;
        }
        if (!this.isHeaderExpanded) this.settingsVisibility = !this.isSmallScreen();
      },
    );

    this.isMainPageCurrentSubscription = this.urlObserver.isMainPageCurrent$.subscribe((val) => {
      this.isMainPage = val;
    });

    this.currency = this.searchDataService.currency;
    this.dateFormat = this.searchDataService.dateFormat;
  }

  ngOnDestroy(): void {
    this.currentScreenSubscription.unsubscribe();
    this.isMainPageCurrentSubscription.unsubscribe();
  }

  onLogoClick() {
    this.router.navigateByUrl('/');
  }

  isSmallScreen(): boolean {
    return this.currentScreen === ScreenSizes.Small || this.currentScreen === ScreenSizes.XSmall;
  }

  isLargeScreen(): boolean {
    return this.currentScreen === ScreenSizes.Large || this.currentScreen === ScreenSizes.XLarge;
  }

  toggleSettingsVisibility(): void {
    this.isHeaderExpanded = !this.isHeaderExpanded;
    this.headerHeight = this.isHeaderExpanded ? HeaderHeight.expanded : HeaderHeight.initial;
  }

  onAnimationEnd(toState: string): void {
    if (toState === HeaderHeight.expanded && this.isSmallScreen()) this.settingsVisibility = true;
  }

  onAnimationStart(toState: string): void {
    if (toState === HeaderHeight.initial && this.isSmallScreen()) this.settingsVisibility = false;
  }

  setCurrency(): void {
    this.searchDataService.currency = this.currency;
  }

  setDateFormat(): void {
    this.searchDataService.dateFormat = this.dateFormat;
  }
}
