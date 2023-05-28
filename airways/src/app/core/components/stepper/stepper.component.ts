import { Directionality } from '@angular/cdk/bidi';
import { CdkStepper, STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { StepperService } from '../../services/stepper.service';

@Component({
  selector: 'app-stepper',
  templateUrl: './stepper.component.html',
  styleUrls: ['./stepper.component.scss'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: { displayDefaultIndicatorType: false, linear: false },
    },
  ],
})
export class StepperComponent extends CdkStepper implements OnInit {
  @ViewChild('stepper')
  stepIndexSubscription!: Subscription;
  currentStepIndex = 0;

  constructor(
    dir: Directionality,
    changeDetectorRef: ChangeDetectorRef,
    stepper: ElementRef,
    private stepService: StepperService,
  ) {
    super(dir, changeDetectorRef, stepper);
  }

  ngOnInit(): void {
    this.stepService.stepIndex$.subscribe((index) => {
      this.currentStepIndex = index;
    });
  }
}
