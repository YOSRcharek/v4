import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MtunisComponent } from './mtunis.component';

describe('MtunisComponent', () => {
  let component: MtunisComponent;
  let fixture: ComponentFixture<MtunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MtunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MtunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
