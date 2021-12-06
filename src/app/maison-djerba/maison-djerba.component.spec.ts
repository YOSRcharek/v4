import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonDjerbaComponent } from './maison-djerba.component';

describe('MaisonDjerbaComponent', () => {
  let component: MaisonDjerbaComponent;
  let fixture: ComponentFixture<MaisonDjerbaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonDjerbaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonDjerbaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
