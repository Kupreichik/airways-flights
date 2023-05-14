import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  private stepIndexSubject = new BehaviorSubject<number>(0);
  stepIndex$ = this.stepIndexSubject.asObservable();

  constructor(private router: Router) {
    this.stepIndex$.subscribe((stepIndex) => {
      const path = this.getPathForStepIndex(stepIndex);
      if (path) {
        this.router.navigate([path]);
      }
    });
  }

  setStepIndex(index: number) {
    this.stepIndexSubject.next(index);
  }

  getStepIndex(): number {
    return this.stepIndexSubject.value;
  }

  private getPathForStepIndex(stepIndex: number): string | null {
    switch (stepIndex) {
      case 0:
        return '/select';
      case 1:
        return '/passengers';
      case 2:
        return '/summary';
      default:
        return null;
    }
  }
}
