import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailTozComponent } from './detail-toz.component';

describe('DetailTozComponent', () => {
  let component: DetailTozComponent;
  let fixture: ComponentFixture<DetailTozComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailTozComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailTozComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
