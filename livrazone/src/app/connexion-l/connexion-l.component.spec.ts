import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionLComponent } from './connexion-l.component';

describe('ConnexionLComponent', () => {
  let component: ConnexionLComponent;
  let fixture: ComponentFixture<ConnexionLComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionLComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
