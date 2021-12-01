import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MAinDrahimComponent } from './main-drahim.component';

describe('MAinDrahimComponent', () => {
  let component: MAinDrahimComponent;
  let fixture: ComponentFixture<MAinDrahimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MAinDrahimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MAinDrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
