import { Component } from '@angular/core';
import { StepperService } from 'src/app/core/services/stepper.service';

@Component({
  selector: 'app-back-continue-buttons',
  templateUrl: './back-continue-buttons.component.html',
  styleUrls: ['./back-continue-buttons.component.scss'],
})
export class BackContinueButtonsComponent {
  constructor(public stepperService: StepperService) {}
}
