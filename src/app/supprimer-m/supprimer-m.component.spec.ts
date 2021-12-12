import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupprimerMComponent } from './supprimer-m.component';

describe('SupprimerMComponent', () => {
  let component: SupprimerMComponent;
  let fixture: ComponentFixture<SupprimerMComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupprimerMComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupprimerMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
