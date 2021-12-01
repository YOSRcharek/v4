import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailAinComponent } from './detail-ain.component';

describe('DetailAinComponent', () => {
  let component: DetailAinComponent;
  let fixture: ComponentFixture<DetailAinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailAinComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailAinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
