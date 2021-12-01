import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailDjerComponent } from './detail-djer.component';

describe('DetailDjerComponent', () => {
  let component: DetailDjerComponent;
  let fixture: ComponentFixture<DetailDjerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailDjerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailDjerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
