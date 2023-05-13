import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StepperService } from 'src/app/core/services/stepper.service';

@Component({
  selector: 'app-back-continue-buttons',
  templateUrl: './back-continue-buttons.component.html',
  styleUrls: ['./back-continue-buttons.component.scss'],
})
export class BackContinueButtonsComponent {
  constructor(private stepperService: StepperService, private router: Router) {}

  prevStep() {
    const currentStepIndex = this.stepperService.getStepIndex();
    const newStepIndex = currentStepIndex - 1;
    if (newStepIndex >= 0) {
      this.stepperService.setStepIndex(newStepIndex);
    }
    if (newStepIndex < 0) this.router.navigate(['/']);
  }

  nextStep() {
    const currentStepIndex = this.stepperService.getStepIndex();
    const newStepIndex = currentStepIndex + 1;
    this.stepperService.setStepIndex(newStepIndex);
  }

  showButtons(): boolean {
    const currentStepIndex = this.stepperService.getStepIndex();
    return currentStepIndex === 2;
  }
}
