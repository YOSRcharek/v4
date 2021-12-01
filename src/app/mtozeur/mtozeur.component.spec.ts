import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MTozeurComponent } from './mtozeur.component';

describe('MTozeurComponent', () => {
  let component: MTozeurComponent;
  let fixture: ComponentFixture<MTozeurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MTozeurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MTozeurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
