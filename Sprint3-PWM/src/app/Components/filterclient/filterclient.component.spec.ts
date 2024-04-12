import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterclientComponent } from './filterclient.component';

describe('FilterclientComponent', () => {
  let component: FilterclientComponent;
  let fixture: ComponentFixture<FilterclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
