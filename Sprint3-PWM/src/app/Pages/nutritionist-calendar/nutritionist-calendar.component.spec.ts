import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionistCalendarComponent } from './nutritionist-calendar.component';

describe('NutritionistCalendarComponent', () => {
  let component: NutritionistCalendarComponent;
  let fixture: ComponentFixture<NutritionistCalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NutritionistCalendarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionistCalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
