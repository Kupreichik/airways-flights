import { Injectable, OnDestroy } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Subject, takeUntil } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BreakpointObserverService implements OnDestroy {
  destroyed$ = new Subject<void>();
  currentScreenSize$ = new BehaviorSubject<string>('');

  displayNameMap = new Map([
    [Breakpoints.XSmall, 'XS'],
    [Breakpoints.Small, 'S'],
    [Breakpoints.Medium, 'M'],
    [Breakpoints.Large, 'L'],
    [Breakpoints.XLarge, 'XL'],
  ]);

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .pipe(takeUntil(this.destroyed$))
      .subscribe((result) => {
        for (const query of Object.keys(result.breakpoints)) {
          if (result.breakpoints[query]) {
            this.currentScreenSize$.next(this.displayNameMap.get(query) ?? 'Unknown');
          }
        }
      });
  }

  ngOnDestroy() {
    this.destroyed$.next();
    this.destroyed$.complete();
  }
}
