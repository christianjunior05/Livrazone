import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConnexionCComponent } from './connexion-c.component';

describe('ConnexionCComponent', () => {
  let component: ConnexionCComponent;
  let fixture: ComponentFixture<ConnexionCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConnexionCComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConnexionCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
