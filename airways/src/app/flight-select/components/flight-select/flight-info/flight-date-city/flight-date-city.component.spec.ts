import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightDateCityComponent } from './flight-date-city.component';

describe('FlightDateCityComponent', () => {
  let component: FlightDateCityComponent;
  let fixture: ComponentFixture<FlightDateCityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightDateCityComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightDateCityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
