import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSelectPageComponent } from './flight-select-page.component';

describe('FlightSelectPageComponent', () => {
  let component: FlightSelectPageComponent;
  let fixture: ComponentFixture<FlightSelectPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlightSelectPageComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(FlightSelectPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
