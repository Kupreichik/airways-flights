import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SummaryTotalItemComponent } from './summary-total-item.component';

describe('SummaryTotalItemComponent', () => {
  let component: SummaryTotalItemComponent;
  let fixture: ComponentFixture<SummaryTotalItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SummaryTotalItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SummaryTotalItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
