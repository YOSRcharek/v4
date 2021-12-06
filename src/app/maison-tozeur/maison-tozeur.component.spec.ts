import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonTozeurComponent } from './maison-tozeur.component';

describe('MaisonTozeurComponent', () => {
  let component: MaisonTozeurComponent;
  let fixture: ComponentFixture<MaisonTozeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonTozeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonTozeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
