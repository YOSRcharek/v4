import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonAinDrahimComponent } from './maison-ain-drahim.component';

describe('MaisonAinDrahimComponent', () => {
  let component: MaisonAinDrahimComponent;
  let fixture: ComponentFixture<MaisonAinDrahimComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonAinDrahimComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonAinDrahimComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
