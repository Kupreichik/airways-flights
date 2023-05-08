import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StepperService {
  stepIndex$ = new BehaviorSubject<number>(0);

  constructor(private router: Router) {}

  nextStep(): void {
    let currentIndex = this.stepIndex$.value;
    if (currentIndex < 2) this.stepIndex$.next((currentIndex += 1));
  }

  prevStep(): void {
    let currentIndex = this.stepIndex$.value;
    if (currentIndex === 0) this.router.navigateByUrl('/');
    if (currentIndex > 0) this.stepIndex$.next((currentIndex -= 1));
  }
}
