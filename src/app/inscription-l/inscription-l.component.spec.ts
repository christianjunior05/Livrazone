import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionLComponent } from './inscription-l.component';

describe('InscriptionLComponent', () => {
  let component: InscriptionLComponent;
  let fixture: ComponentFixture<InscriptionLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
