import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackContinueButtonsComponent } from './back-continue-buttons.component';

describe('BackContinueButtonsComponent', () => {
  let component: BackContinueButtonsComponent;
  let fixture: ComponentFixture<BackContinueButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackContinueButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackContinueButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
