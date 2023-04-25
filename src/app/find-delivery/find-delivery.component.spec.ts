import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindDeliveryComponent } from './find-delivery.component';

describe('FindDeliveryComponent', () => {
  let component: FindDeliveryComponent;
  let fixture: ComponentFixture<FindDeliveryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FindDeliveryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FindDeliveryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
