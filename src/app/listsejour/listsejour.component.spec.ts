import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListsejourComponent } from './listsejour.component';

describe('ListsejourComponent', () => {
  let component: ListsejourComponent;
  let fixture: ComponentFixture<ListsejourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListsejourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListsejourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
