import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MHammametComponent } from './mhammamet.component';

describe('MHammametComponent', () => {
  let component: MHammametComponent;
  let fixture: ComponentFixture<MHammametComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MHammametComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MHammametComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
