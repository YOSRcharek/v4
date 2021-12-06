import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaisonTunisComponent } from './maison-tunis.component';

describe('MaisonTunisComponent', () => {
  let component: MaisonTunisComponent;
  let fixture: ComponentFixture<MaisonTunisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MaisonTunisComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MaisonTunisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
