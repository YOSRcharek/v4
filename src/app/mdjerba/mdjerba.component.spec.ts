import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MDjerbaComponent } from './mdjerba.component';

describe('MDjerbaComponent', () => {
  let component: MDjerbaComponent;
  let fixture: ComponentFixture<MDjerbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MDjerbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MDjerbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
