import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtrosenlacesComponent } from './otrosenlaces.component';

describe('OtrosenlacesComponent', () => {
  let component: OtrosenlacesComponent;
  let fixture: ComponentFixture<OtrosenlacesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtrosenlacesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtrosenlacesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
