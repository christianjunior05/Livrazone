import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InscriptionCComponent } from './inscription-c.component';

describe('InscriptionCComponent', () => {
  let component: InscriptionCComponent;
  let fixture: ComponentFixture<InscriptionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InscriptionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InscriptionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
