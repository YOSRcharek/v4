import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrompHotelComponent } from './promp-hotel.component';

describe('PrompHotelComponent', () => {
  let component: PrompHotelComponent;
  let fixture: ComponentFixture<PrompHotelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrompHotelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrompHotelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
