import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/cart/services/cart.service';
import { FlightSelectService } from 'src/app/flight-select/services/flight-select.service';
import { PassengersService } from 'src/app/flight-select/services/passengers.service';
import { AuthService } from '../../../auth/services/auth.service';
import { expandHeader } from '../../animations/animations';
import { HeaderHeight, ScreenSizes, TPrice } from '../../models';
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
  currencies = ['eur', 'usd', 'rub', 'pln'];
  dateFormats = ['MM/dd/yyyy', 'dd/MM/yyyy', 'yyyy/dd/MM', 'yyyy/MM/dd'];
  currency!: TPrice;
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
    public authService: AuthService,
    private cartService: CartService,
    private flightSelectService: FlightSelectService,
    private passengersService: PassengersService,
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
    this.searchDataService.isOneWay = false;
    this.searchDataService.startDate = new Date();
    this.searchDataService.endDate = new Date(new Date().setDate(new Date().getDate() + 7));
    this.searchDataService.origin = '';
    this.searchDataService.destination = '';
    this.searchDataService.passengers = 1;
    this.searchDataService.originName = '';
    this.searchDataService.destinationName = '';
    this.searchDataService.passengersCategories = {
      Adults: 1,
      Child: 0,
      Infant: 0,
    };

    this.flightSelectService.isValid$.next(false);
    this.passengersService.isValidPageSource$.next(false);
    this.passengersService.deletePassengersList();

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

  logout() {
    this.authService.logout().subscribe(() => {
      this.router.navigate(['']);
    });
  }

  getCartCount() {
    return this.cartService.getCartCount();
  }
}
