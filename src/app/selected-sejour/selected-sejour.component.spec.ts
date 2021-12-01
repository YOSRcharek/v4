import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectedSejourComponent } from './selected-sejour.component';

describe('SelectedSejourComponent', () => {
  let component: SelectedSejourComponent;
  let fixture: ComponentFixture<SelectedSejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectedSejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectedSejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
