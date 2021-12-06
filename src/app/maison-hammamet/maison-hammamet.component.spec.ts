import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonHammametComponent } from './maison-hammamet.component';

describe('MaisonHammametComponent', () => {
  let component: MaisonHammametComponent;
  let fixture: ComponentFixture<MaisonHammametComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonHammametComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonHammametComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
